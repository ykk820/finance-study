"use client";

import { QuizResult, UserProgress } from "@/types";

const STORAGE_KEY = "finance-study-progress";

export function getProgress(): Record<string, UserProgress> {
  if (typeof window === "undefined") return {};
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

export function getCourseProgress(courseId: string): UserProgress {
  const all = getProgress();
  return all[courseId] || { odId: courseId, completedChapters: [], quizResults: [] };
}

export function markChapterComplete(courseId: string, chapterId: string) {
  const all = getProgress();
  const course = all[courseId] || { odId: courseId, completedChapters: [], quizResults: [] };
  if (!course.completedChapters.includes(chapterId)) {
    course.completedChapters.push(chapterId);
  }
  all[courseId] = course;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function saveQuizResult(courseId: string, result: QuizResult) {
  const all = getProgress();
  const course = all[courseId] || { odId: courseId, completedChapters: [], quizResults: [] };
  course.quizResults.push(result);
  all[courseId] = course;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function getQuizStats(courseId: string) {
  const progress = getCourseProgress(courseId);
  const results = progress.quizResults;
  if (results.length === 0) return { total: 0, correct: 0, accuracy: 0 };
  const correct = results.filter((r) => r.isCorrect).length;
  return {
    total: results.length,
    correct,
    accuracy: Math.round((correct / results.length) * 100),
  };
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
