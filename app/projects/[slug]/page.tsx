import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjectBySlug, projects } from "@/content/projects";

// 动态路由说明：
// content/projects.ts 里的每个 slug 都会生成一个 /projects/[slug] 详情页。
// 以后新增项目时，只要在 projects.ts 加对象，这里会自动识别。
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
