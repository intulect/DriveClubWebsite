import { copyFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const distDir = join(process.cwd(), 'dist');
const cnamePath = join(process.cwd(), 'CNAME');
const nojekyllPath = join(distDir, '.nojekyll');

// Copy CNAME to dist if it exists
if (existsSync(cnamePath)) {
  copyFileSync(cnamePath, join(distDir, 'CNAME'));
  console.log('✓ Copied CNAME to dist/');
}

// Create .nojekyll file
writeFileSync(nojekyllPath, '');
console.log('✓ Created .nojekyll in dist/');

