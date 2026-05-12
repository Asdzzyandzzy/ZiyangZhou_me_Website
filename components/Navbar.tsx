"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";

const navItems = [
  { href: "/", label: "nav.home" },
  { href: "/about", label: "nav.about" },
  { href: "/experience", label: "nav.experience" },
  { href: "/projects", label: "nav.projects" },
  { href: "/resume", label: "nav.resume" },
  { href: "/writing", label: "nav.writing" },
  { href: "/contact", label: "nav.contact" }
];

// 顶部导航栏：自动根据当前路径高亮当前页面。
export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-5 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-semibold text-white transition group-hover:bg-accent">
              ZZ
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
              Ziyang Zhou
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
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
            <div className="hidden gap-1 md:flex lg:hidden">
              {navItems.slice(1, 5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-2.5 py-2 text-xs text-muted transition hover:bg-white hover:text-ink"
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
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
