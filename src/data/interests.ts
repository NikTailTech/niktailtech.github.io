import type { CreativeSection } from "@/types";

/**
 * BEYOND SOFTWARE — multidisciplinary sections.
 * Replace placeholder works with real images under public/images/{nft,3d,prints,design}/
 */
export const beyondSections: CreativeSection[] = [
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    eyebrow: "Digital assets",
    description:
      "Active involvement in the cryptocurrency ecosystem, practical exploration of Web3 technologies, and hands-on creation of an original NFT collection — alongside ongoing interest in decentralized systems and digital asset tooling.",
    bullets: [
      "Cryptocurrency ecosystem participation and portfolio awareness",
      "Exploration of Web3 and blockchain technology concepts",
      "Original NFT collection creation and development",
      "Interest in digital assets and crypto-related software",
    ],
    works: [
      {
        id: "nft-placeholder-1",
        title: "NFT Collection — Case Study Slot",
        description:
          "TODO: Add collection name, creative direction, tooling, and public links. Do not invent chain, token standard, or marketplace URLs.",
        image: "/images/nft/placeholder-1.svg",
        tools: ["Digital illustration", "NFT tooling"],
        isPlaceholder: true,
      },
      {
        id: "nft-placeholder-2",
        title: "Artwork Sample",
        description: "TODO: Replace with a real piece from the collection or related artwork.",
        image: "/images/nft/placeholder-2.svg",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "modeling",
    title: "3D Modeling",
    eyebrow: "Digital form",
    description:
      "Organic modeling, digital sculpting, hard-surface work, and CAD-oriented design in Blender and Fusion 360 — building forms intended for visualization, iteration, and fabrication.",
    bullets: [
      "Organic modeling and digital sculpting",
      "Hard-surface and CAD-oriented modeling",
      "Blender and Fusion 360 workflows",
    ],
    works: [
      {
        id: "model-placeholder-1",
        title: "Organic / Sculpt Study",
        description: "TODO: Add a render or screenshot of an organic or sculpted model.",
        image: "/images/3d/placeholder-organic.svg",
        tools: ["Blender"],
        isPlaceholder: true,
      },
      {
        id: "model-placeholder-2",
        title: "Hard-Surface / CAD Study",
        description: "TODO: Add a hard-surface or Fusion 360 study.",
        image: "/images/3d/placeholder-hard.svg",
        tools: ["Fusion 360", "Blender"],
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "printing",
    title: "3D Printing",
    eyebrow: "Digital to physical",
    description:
      "Additive manufacturing and prototyping — turning digital models into functional and creative physical objects through iterative print workflows.",
    bullets: [
      "Digital-to-physical fabrication workflows",
      "Functional and creative object production",
      "Prototype iteration from model to print",
    ],
    works: [
      {
        id: "print-placeholder-1",
        title: "Print / Prototype",
        description: "TODO: Photograph a real print and describe the model-to-print process.",
        image: "/images/prints/placeholder-1.svg",
        tools: ["3D printing", "Prototyping"],
        isPlaceholder: true,
      },
      {
        id: "print-placeholder-2",
        title: "Functional Object",
        description: "TODO: Document a functional or creative printed piece.",
        image: "/images/prints/placeholder-2.svg",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "digital",
    title: "Digital Creativity",
    eyebrow: "Visual media",
    description:
      "Graphic design and multimedia production with Adobe Photoshop, Illustrator, Premiere Pro, and After Effects — from still composition to edited video and motion.",
    bullets: [
      "Graphic design and visual composition",
      "Image manipulation and vector illustration",
      "Video editing and motion graphics",
    ],
    works: [
      {
        id: "design-placeholder-1",
        title: "Graphic / Illustration",
        description: "TODO: Add a graphic design or illustration sample.",
        image: "/images/design/placeholder-1.svg",
        tools: ["Photoshop", "Illustrator"],
        isPlaceholder: true,
      },
      {
        id: "design-placeholder-2",
        title: "Motion / Edit Still",
        description: "TODO: Add a frame or poster from a video or motion piece.",
        image: "/images/design/placeholder-2.svg",
        tools: ["Premiere Pro", "After Effects"],
        isPlaceholder: true,
      },
    ],
  },
];
