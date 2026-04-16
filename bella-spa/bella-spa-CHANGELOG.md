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
| v4.4 | 04-16 | **INDIBA 兩大療程卡片圖片加回：img-spa-3.jpg（小V臉臉部療程）/ img-spa-4.jpg（身體筋膜療程）** |
| v4.3 | 04-14 | 新客標題改為與 INDIBA 相同呈現（ib-label/ib-title 同款 CSS） |
| v4.1 | 04-14 | **區域重整：Hero 4按鈕、三大服務獨立、INDIBA獨立、新客完整菜單、back-to-top** |

### owner/index.html

| 版本 | 日期 | 內容 |
|------|------|------|
| v1.0 | 04-06 | 初版 |
| v2.0 | 04-07 | 三頁樣式對齊、icon 修正 |
| v3.0 | 04-07 | 重建：套入 v3.1 設計系統 |
| v4.3 | 04-16 | **新增 cert-5（INDIBA防偽證書）、cert-6（KOKO.NI結業）；修正 cert-indiba label** |
| v4.2 | 04-15 | **證書區改橫式比例（4/3）、grid 改單欄** |
| v4.1 | 04-15 | **證書區補正：NHE運動按摩指導師、紋繡技術結業、美胸筋膜放鬆調理認證** |
| v4.0 | 04-14 | **Footer 深色底、按鈕重排（返回/INDIBA/新客/BackTop）、service/ 移除、斜體改正體** |

---

## 素材清單

### 共用素材（`/bella-spa/`）

| 檔名 | 路徑 | 格式 | 尺寸 | 說明 | 狀態 |
|------|------|------|------|------|------|
| `logo-bella.svg` | `/bella-spa/logo-bella.svg` | SVG | 不限（向量） | 品牌 Logo，白底或透明底，三頁共用 | ⬜ 待提供 |
| `favicon.png` | `/bella-spa/favicon.png` | PNG | 512×512px | 瀏覽器分頁圖示 | ⬜ 待提供 |
| `hero-bg.jpg` | `/bella-spa/hero-bg.jpg` | JPG | 1920×1080px | 全站背景圖（index/owner 共用），主視覺空間情境照 | ⬜ 待提供 |
| `og-image.jpg` | `/bella-spa/og-image.jpg` | JPG | 1200×630px | 三頁共用社群分享預覽圖 | ⬜ 待製作 |

## 素材清單

### 共用素材（`/bella-spa/`）

| 檔名 | 路徑 | 格式 | 尺寸 | 說明 | 狀態 |
|------|------|------|------|------|------|
| `logo-bella.svg` | `/bella-spa/logo-bella.svg` | SVG | 不限（向量） | 品牌 Logo，白底或透明底，三頁共用 | ⬜ 待提供 |
| `favicon.png` | `/bella-spa/favicon.png` | PNG | 512×512px | 瀏覽器分頁圖示 | ⬜ 待提供 |
| `hero-bg.jpg` | `/bella-spa/hero-bg.jpg` | JPG | 1920×1080px | 全站背景圖（index/owner 共用），主視覺空間情境照 | 🔄 圖庫暫代 |
| `og-image.jpg` | `/bella-spa/og-image.jpg` | JPG | 1200×630px | 三頁共用社群分享預覽圖 | ⬜ 待製作 |

### 主頁圖片（`/bella-spa/`）

| 檔名 | 路徑 | 格式 | 尺寸 | 說明 | 狀態 |
|------|------|------|------|------|------|
| `img-indiba.jpg` | `/bella-spa/img-indiba.jpg` | JPG | 800×450px（16:9） | INDIBA 英特波療程現場，三大服務卡片 + INDIBA 區使用 | 🔄 圖庫暫代 |
| `img-spa-1.jpg` | `/bella-spa/img-spa-1.jpg` | JPG | 800×450px（16:9） | 全身筋膜芳療現場，三大服務卡片 + INDIBA 區卡片02 使用 | 🔄 圖庫暫代 |
| `img-spa-2.jpg` | `/bella-spa/img-spa-2.jpg` | JPG | 800×450px（16:9） | 韓式皮膚管理／臉部護理現場，三大服務卡片使用 | 🔄 圖庫暫代 |
| `img-spa-3.jpg` | `/bella-spa/img-spa-3.jpg` | JPG | 800×450px（16:9） | INDIBA 臉部療程（小V臉緊緻），ib-card 01 使用 | ✅ 已提供 |
| `img-spa-4.jpg` | `/bella-spa/img-spa-4.jpg` | JPG | 800×450px（16:9） | INDIBA 身體筋膜療程（內臟筋膜鬆動），ib-card 02 使用 | ✅ 已提供 |
| `img-spa-3.jpg` | `/bella-spa/img-spa-3.jpg` | JPG | 800×450px（16:9） | 臉部 INDIBA 電波療程特寫（小V臉卡片用）| ✅ 客戶提供 |
| `img-spa-4.jpg` | `/bella-spa/img-spa-4.jpg` | JPG | 800×450px（16:9） | 身體 INDIBA 筋膜療程（內臟筋膜鬆動卡片用）| ✅ 客戶提供 |

