import { Metadata } from "next";
import QuizRunner from "@/components/QuizRunner";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "題庫練習 | FinanceStudy",
  description: "依課程、高頻考點、收藏題與錯題紀錄進行金融證照題庫練習。",
};

type QuizPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function QuizPage({ searchParams }: QuizPageProps) {
  const params = await searchParams;
  const courseOptions = courses.map((course) => ({
    id: course.id,
    name: course.name,
  }));

  return (
    <QuizRunner
      courses={courseOptions}
      initialCourse={firstParam(params?.course)}
      initialMode={firstParam(params?.mode)}
    />
  );
}

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] || "" : value || "";
}
