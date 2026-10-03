"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { projects, type ProjectGroup } from "@/content/projects";
import { sortProjectsByPortfolioPriority } from "@/lib/projectOrdering";

// 项目列表页：新增项目后会自动出现在这里。
export default function ProjectsPage() {
  const { t } = useLanguage();
  const [group, setGroup] = useState<ProjectGroup | "all">("all");
  const [query, setQuery] = useState("");
  const orderedProjects = sortProjectsByPortfolioPriority(projects);
  const search = query.trim().toLocaleLowerCase();
  const visibleProjects = orderedProjects.filter((project) => {
    const text = [project.title.en, project.title.zh, project.subtitle.en, project.subtitle.zh, ...project.techStack].join(" ").toLocaleLowerCase();
    return (group === "all" || project.group === group) && text.includes(search);
  });

  return (
    <Section title={t("pages.projectsTitle")} description={t("projects.description")} headingLevel={1}>
      <div className="mb-8 grid gap-4 border-b border-line pb-6 sm:grid-cols-[minmax(0,1fr)_16rem]">
        <label className="min-w-0 text-sm font-medium text-ink">
          {t("projects.search")}
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("projects.searchPlaceholder")}
            className="mt-2 h-11 w-full rounded-md border border-line bg-white px-3 font-normal"
          />
        </label>
        <label className="min-w-0 text-sm font-medium text-ink">
          {t("projects.filter")}
          <select
            value={group}
            onChange={(event) => setGroup(event.target.value as ProjectGroup | "all")}
            className="mt-2 h-11 w-full rounded-md border border-line bg-white px-3 font-normal"
          >
            {(["all", "coursework", "competitions", "ai-tools", "data-tools"] as const).map((value) => (
              <option key={value} value={value}>{t(`projects.${value}`)}</option>
            ))}
          </select>
        </label>
      </div>
      <p role="status" className="mb-4 text-sm text-muted">
        {t("projects.count").replace("{count}", String(visibleProjects.length))}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {visibleProjects.length === 0 ? (
        <div className="py-12 text-center">
          <p className="mb-4 text-muted">{t("projects.empty")}</p>
          <button type="button" className="btn-secondary" onClick={() => { setQuery(""); setGroup("all"); }}>
            {t("projects.reset")}
          </button>
        </div>
      ) : null}
    </Section>
  );
}
