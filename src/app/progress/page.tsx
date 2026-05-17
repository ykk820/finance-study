"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { getCourseProgress, getQuizStats, resetProgress } from "@/lib/progress";

export default function ProgressPage() {
  const [progressData, setProgressData] = useState<
    { courseId: string; completedChapters: number; totalChapters: number; stats: { total: number; correct: number; accuracy: number } }[]
  >([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const data = courses.map((course) => {
      const progress = getCourseProgress(course.id);
      const stats = getQuizStats(course.id);
      return {
        courseId: course.id,
        completedChapters: progress.completedChapters.length,
        totalChapters: course.chapters.length,
        stats,
      };
    });
    setProgressData(data);
    setLoaded(true);
  }, []);

  const handleReset = () => {
    if (confirm("確定要重置所有學習進度嗎？此操作無法復原。")) {
      resetProgress();
      window.location.reload();
    }
  };

  if (!loaded) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-slate-500">載入中...</p>
      </div>
    );
  }

  const totalChapters = progressData.reduce((sum, d) => sum + d.totalChapters, 0);
  const completedChapters = progressData.reduce((sum, d) => sum + d.completedChapters, 0);
  const totalQuestions = progressData.reduce((sum, d) => sum + d.stats.total, 0);
  const totalCorrect = progressData.reduce((sum, d) => sum + d.stats.correct, 0);
  const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

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
