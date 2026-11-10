import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title="Engineering with systems sense and creative range"
          description={profile.availability}
        />
        <div className="prose-portfolio text-base leading-relaxed text-fg-muted sm:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          {profile.location ? (
            <p className="mt-6 font-mono text-sm text-fg-subtle">Based in {profile.location}</p>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
