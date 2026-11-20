"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import type { Dictionary } from "@/i18n/types";
import { cn } from "@/lib/utils";

export function ThemeToggle({
  labels,
  className,
}: {
  labels: Dictionary["theme"];
  className?: string;
}) {
  const { mode, cycle } = useTheme();

  const Icon = mode === "dark" ? Moon : mode === "light" ? Sun : Monitor;
  const label = mode === "dark" ? labels.dark : mode === "light" ? labels.light : labels.system;

  return (
    <button
      type="button"
      onClick={cycle}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-fg-muted transition-colors hover:border-border-strong hover:text-fg",
        className,
      )}
      aria-label={label}
      title={label}
    >
      <Icon className="h-4 w-4" aria-hidden />
    </button>
  );
}
