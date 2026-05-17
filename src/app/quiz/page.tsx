"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { courses } from "@/data/courses";
import { questions } from "@/data/questions";
import { saveQuizResult } from "@/lib/progress";
import { toggleBookmark, isBookmarked, addWrongAnswer } from "@/lib/bookmarks";
import { Question } from "@/types";

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="max-w-2xl mx-auto px-4 py-12 text-slate-500">載入中...</div>}>
      <QuizContent />
    </Suspense>
  );
}

function QuizContent() {
  const searchParams = useSearchParams();
  const courseFilter = searchParams.get("course");
  const mode = searchParams.get("mode");

  const [selectedCourse, setSelectedCourse] = useState(courseFilter || "");
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (courseFilter) setSelectedCourse(courseFilter);
  }, [courseFilter]);

  useEffect(() => {
    if (mode === "bookmarks") {
      startBookmarkQuiz();
    }
  }, [mode]);

  const startBookmarkQuiz = () => {
    const { getBookmarks } = require("@/lib/bookmarks");
    const ids = getBookmarks();
    const pool = questions.filter((q) => ids.includes(q.id));
    if (pool.length === 0) return;
    const shuffled = pool.sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, total: 0 });
    setQuizStarted(true);
    setQuizFinished(false);
  };

  const startQuiz = () => {
    let pool = selectedCourse
      ? questions.filter((q) => q.courseId === selectedCourse)
      : [...questions];

    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 10);
    setQuizQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, total: 0 });
    setQuizStarted(true);
    setQuizFinished(false);
  };

  const handleAnswer = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);

    const question = quizQuestions[currentIndex];
    const isCorrect = index === question.answer;

    if (!isCorrect) {
      addWrongAnswer(question.id, index);
    }

    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    saveQuizResult(question.courseId, {
      questionId: question.id,
      selectedAnswer: index,
      isCorrect,
      timestamp: Date.now(),
    });

    setBookmarked(isBookmarked(question.id));
  };

  const handleBookmark = () => {
    const question = quizQuestions[currentIndex];
    const result = toggleBookmark(question.id);
    setBookmarked(result);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= quizQuestions.length) {
      setQuizFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setBookmarked(false);
    }
  };

  if (!quizStarted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">題庫練習</h1>

        <div className="bg-white rounded-lg border p-6 mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            選擇課程（不選則隨機出題）
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-md text-slate-900 mb-6"
          >
            <option value="">全部課程</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <p className="text-sm text-slate-500 mb-4">
            每次測驗隨機抽取 10 題，作答後立即顯示解析。
          </p>

          <button
            onClick={startQuiz}
            className="w-full py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors"
          >
            開始測驗
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/quiz?mode=bookmarks"
            className="bg-white rounded-lg border p-4 text-center hover:border-yellow-400 transition-colors"
          >
            <p className="text-2xl mb-1">&#9733;</p>
            <p className="text-sm font-medium text-slate-700">收藏題目練習</p>
          </Link>
          <Link
            href="/wrong-answers"
            className="bg-white rounded-lg border p-4 text-center hover:border-red-400 transition-colors"
          >
            <p className="text-2xl mb-1">&#10060;</p>
            <p className="text-sm font-medium text-slate-700">錯題本</p>
          </Link>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    const percentage = Math.round((score.correct / score.total) * 100);
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">測驗結束</h1>
        <div className="bg-white rounded-lg border p-8">
          <p className="text-6xl font-bold text-emerald-600 mb-2">
            {percentage}%
          </p>
          <p className="text-slate-600 mb-6">
            答對 {score.correct} / {score.total} 題
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={startQuiz}
              className="px-6 py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700"
            >
              再測一次
            </button>
            <Link
              href="/wrong-answers"
              className="px-6 py-3 bg-red-50 text-red-700 border border-red-200 rounded-md font-medium hover:bg-red-100"
            >
              查看錯題本
            </Link>
            <Link
              href="/progress"
              className="px-6 py-3 bg-slate-200 text-slate-800 rounded-md font-medium hover:bg-slate-300"
            >
              查看進度
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-slate-500">
          第 {currentIndex + 1} / {quizQuestions.length} 題
        </span>
        <span className="text-sm text-emerald-600 font-medium">
          答對: {score.correct}
        </span>
      </div>

      <div className="w-full bg-slate-200 rounded-full h-2 mb-8">
        <div
          className="bg-emerald-500 h-2 rounded-full transition-all"
          style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <div className="bg-white rounded-lg border p-6">
        <div className="flex items-start justify-between gap-4 mb-6">
          <h2 className="text-lg font-medium text-slate-900">
            {question.question}
          </h2>
          {showExplanation && (
            <button
              onClick={handleBookmark}
              className={`flex-shrink-0 text-2xl transition-colors ${
                bookmarked ? "text-yellow-500" : "text-slate-300 hover:text-yellow-400"
              }`}
              title={bookmarked ? "取消收藏" : "收藏此題"}
            >
              {bookmarked ? "★" : "☆"}
            </button>
          )}
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let className =
              "w-full text-left p-4 rounded-md border transition-all ";
            if (showExplanation) {
              if (index === question.answer) {
                className += "border-emerald-500 bg-emerald-50 text-emerald-900";
              } else if (index === selectedAnswer) {
                className += "border-red-500 bg-red-50 text-red-900";
              } else {
                className += "border-slate-200 text-slate-500";
              }
            } else {
              className +=
                selectedAnswer === index
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-slate-200 hover:border-slate-300 hover:bg-slate-50";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={className}
                disabled={showExplanation}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm font-medium text-blue-900 mb-1">解析</p>
            <p className="text-sm text-blue-800">{question.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <button
            onClick={nextQuestion}
            className="mt-6 w-full py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700"
          >
            {currentIndex + 1 >= quizQuestions.length ? "查看結果" : "下一題"}
          </button>
        )}
      </div>
    </div>
  );
}
