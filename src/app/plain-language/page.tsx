"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import {
  GlossaryCategory,
  categoryLabels,
  glossaryTerms,
  searchGlossaryTerms,
} from "@/data/glossary";

const categories: (GlossaryCategory | "all")[] = [
  "all",
  "valuation",
  "risk",
  "accounting",
  "regulation",
  "derivatives",
  "economics",
  "portfolio",
];

export default function PlainLanguagePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<GlossaryCategory | "all">("all");
  const [selectedCourse, setSelectedCourse] = useState("");

  const filtered = useMemo(() => {
    const base = query.trim().length >= 2 ? searchGlossaryTerms(query) : glossaryTerms;
    return base.filter((term) => {
      const categoryMatch = category === "all" || term.category === category;
      const courseMatch = selectedCourse ? term.courseIds.includes(selectedCourse) : true;
      return categoryMatch && courseMatch;
    });
  }, [query, category, selectedCourse]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-2 text-sm font-semibold text-emerald-600">Plain Language Glossary</p>
        <h1 className="text-3xl font-bold text-slate-950">白話文金融考試詞庫</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          把難懂的金融名詞拆成正式定義、白話解釋、生活比喻、考試陷阱和小例子。
          目標不是背得更痛苦，而是讓你真的知道題目在問什麼。
        </p>
      </section>

      <section className="mb-8 grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-[1fr_220px_220px]">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="搜尋 VaR、Duration、內線交易、ROE..."
          className="rounded-md border border-slate-300 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value as GlossaryCategory | "all")}
          className="rounded-md border border-slate-300 px-4 py-3 text-slate-900"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "all" ? "全部類型" : categoryLabels[item]}
            </option>
          ))}
        </select>
        <select
          value={selectedCourse}
          onChange={(event) => setSelectedCourse(event.target.value)}
          className="rounded-md border border-slate-300 px-4 py-3 text-slate-900"
        >
          <option value="">全部課程</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </section>

      <p className="mb-4 text-sm text-slate-500">共 {filtered.length} 個白話解釋</p>

      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {filtered.map((term) => {
          const linkedCourses = courses.filter((course) => term.courseIds.includes(course.id));
          return (
            <article key={term.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                  {categoryLabels[term.category]}
                </span>
                <h2 className="text-xl font-bold text-slate-950">{term.term}</h2>
              </div>

              {term.aliases.length > 0 && (
                <p className="mb-4 text-sm text-slate-500">{term.aliases.join(" / ")}</p>
              )}

              <Block title="正式說法" tone="slate" text={term.formal} />
              <Block title="白話文" tone="emerald" text={term.plain} />
              <Block title="生活比喻" tone="blue" text={term.analogy} />
              <Block title="考試會怎麼考" tone="amber" text={term.examAngle} />
              <Block title="常見陷阱" tone="rose" text={term.commonTrap} />
              <Block title="小例子" tone="slate" text={term.miniExample} />

              <div className="mt-4 flex flex-wrap gap-2">
                {linkedCourses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}`}
                    className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-slate-500">
          找不到相關名詞。可以試試英文縮寫或中文關鍵字。
        </div>
      )}
    </div>
  );
}

function Block({
  title,
  text,
  tone,
}: {
  title: string;
  text: string;
  tone: "slate" | "emerald" | "blue" | "amber" | "rose";
}) {
  const styles = {
    slate: "bg-slate-50 text-slate-700 border-slate-100",
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-100",
    blue: "bg-blue-50 text-blue-800 border-blue-100",
    amber: "bg-amber-50 text-amber-800 border-amber-100",
    rose: "bg-rose-50 text-rose-800 border-rose-100",
  };

  return (
    <div className={`mt-3 rounded-lg border p-3 text-sm leading-6 ${styles[tone]}`}>
      <p className="mb-1 font-semibold">{title}</p>
      <p>{text}</p>
    </div>
  );
}
