/**
 * MuMu Cafe — Shared Component Loader v1.1
 * ----------------------------------------
 * 修改 _shared/ 內的 HTML 檔案，所有引入此 JS 的頁面自動同步。
 *
 * 每頁使用方式：
 *   <div id="shared-top-badge"></div>       ← body 最頂
 *   <div id="shared-event-banner"></div>    ← top-badge 之後
 *   ...頁面主體...
 *   <div id="shared-footer-cta"></div>      ← footer 內
 *   <div id="shared-linket-bar"></div>      ← body 最底
 *   <script src="/mumu-cafe/_shared/shared-loader.js"></script>  ← 最後
 */

const SHARED = '/mumu-cafe/_shared/';

const COMPONENTS = [
  { id: 'shared-top-badge',    file: 'top-badge.html'    },
  { id: 'shared-event-banner', file: 'event-banner.html' },
  { id: 'shared-footer-cta',   file: 'footer-cta.html'   },
  { id: 'shared-linket-bar',   file: 'linket-bar.html'   },
];

async function loadShared(comp) {
  const el = document.getElementById(comp.id);
  if (!el) return;
  try {
    const res = await fetch(SHARED + comp.file + '?v=' + Date.now());
    if (res.ok) el.innerHTML = await res.text();
  } catch (e) {
    console.warn('[SharedLoader] Failed:', comp.file);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  COMPONENTS.forEach(loadShared);
});
