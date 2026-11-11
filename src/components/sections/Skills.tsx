"use client";

import { skillCategories } from "@/data/skills";
import { SkillGroup } from "@/components/skills/SkillGroup";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/i18n/LocaleProvider";

export function Skills() {
  const { t } = useLocale();

  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        description={t.skills.description}
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
