"use client";

import { ResumePreview } from "@/components/ResumePreview";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";

// 简历页：PDF 文件位于 public/resume/ziyang-zhou-resume-bilingual.pdf。
export default function ResumePage() {
  const { t } = useLanguage();

  return (
    <Section title={t("pages.resumeTitle")} description={t("resume.description")}>
      <ResumePreview />
    </Section>
  );
}
