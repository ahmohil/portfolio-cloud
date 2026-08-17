import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="04 — Stack"
      heading="Tools I reach for."
      description="The day-to-day toolkit. Comfortable across the stack, but happiest in the frontend platform layer."
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {group.category}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Pill>{skill}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
