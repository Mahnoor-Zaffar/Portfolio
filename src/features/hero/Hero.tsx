import { useEffect, useRef } from "react";
import { hero, profile, stats } from "@/content/site";
import { StatCounter } from "@/components/StatCounter";
import { TerminalCard } from "@/components/TerminalCard";
import { createTimeline, stagger, prefersReducedMotion } from "@/lib/anime";

export function Hero() {
  const cmdRef = useRef<HTMLSpanElement>(null);
  const linesRef = useRef<HTMLUListElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

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
            <a href="#contact" className="pill-primary h-11 px-7 text-fluid-base">
              Get in touch
            </a>
            <a href="#experience" className="pill-ghost h-11 px-7 text-fluid-base">
              View experience
            </a>
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
