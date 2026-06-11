import Link from "next/link";
import { courses } from "@/data/courses";
import { examFocusCourses } from "@/data/examFocus";
import { glossaryTerms } from "@/data/glossary";
import { questions } from "@/data/questions";
import DashboardSummary from "@/components/DashboardSummary";

export const dynamic = "force-dynamic";

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
  const totalChapters = courses.reduce((sum, course) => sum + course.chapters.length, 0);

  return (
    <div className="animate-fade-up">
      <section className="surface-grid border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-18">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              金融證照備考，從今天該做什麼開始
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              把 CFA、高業、初業、FRM 的講義、題庫、錯題、白話註釋和高頻考點放在同一個工作台。
              先抓重點，再做題驗證，最後回錯題補洞。
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
              <Link
                href="/plain-language"
                className="rounded-md border border-emerald-200 bg-emerald-50 px-5 py-3 font-medium text-emerald-800 transition-colors hover:bg-emerald-100"
              >
                白話文詞庫
              </Link>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              <HeroStat tone="light" label="課程" value={`${courses.length}`} />
              <HeroStat tone="light" label="章節" value={`${totalChapters}`} />
              <HeroStat tone="light" label="題目" value={`${questions.length}`} />
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-sm font-semibold text-emerald-300">今日備考流程</p>
                <h2 className="mt-2 text-2xl font-bold">讀重點，做題，回補弱點</h2>
              </div>
              <span className="rounded-md bg-emerald-400 px-2 py-1 text-xs font-bold text-slate-950">
                Live
              </span>
            </div>
            <div className="mt-5 space-y-3">
              <HeroStep
                index="01"
                title="讀本章講義"
                description="先看白話註釋與考試陷阱，減少死背。"
                href="/courses"
              />
              <HeroStep
                index="02"
                title="做高頻題"
                description="從考情權重最高的章節抽題，快速驗證。"
                href="/quiz?mode=focus"
              />
              <HeroStep
                index="03"
                title="整理錯題"
                description="把錯因分類，下一輪複習就有方向。"
                href="/wrong-answers"
              />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <HeroStat label="白話詞條" value={`${glossaryTerms.length}`} />
              <HeroStat
                label="高頻考點"
                value={`${examFocusCourses.reduce(
                  (sum, focus) => sum + focus.topics.filter((topic) => topic.priority === "high").length,
                  0
                )}`}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <DashboardSummary />

      <section className="mb-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-600 mb-1">Plain language learning</p>
            <h2 className="text-2xl font-bold text-slate-900">難懂名詞，先用人話搞懂</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              每個名詞都有正式定義、白話翻譯、生活比喻、考試陷阱和小例子。先懂意思，再背公式。
            </p>
          </div>
          <Link
            href="/plain-language"
            className="rounded-md bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-slate-700"
          >
            打開白話詞庫
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
          {glossaryTerms.slice(0, 3).map((term) => (
            <Link
              key={term.id}
              href={`/plain-language?term=${term.id}`}
              className="rounded-xl border border-slate-100 bg-slate-50 p-4 hover:border-emerald-200 hover:bg-emerald-50/50"
            >
              <p className="font-semibold text-slate-950">{term.term}</p>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{term.plain}</p>
            </Link>
          ))}
        </div>
      </section>

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
              className="card-lift block bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:border-emerald-300"
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

function HeroStep({
  index,
  title,
  description,
  href,
}: {
  index: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
    >
      <span className="mt-0.5 font-mono text-xs font-semibold text-emerald-300">{index}</span>
      <span>
        <span className="block font-semibold text-white">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-slate-300 group-hover:text-slate-200">
          {description}
        </span>
      </span>
    </Link>
  );
}

function HeroStat({
  label,
  value,
  tone = "dark",
}: {
  label: string;
  value: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={
        tone === "light"
          ? "rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          : "border-t border-white/10 pt-3"
      }
    >
      <p className={tone === "light" ? "text-2xl font-bold text-slate-950" : "text-2xl font-bold text-white"}>
        {value}
      </p>
      <p className={tone === "light" ? "mt-1 text-sm text-slate-500" : "mt-1 text-sm text-slate-300"}>
        {label}
      </p>
    </div>
  );
}
