import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "CV",
  "Read or download Ziyang Zhou's October 2026 CV, including UBC education, data analysis and actuarial internships, and selected projects.",
  "/resume/"
);

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
