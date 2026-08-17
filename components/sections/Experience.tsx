import { Section } from "@/components/ui/Section";
import { ExperienceTimeline } from "@/components/ui/ExperienceTimeline";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      heading="Where I&rsquo;ve worked."
      description="Four roles across platform engineering, AI tooling, and full-stack product work."
    >
      <ExperienceTimeline items={experience} />
    </Section>
  );
}
