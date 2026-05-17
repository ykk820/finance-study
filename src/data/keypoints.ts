export interface KeyPoint {
  title: string;
  content: string;
  type: "formula" | "concept" | "tip";
}

export const keypoints: Record<string, KeyPoint[]> = {
  "cfa1-ethics": [
    { type: "concept", title: "利益優先順序", content: "客戶 > 雇主 > 自身" },
    { type: "concept", title: "七大行為準則", content: "專業性、市場完整性、客戶責任、雇主責任、投資分析、利益衝突、會員責任" },
    { type: "tip", title: "內線交易", content: "禁止利用重大非公開資訊（Material Nonpublic Information）進行交易" },
    { type: "concept", title: "GIPS", content: "全球投資績效標準，確保績效呈現的公平性與可比較性" },
  ],
  "cfa1-quant": [
    { type: "formula", title: "未來值", content: "FV = PV × (1 + r)^n" },
    { type: "formula", title: "現值", content: "PV = FV / (1 + r)^n" },
    { type: "formula", title: "年金終值", content: "FV = PMT × [(1+r)^n - 1] / r" },
    { type: "formula", title: "永續年金", content: "PV = PMT / r" },
    { type: "tip", title: "z 值速記", content: "90% → 1.28 | 95% → 1.65(單尾) / 1.96(雙尾) | 99% → 2.33" },
    { type: "formula", title: "R² 判定係數", content: "自變數能解釋因變數變異的比例" },
    { type: "concept", title: "偏態", content: "負偏態：左尾長，Mean < Median < Mode；正偏態：右尾長，Mode < Median < Mean" },
  ],
  "cfa1-economics": [
    { type: "formula", title: "GDP 支出法", content: "GDP = C + I + G + (X - M)" },
    { type: "concept", title: "景氣循環", content: "擴張 → 高峰 → 收縮 → 谷底" },
    { type: "concept", title: "緊縮貨幣政策", content: "升息、賣出債券、提高準備率 → 減少貨幣供給" },
    { type: "concept", title: "購買力平價 PPP", content: "匯率應反映兩國物價水準比率" },
    { type: "concept", title: "利率平價 IRP", content: "遠期匯率由兩國利率差異決定" },
  ],
  "cfa1-fra": [
    { type: "concept", title: "IFRS vs US GAAP", content: "IFRS 禁止 LIFO，US GAAP 允許；IFRS 原則基礎，US GAAP 規則基礎" },
    { type: "formula", title: "自由現金流", content: "FCF = 營業活動現金流 - 資本支出" },
    { type: "concept", title: "會計恆等式", content: "資產 = 負債 + 股東權益" },
    { type: "tip", title: "盈餘品質", content: "高品質盈餘 = 營業現金流接近淨利，持續性高" },
  ],
  "cfa1-corporate": [
    { type: "formula", title: "NPV", content: "NPV = Σ CFt/(1+r)^t - 初始投資，NPV > 0 → 接受" },
    { type: "concept", title: "IRR", content: "使 NPV = 0 的折現率，IRR > 資金成本 → 接受" },
    { type: "concept", title: "MM 理論（有稅）", content: "V_L = V_U + T × D，負債稅盾增加公司價值" },
    { type: "concept", title: "融資順位理論", content: "內部資金 → 舉債 → 發行新股" },
  ],
  "cfa1-equity": [
    { type: "formula", title: "Gordon Growth Model", content: "P₀ = D₁ / (r - g)，前提 r > g" },
    { type: "concept", title: "相對估值法", content: "P/E、P/B、P/S、EV/EBITDA" },
    { type: "concept", title: "Porter 五力", content: "新進入者、替代品、買方議價、供應商議價、現有競爭" },
    { type: "concept", title: "市場效率三形式", content: "弱式（歷史價格）、半強式（公開資訊）、強式（所有資訊）" },
  ],
  "cfa1-fi": [
    { type: "concept", title: "債券價格與利率", content: "反向關係：利率↑ → 價格↓" },
    { type: "formula", title: "Duration 近似", content: "ΔP/P ≈ -D × Δy" },
    { type: "tip", title: "利率風險最高", content: "票面利率低 + 到期日長 → Duration 最長" },
    { type: "concept", title: "殖利率衡量", content: "Current Yield、YTM、YTC" },
  ],
  "cfa1-derivatives": [
    { type: "formula", title: "Put-Call Parity", content: "C + PV(X) = P + S" },
    { type: "formula", title: "期貨定價", content: "F₀ = S₀ × (1 + r)^T" },
    { type: "concept", title: "Greeks", content: "Δ(價格)、Γ(Delta變動)、Θ(時間)、Vega(波動度)、Rho(利率)" },
    { type: "concept", title: "期貨 vs 遠期", content: "期貨：交易所、標準化、每日結算；遠期：OTC、客製化、到期結算" },
  ],
  "cfa1-portfolio": [
    { type: "formula", title: "CAPM", content: "E(Ri) = Rf + βi × [E(Rm) - Rf]" },
    { type: "formula", title: "CML", content: "E(Rp) = Rf + [(E(Rm) - Rf) / σm] × σp" },
    { type: "concept", title: "β = 0", content: "預期報酬 = 無風險利率" },
    { type: "concept", title: "IPS 要素", content: "報酬目標、風險容忍度、時間範圍、流動性、稅務、法規" },
    { type: "tip", title: "分散化", content: "加入低相關資產可降低非系統風險，但無法消除系統風險" },
  ],
  // 高業
  "senior-investment": [
    { type: "formula", title: "CAPM", content: "E(Ri) = Rf + β × [E(Rm) - Rf]" },
    { type: "formula", title: "Sharpe Ratio", content: "Sharpe = (Rp - Rf) / σp（總風險）" },
    { type: "formula", title: "Treynor Ratio", content: "Treynor = (Rp - Rf) / βp（系統風險）" },
    { type: "formula", title: "Jensen's Alpha", content: "α = Rp - [Rf + βp × (Rm - Rf)]" },
    { type: "tip", title: "KD 交叉", content: "K↑穿D = 黃金交叉(買)；K↓穿D = 死亡交叉(賣)" },
  ],
  "senior-financial-analysis": [
    { type: "formula", title: "DuPont", content: "ROE = 淨利率 × 資產周轉率 × 權益乘數" },
    { type: "formula", title: "流動比率", content: "流動資產 / 流動負債（一般 ≥ 2.0）" },
    { type: "formula", title: "利息保障倍數", content: "EBIT / 利息費用" },
    { type: "concept", title: "四大比率類別", content: "獲利能力、償債能力、經營效率、市場價值" },
  ],
  "senior-regulation": [
    { type: "concept", title: "證券商三類", content: "經紀商、自營商、承銷商" },
    { type: "concept", title: "獨立董事", content: "監督公司治理，保護小股東權益" },
    { type: "concept", title: "KYC", content: "適合度原則，了解客戶風險承受度" },
  ],
  "senior-derivatives": [
    { type: "concept", title: "保護性賣權", content: "持有股票 + 買入賣權 = 限制下檔風險" },
    { type: "concept", title: "掩護性買權", content: "持有股票 + 賣出買權 = 賺取權利金" },
    { type: "concept", title: "正價差 Contango", content: "期貨價 > 現貨價（反映持有成本）" },
    { type: "concept", title: "逆價差 Backwardation", content: "期貨價 < 現貨價" },
  ],
  // 初業
  "junior-regulation": [
    { type: "tip", title: "漲跌幅限制", content: "台股 ±10%" },
    { type: "concept", title: "內部人", content: "持股 > 10% 需申報" },
    { type: "concept", title: "歸入權", content: "內部人 6 個月內反向交易利益歸公司" },
    { type: "concept", title: "全權委託", content: "由投信/投顧辦理" },
  ],
  "junior-practice": [
    { type: "formula", title: "本益比", content: "P/E = 市價 / EPS" },
    { type: "concept", title: "ETF vs 共同基金", content: "ETF 交易所即時買賣；共同基金按淨值申購贖回" },
    { type: "concept", title: "殖利率曲線", content: "正斜率(正常)：長期利率 > 短期利率；倒掛：可能預示衰退" },
    { type: "concept", title: "Duration", content: "衡量利率敏感度，Duration 越長 → 價格波動越大" },
  ],
  "junior-account": [
    { type: "tip", title: "交割制度", content: "T+2，交易日後第二個營業日" },
    { type: "tip", title: "融資維持率", content: "< 130% 追繳，否則斷頭" },
    { type: "concept", title: "委託種類", content: "限價委託（指定價格）、市價委託（不限價）" },
    { type: "concept", title: "成交原則", content: "價格優先 → 時間優先" },
  ],
  "junior-tax": [
    { type: "tip", title: "證交稅", content: "股票 0.3%（賣方）、ETF 0.1%" },
    { type: "concept", title: "股利課稅", content: "合併計稅（可抵減 8.5%，上限 8 萬）或分開計稅（28%）" },
    { type: "tip", title: "最低稅負制", content: "基本所得額 > 750 萬，稅率 20%；海外所得 > 100 萬需申報" },
  ],
  // FRM
  "frm-foundations": [
    { type: "concept", title: "三道防線", content: "1.業務單位 2.風險管理部門 3.內部稽核" },
    { type: "concept", title: "風險類型", content: "市場風險、信用風險、操作風險、流動性風險" },
    { type: "tip", title: "LTCM 教訓", content: "過度槓桿 + 流動性枯竭 + 危機中相關性上升" },
  ],
  "frm-market-risk": [
    { type: "formula", title: "參數法 VaR", content: "VaR = μ - zα × σ" },
    { type: "formula", title: "VaR 時間轉換", content: "VaR_T = VaR_1 × √T" },
    { type: "concept", title: "三種 VaR 方法", content: "歷史模擬法（無分配假設）、變異數-共變異數法、蒙地卡羅" },
    { type: "concept", title: "ES vs VaR", content: "ES 衡量超過 VaR 的平均損失，具次可加性" },
  ],
  "frm-credit-risk": [
    { type: "formula", title: "預期損失", content: "EL = PD × LGD × EAD" },
    { type: "concept", title: "投資等級門檻", content: "S&P: BBB- 以上；Moody's: Baa3 以上" },
    { type: "concept", title: "Merton 模型", content: "股權 = 公司資產的買權，履約價 = 負債面額" },
  ],
  "frm-operational-risk": [
    { type: "formula", title: "BIA 資本", content: "前三年平均營業毛利 × 15%" },
    { type: "concept", title: "七大損失事件", content: "內部詐欺、外部詐欺、聘僱實務、客戶產品、實體資產、系統失效、執行交割" },
    { type: "concept", title: "管理工具", content: "RCSA、KRI、損失資料收集、BCP" },
  ],
  "frm-liquidity-risk": [
    { type: "formula", title: "LCR", content: "HQLA / 30天淨現金流出 ≥ 100%" },
    { type: "formula", title: "NSFR", content: "可用穩定資金 / 所需穩定資金 ≥ 100%" },
    { type: "concept", title: "兩種流動性風險", content: "資金流動性（借不到錢）、市場流動性（賣不掉資產）" },
  ],
};
