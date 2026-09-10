import { Download, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function ResumeSection() {
  return (
    <section id="resume" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-12 md:gap-16 lg:px-8">
        <div className="md:col-span-5">
          <Reveal>
            <div className="md:sticky md:top-28">
              <SectionHeading
                index="06"
                label="Resume"
                title="Resume & credentials"
                description="A one-page summary of my education, skills, and projects. Preview it here or download the PDF."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <Download size={16} aria-hidden />
                  Download Resume
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <FileText size={15} aria-hidden />
                  Request a copy
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.08}>
            {/* Desktop: embedded PDF preview */}
            <div className="hidden overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_60px_-24px_var(--shadow-color)] md:block">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <p className="font-mono text-[11px] text-faint">
                  <span className="text-accent">/</span> resume.pdf
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="tap font-mono text-[11px] text-muted transition-colors hover:text-accent"
                >
                  download ↓
                </a>
              </div>
              <iframe
                src="/resume.pdf"
                title="Sharath R — Resume"
                className="h-[560px] w-full bg-bg-soft"
              />
            </div>

            {/* Mobile: accessible summary instead of an unusable embed */}
            <div className="rounded-xl border border-border bg-surface md:hidden">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <p className="font-mono text-[11px] text-faint">
                  <span className="text-accent">/</span> resume.pdf
                </p>
              </div>
              <div className="space-y-4 p-5">
                <p className="font-mono text-sm text-fg">
                  {profile.name}
                  <span className="text-faint"> — {profile.role}</span>
                </p>
                <ul className="space-y-2.5 border-l border-border pl-4 font-mono text-[13px] text-muted">
                  <li>MCA — RVITM, Bangalore · 2025–2027</li>
                  <li>BCA — IMJ Institute, Kundapur · 2022–2025</li>
                  <li>Python · React · CSS · SQL</li>
                  <li>
                    <span className="text-faint">contact —</span> {profile.email}
                  </li>
                </ul>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
                >
                  <Download size={16} aria-hidden />
                  Download Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}