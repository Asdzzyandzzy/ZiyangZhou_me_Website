import type { MetadataRoute } from "next";
import { links } from "@/content/links";

export default function robots(): MetadataRoute.Robots {
  // Welcome every crawler, including search and AI agents, with no crawl delay.
  // Avoid separate bot groups: a wildcard applies consistently to all public paths.
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: new URL("/sitemap.xml", links.domain).toString()
  };
}
