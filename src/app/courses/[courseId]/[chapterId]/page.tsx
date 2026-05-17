"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { courses } from "@/data/courses";
import { keypoints } from "@/data/keypoints";
import { markChapterComplete } from "@/lib/progress";
import { getHighlights, addHighlight, removeHighlight, Highlight } from "@/lib/highlights";
import { useEffect, useState } from "react";

const highlightColors = {
  yellow: { bg: "bg-yellow-200", border: "border-yellow-300", label: "黃色" },
  green: { bg: "bg-green-200", border: "border-green-300", label: "綠色" },
  blue: { bg: "bg-blue-200", border: "border-blue-300", label: "藍色" },
  pink: { bg: "bg-pink-200", border: "border-pink-300", label: "粉紅" },
};

export default function ChapterPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const chapterId = params.chapterId as string;

  const course = courses.find((c) => c.id === courseId);
  const chapter = course?.chapters.find((ch) => ch.id === chapterId);
  const [highlights, setHighlights] = useState<Highlight[]>(() => getHighlights(chapterId));
  const [selectedText, setSelectedText] = useState("");
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });
  const [showHighlights, setShowHighlights] = useState(true);

  const chapterIndex = course?.chapters.findIndex((ch) => ch.id === chapterId) ?? -1;
  const prevChapter = course?.chapters[chapterIndex - 1];
  const nextChapter = course?.chapters[chapterIndex + 1];
  const chapterKeypoints = keypoints[chapterId] || [];

  useEffect(() => {
    if (courseId && chapterId) {
      markChapterComplete(courseId, chapterId);
    }
  }, [courseId, chapterId]);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 1) {
      const text = selection.toString().trim();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setSelectedText(text);
      setToolbarPos({
        x: rect.left + rect.width / 2,
        y: rect.top - 10 + window.scrollY,
      });
      setShowToolbar(true);
    } else {
      setShowToolbar(false);
      setSelectedText("");
    }
  };

  const handleHighlight = (color: Highlight["color"]) => {
    if (!selectedText) return;
    const newHL = addHighlight(chapterId, selectedText, color);
    setHighlights((prev) => [...prev, newHL]);
    setShowToolbar(false);
    setSelectedText("");
    window.getSelection()?.removeAllRanges();
  };

  const handleRemoveHighlight = (id: string) => {
    removeHighlight(id);
    setHighlights((prev) => prev.filter((h) => h.id !== id));
  };

  if (!course || !chapter) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-slate-600">找不到此章節</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/courses" className="hover:text-emerald-600">課程</Link>
        <span className="mx-2">/</span>
        <Link href={`/courses/${courseId}`} className="hover:text-emerald-600">
          {course.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{chapter.title}</span>
      </nav>

      <div className="mb-4 px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-md text-sm text-emerald-700">
        已標記為已讀
      </div>

      {/* Highlight toolbar */}
      {showToolbar && (
        <div
          className="fixed z-50 flex items-center gap-1 px-2 py-1.5 bg-slate-800 rounded-lg shadow-xl"
          style={{
            left: `${toolbarPos.x}px`,
            top: `${toolbarPos.y}px`,
            transform: "translate(-50%, -100%)",
            position: "absolute",
          }}
        >
          <span className="text-xs text-slate-300 mr-1">畫重點：</span>
          {(Object.keys(highlightColors) as Highlight["color"][]).map((color) => (
            <button
              key={color}
              onClick={() => handleHighlight(color)}
              className={`w-6 h-6 rounded-full ${highlightColors[color].bg} border-2 ${highlightColors[color].border} hover:scale-110 transition-transform`}
              title={highlightColors[color].label}
            />
          ))}
          <button
            onClick={() => { setShowToolbar(false); window.getSelection()?.removeAllRanges(); }}
            className="ml-1 text-slate-400 hover:text-white text-xs px-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* Article content */}
      <article className="prose prose-slate max-w-none" onMouseUp={handleMouseUp}>
        <MarkdownContent content={chapter.content} highlights={showHighlights ? highlights : []} />
      </article>

      {/* Key Points section */}
      {chapterKeypoints.length > 0 && (
        <section className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">&#128218;</span> 本章重點摘要
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {chapterKeypoints.map((kp, i) => (
              <div
                key={i}
                className={`rounded-lg border p-4 ${
                  kp.type === "formula"
                    ? "bg-blue-50 border-blue-200"
                    : kp.type === "tip"
                      ? "bg-amber-50 border-amber-200"
                      : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                    kp.type === "formula"
                      ? "bg-blue-200 text-blue-800"
                      : kp.type === "tip"
                        ? "bg-amber-200 text-amber-800"
                        : "bg-slate-200 text-slate-700"
                  }`}>
                    {kp.type === "formula" ? "公式" : kp.type === "tip" ? "考試重點" : "概念"}
                  </span>
                  <span className="font-semibold text-sm text-slate-900">{kp.title}</span>
                </div>
                <p className={`text-sm font-mono ${
                  kp.type === "formula" ? "text-blue-900" : "text-slate-700 font-sans"
                }`}>
                  {kp.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* My highlights section */}
      {highlights.length > 0 && (
        <section className="mt-8 border-t pt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <span>&#128396;</span> 我的重點 ({highlights.length})
            </h3>
            <button
              onClick={() => setShowHighlights(!showHighlights)}
              className="text-sm text-slate-500 hover:text-slate-700"
            >
              {showHighlights ? "隱藏標記" : "顯示標記"}
            </button>
          </div>
          <div className="space-y-2">
            {highlights.map((hl) => (
              <div
                key={hl.id}
                className={`flex items-start gap-3 p-3 rounded-md ${highlightColors[hl.color].bg} bg-opacity-50`}
              >
                <p className="flex-1 text-sm text-slate-800 leading-relaxed">
                  &ldquo;{hl.text}&rdquo;
                </p>
                <button
                  onClick={() => handleRemoveHighlight(hl.id)}
                  className="flex-shrink-0 text-xs text-slate-500 hover:text-red-600 mt-0.5"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t pt-6">
        {prevChapter ? (
          <Link
            href={`/courses/${courseId}/${prevChapter.id}`}
            className="text-sm text-slate-600 hover:text-emerald-600"
          >
            ← {prevChapter.title}
          </Link>
        ) : (
          <div />
        )}
        {nextChapter ? (
          <Link
            href={`/courses/${courseId}/${nextChapter.id}`}
            className="text-sm text-emerald-600 font-medium hover:text-emerald-700"
          >
            {nextChapter.title} →
          </Link>
        ) : (
          <Link
            href={`/quiz?course=${courseId}`}
            className="px-4 py-2 bg-emerald-600 text-white rounded-md text-sm hover:bg-emerald-700"
          >
            前往測驗
          </Link>
        )}
      </div>
    </div>
  );
}

function MarkdownContent({ content, highlights }: { content: string; highlights: Highlight[] }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc pl-6 my-2 space-y-1">
          {listItems.map((item, i) => (
            <li key={i} className="text-slate-700">
              <HighlightedText text={item} highlights={highlights} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      flushList();
      elements.push(<h1 key={i} className="text-3xl font-bold text-slate-900 mt-8 mb-4">{line.slice(2)}</h1>);
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(<h2 key={i} className="text-2xl font-semibold text-slate-800 mt-6 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(<h3 key={i} className="text-xl font-medium text-slate-800 mt-4 mb-2">{line.slice(4)}</h3>);
    } else if (line.startsWith("- ") || line.startsWith("  - ")) {
      listItems.push(line.replace(/^\s*- /, ""));
    } else if (/^\d+\.\s/.test(line)) {
      flushList();
      listItems.push(line.replace(/^\d+\.\s/, ""));
    } else if (line.startsWith("`") && !line.startsWith("``")) {
      flushList();
      const code = line.replace(/^`|`$/g, "");
      elements.push(
        <div key={i} className="my-3 px-4 py-3 bg-slate-800 text-emerald-300 rounded-md font-mono text-sm overflow-x-auto">
          {code}
        </div>
      );
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={i} className="text-slate-700 my-2 leading-relaxed">
          <HighlightedText text={line} highlights={highlights} />
        </p>
      );
    }
  }
  flushList();

  return <>{elements}</>;
}

function HighlightedText({ text, highlights }: { text: string; highlights: Highlight[] }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return (
    <>
      {parts.map((part, i) => {
        let content: React.ReactNode;
        let plainText: string;

        if (part.startsWith("**") && part.endsWith("**")) {
          plainText = part.slice(2, -2);
          content = <strong className="font-semibold text-slate-900">{plainText}</strong>;
        } else if (part.startsWith("`") && part.endsWith("`")) {
          plainText = part.slice(1, -1);
          content = <code className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded text-sm font-mono">{plainText}</code>;
        } else {
          plainText = part;
          content = part;
        }

        const matchingHL = highlights.find((h) => plainText.includes(h.text) || h.text.includes(plainText));
        if (matchingHL && plainText.trim().length > 0) {
          const colorClass = highlightColors[matchingHL.color].bg;
          return (
            <mark key={i} className={`${colorClass} px-0.5 rounded-sm`}>
              {content}
            </mark>
          );
        }

        return <span key={i}>{content}</span>;
      })}
    </>
  );
}
