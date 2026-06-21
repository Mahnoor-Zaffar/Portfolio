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
| Design system  | Ollama-inspired language documented in `DESIGN.md`      |
| Animation      | anime.js v4 (`animate`, `stagger`, timelines)           |
| Theming        | Class-based light/dark with no-FOUC inline script       |
| Quality gates  | ESLint (flat config, zero-warning policy) + Prettier    |

### Design language

The UI follows an Ollama-inspired, documentation-first design language captured
in [`DESIGN.md`](DESIGN.md): a flat paper canvas, ink + neutral grays, pill
geometry for interactive elements, hairline-bordered cards (no shadows), and a
single inverted dark surface used once per page as the contact call-to-action.
Headings use Nunito, body uses Inter, and code/terminal UI uses JetBrains Mono.

### Theming

Light and dark themes are defined as CSS variables in `src/styles/index.css` and
switched by toggling a `.dark` class on `<html>`. The pill CTA palette inverts
automatically. An inline script in `index.html` applies the stored or
system-preferred theme before first paint to avoid a flash, and `useTheme`
keeps React in sync and persists the user's choice to `localStorage`.

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
│   └── index.css            # Tailwind layers, base styles, light/dark tokens
├── content/
│   └── site.ts              # All copy and data (single source of truth)
├── lib/
│   └── anime.ts             # anime.js re-exports + reduced-motion guard
├── hooks/
│   └── useTheme.ts          # Theme state synced to <html> + localStorage
├── components/
│   ├── Reveal.tsx           # Scroll-reveal wrapper (anime.js + IO)
│   ├── ThemeToggle.tsx      # Animated light/dark switch
│   ├── TerminalCard.tsx     # Reusable terminal mockup (traffic lights)
│   ├── StatCounter.tsx      # Count-up stat animation
│   ├── BackToTop.tsx        # Scroll-to-top control
│   ├── ui/
│   │   └── Section.tsx      # Section shell + documentation-style heading
│   └── layout/
│       ├── Header.tsx       # Sticky nav (terminal brand, theme, mobile menu)
│       └── Footer.tsx
└── features/                # One folder per page section
    ├── hero/                # Animated "whoami" terminal + stats
    ├── about/
    ├── experience/          # Experience & focus timeline
    ├── services/
    ├── skills/              # Interactive terminal-style skill explorer
    └── contact/             # Inverted dark CTA surface

public/
├── favicon.svg
├── fonts/                   # (optional) self-hosted web fonts
└── images/                  # Portrait and optimized variants

DESIGN.md                    # Design-language reference (Ollama-inspired)
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
- **Fonts** — loaded via Google Fonts with `preconnect` and `font-display: swap`
  and a `system-ui` fallback (optionally self-hostable — see Roadmap).
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

- [ ] (Optional) Self-host the Nunito / Inter / JetBrains Mono fonts in
      `public/fonts/` to remove the Google Fonts dependency entirely.
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
