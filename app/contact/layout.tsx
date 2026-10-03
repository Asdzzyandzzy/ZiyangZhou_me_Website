import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact",
  "Contact Ziyang Zhou about internships and graduate opportunities in data analysis, machine learning, forecasting, and actuarial work.",
  "/contact/"
);

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
