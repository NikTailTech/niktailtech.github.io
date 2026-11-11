"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Project } from "@/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const { t } = useLocale();
  const localized = t.projectsContent[project.id];

  const name = localized?.name ?? project.name;
  const shortDescription = localized?.shortDescription ?? project.shortDescription;
  const detailedDescription =
    localized?.detailedDescription ?? project.detailedDescription;
  const highlights = localized?.highlights ?? project.highlights;

  return (
    <motion.article
      layout
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
      className="group flex flex-col overflow-hidden border border-border bg-bg-elevated"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-bg-muted">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-[1] block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`${t.projects.visitSite}: ${name}`}
          >
            <span className="sr-only">
              {t.projects.visitSite} {name}
            </span>
          </a>
        ) : null}
        <Image
          src={project.image}
          alt={`${name} preview`}
          fill
          priority={index === 0}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute left-3 top-3 z-[2] flex gap-2">
          <Badge tone={project.isPlaceholder ? "warn" : "accent"}>
            {t.projects.status[project.status]}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fg">
          {name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{shortDescription}</p>
        <p className="mt-3 text-sm leading-relaxed text-fg-subtle">{detailedDescription}</p>

        {highlights.length > 0 ? (
          <ul className="mt-4 space-y-1.5 text-sm text-fg-muted">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  —
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {project.architecture ? (
          <p className="mt-4 border-l border-border pl-3 font-mono text-xs leading-relaxed text-fg-subtle">
            {project.architecture}
          </p>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-fg hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              {t.projects.repository}
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-fg hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              {t.projects.visitSite}
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
