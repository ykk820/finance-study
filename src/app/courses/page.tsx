import Link from "next/link";
import { courses } from "@/data/courses";

const categoryLabels: Record<string, string> = {
  cfa: "CFA",
  "securities-senior": "高業",
  "securities-junior": "初業",
  frm: "FRM",
};

const categoryColors: Record<string, string> = {
  cfa: "bg-blue-100 text-blue-800",
  "securities-senior": "bg-purple-100 text-purple-800",
  "securities-junior": "bg-orange-100 text-orange-800",
  frm: "bg-red-100 text-red-800",
};

export default function CoursesPage() {
  const categories = ["cfa", "securities-senior", "securities-junior", "frm"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">所有課程</h1>

      {categories.map((cat) => {
        const filtered = courses.filter((c) => c.category === cat);
        if (filtered.length === 0) return null;
        return (
          <section key={cat} className="mb-12">
            <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-sm ${categoryColors[cat]}`}>
                {categoryLabels[cat]}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md hover:border-emerald-300 transition-all"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {course.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {course.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {course.chapters.length} 個章節
                    </span>
                    <span className="text-emerald-600 text-sm font-medium">
                      開始學習 →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
