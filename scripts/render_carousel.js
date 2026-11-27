// Render _carousels/NNN.json into 1080x1350 JPEG slides.
// Usage: node scripts/render_carousel.js 012 [outDir]
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const HANDLE = process.env.IG_HANDLE || '@muyarchi_edu';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const img = p => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(ROOT, p)).toString('base64');

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
*{margin:0;box-sizing:border-box}
body{width:1080px;height:1350px;font-family:Inter,'DejaVu Sans',sans-serif;background:#0f1b33;color:#fff;overflow:hidden}
.s{position:relative;width:1080px;height:1350px;padding:150px 120px 0}
.tag{font-size:32px;font-weight:600;letter-spacing:4px;text-transform:uppercase;color:#f5a540}
h1{font-size:84px;line-height:1.08;font-weight:800;margin-top:36px}
p{font-size:52px;line-height:1.35;color:#c9d3e6;margin-top:48px}
.bar{width:120px;height:10px;background:#f5a540;margin-top:56px;border-radius:5px}
.foot{position:absolute;left:120px;right:120px;bottom:70px;display:flex;justify-content:space-between;font-size:32px;color:#8fa0bf}
.foot b{color:#f5a540;font-weight:600}
.cover{padding:0}
.cover .ph{position:absolute;inset:0;background-size:cover;background-position:center}
.cover .fade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(15,27,51,.1) 0%,rgba(15,27,51,.35) 30%,rgba(15,27,51,.92) 52%,#0f1b33 68%)}
.cover .txt{position:absolute;left:120px;right:120px;bottom:190px}
.cover h1{font-size:112px}
.cover p{margin-top:32px;font-size:46px}
.swipe{color:#f5a540;font-weight:600;font-size:40px;margin-top:40px}
.stake h1{font-size:104px;margin-top:220px}
.diag .card{margin-top:56px;background:#fff;border-radius:24px;padding:24px;height:720px;display:flex;align-items:center}
.diag .card img{width:100%;max-height:100%;object-fit:contain}
ol{list-style:none;margin-top:56px;counter-reset:n}
li{counter-increment:n;font-size:46px;line-height:1.25;padding:20px 0;border-bottom:2px solid #24345a;display:flex;gap:28px}
li:before{content:counter(n);color:#f5a540;font-weight:800;min-width:48px}
.cta{display:flex;flex-direction:column;justify-content:center;padding-top:0}
.cta h1{font-size:96px}
`;

function slideHtml(s, i, n, data) {
  const foot = `<div class="foot"><b>${esc(HANDLE)}</b><span>${i + 1}/${n}</span></div>`;
  const tag = `<div class="tag">Day ${data.post} · ${esc(data.day_label)}</div>`;
  switch (s.type) {
    case 'cover':
      return `<div class="s cover"><div class="ph" style="background-image:url('${img(data.cover_image)}')"></div><div class="fade"></div>
        <div class="txt">${tag}<h1>${esc(s.title)}</h1><p>${esc(s.sub || '')}</p><div class="swipe">Swipe →</div></div>${foot}</div>`;
    case 'stake':
      return `<div class="s stake">${tag}<h1>${esc(s.title)}</h1><p>${esc(s.body)}</p>${foot}</div>`;
    case 'diagram':
      return `<div class="s diag">${tag}<h1>${esc(s.title)}</h1><div class="card"><img src="${img(s.image)}"></div>${foot}</div>`;
    case 'recap':
      return `<div class="s">${tag}<h1>${esc(s.title)}</h1><ol>${s.items.map(x => `<li>${esc(x)}</li>`).join('')}</ol>${foot}</div>`;
    case 'cta':
      return `<div class="s cta">${tag}<h1>${esc(s.title)}</h1><div class="bar"></div><p>${esc(s.body || '')}</p><p>Follow ${esc(HANDLE)} for 100 days of fiber.</p>${foot}</div>`;
    default:
      return `<div class="s">${tag}<h1>${esc(s.title)}</h1><div class="bar"></div><p>${esc(s.body)}</p>${foot}</div>`;
  }
}

(async () => {
  const id = process.argv[2]; const out = path.resolve(process.argv[3] || path.join(ROOT, '_site_carousels', id));
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, '_carousels', `${id}.json`), 'utf8'));
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch(); const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  const files = [];
  for (const [i, s] of data.slides.entries()) {
    await page.setContent(`<!doctype html><meta charset="utf-8"><style>${CSS}</style>${slideHtml(s, i, data.slides.length, data)}`, { waitUntil: 'networkidle' });
    const f = path.join(out, `${id}-${String(i + 1).padStart(2, '0')}.jpg`);
    await page.screenshot({ path: f, type: 'jpeg', quality: 88 }); files.push(f);
  }
  fs.writeFileSync(path.join(out, 'caption.txt'), data.caption);
  await browser.close(); console.log(files.join('\n'));
})();
