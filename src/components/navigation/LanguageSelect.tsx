"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";

export function LanguageSelect({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <label className={className}>
      <span className="sr-only">{t.language.label}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="rounded-sm border border-border bg-bg px-3 py-2 text-sm text-fg outline-none transition-colors hover:border-border-strong focus-visible:border-accent"
        aria-label={t.language.label}
      >
        <option value="en">{t.language.en}</option>
        <option value="it">{t.language.it}</option>
      </select>
    </label>
  );
}
