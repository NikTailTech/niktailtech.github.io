import type { ExperienceItem } from "@/types";

/**
 * Professional experience timeline.
 * Sourced from LinkedIn (nicholas-codazzi). Do not invent employers, dates, titles, or achievements.
 */
export const experiences: ExperienceItem[] = [
  {
    id: "franklin-switzerland",
    company: "Franklin Switzerland",
    title: "Full Stack Developer",
    period: "Jun 2025 – Present",
    location: "Sorengo, Ticino, Switzerland",
    summary:
      "Designed and developed the company's new website, covering the entire process from UI design in Figma to implementation using Next.js, React, TypeScript and Tailwind CSS. Ensured consistency with the company's visual identity and design standards. Worked in an international environment where communication was primarily conducted in English.",
    responsibilities: [
      "Web Development: Designed and developed modern web interfaces and company websites, with a focus on usability, responsive layouts and brand consistency.",
      "Internal Applications: Built custom internal web applications and tools, including solutions for generating branded emails and personalized QR codes.",
      "CMS & CRM Integration: Customized and extended CMS and CRM functionalities, configured YAML-based modules and integrated embedded forms with custom CSS styling.",
      "Website Maintenance & Automation: Developed PHP automations for existing websites, troubleshot technical issues, applied patches and addressed security vulnerabilities.",
      "Landing Pages & Lead Generation: Collaborated with the team on the design and development of website pages and landing pages, focusing on user profiling and lead generation.",
      "Visual Design & Communication: Created graphic assets and corporate communication materials, including flyers and brochures, supporting marketing and communication activities.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "PHP",
      "CSS",
      "YAML",
      "CMS",
      "CRM",
    ],
  },



  {
    id: "sl-technology",
    company: "SL TECHNOLOGY SRL",
    title: "Programmer",
    period: "Feb 2023 – May 2025",
    location: "Crema, Lombardy, Italy",
    summary:
      "Developed and maintained web applications and websites for different businesses, primarily focused on business management, process optimization and tailored software solutions.",
    responsibilities: [
      "Application Development: Developed and maintained web applications and websites, adapting functionalities to different business requirements and operational workflows.",
      "Frontend Development: Worked with HTML, CSS, Bootstrap 4/5 and JavaScript, customizing third-party plugins and libraries to extend application functionality.",
      "Backend Development: Implemented and customized PHP-based application functionalities to support business processes and specific client requirements.",
      "Database Design & Management: Analyzed, designed and managed relational databases, ensuring proper data organization and efficient data handling.",
      "Client Collaboration: Worked directly with clients to gather and analyze requirements, identify suitable technical solutions and troubleshoot business and IT-related issues.",
    ],
    technologies: [
      "PHP",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "React",
      "React Native",
      "SQL",
      "Database design",
      "Technical support",
    ],
  },




  {
    id: "zucchetti",
    company: "Zucchetti",
    title: "Programmer",
    period: "Oct 2022 – Feb 2023",
    location: "Lodi, Lombardy, Italy",
    summary:
      "Worked within a Research & Development (R&D) environment, contributing to software development activities and database design while completing an initial technical training program.",
    responsibilities: [
      "Technical Training: Completed an initial two-month training program covering Java, HTML, CSS, JavaScript, SQL, T-SQL, Linux and concurrent programming.",
      "Database Development: Designed and developed databases, focusing on data organization, structure and management.",
      "UI Development: Designed and implemented user interfaces, with particular attention to usability, clarity and an intuitive user experience.",
      "Team Collaboration: Collaborated with the development team on software engineering activities and business process management within an environment operating under ISO/IEC 27001 information security standards.",
    ],
    technologies: [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "T-SQL",
      "Linux",
    ],
  },
];
