"use client";

import { focusAreas } from "@/data/cv";
import { Section } from "@/components/ui/Container";
import { useLocale } from "@/i18n/LocaleProvider";

export function Tldr() {
  const { t } = useLocale();

  return (
    <Section id="glance" labelledBy="glance-heading">
      <div>
        <h2
          id="glance-heading"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
        >
          {t.glance.eyebrow}
        </h2>
        <p className="mt-2 max-w-xl text-base text-fg sm:text-lg">{t.glance.lead}</p>
      </div>

      <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
        {focusAreas.map((area) => (
          <li key={area.title} className="flex gap-3 border-t border-border/80 pt-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
            <div>
              <p className="text-sm font-medium text-fg">{area.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-fg-muted">{area.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
