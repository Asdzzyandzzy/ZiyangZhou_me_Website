"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/content/projects";

// 项目列表页：新增项目后会自动出现在这里。
export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <Section title={t("pages.projectsTitle")} description={t("home.subhead")}>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
