import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finance-study.yukuan820.workers.dev"),
  title: "FinanceStudy - 金融證照學習平台",
  description: "CFA、高業、初業、FRM 金融證照講義與題庫練習",
  openGraph: {
    title: "FinanceStudy - 金融證照學習平台",
    description: "CFA、高業、初業、FRM 金融證照講義、題庫、考點與白話註釋。",
    locale: "zh_TW",
    siteName: "FinanceStudy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div>
              <p className="font-semibold text-white">FinanceStudy</p>
              <p>金融證照備考儀表板｜CFA、高業、初業、FRM</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="/security" className="hover:text-white">安全說明</a>
              <p>© 2026 FinanceStudy. Built for focused preparation.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
