"use client";

import Link from "next/link";
import type { Project } from "@/content/projects";
import { pickList, pickText } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-line bg-white p-6">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// 项目详情页内容组件：把每个项目呈现为 case study。
export function ProjectDetail({ project }: { project: Project }) {
  const { language, t } = useLanguage();

  return (
    <article className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <Link className="text-sm font-medium text-muted transition hover:text-ink" href="/projects">
        {t("actions.backProjects")}
      </Link>

      <header className="reveal mt-10 max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          {pickText(project.category, language)}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          {pickText(project.title, language)}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          {pickText(project.summary, language)}
        </p>
      </header>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-line bg-white p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Period</p>
          <p className="mt-2 font-medium text-ink">{pickText(project.period, language)}</p>
        </div>
        <div className="rounded-lg border border-line bg-white p-5 md:col-span-2">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {t("labels.stack")}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <section className="rounded-lg border border-line bg-white p-6">
          <h2 className="text-lg font-semibold text-ink">{t("labels.motivation")}</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            {pickText(project.motivation, language)}
          </p>
        </section>
        <section className="rounded-lg border border-line bg-white p-6">
          <h2 className="text-lg font-semibold text-ink">{t("labels.links")}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.repo ? (
              <a className="btn-primary" href={project.repo} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : null}
            {project.demo ? (
              <a className="btn-secondary" href={project.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            ) : null}
          </div>
        </section>
        <DetailBlock title={t("labels.features")} items={pickList(project.features, language)} />
        <DetailBlock
          title={t("labels.contribution")}
          items={pickList(project.contribution, language)}
        />
        <div className="lg:col-span-2">
          <DetailBlock title={t("labels.learning")} items={pickList(project.learnings, language)} />
        </div>
      </div>
    </article>
  );
}
