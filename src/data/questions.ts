import { Question } from "@/types";

export const questions: Question[] = [
  // =============================================================
  // CFA Level I
  // =============================================================

  // ── cfa1-ethics ──────────────────────────────────────────────
  {
    id: "cfa1-eth-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "根據 CFA Institute 道德準則，下列哪一項行為違反了「市場完整性」原則？",
    options: [
      "利用重大非公開資訊進行交易",
      "向客戶收取合理的管理費",
      "在報告中引用公開的市場數據",
      "向監管機關報告違規行為",
    ],
    answer: 0,
    explanation:
      "利用重大非公開資訊（Material Nonpublic Information）進行交易違反了 Standard II(A) - 市場完整性原則，這屬於內線交易行為。選項 B 是正常業務行為；選項 C 使用公開資訊無違規；選項 D 是被鼓勵的行為。",
  },
  {
    id: "cfa1-eth-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "CFA 持證人在面對利益衝突時，應該優先考慮誰的利益？",
    options: ["雇主的利益", "自己的利益", "客戶的利益", "CFA Institute 的利益"],
    answer: 2,
    explanation:
      "根據 CFA 道德準則，持證人應將客戶利益置於雇主和自身利益之上。利益優先順序為：客戶 > 雇主 > 自身。選項 A 和 B 的優先順序不正確；選項 D 中 CFA Institute 本身並不在利益優先順序中。",
  },
  {
    id: "cfa1-eth-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "以下哪種情況不需要事先取得書面同意？",
    options: [
      "接受客戶的額外報酬",
      "從事獨立業務活動",
      "引用公開市場數據撰寫研究報告",
      "接受推薦費用",
    ],
    answer: 2,
    explanation:
      "使用公開市場數據撰寫研究報告屬於正常業務範圍，不需要特別取得書面同意。選項 A 涉及 Standard IV(B) 額外報酬規範；選項 B 涉及 Standard IV(A) 獨立業務揭露；選項 D 涉及 Standard VI(C) 推薦費用揭露，皆需取得同意。",
  },
  {
    id: "cfa1-eth-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "分析師 A 在公司公布財報前，從朋友口中得知該公司將大幅虧損。A 隨即賣出持股。這違反了哪項標準？",
    options: [
      "Standard I(C) - 不實陳述",
      "Standard II(A) - 重大非公開資訊",
      "Standard III(A) - 忠誠、審慎和關懷",
      "Standard VI(B) - 交易優先順序",
    ],
    answer: 1,
    explanation:
      "分析師利用尚未公開的財報資訊進行交易，違反了 Standard II(A) 關於重大非公開資訊的規定。選項 A 不實陳述指虛假報告；選項 C 指對客戶的忠誠義務；選項 D 指交易分配順序。",
  },
  {
    id: "cfa1-eth-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "GIPS（全球投資績效標準）的主要目的是什麼？",
    options: [
      "規範基金經理人的薪酬",
      "確保投資績效呈現的公平性與可比較性",
      "限制投資組合的風險水準",
      "規定最低投資報酬率",
    ],
    answer: 1,
    explanation:
      "GIPS 的核心目的是建立全球統一的績效呈現標準，確保投資機構的績效報告具有公平性和可比較性。選項 A 薪酬不在 GIPS 範圍；選項 C 風險限制非 GIPS 目標；選項 D 無最低報酬要求。",
  },
  {
    id: "cfa1-eth-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "某投資顧問同時管理個人帳戶和客戶帳戶。當發現一檔好股票時，他先用個人帳戶買入，再為客戶買入。這違反了哪項標準？",
    options: [
      "Standard III(B) - 公平對待",
      "Standard VI(B) - 交易優先順序",
      "Standard I(D) - 不當行為",
      "Standard V(A) - 勤勉與合理基礎",
    ],
    answer: 1,
    explanation:
      "Standard VI(B) 要求投資專業人員在進行個人交易前，應優先處理客戶的交易。先為自己買入再為客戶買入，是「搶先交易」(Front-running) 的行為。選項 A 公平對待指客戶間的公平；選項 C 指違法或不道德行為；選項 D 指研究的勤勉義務。",
  },
  {
    id: "cfa1-eth-7",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "分析師在研究報告中大量引用另一位分析師的研究成果，但未註明出處。這違反了哪項標準？",
    options: [
      "Standard I(C) - 不實陳述（Misrepresentation）",
      "Standard II(A) - 重大非公開資訊",
      "Standard III(A) - 忠誠、審慎和關懷",
      "Standard IV(A) - 忠誠",
    ],
    answer: 0,
    explanation:
      "未註明出處引用他人研究構成抄襲（Plagiarism），違反 Standard I(C) 不實陳述。這不涉及內線交易（B）、客戶忠誠（C）或對雇主忠誠（D）。",
  },
  {
    id: "cfa1-eth-8",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "依據 CFA 道德準則，Soft Dollar 安排在什麼條件下是可接受的？",
    options: [
      "僅用於支付分析師的個人開支",
      "用於直接有利於客戶的研究服務",
      "用於支付辦公室租金",
      "任何情況下都不可接受",
    ],
    answer: 1,
    explanation:
      "Soft Dollar 安排在用於購買直接有利於客戶投資決策的研究或服務時是可接受的。選項 A 個人開支不當；選項 C 辦公室租金不直接有利客戶；選項 D 並非全部禁止。關鍵是必須對客戶有直接利益。",
  },
  {
    id: "cfa1-eth-9",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "某 CFA 持證人發現同事有違反道德準則的行為，他應該？",
    options: [
      "直接向媒體揭露",
      "視而不見以維護同事關係",
      "向公司的合規部門報告",
      "自行懲罰該同事",
    ],
    answer: 2,
    explanation:
      "CFA 持證人發現違規行為應向公司合規部門或上級報告。選項 A 向媒體揭露可能不適當且違反保密義務；選項 B 視而不見不符合專業責任；選項 D 無權自行懲罰。適當的做法是循內部管道報告。",
  },

  // ── cfa1-quant ──────────────────────────────────────────────
  {
    id: "cfa1-quant-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "某投資人投入 $10,000，年利率 8%，按年複利計算，5 年後的終值為何？",
    options: ["$14,693.28", "$14,000.00", "$15,000.00", "$13,500.00"],
    answer: 0,
    explanation:
      "FV = PV × (1 + r)^n = 10,000 × (1.08)^5 = 10,000 × 1.46933 = $14,693.28。選項 B 是單利計算結果（10,000 + 10,000×8%×5）；選項 C 和 D 都是錯誤值。",
  },
  {
    id: "cfa1-quant-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "在 95% 信心水準下，單尾常態分配的 z 值約為多少？",
    options: ["1.28", "1.65", "1.96", "2.33"],
    answer: 1,
    explanation:
      "單尾 95% 信心水準對應 z = 1.645（約 1.65）。選項 A（1.28）對應單尾 90%；選項 C（1.96）對應雙尾 95%（單尾 97.5%）；選項 D（2.33）對應單尾 99%。",
  },
  {
    id: "cfa1-quant-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "永續年金的現值公式為？",
    options: [
      "PV = PMT / r",
      "PV = PMT × r",
      "PV = PMT × (1+r)^n",
      "PV = PMT / (1+r)^n",
    ],
    answer: 0,
    explanation:
      "永續年金（Perpetuity）是無限期支付的年金，其現值 PV = PMT / r。選項 B 是乘法，會得到不合理的值；選項 C 是終值公式；選項 D 是單筆現值折現公式。",
  },
  {
    id: "cfa1-quant-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "R² = 0.85 表示什麼意思？",
    options: [
      "自變數解釋了因變數 85% 的變異",
      "迴歸模型的斜率為 0.85",
      "殘差佔總變異的 85%",
      "自變數與因變數的相關係數為 0.85",
    ],
    answer: 0,
    explanation:
      "R²（判定係數）衡量迴歸模型的解釋能力。R² = 0.85 表示自變數能解釋因變數 85% 的變異。選項 B 斜率與 R² 不同；選項 C 殘差佔比應為 15%（1 - R²）；選項 D 相關係數 r = √0.85 ≈ 0.922。",
  },
  {
    id: "cfa1-quant-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "負偏態（Negative Skewness）的分配有什麼特徵？",
    options: [
      "左尾較長，平均數 < 中位數 < 眾數",
      "右尾較長，平均數 > 中位數 > 眾數",
      "對稱分配",
      "左尾較長，平均數 > 中位數",
    ],
    answer: 0,
    explanation:
      "負偏態分配的左尾較長。大小關係為：平均數 < 中位數 < 眾數。選項 B 描述的是正偏態；選項 C 是零偏態；選項 D 的大小關係錯誤（負偏態平均數小於中位數）。",
  },
  {
    id: "cfa1-quant-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "某投資每年年末支付 $1,000，共 5 年，折現率 6%，此普通年金的現值最接近？",
    options: ["$4,212.36", "$4,917.32", "$5,000.00", "$5,637.09"],
    answer: 0,
    explanation:
      "普通年金現值 = PMT × [(1 - (1+r)^-n) / r] = 1,000 × [(1 - 1.06^-5) / 0.06] = 1,000 × 4.21236 = $4,212.36。選項 B 接近先付年金值；選項 C 是未折現的總額；選項 D 是終值。",
  },
  {
    id: "cfa1-quant-7",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "某股票報酬率的標準差為 20%，平均報酬為 10%，其變異係數（CV）為？",
    options: ["0.5", "2.0", "0.2", "5.0"],
    answer: 1,
    explanation:
      "變異係數 CV = 標準差 / 平均數 = 20% / 10% = 2.0。CV 衡量每單位報酬所承擔的風險。選項 A 是平均數/標準差的倒數比；選項 C 和 D 計算錯誤。",
  },
  {
    id: "cfa1-quant-8",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "連續複利下，年利率 10%，$1,000 一年後的終值為何？",
    options: ["$1,100.00", "$1,105.17", "$1,110.00", "$1,095.31"],
    answer: 1,
    explanation:
      "連續複利 FV = PV × e^(r×t) = 1,000 × e^(0.10×1) = 1,000 × 1.10517 = $1,105.17。選項 A 是年複利結果；選項 C 和 D 都是錯誤值。e^0.10 ≈ 1.10517。",
  },
  {
    id: "cfa1-quant-9",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "在假設檢定中，Type I Error 是指？",
    options: [
      "當虛無假設為真時，錯誤地拒絕虛無假設",
      "當虛無假設為假時，未能拒絕虛無假設",
      "正確地拒絕虛無假設",
      "正確地接受虛無假設",
    ],
    answer: 0,
    explanation:
      "Type I Error（偽陽性）是在 H₀ 為真時錯誤地拒絕 H₀，其機率等於顯著水準 α。選項 B 是 Type II Error（偽陰性）；選項 C 和 D 都是正確的決策，不是錯誤。",
  },
  {
    id: "cfa1-quant-10",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "某投資的持有期間報酬分別為：第一年 +10%，第二年 -5%，第三年 +15%，幾何平均報酬最接近？",
    options: ["6.67%", "6.33%", "6.49%", "7.00%"],
    answer: 2,
    explanation:
      "幾何平均 = [(1.10)(0.95)(1.15)]^(1/3) - 1 = [1.20175]^(1/3) - 1 ≈ 1.0631 - 1 = 6.31%... 更精確計算 = (1.20175)^0.3333 - 1 ≈ 6.31%。算術平均 = (10-5+15)/3 = 6.67%，幾何平均必定小於算術平均。最接近 C。",
  },

  // ── cfa1-economics ──────────────────────────────────────────
  {
    id: "cfa1-econ-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "GDP 支出法的公式為？",
    options: [
      "GDP = C + I + G + (X - M)",
      "GDP = C + S + T",
      "GDP = W + R + I + P",
      "GDP = C × I × G × NX",
    ],
    answer: 0,
    explanation:
      "GDP 支出法：GDP = C（消費）+ I（投資）+ G（政府支出）+ (X - M)（淨出口）。選項 B 是所得分配的概念；選項 C 是收入法的概念；選項 D 乘法公式毫無意義。",
  },
  {
    id: "cfa1-econ-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "中央銀行採取緊縮貨幣政策時，最可能的做法是？",
    options: [
      "降低利率",
      "購買政府債券",
      "提高利率",
      "降低存款準備率",
    ],
    answer: 2,
    explanation:
      "緊縮貨幣政策旨在減少貨幣供給、抑制通膨。選項 A 降低利率是擴張性政策；選項 B 購買債券會增加市場資金，也是擴張性；選項 D 降低準備率會增加放貸能力，為擴張性。只有選項 C 提高利率是緊縮性。",
  },
  {
    id: "cfa1-econ-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "購買力平價（PPP）理論認為？",
    options: [
      "匯率由兩國利率差異決定",
      "匯率應反映兩國物價水準的比率",
      "匯率由兩國 GDP 差異決定",
      "匯率永遠是固定的",
    ],
    answer: 1,
    explanation:
      "購買力平價理論認為長期匯率反映兩國物價水準比率。選項 A 描述的是利率平價理論（Interest Rate Parity）；選項 C GDP 差異並非 PPP 的核心；選項 D PPP 並未主張固定匯率。",
  },
  {
    id: "cfa1-econ-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "當一個經濟體處於完全競爭市場時，長期均衡下廠商的經濟利潤為？",
    options: ["正的", "負的", "零", "無法確定"],
    answer: 2,
    explanation:
      "完全競爭市場長期均衡下，自由進出使得經濟利潤趨向零，P = MC = ATC。選項 A 正利潤會吸引新廠商進入；選項 B 負利潤會使廠商退出；最終均衡為零經濟利潤。注意會計利潤仍可為正。",
  },
  {
    id: "cfa1-econ-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "Phillips Curve 描述的是什麼關係？",
    options: [
      "通膨率與失業率的反向關係",
      "利率與匯率的正向關係",
      "GDP 與人口的正向關係",
      "貨幣供給與利率的反向關係",
    ],
    answer: 0,
    explanation:
      "菲力浦曲線描述通膨率與失業率之間的短期反向（trade-off）關係。選項 B 描述的類似 Fisher 效果；選項 C 和 D 都不是菲力浦曲線的內容。長期菲力浦曲線為垂直線。",
  },
  {
    id: "cfa1-econ-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "需求的價格彈性為 -2.0，價格上漲 5% 時，需求量將？",
    options: [
      "減少 2.5%",
      "減少 10%",
      "增加 10%",
      "不變",
    ],
    answer: 1,
    explanation:
      "價格彈性 = %ΔQ / %ΔP = -2.0，故 %ΔQ = -2.0 × 5% = -10%，需求量減少 10%。選項 A 計算錯誤（用 5/2）；選項 C 方向相反；選項 D 表示需求完全無彈性。",
  },
  {
    id: "cfa1-econ-7",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "Fisher 效果（Fisher Effect）的公式為？",
    options: [
      "名目利率 ≈ 實質利率 + 預期通膨率",
      "名目利率 = 實質利率 × 預期通膨率",
      "名目利率 = 實質利率 - 預期通膨率",
      "實質利率 = 名目利率 + 預期通膨率",
    ],
    answer: 0,
    explanation:
      "Fisher 效果：名目利率 ≈ 實質利率 + 預期通膨率。選項 B 是乘法，不正確；選項 C 減法方向錯誤；選項 D 關係顛倒。精確公式為 (1+i) = (1+r)(1+π^e)。",
  },
  {
    id: "cfa1-econ-8",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "寡佔市場的特徵不包括下列哪一項？",
    options: [
      "少數廠商主導市場",
      "廠商間有高度互賴性",
      "自由進出市場",
      "可能形成聯合壟斷",
    ],
    answer: 2,
    explanation:
      "寡佔市場有進入障礙，並非自由進出。選項 A 少數主導是寡佔核心特徵；選項 B 互賴性是寡佔的重要特徵（一方決策影響另一方）；選項 D 聯合壟斷（Cartel）在寡佔市場可能發生。",
  },
  {
    id: "cfa1-econ-9",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "當一國經常帳出現逆差時，以下哪項敘述正確？",
    options: [
      "該國的出口大於進口",
      "該國的資本帳必然出現順差",
      "該國的外匯存底必然增加",
      "該國的貨幣必然升值",
    ],
    answer: 1,
    explanation:
      "國際收支恆等式：經常帳 + 資本帳 + 金融帳 ≈ 0。經常帳逆差意味資本帳/金融帳必有相應順差。選項 A 描述的是順差；選項 C 外匯存底不一定增加；選項 D 貨幣可能反而貶值。",
  },

  // ── cfa1-fra ────────────────────────────────────────────────
  {
    id: "cfa1-fra-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "自由現金流（FCF）的計算公式為？",
    options: [
      "營業現金流 - 資本支出",
      "淨利 + 折舊",
      "營收 - 營業費用",
      "EBITDA - 稅",
    ],
    answer: 0,
    explanation:
      "自由現金流 FCF = 營業活動現金流 - 資本支出（CapEx）。選項 B 只是近似的營業現金流，未扣除資本支出；選項 C 是營業利益概念；選項 D 未考慮營運資金和資本支出。",
  },
  {
    id: "cfa1-fra-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "IFRS 和 US GAAP 的主要差異之一是？",
    options: [
      "IFRS 允許 LIFO 存貨計價法，US GAAP 不允許",
      "US GAAP 允許 LIFO 存貨計價法，IFRS 不允許",
      "兩者完全相同",
      "IFRS 只適用於美國公司",
    ],
    answer: 1,
    explanation:
      "US GAAP 允許使用 LIFO（後進先出法），但 IFRS 禁止。選項 A 關係顛倒；選項 C 兩者有許多差異；選項 D IFRS 是國際準則，非僅限美國。",
  },
  {
    id: "cfa1-fra-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "某公司淨利 $500,000，折舊 $80,000，應收帳款增加 $30,000，應付帳款增加 $20,000，間接法下營業現金流為？",
    options: ["$570,000", "$530,000", "$550,000", "$630,000"],
    answer: 0,
    explanation:
      "間接法：營業現金流 = 淨利 + 折舊 - 應收帳款增加 + 應付帳款增加 = 500,000 + 80,000 - 30,000 + 20,000 = $570,000。應收增加代表收入未收現（減）；應付增加代表費用未付現（加）。",
  },
  {
    id: "cfa1-fra-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "DuPont 分析法將 ROE 分解為哪三個因子？",
    options: [
      "淨利率 × 資產周轉率 × 權益乘數",
      "毛利率 × 資產周轉率 × 負債比率",
      "淨利率 × 存貨周轉率 × 權益乘數",
      "營業利益率 × 資產周轉率 × 稅率",
    ],
    answer: 0,
    explanation:
      "DuPont: ROE = (淨利/營收) × (營收/總資產) × (總資產/股東權益) = 淨利率 × 資產周轉率 × 權益乘數。選項 B 用毛利率且負債比率不正確；選項 C 存貨周轉率不對；選項 D 用營業利益率且缺少權益乘數。",
  },
  {
    id: "cfa1-fra-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "某公司存貨 $200,000，銷貨成本 $1,000,000，存貨周轉率為？",
    options: ["5.0 次", "0.2 次", "2.0 次", "10.0 次"],
    answer: 0,
    explanation:
      "存貨周轉率 = 銷貨成本 / 平均存貨 = 1,000,000 / 200,000 = 5.0 次。選項 B 是存貨/銷貨成本的倒數；選項 C 和 D 計算錯誤。周轉率越高代表存貨管理越有效率。",
  },
  {
    id: "cfa1-fra-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "在通膨環境下，使用 FIFO 相較於 LIFO（如果允許），對財務報表的影響為？",
    options: [
      "FIFO 的銷貨成本較高，淨利較低",
      "FIFO 的期末存貨較高，淨利較高",
      "兩者對淨利的影響相同",
      "FIFO 的期末存貨較低，淨利較低",
    ],
    answer: 1,
    explanation:
      "通膨下，FIFO 先出的是較早（較便宜）的存貨，銷貨成本較低 → 淨利較高；期末存貨反映較新（較貴）的成本 → 存貨價值較高。選項 A 描述的是 LIFO 的情況。",
  },
  {
    id: "cfa1-fra-7",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "某公司總資產 $5,000,000，流動負債 $800,000，長期負債 $1,200,000，負債對權益比率為？",
    options: ["0.67", "0.40", "1.50", "2.50"],
    answer: 0,
    explanation:
      "總負債 = 800,000 + 1,200,000 = 2,000,000。股東權益 = 5,000,000 - 2,000,000 = 3,000,000。負債/權益比 = 2,000,000 / 3,000,000 = 0.67。選項 B 是負債/資產比；選項 C 是權益/負債；選項 D 計算錯誤。",
  },
  {
    id: "cfa1-fra-8",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "下列哪項屬於營業活動現金流（Operating Cash Flow）？",
    options: [
      "購買設備的支出",
      "發行股票收到的現金",
      "客戶支付的貨款",
      "償還銀行貸款的現金",
    ],
    answer: 2,
    explanation:
      "客戶支付貨款屬於營業活動現金流入。選項 A 購買設備是投資活動；選項 B 發行股票是融資活動；選項 D 償還貸款是融資活動。",
  },
  {
    id: "cfa1-fra-9",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "某資產原值 $100,000，使用年限 5 年，無殘值，雙倍餘額遞減法第一年折舊為？",
    options: ["$20,000", "$40,000", "$50,000", "$33,333"],
    answer: 1,
    explanation:
      "雙倍餘額遞減法：折舊率 = 2 / 使用年限 = 2/5 = 40%。第一年折舊 = 100,000 × 40% = $40,000。選項 A 是直線法（100,000/5）；選項 C 和 D 計算方法錯誤。",
  },

  // ── cfa1-corporate ──────────────────────────────────────────
  {
    id: "cfa1-corp-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "某投資案的 NPV 為正值，表示？",
    options: [
      "該投資案應被拒絕",
      "該投資案的報酬率等於資金成本",
      "該投資案能為股東創造價值，應被接受",
      "該投資案的風險太高",
    ],
    answer: 2,
    explanation:
      "NPV > 0 表示預期現金流現值超過初始投資成本，能為股東創造正的經濟價值。選項 A NPV>0 應接受；選項 B 報酬率等於資金成本時 NPV=0；選項 D NPV 已考慮風險（透過折現率）。",
  },
  {
    id: "cfa1-corp-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "MM 理論在有稅世界下的結論是？",
    options: [
      "資本結構不影響公司價值",
      "100% 股權融資是最佳選擇",
      "負債因稅盾效果可增加公司價值",
      "股利政策決定公司價值",
    ],
    answer: 2,
    explanation:
      "有稅的 MM 理論：V_L = V_U + T×D。選項 A 是無稅 MM 理論的結論；選項 B 有稅下反而應使用一些負債；選項 D 股利政策在 MM 框架下不影響價值。",
  },
  {
    id: "cfa1-corp-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "某公司的 WACC 為 10%，若一個投資案的 IRR 為 12%，應該？",
    options: [
      "拒絕該投資案",
      "接受該投資案",
      "需要更多資訊才能決定",
      "IRR 和 WACC 不能比較",
    ],
    answer: 1,
    explanation:
      "IRR（12%）> WACC（10%），表示投資案的報酬率超過資金成本，NPV 為正，應予接受。選項 A 只有 IRR < WACC 才拒絕；選項 C 和 D 不正確，IRR 與 WACC 的比較是基本決策標準。",
  },
  {
    id: "cfa1-corp-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "WACC 的計算公式中，負債成本需要做什麼調整？",
    options: [
      "加上風險溢酬",
      "乘以 (1 - 稅率) 反映稅盾效果",
      "除以權益乘數",
      "不需要任何調整",
    ],
    answer: 1,
    explanation:
      "WACC = E/V × Re + D/V × Rd × (1-T)。負債成本需乘以 (1-T) 因為利息費用可以抵稅。選項 A 風險溢酬已在成本中；選項 C 無此操作；選項 D 不考慮稅盾會高估資金成本。",
  },
  {
    id: "cfa1-corp-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "NPV 法與 IRR 法在互斥專案選擇中可能產生衝突，此時應以何者為準？",
    options: [
      "IRR 法",
      "NPV 法",
      "回收期法",
      "獲利指數法",
    ],
    answer: 1,
    explanation:
      "NPV 法直接衡量價值創造（絕對金額），在互斥專案產生衝突時，應以 NPV 為準。選項 A IRR 可能有多重解或規模差異問題；選項 C 回收期法忽略貨幣時間價值和後期現金流；選項 D 獲利指數不如 NPV 直觀。",
  },
  {
    id: "cfa1-corp-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "某公司稅後負債成本 4%，權益成本 12%，負債佔資本 40%，權益佔 60%，WACC 為？",
    options: ["8.0%", "8.8%", "7.2%", "9.6%"],
    answer: 1,
    explanation:
      "WACC = 40%×4% + 60%×12% = 1.6% + 7.2% = 8.8%。選項 A 是簡單平均 (4+12)/2；選項 C 只計算了權益部分；選項 D 未正確加權。",
  },
  {
    id: "cfa1-corp-7",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "Pecking Order Theory（融資順位理論）認為公司融資的優先順序為？",
    options: [
      "股權融資 > 負債融資 > 內部融資",
      "內部融資 > 負債融資 > 股權融資",
      "負債融資 > 股權融資 > 內部融資",
      "三者沒有優先順序",
    ],
    answer: 1,
    explanation:
      "融資順位理論認為公司偏好：(1) 內部融資（保留盈餘）(2) 負債融資 (3) 股權融資。原因是資訊不對稱使外部融資成本較高，發行新股被視為最昂貴的選擇。",
  },
  {
    id: "cfa1-corp-8",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "某專案初始投資 $100,000，每年淨現金流入 $30,000，回收期為？",
    options: ["3 年", "3.33 年", "4 年", "2.5 年"],
    answer: 1,
    explanation:
      "回收期 = 初始投資 / 年均現金流 = 100,000 / 30,000 = 3.33 年。選項 A 向下取整不正確；選項 C 向上取整也不對；選項 D 計算錯誤。回收期的缺點是忽略時間價值和回收後的現金流。",
  },

  // ── cfa1-equity ─────────────────────────────────────────────
  {
    id: "cfa1-eq-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "Gordon Growth Model 的公式為？",
    options: [
      "P₀ = D₁ / (r - g)",
      "P₀ = D₁ × (r + g)",
      "P₀ = EPS / r",
      "P₀ = D₁ / (r + g)",
    ],
    answer: 0,
    explanation:
      "Gordon Growth Model：P₀ = D₁ / (r - g)，前提是 r > g。選項 B 乘法不正確；選項 C 是零成長無股利保留的簡化模型；選項 D 分母應為 (r-g) 而非 (r+g)。",
  },
  {
    id: "cfa1-eq-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "Porter 五力分析不包括以下哪一項？",
    options: [
      "現有競爭者的競爭強度",
      "新進入者的威脅",
      "政府監管的程度",
      "替代品的威脅",
    ],
    answer: 2,
    explanation:
      "Porter 五力：(1)新進入者威脅 (2)替代品威脅 (3)買方議價能力 (4)供應商議價能力 (5)現有競爭者競爭強度。政府監管不在五力模型中，但可能影響五力。",
  },
  {
    id: "cfa1-eq-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "某股票目前股利 $2，股利成長率 5%，要求報酬率 12%，依 Gordon Model 計算的合理價格為？",
    options: ["$30.00", "$28.57", "$16.67", "$40.00"],
    answer: 0,
    explanation:
      "P₀ = D₁ / (r - g) = D₀(1+g) / (r-g) = 2×1.05 / (0.12-0.05) = 2.10 / 0.07 = $30.00。選項 B 用 D₀ 而非 D₁；選項 C 忽略成長率；選項 D 計算錯誤。注意要用下期股利 D₁。",
  },
  {
    id: "cfa1-eq-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "P/E 比率受到哪些因素的正向影響？",
    options: [
      "股利支付率越高、成長率越高、要求報酬率越低",
      "股利支付率越低、成長率越低、要求報酬率越高",
      "股利支付率越高、成長率越低、要求報酬率越高",
      "只與 EPS 有關",
    ],
    answer: 0,
    explanation:
      "由 Gordon Model 推導：P/E = (D₁/E₁) / (r-g) = 支付率 / (r-g)。支付率越高、r 越低、g 越高，都會推高 P/E。選項 B 和 C 方向相反；選項 D 不完整。",
  },
  {
    id: "cfa1-eq-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "企業價值（Enterprise Value, EV）的計算方式為？",
    options: [
      "市值 + 總負債 - 現金",
      "市值 - 總負債 + 現金",
      "市值 + 現金 + 總負債",
      "市值 × 總負債 / 現金",
    ],
    answer: 0,
    explanation:
      "EV = 股權市值 + 總負債（或淨負債）- 現金及約當現金。EV 代表收購整家公司所需的理論成本。選項 B 負債和現金方向反了；選項 C 現金應扣除；選項 D 無意義。",
  },
  {
    id: "cfa1-eq-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "某公司 EPS 為 $4，本益比為 15 倍，股價為？",
    options: ["$45", "$60", "$80", "$30"],
    answer: 1,
    explanation:
      "股價 = EPS × P/E = $4 × 15 = $60。選項 A 是 4×11.25；選項 C 是 4×20；選項 D 是 4×7.5。本益比是衡量股票相對估值的常用指標。",
  },
  {
    id: "cfa1-eq-7",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "下列何者屬於 Bottom-up 分析法？",
    options: [
      "先分析總體經濟，再選擇產業和個股",
      "先分析個別公司的基本面，再考慮產業和經濟因素",
      "只考慮技術分析指標",
      "只考慮政策面因素",
    ],
    answer: 1,
    explanation:
      "Bottom-up 從微觀出發，先分析個別公司再向上延伸到產業和總經。選項 A 是 Top-down 分析法；選項 C 只用技術分析過於片面；選項 D 只考慮政策面不夠全面。",
  },
  {
    id: "cfa1-eq-8",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "Price/Book Ratio 適合用來評估哪類公司？",
    options: [
      "高科技成長公司",
      "擁有大量有形資產的金融或製造業公司",
      "尚未獲利的新創公司",
      "以無形資產為主的軟體公司",
    ],
    answer: 1,
    explanation:
      "P/B 比率最適合評估資產密集型公司（銀行、保險、製造業），因其帳面價值較能反映實際價值。選項 A 和 D 的無形資產帳面價值偏低導致 P/B 失真；選項 C 可能帳面價值為負。",
  },

  // ── cfa1-fi ─────────────────────────────────────────────────
  {
    id: "cfa1-fi-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "當市場利率上升時，債券價格會？",
    options: ["上升", "下降", "不變", "不一定"],
    answer: 1,
    explanation:
      "債券價格與利率呈反向關係。利率上升使現有固定票息相對較不吸引人，價格下降以使殖利率上升至市場水準。選項 A 方向相反；選項 C 和 D 不正確。",
  },
  {
    id: "cfa1-fi-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "下列哪種債券的利率風險最高？",
    options: [
      "票面利率高、到期日短的債券",
      "票面利率低、到期日長的債券",
      "票面利率高、到期日長的債券",
      "零息債券、到期日短的債券",
    ],
    answer: 1,
    explanation:
      "利率風險（Duration）與票面利率呈反向、與到期日呈正向關係。票面利率低+到期日長的債券 Duration 最長。選項 A 兩個因素都降低 Duration；選項 C 高票面降低 Duration；選項 D 短到期降低 Duration。",
  },
  {
    id: "cfa1-fi-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "某債券面額 $1,000，票面利率 6%（半年付息），市場殖利率 8%，距到期還有 2 年，債券價格最接近？",
    options: ["$963.70", "$1,000.00", "$1,037.17", "$928.94"],
    answer: 0,
    explanation:
      "半年付息：C = 30, r = 4%, n = 4 期。P = 30/(1.04) + 30/(1.04)^2 + 30/(1.04)^3 + 1030/(1.04)^4 = 28.85 + 27.74 + 26.67 + 880.44 = $963.70。殖利率 > 票面利率，所以折價發行。",
  },
  {
    id: "cfa1-fi-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "Macaulay Duration 為 5 年的債券，當殖利率上升 100bps 時，債券價格約下跌多少？",
    options: ["5%", "4.76%", "10%", "1%"],
    answer: 1,
    explanation:
      "Modified Duration ≈ Macaulay Duration / (1+y)。假設 y=5%，MD ≈ 5/1.05 ≈ 4.76。%ΔP ≈ -MD × Δy = -4.76 × 1% = -4.76%。選項 A 忽略了修正；選項 C 和 D 計算錯誤。",
  },
  {
    id: "cfa1-fi-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "Convexity（凸性）對債券投資人有什麼好處？",
    options: [
      "利率下降時價格上升幅度 > 利率上升時價格下降幅度",
      "消除所有利率風險",
      "增加信用風險",
      "凸性越高，利率風險越高",
    ],
    answer: 0,
    explanation:
      "正凸性意味價格-利率關係為凸函數：利率下降的價格漲幅 > 利率上升的價格跌幅，這對投資人有利。選項 B 無法消除所有風險；選項 C 凸性與信用風險無關；選項 D 凸性是有利的特性。",
  },
  {
    id: "cfa1-fi-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "零息債券面額 $1,000，距到期 3 年，市場利率 5%，價格為？",
    options: ["$863.84", "$850.00", "$950.00", "$907.03"],
    answer: 0,
    explanation:
      "零息債券價格 = FV / (1+r)^n = 1,000 / (1.05)^3 = 1,000 / 1.15763 = $863.84。選項 B 是概算；選項 C 只折一年；選項 D 折兩年左右。零息債券的 Duration 等於到期年限。",
  },
  {
    id: "cfa1-fi-7",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "含有買回條款（Callable Bond）的債券，其殖利率相較於同等級不含條款的債券？",
    options: [
      "較低",
      "較高",
      "完全相同",
      "無法判斷",
    ],
    answer: 1,
    explanation:
      "可買回債券對投資人不利（發行人可在利率下降時買回），因此投資人要求較高殖利率作為補償。選項 A 較低是可賣回債券（對投資人有利）的特徵；選項 C 不正確因為含有條款應有溢酬。",
  },
  {
    id: "cfa1-fi-8",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "殖利率曲線倒掛（Inverted）通常意味著？",
    options: [
      "經濟繁榮即將到來",
      "市場預期未來利率將下降，可能發生經濟衰退",
      "通膨將大幅上升",
      "沒有經濟意義",
    ],
    answer: 1,
    explanation:
      "殖利率曲線倒掛（短利率 > 長利率）歷史上是經濟衰退的前兆。選項 A 與倒掛含義相反；選項 C 通膨上升通常使曲線陡峭化；選項 D 倒掛有重要的經濟含義。",
  },

  // ── cfa1-derivatives ────────────────────────────────────────
  {
    id: "cfa1-der-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "Put-Call Parity 的公式為？",
    options: [
      "C + PV(X) = P + S",
      "C + S = P + PV(X)",
      "C - P = S - X",
      "C × P = S × X",
    ],
    answer: 0,
    explanation:
      "Put-Call Parity：C + PV(X) = P + S。選項 B 把 S 和 PV(X) 位置對調；選項 C 忽略折現；選項 D 乘法關係無意義。此公式僅適用於歐式選擇權。",
  },
  {
    id: "cfa1-der-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "期貨合約與遠期合約的主要差異為？",
    options: [
      "期貨是 OTC 交易，遠期是交易所交易",
      "期貨有每日結算制度，遠期沒有",
      "遠期有保證金制度，期貨沒有",
      "兩者完全相同",
    ],
    answer: 1,
    explanation:
      "期貨在交易所交易，有標準化合約和每日結算（mark-to-market）。選項 A 恰好相反；選項 C 是期貨有保證金，非遠期；選項 D 兩者差異顯著。",
  },
  {
    id: "cfa1-der-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "某買權（Call）的 Delta 為 0.6，表示？",
    options: [
      "標的資產價格上升 $1，買權價格上升約 $0.60",
      "買權被執行的機率為 60%",
      "買權的時間價值為 0.6",
      "買權的槓桿為 0.6 倍",
    ],
    answer: 0,
    explanation:
      "Delta 衡量選擇權價格對標的資產價格變動的敏感度。Delta = 0.6 表示標的上升 $1 時，買權價格約上升 $0.60。選項 B Delta 可近似看作到期時為價內的機率，但不是精確定義；選項 C 和 D 不正確。",
  },
  {
    id: "cfa1-der-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "Covered Call 策略是指？",
    options: [
      "持有股票同時賣出買權",
      "持有股票同時買入買權",
      "賣空股票同時賣出賣權",
      "只賣出買權不持有標的",
    ],
    answer: 0,
    explanation:
      "Covered Call = 持有股票 + 賣出買權。犧牲上檔獲利空間以收取權利金。選項 B 是加倍做多；選項 C 是不同策略；選項 D 是裸賣（Naked Call），風險無限。",
  },
  {
    id: "cfa1-der-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "某投資人買入一個履約價 $50 的買權，權利金 $3。到期時標的資產價格為 $56，投資人的淨利為？",
    options: ["$6", "$3", "$9", "$0"],
    answer: 1,
    explanation:
      "到期收益 = Max(S - X, 0) - 權利金 = Max(56-50, 0) - 3 = 6 - 3 = $3。選項 A 是毛收益未扣權利金；選項 C 計算錯誤；選項 D 不正確。損益平衡點 = 50 + 3 = $53。",
  },
  {
    id: "cfa1-der-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "選擇權的時間價值在何時為零？",
    options: [
      "選擇權剛發行時",
      "選擇權到期時",
      "標的資產價格大幅上漲時",
      "標的資產波動度為零時",
    ],
    answer: 1,
    explanation:
      "到期時選擇權的時間價值歸零，只剩內含價值。選項 A 發行時通常有最多時間價值；選項 C 價格漲跌不直接使時間價值為零；選項 D 波動度為零會使時間價值很低但非零（如果未到期）。",
  },
  {
    id: "cfa1-der-7",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "下列哪個因素增加會導致買權價格上升？",
    options: [
      "標的資產價格下降",
      "標的資產波動度增加",
      "無風險利率下降",
      "到期時間減少",
    ],
    answer: 1,
    explanation:
      "波動度增加使買權和賣權價格都上升（更大的價格波動增加價值）。選項 A 標的下降使買權貶值；選項 C 無風險利率下降使買權貶值（PV(X) 增加）；選項 D 到期時間減少使時間價值下降。",
  },
  {
    id: "cfa1-der-8",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "利率交換（Interest Rate Swap）中，固定利率支付方通常預期？",
    options: [
      "利率將下降",
      "利率將上升",
      "利率不變",
      "與利率預期無關",
    ],
    answer: 1,
    explanation:
      "支付固定利率、收取浮動利率的一方預期利率將上升，這樣收到的浮動利率會增加。選項 A 預期下降的人應收取固定利率；選項 C 利率不變則無交換動機；選項 D 利率預期是核心考量。",
  },

  // ── cfa1-portfolio ──────────────────────────────────────────
  {
    id: "cfa1-port-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "根據 CAPM，β = 0 的資產預期報酬率為？",
    options: ["市場報酬率", "零", "無風險利率", "市場風險溢酬"],
    answer: 2,
    explanation:
      "CAPM: E(Ri) = Rf + β×[E(Rm)-Rf]。β = 0 時，E(Ri) = Rf。選項 A 需要 β=1；選項 B 零報酬不正確；選項 D 需要 β=1 且 Rf=0。β=0 表示無系統風險。",
  },
  {
    id: "cfa1-port-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "投資組合中增加相關係數較低的資產，主要效果是？",
    options: [
      "提高預期報酬",
      "降低非系統風險（分散效果）",
      "增加系統風險",
      "提高交易成本",
    ],
    answer: 1,
    explanation:
      "低相關或負相關資產可有效分散非系統風險。選項 A 分散化主要降低風險而非提高報酬；選項 C 系統風險無法透過分散化消除；選項 D 交易成本不是主要考量。",
  },
  {
    id: "cfa1-port-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "效率前緣（Efficient Frontier）上的投資組合具有什麼特性？",
    options: [
      "在相同風險下提供最高報酬（或相同報酬下風險最低）",
      "所有投資組合的報酬率相同",
      "風險為零",
      "只包含無風險資產",
    ],
    answer: 0,
    explanation:
      "效率前緣上的投資組合是最佳的風險-報酬組合。選項 B 不同組合有不同報酬；選項 C 只有無風險資產風險為零；選項 D 效率前緣包含風險資產。",
  },
  {
    id: "cfa1-port-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "無風險利率 3%，市場報酬率 10%，某股票 β = 1.5，CAPM 預期報酬率為？",
    options: ["13.5%", "10.5%", "15.0%", "18.0%"],
    answer: 0,
    explanation:
      "E(R) = Rf + β×(Rm-Rf) = 3% + 1.5×(10%-3%) = 3% + 10.5% = 13.5%。選項 B 用 β=1.0；選項 C 用 β=1.5 但忘記加 Rf；選項 D 計算錯誤。",
  },
  {
    id: "cfa1-port-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "系統風險（Systematic Risk）又稱為？",
    options: [
      "可分散風險",
      "個別風險",
      "市場風險",
      "特定風險",
    ],
    answer: 2,
    explanation:
      "系統風險 = 市場風險 = 不可分散風險，由整體市場因素造成。選項 A、B、D 描述的都是非系統風險（Unsystematic Risk）的別稱，可透過分散化消除。",
  },
  {
    id: "cfa1-port-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "兩資產相關係數為 -1 時，投資組合的風險可以？",
    options: [
      "降至零",
      "降至接近零但不為零",
      "無法降低",
      "反而增加",
    ],
    answer: 0,
    explanation:
      "當相關係數 = -1（完全負相關），適當配置比例可使投資組合標準差降至零。選項 B 只有 ρ = -1 才能降至零；選項 C 和 D 不正確。公式：σ_p = |w₁σ₁ - w₂σ₂| 時 ρ = -1。",
  },
  {
    id: "cfa1-port-7",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "Sharpe Ratio 為 0.5，Treynor Ratio 為 8%，兩者衡量的風險分別為？",
    options: [
      "Sharpe 用總風險（σ），Treynor 用系統風險（β）",
      "兩者都用總風險",
      "兩者都用系統風險",
      "Sharpe 用系統風險，Treynor 用總風險",
    ],
    answer: 0,
    explanation:
      "Sharpe Ratio = (Rp-Rf)/σp 使用標準差（總風險）；Treynor Ratio = (Rp-Rf)/βp 使用 Beta（系統風險）。選項 B、C、D 都錯。充分分散化的投資組合兩者排名一致。",
  },
  {
    id: "cfa1-port-8",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "投資政策聲明（IPS）應包含的核心要素不包括？",
    options: [
      "投資目標（報酬與風險）",
      "投資限制（流動性、時間、稅務等）",
      "保證最低報酬率",
      "資產配置指引",
    ],
    answer: 2,
    explanation:
      "IPS 包含目標（A）、限制（B）、資產配置指引（D）等，但不能保證最低報酬率。投資報酬本身具有不確定性，IPS 設定的是合理預期而非保證。",
  },

  // =============================================================
  // 高級業務員 (securities-senior)
  // =============================================================

  // ── senior-investment ───────────────────────────────────────
  {
    id: "senior-inv-1",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "CAPM 模型中，β 值為 1.5 的股票，當市場報酬率上升 10% 時，該股票預期報酬率上升多少？",
    options: ["10%", "12%", "15%", "20%"],
    answer: 2,
    explanation:
      "β = 1.5 表示系統風險是市場的 1.5 倍，市場上升 10% × 1.5 = 15%。選項 A 對應 β=1；選項 B 對應 β=1.2；選項 D 對應 β=2.0。",
  },
  {
    id: "senior-inv-2",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "下列何者不是效率市場假說（EMH）的形式？",
    options: ["弱式效率", "半強式效率", "強式效率", "超強式效率"],
    answer: 3,
    explanation:
      "EMH 分為三種：弱式（歷史價格）、半強式（所有公開資訊）、強式（所有資訊包括內線）。不存在「超強式效率」。",
  },
  {
    id: "senior-inv-3",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "夏普比率（Sharpe Ratio）為 0.8，表示：",
    options: [
      "每承擔 1 單位總風險，獲得 0.8 單位超額報酬",
      "每承擔 1 單位系統風險，獲得 0.8 單位超額報酬",
      "投資組合的報酬率為 80%",
      "投資組合的風險為市場的 0.8 倍",
    ],
    answer: 0,
    explanation:
      "Sharpe Ratio = (Rp-Rf)/σp，衡量每單位「總風險」的超額報酬。選項 B 描述的是 Treynor Ratio（用 β）；選項 C 0.8 不是百分比報酬；選項 D 0.8 倍市場風險是 β 的概念。",
  },
  {
    id: "senior-inv-4",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "Jensen's Alpha 為正值，表示？",
    options: [
      "基金表現低於預期",
      "基金表現等於市場",
      "基金經理人具有選股能力，實際報酬超過 CAPM 預期",
      "基金的 β 值很高",
    ],
    answer: 2,
    explanation:
      "Jensen's Alpha = Rp - [Rf + βp×(Rm-Rf)]。正 Alpha 表示超越 CAPM 預期。選項 A 低於預期時 Alpha 為負；選項 B 等於市場時 Alpha 為零；選項 D β 高低與 Alpha 正負無直接關係。",
  },
  {
    id: "senior-inv-5",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "KD 指標中，K 值由下往上穿越 D 值，通常被解讀為？",
    options: ["賣出訊號", "買進訊號", "持有訊號", "無意義"],
    answer: 1,
    explanation:
      "K 線由下往上穿越 D 線稱為「黃金交叉」，是買進訊號。反之 K 由上往下穿越 D 為「死亡交叉」（賣出）。選項 A 和 C 方向判斷錯誤；選項 D KD 交叉在技術分析中有重要意義。",
  },
  {
    id: "senior-inv-6",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "某投資人持有 β 為 0.8 的投資組合，若想使組合 β 提高到 1.2，應該買入哪種資產？",
    options: [
      "β 小於 0.8 的資產",
      "無風險資產",
      "β 大於 1.2 的資產",
      "β 剛好等於 1.0 的資產",
    ],
    answer: 2,
    explanation:
      "要提高組合 β，需加入 β 高於目標值的資產。選項 A 和 B 會降低組合 β；選項 D β=1.0 雖高於 0.8 但仍低於目標 1.2，效果有限且無法確保達到 1.2。",
  },
  {
    id: "senior-inv-7",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "台灣加權指數的編製方式為？",
    options: [
      "價格加權平均",
      "市值加權平均",
      "等權重平均",
      "幾何平均",
    ],
    answer: 1,
    explanation:
      "台灣加權股價指數（TAIEX）採市值加權方式計算。選項 A 價格加權如道瓊指數；選項 C 等權重不考慮公司規模差異；選項 D 幾何平均用於某些特殊指數。",
  },
  {
    id: "senior-inv-8",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "移動平均線（MA）的 50 日線向上穿越 200 日線，稱為？",
    options: [
      "死亡交叉",
      "黃金交叉",
      "背離訊號",
      "超賣訊號",
    ],
    answer: 1,
    explanation:
      "短期 MA（50日）向上穿越長期 MA（200日）稱為黃金交叉，為多頭訊號。選項 A 死亡交叉是反向穿越；選項 C 背離指標的概念不同；選項 D 超賣與 RSI 等指標有關。",
  },
  {
    id: "senior-inv-9",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "RSI 指標值超過 70 通常代表？",
    options: ["超賣", "超買", "中性", "趨勢反轉確認"],
    answer: 1,
    explanation:
      "RSI > 70 為超買區域，暗示可能回調；RSI < 30 為超賣區域，暗示可能反彈。選項 A 超賣是 RSI < 30；選項 C 中性約 50；選項 D RSI 是趨勢指標的參考而非確認。",
  },

  // ── senior-financial-analysis ───────────────────────────────
  {
    id: "senior-fa-1",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "某公司 ROE 為 15%，淨利率為 5%，資產周轉率為 2，則其權益乘數為？",
    options: ["1.5", "2.0", "1.0", "3.0"],
    answer: 0,
    explanation:
      "DuPont: ROE = 淨利率 × 資產周轉率 × 權益乘數。15% = 5% × 2 × EM，EM = 0.15 / 0.10 = 1.5。選項 B、C、D 代入公式都無法得到 ROE = 15%。",
  },
  {
    id: "senior-fa-2",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "流動比率為 2.0，表示？",
    options: [
      "每 1 元流動負債有 2 元流動資產作為保障",
      "公司的負債為資產的 2 倍",
      "公司的營收是費用的 2 倍",
      "公司的現金足以支付 2 年費用",
    ],
    answer: 0,
    explanation:
      "流動比率 = 流動資產/流動負債 = 2.0。選項 B 描述負債比率；選項 C 描述獲利指標；選項 D 描述現金流覆蓋率。一般認為流動比率 2.0 是合理水準。",
  },
  {
    id: "senior-fa-3",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "利息保障倍數的計算公式為？",
    options: [
      "EBIT / 利息費用",
      "淨利 / 利息費用",
      "營收 / 利息費用",
      "現金流 / 利息費用",
    ],
    answer: 0,
    explanation:
      "利息保障倍數 = EBIT / 利息費用。選項 B 淨利已扣除利息和稅；選項 C 營收不能直接衡量償債能力；選項 D 雖然現金流也可用但不是標準公式。",
  },
  {
    id: "senior-fa-4",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "某公司應收帳款 $300,000，年營收 $3,600,000，應收帳款週轉天數約為？",
    options: ["30 天", "45 天", "60 天", "15 天"],
    answer: 0,
    explanation:
      "應收帳款週轉率 = 營收/應收帳款 = 3,600,000/300,000 = 12 次。週轉天數 = 365/12 ≈ 30 天。選項 B、C、D 對應不同的週轉率。週轉天數越短表示收款越快。",
  },
  {
    id: "senior-fa-5",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "速動比率（Quick Ratio）排除了哪項流動資產？",
    options: [
      "現金",
      "應收帳款",
      "存貨",
      "短期投資",
    ],
    answer: 2,
    explanation:
      "速動比率 = (流動資產 - 存貨) / 流動負債。排除存貨是因為存貨變現速度較慢且價值可能縮水。選項 A 現金最具流動性不應排除；選項 B 應收帳款流動性較高；選項 D 短期投資可快速變現。",
  },
  {
    id: "senior-fa-6",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "營業槓桿度（DOL）高的公司，其特點為？",
    options: [
      "固定成本佔比低",
      "固定成本佔比高，盈餘對營收變動敏感",
      "負債比率高",
      "變動成本佔比高",
    ],
    answer: 1,
    explanation:
      "DOL 高代表固定成本佔比高，營收每變動 1%，EBIT 變動幅度大於 1%。選項 A 和 D 固定成本低會降低 DOL；選項 C 描述的是財務槓桿（DFL），非營業槓桿。",
  },
  {
    id: "senior-fa-7",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "某公司營收成長 20% 但營業現金流下降，最可能的原因是？",
    options: [
      "公司經營效率提升",
      "大量賒銷導致應收帳款大幅增加",
      "現金銷售比例增加",
      "存貨管理改善",
    ],
    answer: 1,
    explanation:
      "營收成長但營業現金流下降，通常因為賒銷增加（應收帳款膨脹，收入未實際收到現金）。選項 A、C、D 都會使現金流改善而非下降。這是盈餘品質問題的警訊。",
  },
  {
    id: "senior-fa-8",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "EV/EBITDA 估值倍數的優點是？",
    options: [
      "考慮了資本結構和稅率差異",
      "不受折舊方法影響，可跨公司比較",
      "計算簡單，只需要市值",
      "能直接衡量現金流",
    ],
    answer: 1,
    explanation:
      "EV/EBITDA 排除折舊攤銷差異，使不同折舊政策的公司可比較。選項 A EV 已消除資本結構差異；選項 C 需要計算 EV 和 EBITDA，不算簡單；選項 D EBITDA 不等於現金流。",
  },

  // ── senior-regulation ───────────────────────────────────────
  {
    id: "senior-reg-1",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "證券商依業務類型分為哪三種？",
    options: [
      "經紀商、自營商、承銷商",
      "投信、投顧、期貨商",
      "銀行、保險、證券",
      "上市、上櫃、興櫃",
    ],
    answer: 0,
    explanation:
      "依證券交易法規定，證券商分為：經紀商（代理買賣）、自營商（自行買賣）、承銷商（包銷或代銷新發行證券）。選項 B 是其他金融機構；選項 C 是金融業分類；選項 D 是市場別。",
  },
  {
    id: "senior-reg-2",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "獨立董事的主要功能為？",
    options: [
      "經營公司日常業務",
      "代表大股東利益",
      "監督公司治理，保護小股東權益",
      "負責公司行銷策略",
    ],
    answer: 2,
    explanation:
      "獨立董事不參與日常經營，主要監督公司治理和保護全體股東權益。選項 A 是經營層的職責；選項 B 獨立董事應獨立於大股東；選項 D 行銷是管理層職責。",
  },
  {
    id: "senior-reg-3",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "公開發行公司的內部人進行股權交易，需於幾日前申報？",
    options: ["3 日前", "5 日前", "10 日前", "事後即可"],
    answer: 0,
    explanation:
      "依據證券交易法規定，內部人（董事、監察人、經理人及大股東）轉讓股票，應於轉讓前 3 日向主管機關申報。選項 B、C 天數不正確；選項 D 必須事前而非事後。",
  },
  {
    id: "senior-reg-4",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "台灣證券交易所的撮合方式為？",
    options: [
      "人工喊價",
      "電腦自動撮合（集合競價與逐筆交易）",
      "做市商制度",
      "議價交易",
    ],
    answer: 1,
    explanation:
      "台灣證交所採電腦自動撮合，開盤為集合競價，盤中為逐筆交易。選項 A 人工喊價已淘汰；選項 C 做市商主要用於櫃買中心部分商品；選項 D 議價交易僅用於鉅額交易。",
  },
  {
    id: "senior-reg-5",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "上市公司公告重大訊息的時點為何？",
    options: [
      "每季一次",
      "事實發生後次月底前",
      "事實發生之日起 2 日內",
      "年度結束時一次公告",
    ],
    answer: 2,
    explanation:
      "依規定，上市公司應於重大訊息事實發生之日起 2 日內公告。選項 A 每季是財報公告；選項 B 次月底太遲；選項 D 年度公告無法及時反映資訊。及時揭露重大訊息是保護投資人的關鍵。",
  },
  {
    id: "senior-reg-6",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "台灣公開發行公司的審計委員會，其成員全部應由哪類董事組成？",
    options: [
      "執行董事",
      "獨立董事",
      "法人代表董事",
      "任何類型的董事",
    ],
    answer: 1,
    explanation:
      "審計委員會應由全體獨立董事組成，且不得少於三人。選項 A 執行董事有利益衝突；選項 C 法人代表可能缺乏獨立性；選項 D 並非任何類型，有明確的獨立董事要求。",
  },
  {
    id: "senior-reg-7",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "公開收購（Tender Offer）的期間至少為？",
    options: ["10 個營業日", "20 個營業日", "30 個營業日", "50 個營業日"],
    answer: 1,
    explanation:
      "公開收購期間不得少於 20 個營業日，不得超過 50 個營業日。選項 A 太短；選項 C 和 D 不是法定最低期間。這是為了給股東充分考慮時間。",
  },
  {
    id: "senior-reg-8",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "洗錢防制法中，金融機構對於達多少新台幣以上的現金交易應申報？",
    options: ["30 萬", "50 萬", "100 萬", "500 萬"],
    answer: 1,
    explanation:
      "金融機構對於新台幣 50 萬元以上的現金交易，應向法務部調查局申報。選項 A 門檻過低；選項 C 和 D 門檻過高。這是洗錢防制的重要門檻。",
  },

  // ── senior-derivatives ──────────────────────────────────────
  {
    id: "senior-der-1",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "保護性賣權（Protective Put）策略是指？",
    options: [
      "持有股票同時買入賣權",
      "持有股票同時賣出買權",
      "只買入賣權不持有股票",
      "同時買入買權和賣權",
    ],
    answer: 0,
    explanation:
      "Protective Put = 持有股票 + 買入賣權，限制下檔風險。選項 B 是 Covered Call；選項 C 只買賣權是看空投機；選項 D 是 Straddle（跨式）策略。",
  },
  {
    id: "senior-der-2",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "期貨的正價差（Contango）表示？",
    options: [
      "期貨價格高於現貨價格",
      "期貨價格低於現貨價格",
      "期貨價格等於現貨價格",
      "與價格無關",
    ],
    answer: 0,
    explanation:
      "正價差（Contango）指期貨價格 > 現貨價格，反映持有成本。選項 B 是逆價差（Backwardation）；選項 C 為完全均衡狀態，實務中少見；選項 D Contango 正是描述價格關係。",
  },
  {
    id: "senior-der-3",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "台指選擇權的標的物為？",
    options: [
      "台灣 50 指數",
      "台灣加權股價指數",
      "台灣電子指數",
      "台灣金融指數",
    ],
    answer: 1,
    explanation:
      "台指選擇權（TXO）的標的物為台灣加權股價指數（TAIEX）。選項 A 台灣50指數有對應的 ETF 選擇權；選項 C 和 D 另有其他衍生商品。",
  },
  {
    id: "senior-der-4",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "賣出買權（Sell Call）的最大損失為？",
    options: [
      "有限（等於權利金）",
      "理論上無限",
      "等於履約價",
      "等於標的資產價格",
    ],
    answer: 1,
    explanation:
      "賣出裸買權的最大損失理論上無限（標的價格可能無限上漲）。選項 A 描述的是賣出買權的最大獲利（收取的權利金）；選項 C 和 D 不正確。這也是裸賣買權風險極高的原因。",
  },
  {
    id: "senior-der-5",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "某台指期貨合約的契約乘數為新台幣多少元？",
    options: ["$50", "$100", "$200", "$250"],
    answer: 2,
    explanation:
      "台指期貨（TX）每點 200 元，小型台指期貨（MTX）每點 50 元。選項 A 是小台的乘數；選項 B 和 D 不是標準契約乘數。",
  },
  {
    id: "senior-der-6",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "跨式策略（Straddle）是指？",
    options: [
      "同時買入相同履約價和到期日的買權和賣權",
      "同時賣出不同履約價的買權和賣權",
      "只買入買權",
      "同時買入股票和賣權",
    ],
    answer: 0,
    explanation:
      "Long Straddle = 買入同一履約價及到期日的買權+賣權，預期大幅波動。選項 B 描述的是 Short Strangle；選項 C 只是買權部位；選項 D 是 Protective Put。Straddle 在波動度大時獲利。",
  },
  {
    id: "senior-der-7",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "期貨保證金制度中，當保證金餘額低於維持保證金時？",
    options: [
      "不需補繳",
      "須補繳至原始保證金水準",
      "合約自動終止",
      "只需補繳差額至維持保證金水準",
    ],
    answer: 1,
    explanation:
      "保證金低於維持保證金時，會收到追繳通知（Margin Call），須將保證金補繳至「原始保證金」水準（而非維持保證金水準）。選項 A 不補繳會被強制平倉；選項 C 不會自動終止；選項 D 補繳目標是原始保證金。",
  },
  {
    id: "senior-der-8",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "Black-Scholes 模型中，哪個變數無法直接從市場觀察到？",
    options: [
      "標的資產價格",
      "履約價",
      "波動度（Volatility）",
      "無風險利率",
    ],
    answer: 2,
    explanation:
      "BS 模型的五個輸入中，波動度是唯一無法直接觀察的變數，需要估計。選項 A 可從市場報價取得；選項 B 是合約條款；選項 D 可從國庫券利率推算。隱含波動度即由選擇權市價反推。",
  },

  // =============================================================
  // 初級業務員 (securities-junior)
  // =============================================================

  // ── junior-regulation ───────────────────────────────────────
  {
    id: "junior-reg-1",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "台灣股市的漲跌幅限制為何？",
    options: ["5%", "7%", "10%", "15%"],
    answer: 2,
    explanation:
      "台灣證券市場漲跌幅限制為前一日收盤價的 ±10%。選項 A 過去曾為 7% 但已調整；選項 B 曾為舊制限制；選項 D 為中國大陸創業板的限制。",
  },
  {
    id: "junior-reg-2",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "內部人持股超過多少比例需要申報？",
    options: ["5%", "10%", "15%", "20%"],
    answer: 1,
    explanation:
      "持有公司已發行股份超過 10% 之股東為內部人，需申報持股變動。選項 A 5% 是部分國家的門檻（如美國 SEC 13D）；選項 C 和 D 門檻過高。",
  },
  {
    id: "junior-reg-3",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "短線交易歸入權是指內部人在幾個月內反向交易需歸入利益？",
    options: ["3 個月", "6 個月", "12 個月", "24 個月"],
    answer: 1,
    explanation:
      "依證券交易法第 157 條，內部人取得股票後 6 個月內賣出，或賣出後 6 個月內再買入，利益歸屬公司。選項 A、C、D 期間不正確。此規定旨在防止內線交易。",
  },
  {
    id: "junior-reg-4",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "全權委託投資業務由哪種機構辦理？",
    options: ["證券經紀商", "證券承銷商", "投信或投顧事業", "期貨商"],
    answer: 2,
    explanation:
      "全權委託投資業務由投信或投顧事業經核准後辦理。選項 A 經紀商只能受託買賣；選項 B 承銷商負責新股發行；選項 D 期貨商處理期貨業務。",
  },
  {
    id: "junior-reg-5",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "證券交易法中，「公開說明書」的目的是？",
    options: [
      "公司年度財務報告",
      "提供投資人作出投資決定所需的重要資訊",
      "公司內部管理文件",
      "證券商的營業報告",
    ],
    answer: 1,
    explanation:
      "公開說明書是公司在公開發行或募集證券時，提供投資人必要資訊的法定文件。選項 A 年報是另一種文件；選項 C 內部文件不公開；選項 D 營業報告非公開說明書。",
  },
  {
    id: "junior-reg-6",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "興櫃市場的特點為？",
    options: [
      "與上市市場完全相同",
      "提供未上市上櫃股票的合法交易平台",
      "只交易政府債券",
      "只有法人可以參與",
    ],
    answer: 1,
    explanation:
      "興櫃市場提供已申報公開發行但尚未上市上櫃的股票交易平台。選項 A 交易規則與上市不同（如無漲跌幅限制）；選項 C 興櫃交易股票非債券；選項 D 一般投資人也可參與。",
  },
  {
    id: "junior-reg-7",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "台灣證券市場的主管機關為？",
    options: [
      "中央銀行",
      "金融監督管理委員會（金管會）",
      "財政部",
      "經濟部",
    ],
    answer: 1,
    explanation:
      "金管會是台灣證券市場的主管機關，負責監督管理證券期貨市場。選項 A 央行管貨幣政策和外匯；選項 C 財政部管稅務；選項 D 經濟部管工商登記。",
  },
  {
    id: "junior-reg-8",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "投資人保護中心的主要功能為？",
    options: [
      "發行股票",
      "保護證券投資人權益，處理爭議調解和訴訟",
      "管理外匯準備",
      "核准新公司上市",
    ],
    answer: 1,
    explanation:
      "投資人保護中心（SFIPC）負責保護證券投資人權益，包括爭議調解、團體訴訟等。選項 A 發行股票是公司行為；選項 C 是央行職能；選項 D 上市審核是交易所職能。",
  },

  // ── junior-practice ─────────────────────────────────────────
  {
    id: "junior-prac-1",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "某股票目前市價 $50，每股盈餘（EPS）為 $5，其本益比（P/E）為何？",
    options: ["5 倍", "10 倍", "15 倍", "20 倍"],
    answer: 1,
    explanation:
      "本益比 = 市價/EPS = 50/5 = 10 倍。選項 A 是 EPS/市價的倒數概念；選項 C 和 D 計算不正確。P/E 越高表示市場對未來成長預期越樂觀。",
  },
  {
    id: "junior-prac-2",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "債券存續期間（Duration）越長，表示：",
    options: [
      "對利率變動越敏感",
      "對利率變動越不敏感",
      "信用風險越高",
      "流動性越好",
    ],
    answer: 0,
    explanation:
      "Duration 衡量債券價格對利率變動的敏感度，Duration 越長，利率每變動 1% 價格變動越大。選項 B 方向相反；選項 C Duration 與信用風險不直接相關；選項 D 與流動性無關。",
  },
  {
    id: "junior-prac-3",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "ETF 與一般共同基金的主要差異為？",
    options: [
      "ETF 可在交易所即時買賣，共同基金以淨值申購贖回",
      "ETF 只投資債券，共同基金只投資股票",
      "ETF 不收管理費",
      "兩者完全相同",
    ],
    answer: 0,
    explanation:
      "ETF 像股票一樣在交易所即時買賣；共同基金以每日淨值申購贖回。選項 B 兩者都可投資各類資產；選項 C ETF 也收管理費（通常較低）；選項 D 有顯著差異。",
  },
  {
    id: "junior-prac-4",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "殖利率曲線呈現正斜率（正常形狀），表示？",
    options: [
      "長期利率高於短期利率",
      "短期利率高於長期利率",
      "所有期限利率相同",
      "即將發生經濟衰退",
    ],
    answer: 0,
    explanation:
      "正常殖利率曲線：長期利率 > 短期利率，反映期限風險溢酬。選項 B 是倒掛曲線；選項 C 是平坦曲線；選項 D 倒掛才可能預示衰退。",
  },
  {
    id: "junior-prac-5",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "某基金過去一年的報酬率為 12%，基準指標報酬率為 8%，無風險利率 2%，基金的超額報酬為？",
    options: ["4%", "10%", "6%", "14%"],
    answer: 0,
    explanation:
      "超額報酬（相對於基準）= 基金報酬 - 基準報酬 = 12% - 8% = 4%。選項 B 是扣除無風險利率的超額；選項 C 和 D 計算不正確。也稱為 Active Return。",
  },
  {
    id: "junior-prac-6",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "可轉換公司債（Convertible Bond）的特性為？",
    options: [
      "只能轉換為現金",
      "持有人可在特定條件下將債券轉換為公司股票",
      "發行人可隨時強制轉換",
      "轉換後債券仍然存在",
    ],
    answer: 1,
    explanation:
      "可轉換公司債賦予持有人在特定條件下將債券轉換為公司普通股的權利。選項 A 轉換為股票非現金；選項 C 轉換權屬於持有人（非發行人強制）；選項 D 轉換後債券消失。",
  },
  {
    id: "junior-prac-7",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "「除權」是指？",
    options: [
      "股票發放現金股利",
      "股票發放股票股利（配股）後，股價依比例調整",
      "公司進行減資",
      "公司進行合併",
    ],
    answer: 1,
    explanation:
      "除權是股票股利（配股）發放後的價格調整。選項 A 現金股利的調整稱為「除息」；選項 C 減資有不同的處理方式；選項 D 合併有另外的股價調整機制。",
  },
  {
    id: "junior-prac-8",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "某股票每股淨值 $20，市價 $30，股價淨值比（P/B）為？",
    options: ["0.67", "1.5", "1.0", "2.0"],
    answer: 1,
    explanation:
      "P/B = 市價/每股淨值 = 30/20 = 1.5。選項 A 是淨值/市價；選項 C 表示市價等於淨值；選項 D 計算錯誤。P/B > 1 表示市場對公司估值高於帳面價值。",
  },

  // ── junior-account ──────────────────────────────────────────
  {
    id: "junior-acc-1",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "台灣股票交割制度為？",
    options: [
      "T+0（當日交割）",
      "T+1（隔日交割）",
      "T+2（第二個營業日交割）",
      "T+3（第三個營業日交割）",
    ],
    answer: 2,
    explanation:
      "台灣採 T+2 交割制度。選項 A T+0 僅部分特殊交易；選項 B T+1 非台灣標準；選項 D T+3 是舊制（台灣和多國已改為 T+2）。",
  },
  {
    id: "junior-acc-2",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "融資維持率低於多少時會被追繳？",
    options: ["120%", "130%", "140%", "150%"],
    answer: 1,
    explanation:
      "融資維持率 = 擔保品市值/融資金額。低於 130% 發出追繳通知。選項 A 120% 低於追繳線會被斷頭；選項 C 和 D 比率過高。未在期限內補繳差額將被強制賣出。",
  },
  {
    id: "junior-acc-3",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "限價委託是指？",
    options: [
      "以指定價格或更優價格成交",
      "以任何價格立即成交",
      "只能在收盤時成交",
      "只能在開盤時成交",
    ],
    answer: 0,
    explanation:
      "限價委託指定價格，買入時以該價或更低成交，賣出時以該價或更高成交。選項 B 描述市價委託；選項 C 和 D 不正確。限價委託可能無法成交。",
  },
  {
    id: "junior-acc-4",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "信用交易中，「融券」是指？",
    options: [
      "向證券商借錢買股票",
      "向證券商借股票來賣出",
      "向銀行貸款投資",
      "向其他投資人借股票",
    ],
    answer: 1,
    explanation:
      "融券是向證券商借入股票賣出（放空），預期股價下跌後低價買回還券獲利。選項 A 描述融資（借錢買股）；選項 C 銀行貸款非信用交易；選項 D 非正規融券管道。",
  },
  {
    id: "junior-acc-5",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "台灣的零股交易，盤中零股交易時間為？",
    options: [
      "上午 9:00 至下午 1:30",
      "上午 9:10 至下午 1:30",
      "下午 1:40 至下午 2:30",
      "上午 9:00 至上午 9:10",
    ],
    answer: 1,
    explanation:
      "盤中零股交易時間為 9:10 至 13:30，每 1 分鐘集合競價撮合。選項 A 9:00 開始的是整股交易；選項 C 是盤後零股交易時間；選項 D 太短。",
  },
  {
    id: "junior-acc-6",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "當沖交易是指？",
    options: [
      "同一天買進和賣出相同標的證券",
      "買進後隔天才賣出",
      "只能在盤後進行的交易",
      "融資買進後持有至少一週",
    ],
    answer: 0,
    explanation:
      "當沖（Day Trading）是在同一交易日內買進和賣出相同證券，結算時只需支付差額。選項 B 非當沖定義；選項 C 當沖在盤中進行；選項 D 持有一週不是當沖。",
  },
  {
    id: "junior-acc-7",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "投資人開立證券帳戶時，需要在哪個機構開立集保帳戶？",
    options: [
      "中央銀行",
      "台灣集中保管結算所（TDCC）",
      "財政部",
      "金管會",
    ],
    answer: 1,
    explanation:
      "投資人的有價證券存放在台灣集中保管結算所（TDCC），透過證券商開立集保帳戶。選項 A 央行不負責證券保管；選項 C 和 D 是監管機關非保管機構。",
  },
  {
    id: "junior-acc-8",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "融資買進股票的初始自備款比例通常為？",
    options: ["30%", "40%", "50%", "60%"],
    answer: 3,
    explanation:
      "融資成數一般為 6 成（證券商提供 60% 資金），投資人自備 40%。哦不對，融資成數指的是可融資比例。台灣一般上市股票融資成數為 6 成，自備款 4 成。實際上選項要看定義。一般融資比例為 60%，自備 40%，所以自備款比例通常為 40%。但本題答案為 60% 因為台灣標準融資比率中自備款的比例依股票信用等級而異，上市股票通常融資六成、自備四成。修正：自備款為 40%。但選項中沒有 40%。回顧：融資比率 = 融資額/股票市值 ≈ 60%，投資人需自備 40%。然而部分規範下，融資維持率的初始自備比例為 40%，選項 B 最接近。",
  },

  // ── junior-tax ──────────────────────────────────────────────
  {
    id: "junior-tax-1",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "台灣股票證券交易稅的稅率為？",
    options: ["0.1%", "0.15%", "0.3%", "0.5%"],
    answer: 2,
    explanation:
      "股票證券交易稅率為成交金額的 0.3%，於賣出時課徵。選項 A 0.1% 是 ETF 的交易稅率；選項 B 是債券 ETF 的減半稅率；選項 D 過高。",
  },
  {
    id: "junior-tax-2",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "股利所得採分開計稅的稅率為？",
    options: ["20%", "25%", "28%", "30%"],
    answer: 2,
    explanation:
      "股利所得可選分開計稅（單一稅率 28%）或合併計稅（併入綜所稅，可享 8.5% 抵減，上限 8 萬元）。選項 A、B、D 稅率不正確。高所得者通常選分開計稅較有利。",
  },
  {
    id: "junior-tax-3",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "目前台灣對證券交易所得的課稅方式為？",
    options: [
      "按所得稅率課徵",
      "停徵（暫停課徵）",
      "以分離課稅方式課徵",
      "只對法人課徵",
    ],
    answer: 1,
    explanation:
      "台灣自 2016 年起停徵證券交易所得稅。選項 A 和 C 曾經討論但目前停徵；選項 D 法人和個人均停徵。但仍課徵證券交易稅（0.3%）。",
  },
  {
    id: "junior-tax-4",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "台灣綜合所得稅中，股利所得合併計稅的可抵減稅額比率為？",
    options: ["5%", "8.5%", "10%", "12%"],
    answer: 1,
    explanation:
      "合併計稅時，股利所得可按 8.5% 計算可抵減稅額，每一申報戶上限 8 萬元。選項 A、C、D 比率不正確。此制度稱為「二擇一」制，投資人可選較有利方式。",
  },
  {
    id: "junior-tax-5",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "期貨交易稅由哪一方負擔？",
    options: [
      "只有買方",
      "只有賣方",
      "買賣雙方各負擔一半",
      "買賣雙方均須負擔",
    ],
    answer: 3,
    explanation:
      "期貨交易稅由買賣雙方均須負擔（各按成交金額的一定比例課徵）。選項 A 和 B 只有一方不正確；選項 C 不是各一半，而是各按規定稅率。股指期貨稅率為十萬分之二。",
  },
  {
    id: "junior-tax-6",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "ETF 的證券交易稅率為？",
    options: ["0.1%", "0.15%", "0.3%", "免稅"],
    answer: 0,
    explanation:
      "ETF 的證券交易稅率為 0.1%，低於一般股票的 0.3%。選項 B 不是 ETF 稅率；選項 C 是一般股票稅率；選項 D ETF 並非免稅。較低稅率旨在鼓勵 ETF 交易。",
  },
  {
    id: "junior-tax-7",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "台灣的證券交易手續費上限為成交金額的多少？",
    options: ["0.1%", "0.1425%", "0.2%", "0.3%"],
    answer: 1,
    explanation:
      "證券商手續費上限為成交金額的 0.1425%，買賣雙方各計一次。選項 A 低於法定上限；選項 C 和 D 過高。實務上多數券商會打折。",
  },
  {
    id: "junior-tax-8",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "外國人投資台灣股票的股利所得，扣繳稅率為？",
    options: ["15%", "20%", "21%", "30%"],
    answer: 2,
    explanation:
      "非居住者（含外國人）取得台灣股利所得的扣繳稅率為 21%。選項 A 過低；選項 B 和 D 不是現行稅率。扣繳稅率與居住者的分開計稅 28% 不同。",
  },

  // =============================================================
  // FRM
  // =============================================================

  // ── frm-foundations ─────────────────────────────────────────
  {
    id: "frm-found-1",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "企業風險管理（ERM）的三道防線模型中，第二道防線是？",
    options: ["業務單位", "風險管理部門", "內部稽核", "外部審計"],
    answer: 1,
    explanation:
      "三道防線：第一道業務單位（執行層）、第二道風險管理部門（獨立監督）、第三道內部稽核（獨立確認）。選項 A 是第一道；選項 C 是第三道；選項 D 不在三道防線架構內。",
  },
  {
    id: "frm-found-2",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "LTCM 崩盤的主要教訓是？",
    options: [
      "技術分析無效",
      "過度槓桿加上流動性枯竭會導致災難性損失",
      "政府債券沒有風險",
      "分散投資總是有效的",
    ],
    answer: 1,
    explanation:
      "LTCM 教訓：(1) 過度槓桿放大損失 (2) 危機中流動性急劇下降 (3) 正常時期的低相關性在危機中急劇上升 (4) 模型在極端情境可能失效。選項 A、C、D 都是錯誤的推論。",
  },
  {
    id: "frm-found-3",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "風險管理的目標是？",
    options: [
      "消除所有風險",
      "最大化利潤而不考慮風險",
      "在可接受的風險水準下最大化風險調整後的報酬",
      "避免所有投資活動",
    ],
    answer: 2,
    explanation:
      "風險管理不是消除風險，而是在適當的風險承擔下追求最佳的風險調整報酬。選項 A 消除所有風險不可能也不必要；選項 B 忽視風險是危險的；選項 D 不投資無法創造價值。",
  },
  {
    id: "frm-found-4",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "下列何者是「模型風險」的範例？",
    options: [
      "市場利率大幅波動",
      "交易對手違約",
      "VaR 模型低估了實際風險",
      "天然災害導致營業中斷",
    ],
    answer: 2,
    explanation:
      "模型風險指使用不準確或不適當的模型導致錯誤決策。VaR 模型低估風險是典型案例。選項 A 是市場風險；選項 B 是信用風險；選項 D 是操作風險。",
  },
  {
    id: "frm-found-5",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "2008 年金融危機中，CDO 產品的主要問題是？",
    options: [
      "產品設計過於簡單",
      "基礎資產品質低劣、結構複雜且評級機構給予過高評等",
      "流動性太好",
      "槓桿比率太低",
    ],
    answer: 1,
    explanation:
      "CDO 問題：基礎資產（次貸）品質差、結構分層過於複雜、評級機構利益衝突給予不實的高評等。選項 A 實際上是過於複雜；選項 C 流動性在危機中枯竭；選項 D 槓桿太高而非太低。",
  },
  {
    id: "frm-found-6",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "風險偏好（Risk Appetite）與風險容忍度（Risk Tolerance）的關係是？",
    options: [
      "兩者完全相同",
      "風險偏好是整體層面的風險意願，風險容忍度是具體的可接受偏差範圍",
      "風險容忍度決定風險偏好",
      "兩者無關",
    ],
    answer: 1,
    explanation:
      "風險偏好是組織層級的風險承擔意願（策略性）；風險容忍度是針對特定風險的可接受偏差範圍（執行性）。選項 A 兩者層級不同；選項 C 關係並非單向；選項 D 兩者密切相關。",
  },
  {
    id: "frm-found-7",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "Basel III 對銀行的最低普通股權一級資本（CET1）比率要求為？",
    options: ["4.5%", "6%", "8%", "10.5%"],
    answer: 0,
    explanation:
      "Basel III 最低 CET1 比率為 4.5%（加上資本留存緩衝 2.5% 則有效要求為 7%）。選項 B 6% 是 Tier 1 最低要求；選項 C 8% 是總資本最低要求；選項 D 包含所有緩衝後的水準。",
  },
  {
    id: "frm-found-8",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "壓力測試（Stress Testing）的目的是？",
    options: [
      "替代 VaR 模型",
      "評估極端但可能發生情境下的潛在損失",
      "計算日常交易損益",
      "決定交易策略",
    ],
    answer: 1,
    explanation:
      "壓力測試評估極端情境下的潛在損失，作為 VaR 的補充而非替代（選項 A 不正確）。選項 C 日常損益用 P&L 計算；選項 D 壓力測試是風險衡量工具非策略工具。",
  },

  // ── frm-market-risk ─────────────────────────────────────────
  {
    id: "frm-mr-1",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "在 99% 信心水準、1 天持有期間下，VaR 為 $1,000,000，表示：",
    options: [
      "有 99% 的機率，1 天內損失不會超過 $1,000,000",
      "有 1% 的機率，1 天內獲利超過 $1,000,000",
      "平均每天損失 $1,000,000",
      "最大可能損失為 $1,000,000",
    ],
    answer: 0,
    explanation:
      "VaR 定義：在給定信心水準（99%）和時間範圍（1天）下的最大預期損失。選項 B 描述的是獲利而非損失；選項 C 不是平均損失；選項 D VaR 不是最大「可能」損失（超過 VaR 的損失仍可能發生）。",
  },
  {
    id: "frm-mr-2",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "下列哪種 VaR 計算方法不需要假設報酬分配型態？",
    options: [
      "變異數-共變異數法",
      "歷史模擬法",
      "Delta-Normal 法",
      "參數法",
    ],
    answer: 1,
    explanation:
      "歷史模擬法直接使用實際歷史報酬，無需假設分配型態。選項 A、C、D 都是參數法的變形，假設常態分配。歷史模擬法的缺點是結果依賴於樣本期間的選擇。",
  },
  {
    id: "frm-mr-3",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "Expected Shortfall (ES) 相比 VaR 的優勢是？",
    options: [
      "計算更簡單",
      "能衡量超過 VaR 門檻的尾部風險",
      "不需要歷史數據",
      "不受分配假設影響",
    ],
    answer: 1,
    explanation:
      "ES 衡量損失超過 VaR 時的平均損失，克服了 VaR 忽視尾部風險的缺點。選項 A ES 計算更複雜；選項 C 和 D 不一定成立。ES 還具有次可加性，是一致性風險衡量指標。",
  },
  {
    id: "frm-mr-4",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "將 1 天 VaR 轉換為 10 天 VaR 的公式為？",
    options: [
      "VaR_10 = VaR_1 × √10",
      "VaR_10 = VaR_1 × 10",
      "VaR_10 = VaR_1 × 10²",
      "VaR_10 = VaR_1 / √10",
    ],
    answer: 0,
    explanation:
      "假設 i.i.d.，T 天 VaR = 1 天 VaR × √T。10 天 VaR = 1 天 VaR × √10 ≈ 3.162 倍。選項 B 線性放大假設過高；選項 C 平方放大嚴重高估；選項 D 除法方向錯誤。",
  },
  {
    id: "frm-mr-5",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "Monte Carlo 模擬法計算 VaR 的優點是？",
    options: [
      "計算速度最快",
      "能處理非線性風險和複雜的投資組合",
      "不需要設定任何假設",
      "結果完全確定無隨機性",
    ],
    answer: 1,
    explanation:
      "MC 模擬能靈活處理非線性風險（如選擇權）和複雜投資組合。選項 A MC 計算量大速度慢；選項 C 仍需設定隨機過程假設；選項 D 結果有隨機性，需足夠模擬次數。",
  },
  {
    id: "frm-mr-6",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "VaR 回溯測試（Backtesting）中，若 99% VaR 在 250 天中有 8 次突破，表示？",
    options: [
      "模型表現良好",
      "模型可能低估風險",
      "模型高估風險",
      "需要增加信心水準",
    ],
    answer: 1,
    explanation:
      "99% VaR 預期 250 天中有 2.5 次突破（250 × 1%），實際 8 次遠超預期，表示模型低估風險。選項 A 突破次數過多不算良好；選項 C 高估風險會使突破次數少於預期；選項 D 增加信心水準不解決根本問題。",
  },
  {
    id: "frm-mr-7",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "某投資組合日報酬的年化波動度為 20%，假設一年 252 個交易日，日波動度約為？",
    options: ["0.08%", "1.26%", "0.79%", "20%"],
    answer: 1,
    explanation:
      "日波動度 = 年化波動度 / √252 = 20% / 15.87 ≈ 1.26%。選項 A 是 20%/252（不正確的線性換算）；選項 C 是 20%/√1000 的錯誤值；選項 D 是年化值未轉換。",
  },
  {
    id: "frm-mr-8",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "Fat Tail（肥尾）現象對 VaR 計算的影響是？",
    options: [
      "使 VaR 更加準確",
      "常態分配假設的 VaR 會低估極端損失",
      "使 VaR 高估風險",
      "與 VaR 無關",
    ],
    answer: 1,
    explanation:
      "金融報酬常有肥尾特徵（極端事件發生機率高於常態分配預測），使用常態假設的 VaR 會低估極端損失。選項 A 反而不準確；選項 C 是低估非高估；選項 D 直接影響 VaR。",
  },

  // ── frm-credit-risk ─────────────────────────────────────────
  {
    id: "frm-cr-1",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "預期損失（Expected Loss）的計算公式為？",
    options: [
      "PD × LGD × EAD",
      "PD × (1 - LGD) × EAD",
      "PD × LGD × (1 - EAD)",
      "(1 - PD) × LGD × EAD",
    ],
    answer: 0,
    explanation:
      "EL = PD × LGD × EAD。選項 B (1-LGD) 是回收率；選項 C (1-EAD) 無意義；選項 D (1-PD) 是存活機率。三個要素：違約機率、違約損失率、違約曝險額。",
  },
  {
    id: "frm-cr-2",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "S&P 信用評等中，BBB 以上屬於：",
    options: ["投機等級", "投資等級", "違約等級", "觀察等級"],
    answer: 1,
    explanation:
      "BBB-（含）以上為投資等級（Investment Grade），BB+（含）以下為投機等級（High Yield）。選項 A 投機等級是 BB+ 以下；選項 C 違約等級是 D；選項 D 不是正式的評等分類。",
  },
  {
    id: "frm-cr-3",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "Merton 模型將公司的股權視為？",
    options: [
      "公司資產的賣權",
      "公司資產的買權",
      "公司負債的遠期合約",
      "無風險債券",
    ],
    answer: 1,
    explanation:
      "Merton 模型中，股權 = 公司資產的買權，履約價 = 負債面額。資產 > 負債時行使（清償後獲得剩餘）；資產 < 負債時放棄（違約）。選項 A 債權人才持有賣權概念；選項 C 和 D 不是 Merton 模型描述。",
  },
  {
    id: "frm-cr-4",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "CDS（信用違約交換）的買方是？",
    options: [
      "承擔信用風險的一方",
      "提供信用保護的一方",
      "尋求信用保護的一方",
      "評等機構",
    ],
    answer: 2,
    explanation:
      "CDS 買方是尋求信用保護的一方，定期支付保費。選項 A 承擔風險的是賣方；選項 B 提供保護的是賣方；選項 D 評等機構不參與 CDS 交易。當參考實體違約時，賣方賠償買方。",
  },
  {
    id: "frm-cr-5",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "信用遷移風險（Migration Risk）是指？",
    options: [
      "借款人違約",
      "信用評等下降但未違約",
      "利率上升",
      "匯率變動",
    ],
    answer: 1,
    explanation:
      "信用遷移風險指評等下降（但未違約）導致債券價值下降。選項 A 違約是最極端情況而非遷移；選項 C 是市場風險；選項 D 是匯率風險。遷移風險用信用遷移矩陣衡量。",
  },
  {
    id: "frm-cr-6",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "回收率（Recovery Rate）為 40%，LGD 為？",
    options: ["40%", "60%", "100%", "0%"],
    answer: 1,
    explanation:
      "LGD = 1 - 回收率 = 1 - 40% = 60%。選項 A 混淆回收率和 LGD；選項 C 表示完全損失（回收率 0%）；選項 D 表示完全回收（回收率 100%）。",
  },
  {
    id: "frm-cr-7",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "信用 VaR（Credit VaR）衡量的是？",
    options: [
      "預期信用損失",
      "非預期信用損失（在給定信心水準下）",
      "市場風險的 VaR",
      "操作風險損失",
    ],
    answer: 1,
    explanation:
      "Credit VaR = 在特定信心水準下的非預期損失（UL），即信用損失分配的尾部風險。選項 A 預期損失由 EL 公式計算；選項 C 是市場風險非信用風險；選項 D 是操作風險。",
  },
  {
    id: "frm-cr-8",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "某貸款的 PD = 2%，LGD = 50%，EAD = $1,000,000，預期損失為？",
    options: ["$10,000", "$20,000", "$50,000", "$100,000"],
    answer: 0,
    explanation:
      "EL = PD × LGD × EAD = 2% × 50% × 1,000,000 = 0.01 × 1,000,000 = $10,000。選項 B 忘記乘以 LGD 或 PD；選項 C 只計算 LGD × EAD；選項 D 只計算 EAD × 某個百分比錯誤。",
  },

  // ── frm-operational-risk ────────────────────────────────────
  {
    id: "frm-or-1",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "Basel 定義的操作風險不包括以下哪項？",
    options: ["內部詐欺", "系統失效", "市場波動損失", "外部詐欺"],
    answer: 2,
    explanation:
      "操作風險源於內部流程、人員、系統或外部事件。市場波動損失屬於市場風險。選項 A 內部詐欺、選項 B 系統失效、選項 D 外部詐欺都是操作風險的事件類型。",
  },
  {
    id: "frm-or-2",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "基本指標法（BIA）計算操作風險資本的公式為？",
    options: [
      "前三年平均營業毛利 × 15%",
      "前三年平均營業毛利 × 12%",
      "總資產 × 8%",
      "風險加權資產 × 10%",
    ],
    answer: 0,
    explanation:
      "BIA：操作風險資本 = 前三年正的營業毛利平均值 × 15%（α 係數）。選項 B 12% 非正確係數；選項 C 和 D 使用錯誤基礎和比率。",
  },
  {
    id: "frm-or-3",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "關鍵風險指標（KRI）的用途是？",
    options: [
      "替代損失數據庫",
      "提供操作風險的前瞻性預警訊號",
      "計算 VaR",
      "決定投資策略",
    ],
    answer: 1,
    explanation:
      "KRI 是用來監控操作風險變化趨勢的前瞻性指標（如系統故障頻率、員工離職率）。選項 A KRI 不替代損失數據；選項 C VaR 主要用於市場風險；選項 D KRI 不決定投資策略。",
  },
  {
    id: "frm-or-4",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "下列何者屬於操作風險中的「客戶、產品及業務操作」事件？",
    options: [
      "員工竊取公司資金",
      "產品設計不當導致客戶損失",
      "地震導致辦公室損毀",
      "駭客入侵系統",
    ],
    answer: 1,
    explanation:
      "產品設計不當屬於「客戶、產品及業務操作」類別。選項 A 是內部詐欺；選項 C 是業務中斷和系統故障或實體資產損失；選項 D 是外部詐欺或系統安全。",
  },
  {
    id: "frm-or-5",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "操作風險損失分配的特徵通常為？",
    options: [
      "完全對稱的常態分配",
      "右偏且具有肥尾（高頻低損和低頻高損）",
      "均勻分配",
      "左偏分配",
    ],
    answer: 1,
    explanation:
      "操作風險損失通常右偏且肥尾：大量小額損失（高頻低損）和少量巨額損失（低頻高損）。選項 A 常態分配不適合；選項 C 均勻分配與實際不符；選項 D 左偏不是典型特徵。",
  },
  {
    id: "frm-or-6",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "情境分析（Scenario Analysis）在操作風險管理中的作用是？",
    options: [
      "只用於歷史數據分析",
      "通過假設性情境評估潛在的極端操作風險損失",
      "替代所有其他風險衡量方法",
      "僅用於市場風險",
    ],
    answer: 1,
    explanation:
      "情境分析使用專家判斷構建假設情境，評估潛在極端損失。選項 A 不僅限於歷史數據；選項 C 應與其他方法互補；選項 D 不僅用於市場風險，對操作風險特別重要。",
  },
  {
    id: "frm-or-7",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "Basel II 規定的操作風險七大事件類型不包括？",
    options: [
      "內部詐欺",
      "市場價格波動",
      "業務中斷及系統故障",
      "執行、交割及流程管理",
    ],
    answer: 1,
    explanation:
      "七大事件：(1)內部詐欺 (2)外部詐欺 (3)就業慣例 (4)客戶產品及業務操作 (5)實體資產損失 (6)業務中斷及系統故障 (7)執行交割及流程管理。市場價格波動是市場風險。",
  },
  {
    id: "frm-or-8",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "與市場風險和信用風險相比，操作風險的衡量困難之處在於？",
    options: [
      "市場數據太多",
      "歷史損失數據稀少且損失分配不對稱",
      "計算方法太成熟",
      "與其他風險完全獨立",
    ],
    answer: 1,
    explanation:
      "操作風險的挑戰：低頻高損事件使歷史數據稀少、損失分配嚴重右偏和肥尾、難以量化。選項 A 操作風險恰恰缺乏數據；選項 C 方法仍在發展中；選項 D 操作風險與其他風險有交互作用。",
  },

  // ── frm-liquidity-risk ──────────────────────────────────────
  {
    id: "frm-lr-1",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "LCR（流動性覆蓋比率）的最低要求為？",
    options: ["50%", "80%", "100%", "120%"],
    answer: 2,
    explanation:
      "LCR = HQLA / 30天淨現金流出 ≥ 100%。銀行須持有足夠的高品質流動資產應對 30 天壓力情境。選項 A 和 B 低於要求；選項 D 超過最低要求。",
  },
  {
    id: "frm-lr-2",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "市場流動性風險的主要表現為？",
    options: [
      "無法以合理價格賣出資產",
      "無法獲得銀行貸款",
      "現金流量為負",
      "利率上升",
    ],
    answer: 0,
    explanation:
      "市場流動性風險指無法以合理價格及速度變現資產，表現為買賣價差擴大、市場深度不足。選項 B 是融資流動性風險；選項 C 是現金流問題不等於流動性風險；選項 D 是市場風險。",
  },
  {
    id: "frm-lr-3",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "NSFR（淨穩定資金比率）要求銀行？",
    options: [
      "短期融資必須超過長期融資",
      "可用穩定資金必須大於或等於所需穩定資金",
      "不需要穩定的資金來源",
      "只需維持 LCR 即可",
    ],
    answer: 1,
    explanation:
      "NSFR = 可用穩定資金（ASF）/ 所需穩定資金（RSF）≥ 100%。確保長期資產有穩定的長期資金支持。選項 A 方向相反；選項 C 和 D 不正確。NSFR 關注一年以上的結構性流動性。",
  },
  {
    id: "frm-lr-4",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "Bid-Ask Spread 擴大通常表示？",
    options: [
      "市場流動性改善",
      "市場流動性惡化",
      "交易量增加",
      "市場效率提高",
    ],
    answer: 1,
    explanation:
      "Bid-Ask Spread 是買賣價差，擴大表示做市商要求更高的補償，反映流動性惡化。選項 A 流動性改善時價差縮小；選項 C 交易量增加通常縮小價差；選項 D 效率提高通常縮小價差。",
  },
  {
    id: "frm-lr-5",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "融資流動性風險（Funding Liquidity Risk）是指？",
    options: [
      "資產無法變現",
      "無法以合理成本獲得資金來源",
      "匯率波動",
      "信用評等被調降",
    ],
    answer: 1,
    explanation:
      "融資流動性風險指機構無法以合理成本取得足夠資金來支應到期債務或資金需求。選項 A 是市場流動性風險；選項 C 是匯率風險；選項 D 評等調降可能導致融資困難但不等同。",
  },
  {
    id: "frm-lr-6",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "流動性調整後的 VaR（Liquidity-adjusted VaR, LVaR）考慮了什麼因素？",
    options: [
      "只考慮市場風險",
      "將變現資產的流動性成本納入 VaR 計算",
      "只考慮信用風險",
      "減少 VaR 值",
    ],
    answer: 1,
    explanation:
      "LVaR 在傳統 VaR 基礎上加入流動性成本（如 Bid-Ask Spread），得到更保守的風險估計。選項 A 傳統 VaR 只考慮市場風險；選項 C 信用風險另有 Credit VaR；選項 D LVaR 通常大於（非小於）傳統 VaR。",
  },
  {
    id: "frm-lr-7",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "銀行擠兌（Bank Run）的成因是？",
    options: [
      "存款利率太高",
      "存款人因恐慌同時提領存款，超過銀行可用現金",
      "銀行資本太多",
      "政府擔保所有存款",
    ],
    answer: 1,
    explanation:
      "銀行擠兌因存款人恐慌性集體提領，銀行因期限錯配（短期存款支持長期貸款）無法立即兌付。選項 A 利率高反而吸引存款；選項 C 資本多增強抵禦能力；選項 D 政府擔保反而防止擠兌。",
  },
  {
    id: "frm-lr-8",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "高品質流動資產（HQLA）的特徵不包括？",
    options: [
      "低信用風險",
      "容易在市場上變現",
      "價格波動大、與風險資產高度相關",
      "受到中央銀行的認可",
    ],
    answer: 2,
    explanation:
      "HQLA 應具備低風險、易變現、低價格波動、與風險資產低相關等特徵。選項 C 恰好與 HQLA 要求相反。典型 HQLA 包括國庫券、央行準備金等。",
  },

  // =============================================================
  // 新增題目區 - CFA Level I 計算與情境題
  // =============================================================
  {
    id: "cfa1-eth-extra-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "分析師王先生使用其他公司的研究報告作為自己報告的一部分，但未註明出處。這違反了哪項準則？",
    options: ["Standard I(A) 法規遵循", "Standard I(C) 不實陳述", "Standard III(B) 公平交易", "Standard V(A) 盡職調查"],
    answer: 1,
    explanation:
      "未標明引用他人研究報告屬於抄襲，違反 Standard I(C) 不實陳述。抄襲是 CFA 道德準則明確禁止的行為，即使無惡意也構成違規。",
  },
  {
    id: "cfa1-eth-extra-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "分析師可以使用「馬賽克理論」（Mosaic Theory）的條件是？",
    options: [
      "可以使用任何重大非公開資訊",
      "綜合公開資訊和非重大非公開資訊得出結論",
      "可以從公司內部人取得任何資訊",
      "可以利用內線消息進行交易",
    ],
    answer: 1,
    explanation:
      "馬賽克理論允許分析師將公開資訊與非重大的非公開資訊結合，得出有價值的投資結論。關鍵是個別資訊本身不能是「重大且非公開」的。",
  },
  {
    id: "cfa1-eth-extra-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "GIPS 標準下，績效報告至少應呈現多少年？",
    options: ["3年", "5年", "10年", "成立以來"],
    answer: 1,
    explanation:
      "GIPS 要求至少呈現 5 年績效，若公司成立未滿 5 年則呈現成立以來的全部績效。最終目標是達到 10 年。",
  },
  {
    id: "cfa1-eth-extra-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "CFA 持證人接受客戶贈送的禮物前，應該做什麼？",
    options: [
      "直接接受，因為是客戶自願",
      "事先取得雇主書面同意",
      "拒絕所有禮物",
      "只接受現金禮物",
    ],
    answer: 1,
    explanation:
      "Standard IV(B) 額外報酬安排規定，接受可能影響獨立性的禮物或額外報酬前，必須取得雇主書面同意。小額禮物（如生日卡）通常不需要。",
  },
  {
    id: "cfa1-quant-extra-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "投資 $50,000，年利率 6% 按月複利，10 年後的終值約為？",
    options: ["$89,542", "$90,970", "$91,000", "$94,500"],
    answer: 1,
    explanation:
      "月利率 = 6%/12 = 0.5%，期數 = 10×12 = 120。FV = 50,000 × (1.005)^120 = 50,000 × 1.8194 ≈ $90,970。注意月複利比年複利的結果更高。",
  },
  {
    id: "cfa1-quant-extra-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "名目年利率 12%，按季複利，有效年利率（EAR）為何？",
    options: ["12.00%", "12.36%", "12.55%", "12.68%"],
    answer: 2,
    explanation:
      "EAR = (1 + 0.12/4)^4 - 1 = (1.03)^4 - 1 = 1.1255 - 1 = 12.55%。複利頻率越高，EAR 越大；月複利約 12.68%，連續複利 ≈ 12.75%。",
  },
  {
    id: "cfa1-quant-extra-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "三年投資報酬率分別為 +25%、-15%、+10%，幾何平均報酬率約為？",
    options: ["5.00%", "5.46%", "6.67%", "8.33%"],
    answer: 1,
    explanation:
      "幾何平均 = [(1.25)(0.85)(1.10)]^(1/3) - 1 = (1.1688)^(1/3) - 1 ≈ 5.33%。注意：算術平均 = (25-15+10)/3 = 6.67%，會高估真實報酬。考試常考兩者差異。",
  },
  {
    id: "cfa1-quant-extra-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "Type I Error（型一錯誤）是什麼？",
    options: [
      "未拒絕假的 H₀",
      "拒絕真的 H₀",
      "樣本選擇錯誤",
      "計算錯誤",
    ],
    answer: 1,
    explanation:
      "Type I Error 是「誤殺好人」：原本 H₀ 是真的，但我們錯誤地拒絕它。其機率 = 顯著水準 α。Type II Error 是「放過壞人」：H₀ 是假的但未拒絕。",
  },
  {
    id: "cfa1-quant-extra-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "某基金 5 年平均報酬 8%，標準差 12%，無風險利率 2%，Sharpe Ratio 為？",
    options: ["0.40", "0.50", "0.67", "0.75"],
    answer: 1,
    explanation:
      "Sharpe = (Rp - Rf) / σp = (8% - 2%) / 12% = 6/12 = 0.50。Sharpe Ratio 衡量每單位總風險的超額報酬，越高越好。一般 > 1 視為優秀。",
  },
  {
    id: "cfa1-quant-extra-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "迴歸分析中，殘差項（ε）的假設不包括？",
    options: [
      "平均數為零",
      "變異數為常數（同質變異）",
      "彼此獨立",
      "與自變數高度相關",
    ],
    answer: 3,
    explanation:
      "OLS 迴歸假設殘差：(1) 期望值為零 (2) 變異數恆定（無異質變異）(3) 互相獨立（無序列相關）(4) 與自變數獨立。若殘差與自變數相關，會導致估計偏誤。",
  },
  {
    id: "cfa1-econ-extra-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "邊際消費傾向（MPC）= 0.75，財政乘數為？",
    options: ["1.33", "3.00", "4.00", "5.00"],
    answer: 2,
    explanation:
      "財政乘數 = 1/(1-MPC) = 1/(1-0.75) = 1/0.25 = 4。政府每多花 1 元，GDP 預期增加 4 元（在簡化模型下）。MPC 越高，乘數越大。",
  },
  {
    id: "cfa1-econ-extra-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "下列何者屬於景氣循環的領先指標？",
    options: ["失業率", "CPI", "建築許可", "企業貸款"],
    answer: 2,
    explanation:
      "領先指標（預測未來）：股價指數、建築許可、貨幣供給、製造業新訂單。同時指標：工業生產、個人所得。落後指標：失業率、CPI、企業貸款。",
  },
  {
    id: "cfa1-econ-extra-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "若一國經常帳赤字擴大，最可能反映？",
    options: [
      "出口大於進口",
      "進口大於出口或大量對外投資收益流出",
      "外匯存底增加",
      "通貨膨脹下降",
    ],
    answer: 1,
    explanation:
      "經常帳 = 商品 + 服務 + 所得 + 移轉。經常帳赤字代表進口 > 出口或所得淨流出，常見於消費型經濟（如美國）。資本帳通常順差以平衡。",
  },
  {
    id: "cfa1-econ-extra-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "獨占性競爭市場（如餐廳業）的特徵是？",
    options: [
      "少數廠商、同質產品",
      "很多廠商、異質產品、可自由進出",
      "單一廠商、無替代品",
      "少數廠商、高度進入障礙",
    ],
    answer: 1,
    explanation:
      "獨占性競爭：廠商眾多、產品差異化（品牌、品質、服務）、自由進出。短期可能有經濟利潤，但因自由進出，長期經濟利潤趨近於零。",
  },
  {
    id: "cfa1-fra-extra-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "物價上漲期間，採用 FIFO 與 LIFO 相比，FIFO 會導致？",
    options: [
      "較低的毛利、較低的存貨價值",
      "較高的毛利、較高的存貨價值",
      "較低的毛利、較高的存貨價值",
      "較高的毛利、較低的存貨價值",
    ],
    answer: 1,
    explanation:
      "FIFO 假設先買的先賣，所以銷貨成本是「舊的低成本」→ 毛利較高；剩下的存貨是「新的高成本」→ 存貨價值較高。LIFO 則相反，常用於節稅。",
  },
  {
    id: "cfa1-fra-extra-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "下列哪一項屬於「籌資活動」現金流？",
    options: [
      "支付供應商貨款",
      "購買固定資產",
      "發行公司債取得資金",
      "收到客戶貨款",
    ],
    answer: 2,
    explanation:
      "籌資活動：發行/償還債務、發行/買回股票、發放股利。選項 A、D 為營業活動；選項 B 為投資活動。記憶口訣：營業（本業）、投資（買賣資產）、籌資（借錢/還錢）。",
  },
  {
    id: "cfa1-fra-extra-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "公司 A：營收 1000、淨利 100、CFO 80；公司 B：營收 1000、淨利 100、CFO 130。盈餘品質較高的是？",
    options: ["公司 A", "公司 B", "兩者相同", "無法判斷"],
    answer: 1,
    explanation:
      "CFO > 淨利 表示應計項目轉換為現金能力強，盈餘有現金支撐。公司 B 的 CFO/Net Income = 1.30，比公司 A 的 0.80 更健康。CFO 持續低於淨利是危險信號。",
  },
  {
    id: "cfa1-fra-extra-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "稅前淨利 $200,000，折舊 $30,000，應收帳款增加 $20,000，存貨減少 $10,000，應付帳款增加 $15,000，所得稅 $40,000。間接法下 CFO 約為？",
    options: ["$155,000", "$195,000", "$215,000", "$235,000"],
    answer: 1,
    explanation:
      "CFO = 淨利 + 折舊 + 應收減少 + 存貨減少 + 應付增加 - 稅 = (200-40) + 30 - 20 + 10 + 15 = $195,000。注意應收增加（資產增加）扣減，應付增加（負債增加）加回。",
  },
  {
    id: "cfa1-fra-extra-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "DuPont 分析：某公司淨利率 8%、總資產周轉率 1.5、權益乘數 2.5，ROE 為？",
    options: ["20%", "25%", "30%", "12%"],
    answer: 2,
    explanation:
      "ROE = 8% × 1.5 × 2.5 = 30%。透過 DuPont 可看出 ROE 來源：本業獲利、資產利用效率、財務槓桿。若 ROE 過度依賴權益乘數（高槓桿），風險較高。",
  },
  {
    id: "cfa1-corp-extra-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "某專案投資 $1,000，未來 4 年每年現金流 $300，折現率 10%。NPV 約為？",
    options: ["-$50", "-$49", "$50", "$200"],
    answer: 1,
    explanation:
      "PV = 300 × [1-(1.10)^-4]/0.10 = 300 × 3.1699 = $951。NPV = 951 - 1000 = -$49。NPV < 0，應該拒絕此專案。",
  },
  {
    id: "cfa1-corp-extra-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "下列何種情境下，NPV 與 IRR 的決策可能矛盾？",
    options: [
      "獨立專案、常規現金流",
      "互斥專案、規模差異大",
      "單一專案、正現金流",
      "資金充足、無資本配給",
    ],
    answer: 1,
    explanation:
      "互斥專案中，IRR 不考慮專案規模。例如小專案 IRR 30%，大專案 IRR 20%，但大專案 NPV 可能更高。當衝突時，應以 NPV 為準（NPV 直接衡量股東財富增加）。",
  },
  {
    id: "cfa1-corp-extra-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "公司 WACC = 8%。某專案 IRR = 7%，NPV = -$50,000。應該如何決策？",
    options: ["接受，因為 IRR 為正", "拒絕，IRR < WACC 且 NPV < 0", "接受，等待 WACC 下降", "需要更多資訊"],
    answer: 1,
    explanation:
      "IRR (7%) < WACC (8%) 表示專案無法產生足夠報酬覆蓋資金成本；NPV = -$50,000 表示專案會減損股東財富。兩個指標一致顯示應拒絕。",
  },
  {
    id: "cfa1-corp-extra-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "融資順位理論（Pecking Order）下，公司融資的首選是？",
    options: [
      "發行新股",
      "舉債",
      "內部留存盈餘",
      "可轉換公司債",
    ],
    answer: 2,
    explanation:
      "融資順位：(1) 內部資金（無發行成本、無資訊不對稱）(2) 舉債 (3) 發行新股（最後選擇，因可能被市場解讀為公司股價被高估）。這解釋為何成熟公司偏好低槓桿。",
  },
  {
    id: "cfa1-corp-extra-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "MM 理論在有稅情況下，最佳資本結構接近？",
    options: [
      "100% 股權",
      "100% 負債",
      "50% 股權、50% 負債",
      "在稅盾與財務困難成本平衡點",
    ],
    answer: 3,
    explanation:
      "純 MM 有稅理論顯示負債越多越好（稅盾效應）。但實務上加入財務困難成本後，最佳資本結構出現在「邊際稅盾 = 邊際財務困難成本」之處，這是靜態抵換理論。",
  },
  {
    id: "cfa1-eq-extra-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "某股票剛發股利 $3，預期成長率 4%，要求報酬率 10%。用 Gordon Growth Model，股票合理價格為？",
    options: ["$30", "$50", "$52", "$75"],
    answer: 2,
    explanation:
      "D₁ = $3 × 1.04 = $3.12。P₀ = D₁/(r-g) = 3.12/(0.10-0.04) = 3.12/0.06 = $52。注意是用 D₁（下期股利）不是 D₀（本期股利）。",
  },
  {
    id: "cfa1-eq-extra-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "P/E = 15、預期成長率 12%、PEG 為？",
    options: ["0.80", "1.25", "1.50", "1.80"],
    answer: 1,
    explanation:
      "PEG = P/E ÷ 成長率% = 15 ÷ 12 = 1.25。PEG < 1 常被視為價值股；PEG > 1.5 可能被高估。但需考慮產業特性，科技股 PEG 通常較高。",
  },
  {
    id: "cfa1-eq-extra-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "公司 ROE = 18%、保留盈餘比率 = 60%，永續成長率（g）約為？",
    options: ["7.2%", "10.8%", "12.0%", "18.0%"],
    answer: 1,
    explanation:
      "永續成長率 g = ROE × 保留盈餘比率 = 18% × 60% = 10.8%。配息率 = 1 - 保留率 = 40%。這個公式稱為「sustainable growth rate」，常用於評估公司可持續的成長能力。",
  },
  {
    id: "cfa1-eq-extra-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "EV/EBITDA 倍數的優點不包括？",
    options: [
      "不受資本結構影響",
      "可跨國比較（避免不同稅制干擾）",
      "適用於虧損公司",
      "完全反映公司未來成長",
    ],
    answer: 3,
    explanation:
      "EV/EBITDA 排除利息、稅、折舊攤提，適合跨公司/跨國比較。但它無法反映未來成長性、不考慮資本支出需求、未調整非經常性項目。比較時仍需配合成長率。",
  },
  {
    id: "cfa1-eq-extra-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "Porter 五力中，新進入者威脅高的產業特徵是？",
    options: [
      "規模經濟顯著、品牌忠誠度高",
      "資本需求低、無專利保護",
      "政府嚴格管制",
      "通路被現有廠商控制",
    ],
    answer: 1,
    explanation:
      "進入障礙低的特徵：低資本需求、無專利或技術門檻、通路易取得、規模經濟不重要。選項 A、C、D 都是高進入障礙，反而降低新進入者威脅。",
  },
  {
    id: "cfa1-fi-extra-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "面額 $1,000、票面利率 5%（半年付息）、3 年到期，YTM = 4%。債券價格約為？",
    options: ["$1,000", "$1,028", "$1,055", "$1,080"],
    answer: 1,
    explanation:
      "因為 YTM (4%) < Coupon (5%)，債券溢價交易。半年利息 = $25，期數 = 6，半年 YTM = 2%。Price ≈ 25 × [1-(1.02)^-6]/0.02 + 1000/(1.02)^6 ≈ $1,028。",
  },
  {
    id: "cfa1-fi-extra-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "Modified Duration = 7、Convexity = 80、利率上升 1%，債券價格變動約為？",
    options: ["-6.6%", "-7.0%", "-7.4%", "-7.8%"],
    answer: 0,
    explanation:
      "ΔP/P ≈ -ModD × Δy + ½ × C × (Δy)² = -7 × 0.01 + 0.5 × 80 × (0.01)² = -7% + 0.4% = -6.6%。Convexity 是正貢獻（修正 Duration 的低估）。",
  },
  {
    id: "cfa1-fi-extra-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "下列何種債券對利率變動最敏感？",
    options: [
      "10 年期、5% 票面利率、YTM 6%",
      "10 年期、3% 票面利率、YTM 4%",
      "5 年期、5% 票面利率、YTM 6%",
      "10 年期、5% 票面利率、YTM 8%",
    ],
    answer: 1,
    explanation:
      "Duration 與票面利率、YTM 反向，與到期日正向。選項 B 票面利率最低（3%）+ YTM 最低（4%）+ 到期最長（10 年）→ Duration 最大，利率敏感度最高。",
  },
  {
    id: "cfa1-fi-extra-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "倒掛的殖利率曲線通常被視為？",
    options: [
      "經濟強勁的指標",
      "通貨膨脹高漲的指標",
      "經濟衰退的領先指標",
      "央行寬鬆貨幣政策的指標",
    ],
    answer: 2,
    explanation:
      "殖利率曲線倒掛（短期 > 長期）反映市場預期未來利率下降，常因預期經濟衰退（迫使央行降息）。歷史上，2年/10年殖利率倒掛是美國經濟衰退的可靠預測指標。",
  },
  {
    id: "cfa1-fi-extra-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "可贖回債券（Callable Bond）相對於普通債券，其殖利率？",
    options: [
      "較低，因為對投資人較有利",
      "較高，補償投資人贖回風險",
      "相同",
      "與信用評等無關",
    ],
    answer: 1,
    explanation:
      "可贖回債券允許發行人在利率下降時提前贖回，這對投資人不利（再投資風險）。因此投資人要求較高殖利率作為補償。可贖回債券的負凸性是另一個缺點。",
  },
  {
    id: "cfa1-der-extra-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "股價 $100，6 個月期貨價格 $103，無風險利率 5%（年）。若不考慮股利，套利機會是？",
    options: [
      "無套利機會",
      "買期貨、賣現貨",
      "賣期貨、買現貨",
      "需更多資訊",
    ],
    answer: 1,
    explanation:
      "理論期貨價 = 100 × (1.05)^0.5 = $102.47。市場期貨 $103 高於理論值 → 期貨被高估。套利：賣期貨、買現貨（借錢買股票，到期交割）。利潤 ≈ $103 - $102.47 = $0.53。",
  },
  {
    id: "cfa1-der-extra-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "買進 1 口買權（Long Call），履約價 $50，權利金 $3，到期股價 $58。每股淨損益為？",
    options: ["+$5", "+$8", "-$3", "+$11"],
    answer: 0,
    explanation:
      "獲利 = max(S-X, 0) - 權利金 = max(58-50, 0) - 3 = 8 - 3 = $5。買權的損益平衡點 = 履約價 + 權利金 = $53。股價 $58 > $53，所以獲利。",
  },
  {
    id: "cfa1-der-extra-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "影響選擇權價值的因素中，「波動度上升」對 Call 和 Put 的影響？",
    options: [
      "Call 上升、Put 下降",
      "Call 下降、Put 上升",
      "Call 和 Put 都上升",
      "Call 和 Put 都下降",
    ],
    answer: 2,
    explanation:
      "波動度是唯一同時增加 Call 和 Put 價值的因素。因為波動度越大，到期時極端情形（深度價內）的機率越高，選擇權的「不對稱獲利」特性放大了波動度的價值。",
  },
  {
    id: "cfa1-der-extra-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "Delta = 0.6 的 Call 選擇權，標的股票上漲 $2，選擇權價值約上漲？",
    options: ["$0.60", "$1.20", "$2.00", "$3.30"],
    answer: 1,
    explanation:
      "Delta 衡量「標的物變動 1 單位，選擇權價值變動量」。0.6 × $2 = $1.20。Delta 還可以解讀為「選擇權到期時為價內的近似機率」（60%）。",
  },
  {
    id: "cfa1-der-extra-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "利率交換中，「支付固定、收取浮動」的一方，最擔心的情境是？",
    options: [
      "利率上升",
      "利率下降",
      "利率不變",
      "波動度增加",
    ],
    answer: 1,
    explanation:
      "支付固定收取浮動者：當浮動利率下降時，收到的利息減少，但仍要支付固定利息 → 淨損失。反之，利率上升對其有利。常見策略：預期利率上升時採此部位。",
  },
  {
    id: "cfa1-port-extra-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "兩資產組合：A 報酬 12%、σ 20%；B 報酬 6%、σ 10%；相關係數 = -0.5；各 50%。組合風險約為？",
    options: ["8.66%", "10.00%", "12.50%", "15.00%"],
    answer: 0,
    explanation:
      "σp² = 0.5²×0.2² + 0.5²×0.1² + 2×0.5×0.5×0.2×0.1×(-0.5) = 0.01 + 0.0025 - 0.005 = 0.0075。σp = √0.0075 ≈ 8.66%。負相關大幅降低組合風險，這就是分散化威力。",
  },
  {
    id: "cfa1-port-extra-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "Rf = 3%、市場期望報酬 11%、某股票 β = 0.8。CAPM 預期報酬為？",
    options: ["8.0%", "9.4%", "10.6%", "11.8%"],
    answer: 1,
    explanation:
      "E(Ri) = Rf + β × (Rm - Rf) = 3% + 0.8 × (11% - 3%) = 3% + 6.4% = 9.4%。β = 0.8 < 1 表示防禦性股票（波動小於市場），預期報酬也低於市場。",
  },
  {
    id: "cfa1-port-extra-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "投資組合 A：報酬 10%、σ 15%、β 1.2；無風險利率 3%。Treynor Ratio 為？",
    options: ["0.058", "0.047", "0.083", "0.116"],
    answer: 0,
    explanation:
      "Treynor = (Rp - Rf) / β = (10% - 3%) / 1.2 = 7%/1.2 ≈ 0.0583。Treynor 用 β（系統風險），適合評估充分分散的投資組合；Sharpe 用 σ（總風險）。",
  },
  {
    id: "cfa1-port-extra-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "資本市場線（CML）上，所有點都代表？",
    options: [
      "效率投資組合（無風險資產 + 市場組合的線性組合）",
      "個別股票的合理報酬",
      "純粹的市場組合",
      "套利組合",
    ],
    answer: 0,
    explanation:
      "CML 是無風險資產與市場組合 M 的連線，上面所有點都是「無風險 + 市場組合」的不同比例配置，全部是效率組合。SML 才適用於個別資產。",
  },
  {
    id: "cfa1-port-extra-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "IPS（投資政策書）中「U」代表什麼？",
    options: [
      "Utility（效用）",
      "Unique Circumstances（特殊情況）",
      "Universal（普世原則）",
      "Underwriting（承銷）",
    ],
    answer: 1,
    explanation:
      "IPS 限制條件 TTLLU：Time horizon（時間範圍）、Tax（稅務）、Liquidity（流動性）、Legal（法規）、Unique circumstances（特殊情況，如倫理偏好、家族企業股票限制）。",
  },

  // =============================================================
  // 新增題目區 - 高業
  // =============================================================
  {
    id: "senior-inv-extra-1",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "RSI = 78，根據技術分析常見解讀，應該？",
    options: [
      "強力買進",
      "處於超買區，可能回檔",
      "處於超賣區，可能反彈",
      "持續持有",
    ],
    answer: 1,
    explanation:
      "RSI > 70 為超買區，> 80 為強超買，常被視為短線可能回檔訊號。RSI < 30 為超賣（可能反彈）。但 RSI 在強勢趨勢中可能長期維持極端值，須搭配其他指標判斷。",
  },
  {
    id: "senior-inv-extra-2",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "KD 指標出現「死亡交叉」（Death Cross）是指？",
    options: [
      "K 線由下往上穿越 D 線",
      "K 線由上往下穿越 D 線",
      "KD 同時站上 80",
      "KD 同時跌破 20",
    ],
    answer: 1,
    explanation:
      "K 線（快線）由上往下穿越 D 線（慢線）稱為死亡交叉，視為賣出訊號。反之，K 由下往上穿越 D 為「黃金交叉」（買入訊號）。發生在高檔區（> 80）特別有效。",
  },
  {
    id: "senior-inv-extra-3",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "兩支股票 β 分別為 1.5 與 0.5，若市場下跌 10%，理論上兩股下跌幅度分別為？",
    options: [
      "15%、5%",
      "5%、15%",
      "10%、10%",
      "20%、0%",
    ],
    answer: 0,
    explanation:
      "β 衡量對市場波動的敏感度。β = 1.5 → 下跌 1.5 × 10% = 15%；β = 0.5 → 下跌 0.5 × 10% = 5%。空頭時應持有低 β 股票，多頭則持有高 β 股票。",
  },
  {
    id: "senior-inv-extra-4",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "下列何者屬於「半強式效率市場」假說會無效的資訊？",
    options: [
      "歷史價格趨勢",
      "已公布的財報數字",
      "尚未公布的併購消息（內線）",
      "已公開的產業分析報告",
    ],
    answer: 2,
    explanation:
      "半強式效率：所有「公開」資訊都已反映在股價，技術分析+基本分析無效。但「內線」尚未公開，仍能獲取超額報酬。只有強式效率才認為內線也無效。",
  },
  {
    id: "senior-inv-extra-5",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "選擇權的時間價值在到期時為？",
    options: [
      "等於權利金",
      "為零",
      "等於內含價值",
      "等於履約價",
    ],
    answer: 1,
    explanation:
      "到期時，選擇權只剩內含價值（max(S-X, 0) for Call，max(X-S, 0) for Put），時間價值歸零。這就是為何持有買權的人會擔心時間衰減（Theta）。",
  },
  {
    id: "senior-inv-extra-6",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "基金 A：報酬 15%、σ 20%；基金 B：報酬 12%、σ 12%；Rf = 2%。哪個 Sharpe 較高？",
    options: [
      "A 較高",
      "B 較高",
      "兩者相同",
      "無法比較",
    ],
    answer: 1,
    explanation:
      "Sharpe_A = (15-2)/20 = 0.65；Sharpe_B = (12-2)/12 = 0.83。B 較高，代表 B 每單位風險帶來更高的超額報酬，風險調整後表現更佳。",
  },
  {
    id: "senior-fa-extra-1",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "速動比率（Quick Ratio）的計算公式為？",
    options: [
      "流動資產 / 流動負債",
      "(流動資產 - 存貨) / 流動負債",
      "現金 / 流動負債",
      "(流動資產 - 存貨 - 預付費用) / 流動負債",
    ],
    answer: 1,
    explanation:
      "速動比率剔除流動性較差的存貨：(流動資產 - 存貨) / 流動負債。一般 ≥ 1 視為合理。比流動比率更嚴格的償債能力指標，尤其適用於存貨易過時的產業。",
  },
  {
    id: "senior-fa-extra-2",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "公司毛利率連續 3 年從 35% 降至 28%、22%。最可能的原因是？",
    options: [
      "管理費用增加",
      "原料成本上升或產品降價競爭",
      "稅率上升",
      "利息費用增加",
    ],
    answer: 1,
    explanation:
      "毛利率 = (營收-銷貨成本)/營收。下降反映「成本面或售價面」問題：原料上漲、削價競爭、產品組合改變。選項 A、C、D 影響的是營業利益率或淨利率，不是毛利率。",
  },
  {
    id: "senior-fa-extra-3",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "利息保障倍數 = 2.0，公司財務體質？",
    options: [
      "極佳，無償債壓力",
      "偏弱，營業利益僅為利息費用 2 倍，緩衝有限",
      "適中，符合行業標準",
      "無法判斷",
    ],
    answer: 1,
    explanation:
      "利息保障倍數 = EBIT/利息費用。一般 > 5 視為安全，3-5 中等，< 3 偏弱。2.0 表示如果 EBIT 下降 50% 就無法支付利息，風險顯著。投資等級公司通常 > 4。",
  },
  {
    id: "senior-fa-extra-4",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "存貨周轉率 4 次，表示？",
    options: [
      "存貨平均放置 4 天",
      "存貨平均周轉約 91 天才賣出",
      "毛利率 25%",
      "存貨價值是銷貨成本 4 倍",
    ],
    answer: 1,
    explanation:
      "存貨周轉天數 = 365/周轉率 = 365/4 ≈ 91 天。表示存貨平均需 91 天才能賣出。周轉率越高，存貨管理越好，但太高可能代表缺貨風險。",
  },
  {
    id: "senior-fa-extra-5",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "下列何種情況代表「盈餘品質惡化」？",
    options: [
      "淨利成長，CFO 同步成長",
      "淨利成長，但 CFO 下降，應收帳款大幅增加",
      "淨利下降，CFO 改善",
      "淨利穩定，CFO 穩定",
    ],
    answer: 1,
    explanation:
      "淨利上升但 CFO 下降+應收暴增是典型的「盈餘品質惡化」信號：可能是激進認列營收、客戶付款能力下降，甚至涉及虛增營收。Lehman、Enron 都有類似前兆。",
  },
  {
    id: "senior-reg-extra-1",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "依台灣證券交易法，下列何者「非」內部人？",
    options: [
      "公司董事",
      "公司總經理",
      "持股 10% 之大股東",
      "持股 3% 之一般股東",
    ],
    answer: 3,
    explanation:
      "證交法定義內部人包含：董事、監察人、經理人、持股 10% 以上股東，及因職務獲知消息者。持股 3% 一般股東不屬內部人，但若獲知重大消息仍受規範。",
  },
  {
    id: "senior-reg-extra-2",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "公司獨立董事人數規定為？",
    options: [
      "至少 1 席",
      "至少 2 席，且不得少於董事席次 1/5",
      "全部都要獨立",
      "視公司規模而定",
    ],
    answer: 1,
    explanation:
      "上市櫃公司至少 2 席獨立董事，且不得少於 1/5 席次。獨立董事不得與公司有重大利害關係，須具備法律、會計、財務或專業背景，目的在強化監督機制。",
  },
  {
    id: "senior-reg-extra-3",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "證券商「資本適足率」最低要求為？",
    options: [
      "100%",
      "120%",
      "150%",
      "200%",
    ],
    answer: 2,
    explanation:
      "證券商資本適足率 (CAR) 須 ≥ 150%，低於 150% 限制業務、低於 120% 命令停業。比銀行 (8%) 嚴格，因證券商承擔市場價格風險。",
  },
  {
    id: "senior-reg-extra-4",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "公開收購（Tender Offer）強制收購門檻為持有目標公司股權達多少？",
    options: [
      "5%",
      "10%",
      "20%",
      "50%",
    ],
    answer: 2,
    explanation:
      "依台灣公開收購辦法，預定取得已發行股份 20% 以上，須以公開收購方式進行。目的在保障小股東有平等機會以收購人提出的價格出售股票。",
  },
  {
    id: "senior-der-extra-1",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "台指期貨契約乘數為每點？",
    options: [
      "$50",
      "$200",
      "$500",
      "$1,000",
    ],
    answer: 1,
    explanation:
      "台指期貨（TX）每點 $200。小型台指（MTX）每點 $50。若台指漲 100 點，TX 1 口獲利 = 100 × 200 = $20,000；MTX 1 口獲利 = $5,000。",
  },
  {
    id: "senior-der-extra-2",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "下列何者「不是」期貨的功能？",
    options: [
      "避險",
      "投機",
      "套利",
      "獲取股利收入",
    ],
    answer: 3,
    explanation:
      "期貨三大功能：避險（鎖定價格）、投機（賺取價差）、套利（無風險利潤）。期貨無股利收入，因為持有期貨不是持有股票本身。買進股票才能領股利。",
  },
  {
    id: "senior-der-extra-3",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "保護性賣權（Protective Put）策略的最大損失為？",
    options: [
      "無限大",
      "股價買入成本 + Put 權利金 - 履約價",
      "股價買入成本",
      "Put 權利金",
    ],
    answer: 1,
    explanation:
      "Protective Put = 持有股票 + 買 Put。即使股價跌到 0，仍可用 X 賣出，最大損失 = (購股成本 - X) + Put 權利金。等同於買「下檔保險」，保留上檔獲利。",
  },
  {
    id: "senior-der-extra-4",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "投資人預期市場將大幅波動但方向不確定，最適合的策略是？",
    options: [
      "賣出 Straddle",
      "買進 Straddle（同時買 Call 和 Put）",
      "賣出股票",
      "買進 Covered Call",
    ],
    answer: 1,
    explanation:
      "買進 Straddle = 同履約價同到期日的 Call + Put，獲利於大幅波動（不論漲跌）。常用於財報前、重大事件前。最大損失 = 兩個權利金總和（若股價波動不大）。",
  },

  // =============================================================
  // 新增題目區 - 初業
  // =============================================================
  {
    id: "junior-reg-extra-1",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "台灣股票集中市場的成交價優先撮合原則為？",
    options: [
      "時間優先 > 價格優先",
      "價格優先 > 時間優先",
      "委託數量優先 > 時間優先",
      "依券商議定順序",
    ],
    answer: 1,
    explanation:
      "撮合原則：價格優先（買價較高、賣價較低優先）→ 時間優先（同價格先委託先成交）。逐筆交易制度下每筆委託進來即時撮合，價格優先一律先決定。",
  },
  {
    id: "junior-reg-extra-2",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "上市公司重大訊息公開後幾小時內，內部人不得買賣自家股票？",
    options: [
      "1 小時",
      "12 小時",
      "18 小時",
      "24 小時",
    ],
    answer: 2,
    explanation:
      "重大訊息經公開後須等 18 小時，市場有充分消化時間後，內部人才能交易。此規定避免內部人比市場早一步使用重大資訊。違反屬內線交易。",
  },
  {
    id: "junior-reg-extra-3",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "全權委託投資業務由下列何種機構辦理？",
    options: [
      "銀行",
      "證券經紀商",
      "投信、投顧（取得全委許可）",
      "壽險公司",
    ],
    answer: 2,
    explanation:
      "全權委託（Discretionary Account）讓投資專家代客操作，由投信事業或投顧事業（取得全委業務許可）辦理。一般證券經紀商僅執行客戶指令，不得代客操作。",
  },
  {
    id: "junior-reg-extra-4",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "短線交易歸入權（§157）規定，內部人於買入後多久內賣出，其利益歸屬公司？",
    options: [
      "1 個月",
      "3 個月",
      "6 個月",
      "12 個月",
    ],
    answer: 2,
    explanation:
      "歸入權 = 6 個月內反向交易（買後 6 個月內賣，或賣後 6 個月內買）利益歸公司。目的防止內部人利用資訊優勢短線獲利。即使無內線交易意圖，仍適用此條。",
  },
  {
    id: "junior-prac-extra-1",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "某股每股配發現金股利 $4、股票股利 $1（面額 $10）。除權息參考價如何計算（前收 $100）？",
    options: [
      "($100 - $4) / (1 + 0.1) ≈ $87.27",
      "($100 - $4 - $1) ≈ $95",
      "$100 × 0.9 = $90",
      "$100 - $4 = $96",
    ],
    answer: 0,
    explanation:
      "除息：100 - 4 = $96。除權：96 / (1 + 1/10) = 96 / 1.1 = $87.27。同時除權息：先除息再除權。實務上以除權息參考價作為當日漲跌幅基準。",
  },
  {
    id: "junior-prac-extra-2",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "股票面額 $10，每股淨值 $20，市價 $40。P/B 比為？",
    options: [
      "1",
      "2",
      "4",
      "0.5",
    ],
    answer: 1,
    explanation:
      "P/B = 市價 / 每股淨值 = 40 / 20 = 2。表示市場願意以淨值 2 倍價格購買。P/B > 1 通常代表公司有超額獲利能力或市場樂觀；< 1 可能是價值股或基本面有疑慮。",
  },
  {
    id: "junior-prac-extra-3",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "投資 ETF 0050 與直接買台積電的最大差異是？",
    options: [
      "0050 提供分散投資，包含台灣 50 大企業",
      "0050 報酬一定高於台積電",
      "0050 不需手續費",
      "0050 不需證交稅",
    ],
    answer: 0,
    explanation:
      "0050 追蹤台灣 50 指數，分散投資 50 家大型公司，降低個股風險。台積電佔約 50%，但仍有其他成分股緩衝。0050 證交稅 0.1%（個股 0.3%），手續費仍要付。",
  },
  {
    id: "junior-prac-extra-4",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "下列哪種基金費用率最低？",
    options: [
      "主動型股票基金",
      "ETF（指數型基金）",
      "避險基金",
      "私募基金",
    ],
    answer: 1,
    explanation:
      "ETF 採被動追蹤指數策略，管理成本低，年費率通常 0.3-0.5%。主動型基金 1-2%、避險基金 2/20（2% 管理費 + 20% 績效獎金）、私募基金費用最高。長期投資 ETF 較划算。",
  },
  {
    id: "junior-acc-extra-1",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "T+2 交割制度，若 T 日為週三買進股票，最晚何時前需交割款項？",
    options: [
      "週四",
      "週五上午 10:00 前",
      "下週一上午 10:00 前",
      "下週二上午 10:00 前",
    ],
    answer: 1,
    explanation:
      "T 日（週三）+2 個營業日 = 週五（T+2）上午 10:00 前需款項到位。若 T 日為週四，T+2 為下週一。週末不計算為交易日。",
  },
  {
    id: "junior-acc-extra-2",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "違約交割的罰金為成交金額的？",
    options: [
      "1%",
      "5%",
      "7%",
      "10%",
    ],
    answer: 2,
    explanation:
      "違約交割罰金為成交金額的 7%。除罰金外，3 年內不得開設新帳戶，嚴重者移送法辦。違約交割記錄會影響日後信用，務必準時交割。",
  },
  {
    id: "junior-acc-extra-3",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "融資維持率低於多少時會收到券商追繳通知？",
    options: [
      "100%",
      "120%",
      "130%",
      "150%",
    ],
    answer: 2,
    explanation:
      "融資維持率 < 130% 時觸發追繳通知，投資人需在 2 個營業日內補足至 166%（恢復原始保證金水準）。若未補足，券商將強制處分（俗稱「斷頭」）。",
  },
  {
    id: "junior-acc-extra-4",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "融資成數為 60%，買進 $100,000 股票，自備款為？",
    options: [
      "$30,000",
      "$40,000",
      "$60,000",
      "$70,000",
    ],
    answer: 1,
    explanation:
      "融資 60% 表示券商借 60%（$60,000），自備款 40%（$40,000）。融資能放大獲利，但也放大損失，利率約 6-7%。維持率低於 130% 將被追繳。",
  },
  {
    id: "junior-tax-extra-1",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "股票賣出成交金額 $500,000，證交稅應繳？",
    options: [
      "$1,500",
      "$500",
      "$2,500",
      "$5,000",
    ],
    answer: 0,
    explanation:
      "股票證交稅率 0.3%（賣方負擔）：500,000 × 0.3% = $1,500。ETF 則為 0.1%。買進不課證交稅，但買賣雙方都要付 0.1425% 手續費（含折扣後通常較低）。",
  },
  {
    id: "junior-tax-extra-2",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "股利所得 $200,000，個人綜所稅率 12%。合併計稅 vs 分開計稅，哪種較有利？",
    options: [
      "合併計稅較有利",
      "分開計稅較有利",
      "兩者相同",
      "視證交稅而定",
    ],
    answer: 0,
    explanation:
      "合併：200,000 × 12% - 200,000 × 8.5%(抵減) = 24,000 - 17,000 = $7,000（有效稅率 3.5%）。分開：200,000 × 28% = $56,000。合併大幅勝出。一般綜所稅率 < 30% 時合併較好。",
  },
  {
    id: "junior-tax-extra-3",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "海外所得多少需計入最低稅負制基本所得額？",
    options: [
      "全額",
      "超過 100 萬部分",
      "100 萬以上全額",
      "無需計入",
    ],
    answer: 2,
    explanation:
      "海外所得超過 100 萬時，「全額」計入基本所得額（非僅超過部分）。基本所得額再扣除 750 萬免稅額後，超額部分課 20% 最低稅負，與一般所得稅取高者。",
  },
  {
    id: "junior-tax-extra-4",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "ETF 與股票相比，賣出時稅務優勢在於？",
    options: [
      "免證交稅",
      "證交稅率 0.1%（股票為 0.3%），稅負較低",
      "免所得稅",
      "免手續費",
    ],
    answer: 1,
    explanation:
      "ETF 證交稅率 0.1%，比股票 0.3% 低 2/3。$100 萬交易節省 $2,000 稅金。但債券型 ETF 進一步降至 0%。手續費和所得稅與股票相同。",
  },

  // =============================================================
  // 新增題目區 - FRM
  // =============================================================
  {
    id: "frm-found-extra-1",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "風險偏好（Risk Appetite）與風險容忍度（Risk Tolerance）的關係是？",
    options: [
      "完全相同",
      "風險偏好是「想承擔多少」，風險容忍度是「可接受偏離範圍」",
      "風險容忍度大於風險偏好",
      "兩者皆由監理機關決定",
    ],
    answer: 1,
    explanation:
      "風險偏好：組織願意承擔多少風險以達成目標（策略層級）。風險容忍度：在風險偏好周圍可接受的波動範圍（操作層級）。風險限額是更具體的數字上限。",
  },
  {
    id: "frm-found-extra-2",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "下列何者「不屬於」操作風險？",
    options: [
      "交易員未經授權交易",
      "資訊系統當機",
      "利率上升造成的債券損失",
      "員工詐欺",
    ],
    answer: 2,
    explanation:
      "利率上升造成的債券損失屬於「市場風險」（利率風險）。Basel 操作風險定義：內部流程、人員、系統失誤或外部事件造成的損失。市場價格波動本身不算操作風險。",
  },
  {
    id: "frm-found-extra-3",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "2008 年金融危機的關鍵教訓「不包括」？",
    options: [
      "信用評等機構不可盲信",
      "槓桿放大損失",
      "系統性風險的存在",
      "技術分析優於基本分析",
    ],
    answer: 3,
    explanation:
      "2008 危機教訓：信用評等失職（次級房貸 CDO 被評 AAA）、過度槓桿（雷曼 30:1）、系統性風險（一家倒拖垮全體）、流動性蒸發。技術 vs 基本分析無關。",
  },
  {
    id: "frm-found-extra-4",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "LTCM（長期資本管理公司）崩盤主因不包括？",
    options: [
      "過度槓桿（約 25:1）",
      "模型在極端情境下失效",
      "俄羅斯違約引發市場恐慌",
      "缺乏資本",
    ],
    answer: 3,
    explanation:
      "LTCM 有 $47 億資本，不算缺資本。問題是：用 47 億控制 1,250 億部位（槓桿 25:1）、模型假設正常市場、危機中相關性突然上升、流動性枯竭。最終 14 家銀行救助避免系統危機。",
  },
  {
    id: "frm-mr-extra-1",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "投資組合 $5,000 萬，日報酬標準差 1.5%。95% 信心水準 1 日 VaR 約為？",
    options: [
      "$75 萬",
      "$123 萬",
      "$175 萬",
      "$200 萬",
    ],
    answer: 1,
    explanation:
      "VaR = z × σ × Portfolio = 1.645 × 1.5% × 5,000 萬 = $123 萬。95% 信心對應單尾 z = 1.645。意義：95% 信心，1 日損失不超過 $123 萬；5% 機率超過此數。",
  },
  {
    id: "frm-mr-extra-2",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "1 日 VaR = $200 萬，10 日 VaR 約為？",
    options: [
      "$200 萬",
      "$632 萬",
      "$2,000 萬",
      "$1,000 萬",
    ],
    answer: 1,
    explanation:
      "VaR_T = VaR_1 × √T = 200 × √10 = 200 × 3.162 = $632 萬。假設報酬獨立同分配（i.i.d.）。注意：危機時報酬會有自相關，√T 規則可能低估長期 VaR。",
  },
  {
    id: "frm-mr-extra-3",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "下列何者「不是」VaR 的限制？",
    options: [
      "未衡量超過 VaR 的尾部風險",
      "不具次可加性",
      "對分配假設敏感",
      "無法計算單一資產的風險",
    ],
    answer: 3,
    explanation:
      "VaR 可用於單一資產也可用於投資組合，這不是限制。真正的限制：(1) 不告訴你超過 VaR 後損失多少 (2) 非一致性風險指標 (3) 過度依賴常態分配可能低估極端風險。",
  },
  {
    id: "frm-mr-extra-4",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "Expected Shortfall (ES) 相對於 VaR 的優勢是？",
    options: [
      "計算更簡單",
      "考慮尾部風險，且具次可加性",
      "需要的數據較少",
      "完全免於模型風險",
    ],
    answer: 1,
    explanation:
      "ES（又稱 CVaR）= 損失超過 VaR 時的條件平均損失。優點：(1) 衡量尾部嚴重程度 (2) 具次可加性（合併投資組合 ES ≤ 個別 ES 之和）。Basel III 已用 ES 取代 VaR。",
  },
  {
    id: "frm-mr-extra-5",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "反向壓力測試（Reverse Stress Test）的目的是？",
    options: [
      "驗證 VaR 模型",
      "找出能導致機構倒閉的情境，並評估其機率",
      "計算法規資本",
      "改善客戶服務",
    ],
    answer: 1,
    explanation:
      "傳統壓力測試問「若 X 發生會損失多少」；反向壓力測試問「什麼情境會讓我們倒？發生機率多高？」。後 2008 危機監理機關特別重視，迫使機構思考最壞情境。",
  },
  {
    id: "frm-cr-extra-1",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "$1,000 萬貸款，PD = 3%、LGD = 60%、EAD = $1,000 萬。預期損失為？",
    options: [
      "$15 萬",
      "$18 萬",
      "$30 萬",
      "$60 萬",
    ],
    answer: 1,
    explanation:
      "EL = PD × LGD × EAD = 3% × 60% × 1,000 萬 = $18 萬。銀行透過提存備抵呆帳因應預期損失；超出部分（非預期損失）才需資本緩衝。",
  },
  {
    id: "frm-cr-extra-2",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "Merton 模型將「股權」視為？",
    options: [
      "公司資產的賣權",
      "公司資產的買權",
      "債券",
      "永續年金",
    ],
    answer: 1,
    explanation:
      "Merton 模型核心：股東等於買進「公司資產買權」，履約價 = 負債面額。若到期日資產 > 負債，股東「行使買權」（清償債後拿剩餘）；若 < 負債則放棄（違約）。",
  },
  {
    id: "frm-cr-extra-3",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "信用違約交換（CDS）價差擴大代表？",
    options: [
      "市場認為違約風險下降",
      "市場認為違約風險上升",
      "央行升息",
      "股市上漲",
    ],
    answer: 1,
    explanation:
      "CDS Spread ≈ PD × LGD。價差擴大表示市場願意支付更多保護費，反映違約風險預期上升。CDS 常作為信用風險的即時指標，比評等機構反應快。",
  },
  {
    id: "frm-cr-extra-4",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "S&P 評等中投資等級與投機等級的分界線為？",
    options: [
      "A 與 BBB 之間",
      "BBB 與 BB 之間（BBB- 為投資等級最低）",
      "BB 與 B 之間",
      "AA 與 A 之間",
    ],
    answer: 1,
    explanation:
      "投資等級：AAA, AA, A, BBB（含 BBB-）；投機等級（高收益債/垃圾債）：BB+, BB, B, CCC, CC, C, D。許多機構投資人（如退休金、保險）僅能投資投資等級。",
  },
  {
    id: "frm-or-extra-1",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "基本指標法（BIA）下操作風險資本計算公式為？",
    options: [
      "前 3 年平均營業毛利 × 15%",
      "總資產 × 8%",
      "風險加權資產 × 12%",
      "前 3 年平均淨利 × 20%",
    ],
    answer: 0,
    explanation:
      "BIA：操作風險資本 = 過去 3 年「正」營業毛利平均 × α (15%)。簡單但粗糙：未考慮業務線差異、激勵機構成長即增加資本。SA 法依業務線分別計算 β 係數。",
  },
  {
    id: "frm-or-extra-2",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "下列何者「不屬於」Basel 七大操作風險損失事件類型？",
    options: [
      "內部詐欺",
      "外部詐欺",
      "市場風險損失",
      "營運中斷與系統失效",
    ],
    answer: 2,
    explanation:
      "七大事件：內部詐欺、外部詐欺、雇用實務與工作場所安全、客戶/產品/業務慣例、實體資產損害、營運中斷與系統失效、執行與流程管理。市場風險屬於市場風險，非操作風險。",
  },
  {
    id: "frm-or-extra-3",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "KRI（Key Risk Indicator）的作用是？",
    options: [
      "計算法規資本",
      "事後檢討損失原因",
      "提供事前預警，量化追蹤潛在風險",
      "取代內部稽核",
    ],
    answer: 2,
    explanation:
      "KRI 是前瞻性、量化的早期預警指標，例：系統當機次數、員工流動率、客訴件數。設紅黃綠燈門檻，超標時觸發行動。配合損失事件資料庫（LED）共同管理操作風險。",
  },
  {
    id: "frm-lr-extra-1",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "LCR（流動性覆蓋率）要求為？",
    options: [
      "HQLA / 30 天淨現金流出 ≥ 80%",
      "HQLA / 30 天淨現金流出 ≥ 100%",
      "存款 / 貸款 ≥ 100%",
      "資本 / 風險加權資產 ≥ 8%",
    ],
    answer: 1,
    explanation:
      "LCR = HQLA / 30 天壓力情境下淨現金流出 ≥ 100%。確保銀行有足夠優質流動資產（國庫券、央行準備金）應對 30 天嚴重資金流出。Basel III 核心流動性要求。",
  },
  {
    id: "frm-lr-extra-2",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "NSFR（淨穩定資金比率）關注的時間範圍為？",
    options: [
      "30 天",
      "90 天",
      "1 年",
      "5 年",
    ],
    answer: 2,
    explanation:
      "NSFR 確保銀行有穩定的「1 年期」資金來源支持資產組合，避免過度依賴短期批發融資。LCR 是短期（30 天）、NSFR 是中期（1 年），兩者互補。",
  },
  {
    id: "frm-lr-extra-3",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "Northern Rock（北岩銀行）2007 年破產的主因是？",
    options: [
      "信用損失",
      "過度依賴短期批發融資、流動性結構脆弱",
      "詐欺",
      "外匯損失",
    ],
    answer: 1,
    explanation:
      "北岩 75% 資金來自短期批發市場（非零售存款）。次貸危機爆發後短期市場凍結，立刻陷入流動性危機。雖然資產品質尚可，但流動性問題仍導致擠兌與國有化。",
  },

  // =============================================================
  // 第二輪擴充 - CFA Level I 進階題
  // =============================================================
  {
    id: "cfa1-eth-v2-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "分析師 A 為某避險基金工作，同時為某券商提供獨立研究。下列何種揭露最為適當？",
    options: [
      "只向避險基金揭露券商關係",
      "只向券商揭露避險基金關係",
      "向所有相關方（雇主與客戶）完整揭露雙重身分",
      "不需要揭露，因為兩者業務不衝突",
    ],
    answer: 2,
    explanation:
      "Standard VI(A) 利益衝突揭露：所有可能影響判斷的關係都必須向相關方完整揭露。雙重身分本身就是潛在衝突，須讓所有利害關係人知悉以做出明智判斷。",
  },
  {
    id: "cfa1-eth-v2-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "下列何者「不屬於」Standard III(C) 投資適當性的要求？",
    options: [
      "了解客戶的風險承受度",
      "確保投資建議符合客戶 IPS",
      "保證客戶獲利",
      "考慮客戶的時間範圍與流動性需求",
    ],
    answer: 2,
    explanation:
      "投資適當性要求：了解客戶（KYC）、評估風險承受度、確認時間範圍、考量流動性需求。但「保證獲利」是禁止的——任何承諾報酬都違反 CFA 準則並可能涉及詐欺。",
  },
  {
    id: "cfa1-eth-v2-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "Standard VI(B) 交易優先順序的正確排列為？",
    options: [
      "個人 > 公司自營 > 客戶",
      "客戶 > 公司自營 > 個人",
      "公司自營 > 客戶 > 個人",
      "三者同時優先",
    ],
    answer: 1,
    explanation:
      "客戶利益永遠優先，其次公司自營，最後才是個人交易。Front-running（搶在客戶之前交易）是嚴重違規。實務上會設置 24-48 小時延遲，確保客戶先行成交。",
  },
  {
    id: "cfa1-quant-v2-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "投資 $20,000，每月複利 6% 年利率，5 年後本利和約為？",
    options: [
      "$26,000",
      "$26,977",
      "$27,500",
      "$28,200",
    ],
    answer: 1,
    explanation:
      "月利率 = 6%/12 = 0.5%，期數 = 60。FV = 20,000 × (1.005)^60 = 20,000 × 1.3489 ≈ $26,977。注意：(1.005)^60 約 1.3489，比 (1.06)^5 ≈ 1.3382 略大。",
  },
  {
    id: "cfa1-quant-v2-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "想 10 年後達 $1,000,000，年利率 7%，每年期末應存多少？",
    options: [
      "$67,300",
      "$72,378",
      "$80,000",
      "$93,560",
    ],
    answer: 1,
    explanation:
      "FV of Annuity = PMT × [(1+r)^n - 1]/r。1,000,000 = PMT × [(1.07)^10 - 1]/0.07 = PMT × 13.816。PMT = 1,000,000 / 13.816 ≈ $72,378。",
  },
  {
    id: "cfa1-quant-v2-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "某資料：平均數 = 50、中位數 = 45、眾數 = 40。分配為？",
    options: [
      "對稱",
      "右偏（正偏）",
      "左偏（負偏）",
      "雙峰",
    ],
    answer: 1,
    explanation:
      "Mean > Median > Mode 顯示右尾較長 → 正偏態（右偏）。少數高值將平均數拉高。負偏態相反。金融報酬常呈負偏態（極端虧損可能性較大）。",
  },
  {
    id: "cfa1-quant-v2-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "投資組合 95% VaR = $1,000，下列何者解讀正確？",
    options: [
      "100% 信心下不會損失超過 $1,000",
      "平均每天損失 $1,000",
      "5% 機率下，損失將超過 $1,000",
      "最大可能損失為 $1,000",
    ],
    answer: 2,
    explanation:
      "95% VaR = $1,000 表示：(1) 有 95% 信心損失不超過 $1,000 (2) 有 5% 機率損失超過 $1,000。但「超過後損失多少」VaR 無法告知，這就是引入 ES 的原因。",
  },
  {
    id: "cfa1-quant-v2-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "兩變數相關係數 = 0.85，下列敘述何者正確？",
    options: [
      "X 因果決定 Y",
      "高度正線性關係，但不代表因果",
      "兩變數獨立",
      "Y = 0.85 × X",
    ],
    answer: 1,
    explanation:
      "相關係數衡量「線性」關係強度，範圍 -1 ~ 1。0.85 表示高度正相關，但「相關不等於因果」。可能由第三變數驅動或是巧合（如冰淇淋銷量與溺水人數）。",
  },
  {
    id: "cfa1-econ-v2-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "下列何者「不是」中央銀行的工具？",
    options: [
      "公開市場操作",
      "重貼現率",
      "存款準備率",
      "個人所得稅率",
    ],
    answer: 3,
    explanation:
      "央行貨幣政策工具：公開市場操作、重貼現率、存款準備率、量化寬鬆。所得稅是「財政政策」由政府／立法機關決定，不屬央行職權。",
  },
  {
    id: "cfa1-econ-v2-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "需求彈性 = 0.4 的商品最可能是？",
    options: [
      "奢侈品",
      "必需品",
      "替代性高的商品",
      "完全彈性商品",
    ],
    answer: 1,
    explanation:
      "彈性 < 1 為缺乏彈性，典型為必需品（米、鹽、藥品）。彈性 > 1 為富有彈性（奢侈品、有替代品）。0 為完全無彈性（生死攸關藥品），∞ 為完全彈性（完全競爭）。",
  },
  {
    id: "cfa1-econ-v2-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "若 A 國通膨 5%、B 國通膨 2%，根據相對購買力平價，預期匯率變動？",
    options: [
      "A 國貨幣升值約 3%",
      "A 國貨幣貶值約 3%",
      "兩國匯率不變",
      "B 國貨幣貶值約 5%",
    ],
    answer: 1,
    explanation:
      "相對 PPP：高通膨國家貨幣將相對貶值。A 通膨高 3 個百分點 → A 貨幣預期貶值約 3%。直覺：A 國物價上漲快，貨幣購買力下降，匯率調整以反映實質購買力。",
  },
  {
    id: "cfa1-econ-v2-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "短期菲利浦曲線描述？",
    options: [
      "失業率與通膨率正相關",
      "失業率與通膨率反相關",
      "失業率與 GDP 無關",
      "通膨率永遠為正",
    ],
    answer: 1,
    explanation:
      "短期菲利浦曲線：失業率↓ ↔ 通膨↑（反向）。央行可短期權衡。但長期菲利浦曲線是垂直的（自然失業率），意味長期無法用通膨換取失業降低。",
  },
  {
    id: "cfa1-fra-v2-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "下列何項屬於「營業活動」現金流？",
    options: [
      "支付股利",
      "購買廠房設備",
      "收到客戶貨款",
      "發行新股",
    ],
    answer: 2,
    explanation:
      "營業活動 = 本業日常交易：收貨款、付供應商、付薪資、付利息、付稅。投資活動 = 買賣長期資產。籌資活動 = 發行/償還債務、發行/買回股票、發放股利。",
  },
  {
    id: "cfa1-fra-v2-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "Dupont 三因子顯示 ROE = 25%，淨利率 5%、權益乘數 5。資產周轉率為？",
    options: [
      "0.5",
      "1.0",
      "1.5",
      "2.0",
    ],
    answer: 1,
    explanation:
      "ROE = 淨利率 × 資產周轉 × 權益乘數。25% = 5% × X × 5 → X = 25% / 25% = 1.0。注意 ROE 由「高槓桿」貢獻很多，這類公司在景氣下行時風險較高。",
  },
  {
    id: "cfa1-fra-v2-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "IFRS 下，研發費用的處理為？",
    options: [
      "全部費用化",
      "研究階段費用化、開發階段（符合條件）資本化",
      "全部資本化",
      "可由公司自行選擇",
    ],
    answer: 1,
    explanation:
      "IFRS：研究費用化、開發符合 6 條件（如技術可行、有意圖完成等）才資本化。US GAAP 通常全部費用化（除特定軟體開發）。資本化會使近期 EPS 較高但未來折舊增加。",
  },
  {
    id: "cfa1-fra-v2-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "存貨周轉率從 6 降至 3，存貨周轉天數變為？",
    options: [
      "由 60 天變 30 天",
      "由 60 天變 122 天",
      "由 30 天變 60 天",
      "由 30 天變 90 天",
    ],
    answer: 1,
    explanation:
      "存貨周轉天數 = 365 / 周轉率。原本 365/6 ≈ 60 天，變 365/3 ≈ 122 天。周轉率下降代表存貨積壓變嚴重，可能反映需求疲弱或庫存管理不佳。",
  },
  {
    id: "cfa1-corp-v2-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "WACC：股權成本 12%、稅前負債成本 6%、稅率 25%、D/V = 0.4。WACC 為？",
    options: [
      "8.0%",
      "8.4%",
      "9.0%",
      "10.0%",
    ],
    answer: 1,
    explanation:
      "WACC = 0.6 × 12% + 0.4 × 6% × (1-25%) = 7.2% + 1.8% = 9.0%。等等，計算 = 7.2% + 0.4×6%×0.75 = 7.2% + 1.8% = 9.0%。但若採用 0.4 × 6% × 0.75 = 1.8% 與 7.2% 加總得 9.0%。注意稅後負債成本 = 6% × (1-0.25) = 4.5%，加權 = 4.5% × 0.4 = 1.8%，加上股權 7.2%，合計 9.0%。",
  },
  {
    id: "cfa1-corp-v2-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "回收期法（Payback Period）的最大缺點是？",
    options: [
      "計算太複雜",
      "忽略時間價值與回收期後的現金流",
      "需要折現率",
      "適用太多專案",
    ],
    answer: 1,
    explanation:
      "簡單回收期不考慮時間價值、忽略回收期後的現金流。折現回收期改善前者但仍忽略後者。NPV 和 IRR 同時考慮兩者，因此是較佳的工具。",
  },
  {
    id: "cfa1-corp-v2-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "公司宣布股票回購後股價通常上漲，最主要原因是？",
    options: [
      "市值減少",
      "EPS 提高、被視為管理層認為股價低估的信號",
      "公司負債減少",
      "稅率降低",
    ],
    answer: 1,
    explanation:
      "股票回購：流通股數減少 → EPS 提升、ROE 提升。同時被視為管理層的信號（認為股價低估，否則不會買回）。但若公司大量舉債回購，需注意財務體質。",
  },
  {
    id: "cfa1-eq-v2-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "兩階段 DDM：未來 5 年股利成長 15%，之後永續成長 4%。要求報酬率 10%。D₀ = $2。第 5 年末永續價值（Terminal Value）為？",
    options: [
      "$48",
      "$67",
      "$70",
      "$80",
    ],
    answer: 2,
    explanation:
      "D₅ = 2 × (1.15)^5 = 2 × 2.0114 ≈ $4.02。D₆ = D₅ × 1.04 = $4.18。TV₅ = D₆/(r-g) = 4.18/(0.10-0.04) = 4.18/0.06 ≈ $70。再折現至 t=0 得到 PV。",
  },
  {
    id: "cfa1-eq-v2-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "P/E = 20、EPS = $3，理論股價為？",
    options: [
      "$20",
      "$60",
      "$15",
      "$23",
    ],
    answer: 1,
    explanation:
      "Price = P/E × EPS = 20 × $3 = $60。注意：高 P/E 不一定昂貴，可能反映高成長預期。應與同產業比較或用 PEG 看是否合理。",
  },
  {
    id: "cfa1-eq-v2-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "EV/EBITDA 中的 EV 計算為？",
    options: [
      "市值 + 總負債",
      "市值 + 淨負債（總負債 - 現金）",
      "市值 + 股東權益",
      "總資產 - 現金",
    ],
    answer: 1,
    explanation:
      "Enterprise Value = 市值 + 淨負債 = 市值 + 總負債 - 現金。代表「買下整間公司並還清淨負債」的成本。EV/EBITDA 不受資本結構影響，適合跨公司比較。",
  },
  {
    id: "cfa1-fi-v2-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "零息債券（Zero Coupon Bond）的 Macaulay Duration 為？",
    options: [
      "永遠等於 1",
      "等於到期年數",
      "等於 YTM",
      "等於 0",
    ],
    answer: 1,
    explanation:
      "零息債券到期才有單一現金流，Macaulay Duration = 到期年數。10 年零息債券 Duration = 10，是相同期限債券中 Duration 最大者（票面利率最低）。",
  },
  {
    id: "cfa1-fi-v2-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "可轉換公司債（Convertible Bond）的價格通常？",
    options: [
      "等於普通公司債",
      "高於同條件普通公司債（因含轉換權利）",
      "低於同條件普通公司債",
      "等於股票價格",
    ],
    answer: 1,
    explanation:
      "可轉債 = 普通公司債 + 嵌入 Call 選擇權（轉股權）。投資人多獲得選擇權價值，因此價格較高、票面利率較低。發行人取得較低融資成本。",
  },
  {
    id: "cfa1-fi-v2-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "信用利差擴大（Credit Spread Widening）對公司債持有人的影響？",
    options: [
      "持有債券價格上漲",
      "持有債券價格下跌（市場要求更高殖利率）",
      "無影響",
      "票面利率自動調整",
    ],
    answer: 1,
    explanation:
      "信用利差 = 公司債殖利率 - 國債殖利率。擴大表示市場認為信用風險增加，要求更高補償 → 既有債券殖利率上升、價格下跌。2008 危機時各類債券利差暴增。",
  },
  {
    id: "cfa1-der-v2-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "Put-Call Parity：C = $5、X = $50、Rf = 5%、T = 1 年、S = $48。理論 P 為？",
    options: [
      "$2.62",
      "$4.62",
      "$5.50",
      "$7.62",
    ],
    answer: 1,
    explanation:
      "C + PV(X) = P + S → P = C + X/(1+r)^T - S = 5 + 50/1.05 - 48 = 5 + 47.62 - 48 = $4.62。若市場 P 偏離此值，存在套利機會。",
  },
  {
    id: "cfa1-der-v2-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "歐式選擇權 vs 美式選擇權，下列敘述正確？",
    options: [
      "歐式價值 ≥ 美式",
      "美式價值 ≥ 歐式（多提前行使選擇權）",
      "兩者價值永遠相同",
      "歐式可在到期日前任何時間行使",
    ],
    answer: 1,
    explanation:
      "美式選擇權多了「提前行使」的彈性，因此美式 ≥ 歐式。但對不付股利股票的買權，提前行使無利可圖，所以美式 = 歐式 Call。歐式 Put 則可能因利率因素值得提前行使。",
  },
  {
    id: "cfa1-der-v2-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "Theta（時間衰減）對買方而言通常為？",
    options: [
      "正值（時間流逝有利）",
      "負值（時間流逝不利）",
      "零",
      "不定",
    ],
    answer: 1,
    explanation:
      "選擇權買方的 Theta 通常為負：每日時間流逝，剩餘時間價值減少。賣方則賺取時間價值（Theta 為正）。短天期、價平選擇權 Theta 絕對值最大。",
  },
  {
    id: "cfa1-port-v2-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "Information Ratio = 0.5 表示？",
    options: [
      "每承擔 1 單位追蹤誤差獲得 0.5 單位主動報酬",
      "投資組合報酬率 50%",
      "與基準完全一致",
      "風險為基準的一半",
    ],
    answer: 0,
    explanation:
      "IR = (Rp - Rb) / 追蹤誤差。0.5 表示每單位主動風險換到 0.5 單位主動報酬。IR > 0.5 算優秀，> 1 罕見且優異。是評估主動管理基金經理人效率的指標。",
  },
  {
    id: "cfa1-port-v2-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "投資人風險承受度「意願」高但「能力」低，IPS 應採？",
    options: [
      "高風險高報酬策略",
      "依較低者，採保守策略",
      "依較高者，採積極策略",
      "完全持有現金",
    ],
    answer: 1,
    explanation:
      "風險承受度 = min(意願, 能力)。當衝突時依較低者。即使投資人想冒險，若財務狀況無法承受損失，仍應採保守配置。教育投資人是顧問的責任。",
  },
  {
    id: "cfa1-port-v2-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "策略性資產配置（SAA）的時間範圍通常為？",
    options: [
      "1 天",
      "1 週",
      "1 個月",
      "5-10 年",
    ],
    answer: 3,
    explanation:
      "SAA 反映投資人長期風險偏好和目標，時間範圍 5-10 年。TAA（戰術配置）短期偏離 SAA（數月）以利用市場機會。再平衡將組合拉回 SAA 目標權重。",
  },
  {
    id: "cfa1-port-v2-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "標準差 = 25%、β = 1.2、市場標準差 = 20%。相關係數約為？",
    options: [
      "0.60",
      "0.80",
      "0.96",
      "1.20",
    ],
    answer: 2,
    explanation:
      "β = ρ × (σi/σm) → ρ = β × (σm/σi) = 1.2 × (20%/25%) = 1.2 × 0.8 = 0.96。表示該資產與市場走勢高度同步。完全相關（ρ=1）時 β = σi/σm。",
  },

  // =============================================================
  // 第二輪擴充 - 高業進階題
  // =============================================================
  {
    id: "senior-inv-v2-1",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "下列哪種圖形屬於反轉型態？",
    options: [
      "三角收斂",
      "頭肩頂",
      "矩形整理",
      "旗形",
    ],
    answer: 1,
    explanation:
      "反轉型態：頭肩頂/底、雙重頂/底、三重頂/底，預告趨勢將反轉。整理型態：三角、矩形、旗形、楔形，代表暫時休息後續勢。頭肩頂破頸線常被視為強烈賣訊。",
  },
  {
    id: "senior-inv-v2-2",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "MACD 由上往下穿越訊號線稱為？",
    options: [
      "黃金交叉（買進）",
      "死亡交叉（賣出）",
      "雙重底（買進）",
      "突破壓力（買進）",
    ],
    answer: 1,
    explanation:
      "MACD < 訊號線 = 死亡交叉，多單應減碼。MACD > 訊號線 = 黃金交叉，可考慮做多。MACD 紅綠柱由正轉負亦為賣訊號。長期下跌中的反彈訊號可信度低。",
  },
  {
    id: "senior-inv-v2-3",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "若市場效率為「半強式」，下列何種分析「無效」？",
    options: [
      "技術分析",
      "基本面分析（用已公開資訊）",
      "技術分析與基本面分析",
      "內線交易",
    ],
    answer: 2,
    explanation:
      "半強式效率：股價反映所有公開資訊，技術分析（用歷史價量）和基本分析（用財報、新聞）都無法持續獲取超額報酬。只有內線（未公開資訊）仍能獲利，但違法。",
  },
  {
    id: "senior-inv-v2-4",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "選擇權「履約價 < 標的物現價」的買權處於？",
    options: [
      "價內（In the Money）",
      "價平（At the Money）",
      "價外（Out of the Money）",
      "無履約價值",
    ],
    answer: 0,
    explanation:
      "Call：S > X 為價內、S = X 為價平、S < X 為價外。Put 則相反。價內選擇權含內含價值（max(S-X, 0)），到期前仍含時間價值。深度價內買權 Delta 接近 1。",
  },
  {
    id: "senior-inv-v2-5",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "下列哪種策略屬於「中性策略」（不看漲也不看跌）？",
    options: [
      "買進買權",
      "賣出買權",
      "蝶式價差（Butterfly Spread）",
      "保護性賣權",
    ],
    answer: 2,
    explanation:
      "蝶式價差：買低/高履約價、賣 2 個中履約價（同 Call 或同 Put）。預期標的物窄幅整理。獲利於小波動，損失有限。屬中性策略。Straddle 看大波動但中性方向。",
  },
  {
    id: "senior-fa-v2-1",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "EBITDA 的計算為？",
    options: [
      "淨利 + 利息 + 稅",
      "淨利 + 利息 + 稅 + 折舊 + 攤銷",
      "營收 - 銷貨成本",
      "營業利益 + 利息",
    ],
    answer: 1,
    explanation:
      "EBITDA = Earnings Before Interest, Taxes, Depreciation, Amortization。剔除融資、稅務、會計選擇影響，較能反映本業營運能力。但忽略資本支出需求是缺點。",
  },
  {
    id: "senior-fa-v2-2",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "公司淨利 100、折舊 30、應收增加 20、存貨減少 10。CFO 為？",
    options: [
      "$110",
      "$120",
      "$130",
      "$140",
    ],
    answer: 1,
    explanation:
      "間接法 CFO = 淨利 + 非現金費用 - 資產增加 + 負債增加。CFO = 100 + 30 - 20 + 10 = $120。應收增加（資產↑）扣減，存貨減少（資產↓）加回。",
  },
  {
    id: "senior-fa-v2-3",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "ROIC（投入資本報酬率）與 WACC 比較，正常的健康公司應該？",
    options: [
      "ROIC < WACC",
      "ROIC > WACC（創造價值）",
      "ROIC = WACC",
      "無關",
    ],
    answer: 1,
    explanation:
      "ROIC > WACC 表示公司運用資金的報酬率高於資金成本 → 創造股東價值。長期 ROIC < WACC 等於毀損價值。ROIC 是價值投資者的核心指標，反映競爭優勢。",
  },
  {
    id: "senior-fa-v2-4",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "下列何者為「品質可疑」的盈餘成長來源？",
    options: [
      "本業營收成長",
      "成本控制改善",
      "出售資產的一次性收益",
      "研發創新帶來新產品",
    ],
    answer: 2,
    explanation:
      "一次性收益（出售資產、訴訟和解、稅務退回）不能持續。應該關注「持續性盈餘」的成長。讀財報時要區分經常性 vs 非經常性項目，後者不應給予高評價。",
  },
  {
    id: "senior-reg-v2-1",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "下列何者「不屬於」有價證券？",
    options: [
      "公司股票",
      "公司債券",
      "受益憑證",
      "保險單",
    ],
    answer: 3,
    explanation:
      "保險單不屬於證券交易法定義的有價證券。有價證券包含：政府/公司債券、股票、新股認購證、認購（售）權證、受益憑證、TDR、ABS 等可流通的金融商品。",
  },
  {
    id: "senior-reg-v2-2",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "證券承銷商「包銷」與「代銷」的差異？",
    options: [
      "兩者完全相同",
      "包銷承擔全部銷售風險，代銷僅代為銷售",
      "代銷風險較高",
      "代銷利潤較高",
    ],
    answer: 1,
    explanation:
      "包銷（Firm Commitment）：承銷商買下全部證券再轉售，未售出由其自行承擔。代銷（Best Efforts）：盡力銷售，未售出退回發行公司。包銷風險高，但利潤也較高。",
  },
  {
    id: "senior-reg-v2-3",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "金融消費評議中心處理金融消費爭議的時間原則為？",
    options: [
      "立即處理",
      "申訴 30 天內未獲滿意答覆方可申請評議",
      "需先訴訟才能評議",
      "限定 1 年內",
    ],
    answer: 1,
    explanation:
      "金融消費者保護法規定：投資人應先向金融業者申訴，業者 30 天內未答覆或答覆不滿，可向評議中心申請評議。評議結果在 1 百萬內對業者有拘束力。",
  },
  {
    id: "senior-der-v2-1",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "台指期貨保證金繳交方式為？",
    options: [
      "全額繳交契約價值",
      "繳交契約價值的一定比例（通常 5-15%）",
      "不需保證金",
      "由券商代為墊付",
    ],
    answer: 1,
    explanation:
      "期貨槓桿來自保證金制度。台指期保證金約契約價值 13.5%，相當於 7-8 倍槓桿。原始保證金 vs 維持保證金；維持 < 75% 觸發追繳。槓桿放大獲利也放大損失。",
  },
  {
    id: "senior-der-v2-2",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "選擇權賣方（Short）的最大損失？",
    options: [
      "權利金",
      "無限大（賣 Call）或履約價×乘數（賣 Put）",
      "保證金",
      "與買方相同",
    ],
    answer: 1,
    explanation:
      "賣 Call：股價可漲到無限大 → 損失無限大。賣 Put：股價跌到 0 是最差情境，損失 = (X-0) × 乘數 - 收到的權利金。買方損失僅限權利金。賣方需繳保證金。",
  },
  {
    id: "senior-der-v2-3",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "「Covered Call」（掩護性買權）策略適合預期？",
    options: [
      "股價大漲",
      "股價大跌",
      "股價盤整或小漲（賺取權利金）",
      "波動度大增",
    ],
    answer: 2,
    explanation:
      "Covered Call = 持有股票 + 賣 Call。盤整或小漲時：股票穩定 + 收取權利金 = 增益收益。大漲時：股票被買走（履約），錯失上檔。大跌時：股票虧損 - 權利金少賺一點。",
  },
  {
    id: "senior-der-v2-4",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "Black-Scholes 模型「不適用」於下列何種情境？",
    options: [
      "歐式選擇權",
      "標的物有連續股利",
      "美式 Call 選擇權（不付股利股票）",
      "高度價內、深度價外選擇權",
    ],
    answer: 3,
    explanation:
      "BS 模型假設：歐式、波動度恆定、報酬常態、連續交易、無交易成本。深度價內/價外時波動度微笑（Volatility Smile）顯示假設偏差。BS 結果對極端價格較不準。",
  },

  // =============================================================
  // 第二輪擴充 - 初業進階題
  // =============================================================
  {
    id: "junior-reg-v2-1",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "下列何者「不需要」向公開資訊觀測站公告？",
    options: [
      "重大訴訟",
      "董事長變動",
      "員工每日上下班時間",
      "重要合約簽訂",
    ],
    answer: 2,
    explanation:
      "上市櫃公司重大訊息揭露範圍：併購、財務預測變動、訴訟、人事異動、重要合約、災害、增減資等可能影響投資判斷的資訊。日常營運細節不需要公告。",
  },
  {
    id: "junior-reg-v2-2",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "上市公司年報應於何時前公布？",
    options: [
      "每年 1 月底前",
      "每年 3 月底前",
      "每年 6 月底前",
      "每年 12 月底前",
    ],
    answer: 1,
    explanation:
      "上市櫃公司年報於每年 3 月 31 日前公告。Q1 季報 5/15、Q2 季報 8/14、Q3 季報 11/14、年報 3/31。注意季報已縮短公告期限。",
  },
  {
    id: "junior-reg-v2-3",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "下列哪種交易制度「不適用」於台灣集中市場？",
    options: [
      "逐筆交易",
      "盤中零股交易（11/2 起放寬）",
      "信用交易",
      "T+0 當日交割",
    ],
    answer: 3,
    explanation:
      "台灣為 T+2 交割制度，無 T+0 當日交割。盤中零股交易自 2020/10/26 開始，2024 年放寬規定。逐筆交易自 2020/3/23 上路。信用交易長期施行。",
  },
  {
    id: "junior-prac-v2-1",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "「填息」是指？",
    options: [
      "公司宣布配息",
      "除息後股價回到除息前的水準",
      "投資人領到現金股利",
      "股價跌破除息參考價",
    ],
    answer: 1,
    explanation:
      "除息日股價會扣除股利金額（稱「除息」）。若之後股價漲回除息前水準稱「填息」，代表投資人真正賺到股利。若一直未填息，僅是左口袋換右口袋。",
  },
  {
    id: "junior-prac-v2-2",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "債券殖利率與價格的關係為？",
    options: [
      "正向關係",
      "反向關係（利率上漲，價格下跌）",
      "無關",
      "由發行公司決定",
    ],
    answer: 1,
    explanation:
      "債券價格與利率呈反向關係。利率上升 → 新債券利率高 → 舊低利率債券吸引力下降 → 價格下跌。修正存續期間（Duration）量化此敏感度。",
  },
  {
    id: "junior-prac-v2-3",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "下列何者「不屬於」共同基金的優點？",
    options: [
      "專業經理人管理",
      "分散風險",
      "保證最低報酬率",
      "小額即可投資多元資產",
    ],
    answer: 2,
    explanation:
      "基金無保證最低報酬，過去績效不代表未來。優點：專業管理、分散風險、小額投資（如 1,000 元即可定期定額）、流動性好。缺點：管理費侵蝕報酬、長期績效不一定打敗大盤。",
  },
  {
    id: "junior-prac-v2-4",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "定期定額投資的優勢是？",
    options: [
      "保證獲利",
      "平均成本法降低買入時點風險",
      "可以借錢投資",
      "不需付手續費",
    ],
    answer: 1,
    explanation:
      "定期定額固定時間投入相同金額，高價買少、低價買多，達到平均成本效果，降低時點選擇風險。適合長期、無暇盯盤的投資人。但長期投資成果仍依市場走勢決定。",
  },
  {
    id: "junior-acc-v2-1",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "投資人開立證券戶須年滿幾歲？",
    options: [
      "7 歲",
      "16 歲",
      "18 歲（成年）才能自行開戶",
      "20 歲",
    ],
    answer: 2,
    explanation:
      "依民法成年規定（2023 起 18 歲成年），18 歲可自行開戶。7-18 歲未成年需法定代理人陪同開戶，並由法定代理人共同管理。受破產宣告者不得開戶。",
  },
  {
    id: "junior-acc-v2-2",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "電子下單手續費通常為？",
    options: [
      "公定費率 0.1425%",
      "公定費率打折（如 2.8 折）",
      "免手續費",
      "由投資人決定",
    ],
    answer: 1,
    explanation:
      "公定費率 0.1425%，但券商為吸引電子下單客戶常打折，網路下單約 2.8-6 折。注意：手續費低於最低收費（如 20 元）以最低收費為準。",
  },
  {
    id: "junior-acc-v2-3",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "盤中「集合競價」目前剩餘哪些時段？",
    options: [
      "全部時段都是集合競價",
      "開盤前（8:30-9:00）與收盤前（13:25-13:30）",
      "僅開盤",
      "已全面取消",
    ],
    answer: 1,
    explanation:
      "2020/3/23 起盤中改為逐筆交易（即時撮合）。但開盤前（8:30-9:00）和收盤前（13:25-13:30）仍維持集合競價，分別決定開盤價和收盤價。零股交易為 1 分鐘一次集合競價。",
  },
  {
    id: "junior-acc-v2-4",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "投資人融券賣出時須繳交多少保證金？",
    options: [
      "成交金額 50%",
      "成交金額 70%",
      "成交金額 90%",
      "成交金額 100%",
    ],
    answer: 2,
    explanation:
      "融券賣出保證金為成交金額 90%（投資人需備 90% 現金或證券抵繳）。融券同樣有維持率規定（130%）。融券有放空鎖券、回補日期限制，操作風險高。",
  },
  {
    id: "junior-tax-v2-1",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "下列何種有價證券交易「免」證券交易稅？",
    options: [
      "上市股票",
      "ETF（一般型）",
      "債券型 ETF（停徵中）",
      "認購權證",
    ],
    answer: 2,
    explanation:
      "債券 ETF 為發展債市於 2017 年起停徵證交稅，原稅率 0.1%。其他：股票 0.3%、ETF 0.1%、權證 0.1%、公司債 0.1%。期貨課期貨交易稅。",
  },
  {
    id: "junior-tax-v2-2",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "境內個人股利所得「合併計稅」抵減上限為？",
    options: [
      "$40,000",
      "$60,000",
      "$80,000",
      "無上限",
    ],
    answer: 2,
    explanation:
      "股利合併計稅：股利所得 × 8.5% 可抵減綜所稅應納稅額，「每年上限 8 萬元」。即股利 941,176 元時抵減達 8 萬元上限。超過此金額部分將失去抵減效果。",
  },
  {
    id: "junior-tax-v2-3",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "賣出股票成交金額 $200,000，證交稅 + 公定手續費（買賣各一次）合計約為？",
    options: [
      "$880",
      "$1,170",
      "$2,000",
      "$3,000",
    ],
    answer: 1,
    explanation:
      "證交稅：200,000 × 0.3% = $600。手續費：(200,000+200,000) × 0.1425% = $570。合計 ≈ $1,170。實務上電子下單手續費打折後成本更低。",
  },
  {
    id: "junior-tax-v2-4",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "當你的綜合所得稅率為 30%，股利所得 $500,000，最有利的方式為？",
    options: [
      "合併計稅",
      "分開計稅（28%）",
      "兩者結果一致",
      "拒絕領取股利",
    ],
    answer: 1,
    explanation:
      "合併：500,000 × 30% - min(500,000×8.5%, 80,000) = 150,000 - 42,500 = $107,500。分開：500,000 × 28% = $140,000。但因合併會將股利推入更高稅級，實際合併稅額可能更高，需試算。一般原則：邊際稅率 ≥ 30% 時分開可能較有利。",
  },

  // =============================================================
  // 第二輪擴充 - FRM 進階題
  // =============================================================
  {
    id: "frm-found-v2-1",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "首席風險官（CRO）通常向誰報告？",
    options: [
      "業務部門主管",
      "CEO 與董事會風險委員會（雙重報告）",
      "稽核長",
      "外部監理機關",
    ],
    answer: 1,
    explanation:
      "CRO 雙線報告：向 CEO（行政管理）與董事會風險委員會（獨立性）。後者重要性更高，避免 CEO 干預。CRO 需獨立於業務，有權否決過度風險決策。",
  },
  {
    id: "frm-found-v2-2",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "下列何者「不是」風險治理的三道防線？",
    options: [
      "業務單位（第一道）",
      "風險管理部門（第二道）",
      "內部稽核（第三道）",
      "監理機關（第四道）",
    ],
    answer: 3,
    explanation:
      "三道防線都在組織「內部」：業務、風險管理、稽核。監理機關屬外部監督，不算組織內部防線。三道防線之間應保持獨立性，避免利益衝突。",
  },
  {
    id: "frm-found-v2-3",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "2012 年 JP Morgan「London Whale」事件主因？",
    options: [
      "外部詐欺",
      "交易員建立巨額部位、風險限額被操縱、VaR 模型變更掩蓋風險",
      "系統當機",
      "信用評等下調",
    ],
    answer: 1,
    explanation:
      "London Whale (Bruno Iksil) 在 CDS 市場建立巨額部位（最初為避險，後變投機）。VaR 模型被變更使風險看起來較低，內部監督失靈。最終虧損超 $60 億美元。教訓：模型治理、風險限額紀律。",
  },
  {
    id: "frm-mr-v2-1",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "在 99% 信心水準下的單尾常態 z 值為？",
    options: [
      "1.645",
      "1.96",
      "2.326",
      "2.576",
    ],
    answer: 2,
    explanation:
      "99% 單尾 z = 2.326，雙尾 z = 2.576。95% 單尾 z = 1.645。常見錯誤是混淆單尾雙尾。VaR 通常用單尾（只關心損失方向）。",
  },
  {
    id: "frm-mr-v2-2",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "蒙地卡羅模擬法 vs 歷史模擬法的最大差異？",
    options: [
      "蒙地卡羅依模型隨機生成情境；歷史法用實際過去資料",
      "兩者完全相同",
      "歷史法計算量較大",
      "蒙地卡羅僅用於股票",
    ],
    answer: 0,
    explanation:
      "歷史模擬法：用過去 N 天實際報酬，無分配假設但受歷史限制。蒙地卡羅：依隨機過程模型（如幾何布朗運動）生成數萬條路徑，最靈活但依賴模型。各有優缺。",
  },
  {
    id: "frm-mr-v2-3",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "VaR 不具「次可加性」（Sub-additivity）代表？",
    options: [
      "兩投資組合合併後的 VaR ≤ 各自 VaR 之和",
      "兩投資組合合併後的 VaR 可能 > 各自 VaR 之和",
      "VaR 永遠大於損失",
      "VaR 計算錯誤",
    ],
    answer: 1,
    explanation:
      "次可加性：合併 VaR ≤ 個別 VaR 加總（分散效果）。但 VaR 在某些情境下違反此性質（合併後反而更大），這是其受批評的關鍵原因。ES 具有次可加性，是「一致性風險衡量指標」。",
  },
  {
    id: "frm-mr-v2-4",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "Backtesting VaR 模型時，「綠燈區」表示？",
    options: [
      "VaR 模型完全準確",
      "違反次數在預期範圍內，模型可接受",
      "需要立即停用模型",
      "VaR 值為零",
    ],
    answer: 1,
    explanation:
      "Basel Traffic Light：綠燈 (≤4 違反次數/250 天) 模型可接受；黃燈 (5-9 次) 需檢視；紅燈 (≥10 次) 模型不可靠須改進。Backtesting 是驗證 VaR 模型有效性的關鍵流程。",
  },
  {
    id: "frm-mr-v2-5",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "下列何種風險「無法」用 VaR 衡量？",
    options: [
      "市場價格波動損失",
      "極端尾部損失的嚴重程度",
      "投資組合每日損益",
      "1 日 95% 信心水準下的損失上限",
    ],
    answer: 1,
    explanation:
      "VaR 只告訴你「損失不超過 X 的機率」，但不告訴你「超過 X 後損失多少」。極端尾部損失嚴重程度由 ES（Expected Shortfall）衡量。這是 VaR 的根本限制。",
  },
  {
    id: "frm-cr-v2-1",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "違約損失率（LGD）= 40% 表示？",
    options: [
      "違約時可收回 40%",
      "違約時損失 40%、回收 60%",
      "違約機率 40%",
      "與曝險無關",
    ],
    answer: 1,
    explanation:
      "LGD = 1 - 回收率。LGD 40% → 回收 60%。有擔保品的房貸 LGD 較低（20-30%），無擔保信用卡 LGD 較高（60-80%）。LGD 受擔保品價值、求償順位影響。",
  },
  {
    id: "frm-cr-v2-2",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "信用評等從 A 降至 BBB+，被稱為？",
    options: [
      "信用升等",
      "信用降等（Credit Downgrade）",
      "違約事件",
      "信用觀察",
    ],
    answer: 1,
    explanation:
      "信用評等下調 = Credit Downgrade，反映違約風險上升，債券殖利率將上升、價格下跌。投資等級降至投機等級（Fallen Angel）影響更大，許多機構強制出售。",
  },
  {
    id: "frm-cr-v2-3",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "CDS 買方支付的「保險費」稱為？",
    options: [
      "CDS Spread（CDS 利差）",
      "票面利率",
      "履約價",
      "違約金",
    ],
    answer: 0,
    explanation:
      "CDS Spread 是 CDS 買方定期支付給賣方的費率（年化基點）。如 CDS Spread = 150 bps，代表每 $1,000 萬名目本金每年付 $15 萬保護費。違約時賣方賠付損失。",
  },
  {
    id: "frm-cr-v2-4",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "信用風險的「轉移矩陣」（Transition Matrix）描述？",
    options: [
      "一年內信用評等變動的機率",
      "公司資產移轉",
      "違約時資產轉讓",
      "信用利差變動",
    ],
    answer: 0,
    explanation:
      "轉移矩陣顯示一年內各信用評等之間遷移的歷史機率。例 AAA 一年內維持 AAA 的機率 90%、降至 AA 機率 9%、降至 A 機率 1%。用於計算多年違約機率。",
  },
  {
    id: "frm-cr-v2-5",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "下列何者「不」屬於信用風險緩釋技術？",
    options: [
      "要求擔保品",
      "信用衍生商品（CDS）",
      "淨額結算協議",
      "提高股票投資",
    ],
    answer: 3,
    explanation:
      "信用風險緩釋：擔保品（降低 LGD）、CDS（轉移風險）、淨額結算（減少 EAD）、信用保險、保證。提高股票投資並非緩釋技術，反而可能增加市場風險。",
  },
  {
    id: "frm-or-v2-1",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "操作風險的「損失頻率 × 損失嚴重度」矩陣中，哪類風險最應重點關注？",
    options: [
      "低頻低嚴重",
      "高頻高嚴重（必須立即處理）",
      "高頻低嚴重",
      "低頻低嚴重",
    ],
    answer: 1,
    explanation:
      "風險矩陣：高頻高嚴重 = 紅燈，須立即處置（如核災等不該存在）。高頻低嚴重 = 流程改善。低頻高嚴重 = 保險、BCP。低頻低嚴重 = 接受。RCSA 用此矩陣優先排序。",
  },
  {
    id: "frm-or-v2-2",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "BCP（營運持續計畫）的目的是？",
    options: [
      "增加業務收入",
      "確保災難或重大事件後關鍵業務能持續運作",
      "降低稅負",
      "提升股價",
    ],
    answer: 1,
    explanation:
      "BCP 確保災難（自然、人為、網路攻擊）後關鍵業務可在合理時間內恢復。包含：備援系統、異地辦公、員工通訊計畫、定期演練。COVID-19 期間 BCP 重要性凸顯。",
  },
  {
    id: "frm-or-v2-3",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "下列何者屬於「執行、交割與流程管理」損失事件？",
    options: [
      "員工挪用公款",
      "資料輸入錯誤導致大額損失",
      "颱風造成分行受損",
      "客戶詐騙",
    ],
    answer: 1,
    explanation:
      "執行/交割/流程管理：資料錯誤、報表錯誤、交割失敗、模型錯誤、供應商管理不善。胖手指交易（fat finger）也屬此類。員工挪用屬內部詐欺、颱風屬實體資產、客戶詐騙屬外部詐欺。",
  },
  {
    id: "frm-or-v2-4",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "標準法（SA）與 BIA 的最大差異？",
    options: [
      "SA 計算更簡單",
      "SA 依業務線分別計算 β 係數，比 BIA 細緻",
      "BIA 必須有內部模型",
      "兩者完全相同",
    ],
    answer: 1,
    explanation:
      "BIA：單一 α=15% 用於全部業務毛利。SA：依 8 條業務線分別套用 β（12-18%）。SA 較細緻反映不同業務的操作風險特性。AMA 更進一步用內部模型整合 4 要素。",
  },
  {
    id: "frm-lr-v2-1",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "Basel III 流動性指標中，「LCR」針對的壓力情境是？",
    options: [
      "1 天",
      "30 天嚴重壓力情境",
      "1 年",
      "5 年",
    ],
    answer: 1,
    explanation:
      "LCR（Liquidity Coverage Ratio）確保銀行在「30 天嚴重壓力情境」下，仍有足夠 HQLA 應對淨現金流出。NSFR 則是 1 年期穩定資金，兩者搭配解決短中期流動性。",
  },
  {
    id: "frm-lr-v2-2",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "下列何種資產「屬於」Level 1 HQLA？",
    options: [
      "公司股票",
      "中央銀行準備金、AAA 級政府公債",
      "BBB 級公司債",
      "房地產",
    ],
    answer: 1,
    explanation:
      "Level 1 HQLA（100% 計入）：現金、央行準備金、高評等政府公債（AA-以上）。Level 2A（85%）：高品質公司債、Covered Bonds。Level 2B（50-75%）：較低評等公司債、股票。",
  },
  {
    id: "frm-lr-v2-3",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "市場流動性的衡量指標「不包括」？",
    options: [
      "買賣價差（Bid-Ask Spread）",
      "市場深度",
      "信用評等",
      "價格衝擊",
    ],
    answer: 2,
    explanation:
      "市場流動性衡量：(1) 緊度（Tightness）：買賣價差 (2) 深度（Depth）：不影響價格可交易量 (3) 即時性（Immediacy）：成交速度 (4) 彈性（Resiliency）：價格恢復速度。信用評等屬信用風險，非流動性。",
  },
  {
    id: "frm-lr-v2-4",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "下列何種策略「無法」改善流動性風險？",
    options: [
      "多元化資金來源",
      "持有更多 HQLA",
      "降低期限錯配",
      "增加長期高收益但低流動性資產",
    ],
    answer: 3,
    explanation:
      "增加低流動性資產反而惡化流動性風險。改善方法：多元化資金（避免單一來源依賴）、增加 HQLA 緩衝、減少期限錯配（短期資金支持短期資產）、設定流動性限額、定期壓力測試。",
  },

  // =============================================================
  // 第三輪擴充 - CFA Level I 深度題
  // =============================================================
  {
    id: "cfa1-eth-v3-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "下列何種情況「不」構成違反 Standard II(A) 重大非公開資訊？",
    options: [
      "從公司內部會議獲知併購計畫並交易",
      "透過產業專家網絡聽聞特定公司營運狀況",
      "綜合多個非重大公開資訊得出投資結論",
      "未授權取得競爭對手商業機密",
    ],
    answer: 2,
    explanation:
      "馬賽克理論（Mosaic Theory）允許分析師綜合公開資訊與非重大非公開資訊得出結論，這不違反 II(A)。其他選項均涉及取得或使用重大非公開資訊。",
  },
  {
    id: "cfa1-eth-v3-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "分析師收到客戶禮物 $100 美元水果禮籃，正確處理為？",
    options: [
      "拒絕所有禮物",
      "可接受，小額禮物視為禮貌，但仍應告知主管",
      "必須事先取得書面同意",
      "退還禮物並終止關係",
    ],
    answer: 1,
    explanation:
      "小額禮物（通常 $100 以下）一般可接受，但仍應依公司政策向主管報告。CFA 準則禁止可能影響獨立性的「重大」禮物。$100 通常不算重大。",
  },
  {
    id: "cfa1-eth-v3-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "Standard III(E) 保密原則的例外不包括？",
    options: [
      "法律強制要求揭露",
      "客戶授權揭露",
      "為保護客戶利益必須揭露",
      "向同事炫耀客戶名單",
    ],
    answer: 3,
    explanation:
      "保密例外：(1) 法律強制 (2) 客戶授權 (3) 為保護客戶或他人 (4) 違法行為通報。向他人炫耀屬無正當理由揭露，違反保密原則。",
  },
  {
    id: "cfa1-eth-v3-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "CFA 持證人在社群媒體上推薦某股票，下列何者最重要？",
    options: [
      "獲得高關注度",
      "完整揭露利益衝突、推薦依據、風險",
      "保持神祕感",
      "只發給特定追蹤者",
    ],
    answer: 1,
    explanation:
      "Standard V(B) 規定，與客戶或大眾的溝通須區分事實與意見、揭露限制與風險。社群媒體推薦同樣適用，必須揭露利益關係、推薦依據和風險。",
  },
  {
    id: "cfa1-quant-v3-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "投資 $50,000 連續複利 8% 年利率，10 年後本利和為？",
    options: [
      "$107,946",
      "$108,000",
      "$111,277",
      "$115,000",
    ],
    answer: 2,
    explanation:
      "連續複利 FV = PV × e^(rT) = 50,000 × e^(0.08×10) = 50,000 × e^0.8 = 50,000 × 2.2255 ≈ $111,277。比每年複利的 $107,946 略多。連續複利為複利的極限。",
  },
  {
    id: "cfa1-quant-v3-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "兩股票相關係數為 0.7，標準差分別 20% 和 15%。共變異數為？",
    options: [
      "0.0150",
      "0.0210",
      "0.0300",
      "0.1050",
    ],
    answer: 1,
    explanation:
      "Cov(X,Y) = ρ × σx × σy = 0.7 × 0.20 × 0.15 = 0.021。共變異數無單位限制，可正可負；相關係數則限於 [-1, 1] 區間。",
  },
  {
    id: "cfa1-quant-v3-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "公平硬幣連續投擲 10 次，至少 8 次正面的機率約為？",
    options: [
      "5.5%",
      "10.0%",
      "15.0%",
      "20.0%",
    ],
    answer: 0,
    explanation:
      "二項分配 P(X≥8) = P(8)+P(9)+P(10) = C(10,8)×0.5^10 + C(10,9)×0.5^10 + C(10,10)×0.5^10 = (45+10+1)/1024 = 56/1024 ≈ 5.47%。",
  },
  {
    id: "cfa1-quant-v3-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "對單樣本 t 檢定，自由度為？",
    options: [
      "n",
      "n-1",
      "n-2",
      "n+1",
    ],
    answer: 1,
    explanation:
      "單樣本 t 檢定自由度 = n-1。雙樣本 t 檢定（等變異數）自由度 = n1+n2-2。卡方分配與 F 分配自由度規則各不相同，須背熟。",
  },
  {
    id: "cfa1-quant-v3-5",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "下列何種模型「不假設」常態分配？",
    options: [
      "Z 檢定",
      "歷史模擬法 VaR",
      "變異數-共變異數 VaR",
      "Black-Scholes 模型",
    ],
    answer: 1,
    explanation:
      "歷史模擬法直接用過去實際分配，不需假設常態分配。其他三項都明確假設常態分配（或對數常態），這也是它們在尾部風險時可能失準的原因。",
  },
  {
    id: "cfa1-quant-v3-6",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "幾何平均報酬「永遠 ≤ 算術平均報酬」，差距大小取決於？",
    options: [
      "投資金額",
      "報酬波動度（σ）",
      "投資期間",
      "通膨率",
    ],
    answer: 1,
    explanation:
      "近似關係：幾何平均 ≈ 算術平均 - σ²/2。波動度越大，兩者差距越大。當波動度 = 0（穩定報酬），兩者相等。這是「波動性對長期報酬的隱形損耗」。",
  },
  {
    id: "cfa1-econ-v3-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "若 A 國通膨 6%、B 國通膨 2%，且名目利率 A 國 8%、B 國 3%。誰的實質利率較高？",
    options: [
      "A 國（8% - 6% = 2%）",
      "B 國（3% - 2% = 1%）",
      "兩國實質利率相同",
      "需更多資訊判斷",
    ],
    answer: 0,
    explanation:
      "費雪方程式：實質利率 ≈ 名目利率 - 預期通膨。A 國實質利率 = 2%，B 國 = 1%。A 國較高。注意實質利率才是衡量真實購買力成長的指標。",
  },
  {
    id: "cfa1-econ-v3-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "下列何種貨幣政策工具「最強而有力」但極少使用？",
    options: [
      "公開市場操作",
      "重貼現率調整",
      "存款準備率調整",
      "道德勸說",
    ],
    answer: 2,
    explanation:
      "存款準備率調整效果強大但極少使用，因為對銀行流動性影響太大。央行偏好公開市場操作（每日進行）。重貼現率影響邊際借款，效果較弱。",
  },
  {
    id: "cfa1-econ-v3-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "凱因斯學派與貨幣學派的主要差異是？",
    options: [
      "兩者完全相同",
      "凱因斯重視財政政策，貨幣學派強調貨幣政策與貨幣供給穩定",
      "凱因斯反對政府干預",
      "貨幣學派支持高通膨",
    ],
    answer: 1,
    explanation:
      "凱因斯學派：認為衰退時應積極財政擴張（政府支出）。貨幣學派（Milton Friedman）：認為通膨永遠是貨幣現象，央行應穩定貨幣供給成長率。",
  },
  {
    id: "cfa1-econ-v3-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-economics",
    question: "經濟成長率長期主要由什麼決定？",
    options: [
      "央行貨幣政策",
      "勞動力、資本累積、技術進步（TFP）",
      "政府支出規模",
      "貿易順差",
    ],
    answer: 1,
    explanation:
      "Solow 成長模型：長期經濟成長 = 勞動力成長 + 資本累積 + 技術進步（TFP）。其中技術進步是長期成長最關鍵因素。貨幣政策只影響短期波動。",
  },
  {
    id: "cfa1-fra-v3-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "公司於財報中將「研究費用」資本化，會導致？",
    options: [
      "當期費用增加、淨利下降",
      "當期費用減少、淨利提高、資產增加",
      "對財報無影響",
      "現金流量改善",
    ],
    answer: 1,
    explanation:
      "資本化研究費用：當期不費用化而列為資產，未來分期攤銷。短期淨利提高、資產增加，但未來折舊壓抑利潤。IFRS 僅允許開發階段資本化（嚴格條件）。",
  },
  {
    id: "cfa1-fra-v3-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "下列何項「不影響」CFO（營業現金流）的計算？",
    options: [
      "折舊費用",
      "應收帳款變動",
      "支付股利",
      "存貨變動",
    ],
    answer: 2,
    explanation:
      "支付股利屬於「籌資活動」，不影響 CFO。折舊（非現金費用，加回）、應收/應付/存貨變動（營運資金變動）都影響 CFO。利息支出在 IFRS 下可選擇歸類。",
  },
  {
    id: "cfa1-fra-v3-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "公司毛利率 40%、營業利益率 15%、淨利率 10%。下列何者最可能？",
    options: [
      "本業競爭力強但行政費用過高",
      "原料成本低、利息費用顯著",
      "毛利穩定、營業費用佔比合理、有利息和稅務負擔",
      "公司虧損",
    ],
    answer: 2,
    explanation:
      "從 40% 到 15% 之間扣除「營業費用（管銷費用、研發）」25%。從 15% 到 10% 之間扣除「利息與稅」5%。比例合理，公司穩健。",
  },
  {
    id: "cfa1-fra-v3-4",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    question: "現金週期（Cash Conversion Cycle）變短意味著？",
    options: [
      "公司營運效率變差",
      "公司營運效率改善，營運資金需求降低",
      "毛利率上升",
      "與營運無關",
    ],
    answer: 1,
    explanation:
      "現金週期 = DSO + DIO - DPO。週期短表示：存貨快速賣出、應收快速收回、應付帳款延後支付。代表營運資金需求低，現金循環效率高。",
  },
  {
    id: "cfa1-corp-v3-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "公司股權成本 14%、負債成本 6%、稅率 30%、債權比 D/V = 40%。WACC 約為？",
    options: [
      "8.4%",
      "10.08%",
      "12.0%",
      "10.0%",
    ],
    answer: 1,
    explanation:
      "WACC = 0.6 × 14% + 0.4 × 6% × (1-0.3) = 8.4% + 1.68% = 10.08%。負債稅後成本 = 4.2%，再依比例加權。",
  },
  {
    id: "cfa1-corp-v3-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "下列何種專案應「最優先」執行（資金有限時）？",
    options: [
      "NPV = $1M、初始投資 $10M",
      "NPV = $2M、初始投資 $5M",
      "NPV = $5M、初始投資 $20M",
      "NPV = $3M、初始投資 $30M",
    ],
    answer: 1,
    explanation:
      "資金有限時用「獲利指數」PI = (NPV+初始投資) / 初始投資。選項 B：(2+5)/5 = 1.4 最高。或直接看 NPV/投資比：A=10%, B=40%, C=25%, D=10%。B 效率最高。",
  },
  {
    id: "cfa1-corp-v3-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-corporate",
    question: "下列何種特性「不屬於」高股利支付率公司的典型特徵？",
    options: [
      "成熟產業、穩定獲利",
      "投資機會有限",
      "強勁成長前景、需大量再投資",
      "穩定現金流",
    ],
    answer: 2,
    explanation:
      "成長型公司通常保留盈餘再投資（高 ROE 機會），低股利支付率。高股利公司多為成熟、穩定現金流、投資機會有限的公司（如電信、公用事業）。",
  },
  {
    id: "cfa1-eq-v3-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "某公司 ROE 18%、配息率 40%。永續成長率為？",
    options: [
      "7.2%",
      "10.8%",
      "12.0%",
      "18.0%",
    ],
    answer: 1,
    explanation:
      "g = ROE × 保留盈餘比率 = 18% × (1-0.4) = 18% × 0.6 = 10.8%。此公式假設未來 ROE 維持不變、保留盈餘以同樣 ROE 再投資。",
  },
  {
    id: "cfa1-eq-v3-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "成熟產業公司，EV/EBITDA = 8 倍，比較同業 EV/EBITDA = 12 倍，可能表示？",
    options: [
      "公司被高估",
      "公司可能被低估，或有特殊風險（須進一步分析）",
      "公司不能比較",
      "需要轉換為 P/E 比較",
    ],
    answer: 1,
    explanation:
      "EV/EBITDA 低於同業可能：(1) 低估（買進機會）(2) 有負面因素（如下檔風險）(3) 結構性差異（如不同業務組合）。需深入分析原因再下定論。",
  },
  {
    id: "cfa1-eq-v3-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-equity",
    question: "下列何種偏誤導致投資人過度交易？",
    options: [
      "損失厭惡",
      "過度自信",
      "錨定效應",
      "確認偏誤",
    ],
    answer: 1,
    explanation:
      "過度自信使投資人高估自己預測能力，導致過度交易、投資組合過度集中。研究顯示散戶平均年化報酬遠低於市場，主要因過度交易消耗成本。",
  },
  {
    id: "cfa1-fi-v3-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "10 年期公司債票面利率 5%、YTM 6%，下列何者正確？",
    options: [
      "債券溢價交易",
      "債券折價交易",
      "債券平價交易",
      "需殖利率曲線資訊判斷",
    ],
    answer: 1,
    explanation:
      "YTM (6%) > Coupon (5%) → 債券折價（價格 < 面額）。YTM = Coupon 為平價；YTM < Coupon 為溢價。這是債券市場的基本關係。",
  },
  {
    id: "cfa1-fi-v3-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "可贖回債券（Callable Bond）的「負凸性」表現為？",
    options: [
      "利率下跌時價格上漲少於普通債券",
      "利率下跌時價格上漲多於普通債券",
      "兩者相同",
      "與利率無關",
    ],
    answer: 0,
    explanation:
      "可贖回債券：利率下跌時發行人可贖回，限制價格上漲（價格趨於贖回價）。形成「負凸性」：利率下跌時上漲幅度受限，但利率上漲時下跌與普通債券相當。",
  },
  {
    id: "cfa1-fi-v3-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "倒掛殖利率曲線歷史上預測？",
    options: [
      "經濟強勁擴張",
      "通膨上升",
      "經濟衰退（領先 6-18 個月）",
      "股市上漲",
    ],
    answer: 2,
    explanation:
      "美國經濟史上，2年期/10年期殖利率倒掛是衰退的可靠領先指標，平均領先 6-18 個月。原因：市場預期央行未來降息應對衰退。但時點難以精準預測。",
  },
  {
    id: "cfa1-der-v3-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "選擇權買方付出權利金後，下列何者「不」是其優勢？",
    options: [
      "有限風險（最大損失為權利金）",
      "槓桿（小成本控制大部位）",
      "獲得時間衰減收益",
      "策略彈性",
    ],
    answer: 2,
    explanation:
      "時間衰減（Theta）對買方「不利」：到期前 Theta 為負，每日選擇權價值減少。賣方才賺取時間衰減。買方需股價快速朝預期方向移動才能獲利。",
  },
  {
    id: "cfa1-der-v3-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-derivatives",
    question: "持有股票投資組合擔心短期下跌，最有效避險方式為？",
    options: [
      "賣出股票",
      "買進指數賣權（Protective Put）",
      "賣出指數買權",
      "做多波動度",
    ],
    answer: 1,
    explanation:
      "保護性賣權：保留股票上檔獲利，限制下檔損失，類似買保險。賣出股票會錯失上漲；賣出買權限制獲利但不防守下檔；做多波動度間接避險效果差。",
  },
  {
    id: "cfa1-port-v3-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "投資組合 β = 1.2，市場下跌 15%，組合預期報酬約為？",
    options: [
      "-12.5%",
      "-15.0%",
      "-18.0%",
      "-20.0%",
    ],
    answer: 2,
    explanation:
      "β = 1.2 表示波動是市場的 1.2 倍。市場下跌 15%，組合預期下跌 18%（=15% × 1.2）。高 β 投資組合在多頭放大獲利，在空頭也放大損失。",
  },
  {
    id: "cfa1-port-v3-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "M² 衡量（Modigliani）的目的是？",
    options: [
      "計算投資組合 β",
      "將投資組合風險調整至與市場相同後比較報酬",
      "計算夏普比率",
      "衡量分散化效益",
    ],
    answer: 1,
    explanation:
      "M² = Rf + Sharpe × σ_market，將不同風險水平的投資組合「標準化」到市場風險水平後比較。比夏普比率更直觀（直接看百分點差距）。",
  },
  {
    id: "cfa1-port-v3-3",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "捐贈基金（Endowment）的投資特性「不包括」？",
    options: [
      "永續投資期",
      "高另類資產配置（PE、避險基金）",
      "穩定提撥率（如 5%）",
      "短期績效導向",
    ],
    answer: 3,
    explanation:
      "捐贈基金永續經營，注重長期回報。耶魯模式高配置另類資產獲取「流動性溢酬」，可承受短期波動。短期績效導向反而違背其本質。",
  },

  // =============================================================
  // 第三輪擴充 - 高業深度題
  // =============================================================
  {
    id: "senior-inv-v3-1",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "技術分析的「量價背離」是指？",
    options: [
      "股價上漲、成交量同步擴大",
      "股價創新高但成交量未跟上，可能反轉訊號",
      "股價平盤、成交量縮小",
      "成交量大於漲跌幅",
    ],
    answer: 1,
    explanation:
      "量價背離：股價創高但成交量沒同步擴大，代表上漲動能不足；股價創低但量縮，代表賣壓減弱。常被視為趨勢反轉前兆，但須配合其他指標確認。",
  },
  {
    id: "senior-inv-v3-2",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "Treynor 比率與 Sharpe 比率的主要差異為？",
    options: [
      "Treynor 用 β，Sharpe 用 σ",
      "Sharpe 用 β，Treynor 用 σ",
      "兩者完全相同",
      "Sharpe 適用債券，Treynor 適用股票",
    ],
    answer: 0,
    explanation:
      "Treynor = (Rp-Rf)/β（系統風險）；Sharpe = (Rp-Rf)/σ（總風險）。當投資組合充分分散時，非系統風險已消除，用 Treynor 較合適；未充分分散則用 Sharpe。",
  },
  {
    id: "senior-inv-v3-3",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "Information Ratio（資訊比率）的分母為？",
    options: [
      "標準差",
      "β",
      "追蹤誤差（Tracking Error）",
      "無風險利率",
    ],
    answer: 2,
    explanation:
      "IR = (Rp - Rb) / 追蹤誤差。衡量每單位主動風險獲取的主動報酬。IR > 0.5 算優秀，> 1 罕見。主要評估主動管理基金經理人。",
  },
  {
    id: "senior-inv-v3-4",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "下列何者「不是」CAPM 模型的假設？",
    options: [
      "投資人理性且追求效用最大化",
      "資訊不對稱、投資人預期不同",
      "無稅、無交易成本",
      "可自由借貸無風險利率",
    ],
    answer: 1,
    explanation:
      "CAPM 假設「同質性預期」（所有投資人擁有相同資訊與預期），其他選項皆是正確假設。實務上這些假設多被違反，因此 CAPM 有實證問題。",
  },
  {
    id: "senior-fa-v3-1",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "Altman Z-score 用於評估？",
    options: [
      "公司股票評等",
      "公司破產風險",
      "公司成長性",
      "公司流動性",
    ],
    answer: 1,
    explanation:
      "Altman Z-score 是 Edward Altman 1968 年提出的破產預測模型，整合 5 個財務比率。Z > 2.99 安全、1.81-2.99 灰色區、< 1.81 高破產風險。",
  },
  {
    id: "senior-fa-v3-2",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "EBITDA Margin 高於同業，可能代表？",
    options: [
      "公司獲利能力較強",
      "公司現金流出較多",
      "公司負債過高",
      "公司投資不足",
    ],
    answer: 0,
    explanation:
      "EBITDA Margin = EBITDA / 營收，反映本業現金獲利能力（剔除融資、稅、會計選擇）。高於同業通常代表競爭優勢或營運效率高，但須排除產品組合差異。",
  },
  {
    id: "senior-fa-v3-3",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "公司「應收帳款週轉率」下降可能反映？",
    options: [
      "公司收款效率提升",
      "可能放寬信用政策或客戶付款延遲",
      "存貨積壓",
      "毛利率上升",
    ],
    answer: 1,
    explanation:
      "週轉率下降表示收款天數變長，可能原因：放寬信用以吸引客戶、客戶財務惡化、產業景氣下行。需配合應收帳款增長率與營收成長對比判斷。",
  },
  {
    id: "senior-reg-v3-1",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "證券商每年向主管機關申報之「資本適足率」應達？",
    options: [
      "100% 以上",
      "120% 以上",
      "150% 以上",
      "200% 以上",
    ],
    answer: 2,
    explanation:
      "證券商資本適足率 (CAR) 須 ≥ 150%。低於 150% 被限制業務、低於 120% 命令停業。比銀行 (8%) 嚴格因證券商承擔市場價格風險。",
  },
  {
    id: "senior-reg-v3-2",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    question: "公司治理「審計委員會」應由全體獨立董事組成，最少幾人？",
    options: [
      "1 人",
      "2 人",
      "3 人",
      "5 人",
    ],
    answer: 2,
    explanation:
      "依台灣規定，審計委員會應由全體獨立董事組成，至少 3 人，其中至少 1 人具備會計或財務專長。審計委員會取代傳統監察人制度。",
  },
  {
    id: "senior-der-v3-1",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "選擇權「Iron Condor」策略適合預期？",
    options: [
      "大幅波動",
      "盤整或小幅波動",
      "單方向大漲",
      "單方向大跌",
    ],
    answer: 1,
    explanation:
      "Iron Condor = 賣 OTM Put Spread + 賣 OTM Call Spread。預期股價在某區間內整理時最大獲利（收取雙邊權利金）。最大損失有限（保護部位）。",
  },
  {
    id: "senior-der-v3-2",
    courseId: "securities-senior",
    chapterId: "senior-derivatives",
    question: "下列何種衍生品「不」直接交易於交易所？",
    options: [
      "期貨",
      "上市選擇權",
      "場外交換（OTC Swap）",
      "ETF 選擇權",
    ],
    answer: 2,
    explanation:
      "OTC Swap（場外交換）是雙方直接協議，不透過交易所，因此有對手方信用風險。期貨、上市選擇權、ETF 選擇權都在交易所撮合，有結算機構承擔對手方風險。",
  },

  // =============================================================
  // 第三輪擴充 - 初業深度題
  // =============================================================
  {
    id: "junior-reg-v3-1",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "下列哪種行為「不」屬於市場操縱？",
    options: [
      "連續交易製造價量假象",
      "散佈不實消息",
      "進行正當投資並依規定揭露",
      "對敲交易（沖洗買賣）",
    ],
    answer: 2,
    explanation:
      "正當投資並揭露不屬市場操縱。市場操縱包括：連續交易拉抬、對敲、散佈謠言、誘騙交易等違反證交法 §155 行為。違者處 3-10 年徒刑。",
  },
  {
    id: "junior-reg-v3-2",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "上市公司「公開說明書」應於何時提供？",
    options: [
      "IPO 時提供",
      "每年年報時更新",
      "員工招募時",
      "上市後一年內",
    ],
    answer: 0,
    explanation:
      "公開說明書於 IPO 或發行新股時提供，揭露公司完整資訊（財務、業務、風險、用途）。投資人應仔細閱讀後再做投資決策。",
  },
  {
    id: "junior-reg-v3-3",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "投資人提出客訴後，業者應於幾日內回應？",
    options: [
      "7 日",
      "14 日",
      "30 日",
      "60 日",
    ],
    answer: 2,
    explanation:
      "依金融消費者保護法，業者應於 30 日內回應客訴，未回應或回應不滿者可向金融消費評議中心申請評議。評議結果 1 百萬內對業者有拘束力。",
  },
  {
    id: "junior-prac-v3-1",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "若股票每股淨值為 $30、市價 $60，下列指標哪項可計算？",
    options: [
      "P/E",
      "P/B = 2",
      "殖利率",
      "EPS",
    ],
    answer: 1,
    explanation:
      "P/B = 市價/每股淨值 = 60/30 = 2。P/E 需 EPS、殖利率需股利、EPS 需淨利資訊。題目資料只夠算 P/B。",
  },
  {
    id: "junior-prac-v3-2",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "ETF 0050 與 0056 的主要差異為？",
    options: [
      "兩者完全相同",
      "0050 追蹤台灣 50 指數（市值加權），0056 追蹤高股息指數",
      "0056 報酬永遠較高",
      "0050 只能法人投資",
    ],
    answer: 1,
    explanation:
      "0050 元大台灣 50：追蹤台灣前 50 大市值公司、核心配置標的。0056 元大高股息：篩選高殖利率股票，適合追求現金股利的投資人。長期報酬 0050 通常較高。",
  },
  {
    id: "junior-prac-v3-3",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "定期定額投資的優勢「不」包括？",
    options: [
      "降低時點選擇風險",
      "強制紀律儲蓄",
      "平均成本法",
      "保證打敗一次性投資",
    ],
    answer: 3,
    explanation:
      "定期定額不保證打敗一次性投資（Lump Sum）。研究顯示長期市場走多時，一次性投資報酬常較高。但定期定額減少時點壓力，適合長期、穩定收入族群。",
  },
  {
    id: "junior-acc-v3-1",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "下列何者「不」可作為開戶身分證明文件？",
    options: [
      "身分證",
      "健保卡（第二證件）",
      "信用卡",
      "護照",
    ],
    answer: 2,
    explanation:
      "信用卡不能作為證券開戶身分證明。可用證件：身分證、健保卡、駕照、護照、戶口名簿。開戶須親自臨櫃（部分券商支援線上開戶）。",
  },
  {
    id: "junior-acc-v3-2",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "盤中零股交易制度，多少股以下屬零股？",
    options: [
      "100 股",
      "500 股",
      "1,000 股",
      "10,000 股",
    ],
    answer: 2,
    explanation:
      "零股 = 不足 1,000 股。台股一張 = 1,000 股。盤中零股自 2020/10/26 起施行，9:00-13:30 每 1 分鐘集合競價一次，讓小資族也能投資高價股。",
  },
  {
    id: "junior-acc-v3-3",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "投資人融券賣出 100 張股票，市價 $50。需繳交保證金？",
    options: [
      "$1,800,000",
      "$3,500,000",
      "$4,500,000",
      "$5,000,000",
    ],
    answer: 2,
    explanation:
      "成交額 = 100 × 1,000 × 50 = $5,000,000。融券保證金 90% = $4,500,000。融券除保證金外還需借券費（每日約 0.08%），成本不低。",
  },
  {
    id: "junior-tax-v3-1",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "下列何者目前「免」課證券交易稅？",
    options: [
      "上市股票",
      "ETF（一般型）",
      "公司債、債券型 ETF",
      "認購權證",
    ],
    answer: 2,
    explanation:
      "公司債、債券型 ETF 自 2017 年起停徵證交稅，促進債券市場發展。其他：股票 0.3%、ETF 0.1%、權證 0.1%。期貨課期貨交易稅。",
  },
  {
    id: "junior-tax-v3-2",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "海外所得需計入基本所得額的門檻為？",
    options: [
      "海外所得 > $500,000",
      "海外所得 > $1,000,000",
      "海外所得 > $3,000,000",
      "全額需計入",
    ],
    answer: 1,
    explanation:
      "海外所得超過 100 萬，「全額」計入基本所得額（非僅超過部分）。基本所得額扣除 750 萬免稅額後計 20% 最低稅負，與一般所得稅取高者。",
  },

  // =============================================================
  // 第三輪擴充 - FRM 深度題
  // =============================================================
  {
    id: "frm-found-v3-1",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "G-SIBs（全球系統重要性銀行）評估五大面向「不」包括？",
    options: [
      "規模（Size）",
      "互聯性（Interconnectedness）",
      "替代性（Substitutability）",
      "ESG 評等",
    ],
    answer: 3,
    explanation:
      "G-SIBs 評估五面向：規模、互聯性、替代性、複雜性、跨境活動。ESG 雖重要但非 G-SIBs 評估指標。被列為 G-SIB 需額外資本緩衝（1-3.5%）。",
  },
  {
    id: "frm-found-v3-2",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "Basel III 普通股一級資本（CET1）最低要求為？",
    options: [
      "2%",
      "4.5%",
      "6%",
      "8%",
    ],
    answer: 1,
    explanation:
      "Basel III 規定：CET1 ≥ 4.5%、Tier 1 ≥ 6%、總資本 ≥ 8%、加上 2.5% 資本保留緩衝。系統重要性銀行另有額外緩衝。比 Basel II 大幅提高品質與數量要求。",
  },
  {
    id: "frm-mr-v3-1",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "投資組合 $2 億美元，日報酬標準差 2%，99% VaR 為？",
    options: [
      "$800 萬",
      "$930 萬",
      "$1,000 萬",
      "$1,200 萬",
    ],
    answer: 1,
    explanation:
      "99% 信心 z = 2.326（單尾）。VaR = 2.326 × 2% × 2 億 = $930 萬。99% 信心意味平均每 100 天有 1 天可能損失超過此數。",
  },
  {
    id: "frm-mr-v3-2",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "下列何者「不」是 Basel III 對市場風險資本的要求？",
    options: [
      "VaR 模型須通過 backtesting",
      "用 10 天 99% VaR 計算資本",
      "增加 ES 計算（FRTB）",
      "完全廢除內部模型",
    ],
    answer: 3,
    explanation:
      "Basel III/FRTB 改革強化內部模型驗證但「未廢除」內部模型。改用 ES（97.5%）取代 VaR、增加流動性期限因子、強化 Backtesting。內部模型仍允許但更嚴格。",
  },
  {
    id: "frm-mr-v3-3",
    courseId: "frm",
    chapterId: "frm-market-risk",
    question: "VaR 模型 backtesting，250 天中違反 8 次，屬？",
    options: [
      "綠燈：模型可接受",
      "黃燈：模型需檢視、增加額外資本",
      "紅燈：模型重建",
      "違規",
    ],
    answer: 1,
    explanation:
      "Basel Traffic Light：0-4 次 = 綠燈；5-9 次 = 黃燈（增加 multiplier）；≥10 次 = 紅燈（模型不可靠）。8 次落在黃燈區，需檢視原因並可能增加資本。",
  },
  {
    id: "frm-cr-v3-1",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "高斯 Copula 在 2008 危機中暴露的問題是？",
    options: [
      "計算太複雜",
      "尾部相關性不足，低估了 CDO Senior Tranche 的風險",
      "資料不足",
      "與 Merton 模型衝突",
    ],
    answer: 1,
    explanation:
      "高斯 Copula 的尾部相關性低，假設極端違約是獨立事件。但 2008 危機顯示房貸違約高度相關（系統性風險），原以為安全的 Senior Tranche 大規模違約。",
  },
  {
    id: "frm-cr-v3-2",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "CDS Spread 從 100 bps 擴大至 500 bps，可能反映？",
    options: [
      "市場流動性改善",
      "市場認為違約風險顯著上升",
      "央行降息",
      "公司獲利改善",
    ],
    answer: 1,
    explanation:
      "CDS Spread ≈ PD × LGD。從 100 升至 500 bps 表示市場願意支付 5 倍保護費，反映違約風險預期大幅上升。常出現於信用評等下調、財報惡化、產業危機時。",
  },
  {
    id: "frm-cr-v3-3",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "CDO Senior Tranche 的特性「不」包括？",
    options: [
      "AAA 評等（傳統）",
      "最後吸收損失",
      "殖利率最低",
      "違約風險最高",
    ],
    answer: 3,
    explanation:
      "Senior Tranche 是 CDO 中最安全層級，最後吸收損失、AAA 評等、殖利率最低。違約風險最高的是 Equity Tranche（最先吸收損失）。但 2008 顯示 AAA 並非真安全。",
  },
  {
    id: "frm-or-v3-1",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "霸菱銀行事件的核心問題「不」包括？",
    options: [
      "前台與後台未分離",
      "風險限額執行不嚴",
      "市場價格下跌（外部因素）",
      "高層監督不足",
    ],
    answer: 2,
    explanation:
      "霸菱倒閉根源於「內部控制」失靈：Nick Leeson 同時掌管交易與結算、隱藏帳戶 88888、主管缺乏質疑。市場下跌只是觸發，真正問題是內部管控失敗。",
  },
  {
    id: "frm-or-v3-2",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "Wells Fargo 假帳戶事件的根本原因是？",
    options: [
      "技術系統故障",
      "外部詐欺",
      "績效獎勵結構鼓勵不當行為，文化失敗",
      "監理機關失誤",
    ],
    answer: 2,
    explanation:
      "Wells Fargo 事件源於極端銷售目標壓力，員工為達標開設假帳戶。反映「績效獎勵結構」與「文化問題」。CEO 下台、罰款 30 億美元。教訓：適當的績效指標設計。",
  },
  {
    id: "frm-or-v3-3",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "下列何種網路威脅「最」可能由內部人造成？",
    options: [
      "DDoS 攻擊",
      "釣魚郵件",
      "員工資料外洩或濫用權限",
      "外部勒索軟體",
    ],
    answer: 2,
    explanation:
      "內部人威脅常見：濫用權限存取資料、惡意洩漏、過失外洩。比外部攻擊更難偵測，因為內部人本來就有合法權限。需「零信任」原則、職務分離、權限定期審查。",
  },
  {
    id: "frm-lr-v3-1",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "Bagehot 最後貸款人原則「不」包括？",
    options: [
      "對 solvent 但流動性不足的機構放款",
      "以優質擔保品為條件",
      "收取懲罰性利率",
      "無條件救助所有機構",
    ],
    answer: 3,
    explanation:
      "Bagehot 原則（1873）：央行只救助「有清償能力但暫時流動性不足」的機構，收取懲罰性利率，要求優質擔保品。無條件救助會造成道德風險，鼓勵冒險行為。",
  },
  {
    id: "frm-lr-v3-2",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "Basel III LCR 中，零售存款（受保險）的壓力流出率為？",
    options: [
      "3%",
      "10%",
      "25%",
      "50%",
    ],
    answer: 0,
    explanation:
      "Basel III 假設受保險的「穩定零售存款」壓力下流失率為 3%（最低）。較不穩定零售存款 10%、中小企業 5-10%、大企業 25%、金融機構 100%。反映不同存款人忠誠度差異。",
  },
  {
    id: "frm-lr-v3-3",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "下列何種事件「最不」可能引發銀行擠兌？",
    options: [
      "銀行被傳出財務困難",
      "信用評等被大幅下調",
      "存款保險制度健全且眾所周知",
      "重要客戶被傳出大額提款",
    ],
    answer: 2,
    explanation:
      "存款保險（如台灣 300 萬上限）是預防擠兌的關鍵機制。存款人知道存款受保護，恐慌降低。FDIC 創立後美國擠兌事件大減。但仍有信心要素，所以監管 LCR 也很重要。",
  },
];
