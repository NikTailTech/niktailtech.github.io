import { Badge } from "@/components/ui/Badge";
import type { ExperienceItem } from "@/types";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 md:grid-cols-[11rem_1fr] md:gap-10">
      <div className="md:sticky md:top-24 md:self-start">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
          {item.period}
        </p>
        {item.location ? (
          <p className="mt-2 text-sm text-fg-muted">{item.location}</p>
        ) : null}
        {item.isPlaceholder ? (
          <div className="mt-3">
            <Badge tone="warn">Placeholder</Badge>
          </div>
        ) : null}
      </div>

      <div>
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-fg">
          {item.title}
        </h3>
        <p className="mt-1 text-fg-muted">{item.company}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
          {item.summary}
        </p>

        <ul className="mt-5 space-y-2 text-sm text-fg-muted">
          {item.responsibilities.map((r, i) => (
            <li key={`${item.id}-resp-${i}`} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{r}</span>
            </li>
          ))}
        </ul>

        {item.achievements && item.achievements.length > 0 ? (
          <ul className="mt-4 space-y-2 text-sm text-fg">
            {item.achievements.map((a, i) => (
              <li key={`${item.id}-ach-${i}`} className="flex gap-3">
                <span className="font-mono text-accent" aria-hidden>
                  /
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {item.technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        {item.links && item.links.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-4 text-sm">
            {item.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
