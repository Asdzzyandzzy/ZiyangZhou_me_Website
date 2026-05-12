"use client";

import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";

// Writing 暂时预留。以后有文章时，可从 content/writing.ts 读取列表。
export default function WritingPage() {
  const { t } = useLanguage();

  return (
    <Section title={t("pages.writingTitle")} description={t("writing.description")}>
      <div className="rounded-lg border border-dashed border-line bg-white p-12 text-center">
        <p className="text-2xl font-semibold text-ink">{t("labels.comingSoon")}</p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
          {t("writing.description")}
        </p>
      </div>
    </Section>
  );
}
