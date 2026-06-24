---
client: 丹佐興業-張志銘
status: 進行中-設計優化
priority: 中
stage: 單點最終修正完成(待Tony提供正式LOGO後即可部署)
deadline: 未定
last_feedback: "Tony抓到兩個外部依賴問題：合作夥伴3個LOGO+Hero/Footer底圖stack-image-1.jpg都還是熱連結denzel-tech.com正式網站，且專案資料夾內沒有本機備份；已下載4張圖localize進assets/，路徑改完"
updated: 2026-06-24
---

# 丹佐興業｜專案工作日誌
**方案：** T1 體驗版 ｜ **負責：** Tony Lin / LINKet ｜ **更新：** 2026.06

---

## 目前狀態
單點最終修正已完成，**只差 Tony 提供正式 LOGO SVG 就能部署**。其餘上線前檢查（slug、SEO、安全掃描、素材本機化）都已跑完。

---

## 客戶資料
| 項目 | 內容 |
|---|---|
| 主理人 | 張志銘 Stanly Chang／執行長 |
| 公司 | 丹佐興業有限公司（統編 00233617） |
| 電話 | +886 917 782 715 |
| LINE | https://line.me/ti/p/xS84Cco_iW |
| FB | https://www.facebook.com/stanly.chang（已授權公開） |
| IG | https://www.instagram.com/stanly.startup/（已授權公開） |
| 官網 | https://denzel-tech.com |
| GA4 label | `denzel-tech` |

## 設計規格
| 項目 | 值 |
|---|---|
| 背景黑 | `#101010` |
| 主金色 | `#9C8C74`（Pillow 真實像素取色） |
| 字體 | Noto Serif TC + Cormorant Garamond（只 2 款，LINKet 字體鐵則） |
| LOGO | 暫用截圖去背 PNG（denzel-logo.png），待 Tony 提供正式 SVG 後更換 |
| 主理人照 | denzel-portrait-badge.png（900×1200，Tony 手工製作圓形徽章去背版，2026-06-22 定版） |

## 頁面架構
`index.html`：Hero（hero-left/hero-right 兩欄） → 關於丹佐 → 三大產品線 → 精選實績案例 → 合作夥伴 → 拜訪丹佐 → Footer（divider+copy+design-by bar），單頁七區塊，對應頁面製作架構書 v1.0。

---

## 版本紀錄
> 新版本在最上面，每版只列「改了什麼」，不用整段話讀完才知道重點。

### v2.6（06-24）素材清單重整＋補上 _redirects
- 素材清單比照 leon-day／龍德兩個既有案例的 changelog 寫法，從一份大表拆成 A~G 分類（Logo／人物照／背景圖／案例照／合作夥伴 LOGO／OG分享圖／共用Icon），原本「外部連結」表格已併入 C、E（因 v2.5 本機化後不再是外部檔案）
- 補上 `_redirects` 路由規則：`/denzel-tech /denzel-tech//index.html 200`（Tony 確認此專案部署順序是先上傳資料夾再設路由，跟既有案例慣例的「先路由後上傳」相反，故寫法不同）

### v2.5（06-24）外部圖片本機化
- Tony 抓到：合作夥伴 3 個 LOGO（HomeLink／電小二／冠宇數位科技）+ Hero／Footer 共用底圖 `stack-image-1.jpg`，都還是熱連結官網 `denzel-tech.com`，一旦官網改版或下架，頁面圖片會直接消失，且專案資料夾內沒有本機備份
- 用 curl（瀏覽器 UA）把 4 張圖下載下來，存進 `assets/partners/`（homelink-logo.jpg／dianxiaoer-logo.png／champion-logo.png）與 `assets/denzel-stack-bg.jpg`
- `index.html` 與部署鏡像 `denzel-tech/index.html` 同步改路徑為相對路徑 `./assets/...`，兩份檔案改完仍完全一致
- 確認改完後頁面已無任何指向 `denzel-tech.com` 的圖片連結（官網本身連結、mailto、contact 等文字連結維持不變，不受影響）

### v2.4（06-23）單點最終修正
- Hero 標語：「讓場域自己運作」→「讓場域自動化」
- 跑馬燈拿掉所有「代理」兩字（HomeLink 智取櫃／電小二智慧點餐）
- 合作夥伴 LOGO 拿掉灰階濾鏡，恢復原本顏色
- 合作夥伴卡片底圖換成真實案例照片＋深色調暗：
  - HomeLink → 社區大樓 438 戶
  - 電小二 → 師園鹽酥雞門市
  - 冠宇數位科技 → 松山霞海城隍廟
  - （用疊色漸層降低透明度，不是直接調圖片本身的 opacity，保留底部文字可讀性）
