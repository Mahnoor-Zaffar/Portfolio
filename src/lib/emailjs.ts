/**
 * EmailJS configuration.
 *
 * These three values are *not* secrets — EmailJS keys are public by design and
 * are shipped in the client bundle regardless of how they are supplied. The
 * real protection against abuse is the domain allow-list in the EmailJS
 * dashboard (Account → Security), which is restricted to mahnoorzaffar.dev.
 *
 * Defaults below keep the production build working with zero CI config; an
 * env var (e.g. `.env.local`) overrides them for local testing or rotation.
 */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_nthwmce",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_vlxoxx8",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "L3bBigINQL_lXTNFM",
};

/** True only when all three values are present, so the form can fall back. */
export const isEmailjsConfigured =
  Boolean(emailjsConfig.serviceId) &&
  Boolean(emailjsConfig.templateId) &&
  Boolean(emailjsConfig.publicKey);
