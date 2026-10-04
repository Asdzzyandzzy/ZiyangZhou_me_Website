"use client";

import { links } from "@/content/links";
import { profile } from "@/content/profile";
import { useLanguage } from "@/components/LanguageProvider";

// 公开联系方式与个人主页；不展示手机号或微信。
export function ContactLinks() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="min-w-0 rounded-lg border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft"
        href={`mailto:${links.email}`}
      >
        <p className="text-sm text-muted">{t("labels.email")}</p>
        <p className="mt-2 text-lg font-semibold text-ink [overflow-wrap:anywhere]">{links.email}</p>
      </a>
      <a
        className="rounded-lg border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft"
        href={links.github}
        target="_blank"
        rel="me noreferrer"
      >
        <p className="text-sm text-muted">GitHub</p>
        <p className="mt-2 text-lg font-semibold text-ink">{t("actions.viewGithub")}</p>
      </a>
      <a
        className="rounded-lg border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft"
        href={links.linkedin}
        target="_blank"
        rel="me noreferrer"
      >
        <p className="text-sm text-muted">LinkedIn</p>
        <p className="mt-2 text-lg font-semibold text-ink">{profile.name} ({profile.chineseName})</p>
      </a>
    </div>
  );
}
