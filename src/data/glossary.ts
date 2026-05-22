export type GlossaryCategory =
  | "valuation"
  | "risk"
  | "accounting"
  | "regulation"
  | "derivatives"
  | "economics"
  | "portfolio";

export interface GlossaryTerm {
  id: string;
  term: string;
  aliases: string[];
  category: GlossaryCategory;
  courseIds: string[];
  chapterIds: string[];
  formal: string;
  plain: string;
  analogy: string;
  examAngle: string;
  commonTrap: string;
  miniExample: string;
}

export const categoryLabels: Record<GlossaryCategory, string> = {
  valuation: "評價",
  risk: "風險",
  accounting: "財報",
  regulation: "法規",
  derivatives: "衍生品",
  economics: "經濟",
  portfolio: "投組",
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "time-value-of-money",
    term: "時間價值",
    aliases: ["Time Value of Money", "TVM", "現值", "未來值"],
    category: "valuation",
    courseIds: ["cfa-level1"],
    chapterIds: ["cfa1-quant"],
    formal: "同一筆錢在不同時間點的價值不同，需用折現率換算成可比較的現值或未來值。",
    plain: "今天的 100 元通常比明年的 100 元值錢，因為今天拿到可以投資、存利息，也少了等待的不確定性。",
    analogy: "像你現在拿到便當，跟明年才拿到便當，雖然都叫便當，但對你現在的價值完全不同。",
    examAngle: "常考 FV、PV、年金、永續年金，題目會混淆付款時點和利率期間。",
    commonTrap: "月利率、年利率、期數沒對齊就直接套公式。",
    miniExample: "若年利率 10%，一年後 110 元的現值是 100 元。",
  },
  {
    id: "discount-rate",
    term: "折現率",
    aliases: ["Discount Rate", "required return", "必要報酬率"],
    category: "valuation",
    courseIds: ["cfa-level1", "securities-senior"],
    chapterIds: ["cfa1-quant", "cfa1-equity", "senior-investment"],
    formal: "將未來現金流折算為現在價值時使用的報酬率，通常反映資金成本與風險。",
    plain: "折現率就是你心裡要求的報酬門檻。風險越高，你會要求越高報酬，所以未來的錢折回今天就越不值錢。",
    analogy: "像借錢給熟人和陌生人，你要求的利息不會一樣；陌生人風險高，就要更高利息。",
    examAngle: "常和 DDM、債券評價、NPV、CAPM 放在一起考。",
    commonTrap: "把折現率當成固定利率，忘記風險上升會讓折現率上升、估值下降。",
    miniExample: "同樣明年收到 100 元，用 5% 折現比用 10% 折現得到的現值高。",
  },
  {
    id: "capm",
    term: "CAPM",
    aliases: ["Capital Asset Pricing Model", "資本資產定價模型", "Beta"],
    category: "portfolio",
    courseIds: ["cfa-level1", "securities-senior"],
    chapterIds: ["cfa1-portfolio", "senior-investment"],
    formal: "CAPM 用無風險利率、Beta 與市場風險溢酬估計資產的必要報酬率。",
    plain: "CAPM 在問：這個股票跟大盤一起震的程度有多高？震越大，投資人要求的報酬越高。",
    analogy: "像坐船，Beta 高的股票是遇浪就大晃的小船；Beta 低的是比較穩的大船。",
    examAngle: "常考公式 E(Ri)=Rf+Beta(E(Rm)-Rf)，也會考 Beta 的意義。",
    commonTrap: "Beta 衡量的是系統風險，不是公司全部風險。",
    miniExample: "Rf 2%、市場風險溢酬 6%、Beta 1.5，必要報酬率是 11%。",
  },
  {
    id: "duration",
    term: "存續期間",
    aliases: ["Duration", "Modified Duration", "Effective Duration"],
    category: "risk",
    courseIds: ["cfa-level1", "securities-senior", "frm"],
    chapterIds: ["cfa1-fi", "senior-investment", "frm-market-risk"],
    formal: "Duration 衡量債券價格對利率變動的敏感度，也可理解為現金流加權平均回收時間。",
    plain: "存續期間越長，債券越怕利率變動。利率一動，長天期債券價格晃得比較大。",
    analogy: "像蹺蹺板，坐得離中心越遠，輕輕一壓就晃很大；duration 越長就是坐越遠。",
    examAngle: "常考利率上升債券價格下跌，以及價格變動約等於 -duration x 利率變動。",
    commonTrap: "把 maturity 到期年限和 duration 當成同一件事。",
    miniExample: "Modified duration 5，殖利率上升 1%，債券價格約下跌 5%。",
  },
  {
    id: "convexity",
    term: "凸性",
    aliases: ["Convexity"],
    category: "risk",
    courseIds: ["cfa-level1", "frm"],
    chapterIds: ["cfa1-fi", "frm-market-risk"],
    formal: "Convexity 衡量債券價格與殖利率關係的彎曲程度，用來修正 duration 的線性估計。",
    plain: "Duration 是用直線估價格變化，但債券價格和利率不是完全直線；凸性就是補那個彎彎的誤差。",
    analogy: "用直尺量彎路會低估距離，convexity 就是在提醒你：這條路其實是彎的。",
    examAngle: "常考利率大幅變動時，duration alone 不夠準，要加 convexity adjustment。",
    commonTrap: "以為 convexity 只在高階題出現；其實概念題很愛考。",
    miniExample: "同樣 duration 下，正凸性較高的債券在利率上下波動時通常較有利。",
  },
  {
    id: "roe",
    term: "股東權益報酬率",
    aliases: ["ROE", "Return on Equity", "DuPont"],
    category: "accounting",
    courseIds: ["cfa-level1", "securities-senior", "securities-junior"],
    chapterIds: ["cfa1-fra", "senior-financial-analysis", "junior-account"],
    formal: "ROE 衡量公司用股東權益創造盈餘的效率，可拆解為淨利率、資產周轉率與權益乘數。",
    plain: "ROE 就是股東投入一塊錢，公司幫你賺回多少錢。",
    analogy: "像開店，老闆出了本金，ROE 看的是這筆本金一年滾出多少利潤。",
    examAngle: "常用 DuPont 拆解判斷 ROE 變動來源。",
    commonTrap: "ROE 高不一定完全好，可能只是公司借很多錢把槓桿墊高。",
    miniExample: "淨利率 10%、資產周轉率 1.2、權益乘數 2，ROE 是 24%。",
  },
  {
    id: "cash-flow-statement",
    term: "現金流量表",
    aliases: ["Cash Flow Statement", "CFO", "CFI", "CFF"],
    category: "accounting",
    courseIds: ["cfa-level1", "securities-senior"],
    chapterIds: ["cfa1-fra", "senior-financial-analysis"],
    formal: "現金流量表將現金流分為營業、投資與籌資活動，呈現公司現金來源與用途。",
    plain: "損益表說公司有沒有賺錢，現金流量表說錢到底有沒有真的進來。",
    analogy: "像你薪水帳面上很高，但如果錢都還沒入帳，錢包還是空的。",
    examAngle: "常考三類現金流分類，以及淨利和 CFO 為何不同。",
    commonTrap: "把買設備放到營業活動，或把發行股票放到投資活動。",
    miniExample: "賣商品收到現金是 CFO；買機器是 CFI；發債借錢是 CFF。",
  },
  {
    id: "var",
    term: "風險值",
    aliases: ["VaR", "Value at Risk"],
    category: "risk",
    courseIds: ["frm", "cfa-level1"],
    chapterIds: ["frm-market-risk", "cfa1-portfolio"],
    formal: "VaR 在給定期間與信賴水準下，估計損失不超過某金額的界線。",
    plain: "VaR 是一句話：在正常情況下，我最多大概會虧到哪裡。但它不告訴你真的爆掉時會多慘。",
    analogy: "像天氣預報說 95% 機率雨量不超過 50mm，但剩下 5% 可能是暴雨。",
    examAngle: "常考 historical、parametric、Monte Carlo VaR 的差異和限制。",
    commonTrap: "以為 99% VaR 代表最壞只會虧那麼多；其實超過 VaR 後可能虧更多。",
    miniExample: "1 日 99% VaR 為 100 萬，意思是 99% 情況下一日損失不超過 100 萬。",
  },
  {
    id: "expected-shortfall",
    term: "預期短缺",
    aliases: ["Expected Shortfall", "ES", "CVaR"],
    category: "risk",
    courseIds: ["frm"],
    chapterIds: ["frm-market-risk"],
    formal: "Expected Shortfall 衡量損失超過 VaR 門檻後的平均損失。",
    plain: "VaR 看懸崖邊在哪裡；ES 問的是，如果真的掉下去，平均會摔多深。",
    analogy: "不只問颱風警戒線，而是問超過警戒線後平均災情多嚴重。",
    examAngle: "常拿來和 VaR 比較，ES 對尾端風險更敏感。",
    commonTrap: "把 ES 誤解成另一個分位數；它其實是尾端平均。",
    miniExample: "99% VaR 後最差 1% 情境的平均損失，就是 99% ES。",
  },
  {
    id: "pd-lgd-ead",
    term: "信用損失三要素",
    aliases: ["PD", "LGD", "EAD", "Expected Loss"],
    category: "risk",
    courseIds: ["frm"],
    chapterIds: ["frm-credit-risk"],
    formal: "預期信用損失通常可表示為 EL = PD x LGD x EAD。",
    plain: "信用損失要看三件事：對方多可能倒、倒了會損失幾成、你借出去多少。",
    analogy: "借朋友錢也一樣：他會不會還、還不了你能追回多少、你借了多少。",
    examAngle: "FRM 很常考三者定義、方向與 Basel/信用模型應用。",
    commonTrap: "把 LGD 和 recovery rate 搞反；LGD = 1 - recovery rate。",
    miniExample: "PD 2%、LGD 40%、EAD 1,000 萬，EL 是 8 萬。",
  },
  {
    id: "put-call-parity",
    term: "買賣權平價",
    aliases: ["Put-Call Parity"],
    category: "derivatives",
    courseIds: ["cfa-level1", "securities-senior"],
    chapterIds: ["cfa1-derivatives", "senior-derivatives"],
    formal: "買權、賣權、標的資產與無風險債券之間存在無套利關係。",
    plain: "如果兩組金融商品最後的結果一模一樣，今天價格就不能差太多；差太多就有套利。",
    analogy: "兩家店賣一模一樣的套餐，如果一邊便宜很多，大家會買便宜的、賣貴的。",
    examAngle: "常考公式、套利方向與 synthetic position。",
    commonTrap: "只背公式，不會判斷哪邊貴、哪邊便宜。",
    miniExample: "Call + PV(K) 應約等於 Put + Stock。",
  },
  {
    id: "insider-trading",
    term: "內線交易",
    aliases: ["Insider Trading", "重大消息"],
    category: "regulation",
    courseIds: ["securities-senior", "securities-junior", "cfa-level1"],
    chapterIds: ["senior-regulation", "junior-regulation", "cfa1-ethics"],
    formal: "知悉重大未公開資訊者，在資訊公開前買賣相關證券，可能構成內線交易。",
    plain: "你知道市場還不知道的大事，先偷跑去買賣股票，就是內線交易的核心問題。",
    analogy: "像考試前偷看到答案，別人都還不知道，你先拿去作答，這不公平。",
    examAngle: "常考重大消息、公開時點、適用對象和禁止交易期間。",
    commonTrap: "以為只有公司董事經理人才會違法；消息受領人也可能出事。",
    miniExample: "知道併購消息尚未公開就買股票，是典型高風險情境。",
  },
  {
    id: "gdp",
    term: "國內生產毛額",
    aliases: ["GDP", "Gross Domestic Product"],
    category: "economics",
    courseIds: ["cfa-level1"],
    chapterIds: ["cfa1-economics"],
    formal: "GDP 衡量一國一定期間內生產的最終商品與服務市場價值。",
    plain: "GDP 大致是在看一個國家這段時間總共做出了多少經濟成果。",
    analogy: "像一家店一年總共賣出多少餐點和服務，用來看這家店規模有多大。",
    examAngle: "常考支出法 C + I + G + (X - M)、名目 vs 實質 GDP。",
    commonTrap: "把中間財重複計入，或混淆名目成長和實質成長。",
    miniExample: "物價上漲讓名目 GDP 變高，不代表實質產出一定增加。",
  },
  {
    id: "liquidity-risk",
    term: "流動性風險",
    aliases: ["Liquidity Risk", "Funding Liquidity", "Market Liquidity"],
    category: "risk",
    courseIds: ["frm"],
    chapterIds: ["frm-liquidity-risk"],
    formal: "流動性風險包含無法取得資金或無法以合理價格快速交易資產的風險。",
    plain: "你不是沒有資產，而是急著用錢時賣不掉，或一賣就要大打折。",
    analogy: "房子很值錢，但今天急需現金，不一定能馬上用好價格賣掉。",
    examAngle: "常考 funding liquidity 和 market liquidity 的差別，以及壓力測試。",
    commonTrap: "把流動性風險當成信用風險；它重點是變現和資金取得。",
    miniExample: "市場恐慌時 bid-ask spread 變大，就是 market liquidity 變差。",
  },
  {
    id: "sharpe-ratio",
    term: "夏普比率",
    aliases: ["Sharpe Ratio"],
    category: "portfolio",
    courseIds: ["cfa-level1", "securities-senior"],
    chapterIds: ["cfa1-portfolio", "senior-investment"],
    formal: "夏普比率衡量每承擔一單位總風險所獲得的超額報酬。",
    plain: "不是只看賺多少，而是看你冒了多少波動才賺到那些錢。",
    analogy: "兩個司機都到目的地，一個平穩開到，一個一路甩尾；夏普比率偏好前者。",
    examAngle: "常考公式 (Rp - Rf) / sigma p，以及和 Treynor ratio 的差異。",
    commonTrap: "夏普用總風險標準差；Treynor 用 Beta。",
    miniExample: "報酬 12%、無風險 2%、標準差 20%，Sharpe = 0.5。",
  },
];

export function getGlossaryTermsByChapter(chapterId: string) {
  return glossaryTerms.filter((term) => term.chapterIds.includes(chapterId));
}

export function searchGlossaryTerms(query: string) {
  const term = query.trim().toLowerCase();
  if (term.length < 2) return [];

  return glossaryTerms.filter((item) => {
    const text = [
      item.term,
      ...item.aliases,
      item.formal,
      item.plain,
      item.analogy,
      item.examAngle,
      item.commonTrap,
      item.miniExample,
    ].join(" ").toLowerCase();
    return text.includes(term);
  });
}
