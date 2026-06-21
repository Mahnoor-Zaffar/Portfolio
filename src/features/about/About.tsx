import { about, profile } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" className="border-b border-hairline">
      <SectionHeading index="// 01 — about" title={about.heading} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <div className="card overflow-hidden p-2">
            <img
              src="/images/personal.jpg"
              alt={`Portrait of ${profile.fullName}`}
              width={960}
              height={1200}
              loading="lazy"
              decoding="async"
              className="w-full rounded-md object-cover [aspect-ratio:4/5]"
            />
          </div>
        </Reveal>

        <Reveal stagger>
          <p className="text-fluid-xl font-medium text-ink">{about.lead}</p>
          {about.paragraphs.map((para) => (
            <p key={para.slice(0, 24)} className="mt-5 text-fluid-base text-body">
              {para}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="chip">📍 {profile.location}</span>
            <span className="chip">✦ {profile.role}</span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
