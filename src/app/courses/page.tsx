import Link from "next/link";
import { courses } from "@/data/courses";
import { questions } from "@/data/questions";

const categoryLabels: Record<string, string> = {
  cfa: "CFA",
  "securities-senior": "高業",
  "securities-junior": "初業",
  frm: "FRM",
};

const categoryColors: Record<string, string> = {
  cfa: "border-blue-200 bg-blue-50 text-blue-800",
  "securities-senior": "border-purple-200 bg-purple-50 text-purple-800",
  "securities-junior": "border-orange-200 bg-orange-50 text-orange-800",
  frm: "border-red-200 bg-red-50 text-red-800",
};

export default function CoursesPage() {
  const categories = ["cfa", "securities-senior", "securities-junior", "frm"];
  const totalChapters = courses.reduce((sum, course) => sum + course.chapters.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-10 border-b border-slate-200 pb-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">課程工作台</h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              先選證照，再照章節路線讀講義、做題、回錯題。每門課都串接考點、題庫與白話註釋。
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <SummaryStat label="課程" value={`${courses.length}`} />
            <SummaryStat label="章節" value={`${totalChapters}`} />
            <SummaryStat label="題目" value={`${questions.length}`} />
          </div>
        </div>
      </section>

      {categories.map((cat) => {
        const filtered = courses.filter((c) => c.category === cat);
        if (filtered.length === 0) return null;
        return (
          <section key={cat} className="mb-12">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                <span className={`rounded-full border px-3 py-1 text-sm ${categoryColors[cat]}`}>
                  {categoryLabels[cat]}
                </span>
              </h2>
              <span className="text-sm text-slate-500">
                {filtered.reduce((sum, course) => sum + course.chapters.length, 0)} 個章節
              </span>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="card-lift group flex min-h-48 flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 hover:border-emerald-300"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{course.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{course.description}</p>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-sm text-slate-500">{course.chapters.length} 個章節</span>
                    <span className="text-sm font-medium text-emerald-700 group-hover:text-emerald-800">
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

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
      <p className="text-2xl font-bold text-slate-950">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
