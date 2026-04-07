# BELLA SPA · 版本紀錄
**專案路徑：** `linket.app/bella-spa`
**負責設計：** LINKet by Tony Design Studio
**GA4：** `G-29J2988Y8J`（全站共用）
**最後更新：** 2026-04-07

---

## 頁面清單

| 檔案 | 路徑 | 目前版本 |
|------|------|---------|
| `index.html` | `/bella-spa/` | v4.0 |
| `service/index.html` | `/bella-spa/service/` | v4.0 |
| `owner/index.html` | `/bella-spa/owner/` | v4.0 |

---

## index.html 版本紀錄

### v4.0 · 2026-04-07
- 品牌色彩度提升：`#8B3946` → `#B65060`，`dark2` → `#C96070`，全站 rgba 同步
- Hero 進場動畫：`fadeUp` 0.5s，元素依序 delay a1（Logo）→ a7（QR/Share 列）
- Logo 容器寬度固定 160px
- 背景圖 opacity 調整為 `.3`（業主設定，保持不動）
- 頁尾刪除 BELLA SPA 文字（`f-title` div 移除）
- 「服務項目介紹」按鈕連結 `#services` → `service/`（直連服務頁）
- **除錯**：修正 CSS 誤插入 `<script>` 導致 JS SyntaxError
- **除錯**：修正 IntersectionObserver JS 被清空，`reveal` 元素全部 opacity:0

### v3.1 · 2026-04-07
- 英文大字字體換回 Playfair Display（wm-main / f-title / sv-num / nc-item-price）

### v3.0 · 2026-04-07
- 全頁視覺重構：字體統一 Source Han Serif TC、交錯背景圖設計系統、深淺色雙主題按鈕
- CSS token 重建：`--light / --dark / --dark2 / --white`
- 背景圖 `::before` 系統：7 個區塊交替 bg-light / bg-dark

### v2.5 · 2026-04-07
- 第二區正文加 `.ph-text-wrap` div 限寬(480px)置中對齊

### v2.4 · 2026-04-07
- 第二區引言字體改 `Noto Serif TC weight:300`（明體）
- 第二區正文改兩端對齊末行左齊

### v2.3 · 2026-04-07
- Hero HTML 重整：左欄品牌資訊、右欄 icons＋按鈕

### v2.2 · 2026-04-07
- Hero RWD 重構、移除桌機三欄壓縮、主理人小區塊移除

### v2.1 · 2026-04-07
- 全站按鈕圓角 100px、地圖 embed 更新、刪除 beautinq 連結

### v2.0 · 2026-04-06
- 全頁重寫：移除菜單Tab，改情境卡片架構

### v1.0 · 2026-04-04（Gemini 初版）
- 已知問題：路徑錯誤、icon filter 禁用組合、電話誤用私人號碼

---

## service/index.html 版本紀錄

### v4.0 · 2026-04-07
- 品牌色彩度提升：`#8B3946` → `#B65060`（全域）
- Hero 進場動畫（page-hero 元素）
- Logo 容器寬度 170px
- 頁尾刪除 BELLA SPA 文字
- 新客體驗菜單全面重構：`exp-col-wrap` 深色卡片底、標題大字置中、items 表格樣式、gift 深底條
- `#spa` 全身SPA 區塊改為 `bg-dark`（交替邏輯修正）
- `sec-title` 深色底大字置中、`eyebrow` 置中、`rose-line` 深色底反白
- 中文元素移除英文字體（oh-name → Source Han Serif TC）
- exp-header 標題靠左（比照 indiba 區塊）
- og:image 統一為 `/bella-spa/og-image.jpg`，補上 apple-touch-icon
- **除錯**：修正 CSS 誤插入 `<script>` 導致 JS SyntaxError

### v3.0 · 2026-04-07
- 從 v2 重建：套入 index v3.1 完整設計系統
- 交錯背景：indiba(dark) → experience(light) → packages(dark) → spa(light) → face(dark)

### v2.1 · 2026-04-07
- 按鈕圓角 100px、f-title 字體統一、Logo SVG 加入 page-hero

### v2.0 · 2026-04-07
- INDIBA-hero 深玫瑰紅底、emoji 移除改序號、刪除 beautinq、堂數價格修正

### v1.0 · 2026-04-06（初版）
- §1 INDIBA / §2 體驗價 / §3 堂數 / §4 全身SPA / §5 臉部SPA

---

## owner/index.html 版本紀錄

### v4.0 · 2026-04-07
- 品牌色彩度提升：`#8B3946` → `#B65060`（全域）
- Hero 進場動畫（oh-name / oh-role / owner-icons 依序）
- Logo 容器寬度 170px
- 頁尾刪除 BELLA SPA 文字
- og:image 統一為 `/bella-spa/og-image.jpg`
- **除錯**：確認 IntersectionObserver JS 正常

### v3.0 · 2026-04-07
- 從 v2 重建：套入 index v3.1 完整設計系統
- 交錯背景：owner-hero(light) → about(dark) → certs(light)
- 中文元素移除英文字體、icon 深色底反白

### v2.0 · 2026-04-07
- 三頁樣式對齊、Logo SVG 加入、名字格式 `Summer｜鄭香苓`、Icon 透明底無邊框 36px

### v1.0 · 2026-04-06（初版）
- §1 主理人登場 / §2 品牌理念 / §3 技術認證 Grid

