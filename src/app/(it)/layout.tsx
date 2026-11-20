import type { ReactNode } from "react";
import { RootDocument } from "../root-document";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("it");

export default function ItalianLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="it">{children}</RootDocument>;
}
