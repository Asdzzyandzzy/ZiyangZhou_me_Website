import type { MetadataRoute } from "next";
import { links } from "@/content/links";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/experience", "/projects", "/resume", "/contact"];
  const staticRoutes = staticPaths.map((path) => ({
    url: new URL(`${path}/`, links.domain).toString(),
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
