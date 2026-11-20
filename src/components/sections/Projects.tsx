"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects, projectsSectionMode } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/i18n/LocaleProvider";

export function Projects() {
  const reduce = useReducedMotion();
  const { t } = useLocale();

  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
        className="mb-8"
      />

      {projectsSectionMode === "coming-soon" ? (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden border border-border bg-bg-elevated px-6 py-16 sm:px-10 sm:py-20"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-lg text-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {t.projects.comingSoonEyebrow}
            </p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              {t.projects.comingSoonTitle}
            </p>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">
              {t.projects.comingSoonBody}
            </p>
            <div className="mx-auto mt-8 h-px w-16 bg-accent/60" aria-hidden />
          </div>
        </motion.div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </Section>
  );
}
