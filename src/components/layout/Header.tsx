import { useEffect, useState } from "react";
import { nav, profile } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-hairline bg-canvas/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-14 items-center justify-between" aria-label="Primary">
        <a href="#home" className="font-mono text-fluid-sm font-medium text-ink">
          <span className="text-mute">$ </span>
          {profile.handle}
          <span className="ml-0.5 inline-block w-2 animate-pulse text-term-green">▌</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-fluid-sm font-medium text-body transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="pill-primary hidden md:inline-flex">
            Get in touch
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-pill border border-hairline-strong md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-0.5 w-4 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-4 bg-ink transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-4 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-canvas md:hidden">
          <ul className="shell flex flex-col gap-1 py-3">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 font-mono text-fluid-sm text-body transition-colors hover:bg-surface-soft hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="pill-primary mt-2 w-full">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
