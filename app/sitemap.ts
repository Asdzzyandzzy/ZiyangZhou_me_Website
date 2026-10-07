import type { MetadataRoute } from "next";
import { links } from "@/content/links";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/zh", "/about", "/experience", "/projects", "/resume", "/contact", "/sitemap"];
  const staticRoutes = staticPaths.map((path) => ({
    url: new URL(`${path}/`, links.domain).toString(),
    ...(path === "" || path === "/zh" ? {
      alternates: { languages: { en: new URL("/", links.domain).toString(), "zh-CN": new URL("/zh/", links.domain).toString() } }
    } : {}),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7
  }));
  const projectRoutes = projects.map((project) => ({
    url: new URL(`/projects/${project.slug}/`, links.domain).toString(),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.8 : 0.6
  }));

  return [...staticRoutes, ...projectRoutes];
}
