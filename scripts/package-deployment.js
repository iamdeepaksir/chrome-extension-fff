/**
 * Deployment Packaging Script
 * Compiles the project and creates a clean cloudflare-deployment.zip with index.html at root.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('1. Building production assets via vite build...');
execSync('npm run build', { stdio: 'inherit' });

console.log('2. Verifying required Cloudflare Pages deployment files in dist/...');
const requiredFiles = ['_headers', '_redirects', 'index.html', 'robots.txt', 'sitemap.xml'];
for (const file of requiredFiles) {
  const filePath = path.join('dist', file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing expected file: ${filePath}`);
  }
}

console.log('3. Creating cloudflare-deployment.zip for direct upload...');
execSync('python3 scripts/create-zip.py', { stdio: 'inherit' });
console.log('✓ Deployment ZIP ready at: cloudflare-deployment.zip');
