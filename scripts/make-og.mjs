/**
 * Generates the social share card (Open Graph / Twitter) at public/og.png.
 * Run with: node scripts/make-og.mjs
 *
 * 1200x630 is the standard OG size. Rendered from an inline SVG so the text
 * stays crisp and on-brand (no AI-image artefacts).
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public/og.png");

const ACCENT = "#ee6f2d";
const BG = "#0a0a0a";
const INK = "#fafafa";
const MUTE = "#8a8a8a";
const LINE = "#262626";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect x="20" y="20" width="1160" height="590" rx="24" fill="none" stroke="${LINE}" stroke-width="2"/>

  <!-- MNR brand mark -->
  <rect x="80" y="80" width="120" height="120" rx="24" fill="${ACCENT}"/>
  <text x="140" y="160" font-family="Helvetica, Arial, sans-serif" font-size="52" font-weight="800"
        fill="${BG}" text-anchor="middle" letter-spacing="-1">MNR</text>

  <text x="232" y="150" font-family="ui-monospace, Menlo, monospace" font-size="26" fill="${MUTE}">
    ~/mahnoor — portfolio
  </text>

  <!-- Name -->
  <text x="80" y="350" font-family="Helvetica, Arial, sans-serif" font-size="104" font-weight="800"
        fill="${INK}" letter-spacing="-3">Mahnoor Zaffar<tspan fill="${ACCENT}">.</tspan></text>

  <!-- Role -->
  <text x="84" y="420" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="500" fill="${MUTE}">
    Full-Stack Web Developer &amp; AI Engineer
  </text>

  <!-- Domain tags -->
  <text x="84" y="512" font-family="ui-monospace, Menlo, monospace" font-size="30" fill="${ACCENT}">
    FinTech<tspan fill="${MUTE}">  ·  </tspan>HealthTech<tspan fill="${MUTE}">  ·  </tspan>Applied AI
  </text>

  <!-- URL -->
  <text x="84" y="566" font-family="ui-monospace, Menlo, monospace" font-size="26" fill="${MUTE}">
    www.mahnoorzaffar.dev
  </text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Generated public/og.png");
