import { afterEach, describe, expect, it } from "vitest";
import { withBasePath } from "./paths";

describe("withBasePath", () => {
  const original = process.env.NEXT_PUBLIC_BASE_PATH;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.NEXT_PUBLIC_BASE_PATH;
    } else {
      process.env.NEXT_PUBLIC_BASE_PATH = original;
    }
  });

  it("returns path unchanged without basePath", () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH;
    expect(withBasePath("/documents/cv.pdf")).toBe("/documents/cv.pdf");
  });

  it("prefixes configured basePath", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/personal-website";
    expect(withBasePath("/documents/cv.pdf")).toBe("/personal-website/documents/cv.pdf");
  });
});
