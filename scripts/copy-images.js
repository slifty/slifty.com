#!/usr/bin/env node

/**
 * Script to copy images from WordPress wp-content/uploads to new structure
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Temporary directory for checked out gh-pages branch
const TEMP_DIR = path.join(__dirname, '../.temp-gh-pages');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images');

/**
 * Copy directory recursively
 */
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

/**
 * Count files in directory recursively
 */
function countFiles(dir) {
  let count = 0;
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      count += countFiles(filePath);
    } else {
      count++;
    }
  });

  return count;
}

/**
 * Main copy function
 */
function copyImages() {
  console.log('Starting image copy from gh-pages branch...\n');

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

  const sourceDir = path.join(TEMP_DIR, 'wp-content', 'uploads');

  if (!fs.existsSync(sourceDir)) {
    console.error('wp-content/uploads directory not found in gh-pages branch');
    process.exit(1);
  }

  console.log('\nCounting images...');
  const totalImages = countFiles(sourceDir);
  console.log(`Found ${totalImages} images to copy\n`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('Copying images...');
  try {
    copyRecursive(sourceDir, OUTPUT_DIR);
    console.log('✓ Images copied successfully');
  } catch (error) {
    console.error('Error copying images:', error.message);
    process.exit(1);
  }

  // Cleanup temp directory
  console.log('\nCleaning up...');
  fs.rmSync(TEMP_DIR, { recursive: true, force: true });

  console.log('\n=== Copy Complete ===');
  console.log(`✓ Copied ${totalImages} images`);
  console.log(`\nImages saved to: ${OUTPUT_DIR}`);
}

// Run copy
copyImages();
