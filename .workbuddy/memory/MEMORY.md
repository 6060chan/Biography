# MEMORY.md — Biography 專案長期筆記

## 專案位置（重要）

- **正式工作目錄：`D:\github\biography`**（git repo，分支 `main`）
  - 所有編輯、commit、push 都在這裡進行。
- **唯讀備份：`C:\Users\ACER\Desktop\060919 AI agent skills\Case2`**
  - 使用者於 2026-09-21 決定保留此份作為備份，**不要在此目錄編輯**，也不要刪除。
- **遠端：`https://github.com/6060chan/Biography`**（公開 repo，擁有者 6060chan）

## 專案內容

「AI 長者傳記學堂」教學網站——教人用 AI 為退休人士製作人物傳記（口述歷史 → 書面傳記）。

- `lessons/`：0000 總覽 + 0001–0005 共 5 堂課（訪談法則／錄音轉錄／AI 整理術／口吻保持／組稿成書）
- `reference/`：001 問題銀行、002 提示詞模板卡（皆可列印帶去實作）
- `assets/style-a.css`：全站共用樣式，風格為「舊書信·家族檔案」（牛皮紙底 #F5EDDC、硃砂印 #A0392A）
- `assets/nav.js`：全站頂部導航，動態生成，自動高亮當前頁
- `MISSION.md` / `RESOURCES.md` / `NOTES.md`：teach skill 的教學工作區文件

## 設計與技術慣例

- HTML 頁面**不改原有結構**，風格統一由 `assets/style-a.css` 覆寫；各頁僅加一行 `<link>` 與 `<script src="../assets/nav.js">`，可逆。
- 若要換風格 → 只改 `assets/style-a.css`；要移除導航 → 刪各頁的 script 行。
- 風格候選（當時未採用，之後可換）：B 綠野茶室（自然療癒）、C 夜間剪報（典雅典藏）。

## 隱私規範

`.gitignore` 排除 `audio/`、`recordings/`、`transcripts-private/`、`*.mp3/wav/m4a/mp4`。
口述歷史涉及長者個資，實際訪談錄音與逐字稿一律不進版控。

## 環境怪癖

- 本機 Bash 的 coreutils 缺損（`ls`、`head`、`dirname` 皆無），git 子指令可正常跑，避免管接到這些指令。
- git 寫入 `.git/refs/remotes/**` 會靜默失敗 → push 後 `git status -sb` 顯示 `[gone]`。
  解法：用 Write 工具直接寫 `.git/refs/remotes/origin/main`，內容為該次 HEAD 的 SHA + 換行。
