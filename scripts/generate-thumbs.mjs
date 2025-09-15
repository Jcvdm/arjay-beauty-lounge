#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const galleryDir = path.join(root, 'public', 'gallery');
const thumbsDir = path.join(galleryDir, 'thumbs');

const exts = new Set(['.jpg', '.jpeg', '.png']);
const WIDTHS = [480, 960]; // 1x and 2x preview widths

async function ensureDir(p) {
  try { await fs.mkdir(p, { recursive: true }); } catch {}
}

async function listImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter(d => d.isFile())
    .map(d => d.name)
    .filter(n => exts.has(path.extname(n).toLowerCase()));
}

async function genFor(file) {
  const base = file.replace(/\.[^.]+$/, '');
  const inputPath = path.join(galleryDir, file);
  const input = sharp(inputPath).rotate();

  for (const width of WIDTHS) {
    const suffix = width > WIDTHS[0] ? '@2x' : '';
    const outWebp = path.join(thumbsDir, `${base}${suffix}.webp`);
    const outAvif = path.join(thumbsDir, `${base}${suffix}.avif`);

    // WebP
    await input
      .clone()
      .resize({ width, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: width > WIDTHS[0] ? 68 : 72, effort: 4 })
      .toFile(outWebp);

    // AVIF
    await input
      .clone()
      .resize({ width, fit: 'inside', withoutEnlargement: true })
      .avif({ quality: width > WIDTHS[0] ? 40 : 45, effort: 4 })
      .toFile(outAvif);
  }

  console.log('✓', file, '-> thumbs/', `${base}.{webp,avif} and @2x variants`);
}

async function fileExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function writeManifest() {
  const entries = await listImages(galleryDir);
  const manifest = {};
  for (const file of entries) {
    const base = file.replace(/\.[^.]+$/, '');
    const paths = {
      webp: path.join(thumbsDir, `${base}.webp`),
      webp2x: path.join(thumbsDir, `${base}@2x.webp`),
      avif: path.join(thumbsDir, `${base}.avif`),
      avif2x: path.join(thumbsDir, `${base}@2x.avif`),
    };
    manifest[base] = {
      webp: await fileExists(paths.webp),
      webp2x: await fileExists(paths.webp2x),
      avif: await fileExists(paths.avif),
      avif2x: await fileExists(paths.avif2x),
    };
  }
  const outPath = path.join(root, 'src', 'data', 'thumbs-manifest.json');
  await ensureDir(path.dirname(outPath));
  try {
    await fs.writeFile(outPath, JSON.stringify(manifest, null, 2));
    console.log('Wrote manifest to', outPath, 'with', Object.keys(manifest).length, 'entries');
  } catch (e) {
    console.error('Error writing manifest to', outPath, e);
  }
}

async function main() {
  await ensureDir(thumbsDir);
  const files = await listImages(galleryDir);
  if (!files.length) {
    console.log('No source images found in', galleryDir);
    return;
  }

  for (const f of files) {
    try {
      await genFor(f);
    } catch (err) {
      console.error('Failed for', f, err.message);
    }
  }

  await writeManifest();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

