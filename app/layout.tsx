import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { links } from "@/content/links";

// 根布局：所有页面都会共用导航、页脚、字体和 SEO metadata。
export const metadata: Metadata = {
  metadataBase: new URL(links.domain),
  title: {
    default: "Ziyang Zhou | UBC Statistics, Data Analysis & ML",
    template: "%s | Ziyang Zhou"
  },
  description:
    "Ziyang Zhou, UBC Statistics student graduating in 2027. Forecasting and actuarial internships, machine learning projects, and AI-assisted tools.",
  alternates: {
    canonical: "/"
  },
  authors: [{ name: "Ziyang Zhou", url: links.domain }],
  openGraph: {
    title: "Ziyang Zhou | UBC Statistics, Data Analysis & ML",
    description:
      "Forecasting and actuarial internships, machine learning coursework, competition projects, and personal tools by Ziyang Zhou.",
    url: links.domain,
    siteName: "ZiyangZhou.me",
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Ziyang Zhou"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziyang Zhou | UBC Statistics, Data Analysis & ML",
    description:
      "Forecasting and actuarial internships, machine learning coursework, competition projects, and personal tools by Ziyang Zhou.",
    images: ["/images/profile.jpg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <LanguageProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
