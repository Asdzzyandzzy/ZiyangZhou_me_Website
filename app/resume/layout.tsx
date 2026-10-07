import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "CV",
  "Read or download Ziyang Zhou's CV: UBC Statistics education, machine learning projects, forecasting and actuarial internship experience.",
  "/resume/"
);

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
