import { useRef, useState } from "react";
import { contact, profile, socials } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/features/contact/ContactForm";
import { animate, prefersReducedMotion } from "@/lib/anime";

export function Contact() {
  const [revealed, setRevealed] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleReveal = () => {
    setRevealed(true);
    if (prefersReducedMotion()) return;
    // Animate after the panel renders.
    requestAnimationFrame(() => {
      if (panelRef.current) {
        animate(panelRef.current, {
          opacity: [0, 1],
          translateY: [16, 0],
          filter: ["blur(8px)", "blur(0px)"],
          duration: 650,
          ease: "outExpo",
        });
      }
    });
  };

  return (
    <section id="contact" className="scroll-mt-20 py-section">
      <div className="shell">
        <Reveal className="rounded-xl bg-surface-dark px-6 py-14 text-center sm:px-12 sm:py-20">
          <span className="font-mono text-fluid-caption uppercase tracking-[0.18em] text-on-dark-mute">
            // 05 — contact
          </span>
          <h2 className="mt-4 font-display text-fluid-2xl font-bold text-on-dark">
            {contact.heading}
            <span className="text-term-green">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-reading text-fluid-lg text-on-dark-mute">
            {contact.message}
          </p>

          {!revealed ? (
            // Locked state — contact details are not in the public DOM until
            // the visitor opts in.
            <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-5 rounded-lg border border-white/10 bg-white/5 px-6 py-10">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-pill border border-white/15 text-on-dark"
                aria-hidden
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <p className="font-mono text-fluid-sm text-on-dark-mute">
                contact details are protected
              </p>
              <button
                type="button"
                onClick={handleReveal}
                className="inline-flex items-center gap-2 rounded-pill bg-canvas px-6 py-3 font-mono text-fluid-sm font-medium text-ink transition-transform duration-200 hover:scale-[0.97]"
              >
                <span className="text-term-green">$</span> reveal contact
              </button>
            </div>
          ) : (
            <div ref={panelRef} className="mx-auto mt-10 max-w-xl">
              <a
                href={`mailto:${profile.email}`}
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
                      className="inline-block rounded-pill border border-white/15 px-5 py-2.5 text-fluid-sm font-medium text-on-dark-mute transition-colors hover:border-white/60 hover:text-on-dark"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ContactForm />
            </div>
          )}

          <p className="mt-10 font-mono text-fluid-caption text-on-dark-mute">{contact.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
