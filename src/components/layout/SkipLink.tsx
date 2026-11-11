"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a href="#main" className="skip-link">
      {t.meta.skipToContent}
    </a>
  );
}
