import { about, profile } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <picture>
            <source srcSet="/images/personal.avif" type="image/avif" />
            <source srcSet="/images/personal.webp" type="image/webp" />
            <img
              src="/images/personal.jpg"
              alt={`Portrait of ${profile.fullName}`}
              width={960}
              height={1280}
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-sm rounded-panel object-cover shadow-[0_20px_60px_rgba(0,14,35,0.12)] [aspect-ratio:3/4]"
            />
          </picture>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal stagger>
            <h2 className="text-fluid-2xl font-bold">{about.heading}</h2>
            <p className="mt-6 text-fluid-lg text-ink-soft">{about.lead}</p>
            {about.paragraphs.map((para) => (
              <p key={para.slice(0, 32)} className="mt-5 text-fluid-base text-ink-muted">
                {para}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
