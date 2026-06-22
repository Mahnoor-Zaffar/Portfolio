/**
 * Generates project card thumbnails in public/images/projects/.
 * Run: npm run make:thumbs
 *
 * Branded SVG cards (800×450 → WebP). Demo projects use domain-specific
 * visual motifs; backend apps use accent-coloured placeholders.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public/images/projects");

const BG = "#0a0a0a";
const INK = "#fafafa";
const MUTE = "#8a8a8a";
const LINE = "#262626";

const projects = [
  {
    slug: "nigehbaan-dastak",
    domain: "HealthTech",
    name: "Nigehbaan Dastak",
    accent: "#22c55e",
    subtitle: "Digital health records",
    motif: "health",
  },
  {
    slug: "fintrack",
    domain: "FinTech",
    name: "FinTrack",
    accent: "#3b82f6",
    subtitle: "Personal finance tracker",
    motif: "finance",
  },
  {
    slug: "vocalflux",
    domain: "Applied AI",
    name: "VocalFlux",
    accent: "#a855f7",
    subtitle: "Speech transcription & coaching",
    motif: "voice",
  },
  {
    slug: "falling-sand",
    domain: "Graphics Engine",
    name: "Falling-Sand Simulator",
    accent: "#ee6f2d",
    subtitle: "2D material physics sandbox",
    motif: "sand",
  },
  {
    slug: "rogue-lite",
    domain: "Game Engine",
    name: "Tactical Rogue-Lite",
    accent: "#eab308",
    subtitle: "Procedural maps & fog-of-war",
    motif: "dungeon",
  },
  {
    slug: "pokedex",
    domain: "Frontend",
    name: "PokéDex Card Trading",
    accent: "#ef4444",
    subtitle: "Animated card-battle UI",
    motif: "cards",
  },
];

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Simple decorative SVG per motif type. */
function motifSvg(type, accent) {
  switch (type) {
    case "health":
      return `<path d="M620 120 L660 120 L660 160 L700 160 L700 200 L660 200 L660 240 L620 240 L620 200 L580 200 L580 160 L620 160 Z" fill="${accent}" opacity="0.2"/>`;
    case "finance":
      return `<rect x="580" y="130" width="120" height="80" rx="8" fill="none" stroke="${accent}" stroke-width="2" opacity="0.35"/><path d="M600 190 L630 160 L660 175 L700 140" fill="none" stroke="${accent}" stroke-width="3" opacity="0.5"/>`;
    case "voice":
      return `<rect x="590" y="150" width="8" height="40" rx="4" fill="${accent}" opacity="0.4"/><rect x="610" y="135" width="8" height="70" rx="4" fill="${accent}" opacity="0.55"/><rect x="630" y="145" width="8" height="50" rx="4" fill="${accent}" opacity="0.45"/><rect x="650" y="125" width="8" height="90" rx="4" fill="${accent}" opacity="0.6"/><rect x="670" y="155" width="8" height="30" rx="4" fill="${accent}" opacity="0.35"/>`;
    case "sand":
      return `<circle cx="600" cy="180" r="6" fill="${accent}" opacity="0.7"/><circle cx="630" cy="200" r="5" fill="#fbbf24" opacity="0.6"/><circle cx="660" cy="170" r="7" fill="#60a5fa" opacity="0.5"/><circle cx="690" cy="210" r="5" fill="${accent}" opacity="0.65"/><circle cx="710" cy="175" r="4" fill="#f87171" opacity="0.55"/>`;
    case "dungeon":
      return `<rect x="580" y="130" width="30" height="30" fill="${accent}" opacity="0.25"/><rect x="620" y="130" width="30" height="30" fill="${accent}" opacity="0.15"/><rect x="660" y="130" width="30" height="30" fill="${accent}" opacity="0.3"/><rect x="580" y="170" width="30" height="30" fill="${accent}" opacity="0.2"/><rect x="620" y="170" width="30" height="30" fill="${accent}" opacity="0.35"/><rect x="660" y="170" width="30" height="30" fill="${accent}" opacity="0.15"/>`;
    case "cards":
      return `<rect x="590" y="140" width="70" height="95" rx="8" fill="none" stroke="${accent}" stroke-width="2" opacity="0.4" transform="rotate(-8 625 187)"/><rect x="630" y="130" width="70" height="95" rx="8" fill="${accent}" opacity="0.12" transform="rotate(6 665 177)"/>`;
    default:
      return "";
  }
}

function cardSvg(p) {
  return `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${p.accent}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="${BG}"/>
  <rect width="800" height="450" fill="url(#g)"/>
  <rect x="16" y="16" width="768" height="418" rx="16" fill="none" stroke="${LINE}" stroke-width="2"/>
  ${motifSvg(p.motif, p.accent)}
  <rect x="48" y="48" width="4" height="354" fill="${p.accent}" rx="2"/>
  <text x="72" y="88" font-family="ui-monospace, Menlo, monospace" font-size="22" fill="${p.accent}">${escapeXml(p.domain)}</text>
  <text x="72" y="200" font-family="Helvetica, Arial, sans-serif" font-size="46" font-weight="700" fill="${INK}">${escapeXml(p.name)}</text>
  <text x="72" y="252" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="${MUTE}">${escapeXml(p.subtitle)}</text>
</svg>`;
}

await mkdir(outDir, { recursive: true });

for (const p of projects) {
  await sharp(Buffer.from(cardSvg(p))).webp({ quality: 82 }).toFile(join(outDir, `${p.slug}.webp`));
  console.log("generated:", p.slug);
}

console.log("Done —", projects.length, "thumbnails in public/images/projects/");
