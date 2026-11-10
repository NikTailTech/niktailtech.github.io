import { skillCategories } from "@/data/skills";
import { SkillGroup } from "@/components/skills/SkillGroup";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="Capabilities"
        title="Technical skills"
        description="Organized by domain. Levels appear only where configured — breadth is intentional; depth is role-dependent."
        className="mb-12"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillGroup key={category.id} category={category} />
        ))}
      </div>
    </Section>
  );
}
