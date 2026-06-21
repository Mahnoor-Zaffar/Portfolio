import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { animate, stagger, prefersReducedMotion } from "@/lib/anime";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger direct children instead of revealing the container as one unit. */
  stagger?: boolean;
  delay?: number;
};

/**
 * Scroll-triggered reveal powered by anime.js + IntersectionObserver.
 * Content is visible by default; the hidden start state is applied via JS only
 * when motion is allowed, so nothing disappears if JS/motion is unavailable.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  stagger: doStagger = false,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const targets = doStagger ? (Array.from(el.children) as HTMLElement[]) : el;
    const nodes = Array.isArray(targets) ? targets : [targets];
    nodes.forEach((n) => (n.style.opacity = "0"));

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          animate(targets, {
            opacity: [0, 1],
            translateY: [18, 0],
            duration: 750,
            delay: doStagger ? stagger(80, { start: delay }) : delay,
            ease: "outExpo",
          });
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [doStagger, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
