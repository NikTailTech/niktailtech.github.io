import { describe, expect, it } from "vitest";
import { profile } from "./profile";
import { projects } from "./projects";
import { socialLinks } from "./social";
import { profileSchema, projectSchema, socialLinkSchema } from "@/lib/validate-content";

describe("centralized content", () => {
  it("validates profile shape", () => {
    expect(() => profileSchema.parse(profile)).not.toThrow();
  });

  it("validates social links", () => {
    for (const link of socialLinks) {
      expect(() => socialLinkSchema.parse(link)).not.toThrow();
    }
  });

  it("validates projects", () => {
    for (const project of projects) {
      expect(() => projectSchema.parse(project)).not.toThrow();
    }
  });

  it("keeps GitHub username as NikTailTech", () => {
    expect(profile.githubUsername).toBe("NikTailTech");
  });
});
