import {
  Briefcase,
  GraduationCap,
  MapPin,
  ArrowRight,
  User,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const facts = [
  { label: "name", value: profile.name, icon: User },
  { label: "role", value: profile.role, icon: Briefcase },
  { label: "education", value: "MCA · RVITM Bangalore", icon: GraduationCap },
  { label: "location", value: profile.location, icon: MapPin },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-12 md:gap-16 lg:px-8">
        <div className="md:col-span-4">
          <Reveal>
            <div className="md:sticky md:top-28">
              <SectionHeading
                index="01"
                label="About"
                title="A short introduction"
              />
              <dl className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface/40">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between gap-4 px-5 py-3.5 transition-colors duration-200 hover:bg-surface/40"
                  >
                    <dt className="flex shrink-0 items-center gap-2 font-mono text-xs text-faint">
                      <fact.icon size={13} className="text-accent" aria-hidden />
                      {fact.label}
                    </dt>
                    <dd className="truncate text-right font-mono text-[13px] text-fg">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal delay={0.08}>
            <div className="space-y-5 text-[16px] leading-[1.75] text-muted md:text-[17px]">
              {profile.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-balance text-xl font-medium leading-snug text-fg md:text-[22px]"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 border-l-2 border-accent bg-surface/50 py-1.5 pl-6 sm:flex-row sm:items-center sm:justify-between sm:pl-7">
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent">
                  <GraduationCap size={13} aria-hidden />
                  {profile.currently.label}
                </p>
                <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-fg">
                  {profile.currently.value}
                </p>
              </div>
              <a
                href="#education"
                className="tap group inline-flex shrink-0 items-center gap-1.5 font-mono text-[13px] text-accent transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-ring"
              >
                Education timeline
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}