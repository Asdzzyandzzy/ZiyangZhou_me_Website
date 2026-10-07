import { links } from "@/content/links";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { sortProjectsByPortfolioPriority } from "@/lib/projectOrdering";

export const dynamic = "force-static";

// An optional plain-text guide generated from the same public content as the site.
// Crawl access is governed by robots.txt; this file makes no ingestion guarantees.
export function GET() {
  const home = links.domain;
  const text = [
    "# Ziyang Zhou (周梓洋)", "",
    `> ${profile.role.en}. BSc expected May 2027.`, "",
    profile.about.en[0], "", profile.about.zh[0], "",
    "## Profile pages", "",
    `- [English home](${home}/): Machine learning focus and selected work.`,
    `- [中文首页](${home}/zh/): 周梓洋、UBC 统计学与机器学习。`,
    `- [About](${home}/about/): Background, strengths and technical toolkit.`,
    `- [Experience](${home}/experience/): Internship roles and UBC education.`,
    `- [Projects](${home}/projects/): Complete project collection.`,
    `- [CV](${home}/resume/): Current resume.`,
    `- [Contact](${home}/contact/): Opportunities and collaboration.`,
    "", "## Project case studies", "",
    ...sortProjectsByPortfolioPriority(projects).map((project) => `- [${project.title.en}](${home}/projects/${project.slug}/): ${project.summary.en}`),
    "", "## Public profiles", "",
    `- [GitHub](${links.github})`, `- [GitHub Pages](${links.githubPages})`, `- [LinkedIn](${links.linkedin})`,
    "", "## Crawl access", "",
    "Public pages welcome search engines, AI crawlers and other web crawlers. No sign-in is required. The same content is served to visitors and crawlers.",
    `- [robots.txt](${home}/robots.txt)`, `- [XML sitemap](${home}/sitemap.xml)`, `- [Site index](${home}/sitemap/)`, ""
  ].join("\n");
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
