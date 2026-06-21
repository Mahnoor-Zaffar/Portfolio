/**
 * Generates optimized portrait variants from the source JPG.
 * Run with: npm run optimize:images
 *
 * Outputs AVIF + WebP + a recompressed JPG fallback alongside the source.
 * The original full-resolution file is preserved in _legacy/assets/images/.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public/images/personal.jpg");
const base = join(root, "public/images/personal");

const WIDTH = 864; // matches the rendered portrait at ~2x for retina

async function run() {
  const input = sharp(src).resize({ width: WIDTH, withoutEnlargement: true });

  await input.clone().avif({ quality: 55 }).toFile(`${base}.avif`);
  await input.clone().webp({ quality: 74 }).toFile(`${base}.webp`);
  await input.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(`${base}.opt.jpg`);

  console.log("Generated personal.avif, personal.webp, personal.opt.jpg");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
