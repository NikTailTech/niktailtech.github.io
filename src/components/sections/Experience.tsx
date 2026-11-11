"use client";

import { experiences } from "@/data/experience";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/i18n/LocaleProvider";

export function Experience() {
  const { t } = useLocale();

  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        description={t.experience.description}
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
