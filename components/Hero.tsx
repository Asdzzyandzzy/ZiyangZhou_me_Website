"use client";

import Image from "next/image";
import Link from "next/link";
import { links } from "@/content/links";
import { profile } from "@/content/profile";
import { pickText } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

// 首页 Hero：网站第一屏，包含定位、简介和主要行动按钮。
export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-10 px-5 py-24 md:grid-cols-[1.25fr_0.75fr]">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            {t("home.eyebrow")}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold text-ink md:text-7xl">
            {t("home.headline")}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            {t("home.subhead")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/projects">
              {t("actions.viewProjects")}
            </Link>
            <a className="btn-secondary" href={links.resume} download>
              {t("actions.downloadResume")}
            </a>
          </div>
        </div>

        <div className="relative z-10 rounded-lg border border-line bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src="/images/profile.jpg"
              alt="Ziyang Zhou"
              fill
              unoptimized
              sizes="(min-width: 768px) 30vw, 90vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-5">
            <p className="text-xl font-semibold text-ink">{profile.name}</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              {pickText(profile.role, language)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
