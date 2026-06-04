import { Metadata } from "next";
import { Suspense } from "react";
import QuizRunner from "@/components/QuizRunner";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "題庫練習 | FinanceStudy",
  description: "依課程、高頻考點、收藏題與錯題紀錄進行金融證照題庫練習。",
};

export default function QuizPage() {
  const courseOptions = courses.map((course) => ({
    id: course.id,
    name: course.name,
  }));

  return (
    <Suspense fallback={<div className="mx-auto max-w-2xl px-4 py-12 text-slate-500">載入中...</div>}>
      <QuizRunner courses={courseOptions} />
    </Suspense>
  );
}
