"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PlainLanguageTerms from "@/components/PlainLanguageTerms";
import { GlossaryTerm } from "@/data/glossary";
import { KeyPoint } from "@/data/keypoints";
import { addHighlight, getHighlights, Highlight, removeHighlight } from "@/lib/highlights";
import { markChapterComplete } from "@/lib/progress";
import { Chapter } from "@/types";

const highlightColors = {
  yellow: { bg: "bg-yellow-200", border: "border-yellow-300", label: "黃色" },
  green: { bg: "bg-green-200", border: "border-green-300", label: "綠色" },
  blue: { bg: "bg-blue-200", border: "border-blue-300", label: "藍色" },
  pink: { bg: "bg-pink-200", border: "border-pink-300", label: "粉紅" },
};

type GlossaryNote = {
  term: GlossaryTerm;
  number: number;
};

type ChapterLink = Pick<Chapter, "id" | "title">;

type ChapterReaderProps = {
  courseId: string;
  courseName: string;
  chapter: Chapter;
  prevChapter?: ChapterLink;
  nextChapter?: ChapterLink;
  chapterKeypoints: KeyPoint[];
  chapterGlossaryTerms: GlossaryTerm[];
};

export default function ChapterReader({
  courseId,
  courseName,
  chapter,
  prevChapter,
  nextChapter,
  chapterKeypoints,
  chapterGlossaryTerms,
}: ChapterReaderProps) {
  const chapterId = chapter.id;
  const [highlights, setHighlights] = useState<Highlight[]>(() => getHighlights(chapterId));
  const [selectedText, setSelectedText] = useState("");
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });
  const [showHighlights, setShowHighlights] = useState(true);
  const [readProgress, setReadProgress] = useState(0);

  const glossaryNotes = chapterGlossaryTerms.map((term, index) => ({
    term,
    number: index + 1,
  }));

  useEffect(() => {
    markChapterComplete(courseId, chapterId);
  }, [courseId, chapterId]);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [chapterId]);

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
    const newHighlight = addHighlight(chapterId, selectedText, color);
    setHighlights((prev) => [...prev, newHighlight]);
    setShowToolbar(false);
    setSelectedText("");
    window.getSelection()?.removeAllRanges();
  };

  const handleRemoveHighlight = (id: string) => {
    removeHighlight(id);
    setHighlights((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="reading-progress" style={{ width: `${readProgress}%` }} />
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/courses" className="hover:text-emerald-600">
          課程
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/courses/${courseId}`} className="hover:text-emerald-600">
          {courseName}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{chapter.title}</span>
      </nav>

      <div className="mb-4 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
        已標記為已讀
      </div>

      {showToolbar && (
        <div
          className="z-50 flex items-center gap-1 rounded-lg bg-slate-800 px-2 py-1.5 shadow-xl"
          style={{
            left: `${toolbarPos.x}px`,
            top: `${toolbarPos.y}px`,
            transform: "translate(-50%, -100%)",
            position: "absolute",
          }}
        >
          <span className="mr-1 text-xs text-slate-300">畫重點：</span>
          {(Object.keys(highlightColors) as Highlight["color"][]).map((color) => (
            <button
              key={color}
              onClick={() => handleHighlight(color)}
              className={`h-6 w-6 rounded-full border-2 ${highlightColors[color].bg} ${highlightColors[color].border} transition-transform hover:scale-110`}
              title={highlightColors[color].label}
            />
          ))}
          <button
            onClick={() => {
              setShowToolbar(false);
              window.getSelection()?.removeAllRanges();
            }}
            className="ml-1 px-1 text-xs text-slate-400 hover:text-white"
          >
            x
          </button>
        </div>
      )}

      <article className="prose prose-slate max-w-none" onMouseUp={handleMouseUp}>
        <MarkdownContent
          content={chapter.content}
          highlights={showHighlights ? highlights : []}
          glossaryNotes={glossaryNotes}
        />
      </article>

      {chapterKeypoints.length > 0 && (
        <section className="mt-12 border-t pt-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
            <span className="text-2xl">&#128218;</span> 本章重點摘要
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {chapterKeypoints.map((kp, i) => (
              <div
                key={i}
                className={`rounded-lg border p-4 ${
                  kp.type === "formula"
                    ? "border-blue-200 bg-blue-50"
                    : kp.type === "tip"
                      ? "border-amber-200 bg-amber-50"
                      : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span
                    className={`rounded px-1.5 py-0.5 text-xs font-medium ${
                      kp.type === "formula"
                        ? "bg-blue-200 text-blue-800"
                        : kp.type === "tip"
                          ? "bg-amber-200 text-amber-800"
                          : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {kp.type === "formula" ? "公式" : kp.type === "tip" ? "考試重點" : "概念"}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">{kp.title}</span>
                </div>
                <p className={`text-sm ${kp.type === "formula" ? "font-mono text-blue-900" : "font-sans text-slate-700"}`}>
                  {kp.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {glossaryNotes.length > 0 && (
        <section className="mt-12 border-t pt-8">
          <div className="mb-4">
            <p className="text-sm font-semibold text-emerald-600">Inline Notes</p>
            <h2 className="text-xl font-bold text-slate-900">本章白話註釋</h2>
            <p className="mt-1 text-sm text-slate-500">
              文中看到「註1」這種標記，可以對照下面的人話解釋。
            </p>
          </div>
          <ol className="space-y-3">
            {glossaryNotes.map(({ term, number }) => (
              <li key={term.id} id={`note-${number}`} className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
                    註{number}
                  </span>
                  <span className="font-semibold text-slate-950">{term.term}</span>
                  {term.aliases.slice(0, 2).map((alias) => (
                    <span key={alias} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
                      {alias}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-6 text-slate-700">{term.plain}</p>
                <p className="mt-2 text-sm leading-6 text-amber-700">
                  <span className="font-semibold">考試小心：</span>
                  {term.commonTrap}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <PlainLanguageTerms terms={chapterGlossaryTerms} />

      {highlights.length > 0 && (
        <section className="mt-8 border-t pt-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <span>&#128396;</span> 我的重點 ({highlights.length})
            </h3>
            <button onClick={() => setShowHighlights(!showHighlights)} className="text-sm text-slate-500 hover:text-slate-700">
              {showHighlights ? "隱藏標記" : "顯示標記"}
            </button>
          </div>
          <div className="space-y-2">
            {highlights.map((hl) => (
              <div key={hl.id} className={`flex items-start gap-3 rounded-md p-3 ${highlightColors[hl.color].bg} bg-opacity-50`}>
                <p className="flex-1 text-sm leading-relaxed text-slate-800">&ldquo;{hl.text}&rdquo;</p>
                <button
                  onClick={() => handleRemoveHighlight(hl.id)}
                  className="mt-0.5 flex-shrink-0 text-xs text-slate-500 hover:text-red-600"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 flex items-center justify-between border-t pt-6">
        {prevChapter ? (
          <Link href={`/courses/${courseId}/${prevChapter.id}`} className="text-sm text-slate-600 hover:text-emerald-600">
            ← {prevChapter.title}
          </Link>
        ) : (
          <div />
        )}
        {nextChapter ? (
          <Link href={`/courses/${courseId}/${nextChapter.id}`} className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
            {nextChapter.title} →
          </Link>
        ) : (
          <Link href={`/quiz?course=${courseId}`} className="rounded-md bg-emerald-600 px-4 py-2 text-sm text-white hover:bg-emerald-700">
            前往測驗
          </Link>
        )}
      </div>
    </div>
  );
}

function MarkdownContent({
  content,
  highlights,
  glossaryNotes,
}: {
  content: string;
  highlights: Highlight[];
  glossaryNotes: GlossaryNote[];
}) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="my-2 list-disc space-y-1 pl-6">
          {listItems.map((item, i) => (
            <li key={i} className="text-slate-700">
              <HighlightedText text={item} highlights={highlights} glossaryNotes={glossaryNotes} />
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
      elements.push(
        <h1 key={i} className="mb-4 mt-8 text-3xl font-bold text-slate-900">
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={i} className="mb-3 mt-6 text-2xl font-semibold text-slate-800">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={i} className="mb-2 mt-4 text-xl font-medium text-slate-800">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ") || line.startsWith("  - ")) {
      listItems.push(line.replace(/^\s*- /, ""));
    } else if (/^\d+\.\s/.test(line)) {
      flushList();
      listItems.push(line.replace(/^\d+\.\s/, ""));
    } else if (line.startsWith("`") && !line.startsWith("``")) {
      flushList();
      const code = line.replace(/^`|`$/g, "");
      elements.push(
        <div key={i} className="my-3 overflow-x-auto rounded-md bg-slate-800 px-4 py-3 font-mono text-sm text-emerald-300">
          {code}
        </div>
      );
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={i} className="my-2 leading-relaxed text-slate-700">
          <HighlightedText text={line} highlights={highlights} glossaryNotes={glossaryNotes} />
        </p>
      );
    }
  }
  flushList();

  return <>{elements}</>;
}

function HighlightedText({
  text,
  highlights,
  glossaryNotes,
}: {
  text: string;
  highlights: Highlight[];
  glossaryNotes: GlossaryNote[];
}) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return (
    <>
      {parts.map((part, i) => {
        let content: React.ReactNode;
        let plainText: string;

        if (part.startsWith("**") && part.endsWith("**")) {
          plainText = part.slice(2, -2);
          content = (
            <strong className="font-semibold text-slate-900">
              <AnnotatedPlainText text={plainText} glossaryNotes={glossaryNotes} />
            </strong>
          );
        } else if (part.startsWith("`") && part.endsWith("`")) {
          plainText = part.slice(1, -1);
          content = <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-800">{plainText}</code>;
        } else {
          plainText = part;
          content = <AnnotatedPlainText text={part} glossaryNotes={glossaryNotes} />;
        }

        const matchingHL = highlights.find((h) => plainText.includes(h.text) || h.text.includes(plainText));
        if (matchingHL && plainText.trim().length > 0) {
          const colorClass = highlightColors[matchingHL.color].bg;
          return (
            <mark key={i} className={`${colorClass} rounded-sm px-0.5`}>
              {content}
            </mark>
          );
        }

        return <span key={i}>{content}</span>;
      })}
    </>
  );
}

