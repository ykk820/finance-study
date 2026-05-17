"use client";

const BOOKMARKS_KEY = "finance-study-bookmarks";
const WRONG_KEY = "finance-study-wrong-answers";

export function getBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(BOOKMARKS_KEY);
  return data ? JSON.parse(data) : [];
}

export function toggleBookmark(questionId: string): boolean {
  const bookmarks = getBookmarks();
  const index = bookmarks.indexOf(questionId);
  if (index === -1) {
    bookmarks.push(questionId);
  } else {
    bookmarks.splice(index, 1);
  }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  return index === -1;
}

export function isBookmarked(questionId: string): boolean {
  return getBookmarks().includes(questionId);
}

export interface WrongAnswer {
  questionId: string;
  selectedAnswer: number;
  timestamp: number;
}

export function getWrongAnswers(): WrongAnswer[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(WRONG_KEY);
  return data ? JSON.parse(data) : [];
}

export function addWrongAnswer(questionId: string, selectedAnswer: number) {
  const wrongs = getWrongAnswers();
  const existing = wrongs.find((w) => w.questionId === questionId);
  if (!existing) {
    wrongs.push({ questionId, selectedAnswer, timestamp: Date.now() });
    localStorage.setItem(WRONG_KEY, JSON.stringify(wrongs));
  }
}

export function removeWrongAnswer(questionId: string) {
  const wrongs = getWrongAnswers().filter((w) => w.questionId !== questionId);
  localStorage.setItem(WRONG_KEY, JSON.stringify(wrongs));
}

export function clearWrongAnswers() {
  localStorage.removeItem(WRONG_KEY);
}
