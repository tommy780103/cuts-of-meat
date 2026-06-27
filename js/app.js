/* =========================================================================
 * 肉の部位図鑑 — アプリロジック
 * ========================================================================= */
(function () {
  'use strict';

  const CATS = window.CATEGORIES;
  const DATA = window.MEAT_DATA;

  // 栄養バーの正規化用の最大値（目安）
  const MAX = { kcal: 600, protein: 25, fat: 60 };

  const state = { cat: 'all', mode: 'home', q: '' };

  const $ = (sel, el = document) => el.querySelector(sel);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- カテゴリチップ生成 ---------- */
  function buildCatBar() {
    const bar = $('#catBar');
    const cats = [['all', { label: 'すべて', emoji: '🍽️', color: '#C0392B' }],
      ...Object.entries(CATS)];
    cats.forEach(([key, c]) => {
      const chip = el('button', 'cat-chip', `${window.CAT_ICON(key)}<span>${c.label}</span>`);
      chip.dataset.cat = key;
      if (key === state.cat) {
        chip.classList.add('active');
        chip.style.background = c.color;
      }
      chip.addEventListener('click', () => {
        state.cat = key;
        bar.querySelectorAll('.cat-chip').forEach((x) => {
          x.classList.remove('active'); x.style.background = '';
        });
        chip.classList.add('active'); chip.style.background = c.color;
        render();
      });
      bar.appendChild(chip);
    });
  }

  /* ---------- モード切替 ---------- */
  function buildModeBar() {
    document.querySelectorAll('.mode-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.mode = btn.dataset.mode;
        document.body.dataset.mode = state.mode;
        document.querySelectorAll('.mode-btn').forEach((b) =>
          b.classList.toggle('active', b === btn));
        render();
      });
    });
  }

  /* ---------- フィルタ ---------- */
  function filtered() {
    const q = state.q.trim().toLowerCase();
    return DATA.filter((d) => {
      if (state.cat !== 'all' && d.cat !== state.cat) return false;
      if (state.mode === 'yakiniku' && !d.yakiniku) return false;
      if (!q) return true;
      const hay = [d.name, d.kana, d.aliases, d.english, d.dishes, d.location]
        .join(' ').toLowerCase();
      return hay.includes(q);
    });
  }

  /* ---------- カード生成 ---------- */
  function cardEl(d) {
    const c = CATS[d.cat];
    const card = el('article', 'card');
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${d.name}（${c.label}）の詳細を開く`);
    card.style.setProperty('--c', c.color);

    // モード別の要点表示
    let facts;
    if (state.mode === 'nutrition') {
      facts = nutriBars(d);
    } else if (state.mode === 'yakiniku') {
      facts = `<div class="fact"><span class="fl">呼び名</span>${esc(d.aliases || '—')}</div>` +
              `<div class="fact"><span class="fl">英名</span>${esc(d.english)}</div>`;
    } else {
      facts = `<div class="fact"><span class="fl">料理</span>${esc(d.dishes)}</div>`;
    }

    const badges = [];
    if (d.yakiniku) badges.push('<span class="badge yakiniku">焼肉</span>');
    if (d.rarity >= 3) badges.push('<span class="badge rare">希少</span>');
    if (d.verified) badges.push('<span class="badge verified">出典確認</span>');

    card.innerHTML =
      `<div class="card-media">${window.anatomy(d, { compact: true })}</div>
       <div class="card-body">
         <div class="card-titlerow">
           <h3 class="card-name">${esc(d.name)}</h3>
           <span class="cat-pill">${esc(c.label)}</span>
         </div>
         <div class="card-kana">${esc(d.kana)}</div>
         <div class="card-loc">${window.ICON('pin')}<span>${esc(window.regionLabelOf(d))}</span></div>
         <div class="badges">${badges.join('')}</div>
         <div class="card-facts">${facts}</div>
       </div>`;

    const open = () => openSheet(d);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    return card;
  }

  function nutriBars(d) {
    const n = d.nutrition;
    const row = (cls, lbl, val, unit, max) =>
      `<div class="nutri-row">
         <span class="lbl">${lbl}</span>
         <span class="nutri-bar ${cls}"><span style="width:${Math.min(100, val / max * 100)}%"></span></span>
         <span class="val">${val}${unit}</span>
       </div>`;
    return `<div class="nutri">
      ${row('bar-kcal', 'カロリー', n.kcal, '', MAX.kcal)}
      ${row('bar-protein', 'たんぱく', n.protein, 'g', MAX.protein)}
      ${row('bar-fat', '脂質', n.fat, 'g', MAX.fat)}
    </div>`;
  }

  /* ---------- 詳細シート ---------- */
  function openSheet(d) {
    const c = CATS[d.cat];
    const ov = $('#sheetOverlay');
    const head = $('#sheetHead');
    head.style.background = `linear-gradient(135deg, ${c.color}, ${shade(c.color)})`;
    head.innerHTML =
      `<button class="sheet-close" id="sheetClose" aria-label="閉じる">${window.ICON('close')}</button>
       <span class="s-emoji">${window.CAT_ICON(d.cat)}</span>
       <div>
         <div class="s-name">${esc(d.name)}</div>
         <div class="s-kana">${esc(d.kana)}・${esc(c.label)}肉</div>
       </div>`;

    const badges = [];
    if (d.yakiniku) badges.push('<span class="badge yakiniku">焼肉で人気</span>');
    if (d.rarity >= 3) badges.push('<span class="badge rare">希少部位</span>');
    badges.push(d.verified
      ? '<span class="badge verified">一次出典で確認</span>'
      : '<span class="badge">業界一般情報</span>');

    $('#sheetBody').innerHTML =
      `<figure class="anat-hero">
         ${window.anatomy(d)}
         <figcaption>${window.ICON('pin')}<span>部位の位置：<b>${esc(window.regionLabelOf(d))}</b></span></figcaption>
       </figure>

       <div class="detail-badges">${badges.join('')}</div>

       <div class="sec"><h3>${window.ICON('pin')} 位置・見た目</h3>
         <p><b>どこ？</b> ${esc(d.location)}</p>
         <p style="margin-top:4px">${esc(d.look)}</p></div>

       <div class="sec"><h3>${window.ICON('texture')} 食感・脂</h3><p>${esc(d.texture)}</p></div>

       <div class="sec"><h3>${window.ICON('pot')} おすすめ調理法</h3>
         <div class="chip-list">${d.cooking.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
         <p style="margin-top:8px"><b>代表料理：</b>${esc(d.dishes)}</p></div>

       <div class="sec"><h3>${window.ICON('globe')} 別名・英語名</h3>
         <p><b>別名/呼び名：</b>${esc(d.aliases || '—')}</p>
         <p style="margin-top:4px"><b>英語/海外カット：</b>${esc(d.english)}</p></div>

       <div class="sec"><h3>${window.ICON('chart')} 栄養（100gあたり・目安）</h3>
         <div class="nutri-detail">
           <div class="nutri-card"><div class="n-val">${d.nutrition.kcal}</div><div class="n-unit">kcal</div><div class="n-lbl">エネルギー</div></div>
           <div class="nutri-card"><div class="n-val">${d.nutrition.protein}</div><div class="n-unit">g</div><div class="n-lbl">たんぱく質</div></div>
           <div class="nutri-card"><div class="n-val">${d.nutrition.fat}</div><div class="n-unit">g</div><div class="n-lbl">脂質</div></div>
         </div></div>

       ${d.note ? `<div class="note-box">${window.ICON('info')} ${esc(d.note)}</div>` : ''}
       <div class="source-line">出典：${esc(d.source)}</div>`;

    ov.classList.add('open');
    document.body.style.overflow = 'hidden';
    $('#sheetClose').addEventListener('click', closeSheet);
  }

  function closeSheet() {
    $('#sheetOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ---------- レンダリング ---------- */
  function render() {
    const list = filtered();
    const grid = $('#grid');
    grid.innerHTML = '';
    $('#count').textContent = `${list.length} 部位`;
    if (!list.length) {
      grid.innerHTML = '<div class="empty">該当する部位が見つかりません。<br>検索条件を変えてみてください。</div>';
      return;
    }
    const frag = document.createDocumentFragment();
    list.forEach((d) => frag.appendChild(cardEl(d)));
    grid.appendChild(frag);
  }

  /* ---------- 色ユーティリティ ---------- */
  function hexToRgb(h) {
    const m = h.replace('#', '');
    return [0, 2, 4].map((i) => parseInt(m.substr(i, 2), 16));
  }
  function tint(hex) {
    const [r, g, b] = hexToRgb(hex);
    return `rgba(${r},${g},${b},0.12)`;
  }
  function shade(hex) {
    const [r, g, b] = hexToRgb(hex).map((v) => Math.round(v * 0.72));
    return `rgb(${r},${g},${b})`;
  }
  function short(s) { return s.length > 22 ? s.slice(0, 21) + '…' : s; }

  /* ---------- 初期化 ---------- */
  function init() {
    document.body.dataset.mode = state.mode;
    buildCatBar();
    buildModeBar();
    $('#search').addEventListener('input', (e) => { state.q = e.target.value; render(); });
    $('#sheetOverlay').addEventListener('click', (e) => {
      if (e.target === $('#sheetOverlay')) closeSheet();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSheet(); });
    render();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
