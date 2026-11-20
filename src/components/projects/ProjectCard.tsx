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

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
      className="group flex flex-col overflow-hidden border border-border bg-bg-elevated"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-bg-muted">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          priority={index === 0}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
          {project.role}
          <span className="mx-2" aria-hidden>
            ·
          </span>
          {project.year}
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-fg">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.outcome}</p>
        <p className="mt-3 text-sm leading-relaxed text-fg-subtle">{project.approach}</p>
        <p className="mt-3 text-sm leading-relaxed text-fg-subtle">{project.result}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-4 pt-6">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
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
