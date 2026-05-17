"use client";

import { courses } from "@/data/courses";
import { examFocusCourses } from "@/data/examFocus";
import { questions } from "@/data/questions";
import { getCourseProgress } from "@/lib/progress";

export type MasteryLevel = "strong" | "ok" | "weak" | "untested";

export interface ChapterWeakness {
  courseId: string;
  courseName: string;
  chapterId: string;
  chapterTitle: string;
  total: number;
  correct: number;
  accuracy: number;
  completed: boolean;
  mastery: MasteryLevel;
  importance: "high" | "medium" | "normal";
}

export interface DailyTask {
  title: string;
  description: string;
  href: string;
  tone: "read" | "quiz" | "review";
}

export function getChapterWeaknessReport(): ChapterWeakness[] {
  return courses.flatMap((course) => {
    const progress = getCourseProgress(course.id);
    const focus = examFocusCourses.find((item) => item.courseId === course.id);
    const highChapters = new Set(
      focus?.topics
        .filter((topic) => topic.priority === "high")
        .flatMap((topic) => topic.chapterIds) || []
    );
    const mediumChapters = new Set(
      focus?.topics
        .filter((topic) => topic.priority === "medium")
        .flatMap((topic) => topic.chapterIds) || []
    );

    return course.chapters.map((chapter) => {
      const chapterQuestionIds = new Set(
        questions
          .filter((question) => question.courseId === course.id && question.chapterId === chapter.id)
          .map((question) => question.id)
      );
      const chapterResults = progress.quizResults.filter((result) =>
        chapterQuestionIds.has(result.questionId)
      );
      const correct = chapterResults.filter((result) => result.isCorrect).length;
      const total = chapterResults.length;
      const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
      const completed = progress.completedChapters.includes(chapter.id);

      let mastery: MasteryLevel = "untested";
      if (total > 0 && accuracy < 60) mastery = "weak";
      if (total > 0 && accuracy >= 60 && accuracy < 80) mastery = "ok";
      if (total > 0 && accuracy >= 80) mastery = "strong";
      if (completed && total === 0) mastery = "ok";

      return {
        courseId: course.id,
        courseName: course.name,
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        total,
        correct,
        accuracy,
        completed,
        mastery,
        importance: highChapters.has(chapter.id)
          ? "high"
          : mediumChapters.has(chapter.id)
            ? "medium"
            : "normal",
      };
    });
  });
}

export function getRecommendedTasks(limit = 4): DailyTask[] {
  const report = getChapterWeaknessReport();
  const weak = report
    .filter((item) => item.mastery === "weak")
    .sort((a, b) => sortByImportance(b.importance) - sortByImportance(a.importance));
  const untestedHigh = report.filter(
    (item) => item.mastery === "untested" && item.importance === "high"
  );
  const unread = report.filter((item) => !item.completed);

  const tasks: DailyTask[] = [];

  weak.slice(0, 2).forEach((item) => {
    tasks.push({
      title: `補強 ${item.chapterTitle}`,
      description: `${item.courseName} 正確率 ${item.accuracy}%，先重讀再做單章題。`,
      href: `/courses/${item.courseId}/${item.chapterId}`,
      tone: "review",
    });
  });

  untestedHigh.slice(0, 2).forEach((item) => {
    tasks.push({
      title: `優先讀 ${item.chapterTitle}`,
      description: `${item.courseName} 的高優先考點，還沒有做題紀錄。`,
      href: `/courses/${item.courseId}/${item.chapterId}`,
      tone: "read",
    });
  });

  unread.slice(0, 2).forEach((item) => {
    tasks.push({
      title: `完成 ${item.chapterTitle}`,
      description: `讀完後進題庫做 10 題，讓系統建立弱點分析。`,
      href: `/courses/${item.courseId}/${item.chapterId}`,
      tone: "read",
    });
  });

  tasks.push({
    title: "做一輪高頻考點題",
    description: "從官方權重與考情分析標記的章節抽題。",
    href: "/quiz?mode=focus",
    tone: "quiz",
  });

  return dedupeTasks(tasks).slice(0, limit);
}

function sortByImportance(importance: ChapterWeakness["importance"]) {
  if (importance === "high") return 3;
  if (importance === "medium") return 2;
  return 1;
}

function dedupeTasks(tasks: DailyTask[]) {
  const seen = new Set<string>();
  return tasks.filter((task) => {
    const key = task.title + task.href;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
