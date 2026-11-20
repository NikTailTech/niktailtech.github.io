import { glance } from "@/data/cv";
import { Section } from "@/components/ui/Container";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";

export function Glance({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <Section id="glance" labelledBy="glance-heading">
      <h2
        id="glance-heading"
        className="font-mono text-xs uppercase tracking-[0.22em] text-accent-ink"
      >
        {t.glance.title}
      </h2>

      <ul className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-3">
        {glance.areas.map((area) => (
          <li key={area.title} className="flex gap-3 border-t border-border pt-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
            <div>
              <h3 className="text-base font-medium text-fg">{area.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-fg-muted">{area.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-fg-muted">{glance.also}</p>
    </Section>
  );
}