---

## 圖庫素材搜尋指南

> 客戶真實素材到位後直接覆蓋同檔名，HTML 不需修改。

### Canva 搜尋關鍵字

| 檔名 | Canva 搜尋關鍵字 | 選圖方向 |
|------|-----------------|---------|
| `hero-bg.jpg` | `luxury spa interior warm light elegant` | 米白/暖粉空間，光線柔和，有質感床或石材 |
| `img-indiba.jpg` | `beauty treatment facial technology device` | 專業儀器輕觸臉部或頸部，白色診療環境 |
| `img-spa-1.jpg` | `body massage relaxation spa warm oil` | 全身精油按摩，暖色燈光，療癒氛圍 |
| `img-spa-2.jpg` | `facial skincare treatment professional woman` | 臉部護理特寫，乾淨白色環境，韓系質感 |

### AI 生成圖片腳本（Canva AI / Midjourney）

**`hero-bg.jpg` — 全站背景**
```
A luxurious spa interior, soft warm lighting, cream and rose-toned walls, 
minimalist aesthetic, elegant treatment bed with white linen, 
subtle floral elements, high-end women's wellness space, 
photorealistic, wide angle, 16:9
```

**`img-indiba.jpg` — INDIBA 英特波療程**
```
Professional aesthetician performing a high-tech facial treatment 
using a medical beauty device, clean white clinic environment, 
soft lighting, close-up on face and device, luxury spa setting, 
photorealistic, 16:9
```

**`img-spa-1.jpg` — 全身筋膜芳療**
```
Relaxing full body massage treatment, warm oil, dim amber lighting, 
spa environment with white towels and minimal decor, 
woman receiving professional body therapy, peaceful atmosphere, 
photorealistic, 16:9
```

**`img-spa-2.jpg` — 韓式皮膚管理**
```
Korean-style facial skincare treatment, clean bright white environment, 
close-up of woman receiving professional skin management, 
hydrating mask or facial device, high-end spa aesthetic, 
photorealistic, 16:9
```

### 主理人頁圖片（`/bella-spa/`，owner 頁以 `../` 引用）

| 檔名 | 路徑 | 格式 | 尺寸 | 說明 | 狀態 |
|------|------|------|------|------|------|
| `owner-portrait.jpg` | `/bella-spa/owner-portrait.jpg` | JPG | 600×800px（3:4） | 主理人 Summer 半身人像，Hero 區大圖 | ⬜ 待提供 |
| `cert-indiba.jpg` | `/bella-spa/cert-indiba.jpg` | JPG | 800×600px（4:3） | INDIBA® Activ Initial Training（Sports）培訓認證，2025/07/23 | ⬜ 待提供 |
| `cert-2.jpg` | `/bella-spa/cert-2.jpg` | JPG | 800×600px（4:3） | NHE 運動按摩指導師認證（National Health Exercise，2023） | ⬜ 待提供 |
| `cert-3.jpg` | `/bella-spa/cert-3.jpg` | JPG | 800×600px（4:3） | 紋身繡眉技術結業證書（Happy Moment Wedding Consultants） | ⬜ 待提供 |
| `cert-4.jpg` | `/bella-spa/cert-4.jpg` | JPG | 800×600px（4:3） | 美胸筋膜放鬆調理認證（公主殿下 × 台灣筋膜保健交流協會，2025.05） | ⬜ 待提供 |
| `cert-5.jpg` | `/bella-spa/cert-5.jpg` | JPG | 800×600px（4:3） | INDIBA® 原廠正貨防偽證書，序號 ASTER 21U780603 | ⬜ 待提供 |
| `cert-6.jpg` | `/bella-spa/cert-6.jpg` | JPG | 800×600px（4:3） | KOKO.NI 美容技術結業證書（2026/03/23） | ⬜ 待提供 |

### 共用 SVG Icons（`/assets/`，已存在）

| 檔名 | 狀態 |
|------|------|
| `/assets/line.svg` | ✅ |
| `/assets/phone.svg` | ✅ |
| `/assets/map.svg` | ✅ |
| `/assets/instagram.svg` | ✅ |
| `/assets/facebook.svg` | ✅ |
| `/assets/threads.svg` | ✅ |

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
