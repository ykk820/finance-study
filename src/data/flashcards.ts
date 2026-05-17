export type FlashcardType = "formula" | "law" | "concept";

export interface Flashcard {
  id: string;
  courseId: string;
  chapterId: string;
  type: FlashcardType;
  front: string;
  back: string;
  trap: string;
}

export const flashcards: Flashcard[] = [
  {
    id: "cfa-tvm-fv",
    courseId: "cfa-level1",
    chapterId: "cfa1-quant",
    type: "formula",
    front: "Future Value",
    back: "FV = PV x (1 + r)^n",
    trap: "確認 r 和 n 的期間一致，月利率不能直接套年期數。",
  },
  {
    id: "cfa-capm",
    courseId: "cfa-level1",
    chapterId: "cfa1-portfolio",
    type: "formula",
    front: "CAPM",
    back: "E(Ri) = Rf + beta x [E(Rm) - Rf]",
    trap: "Beta 衡量系統風險，不是總風險。",
  },
  {
    id: "cfa-dupont",
    courseId: "cfa-level1",
    chapterId: "cfa1-fra",
    type: "formula",
    front: "DuPont ROE",
    back: "ROE = Net Margin x Asset Turnover x Equity Multiplier",
    trap: "權益乘數上升可能提高 ROE，但也代表槓桿風險上升。",
  },
  {
    id: "senior-sharpe",
    courseId: "securities-senior",
    chapterId: "senior-investment",
    type: "formula",
    front: "Sharpe Ratio",
    back: "Sharpe = (Rp - Rf) / sigma p",
    trap: "分母是投資組合總風險，適合評估未充分分散的投資組合。",
  },
  {
    id: "senior-insider",
    courseId: "securities-senior",
    chapterId: "senior-regulation",
    type: "law",
    front: "內線交易判斷",
    back: "重點看重大消息、未公開、知悉消息者與買賣時間點。",
    trap: "不是只有公司內部人會構成，消息受領人也可能落入規範。",
  },
  {
    id: "junior-order",
    courseId: "securities-junior",
    chapterId: "junior-practice",
    type: "law",
    front: "委託與成交流程",
    back: "開戶、委託、撮合成交、交割是基本流程。",
    trap: "集中市場與櫃買交易制度細節不要混用。",
  },
  {
    id: "junior-tax",
    courseId: "securities-junior",
    chapterId: "junior-tax",
    type: "law",
    front: "交易成本",
    back: "常見包含手續費、證券交易稅與特定所得稅負。",
    trap: "稅率與適用商品會更新，考前要看最新版本。",
  },
  {
    id: "frm-var",
    courseId: "frm",
    chapterId: "frm-market-risk",
    type: "formula",
    front: "Value at Risk",
    back: "在給定信賴水準與期間下，估計可能損失的界線。",
    trap: "VaR 不描述超過界線後會損失多少，Expected Shortfall 才補這塊。",
  },
  {
    id: "frm-credit-loss",
    courseId: "frm",
    chapterId: "frm-credit-risk",
    type: "formula",
    front: "Expected Loss",
    back: "EL = PD x LGD x EAD",
    trap: "PD 是違約機率，LGD 是違約後損失率，EAD 是曝險金額。",
  },
  {
    id: "frm-liquidity",
    courseId: "frm",
    chapterId: "frm-liquidity-risk",
    type: "concept",
    front: "Funding liquidity vs Market liquidity",
    back: "Funding liquidity 是取得資金能力；Market liquidity 是快速交易且不大幅影響價格的能力。",
    trap: "壓力情境下兩者會互相放大，但定義不同。",
  },
];
