import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Experience",
  "Ziyang Zhou's data analyst internship at Shusheng Data, actuarial internship at Guangbo, earlier work, and UBC Statistics education.",
  "/experience/"
);

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
