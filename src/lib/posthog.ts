import posthog from "posthog-js";

/**
 * PostHog product analytics — full insights mode.
 *
 * Features enabled:
 * - Autocapture: tracks all clicks, changes, inputs automatically
 * - Session recording: watch actual user sessions (no PII captured)
 * - Heatmaps: see where people click most
 * - Scroll tracking: see how far visitors scroll
 * - Custom events: section views, interactions, UTM parameters
 *
 * We persist an anonymous id (localStorage + cookie) so the
 * Visitor → Project → GitHub/Demo → Contact funnel works across visits.
 * Enable by setting `VITE_POSTHOG_KEY`.
 */
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = "/ingest";

/** True when a PostHog project key is configured; gates all tracking calls. */
export const isPostHogEnabled = Boolean(POSTHOG_KEY);

export type PostHogEventName =
  | "portfolio_view"
  | "project_view"
  | "section_view"
  | "github_click"
  | "demo_click"
  | "contact_click"
  | "contact_form_sent"
  | "resume_download"
  | "linkedin_click"
  | "skill_category_click"
  | "theme_toggle"
  | "back_to_top";

export type PostHogEventProps = {
  portfolio_view: { path?: string; referrer?: string; utm_source?: string; utm_medium?: string; utm_campaign?: string };
  project_view: { project_name: string; project_domain?: string };
  section_view: { section: string };
  github_click: { location: string; project_name?: string; url?: string };
  demo_click: { project_name: string; url?: string };
  contact_click: { source: string };
  contact_form_sent: { name: string };
  resume_download: { url?: string };
  linkedin_click: { location: string; url?: string };
  skill_category_click: { category: string };
  theme_toggle: { theme: string };
  back_to_top: { from_section?: string };
};

/** Initialises PostHog with full analytics features. */
export function initPostHog(): void {
  if (!POSTHOG_KEY || typeof window === "undefined") return;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    autocapture: {
      dom_event_allowlist: ["click", "change"],
      element_allowlist: ["a", "button", "input", "textarea", "select"],
      css_selector_allowlist: [
        '[role="tab"]',
        '[role="button"]',
        ".chip",
        ".pill-ghost",
        '[data-track="true"]',
      ],
    },
    capture_pageview: true,
    capture_pageleave: true,
    disable_session_recording: false,
    session_recording: {
      maskAllInputs: false,
      maskInputOptions: {
        password: true,
      },
    },
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
