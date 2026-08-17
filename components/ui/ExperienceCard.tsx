import type { Experience } from "@/lib/types";
import { cn } from "@/lib/cn";

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="relative pl-8 md:pl-10">
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-2 size-2.5 rounded-full border-2",
          exp.current
            ? "border-accent bg-accent/30"
            : "border-border bg-background",
        )}
      >
        {exp.current && (
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
        )}
      </span>

      <header className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
            {exp.company}
          </h3>
          <span className="text-muted-foreground">·</span>
          <p className="text-sm text-muted-foreground md:text-base">{exp.title}</p>
        </div>
        <p className="font-mono text-xs tracking-tight text-muted-foreground">
          {exp.startDate} — {exp.endDate}
        </p>
      </header>

      <p className="mb-4 font-mono text-xs text-muted-foreground">{exp.location}</p>

      <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
