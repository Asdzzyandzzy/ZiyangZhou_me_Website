"use client";

import { Section } from "@/components/Section";
import { SkillGrid } from "@/components/SkillGrid";
import { useLanguage } from "@/components/LanguageProvider";
import { profile } from "@/content/profile";
import { pickList, pickText } from "@/lib/i18n";

// 关于我详情页：个人介绍、亮点和技能概览。
export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <Section title={t("pages.aboutTitle")} description={pickText(profile.role, language)}>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
        <div className="space-y-5">
          {pickList(profile.about, language).map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="rounded-lg border border-line bg-white p-6">
          <h2 className="text-lg font-semibold text-ink">{t("labels.highlights")}</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
            {pickList(profile.highlights, language).map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <SkillGrid />
      </div>
    </Section>
  );
}
