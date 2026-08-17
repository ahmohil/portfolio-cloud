import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      heading="Where I&rsquo;ve worked."
      description="Four roles across platform engineering, AI tooling, and full-stack product work."
    >
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[5px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block"
        />

        <ol className="space-y-14 md:space-y-16">
          {experience.map((exp, i) => (
            <li key={exp.company}>
              <Reveal delay={i * 0.06}>
                <ExperienceCard exp={exp} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