function AnnotatedPlainText({
  text,
  glossaryNotes,
}: {
  text: string;
  glossaryNotes: GlossaryNote[];
}) {
  const matches = findGlossaryMatches(text, glossaryNotes);
  if (matches.length === 0) return <>{text}</>;

  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  matches.forEach((match, index) => {
    if (match.start > cursor) {
      nodes.push(text.slice(cursor, match.start));
    }
    nodes.push(
      <span key={`${match.note.term.id}-${index}`} className="font-medium text-slate-900">
        {text.slice(match.start, match.end)}
        <a
          href={`#note-${match.note.number}`}
          className="ml-0.5 align-super text-[10px] font-semibold text-emerald-700 hover:text-emerald-900"
          title={match.note.term.plain}
        >
          註{match.note.number}
        </a>
      </span>
    );
    cursor = match.end;
  });

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return <>{nodes}</>;
}

function findGlossaryMatches(text: string, glossaryNotes: GlossaryNote[]) {
  const lowerText = text.toLowerCase();
  const candidates = glossaryNotes
    .flatMap((note) =>
      [note.term.term, ...note.term.aliases]
        .filter((label) => label.trim().length >= 2)
        .map((label) => ({
          note,
          label,
          start: lowerText.indexOf(label.toLowerCase()),
        }))
    )
    .filter((item) => item.start >= 0)
    .map((item) => ({
      note: item.note,
      start: item.start,
      end: item.start + item.label.length,
    }))
    .sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));

  const usedTermIds = new Set<string>();
  const matches: { note: GlossaryNote; start: number; end: number }[] = [];
  let lastEnd = -1;

  for (const candidate of candidates) {
    if (usedTermIds.has(candidate.note.term.id)) continue;
    if (candidate.start < lastEnd) continue;
    usedTermIds.add(candidate.note.term.id);
    matches.push(candidate);
    lastEnd = candidate.end;
  }

  return matches;
}
