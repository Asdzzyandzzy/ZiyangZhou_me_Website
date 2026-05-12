"use client";

import { skillGroups } from "@/content/skills";
import { pickText } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

// 技能网格：技能内容来自 content/skills.ts，方便以后维护。
export function SkillGrid() {
  const { language } = useLanguage();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.title.en} className="rounded-lg border border-line bg-white p-6">
          <h3 className="text-base font-semibold text-ink">
            {pickText(group.title, language)}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
