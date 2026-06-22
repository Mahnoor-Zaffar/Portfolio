import { analytics as siteAnalytics } from "@/content/site";

/**
 * Privacy-friendly, cookieless analytics via GoatCounter (free, GDPR-friendly,
 * no consent banner needed).
 *
 * The site code lives in `site.ts` (`analytics.goatCounterCode`) and can be
 * overridden with `VITE_GOATCOUNTER_CODE`. Create a free site at goatcounter.com
 * using the same code (default: `mahnoorzaffar`).
 */
export function initAnalytics() {
  const code = import.meta.env.VITE_GOATCOUNTER_CODE || siteAnalytics.goatCounterCode;
  if (!code || typeof document === "undefined") return;
  if (document.querySelector("script[data-goatcounter]")) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "//gc.zgo.at/count.js";
  script.setAttribute("data-goatcounter", `https://${code}.goatcounter.com/count`);
  document.head.appendChild(script);
}

/** Exposed for tests. */
export const goatCounterCode =
  import.meta.env.VITE_GOATCOUNTER_CODE || siteAnalytics.goatCounterCode;
