"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logout, useCurrentUser } from "@/lib/auth";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/courses", label: "課程" },
  { href: "/exam-focus", label: "考點" },
  { href: "/plain-language", label: "白話" },
  { href: "/quiz", label: "題庫" },
  { href: "/wrong-answers", label: "錯題本" },
  { href: "/flashcards", label: "卡片" },
  { href: "/study-plan", label: "計畫" },
  { href: "/search", label: "搜尋" },
  { href: "/progress", label: "進度" },
];

export default function Navbar() {
  const pathname = usePathname();
  const user = useCurrentUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  const navContent = (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname === item.href
              ? "bg-emerald-600 text-white"
              : "text-gray-300 hover:bg-slate-700 hover:text-white"
          }`}
        >
          {item.label}
        </Link>
      ))}
      {user ? (
        <>
          <span className="px-3 py-2 text-sm font-medium text-emerald-300">
            {user.name}
          </span>
          <button
            type="button"
            onClick={handleLogout}
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 transition-colors hover:bg-slate-700 hover:text-white"
          >
            登出
          </button>
        </>
      ) : (
        <Link
          href="/auth"
          onClick={() => setMenuOpen(false)}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname === "/auth"
              ? "bg-emerald-600 text-white"
              : "text-gray-300 hover:bg-slate-700 hover:text-white"
          }`}
        >
          學習者
        </Link>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-40 bg-slate-900/95 text-white shadow-lg backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-emerald-400">
            FinanceStudy
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {navContent}
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
            aria-expanded={menuOpen}
          >
            選單
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden grid gap-1 border-t border-slate-700 py-3">
            {navContent}
          </div>
        )}
      </div>
    </nav>
  );
}
