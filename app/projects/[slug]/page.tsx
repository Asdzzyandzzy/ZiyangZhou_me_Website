import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import { links } from "@/content/links";
import { getProjectBySlug, projects } from "@/content/projects";

// 动态路由说明：
// content/projects.ts 里的每个 slug 都会生成一个 /projects/[slug] 详情页。
// 以后新增项目时，只要在 projects.ts 加对象，这里会自动识别。
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  const path = `/projects/${project.slug}/`;

  return {
    title: project.title.en,
    description: project.subtitle.en,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: project.title.en,
      description: project.subtitle.en,
      url: new URL(path, links.domain),
      type: "article"
    }
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
