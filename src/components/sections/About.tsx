"use client";

import { profile } from "@/data/profile";
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
          description={t.profile.availability}
        />
        <div className="prose-portfolio text-base leading-relaxed text-fg-muted sm:text-lg">
          {t.profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          {profile.location ? (
            <p className="mt-6 font-mono text-sm text-fg-subtle">
              {t.about.basedIn} {profile.location}
            </p>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
