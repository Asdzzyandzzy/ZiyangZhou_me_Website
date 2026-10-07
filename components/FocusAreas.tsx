"use client";

import Link from "next/link";
import { focusAreas } from "@/content/focus";
import { pickText } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export function FocusAreas() {
  const { language } = useLanguage();
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {focusAreas.map((area, index) => (
        <article key={area.title.en} className="flex flex-col rounded-lg border border-line bg-white p-6">
          <p className="text-xs font-semibold tracking-widest text-accent">0{index + 1}</p>
          <h3 className="mt-5 text-xl font-semibold text-ink">{pickText(area.title, language)}</h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-muted">{pickText(area.description, language)}</p>
          <p className="mt-6 border-t border-line pt-4 text-xs leading-6 text-muted">{area.methods}</p>
          <Link className="mt-4 text-sm font-semibold text-accent underline underline-offset-4" href={area.href}>
            {language === "zh" ? "查看相关实践" : "Explore related work"} <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
