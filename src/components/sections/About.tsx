import { getContent } from "@/data/content";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";

export function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { about } = getContent(locale);

  return (
    <Section id="about" labelledBy="about-heading">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          id="about-heading"
          eyebrow={t.about.eyebrow}
          title={about.title}
          description={about.subtitle}
        />
        <div className="prose-portfolio text-base leading-relaxed text-fg-muted sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
