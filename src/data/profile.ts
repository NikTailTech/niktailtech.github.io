import type { Profile } from "@/types";

/**
 * Central profile & SEO configuration.
 * Edit this file to update identity, bio, contact placeholders, and meta tags.
 */
export const profile: Profile = {
  name: "Nicholas",
  firstName: "Nicholas",
  surname: "C.",
  title: "Full Stack Developer",
  githubUsername: "NikTailTech",

  shortBio:
    "I'm a Full Stack Developer. I like building software end to end — the interface, the services behind it, and the infrastructure that keeps it running.",

  personalStatement:
    "What keeps me going is pretty simple: figure out how something works, find a cleaner way to build it, and turn a messy idea into something real.",

  about: [
    "I'm a Full Stack Developer. I like building software end to end — the interface people use, the services behind it, and the infrastructure that keeps it running.",
    "I don't stop at writing features. Architecture, data models, how it scales, whether it holds up — that stuff matters to me. I spend time with Linux, Docker, Kubernetes, networking, and CI/CD because apps have to work outside a laptop, not just in local.",
    "Outside day-to-day product work I dig into crypto and blockchain. I made an NFT collection and wrote the smart contract for it, mostly to go through the whole flow myself. I also do 3D modeling, digital fabrication, printing, and visual design when I want something more hands-on.",
    "I learn by trying things and taking on problems I haven't seen before. Shipping an app, setting up infra, or making a design real — that's when it clicks for me.",
    "What keeps me going is pretty simple: figure out how something works, find a cleaner way to build it, and turn a messy idea into something real.",
  ],


  focusAreas: [
    {
      title: "Full Stack Development",
      description:
        "Frontend, backend, application architecture, APIs and scalable applications.",
    },
    {
      title: "Cloud-Native & Infrastructure",
      description:
        "Docker, Kubernetes, Linux, containerization and orchestration.",
    },
    {
      title: "AI & Intelligent Development",
      description:
        "AI-assisted coding, LLMs, prompt engineering, AI-driven workflows, developer productivity and applied AI.",
    },
    {
      title: "Web3 & Blockchain",
      description:
        "Decentralized applications, blockchain ecosystems, smart contracts and digital ownership.",
    },
    {
      title: "Systems Engineering & Automation",
      description:
        "Linux environments, networking, scripting, system administration and automation.",
    },
    {
      title: "3D Modeling & Digital Fabrication",
      description:
        "Organic and geometric modeling, G-code and product production.",

    },
    {
      title: "Graphic & Visual Design",
      description:
        "Adobe Creative Suite, visual communication, digital aesthetics and multimedia creation.",
    },
  ],

  stackGroups: [
    {
      id: "frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML 5",
        "CSS",
        "SCSS",
        "Tailwind CSS",
        "Bootstrap",
        "shadcn/ui",
        "Three.js",
      ],
    },
    {
      id: "backend",
      items: ["Node.js", "Java", "PHP", "C++", "C", "REST APIs", "SOAP APIs"],
    },
    {
      id: "data",
      items: ["PostgreSQL", "SQL", "MongoDB", "Prisma", "Supabase"],
    },
    {
      id: "infra",
      items: ["Docker", "Kubernetes", "Linux", "Git", "Github"],
    },
  ],

  // TODO: Add location if you want it shown publicly (e.g. "Europe · Remote")
  location: undefined,

  // TODO: Update availability message when open to roles/clients
  availability:
    "Open to professional opportunities and technical collaborations — full stack roles, product work, and projects where I can own features from design to production.",


  email: "codazzi.nicholas03@gmail.com",
  emailConfigured: true,

  // Site serves as interactive CV — no PDF download
  cvPath: "/documents/nicholas-cv.pdf",
  cvAvailable: false,


  seo: {
    siteUrl: "https://niktailtech.github.io",
    title: "Nicholas — Full Stack Developer",
    description:
      "Portfolio of Nicholas (NikTailTech), Full Stack Developer — web applications, infrastructure, Web3 interests, and creative 3D practice.",
    keywords: [
      "Full Stack Developer",
      "Nicholas",
      "NikTailTech",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "DevOps",
      "Web3",
      "3D modeling",
    ],
    ogImage: "/images/og-default.svg",
    locale: "en_US",
  },
};
