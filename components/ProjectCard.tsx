"use client";

import Link from "next/link";
import type { Project } from "@/content/projects";
import { pickText } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

// 项目卡片：列表页和首页复用，hover 时轻微上浮。
export function ProjectCard({ project }: { project: Project }) {
  const { language, t } = useLanguage();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft"
    >
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted">
          {pickText(project.category, language)}
        </span>
        <span className="text-xs text-muted">{pickText(project.period, language)}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-ink">
        {pickText(project.title, language)}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">
        {pickText(project.subtitle, language)}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
            {tech}
          </span>
        ))}
      </div>
      <span className="mt-6 text-sm font-medium text-accent transition group-hover:translate-x-1">
        {t("actions.readCaseStudy")}
      </span>
    </Link>
  );
}
