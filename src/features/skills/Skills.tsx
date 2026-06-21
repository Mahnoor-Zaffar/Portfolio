import { skills } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <Section id="skills" className="rounded-panel bg-canvas-raised">
      <Reveal>
        <h2 className="text-fluid-2xl font-bold">{skills.heading}</h2>
      </Reveal>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group) => (
          <Reveal key={group.category} stagger className="flex flex-col gap-4">
            <h3 className="text-fluid-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-ink/10 bg-canvas px-4 py-2 text-fluid-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
