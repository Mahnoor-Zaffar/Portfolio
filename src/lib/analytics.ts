/**
 * Privacy-friendly, cookieless analytics via GoatCounter (free, GDPR-friendly,
 * no consent banner needed).
 *
 * Disabled by default. To enable: create a free site at goatcounter.com, then
 * set VITE_GOATCOUNTER_CODE to your site code (the `xxxx` in
 * `xxxx.goatcounter.com`) in `.env.local` / your build env. When unset this is
 * a no-op, so nothing loads and no requests are made.
 */
export function initAnalytics() {
  const code = import.meta.env.VITE_GOATCOUNTER_CODE;
  if (!code || typeof document === "undefined") return;
  if (document.querySelector("script[data-goatcounter]")) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "//gc.zgo.at/count.js";
  script.setAttribute("data-goatcounter", `https://${code}.goatcounter.com/count`);
  document.head.appendChild(script);
}
