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
    default: "Ziyang Zhou | Software, Machine Learning & Data",
    template: "%s | Ziyang Zhou"
  },
  description:
    "Personal portfolio for Ziyang Zhou, a UBC statistics student building software, machine learning projects, data tools, and product ideas.",
  openGraph: {
    title: "Ziyang Zhou | Personal Portfolio",
    description:
      "Software, machine learning, data analysis, and product-minded projects by Ziyang Zhou.",
    url: links.domain,
    siteName: "Ziyangzhou.me",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Ziyang Zhou"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziyang Zhou | Personal Portfolio",
    description:
      "Software, machine learning, data analysis, and product-minded projects by Ziyang Zhou.",
    images: ["/images/profile.jpg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
