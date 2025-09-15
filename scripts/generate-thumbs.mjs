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
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

