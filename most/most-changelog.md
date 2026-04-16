# MOST 膜仕 版本更新紀錄

**專案路徑：** `linket.app/most/`
**GA4：** `G-29J2988Y8J`
**LINE：** `https://lin.ee/B2awlv2`

---

## 版本紀錄

### v2.4 — 2026-04-16

#### 共同（四頁）
- 圖庫素材加回：`onerror` 改靜默（圖不存在時不顯示佔位文字，避免圖庫圖顯示錯誤訊息）

#### 主頁
- `brand-img` 三張加回（`factory-exterior` / `factory-interior` / `img-placeholder-3`），比例 `16/10`
- `prod-img-box` 三張加回（`img-color-film` / `img-ppf` / `img-color-ppf`），比例 `9/16`

#### 三產品頁
- `gallery-grid` 四張加回（各頁 gallery 1~4），比例 `4/3`

---

## Canva 圖庫素材搜尋清單

> 以下為暫用圖庫素材，供 Canva 搜尋使用。客戶真實素材到位後直接覆蓋同檔名。

### 主頁 `most/`

| 檔名 | 尺寸 | Canva 搜尋關鍵字 |
|------|------|-----------------|
| `factory-exterior.jpg` | 800×500px（16:10）| `car wrap factory exterior industrial` |
| `factory-interior.jpg` | 800×500px（16:10）| `car detailing workshop professional technician` |
| `img-placeholder-3.jpg` | 800×500px（16:10）| `TPU film material luxury car protection` |
| `img-color-film.jpg` | 800×1000px（4:5直式）| `car color wrap film matte dark luxury` |
| `img-ppf.jpg` | 800×1000px（4:5直式）| `paint protection film transparent water drop car` |
| `img-color-ppf.jpg` | 800×1000px（4:5直式）| `color PPF car wrap iridescent metallic` |

### 改色膜 `most/color-film/`

| 檔名 | 尺寸 | Canva 搜尋關鍵字 |
|------|------|-----------------|
| `img-color-gallery-1.jpg` | 800×600px（4:3）| `car wrap edge trim detail close up` |
| `img-color-gallery-2.jpg` | 800×600px（4:3）| `matte car wrap dark grey luxury vehicle` |
| `img-color-gallery-3.jpg` | 800×600px（4:3）| `glossy metallic car wrap reflection` |
| `img-color-gallery-4.jpg` | 800×600px（4:3）| `full car wrap complete color change luxury` |

### 犀牛皮 PPF `most/ppf/`

| 檔名 | 尺寸 | Canva 搜尋關鍵字 |
|------|------|-----------------|
| `img-ppf-gallery-1.jpg` | 800×600px（4:3）| `PPF installation squeegee car paint` |
| `img-ppf-gallery-2.jpg` | 800×600px（4:3）| `paint protection film self healing scratch` |
| `img-ppf-gallery-3.jpg` | 800×600px（4:3）| `PPF transparent clear coat water bead lotus effect` |
| `img-ppf-gallery-4.jpg` | 800×600px（4:3）| `car PPF complete full wrap gloss finish` |

### 改色犀牛皮 `most/color-ppf/`

| 檔名 | 尺寸 | Canva 搜尋關鍵字 |
|------|------|-----------------|
| `img-color-ppf-gallery-1.jpg` | 800×600px（4:3）| `color PPF installation detail work` |
| `img-color-ppf-gallery-2.jpg` | 800×600px（4:3）| `TPU color film thickness cross section` |
| `img-color-ppf-gallery-3.jpg` | 800×600px（4:3）| `chameleon color shift car wrap iridescent` |
| `img-color-ppf-gallery-4.jpg` | 800×600px（4:3）| `premium color PPF full car high end` |

---

### v2.3 — 2026-04-15

#### 主頁 `most/index.html`
- 第二區 `brand-grid` / `brand-card` 改單欄純文字排版（`flex-direction:column`，`max-width:680px`），移除舊兩欄媒體查詢
- `prod-num` 移除 `position:absolute`，改置於 `prod-info` 內，修正號碼被產品名稱壓住問題

#### 三產品頁
- `⑥ Showcase 施工實績與影音` 整個 `<section id="gallery">` 移除
- HTML 注釋保留：待素材到位後加回，規格 `800×600px 4:3橫式`

### v2.2 — 2026-04-15

**修改範圍：** 主頁 + 三個產品頁（共四頁）

#### 共同
- `gallery-img` 比例 `9/16` → `4/3`（橫式，對應素材清單規格）
- 所有指定圖片區塊移除，改為 HTML 注釋佔位

