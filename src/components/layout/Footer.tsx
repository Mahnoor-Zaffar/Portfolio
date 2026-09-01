import { profile, socials } from "@/content/site";
import { trackEvent } from "@/lib/posthog";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline-top">
      <div className="shell flex flex-col items-center justify-between gap-4 py-8 text-fluid-caption text-body sm:flex-row">
        <p className="font-mono">
          © {year} {profile.fullName}
        </p>
        <ul className="flex items-center gap-5 font-mono">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => {
                  if (social.label === "GitHub") {
                    trackEvent("github_click", { location: "footer", url: social.href });
                  } else if (social.label === "LinkedIn") {
                    trackEvent("linkedin_click", { location: "footer", url: social.href });
                  } else {
                    trackEvent("contact_click", { source: "email" });
                  }
                }}
                className="transition-colors hover:text-ink"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-mute">Built with React · anime.js · Vercel</p>
      </div>
    </footer>
  );
}
