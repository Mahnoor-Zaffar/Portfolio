/**
 * Single entry point for anime.js (v4) across the app.
 * Re-exports the pieces we use plus a reduced-motion guard so individual
 * components don't each re-implement the check.
 */
import { animate, stagger, createTimeline, utils, splitText, eases } from "animejs";

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { animate, stagger, createTimeline, utils, splitText, eases };
