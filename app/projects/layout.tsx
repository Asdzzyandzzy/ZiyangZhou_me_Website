import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Projects",
  "Explore Ziyang Zhou's machine learning coursework, competition experiments, AI prototypes, and data tools, with code and project notes.",
  "/projects/"
);

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
