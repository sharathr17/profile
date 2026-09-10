"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProjectVisual } from "@/components/ProjectVisuals";
import { ProjectDialog } from "@/components/ProjectDialog";

function Showcase({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const reversed = index % 2 === 1;
  const isPlaceholderGitHub = project.githubUrl.startsWith("REPLACE_WITH");
  const isPlaceholderDemo = project.demoUrl.startsWith("REPLACE_WITH");

  return (
    <article className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
      {/* Visual */}
      <div className={reversed ? "md:order-2" : undefined}>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            onOpen(project);
          }}
          className="group block cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-ring"
          aria-label={`Open details — ${project.title}`}
        >
          <ProjectVisual project={project} />
        </a>
        <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-faint">
          <span className="flex items-center gap-2">
            <span className="text-accent">{project.index}</span>
            {project.title}
          </span>
          <span className="hidden sm:inline">conceptual preview</span>
        </div>
      </div>

      {/* Copy */}
      <div className={reversed ? "md:order-1" : undefined}>
        <p className="mb-4 font-mono text-xs text-faint">
          <span className="text-accent">{project.index}</span> / project
        </p>
        <h3 className="text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-fg sm:text-4xl lg:text-[2.75rem]">
          {project.title}
        </h3>
        <p className="mt-4 max-w-lg text-pretty text-[15px] leading-relaxed text-muted md:text-base">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent/60 hover:text-fg"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-ring"
          >
            Details
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </button>
          {isPlaceholderGitHub ? (
            <span
              title="Repo link coming soon"
              className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-5 py-3 text-sm font-medium text-faint"
            >
              <GitHubIcon size={15} /> GitHub
            </span>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface/40 px-5 py-3 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
            >
              <GitHubIcon size={15} /> GitHub
            </a>
          )}
          {isPlaceholderDemo ? (
            <span
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-5 py-3 text-sm font-medium text-faint"
            >
              Live Demo <ArrowUpRight size={15} aria-hidden />
            </span>
          ) : (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
            >
              Live Demo <ArrowUpRight size={15} aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              index="05"
              label="Projects"
              title="Things I've built"
              description="Three practical web applications built during my studies — each one a complete, working project rather than a demo."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-1 hidden font-mono text-xs text-faint md:block">
              <span className="text-accent">[{projects.length}]</span> selected
              work
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 md:mt-24 md:space-y-32">
          {projects.map((project, i) => (
            <Reveal key={project.index} y={28}>
              <Showcase
                project={project}
                index={i}
                onOpen={setSelected}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}