"use client";

import { Badge } from "@/components/ui/Badge";
import { useLocale } from "@/i18n/LocaleProvider";
import type { SkillCategory } from "@/types";

export function SkillGroup({ category }: { category: SkillCategory }) {
  const { t } = useLocale();
  const localized = t.skillCategories[category.id];
  const title = localized?.title ?? category.title;
  const description = localized?.description ?? category.description;

  return (
    <article className="border border-border bg-bg-elevated p-6 sm:p-7">
      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
      <div className="mt-5 space-y-4">
        {category.domains.map((domain) => (
          <div key={domain.id}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
              {t.tldr.stackDomains[domain.id] ?? domain.id}
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {domain.skills.map((skill) => (
                <li key={skill.name}>
                  <Badge>
                    {t.skillLabels[skill.name] ?? skill.name}
                    {skill.level ? (
                      <span className="ml-1.5 text-fg-subtle">· {skill.level}</span>
                    ) : null}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
