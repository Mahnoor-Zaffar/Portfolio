import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function Section({ id, children, className = "", ariaLabel }: SectionProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={`scroll-mt-20 py-section ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

/** Documentation-style section heading: monospace index marker + title. */
export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-reading">
      <span className="eyebrow">{index}</span>
      <h2 className="mt-3 text-fluid-2xl font-bold">{title}</h2>
      {description && <p className="mt-3 text-fluid-lg text-body">{description}</p>}
    </div>
  );
}
