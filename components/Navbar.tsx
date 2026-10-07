"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";

const navItems = [
  { href: "/", label: "nav.home" },
  { href: "/projects", label: "nav.projects" },
  { href: "/experience", label: "nav.experience" },
  { href: "/about", label: "nav.about" },
  { href: "/resume", label: "nav.resume" },
  { href: "/contact", label: "nav.contact" }
];

// 顶部导航栏：自动根据当前路径高亮当前页面。
export function Navbar() {
  const pathname = usePathname();
  const { language, t } = useLanguage();
  const homePath = language === "zh" ? "/zh/" : "/";

  return (
    <header lang={language === "zh" ? "zh-CN" : "en"} className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-xl">
      <a href="#main-content" className="skip-link">{t("labels.skipToContent")}</a>
      <nav className="mx-auto max-w-6xl px-5 py-4">
        <div className="flex items-center justify-between">
          <Link href={homePath} className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-semibold text-white transition group-hover:bg-accent">
              ZZ
            </span>
            <span className="hidden text-sm font-semibold text-ink sm:block">
              Ziyang Zhou
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? ["/", "/zh", "/zh/"].includes(pathname) : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href === "/" ? homePath : item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-ink text-white"
                      : "text-muted hover:bg-white hover:text-ink"
                  }`}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 pb-1 lg:hidden">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? ["/", "/zh", "/zh/"].includes(pathname) : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href === "/" ? homePath : item.href}
                aria-current={isActive ? "page" : undefined}
                className={`shrink-0 rounded-full px-3 py-2 text-xs transition ${
                  isActive ? "bg-ink text-white" : "bg-white text-muted hover:text-ink"
                }`}
              >
                {t(item.label)}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
