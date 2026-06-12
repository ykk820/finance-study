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

const readinessBars = [
  { label: "Ethics", value: 76, tone: "bg-emerald-400" },
  { label: "FSA", value: 64, tone: "bg-blue-400" },
  { label: "Fixed Income", value: 58, tone: "bg-indigo-400" },
  { label: "法規", value: 71, tone: "bg-amber-300" },
];

const heatmapCells = [
  "bg-emerald-400",
  "bg-amber-300",
  "bg-rose-400",
  "bg-slate-600",
  "bg-emerald-400",
  "bg-blue-400",
  "bg-slate-600",
  "bg-amber-300",
  "bg-emerald-400",
  "bg-rose-400",
  "bg-indigo-400",
  "bg-slate-600",
];

export default function HomePage() {
  const totalChapters = courses.reduce((sum, course) => sum + course.chapters.length, 0);
  const highPriorityTotal = examFocusCourses.reduce(
    (sum, focus) => sum + focus.topics.filter((topic) => topic.priority === "high").length,
    0
  );

  return (
    <div className="animate-fade-up">
      <section className="premium-grid border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-18">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              金融證照備考工作台
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              CFA、高業、初業、FRM 的講義、題庫、錯題、白話註釋和高頻考點整合在同一個學習指揮中心。
              每次打開都知道今天要讀哪一章、刷哪一組題、補哪個弱點。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium ${categoryColors[course.category]}`}
                >
                  {categoryLabels[course.category]}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/study-plan"
                className="rounded-full bg-slate-950 px-5 py-3 font-semibold text-white shadow-lg shadow-slate-950/15 transition-colors hover:bg-slate-800"
              >
                建立考前計畫
              </Link>
              <Link
                href="/quiz?mode=focus"
                className="rounded-full bg-emerald-500 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-400"
              >
                高頻考點練習
              </Link>
              <Link
                href="/exam-focus"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-50"
              >
                查看考情分析
              </Link>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              <HeroStat tone="light" label="課程" value={`${courses.length}`} />
              <HeroStat tone="light" label="章節" value={`${totalChapters}`} />
              <HeroStat tone="light" label="題目" value={`${questions.length}`} />
              <HeroStat tone="light" label="高頻考點" value={`${highPriorityTotal}`} />
            </div>
          </div>

          <StudyCommandCenter glossaryCount={glossaryTerms.length} highPriorityTotal={highPriorityTotal} />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <DashboardSummary />

        <section className="mb-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="soft-panel border-b border-slate-200 p-6 lg:border-b-0 lg:border-r">
              <p className="mb-1 text-sm font-semibold text-emerald-600">Plain language learning</p>
              <h2 className="text-2xl font-bold text-slate-950">難懂名詞，先用人話搞懂</h2>
              <p className="mt-3 leading-7 text-slate-600">
                每個名詞都有正式定義、白話翻譯、生活比喻、考試陷阱和小例子。先懂意思，再背公式。
              </p>
              <Link
                href="/plain-language"
                className="mt-6 inline-flex rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              >
                打開白話詞庫
              </Link>
            </div>
            <div className="grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-3 md:divide-x md:divide-y-0">
              {glossaryTerms.slice(0, 3).map((term, index) => (
                <Link
                  key={term.id}
                  href={`/plain-language?term=${term.id}`}
                  className="group p-5 transition-colors hover:bg-emerald-50/50"
                >
                  <span className="font-mono text-xs font-semibold text-slate-400">註{index + 1}</span>
                  <p className="mt-3 font-semibold text-slate-950">{term.term}</p>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{term.plain}</p>
                  <p className="mt-4 text-sm font-medium text-emerald-700 group-hover:text-emerald-800">
                    看完整白話 →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-sm font-semibold text-emerald-600">Data-driven prep</p>
              <h2 className="text-2xl font-bold text-slate-950">考情優先順序</h2>
            </div>
            <Link href="/exam-focus" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
              查看完整分析 →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {examFocusCourses.map((focus) => {
              const course = courses.find((item) => item.id === focus.courseId);
              const highPriorityCount = focus.topics.filter((topic) => topic.priority === "high").length;
              if (!course) return null;

              return (
                <Link
                  key={focus.courseId}
                  href={`/courses/${focus.courseId}`}
                  className="card-lift rounded-xl border border-slate-200 bg-white p-5 hover:border-emerald-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-slate-950">{course.name}</p>
                    <span className="rounded-full bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-700">
                      {highPriorityCount} 高
                    </span>
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {focus.overallStrategy}
                  </p>
                  <p className="mt-4 text-sm font-medium text-emerald-700">進入課程 →</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-950">課程總覽</h2>
            <Link href="/courses" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
              所有課程 →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="card-lift flex min-h-52 flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 hover:border-emerald-300"
              >
                <div>
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[course.category]}`}
                  >
                    {categoryLabels[course.category]}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{course.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{course.description}</p>
                </div>
                <p className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-500">
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

function StudyCommandCenter({
  glossaryCount,
  highPriorityTotal,
}: {
  glossaryCount: number;
  highPriorityTotal: number;
}) {
  return (
    <div className="command-surface rounded-3xl border border-white/10 p-5 text-white">
      <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <p className="text-sm font-semibold text-emerald-300">今日備考指揮中心</p>
          <h2 className="mt-2 text-2xl font-bold">讀重點，做題，回補弱點</h2>
        </div>
        <span className="rounded-full border border-emerald-300/30 bg-emerald-300/15 px-3 py-1 text-xs font-bold text-emerald-200">
          LIVE
        </span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.82fr]">
        <div className="space-y-3">
          <CommandRow
            index="01"
            title="讀本章講義"
            description="先看白話註釋與考試陷阱，減少死背。"
            href="/courses"
          />
          <CommandRow
            index="02"
            title="做高頻題"
            description="從考情權重最高的章節抽題，快速驗證。"
            href="/quiz?mode=focus"
          />
          <CommandRow
            index="03"
            title="整理錯題"
            description="把錯因分類，下一輪複習就有方向。"
            href="/wrong-answers"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-100">考點雷達</p>
            <span className="text-xs text-slate-400">{highPriorityTotal} high</span>
          </div>
          <div className="mt-4 space-y-3">
            {readinessBars.map((bar) => (
              <div key={bar.label}>
                <div className="mb-1 flex justify-between text-xs text-slate-300">
                  <span>{bar.label}</span>
                  <span>{bar.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full rounded-full ${bar.tone}`} style={{ width: `${bar.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-100">弱點熱圖</p>
            <span className="text-xs text-slate-400">chapter signal</span>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {heatmapCells.map((cell, index) => (
              <span key={`${cell}-${index}`} className={`h-8 rounded-lg ${cell} opacity-90`} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <HeroStat label="白話詞條" value={`${glossaryCount}`} />
          <HeroStat label="高頻考點" value={`${highPriorityTotal}`} />
        </div>
      </div>
    </div>
  );
}

function CommandRow({
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
      className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:bg-white/[0.1]"
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 font-mono text-xs font-semibold text-emerald-300">
        {index}
      </span>
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
