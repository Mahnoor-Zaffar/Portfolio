import { experience } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <Section id="experience" className="border-b border-hairline">
      <SectionHeading
        index="// 02 — experience"
        title={experience.heading}
        description={experience.description}
      />

      <Reveal stagger className="mt-12 flex flex-col gap-px overflow-hidden rounded-lg border border-hairline">
        {experience.entries.map((entry) => (
          <article
            key={entry.role + entry.period}
            className="grid gap-4 bg-surface-card p-6 sm:grid-cols-[0.4fr_1fr] sm:p-8"
          >
            <div>
              <p className="font-mono text-fluid-sm text-term-green">{entry.period}</p>
              <p className="mt-1 text-fluid-caption text-mute">{entry.context}</p>
            </div>
            <div>
              <h3 className="text-fluid-lg font-semibold text-ink">{entry.role}</h3>
              <ul className="mt-3 space-y-2">
                {entry.points.map((point) => (
                  <li key={point} className="flex gap-3 text-fluid-base text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-pill bg-ink" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
