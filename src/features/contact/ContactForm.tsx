import { useState, type FormEvent } from "react";
import { profile } from "@/content/site";

type Status = "idle" | "error" | "sent";

/**
 * Working contact form with no backend or secrets: on submit it composes a
 * pre-filled mailto: and opens the visitor's mail client. The destination
 * address is only assembled in JS at submit time, so it never sits in the
 * public DOM. Swap `openMailClient` for a Formspree/EmailJS call later for
 * server-side delivery.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name.trim() || !isValidEmail || !message.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()} (${email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const fieldClass =
    "w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-fluid-sm text-on-dark placeholder:text-on-dark-mute focus:border-white/40 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 flex w-full flex-col gap-3 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-fluid-caption text-on-dark-mute">name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={fieldClass}
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-fluid-caption text-on-dark-mute">email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={fieldClass}
            autoComplete="email"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-fluid-caption text-on-dark-mute">message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project…"
          rows={4}
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="mt-1 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-pill bg-canvas px-6 py-2.5 font-mono text-fluid-sm font-medium text-ink transition-transform duration-200 hover:scale-[0.97]"
        >
          <span className="text-term-green">$</span> send message
        </button>
        {status === "error" && (
          <span className="text-fluid-caption text-term-red" role="alert">
            Please complete all fields with a valid email.
          </span>
        )}
        {status === "sent" && (
          <span className="text-fluid-caption text-term-green" role="status">
            Opening your email client…
          </span>
        )}
      </div>
    </form>
  );
}
