import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact",
  "Contact Ziyang Zhou (周梓洋) about machine learning, predictive modeling and applied AI internships, graduate opportunities or technical collaborations.",
  "/contact/"
);

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
