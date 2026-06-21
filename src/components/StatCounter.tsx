import { useEffect, useRef } from "react";
import { animate, utils, prefersReducedMotion } from "@/lib/anime";

type StatCounterProps = {
  value: string;
  label: string;
};

/** Splits "15+" / "100%" into an animatable number and a static suffix. */
function parse(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/(\d+)/);
  if (!match) return { num: 0, prefix: value, suffix: "" };
  const num = Number(match[1]);
  const [prefix, suffix] = value.split(match[1]);
  return { num, prefix, suffix };
}

export function StatCounter({ value, label }: StatCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const { num, prefix, suffix } = parse(value);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = String(num);
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const obj = { v: 0 };
          animate(obj, {
            v: num,
            duration: 1400,
            ease: "outExpo",
            onUpdate: () => {
              el.textContent = String(utils.round(obj.v, 0));
            },
          });
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [num]);

  return (
    <div className="flex flex-col gap-1">
      <div className="font-display text-fluid-xl font-bold text-ink">
        {prefix}
        <span ref={numRef}>0</span>
        {suffix}
      </div>
      <div className="text-fluid-sm text-body">{label}</div>
    </div>
  );
}
