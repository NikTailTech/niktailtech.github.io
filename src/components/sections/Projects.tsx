import { projects } from "@/data/cv";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";

export function Projects({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
        className="mb-8"
      />
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} t={t} />
        ))}
      </div>
    </Section>
  );
}
