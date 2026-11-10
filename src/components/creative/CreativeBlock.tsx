import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { CreativeSection } from "@/types";

export function CreativeBlock({ section }: { section: CreativeSection }) {
  return (
    <article
      id={`beyond-${section.id}`}
      className="scroll-mt-[calc(var(--nav-height)+1rem)] border-t border-border py-14 first:border-t-0 first:pt-0"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {section.eyebrow}
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            {section.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">{section.description}</p>
          <ul className="mt-5 space-y-2 text-sm text-fg-muted">
            {section.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {section.works.map((work) => (
            <li
              key={work.id}
              className="overflow-hidden border border-border bg-bg-elevated"
            >
              <div className="relative aspect-[4/3] border-b border-border bg-bg-muted">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm font-semibold text-fg">{work.title}</h4>
                  {work.isPlaceholder ? <Badge tone="warn">Placeholder</Badge> : null}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {work.description}
                </p>
                {work.tools && work.tools.length > 0 ? (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {work.tools.map((t) => (
                      <li key={t}>
                        <Badge>{t}</Badge>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {work.externalUrl ? (
                  <a
                    href={work.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-accent underline-offset-4 hover:underline"
                  >
                    View external
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
