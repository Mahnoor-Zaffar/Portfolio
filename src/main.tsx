import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { initPostHog, trackEvent } from "@/lib/posthog";

// Self-hosted variable fonts (weight axis only) — no third-party CDN.
import "@fontsource-variable/nunito/wght.css";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "@/styles/index.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

initPostHog();

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const params = new URLSearchParams(window.location.search);
trackEvent("portfolio_view", {
  path: window.location.pathname,
  referrer: document.referrer || undefined,
  utm_source: params.get("utm_source") || undefined,
  utm_medium: params.get("utm_medium") || undefined,
  utm_campaign: params.get("utm_campaign") || undefined,
});
