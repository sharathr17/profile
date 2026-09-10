"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/data/portfolio";
import { ProjectVisual } from "@/components/ProjectVisuals";

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const isPlaceholderGitHub = project?.githubUrl.startsWith("REPLACE_WITH");
  const isPlaceholderDemo = project?.demoUrl.startsWith("REPLACE_WITH");
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (project) {
      restoreRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      restoreRef.current?.focus();
      restoreRef.current = null;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && project) onClose();
      // lightweight focus trap
      if (e.key === "Tab" && project && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
        ).filter((el) => el.offsetParent !== null);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Close project details"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-border bg-surface shadow-2xl sm:rounded-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface/95 px-5 py-3 backdrop-blur-sm sm:px-7">
              <p className="font-mono text-xs text-faint">
                <span className="text-accent">{project.index}</span> / project
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="grid size-9 place-items-center rounded-full border border-border text-muted transition-all duration-200 hover:border-border-strong hover:text-fg active:scale-90 focus-visible:outline-2 focus-visible:outline-ring"
              >
                <X size={16} />
              </button>
            </div>

            <div className="px-5 pb-7 pt-6 sm:px-7">
              <h3
                id="project-dialog-title"
                className="text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
              >
                {project.title}
              </h3>
              <p className="mt-2.5 text-pretty leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-6">
                <ProjectVisual project={project} />
                <p className="mt-2 text-right font-mono text-[10px] text-faint">
                  conceptual UI mockup
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-mono text-[11px] text-faint">
                  Details
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {project.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-[14px] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-mono text-[11px] text-faint">
                  Technologies
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-bg-soft px-2.5 py-1 font-mono text-[12px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                {isPlaceholderGitHub ? (
                  <span
                    title="Repo link coming soon"
                    className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border bg-bg-soft px-5 py-3 text-sm font-medium text-faint"
                  >
                    <GitHubIcon size={15} /> GitHub
                  </span>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-bg-soft px-5 py-3 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    <GitHubIcon size={15} /> GitHub
                  </a>
                )}
                {isPlaceholderDemo ? (
                  <span
                    title="Live demo coming soon"
                    className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border bg-bg-soft px-5 py-3 text-sm font-medium text-faint"
                  >
                    Live Demo <ArrowUpRight size={15} aria-hidden />
                  </span>
                ) : (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    Live Demo <ArrowUpRight size={15} aria-hidden />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}