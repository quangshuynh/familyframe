/**
 * Generates responsive AVIF + WebP variants of every before/after pair.
 *
 * Source:  src/assets/images/{before,after}/<id>.png  (listed in manifest.json, not in git)
 * Output:  public/restorations/<id>/{before,after}-<width>.{avif,webp}
 *          public/og-image.jpg
 * Record:  src/assets/images/derivatives.json  (source hash per image, in git)
 *
 * Only images whose source PNG changed since the last run are re-encoded:
 * each source is hashed together with the encoder settings and compared
 * with derivatives.json. The originals are never modified.
 *
 *   npm run images                       rebuild changed or missing images
 *   npm run images -- --dry-run          list what would be rebuilt
 *   npm run images -- --only=15_mother_and_child[,22_boy_sky]
 *                                        force-rebuild specific pairs
 *   npm run images -- --force            rebuild everything
 */
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(root, 'src/assets/images');
const outDir = path.join(root, 'public/restorations');
const recordPath = path.join(sourceDir, 'derivatives.json');

const args = process.argv.slice(2);
const force = args.includes('--force');
const dryRun = args.includes('--dry-run');
const only = new Set(
  args
    .find((a) => a.startsWith('--only='))
    ?.slice('--only='.length)
    .split(',')
    .filter(Boolean) ?? [],
);

// Keep in sync with IMAGE_WIDTHS in src/data/restorations.ts
const WIDTHS = { portrait: [480, 768, 1080], landscape: [480, 768, 1080, 1440] };
// Gentle settings: faces, hair, fabric and film grain must survive.
const AVIF = { quality: 52, effort: 5 };
const WEBP = { quality: 78, effort: 5 };
const SETTINGS = JSON.stringify({ WIDTHS, AVIF, WEBP });

// The Open Graph image is built from this pair.
const OG_PAIR = '17_wedding_closeup';

const manifest = JSON.parse(await readFile(path.join(sourceDir, 'manifest.json'), 'utf8'));
const record = existsSync(recordPath) ? JSON.parse(await readFile(recordPath, 'utf8')) : {};

for (const id of only) {
  if (!manifest.some((entry) => entry.id === id)) throw new Error(`Unknown pair id: ${id}`);
}

const hashOf = async (file) =>
  createHash('sha256')
    .update(await readFile(file))
    .update(SETTINGS)
    .digest('hex')
    .slice(0, 16);

/** Orientation follows the restored photo, so both halves of a pair share one width set. */
async function orientationOf(entry) {
  const meta = await sharp(path.join(sourceDir, entry.after)).metadata();
  return meta.width >= meta.height ? 'landscape' : 'portrait';
}

const expectedFiles = (kind, orientation) =>
  WIDTHS[orientation].flatMap((w) => [`${kind}-${w}.avif`, `${kind}-${w}.webp`]);

let written = 0;
const rebuilt = [];

for (const entry of manifest) {
  const dir = path.join(outDir, entry.id);
  const orientation = await orientationOf(entry);

  for (const kind of ['before', 'after']) {
    const key = `${entry.id}/${kind}`;
    const src = path.join(sourceDir, entry[kind]);
    const hash = await hashOf(src);
    const files = expectedFiles(kind, orientation);
    const missing = files.some((f) => !existsSync(path.join(dir, f)));
    const stale = record[key] !== hash;
    if (!(force || only.has(entry.id) || stale || missing)) continue;

    const reason = force || only.has(entry.id) ? 'forced' : missing ? 'missing' : 'changed';
    rebuilt.push(`${key} (${reason})`);
    if (dryRun) continue;

    await mkdir(dir, { recursive: true });
    for (const width of WIDTHS[orientation]) {
      const base = path.join(dir, `${kind}-${width}`);
      const pipeline = () => sharp(src).resize({ width, withoutEnlargement: true });
      await pipeline().avif(AVIF).toFile(`${base}.avif`);
      await pipeline().webp(WEBP).toFile(`${base}.webp`);
      written += 2;
    }

    // Remove variants this kind no longer uses (e.g. after an orientation change).
    for (const file of await readdir(dir)) {
      if (file.startsWith(`${kind}-`) && !files.includes(file)) await rm(path.join(dir, file));
    }
    record[key] = hash;
  }
}

// Open Graph image: original on the left, restoration on the right.
const ogPath = path.join(root, 'public/og-image.jpg');
const ogStale = rebuilt.some((line) => line.startsWith(`${OG_PAIR}/`));
if (force || ogStale || !existsSync(ogPath)) {
  rebuilt.push('og-image.jpg');
  if (!dryRun) {
    const half = async (kind, left) =>
      sharp(path.join(sourceDir, `${kind}/${OG_PAIR}.png`))
        .resize({ width: 1200, height: 630, fit: 'cover' })
        .extract({ left, top: 0, width: 600, height: 630 })
        .toBuffer();
    const divider = await sharp({
      create: { width: 2, height: 630, channels: 3, background: '#f5f1e8' },
    })
      .png()
      .toBuffer();
    await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#161412' } })
      .composite([
        { input: await half('before', 0), left: 0, top: 0 },
        { input: await half('after', 600), left: 600, top: 0 },
        { input: divider, left: 599, top: 0 },
      ])
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(ogPath);
    written++;
  }
}

if (!dryRun) {
  const sorted = Object.fromEntries(Object.entries(record).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(recordPath, `${JSON.stringify(sorted, null, 2)}\n`);
}

if (rebuilt.length === 0) console.log('All optimized images are up to date.');
else console.log(`${dryRun ? 'Would rebuild' : 'Rebuilt'}:\n  ${rebuilt.join('\n  ')}`);
if (!dryRun) console.log(`${written} files written to public/.`);
