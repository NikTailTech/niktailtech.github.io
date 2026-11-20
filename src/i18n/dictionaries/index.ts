import type { Dictionary, Locale } from "@/i18n/types";
import { en } from "./en";
import { it } from "./it";

export const dictionaries: Record<Locale, Dictionary> = { en, it };

export const defaultLocale: Locale = "en";
