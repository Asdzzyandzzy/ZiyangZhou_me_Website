import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { links } from "@/content/links";
import { SiteStructuredData } from "@/components/SiteStructuredData";

// 根布局：所有页面都会共用导航、页脚、字体和 SEO metadata。
export const metadata: Metadata = {
  metadataBase: new URL(links.domain),
  title: {
    default: "Ziyang Zhou (周梓洋) | UBC Statistics, Data Analysis & ML",
    template: "%s | Ziyang Zhou"
  },
  description:
    "Ziyang Zhou (周梓洋), UBC Statistics student graduating in 2027. Forecasting and actuarial internships, machine learning projects, and AI-assisted tools.",
  verification: {
    other: { "msvalidate.01": "8D92E8D2A8DE493783F1B54EAEB53513" }
  },
  alternates: {
    canonical: "/"
  },
  authors: [{ name: "Ziyang Zhou", url: links.domain }],
  openGraph: {
    title: "Ziyang Zhou (周梓洋) | UBC Statistics, Data Analysis & ML",
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
    title: "Ziyang Zhou (周梓洋) | UBC Statistics, Data Analysis & ML",
    description:
      "Forecasting and actuarial internships, machine learning coursework, competition projects, and personal tools by Ziyang Zhou.",
    images: ["/images/profile.jpg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <SiteStructuredData />
        <LanguageProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
