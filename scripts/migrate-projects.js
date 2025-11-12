#!/usr/bin/env node

/**
 * Migration script to convert WordPress projects from gh-pages branch to Eleventy markdown files
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
const OUTPUT_DIR = path.join(__dirname, '../src/projects');

/**
 * Extract metadata and content from WordPress project HTML
 */
function parseProjectHTML(htmlContent, filePath) {
  const $ = cheerio.load(htmlContent);

  // Extract title
  const title = $('h2.project_title.entry-title').first().text().trim() ||
                $('title').first().text().split('|')[0].trim();

  // Extract short description
  const shortDescription = $('.single-project-short-description').first().text().trim();

  // Extract long description (main content)
  const descriptionSection = $('.single-project-description').first();

  // Remove WordPress-specific elements
  descriptionSection.find('.sharedaddy').remove();
  descriptionSection.find('.jp-relatedposts').remove();
  descriptionSection.find('script').remove();

  // Get HTML content
  const descriptionHTML = descriptionSection.html() || '';

  // Convert to markdown
  let markdown = turndownService.turndown(descriptionHTML);

  // Extract project URL if available
  const projectUrl = $('.project-url a').attr('href') || '';

  // Extract featured image
  let featuredImage = '';
  const imgSrc = $('.entry-media img').first().attr('src');
  if (imgSrc) {
    featuredImage = imgSrc;
  }

  // Extract project categories (years, contexts)
  const categories = [];
  $('.project-categories a, .project-context a').each((i, el) => {
    const category = $(el).text().trim();
    if (category) {
      categories.push(category);
    }
  });

  // Extract slug from file path
  const slug = path.basename(path.dirname(filePath));

  return {
    title,
    shortDescription,
    description: markdown,
    projectUrl,
    featuredImage,
    categories,
    slug
  };
}

/**
 * Create frontmatter for project
 */
function createFrontmatter(project) {
  let frontmatter = '---\n';
  frontmatter += `title: "${project.title.replace(/"/g, '\\"')}"\n`;

  if (project.shortDescription) {
    frontmatter += `description: "${project.shortDescription.replace(/"/g, '\\"')}"\n`;
  }

  if (project.projectUrl) {
    frontmatter += `projectUrl: "${project.projectUrl}"\n`;
  }

  if (project.featuredImage) {
    frontmatter += `featuredImage: "${project.featuredImage}"\n`;
  }

  if (project.categories.length > 0) {
    frontmatter += `categories:\n`;
    project.categories.forEach(cat => {
      frontmatter += `  - ${cat}\n`;
    });
  }

  frontmatter += '---\n\n';

  return frontmatter;
}

/**
 * Find all project HTML files in gh-pages branch
 */
function findProjectFiles(baseDir) {
  const projects = [];
  const projectDir = path.join(baseDir, 'project');

  if (!fs.existsSync(projectDir)) {
    console.error('Project directory not found');
    return projects;
  }

  const slugs = fs.readdirSync(projectDir);
  slugs.forEach(slug => {
    const slugPath = path.join(projectDir, slug);
    if (!fs.statSync(slugPath).isDirectory()) return;

    const indexPath = path.join(slugPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      projects.push({
        path: indexPath,
        slug
      });
    }
  });

  return projects;
}

/**
 * Main migration function
 */
function migrateProjects() {
  console.log('Starting WordPress project migration...\n');

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

  // Find all project files
  console.log('\nFinding projects...');
  const projectFiles = findProjectFiles(TEMP_DIR);
  console.log(`Found ${projectFiles.length} projects\n`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Process each project
  let successCount = 0;
  let errorCount = 0;

  projectFiles.forEach((projectFile, index) => {
    try {
      console.log(`[${index + 1}/${projectFiles.length}] Processing: ${projectFile.slug}`);

      const htmlContent = fs.readFileSync(projectFile.path, 'utf-8');
      const project = parseProjectHTML(htmlContent, projectFile.path);

      // Create output filename
      const outputFilename = `${projectFile.slug}.md`;
      const outputPath = path.join(OUTPUT_DIR, outputFilename);

      // Create markdown file with frontmatter
      const markdownContent = createFrontmatter(project) + project.description;
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
  console.log(`✓ Successfully migrated: ${successCount} projects`);
  if (errorCount > 0) {
    console.log(`✗ Errors: ${errorCount} projects`);
  }
  console.log(`\nProjects saved to: ${OUTPUT_DIR}`);
}

// Run migration
migrateProjects();
