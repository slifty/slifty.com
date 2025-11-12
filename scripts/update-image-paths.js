#!/usr/bin/env node

/**
 * Script to update image paths in migrated content
 * Converts /wp-content/uploads/... to /assets/images/...
 */

const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '../src/posts');
const PROJECTS_DIR = path.join(__dirname, '../src/projects');

/**
 * Update image paths in a file
 */
function updateImagePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Replace WordPress image paths with new structure
  const wpContentRegex = /\/wp-content\/uploads\//g;
  if (wpContentRegex.test(content)) {
    content = content.replace(wpContentRegex, '/assets/images/');
    modified = true;
  }

  // Also handle any relative references that might exist
  const relativeWpRegex = /wp-content\/uploads\//g;
  if (relativeWpRegex.test(content)) {
    content = content.replace(relativeWpRegex, '/assets/images/');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }

  return false;
}

/**
 * Process all markdown files in a directory
 */
function processDirectory(dir, label) {
  console.log(`\nProcessing ${label}...`);

  if (!fs.existsSync(dir)) {
    console.log(`  Directory not found: ${dir}`);
    return 0;
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  let updatedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (updateImagePaths(filePath)) {
      console.log(`  ✓ Updated: ${file}`);
      updatedCount++;
    }
  });

  if (updatedCount === 0) {
    console.log('  No files needed updating');
  }

  return updatedCount;
}

/**
 * Main update function
 */
function updateAllImagePaths() {
  console.log('Starting image path updates...');

  const postsUpdated = processDirectory(POSTS_DIR, 'posts');
  const projectsUpdated = processDirectory(PROJECTS_DIR, 'projects');

  console.log('\n=== Update Complete ===');
  console.log(`✓ Updated ${postsUpdated} posts`);
  console.log(`✓ Updated ${projectsUpdated} projects`);
  console.log(`✓ Total: ${postsUpdated + projectsUpdated} files updated`);
}

// Run update
updateAllImagePaths();
