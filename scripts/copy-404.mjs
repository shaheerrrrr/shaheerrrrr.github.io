// GitHub Pages has no server-side rewrites. For deep links into this
// client-routed app (e.g. /projects) to survive a hard refresh, GitHub
// needs a 404.html to serve. Since vite.config.js sets base: '/', every
// asset path in index.html is domain-absolute, so a byte-for-byte copy
// resolves correctly no matter what path it was served from — the
// router then reads the real URL and renders the right page.
import { copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const distDir = path.resolve(fileURLToPath(import.meta.url), '../../dist');

await copyFile(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));

console.log('Copied dist/index.html -> dist/404.html for GitHub Pages SPA fallback.');
