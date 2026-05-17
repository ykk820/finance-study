"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Course } from "@/types";
import { getChapterWeaknessReport } from "@/lib/analytics";

const masteryStyle = {
  strong: "bg-emerald-50 text-emerald-700 border-emerald-200",
  ok: "bg-amber-50 text-amber-700 border-amber-200",
  weak: "bg-rose-50 text-rose-700 border-rose-200",
  untested: "bg-slate-50 text-slate-600 border-slate-200",
};

const masteryLabel = {
  strong: "穩",
  ok: "待複習",
  weak: "弱點",
  untested: "未測",
};

export default function CourseRoadmap({ course }: { course: Course }) {
  const report = useMemo(
    () => getChapterWeaknessReport().filter((item) => item.courseId === course.id),
    [course.id]
  );

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">備考路線圖</h2>
      <div className="space-y-3">
        {course.chapters.map((chapter, index) => {
          const status = report.find((item) => item.chapterId === chapter.id);
          return (
            <Link
              key={chapter.id}
              href={`/courses/${course.id}/${chapter.id}`}
              className="flex flex-col gap-3 bg-white rounded-lg border border-slate-200 p-4 hover:border-emerald-300 hover:shadow-sm transition-all sm:flex-row sm:items-center"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-medium text-slate-600">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{chapter.title}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {status?.total ? `已做 ${status.total} 題，正確率 ${status.accuracy}%` : "尚未建立做題紀錄"}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {status?.importance === "high" && (
                  <span className="rounded-full bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700">
                    高優先考點
                  </span>
                )}
                {status && (
                  <span className={`rounded-full border px-2 py-1 text-xs font-medium ${masteryStyle[status.mastery]}`}>
                    {masteryLabel[status.mastery]}
                  </span>
                )}
                <span className="text-emerald-600 text-sm">閱讀 →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
