"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export function EducationTimeline() {
  const reduce = useReducedMotion();

  return (
    <section id="education" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            index="02"
            label="Education"
            title="Where I've studied"
            description="From SSLC in Kirimanjeshwara through pre-university and a BCA in Kundapur, to an MCA in Bangalore."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* timeline rail — draws in on scroll */}
          <motion.div
            aria-hidden
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-6 left-[7px] top-6 w-px bg-border"
          />

          <ol className="space-y-5">
            {education.map((entry, i) => (
              <motion.li
                key={entry.degree}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                className="relative pl-12 md:pl-14"
              >
                {/* node */}
                <span
                  aria-hidden
                  className={`absolute left-[1px] top-[18px] size-[13px] rounded-full border-2 bg-bg transition-colors duration-300 ${
                    entry.current
                      ? "border-accent shadow-[0_0_0_4px_var(--accent-soft)]"
                      : "border-border-strong"
                  }`}
                />

                <div
                  className={`group rounded-xl border p-6 transition-colors duration-300 hover:border-accent/40 md:p-7 ${
                    entry.current
                      ? "border-accent/35 bg-surface"
                      : "border-border bg-bg-soft/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-xs text-accent">
                      <time dateTime={entry.years.replace(/\s/g, "").split("–")[0]}>
                        {entry.years}
                      </time>
                    </p>
                    <span
                      aria-hidden
                      className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-accent/70"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-lg font-semibold tracking-tight text-fg md:text-xl">
                      {entry.degree}
                    </h3>
                    {entry.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                        <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-1.5 text-[15px] text-muted">{entry.institution}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-1.5 border-t border-border pt-4 font-mono text-xs text-faint">
                    <span className="inline-flex items-center gap-1.5">
                      <GraduationCap size={13} className="text-accent" aria-hidden />
                      {entry.university}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-accent" aria-hidden />
                      {entry.location}
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}