export type Priority = "high" | "medium" | "low";

export interface ExamFocusTopic {
  title: string;
  weight: string;
  priority: Priority;
  confidence: "官方權重" | "官方範圍" | "考古趨勢推估";
  trend: string;
  chapterIds: string[];
  focusPoints: string[];
  traps: string[];
  action: string;
}

export interface ExamSource {
  label: string;
  url: string;
}

export interface ExamFocusCourse {
  courseId: string;
  updatedAt: string;
  dataBasis: string;
  examPattern: string;
  overallStrategy: string;
  sources: ExamSource[];
  topics: ExamFocusTopic[];
}

export const examFocusCourses: ExamFocusCourse[] = [
  {
    courseId: "cfa-level1",
    updatedAt: "2026-05-17",
    dataBasis:
      "依 CFA Institute 2026 Level I 官方 topic weights、topic outlines 與站內題庫章節映射整理。",
    examPattern:
      "Level I 以選擇題測驗基礎觀念與應用。官方公布權重區間，不公布固定題數。",
    overallStrategy:
      "優先守住 Ethics、FSA、Equity、Fixed Income；Quant 和 Economics 用公式與情境題維持穩定分數；Derivatives 不重但常是分水嶺。",
    sources: [
      {
        label: "CFA Institute Level I exam topic weights",
        url: "https://www.cfainstitute.org/programs/cfa/exam/level-i",
      },
      {
        label: "2026 Level I Topic Outlines",
        url: "https://www.cfainstitute.org/sites/default/files/docs/programs/cfa-program/2026-l1-topics-combined.pdf",
      },
    ],
    topics: [
      {
        title: "Ethical and Professional Standards",
        weight: "15-20%",
        priority: "high",
        confidence: "官方權重",
        trend: "長期高權重，且常用情境判斷測試灰色地帶。",
        chapterIds: ["cfa1-ethics"],
        focusPoints: ["Standards I-VII", "利益衝突揭露", "客戶責任", "重大非公開資訊"],
        traps: ["用法律最低標準取代 CFA Standards", "忽略 disclosure 與 priority of transactions"],
        action: "考前兩週每天做少量 Ethics 情境題，建立判斷直覺。",
      },
      {
        title: "Financial Statement Analysis",
        weight: "11-14%",
        priority: "high",
        confidence: "官方權重",
        trend: "題目常結合比率、現金流與會計處理差異。",
        chapterIds: ["cfa1-fra"],
        focusPoints: ["三大報表連動", "現金流分類", "財務比率", "存貨與折舊影響"],
        traps: ["只背公式不理解分子分母", "忽略會計政策改變對比率的方向"],
        action: "用表格整理每個會計處理對 NI、CFO、Assets、Equity 的影響。",
      },
      {
        title: "Equity Investments",
        weight: "11-14%",
        priority: "high",
        confidence: "官方權重",
        trend: "市場結構、指數、估值倍數與 DDM 都容易出題。",
        chapterIds: ["cfa1-equity"],
        focusPoints: ["市場組織", "股價指數", "P/E、P/B、EV multiples", "DDM"],
        traps: ["混淆 price multiple 與 enterprise value multiple", "忽略成長率假設"],
        action: "把 valuation multiples 的適用情境與限制整理成對照表。",
      },
      {
        title: "Fixed Income",
        weight: "11-14%",
        priority: "high",
        confidence: "官方權重",
        trend: "債券評價、殖利率、duration、credit risk 是穩定核心。",
        chapterIds: ["cfa1-fi"],
        focusPoints: ["債券價格與殖利率", "Duration / Convexity", "利率風險", "信用分析"],
        traps: ["價格與殖利率方向判斷錯", "把 Macaulay、Modified、Effective duration 混用"],
        action: "用 20 題一組練習債券計算題，檢查計算機操作速度。",
      },
      {
        title: "Portfolio Management",
        weight: "8-12%",
        priority: "medium",
        confidence: "官方權重",
        trend: "CAPM、風險報酬、投資組合選擇常與 Quant 連動。",
        chapterIds: ["cfa1-portfolio"],
        focusPoints: ["風險規避", "CML / CAL", "CAPM", "風險治理"],
        traps: ["把 total risk 和 systematic risk 混為一談", "Beta 解讀不精確"],
        action: "和 Quant 一起複習 covariance、correlation、standard deviation。",
      },
      {
        title: "Quantitative Methods / Economics",
        weight: "各 6-9%",
        priority: "medium",
        confidence: "官方權重",
        trend: "單科權重不最高，但大量支撐其他科目的計算與理解。",
        chapterIds: ["cfa1-quant", "cfa1-economics"],
        focusPoints: ["TVM", "機率分配", "假設檢定", "供需、GDP、匯率"],
        traps: ["公式會背但題目語意看錯", "名目與實質概念混淆"],
        action: "建立公式卡，搭配短題快刷維持手感。",
      },
      {
        title: "Corporate Issuers / Derivatives",
        weight: "Corporate 6-9%；Derivatives 5-8%",
        priority: "medium",
        confidence: "官方權重",
        trend: "權重較低但常用基本觀念拉開分數。",
        chapterIds: ["cfa1-corporate", "cfa1-derivatives"],
        focusPoints: ["Working capital", "Leverage", "Forward/Futures/Options", "Put-call parity"],
        traps: ["忽略 derivative payoff 圖形", "把營運槓桿和財務槓桿混淆"],
        action: "把 derivatives payoff、parity 和 corporate leverage 公式做成一頁總表。",
      },
    ],
  },
  {
    courseId: "securities-senior",
    updatedAt: "2026-05-17",
    dataBasis:
      "依證基會高業測驗範圍、公開題目/解答公告與站內章節映射。題目內容不複製，僅整理命題區塊與準備策略。",
    examPattern:
      "專業科目以四選一單選題為主；公開解答顯示投資學、財務分析、法規實務皆是獨立命題區塊。",
    overallStrategy:
      "高業重點在投資學計算、財報比率與法規細節。法規靠反覆辨識條文關鍵字，投資與財分靠公式題穩定拿分。",
    sources: [
      {
        label: "證基會高業測驗範圍",
        url: "https://webline.sfi.org.tw/download/test_ftp/%E9%AB%98%E6%A5%AD%E7%AF%84%E5%9C%8D.pdf",
      },
      {
        label: "證基會 115 年第 1 次高業試題解答",
        url: "https://examweb.sfi.org.tw/Download/01/03a.pdf",
      },
    ],
    topics: [
      {
        title: "投資學：CAPM、債券、衍生性商品",
        weight: "高頻計算題",
        priority: "high",
        confidence: "考古趨勢推估",
        trend: "歷屆題型常把報酬率、債券評價、選擇權與投組觀念混合測。",
        chapterIds: ["senior-investment", "senior-derivatives"],
        focusPoints: ["CAPM", "債券價格/殖利率", "Duration", "選擇權損益", "技術指標"],
        traps: ["忽略年化與期間單位", "選擇權買賣方損益方向反了"],
        action: "把公式題分成報酬率、債券、投組、衍生品四包，每包至少練 20 題。",
      },
      {
        title: "財務分析：比率、現金流、DuPont",
        weight: "高頻核心",
        priority: "high",
        confidence: "考古趨勢推估",
        trend: "比率分析與報表分類穩定出現，容易用小陷阱測觀念。",
        chapterIds: ["senior-financial-analysis"],
        focusPoints: ["ROE / ROA", "流動比率/速動比率", "存貨與應收週轉", "現金流量表"],
        traps: ["用平均資產或期末資產搞錯", "營業/投資/籌資現金流分類錯"],
        action: "用同一家公司報表做完整比率拆解，避免只背孤立公式。",
      },
      {
        title: "證券法規與交易實務",
        weight: "細節記憶密集",
        priority: "high",
        confidence: "官方範圍",
        trend: "證券交易法、公司法、證券商管理規則、公開發行規範是基本盤。",
        chapterIds: ["senior-regulation"],
        focusPoints: ["內線交易", "公開收購", "募集發行", "信用交易", "集中/櫃買交易制度"],
        traps: ["期限、比例、主管機關、適用對象容易混淆", "把初業與高業範圍混在一起"],
        action: "做條文比較表：誰申報、向誰申報、幾日內、違反效果。",
      },
    ],
  },
  {
    courseId: "securities-junior",
    updatedAt: "2026-05-17",
    dataBasis:
      "依證基會初業測驗範圍與公開試題/解答資訊整理，重點放在法規、交易實務、投資與財務基本觀念。",
    examPattern:
      "共同科目為金融市場常識與職業道德 100 題；專業科目以四選一單選題測驗證券法規與投資財務基礎。",
    overallStrategy:
      "初業不要追太深的財工，先拿法規、交易流程、基本投資與會計分錄概念。題目常考名詞辨識與制度細節。",
    sources: [
      {
        label: "證基會初業測驗範圍",
        url: "https://webline.sfi.org.tw/download/test_ftp/%E6%99%AE%E6%A5%AD%E7%AF%84%E5%9C%8D.pdf",
      },
      {
        label: "證基會 114 年第 1 次初業試題",
        url: "https://examweb.sfi.org.tw/Download/02/02.pdf",
      },
    ],
    topics: [
      {
        title: "證券交易法規與實務",
        weight: "最高優先",
        priority: "high",
        confidence: "官方範圍",
        trend: "證券交易法、公司法、募集發行、公開資訊與交易制度是常見核心。",
        chapterIds: ["junior-regulation", "junior-practice"],
        focusPoints: ["開戶委託", "競價交易", "交割", "內線交易", "資訊揭露"],
        traps: ["期限與比例記錯", "集中市場與櫃買制度混淆"],
        action: "先用制度流程圖背交易實務，再回頭記條文數字。",
      },
      {
        title: "證券投資與財務分析基礎",
        weight: "穩定拿分區",
        priority: "high",
        confidence: "考古趨勢推估",
        trend: "基本分析、技術分析、財報與比率常用選擇題測觀念。",
        chapterIds: ["junior-account"],
        focusPoints: ["本益比", "股利折現", "財務比率", "K 線與技術指標"],
        traps: ["把投資指標的高低意義反過來", "財報科目分類錯"],
        action: "建立名詞卡：每張只放公式、用途、判讀方向。",
      },
      {
        title: "稅賦與費用",
        weight: "短期記憶題",
        priority: "medium",
        confidence: "官方範圍",
        trend: "題目不一定難，但容易因細節未更新而失分。",
        chapterIds: ["junior-tax"],
        focusPoints: ["證交稅", "手續費", "股利所得", "交易成本"],
        traps: ["稅率與適用情境搞混", "忽略法規更新"],
        action: "考前最後一週再背一次，並標註資料版本日期。",
      },
    ],
  },
  {
    courseId: "frm",
    updatedAt: "2026-05-17",
    dataBasis:
      "依 GARP FRM 官方考試格式、科目架構、近期通過率與 Part I 領域權重整理；站內章節目前涵蓋 Part I/II 重要風險主題。",
    examPattern:
      "Part I 100 題、Part II 80 題，皆為四小時 CBT。GARP 近期公布 2025 年 11 月 Part I 通過率 47%、Part II 50%。",
    overallStrategy:
      "FRM 不是只背公式，要能解釋風險模型、限制與實務情境。Part I 應優先守住 Financial Markets & Products 與 Valuation and Risk Models。",
    sources: [
      {
        label: "GARP FRM Program Exams",
        url: "https://www.garp.org/frm/program-exams",
      },
      {
        label: "GARP FRM Study Materials",
        url: "https://www.garp.org/frm/study-materials",
      },
    ],
    topics: [
      {
        title: "Valuation and Risk Models / Market Risk",
        weight: "Part I 約 30%",
        priority: "high",
        confidence: "官方權重",
        trend: "VaR、Expected Shortfall、Greeks、backtesting 是高密度考點。",
        chapterIds: ["frm-market-risk"],
        focusPoints: ["VaR", "Expected Shortfall", "Duration", "Greeks", "Backtesting"],
        traps: ["只會算 VaR 但不懂模型限制", "混淆 normal VaR、historical VaR、Monte Carlo"],
        action: "每個模型都整理：假設、公式、優點、缺點、適用情境。",
      },
      {
        title: "Financial Markets and Products",
        weight: "Part I 約 30%",
        priority: "high",
        confidence: "官方權重",
        trend: "衍生品、固定收益、交易機制和避險是 Part I 大宗。",
        chapterIds: ["frm-foundations", "frm-market-risk"],
        focusPoints: ["Forwards/Futures", "Options", "Swaps", "Bonds", "Hedging"],
        traps: ["把 payoff、value、profit 混為一談", "避險方向判斷錯"],
        action: "用損益圖練習每種商品，並搭配避險情境題。",
      },
      {
        title: "Quantitative Analysis",
        weight: "Part I 約 20%",
        priority: "medium",
        confidence: "官方權重",
        trend: "單獨權重較低，但支撐市場風險、信用風險和模型題。",
        chapterIds: ["frm-foundations"],
        focusPoints: ["機率分配", "迴歸", "假設檢定", "相關與共變異"],
        traps: ["統計檢定方向錯", "把 correlation 當成 causation"],
        action: "先補統計工具，再回到 VaR、Merton、信用模型。",
      },
      {
        title: "Credit / Operational / Liquidity Risk",
        weight: "Part II 核心群",
        priority: "high",
        confidence: "官方範圍",
        trend: "Part II 更重應用：信用損失、作業風險、流動性壓力與治理。",
        chapterIds: ["frm-credit-risk", "frm-operational-risk", "frm-liquidity-risk"],
        focusPoints: ["PD/LGD/EAD", "Credit VaR", "Basel", "Operational resilience", "Liquidity stress"],
        traps: ["把風險衡量和風險管理混在一起", "忽略監理與治理語境"],
        action: "每個風險類型都用同一模板整理：定義、衡量、管理、限制。",
      },
    ],
  },
];

export const optimizationIdeas = [
  {
    title: "弱點熱圖",
    description: "把做題紀錄依課程與章節切成紅黃綠，優先安排錯題率最高的區塊。",
    impact: "高",
  },
  {
    title: "考前 14 天衝刺表",
    description: "依官方權重與錯題本自動排每日任務，避免最後只讀熟悉的章節。",
    impact: "高",
  },
  {
    title: "公式卡與法規卡",
    description: "CFA/FRM 偏公式，高業/初業偏法規數字，可用不同卡片模板複習。",
    impact: "中高",
  },
  {
    title: "計時模考模式",
    description: "加入 60/90/120 分鐘測驗，模擬正式考試壓力並記錄完成率。",
    impact: "中高",
  },
  {
    title: "題目標籤化",
    description: "替題庫補上 topic、公式、法規、觀念、易錯點標籤，讓搜尋與弱點分析更精準。",
    impact: "中",
  },
];

export function getExamFocusByCourse(courseId: string) {
  return examFocusCourses.find((course) => course.courseId === courseId);
}
