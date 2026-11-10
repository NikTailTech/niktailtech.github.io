import type { NavItem, SocialLink } from "@/types";
import { profile } from "./profile";

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#repositories" },
  { label: "Beyond", href: "#beyond" },
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
    // TODO: Replace with your LinkedIn profile URL and set enabled: true
    href: "https://www.linkedin.com/in/YOUR_LINKEDIN_SLUG",
    enabled: false,
    todo: "Add LinkedIn profile URL",
  },
];

export const enabledSocialLinks = socialLinks.filter((link) => link.enabled);
