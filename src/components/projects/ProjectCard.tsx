"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import type { Project } from "@/types";

const statusLabel: Record<Project["status"], string> = {
  concept: "Concept",
  "in-progress": "In progress",
  completed: "Completed",
  archived: "Archived",
  placeholder: "Placeholder",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();

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
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge tone={project.isPlaceholder ? "warn" : "accent"}>
            {statusLabel[project.status]}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fg">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.shortDescription}</p>
        <p className="mt-3 text-sm leading-relaxed text-fg-subtle">{project.detailedDescription}</p>

        {project.highlights.length > 0 ? (
          <ul className="mt-4 space-y-1.5 text-sm text-fg-muted">
            {project.highlights.map((h) => (
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
          {project.technologies.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
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
              Repository
            </a>
          ) : (
            <span className="text-sm text-fg-subtle">Repository pending</span>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-fg hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
