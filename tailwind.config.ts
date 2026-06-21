import type { Config } from "tailwindcss";

/**
 * Design tokens follow the Ollama design language (see DESIGN.md):
 * paper-flat canvas, ink + neutral grays, pill geometry, hairline borders,
 * no gradients/shadows. Semantic colors are wired to CSS variables so the
 * light/dark toggle swaps the entire palette in one place (see index.css).
 */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        canvas: "var(--canvas)",
        "surface-soft": "var(--surface-soft)",
        "surface-card": "var(--surface-card)",
        "surface-dark": "var(--surface-dark)",
        ink: "var(--ink)",
        "ink-deep": "var(--ink-deep)",
        charcoal: "var(--charcoal)",
        body: "var(--body)",
        mute: "var(--mute)",
        hairline: "var(--hairline)",
        "hairline-strong": "var(--hairline-strong)",
        primary: "var(--primary)",
        "on-primary": "var(--on-primary)",
        "on-dark": "#ffffff",
        "on-dark-mute": "rgba(255,255,255,0.7)",
        // Terminal traffic lights + the one accent allowed for "online" cues.
        term: {
          red: "#ff5f56",
          yellow: "#ffbd2e",
          green: "#27c93f",
        },
      },
      fontFamily: {
        display: ['"Nunito Variable"', "system-ui", "-apple-system", "sans-serif"],
        sans: ['"Inter Variable"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "fluid-caption": "clamp(0.75rem, 0.72rem + 0.12vw, 0.8125rem)",
        "fluid-sm": "clamp(0.875rem, 0.84rem + 0.18vw, 0.9375rem)",
        "fluid-base": "clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)",
        "fluid-lg": "clamp(1.125rem, 1rem + 0.5vw, 1.375rem)",
        "fluid-xl": "clamp(1.375rem, 1.1rem + 1.2vw, 2rem)",
        "fluid-2xl": "clamp(1.875rem, 1.4rem + 2.2vw, 3rem)",
        "fluid-hero": "clamp(2.75rem, 1.5rem + 6.5vw, 6.5rem)",
      },
      maxWidth: {
        reading: "46rem",
        shell: "72rem",
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        pill: "9999px",
      },
      spacing: {
        section: "5.5rem",
      },
      transitionTimingFunction: {
        snappy: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
