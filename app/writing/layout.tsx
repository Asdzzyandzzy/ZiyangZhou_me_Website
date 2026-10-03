import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Writing",
  alternates: { canonical: "/writing/" },
  robots: { index: false, follow: true }
};

export default function WritingLayout({ children }: { children: ReactNode }) {
  return children;
}
