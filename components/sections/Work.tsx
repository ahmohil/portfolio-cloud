import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="03 — Work"
      heading="Selected projects."
      description="A small selection of platform work and side projects I&rsquo;m proud of."
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
