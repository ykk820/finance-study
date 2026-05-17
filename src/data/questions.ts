import { Question } from "@/types";

export const questions: Question[] = [
  // ===== CFA Level I =====
  // Ethics
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
      "利用重大非公開資訊（Material Nonpublic Information）進行交易違反了 Standard II(A) - 市場完整性原則，這屬於內線交易行為。",
  },
  {
    id: "cfa1-eth-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-ethics",
    question: "CFA 持證人在面對利益衝突時，應該優先考慮誰的利益？",
    options: ["雇主的利益", "自己的利益", "客戶的利益", "CFA Institute 的利益"],
    answer: 2,
    explanation:
      "根據 CFA 道德準則，持證人應將客戶利益置於雇主和自身利益之上。利益優先順序為：客戶 > 雇主 > 自身。",
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
      "使用公開市場數據撰寫研究報告屬於正常業務範圍，不需要特別取得書面同意。其他三項都涉及潛在利益衝突，需要事先揭露並取得同意。",
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
      "分析師利用尚未公開的財報資訊進行交易，違反了 Standard II(A) 關於重大非公開資訊的規定，這是典型的內線交易行為。",
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
      "GIPS 的核心目的是建立全球統一的績效呈現標準，確保投資機構的績效報告具有公平性和可比較性，讓投資人能做出有意義的比較。",
  },
  // Quant
  {
    id: "cfa1-quant-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "某投資人投入 $10,000，年利率 8%，按年複利計算，5 年後的終值為何？",
    options: ["$14,693.28", "$14,000.00", "$15,000.00", "$13,500.00"],
    answer: 0,
    explanation:
      "FV = PV × (1 + r)^n = 10,000 × (1.08)^5 = 10,000 × 1.46933 = $14,693.28",
  },
  {
    id: "cfa1-quant-2",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    question: "在 95% 信心水準下，單尾常態分配的 z 值約為多少？",
    options: ["1.28", "1.65", "1.96", "2.33"],
    answer: 1,
    explanation:
      "單尾 95% 信心水準對應 z = 1.645（約 1.65）。注意：雙尾 95% 對應 z = 1.96。",
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
      "永續年金（Perpetuity）是無限期支付的年金，其現值 PV = PMT / r，其中 PMT 是每期支付金額，r 是折現率。",
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
      "R²（判定係數）衡量迴歸模型的解釋能力。R² = 0.85 表示自變數能解釋因變數 85% 的變異，剩餘 15% 為未解釋的變異。",
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
      "負偏態分配的左尾較長，資料集中在右側。大小關係為：平均數 < 中位數 < 眾數。對風險管理而言，負偏態意味著極端負報酬的可能性較大。",
  },
  // Economics
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
      "GDP 支出法：GDP = C（消費）+ I（投資）+ G（政府支出）+ (X - M)（淨出口）。這是最常用的 GDP 計算方式。",
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
      "緊縮貨幣政策旨在減少貨幣供給、抑制通膨。主要工具包括：提高利率、賣出政府債券（減少市場資金）、提高存款準備率。",
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
      "購買力平價理論認為，長期而言，匯率應調整至使兩國的物價水準相等。即相同商品在不同國家以相同貨幣衡量時價格應相同。",
  },
  // FRA
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
      "自由現金流 FCF = 營業活動現金流 - 資本支出（CapEx）。FCF 代表公司在維持營運後，可自由分配給股東和債權人的現金。",
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
      "US GAAP 允許使用 LIFO（後進先出法）進行存貨計價，但 IFRS 禁止使用 LIFO。這是兩大會計準則的重要差異之一。",
  },
  // Corporate
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
      "NPV > 0 表示投資案的預期現金流現值超過初始投資成本，能為股東創造正的經濟價值，應予以接受。NPV 法被視為最佳的資本預算決策工具。",
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
      "在有稅的世界中，MM 理論指出負債的利息費用可以抵稅（稅盾效果），因此適度使用負債可以增加公司的價值。V_L = V_U + T × D。",
  },
  // Equity
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
      "Gordon Growth Model（固定成長股利折現模型）：P₀ = D₁ / (r - g)，其中 D₁ 是下期預期股利，r 是要求報酬率，g 是股利成長率。前提是 r > g。",
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
      "Porter 五力包括：(1)新進入者威脅 (2)替代品威脅 (3)買方議價能力 (4)供應商議價能力 (5)現有競爭者競爭強度。政府監管不在五力模型中。",
  },
  // Fixed Income
  {
    id: "cfa1-fi-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-fi",
    question: "當市場利率上升時，債券價格會？",
    options: [
      "上升",
      "下降",
      "不變",
      "不一定",
    ],
    answer: 1,
    explanation:
      "債券價格與利率呈反向關係。當市場利率上升，現有債券的固定票息相對較不吸引人，因此價格下降以使殖利率上升至新的市場水準。",
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
      "利率風險（Duration）與票面利率呈反向關係，與到期日呈正向關係。因此票面利率低且到期日長的債券，其 Duration 最長，利率風險最高。",
  },
  // Derivatives
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
      "Put-Call Parity：C + PV(X) = P + S。持有買權加上履約價現值，等於持有賣權加上標的資產。這是歐式選擇權的基本定價關係。",
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
      "期貨在交易所交易，有標準化合約和每日結算（mark-to-market）制度；遠期是 OTC 客製化合約，到期才結算，因此信用風險較高。",
  },
  // Portfolio
  {
    id: "cfa1-port-1",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    question: "根據 CAPM，β = 0 的資產預期報酬率為？",
    options: [
      "市場報酬率",
      "零",
      "無風險利率",
      "市場風險溢酬",
    ],
    answer: 2,
    explanation:
      "CAPM: E(Ri) = Rf + β × [E(Rm) - Rf]。當 β = 0 時，E(Ri) = Rf + 0 = Rf。β = 0 表示該資產沒有系統風險，預期報酬等於無風險利率。",
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
      "加入低相關或負相關的資產可以有效分散投資組合的非系統風險，降低整體波動度，這就是 Markowitz 投資組合理論的核心——分散化效益。",
  },

  // ===== 高級業務員 =====
  {
    id: "senior-inv-1",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "CAPM 模型中，β 值為 1.5 的股票，當市場報酬率上升 10% 時，該股票預期報酬率上升多少？",
    options: ["10%", "12%", "15%", "20%"],
    answer: 2,
    explanation:
      "β = 1.5 表示該股票的系統風險是市場的 1.5 倍。當市場上升 10% 時，該股票預期上升 10% × 1.5 = 15%。",
  },
  {
    id: "senior-inv-2",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "下列何者不是效率市場假說（EMH）的形式？",
    options: ["弱式效率", "半強式效率", "強式效率", "超強式效率"],
    answer: 3,
    explanation:
      "效率市場假說分為三種形式：弱式效率（反映歷史價格）、半強式效率（反映所有公開資訊）、強式效率（反映所有資訊包括內線）。不存在「超強式效率」。",
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
      "夏普比率 = (Rp - Rf) / σp，衡量的是每承擔一單位「總風險」（標準差）所獲得的超額報酬。注意與 Treynor Ratio 的區別，後者使用 β（系統風險）。",
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
      "Jensen's Alpha = Rp - [Rf + βp × (Rm - Rf)]，正的 Alpha 表示實際報酬超過 CAPM 模型預期的報酬，暗示基金經理人具有選股能力。",
  },
  {
    id: "senior-inv-5",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    question: "KD 指標中，K 值由下往上穿越 D 值，通常被解讀為？",
    options: [
      "賣出訊號",
      "買進訊號",
      "持有訊號",
      "無意義",
    ],
    answer: 1,
    explanation:
      "KD 指標中，K 線（快線）由下往上穿越 D 線（慢線）稱為「黃金交叉」，通常被視為買進訊號。反之，K 由上往下穿越 D 為「死亡交叉」，是賣出訊號。",
  },
  // Senior FA
  {
    id: "senior-fa-1",
    courseId: "securities-senior",
    chapterId: "senior-financial-analysis",
    question: "某公司 ROE 為 15%，淨利率為 5%，資產周轉率為 2，則其權益乘數為？",
    options: ["1.5", "2.0", "1.0", "3.0"],
    answer: 0,
    explanation:
      "DuPont: ROE = 淨利率 × 資產周轉率 × 權益乘數。15% = 5% × 2 × 權益乘數，權益乘數 = 15% / (5% × 2) = 1.5",
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
      "流動比率 = 流動資產 / 流動負債。流動比率 2.0 表示每 1 元的流動負債有 2 元的流動資產可以償還，一般認為 2.0 是合理的水準。",
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
      "利息保障倍數 = EBIT（息前稅前利潤）/ 利息費用。衡量公司以營業利潤支付利息的能力，倍數越高表示償債能力越強。",
  },
  // Senior Regulation
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
      "依證券交易法規定，證券商分為三種：經紀商（代理客戶買賣）、自營商（自行買賣）、承銷商（包銷或代銷新發行證券）。",
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
      "獨立董事不參與公司日常經營，其主要功能是監督公司治理、確保決策的獨立性與公正性，並保護全體股東（特別是小股東）的權益。",
  },
  // Senior Derivatives
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
      "保護性賣權 = 持有股票 + 買入賣權。當股價下跌時，賣權可以限制損失（像保險一樣），同時保留股價上漲的獲利空間。",
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
      "正價差（Contango）指期貨價格高於現貨價格，通常反映持有成本（儲存、保險、資金成本）。反之為逆價差（Backwardation）。",
  },

  // ===== 初級業務員 =====
  {
    id: "junior-reg-1",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "台灣股市的漲跌幅限制為何？",
    options: ["5%", "7%", "10%", "15%"],
    answer: 2,
    explanation:
      "台灣證券市場（TWSE 及 TPEx）的漲跌幅限制為前一日收盤價的 ±10%。",
  },
  {
    id: "junior-reg-2",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "內部人持股超過多少比例需要申報？",
    options: ["5%", "10%", "15%", "20%"],
    answer: 1,
    explanation:
      "依證券交易法規定，持有公司已發行股份超過 10% 之股東，為內部人，需依規定申報持股變動。",
  },
  {
    id: "junior-reg-3",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "短線交易歸入權是指內部人在幾個月內反向交易需歸入利益？",
    options: ["3 個月", "6 個月", "12 個月", "24 個月"],
    answer: 1,
    explanation:
      "依證券交易法第 157 條，內部人在取得公司股票後 6 個月內賣出，或賣出後 6 個月內再買入，其利益歸屬於公司（歸入權）。",
  },
  {
    id: "junior-reg-4",
    courseId: "securities-junior",
    chapterId: "junior-regulation",
    question: "全權委託投資業務由哪種機構辦理？",
    options: ["證券經紀商", "證券承銷商", "投信或投顧事業", "期貨商"],
    answer: 2,
    explanation:
      "全權委託投資業務是由投信事業或投顧事業經核准後辦理，代替客戶做投資決策。",
  },
  // Junior Practice
  {
    id: "junior-prac-1",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    question: "某股票目前市價 $50，每股盈餘（EPS）為 $5，其本益比（P/E）為何？",
    options: ["5 倍", "10 倍", "15 倍", "20 倍"],
    answer: 1,
    explanation: "本益比 = 市價 / EPS = 50 / 5 = 10 倍",
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
      "存續期間衡量債券價格對利率變動的敏感度。Duration 越長，利率每變動 1%，債券價格變動幅度越大。",
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
      "ETF（指數股票型基金）在交易所像股票一樣即時買賣，價格隨市場波動；共同基金則以每日計算的淨值（NAV）進行申購和贖回。",
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
      "正常的殖利率曲線呈正斜率，代表長期利率高於短期利率，反映投資人對較長期限要求較高的風險溢酬。倒掛（反斜率）則可能預示經濟衰退。",
  },
  // Junior Account
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
      "台灣證券市場採用 T+2 交割制度，即交易日後第二個營業日完成款券交割。投資人須在交割日前備妥資金。",
  },
  {
    id: "junior-acc-2",
    courseId: "securities-junior",
    chapterId: "junior-account",
    question: "融資維持率低於多少時會被追繳？",
    options: ["120%", "130%", "140%", "150%"],
    answer: 1,
    explanation:
      "融資維持率 = 擔保品市值 / 融資金額。當維持率低於 130% 時，證券商會發出追繳通知，投資人須在期限內補繳差額，否則將被強制賣出（斷頭）。",
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
      "限價委託是投資人指定一個價格，買入時以該價格或更低價格成交，賣出時以該價格或更高價格成交。與市價委託不同，市價委託不限價格。",
  },
  // Junior Tax
  {
    id: "junior-tax-1",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "台灣股票證券交易稅的稅率為？",
    options: ["0.1%", "0.15%", "0.3%", "0.5%"],
    answer: 2,
    explanation:
      "台灣股票的證券交易稅稅率為成交金額的 0.3%，於賣出時課徵，由賣方負擔。ETF 的證券交易稅率較低為 0.1%。",
  },
  {
    id: "junior-tax-2",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    question: "股利所得採分開計稅的稅率為？",
    options: ["20%", "25%", "28%", "30%"],
    answer: 2,
    explanation:
      "股利所得可選擇合併計稅（併入綜合所得稅，可享 8.5% 抵減，上限 8 萬元）或分開計稅（單一稅率 28%），投資人可擇優適用。",
  },

  // ===== FRM =====
  // Foundations
  {
    id: "frm-found-1",
    courseId: "frm",
    chapterId: "frm-foundations",
    question: "企業風險管理（ERM）的三道防線模型中，第二道防線是？",
    options: [
      "業務單位",
      "風險管理部門",
      "內部稽核",
      "外部審計",
    ],
    answer: 1,
    explanation:
      "三道防線：第一道是業務單位（第一線風險管理）、第二道是風險管理部門（獨立監督）、第三道是內部稽核（獨立確認）。外部審計不在三道防線內。",
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
      "LTCM 的崩盤顯示：(1) 過度使用槓桿放大損失 (2) 危機中流動性會急劇下降 (3) 正常時期的低相關性在危機中會急劇上升 (4) 模型在極端情境下可能失效。",
  },
  // Market Risk
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
      "VaR 的定義：在給定信心水準（99%）和時間範圍（1天）下，投資組合的最大預期損失。即有 99% 信心，1天損失不會超過此金額。注意：VaR 並非最大可能損失。",
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
      "歷史模擬法直接使用過去的實際報酬資料來建構損益分配，不需要假設特定的統計分配型態（如常態分配）。其他方法都假設報酬呈常態分配。",
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
      "ES（又稱 CVaR）衡量的是損失超過 VaR 時的平均損失。它克服了 VaR 的缺點：(1) 考慮尾部風險 (2) 具有次可加性，是一致性風險衡量指標。",
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
      "假設報酬獨立且同分配（i.i.d.），T 天的 VaR = 1 天 VaR × √T。因此 10 天 VaR = 1 天 VaR × √10 ≈ 1 天 VaR × 3.162。",
  },
  // Credit Risk
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
      "預期損失 EL = PD（違約機率）× LGD（違約損失率）× EAD（違約曝險額）。這是信用風險管理中最基本的公式。",
  },
  {
    id: "frm-cr-2",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    question: "S&P 信用評等中，BBB 以上屬於：",
    options: ["投機等級", "投資等級", "違約等級", "觀察等級"],
    answer: 1,
    explanation:
      "S&P 評等中，BBB-（含）以上為投資等級（Investment Grade），BB+（含）以下為投機等級（Speculative Grade / High Yield）。",
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
      "Merton 結構模型中，股權被視為公司資產的買權（Call Option），履約價為負債面額。當公司資產價值高於負債時，股東行使買權（清償負債後獲得剩餘）；低於負債時放棄（違約）。",
  },
  // Operational Risk
  {
    id: "frm-or-1",
    courseId: "frm",
    chapterId: "frm-operational-risk",
    question: "Basel 定義的操作風險不包括以下哪項？",
    options: [
      "內部詐欺",
      "系統失效",
      "市場波動損失",
      "外部詐欺",
    ],
    answer: 2,
    explanation:
      "操作風險是因內部流程、人員、系統不完善或外部事件所導致的損失。市場波動造成的損失屬於市場風險，不屬於操作風險的範疇。",
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
      "基本指標法（Basic Indicator Approach, BIA）：操作風險資本 = 前三年正的營業毛利（Gross Income）平均值 × 15%（α 係數）。",
  },
  // Liquidity Risk
  {
    id: "frm-lr-1",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    question: "LCR（流動性覆蓋比率）的最低要求為？",
    options: ["50%", "80%", "100%", "120%"],
    answer: 2,
    explanation:
      "LCR = 高品質流動資產（HQLA）/ 30天淨現金流出 ≥ 100%。意味著銀行必須持有足夠的高品質流動資產，以應對 30 天的壓力情境現金流出。",
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
      "市場流動性風險是指無法以合理的價格和速度賣出持有的資產，通常表現為買賣價差擴大、市場深度不足、價格衝擊增大。",
  },
];
