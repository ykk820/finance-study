"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logout, useCurrentUser } from "@/lib/auth";

const primaryNavItems = [
  { href: "/courses", label: "課程" },
  { href: "/quiz", label: "題庫" },
  { href: "/wrong-answers", label: "錯題本" },
  { href: "/progress", label: "進度" },
];

const secondaryNavItems = [
  { href: "/exam-focus", label: "考點" },
  { href: "/plain-language", label: "白話" },
  { href: "/flashcards", label: "卡片" },
  { href: "/study-plan", label: "計畫" },
  { href: "/search", label: "搜尋" },
];

export default function Navbar() {
  const pathname = usePathname();
  const user = useCurrentUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const navLinkClass = (href: string, tone: "primary" | "secondary" = "primary") =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive(href)
        ? "bg-emerald-500 text-slate-950"
        : tone === "primary"
          ? "text-slate-100 hover:bg-white/10 hover:text-white"
          : "text-slate-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 text-white shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-400 text-sm font-black text-slate-950">
              F
            </span>
            <span className="text-lg font-semibold tracking-normal text-white">FinanceStudy</span>
          </Link>
          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center gap-1">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mx-1 h-6 w-px bg-white/10" />
            <div className="flex items-center gap-1">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(item.href, "secondary")}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mx-1 h-6 w-px bg-white/10" />
            {user ? (
              <div className="flex items-center gap-1">
                <span className="rounded-md px-3 py-2 text-sm font-medium text-emerald-300">
                  {user.name}
                </span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  登出
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className={navLinkClass("/auth", "secondary")}
              >
                學習者
              </Link>
            )}
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-md border border-white/10 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white lg:hidden"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "關閉" : "選單"}
          </button>
        </div>
        {menuOpen && (
          <div className="grid gap-4 border-t border-white/10 py-4 lg:hidden">
            <div>
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">主要功能</p>
              <div className="grid gap-1">
                {primaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={navLinkClass(item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">學習工具</p>
              <div className="grid grid-cols-2 gap-1">
                {secondaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={navLinkClass(item.href, "secondary")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {user ? (
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm font-medium text-emerald-300">{user.name}</span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white"
                >
                  登出
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass("/auth", "secondary")}
              >
                學習者設定
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
