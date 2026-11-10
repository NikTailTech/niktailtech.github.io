import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "accent" | "warn";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider",
        tone === "neutral" && "border-border text-fg-subtle",
        tone === "accent" && "border-accent/40 bg-accent-soft text-accent",
        tone === "warn" && "border-warning/40 text-warning",
        className,
      )}
    >
      {children}
    </span>
  );
}
