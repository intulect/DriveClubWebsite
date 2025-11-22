import { copyFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync, unlinkSync, readFileSync } from 'fs';
import { join } from 'path';

const distDir = join(process.cwd(), 'dist');
const rootDir = process.cwd();
const cnamePath = join(rootDir, 'CNAME');
const nojekyllPath = join(rootDir, '.nojekyll');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }
  
  const entries = readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      // Skip .nojekyll and CNAME as we'll handle them separately
      if (entry.name !== '.nojekyll' && entry.name !== 'CNAME') {
        copyFileSync(srcPath, destPath);
      }
    }
  }
}

// Copy all dist files to root (for GitHub Pages root deployment)
console.log('Copying built files to root...');
copyDir(distDir, rootDir);

// Explicitly copy index.html to ensure it's overwritten
const distIndexHtml = join(distDir, 'index.html');
const rootIndexHtml = join(rootDir, 'index.html');
if (existsSync(distIndexHtml)) {
  // Remove existing file first to ensure clean copy
  if (existsSync(rootIndexHtml)) {
    unlinkSync(rootIndexHtml);
  }
  // Read and write to ensure complete overwrite
  const content = readFileSync(distIndexHtml, 'utf8');
  writeFileSync(rootIndexHtml, content, 'utf8');
  console.log('✓ Copied index.html to root');
}

console.log('✓ Copied all dist files to root');

// Ensure CNAME exists in root
if (existsSync(cnamePath)) {
  console.log('✓ CNAME already exists in root');
} else if (existsSync(join(distDir, 'CNAME'))) {
  copyFileSync(join(distDir, 'CNAME'), cnamePath);
  console.log('✓ Copied CNAME to root');
}

// Create .nojekyll file in root
writeFileSync(nojekyllPath, '');
console.log('✓ Created .nojekyll in root');

console.log('\n✓ Deployment files ready! GitHub Pages can now serve from root.');

