"use client";

import Link from "next/link";
import { useMemo } from "react";
import { courses } from "@/data/courses";
import { getRecommendedTasks, getChapterWeaknessReport } from "@/lib/analytics";
import { getCourseProgress, getQuizStats } from "@/lib/progress";

const toneStyle = {
  read: "bg-blue-50 text-blue-700 border-blue-100",
  quiz: "bg-emerald-50 text-emerald-700 border-emerald-100",
  review: "bg-rose-50 text-rose-700 border-rose-100",
};

export default function DashboardSummary() {
  const summary = useMemo(() => {
    const totalChapters = courses.reduce((sum, course) => sum + course.chapters.length, 0);
    const completedChapters = courses.reduce(
      (sum, course) => sum + getCourseProgress(course.id).completedChapters.length,
      0
    );
    const totalQuestions = courses.reduce((sum, course) => sum + getQuizStats(course.id).total, 0);
    const weakCount = getChapterWeaknessReport().filter((item) => item.mastery === "weak").length;
    return {
      completedChapters,
      totalChapters,
      totalQuestions,
      weakCount,
      tasks: getRecommendedTasks(4),
    };
  }, []);

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className="text-sm font-semibold text-emerald-600 mb-1">今日讀書儀表板</p>
              <h2 className="text-2xl font-bold text-slate-900">先做最有分數效益的事</h2>
            </div>
            <Link
              href="/study-plan"
              className="px-3 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-700"
            >
              建立計畫
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            <Metric label="已讀章節" value={`${summary.completedChapters}/${summary.totalChapters}`} />
            <Metric label="做題數" value={String(summary.totalQuestions)} />
            <Metric label="弱點章節" value={String(summary.weakCount)} />
          </div>
          <div className="space-y-3">
            {summary.tasks.map((task) => (
              <Link
                key={`${task.title}-${task.href}`}
                href={task.href}
                className="flex items-start justify-between gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4 hover:border-emerald-200 hover:bg-emerald-50/40 transition-colors"
              >
                <div>
                  <p className="font-medium text-slate-900">{task.title}</p>
                  <p className="text-sm text-slate-600 mt-1">{task.description}</p>
                </div>
                <span className={`shrink-0 rounded-full border px-2 py-1 text-xs font-medium ${toneStyle[task.tone]}`}>
                  {task.tone === "read" ? "閱讀" : task.tone === "quiz" ? "做題" : "複習"}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-6">
          <p className="text-sm font-semibold text-emerald-300 mb-2">下一步功能</p>
          <h2 className="text-2xl font-bold mb-4">備考節奏已接上</h2>
          <div className="space-y-3 text-sm text-slate-200">
            <p>弱點熱圖會用你的題庫紀錄更新。</p>
            <p>考前衝刺表會依考試日期與高頻考點排任務。</p>
            <p>公式卡與法規卡適合通勤、睡前或考前最後一輪。</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link href="/progress" className="rounded-md bg-white/10 px-3 py-3 text-center text-sm hover:bg-white/15">
              弱點熱圖
            </Link>
            <Link href="/flashcards" className="rounded-md bg-white/10 px-3 py-3 text-center text-sm hover:bg-white/15">
              公式法規卡
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 border border-slate-100 p-4">
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500 mt-1">{label}</p>
    </div>
  );
}
