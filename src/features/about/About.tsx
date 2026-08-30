import { about, profile } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { trackEvent } from "@/lib/posthog";
import { useTrackInView } from "@/hooks/useTrackInView";

export function About() {
  const sectionRef = useTrackInView(() =>
    trackEvent("section_view", { section: "about" }),
  );

  return (
    <Section id="about" className="border-b border-hairline" ref={sectionRef}>
      <SectionHeading index="// 01 — about" title={about.heading} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <div className="card overflow-hidden p-2">
            <picture>
              <source srcSet="/images/personal.avif" type="image/avif" />
              <source srcSet="/images/personal.webp" type="image/webp" />
              <img
                src="/images/personal.jpg"
                alt={`Portrait of ${profile.fullName}`}
                width={864}
                height={1184}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full rounded-md object-cover [aspect-ratio:864/1184]"
              />
            </picture>
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
