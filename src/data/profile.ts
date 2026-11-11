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
    "Driven by a passion for technology, engineering, and creative problem-solving; my interests extend beyond traditional software development, spanning frontend and backend engineering, cloud-native infrastructure, Web3, and digital creation. From building scalable applications and containerized environments with Docker and Kubernetes to exploring 3D modeling, printing, and visual design, I enjoy leveraging code and technology to transform ideas into reality.",

  personalStatement:
    "I design and ship software end-to-end: from interface and API to deployment and the systems that keep it running.",

  about: [
    "I work as a Full Stack Developer with a practical focus on building complete applications — interfaces people can use, services that stay maintainable, and deployments that hold up in real environments.",
    "My approach is systems-oriented. I care about clear architecture, careful data modeling, and the operational layer around software: Linux, containers, networking, CI/CD, and self-hosted infrastructure. Curiosity about how things run in production shapes how I design what I build.",
    "Beyond product engineering, I explore adjacent technical domains. I follow the cryptocurrency and blockchain ecosystem closely, have built an original NFT collection, and work with 3D modeling, additive manufacturing, and digital media tools. Those practices sharpen spatial thinking, visual judgment, and an appetite for shipping tangible results.",
    "I value continuous learning, independent problem-solving, and work that connects software engineering with creative and physical making — without losing sight of professional software craft as the core.",
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
        "Organic and geometric modeling, G-code, CAD workflows and additive manufacturing.",
    },
    {
      title: "Graphic & Visual Design",
      description:
        "Adobe Creative Suite, visual communication, digital aesthetics and multimedia creation.",
    },
  ],

  // Ordered by job-market demand (full-stack / software eng. postings, 2025–2026)
  stackSignal: [
    "React.js",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Node.js",
    "SQL",
    "Docker",
    "REST APIs",
    "Java",
    "Kubernetes",
    "Git",
    "Github",
    "Next.js",
    "Linux",
    "CSS",
    "HTML 5",
    "Tailwind CSS",
    "MongoDB",
    "Prisma",
    "Supabase",
    "PHP",
    "SCSS",
    "Bootstrap",
    "C++",
    "C",
    "Three.js",
  ],

  // TODO: Add location if you want it shown publicly (e.g. "Europe · Remote")
  location: undefined,

  // TODO: Update availability message when open to roles/clients
  availability: "Open to professional opportunities and technical collaborations.",

  // TODO: Replace with your real email address and set emailConfigured to true
  email: "YOUR_EMAIL@example.com",
  emailConfigured: false,

  // Place your CV at public/documents/nicholas-cv.pdf then set cvAvailable to true
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