- 合作夥伴卡片文字改兩端齊行（justify）
- 確認共用 icon 庫線上真的存在：對照 GitHub `linket-official/linket-pages/assets`，5 個圖示路徑都對應，上線後不會消失
- Tony 確認部署前會自己換上正式 LOGO SVG，這輪先用截圖去背版打包

### v2.3（06-23）逐區指定修正 + 部署前準備（slug 確認為 `denzel-tech`）
**版面調整**
- Hero 左右欄間距 64px → 40px
- `.hero-icon-link` 拿掉 CSS 圓形外框（icon 素材本身已是白底圓圈徽章，雙重圓圈視覺重複）
- QR Code／Share 按鈕從靠左改置中並排，QR 彈窗加上 DENZEL logo
- Hero 與 §02 交界新增跑馬燈（參考龍德風格，金底深字＋◆分隔，8 組丹佐關鍵字循環）
- §03 三個案例輪播從手動橫向滑動改成自動輪播（4.2s 自動播放＋上一頁/下一頁按鈕＋小圓點切換，滑鼠移上去會暫停），3 組各自獨立運作
- §04 合作夥伴改成 Aman「留白即奢華」風格：卡片間 gap 跟邊框拿掉，三張底圖直接相接，卡片拉高，LOGO／名稱／介紹文字放在底部大留白區
- §05 拜訪丹佐改標題置頂＋下方左圖右資訊兩欄（參考龍德），資訊改成 icon+標籤+內容列（地址/電話/Email），手機版圖在上資訊在下
- Footer 加背景圖（與 Hero 同一張攝影素材＋斜向深色漸層遮罩）

**部署前準備**
- 用 Pillow 從 `denzel-logo.png` 裁出純圖標，製作 `favicon.png`（512×512）
- 用 Pillow 合成 `og-image.jpg`（1200×630，深底+光暈+logo+標題+標語）
- favicon／og:image／og:url／twitter:card／canonical 全部換成正式網址 `https://linket.app/denzel-tech/`
- QR code 與網頁分享網址同步更新，拿掉所有「slug 待定」的待辦註解

**上線前健檢**
- 補上全站 14 個 `target="_blank"` 連結缺少的 `rel="noopener noreferrer"`（防止分頁劫持攻擊）
- 金鑰／敏感資訊掃描乾淨，無洩漏
- SEO 補上缺失的 `<h1>`（Hero 姓名升級）、`<link rel="canonical">`、Twitter Card 四個 meta 標籤

### v2.2（06-23）Tony 手動調整可讀性與排版（自評 80 分）+ Claude 比對修正
- 金色從 `#9C8C74` 換成更明亮飽和的 `#e1b168`，文字與分隔線不透明度提高，整體可讀性與對比提升（代價是犧牲一點原本內斂的精品感，是合理取捨）
- Hero 姓名拆成「張志銘」/「Stanly」兩行；標題類文字改固定字級、加大字距
- 部分段落文字改兩端齊行（justify），中文排版下效果乾淨無跑版
- CTA 按鈕從描邊改金色實心填色，更醒目
- 文案口語化，但拿掉了部分先前特意加入的具體事實（師園鹽酥雞 40 年/城隍老爺等神祇），已提醒 Tony 評估是否要留
- **Claude 抓到並修正一個既有 bug（不是 Tony 造成，v2.1 就存在）**：Hero／Footer 共用的 5 個社群 icon 本身是「白底圓圈+黑色圖案」設計，但套用反白濾鏡會把整張圖一起變成看不出圖案的純白圓點；修法是拿掉那條濾鏡，桌機/手機/footer 都重新截圖驗證圖示清晰可辨

### v2.1（06-23）比對 6 個上架案例 + 5 個 skill 分析後套用
- Hero 進場動畫改成逐元素依序淡入（取代原本整塊一起淡入）
- 三大產品線／精選案例／合作夥伴卡片從整組同時淡入改成個別分級延遲，看起來更有層次
- 淡入動畫的速度曲線換成 LINKet 標準的「精品感」曲線
- Hero 背景圖疊加斜向深色漸層遮罩取代純調暗調灰，更有空間感
- Hero 主理人照加金色光暈＋陰影
- 區塊編號文字縮小、字距拉開，跟標題層次對比更明顯
- **修正 Hero 邊界 bug（Tony 主動發現）**：Hero 內容比下方所有區塊多縮進 16~60px（手機多 36px／桌機最多多 60px），抓出是兩個響應式斷點多疊加了一層多餘的左右留白，拿掉後桌機/手機的左邊界都跟其他區塊完全對齊

