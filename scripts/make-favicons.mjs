/**
 * Generates favicon / app-icon PNGs from the brand logo.
 * Run with: node scripts/make-favicons.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public/brand-source.png");
const pub = join(root, "public");

const sizes = {
  "favicon-32.png": 32,
  "favicon-180.png": 180, // apple-touch-icon
  "icon-192.png": 192,
  "icon-512.png": 512,
};

async function run() {
  for (const [name, size] of Object.entries(sizes)) {
    await sharp(src)
      .resize(size, size, { fit: "cover", position: "centre" })
      .png()
      .toFile(join(pub, name));
  }
  console.log("Generated:", Object.keys(sizes).join(", "));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