---

## 設計系統規格（v4.0）

### CSS Token
```css
--light: #F8F3F2   /* 淺色底 */
--dark:  #B65060   /* 深色底（v4.0 彩度提升） */
--dark2: #C96070   /* hover */
--white: #FFFFFF
```

### 字體
- 中文：`Source Han Serif TC`, `Noto Serif TC`（fallback），weight: 500
- 英文大字：`Playfair Display` italic

### 背景圖系統
```css
.bg-light::before { opacity:.3; filter:grayscale(.2) brightness(1); }
.bg-dark::before  { opacity:.3; filter:grayscale(.3) brightness(.5); }
```
- index 背景圖：`hero-bg.jpg`
- service / owner 背景圖：`../hero-bg.jpg`

### 按鈕規則
| 底色 | 重點按鈕 | 一般按鈕 |
|------|---------|---------|
| 淺色底 | 填滿 `#B65060` + 白字 | 外框 `#B65060` |
| 深色底 | 填滿白色 + `#B65060` 字 | 外框白色 + 白字 |

---

## 已知 Debug 規則

| Bug | 原因 | 解法 |
|-----|------|------|
| CSS 誤插入 `<script>` | `/* Reveal */` 也出現在 script 內 | 改用 `</style>` 作 CSS 插入點 |
| 舊 CSS 覆蓋新規則 | 同 class 多次定義 | 先 `re.sub` 清除舊定義再插入 |
| JS 被清空 | regex `re.DOTALL` 貪婪匹配清掉整個 script | 修改後必須驗收 script 長度 |
| 內容被背景圖蓋住 | `z-index:1` 規則消失 | 確保 `.bg-light > *, .bg-dark > *` 規則在 `<style>` 內 |

---

## 素材清單

### 共用素材（`/bella-spa/`）

| 檔名 | 尺寸 | 說明 | 使用頁面 | 狀態 |
|------|------|------|---------|------|
| `logo-bella.svg` | 不限 | 品牌 Logo，SVG 透明底 | 全三頁 | ⬜ 待提供 |
| `favicon.png` | 512×512 | 瀏覽器分頁圖示 | 全三頁 | ⬜ 待提供 |
| `hero-bg.jpg` | min 1440×900 | 全站背景圖 | 全三頁 | ⬜ 待提供 |
| `og-image.jpg` | 1200×630 | 社群分享預覽圖（三頁共用） | 全三頁 | ⬜ 待製作 |

### 登場頁圖片

| 檔名 | 尺寸 | 說明 | 狀態 |
|------|------|------|------|
| `img-indiba.jpg` | 16:9 | INDIBA 療程現場照 | ⬜ 待提供 |
| `img-spa-1.jpg` | 16:9 | 全身SPA 現場照 | ⬜ 待提供 |
| `img-spa-2.jpg` | 16:9 | 臉部護理現場照 | ⬜ 待提供 |

### 主理人頁圖片

| 檔名 | 尺寸 | 說明 | 狀態 |
|------|------|------|------|
| `owner-portrait.jpg` | 3:4（600×800） | 主理人 Summer 人像照 | ⬜ 待提供 |
| `cert-indiba.jpg` | 3:4 | INDIBA 英特波認證證書 | ⬜ 待提供 |
| `cert-2.jpg` | 3:4 | 技術認證2（名稱待確認） | ⬜ 待提供 |
| `cert-3.jpg` | 3:4 | 技術認證3（名稱待確認） | ⬜ 待提供 |
| `cert-4.jpg` | 3:4 | 技術認證4（名稱待確認） | ⬜ 待提供 |

### 共用 SVG Icons（`/assets/`）

| 檔名 | 狀態 |
|------|------|
| `/assets/line.svg` | ✅ 已存在 |
| `/assets/phone.svg` | ✅ 已存在 |
| `/assets/map.svg` | ✅ 已存在 |
| `/assets/instagram.svg` | ✅ 已存在 |
| `/assets/facebook.svg` | ✅ 已存在 |
| `/assets/threads.svg` | ✅ 已存在 |

---

## 部署規格

### _redirects
```
/bella-spa              /bella-spa/index.html              200
/bella-spa/service      /bella-spa/service/index.html      200
/bella-spa/owner        /bella-spa/owner/index.html        200
```

### 資料夾結構
```
bella-spa/
├── index.html
├── favicon.png
├── logo-bella.svg
├── hero-bg.jpg
├── og-image.jpg          ← v4.0 起三頁共用
├── img-indiba.jpg
├── img-spa-1.jpg
├── img-spa-2.jpg
├── owner-portrait.jpg
├── cert-indiba.jpg
├── cert-2.jpg
├── cert-3.jpg
├── cert-4.jpg
├── service/
│   └── index.html
└── owner/
    └── index.html
```

---

## GA4 事件清單

| 事件 | 觸發位置 |
|------|---------|
| `click_line_consult` | LINE 諮詢（全三頁） |
| `click_reserve` | 新客體驗傳送門 |
| `click_map` | 地圖導航 |
| `click_tel` | 電話 |
| `click_ig_follow` | Instagram |
| `click_facebook` | Facebook |
| `click_service` | 查看服務頁 |

*所有事件 `event_label` 統一為 `bella-spa`*

---

*LINKet by Tony Design Studio · linket.app · 2026.04*
