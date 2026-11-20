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
    "I don't stop at writing features. Architecture, data models, and how things hold up in production matter to me. Day to day that means TypeScript, React, Next.js, PHP, SQL, Docker, and Linux — making sure an app works outside a laptop, not just in local.",
    "Outside product work I also do 3D modeling, digital fabrication, printing, and visual design when I want something more hands-on — and I use Three.js when an interface needs real 3D in the browser.",
    "I learn by trying things and taking on problems I haven't seen before. Shipping an app, setting up infra, or making a design real — that's when it clicks for me.",
    "What keeps me going is pretty simple: figure out how something works, find a cleaner way to build it, and turn a messy idea into something real.",
  ],

  focusAreas: [
    {
      title: "Full Stack Development",
      description:
        "Interfaces, APIs, and application logic with React, Next.js, TypeScript, Node.js, and PHP.",
    },
    {
      title: "Databases & APIs",
      description:
        "Relational data modeling, SQL, PostgreSQL, Prisma, and REST services that stay maintainable.",
    },
    {
      title: "Shipping & Environments",
      description:
        "Docker, Linux, and Git day to day; personal homelab Kubernetes for self-hosted apps.",
    },
    {
      title: "Side Practice",
      description:
        "Design in Figma, Three.js in the browser, and hands-on 3D / fabrication when I want a break from product work.",
    },
  ],

  stackGroups: [
    {
      id: "daily",
      domains: [
        {
          id: "frontend",
          items: [
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "jQuery",
          ],
        },
        {
          id: "backend",
          items: ["Node.js", "PHP", "REST APIs"],
        },
        {
          id: "data",
          items: ["PostgreSQL", "SQL", "Prisma"],
        },
        {
          id: "cloud",
          items: ["Docker", "Linux", "Kubernetes", "CI/CD", "Git", "GitHub"],
        },
        {
          id: "libraries",
          items: ["Three.js"],
        },
        {
          id: "design",
          items: ["Figma"],
        },
      ],
    },
    {
      id: "also",
      domains: [
        {
          id: "frontend",
          items: ["SCSS", "Bootstrap"],
        },
        {
          id: "libraries",
          items: ["shadcn/ui"],
        },
        {
          id: "backend",
          items: ["Java"],
        },
        {
          id: "data",
          items: ["MongoDB", "Supabase", "MySQL"],
        },
        {
          id: "design",
          items: ["Blender", "Adobe Photoshop", "Adobe Illustrator"],
        },
      ],
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
      "Portfolio of Nicholas (NikTailTech), Full Stack Developer — web applications with React, Next.js, TypeScript, PHP, and Docker.",
    keywords: [
      "Full Stack Developer",
      "Nicholas",
      "NikTailTech",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PHP",
      "PostgreSQL",
      "Docker",
    ],
    ogImage: "/images/og-default.svg",
    locale: "en_US",
  },
};
