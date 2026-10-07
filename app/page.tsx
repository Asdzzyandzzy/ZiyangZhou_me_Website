"use client";

import Link from "next/link";
import { ContactLinks } from "@/components/ContactLinks";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Hero } from "@/components/Hero";
import { FocusAreas } from "@/components/FocusAreas";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SkillGrid } from "@/components/SkillGrid";
import { useLanguage } from "@/components/LanguageProvider";
import { experiences } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { pickList, pickText } from "@/lib/i18n";
import { getFeaturedProjects } from "@/lib/projectOrdering";

// 首页总览：从 content 数据里读取内容，作为所有详情页的入口。
export default function HomePage() {
  const { language, t } = useLanguage();
  const featuredProjects = getFeaturedProjects(projects, 3);
  const previewExperiences = experiences.filter((item) => item.type === "work").slice(0, 2);

  return (
    <>
      <Hero />
      <nav aria-label={language === "zh" ? "首页目录" : "On this page"} className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-5 py-5 text-sm font-medium text-muted">
          <a href="#focus" className="hover:text-ink">{t("home.focusTitle")}</a>
          <a href="#selected-work" className="hover:text-ink">{t("home.projectsTitle")}</a>
          <a href="#experience" className="hover:text-ink">{t("home.experienceTitle")}</a>
          <a href="#background" className="hover:text-ink">{t("nav.about")}</a>
          <a href="#contact" className="hover:text-ink">{t("nav.contact")}</a>
        </div>
      </nav>
      <Section
        id="focus"
        eyebrow="01 / FOCUS"
        title={t("home.focusTitle")}
        description={t("home.focusDescription")}
      >
        <FocusAreas />
      </Section>

      <Section
        id="selected-work"
        eyebrow="02 / SELECTED WORK"
        title={t("home.projectsTitle")}
        action={
          <Link className="btn-secondary" href="/projects">
            {t("actions.viewProjects")}
          </Link>
        }
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="03 / EXPERIENCE"
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
        id="background"
        eyebrow="04 / BACKGROUND"
        title={t("home.aboutTitle")}
        description={pickText(profile.summary, language)}
        action={
          <Link className="btn-secondary" href="/about">
            {t("actions.viewAbout")}
          </Link>
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          {pickList(profile.about, language).slice(0, 2).map((paragraph) => (
            <p key={paragraph} className="leading-7 text-muted">{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section eyebrow="05 / TOOLKIT" title={t("home.skillsTitle")}>
        <SkillGrid />
      </Section>

      <Section
        id="contact"
        eyebrow="06 / CONNECT"
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
