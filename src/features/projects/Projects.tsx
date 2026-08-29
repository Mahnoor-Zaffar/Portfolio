import { projects, type Project } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { trackEvent } from "@/lib/posthog";
import { useTrackInView } from "@/hooks/useTrackInView";

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useTrackInView(() =>
    trackEvent("project_view", {
      project_name: project.name,
      project_domain: project.domain,
    }),
  );

  return (
    <article ref={cardRef} className="card group flex flex-col overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-hairline bg-surface-soft">
        <img
          src={project.image}
          alt=""
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-pill border border-hairline bg-canvas/90 px-3 py-1 font-mono text-fluid-caption text-term-green backdrop-blur-sm">
          {project.domain}
        </span>
      </div>

      <div className="flex flex-grow flex-col gap-4 p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-fluid-lg font-semibold text-ink">{project.name}</h3>
            <p className="mt-1 text-fluid-sm text-mute">{project.tagline}</p>
          </div>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} source on GitHub`}
              onClick={() =>
                trackEvent("github_click", {
                  location: "card",
                  project_name: project.name,
                  url: project.repo,
                })
              }
              className="mt-0.5 shrink-0 text-mute transition-colors hover:text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
          )}
        </div>

        <p className="flex-grow text-fluid-base text-body">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-1 font-mono text-fluid-sm">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("demo_click", {
                  project_name: project.name,
                  url: project.demo,
                })
              }
              className="text-term-green transition-opacity hover:opacity-70"
            >
              live demo →
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("github_click", {
                  location: "card",
                  project_name: project.name,
                  url: project.repo,
                })
              }
              className="text-mute transition-colors hover:text-ink"
            >
              source →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const sectionRef = useTrackInView(() =>
    trackEvent("section_view", { section: "projects" }),
  );

  return (
    <Section id="projects" className="border-b border-hairline" ref={sectionRef}>
      <SectionHeading
        index="// 03 — projects"
        title={projects.heading}
        description={projects.description}
      />

      <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Reveal>

      <div className="mt-10">
        <a
          href={projects.more.href}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackEvent("github_click", {
              location: "projects_more",
              url: projects.more.href,
            })
          }
          className="pill-ghost"
        >
          {projects.more.label}
        </a>
      </div>
    </Section>
  );
}
