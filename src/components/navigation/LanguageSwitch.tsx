"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";
import { cn } from "@/lib/utils";

const flags: { locale: Locale; flag: string }[] = [
  { locale: "en", flag: "🇬🇧" },
  { locale: "it", flag: "🇮🇹" },
];

export function LanguageSwitch({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={cn("inline-flex items-center gap-1", className)}
    >
      {flags.map(({ locale: code, flag }) => {
        const active = locale === code;
        const label = code === "en" ? t.language.en : t.language.it;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={label}
            title={label}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-sm border text-base leading-none transition-colors",
              active
                ? "border-accent bg-accent-soft text-fg"
                : "border-border text-fg-muted hover:border-border-strong hover:text-fg",
            )}
          >
            <span aria-hidden>{flag}</span>
          </button>
        );
      })}
    </div>
  );
}
