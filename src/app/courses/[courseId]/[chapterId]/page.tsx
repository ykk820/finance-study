import { Metadata } from "next";
import { notFound } from "next/navigation";
import ChapterReader from "@/components/ChapterReader";
import { courses } from "@/data/courses";
import { getGlossaryTermsByChapter } from "@/data/glossary";
import { keypoints } from "@/data/keypoints";

type ChapterPageProps = {
  params: Promise<{
    courseId: string;
    chapterId: string;
  }>;
};

export function generateStaticParams() {
  return courses.flatMap((course) =>
    course.chapters.map((chapter) => ({
      courseId: course.id,
      chapterId: chapter.id,
    }))
  );
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { courseId, chapterId } = await params;
  const course = courses.find((item) => item.id === courseId);
  const chapter = course?.chapters.find((item) => item.id === chapterId);

  if (!course || !chapter) {
    return {
      title: "找不到章節 | FinanceStudy",
    };
  }

  const description = chapter.content
    .replace(/[#`*_]/g, "")
    .split("\n")
    .find((line) => line.trim().length > 24)
    ?.trim()
    .slice(0, 150);

  return {
    title: `${chapter.title} | ${course.name} | FinanceStudy`,
    description: description || `${course.name} 的 ${chapter.title} 講義、考試重點與白話註釋。`,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { courseId, chapterId } = await params;
  const course = courses.find((item) => item.id === courseId);
  const chapterIndex = course?.chapters.findIndex((item) => item.id === chapterId) ?? -1;
  const chapter = chapterIndex >= 0 ? course?.chapters[chapterIndex] : undefined;

  if (!course || !chapter) {
    notFound();
  }

  return (
    <ChapterReader
      courseId={course.id}
      courseName={course.name}
      chapter={chapter}
      prevChapter={getChapterLink(course.chapters[chapterIndex - 1])}
      nextChapter={getChapterLink(course.chapters[chapterIndex + 1])}
      chapterKeypoints={keypoints[chapter.id] || []}
      chapterGlossaryTerms={getGlossaryTermsByChapter(chapter.id)}
    />
  );
}

function getChapterLink(chapter: { id: string; title: string } | undefined) {
  if (!chapter) return undefined;
  return {
    id: chapter.id,
    title: chapter.title,
  };
}
