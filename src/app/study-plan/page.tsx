"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { examFocusCourses } from "@/data/examFocus";
import { getChapterWeaknessReport } from "@/lib/analytics";

const PLAN_KEY = "finance-study-exam-date";

export default function StudyPlanPage() {
  const [examDate, setExamDate] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem(PLAN_KEY) || "";
  });

  const plan = useMemo(() => buildPlan(examDate), [examDate]);

  const handleDateChange = (value: string) => {
    setExamDate(value);
    localStorage.setItem(PLAN_KEY, value);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr]">
        <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl">
          <p className="mb-2 text-sm font-semibold text-emerald-300">Study Plan</p>
          <h1 className="mb-3 text-3xl font-bold">考前衝刺計畫</h1>
          <p className="mb-5 text-sm leading-6 text-slate-300">
            設定考試日期後，系統會用官方權重、考試重點與你的弱點紀錄排出 14 天任務。
          </p>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            考試日期
          </label>
          <input
            type="date"
            value={examDate}
            onChange={(event) => handleDateChange(event.target.value)}
            className="w-full rounded-md border border-white/10 bg-white px-4 py-3 text-slate-900"
          />
          <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="mb-1 text-sm font-semibold text-emerald-300">排程邏輯</p>
            <p className="text-sm leading-6 text-slate-300">
              高優先考點先排，錯題率低於 60% 的章節插入複習日，最後三天集中做錯題與公式卡。
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
            <PlanStat label="天數" value="14" />
            <PlanStat label="任務/天" value="3" />
          </div>
        </aside>

        <section>
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="mb-1 text-sm font-semibold text-emerald-600">Sprint timeline</p>
              <h2 className="text-2xl font-bold text-slate-950">14 天任務表</h2>
            </div>
            <Link href="/quiz?mode=focus" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
              直接做高頻題 →
            </Link>
          </div>
          <div className="space-y-4">
            {plan.map((day) => (
              <div key={day.day} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700">
                      {day.day}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-emerald-600">Day {day.day}</p>
                      <h3 className="text-lg font-semibold text-slate-950">{day.title}</h3>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                    {day.dateLabel}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {day.tasks.map((task) => (
                    <Link
                      key={`${day.day}-${task.href}-${task.label}`}
                      href={task.href}
                      className="rounded-lg border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-emerald-200 hover:bg-emerald-50/40"
                    >
                      <p className="font-medium text-slate-950">{task.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{task.detail}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function PlanStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  );
}

function buildPlan(examDate: string) {
  const weak = getChapterWeaknessReport().filter((item) => item.mastery === "weak");
  const focusTasks = examFocusCourses.flatMap((focus) => {
    const course = courses.find((item) => item.id === focus.courseId);
    return focus.topics
      .filter((topic) => topic.priority === "high")
      .flatMap((topic) =>
        topic.chapterIds.map((chapterId) => {
          const chapter = course?.chapters.find((item) => item.id === chapterId);
          return {
            label: topic.title,
            detail: chapter ? `${course?.name} / ${chapter.title}` : course?.name || "重點章節",
            href: chapter ? `/courses/${focus.courseId}/${chapterId}` : "/exam-focus",
          };
        })
      );
  });
  const weakTasks = weak.map((item) => ({
    label: `補強 ${item.chapterTitle}`,
    detail: `${item.courseName} 正確率 ${item.accuracy}%`,
    href: `/courses/${item.courseId}/${item.chapterId}`,
  }));
  const taskPool = [...weakTasks, ...focusTasks];

  return Array.from({ length: 14 }, (_, index) => {
    const date = getPlanDate(examDate, index);
    const isFinalStretch = index >= 11;
    const tasks = isFinalStretch
      ? [
          { label: "錯題重刷", detail: "只看答錯題與解析", href: "/wrong-answers" },
          { label: "公式法規卡", detail: "快速翻卡，補最後記憶", href: "/flashcards" },
          { label: "計時練習", detail: "高頻考點隨機 10 題", href: "/quiz?mode=focus" },
        ]
      : [
          taskPool[index % taskPool.length],
          taskPool[(index + 4) % taskPool.length],
          { label: "題庫練習", detail: "完成後更新弱點熱圖", href: "/quiz?mode=focus" },
        ];

    return {
      day: index + 1,
      dateLabel: date,
      title: isFinalStretch ? "最後衝刺：錯題與記憶" : "高權重章節 + 題庫回饋",
      tasks,
    };
  });
}

function getPlanDate(examDate: string, index: number) {
  if (!examDate) return `第 ${index + 1} 天`;
  const target = new Date(examDate);
  target.setDate(target.getDate() - (13 - index));
  return target.toLocaleDateString("zh-TW", { month: "2-digit", day: "2-digit" });
}
