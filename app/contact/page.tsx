"use client";

import { ContactLinks } from "@/components/ContactLinks";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";

// 联系页：展示邮箱、GitHub 和 LinkedIn，不展示手机号和微信。
export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <Section title={t("pages.contactTitle")} description={t("contact.intro")} headingLevel={1}>
      <ContactLinks />
    </Section>
  );
}
