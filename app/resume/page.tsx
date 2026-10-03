"use client";

import { ResumePreview } from "@/components/ResumePreview";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";

// The current PDF is linked centrally in content/links.ts.
export default function ResumePage() {
  const { t } = useLanguage();

  return (
    <Section title={t("pages.resumeTitle")} headingLevel={1}>
      <ResumePreview />
    </Section>
  );
}
