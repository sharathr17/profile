"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const animate = reduce ? false : true;

  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="radial-wash pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-32 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12 md:pb-32 md:pt-40 lg:px-8 lg:gap-20">
        <motion.div
          variants={container}
          initial={animate ? "hidden" : "show"}
          animate="show"
          className="relative"
        >
          <motion.p
            variants={rise}
            className="mb-6 font-mono text-sm text-muted"
          >
            <span className="mr-3 text-accent">/</span>
            Sharath R<span className="text-faint"> — </span>
            <span className="text-fg">Web Developer</span>
            <span className="text-faint"> · Bangalore</span>
          </motion.p>

          <motion.h1
            variants={rise}
            className="text-balance text-[clamp(2.4rem,6.2vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-fg"
          >
            Building useful <span className="text-accent">digital experiences</span> with code.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-5 font-mono text-sm text-muted"
          >
            <span className="text-faint">/</span>{" "}
            <span className="text-accent">MCA candidate</span>
            <span className="text-faint"> — </span>
            <span className="text-fg">RVITM · Bangalore</span>
          </motion.p>

          <motion.p
            variants={rise}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-[17px]"
          >
            MCA student with a BCA background, focused on learning, building
            practical web applications, and turning ideas into useful
            experiences.
          </motion.p>

          <motion.p variants={rise} className="mt-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 font-mono text-xs text-accent">
              <motion.span
                aria-hidden
                animate={reduce ? undefined : { scale: [1, 1.5, 1], opacity: [1, 0.45, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className={`size-1.5 rounded-full ${reduce ? "bg-accent" : "bg-current"}`}
              />
              Available for internships & open to work — 2026
            </span>
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent shadow-[0_8px_24px_-8px_var(--shadow-color)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-ring"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-ring"
            >
              <Download
                size={15}
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={rise}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[13px] text-muted"
          >
            <a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tap inline-flex items-center gap-2 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
            >
              <GitHubIcon size={14} /> GitHub
            </a>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tap inline-flex items-center gap-2 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
            >
              <LinkedInIcon size={14} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="tap group inline-flex items-center gap-2 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
            >
              <Mail size={14} aria-hidden /> Email
            </a>
            <span className="inline-flex items-center gap-2 text-faint">
              <MapPin size={14} aria-hidden /> Bangalore / Kundapur
            </span>
          </motion.div>
        </motion.div>

        {/* Portrait composition */}
        <motion.div
          initial={animate ? { opacity: 0, y: 24, scale: 0.97 } : false}
          animate={animate ? { opacity: 1, y: 0, scale: 1 } : false}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="relative mx-auto w-full max-w-[380px] md:max-w-none"
        >
          <div aria-hidden className="bg-grid absolute -inset-6 -z-10 rounded-2xl opacity-60 md:-inset-10" />
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-2xl md:-inset-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 40%, color-mix(in oklab, var(--accent) 7%, transparent), transparent 70%)",
            }}
          />

          <div className="relative rounded-2xl border border-border bg-surface/60 p-3">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-3 -top-3 hidden h-16 w-16 rounded-tl-xl border-l border-t border-accent sm:block"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-3 -right-3 hidden h-16 w-16 rounded-br-xl border-b border-r border-accent/70 sm:block"
            />
            <figure className="overflow-hidden rounded-xl">
              <Image
                src={
                  imageFailed
                    ? "/profile-placeholder.svg"
                    : profile.profileImage
                }
                onError={() => setImageFailed(true)}
                alt="Portrait of Sharath R"
                width={520}
                height={650}
                priority
                sizes="(min-width: 768px) 42vw, 90vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
            <figcaption className="flex items-center justify-between px-1 pt-3 font-mono text-[11px] text-faint">
              <span>
                <span className="text-accent">[01]</span> portrait
              </span>
              <span>Sharath R — Web Developer</span>
            </figcaption>
          </div>

          {/* floating metadata — entrance only, calm afterwards */}
          <motion.div
            initial={animate ? { opacity: 0, x: 16 } : false}
            animate={animate ? { opacity: 1, x: 0 } : false}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="absolute -right-2 top-8 hidden rounded-lg border border-border bg-surface px-3.5 py-2.5 font-mono text-[11px] text-muted shadow-[0_10px_30px_-12px_var(--shadow-color)] sm:block md:-right-5"
          >
            <span className="mb-1 flex items-center gap-1.5 text-faint">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              education
            </span>
            <span className="text-fg">MCA candidate · 2025–2027</span>
          </motion.div>

          <motion.div
            initial={animate ? { opacity: 0, x: -16 } : false}
            animate={animate ? { opacity: 1, x: 0 } : false}
            transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
            className="absolute -left-2 bottom-20 hidden rounded-lg border border-border bg-surface px-3.5 py-2.5 font-mono text-[11px] text-muted shadow-[0_10px_30px_-12px_var(--shadow-color)] sm:block md:-left-5"
          >
            <span className="mb-1 block text-faint">tools</span>
            <span className="text-fg">python · react · css · sql</span>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={animate ? { opacity: 0 } : false}
        animate={animate ? { opacity: 1 } : false}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] text-faint transition-colors hover:text-accent md:flex"
        aria-label="Scroll to About section"
      >
        scroll
        <motion.span
          aria-hidden
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-border-strong"
        />
      </motion.a>
    </section>
  );
}