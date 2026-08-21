import { describe, it, expect, vi, afterEach } from "vitest";

vi.mock("posthog-js", () => ({
  default: { capture: vi.fn(), init: vi.fn() },
}));

async function importPostHog() {
  vi.resetModules();
  return import("@/lib/posthog");
}

describe("posthog", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("is disabled and no-ops when no project key is configured", async () => {
    vi.stubEnv("VITE_POSTHOG_KEY", "");
    const { isPostHogEnabled, trackEvent, initPostHog } = await importPostHog();

    expect(isPostHogEnabled).toBe(false);
    expect(() => trackEvent("portfolio_view", { path: "/" })).not.toThrow();
    expect(() => initPostHog()).not.toThrow();
  });

  it("is enabled when a project key is configured", async () => {
    vi.stubEnv("VITE_POSTHOG_KEY", "phc_test_key");
    const { isPostHogEnabled } = await importPostHog();

    expect(isPostHogEnabled).toBe(true);
  });
});
