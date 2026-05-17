"use client";

import { useState } from "react";
import Link from "next/link";
import { questions } from "@/data/questions";
import { courses } from "@/data/courses";
import {
  getWrongAnswers,
  removeWrongAnswer,
  clearWrongAnswers,
  updateWrongReason,
  WrongAnswer,
  WrongReason,
} from "@/lib/bookmarks";

const reasonLabels: Record<WrongReason, string> = {
  concept: "觀念錯",
  formula: "公式錯",
  careless: "粗心",
  law: "法規記錯",
  unknown: "未分類",
};

export default function WrongAnswersPage() {
  const [wrongs, setWrongs] = useState<WrongAnswer[]>(() => getWrongAnswers());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleRemove = (questionId: string) => {
    removeWrongAnswer(questionId);
    setWrongs((prev) => prev.filter((w) => w.questionId !== questionId));
  };

  const handleReason = (questionId: string, reason: WrongReason) => {
    updateWrongReason(questionId, reason);
    setWrongs((prev) =>
      prev.map((wrong) => wrong.questionId === questionId ? { ...wrong, reason } : wrong)
    );
  };

  const handleClear = () => {
    if (confirm("確定要清空所有錯題嗎？")) {
      clearWrongAnswers();
      setWrongs([]);
    }
  };

  const wrongQuestions = wrongs
    .map((w) => {
      const q = questions.find((q) => q.id === w.questionId);
      return q ? { ...q, selectedAnswer: w.selectedAnswer, timestamp: w.timestamp } : null;
    })
    .filter(Boolean) as (typeof questions[0] & { selectedAnswer: number; timestamp: number })[];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">錯題本</h1>
        <div className="flex gap-3">
          {wrongQuestions.length > 0 && (
            <>
              <Link
                href="/quiz?mode=wrongs"
                className="text-sm text-emerald-600 border border-emerald-200 px-3 py-1.5 rounded-md hover:bg-emerald-50"
              >
                重新練習錯題
              </Link>
              <button
                onClick={handleClear}
                className="text-sm text-red-600 border border-red-200 px-3 py-1.5 rounded-md hover:bg-red-50"
              >
                清空錯題
              </button>
            </>
          )}
        </div>
      </div>

      {wrongQuestions.length === 0 ? (
        <div className="bg-white rounded-lg border p-12 text-center">
          <p className="text-4xl mb-4">&#127881;</p>
          <p className="text-lg font-medium text-slate-700">還沒有錯題！</p>
          <p className="text-sm text-slate-500 mt-2">繼續做題，答錯的題目會自動記錄在這裡。</p>
          <Link
            href="/quiz"
            className="inline-block mt-6 px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
          >
            去做題
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {(Object.keys(reasonLabels) as WrongReason[]).map((reason) => (
              <div key={reason} className="rounded-lg bg-white border border-slate-200 p-3 text-center">
                <p className="text-2xl font-bold text-slate-900">
                  {wrongs.filter((wrong) => (wrong.reason || "unknown") === reason).length}
                </p>
                <p className="text-xs text-slate-500 mt-1">{reasonLabels[reason]}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">共 {wrongQuestions.length} 題錯題</p>
          {wrongQuestions.map((q) => {
            const course = courses.find((c) => c.id === q.courseId);
            const wrong = wrongs.find((item) => item.questionId === q.id);
            const isExpanded = expandedId === q.id;

            return (
              <div key={q.id} className="bg-white rounded-lg border">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="w-full text-left p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded mb-2">
                        {course?.name}
                      </span>
                      <p className="font-medium text-slate-900">{q.question}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-rose-50 px-2 py-1 text-xs text-rose-700">
                          {reasonLabels[wrong?.reason || "unknown"]}
                        </span>
                        {(wrong?.attempts || 1) >= 2 && (
                          <span className="rounded-full bg-slate-900 px-2 py-1 text-xs text-white">
                            連錯高風險
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-slate-400 flex-shrink-0">
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t">
                    <div className="mt-4 space-y-2">
                      {q.options.map((opt, i) => (
                        <div
                          key={i}
                          className={`p-3 rounded-md text-sm ${
                            i === q.answer
                              ? "bg-emerald-50 border border-emerald-300 text-emerald-900"
                              : i === q.selectedAnswer
                                ? "bg-red-50 border border-red-300 text-red-900"
                                : "bg-slate-50 text-slate-600"
                          }`}
                        >
                          <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
                          {opt}
                          {i === q.answer && <span className="ml-2 text-emerald-600 font-medium">(正確答案)</span>}
                          {i === q.selectedAnswer && i !== q.answer && (
                            <span className="ml-2 text-red-600 font-medium">(你的答案)</span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                      <p className="text-sm font-medium text-blue-900 mb-1">解析</p>
                      <p className="text-sm text-blue-800">{q.explanation}</p>
                    </div>

                    <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3">
                      <p className="text-sm font-medium text-slate-800 mb-2">這題錯在哪裡？</p>
                      <div className="flex flex-wrap gap-2">
                        {(Object.keys(reasonLabels).filter((reason) => reason !== "unknown") as WrongReason[]).map((reason) => (
                          <button
                            key={reason}
                            type="button"
                            onClick={() => handleReason(q.id, reason)}
                            className={`rounded-md border px-3 py-1.5 text-sm ${
                              wrong?.reason === reason
                                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            {reasonLabels[reason]}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(q.id)}
                      className="mt-3 text-sm text-slate-500 hover:text-red-600"
                    >
                      已掌握，移出錯題本
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
