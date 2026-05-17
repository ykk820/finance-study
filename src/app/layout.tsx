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
  title: "FinanceStudy - 金融證照學習平台",
  description: "CFA、高業、初業、FRM 金融證照講義與題庫練習",
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
        <footer className="bg-slate-900 text-gray-400 py-6 text-center text-sm">
          FinanceStudy &copy; 2026 - 金融證照學習平台
        </footer>
      </body>
    </html>
  );
}
