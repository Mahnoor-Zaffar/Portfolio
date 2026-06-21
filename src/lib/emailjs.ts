/**
 * EmailJS configuration, sourced from build-time env vars.
 *
 * These three values are *not* secrets — EmailJS keys are designed to be
 * exposed in client code. Protect against abuse by enabling the domain
 * allowlist in the EmailJS dashboard (Account → Security) instead.
 *
 * Set them in `.env.local` for local dev and as GitHub Actions secrets for
 * production (see .github/workflows/deploy.yml).
 */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
};

/** True only when all three values are present, so the form can fall back. */
export const isEmailjsConfigured =
  Boolean(emailjsConfig.serviceId) &&
  Boolean(emailjsConfig.templateId) &&
  Boolean(emailjsConfig.publicKey);
