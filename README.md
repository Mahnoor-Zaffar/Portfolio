# Mahnoor Zaffar — Portfolio

The personal portfolio of **Mahnoor Zaffar**, Full-Stack Web Developer & AI Engineer.
A fast, accessible, and fully responsive single-page application.

Live site: [www.mahnoorzaffar.dev](https://www.mahnoorzaffar.dev)

> **v2 — rebuilt from source.** The previous deployment shipped only a minified,
> third-party build artifact with no maintainable source. This release is a
> ground-up reconstruction: a typed, modular, and owned codebase.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture & Principles](#architecture--principles)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Editing Content](#editing-content)
- [Performance & Accessibility](#performance--accessibility)
- [Deployment](#deployment)
- [Roadmap](#roadmap)

---

## Overview

This portfolio presents a hero introduction, an about section, the services
offered, a categorized skill set, and contact details. It is engineered as a
production-grade frontend with an emphasis on maintainability, performance, and
inclusive design rather than visual gimmicks.

**Highlights**

- Strict TypeScript across the entire codebase.
- Centralized design tokens — colors, spacing, breakpoints, and a fluid type
  scale defined in exactly one place.
- Content fully decoupled from presentation: all copy lives in a single typed
  module, so updates never require touching component code.
- Animations implemented as progressive enhancement and disabled automatically
  for users who prefer reduced motion.

## Tech Stack

| Concern        | Choice                                                  |
| -------------- | ------------------------------------------------------- |
| Build tool     | Vite 6                                                  |
| UI library     | React 18                                                |
| Language       | TypeScript (strict mode)                                |
| Styling        | Tailwind CSS 3 with a token-driven `tailwind.config.ts` |
| Animation      | GSAP + ScrollTrigger via `@gsap/react` (`useGSAP`)      |
| Quality gates  | ESLint (flat config, zero-warning policy) + Prettier    |

## Architecture & Principles

The codebase follows a **feature-based architecture**. Each page section is a
self-contained feature module, composed by `App.tsx`. Cross-cutting concerns
(layout, reusable UI, animation, and content) are isolated into dedicated
directories.

Guiding principles:

- **Single Responsibility** — each module does one thing; sections never reach
  into one another.
- **Single Source of Truth** — design tokens live in `tailwind.config.ts`;
  content lives in `src/content/site.ts`; GSAP is registered once in
  `src/lib/gsap.ts`.
- **Progressive enhancement** — content is rendered and visible without
  JavaScript or animation; motion is layered on top and respects
  `prefers-reduced-motion`.
- **Mobile-first & fluid** — layouts scale with `clamp()` and responsive
  utilities instead of fixed pixel values and per-breakpoint overrides.

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:5173)
npm run dev
```

## Available Scripts

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the Vite development server with HMR.          |
| `npm run build`   | Type-check, then produce an optimized build in `dist/`. |
| `npm run preview` | Serve the production build locally.                  |
| `npm run lint`    | Run ESLint with a zero-warning policy.               |
| `npm run format`  | Format the source with Prettier.                     |

## Project Structure

```text
src/
├── main.tsx                 # Application entry point
├── App.tsx                  # Section composition + skip-to-content link
├── styles/
│   └── index.css            # Tailwind layers, base styles, self-hosted fonts
├── content/
│   └── site.ts              # All copy and data (single source of truth)
├── lib/
│   └── gsap.ts              # One-time GSAP/plugin registration + motion helper
├── components/
│   ├── Reveal.tsx           # Scroll-reveal wrapper (progressive enhancement)
│   ├── BackToTop.tsx        # Scroll-to-top control
│   ├── ui/
│   │   └── Section.tsx      # Shared section shell
│   └── layout/
│       ├── Header.tsx       # Sticky navigation (with mobile menu)
│       └── Footer.tsx
└── features/                # One folder per page section
    ├── hero/
    ├── about/
    ├── services/
    ├── skills/
    └── contact/

public/
├── favicon.svg
├── fonts/                   # Self-hosted web fonts
└── images/                  # Portrait and optimized variants

_legacy/                     # Previous build artifact, retained for reference
```

## Editing Content

All text, services, skills, and social links are defined in
[`src/content/site.ts`](src/content/site.ts) as typed, exported objects.
Updating a bio, adding a skill, or changing a link is a single-file edit that
never requires modifying a component.

```ts
// src/content/site.ts
export const profile = {
  fullName: "Mahnoor Zaffar",
  role: "Full-Stack Web Developer & AI Engineer",
  email: "1999mahnoor+developer@gmail.com",
  // ...
};
```

## Performance & Accessibility

- **Lean bundle** — the production build is roughly 97 KB gzipped, with CSS
  purged to the classes actually used.
- **Layout stability** — the portrait declares explicit dimensions and an
  `aspect-ratio`, and is served via `<picture>` with AVIF/WebP sources to
  minimize Cumulative Layout Shift.
- **Self-hosted fonts** — loaded with `font-display: swap` and a `system-ui`
  fallback; no render-blocking third-party imports.
- **Accessibility** — semantic landmarks, a skip-to-content link, keyboard-
  visible focus states, `aria` labelling on interactive controls, and full
  `prefers-reduced-motion` support.

## Deployment

The site is served as a static build and deployed to the custom domain in
[`CNAME`](CNAME) (`www.mahnoorzaffar.dev`).

```bash
npm run build      # outputs to dist/
```

Deploy the contents of `dist/` to any static host (e.g. GitHub Pages, Netlify,
Vercel). The previous artifact build is preserved under `_legacy/` and tagged
`deploy-snapshot-2026-06` for rollback.

## Roadmap

The following items require external assets or content and are tracked as
follow-ups:

- [ ] Add self-hosted font files to `public/fonts/`
      (`ClashDisplay-Variable.woff2` and a Bricolage Grotesque file). The CSS
      already references them and falls back to `system-ui` until provided.
- [ ] Generate optimized portrait variants `public/images/personal.avif` and
      `public/images/personal.webp` (the markup already prefers them) and
      re-export the source JPG under ~150 KB.
- [ ] Add a **Projects** section once project content is available. The previous
      build's project list belonged to the original template author and was
      intentionally excluded.
- [ ] Wire the contact section to a form provider (e.g. EmailJS or Formspree)
      with client-side validation and success/error states.

---

© Mahnoor Zaffar. All rights reserved.
