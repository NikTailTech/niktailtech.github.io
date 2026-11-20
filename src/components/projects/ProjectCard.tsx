import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import type { Dictionary } from "@/i18n/types";
import { withBasePath } from "@/lib/paths";
import type { Project } from "@/types";

const IMAGE_WIDTHS = [800, 1280];
const IMAGE_SIZES = "(min-width: 1152px) 540px, (min-width: 1024px) 45vw, 100vw";

function srcSet(src: string, format: "avif" | "webp") {
  return IMAGE_WIDTHS.map((w) => `${withBasePath(`${src}-${w}.${format}`)} ${w}w`).join(", ");
}

export function ProjectCard({ project, t }: { project: Project; t: Dictionary }) {
  const headingId = `project-${project.id}`;

  const story = [
    { label: t.projects.problem, text: project.problem },
    { label: t.projects.approach, text: project.approach },
    { label: t.projects.result, text: project.result },
  ];

  return (
    <article
      aria-labelledby={headingId}
      className="grid overflow-hidden border border-border bg-bg-elevated lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
    >
      <picture className="block border-b border-border bg-bg-muted lg:self-start lg:border-r">
        <source type="image/avif" srcSet={srcSet(project.image.src, "avif")} sizes={IMAGE_SIZES} />
        <source type="image/webp" srcSet={srcSet(project.image.src, "webp")} sizes={IMAGE_SIZES} />
        <img
          src={withBasePath(`${project.image.src}-800.webp`)}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </picture>

      <div className="flex flex-col p-6 sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
          {project.role}
          <span className="mx-2" aria-hidden>
            ·
          </span>
          {project.year}
        </p>
        <h3
          id={headingId}
          className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-fg"
        >
          {project.name}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-fg">{project.outcome}</p>

        <dl className="mt-5 space-y-3 text-sm leading-relaxed">
          {story.map((item) => (
            <div key={item.label} className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink sm:pt-0.5">
                {item.label}
              </dt>
              <dd className="text-fg-muted">{item.text}</dd>
            </div>
          ))}
        </dl>

        {project.architecture ? (
          <p className="mt-5 border-l-2 border-border-strong pl-3 font-mono text-xs leading-relaxed text-fg-muted">
            <span className="sr-only">{t.projects.architecture}: </span>
            {project.architecture}
          </p>
        ) : null}

        {project.decisions && project.decisions.length > 0 ? (
          <div className="mt-5">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
              {t.projects.decisions}
            </h4>
            <ul className="mt-2 space-y-1.5 text-sm text-fg-muted">
              {project.decisions.map((decision) => (
                <li key={decision} className="flex gap-2">
                  <span className="text-accent-ink" aria-hidden>
                    —
                  </span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.projects.stack}>
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-5 pt-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-6 items-center gap-2 text-sm font-medium text-fg hover:text-accent-ink"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              {t.projects.visitSite}
              <span className="sr-only">: {project.name}</span>
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-6 items-center gap-2 text-sm font-medium text-fg hover:text-accent-ink"
            >
              <GitHubIcon className="h-4 w-4" />
              {t.projects.repository}
              <span className="sr-only">: {project.name}</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
