import Link from "next/link";

const protections = [
  "Cloudflare Workers 邊緣部署與 HTTPS",
  "DDoS 與基礎惡意流量防護由 Cloudflare 提供",
  "Content Security Policy、Frame 防護、MIME sniffing 防護",
  "不在前端儲存密碼；學習者資料只存在本機瀏覽器",
  "目前沒有後端資料庫，因此不保存敏感個資或雲端帳號密碼",
];

const limits = [
  "localStorage 學習資料清除瀏覽器後會消失，且不會跨裝置同步",
  "靜態講義與題庫會被包在前端，不能當成付費內容保護機制",
  "若未來加入正式會員、付費題庫或後台，必須接後端 Auth 與資料庫權限",
  "Cloudflare workers.dev 網址沒有自訂網域層級 WAF 規則；綁定自訂網域後可加強 WAF/Bot 規則",
];

export default function SecurityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">Security</p>
        <h1 className="text-3xl font-bold text-slate-900">安全與資料保護說明</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          FinanceStudy 目前是公開學習網站，部署在 Cloudflare Workers。網站不收正式密碼，
          學習紀錄、畫重點、錯題與本機學習者設定都保存在你的瀏覽器。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">已啟用的防護</h2>
          <ul className="space-y-3 text-sm leading-6 text-emerald-900">
            {protections.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-semibold text-amber-900 mb-4">目前限制</h2>
          <ul className="space-y-3 text-sm leading-6 text-amber-900">
            {limits.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-3">未來正式商業化建議</h2>
        <p className="leading-7 text-slate-600">
          如果要做會員、付費內容、後台管理或跨裝置同步，下一步應接 Supabase Auth / Clerk
          這類正式登入服務，題庫內容改由後端依權限提供，並在 Cloudflare 自訂網域上設定 WAF、
          Bot Fight Mode、Rate Limiting 和監控告警。
        </p>
        <Link
          href="/"
          className="mt-5 inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          回首頁
        </Link>
      </section>
    </div>
  );
}
