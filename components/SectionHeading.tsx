import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header>
      <p className="mb-4 flex items-center gap-2 font-mono text-xs text-accent">
        <span className="text-faint">/</span>
        {index} · {label}
      </p>
      <h2 className="text-balance text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-fg">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted md:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}