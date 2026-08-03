import { useRef, useState, type FormEvent } from "react";
import { profile } from "@/content/site";
import { emailjsConfig, isEmailjsConfigured } from "@/lib/emailjs";

type Status = "idle" | "error" | "sending" | "sent" | "mailto";

/**
 * Contact form with serverless delivery via EmailJS. Falls back to mailto:
 * when EmailJS is unavailable or rejects the request. The destination address
 * is never placed in the public DOM.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const submitted = useRef(false);

  const sendViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()} (${email.trim()})`);
    const link = document.createElement("a");
    link.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    link.target = "_blank";
    link.click();
    setStatus("mailto");
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitted.current) return;

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name.trim() || !isValidEmail || !message.trim()) {
      setStatus("error");
      return;
    }

    submitted.current = true;

    if (!isEmailjsConfigured) {
      sendViaMailto();
      return;
    }

    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: name.trim(),
          reply_to: email.trim(),
          message: message.trim(),
        },
        { publicKey: emailjsConfig.publicKey },
      );
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      sendViaMailto();
    }
  };

  const fieldClass =
    "w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-fluid-sm text-on-dark placeholder:text-on-dark-mute focus:border-white/40 focus:outline-none disabled:opacity-60";

  const busy = status === "sending" || status === "sent" || status === "mailto";

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
          <span className="text-term-green">$</span> {status === "sending" ? "sending…" : "send message"}
        </button>
        {status === "error" && (
          <span className="text-fluid-caption text-term-red" role="alert">
            Please fill in all fields with a valid email.
          </span>
        )}
        {status === "sent" && (
          <span className="text-fluid-caption text-term-green" role="status">
            Message sent — thank you! I'll be in touch soon.
          </span>
        )}
        {status === "mailto" && (
          <span className="text-fluid-caption text-term-amber" role="status">
            Check your email app — your message is ready to send.
          </span>
        )}
      </div>
    </form>
  );
}
