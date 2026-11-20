import { education, person } from "@/data/cv";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";

export function Education({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading
        id="education-heading"
        eyebrow={t.education.eyebrow}
        title={t.education.title}
        className="mb-10"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <article className="border border-border bg-bg-elevated p-6 sm:p-7">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
            {t.education.educationHeading}
          </h3>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li key={item.id}>
                <p className="text-base font-medium text-fg">{item.qualification}</p>
                <p className="mt-1 text-sm text-fg-muted">
                  {item.institution}, {item.location}
                </p>
                <p className="mt-1 font-mono text-xs text-fg-subtle">
                  {item.startYear} – {item.endYear}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <article className="border border-border bg-bg-elevated p-6 sm:p-7">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
            {t.education.languagesHeading}
          </h3>
          <ul className="mt-4 space-y-3">
            {person.languages.map((language) => (
              <li key={language.code} className="flex items-baseline justify-between gap-4">
                <span className="text-base font-medium text-fg">{language.name}</span>
                <span className="font-mono text-sm text-fg-muted">{language.level}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
