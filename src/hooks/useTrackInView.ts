import { useEffect, useRef } from "react";

type UseTrackInViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

/**
 * Calls `onInView` exactly once when the returned element first scrolls into
 * view. Used to fire analytics events without re-firing across re-renders.
 */
export function useTrackInView(
  onInView: () => void,
  { threshold = 0.5, rootMargin = "0px" }: UseTrackInViewOptions = {},
) {
  const ref = useRef<HTMLElement>(null);
  const fired = useRef(false);
  const callback = useRef(onInView);
  callback.current = onInView;

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          fired.current = true;
          callback.current();
          obs.disconnect();
          return;
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
