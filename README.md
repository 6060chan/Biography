# AI 長者傳記學堂

> 用 AI 為退休人士寫一本人物傳記——從一場訪談，到一本能傳給下一代的書。

這是一套完整的自學課程網站，教你如何引導長者進行口述歷史訪談，並運用 AI 工具把訪談內容整理成**可列印成書的完整傳記**。

全部內容為純靜態 HTML，直接用瀏覽器打開即可學習，不需要安裝任何東西。

---

## 課程地圖

```
訪談 → 逐字稿 → AI 整理 → 章節寫作 → 成書輸出
```

| # | 課程 | 時間 | 你會學到 |
|---|------|------|----------|
| — | [課程總覽](lessons/0000-index.html) | — | 從這裡開始 |
| 一 | [口述歷史訪談的黃金法則](lessons/0001-oral-history-interview-golden-rules.html) | 15 分 | 五法則：具體先於反思、打開領域不問是非、穿破「講熟的段子」、邀請感官細節、收尾權交給長者 |
| 二 | [從錄音到逐字稿](lessons/0002-from-recording-to-transcript.html) | 20 分 | 錄音四個事前動作、轉錄工具比較（含隱私考量）、校對時「保留口語」的理由 |
| 三 | [AI 整理術：叢集、時間線、金句、缺口](lessons/0003-ai-organizing-clusters-timeline.html) | 25 分 | 提示詞三段結構（脈絡＋任務＋禁止），四個可直接複製的模板 |
| 四 | [口吻保持：寫出「像他自己寫的」章節](lessons/0004-voice-capture-chapter-drafting.html) | 25 分 | 口吻的四個零件、五段式章節提示詞、讀出來測試法 |
| 五 | [組稿成書與輸出](lessons/0005-assembling-the-book.html) | 25 分 | 全書結構、一致性檢查、三種輸出形式、出版前倫理 |

**參考文件（建議列印帶著用）**

- [口述歷史問題銀行](reference/001-question-bank.html) — 訪談現場小抄，五階段現成問題＋萬能追問句
- [AI 整理提示詞模板卡](reference/002-ai-organizing-prompt-cards.html) — 貼在螢幕旁的速查卡，逐字稿貼上即用

---

## 怎麼開始

1. 下載或 clone 這個 repo
2. 用瀏覽器打開 `lessons/0000-index.html`
3. 依序上課；每課結尾都有實作題，做完再進下一課

```bash
git clone https://github.com/6060chan/Biography.git
```

> 若直接點開 HTML 檔而沒有樣式，請確認 `assets/` 資料夾與 HTML 檔的相對位置沒有被更動。

---

## 這套課程的核心主張

課程刻意把「訪談」排在第一課，而不是先教 AI 提示詞。理由很簡單：

> **AI 擅長整理與改寫，但沒有好素材就只能編造。訪談品質決定傳記的上限。**

整門課貫穿一句心法：

> **AI 做機械工作，人做判斷；書是長者的，不是你的。**

也因此課程反覆強調三條紅線：

1. **金句必須是逐字稿原句** — 剪接過的話被家人發現「阿公沒這樣說」，整本書的信任感就塌了
2. **不要整本丟給 AI 潤飾** — 那會把全書拉向樣板文風，抹平所有口吻
3. **出版前與長者一起讀定稿** — 他有權刪掉任何內容，而且不需要理由

---

## 專案結構

```
.
├── README.md
├── MISSION.md          學習使命（teach skill 工作區文件）
├── RESOURCES.md        7 個驗證過的高品質資源來源
├── NOTES.md            教學偏好筆記
├── lessons/            課程總覽 + 5 堂課
├── reference/          問題銀行、提示詞模板卡
└── assets/
    ├── style-a.css     全站共用樣式（舊書信·家族檔案風）
    └── nav.js          全站頂部導航（動態生成、自動高亮當前頁）
```

### 技術說明

- **純靜態**：無框架、無建置步驟、無後端
- **樣式可抽換**：各頁只加一行 `<link rel="stylesheet" href="../assets/style-a.css">`，原有結構與內容完全不動；改用別的風格只需替換這一個 CSS 檔
- **導航可移除**：各頁尾端的 `<script src="../assets/nav.js"></script>` 移除即回到無導航狀態
- 字體使用 Noto Serif TC 與 LXGW WenKai TC（由 Google Fonts 載入，離線時會退回系統字體）

---

## 隱私提醒

`.gitignore` 已排除 `audio/`、`recordings/`、`transcripts-private/` 與 `*.mp3`、`*.wav`、`*.m4a`、`*.mp4`。

口述歷史涉及長者個人資料，實際訪談的錄音與逐字稿**請勿提交到版本控制**。若內容敏感（家庭糾紛、財產、醫療），轉錄請使用本地工具（如 Whisper），不要上傳雲端服務。

---

## 內容來源

課程內容引用並改寫自以下公開資源，完整清單與用途說明見 [RESOURCES.md](RESOURCES.md)：

- [StoryCorps](https://storycorps.org/) — 口述歷史訪談技巧與問題庫
- [River Editor](https://rivereditor.com/) — 從訪談逐字稿代寫回憶錄的四階段方法
- [The Writers for Hire](https://www.thewritersforhire.com/) — AI 整理混亂逐字稿的提示詞結構
- [Tapestry](https://bigballi.com/Tapestry/blog/best-questions-for-a-life-story-interview) — 人生故事訪談的問題設計分析

---

## 適合誰

- 想為父母、長輩留下人生故事的人
- 在社區、教會、志工團體協助長者記錄口述歷史的人
- 學過基本 AI 對話，但想把提示詞用在真實專案上的人

不需要程式背景，也不需要付費 AI 服務。
