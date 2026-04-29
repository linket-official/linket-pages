# 坪頂人家 × Passionfly Taiwan｜工作日誌
**Slug：** `passionfly` ｜ **路徑：** `linket.app/passionfly`  
**負責：** Tony Lin / LINKet ｜ **建立：** 2026.04

---

## 專案狀態
🖼️ 素材待補（v1.0 完成，等待 Logo、Hero 背景圖、服務配圖）

---

## 客戶資料
| 項目 | 內容 |
|------|------|
| 負責人 | 白政益 Jerry |
| 職稱 | 品牌總監・共同創辦人 |
| 電話 | +886-911-201-804 |
| Email | Jerry@passionflytaiwan.com |
| Instagram | https://www.instagram.com/p.assionfly |
| Facebook | https://www.facebook.com/p/坪頂人家-Passionfly-61574778443157/ |
| Threads | https://www.threads.com/@p.assionfly |
| Maps | https://maps.app.goo.gl/PnVTXZiAbcuBHkq3A |
| 地址 | 54559 南投縣埔里鎮合成里西安路三段204巷13弄5號 |
| 地圖 iframe | pb=1776947995730 |

---

## 設計規格
| 項目 | 值 |
|------|-----|
| --ink | `#1C1610` 深棕 |
| --accent | `#4A7C3F` 農業深綠 |
| --gold | `#A07840` 棕金 |
| --bg | `#F5F0E6` 暖白 |
| --bg2 | `#EDE6D4` 米黃 |
| --bg-dark | `#1C1A12` 深棕黑 |
| --r | `4px` |
| 字體英文 | DM Serif Display（大字標題）|
| 字體中文 | Noto Serif TC |
| 字體裝飾 | Cormorant Garamond italic |
| 風格 | 清新雜誌風 × 等高線地形紋理 × 暖白大地系 |
| GA4 label | `passionfly` |

---

## 頁面架構
| 區塊 | id | 說明 |
|------|-----|------|
| TOP BADGE | — | sticky，雙欄（LINKet badge / 品牌名）|
| PAGE META | — | 座標・描述・URL 資訊列 |
| HERO | `#top` | bg 暖白，DM Serif 大字，數據三欄，雙欄 |
| QR MODAL | — | Logo + QR + 關閉 |
| WATERMARK | — | Cormorant 斜體跑馬燈 |
| 品牌故事 | `#story` | bg-light，三欄資料感（600/4/34）|
| 服務（全出血）| `#products` | bg-mid，三大服務左右交替 |
| 智慧農業 | — | bg-dark，四格 infographic |
| 農場地圖 | `#location` | bg-light，單一地圖卡 |
| FOOTER | — | bg-dark（--ink）|
| BACK TO TOP | — | bg-light |
| DESIGN BY | — | bg-light |

---

## 版本紀錄
| 版本 | 日期 | 內容 |
|------|------|------|
| v1.0 | 04-24 | 初版建置：清新雜誌風，DM Serif Display 大字，等高線地形 SVG 底紋，全出血三服務區（左右交替），智慧農業 infographic，密排紋理文字帶，GA4 完整 |
| v1.1 | 04-24 | TOP BADGE 改標準白底置中；Hero 精簡（移除橫線/英文副標/slogan/數據三欄）；按鈕前綴 01~05/✦ 全移除；智慧農業改全出血配圖版式（同服務區語言，左右交替）|

---

## 素材清單
| 檔名 | 規格 | 說明 | 狀態 |
|------|------|------|------|
| `passionfly-logo.png` | 透明底 PNG | 坪頂人家圓形徽章 Logo | ⬜ 待提供 |
| `passionfly-hero-bg.jpg` | 1920×1080px | Hero 背景（農場/百香果園俯拍）| ⬜ 待提供 |
| `img-farm.jpg` | 800×450px 16:9 | 一級生產・農場實景 | ⬜ 待提供 |
| `img-product.jpg` | 800×450px 16:9 | 二級加工品（果凍/果條）| ⬜ 待提供 |
| `img-experience.jpg` | 800×450px 16:9 | 三級體驗・食農教育/採果 | ⬜ 待提供 |
| `favicon.png` | 32×32px | 瀏覽器 icon | ⬜ 待提供 |
| `img-smart-iot.jpg` | 800×450px 16:9 | IoT 田間感測設備 | ⬜ 待提供 |
| `img-smart-drone.jpg` | 800×450px 16:9 | 遙控噴藥車實景 | ⬜ 待提供 |
| `img-smart-cycle.jpg` | 800×450px 16:9 | 循環農業・有機肥 | ⬜ 待提供 |
| `img-smart-ipm.jpg` | 800×450px 16:9 | IPM 實作團作業 | ⬜ 待提供 |
| `og-image.jpg` | 1200×630px | 社群分享預覽圖 | ⬜ 待製作 |

---

## 部署
```
_redirects：
/passionfly  /passionfly/index.html  200
```

---

## 待辦
- [ ] 客戶提供 Logo 圖檔
- [ ] 提供 Hero 背景圖（農場俯拍/百香果園）
- [ ] 提供三張服務配圖
- [ ] 製作 og-image.jpg
- [ ] 部署至 GitHub，新增 _redirects 路由
- [ ] 客戶確認內容後進行 code-checkpoint 修正

---
*LINKet by Tony Design Studio · linket.app · 2026.04*
