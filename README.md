# Mahnoor Zaffar — Portfolio

Production-grade personal portfolio for **Mahnoor Zaffar**, Backend & AI Engineer.

**Live:** [www.mahnoorzaffar.dev](https://www.mahnoorzaffar.dev)

> **v2.1.0** — Full rewrite from a minified build artifact to a typed, modular, and maintainable codebase.

---

## Quick Start

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # type-check + production build → dist/
npm test             # vitest run
```

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + TypeScript (strict) |
| **Build** | Vite 6 |
| **Styling** | Tailwind CSS 3 (token-driven config) |
| **Animation** | anime.js v4 (progressive enhancement) |
| **Analytics** | PostHog (proxied through own domain) |
| **Contact** | Web3Forms (serverless email delivery) |
| **Deployment** | Vercel (edge network + SPA routing) |
| **Testing** | Vitest + React Testing Library |

## Architecture

**Feature-based structure** — each page section is a self-contained module under `src/features/`, composed by `App.tsx`. Cross-cutting concerns are isolated:

```
src/
├── main.tsx                 # Entry point + PostHog init
├── App.tsx                  # Section composition
├── content/site.ts          # All copy & data (single source of truth)
├── lib/
│   ├── anime.ts             # Animation utilities + reduced-motion guard
│   └── posthog.ts           # Analytics config + event schema
├── hooks/
│   ├── useTheme.ts          # Theme state → <html> class + localStorage
│   └── useTrackInView.ts    # IntersectionObserver → fire once on scroll
├── components/              # Shared UI primitives
└── features/                # Page sections: hero, about, experience,
                             # projects, services, skills, contact
```

**Guiding principles:**
- **Content decoupled from presentation** — all text lives in `src/content/site.ts`
- **Single source of truth** — design tokens in `tailwind.config.ts`, motion in `lib/anime.ts`
- **Progressive enhancement** — content visible without JS; animations respect `prefers-reduced-motion`
- **Mobile-first + fluid** — `clamp()` type scale, responsive utilities over fixed pixels

## Key Features

| Feature | Details |
|---|---|
| **Terminal UI** | Ollama-inspired `whoami` mockup with typing animation |
| **Skill explorer** | Interactive category tabs with staggered chip reveal |
| **Project cards** | Viewport-tracked impressions, GitHub/demo click analytics |
| **Contact form** | Serverless email via Web3Forms (delivers to inbox directly) |
| **Resume download** | Button in hero — drop PDF in `public/resume.pdf` |
| **Dark/light theme** | Class-based toggle, no-FOUC inline script, persisted to localStorage |
| **Analytics** | 12 custom events + autocapture + session recording + heatmaps |
| **SEO** | JSON-LD Person + WebSite schema, OG tags, sitemap, robots.txt |

## Content Editing

All copy, projects, skills, and social links are in [`src/content/site.ts`](src/content/site.ts). Change text, add a project, or update a link without touching component code:

```ts
// src/content/site.ts
export const profile = {
  firstName: "Mahnoor",
  lastName: "Zaffar",
  role: "Backend & AI Engineer",
  email: "1999mahnoor@gmail.com",
  resumeUrl: "/resume.pdf",
};
```

## Analytics

PostHog tracks the full visitor funnel through 12 custom events:

| Event | Captures |
|---|---|
| `portfolio_view` | Site load + UTM parameters |
| `section_view` | Which sections visitors see (hero, about, experience, etc.) |
| `project_view` | Project card impressions |
| `github_click` / `demo_click` | External link clicks by location |
| `contact_click` | Contact interaction by source |
| `contact_form_sent` | Successful form submissions |
| `resume_download` | Resume downloads |
| `linkedin_click` | LinkedIn profile visits |
| `skill_category_click` | Skill category interactions |
| `theme_toggle` | Dark/light preference |
| `back_to_top` | Scroll engagement |

Plus autocapture, session recordings, heatmaps, and scroll depth — all proxied through the own domain to bypass ad blockers.

## Performance

- **Bundle:** ~474 KB JS (157 KB gzipped), 28 KB CSS (8 KB gzipped)
- **Fonts:** Self-hosted variable fonts (weight-axis only), no third-party CDN
- **Images:** AVIF/WebP/JPG `<picture>` with explicit dimensions (zero CLS)
- **Caching:** 1-year immutable headers for assets via Vercel config
- **Lighthouse:** Accessibility 100

## Deployment

Deployed on **Vercel** with custom domain `www.mahnoorzaffar.dev`.

**Config:** [`vercel.json`](vercel.json)
- SPA routing (all paths → `index.html`)
- PostHog proxy rewrites (`/ingest/*` → `us.i.posthog.com`)
- Long-lived cache headers for assets

**DNS:** `CNAME` points to Vercel.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Type-check + production build |
| `npm run preview` | Serve production build locally |
| `npm run lint` | ESLint (zero warnings) |
| `npm run format` | Prettier |
| `npm test` | Vitest suite |
| `npm run test:watch` | Vitest watch mode |
| `npm run optimize:images` | Regenerate portrait variants |
| `npm run make:og` | Regenerate social share card |
| `npm run make:thumbs` | Regenerate project thumbnails |

---

© Mahnoor Zaffar. All rights reserved.
