import Link from "next/link";
import { GlossaryTerm, categoryLabels } from "@/data/glossary";

export default function PlainLanguageTerms({
  terms,
  compact = false,
}: {
  terms: GlossaryTerm[];
  compact?: boolean;
}) {
  if (terms.length === 0) return null;

  return (
    <section className={compact ? "" : "mt-12 border-t pt-8"}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-emerald-600">Plain Language</p>
          <h2 className="text-xl font-bold text-slate-900">白話文名詞解釋</h2>
        </div>
        {!compact && (
          <Link href="/plain-language" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
            看完整詞庫 →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {terms.map((term) => (
          <article key={term.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                {categoryLabels[term.category]}
              </span>
              <h3 className="font-semibold text-slate-950">{term.term}</h3>
            </div>
            <p className="text-sm leading-6 text-slate-700">{term.plain}</p>
            <div className="mt-3 rounded-lg bg-blue-50 p-3 text-sm leading-6 text-blue-800">
              <span className="font-semibold">比喻：</span>
              {term.analogy}
            </div>
            {!compact && (
              <div className="mt-3 rounded-lg bg-amber-50 p-3 text-sm leading-6 text-amber-800">
                <span className="font-semibold">考試小心：</span>
                {term.commonTrap}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
