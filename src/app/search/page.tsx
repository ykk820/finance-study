"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { questions } from "@/data/questions";

interface SearchResult {
  type: "chapter" | "question";
  courseId: string;
  courseName: string;
  title: string;
  preview: string;
  href: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.trim().length < 2) {
      setResults([]);
      setSearched(false);
      return;
    }

    setSearched(true);
    const term = q.toLowerCase();
    const found: SearchResult[] = [];

    for (const course of courses) {
      for (const chapter of course.chapters) {
        if (
          chapter.title.toLowerCase().includes(term) ||
          chapter.content.toLowerCase().includes(term)
        ) {
          const contentIndex = chapter.content.toLowerCase().indexOf(term);
          const start = Math.max(0, contentIndex - 30);
          const end = Math.min(chapter.content.length, contentIndex + 50);
          const preview =
            contentIndex >= 0
              ? "..." + chapter.content.slice(start, end).replace(/[#*`\n]/g, " ").trim() + "..."
              : chapter.title;

          found.push({
            type: "chapter",
            courseId: course.id,
            courseName: course.name,
            title: chapter.title,
            preview,
            href: `/courses/${course.id}/${chapter.id}`,
          });
        }
      }
    }

    for (const q of questions) {
      if (
        q.question.toLowerCase().includes(term) ||
        q.explanation.toLowerCase().includes(term) ||
        q.options.some((o) => o.toLowerCase().includes(term))
      ) {
        const course = courses.find((c) => c.id === q.courseId);
        found.push({
          type: "question",
          courseId: q.courseId,
          courseName: course?.name || "",
          title: q.question,
          preview: q.explanation.slice(0, 80) + "...",
          href: `/quiz?course=${q.courseId}`,
        });
      }
    }

    setResults(found);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">搜尋</h1>

      <div className="relative mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="搜尋講義內容、題目、關鍵字..."
          className="w-full px-5 py-4 text-lg border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          autoFocus
        />
        {query && (
          <button
            onClick={() => handleSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            &#10005;
          </button>
        )}
      </div>

      {searched && (
        <p className="text-sm text-slate-500 mb-4">
          找到 {results.length} 個結果
        </p>
      )}

      <div className="space-y-3">
        {results.map((result, index) => (
          <Link
            key={index}
            href={result.href}
            className="block bg-white rounded-lg border p-4 hover:border-emerald-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  result.type === "chapter"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {result.type === "chapter" ? "講義" : "題目"}
              </span>
              <span className="text-xs text-slate-400">{result.courseName}</span>
            </div>
            <p className="font-medium text-slate-900 text-sm">{result.title}</p>
            <p className="text-xs text-slate-500 mt-1 line-clamp-1">{result.preview}</p>
          </Link>
        ))}
      </div>

      {searched && results.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500">找不到相關內容</p>
          <p className="text-sm text-slate-400 mt-1">試試其他關鍵字</p>
        </div>
      )}
    </div>
  );
}
