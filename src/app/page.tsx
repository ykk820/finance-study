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
    <div>
      <section className="surface-grid border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
              CFA / 高業 / 初業 / FRM 一站式備考
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              把講義、題庫、錯題與考點整理成每天能執行的讀書節奏
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              FinanceStudy 會依章節進度、答題紀錄和高頻考點，推薦下一步該讀什麼、該練什麼。
              不只是資料庫，而是金融證照備考儀表板。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/study-plan"
                className="rounded-md bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-emerald-700"
              >
                建立考前計畫
              </Link>
              <Link
                href="/quiz?mode=focus"
                className="rounded-md bg-slate-900 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-slate-700"
              >
                高頻考點練習
              </Link>
              <Link
                href="/exam-focus"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 font-medium text-slate-800 transition-colors hover:bg-slate-50"
              >
                查看考情分析
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">Live Prep Dashboard</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <HeroStat label="證照課程" value="4" />
              <HeroStat label="講義章節" value="22" />
              <HeroStat label="練習題庫" value="50+" />
              <HeroStat label="學習模式" value="8" />
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">今日建議</p>
              <p className="mt-2 text-xl font-semibold">先補弱點，再做高頻題</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                進度熱圖、錯題本、公式卡和考前 14 天計畫會一起更新你的備考路線。
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
    </div>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-3xl font-bold">{value}</p>
      <p className="mt-1 text-sm text-slate-300">{label}</p>
    </div>
  );
}
