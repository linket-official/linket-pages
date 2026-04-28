# 桑心餐飲 emoLab｜工作日誌
**負責：** Tony Lin / LINKet ｜ **建立：** 2026.04

---

## 專案狀態
✅ 兩頁均已部署（依上傳版本為最新基礎）

---

## 頁面清單

| 頁面 | 路徑 | 檔案 | 狀態 |
|------|------|------|------|
| 主頁 | linket.app/emolab | emolab/index.html | ✅ 部署中 |
| 活動頁 | linket.app/emolab/talk | emolab/talk/index.html | ✅ 部署中 |

---

## 版本紀錄

### emolab/index.html（主頁）
| 版本 | 日期 | 內容 |
|------|------|------|
| 歷史版本 | — | 過往迭代（依記憶庫：Meta Pixel 879311715156916、GA4 emolab label、LINE 社群群組、四品牌介紹卡、雙 QR modal 架構）|
| **最新版** | 2026.04 | 上傳確認版：627 行，四大品牌（emo Lab / 桑心合作社 / 桑心茶室 / 山上山下 3S3S），Meta Pixel + GA4 雙追蹤，LINE 社群連結，五個 Maps 連結，Cormorant Garamond + Noto Serif TC 字體 |

### emolab/talk/index.html（活動頁）
| 版本 | 日期 | 內容 |
|------|------|------|
| 歷史版本 | — | 過往迭代（活動卡片架構建立）|
| 上傳基礎版 | 2026.04 | 353 行，三大活動卡片（清酒品酒會 / 頌缽體驗會 / 螢火蟲即將公告），Meta Pixel + GA4 emolab-talk label |
| **v1.1** | **2026-04-28** | **Hero 新增【螢火蟲音療之旅｜立即報名】CTA（排第一）；活動卡重排為 4 張：① 螢火蟲（開放報名）② 五行感官療癒（開放報名）③ 創業交流（即將）④ 清酒品酒（即將）；螢火蟲活動文案升級；五行療癒補充五行料理與精油調香說明；圖片名更新為 img-event-firefly-2025.jpg** |

---

## 技術規格
| 項目 | 值 |
|------|-----|
| GA4 | `G-29J2988Y8J` |
| GA4 label 主頁 | `emolab` |
| GA4 label 活動頁 | `emolab-talk` |
| Meta Pixel | `879311715156916` |
| 字體 | Noto Serif TC + Cormorant Garamond |

---

## 部署路由
```
/emolab       /emolab/index.html       200
/emolab/talk  /emolab/talk/index.html  200
```

---

## 素材清單（已知）

### 主頁
| 檔名 | 說明 | 狀態 |
|------|------|------|
| `og-image.jpg` | 社群分享預覽圖 | 已設定 |
| 四品牌背景圖 | 各品牌卡片配圖 | 已部署 |

### 活動頁
| 檔名 | 說明 | 狀態 |
|------|------|------|
| `talk-og.jpg` | 活動頁分享圖 | 已設定 |
| `img-event-sake.jpg` | 清酒品酒會活動圖 | 已設定 |
| `img-event-bowl.jpg` | 頌缽體驗會活動圖 | 已設定 |
| `img-event-firefly-2025.jpg` | 螢火蟲森林音療活動圖（2025）| ⬜ 需更換新圖 |

---

## 待辦
- [ ] 確認第三個活動（forms.gle/ANqXrE58tpMx9Se16）正式名稱
- [ ] 新活動上線時更新 talk 頁
- [ ] 確認各品牌目前地址/營業時間是否有異動

---
*LINKet by Tony Design Studio · linket.app · 2026.04*
