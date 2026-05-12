"use client";

import { links } from "@/content/links";
import { useLanguage } from "@/components/LanguageProvider";

// 简历预览组件：在线 iframe 查看，同时提供下载按钮。
export function ResumePreview() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-lg border border-line bg-white p-6">
        <p className="text-sm leading-7 text-muted">{t("resume.description")}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-primary" href={links.resume} target="_blank" rel="noreferrer">
            {t("actions.viewResume")}
          </a>
          <a className="btn-secondary" href={links.resume} download>
            {t("actions.downloadResume")}
          </a>
        </div>
      </div>
      <div className="h-[720px] overflow-hidden rounded-lg border border-line bg-white">
        <iframe
          title="Ziyang Zhou Resume"
          src={links.resume}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
