import { ArrowUpRight } from "lucide-react";
import { repositories } from "@/data/repositories";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Repositories() {
  return (
    <Section id="repositories" labelledBy="repositories-heading">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          id="repositories-heading"
          eyebrow="Open source"
          title="GitHub repositories"
          description={`Public repositories for ${profile.githubUsername}, configured statically for reliable GitHub Pages hosting.`}
        />
        <Button
          href={`https://github.com/${profile.githubUsername}`}
          variant="secondary"
          className="shrink-0"
        >
          View profile
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>

      <ul className="grid gap-3">
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 border border-border bg-bg-elevated p-5 transition-colors hover:border-border-strong sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-mono text-sm font-medium text-fg group-hover:text-accent sm:text-base">
                    {profile.githubUsername}/{repo.name}
                  </h3>
                  {repo.isPlaceholder ? <Badge tone="warn">Placeholder</Badge> : null}
                  {repo.language ? <Badge>{repo.language}</Badge> : null}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{repo.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {repo.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-fg-subtle transition-colors group-hover:text-accent"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
