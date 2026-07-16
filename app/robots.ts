import type { MetadataRoute } from "next";
import { links } from "@/content/links";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: new URL("/sitemap.xml", links.domain).toString()
  };
}
