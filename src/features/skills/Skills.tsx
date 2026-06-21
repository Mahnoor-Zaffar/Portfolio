import { useEffect, useRef, useState } from "react";
import { skills } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TerminalCard } from "@/components/TerminalCard";
import { animate, stagger, prefersReducedMotion } from "@/lib/anime";

export function Skills() {
  const [activeId, setActiveId] = useState(skills.groups[0].id);
  const listRef = useRef<HTMLUListElement>(null);
  const active = skills.groups.find((g) => g.id === activeId) ?? skills.groups[0];

  useEffect(() => {
    const el = listRef.current;
    if (!el || prefersReducedMotion()) return;
    const chips = Array.from(el.children) as HTMLElement[];
    animate(chips, {
      opacity: [0, 1],
      translateY: [10, 0],
      scale: [0.92, 1],
      duration: 420,
      delay: stagger(45),
      ease: "outBack",
    });
  }, [activeId]);

  return (
    <Section id="skills" className="border-b border-hairline">
      <SectionHeading index="// 04 — skills" title={skills.heading} description={skills.description} />

      <div className="mt-12">
        <TerminalCard title="skills — interactive">
          {/* Category selector rendered as runnable command tags */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
            {skills.groups.map((group) => {
              const isActive = group.id === activeId;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(group.id)}
                  className={`rounded-pill px-3 py-1.5 font-mono text-fluid-caption transition-colors ${
                    isActive
                      ? "bg-primary text-on-primary"
                      : "border border-hairline bg-canvas text-charcoal hover:text-ink"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          {/* Active command + output */}
          <div className="mt-5 flex items-center gap-2 text-ink">
            <span className="text-term-green">➜</span>
            <span className="text-mute">~</span>
            <span key={active.id} className="text-ink">
              {active.command}
            </span>
          </div>

          <ul ref={listRef} className="mt-4 flex flex-wrap gap-2.5">
            {active.items.map((item) => (
              <li
                key={`${active.id}-${item}`}
                className="cursor-default rounded-pill border border-hairline bg-surface-card px-4 py-2 text-fluid-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5 hover:border-term-green"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-4 font-mono text-fluid-caption text-mute">
            # {active.items.length} {active.items.length === 1 ? "result" : "results"}
          </p>
        </TerminalCard>
      </div>
    </Section>
  );
}
