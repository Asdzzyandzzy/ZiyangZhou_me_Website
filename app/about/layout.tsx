import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";
import { ProfilePageStructuredData } from "@/components/SiteStructuredData";

export const metadata = pageMetadata(
  "About",
  "Ziyang Zhou (周梓洋), UBC Statistics undergraduate specializing in applied machine learning, predictive modeling and model evaluation, with forecasting and actuarial industry experience.",
  "/about/"
);

export default function PageLayout({ children }: { children: ReactNode }) {
  return <><ProfilePageStructuredData />{children}</>;
}
