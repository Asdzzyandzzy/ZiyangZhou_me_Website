import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";
import { ProfilePageStructuredData } from "@/components/SiteStructuredData";

export const metadata = pageMetadata(
  "About",
  "About Ziyang Zhou (周梓洋), a Statistics student at the University of British Columbia (UBC), with forecasting and actuarial internship experience.",
  "/about/"
);

export default function PageLayout({ children }: { children: ReactNode }) {
  return <><ProfilePageStructuredData />{children}</>;
}
