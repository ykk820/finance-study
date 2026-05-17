import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "cfa-level1",
    name: "CFA Level I",
    description: "特許金融分析師一級，涵蓋投資工具、資產估值、投資組合管理等核心知識",
    category: "cfa",
    chapters: [
      {
        id: "cfa1-ethics",
        title: "Ethics and Professional Standards",
        content: `# 道德與專業標準

## 核心概念

CFA Institute 的道德準則是所有 CFA 持證人必須遵守的基本原則。

### 七大專業行為準則

1. **專業性（Professionalism）**
   - 了解並遵守法律法規
   - 維持獨立性與客觀性
   - 不得有不實陳述
   - 不得從事不當行為

2. **資本市場的完整性（Integrity of Capital Markets）**
   - 禁止利用重大非公開資訊
   - 禁止市場操縱

3. **對客戶的責任（Duties to Clients）**
   - 忠誠、審慎和關懷
   - 公平交易
   - 投資適當性
   - 績效呈現
   - 保密

4. **對雇主的責任（Duties to Employers）**
   - 忠誠
   - 額外報酬安排
   - 監督責任

5. **投資分析與建議（Investment Analysis）**
   - 盡職調查與合理依據
   - 與客戶的溝通
   - 紀錄保存

6. **利益衝突（Conflicts of Interest）**
   - 利益衝突的揭露
   - 交易優先順序
   - 推薦費用

7. **作為 CFA 會員的責任**
   - 行為規範
   - 引用 CFA 稱號的規定

### GIPS（全球投資績效標準）

- 合規要求
- 績效計算標準
- 呈現與報告要求
`,
      },
      {
        id: "cfa1-quant",
        title: "Quantitative Methods",
        content: `# 數量方法

## 時間價值（Time Value of Money）

### 現值與未來值

**未來值 (FV)**：
\`FV = PV × (1 + r)^n\`

**現值 (PV)**：
\`PV = FV / (1 + r)^n\`

### 年金

- **普通年金（Ordinary Annuity）**：期末支付
- **期初年金（Annuity Due）**：期初支付

\`FV_annuity = PMT × [(1+r)^n - 1] / r\`

### 永續年金
\`PV = PMT / r\`

## 統計學基礎

### 描述統計
- 平均數（Mean）
- 中位數（Median）
- 眾數（Mode）
- 變異數（Variance）
- 標準差（Standard Deviation）
- 偏態（Skewness）與峰態（Kurtosis）

### 機率分配
- 常態分配（Normal Distribution）
- 二項分配（Binomial Distribution）
- t 分配
- 卡方分配（Chi-Square）
- F 分配

## 假設檢定

1. 建立假設（H₀ 和 H₁）
2. 選擇顯著水準（α）
3. 計算檢定統計量
4. 做出決定

### 常用檢定
- z 檢定
- t 檢定
- F 檢定
- 卡方檢定

## 迴歸分析

### 簡單線性迴歸
\`Y = a + bX + ε\`
- 最小平方法（OLS）
- R² 判定係數
- 殘差分析

### 多元迴歸
- 多重共線性
- 異質變異數
- 自相關
`,
      },
      {
        id: "cfa1-economics",
        title: "Economics",
        content: `# 經濟學

## 總體經濟學

### GDP（國內生產毛額）
- 支出法：GDP = C + I + G + (X - M)
- 名目 GDP vs 實質 GDP
- GDP 平減指數

### 景氣循環
1. 擴張期（Expansion）
2. 高峰期（Peak）
3. 收縮期（Contraction）
4. 谷底（Trough）

### 貨幣政策
- 利率工具
- 公開市場操作
- 存款準備率
- 量化寬鬆（QE）

### 財政政策
- 政府支出
- 稅收政策
- 自動穩定器
- 財政乘數

## 個體經濟學

### 供給與需求
- 需求法則
- 供給法則
- 市場均衡
- 彈性（價格、所得、交叉）

### 市場結構
- 完全競爭
- 獨占性競爭
- 寡占
- 獨占

## 國際經濟

### 匯率
- 即期匯率 vs 遠期匯率
- 購買力平價（PPP）
- 利率平價（IRP）

### 國際貿易
- 比較利益法則
- 貿易障礙
- 經常帳與資本帳
`,
      },
      {
        id: "cfa1-fra",
        title: "Financial Reporting and Analysis",
        content: `# 財務報告與分析

## 會計準則

### IFRS vs US GAAP
- 原則基礎 vs 規則基礎
- 主要差異比較
- 趨同趨勢

## 三大財務報表

### 資產負債表（Balance Sheet）
- 資產分類（流動/非流動）
- 負債分類
- 股東權益組成
- 表外項目

### 損益表（Income Statement）
- 營收認列原則
- 費用配合原則
- 持續營業 vs 停業部門
- 綜合損益

### 現金流量表（Cash Flow Statement）
- 營業活動（直接法/間接法）
- 投資活動
- 籌資活動
- 自由現金流（FCF）

## 財務分析技術

### 比率分析
- 流動性比率
- 槓桿比率
- 獲利能力比率
- 效率比率

### 品質分析
- 盈餘品質
- 現金流品質
- 資產負債表品質
`,
      },
      {
        id: "cfa1-corporate",
        title: "Corporate Issuers",
        content: `# 公司金融

## 資本預算

### NPV（淨現值法）
\`NPV = Σ CFt / (1+r)^t - 初始投資\`
- 正 NPV → 接受
- NPV 為最佳決策準則

### IRR（內部報酬率）
- 使 NPV = 0 的折現率
- IRR > 資金成本 → 接受
- IRR 的限制

### 回收期法
- 簡單回收期
- 折現回收期

## 資本結構

### MM 理論
- 無稅世界：資本結構不影響公司價值
- 有稅世界：負債的稅盾效果

### 最適資本結構
- 財務困難成本
- 代理成本
- 靜態抵換理論
- 融資順位理論

## 股利政策

### 股利理論
- 股利無關論
- 在手之鳥理論
- 稅差理論

### 股利形式
- 現金股利
- 股票股利
- 股票回購
`,
      },
      {
        id: "cfa1-equity",
        title: "Equity Investments",
        content: `# 權益投資

## 市場組織與結構

### 證券市場
- 初級市場 vs 次級市場
- 交易所 vs 店頭市場
- 造市商制度

### 市場效率
- 弱式效率
- 半強式效率
- 強式效率
- 異常現象

## 權益評價

### 絕對估值法

**股利折現模型（DDM）**
\`P₀ = D₁ / (r - g)\`
- Gordon Growth Model
- 多階段 DDM

**自由現金流模型**
- FCFF（公司自由現金流）
- FCFE（股東自由現金流）

### 相對估值法
- P/E Ratio（本益比）
- P/B Ratio（股價淨值比）
- P/S Ratio（股價營收比）
- EV/EBITDA

## 產業分析

### Porter 五力分析
1. 新進入者威脅
2. 替代品威脅
3. 買方議價能力
4. 供應商議價能力
5. 現有競爭者
`,
      },
      {
        id: "cfa1-fi",
        title: "Fixed Income",
        content: `# 固定收益

## 債券基礎

### 債券特性
- 面額（Par Value）
- 票面利率（Coupon Rate）
- 到期日（Maturity）
- 信用品質

### 債券種類
- 政府公債
- 公司債
- 市政債券
- 資產擔保證券（ABS/MBS）

## 債券評價

### 現金流折現
\`P = Σ C/(1+r)^t + FV/(1+r)^n\`

### 殖利率衡量
- 當期殖利率（Current Yield）
- 到期殖利率（YTM）
- 贖回殖利率（YTC）
- 殖利率曲線（Yield Curve）

## 利率風險

### Duration
- Macaulay Duration
- Modified Duration
- Effective Duration

\`ΔP/P ≈ -D × Δy\`

### Convexity
- 修正 Duration 的不足
- 正凸性 vs 負凸性

## 信用分析

### 信用風險衡量
- 信用利差（Credit Spread）
- 違約機率
- 回收率
`,
      },
      {
        id: "cfa1-derivatives",
        title: "Derivatives",
        content: `# 衍生性金融商品

## 遠期與期貨

### 遠期合約
- 客製化 OTC 合約
- 無每日結算
- 信用風險較高

### 期貨合約
- 標準化交易所合約
- 每日結算（mark-to-market）
- 保證金制度

### 定價
\`F₀ = S₀ × (1 + r)^T\`

## 選擇權

### 基本概念
- 買權（Call）：買的權利
- 賣權（Put）：賣的權利
- 歐式 vs 美式

### 選擇權價值
- 內含價值（Intrinsic Value）
- 時間價值（Time Value）
- Put-Call Parity: C + PV(X) = P + S

### Greeks
- Delta（Δ）：價格敏感度
- Gamma（Γ）：Delta 的變動率
- Theta（Θ）：時間衰減
- Vega：波動度敏感度
- Rho：利率敏感度

## 交換合約（Swaps）

### 利率交換
- 固定對浮動
- 名目本金
- 結算差額

### 貨幣交換
- 跨幣別現金流交換
`,
      },
      {
        id: "cfa1-portfolio",
        title: "Portfolio Management",
        content: `# 投資組合管理

## 現代投資組合理論

### Markowitz 模型
- 期望報酬與風險
- 效率前緣（Efficient Frontier）
- 最小變異數組合

### 資本市場線（CML）
\`E(Rp) = Rf + [(E(Rm) - Rf) / σm] × σp\`

### 證券市場線（SML / CAPM）
\`E(Ri) = Rf + βi × [E(Rm) - Rf]\`

## 風險管理

### 風險類型
- 系統風險（不可分散）
- 非系統風險（可分散）
- β 值

### 風險衡量
- 標準差
- β
- VaR
- 追蹤誤差（Tracking Error）

## 投資流程

### IPS（投資政策書）
- 報酬目標
- 風險容忍度
- 時間範圍
- 流動性需求
- 稅務考量
- 法規限制

### 資產配置
- 策略性資產配置（SAA）
- 戰術性資產配置（TAA）
- 再平衡
`,
      },
    ],
  },
  {
    id: "securities-senior",
    name: "高級業務員",
    description: "證券商高級業務員資格測驗，含投資學、財務分析、證券法規",
    category: "securities-senior",
    chapters: [
      {
        id: "senior-investment",
        title: "投資學",
        content: `# 投資學

## 證券分析

### 基本分析
- 總體經濟分析
- 產業分析
- 公司分析

### 技術分析
- 趨勢分析（支撐線、壓力線）
- 型態分析（頭肩頂、雙重底）
- 技術指標（RSI、MACD、KD）
- 移動平均線（MA）

## 投資組合理論

### Markowitz 投資組合理論
- 效率前緣（Efficient Frontier）
- 風險分散化
- 共變異數與相關係數

### CAPM 模型
\`E(Ri) = Rf + βi × [E(Rm) - Rf]\`

- Rf：無風險利率
- β：系統風險
- E(Rm) - Rf：市場風險溢酬

### 夏普比率（Sharpe Ratio）
\`Sharpe = (Rp - Rf) / σp\`

### 乘聰比率（Treynor Ratio）
\`Treynor = (Rp - Rf) / βp\`

### Jensen's Alpha
\`α = Rp - [Rf + βp × (Rm - Rf)]\`

## 衍生性金融商品

### 選擇權
- 買權（Call）vs 賣權（Put）
- 內含價值 vs 時間價值
- Black-Scholes 模型
- 選擇權策略（價差、跨式）

### 期貨
- 期貨合約特性
- 保證金制度
- 避險策略
- 基差風險
`,
      },
      {
        id: "senior-financial-analysis",
        title: "財務分析",
        content: `# 財務分析

## 財務報表

### 資產負債表
- 資產 = 負債 + 股東權益
- 流動性分析

### 損益表
- 營收
- 營業利益
- 稅後淨利
- EPS

### 現金流量表
- 營業活動
- 投資活動
- 籌資活動

## 財務比率分析

### 獲利能力
- ROE（股東權益報酬率）
- ROA（資產報酬率）
- 毛利率、營業利益率、淨利率

### 償債能力
- 流動比率
- 速動比率
- 負債比率
- 利息保障倍數

### 經營效率
- 存貨周轉率
- 應收帳款周轉率
- 總資產周轉率

### DuPont Analysis
\`ROE = 淨利率 × 資產周轉率 × 權益乘數\`
`,
      },
      {
        id: "senior-regulation",
        title: "證券法規",
        content: `# 證券法規

## 證券交易法

### 有價證券
- 股票、公司債、政府債券
- 受益憑證、存託憑證
- 認購（售）權證

### 公開發行
- 募集與發行
- 公開說明書
- 資訊揭露義務

### 證券商管理
- 經紀商、自營商、承銷商
- 分離經營原則
- 資本適足率

## 公司法相關

### 股東權益
- 股東會決議
- 董事會組成
- 獨立董事與審計委員會

### 關係人交易
- 關係人定義
- 交易揭露
- 利益迴避

## 金融消費者保護

### 投資人保護
- 適合度原則（KYC）
- 風險告知義務
- 糾紛處理機制
- 投資人保護中心
`,
      },
      {
        id: "senior-derivatives",
        title: "衍生性金融商品",
        content: `# 衍生性金融商品

## 期貨

### 台灣期貨市場
- 台指期貨
- 小型台指期貨
- 股票期貨
- 保證金制度

### 期貨定價
\`F = S × e^(r-q)T\`
- 持有成本模型
- 正價差 vs 逆價差

### 期貨交易策略
- 避險（Hedging）
- 投機（Speculation）
- 套利（Arbitrage）

## 選擇權

### 台灣選擇權市場
- 台指選擇權
- 個股選擇權

### 選擇權定價因子
- 標的物價格
- 履約價格
- 到期時間
- 波動率
- 無風險利率

### 交易策略
- 保護性賣權
- 掩護性買權
- 牛市價差 / 熊市價差
- 跨式策略（Straddle）
- 勒式策略（Strangle）

## 結構型商品

### 連結標的
- 股權連結
- 利率連結
- 匯率連結

### 風險考量
- 本金保障程度
- 提前贖回風險
- 信用風險
`,
      },
    ],
  },
  {
    id: "securities-junior",
    name: "初級業務員",
    description: "證券商業務員資格測驗，含證券交易法規、證券投資實務",
    category: "securities-junior",
    chapters: [
      {
        id: "junior-regulation",
        title: "證券交易法規",
        content: `# 證券交易法規

## 證券交易法

### 基本規範
- 有價證券的定義
- 公開發行制度
- 證券交易所與櫃檯買賣

### 內線交易
- 內部人的定義
- 重大消息的認定
- 禁止短線交易（歸入權）

### 公開收購
- 強制公開收購門檻
- 收購程序
- 防禦措施

## 證券投資信託及顧問法

### 基金
- 開放型 vs 封閉型
- 基金淨值計算
- 投信事業規範

### 投顧
- 投資顧問業務範圍
- 全權委託
- 利益衝突防範

## 交易實務

### 交易制度
- 集合競價
- 逐筆交易
- 漲跌幅限制（10%）
- 信用交易
`,
      },
      {
        id: "junior-practice",
        title: "證券投資實務",
        content: `# 證券投資實務

## 股票

### 股票基本概念
- 普通股 vs 特別股
- 面額、市價、淨值
- 股利政策

### 股票評價
- 本益比（P/E Ratio）
- 股價淨值比（P/B Ratio）
- 殖利率

## 債券

### 債券基本概念
- 面額、票面利率、到期日
- 信用評等
- 殖利率曲線

### 債券評價
- 到期殖利率（YTM）
- 存續期間（Duration）
- 凸性（Convexity）

## 基金

### 共同基金分類
- 股票型 / 債券型 / 平衡型
- 國內型 / 海外型
- 主動型 / 被動型（ETF）

### 基金績效評估
- 報酬率計算
- 風險指標
- 基準指標比較
`,
      },
      {
        id: "junior-account",
        title: "開戶與交割",
        content: `# 開戶與交割

## 開戶作業

### 開戶流程
- 攜帶身分證明文件
- 簽署開戶契約
- 風險預告書
- 委託買賣受託契約

### 開戶限制
- 未成年人需法定代理人
- 受破產宣告尚未復權者
- 法人開戶要件

## 委託與成交

### 委託方式
- 當面委託
- 電話委託
- 網路委託（電子下單）

### 委託種類
- 限價委託
- 市價委託
- 當日有效 / 長效委託

### 成交原則
- 價格優先
- 時間優先

## 交割

### T+2 交割制度
- 交易日後第二個營業日
- 款券交割
- 違約交割處理

### 信用交易
- 融資（借錢買股）
- 融券（借股賣出）
- 維持率計算
- 追繳與斷頭
`,
      },
      {
        id: "junior-tax",
        title: "證券稅務",
        content: `# 證券稅務

## 證券交易稅

### 稅率
- 股票：賣出時課徵 0.3%
- ETF：賣出時課徵 0.1%
- 債券 ETF：停徵
- 期貨交易稅

### 計算方式
- 以成交金額為基準
- 由賣方負擔

## 股利課稅

### 合併計稅
- 股利併入綜合所得稅
- 可抵減稅額（8.5%，上限 8 萬）

### 分開計稅
- 股利所得單一稅率 28%
- 適合高所得者

## 資本利得

### 證券交易所得
- 目前停徵所得稅
- 海外所得注意最低稅負制

### 最低稅負制
- 基本所得額超過 750 萬
- 稅率 20%
- 海外所得逾 100 萬需申報
`,
      },
    ],
  },
  {
    id: "frm",
    name: "FRM (Financial Risk Manager)",
    description: "金融風險管理師，涵蓋市場風險、信用風險、操作風險等",
    category: "frm",
    chapters: [
      {
        id: "frm-foundations",
        title: "Foundations of Risk Management",
        content: `# 風險管理基礎

## 風險管理框架

### 風險類型
- 市場風險（Market Risk）
- 信用風險（Credit Risk）
- 操作風險（Operational Risk）
- 流動性風險（Liquidity Risk）

### ERM（企業風險管理）
- 由上而下的風險管理
- 風險偏好與風險容忍度
- 風險文化

## 風險治理

### 三道防線模型
1. 業務單位（第一道）
2. 風險管理部門（第二道）
3. 內部稽核（第三道）

### 風險委員會
- 董事會層級
- 首席風險官（CRO）

## 案例研究

### 歷史金融危機
- 1998 LTCM 崩盤
- 2008 全球金融危機
- 霸菱銀行事件
- JP Morgan 倫敦鯨事件

### 教訓
- 模型風險
- 過度槓桿
- 流動性枯竭
- 相關性在危機中上升
`,
      },
      {
        id: "frm-market-risk",
        title: "Market Risk",
        content: `# 市場風險

## Value at Risk (VaR)

### 定義
VaR 是在給定信心水準與時間範圍下，投資組合可能產生的最大損失。

### 計算方法

1. **歷史模擬法（Historical Simulation）**
   - 使用過去實際報酬分配
   - 不需要假設分配型態

2. **變異數-共變異數法（Variance-Covariance）**
   - 假設常態分配
   - \`VaR = μ - zα × σ\`

3. **蒙地卡羅模擬（Monte Carlo Simulation）**
   - 隨機生成大量情境
   - 最靈活但計算量大

### VaR 的限制
- 未考慮超過 VaR 的損失（尾部風險）
- 不具次可加性
- Expected Shortfall (ES) 作為補充

## 敏感度分析

### 利率風險
- Duration
- Convexity
- Key Rate Duration

### 股票風險
- Beta
- Delta, Gamma（選擇權）

### 壓力測試
- 歷史情境
- 假設情境
- 反向壓力測試
`,
      },
      {
        id: "frm-credit-risk",
        title: "Credit Risk",
        content: `# 信用風險

## 基本概念

### 信用風險組成
- **違約機率（PD - Probability of Default）**
- **違約損失率（LGD - Loss Given Default）**
- **違約曝險額（EAD - Exposure at Default）**

預期損失：\`EL = PD × LGD × EAD\`

## 信用評等

### 外部評等
- S&P: AAA, AA, A, BBB, BB, B, CCC, CC, C, D
- Moody's: Aaa, Aa, A, Baa, Ba, B, Caa, Ca, C
- 投資等級 vs 投機等級

### 內部評等
- 信用評分模型
- 違約機率模型
- 轉移矩陣

## 信用風險模型

### 結構模型（Structural Models）
- Merton 模型
- 公司價值 vs 負債門檻
- 隱含違約機率

### 縮減式模型（Reduced Form Models）
- 違約強度（Default Intensity）
- 風險中立違約機率
- Credit Default Swap (CDS) 定價

## 信用風險緩釋
- 擔保品
- 信用衍生商品
- 淨額結算
`,
      },
      {
        id: "frm-operational-risk",
        title: "Operational Risk",
        content: `# 操作風險

## 定義與分類

### Basel 定義
因內部流程、人員、系統不完善或外部事件所導致損失的風險。

### 七大損失事件類型
1. 內部詐欺
2. 外部詐欺
3. 聘僱實務與工作場所安全
4. 客戶、產品與業務慣例
5. 實體資產損害
6. 營運中斷與系統失效
7. 執行、交割與流程管理

## 衡量方法

### 基本指標法（BIA）
- 資本 = 前三年平均營業毛利 × 15%

### 標準法（SA）
- 依業務線分別計算
- 不同業務線適用不同 β 係數

### 進階衡量法（AMA）
- 內部損失資料
- 外部損失資料
- 情境分析
- 營業環境與內控因子

## 操作風險管理

### 風險控制自我評估（RCSA）
### 關鍵風險指標（KRI）
### 損失資料收集
### 營運持續計畫（BCP）
`,
      },
      {
        id: "frm-liquidity-risk",
        title: "Liquidity Risk",
        content: `# 流動性風險

## 流動性風險類型

### 資金流動性風險
- 無法以合理成本取得資金
- 現金流缺口
- 資金來源集中風險

### 市場流動性風險
- 無法以合理價格賣出資產
- 買賣價差擴大
- 市場深度不足

## 流動性指標

### LCR（流動性覆蓋比率）
\`LCR = HQLA / 30天淨現金流出 ≥ 100%\`

### NSFR（淨穩定資金比率）
\`NSFR = 可用穩定資金 / 所需穩定資金 ≥ 100%\`

### 其他指標
- 融資缺口比率
- 核心存款比率
- 流動資產比率

## 流動性壓力測試

### 情境設計
- 機構特定危機
- 市場全面危機
- 組合情境

### 應急資金計畫
- 觸發條件
- 應對措施
- 溝通計畫
`,
      },
    ],
  },
];
