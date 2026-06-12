"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { flashcards, FlashcardType } from "@/data/flashcards";

const typeLabel: Record<FlashcardType, string> = {
  formula: "公式",
  law: "法規",
  concept: "觀念",
};

const typeStyle: Record<FlashcardType, string> = {
  formula: "bg-blue-50 text-blue-700 border-blue-100",
  law: "bg-amber-50 text-amber-700 border-amber-100",
  concept: "bg-slate-50 text-slate-700 border-slate-200",
};

export default function FlashcardsPage() {
  const [courseId, setCourseId] = useState("");
  const [type, setType] = useState<FlashcardType | "">("");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const cards = useMemo(
    () =>
      flashcards.filter((card) => {
        const courseMatch = courseId ? card.courseId === courseId : true;
        const typeMatch = type ? card.type === type : true;
        return courseMatch && typeMatch;
      }),
    [courseId, type]
  );

  const activeCard = cards[index] || cards[0];
  const course = courses.find((item) => item.id === activeCard?.courseId);
  const chapter = course?.chapters.find((item) => item.id === activeCard?.chapterId);

  const nextCard = () => {
    setFlipped(false);
    setIndex((current) => (cards.length === 0 ? 0 : (current + 1) % cards.length));
  };

  const resetFilters = (nextCourse: string, nextType: FlashcardType | "") => {
    setCourseId(nextCourse);
    setType(nextType);
    setIndex(0);
    setFlipped(false);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr_220px] lg:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold text-emerald-600">Flashcards</p>
            <h1 className="text-3xl font-bold text-slate-950">公式卡與法規卡</h1>
            <p className="mt-3 leading-7 text-slate-600">用短卡片複習高頻公式、法規關鍵字與易錯陷阱。</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
            <p className="text-2xl font-bold text-slate-950">{cards.length}</p>
            <p className="mt-1 text-xs text-slate-500">目前卡片</p>
          </div>
        </div>
      </section>

      <div className="mb-8 grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-2">
        <select
          value={courseId}
          onChange={(event) => resetFilters(event.target.value, type)}
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900"
        >
          <option value="">全部課程</option>
          {courses.map((courseItem) => (
            <option key={courseItem.id} value={courseItem.id}>
              {courseItem.name}
            </option>
          ))}
        </select>
        <select
          value={type}
          onChange={(event) => resetFilters(courseId, event.target.value as FlashcardType | "")}
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900"
        >
          <option value="">全部類型</option>
          <option value="formula">公式</option>
          <option value="law">法規</option>
          <option value="concept">觀念</option>
        </select>
      </div>

      {cards.length === 0 || !activeCard ? (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-slate-600">目前沒有符合條件的卡片。</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          <button
            type="button"
            onClick={() => setFlipped((value) => !value)}
            className="panel-shadow min-h-[360px] rounded-2xl border border-slate-200 bg-white p-8 text-left transition-colors hover:border-emerald-300"
          >
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className={`rounded-full border px-3 py-1 text-sm font-medium ${typeStyle[activeCard.type]}`}>
                {typeLabel[activeCard.type]}
              </span>
              <span className="text-sm text-slate-400">
                {index + 1} / {cards.length}
              </span>
            </div>
            <p className="mb-3 text-sm text-slate-500">
              {course?.name} / {chapter?.title}
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-950">
              {flipped ? activeCard.back : activeCard.front}
            </h2>
            {flipped ? (
              <div className="rounded-lg border border-rose-100 bg-rose-50 p-4">
                <p className="mb-1 text-sm font-semibold text-rose-700">易錯陷阱</p>
                <p className="text-sm text-rose-700">{activeCard.trap}</p>
              </div>
            ) : (
              <p className="rounded-lg border border-slate-100 bg-slate-50 p-4 text-sm text-slate-500">
                點卡片看答案與陷阱。
              </p>
            )}
          </button>

          <aside className="space-y-3">
            <button
              type="button"
              onClick={nextCard}
              className="w-full rounded-md bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              下一張
            </button>
            {chapter && (
              <Link
                href={`/courses/${activeCard.courseId}/${activeCard.chapterId}`}
                className="block w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-center font-medium text-slate-700 hover:bg-slate-50"
              >
                回講義複習
              </Link>
            )}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="mb-2 font-semibold text-slate-950">建議用法</p>
              <p className="text-sm leading-6 text-slate-600">
                先看正面，心中回答後再翻面。答不出來就回講義，把陷阱加入畫重點。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-950 p-4 text-white">
              <p className="text-sm font-semibold text-emerald-300">目前狀態</p>
              <p className="mt-2 text-sm text-slate-300">
                第 {index + 1} 張，{flipped ? "正在看答案與陷阱" : "正在回想正面題目"}。
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
