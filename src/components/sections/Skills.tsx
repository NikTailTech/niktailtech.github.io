import { getContent } from "@/data/content";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";

export function Skills({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { alsoOnCv, beyondTheStack, skillTiers } = getContent(locale);

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

      <p className="mt-6 text-sm leading-relaxed text-fg-muted">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
          {t.skills.alsoOnCv}:
        </span>{" "}
        {alsoOnCv.join(", ")}
      </p>

      <div className="mt-10 border-t border-border pt-6">
        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
          {t.skills.beyondTheStack}
        </h3>
        <dl className="mt-4 grid gap-4 sm:grid-cols-3">
          {beyondTheStack.map((item) => (
            <div key={item.title}>
              <dt className="text-sm font-medium text-fg">{item.title}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-fg-muted">{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
