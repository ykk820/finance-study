import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { getExamFocusByCourse } from "@/data/examFocus";
import { questions } from "@/data/questions";
import CourseRoadmap from "@/components/CourseRoadmap";

const categoryLabels: Record<string, string> = {
  cfa: "CFA",
  "securities-senior": "高業",
  "securities-junior": "初業",
  frm: "FRM",
};

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
  const examFocus = getExamFocusByCourse(courseId);
  const highPriorityCount = examFocus?.topics.filter((topic) => topic.priority === "high").length || 0;
  const firstChapter = course.chapters[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/courses" className="hover:text-emerald-600">
          課程
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{course.name}</span>
      </nav>

      <section className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
              {categoryLabels[course.category]}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">{course.name}</h1>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">{course.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {firstChapter && (
                <Link
                  href={`/courses/${courseId}/${firstChapter.id}`}
                  className="rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                >
                  開始讀第一章
                </Link>
              )}
              <Link
                href={`/quiz?course=${courseId}`}
                className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700"
              >
                進入本課題庫
              </Link>
              <Link
                href="/exam-focus"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                查看考點
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            <CourseMetric label="章節" value={`${course.chapters.length}`} />
            <CourseMetric label="練習題" value={`${courseQuestions.length}`} />
            <CourseMetric label="高優先考點" value={`${highPriorityCount}`} />
          </div>
        </div>
      </section>

      {examFocus && (
        <section className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-semibold text-emerald-600">考試重點</p>
              <h2 className="text-xl font-semibold text-slate-950">依考綱與考古趨勢安排讀書順序</h2>
            </div>
            <Link
              href="/exam-focus"
              className="shrink-0 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              完整分析
            </Link>
          </div>
          <p className="mb-5 text-sm leading-6 text-slate-600">{examFocus.overallStrategy}</p>
          <div className="grid gap-3 md:grid-cols-3">
            {examFocus.topics.slice(0, 3).map((topic) => (
              <div key={topic.title} className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                <p className="font-medium text-slate-950">{topic.title}</p>
                <p className="mt-2 text-xs font-semibold text-rose-600">{topic.weight}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{topic.action}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <CourseRoadmap course={course} />
    </div>
  );
}

function CourseMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <p className="text-2xl font-bold text-slate-950">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
