import { ArrowUp, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { nav, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a
              href="#home"
              className="tap inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-ring"
              aria-label="Back to top"
            >
              <span className="grid size-8 place-items-center rounded-md border border-border bg-surface font-mono text-[11px] font-medium text-accent">
                SR
              </span>
              <span className="font-mono text-sm text-fg">Sharath R</span>
            </a>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
              Web developer in Bangalore building practical, useful software —
              one project at a time.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-14 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="tap font-mono text-[13px] text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <a
                href={profile.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="tap-box grid size-10 place-items-center rounded-lg border border-border text-muted transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
              >
                <GitHubIcon size={16} />
              </a>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="tap-box grid size-10 place-items-center rounded-lg border border-border text-muted transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="tap-box grid size-10 place-items-center rounded-lg border border-border text-muted transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
              >
                <Mail size={16} aria-hidden />
              </a>
            </div>
            <a
              href="#home"
              className="tap inline-flex items-center gap-2 font-mono text-xs text-faint transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
            >
              Back to top <ArrowUp size={13} className="text-accent" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 font-mono text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>
            Built with Next.js · Tailwind CSS ·{" "}
            <span className="text-accent">React</span>
          </p>
        </div>
      </div>
    </footer>
  );
}