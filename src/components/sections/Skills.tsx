"use client";

import { skillTiers } from "@/data/cv";
import { Badge } from "@/components/ui/Badge";
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
        {skillTiers.map((tier) => (
          <article key={tier.id} className="border border-border bg-bg-elevated p-6 sm:p-7">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fg">
              {tier.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{tier.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {tier.skills.map((skill) => (
                <li key={skill}>
                  <Badge tone={tier.id === "daily" ? "accent" : "neutral"}>{skill}</Badge>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