#### 主頁
- 品牌故事三張圖 `brand-img` div 移除（`factory-exterior` / `factory-interior` / `img-placeholder-3`）
- 產品入口三張圖 `prod-img-box` div 移除（`img-color-film` / `img-ppf` / `img-color-ppf`）

#### 三產品頁
- `gallery-grid` 整個區塊移除（各 4 張施工實績圖）
- HTML 注釋保留：檔名 + `800×600px 4:3 橫式`

---

### v2.1 — 2026-04-12

**修改範圍：** 主頁 + 三個產品頁（共四頁）

#### 主頁 `most/index.html`
- `brand-img` 圖片比例 `16/10` → `9/16`（直式）
- `prod-img-box` 圖片比例 `4/5` → `9/16`（直式）
- 品牌特色卡片「自我修復」字眼移除，改為「抗黃變、防石擊、高透光」

#### 犀牛皮 PPF `most/ppf/index.html`
- `gallery-img` 比例 `4/3` → `9/16`（直式）
- YT 影片佔位區塊移除
- 年限 `7-10年` → `5-10年`
- feat 標題「自我修復 遇熱還原」→「表面復原 需足夠熱源」
- feat 內文改為「需專業評估」說法
- Properties「遇熱自我修復」→「需熱源輔助之表面復原特性」
- meta / og:description / hero desc 全面去除「自我修復」字眼

#### 改色膜 `most/color-film/index.html`
- `gallery-img` 比例 `4/3` → `9/16`（直式）
- YT 影片佔位區塊移除
- 年限 `2-5年` → `約2年`

#### 改色犀牛皮 `most/color-ppf/index.html`
- `gallery-img` 比例 `4/3` → `9/16`（直式）
- YT 影片佔位區塊移除
- feat 標題「頂級 TPU 自我修復」→「TPU 表面復原特性」
- feat 內文改為「需專業評估」說法
- Properties / og:description / hero desc 全面去除「自我修復」字眼

---

### v2.0 — 初版上線（日期待補）

- 四頁架構建立：主頁 + 改色膜 + 犀牛皮 + 改色犀牛皮
- GA4 事件埋點完成（`event_label: 'most'`）
- LINE 連結更新至 `lin.ee/B2awlv2`
- 合作據點地圖嵌入（埔里大大洗車、台中VSN、台中THS）

---

## 待辦事項

| 項目 | 狀態 |
|------|------|
| top-badge 移除（三產品頁） | ⏳ 待確認後執行 |
| 客戶提供圖片素材後填入 | 🔄 重拍中 |
| og-image 各頁補齊 | ⏳ 待製作 |
| 保固系統 MVP | 🔵 評估中 |

---

## 素材清單

### 共用素材

| 檔名 | 路徑 | 尺寸建議 | 說明 | 狀態 |
|------|------|----------|------|------|
| `logo-circle.png` | `/most/logo-circle.png` | 200×200px | 主頁圓形 logo | 🔄 重拍中 |
| `favicon.png` | `/assets/favicon.png` | 32×32px | 全站共用 favicon | ⏳ 待確認 |

---

### 主頁 `most/index.html`

| 檔名 | 路徑 | 尺寸建議 | 說明 | 狀態 |
|------|------|----------|------|------|
| `og-most.jpg` | `/most/og-most.jpg` | 1200×630px | 主頁社群分享預覽圖 | ⏳ 待製作 |
| `img-color-film.jpg` | `/most/img-color-film.jpg` | 800×1000px（4:5直式）| 產品卡：改色膜封面圖 | 🔄 重拍中 |
| `img-ppf.jpg` | `/most/img-ppf.jpg` | 800×1000px（4:5直式）| 產品卡：犀牛皮封面圖 | 🔄 重拍中 |
| `img-color-ppf.jpg` | `/most/img-color-ppf.jpg` | 800×1000px（4:5直式）| 產品卡：改色犀牛皮封面圖 | 🔄 重拍中 |
| `factory-exterior.jpg` | `/most/factory-exterior.jpg` | 800×500px（16:10橫式）| 品牌故事：工廠外觀 | 🔄 重拍中 |
| `factory-interior.jpg` | `/most/factory-interior.jpg` | 800×500px（16:10橫式）| 品牌故事：工廠內部 | 🔄 重拍中 |
| `img-placeholder-3.jpg` | `/most/img-placeholder-3.jpg` | 800×500px（16:10橫式）| 品牌特色：頂級材質形象圖 | 🔄 重拍中 |

