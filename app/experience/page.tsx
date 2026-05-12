"use client";

import { ExperienceCard } from "@/components/ExperienceCard";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { experiences } from "@/content/experience";

// 经历页：从 content/experience.ts 自动读取教育和实践经历。
export default function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <Section title={t("pages.experienceTitle")}>
      <div className="space-y-5">
        {experiences.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
