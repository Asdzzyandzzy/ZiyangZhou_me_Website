import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About",
  "About Ziyang Zhou, a UBC Statistics student with forecasting and actuarial internship experience and projects in applied machine learning.",
  "/about/"
);

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
