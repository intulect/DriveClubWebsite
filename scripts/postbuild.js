import { copyFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';

const distDir = join(cwd(), 'dist');
const rootDir = cwd();
const cnamePath = join(rootDir, 'CNAME');
const distCnamePath = join(distDir, 'CNAME');
const distNojekyllPath = join(distDir, '.nojekyll');

const isCI = process.env.CI === 'true';

if (isCI) {
  console.log('🚀 CI build detected');
} else {
  console.log('🏠 Local build detected');
}

// Always ensure CNAME and .nojekyll are in dist/
if (existsSync(cnamePath)) {
  copyFileSync(cnamePath, distCnamePath);
  console.log('✅ Copied CNAME to dist/');
} else if (!existsSync(distCnamePath)) {
  writeFileSync(distCnamePath, 'www.drivecityrp.net\n', 'utf8');
  console.log('✅ Created CNAME in dist/');
}

writeFileSync(distNojekyllPath, '');
console.log('✅ Created .nojekyll in dist/');

if (isCI) {
  console.log('🎉 CI build complete! Ready for GitHub Pages deployment.');
} else {
  console.log('✨ Build complete! Ready for deployment.');
}
