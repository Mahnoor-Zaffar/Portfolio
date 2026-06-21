import { contact, profile, socials } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <Section id="contact" className="rounded-panel bg-ink text-white">
      <Reveal stagger className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-fluid-3xl font-bold">{contact.heading}</h2>
        <p className="max-w-prose text-fluid-lg text-white/70">{contact.message}</p>

        <a
          href={`mailto:${profile.email}`}
          className="font-display text-fluid-xl font-medium text-white underline-offset-8 transition-colors hover:text-brand hover:underline"
        >
          {profile.email}
        </a>

        <ul className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-block rounded-full border border-white/15 px-5 py-2.5 text-fluid-sm font-medium text-white/80 transition-colors hover:border-white hover:text-white"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-fluid-sm text-white/50">{contact.closing}</p>
      </Reveal>
    </Section>
  );
}
