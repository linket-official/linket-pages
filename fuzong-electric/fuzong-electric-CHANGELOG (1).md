# 富宗電機行 · 工作版本紀錄
**Slug：** `fuzong-electric` → `linket.app/fuzong-electric`
**負責設計：** LINKet by Tony Design Studio
**GA4：** `G-29J2988Y8J`（全站共用）
**狀態：** 🖼️ HTML 完成，素材待補
**最後更新：** 2026-04-08

---

## 版本紀錄

### v1.1 · 2026-04-08
- 內文最小字體調整為 1rem（≥16px），考量客群年齡層
- 標題字按比例放大（sec-title 1.6rem / svc-title 1.1rem / expl-title 1.05rem）
- Hero：移除 Logo 圖片區塊、移除「電機設備・買賣維修」subtitle
- Hero：slogan `<br>` 改為逗號連接，不換行
- Footer 按鈕移入 location 區塊，移除獨立 footer-btns div

### v1.0 · 2026-04-08（初版）
- 依客戶名片與規格書建置完整頁面
- 設計風格：米白紙質 `#F5F0E8` + 墨黑 `#1C1C1A` + 鐵鏽棕 `#8B5E3C`
- 字體：ZCOOL XiaoWei（毛筆）+ Noto Serif TC + Cormorant Garamond
- 區塊：Hero → Watermark Ticker → 服務四宮格 → Explore 深色底 → 位置地圖 + CTA
- 所有按鈕直接為 `hero-right` 子元素（nth-child 動畫正確）
- Icon 透明底無 filter，`brightness(10)` 深色背景反白顯示

---

## 素材清單

### 待提供

| 檔名 | 路徑 | 尺寸 | 格式 | 說明 |
|------|------|------|------|------|
| `fuzong-electric-hero-bg.jpg` | `fuzong-electric/` | 1920×1080 | JPG | Hero 背景圖（工廠現場、設備、門市照） |
| `fuzong-electric-logo.png` | `fuzong-electric/` | 400×400 透明底 | PNG | 手繪馬達插圖 + 毛筆字 Logo（比照名片） |
| `favicon.png` | `fuzong-electric/` | 32×32 | PNG | 瀏覽器分頁圖示 |
| `og-image.jpg` | `fuzong-electric/` | 1200×630 | JPG | 社群分享預覽圖 |

> **Logo 備注：** 若客戶無數位版本，由 LINKet 依名片重新製作 SVG（手繪馬達插圖向量化）

### 已確認（全站共用，已存在）

| 路徑 | 說明 |
|------|------|
| `/assets/line.svg` | LINE |
| `/assets/phone.svg` | 電話 |
| `/assets/map.svg` | 地圖 |

---

## 客戶聯絡資訊

| 項目 | 內容 |
|------|------|
| 聯絡人 | 丁仁盛 |
| 手機 | 0972-367-336 |
| 市話 | 049-299-3577 |
| LINE | @896vullv |
| 地址 | 545 南投縣埔里鎮中華路222號 |
| 營業 | 週一～週六 09:00–18:00 / 週日休息 |

---

## 部署待辦

- [ ] 提供素材（hero-bg / logo / favicon / og-image）
- [ ] 加入 `_redirects`：`/fuzong-electric  /fuzong-electric/index.html  200`
- [ ] 部署至 GitHub `linket-official/linket-pages`
- [ ] 實機測試（iOS Safari + Android Chrome）

---

*LINKet by Tony Design Studio · linket.app · 2026.04*
