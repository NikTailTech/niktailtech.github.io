import type { ReactNode } from "react";
import { RootDocument } from "../root-document";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
