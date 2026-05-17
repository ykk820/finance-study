"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { courses } from "@/data/courses";
import { markChapterComplete } from "@/lib/progress";
import { useEffect, useState } from "react";

export default function ChapterPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const chapterId = params.chapterId as string;

  const course = courses.find((c) => c.id === courseId);
  const chapter = course?.chapters.find((ch) => ch.id === chapterId);
  const [marked, setMarked] = useState(false);

  const chapterIndex = course?.chapters.findIndex((ch) => ch.id === chapterId) ?? -1;
  const prevChapter = course?.chapters[chapterIndex - 1];
  const nextChapter = course?.chapters[chapterIndex + 1];

  useEffect(() => {
    if (courseId && chapterId) {
      markChapterComplete(courseId, chapterId);
      setMarked(true);
    }
  }, [courseId, chapterId]);

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

      {marked && (
        <div className="mb-4 px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-md text-sm text-emerald-700">
          已標記為已讀
        </div>
      )}

      <article className="prose prose-slate max-w-none">
        <MarkdownContent content={chapter.content} />
      </article>

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

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc pl-6 my-2 space-y-1">
          {listItems.map((item, i) => (
            <li key={i} className="text-slate-700">
              <InlineMarkdown text={item} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
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
      inList = true;
      listItems.push(line.replace(/^\s*- /, ""));
    } else if (/^\d+\.\s/.test(line)) {
      flushList();
      listItems.push(line.replace(/^\d+\.\s/, ""));
      inList = true;
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
          <InlineMarkdown text={line} />
        </p>
      );
    }
  }
  flushList();

  return <>{elements}</>;
}

function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return <code key={i} className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded text-sm font-mono">{part.slice(1, -1)}</code>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
