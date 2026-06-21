import { profile, socials } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="shell flex flex-col items-center justify-between gap-4 py-10 text-fluid-sm text-ink-muted sm:flex-row">
      <p>
        © {year} {profile.fullName}. All rights reserved.
      </p>
      <ul className="flex items-center gap-5">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-ink"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
