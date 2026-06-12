"use client";

import Link from "next/link";
import { courses } from "@/data/courses";
import { getChapterWeaknessReport } from "@/lib/analytics";
import { getCourseProgress, getQuizStats, resetProgress } from "@/lib/progress";

export default function ProgressPage() {
  const progressData = courses.map((course) => {
    const progress = getCourseProgress(course.id);
    const stats = getQuizStats(course.id);
    return {
      courseId: course.id,
      completedChapters: progress.completedChapters.length,
      totalChapters: course.chapters.length,
      stats,
    };
  });

  const handleReset = () => {
    if (confirm("確定要重置所有學習進度嗎？此操作無法復原。")) {
      resetProgress();
      window.location.reload();
    }
  };

  const totalChapters = progressData.reduce((sum, d) => sum + d.totalChapters, 0);
  const completedChapters = progressData.reduce((sum, d) => sum + d.completedChapters, 0);
  const totalQuestions = progressData.reduce((sum, d) => sum + d.stats.total, 0);
  const totalCorrect = progressData.reduce((sum, d) => sum + d.stats.correct, 0);
  const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const weaknessReport = getChapterWeaknessReport();
  const weakChapters = weaknessReport.filter((item) => item.mastery === "weak");

  const masteryClass = {
    strong: "bg-emerald-500",
    ok: "bg-amber-400",
    weak: "bg-rose-500",
    untested: "bg-slate-300",
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-emerald-600">Progress dashboard</p>
            <h1 className="text-3xl font-bold text-slate-950">學習進度</h1>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              用章節完成度、做題數與正確率判斷下一步。弱點熱圖會把尚未掌握的章節排在複習視野裡。
            </p>
          </div>
          <button
            onClick={handleReset}
            className="rounded-md border border-red-200 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            重置進度
          </button>
        </div>
      </section>

      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <ProgressMetric tone="emerald" label="已讀章節" value={`${completedChapters}/${totalChapters}`} />
        <ProgressMetric tone="blue" label="已做題數" value={`${totalQuestions}`} />
        <ProgressMetric tone="purple" label="正確率" value={`${overallAccuracy}%`} />
      </div>

      <section className="mb-10">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-sm font-semibold text-emerald-600">Weakness Map</p>
            <h2 className="text-xl font-semibold text-slate-950">章節弱點熱圖</h2>
          </div>
          <Link
            href="/study-plan"
            className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            產生衝刺計畫 →
          </Link>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex flex-wrap gap-3 text-xs text-slate-600">
            <LegendItem color="bg-emerald-500" label="穩定" />
            <LegendItem color="bg-amber-400" label="待複習" />
            <LegendItem color="bg-rose-500" label="弱點" />
            <LegendItem color="bg-slate-300" label="未測" />
          </div>
          <div className="space-y-4">
            {courses.map((course) => {
              const courseReport = weaknessReport.filter((item) => item.courseId === course.id);
              return (
                <div key={course.id}>
                  <div className="flex items-center justify-between mb-2">
                    <Link href={`/courses/${course.id}`} className="font-medium text-slate-900 hover:text-emerald-700">
                      {course.name}
                    </Link>
                    <span className="text-xs text-slate-500">{courseReport.length} 章</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
                    {courseReport.map((item) => (
                      <Link
                        key={item.chapterId}
                        href={`/courses/${item.courseId}/${item.chapterId}`}
                        className="rounded-lg border border-slate-100 bg-slate-50 p-3 transition-colors hover:border-emerald-200 hover:bg-emerald-50/50"
                      >
                        <div className={`mb-2 h-2 rounded-full ${masteryClass[item.mastery]}`} />
                        <p className="truncate text-sm font-medium text-slate-800">{item.chapterTitle}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {item.total ? `${item.accuracy}% / ${item.total} 題` : item.completed ? "已讀未測" : "未讀未測"}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {weakChapters.length > 0 && (
        <section className="mb-10 rounded-xl border border-rose-200 bg-rose-50 p-5">
          <h2 className="mb-3 text-lg font-semibold text-rose-900">優先補強清單</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {weakChapters.slice(0, 6).map((item) => (
              <Link
                key={`${item.courseId}-${item.chapterId}`}
                href={`/courses/${item.courseId}/${item.chapterId}`}
                className="rounded-lg border border-rose-100 bg-white p-4 hover:border-rose-300"
              >
                <p className="font-medium text-slate-900">{item.chapterTitle}</p>
                <p className="mt-1 text-sm text-rose-700">{item.courseName} 正確率 {item.accuracy}%</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <h2 className="mb-4 text-xl font-semibold text-slate-950">各課程進度</h2>
      <div className="space-y-4">
        {courses.map((course) => {
          const data = progressData.find((d) => d.courseId === course.id);
          if (!data) return null;
          const chapPercent = data.totalChapters > 0
            ? Math.round((data.completedChapters / data.totalChapters) * 100)
            : 0;

          return (
            <div key={course.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <Link
                  href={`/courses/${course.id}`}
                  className="font-medium text-slate-950 hover:text-emerald-600"
                >
                  {course.name}
                </Link>
                <span className="text-sm text-slate-500">
                  {data.completedChapters}/{data.totalChapters} 章節
                </span>
              </div>
              <div className="mb-3 h-2.5 w-full rounded-full bg-slate-100">
                <div
                  className="h-2.5 rounded-full bg-emerald-500 transition-all"
                  style={{ width: `${chapPercent}%` }}
                />
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <span>做題: {data.stats.total} 題</span>
                {data.stats.total > 0 && (
                  <span>正確率: {data.stats.accuracy}%</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProgressMetric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "emerald" | "blue" | "purple";
}) {
  const toneClass = {
    emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    purple: "text-purple-600 bg-purple-50 border-purple-100",
  }[tone];

  return (
    <div className={`rounded-xl border p-6 text-center shadow-sm ${toneClass}`}>
      <p className="text-3xl font-bold">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1">
      <i className={`h-3 w-3 rounded-sm ${color}`} />
      {label}
    </span>
  );
}
