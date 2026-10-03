import type { Metadata } from "next";
import { links } from "@/content/links";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  type: "website" | "article" = "website"
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Ziyang Zhou`,
      description,
      url: new URL(path, links.domain),
      siteName: "ZiyangZhou.me",
      type,
      images: [{ url: "/images/profile.jpg", alt: "Ziyang Zhou" }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Ziyang Zhou`,
      description,
      images: ["/images/profile.jpg"]
    }
  };
}