---

### 犀牛皮 PPF `most/ppf/`

| 檔名 | 路徑 | 尺寸建議 | 說明 | 狀態 |
|------|------|----------|------|------|
| `og-ppf.jpg` | `/most/og-ppf.jpg` | 1200×630px | PPF 頁社群分享預覽圖 | ⏳ 待製作 |
| `img-ppf-hero.jpg` | `/most/ppf/img-ppf-hero.jpg` | 1080×1920px（直式）| Hero 背景大圖 | 🔄 重拍中 |
| `img-ppf-gallery-1.jpg` | `/most/ppf/img-ppf-gallery-1.jpg` | 800×600px（4:3橫式）| 施工案例圖 1 | 🔄 重拍中 |
| `img-ppf-gallery-2.jpg` | `/most/ppf/img-ppf-gallery-2.jpg` | 800×600px（4:3橫式）| 施工案例圖 2 | 🔄 重拍中 |
| `img-ppf-gallery-3.jpg` | `/most/ppf/img-ppf-gallery-3.jpg` | 800×600px（4:3橫式）| 施工案例圖 3 | 🔄 重拍中 |
| `img-ppf-gallery-4.jpg` | `/most/ppf/img-ppf-gallery-4.jpg` | 800×600px（4:3橫式）| 施工案例圖 4 | 🔄 重拍中 |

---

### 改色膜 `most/color-film/`

| 檔名 | 路徑 | 尺寸建議 | 說明 | 狀態 |
|------|------|----------|------|------|
| `og-colorwrap.jpg` | `/most/og-colorwrap.jpg` | 1200×630px | 改色膜頁社群分享預覽圖 | ⏳ 待製作 |
| `img-color-film-hero.jpg` | `/most/color-film/img-color-film-hero.jpg` | 1080×1920px（直式）| Hero 背景大圖 | 🔄 重拍中 |
| `img-color-gallery-1.jpg` | `/most/color-film/img-color-gallery-1.jpg` | 800×600px（4:3橫式）| 施工案例圖 1 | 🔄 重拍中 |
| `img-color-gallery-2.jpg` | `/most/color-film/img-color-gallery-2.jpg` | 800×600px（4:3橫式）| 施工案例圖 2 | 🔄 重拍中 |
| `img-color-gallery-3.jpg` | `/most/color-film/img-color-gallery-3.jpg` | 800×600px（4:3橫式）| 施工案例圖 3 | 🔄 重拍中 |
| `img-color-gallery-4.jpg` | `/most/color-film/img-color-gallery-4.jpg` | 800×600px（4:3橫式）| 施工案例圖 4 | 🔄 重拍中 |

---

### 改色犀牛皮 `most/color-ppf/`

| 檔名 | 路徑 | 尺寸建議 | 說明 | 狀態 |
|------|------|----------|------|------|
| `og-colorppf.jpg` | `/most/og-colorppf.jpg` | 1200×630px | 改色犀牛皮頁社群分享預覽圖 | ⏳ 待製作 |
| `img-color-ppf-hero.jpg` | `/most/color-ppf/img-color-ppf-hero.jpg` | 1080×1920px（直式）| Hero 背景大圖 | 🔄 重拍中 |
| `img-color-ppf-gallery-1.jpg` | `/most/color-ppf/img-color-ppf-gallery-1.jpg` | 800×600px（4:3橫式）| 施工案例圖 1 | 🔄 重拍中 |
| `img-color-ppf-gallery-2.jpg` | `/most/color-ppf/img-color-ppf-gallery-2.jpg` | 800×600px（4:3橫式）| 施工案例圖 2 | 🔄 重拍中 |
| `img-color-ppf-gallery-3.jpg` | `/most/color-ppf/img-color-ppf-gallery-3.jpg` | 800×600px（4:3橫式）| 施工案例圖 3 | 🔄 重拍中 |
| `img-color-ppf-gallery-4.jpg` | `/most/color-ppf/img-color-ppf-gallery-4.jpg` | 800×600px（4:3橫式）| 施工案例圖 4 | 🔄 重拍中 |

---

## 素材命名規則

```
Hero 背景：  img-{product}-hero.jpg
施工案例：  img-{product}-gallery-{1~4}.jpg
產品封面：  img-{product}.jpg（主頁用）
OG 圖：     og-{product}.jpg
```

`{product}` 對應值：`ppf` / `color-film` / `color-ppf`

---

*最後更新：2026-04-12*
