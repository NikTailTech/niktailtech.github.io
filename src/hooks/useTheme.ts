"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import type { ThemeMode } from "@/types";

const STORAGE_KEY = "nicholas-theme";

function getSystemDark(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const dark = mode === "dark" || (mode === "system" && getSystemDark());
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
}

function readStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return "system";
}

type Snapshot = { mode: ThemeMode; systemDark: boolean };

let cachedSnapshot: Snapshot = { mode: "system", systemDark: false };

function getClientSnapshot(): Snapshot {
  const next: Snapshot = {
    mode: readStoredMode(),
    systemDark: getSystemDark(),
  };
  if (
    cachedSnapshot.mode === next.mode &&
    cachedSnapshot.systemDark === next.systemDark
  ) {
    return cachedSnapshot;
  }
  cachedSnapshot = next;
  return cachedSnapshot;
}

const serverSnapshot: Snapshot = { mode: "system", systemDark: false };

function getServerSnapshot(): Snapshot {
  return serverSnapshot;
}

type ThemeListener = () => void;
const listeners = new Set<ThemeListener>();

function subscribe(listener: ThemeListener) {
  listeners.add(listener);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onScheme = () => {
    applyTheme(readStoredMode());
    listener();
  };
  mq.addEventListener("change", onScheme);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    mq.removeEventListener("change", onScheme);
    window.removeEventListener("storage", onStorage);
  };
}

function emit() {
  listeners.forEach((l) => l());
}

export function useTheme() {
  const { mode, systemDark } = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    applyTheme(mode);
  }, [mode, systemDark]);

  const resolved: "light" | "dark" =
    mode === "dark" || (mode === "system" && systemDark) ? "dark" : "light";

  const setMode = useCallback((next: ThemeMode) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    emit();
  }, []);

  const cycle = useCallback(() => {
    const order: ThemeMode[] = ["system", "light", "dark"];
    const idx = order.indexOf(mode);
    setMode(order[(idx + 1) % order.length]);
  }, [mode, setMode]);

  return { mode, resolved, setMode, cycle, ready: true };
}