### v2.0（06-22）全區大改版
- 區塊順序定為：Hero／關於丹佐／三大服務／合作夥伴／拜訪丹佐／Footer，刪除升級誘因區
- 全區補上淡入動畫（Hero 原本沒有）
- Hero 補上背景圖層（官網現成攝影素材，低透明度疊加）
- 全站按鈕改成圓角藥丸造型
- Hero 左欄職稱「執行長」換行到名字上方，名字字距加大
- Hero 右欄按鈕改 5 個（合作諮詢LINE／致電執行長／3個錨點導覽），拿掉外部官網按鈕，icon 列新增 Web icon
- 新增 QR Code＋分享模組（網址先佔位，待 slug 確定）
- §02 關於丹佐文案重寫，拿掉跟丹佐無關的數字跟假引言，改成自動化/整合/日常三段式品牌主張
- §03 三大服務改成案例輪播，分配官網 10 個真實案例到三個服務輪播
- §04 合作夥伴改卡片式（桌機左右/手機上下）
- §05 拜訪丹佐改左右欄，左欄標題+地圖、右欄電話/Email/地址+按鈕
- Footer 重新排版：LOGO→公司名→icon→按鈕→統編→設計署名

### v1.5（06-22）回應診斷報告 P1–P6
- §02 補上張志銘第一人稱創辦人視角短引言，從「公司頁」翻轉成「人頁」
- 移除 4 個來源不明的數字（28%/1.5k+/30+/2x），換成已查證事實（438戶/40年/200年/3場域）
- §03 標題「丹佐怎麼做」改為「三個場域，三個解法」，語意更對齊內容
- 升級誘因文案從空洞功能清單改成具體好奇心誘餌（三重先嗇宮案例）
- about-sub 移除「2024年成立」字樣，弱化新創風險感（仍保留在結構化資料裡）
- Hero 英文標語字級放大

### v1.4（06-22）內容重寫
回應「內容沒有品牌區別性、三大產品線跟案例重複」的回饋：
- 原本的三大產品線（空泛同理心話術）+精選案例（純照片列表）合併成一個「丹佐怎麼做」區塊，主張與證據合併呈現
- 智慧居家補上 11／145／438 戶規模實績
- 智慧餐飲改用「師園鹽酥雞（成立超過 40 年的台北知名鹹酥雞老店）」，取代已從官網下架的舊案例
- 智慧宮廟補上「松山霞海城隍廟近兩百年歷史」的查證事實
- 新增「拜訪丹佐」區塊（Google Maps 嵌入地圖＋導航按鈕）

### v1.3（06-22）
- Tony 提供手工製作的圓形徽章形象照，覆蓋主理人照片（乾淨無破洞）
- icon SVG 複製進專案 assets/ 資料夾，解決本機預覽 4 個 icon 404 問題，console 零錯誤

### v1.2（06-22）比對 leon-day／龍德／asmrt-puli 修正 UI 數值
- 字重、標籤字重、字距、間距等多項數值對齊規範
- 三大產品線卡片加玻璃擬態效果＋輕微金色光暈背景
- 新增結構化資料，提升 AI／搜尋引擎可讀性

### v1.1（06-21）比對 bella-spa／龍德／義昌食品修正規格
- Hero 改成左右兩欄
- Footer 加分隔線＋版權文字＋獨立設計署名列
- icon 全面改用共用 SVG 圖庫，不再手畫
- 字體從 3 款精簡為 2 款
- 主理人照改用圓形去背版

### v1.0（06-20）初版建置
- 依架構書完成全部七區塊
- LOGO 去背處理
- 案例／合作夥伴圖片取得官網授權後直接引用
- FB／IG 已授權公開，放入 Hero 與 Footer

---

## 素材清單（2026-06-24 更新，比對 leon-day／龍德 changelog 分類寫法重整）

### A. Logo／品牌識別
| 檔名 | 格式 | 尺寸／比例 | 路徑 | 用途 | 狀態 |
|---|---|---|---|---|---|
| denzel-logo.png | PNG | 1336×1640（約 4:5） | `./denzel-logo.png` | Hero 左欄／QR彈窗／Footer LOGO，也是 favicon、og-image 的來源圖 | ⚠️ 截圖去背版，待 Tony 提供正式 SVG 後置換 |
| favicon.png | PNG | 512×512（1:1） | `./favicon.png` | 瀏覽器分頁圖示／手機加到主畫面圖示，用 Pillow 從 LOGO 裁出純圖標製作 | ⚠️ 換正式 LOGO 後需重新產生 |

