import type { ComponentType } from "react";
import type { Project } from "@/data/portfolio";

function Chrome({ file }: { file: string }) {
  return (
    <div
      aria-hidden
      className="flex items-center gap-2 border-b border-border bg-surface px-3 py-2 font-mono text-[9px] text-faint sm:text-[10px]"
    >
      <span className="flex gap-1">
        <span className="size-2 rounded-full bg-[color-mix(in_oklab,var(--faint)_35%,transparent)]" />
        <span className="size-2 rounded-full bg-[color-mix(in_oklab,var(--faint)_35%,transparent)]" />
        <span className="size-2 rounded-full bg-[color-mix(in_oklab,var(--faint)_35%,transparent)]" />
      </span>
      <span className="ml-1 truncate">~/projects/{file}</span>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="pointer-events-none absolute right-2 top-2 z-10 hidden rounded border border-border bg-bg/80 px-1.5 py-0.5 font-mono text-[8px] tracking-wide text-faint backdrop-blur-sm sm:block sm:text-[9px]">
      {children}
    </span>
  );
}

/* ---------- Preview: Mobile Store Management System ---------- */

function StorePreview() {
  return (
    <div className="flex h-full">
      <div
        aria-hidden
        className="hidden w-20 shrink-0 space-y-1.5 border-r border-border bg-surface-2/60 p-2.5 sm:block"
      >
        {["Overview", "Products", "Stock", "Orders"].map((item, i) => (
          <div
            key={item}
            className={`truncate rounded px-1.5 py-1 text-[8px] ${
              i === 0
                ? "bg-accent/15 font-medium text-accent"
                : "text-faint"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="min-w-0 flex-1 p-3">
        <div className="mb-2.5 flex items-center justify-between">
          <p className="font-mono text-[9px] text-fg sm:text-[10px]">
            Stock overview
          </p>
          <div className="rounded border border-accent/40 bg-accent-soft px-1.5 py-0.5 text-[8px] text-accent">
            + Add product
          </div>
        </div>
        <div className="mb-2.5 grid grid-cols-2 gap-2">
          {[
            { label: "Products", value: "42" },
            { label: "Low stock", value: "03" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-md border border-border bg-surface px-2 py-1.5"
            >
              <p className="text-[8px] text-faint">{stat.label}</p>
              <p className="font-mono text-[11px] font-medium text-fg">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
        <table className="w-full">
          <thead>
            <tr className="font-mono text-[8px] text-faint">
              <th className="pb-1 text-left font-normal">Model</th>
              <th className="pb-1 text-left font-normal sm:table-cell">
                Category
              </th>
              <th className="pb-1 text-left font-normal">Stock</th>
              <th className="pb-1 text-right font-normal">Price</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[8px] text-muted">
            {[
              { m: "Galaxy A-series", c: "Android", s: "24", st: "ok", p: "₹18,499" },
              { m: "Pixel 8", c: "Android", s: "05", st: "low", p: "₹62,999" },
              { m: "iPhone 15", c: "iOS", s: "12", st: "ok", p: "₹68,900" },
              { m: "Redmi 12", c: "Android", s: "00", st: "out", p: "₹12,499" },
            ].map((row) => (
              <tr key={row.m} className="border-t border-border/70">
                <td className="py-1.5 pr-2 text-fg">{row.m}</td>
                <td className="hidden py-1.5 pr-2 text-faint sm:table-cell">
                  {row.c}
                </td>
                <td className="py-1.5 pr-2">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[7px] ${
                      row.st === "low"
                        ? "bg-[color-mix(in_oklab,var(--accent)_14%,transparent)] text-accent"
                        : row.st === "out"
                          ? "bg-[color-mix(in_oklab,#e2725b_14%,transparent)] text-[#e2725b]"
                          : "bg-[color-mix(in_oklab,var(--secondary)_14%,transparent)] text-secondary"
                    }`}
                  >
                    {row.s}
                  </span>
                </td>
                <td className="py-1.5 text-right text-accent">{row.p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- Preview: Weather Now ---------- */

const forecast = [
  { day: "Today", bars: [30, 55, 40, 70, 45, 80, 60], hi: "31°", lo: "23°" },
  { day: "Tue", bars: [50, 30, 65, 35, 60, 40, 75], hi: "32°", lo: "24°" },
  { day: "Wed", bars: [20, 45, 30, 55, 70, 45, 30], hi: "29°", lo: "22°" },
  { day: "Thu", bars: [60, 40, 75, 50, 35, 60, 45], hi: "30°", lo: "23°" },
];

function WeatherPreview() {
  return (
    <div className="flex h-full flex-col p-3">
      <div className="mb-2.5 flex items-center gap-2 rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[8px] text-faint">
        <span className="text-accent">⌕</span>
        <span className="flex-1 truncate">Search city or place</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-hidden rounded-lg border border-border bg-surface p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[8px] text-faint">
              Current conditions
            </p>
            <p className="mt-0.5 text-[8px] text-muted">Kundapur, Karnataka</p>
          </div>
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-full bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-accent"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a7 7 0 0 0 0 14 7 7 0 0 0 0-14Zm0 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
              <path d="M12 18c-4.5 0-7.5 1.8-8.6 4.4l1.8.9C6 21.4 8.4 20 12 20s6 1.4 6.8 3.3l1.8-.9C19.5 19.8 16.5 18 12 18Z" />
            </svg>
          </span>
        </div>
        <div className="flex items-end justify-between">
          <p className="font-mono text-[26px] font-medium leading-none text-fg">
            27<span className="text-sm text-faint">°C</span>
          </p>
          <p className="text-[9px] text-muted">Partly cloudy · feels 28°</p>
        </div>
        <div className="mt-auto space-y-1">
          <p className="font-mono text-[8px] text-faint">3-day forecast</p>
          <div className="grid grid-cols-4 gap-1.5">
            {forecast.map((d) => (
              <div
                key={d.day}
                className="rounded-md border border-border bg-bg-soft p-1.5"
              >
                <p className="mb-1 text-[7px] text-faint">{d.day}</p>
                <div className="mb-1.5 flex items-end gap-0.5" aria-hidden>
                  {d.bars.map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h / 3}px` }}
                      className="w-1 rounded-sm bg-[color-mix(in_oklab,var(--accent)_55%,transparent)]"
                    />
                  ))}
                </div>
                <p className="font-mono text-[8px] text-muted">
                  {d.hi}
                  <span className="text-faint"> {d.lo}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Preview: Ocean Pearls ---------- */

function HotelPreview() {
  return (
    <div className="flex h-full flex-col p-3">
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span aria-hidden className="grid size-5 place-items-center rounded bg-accent text-[9px] font-bold text-on-accent">
            OP
          </span>
          <p className="font-mono text-[9px] text-fg sm:text-[10px]">
            Ocean Pearls<span className="text-faint"> / reservations</span>
          </p>
        </div>
        <div className="rounded border border-border px-1.5 py-0.5 text-[8px] text-faint">
          3 guests
        </div>
      </div>

      <div className="mb-2.5 grid grid-cols-2 gap-2">
        <div className="rounded-md border border-border bg-surface px-2 py-1.5">
          <p className="text-[8px] text-faint">Check-in</p>
          <p className="font-mono text-[9px] text-fg">12 Aug 2026</p>
        </div>
        <div className="rounded-md border border-border bg-surface px-2 py-1.5">
          <p className="text-[8px] text-faint">Check-out</p>
          <p className="font-mono text-[9px] text-fg">15 Aug 2026</p>
        </div>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden">
        <p className="font-mono text-[8px] text-faint">Room availability</p>
        {[
          { room: "Sea-view double", status: "Available", tone: "ok" },
          { room: "Garden twin", status: "Booked", tone: "busy" },
          { room: "Family suite", status: "Available", tone: "ok" },
        ].map((room) => (
          <div
            key={room.room}
            className="flex items-center justify-between gap-2 rounded-md border border-border bg-surface px-2.5 py-1.5"
          >
            <span className="truncate text-[8px] text-muted">{room.room}</span>
            <span
              className={`shrink-0 rounded-full px-1.5 py-0.5 text-[7px] ${
                room.tone === "ok"
                  ? "bg-[color-mix(in_oklab,var(--secondary)_14%,transparent)] text-secondary"
                  : "bg-[color-mix(in_oklab,var(--faint)_16%,transparent)] text-faint"
              }`}
            >
              {room.status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2.5 flex items-center justify-between">
        <p className="text-[8px] text-faint">
          Total <span className="font-mono text-[9px] text-fg">₹11,400</span>
        </p>
        <div className="rounded-md bg-accent px-3 py-1.5 text-[8px] font-semibold text-on-accent">
          Reserve now
        </div>
      </div>
    </div>
  );
}

const previews: Record<Project["preview"], ComponentType> = {
  store: StorePreview,
  weather: WeatherPreview,
  hotel: HotelPreview,
};

export function ProjectVisual({ project }: { project: Project }) {
  const Preview = previews[project.preview];
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-bg-soft shadow-[0_24px_60px_-24px_var(--shadow-color)]">
      <Chrome file={`${project.index}-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/index.php`} />
      <div
        className="h-52 transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:h-56 md:h-64"
        role="img"
        aria-label={`Conceptual preview of the ${project.title} interface`}
      >
        <Preview />
      </div>
      <Tag>conceptual preview</Tag>
    </div>
  );
}