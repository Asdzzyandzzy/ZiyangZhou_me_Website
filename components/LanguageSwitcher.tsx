"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

// 右上角语言切换按钮。按钮状态来自 LanguageProvider。
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/zh" || pathname === "/zh/";

  if (isHome) {
    return (
      <nav aria-label="Language" className="flex rounded-full border border-line bg-white p-1 text-xs font-medium">
        {(["en", "zh"] as const).map((option) => (
          <Link key={option} href={option === "zh" ? "/zh/" : "/"} hrefLang={option === "zh" ? "zh-CN" : "en"}
            lang={option === "zh" ? "zh-CN" : "en"} aria-current={language === option ? "page" : undefined}
            onClick={() => setLanguage(option)}
            className={`rounded-full px-3 py-1.5 transition ${language === option ? "bg-ink text-white" : "text-muted hover:bg-neutral-100 hover:text-ink"}`}>
            {option === "en" ? "EN" : "中文"}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <div className="flex rounded-full border border-line bg-white p-1 text-xs font-medium">
      {(["en", "zh"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          className={`rounded-full px-3 py-1.5 transition ${
            language === option
              ? "bg-ink text-white"
              : "text-muted hover:bg-neutral-100 hover:text-ink"
          }`}
          aria-pressed={language === option}
        >
          {option === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}
