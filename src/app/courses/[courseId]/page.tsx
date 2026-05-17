import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { questions } from "@/data/questions";

export function generateStaticParams() {
  return courses.map((course) => ({ courseId: course.id }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = courses.find((c) => c.id === courseId);
  if (!course) notFound();

  const courseQuestions = questions.filter((q) => q.courseId === courseId);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/courses" className="hover:text-emerald-600">
          課程
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{course.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-900 mb-2">{course.name}</h1>
      <p className="text-slate-600 mb-8">{course.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-white rounded-lg border p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600">{course.chapters.length}</p>
          <p className="text-sm text-slate-500">章節</p>
        </div>
        <div className="bg-white rounded-lg border p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">{courseQuestions.length}</p>
          <p className="text-sm text-slate-500">練習題</p>
        </div>
        <Link
          href={`/quiz?course=${courseId}`}
          className="bg-emerald-50 rounded-lg border border-emerald-200 p-4 text-center hover:bg-emerald-100 transition-colors"
        >
          <p className="text-lg font-bold text-emerald-700">開始測驗</p>
          <p className="text-sm text-emerald-600">隨機出題</p>
        </Link>
      </div>

      <h2 className="text-xl font-semibold text-slate-900 mb-4">章節列表</h2>
      <div className="space-y-3">
        {course.chapters.map((chapter, index) => (
          <Link
            key={chapter.id}
            href={`/courses/${courseId}/${chapter.id}`}
            className="flex items-center gap-4 bg-white rounded-lg border border-slate-200 p-4 hover:border-emerald-300 hover:shadow-sm transition-all"
          >
            <span className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-medium text-slate-600">
              {index + 1}
            </span>
            <span className="font-medium text-slate-900">{chapter.title}</span>
            <span className="ml-auto text-emerald-600 text-sm">閱讀 →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
