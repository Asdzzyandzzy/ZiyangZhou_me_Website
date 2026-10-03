"use client";

import type { ExperienceItem } from "@/content/experience";
import { pickList, pickText } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

// 经历卡片：用于教育、实习、工作经历展示。
export function ExperienceCard({ item }: { item: ExperienceItem }) {
  const { language, t } = useLanguage();

  return (
    <article id={item.id} className="min-w-0 scroll-mt-40 rounded-lg border border-line bg-white p-6">
      <div className="flex flex-col gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase text-accent">
            {item.type === "education" ? t("labels.education") : t("labels.work")}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-ink">
            {pickText(item.title, language)}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {pickText(item.organization, language)}
          </p>
        </div>
        <p className="text-sm leading-6 text-muted">
          {pickText(item.period, language)}
          {item.location ? <span className="block">{pickText(item.location, language)}</span> : null}
        </p>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
        {pickList(item.description, language).map((line) => (
          <li key={line} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
