"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.handle,
    href: profile.linkedin.url,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: profile.github.handle,
    href: profile.github.url,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    href: `https://www.google.com/maps/search/${encodeURIComponent(profile.location)}`,
    icon: MapPin,
    external: true,
  },
];

type FieldErrors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (name.trim().length < 2) {
      next.name = "Please add your name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please add a valid email address.";
    }
    if (message.trim().length < 10) {
      next.message = "Please write a message of at least 10 characters.";
    }
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    /*
     * TODO: connect a real delivery service. Choose one of:
     *   - Resend:  https://resend.com  (recommended — works on Vercel with a route handler)
     *   - Formspree: https://formspree.io  (POST the form to your form endpoint)
     *   - EmailJS:  https://www.emailjs.com  (client-side SDK)
     * Until then, submissions are not sent anywhere — the success state
     * offers a pre-filled mailto: link instead.
     */
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  return (
    <section id="contact" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-6 md:grid-cols-12 md:gap-16 lg:px-8">
        <div className="md:col-span-6">
          <Reveal>
            <header>
              <p className="mb-4 flex items-center gap-2 font-mono text-xs text-accent">
                <span className="text-faint">/</span>
                07 · Contact
              </p>
              <h2 className="text-balance text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-fg">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-[15px] leading-relaxed text-muted md:text-base">
                Have a project in mind, a question, or just want to talk
                development? My inbox is open — I usually reply within a day.
              </p>
            </header>

            <address className="mt-10 not-italic">
              <ul>
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.label}
                      className="group border-b border-border first:border-t"
                    >
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex items-center gap-4 py-4 transition-colors duration-200 hover:bg-surface/40 focus-visible:outline-2 focus-visible:outline-ring"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-surface text-accent transition-colors duration-200 group-hover:border-accent/50">
                          <Icon size={16} aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-mono text-[11px] text-faint">
                            {item.label}
                          </span>
                          <span className="block truncate text-[15px] text-fg">
                            {item.value}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                          aria-hidden
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </address>
          </Reveal>
        </div>

        <div className="md:col-span-6">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface shadow-[0_24px_60px_-24px_var(--shadow-color)]">
              {status === "success" ? (
                <div className="p-7 sm:p-9">
                  <div className="grid size-12 place-items-center rounded-full border border-accent/40 bg-accent-soft text-accent">
                    <Check size={20} aria-hidden />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-fg">
                    Message ready, {name.split(" ")[0] || "there"}.
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                    This form isn&apos;t wired to a delivery service yet, so nothing
                    was sent. Open your email app below with everything
                    pre-filled, or write directly to{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-accent underline underline-offset-4"
                    >
                      {profile.email}
                    </a>
                    .
                  </p>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(
                      subject || `Portfolio message from ${name}`
                    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:scale-[0.98]"
                  >
                    <Mail size={16} aria-hidden />
                    Open in my email app
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setMessage("");
                    }}
                    className="mt-4 block font-mono text-xs text-faint underline-offset-4 hover:text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="p-7 sm:p-9">
                  <p className="mb-6 font-mono text-xs text-faint">
                    <span className="text-accent">/</span> send a message
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block font-mono text-[11px] text-muted"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "contact-name-error" : undefined
                        }
                        className={`w-full rounded-lg border bg-bg-soft px-3.5 py-3 text-[15px] text-fg placeholder:text-faint focus:outline-2 focus:outline-ring ${
                          errors.name ? "border-danger" : "border-border"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1.5 font-mono text-[11px] text-danger"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block font-mono text-[11px] text-muted"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "contact-email-error" : undefined
                        }
                        className={`w-full rounded-lg border bg-bg-soft px-3.5 py-3 text-[15px] text-fg placeholder:text-faint focus:outline-2 focus:outline-ring ${
                          errors.email ? "border-danger" : "border-border"
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1.5 font-mono text-[11px] text-danger"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block font-mono text-[11px] text-muted"
                    >
                      Subject <span className="text-faint">(optional)</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-lg border border-border bg-bg-soft px-3.5 py-3 text-[15px] text-fg placeholder:text-faint focus:outline-2 focus:outline-ring"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block font-mono text-[11px] text-muted"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                      className={`w-full resize-y rounded-lg border bg-bg-soft px-3.5 py-3 text-[15px] text-fg placeholder:text-faint focus:outline-2 focus:outline-ring ${
                        errors.message ? "border-danger" : "border-border"
                      }`}
                      placeholder="Tell me a little about the project…"
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1.5 font-mono text-[11px] text-danger"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-accent disabled:active:scale-100 sm:w-auto"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" aria-hidden />
                        Preparing…
                      </>
                    ) : (
                      <>
                        <Send size={15} aria-hidden />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
