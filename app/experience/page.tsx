"use client";

import { ExperienceCard } from "@/components/ExperienceCard";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { experiences } from "@/content/experience";

// 经历页：从 content/experience.ts 自动读取教育和实践经历。
export default function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <Section title={t("pages.experienceTitle")} headingLevel={1}>
      <h2 className="mb-5 text-xl font-semibold text-ink">{t("labels.work")}</h2>
      <div className="space-y-5">
        {experiences.filter((item) => item.type === "work").map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
      <h2 className="mb-5 mt-12 text-xl font-semibold text-ink">{t("labels.education")}</h2>
      {experiences.filter((item) => item.type === "education").map((item) => (
        <ExperienceCard key={item.id} item={item} />
      ))}
    </Section>
  );
}
