import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/posthog";

type Status = "idle" | "sending" | "error" | "sent";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name.trim() || !isValidEmail || !message.trim()) {
      setStatus("error");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";
    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `Portfolio enquiry from ${name.trim()}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        trackEvent("contact_form_sent", { name: name.trim() });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-fluid-sm text-on-dark placeholder:text-on-dark-mute focus:border-white/40 focus:outline-none disabled:opacity-60";

  const busy = status === "sending" || status === "sent";

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
            disabled={busy}
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
            disabled={busy}
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
          disabled={busy}
        />
      </label>

      <div className="mt-1 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-pill bg-canvas px-6 py-2.5 font-mono text-fluid-sm font-medium text-ink transition-transform duration-200 hover:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span className="text-term-green">$</span> {status === "sending" ? "sending..." : status === "sent" ? "sent ✓" : "send message"}
        </button>
        {status === "error" && (
          <span className="text-fluid-caption text-term-red" role="alert">
            Something went wrong. Please try again or email directly.
          </span>
        )}
        {status === "sent" && (
          <span className="text-fluid-caption text-term-green" role="status">
            Message sent! I'll get back to you soon.
          </span>
        )}
      </div>
    </form>
  );
}
