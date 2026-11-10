"use client";

import { useMemo, useState } from "react";
import { projectFilters, projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow="Work"
        title="Featured projects"
        description="Selected work across product engineering, infrastructure, Web3, and creative fabrication. Placeholder entries are labeled until real case studies are added."
        className="mb-8"
      />

      <div
        role="tablist"
        aria-label="Project categories"
        className="mb-8 flex flex-wrap gap-2"
      >
        {projectFilters.map((item) => {
          const selected = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(item.id)}
              className={cn(
                "rounded-sm border px-3 py-1.5 text-sm transition-colors",
                selected
                  ? "border-accent bg-accent-soft text-fg"
                  : "border-border text-fg-muted hover:border-border-strong hover:text-fg",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="border border-dashed border-border p-8 text-sm text-fg-muted">
          No projects in this category yet. Add entries in{" "}
          <code className="font-mono text-fg">src/data/projects.ts</code>.
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </Section>
  );
}
