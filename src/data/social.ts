import type { NavItem, SocialLink } from "@/types";
import { profile } from "./profile";

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  // Hidden while repositoriesSectionVisible is false in repositories.ts
  // { label: "GitHub", href: "#repositories" },
  { label: "Contact", href: "#contact" },
];


/**
 * Social & contact links. Disable entries until real URLs are available.
 */
export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: `https://github.com/${profile.githubUsername}`,
    enabled: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicholas-codazzi/",
    enabled: true,
  },

];

export const enabledSocialLinks = socialLinks.filter((link) => link.enabled);
