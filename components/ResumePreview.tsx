"use client";

import { links } from "@/content/links";
import { useLanguage } from "@/components/LanguageProvider";

// 简历预览组件：在线 iframe 查看，同时提供下载按钮。
export function ResumePreview({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  return (
    <div className={compact ? "" : "grid gap-6 lg:grid-cols-[0.65fr_1.35fr]"}>
      <div>
        <p className="text-sm leading-7 text-muted">{t("resume.description")}</p>
        <p className="mt-2 text-sm text-muted">{t("resume.format")}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-primary" href={links.resume} target="_blank" rel="noreferrer">
            {t("actions.viewResume")}
          </a>
          <a className="btn-secondary" href={links.resume} download="Ziyang-Zhou-CV.pdf">
            {t("actions.downloadResume")}
          </a>
        </div>
      </div>
      {!compact ? <div className="h-[560px] overflow-hidden rounded-lg border border-line bg-white md:h-[780px]">
        <iframe
          title={t("resume.previewTitle")}
          src={links.resume}
          loading="lazy"
          className="h-full w-full"
        />
      </div> : null}
    </div>
  );
}
