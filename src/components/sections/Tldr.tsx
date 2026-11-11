"use client";

import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Container";
import { useLocale } from "@/i18n/LocaleProvider";

export function Tldr() {
  const { t } = useLocale();

  return (
    <Section id="tldr" labelledBy="tldr-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p
            id="tldr-heading"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
          >
            {t.tldr.eyebrow}
          </p>
          <p className="mt-2 max-w-xl text-base text-fg sm:text-lg">{t.tldr.lead}</p>
        </div>
      </div>

      <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
        {t.profile.focusAreas.map((area) => (
          <li key={area.title} className="flex gap-3 border-t border-border/80 pt-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
            <div>
              <p className="text-sm font-medium text-fg">{area.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-fg-muted">{area.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t border-border pt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">
          {t.tldr.stackSignal}
        </p>

        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.stackGroups.map((group) => (
            <div key={group.id}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg">
                {t.tldr.stackGroups[group.id] ?? group.id}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
