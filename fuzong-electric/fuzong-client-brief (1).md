# 富宗電機行 · 客戶資訊表 & 頁面規劃架構書
**建立日期：** 2026-04-08
**負責設計：** LINKet by Tony Design Studio
**狀態：** 📋 規格收集中（資料補充完成）

---

## 一、客戶基本資料

| 欄位 | 內容 | 來源 |
|------|------|------|
| 品牌名稱 | 富宗電機行 | 名片 |
| 聯絡人 | 丁仁盛 | 名片 |
| 手機 | 0972-367-336 | 名片 |
| 市話 | 049-299-3577 | Google Maps |
| LINE | @896vullv | 名片 |
| LINE 連結 | https://line.me/R/ti/p/@896vullv | 客戶提供 |
| 地址 | 545 南投縣埔里鎮中華路222號 | Google Maps |
| Google Maps | https://maps.app.goo.gl/H5fPqBU7JhJQwoAW9 | 客戶提供 |
| 營業時間 | 週一～週六 09:00–18:00 ｜ 週日休息 | Google Maps |
| Google 評分 | ⭐ 5.0（2則） | Google Maps |
| 官網 | 無 | — |
| Email | 未提供 | — |
| Facebook / IG | 未確認（待詢問） | — |

---

## 二、業務內容

### 主要業務
> 專營各型式・沉水馬達／抽水機・加壓機／變相器・變頻恆壓機・各廠牌買賣修理

### 業務分類

| 類別 | 細項 |
|------|------|
| 設備買賣 | 沉水馬達、抽水機、加壓機、變頻恆壓機 |
| 設備修理 | 各廠牌馬達維修（沉水型、地面型） |
| 電控設備 | 變相器、變頻恆壓系統 |
| 服務範圍 | 住宅、農業灌溉、社區大樓、工業用途 |

---

## 三、設計方向規劃

### 品牌定位
- **風格：** 傳統工業職人 × 手工質感，復古沉穩
- **情緒：** 米白紙質 + 手繪工業插圖 + 毛筆書法字
- **靈感來源：** 名片——米白底色、手繪沉水馬達插圖、手寫毛筆「富宗電機行」

---

### 色系（名片米白 + 工業墨黑）

| 角色 | 色值 | 說明 |
|------|------|------|
| 主底色 `--bg` | `#F5F0E8` 米白 | 名片底色，紙質感 |
| 深色 `--ink` | `#1C1C1A` 墨黑 | 文字、線條 |
| 輔色 `--rust` | `#8B5E3C` 鐵鏽棕 | 工業金屬氧化感，CTA |
| 中性 `--gray` | `#6B6560` 煙灰 | 輔助文字 |
| 強調線 `--line` | `rgba(28,28,26,.12)` | 細分隔線 |

> **差異化確認：** 目前無任何客戶使用米白紙質工業風，方向獨特。

---

### 字體規劃

| 用途 | 字體 | 說明 |
|------|------|------|
| **品牌 Logo 文字** | 毛筆書法體（Noto Serif TC 粗體模擬，或 Google Fonts「ZCOOL XiaoWei」） | 比照名片「富宗電機行」毛筆風格 |
| **中文標題** | `Noto Serif TC` weight 700 | 思源宋體，端莊 |
| **中文內文** | `Noto Serif TC` weight 400 | 統一宋體系 |
| **英文裝飾** | `Cormorant Garamond` italic | 高端襯線字體，適合副標 |
| **數字大字** | `Cormorant Garamond` weight 600 | Explore infographic 數字 |

```html
<!-- Google Fonts 引入 -->
<link href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&family=Noto+Serif+TC:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
```

---

### Logo 規劃
- **形式：** 手繪沉水馬達插圖（名片背面）+ 「富宗電機行」毛筆字
- **建議：** 請客戶提供名片的 PNG 掃描或向量圖；或由 LINKet 依名片重新製作 SVG
- **Hero 中呈現：** 插圖在上，毛筆字在下，整體像一枚工坊印章

---

### 圓角
```css
--r: 4px;  /* 工業/手工質感，銳利不圓潤 */
```

---

## 四、頁面架構規劃

### Slug
```
fuzong-electric
```
→ `linket.app/fuzong-electric`

---

### 頁面骨架

```
① TOP BADGE          ← linket.app/home
② HERO               ← 米白底 + 馬達插圖 + 書法字
③ QR MODAL
④ WATERMARK DIVIDER  ← 富宗電機行 · Fu Zong Electric
⑤ 業務說明區         id="service"
⑥ 產品探索區         id="explore"
⑦ 聯繫與位置         id="location"
⑧ FOOTER BUTTONS
⑨ BACK TO TOP
⑩ DESIGN BY LINKET
```

---

### 各區塊規劃細節

#### ② HERO（米白底，手繪插圖背景）

**視覺設計：**
- 背景：米白色 `#F5F0E8` + 淡化的手繪馬達線稿（作為 hero-bg-img，低透明度疊底）
- 左欄 Logo 區：馬達插圖 + 毛筆書法字「富宗電機行」
- 整體氣質：像一張老行號的工坊名片放大版

**左欄元素：**
```
[馬達插圖 Logo]
職稱：電機設備・買賣維修
姓名：丁仁盛
slogan：「專業技術・在地服務・讓用水不再煩惱」
tags：#沉水馬達 #加壓機 #變頻恆壓 #買賣維修
營業時間：週一～週六 09:00–18:00
```