---

### B. 人物照
| 檔名 | 格式 | 尺寸／比例 | 路徑 | 用途 | 備註 | 狀態 |
|---|---|---|---|---|---|---|
| denzel-portrait-badge.png | PNG | 900×1200（3:4） | `./denzel-portrait-badge.png` | Hero 右欄主理人圓形徽章照 | Tony 手工製作去背版 | ✅ 已定版 |

---

### C. 背景圖
| 檔名 | 格式 | 尺寸 | 路徑 | 用途 | 備註 | 狀態 |
|---|---|---|---|---|---|---|
| denzel-stack-bg.jpg | JPEG | 768×1024 | `assets/denzel-stack-bg.jpg` | Hero 背景＋Footer 底圖共用（opacity .32 + grayscale） | 原熱連結 `denzel-tech.com/images/stack-image-1.jpg`，06-24 下載本機化 | ✅ 已本機化 |

---

### D. 案例照（§03 輪播＋§04 合作夥伴卡底圖共用）
| 檔名 | 格式 | 尺寸／比例 | 路徑 | 用途 | 備註 | 狀態 |
|---|---|---|---|---|---|---|
| homelink-438.jpg | JPEG | 528×704（3:4） | `assets/cases/homelink-438.jpg` | §03 輪播＋§04 底圖：社區大樓 438 戶智取櫃 | — | ✅ |
| homelink-145.jpg | JPEG | 529×397（約 4:3） | `assets/cases/homelink-145.jpg` | §03 輪播：社區大樓 145 戶智取櫃 | — | ✅ |
| homelink-11.jpg | JPEG | 525×393（約 4:3） | `assets/cases/homelink-11.jpg` | §03 輪播：社區大樓 11 戶智取櫃 | — | ✅ |
| dianxiaoer-shiyuan.jpg | JPEG | 273×179（約 3:2） | `assets/cases/dianxiaoer-shiyuan.jpg` | §03 輪播＋§04 底圖：師園鹽酥雞自助點餐機 | 原始解析度偏低，建議跟 Tony 要更高解析度版本 | ✅ |
| dianxiaoer-songwu.jpg | JPEG | 768×1024（3:4） | `assets/cases/dianxiaoer-songwu.jpg` | §03 輪播：松屋 POS 系統 | — | ✅ |
| dianxiaoer-akiba.jpg | JPEG | 984×1311（約 3:4） | `assets/cases/dianxiaoer-akiba.jpg` | §03 輪播：佐藤精肉店 akiba 自助點餐機 | — | ✅ |
| dianxiaoer-beimen.jpeg | JPEG | 768×1024（3:4） | `assets/cases/dianxiaoer-beimen.jpeg` | §03 輪播：北門綠豆沙牛乳大王 | — | ✅ |
| temple-xiahai.jpg | JPEG | 2048×1365（3:2） | `assets/cases/temple-xiahai.jpg` | §03 輪播＋§04 底圖：松山霞海城隍廟數位光明燈 | — | ✅ |
| temple-xianse.jpg | JPEG | 4013×3010（4:3） | `assets/cases/temple-xianse.jpg` | §03 輪播：三重先嗇宮數位光明燈 | — | ✅ |
| temple-shenqiu.jpg | JPEG | 2048×1536（4:3） | `assets/cases/temple-shenqiu.jpg` | §03 輪播：板橋深丘福德宮數位光明燈 | — | ✅ |

---

### E. 合作夥伴 LOGO（§04 專用）
| 檔名 | 格式 | 尺寸 | 路徑 | 用途 | 備註 | 狀態 |
|---|---|---|---|---|---|---|
| homelink-logo.jpg | JPEG | 834×209 | `assets/partners/homelink-logo.jpg` | §04 合作夥伴卡：HomeLink LOGO | 原熱連結官網 `/storage/partners/...`，06-24 下載本機化 | ✅ |
| dianxiaoer-logo.png | PNG | 240×240 | `assets/partners/dianxiaoer-logo.png` | §04 合作夥伴卡：電小二 LOGO | 同上 | ✅ |
| champion-logo.png | PNG | 140×114 | `assets/partners/champion-logo.png` | §04 合作夥伴卡：冠宇數位科技 LOGO | 同上 | ✅ |

---

