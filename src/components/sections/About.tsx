"use client";

import { about } from "@/data/cv";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/i18n/LocaleProvider";

export function About() {
  const { t } = useLocale();

  return (
    <Section id="about" labelledBy="about-heading">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          id="about-heading"
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.intro}
        />
        <div className="prose-portfolio text-base leading-relaxed text-fg-muted sm:text-lg">
          {about.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 32)}
              className={
                index === about.length - 1 ? "border-l-2 border-accent pl-4 text-fg" : undefined
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