**右欄 Icons（4個）：**

| Icon | 連結 |
|------|------|
| LINE | https://line.me/R/ti/p/@896vullv |
| 電話 | tel:0972367336 |
| 地圖 | https://maps.app.goo.gl/H5fPqBU7JhJQwoAW9 |
| QR Code | openQrModal() |

**右欄按鈕（4個）：**

| 按鈕文字 | 樣式 | 連結 | GA4 事件 |
|---------|------|------|---------|
| 立即洽詢｜LINE@ | P1（墨黑底白字） | https://line.me/R/ti/p/@896vullv | click_line |
| 撥打電話｜Call | P1（墨黑底白字） | tel:0972367336 | click_tel |
| 服務項目｜Services | Ghost（墨框） | #service | — |
| 門市位置｜Location | Ghost（墨框） | #location | — |

---

#### ④ WATERMARK DIVIDER
```
富宗電機行  ·  Fu Zong Electric  ·  Est. Puli, Nantou
```

---

#### ⑤ 業務說明區（id="service"）

**標題：** 我們的專業服務
**副標：** Professional Services

**4格品牌卡片：**

| # | 中文標題 | 英文副標 | 說明文字 |
|---|---------|---------|---------|
| 01 | 沉水馬達 | Submersible Pump | 各型式沉水馬達販售，適用農業灌溉、大樓供水、深井抽水 |
| 02 | 抽水機・加壓機 | Pump & Booster | 地面型、沉水型抽水設備，穩定水壓、提升揚程 |
| 03 | 變頻恆壓機 | Inverter System | 智能恆壓控制，節能省電，延長馬達壽命 |
| 04 | 各廠牌維修 | Repair & Service | 現場診斷、零件更換、到府服務，快速排除故障 |

---

#### ⑥ 產品探索區（id="explore"）

**標題：** 為什麼選擇富宗？
**副標：** Why Choose Us

**Infographic 方案B（2欄垂直堆疊）：**

| 大數字 | 標題 | 說明 |
|--------|------|------|
| 30＋ | 年在地深耕 | 深根埔里三十年，熟悉在地水源環境 |
| 24H | 快速報修 | 農忙緊急故障，最快當日到府處理 |
| 多 | 廠牌全覆蓋 | 大井、木川、川泉、富蘭克林等主流品牌 |
| 全 | 一條龍服務 | 選型→採購→安裝→維修，一家搞定 |

> ⚠️ 年資「30＋」為推估，部署前請向客戶確認

---

#### ⑦ 聯繫與位置（id="location"）

| 項目 | 內容 |
|------|------|
| 地址 | 545 南投縣埔里鎮中華路222號 |
| 電話 | 049-299-3577 |
| 手機 | 0972-367-336 |
| LINE | @896vullv |
| 營業時間 | 週一～週六 09:00–18:00 ｜ 週日休息 |

**Google Maps embed：**
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.705895175218!2d120.97242179999999!3d23.970838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d9763ad2e117%3A0xa80870bce2774d1!2z5a-M5a6X6Zu75qmf6KGM!5e0!3m2!1szh-TW!2stw!4v1775638118373!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

---

#### ⑧ FOOTER BUTTONS
```
[LINE 洽詢]  [撥打電話]
```

---

## 五、素材需求清單

| 檔名 | 尺寸 | 說明 | 狀態 |
|------|------|------|------|
| `fuzong-electric-logo.png` | 400×400 透明底 | 馬達插圖 + 毛筆字 Logo | ⬜ 待提供或重製 |
| `fuzong-electric-hero-bg.jpg` | 1920×1080 | 手繪馬達線稿或工廠現場照 | ⬜ 待提供 |
| `og-image.jpg` | 1200×630 | 社群分享預覽 | ⬜ 待製作 |
| `favicon.png` | 32×32 | 瀏覽器 icon | ⬜ 待製作 |
| `explore-01.jpg` | 800×450（16:9） | 沉水馬達產品照 | ⬜ 待提供 |
| `explore-02.jpg` | 800×450（16:9） | 加壓機或現場安裝照 | ⬜ 待提供 |

---

## 六、待確認事項（給客戶）

- [ ] 名片背面插圖是否有數位版本（PNG/SVG/AI）？或由 LINKet 重新製作
- [ ] 現場門市或工廠環境照片（Hero 背景用）
- [ ] 產品照片（沉水馬達、加壓機現貨照）
- [ ] 在地服務年資確認（幾年？）
- [ ] 主要服務範圍（僅埔里？或含南投縣全區？）
- [ ] Facebook / Instagram 帳號確認
- [ ] Slogan 文字方向確認

---

## 七、開發快速查詢

| 項目 | 值 |
|------|----|
| Slug | `fuzong-electric` |
| GA4 | `G-29J2988Y8J` |
| LINE 連結 | `https://line.me/R/ti/p/@896vullv` |
| 手機 | `tel:0972367336` |
| 市話 | `tel:0492993577` |
| Google Maps | `https://maps.app.goo.gl/H5fPqBU7JhJQwoAW9` |
| 主色 | `#1C1C1A` 墨黑 |
| 底色 | `#F5F0E8` 米白 |
| 強調色 | `#8B5E3C` 鐵鏽棕 |
| 圓角 | `4px` |
| Ticker | ✅ 使用 |

---

*LINKet by Tony Design Studio · linket.app · 2026.04*
