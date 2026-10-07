"use client";

import Link from "next/link";
import { links } from "@/content/links";
import { useLanguage } from "@/components/LanguageProvider";

// 页脚用于放置版权、域名和常用链接。
export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer lang={language === "zh" ? "zh-CN" : "en"} className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>{t("footer.line")}</p>
        <div className="flex flex-wrap gap-4">
          <Link className="transition hover:text-ink" href="/contact">
            {t("nav.contact")}
          </Link>
          <Link className="transition hover:text-ink" href="/zh/" hrefLang="zh-CN" lang="zh-CN">中文首页</Link>
          <Link className="transition hover:text-ink" href="/sitemap/">{language === "zh" ? "网站目录" : "Site index"}</Link>
          <a
            className="transition hover:text-ink"
            href={links.github}
            target="_blank"
            rel="me noreferrer"
          >
            GitHub
          </a>
          <a
            className="transition hover:text-ink"
            href={links.linkedin}
            target="_blank"
            rel="me noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="transition hover:text-ink"
            href={links.githubPages}
            target="_blank"
            rel="me noreferrer"
          >
            GitHub Pages
          </a>
          <a className="transition hover:text-ink" href={`mailto:${links.email}`}>
            {t("labels.email")}
          </a>
        </div>
      </div>
    </footer>
  );
}
