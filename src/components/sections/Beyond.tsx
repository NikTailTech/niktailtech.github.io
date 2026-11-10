import { beyondSections } from "@/data/interests";
import { CreativeBlock } from "@/components/creative/CreativeBlock";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Beyond() {
  return (
    <Section id="beyond" labelledBy="beyond-heading" className="bg-bg-elevated/40">
      <SectionHeading
        id="beyond-heading"
        eyebrow="Beyond software"
        title="Multidisciplinary practice"
        description="Software remains the core. Blockchain, 3D, fabrication, and digital media expand how problems get framed and shipped."
        className="mb-12"
      />
      <div>
        {beyondSections.map((section) => (
          <CreativeBlock key={section.id} section={section} />
        ))}
      </div>
    </Section>
  );
}
