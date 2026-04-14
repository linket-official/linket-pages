# Women Talk｜工作日誌
**Slug：** `women-talk` ｜ **路徑：** `linket.app/women-talk`
**負責：** Tony Lin / LINKet ｜ **更新：** 2026.04

---

## 客戶資料

| 項目 | 內容 |
|------|------|
| 品牌名 | Women Talk（我們說）|
| 主理人 | 陳宥霖 Rion Chen |
| 職稱 | 頌缽師・身心靈療癒師 |
| LINE | https://line.me/R/ti/p/@527ubpem |
| IG | womentalkwesay（105k）|
| FB | WomentalkWesay |
| Threads | @womentalkwesay |
| 南投場 | 東光小木屋（魚池鄉慶隆巷51-5號）|
| 台中場 | 親家7-UP（西屯區青海南街205號）|
| GA4 label | `women-talk` |

---

## 設計規格

| 項目 | 值 |
|------|-----|
| 主色 | `#1A3325` 深森林綠 |
| 金色 | `#C8A86A` 麥金 |
| 底色 | `#F5EED8` 米白 |
| 圓角 | `6px` |
| 字體 | Libre Baskerville + Noto Serif TC |

---

## 版本紀錄

### v1.3 — 內容深化（2026.04）
- 品牌故事改為 Rion 真實故事弧線（人生低谷 → 頌缽療癒 → 陪伴他人），移除月子中心為主軸的舊版
- 服務區新增第四項：企業・團體音療（對應 B2B 員工紓壓、長照、社區）
- 新增「共鳴觸發區」`#resonate`：三句共鳴語 + 五個標籤 + CTA，GA4 事件 `click_line_resonate`
- B2B 合作區改為雙欄：機構合作（月子/長照/飯店/活動/民宿/社區）+ 個人陪伴，各自獨立 CTA
- meta description 更新反映新定位

### v1.2 — Hero 排版 Bug 修復（2026.04）
- 清除 v1.1 編輯殘留的孤立 CSS 片段（無選擇器的 `flex:1 1 0` block）
- 補回遺失的 `.hero-icons` / `.hero-icon-link` 完整 CSS block
- `.hero-right` 補回 `min-width:0`，移除錯誤的 `gap:0`
- 修復手機版右欄大空白、icon 區跑版問題

### v1.0 — 初版建置
- 完整 LINKet Light 骨架，8 區塊
- Hero：雙場館（南投/台中）展示
- 服務區：個人音療 / 月子音療 / 女性聚會
- B2B 合作洽詢區、交通資訊、Footer

### v1.1 — Hero 與照片修正（2026.04）
**Hero 修正：**
- `top-badge` 改白底標準格式（`#fff` + `box-shadow`）
- 刪除 `hero-subbrand`「我們說・身心靈療癒」
- 姓名合併單行：`陳 宥 霖・Rion Chen`，統一 Noto Serif TC，移除 Playfair italic
- `letter-spacing` 從 `.3em` 調整為 `.18em`（中英文同行不擠）
- slogan 移除 `<br>` 斷句：「缽聲的流動，煩惱就鬆動。」
- 刪除 `#月子中心合作` tag
- `#女性身心靈` → `#身心靈`

**新增：**
- 第二區（`#gallery`）活動照片展示：2×2 格，橫式 4:3 比例
- 圖片路徑：`gallery-1.jpg` ~ `gallery-4.jpg`（`onerror` 佔位）
- hover 微縮放效果（`transform:scale(1.03)`）

---

## 素材清單

| 檔名 | 路徑 | 規格 | 狀態 |
|------|------|------|------|
| `women-talk-logo.png` | `/women-talk/` | 400×400px，PNG 透明底 | ⬜ 待提供 |
| `women-talk-hero-bg.jpg` | `/women-talk/` | 1920×1080px，JPG | ⬜ 待提供 |
| `gallery-1.jpg` | `/women-talk/` | 800×600px（4:3），JPG，橫式 | ⬜ 待提供 |
| `gallery-2.jpg` | `/women-talk/` | 800×600px（4:3），JPG，橫式 | ⬜ 待提供 |
| `gallery-3.jpg` | `/women-talk/` | 800×600px（4:3），JPG，橫式 | ⬜ 待提供 |
| `gallery-4.jpg` | `/women-talk/` | 800×600px（4:3），JPG，橫式 | ⬜ 待提供 |
| `favicon.png` | `/women-talk/` | 32×32px，PNG | ⬜ 待製作 |
| `og-image.jpg` | `/women-talk/` | 1200×630px，JPG | ⬜ 建議提供 |

---

## 部署

```
_redirects：
/women-talk   /women-talk/index.html   200
```

---

## 專案狀態
🖼️ 素材待提供（HTML 架構完整）
