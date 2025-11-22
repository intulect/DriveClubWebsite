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
// Only copy if not running in CI (GitHub Actions will deploy from dist directly)
const isCI = process.env.CI === 'true';
if (!isCI) {
  console.log('Copying built files to root (local deployment)...');
  copyDir(distDir, rootDir);
} else {
  console.log('Skipping root copy - GitHub Actions will deploy from dist/');
}

// Explicitly copy index.html to ensure it's overwritten (only if not in CI)
if (!isCI) {
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
}

if (!isCI) {
  console.log('✓ Copied all dist files to root');
}

// Ensure CNAME exists in dist (for GitHub Actions deployment)
const distCnamePath = join(distDir, 'CNAME');
if (existsSync(cnamePath)) {
  copyFileSync(cnamePath, distCnamePath);
  console.log('✓ Copied CNAME to dist/');
} else if (!existsSync(distCnamePath)) {
  // Create CNAME if it doesn't exist
  writeFileSync(distCnamePath, 'www.drivecityrp.net\n', 'utf8');
  console.log('✓ Created CNAME in dist/');
} else {
  console.log('✓ CNAME already exists in dist/');
}

// Also copy to root if not in CI
if (!isCI) {
  if (existsSync(cnamePath)) {
    console.log('✓ CNAME already exists in root');
  } else if (existsSync(join(distDir, 'CNAME'))) {
    copyFileSync(join(distDir, 'CNAME'), cnamePath);
    console.log('✓ Copied CNAME to root');
  }
}

// Create .nojekyll file in dist (for GitHub Actions)
writeFileSync(join(distDir, '.nojekyll'), '');
console.log('✓ Created .nojekyll in dist/');

// Also create in root if not in CI
if (!isCI) {
  writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll in root');
}

// Restore source index.html for next build (Vite needs the source version)
const sourceIndexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="apple-touch-icon" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DriveCity RP</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=Roboto:wght@400;500;700;900&family=UnifrakturCook:wght@700&display=swap&subset=latin,latin-ext" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

if (!isCI) {
  // Save source index.html to a temp location before overwriting
  const tempSourceHtml = join(rootDir, 'index.html.source');
  writeFileSync(tempSourceHtml, sourceIndexHtml, 'utf8');
  console.log('✓ Saved source index.html for next build');
  
  console.log('\n✓ Deployment files ready! GitHub Pages can now serve from root.');
  console.log('Note: Source index.html is saved as index.html.source for reference.');
} else {
  console.log('\n✓ Build complete! GitHub Actions will deploy from dist/ folder.');
}

