"use client";

import { links } from "@/content/links";
import { useLanguage } from "@/components/LanguageProvider";

// 联系方式组件：目前只放邮箱和 GitHub，不展示手机号/微信。
export function ContactLinks() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <a
        className="rounded-lg border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft"
        href={`mailto:${links.email}`}
      >
        <p className="text-sm text-muted">Email</p>
        <p className="mt-2 text-lg font-semibold text-ink">{links.email}</p>
      </a>
      <a
        className="rounded-lg border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft"
        href={links.github}
        target="_blank"
        rel="noreferrer"
      >
        <p className="text-sm text-muted">GitHub</p>
        <p className="mt-2 text-lg font-semibold text-ink">{t("actions.viewGithub")}</p>
      </a>
    </div>
  );
}
