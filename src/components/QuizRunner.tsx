"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  addWrongAnswer,
  getBookmarks,
  getWrongAnswers,
  isBookmarked,
  toggleBookmark,
} from "@/lib/bookmarks";
import { saveQuizResult } from "@/lib/progress";
import { Question } from "@/types";

type CourseOption = {
  id: string;
  name: string;
};

type QuizRunnerProps = {
  courses: CourseOption[];
  initialCourse?: string;
  initialMode?: string;
};

export default function QuizRunner({ courses, initialCourse = "", initialMode = "" }: QuizRunnerProps) {
  const [selectedCourse, setSelectedCourse] = useState(initialCourse);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [timedMode, setTimedMode] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);
  const [emptyMessage, setEmptyMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const resetQuiz = (pool: Question[], emptyReason = "這個篩選目前沒有可練習的題目。") => {
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);

    if (shuffled.length === 0) {
      setQuizQuestions([]);
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore({ correct: 0, total: 0 });
      setQuizStarted(false);
      setQuizFinished(false);
      setBookmarked(false);
      setSecondsLeft(15 * 60);
      setEmptyMessage(emptyReason);
      return;
    }

    setQuizQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, total: 0 });
    setQuizStarted(true);
    setQuizFinished(false);
    setBookmarked(false);
    setSecondsLeft(15 * 60);
    setEmptyMessage("");
  };

  const loadQuiz = async (
    params: Record<string, string>,
    emptyReason: string,
    shouldUseTimer = false
  ) => {
    setLoading(true);
    setTimedMode(shouldUseTimer);
    try {
      const response = await fetch(`/api/quiz-pool?${new URLSearchParams(params).toString()}`);
      if (!response.ok) {
        throw new Error("Failed to load quiz pool");
      }
      const data = (await response.json()) as { questions: Question[] };
      resetQuiz(data.questions, emptyReason);
    } catch {
      setQuizStarted(false);
      setQuizFinished(false);
      setEmptyMessage("題目載入失敗，請稍後再試一次。");
    } finally {
      setLoading(false);
    }
  };

  const startBookmarkQuiz = () => {
    const ids = getBookmarks();
    void loadQuiz(
      { mode: "bookmarks", ids: ids.join(",") },
      "你還沒有收藏題目。做題後按星號收藏，之後就能集中複習。"
    );
  };

  const startWrongQuiz = () => {
    const ids = getWrongAnswers().map((item) => item.questionId);
    void loadQuiz(
      { mode: "wrongs", ids: ids.join(",") },
      "目前沒有錯題紀錄。先做一輪測驗，答錯的題目會自動進錯題本。"
    );
  };

  const startFocusQuiz = () => {
    void loadQuiz({ mode: "focus" }, "目前沒有高頻考點題可練習。");
  };

  const startTimedQuiz = () => {
    void loadQuiz({ mode: "timed" }, "目前沒有可用於計時模式的高頻考點題。", true);
  };

  const startQuiz = () => {
    void loadQuiz(selectedCourse ? { course: selectedCourse } : {}, "這個課程目前沒有題目。");
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (initialMode === "bookmarks") startBookmarkQuiz();
      if (initialMode === "wrongs") startWrongQuiz();
      if (initialMode === "focus") startFocusQuiz();
      if (initialMode === "timed") startTimedQuiz();
    }, 0);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialMode]);

  useEffect(() => {
    if (!timedMode || !quizStarted || quizFinished) return;
    const timer = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          setQuizFinished(true);
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [timedMode, quizStarted, quizFinished]);

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
      // eslint-disable-next-line react-hooks/purity
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
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">題庫練習</h1>

        <div className="mb-4 rounded-lg border bg-white p-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            選擇課程（不選則隨機出題）
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="mb-6 w-full rounded-md border border-slate-300 p-3 text-slate-900"
          >
            <option value="">全部課程</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>

          <p className="mb-4 text-sm text-slate-500">
            每次測驗隨機抽取 10 題，作答後立即顯示解析。
          </p>

          {emptyMessage && (
            <div className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-6 text-amber-800">
              {emptyMessage}
            </div>
          )}

          <button
            onClick={startQuiz}
            disabled={loading}
            className="w-full rounded-md bg-emerald-600 py-3 font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? "載入題目中..." : "開始測驗"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={startFocusQuiz}
            disabled={loading}
            className="rounded-lg border bg-white p-4 text-center transition-colors hover:border-blue-400"
          >
            <p className="mb-1 text-2xl">高</p>
            <p className="text-sm font-medium text-slate-700">高頻考點練習</p>
          </button>
          <button
            type="button"
            onClick={startBookmarkQuiz}
            disabled={loading}
            className="rounded-lg border bg-white p-4 text-center transition-colors hover:border-yellow-400"
          >
            <p className="mb-1 text-2xl">&#9733;</p>
            <p className="text-sm font-medium text-slate-700">收藏題目練習</p>
          </button>
          <button
            type="button"
            onClick={startWrongQuiz}
            disabled={loading}
            className="rounded-lg border bg-white p-4 text-center transition-colors hover:border-red-400"
          >
            <p className="mb-1 text-2xl">錯</p>
            <p className="text-sm font-medium text-slate-700">錯題重新挑戰</p>
          </button>
          <button
            type="button"
            onClick={startTimedQuiz}
            disabled={loading}
            className="rounded-lg border bg-white p-4 text-center transition-colors hover:border-slate-700"
          >
            <p className="mb-1 text-2xl">時</p>
            <p className="text-sm font-medium text-slate-700">15 分鐘計時</p>
          </button>
          <Link
            href="/wrong-answers"
            className="rounded-lg border bg-white p-4 text-center transition-colors hover:border-red-400"
          >
            <p className="mb-1 text-2xl">本</p>
            <p className="text-sm font-medium text-slate-700">錯題本</p>
          </Link>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-slate-900">測驗結束</h1>
        <div className="rounded-lg border bg-white p-8">
          <p className="mb-2 text-6xl font-bold text-emerald-600">{percentage}%</p>
          <p className="mb-6 text-slate-600">
            答對 {score.correct} / {score.total} 題
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={startQuiz} className="rounded-md bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700">
              再測一次
            </button>
            <Link href="/wrong-answers" className="rounded-md border border-red-200 bg-red-50 px-6 py-3 font-medium text-red-700 hover:bg-red-100">
              查看錯題本
            </Link>
            <Link href="/progress" className="rounded-md bg-slate-200 px-6 py-3 font-medium text-slate-800 hover:bg-slate-300">
              查看進度
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentIndex];

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm text-slate-500">
          第 {currentIndex + 1} / {quizQuestions.length} 題
        </span>
        <span className="text-sm font-medium text-emerald-600">答對: {score.correct}</span>
        {timedMode && (
          <span className="text-sm font-medium text-rose-600">
            {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="mb-8 h-2 w-full rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-emerald-500 transition-all"
          style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <div className="rounded-lg border bg-white p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 className="text-lg font-medium text-slate-900">{question.question}</h2>
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
            let className = "w-full rounded-md border p-4 text-left transition-all ";
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
              <button key={index} onClick={() => handleAnswer(index)} className={className} disabled={showExplanation}>
                <span className="mr-3 font-medium">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mt-6 rounded-md border border-blue-200 bg-blue-50 p-4">
            <p className="mb-1 text-sm font-medium text-blue-900">解析</p>
            <p className="text-sm text-blue-800">{question.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <button onClick={nextQuestion} className="mt-6 w-full rounded-md bg-emerald-600 py-3 font-medium text-white hover:bg-emerald-700">
            {currentIndex + 1 >= quizQuestions.length ? "查看結果" : "下一題"}
          </button>
        )}
      </div>
    </div>
  );
}
