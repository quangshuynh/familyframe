/**
 * Injects the server-rendered Vietnamese page into dist/index.html so the
 * site is readable (and indexable) before JavaScript loads.
 */
import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

async function replaceAsync(input, pattern, replacer) {
  const matches = [...input.matchAll(pattern)];
  const replacements = await Promise.all(matches.map((m) => replacer(...m)));
  return matches.reduce((out, m, i) => out.replace(m[0], () => replacements[i]), input);
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = path.join(root, 'dist/index.html');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = await readFile(htmlPath, 'utf8');

if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder');
}

let html = template.replace('<!--app-html-->', render());

// Inline the (small) stylesheet so first paint does not wait on a second request.
html = await replaceAsync(
  html,
  /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/g,
  async (_, href) => {
    const css = await readFile(path.join(root, 'dist', href), 'utf8');
    return `<style>${css}</style>`;
  },
);

await writeFile(htmlPath, html);
await rm(ssrDir, { recursive: true, force: true });
console.log('Prerendered dist/index.html');
