import Link from "next/link";
import { courses } from "@/data/courses";
import { examFocusCourses } from "@/data/examFocus";
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
  const highPriorityTotal = examFocusCourses.reduce(
    (sum, focus) => sum + focus.topics.filter((topic) => topic.priority === "high").length,
    0
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="premium-grid mb-10 overflow-hidden rounded-3xl border border-slate-200">
        <div className="grid gap-0 lg:grid-cols-[1fr_420px]">
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">課程工作台</h1>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              先選證照，再照章節路線讀講義、做題、回錯題。每門課都串接考點、題庫與白話註釋。
            </p>
            <div className="mt-6 grid max-w-2xl grid-cols-3 gap-3">
              <SummaryStat label="課程" value={`${courses.length}`} />
              <SummaryStat label="章節" value={`${totalChapters}`} />
              <SummaryStat label="高優先" value={`${highPriorityTotal}`} />
            </div>
          </div>
          <div className="command-surface p-6 text-white">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-300">Certification matrix</p>
                <h2 className="mt-1 text-2xl font-bold">選一條路線開始</h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                {questions.length} 題
              </span>
            </div>
            <div className="space-y-3">
              {courses.map((course) => {
                const courseQuestions = questions.filter((q) => q.courseId === course.id).length;
                const width = Math.min(100, Math.max(18, Math.round((course.chapters.length / totalChapters) * 100 * 3)));
                return (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}`}
                    className="block rounded-2xl border border-white/10 bg-white/[0.06] p-4 hover:bg-white/[0.1]"
                  >
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-semibold text-white">{course.name}</span>
                      <span className="text-slate-300">{courseQuestions} 題</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-emerald-400" style={{ width: `${width}%` }} />
                    </div>
                  </Link>
                );
              })}
            </div>
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
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  const courseQuestions = questions.filter((q) => q.courseId === course.id).length;
  const focus = examFocusCourses.find((item) => item.courseId === course.id);
  const highPriorityCount = focus?.topics.filter((topic) => topic.priority === "high").length || 0;

  return (
    <Link
      href={`/courses/${course.id}`}
      className="card-lift group flex min-h-64 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-emerald-300"
    >
      <div className="h-1.5 bg-slate-950" />
      <div className="p-6">
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[course.category]}`}>
          {categoryLabels[course.category]}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-slate-950">{course.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{course.description}</p>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <CardMetric label="章節" value={`${course.chapters.length}`} />
          <CardMetric label="題目" value={`${courseQuestions}`} />
          <CardMetric label="高優先" value={`${highPriorityCount}`} />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-4">
        <span className="text-sm text-slate-500">Roadmap ready</span>
        <span className="text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">開始學習 →</span>
      </div>
    </Link>
  );
}

function CardMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
      <p className="text-lg font-bold text-slate-950">{value}</p>
      <p className="mt-1 text-[11px] text-slate-500">{label}</p>
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur">
      <p className="text-2xl font-bold text-slate-950">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
