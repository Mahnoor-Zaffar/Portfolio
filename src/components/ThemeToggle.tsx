import { useRef } from "react";
import { useTheme } from "@/hooks/useTheme";
import { animate, prefersReducedMotion } from "@/lib/anime";
import { trackEvent } from "@/lib/posthog";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const iconRef = useRef<SVGSVGElement>(null);

  const handleClick = () => {
    if (iconRef.current && !prefersReducedMotion()) {
      animate(iconRef.current, {
        rotate: [0, 180],
        scale: [1, 0.6, 1],
        duration: 500,
        ease: "outBack",
      });
    }
    const newTheme = theme === "dark" ? "light" : "dark";
    trackEvent("theme_toggle", { theme: newTheme });
    toggle();
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="flex h-9 w-9 items-center justify-center rounded-pill border border-hairline-strong bg-canvas text-ink transition-colors hover:bg-surface-soft"
    >
      <svg
        ref={iconRef}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {isDark ? (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </>
        )}
      </svg>
    </button>
  );
}
