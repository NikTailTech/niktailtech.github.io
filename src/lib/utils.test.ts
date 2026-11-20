import { describe, expect, it } from "vitest";
import { cn, formatPeriod, formatYearMonth, isExternalHref } from "./utils";

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

describe("formatPeriod", () => {
  it("formats year-month values like the CV", () => {
    expect(formatYearMonth("2023-02", "en-US")).toBe("Feb 2023");
    expect(formatPeriod("2023-02", "2025-05", "en-US", "Present")).toBe("Feb 2023 – May 2025");
  });

  it("uses the present label for the current role", () => {
    expect(formatPeriod("2025-06", null, "en-US", "Present")).toBe("Jun 2025 – Present");
  });
});
