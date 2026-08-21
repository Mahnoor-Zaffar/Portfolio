import posthog from "posthog-js";

/**
 * PostHog product analytics — explicit events only.
 *
 * Configured for a minimal, privacy-lean posture: no autocapture, no session
 * replay, no automatic pageviews. We persist an anonymous id (localStorage +
 * cookie) so the Visitor → Project → GitHub/Demo → Contact funnel works across
 * visits. Enable by setting `VITE_POSTHOG_KEY` (and optionally
 * `VITE_POSTHOG_HOST`, defaulting to the US cloud).
 */
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";

/** True when a PostHog project key is configured; gates all tracking calls. */
export const isPostHogEnabled = Boolean(POSTHOG_KEY);

export type PostHogEventName =
  | "portfolio_view"
  | "project_view"
  | "github_click"
  | "demo_click"
  | "contact_click"
  | "resume_download"
  | "linkedin_click";

export type PostHogEventProps = {
  portfolio_view: { path?: string; referrer?: string };
  project_view: { project_name: string; project_domain?: string };
  github_click: { location: string; project_name?: string; url?: string };
  demo_click: { project_name: string; url?: string };
  contact_click: { source: string };
  resume_download: { url?: string };
  linkedin_click: { location: string; url?: string };
};

/** Initialises PostHog. Safe to call once at app startup; no-ops without a key. */
export function initPostHog(): void {
  if (!POSTHOG_KEY || typeof window === "undefined") return;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    autocapture: false,
    capture_pageview: false,
    disable_session_recording: true,
    persistence: "localStorage+cookie",
  });
}

/** Captures a typed event; no-ops when PostHog isn't configured. */
export function trackEvent<E extends PostHogEventName>(
  name: E,
  properties?: PostHogEventProps[E],
): void {
  if (!isPostHogEnabled) return;
  posthog.capture(name, properties);
}

export default posthog;
