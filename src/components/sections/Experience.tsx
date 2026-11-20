import { experience } from "@/data/cv";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";

export function Experience({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

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
        {experience.map((item) => (
          <ExperienceCard key={item.id} item={item} locale={locale} t={t} />
        ))}
      </div>
    </Section>
  );
}
