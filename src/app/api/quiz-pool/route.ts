import { NextRequest, NextResponse } from "next/server";
import { examFocusCourses } from "@/data/examFocus";
import { questions } from "@/data/questions";
import { Question } from "@/types";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const courseId = searchParams.get("course") || "";
  const mode = searchParams.get("mode") || "";
  const ids = searchParams.get("ids")?.split(",").filter(Boolean) || [];

  let pool: Question[];

  if (mode === "bookmarks" || mode === "wrongs") {
    const idSet = new Set(ids);
    pool = questions.filter((question) => idSet.has(question.id));
  } else if (mode === "focus" || mode === "timed") {
    const highChapterIds = new Set(
      examFocusCourses.flatMap((course) =>
        course.topics
          .filter((topic) => topic.priority === "high")
          .flatMap((topic) => topic.chapterIds)
      )
    );
    pool = questions.filter((question) => question.chapterId && highChapterIds.has(question.chapterId));
  } else {
    pool = courseId ? questions.filter((question) => question.courseId === courseId) : questions;
  }

  return NextResponse.json({
    questions: shuffle(pool).slice(0, 10),
  });
}

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}
