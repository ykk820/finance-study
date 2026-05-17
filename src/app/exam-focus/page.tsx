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
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-10">
        <p className="text-sm font-semibold text-emerald-600 mb-2">
          Exam Intelligence
        </p>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">考試重點與考情分析</h1>
        <p className="max-w-3xl text-slate-600 leading-7">
          依官方考綱、科目權重、公開題目與解答資訊整理。這裡不複製歷屆考題，
          而是把可公開引用的考試結構轉成可執行的讀書優先順序。
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {examFocusCourses.map((focus) => {
          const course = courses.find((item) => item.id === focus.courseId);
          if (!course) return null;

          return (
            <article
              key={focus.courseId}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{course.name}</h2>
                  <p className="text-sm text-slate-500 mt-1">更新：{focus.updatedAt}</p>
                </div>
                <Link
                  href={`/courses/${focus.courseId}`}
                  className="shrink-0 px-3 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
                >
                  看課程
                </Link>
              </div>

              <div className="space-y-3 mb-5">
                <InfoRow label="資料基礎" value={focus.dataBasis} />
                <InfoRow label="考試型態" value={focus.examPattern} />
                <InfoRow label="策略" value={focus.overallStrategy} />
              </div>

              <div className="space-y-4">
                {focus.topics.map((topic) => (
                  <div key={topic.title} className="border-t border-slate-100 pt-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-semibold text-slate-900">{topic.title}</h3>
                      <span className={`px-2 py-1 rounded-full border text-xs font-medium ${priorityStyle[topic.priority]}`}>
                        {priorityLabel[topic.priority]}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                        {topic.weight}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{topic.trend}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <MiniPanel title="必讀焦點" items={topic.focusPoints} />
                      <MiniPanel title="常見失分" items={topic.traps} />
                    </div>
                    <p className="mt-3 text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-md px-3 py-2">
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
                            className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200"
                          >
                            {chapter.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 mb-2">資料來源</p>
                <div className="flex flex-wrap gap-2">
                  {focus.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-blue-700 hover:text-blue-900 underline underline-offset-2"
                    >
                      {source.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-5">下一步可加的高價值功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {optimizationIdeas.map((idea) => (
            <div key={idea.title} className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="font-semibold text-slate-900">{idea.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
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
      <p className="text-xs font-semibold text-slate-500 mb-1">{label}</p>
      <p className="text-sm text-slate-700 leading-6">{value}</p>
    </div>
  );
}

function MiniPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg bg-slate-50 border border-slate-100 p-3">
      <p className="text-xs font-semibold text-slate-500 mb-2">{title}</p>
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
