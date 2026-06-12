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
  const highPriorityCount = report.filter((item) => item.importance === "high").length;

  return (
    <section className="mb-10">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-600">Study roadmap</p>
          <h2 className="text-xl font-semibold text-slate-950">備考路線圖</h2>
        </div>
        <p className="text-sm text-slate-500">
          {course.chapters.length} 章節・{highPriorityCount} 個高優先考點
        </p>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {course.chapters.map((chapter, index) => {
          const status = report.find((item) => item.chapterId === chapter.id);
          return (
            <Link
              key={chapter.id}
              href={`/courses/${course.id}/${chapter.id}`}
              className="group flex flex-col gap-3 border-b border-slate-100 p-4 transition-colors last:border-b-0 hover:bg-emerald-50/40 sm:flex-row sm:items-center"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-700">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-950">{chapter.title}</p>
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
                <span className="text-sm font-medium text-emerald-700">閱讀 →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
