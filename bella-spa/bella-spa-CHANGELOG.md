# 貝拉美學 SPA｜專案工作日誌
**Slug：** `bella-spa` ｜ **路徑：** `linket.app/bella-spa`
**負責：** Tony Lin / LINKet ｜ **更新：** 2026.04

---

## 專案狀態
🔍 審核修正中（素材待提供）

---

## 客戶資料

| 項目 | 內容 |
|------|------|
| 品牌名 | 貝拉美學 SPA（Bella Women）|
| 主理人 | 鄭香苓 Summer |
| 電話 | 03-558-8711 |
| LINE | https://lin.ee/iCAHFna |
| IG | bellawomen_beauty_spa |
| FB | profile.php?id=61555642114837 |
| 地址 | 新竹竹北（詳細地址待補）|
| Maps | https://maps.app.goo.gl/s7973fKMCFJaWfh89 |
| GA4 label | `bella-spa` |

---

## 設計規格

| 項目 | 值 |
|------|-----|
| 主色 | `#B65060` 玫瑰紅 |
| 深色 | `#1a1012` |
| 淺色 | `#F8F3F2` |
| 圓角 | `100px`（pill）|
| 字體 | Source Han Serif TC + Playfair Display |
| Top Badge | 已移除（service/ 廢除）|

---

## 頁面架構

### bella-spa/index.html（主頁）

| # | 區塊 | ID |
|---|------|-----|
| 1 | Hero | `#top` |
| 2 | 品牌哲學 | `#about` |
| 3 | 三大核心服務 | `#services` |
| 4 | INDIBA 英特波生活美學 | `#indiba` |
| 5 | 新客體驗完整菜單 | `#newclient` |
| 6 | 交通資訊 | `#location` |
| 7 | Footer（含 back-to-top）| — |

**Hero 4 按鈕：**
1. 預約諮詢｜LINE（P1）
2. 新客體驗傳送門 → `#newclient`（P1）
3. 英特波生活美學｜INDIBA → `#indiba`（Ghost）
4. 關於主理人 → `owner/`（Ghost）

**INDIBA 區兩大療程：**
- 小顏 V 臉緊緻 $3,999 / 75分
- 筋膜重塑 × 內臟筋膜鬆動

**新客菜單：**
- 全身舒壓 SPA 8項（贈岩盤浴）
- 美顏舒活 SPA 6項（贈動力光浴）
- 按鈕：只留加官方LINE諮詢

### bella-spa/owner/index.html（主理人頁）

| # | 區塊 |
|---|------|
| 1 | 主理人登場 Hero |
| 2 | 品牌理念 |
| 3 | 技術認證 |
| 4 | Footer（深色底）|

**Owner Footer 按鈕：**
1. 返回貝拉美學 → `/bella-spa/`
2. 英特波生活美學｜INDIBA → `/bella-spa/#indiba`
3. 新客體驗傳送門 → `/bella-spa/#newclient`
4. Back to Top

---

## 版本紀錄

### index.html

| 版本 | 日期 | 內容 |
|------|------|------|
| v1.0 | 04-04 | 初版上線（Gemini 產出）|
| v2.0 | 04-06 | 全頁重寫：移除菜單Tab，改情境卡片架構，加主理人區塊 |
| v2.1 | 04-07 | RWD 修正、按鈕圓角 100%、地圖更新 |
| v2.2 | 04-07 | Hero RWD 重構、移除三欄壓縮 |
| v2.3 | 04-07 | Hero 左資訊右按鈕結構、Logo 佔位 |
| v2.4 | 04-07 | 第二區字體修正 |
| v2.5 | 04-07 | ph-text-wrap 限寬置中 |
| v3.0 | 04-07 | 全頁視覺重構：Source Han Serif TC、交錯背景設計 |
| v3.1 | 04-07 | 英文大字改回 Playfair Display |
| v4.0 | 04-14 | service/ 廢除（6處連結移除）、斜體→正體、Icon陰影、手機背景修正 |
| v4.2 | 04-14 | INDIBA 標題含體驗價；卡片移除 price-row；nc-item 殘留刪除；nc-ctas 限寬；Icon shadow 縮小 |
| v4.3 | 04-14 | 新客標題改為與 INDIBA 相同呈現（ib-label/ib-title 同款 CSS） |
| v4.1 | 04-14 | **區域重整：Hero 4按鈕、三大服務獨立、INDIBA獨立、新客完整菜單、back-to-top** |

### owner/index.html

| 版本 | 日期 | 內容 |
|------|------|------|
| v1.0 | 04-06 | 初版 |
| v2.0 | 04-07 | 三頁樣式對齊、icon 修正 |
| v3.0 | 04-07 | 重建：套入 v3.1 設計系統 |
| v4.0 | 04-14 | **Footer 深色底、按鈕重排（返回/INDIBA/新客/BackTop）、service/ 移除** |

---

## 素材清單

| 檔名 | 路徑 | 規格 | 狀態 |
|------|------|------|------|
| `logo-bella.svg` | `/bella-spa/` | SVG | ⬜ 待提供 |
| `hero-bg.jpg` | `/bella-spa/` | 1920×1080px JPG | ⬜ 待提供 |
| `img-indiba.jpg` | `/bella-spa/` | 800×450px JPG | ⬜ 待提供 |
| `img-spa-1.jpg` | `/bella-spa/` | 800×450px JPG | ⬜ 待提供 |
| `img-spa-2.jpg` | `/bella-spa/` | 800×450px JPG | ⬜ 待提供 |
| `favicon.png` | `/bella-spa/` | 32×32px PNG | ⬜ 待提供 |
| `og-image.jpg` | `/bella-spa/` | 1200×630px JPG | ⬜ 待提供 |
| `logo-bella.svg` | `/bella-spa/owner/` | SVG（同上）| ⬜ 待提供 |

---

## 部署

```
_redirects：
/bella-spa         /bella-spa/index.html          200
/bella-spa/owner   /bella-spa/owner/index.html    200
```

> ⚠️ service/ 已廢除，不需加入 _redirects

---

## GA4 事件清單

| 事件 | 觸發 |
|------|------|
| `click_line_consult` | LINE 諮詢 / 預約 |
| `click_newclient` | 新客體驗傳送門按鈕 |
| `click_tel` | 電話 icon |
| `click_ig_follow` | IG icon |
| `click_facebook` | FB icon |
| `click_map` | 地圖 icon |
| `click_qr_modal` | QR Code |
| `click_reserve` | 預約按鈕（舊）|

---

## 待辦

- [ ] 素材全部到位後部署驗收
- [ ] 確認 INDIBA 療程價格是否需更新
- [ ] owner 頁主理人認證項目是否補充
