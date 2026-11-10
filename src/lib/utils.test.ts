import { describe, expect, it } from "vitest";
import { cn, isExternalHref } from "./utils";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("a", false, "b", undefined, "c")).toBe("a b c");
  });
});

describe("isExternalHref", () => {
  it("detects http and mailto links", () => {
    expect(isExternalHref("https://github.com")).toBe(true);
    expect(isExternalHref("mailto:a@b.c")).toBe(true);
    expect(isExternalHref("#projects")).toBe(false);
    expect(isExternalHref("/docs")).toBe(false);
  });
});
