# MOST 膜仕 版本更新紀錄

**專案路徑：** `linket.app/most/`
**GA4：** `G-29J2988Y8J`
**LINE：** `https://lin.ee/B2awlv2`

---

## 版本紀錄

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
| 客戶提供圖片素材後填入 | ⏳ 待提供 |
| og-image 各頁補齊 | ⏳ 待製作 |
| 保固系統 MVP | 🔵 評估中 |

---

## 素材清單

### 共用素材

| 檔名 | 路徑 | 尺寸建議 | 說明 | 狀態 |
|------|------|----------|------|------|
| `logo-circle.png` | `/most/logo-circle.png` | 200×200px | 主頁圓形 logo | ⏳ 待提供 |
| `favicon.png` | `/assets/favicon.png` | 32×32px | 全站共用 favicon | ⏳ 待確認 |

---

### 主頁 `most/index.html`

| 檔名 | 路徑 | 尺寸建議 | 說明 | 狀態 |
|------|------|----------|------|------|
| `og-most.jpg` | `/most/og-most.jpg` | 1200×630px | 主頁社群分享預覽圖 | ⏳ 待製作 |
| `img-color-film.jpg` | `/most/img-color-film.jpg` | 720×1280px（直式）| 產品卡：改色膜封面圖 | ⏳ 待提供 |
| `img-ppf.jpg` | `/most/img-ppf.jpg` | 720×1280px（直式）| 產品卡：犀牛皮封面圖 | ⏳ 待提供 |
| `img-color-ppf.jpg` | `/most/img-color-ppf.jpg` | 720×1280px（直式）| 產品卡：改色犀牛皮封面圖 | ⏳ 待提供 |
| `factory-exterior.jpg` | `/most/factory-exterior.jpg` | 720×1280px（直式）| 品牌故事：工廠外觀 | ⏳ 待提供 |
| `factory-interior.jpg` | `/most/factory-interior.jpg` | 720×1280px（直式）| 品牌故事：工廠內部 | ⏳ 待提供 |
| `img-placeholder-3.jpg` | `/most/img-placeholder-3.jpg` | 720×1280px（直式）| 品牌特色：頂級材質形象圖 | ⏳ 待提供 |

---

### 犀牛皮 PPF `most/ppf/`

| 檔名 | 路徑 | 尺寸建議 | 說明 | 狀態 |
|------|------|----------|------|------|
| `og-ppf.jpg` | `/most/og-ppf.jpg` | 1200×630px | PPF 頁社群分享預覽圖 | ⏳ 待製作 |
| `img-ppf-hero.jpg` | `/most/ppf/img-ppf-hero.jpg` | 1080×1920px（直式）| Hero 背景大圖 | ⏳ 待提供 |
| `img-ppf-gallery-1.jpg` | `/most/ppf/img-ppf-gallery-1.jpg` | 720×1280px（直式）| 施工案例圖 1 | ⏳ 待提供 |
| `img-ppf-gallery-2.jpg` | `/most/ppf/img-ppf-gallery-2.jpg` | 720×1280px（直式）| 施工案例圖 2 | ⏳ 待提供 |
| `img-ppf-gallery-3.jpg` | `/most/ppf/img-ppf-gallery-3.jpg` | 720×1280px（直式）| 施工案例圖 3 | ⏳ 待提供 |
| `img-ppf-gallery-4.jpg` | `/most/ppf/img-ppf-gallery-4.jpg` | 720×1280px（直式）| 施工案例圖 4 | ⏳ 待提供 |

---

### 改色膜 `most/color-film/`

| 檔名 | 路徑 | 尺寸建議 | 說明 | 狀態 |
|------|------|----------|------|------|
| `og-colorwrap.jpg` | `/most/og-colorwrap.jpg` | 1200×630px | 改色膜頁社群分享預覽圖 | ⏳ 待製作 |
| `img-color-film-hero.jpg` | `/most/color-film/img-color-film-hero.jpg` | 1080×1920px（直式）| Hero 背景大圖 | ⏳ 待提供 |
| `img-color-gallery-1.jpg` | `/most/color-film/img-color-gallery-1.jpg` | 720×1280px（直式）| 施工案例圖 1 | ⏳ 待提供 |
| `img-color-gallery-2.jpg` | `/most/color-film/img-color-gallery-2.jpg` | 720×1280px（直式）| 施工案例圖 2 | ⏳ 待提供 |
| `img-color-gallery-3.jpg` | `/most/color-film/img-color-gallery-3.jpg` | 720×1280px（直式）| 施工案例圖 3 | ⏳ 待提供 |
| `img-color-gallery-4.jpg` | `/most/color-film/img-color-gallery-4.jpg` | 720×1280px（直式）| 施工案例圖 4 | ⏳ 待提供 |

---

### 改色犀牛皮 `most/color-ppf/`

| 檔名 | 路徑 | 尺寸建議 | 說明 | 狀態 |
|------|------|----------|------|------|
| `og-colorppf.jpg` | `/most/og-colorppf.jpg` | 1200×630px | 改色犀牛皮頁社群分享預覽圖 | ⏳ 待製作 |
| `img-color-ppf-hero.jpg` | `/most/color-ppf/img-color-ppf-hero.jpg` | 1080×1920px（直式）| Hero 背景大圖 | ⏳ 待提供 |
| `img-color-ppf-gallery-1.jpg` | `/most/color-ppf/img-color-ppf-gallery-1.jpg` | 720×1280px（直式）| 施工案例圖 1 | ⏳ 待提供 |
| `img-color-ppf-gallery-2.jpg` | `/most/color-ppf/img-color-ppf-gallery-2.jpg` | 720×1280px（直式）| 施工案例圖 2 | ⏳ 待提供 |
| `img-color-ppf-gallery-3.jpg` | `/most/color-ppf/img-color-ppf-gallery-3.jpg` | 720×1280px（直式）| 施工案例圖 3 | ⏳ 待提供 |
| `img-color-ppf-gallery-4.jpg` | `/most/color-ppf/img-color-ppf-gallery-4.jpg` | 720×1280px（直式）| 施工案例圖 4 | ⏳ 待提供 |

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
