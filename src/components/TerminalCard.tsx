import type { ReactNode } from "react";

type TerminalCardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Signature Ollama-style terminal mockup: hairline card, macOS traffic
 * lights, monospace body. Used for the hero "whoami" and the skills explorer.
 */
export function TerminalCard({ title = "bash — mahnoor@dev", children, className = "" }: TerminalCardProps) {
  return (
    <div className={`card overflow-hidden bg-surface-soft ${className}`}>
      <div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-pill bg-term-red" />
          <span className="h-3 w-3 rounded-pill bg-term-yellow" />
          <span className="h-3 w-3 rounded-pill bg-term-green" />
        </span>
        <span className="font-mono text-fluid-caption text-mute">{title}</span>
      </div>
      <div className="p-4 font-mono text-fluid-sm sm:p-5">{children}</div>
    </div>
  );
}
