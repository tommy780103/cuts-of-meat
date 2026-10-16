/* =========================================================================
 * 肉の部位図鑑 — ビジュアル（SVGアイコン ＆ 部位図イラスト＋位置ハイライト）
 *   window.ICON(name)        … UIライン アイコン
 *   window.CAT_ICON(cat)     … カテゴリ(動物)アイコン
 *   window.anatomy(cut, opt) … 動物イラスト＋部位の位置ハイライト（image/illustrations/*.webp）
 *   window.regionLabelOf(cut)
 * ========================================================================= */
(function () {
  'use strict';

  /* ---------- UI ラインアイコン ---------- */
  const ICONS = {
    meat:   '<path d="M5 13C5 8 9 5 14 5c5 0 6.5 4 6 8-1 4-5 6-8 6-5 0-7-2-7-6Z"/><circle cx="10.5" cy="13" r="2.2"/>',
    search: '<circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/>',
    home:   '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    flame:  '<path d="M12 3c1.5 3-1.5 4.2-1.5 7A1.8 1.8 0 0012 11c0-2 1.5-2.4 1-4 2 1.8 3 3.6 3 6a4 4 0 11-8 0c0-3.2 2.5-4.6 4-10Z"/>',
    muscle: '<line x1="4" y1="8" x2="4" y2="16"/><line x1="7" y1="6" x2="7" y2="18"/><line x1="17" y1="6" x2="17" y2="18"/><line x1="20" y1="8" x2="20" y2="16"/><line x1="7" y1="12" x2="17" y2="12"/>',
    pin:    '<path d="M12 21s-7-6-7-11a7 7 0 1114 0c0 5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
    texture:'<path d="M3 8c3-3 6-3 9 0s6 3 9 0"/><path d="M3 14c3-3 6-3 9 0s6 3 9 0"/>',
    pot:    '<path d="M5 10h14v4a5 5 0 01-5 5h-4a5 5 0 01-5-5Z"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="4" x2="9" y2="7"/><line x1="15" y1="4" x2="15" y2="7"/>',
    globe:  '<circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    chart:  '<line x1="3" y1="21" x2="21" y2="21"/><rect x="5" y="11" width="3" height="9"/><rect x="10.5" y="6" width="3" height="14"/><rect x="16" y="14" width="3" height="6"/>',
    info:   '<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none"/>',
    close:  '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>',
    plate:  '<path d="M6 3v5a2.5 2.5 0 005 0V3M8.5 11v10"/><path d="M16.5 3c-1.6 1-1.6 6 0 8v10"/>',
  };

  /* ---------- カテゴリ(動物)アイコン ---------- */
  const CAT_ICONS = {
    all: ICONS.plate,
    beef:
      '<path d="M6 8c0-2 2.5-3 6-3s6 1 6 3v3c0 4-3 7-6 7s-6-3-6-7Z"/>' +
      '<path d="M6 8C4 7 3 5 4 3.5"/><path d="M18 8c2-1 3-3 2-4.5"/>' +
      '<path d="M9 13c1-.8 5-.8 6 0v1.5c0 1-6 1-6 0Z"/>' +
      '<circle cx="11" cy="14" r="0.55" fill="currentColor" stroke="none"/>' +
      '<circle cx="13" cy="14" r="0.55" fill="currentColor" stroke="none"/>',
    pork:
      '<path d="M6 9c0-2.5 2.5-4 6-4s6 1.5 6 4v2c0 4-3 6.5-6 6.5S6 15 6 11Z"/>' +
      '<path d="M6 8L5 4l4 2.5"/><path d="M18 8l1-4-4 2.5"/>' +
      '<ellipse cx="12" cy="13" rx="3.2" ry="2.4"/>' +
      '<circle cx="11" cy="13" r="0.5" fill="currentColor" stroke="none"/>' +
      '<circle cx="13" cy="13" r="0.5" fill="currentColor" stroke="none"/>',
    chicken:
      '<circle cx="12" cy="12" r="6"/>' +
      '<path d="M9.5 6.2Q10.5 4 11.5 6Q12.5 4 13.5 6"/>' +
      '<path d="M18 12l3-1-3 2Z" fill="currentColor" stroke="none"/>' +
      '<circle cx="13.2" cy="11" r="0.8" fill="currentColor" stroke="none"/>' +
      '<path d="M14 16q.5 2-.6 2.2"/>',
    horumon:
      '<path d="M8.5 6C5.5 6 5.5 10 8.5 10S11.5 14 8.5 14 5.5 18 8.5 18"/>' +
      '<path d="M15.5 6C18.5 6 18.5 10 15.5 10S12.5 14 15.5 14 18.5 18 15.5 18"/>',
    other:
      '<path d="M7.5 9.2A2.4 2.4 0 016.4 5.6 2.4 2.4 0 019.6 4.8 3 3 0 0114.4 4.8 2.4 2.4 0 0117.6 5.6 2.4 2.4 0 0116.5 9.2Z"/>' +
      '<path d="M9 9.5h6v2.5a3 3 0 01-6 0Z"/>' +
      '<path d="M9 10.5L6 11.5"/><path d="M15 10.5l3 1"/>' +
      '<circle cx="11" cy="11" r="0.5" fill="currentColor" stroke="none"/>' +
      '<circle cx="13" cy="11" r="0.5" fill="currentColor" stroke="none"/>',
  };

  function ICON(name, cls) {
    return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }
  function CAT_ICON(cat, cls) {
    return '<svg class="ic cic ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true">' + (CAT_ICONS[cat] || CAT_ICONS.all) + '</svg>';
  }

  /* ---------- 部位 → 体の領域 ---------- */
  const REGION_MAP = {
    // 牛
    'beef-neck': 'neck', 'beef-shoulder': 'shoulder', 'beef-chuck-roll': 'chuckLoin',
    'beef-rib': 'rib', 'beef-sirloin': 'loin', 'beef-fillet': 'tenderloin',
    'beef-chateaubriand': 'tenderloin', 'beef-brisket': 'brisket', 'beef-shortplate': 'belly',
    'beef-tomosankaku': 'round', 'beef-uchimomo': 'round', 'beef-shintama': 'round',
    'beef-ranichi': 'rump', 'beef-sotomomo': 'round', 'beef-shank': 'shank',
    // ホルモン
    'horumon-harami': 'offal', 'horumon-sagari': 'offal', 'horumon-tan': 'head',
    'horumon-hatsu': 'offal', 'horumon-lever': 'offal', 'horumon-mino': 'offal',
    'horumon-hachinosu': 'offal', 'horumon-senmai': 'offal', 'horumon-giara': 'offal',
    'horumon-marucho': 'offal', 'horumon-shimacho': 'offal',
    // 豚
    'pork-kata': 'shoulder', 'pork-kata-loin': 'chuckLoin', 'pork-loin': 'loin',
    'pork-fillet': 'tenderloin', 'pork-belly': 'belly', 'pork-momo': 'round',
    'pork-toro': 'neck', 'pork-spareribs': 'belly',
    // 鶏
    'chicken-mune': 'breast', 'chicken-momo': 'thigh', 'chicken-sasami': 'tender',
    'chicken-tebasaki': 'wingTip', 'chicken-tebamoto': 'wingBase', 'chicken-seseri': 'neck',
    'chicken-sunagimo': 'offal', 'chicken-bonjiri': 'tail',
    // その他
    'other-lamb-chop': 'loin', 'other-lamb-shoulder': 'shoulder', 'other-horse-akami': 'round',
    'other-horse-tategami': 'neck', 'other-venison': 'loin', 'other-boar': 'belly',
  };

  /* ---------- 部位 → ハイライト座標（画像に対する％。x,y=中心 / w=幅％） ----------
   * 2026-10-17版の3:2キャンバス全体に対する位置。
   * 牛・豚・鶏は各イラスト専用、その他の動物は項目別に指定する。
   * ------------------------------------------------------------------------- */
  const QUAD_COORD = {
    head:       { x: 15, y: 40, w: 15 },
    neck:       { x: 24, y: 34, w: 14 },
    shoulder:   { x: 33, y: 47, w: 16 },
    chuckLoin:  { x: 35, y: 26, w: 16 },
    rib:        { x: 51, y: 28, w: 16 },
    loin:       { x: 66, y: 29, w: 17 },
    tenderloin: { x: 60, y: 49, w: 13 },
    rump:       { x: 81, y: 32, w: 15 },
    round:      { x: 82, y: 50, w: 17 },
    brisket:    { x: 30, y: 55, w: 14 },
    belly:      { x: 58, y: 56, w: 18 },
    shank:      { x: 34, y: 68, w: 11 },
    offal:      { x: 53, y: 52, w: 20 },
  };
  const PIG_COORD = {
    neck: { x: 24, y: 42, w: 15 },
    shoulder: { x: 35, y: 47, w: 16 },
    chuckLoin: { x: 38, y: 29, w: 16 },
    loin: { x: 63, y: 31, w: 18 },
    belly: { x: 57, y: 57, w: 18 },
    round: { x: 84, y: 48, w: 17 },
  };
  const BIRD_COORD = {
    breast: { x: 32, y: 54, w: 17 },
    tender: { x: 42, y: 62, w: 14 },
    thigh:  { x: 58, y: 70, w: 15 },
    wingTip: { x: 62, y: 54, w: 15 },
    wingBase: { x: 41, y: 44, w: 13 },
    neck:   { x: 27, y: 29, w: 11 },
    tail:   { x: 76, y: 45, w: 11 },
    offal:  { x: 50, y: 58, w: 17 },
  };

  /* ---------- 部位 → 動物画像 ---------- */
  const OTHER_IMG = {
    'other-lamb-chop': 'sheep', 'other-lamb-shoulder': 'sheep',
    'other-horse-akami': 'horse', 'other-horse-tategami': 'horse',
    'other-venison': 'deer', 'other-boar': 'wild-boar',
  };
  const IMG_ALT = {
    'beef-cattle': '牛', 'pig': '豚', 'chicken': '鶏',
    'sheep': '羊', 'horse': '馬', 'deer': '鹿', 'wild-boar': '猪',
  };

  function animalFor(cat) { return cat === 'chicken' ? 'bird' : 'quad'; }
  function regionOf(d) { return REGION_MAP[d.id] || (animalFor(d.cat) === 'bird' ? 'breast' : 'loin'); }
  function regionLabelOf(d) { return d.location; }

  // この外観イラストでは内部の各器官を描き分けられない。
  // 一律に腹部へ丸印を付けると位置を誤認するため、該当部位の印は省略する。
  const INTERNAL_PARTS = new Set([
    'beef-fillet', 'beef-chateaubriand', 'pork-fillet',
    'chicken-sasami', 'chicken-sunagimo',
  ]);
  function omitMarker(d) { return d.cat === 'horumon' || INTERNAL_PARTS.has(d.id); }
  function diagramNoteOf(d) {
    return omitMarker(d)
      ? '模式図：内部の部位のため丸印は省略しています。位置は文章で確認してください。'
      : '模式図：赤丸はおおよその位置で、部位の境界や正確な切り分けを示すものではありません。';
  }

  function imageFor(d) {
    if (d.cat === 'chicken') return 'chicken';
    if (d.cat === 'pork') return 'pig';
    if (d.cat === 'other') return OTHER_IMG[d.id] || 'sheep';
    return 'beef-cattle'; // 牛・ホルモン
  }
  function coordOf(d) {
    const map = d.cat === 'chicken' ? BIRD_COORD : d.cat === 'pork' ? PIG_COORD : QUAD_COORD;
    return map[regionOf(d)];
  }

  const MULTI_COORD = {
    'beef-shank': [{ x: 34, y: 68, w: 11 }, { x: 82, y: 67, w: 11 }],
    'other-horse-akami': [{ x: 81, y: 47, w: 16 }],
    'other-venison': [{ x: 59, y: 43, w: 15 }, { x: 77, y: 57, w: 15 }],
    'other-boar': [{ x: 64, y: 28, w: 16 }, { x: 59, y: 57, w: 18 }],
    'other-horse-tategami': [{ x: 25, y: 19, w: 12 }],
    'other-lamb-chop': [{ x: 58, y: 31, w: 19 }],
    'other-lamb-shoulder': [{ x: 34, y: 44, w: 17 }],
  };

  function marker(c) {
    if (!c) return '';
    const h = +(c.w * 1.5).toFixed(1); // 画像は3:2 → 円形にするため高さ％は幅の1.5倍
    return '<span class="anat-marker" style="left:' + c.x + '%;top:' + c.y +
      '%;width:' + c.w + '%;height:' + h + '%"></span>';
  }

  function anatomy(d, opt) {
    opt = opt || {};
    const img = imageFor(d);
    return '<div class="anat-fig' + (opt.compact ? ' compact' : '') + '">' +
      '<img class="anat-photo" src="image/illustrations/' + img + '.webp" width="900" height="600" ' +
      'alt="' + (IMG_ALT[img] || '') + 'の模式図（部位の境界は概略）" loading="lazy" draggable="false">' +
      (omitMarker(d) ? '' : (MULTI_COORD[d.id] || [coordOf(d)]).map(marker).join('')) +
      '</div>';
  }

  window.ICON = ICON;
  window.CAT_ICON = CAT_ICON;
  window.anatomy = anatomy;
  window.regionLabelOf = regionLabelOf;
  window.diagramNoteOf = diagramNoteOf;
})();
