#!/usr/bin/env node

/**
 * Migration script to convert WordPress posts from gh-pages branch to Eleventy markdown files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

// Configure Turndown for better markdown conversion
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-'
});

// Temporary directory for checked out gh-pages branch
const TEMP_DIR = path.join(__dirname, '../.temp-gh-pages');
const OUTPUT_DIR = path.join(__dirname, '../src/posts');

/**
 * Extract metadata and content from WordPress HTML
 */
function parsePostHTML(htmlContent, filePath) {
  const $ = cheerio.load(htmlContent);

  // Extract title
  const title = $('h1.title.entry-title').first().text().trim() ||
                $('title').first().text().split('|')[0].trim();

  // Extract date
  const dateString = $('abbr.date.time.published').attr('title');
  const date = dateString ? new Date(dateString) : null;

  // Extract categories
  const categories = [];
  $('span.categories a').each((i, el) => {
    const category = $(el).attr('href')?.match(/\/category\/([^\/]+)\//)?.[1];
    if (category) {
      categories.push(category);
    }
  });

  // Extract tags
  const tags = [];
  $('p.tags a').each((i, el) => {
    const tag = $(el).attr('href')?.match(/\/tag\/([^\/]+)\//)?.[1];
    if (tag) {
      tags.push(tag);
    }
  });

  // Extract content
  const contentSection = $('section.entry').first();

  // Remove WordPress-specific elements
  contentSection.find('.sharedaddy').remove();
  contentSection.find('.jp-relatedposts').remove();
  contentSection.find('script').remove();

  // Get HTML content
  const contentHTML = contentSection.html() || '';

  // Convert to markdown
  let markdown = turndownService.turndown(contentHTML);

  // Extract slug from file path
  const slug = path.basename(path.dirname(filePath));

  return {
    title,
    date,
    slug,
    categories,
    tags,
    content: markdown
  };
}

/**
 * Create frontmatter for post
 */
function createFrontmatter(post) {
  const dateStr = post.date ? post.date.toISOString().split('T')[0] : '';

  let frontmatter = '---\n';
  frontmatter += `title: "${post.title.replace(/"/g, '\\"')}"\n`;
  frontmatter += `date: ${dateStr}\n`;

  if (post.categories.length > 0) {
    frontmatter += `categories:\n`;
    post.categories.forEach(cat => {
      frontmatter += `  - ${cat}\n`;
    });
  }

  if (post.tags.length > 0) {
    frontmatter += `tags:\n`;
    post.tags.forEach(tag => {
      frontmatter += `  - ${tag}\n`;
    });
  }

  frontmatter += '---\n\n';

  return frontmatter;
}

/**
 * Find all post HTML files in gh-pages branch
 */
function findPostFiles(baseDir) {
  const posts = [];
  const years = fs.readdirSync(baseDir).filter(f => /^\d{4}$/.test(f));

  years.forEach(year => {
    const yearPath = path.join(baseDir, year);
    if (!fs.statSync(yearPath).isDirectory()) return;

    const months = fs.readdirSync(yearPath).filter(f => /^\d{2}$/.test(f));
    months.forEach(month => {
      const monthPath = path.join(yearPath, month);
      if (!fs.statSync(monthPath).isDirectory()) return;

      const slugs = fs.readdirSync(monthPath);
      slugs.forEach(slug => {
        const slugPath = path.join(monthPath, slug);
        if (!fs.statSync(slugPath).isDirectory()) return;

        const indexPath = path.join(slugPath, 'index.html');
        if (fs.existsSync(indexPath)) {
          posts.push({
            path: indexPath,
            year,
            month,
            slug
          });
        }
      });
    });
  });

  return posts;
}

/**
 * Main migration function
 */
function migrateWPosts() {
  console.log('Starting WordPress post migration...\n');

  // Clone gh-pages branch to temp directory
  console.log('Checking out gh-pages branch...');
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }

  try {
    execSync(`git clone --branch gh-pages --single-branch --depth 1 . "${TEMP_DIR}"`, {
      stdio: 'inherit'
    });
  } catch (error) {
    console.error('Error checking out gh-pages branch:', error.message);
    process.exit(1);
  }

  // Find all post files
  console.log('\nFinding posts...');
  const postFiles = findPostFiles(TEMP_DIR);
  console.log(`Found ${postFiles.length} posts\n`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Process each post
  let successCount = 0;
  let errorCount = 0;

  postFiles.forEach((postFile, index) => {
    try {
      console.log(`[${index + 1}/${postFiles.length}] Processing: ${postFile.year}/${postFile.month}/${postFile.slug}`);

      const htmlContent = fs.readFileSync(postFile.path, 'utf-8');
      const post = parsePostHTML(htmlContent, postFile.path);

      // Create output filename
      const outputFilename = `${postFile.year}-${postFile.month}-${postFile.slug}.md`;
      const outputPath = path.join(OUTPUT_DIR, outputFilename);

      // Create markdown file with frontmatter
      const markdownContent = createFrontmatter(post) + post.content;
      fs.writeFileSync(outputPath, markdownContent, 'utf-8');

      successCount++;
    } catch (error) {
      console.error(`  ERROR: ${error.message}`);
      errorCount++;
    }
  });

  // Cleanup temp directory
  console.log('\nCleaning up...');
  fs.rmSync(TEMP_DIR, { recursive: true, force: true });

  console.log('\n=== Migration Complete ===');
  console.log(`✓ Successfully migrated: ${successCount} posts`);
  if (errorCount > 0) {
    console.log(`✗ Errors: ${errorCount} posts`);
  }
  console.log(`\nPosts saved to: ${OUTPUT_DIR}`);
}

// Run migration
migrateWPosts();
