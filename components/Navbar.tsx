"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - lastY.current) > 8) {
        setHidden(y > 180 && y > lastY.current);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    for (const item of nav) {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={
        reduce || open ? { y: 0 } : hidden ? { y: "-100%" } : { y: 0 }
      }
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/85 shadow-[0_12px_32px_-20px_var(--shadow-color)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="tap group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-ring"
          aria-label="Sharath R — back to top"
        >
          <span className="grid size-8 place-items-center rounded-md border border-border bg-surface font-mono text-[11px] font-medium tracking-tight text-accent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent">
            SR
          </span>
          <span className="font-mono text-sm tracking-tight text-fg transition-colors duration-300 group-hover:text-accent">
            Sharath R
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-ring ${
                  isActive
                    ? "text-fg"
                    : "text-muted hover:bg-surface/60 hover:text-fg"
                }`}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="tap-box grid size-10 place-items-center rounded-full border border-border text-muted transition-all duration-200 active:scale-95 hover:border-border-strong hover:text-fg md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="grid place-items-center"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-b border-border bg-bg/95 backdrop-blur-md md:hidden"
          >
            <nav aria-label="Mobile" className="px-5 pb-6 pt-2">
              <motion.ul
                initial={reduce ? undefined : "hidden"}
                animate={reduce ? undefined : "show"}
                exit={reduce ? undefined : "hidden"}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                }}
                className="flex flex-col"
              >
                {nav.map((item, i) => {
                  const isActive = active === item.href.slice(1);
                  return (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
                      }}
                      className="border-b border-border/70 last:border-0"
                    >
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-baseline gap-3 py-3.5 font-mono text-lg transition-colors duration-200 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-ring ${
                          isActive
                            ? "text-accent"
                            : "text-fg hover:text-accent"
                        }`}
                      >
                        <span className="text-xs text-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>
              <motion.div
                initial={reduce ? undefined : { opacity: 0 }}
                animate={reduce ? undefined : { opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ delay: 0.28, duration: 0.25 }}
                className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-faint"
              >
                <a
                  className="tap transition-colors hover:text-accent"
                  href={profile.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="tap transition-colors hover:text-accent"
                  href={profile.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="tap transition-colors hover:text-accent"
                  href={`mailto:${profile.email}`}
                >
                  Email
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}