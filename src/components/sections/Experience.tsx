import { experiences } from "@/data/experience";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Professional timeline"
        description="Roles and responsibilities are maintained in src/data/experience.ts. Placeholder entries are marked until replaced with verified history."
        className="mb-12"
      />
      <div>
        {experiences.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
