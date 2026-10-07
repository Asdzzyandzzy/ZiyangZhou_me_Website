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
    default: "Ziyang Zhou (周梓洋) | Machine Learning · UBC Statistics",
    template: "%s | Ziyang Zhou (周梓洋)"
  },
  description:
    "Ziyang Zhou (周梓洋), UBC Statistics undergraduate focused on machine learning, feature engineering, predictive modeling and model validation. Explore ML and AI projects.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  verification: {
    other: {
      "msvalidate.01": "8D92E8D2A8DE493783F1B54EAEB53513",
      "baidu-site-verification": "codeva-h6ACGg9OM8"
    }
  },
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/zh/", "x-default": "/" }
  },
  authors: [{ name: "Ziyang Zhou (周梓洋)", url: links.domain }],
  openGraph: {
    title: "Ziyang Zhou (周梓洋) | Machine Learning · UBC Statistics",
    description:
      "Applied machine learning, predictive modeling and AI systems, grounded in UBC Statistics. Explore projects and industry experience by Ziyang Zhou (周梓洋).",
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
    title: "Ziyang Zhou (周梓洋) | Machine Learning · UBC Statistics",
    description:
      "Applied machine learning, predictive modeling and AI systems, grounded in UBC Statistics. Explore projects and industry experience by Ziyang Zhou (周梓洋).",
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
