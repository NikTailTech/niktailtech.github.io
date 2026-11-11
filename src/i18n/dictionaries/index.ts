import type { Dictionary, Locale } from "@/i18n/types";
import { en } from "./en";
import { it } from "./it";

export const dictionaries: Record<Locale, Dictionary> = { en, it };

export const defaultLocale: Locale = "en";

/** Flip to true when the Italian UI should be available again. */
export const italianEnabled = false;

export function isLocale(value: string | null | undefined): value is Locale {
  if (value === "en") return true;
  if (value === "it") return italianEnabled;
  return false;
}

