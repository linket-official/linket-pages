# 義昌食品 × 鵝之鄉｜專案工作日誌
**Slug：** `yichang-food` ｜ **路徑：** `linket.app/yichang-food`（正式）/ `linket.app/test/yichang-food`（測試）
**負責：** Tony Lin / LINKet ｜ **更新：** 2026.04

---

## 專案狀態
🖼️ 素材待補（登場頁 v2.8 完成，等待背景圖與 Logo SVG）

---

## 客戶資料

### 義昌食品股份有限公司
| 項目 | 內容 |
|------|------|
| 總經理 | 黃俊賢 |
| 統編 | 28789871 |
| 手機 | 0978-090131 |
| 市話 | 05-6653832 |
| Email | p28789871@gmail.com |
| 地址 | 633 雲林縣土庫鎮新光路36之12號 |
| BNI | 雲榮 Yun Rong 分會 |

### 欣饌食品（鵝之鄉）
| 項目 | 內容 |
|------|------|
| 統編 | 54541904 |
| 地址 | 雲林縣土庫鎮東平里15鄰36-12號2樓 |
| LINE 品牌官方 | https://lin.ee/ncbOGht |
| LINE 主理人 | https://line.me/ti/p/K-P3Kuo3iS |
| 官網 | https://www.sin-jhuan.com.tw/tw |
| Facebook | https://www.facebook.com/profile.php?id=61576815942019 |
| Instagram | https://www.instagram.com/honey.teagoose/ |
| Threads | https://www.threads.com/@honey.teagoose |
| Email | andfeerr092503@gmail.com |
| Maps 鵝之鄉 | https://maps.app.goo.gl/tztAEk2Mt3LpbFHN8 |
| Maps 義昌 | https://maps.app.goo.gl/aTXjxiMZK2evB35y7 |

---

## 設計規格

| 項目 | 值 |
|------|-----|
| 主色（義昌深藍）| `#011627` |
| 淺色（鵝絨米白）| `#fffce8` |
| 金色 | `#C9A84C` |
| 字體中文 | Noto Serif TC |
| 字體歐文 | Cormorant Garamond（大標、斜體裝飾）|
| 圖片比例 | `16/9` 橫式（仿 Bella SPA）|
| 背景系統 | bg-dark / bg-light 深淺交替 |
| 圓角 | `6px` |
| Top Badge | ❌ 移除 |
| Ticker | ❌ 移除 |
| Watermark Divider | ✅ 使用 |
| GA4 label | `yichang-food` |

---

## 三頁架構

| 頁面 | 路徑（測試）| 路徑（正式）| 狀態 |
|------|-----------|-----------|------|
| Page 1 主理人登場頁 | `/test/yichang-food/` | `/yichang-food/` | ✅ v2.5 完成 |
| Page 2 義昌食品詳細 | — | — | ⏸ 暫緩 |
| Page 3 鵝之鄉詳細 | — | — | ⏸ 暫緩 |

---

## 版本紀錄

### Page 1：主理人登場頁（index.html）

