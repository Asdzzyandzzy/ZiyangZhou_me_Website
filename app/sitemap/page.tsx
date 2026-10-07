import Link from "next/link";
import { projects } from "@/content/projects";
import { sortProjectsByPortfolioPriority } from "@/lib/projectOrdering";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/Section";

export const metadata = pageMetadata("Site index", "Browse Ziyang Zhou's profile, machine learning and AI projects, experience and contact information. 周梓洋个人网站目录。", "/sitemap/");

const pages = [
  ["/", "Home · Machine Learning"], ["/zh/", "中文首页 · 周梓洋"],
  ["/about/", "About · Background & skills"], ["/experience/", "Experience · Internships & education"],
  ["/projects/", "Projects · All case studies"], ["/resume/", "Resume · CV"], ["/contact/", "Contact"]
];

export default function SiteIndexPage() {
  return (
    <Section title="Site index / 网站目录" description="A direct route to every profile and project page." headingLevel={1}>
      <h2 className="text-xl font-semibold">Profile / 个人资料</h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {pages.map(([href, label]) => <li key={href}><Link href={href} className="text-accent underline underline-offset-4">{label}</Link></li>)}
      </ul>
      <h2 className="mt-12 text-xl font-semibold">Projects / 项目</h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {sortProjectsByPortfolioPriority(projects).map((project) => (
          <li key={project.slug}><Link href={`/projects/${project.slug}/`} className="block rounded-lg border border-line bg-white p-4 hover:border-ink">
            <span className="font-medium">{project.title.en}</span><span lang="zh-CN" className="mt-2 block text-sm text-muted">{project.title.zh}</span>
          </Link></li>
        ))}
      </ul>
      <p className="mt-10 flex flex-wrap gap-6 text-sm text-muted"><a className="underline underline-offset-4" href="/sitemap.xml">XML sitemap</a><a className="underline underline-offset-4" href="/llms.txt">Plain-text site guide</a></p>
    </Section>
  );
}
