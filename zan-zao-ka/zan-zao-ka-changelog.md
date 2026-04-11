# 讚灶咖 幸福親手作｜工作紀錄
**Slug：** `zan-zao-ka` ｜ **路徑：** `linket.app/zan-zao-ka`
**建立：** 2026.04 ｜ **負責：** Tony Lin / LINKet

---

## 專案狀態
🔍 審核修正中（素材待提供）

---

## 客戶資料

| 項目 | 內容 |
|------|------|
| 品牌名 | 讚灶咖 幸福親手作 |
| 主理人 | 宋靜欣 |
| 英文名 | ⬜ 待確認（來源：貼文水印 Jasmine）|
| 職稱 | ⬜ 待確認（「小廚娘」為 FB 自稱）|
| 手機 | 不公開 |
| 地址 | 不公開 |
| LINE | 無 |
| IG | 無 |
| FB | https://www.facebook.com/share/18U17LoZ9s/ |
| Messenger | 讚灶咖 幸福親手作 |
| GA4 label | `zan-zao-ka` |

---

## 設計規格

| 項目 | 值 |
|------|-----|
| 主色 | `#C97B5A` 暖橘棕 |
| 深色 | `#A85E3E` |
| 淺色 | `#E8A882` |
| 底色 | `#F5EDE3` 奶白米 |
| 圓角 | `20px` |
| 字體 | Noto Serif TC |
| Ticker | ❌（已移除）|
| Watermark | ✅ |
| 社群 Icon | ❌（客戶指定不使用）|

---

## 版本紀錄

### v1.0 — 初版建置
- 完整 LINKet Light 骨架
- 7 區塊：Badge / Hero / Watermark / 品牌故事 / FB追蹤CTA / 烘焙成果佔位 / Footer
- Hero：Logo佔位 + 宋靜欣 + Slogan + 4按鈕（FB追蹤/Messenger/品牌故事/烘焙成果）+ QR+Share
- Gallery：4 格佔位卡片
- GA4 事件：`click_fb_follow` / `click_messenger` / `click_qr_modal`

### v1.1 — Hero 修正
- Hero 左欄改置中對齊（`align-items:center; text-align:center`）
- 英文名隱藏（`display:none`，HTML 保留待確認）
- `#客製杯子蛋糕` tag 移除
- FB 追蹤按鈕 + Footer FB 按鈕：藍色 → 主色 `#C97B5A`

### v1.2 — Ticker 移除
- 移除頂部 Ticker 跑馬燈（保留 Watermark）
- **Bug 發現：** `@keyframes tick` 隨 Ticker CSS 一起消失，Watermark 動畫停止

### v1.3 — 動畫修復
- 補回 `@keyframes tick{0%{translateX(0)} 100%{translateX(-50%)}}`
- Watermark 跑馬燈恢復正常

### v1.4 — FB 貼文嵌入
- Gallery 區塊從佔位卡片改為 4 則 FB iframe 嵌入
- iframe 響應式：單欄排列，`width:100%`，`border-radius:var(--r)`
- 清除舊 `.gallery-card` / `.gallery-ph` / `.gallery-info` CSS

---

## 素材清單

| 檔名 | 路徑 | 規格 | 狀態 |
|------|------|------|------|
| `zan-zao-ka-logo.png` | `/zan-zao-ka/` | 400×400px，PNG 透明底（圓形去背）| ⬜ 待提供 |
| `zan-zao-ka-hero-bg.jpg` | `/zan-zao-ka/` | 1920×1080px，JPG | ⬜ 待提供 |
| `favicon.png` | `/zan-zao-ka/` | 32×32px，PNG | ⬜ 待製作 |
| `og-image.jpg` | `/zan-zao-ka/` | 1200×630px，JPG | ⬜ 建議提供 |

---

## 部署

```
_redirects：
/zan-zao-ka   /zan-zao-ka/index.html   200
```

---

## 待確認

- [ ] 主理人英文名（Jasmine？）
- [ ] 頁面職稱用語
- [ ] 素材全部到位後驗收部署
