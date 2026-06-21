import { services } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <Section id="services">
      <Reveal className="max-w-prose">
        <h2 className="text-fluid-2xl font-bold">{services.heading}</h2>
        <p className="mt-5 text-fluid-lg text-ink-muted">{services.description}</p>
      </Reveal>

      <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service, index) => (
          <article key={service.title} className="card flex flex-col gap-4 p-7">
            <span className="font-display text-fluid-xl font-semibold text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-fluid-lg font-semibold">{service.title}</h3>
            <p className="text-fluid-base text-ink-muted">{service.description}</p>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
