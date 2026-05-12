"use client";

import Link from "next/link";
import { ContactLinks } from "@/components/ContactLinks";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ResumePreview } from "@/components/ResumePreview";
import { Section } from "@/components/Section";
import { SkillGrid } from "@/components/SkillGrid";
import { useLanguage } from "@/components/LanguageProvider";
import { experiences } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { pickList, pickText } from "@/lib/i18n";

// 首页总览：从 content 数据里读取内容，作为所有详情页的入口。
export default function HomePage() {
  const { language, t } = useLanguage();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);
  const previewExperiences = experiences.slice(0, 2);

  return (
    <>
      <Hero />

      <Section
        title={t("home.aboutTitle")}
        description={pickText(profile.summary, language)}
        action={
          <Link className="btn-secondary" href="/about">
            {t("actions.viewAbout")}
          </Link>
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          {pickList(profile.about, language)
            .slice(0, 2)
            .map((paragraph) => (
              <p key={paragraph} className="rounded-lg border border-line bg-white p-6 leading-7 text-muted">
                {paragraph}
              </p>
            ))}
        </div>
      </Section>

      <Section
        title={t("home.experienceTitle")}
        action={
          <Link className="btn-secondary" href="/experience">
            {t("actions.viewExperience")}
          </Link>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          {previewExperiences.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </Section>

      <Section
        title={t("home.projectsTitle")}
        action={
          <Link className="btn-secondary" href="/projects">
            {t("actions.viewProjects")}
          </Link>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section title={t("home.skillsTitle")}>
        <SkillGrid />
      </Section>

      <Section
        title={t("home.writingTitle")}
        description={t("writing.description")}
        action={
          <Link className="btn-secondary" href="/writing">
            {t("actions.viewWriting")}
          </Link>
        }
      >
        <div className="rounded-lg border border-dashed border-line bg-white p-8 text-muted">
          {t("labels.comingSoon")}
        </div>
      </Section>

      <Section title={t("home.resumeTitle")}>
        <ResumePreview />
      </Section>

      <Section
        title={t("home.contactTitle")}
        description={t("contact.intro")}
        action={
          <Link className="btn-secondary" href="/contact">
            {t("actions.contactMe")}
          </Link>
        }
      >
        <ContactLinks />
      </Section>
    </>
  );
}
