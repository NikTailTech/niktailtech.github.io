import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { person, projects, seo, socialLinks } from "@/data/cv";
import { personJsonLd, serializeJsonLd } from "./structured-data";

const publicDir = join(process.cwd(), "public");

describe("SEO metadata", () => {
  it("keeps the title within 60 characters and leads with the name", () => {
    expect(seo.title.length).toBeLessThanOrEqual(60);
    expect(seo.title.startsWith(person.name)).toBe(true);
  });

  it("keeps the description within 155 characters, focused on the primary role", () => {
    expect(seo.description.length).toBeLessThanOrEqual(155);
    expect(seo.description).toMatch(/Full Stack Developer/);
    expect(seo.description).not.toMatch(/web3|nft|3d|blockchain/i);
  });

  it("uses a 1200x630 raster OG image that exists", () => {
    expect(seo.ogImage).toMatchObject({ width: 1200, height: 630 });
    expect(seo.ogImage.src).toMatch(/\.(png|jpe?g)$/);
    expect(existsSync(join(publicDir, seo.ogImage.src))).toBe(true);
  });

  it("ships the favicon set", () => {
    for (const file of ["favicon.ico", "icon.svg", "apple-touch-icon.png", "manifest.webmanifest"]) {
      expect(existsSync(join(publicDir, file)), file).toBe(true);
    }
  });

  it("has AVIF and WebP screenshots for every project", () => {
    for (const project of projects) {
      for (const w of [800, 1280]) {
        for (const ext of ["avif", "webp"]) {
          const file = `${project.image.src}-${w}.${ext}`;
          expect(existsSync(join(publicDir, file)), file).toBe(true);
        }
      }
    }
  });
});

describe("Person JSON-LD", () => {
  const data = personJsonLd(`${seo.siteUrl}/`);

  it("describes the person with name, role, location and profiles", () => {
    expect(data).toMatchObject({
      "@type": "Person",
      name: "Nicholas Codazzi",
      jobTitle: "Full Stack Developer",
      address: { addressLocality: "Ticino", addressCountry: "CH" },
      worksFor: { name: "Franklin Switzerland" },
    });
    expect(data.sameAs).toEqual(socialLinks.map((link) => link.href));
    expect(data.knowsAbout.length).toBeGreaterThan(0);
  });

  it("never includes a street address or phone number", () => {
    expect(data).not.toHaveProperty("telephone");
    expect(data.address).not.toHaveProperty("streetAddress");
  });

  it("escapes markup when serialized", () => {
    expect(serializeJsonLd({ a: "</script>" })).not.toContain("</script>");
  });
});
