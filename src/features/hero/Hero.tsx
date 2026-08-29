import { useEffect, useRef } from "react";
import { hero, profile, socials, stats } from "@/content/site";
import { StatCounter } from "@/components/StatCounter";
import { TerminalCard } from "@/components/TerminalCard";
import { createTimeline, stagger, prefersReducedMotion } from "@/lib/anime";
import { trackEvent } from "@/lib/posthog";
import { useTrackInView } from "@/hooks/useTrackInView";

export function Hero() {
  const cmdRef = useRef<HTMLSpanElement>(null);
  const linesRef = useRef<HTMLUListElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const sectionRef = useTrackInView(() =>
    trackEvent("section_view", { section: "hero" }),
  );

  useEffect(() => {
    const cmdEl = cmdRef.current;
    const linesEl = linesRef.current;
    const headEl = headRef.current;
    if (!cmdEl || !linesEl || !headEl) return;

    const command = hero.terminal.command;
    const lineNodes = Array.from(linesEl.children) as HTMLElement[];
    const headNodes = Array.from(headEl.children) as HTMLElement[];

    if (prefersReducedMotion()) {
      cmdEl.textContent = command;
      lineNodes.forEach((n) => (n.style.opacity = "1"));
      return;
    }

    cmdEl.textContent = "";
    lineNodes.forEach((n) => (n.style.opacity = "0"));
    headNodes.forEach((n) => (n.style.opacity = "0"));

    const typing = { i: 0 };
    const tl = createTimeline();

    tl.add(headNodes, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700,
      delay: stagger(110),
      ease: "outExpo",
    })
      .add(
        typing,
        {
          i: command.length,
          duration: command.length * 85,
          ease: "linear",
          onUpdate: () => {
            cmdEl.textContent = command.slice(0, Math.round(typing.i));
          },
        },
        "-=300",
      )
      .add(lineNodes, {
        opacity: [0, 1],
        translateX: [-10, 0],
        duration: 260,
        delay: stagger(110),
        ease: "outQuad",
      });

    return () => {
      tl.revert?.();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden border-b border-hairline pb-section pt-28 sm:pt-32"
    >
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div ref={headRef}>
          <span className="chip text-term-green">
            <span className="h-1.5 w-1.5 rounded-pill bg-term-green" />
            {profile.status}
          </span>
          <p className="eyebrow mt-6">{hero.eyebrow}</p>
          <h1 className="mt-3 font-display text-fluid-hero font-extrabold leading-[0.95] tracking-tight">
            {profile.firstName}
            <br />
            {profile.lastName}
            <span className="text-term-green">.</span>
          </h1>
          <p className="mt-6 max-w-reading text-fluid-lg text-body">{hero.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={() => trackEvent("contact_click", { source: "hero" })}
              className="pill-primary h-11 px-7 text-fluid-base"
            >
              Get in touch
            </a>
            <a href="#experience" className="pill-ghost h-11 px-7 text-fluid-base">
              View experience
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                onClick={() => trackEvent("resume_download", { url: profile.resumeUrl })}
                className="pill-ghost h-11 px-7 text-fluid-base"
              >
                Résumé ↓
              </a>
            )}
          </div>

          <div className="mt-5 flex items-center gap-4">
            {socials.filter((s) => s.label === "GitHub" || s.label === "LinkedIn").map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                onClick={() =>
                  trackEvent(social.label === "GitHub" ? "github_click" : "linkedin_click", {
                    location: "hero",
                    url: social.href,
                  })
                }
                className="text-mute transition-colors hover:text-ink"
              >
                {social.label === "GitHub" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <TerminalCard title={`${profile.handle} — zsh`}>
          <div className="flex items-center gap-2 text-ink">
            <span className="text-term-green">➜</span>
            <span className="text-mute">~</span>
            <span>
              <span ref={cmdRef} />
              <span className="ml-0.5 inline-block w-2 animate-pulse text-term-green">▌</span>
            </span>
          </div>
          <ul ref={linesRef} className="mt-3 space-y-1.5">
            {hero.terminal.lines.map((line) => {
              const [key, ...rest] = line.split(/\s{2,}/);
              return (
                <li key={line} className="flex gap-3 text-charcoal">
                  <span className="w-24 shrink-0 text-mute">{key}</span>
                  <span className="text-ink">{rest.join(" ")}</span>
                </li>
              );
            })}
          </ul>
        </TerminalCard>
      </div>

      <div className="shell mt-16 grid grid-cols-2 gap-8 border-t border-hairline pt-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
