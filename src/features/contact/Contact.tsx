import { contact, profile, socials } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/features/contact/ContactForm";
import { trackEvent } from "@/lib/posthog";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-section">
      <div className="shell">
        <Reveal className="rounded-xl bg-surface-dark px-6 py-14 text-center sm:px-12 sm:py-20">
          <span className="font-mono text-fluid-caption uppercase tracking-[0.18em] text-on-dark-mute">
            // 06 — contact
          </span>
          <h2 className="mt-4 font-display text-fluid-2xl font-bold text-on-dark">
            {contact.heading}
            <span className="text-term-green">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-reading text-fluid-lg text-on-dark-mute">
            {contact.message}
          </p>

          <div className="mx-auto mt-10 max-w-xl">
            <a
              href={`mailto:${profile.email}`}
              onClick={() => trackEvent("contact_click", { source: "email" })}
              className="inline-flex items-center gap-2 rounded-pill bg-canvas px-7 py-3.5 font-mono text-fluid-sm font-medium text-ink transition-transform duration-200 hover:scale-[0.97]"
            >
              <span className="text-term-green">$</span> {profile.email}
            </a>

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={() => {
                      if (social.label === "GitHub") {
                        trackEvent("github_click", { location: "contact", url: social.href });
                      } else if (social.label === "LinkedIn") {
                        trackEvent("linkedin_click", { location: "contact", url: social.href });
                      } else {
                        trackEvent("contact_click", { source: "email" });
                      }
                    }}
                    className="inline-block rounded-pill border border-white/15 px-5 py-2.5 text-fluid-sm font-medium text-on-dark-mute transition-colors hover:border-white/60 hover:text-on-dark"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>

            <ContactForm />
          </div>

          <p className="mt-10 font-mono text-fluid-caption text-on-dark-mute">{contact.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
