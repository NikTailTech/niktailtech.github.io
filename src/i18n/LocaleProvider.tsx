"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { defaultLocale, dictionaries } from "@/i18n/dictionaries";

import type { Dictionary, Locale } from "@/i18n/types";

const STORAGE_KEY = "nicholas-locale";

type LocaleContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  ready: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  // Italian temporarily disabled — always serve English.
  return defaultLocale;
}


let cachedLocale: Locale = defaultLocale;

function getClientSnapshot(): Locale {
  const next = readStoredLocale();
  if (cachedLocale === next) return cachedLocale;
  cachedLocale = next;
  return cachedLocale;
}

function getServerSnapshot(): Locale {
  return defaultLocale;
}

type LocaleListener = () => void;
const listeners = new Set<LocaleListener>();

function subscribe(listener: LocaleListener) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function emit() {
  listeners.forEach((l) => l());
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
    cachedLocale = next;
    emit();
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
      ready: true,
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
