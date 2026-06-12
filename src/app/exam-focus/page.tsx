import Link from "next/link";
import { courses } from "@/data/courses";
import { examFocusCourses, optimizationIdeas, Priority } from "@/data/examFocus";

const priorityStyle: Record<Priority, string> = {
  high: "bg-rose-50 text-rose-700 border-rose-200",
  medium: "bg-amber-50 text-amber-700 border-amber-200",
  low: "bg-slate-50 text-slate-600 border-slate-200",
};

const priorityLabel: Record<Priority, string> = {
  high: "高優先",
  medium: "中優先",
  low: "低優先",
};

export default function ExamFocusPage() {
  const highPriorityTotal = examFocusCourses.reduce(
    (sum, focus) => sum + focus.topics.filter((topic) => topic.priority === "high").length,
    0
  );
  const topicTotal = examFocusCourses.reduce((sum, focus) => sum + focus.topics.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold text-emerald-600">Exam Intelligence</p>
            <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">考試重點與考情分析</h1>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              依官方考綱、科目權重、公開題目與解答資訊整理。這裡不複製歷屆考題，
              而是把可公開引用的考試結構轉成可執行的讀書優先順序。
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <SummaryPill label="證照" value={`${examFocusCourses.length}`} />
            <SummaryPill label="考點" value={`${topicTotal}`} />
            <SummaryPill label="高優先" value={`${highPriorityTotal}`} />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {examFocusCourses.map((focus) => {
          const course = courses.find((item) => item.id === focus.courseId);
          const highPriorityCount = focus.topics.filter((topic) => topic.priority === "high").length;
          if (!course) return null;

          return (
            <article
              key={focus.courseId}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="soft-panel border-b border-slate-200 p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-950">{course.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">更新：{focus.updatedAt}</p>
                  </div>
                  <Link
                    href={`/courses/${focus.courseId}`}
                    className="shrink-0 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
                  >
                    看課程
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <InfoRow label="資料基礎" value={focus.dataBasis} />
                  <InfoRow label="考試型態" value={focus.examPattern} />
                  <InfoRow label="高優先" value={`${highPriorityCount} 個核心考點`} />
                </div>
              </div>

              <div className="p-6">
                <div className="mb-5 rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                  <p className="text-xs font-semibold text-emerald-700">策略</p>
                  <p className="mt-1 text-sm leading-6 text-emerald-900">{focus.overallStrategy}</p>
                </div>

                <div className="space-y-4">
                  {focus.topics.map((topic) => (
                    <div key={topic.title} className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-slate-950">{topic.title}</h3>
                        <span className={`rounded-full border px-2 py-1 text-xs font-medium ${priorityStyle[topic.priority]}`}>
                          {priorityLabel[topic.priority]}
                        </span>
                        <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                          {topic.weight}
                        </span>
                      </div>
                      <p className="mb-3 text-sm leading-6 text-slate-600">{topic.trend}</p>
                      <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                        <MiniPanel title="必讀焦點" items={topic.focusPoints} />
                        <MiniPanel title="常見失分" items={topic.traps} />
                      </div>
                      <p className="mt-3 rounded-md border border-emerald-100 bg-white px-3 py-2 text-sm text-emerald-700">
                        {topic.action}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {topic.chapterIds.map((chapterId) => {
                          const chapter = course.chapters.find((item) => item.id === chapterId);
                          if (!chapter) return null;
                          return (
                            <Link
                              key={chapterId}
                              href={`/courses/${focus.courseId}/${chapterId}`}
                              className="rounded-md bg-white px-2 py-1 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
                            >
                              {chapter.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="mb-2 text-xs font-semibold text-slate-500">資料來源</p>
                  <div className="flex flex-wrap gap-2">
                    {focus.sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-blue-700 underline underline-offset-2 hover:text-blue-900"
                      >
                        {source.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-12">
        <h2 className="mb-5 text-2xl font-bold text-slate-950">下一步可加的高價值功能</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {optimizationIdeas.map((idea) => (
            <div key={idea.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="font-semibold text-slate-950">{idea.title}</h3>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-700">
                  {idea.impact}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-6">{idea.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold text-slate-500">{label}</p>
      <p className="text-sm leading-6 text-slate-700">{value}</p>
    </div>
  );
}

function MiniPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-100 bg-white p-3">
      <p className="mb-2 text-xs font-semibold text-slate-500">{title}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SummaryPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
      <p className="text-2xl font-bold text-slate-950">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
