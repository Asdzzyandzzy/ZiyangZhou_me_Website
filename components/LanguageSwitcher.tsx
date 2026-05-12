"use client";

import { useLanguage } from "@/components/LanguageProvider";

// 右上角语言切换按钮。按钮状态来自 LanguageProvider。
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

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