### F. OG 分享圖
| 檔名 | 格式 | 尺寸 | 路徑 | 用途 | 狀態 |
|---|---|---|---|---|---|
| og-image.jpg | JPEG | 1200×630（1.91:1） | `./og-image.jpg` | LINE／FB 分享連結預覽圖，Pillow 合成 | ⚠️ Tony 換正式 LOGO 後需重新產生；**文案仍是舊版「讓場域自己運作」，需同步改成「讓場域自動化」** |

---

### G. 共用 Icon（Hero／Footer 社群連結）
| 檔名 | 格式 | 尺寸 | 路徑 | 用途 |
|---|---|---|---|---|
| line.svg | SVG | 50×50 viewBox（顯示 34px） | `assets/line.svg` | LINE |
| facebook.svg | SVG | 50×50 viewBox（顯示 34px） | `assets/facebook.svg` | Facebook |
| instagram.svg | SVG | 50×50 viewBox（顯示 34px） | `assets/instagram.svg` | Instagram |
| mail.svg | SVG | 50×50 viewBox（顯示 34px） | `assets/mail.svg` | Email |
| web.svg | SVG | 50×50 viewBox（顯示 34px） | `assets/web.svg` | 官網連結 |

---

### 專案資料夾內、但頁面目前沒用到的檔案
這些是製作過程中的素材，不在線上頁面裡顯示，沒事不用處理：
- `denzel-portrait-circle.png`、`denzel-portrait.jpg`、`portrait.png`（主理人照的舊版本/中間檔）
- `LINE_NOTE_260620_1~4.jpg`（Tony 當初用 LINE 傳的需求筆記截圖）

---

## _redirects（`linket-pages/_redirects` 根目錄）

```
/denzel-tech             /denzel-tech//index.html      200
```

> 部署順序：先上傳專案資料夾，再更新路由（跟 leon-day／龍德先上路由後上傳專案的順序相反，這個順序下用此寫法沒問題）。

---

## 比對學習優化（2026-06-23 完成）
**情境：** Tony 看完 v2.0 後評分 70 分，要求拉高到上架案例的 95+ 分水準，且要求用「比對分析學習法」——先深入分析已上架的真實案例（程式碼+實體瀏覽器畫面）找出差距，再回頭套用。

- [x] 比對分析 6 個已上架案例：`:asmrt-puli`／`:bella-spa`／`:leon-day`／`:longder-digital-tech`／`:most`／`:yichang-food`
- [x] 深度檢視 5 個 skill：`design-reference-analyzer`／`design-skill`／`design-mind`／`linket-page`／`web-animation`，找出跟丹佐新頁面衝突、過時的規則
- [x] 把學到的差距套用回丹佐 `index.html`（v2.1），含 Tony 主動發現並確認修正的 Hero 邊界 bug
- [x] skill 文件優化已套用完成，見下方紀錄

## skill 文件優化（2026-06-23 完成，獨立於丹佐頁面，影響全站規則）
- [x] 英文裝飾字規則從「只用 Playfair Display」改成「Playfair Display 或 Cormorant Garamond 視品牌調性二選一，不混用」
- [x] section padding 從固定死值統一改成彈性區間 `clamp(3rem, 7vw, 6rem) 1.4rem`
- [x] 版號統一為 v2.6（`linket-page.md`／`SKILL.md`／`README.md`／`architecture-template.md`／CLAUDE.md）
- [x] `design-reference-analyzer`／`design-mind` 開頭加警語，提醒範例配色/字體只是格式示範不是規範

## 待辦（上線前）
- [x] 確認正式 slug／網址：`denzel-tech`（`linket.app/denzel-tech`）
- [x] 部署前跑 owasp-audit + secrets-audit + SEO 複查
- [x] 製作 favicon.png + og-image.jpg
- [ ] **Tony 確認部署前自行處理**：正式 LOGO SVG 置換 → 換完後記得 favicon／og-image 要重新跑一次 Pillow 生成腳本，**且 og-image 文案要同步改成最新標語「讓場域自動化」**
- [x] 合作夥伴卡片底圖：已改用既有實績案例照片＋調暗，三圖相接 + LOGO 原色 + justify 文字
- [x] 確認 `linket.app/assets/` 共用 icon 庫真實存在：GitHub `linket-official/linket-pages/assets` 已核對
- [x] 服務案例圖已下載存進 `assets/cases/`，不再 hotlink 官網 storage
- [ ] 部署資料夾 `denzel-tech/` 拖拉上 GitHub 前最後核對一次路徑
- [ ] **新發現**：Hero/Footer 背景圖 + 3 個合作夥伴 LOGO 仍掛在 denzel-tech.com 官網，建議跟案例照片一樣下載本機化，避免官網改版後丹佐頁面跟著壞掉
