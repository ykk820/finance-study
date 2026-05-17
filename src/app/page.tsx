import Link from "next/link";
import { courses } from "@/data/courses";

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