| 版本 | 日期 | 內容 |
|------|------|------|
| v2.8 | 05-04 | 修正第三區鵝之鄉 RWD 偏右：移除 brand-intro 雙層 padding；ig-embeds 補 overflow:hidden + 強制覆蓋 IG blockquote inline min-width:0 |
| v2.7 | 04-30 | Tony 手動修正 LINE按鈕icon改為電話聯繫icon|
| v2.5 | 04-22 | 修正 `fadeUp` keyframes `to{opacity:.5}` → `to{opacity:1}`，hero-btn 動畫結束後不透明，按鈕金色顯示正確（根本原因：v2.3 Tony 手動誤改）|
| v2.4 | 04-22 | hero-btn.ghost 修正（對齊 sec-btn.ghost：transparent底+白字+金框）、全區按鈕圓角 100px→10px、手機版直式背景（bg-dark-portrait.jpg / bg-light-portrait.jpg，max-width:600px 切換）|
| v2.3 | 04-22 | **Tony 確認版（最新基準）** CSS：gold 退回 `#C8A870`/`#DDB86A`、bg-dark opacity 改回 `.8 grayscale(.1)`、bg-light opacity `.8 grayscale(.05)`、全區按鈕圓角退回 `100px`（僅 qr-close 維持）、`brand-mid-title` 字大改 `clamp(1.5rem,2.5vw,2rem)` font-weight:700、`body-text` 加 font-weight:500 字縮 .9rem、`hero-name` 放大 `clamp(2rem,4.5vw,2.5rem)`、`hero-name-en` 放大 `2rem`、`fadeUp` to opacity:.5（半透明）、QR box flex+160px logo、sv-card border 加強 `.8`、cert-badge 字大 1.2rem + border `.8`、loc-map iframe 高度 350px、loc-brand/loc-row 字大 1.2rem/1rem、f-logo 加大 250px HTML：移除 `hero-bg-img`、BNI 改 png 200px、義昌排版 LOGO→中文→英文同 div、鵝之鄉品牌名縮小+icons 改 hero-icon-link 樣式移至英文名下、IG embed 移至 sec-cta 之後、地圖 iframe 換新 pb 參數 |
| v2.1 | 04-22 | gold 色修正 `#C8A870` → `#C9A84C`（提升彩度，修正按鈕視覺偏暗）、手機版背景新增直式圖（`bg-dark-portrait.jpg` / `bg-light-portrait.jpg`），`max-width:600px` 自動切換 |
| v2.0 | 04-22 | Tony 手動微調版（基礎確立）|
| v1.9 | 04-22 | 以Tony調整版為基礎：BNI改PNG 200px、bg透明度調0.8、QR logo 160px+置中、義昌排版LOGO→中文→英文置中、鵝之鄉品牌名縮小+icons移至英文名下（hero-icon樣式）、地圖iframe修正 |
| v1.7 | 04-22 | BNI改純SVG img去文字+紅底色塊、icon透明底原色filter:none、hero-left min-width:320px讓hashtag不換行、地圖改bg-light、footer fg按鈕金框金字、design-by白字深藍底 |
| v1.6 | 04-22 | bg圖透明度調高（深.45/淺.35）、icon改透明底42px原色、全區按鈕圓角改8px、portrait去框直接PNG 220px、Logo寬+50px、slogan加margin移除框線、QR logo放大3倍+遮罩透明度0.4、BNI改SVG img、hashtag三個不換行、義昌/鵝之鄉標題排版（LOGO→中文→英文）、stat字大+font-weight:500、cert-badge金底白字、電話按鈕文字修正、地圖iframe更新修正 |
| v1.5 | 04-22 | UI 精修：金色 `#C9A84C`、portrait 放大 200px+glow、名字放大 2.8rem、按鈕寬 340px+letter-spacing+margin 縮、ghost 改白框白字、slogan 去邊框、icon gap 縮、BNI 字大 |
| v1.4 | 04-22 | dual-logo 改 SVG、深色底改 `#011627`、移除 Hero 浮水印文字與角落裝飾框、BNI 徽章改 SVG img 佔位（`bni-badge.svg`）|
| v1.3 | 04-22 | Hero UI 對齊 Canva 稿：portrait 白框圓形、BNI 紅色膠囊、icons 白底圓形+順序 LINE/phone/web/mail/map、web 串鵝之鄉官網、slogan 移右欄加引號、role 改 PRESIDENT｜總經理、右欄加公司資訊小字 |
| v1.2 | 04-22 | 字體修正：全域 Noto Sans TC → **Noto Serif TC**（思源宋體）；確認中文全覆蓋無缺字 |
| v1.1 | 04-21 | **全區修正**：思源黑體、深淺bg-img分開（bg-dark-bg.jpg / bg-light-bg.jpg）、Hero透明度0.7+RWD+無外框主理人+BNI徽章+Logo 300×120+tags+icon改+按鈕4顆重排、義昌區（LOGO/品牌文字/CTA/公司資訊）、鵝之鄉區（LOGO/brand-icons/IG embed/CTA/公司資訊）、第四區刪除、單一地圖廠區、Footer改 |
| v1.0 | 04-21 | 初版建置。Hero 雙品牌合圖 + 主理人照 + 義昌簡介（bg-light）+ 鵝之鄉簡介（bg-dark）+ 品牌跳轉 CTA + 雙地圖 + Footer |

### Page 2：義昌食品（yichang/index.html）
| 版本 | 日期 | 內容 |
|------|------|------|
| — | — | 待建 |

### Page 3：鵝之鄉（goose/index.html）
| 版本 | 日期 | 內容 |
|------|------|------|
| — | — | 待建 |

---

