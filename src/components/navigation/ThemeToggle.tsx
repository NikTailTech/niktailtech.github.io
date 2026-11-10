"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { mode, cycle, ready } = useTheme();

  const Icon = mode === "dark" ? Moon : mode === "light" ? Sun : Monitor;
  const label =
    mode === "dark"
      ? "Theme: dark. Switch theme"
      : mode === "light"
        ? "Theme: light. Switch theme"
        : "Theme: system. Switch theme";

  return (
    <button
      type="button"
      onClick={cycle}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-fg-muted transition-colors hover:border-border-strong hover:text-fg",
        className,
      )}
      aria-label={label}
      title={ready ? `Theme: ${mode}` : "Theme"}
    >
      <Icon className="h-4 w-4" aria-hidden />
    </button>
  );
}
