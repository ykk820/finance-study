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
      weaknessReport: getChapterWeaknessReport(),
      tasks: getRecommendedTasks(4),
    };
  }, []);
  const completionRate =
    summary.totalChapters > 0 ? Math.round((summary.completedChapters / summary.totalChapters) * 100) : 0;

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="premium-card rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-sm font-semibold text-emerald-600">今日讀書儀表板</p>
              <h2 className="text-2xl font-bold text-slate-950">先做最有分數效益的事</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                任務會依進度、錯題與高頻考點排序，讓每次學習都能接到下一個動作。
              </p>
            </div>
            <Link
              href="/study-plan"
              className="shrink-0 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              建立計畫
            </Link>
          </div>

          <div className="mb-5 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">章節完成度</span>
              <span className="font-semibold text-slate-950">{completionRate}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: `${completionRate}%` }} />
            </div>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-3">
            <Metric label="已讀章節" value={`${summary.completedChapters}/${summary.totalChapters}`} />
            <Metric label="做題數" value={String(summary.totalQuestions)} />
            <Metric label="弱點章節" value={String(summary.weakCount)} />
          </div>
          <div className="space-y-3">
            {summary.tasks.map((task) => (
              <Link
                key={`${task.title}-${task.href}`}
                href={task.href}
                className="flex items-start justify-between gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-colors hover:border-emerald-200 hover:bg-emerald-50/40"
              >
                <div>
                  <p className="font-medium text-slate-950">{task.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{task.description}</p>
                </div>
                <span className={`shrink-0 rounded-full border px-2 py-1 text-xs font-medium ${toneStyle[task.tone]}`}>
                  {task.tone === "read" ? "閱讀" : task.tone === "quiz" ? "做題" : "複習"}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="command-surface rounded-2xl border border-white/10 p-6 text-white">
          <p className="mb-2 text-sm font-semibold text-emerald-300">弱點監控</p>
          <h2 className="mb-4 text-2xl font-bold">備考節奏已接上</h2>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-100">章節訊號</p>
              <span className="text-xs text-slate-400">{summary.weaknessReport.length} chapters</span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {summary.weaknessReport.slice(0, 18).map((item) => (
                <span
                  key={`${item.courseId}-${item.chapterId}`}
                  className={`h-8 rounded-lg ${
                    item.mastery === "strong"
                      ? "bg-emerald-400"
                      : item.mastery === "ok"
                        ? "bg-amber-300"
                        : item.mastery === "weak"
                          ? "bg-rose-400"
                          : "bg-slate-600"
                  }`}
                  title={item.chapterTitle}
                />
              ))}
            </div>
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-200">
            <p>弱點熱圖會用你的題庫紀錄更新。</p>
            <p>考前衝刺表會依考試日期與高頻考點排任務。</p>
            <p>公式卡與法規卡適合通勤、睡前或考前最後一輪。</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link href="/progress" className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-center text-sm hover:bg-white/15">
              弱點熱圖
            </Link>
            <Link href="/flashcards" className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-center text-sm hover:bg-white/15">
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
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-2xl font-bold text-slate-950">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
