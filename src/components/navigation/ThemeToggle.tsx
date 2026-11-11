"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { mode, cycle, ready } = useTheme();
  const { t } = useLocale();

  const Icon = mode === "dark" ? Moon : mode === "light" ? Sun : Monitor;
  const label =
    mode === "dark" ? t.theme.dark : mode === "light" ? t.theme.light : t.theme.system;

  return (
    <button
      type="button"
      onClick={cycle}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-fg-muted transition-colors hover:border-border-strong hover:text-fg",
        className,
      )}
      aria-label={label}
      title={ready ? label : t.theme.switch}
    >
      <Icon className="h-4 w-4" aria-hidden />
    </button>
  );
}
