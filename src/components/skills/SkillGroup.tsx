import { Badge } from "@/components/ui/Badge";
import { levelLabels } from "@/data/skills";
import type { SkillCategory } from "@/types";

export function SkillGroup({ category }: { category: SkillCategory }) {
  return (
    <article className="border border-border bg-bg-elevated p-6 sm:p-7">
      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fg">
        {category.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{category.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li key={skill.name}>
            <Badge>
              {skill.name}
              {skill.level ? (
                <span className="ml-1.5 text-fg-subtle">· {levelLabels[skill.level]}</span>
              ) : null}
            </Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}
