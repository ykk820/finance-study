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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">學習進度</h1>
        <button
          onClick={handleReset}
          className="text-sm text-red-600 hover:text-red-700 border border-red-200 px-3 py-1 rounded-md hover:bg-red-50"
        >
          重置進度
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-white rounded-lg border p-6 text-center">
          <p className="text-3xl font-bold text-emerald-600">
            {completedChapters}/{totalChapters}
          </p>
          <p className="text-sm text-slate-500 mt-1">已讀章節</p>
        </div>
        <div className="bg-white rounded-lg border p-6 text-center">
          <p className="text-3xl font-bold text-blue-600">{totalQuestions}</p>
          <p className="text-sm text-slate-500 mt-1">已做題數</p>
        </div>
        <div className="bg-white rounded-lg border p-6 text-center">
          <p className="text-3xl font-bold text-purple-600">{overallAccuracy}%</p>
          <p className="text-sm text-slate-500 mt-1">正確率</p>
        </div>
      </div>

      <section className="mb-10">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <p className="text-sm font-semibold text-emerald-600 mb-1">Weakness Map</p>
            <h2 className="text-xl font-semibold text-slate-900">章節弱點熱圖</h2>
          </div>
          <Link
            href="/study-plan"
            className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            產生衝刺計畫 →
          </Link>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex flex-wrap gap-3 mb-5 text-xs text-slate-600">
            <span className="flex items-center gap-1"><i className="h-3 w-3 rounded-sm bg-emerald-500" />穩定</span>
            <span className="flex items-center gap-1"><i className="h-3 w-3 rounded-sm bg-amber-400" />待複習</span>
            <span className="flex items-center gap-1"><i className="h-3 w-3 rounded-sm bg-rose-500" />弱點</span>
            <span className="flex items-center gap-1"><i className="h-3 w-3 rounded-sm bg-slate-300" />未測</span>
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
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                    {courseReport.map((item) => (
                      <Link
                        key={item.chapterId}
                        href={`/courses/${item.courseId}/${item.chapterId}`}
                        className="rounded-lg border border-slate-100 bg-slate-50 p-3 hover:border-emerald-200"
                      >
                        <div className={`h-2 rounded-full mb-2 ${masteryClass[item.mastery]}`} />
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
          <h2 className="text-lg font-semibold text-rose-900 mb-3">優先補強清單</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {weakChapters.slice(0, 6).map((item) => (
              <Link
                key={`${item.courseId}-${item.chapterId}`}
                href={`/courses/${item.courseId}/${item.chapterId}`}
                className="rounded-lg bg-white border border-rose-100 p-4 hover:border-rose-300"
              >
                <p className="font-medium text-slate-900">{item.chapterTitle}</p>
                <p className="text-sm text-rose-700 mt-1">{item.courseName} 正確率 {item.accuracy}%</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <h2 className="text-xl font-semibold text-slate-900 mb-4">各課程進度</h2>
      <div className="space-y-4">
        {courses.map((course) => {
          const data = progressData.find((d) => d.courseId === course.id);
          if (!data) return null;
          const chapPercent = data.totalChapters > 0
            ? Math.round((data.completedChapters / data.totalChapters) * 100)
            : 0;

          return (
            <div key={course.id} className="bg-white rounded-lg border p-5">
              <div className="flex items-center justify-between mb-3">
                <Link
                  href={`/courses/${course.id}`}
                  className="font-medium text-slate-900 hover:text-emerald-600"
                >
                  {course.name}
                </Link>
                <span className="text-sm text-slate-500">
                  {data.completedChapters}/{data.totalChapters} 章節
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 mb-3">
                <div
                  className="bg-emerald-500 h-2.5 rounded-full transition-all"
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
