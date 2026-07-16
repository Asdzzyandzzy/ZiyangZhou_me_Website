"use client";

import Link from "next/link";
import { links } from "@/content/links";
import { useLanguage } from "@/components/LanguageProvider";

// 页脚用于放置版权、域名和常用链接。
export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>{t("footer.line")}</p>
        <div className="flex flex-wrap gap-4">
          <Link className="transition hover:text-ink" href="/contact">
            {t("nav.contact")}
          </Link>
          <a
            className="transition hover:text-ink"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="transition hover:text-ink" href={`mailto:${links.email}`}>
            {t("labels.email")}
          </a>
        </div>
      </div>
    </footer>
  );
}
