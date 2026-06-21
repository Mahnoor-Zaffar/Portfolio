import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Visually-hidden label for assistive tech when there is no visible heading. */
  ariaLabel?: string;
};

export function Section({ id, children, className = "", ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`scroll-mt-24 py-16 sm:py-24 lg:py-32 ${className}`}
    >
      <div className="shell">{children}</div>
    </section>
  );
}
