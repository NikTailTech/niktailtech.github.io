import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav" | "main";
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[var(--content)] px-5 sm:px-8", className)}>
      {children}
    </Tag>
  );
}

export function Section({
  id,
  children,
  className,
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("section-rule py-[var(--section-y)]", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
