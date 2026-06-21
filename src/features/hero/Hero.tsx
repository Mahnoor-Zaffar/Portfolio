import { hero, profile } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden rounded-b-panel bg-canvas"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(68,118,232,0.12),transparent)]"
      />
      <div className="shell relative w-full pt-28 pb-16 text-center">
        <Reveal stagger className="flex flex-col items-center gap-4">
          <p className="text-fluid-sm font-medium uppercase tracking-[0.3em] text-ink-muted">
            {hero.greeting}
          </p>
          <h1 className="font-display text-fluid-hero font-bold leading-[0.95]">
            <span className="text-ink-muted">{hero.intro} </span>
            <span className="bg-gradient-to-br from-brand to-ink bg-clip-text text-transparent">
              {profile.fullName}
            </span>
          </h1>
          <p className="max-w-prose text-fluid-lg text-ink-muted">{hero.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-ink px-7 py-3 text-fluid-base font-medium text-white transition-transform hover:scale-95"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="rounded-full border border-ink/15 px-7 py-3 text-fluid-base font-medium transition-colors hover:bg-ink hover:text-white"
            >
              View services
            </a>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute inset-x-0 bottom-6 mx-auto flex w-fit flex-col items-center gap-2 text-ink-muted"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.25em]">{hero.scrollHint}</span>
        <span className="h-10 w-px bg-gradient-to-b from-brand to-transparent" />
      </a>
    </section>
  );
}
