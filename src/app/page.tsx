import Link from "next/link";
import { courses } from "@/data/courses";
import { examFocusCourses } from "@/data/examFocus";
import DashboardSummary from "@/components/DashboardSummary";

const categoryLabels: Record<string, string> = {
  cfa: "CFA",
  "securities-senior": "高業",
  "securities-junior": "初業",
  frm: "FRM",
};

const categoryColors: Record<string, string> = {
  cfa: "bg-blue-100 text-blue-800 border-blue-200",
  "securities-senior": "bg-purple-100 text-purple-800 border-purple-200",
  "securities-junior": "bg-orange-100 text-orange-800 border-orange-200",
  frm: "bg-red-100 text-red-800 border-red-200",
};

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          金融證照學習平台
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          涵蓋 CFA、高級業務員、初級業務員、FRM 等金融證照的講義與題庫，
          系統化學習，高效備考。
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/courses"
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            開始學習
          </Link>
          <Link
            href="/quiz"
            className="px-6 py-3 bg-slate-200 text-slate-800 rounded-lg font-medium hover:bg-slate-300 transition-colors"
          >
            練習題目
          </Link>
          <Link
            href="/exam-focus"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            看考試重點
          </Link>
        </div>
      </section>

      <DashboardSummary />

      <section className="mb-16">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-sm font-semibold text-emerald-600 mb-1">Data-driven prep</p>
            <h2 className="text-2xl font-bold text-slate-900">考情優先順序</h2>
          </div>
          <Link href="/exam-focus" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
            查看完整分析 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {examFocusCourses.map((focus) => {
            const course = courses.find((item) => item.id === focus.courseId);
            const highPriorityCount = focus.topics.filter((topic) => topic.priority === "high").length;
            if (!course) return null;

            return (
              <Link
                key={focus.courseId}
                href="/exam-focus"
                className="bg-white border border-slate-200 rounded-lg p-4 hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-slate-900">{course.name}</p>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {focus.overallStrategy}
                </p>
                <p className="mt-3 text-xs text-rose-600 font-medium">
                  {highPriorityCount} 個高優先考點
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-8">課程總覽</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="block bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md hover:border-emerald-300 transition-all"
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[course.category]}`}
              >
                {categoryLabels[course.category]}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {course.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                {course.description}
              </p>
              <p className="mt-4 text-xs text-slate-400">
                {course.chapters.length} 個章節
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