## 素材清單

### 共用素材
| 檔名 | 路徑 | 規格 | 說明 | 狀態 |
|------|------|------|------|------|
| `dual-logo.svg` | `/yichang-food/` | SVG，黑底（mix-blend-mode:screen 去底）| 義昌食品 + 鵝之鄉雙品牌橫式合圖 | ✅ 已提供 |
| `huang-portrait.png` | `/yichang-food/` | 400×533px，黑底（mix-blend-mode:screen 去底）| 黃俊賢主理人照片，圓形裁切顯示 | ✅ 已提供 |
| `bg-dark-bg.jpg` | `/yichang-food/` | 1920×1080px | 深色區段背景，深海軍藍布料紋理（橫式）| ⬜ 待提供 |
| `bg-dark-portrait.jpg` | `/yichang-food/` | 1080×1920px | 深色背景直式版，手機版自動套用 | ✅ 已提供 |
| `bg-light-bg.jpg` | `/yichang-food/` | 1920×1080px | 淺色區段背景，米白絲綢布料紋理（橫式）| ⬜ 待提供 |
| `bg-light-portrait.jpg` | `/yichang-food/` | 1080×1920px | 淺色背景直式版，手機版自動套用 | ✅ 已提供 |
| `og-image.jpg` | `/yichang-food/` | 1200×630px | 社群分享預覽圖 | ⬜ 待製作 |
| `favicon.png` | `/yichang-food/` | 32×32px | 瀏覽器圖示 | ⬜ 待提供 |

### 品牌 Logo（各區使用）
| 檔名 | 路徑 | 規格 | 說明 | 狀態 |
|------|------|------|------|------|
| `yichang-logo.svg` | `/yichang-food/` | SVG，白色透明底 | 義昌食品 Logo，淺色區用 `filter:brightness(0)` 顯深色 | ⬜ 待提供 |
| `goose-logo.svg` | `/yichang-food/` | SVG，白色透明底 | 鵝之鄉 Logo，深色區用白色，淺色區用 `filter:brightness(0)` | ⬜ 待提供 |
| `bni-badge.png` | `/yichang-food/` | PNG | BNI 雲榮分會徽章，Hero 左欄顯示，width:200px | ✅ 已提供 |

### 內容配圖
| 檔名 | 路徑 | 規格 | 說明 | 狀態 |
|------|------|------|------|------|
| `img-yichang-01.jpg` | `/yichang-food/` | 800×450px（16:9）| 義昌食品：生鮮鵝肉產品或電宰場 | ⬜ 待提供 |
| `img-yichang-02.jpg` | `/yichang-food/` | 800×450px（16:9）| 義昌食品：電宰加工流程或設備 | ⬜ 待提供 |
| `img-goose-01.jpg` | `/yichang-food/` | 800×450px（16:9）| 鵝之鄉：產品線（茶鵝、貢丸等）| ⬜ 待提供 |
| `img-goose-02.jpg` | `/yichang-food/` | 800×450px（16:9）| 鵝之鄉：線上商城或包裝照 | ⬜ 待提供 |

---

## 部署

```
_redirects（測試階段，僅一頁）：
/test/yichang-food  /test/yichang-food/index.html  200

_redirects（正式上線後）：
/yichang-food  /yichang-food/index.html  200
```

> Page 2/3 暫緩，待客戶確認後再建置，屆時補充對應路由。

---

## 待辦

- [x] `dual-logo.svg` ✅ 已提供
- [x] `huang-portrait.png` ✅ 已提供
- [x] `bni-badge.svg` ✅ 已提供
- [ ] 提供 `bg-dark-bg.jpg`（深藍布料，1920×1080）
- [ ] 提供 `bg-light-bg.jpg`（米白絲綢，1920×1080）
- [ ] 提供 `yichang-logo.svg`（白色透明底）
- [ ] 提供 `goose-logo.svg`（白色透明底）
- [ ] 提供內容配圖 4 張（img-yichang-01/02、img-goose-01/02）
- [ ] 製作 `og-image.jpg`（1200×630）
- [ ] 提供 `favicon.png`（32×32）
- [ ] 客戶確認登場頁視覺後，路徑從 `/test/yichang-food/` 切換至 `/yichang-food/`
- [ ] Page 2/3 視客戶需求評估是否建置

---

*LINKet by Tony Design Studio · linket.app · 2026.04*
