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
    "Driven by a passion for technology, engineering, and problem-solving; my interests extend beyond traditional software development, spanning frontend and backend engineering, cloud-native infrastructure, Web3, and digital creation. From building scalable applications and containerized environments with Docker and Kubernetes to exploring 3D modeling, printing, and visual design, I enjoy leveraging code and technology to transform ideas into reality.",

  personalStatement:
    "I design and ship software end-to-end: from interface and API to deployment and the systems that keep it running.",

  about: [
    "I work as a Full Stack Developer. I build complete applications: clear interfaces, services that stay maintainable over time, and deployments meant to hold up outside the local environment.",
    "I look at software as a system. I care about architecture, data models, and everything that happens in production — Linux, containers, networking, CI/CD, self-hosted infrastructure. Understanding how things actually run helps me make better design choices.",
    "Alongside code, I follow other areas too: crypto and blockchain, 3D modeling, digital fabrication, and media design. I also created an NFT collection, mainly to try out the end-to-end flow. These keep me sharp on precision and creativity, and they remind me that an idea matters when it becomes something concrete.",

    "I like learning on my own and taking on hard problems. What I care about most, though, stays the same: designing and building software — even when design, maker culture, or other technologies sit around it.",
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
