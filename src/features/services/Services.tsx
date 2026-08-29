import { services } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { trackEvent } from "@/lib/posthog";
import { useTrackInView } from "@/hooks/useTrackInView";

export function Services() {
  const sectionRef = useTrackInView(() =>
    trackEvent("section_view", { section: "services" }),
  );

  return (
    <Section id="services" className="border-b border-hairline" ref={sectionRef}>
      <SectionHeading
        index="// 04 — services"
        title={services.heading}
        description={services.description}
      />

      <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service, index) => (
          <article key={service.title} className="card group flex flex-col gap-4 p-7">
            <span className="font-mono text-fluid-sm text-mute">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-fluid-lg font-semibold text-ink">{service.title}</h3>
            <p className="flex-grow text-fluid-base text-body">{service.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {service.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
