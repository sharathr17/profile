import {
  GraduationCap,
  Palette,
  Users,
  Wrench,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const categoryIcons: Record<string, LucideIcon> = {
  design: Palette,
  learning: GraduationCap,
  tools: Wrench,
  interview: Users,
};

export function Certifications() {
  return (
    <section id="certifications" className="relative border-t border-border py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-12 md:gap-16 lg:px-8">
        <div className="md:col-span-4">
          <Reveal>
            <div className="md:sticky md:top-28">
              <SectionHeading
                index="04"
                label="Certifications"
                title="Workshops and certificates"
                description="Short, focused programs that rounded out my learning beyond the classroom."
              />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal delay={0.08}>
            <ul className="divide-y divide-border border-y border-border">
              {certifications.map((cert, i) => {
                const Icon = categoryIcons[cert.category] ?? GraduationCap;
                return (
                  <li key={cert.title} className="group">
                    <div className="flex items-start gap-4 py-5 transition-colors duration-200 hover:bg-surface/40 sm:gap-6 sm:py-6">
                      <span className="w-6 shrink-0 pt-1 font-mono text-xs text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-surface text-accent transition-colors duration-200 group-hover:border-accent/50">
                        <Icon size={16} aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-pretty text-[15px] font-medium leading-snug text-fg">
                          {cert.title}
                        </h3>
                        <p className="mt-0.5 font-mono text-xs text-faint">
                          {cert.organization}
                        </p>
                      </div>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 shrink-0 text-faint transition-colors hover:text-accent"
                          aria-label={`View certificate — ${cert.title}`}
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}