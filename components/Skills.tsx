import {
  Atom,
  Code2,
  Database,
  Languages as LanguagesIcon,
  Lightbulb,
  Palette,
  RefreshCw,
  Users,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const technicalIcons: Record<string, LucideIcon> = {
  Python: Code2,
  "React.js": Atom,
  CSS: Palette,
  SQL: Database,
};

const softIcons: Record<string, LucideIcon> = {
  "Team Collaboration": Users,
  "Critical Thinking": Lightbulb,
  Adaptability: RefreshCw,
};

export function Skills() {
  const technical = skills.find((s) => s.id === "technical")!;
  const soft = skills.find((s) => s.id === "soft")!;
  const languages = skills.find((s) => s.id === "languages")!;

  return (
    <section id="skills" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-12 md:gap-16 lg:px-8">
        <div className="md:col-span-4">
          <Reveal>
            <div className="md:sticky md:top-28">
              <SectionHeading
                index="03"
                label="Skills"
                title="The tools and the ways I work"
                description="A straightforward list — what I build with, how I collaborate, and what I communicate in."
              />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          {/* Technical */}
          <Reveal>
            <div className="border-b border-border pb-10">
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium text-fg">
                  {technical.label}
                </h3>
                <p className="font-mono text-xs text-faint">{technical.note}</p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {technical.items.map((item) => {
                  const Icon = technicalIcons[item.name] ?? Code2;
                  return (
                    <li key={item.name}>
                      <span className="group flex h-full items-center gap-2.5 rounded-lg border border-border bg-surface px-3.5 py-3.5 font-mono text-[13px] text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-fg focus-visible:outline-2 focus-visible:outline-ring">
                        <Icon
                          size={16}
                          className="shrink-0 text-accent transition-colors duration-200"
                          aria-hidden
                        />
                        <span className="truncate">{item.name}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* Soft skills */}
          <Reveal>
            <div className="border-b border-border py-10">
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium text-fg">{soft.label}</h3>
                <p className="font-mono text-xs text-faint">{soft.note}</p>
              </div>
              <ul className="divide-y divide-border/70">
                {soft.items.map((item, i) => {
                  const Icon = softIcons[item.name] ?? Users;
                  return (
                    <li key={item.name}>
                      <span className="group flex items-center gap-4 py-4">
                        <span className="w-6 shrink-0 font-mono text-xs text-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-[15px] text-fg transition-colors duration-200 group-hover:text-accent">
                          {item.name}
                        </span>
                        <Icon
                          size={16}
                          className="text-faint transition-colors duration-200 group-hover:text-accent"
                          aria-hidden
                        />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* Languages */}
          <Reveal>
            <div className="pt-10">
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h3 className="flex items-center gap-2 text-lg font-medium text-fg">
                  <LanguagesIcon size={17} className="text-accent" aria-hidden />
                  {languages.label}
                </h3>
                <p className="font-mono text-xs text-faint">{languages.note}</p>
              </div>
              <div className="flex flex-wrap items-end gap-x-8 gap-y-3">
                {languages.items.map((item, i) => (
                  <div key={item.name} className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-accent">
                      {["EN", "KN", "HI"][i]}
                    </span>
                    <span className="text-2xl font-medium tracking-tight text-fg">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}