#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const galleryDir = path.join(root, 'public', 'gallery');
const thumbsDir = path.join(galleryDir, 'thumbs');

async function fileExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function listImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const exts = new Set(['.jpg', '.jpeg', '.png']);
  return entries.filter(d => d.isFile() && exts.has(path.extname(d.name).toLowerCase())).map(d => d.name);
}

async function main() {
  const files = await listImages(galleryDir);
  const manifest = {};
  for (const file of files) {
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
  await fs.writeFile(outPath, JSON.stringify(manifest, null, 2));
}

main().catch(err => { console.error(err); process.exit(1); });

