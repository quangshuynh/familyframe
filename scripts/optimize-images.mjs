/**
 * Generates responsive AVIF + WebP variants of every before/after pair.
 *
 * Source:  src/assets/images/{before,after}/<id>.png  (listed in manifest.json)
 * Output:  public/restorations/<id>/{before,after}-<width>.{avif,webp}
 *          public/og-image.jpg
 *
 * The originals are never modified. Re-run with `npm run images` after
 * adding new pairs. Existing outputs are skipped unless --force is passed.
 */
import { existsSync } from 'node:fs';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(root, 'src/assets/images');
const outDir = path.join(root, 'public/restorations');
const force = process.argv.includes('--force');

// Keep in sync with IMAGE_WIDTHS in src/data/restorations.ts
const WIDTHS = { portrait: [480, 768, 1080], landscape: [480, 768, 1080, 1440] };

const manifest = JSON.parse(await readFile(path.join(sourceDir, 'manifest.json'), 'utf8'));
let written = 0;

for (const entry of manifest) {
  const dir = path.join(outDir, entry.id);
  await mkdir(dir, { recursive: true });

  for (const kind of ['before', 'after']) {
    const src = path.join(sourceDir, entry[kind]);
    const meta = await sharp(src).metadata();
    const orientation = meta.width >= meta.height ? 'landscape' : 'portrait';

    for (const width of WIDTHS[orientation]) {
      const base = path.join(dir, `${kind}-${width}`);
      const pipeline = () => sharp(src).resize({ width, withoutEnlargement: true });
      if (force || !existsSync(`${base}.avif`)) {
        await pipeline().avif({ quality: 52, effort: 5 }).toFile(`${base}.avif`);
        written++;
      }
      if (force || !existsSync(`${base}.webp`)) {
        await pipeline().webp({ quality: 78, effort: 5 }).toFile(`${base}.webp`);
        written++;
      }
    }
  }
  process.stdout.write('.');
}

// Open Graph image: original on the left, restoration on the right.
const ogPath = path.join(root, 'public/og-image.jpg');
if (force || !existsSync(ogPath)) {
  const pair = '17_wedding_closeup';
  const half = { width: 600, height: 630, fit: 'cover', position: 'centre' };
  const left = await sharp(path.join(sourceDir, `before/${pair}.png`))
    .resize({ width: 1200, height: 630, fit: 'cover' })
    .extract({ left: 0, top: 0, width: 600, height: 630 })
    .toBuffer();
  const right = await sharp(path.join(sourceDir, `after/${pair}.png`))
    .resize({ width: 1200, height: 630, fit: 'cover' })
    .extract({ left: 600, top: 0, width: 600, height: 630 })
    .toBuffer();
  const divider = await sharp({
    create: { width: 2, height: half.height, channels: 3, background: '#f5f1e8' },
  })
    .png()
    .toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#161412' } })
    .composite([
      { input: left, left: 0, top: 0 },
      { input: right, left: 600, top: 0 },
      { input: divider, left: 599, top: 0 },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(ogPath);
  written++;
}

console.log(`\nDone. ${written} files written to public/.`);
