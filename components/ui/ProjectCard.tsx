import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Pill } from "./Pill";
import { cn } from "@/lib/cn";

export function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "group relative flex h-full flex-col justify-between rounded-xl border border-border bg-card/40 p-6 transition-all duration-300 md:p-7",
        "hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card/70",
        project.highlight && "ring-1 ring-accent/20",
      )}
    >
      <div>
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
            {project.name}
          </h3>
          {project.href && (
            <ArrowUpRight
              className="size-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-foreground"
              strokeWidth={1.75}
            />
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </Wrapper>
  );
}
