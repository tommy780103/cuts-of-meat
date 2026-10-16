/* 肉の部位図鑑 — 2026-10-17 全48項目照合。
 * 部位・呼称・調理の根拠は各項目の references を参照。
 * 栄養値と収載条件は nutrition.js に分離。
 * 国・地域・店による切り分けの違いがあり、英名は参考対応。
 */

const CATEGORIES = {
  "beef": {
    "label": "牛",
    "emoji": "🐄",
    "color": "#C0392B"
  },
  "pork": {
    "label": "豚",
    "emoji": "🐖",
    "color": "#E8A0A8"
  },
  "chicken": {
    "label": "鶏",
    "emoji": "🐓",
    "color": "#E0A82E"
  },
  "horumon": {
    "label": "牛ホルモン",
    "emoji": "🍢",
    "color": "#8E44AD"
  },
  "other": {
    "label": "その他",
    "emoji": "🐑",
    "color": "#27867A"
  }
};

const MEAT_DATA = [
  {
    "id": "beef-neck",
    "cat": "beef",
    "name": "ネック",
    "kana": "ねっく",
    "location": "首の部分",
    "look": "よく動く部位で赤身が中心、筋・スジが多い",
    "texture": "かための肉質で、煮込みでコクや旨味を味わえる。",
    "cooking": [
      "煮込み",
      "スープ",
      "ひき肉"
    ],
    "dishes": "ビーフシチュー・カレー・挽き材",
    "aliases": "クビ",
    "english": "Neck",
    "yakiniku": false,
    "note": "首のよく動く筋肉。煮込みやスープ、ひき肉に使われる。",
    "references": [
      {
        "label": "プレコフーズ：ネック",
        "url": "https://www.precofoods.co.jp/meat-info/meat001.html"
      },
      {
        "label": "日本ハム：牛肉の部位",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/beaf/index.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      }
    ]
  },
  {
    "id": "beef-shoulder",
    "cat": "beef",
    "name": "かた（うで）",
    "kana": "かた",
    "location": "前脚の上部・肩",
    "look": "赤身主体でややスジがある",
    "texture": "よく動く部位でややかため、味は濃厚",
    "cooking": [
      "煮込み",
      "薄切り炒め",
      "ひき肉"
    ],
    "dishes": "カレー・シチュー・こま切れ料理",
    "aliases": "ウデ（ミスジはかたの一部分）",
    "english": "Shoulder clod（米国の対応名）",
    "yakiniku": false,
    "note": "いくつもの筋肉から成る部位で、ミスジもここに含まれる。薄切りや煮込みなど、筋の多さに合わせて使う。",
    "references": [
      {
        "label": "プレコフーズ：かた",
        "url": "https://www.precofoods.co.jp/meat-info/meat003.html"
      },
      {
        "label": "農林水産省：お肉丸わかり図鑑",
        "url": "https://www.maff.go.jp/j/pr/aff/2009/spe1_02.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      }
    ]
  },
  {
    "id": "beef-chuck-roll",
    "cat": "beef",
    "name": "かたロース",
    "kana": "かたろーす",
    "location": "肩から背中にかけての上部",
    "look": "赤身に細かなサシ（霜降り）が入りやすい",
    "texture": "ほどよい脂と濃い旨味。やや筋を感じる部分も",
    "cooking": [
      "すき焼き",
      "しゃぶしゃぶ",
      "焼肉",
      "ステーキ"
    ],
    "dishes": "すき焼き・焼肉・ローススライス",
    "aliases": "くらした（ザブトンはかたロースの一部分）",
    "english": "Chuck eye roll（米国の対応名）",
    "yakiniku": true,
    "note": "ザブトンはかたロースの一部。ミスジは別の部分肉である「かた」に含まれる。海外の名称はカット規格によって範囲が異なる。",
    "references": [
      {
        "label": "プレコフーズ：かたロース",
        "url": "https://www.precofoods.co.jp/meat-info/meat002.html"
      },
      {
        "label": "プレコフーズ：かた",
        "url": "https://www.precofoods.co.jp/meat-info/meat003.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      },
      {
        "label": "食品流通構造改善促進機構：海外名称対応表",
        "url": "https://ofsi.or.jp/file/task_edi/H13output2/syoku_g/syoku_g6.pdf"
      }
    ]
  },
  {
    "id": "beef-rib",
    "cat": "beef",
    "name": "リブロース",
    "kana": "りぶろーす",
    "location": "背中の中央（肩ロースとサーロインの間）",
    "look": "きめが細かく、霜降りが入りやすい部位。",
    "texture": "比較的柔らかく、脂の風味を楽しめる。",
    "cooking": [
      "ステーキ",
      "すき焼き",
      "しゃぶしゃぶ",
      "ローストビーフ"
    ],
    "dishes": "リブロースステーキ・すき焼き",
    "aliases": "リブアイロール（海外の対応名）",
    "english": "Ribeye roll（米国）/ Cube roll（豪州）",
    "yakiniku": true,
    "note": "中心のロース芯と、外側のリブキャップは別の部分。国やカット規格により名称が指す範囲は異なる。",
    "references": [
      {
        "label": "プレコフーズ：リブロース",
        "url": "https://www.precofoods.co.jp/meat-info/meat005.html"
      },
      {
        "label": "日本ハム：牛肉の部位",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/beaf/index.html"
      },
      {
        "label": "Beef Checkoff：Ribeye Cap Roll",
        "url": "https://www.beefitswhatsfordinner.com/cuts/cut/2854/ribeye-cap-roll"
      }
    ]
  },
  {
    "id": "beef-sirloin",
    "cat": "beef",
    "name": "サーロイン",
    "kana": "さーろいん",
    "location": "背中の後方・腰上部",
    "look": "背中の後方から腰にかけての、きめの細かい肉。",
    "texture": "比較的柔らかく、脂の風味がある。",
    "cooking": [
      "ステーキ",
      "ローストビーフ",
      "しゃぶしゃぶ"
    ],
    "dishes": "サーロインステーキ",
    "aliases": "—",
    "english": "Striploin（米国・豪州の対応名）",
    "yakiniku": true,
    "note": "日本のサーロインは、米国・豪州のStriploinにおおむね対応する。米国のSirloinとは区分が異なる。",
    "references": [
      {
        "label": "プレコフーズ：サーロイン",
        "url": "https://www.precofoods.co.jp/meat-info/meat006.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      },
      {
        "label": "Beef Checkoff：Tri-Tip Steak",
        "url": "https://www.beefitswhatsfordinner.com/cuts/cut/2465/tri-tip-steak"
      }
    ]
  },
  {
    "id": "beef-fillet",
    "cat": "beef",
    "name": "ヒレ",
    "kana": "ひれ",
    "location": "サーロインの内側（背骨に沿う細長い筋肉）",
    "look": "脂肪が比較的少なく、きめの細かい赤身。",
    "texture": "柔らかい肉質で、脂の風味は控えめ。",
    "cooking": [
      "ステーキ",
      "ローストビーフ",
      "カツ"
    ],
    "dishes": "ヒレステーキ・ビーフカツ・ローストビーフ",
    "aliases": "フィレ・ヘレ・テンダーロイン",
    "english": "Tenderloin / Fillet",
    "yakiniku": true,
    "note": "シャトーブリアンはヒレの中央付近の太い部分を指す。ヒレ全体の別名ではない。",
    "references": [
      {
        "label": "プレコフーズ：ヒレ",
        "url": "https://www.precofoods.co.jp/meat-info/meat007.html"
      },
      {
        "label": "日本ハム：牛肉の部位",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/beaf/index.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      }
    ]
  },
  {
    "id": "beef-chateaubriand",
    "cat": "beef",
    "name": "シャトーブリアン",
    "kana": "しゃとーぶりあん",
    "location": "ヒレの中心部",
    "look": "ヒレの中央付近の厚みがある部分。",
    "texture": "きめが細かく、柔らかい肉質。",
    "cooking": [
      "ステーキ"
    ],
    "dishes": "シャトーブリアンステーキ",
    "aliases": "ヒレの中央付近の太い部分",
    "english": "Châteaubriand",
    "yakiniku": true,
    "note": "ヒレの一部分を切り分けた呼び名。取れる重さは牛の大きさや切り分け方で異なるため、一定量とは限らない。",
    "references": [
      {
        "label": "農林水産省：お肉丸わかり図鑑",
        "url": "https://www.maff.go.jp/j/pr/aff/2009/spe1_02.html"
      },
      {
        "label": "日本ハム：牛肉の部位",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/beaf/index.html"
      },
      {
        "label": "厚生労働省：腸管出血性大腸菌による食中毒防止（令和4年9月）",
        "url": "https://www.mhlw.go.jp/web/t_doc?dataId=00tc7035&dataType=1&pageNo=1"
      }
    ]
  },
  {
    "id": "beef-brisket",
    "cat": "beef",
    "name": "かたばら（肩バラ）",
    "kana": "かたばら",
    "location": "前脚の付け根〜胸（バラの前方）",
    "look": "赤身と脂が層状、スジもある",
    "texture": "少しかためだがコク深く脂の甘みが強い",
    "cooking": [
      "煮込み",
      "焼肉"
    ],
    "dishes": "ビーフシチュー・肉じゃが・焼肉（三角バラなど）",
    "aliases": "ブリスケ（三角バラはかたばらの一部分）",
    "english": "Brisket（対応する範囲は国・規格で異なる）",
    "yakiniku": true,
    "note": "三角バラはかたばらの一部。カルビは一般にばら肉などの焼肉用の呼び名として使われ、骨付きに限らない。",
    "references": [
      {
        "label": "プレコフーズ：かたばら",
        "url": "https://www.precofoods.co.jp/meat-info/meat004.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      },
      {
        "label": "食品流通構造改善促進機構：海外名称対応表",
        "url": "https://ofsi.or.jp/file/task_edi/H13output2/syoku_g/syoku_g6.pdf"
      },
      {
        "label": "農林水産省：牛の部位図鑑ポスター",
        "url": "https://www.maff.go.jp/j/pr/aff/2009/pdf/aff2009_02_poster01.pdf"
      }
    ]
  },
  {
    "id": "beef-shortplate",
    "cat": "beef",
    "name": "ともばら",
    "kana": "ともばら",
    "location": "腹部（バラの後方）",
    "look": "赤身と脂肪が交互の層、きめは粗め",
    "texture": "脂が多くジューシー、こってり濃厚",
    "cooking": [
      "焼肉",
      "煮込み",
      "牛丼"
    ],
    "dishes": "焼肉カルビ・牛丼・肉じゃが",
    "aliases": "ばら肉の一部・カルビとして使われる",
    "english": "Short plate / Short rib / Flank（米国の対応例）",
    "yakiniku": true,
    "note": "リブロースやサーロインの下側に位置する。トモサンカクはともばらではなく、ももの「しんたま」の一部。",
    "references": [
      {
        "label": "プレコフーズ：ともばら",
        "url": "https://www.precofoods.co.jp/meat-info/meat008.html"
      },
      {
        "label": "プレコフーズ：しんたま",
        "url": "https://www.precofoods.co.jp/meat-info/meat010.html"
      },
      {
        "label": "日本ハム：牛肉の部位",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/beaf/index.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      }
    ]
  },
  {
    "id": "beef-tomosankaku",
    "cat": "beef",
    "name": "ともさんかく",
    "kana": "ともさんかく",
    "location": "後脚の付け根付近、ももの「しんたま」を構成する一部分",
    "look": "三角形で、しんたまの中ではサシが入りやすい部分。",
    "texture": "赤身の食感に脂の風味が加わる。サシの量や柔らかさは肉によって異なる。",
    "cooking": [
      "焼肉",
      "ステーキ",
      "ローストビーフ"
    ],
    "dishes": "焼肉・ステーキ・ローストビーフ",
    "aliases": "ヒウチ・トライチップ",
    "english": "Tri-tip（海外のカットとは範囲に差がある）",
    "yakiniku": true,
    "note": "日本ではしんたまの一部として扱う。米国ではBottom Sirloin側のカットに分類されるため、日本の部分肉区分と同じ位置分類にはしない。",
    "references": [
      {
        "label": "プレコフーズ：しんたま",
        "url": "https://www.precofoods.co.jp/meat-info/meat010.html"
      },
      {
        "label": "農林水産省：牛の部位図鑑ポスター",
        "url": "https://www.maff.go.jp/j/pr/aff/2009/pdf/aff2009_02_poster01.pdf"
      },
      {
        "label": "Beef Checkoff：Tri-Tip Steak",
        "url": "https://www.beefitswhatsfordinner.com/cuts/cut/2465/tri-tip-steak"
      }
    ]
  },
  {
    "id": "beef-uchimomo",
    "cat": "beef",
    "name": "うちもも",
    "kana": "うちもも",
    "location": "後脚の内側",
    "look": "赤身の大きな塊、脂肪が少ない",
    "texture": "赤身中心で脂の風味は控えめ。柔らかさは個体や切り方で異なる。",
    "cooking": [
      "ローストビーフ",
      "ステーキ",
      "焼肉",
      "煮込み"
    ],
    "dishes": "ローストビーフ・焼肉・煮込み",
    "aliases": "ウチヒラ・インサイド",
    "english": "Top round（米国）/ Topside・Inside（豪州）",
    "yakiniku": true,
    "note": "大きな赤身の部位で、表面の脂と筋を整え、用途に合わせて切り分ける。",
    "references": [
      {
        "label": "プレコフーズ：うちもも",
        "url": "https://www.precofoods.co.jp/meat-info/meat012.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      },
      {
        "label": "日本ハム：牛肉の部位",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/beaf/index.html"
      }
    ]
  },
  {
    "id": "beef-shintama",
    "cat": "beef",
    "name": "しんたま",
    "kana": "しんたま",
    "location": "後脚の前寄りで、大腿骨を囲む球状の部分肉",
    "look": "きめ細かい赤身、球状の塊",
    "texture": "赤身が中心。構成する筋肉によって柔らかさやサシの入り方が異なる。",
    "cooking": [
      "ローストビーフ",
      "焼肉",
      "ステーキ"
    ],
    "dishes": "焼肉・ローストビーフ・ビーフカツ",
    "aliases": "しんしん・カメノコ・トモサンカクなどを含む",
    "english": "Knuckle（米国）/ Thick flank（豪州）",
    "yakiniku": true,
    "note": "トモサンカクもしんたまの一部。しんしんには中央の筋があり、カメノコは比較的繊維が粗い。",
    "references": [
      {
        "label": "プレコフーズ：しんたま",
        "url": "https://www.precofoods.co.jp/meat-info/meat010.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      }
    ]
  },
  {
    "id": "beef-ranichi",
    "cat": "beef",
    "name": "らんいち",
    "kana": "らんいち",
    "location": "腰〜尻（サーロインの後方）",
    "look": "赤身主体でほどよいサシ",
    "texture": "やわらかく赤身の旨味が強い",
    "cooking": [
      "ステーキ",
      "ローストビーフ",
      "焼肉"
    ],
    "dishes": "ランプステーキ・ローストビーフ",
    "aliases": "らむいち（ランプとイチボを合わせた部分肉）",
    "english": "Top sirloin butt（米国の対応例）/ D-rump（豪州の対応例）",
    "yakiniku": true,
    "note": "ランプとイチボは、らんいちを構成する別の部分。イチボはお尻側の肉で、ランプ全体の別名でも単なる下部でもない。",
    "references": [
      {
        "label": "プレコフーズ：らむいち",
        "url": "https://www.precofoods.co.jp/meat-info/meat009.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      },
      {
        "label": "農林水産省：お肉丸わかり図鑑",
        "url": "https://www.maff.go.jp/j/pr/aff/2009/spe1_02.html"
      },
      {
        "label": "食品流通構造改善促進機構：海外名称対応表",
        "url": "https://ofsi.or.jp/file/task_edi/H13output2/syoku_g/syoku_g6.pdf"
      }
    ]
  },
  {
    "id": "beef-sotomomo",
    "cat": "beef",
    "name": "そともも",
    "kana": "そともも",
    "location": "後脚の外側",
    "look": "よく動く赤身できめは粗め",
    "texture": "ややかためで脂少なめ、あっさり",
    "cooking": [
      "薄切り炒め",
      "煮込み",
      "こま切れ"
    ],
    "dishes": "炒め物・煮込み・切り落とし",
    "aliases": "ソトヒラ（ナカニク・シキンボウ・ハバキなどに分ける）",
    "english": "Bottom round（米国）/ Silverside（豪州）",
    "yakiniku": false,
    "note": "比較的よく動く筋肉で、硬めの部分は薄切りや煮込みに使う。シキンボウやハバキはそとももを分けた部分名。",
    "references": [
      {
        "label": "プレコフーズ：そともも",
        "url": "https://www.precofoods.co.jp/meat-info/meat011.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      },
      {
        "label": "農林水産省：牛の部位図鑑ポスター",
        "url": "https://www.maff.go.jp/j/pr/aff/2009/pdf/aff2009_02_poster01.pdf"
      }
    ]
  },
  {
    "id": "beef-shank",
    "cat": "beef",
    "name": "すね",
    "kana": "すね",
    "location": "前脚・後脚の下部（脚）",
    "look": "赤身にスジ（コラーゲン）が多い",
    "texture": "筋が多く硬め。時間をかけて煮込むと柔らかくなる。",
    "cooking": [
      "煮込み",
      "スープ",
      "ひき肉"
    ],
    "dishes": "ビーフシチュー・ポトフ・カレー",
    "aliases": "まえすね（前脚）・ともすね（後脚）",
    "english": "Foreshank（前脚）/ Hindshank（後脚）",
    "yakiniku": false,
    "note": "前脚のまえすねと後脚のともすねがある。煮込みやスープに向く。",
    "references": [
      {
        "label": "プレコフーズ：まえすね・ともすね",
        "url": "https://www.precofoods.co.jp/meat-info/meat013.html"
      },
      {
        "label": "日本ハム：牛肉の部位",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/beaf/index.html"
      },
      {
        "label": "日本食肉流通センター：牛肉の部位",
        "url": "https://www.piif.jmtc.or.jp/ushibui/"
      }
    ]
  },
  {
    "id": "horumon-harami",
    "cat": "horumon",
    "name": "ハラミ",
    "kana": "はらみ",
    "location": "牛の横隔膜の肋骨側（腹側の筋肉部分）",
    "look": "赤身肉のように見えるが分類上は内臓",
    "texture": "肉厚で柔らかくジューシー、適度な脂",
    "cooking": [
      "焼肉",
      "焼く"
    ],
    "dishes": "焼肉ハラミ・ステーキ",
    "aliases": "サガリと混同されやすい",
    "english": "Outside Skirt（参考対応）",
    "yakiniku": true,
    "note": "サガリと分ける場合は、主に肋骨側の横隔膜をハラミと呼ぶ。両方をまとめてハラミと呼ぶ場合もある。内臓肉として中心まで加熱する。",
    "references": [
      {
        "label": "日本食肉消費総合センター：ハラミ（サガリとの位置区分）",
        "url": "https://www.jmi.or.jp/info/word/ha/ha_031.html"
      },
      {
        "label": "米国食肉輸出連合会：New Merchandising Guidebook 2026（ハラミ・サガリ）",
        "url": "https://www.americanmeat.jp/trd/publications/book/pdf/new-md-guide_2026.pdf"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "horumon-sagari",
    "cat": "horumon",
    "name": "サガリ",
    "kana": "さがり",
    "location": "牛の横隔膜の腰椎・背骨に近い部分",
    "look": "濃い赤身でやや細長い",
    "texture": "柔らかく濃厚な旨味",
    "cooking": [
      "焼肉",
      "焼く"
    ],
    "dishes": "焼肉サガリ",
    "aliases": "ハラミの一部として扱う店も",
    "english": "Hanging Tender / Hanger Steak（参考対応）",
    "yakiniku": true,
    "note": "ハラミと分ける場合は、背骨に近い横隔膜の部分。店によってはハラミに含めて呼ぶ。内臓肉として中心まで加熱する。",
    "references": [
      {
        "label": "日本食肉消費総合センター：ハラミ（サガリとの位置区分）",
        "url": "https://www.jmi.or.jp/info/word/ha/ha_031.html"
      },
      {
        "label": "米国食肉輸出連合会：New Merchandising Guidebook 2026（ハラミ・サガリ）",
        "url": "https://www.americanmeat.jp/trd/publications/book/pdf/new-md-guide_2026.pdf"
      },
      {
        "label": "農林水産省：牛肉・内臓の部位解説（2016年）",
        "url": "https://www.maff.go.jp/j/pr/aff/1608/spe2_03.html"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "horumon-tan",
    "cat": "horumon",
    "name": "タン",
    "kana": "たん",
    "location": "舌",
    "look": "根元は霜降り、先端はかため",
    "texture": "根元は柔らかく脂のり良、先は歯ごたえあり",
    "cooking": [
      "焼肉",
      "シチュー",
      "煮込み"
    ],
    "dishes": "牛タン焼き・タンシチュー",
    "aliases": "タン元・タン先などに分かれる（細分部位）",
    "english": "Tongue",
    "yakiniku": true,
    "note": "部位で食感が大きく違う（タン元＝柔らか）。",
    "references": [
      {
        "label": "日本食肉消費総合センター：タン",
        "url": "https://www.jmi.or.jp/info/word/ta/ta_025.html"
      },
      {
        "label": "日本畜産副産物協会：タン塊の下処理",
        "url": "https://www.jlba.or.jp/special/varietymeatrecipe/vol3/preparation_tongue.html"
      },
      {
        "label": "農林水産省：牛肉・内臓の部位解説（2016年）",
        "url": "https://www.maff.go.jp/j/pr/aff/1608/spe2_03.html"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "horumon-hatsu",
    "cat": "horumon",
    "name": "ハツ",
    "kana": "はつ",
    "location": "心臓",
    "look": "きめ細かく弾力のある赤身",
    "texture": "コリコリ・サクサクした独特の歯ごたえ、クセ少なめ",
    "cooking": [
      "焼肉",
      "串焼き"
    ],
    "dishes": "焼肉ハツ・串焼き",
    "aliases": "ココロ・ハート",
    "english": "Heart",
    "yakiniku": true,
    "note": "牛の心臓。ハツモトは主に大動脈を指す別部位で、ハツの別名ではない。",
    "references": [
      {
        "label": "日本畜産副産物協会：レバー・ハツ編",
        "url": "https://www.jlba.or.jp/special/varietymeatrecipe/pdf/vol2.pdf"
      },
      {
        "label": "山口食品：牛ホルモン部位説明（ハツとハツモト・シマ腸）",
        "url": "https://www.yamaguchi-horumon.com/menu/horumon.html"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "horumon-lever",
    "cat": "horumon",
    "name": "レバー",
    "kana": "ればー",
    "location": "肝臓",
    "look": "なめらかで濃い赤茶色",
    "texture": "独特の濃い風味がある。中心まで十分に加熱して食べる",
    "cooking": [
      "焼肉",
      "炒め物",
      "煮る"
    ],
    "dishes": "レバニラ・焼肉レバー",
    "aliases": "キモ",
    "english": "Liver",
    "yakiniku": true,
    "note": "牛の肝臓。牛レバーを生食用として販売・提供することは禁止されている。中心まで十分に加熱し、生や半生で食べない。",
    "references": [
      {
        "label": "日本畜産副産物協会：レバー・ハツ編",
        "url": "https://www.jlba.or.jp/special/varietymeatrecipe/pdf/vol2.pdf"
      },
      {
        "label": "農林水産省：牛肉・内臓の部位解説（2016年）",
        "url": "https://www.maff.go.jp/j/pr/aff/1608/spe2_03.html"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "horumon-mino",
    "cat": "horumon",
    "name": "ミノ（第1胃）",
    "kana": "みの",
    "location": "第1胃（4つの胃の最大）",
    "look": "白く分厚い、表面に独特の凹凸",
    "texture": "コリコリと厚く歯ごたえ、クセ少なめ",
    "cooking": [
      "焼肉",
      "煮込み"
    ],
    "dishes": "焼肉ミノ・ミノ煮込み",
    "aliases": "第1胃（上ミノは肉厚な部分。ガツの呼称は肉種を確認）",
    "english": "Rumen Tripe（上ミノは Mountain Chain Tripe）",
    "yakiniku": true,
    "note": "この図鑑では牛の第1胃を指す。厚い部分は上ミノと呼ばれる。『ガツ』は豚の胃にも使う呼称で、食品成分表では牛の第1胃の別名にも記載がある。肉種を確認する。",
    "references": [
      {
        "label": "日本畜産副産物協会：ミノ・ハチノス・センマイ・ギアラ・ガツ編",
        "url": "https://www.jlba.or.jp/special/varietymeatrecipe/pdf/vol4.pdf"
      },
      {
        "label": "日本畜産副産物協会：牛・豚胃の下処理",
        "url": "https://www.jlba.or.jp/special/varietymeatrecipe/vol4/preparation_tripes.html"
      },
      {
        "label": "食品等流通合理化促進機構：海外名称対応表（胃・腸の呼称）",
        "url": "https://ofsi.or.jp/file/task_edi/H13output2/syoku_g/syoku_g6.pdf"
      },
      {
        "label": "米国食肉輸出連合会：食肉規格ガイド（横隔膜・胃など）",
        "url": "https://americanmeat.jp/trd/publications/book/pdf/fsg.pdf"
      },
      {
        "label": "米国FDA：牛の胃の4区画と働き",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/how-cows-eat-grass"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "horumon-hachinosu",
    "cat": "horumon",
    "name": "ハチノス（第2胃）",
    "kana": "はちのす",
    "location": "第2胃",
    "look": "蜂の巣状の凹凸が特徴",
    "texture": "独特の歯ごたえがあり、十分に煮込むと柔らかくなる",
    "cooking": [
      "煮込み",
      "焼肉"
    ],
    "dishes": "トリッパ（イタリア煮込み）・焼肉",
    "aliases": "蜂巣胃",
    "english": "Honeycomb Tripe / Reticulum",
    "yakiniku": true,
    "note": "牛の第2胃。蜂の巣状のひだが特徴で、トマト煮込みなどに使う。",
    "references": [
      {
        "label": "日本畜産副産物協会：ミノ・ハチノス・センマイ・ギアラ・ガツ編",
        "url": "https://www.jlba.or.jp/special/varietymeatrecipe/pdf/vol4.pdf"
      },
      {
        "label": "米国食肉輸出連合会：食肉規格ガイド（横隔膜・胃など）",
        "url": "https://americanmeat.jp/trd/publications/book/pdf/fsg.pdf"
      },
      {
        "label": "食品等流通合理化促進機構：海外名称対応表（胃・腸の呼称）",
        "url": "https://ofsi.or.jp/file/task_edi/H13output2/syoku_g/syoku_g6.pdf"
      },
      {
        "label": "米国FDA：牛の胃の4区画と働き",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/how-cows-eat-grass"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "horumon-senmai",
    "cat": "horumon",
    "name": "センマイ（第3胃）",
    "kana": "せんまい",
    "location": "第3胃",
    "look": "黒〜灰色でひだ（葉）が千枚重なる",
    "texture": "細かなひだがあり、コリコリと歯切れのよい食感",
    "cooking": [
      "焼肉",
      "加熱して和え物",
      "炒め物"
    ],
    "dishes": "加熱したセンマイの和え物・焼肉",
    "aliases": "葉胃",
    "english": "Bible Tripe / Omasum",
    "yakiniku": true,
    "note": "牛の第3胃。『センマイ刺し』は料理名だが、生食を勧めるものではない。家庭では中心まで十分に加熱したものを使う。",
    "references": [
      {
        "label": "日本畜産副産物協会：ミノ・ハチノス・センマイ・ギアラ・ガツ編",
        "url": "https://www.jlba.or.jp/special/varietymeatrecipe/pdf/vol4.pdf"
      },
      {
        "label": "日本畜産副産物協会：牛・豚胃の下処理",
        "url": "https://www.jlba.or.jp/special/varietymeatrecipe/vol4/preparation_tripes.html"
      },
      {
        "label": "食品等流通合理化促進機構：海外名称対応表（胃・腸の呼称）",
        "url": "https://ofsi.or.jp/file/task_edi/H13output2/syoku_g/syoku_g6.pdf"
      },
      {
        "label": "米国FDA：牛の胃の4区画と働き",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/how-cows-eat-grass"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "horumon-giara",
    "cat": "horumon",
    "name": "ギアラ（第4胃）",
    "kana": "ぎあら",
    "location": "牛の第4胃（胃酸や消化酵素を分泌する区画）",
    "look": "赤みがかり脂が多め",
    "texture": "脂が多く濃厚、適度な歯ごたえ",
    "cooking": [
      "焼肉",
      "煮込み"
    ],
    "dishes": "焼肉ギアラ・もつ煮",
    "aliases": "アカセンマイ・アカワタ",
    "english": "Abomasum",
    "yakiniku": true,
    "note": "牛の第4胃で、赤センマイとも呼ばれる。脂の量は下処理で変わり、焼肉や煮込みに使う。",
    "references": [
      {
        "label": "日本畜産副産物協会：ミノ・ハチノス・センマイ・ギアラ・ガツ編",
        "url": "https://www.jlba.or.jp/special/varietymeatrecipe/pdf/vol4.pdf"
      },
      {
        "label": "食品等流通合理化促進機構：海外名称対応表（胃・腸の呼称）",
        "url": "https://ofsi.or.jp/file/task_edi/H13output2/syoku_g/syoku_g6.pdf"
      },
      {
        "label": "米国FDA：牛の胃の4区画と働き",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/how-cows-eat-grass"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "horumon-marucho",
    "cat": "horumon",
    "name": "マルチョウ（小腸）",
    "kana": "まるちょう",
    "location": "牛の小腸（筒状に加工したもの）",
    "look": "白く丸い、内側に脂を多く含む",
    "texture": "プルプルの脂と柔らかい食感",
    "cooking": [
      "焼肉",
      "もつ鍋",
      "煮込み"
    ],
    "dishes": "もつ鍋・焼肉（マルチョウ）",
    "aliases": "小腸の呼称：コプチャン・ヒモ・ホソ（加工状態は異なる）",
    "english": "Small Intestine",
    "yakiniku": true,
    "note": "小腸を切り開かず筒状にしたもの。裏返して脂を内側に閉じ込める加工も用いられる。呼び名や加工状態は店によって異なる。",
    "references": [
      {
        "label": "日本畜産副産物協会：ショウチョウ（小腸）商品マニュアル",
        "url": "https://www.jlba.or.jp/con06_7_1_10.html"
      },
      {
        "label": "トヨニシファーム：ショウチョウ（マルチョウの加工状態）",
        "url": "https://toyonishifarm.co.jp/prt_detail.php?c=small_intestine"
      },
      {
        "label": "スカルネ・ジャパン：牛小腸（コプチャン・マルチョウ）",
        "url": "https://sukarnejp-ec.com/items/small-intestine.php"
      },
      {
        "label": "農林水産省：牛肉・内臓の部位解説（2016年）",
        "url": "https://www.maff.go.jp/j/pr/aff/1608/spe2_03.html"
      },
      {
        "label": "食品等流通合理化促進機構：海外名称対応表（胃・腸の呼称）",
        "url": "https://ofsi.or.jp/file/task_edi/H13output2/syoku_g/syoku_g6.pdf"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "horumon-shimacho",
    "cat": "horumon",
    "name": "シマチョウ（大腸）",
    "kana": "しまちょう",
    "location": "大腸",
    "look": "太く縞模様、厚みがある",
    "texture": "小腸より歯ごたえがあり脂も濃厚",
    "cooking": [
      "焼肉",
      "もつ鍋",
      "煮込み"
    ],
    "dishes": "もつ鍋・焼肉（シマチョウ）",
    "aliases": "テッチャン・ダイテツ",
    "english": "Large Intestine",
    "yakiniku": true,
    "note": "噛み応えのある食感と濃厚な脂。もつ鍋の定番。",
    "references": [
      {
        "label": "日本畜産副産物協会：シマチョウ（大腸）商品マニュアル",
        "url": "https://www.jlba.or.jp/con06_7_1_11.html"
      },
      {
        "label": "山口食品：牛ホルモン部位説明（ハツとハツモト・シマ腸）",
        "url": "https://www.yamaguchi-horumon.com/menu/horumon.html"
      },
      {
        "label": "食品等流通合理化促進機構：海外名称対応表（胃・腸の呼称）",
        "url": "https://ofsi.or.jp/file/task_edi/H13output2/syoku_g/syoku_g6.pdf"
      },
      {
        "label": "農林水産省：牛肉・内臓の部位解説（2016年）",
        "url": "https://www.maff.go.jp/j/pr/aff/1608/spe2_03.html"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "pork-kata",
    "cat": "pork",
    "name": "肩（うで）",
    "kana": "かた",
    "location": "前脚の上部",
    "look": "赤身主体でややスジ、きめ粗め",
    "texture": "ややかためでコクがある",
    "cooking": [
      "煮込み",
      "こま切れ炒め",
      "ひき肉"
    ],
    "dishes": "カレー・豚汁・こま切れ料理",
    "aliases": "ウデ（肩）",
    "english": "Picnic Shoulder（米国カットの参考対応）",
    "yakiniku": false,
    "note": "値ごろで使いやすい。煮込みや挽き材に。",
    "references": [
      {
        "label": "日本ハム：豚肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/pork/index.html"
      },
      {
        "label": "全国食肉事業協同組合連合会：お肉の表示ハンドブック2019（部位・輸入名）",
        "url": "https://www.ajmic.or.jp/kumiai/2021pdf/1_hb2019_20210812.pdf"
      },
      {
        "label": "米国食肉輸出連合会：American Pork Merchandising Guidebook",
        "url": "https://www.americanmeat.jp/trd/publications/book/pdf/us_pork_md_for_web.pdf"
      },
      {
        "label": "厚生労働省：豚のお肉や内臓を生食するのは、やめましょう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syouhisya/121004/index.html"
      }
    ]
  },
  {
    "id": "pork-kata-loin",
    "cat": "pork",
    "name": "肩ロース",
    "kana": "かたろーす",
    "location": "首から肩にかけて",
    "look": "赤身の中に適度な脂が網状に入る",
    "texture": "繊維はやや粗めだがコクと旨味が濃い",
    "cooking": [
      "チャーシュー",
      "煮豚",
      "生姜焼き",
      "カレー"
    ],
    "dishes": "チャーシュー・生姜焼き・カレー",
    "aliases": "—",
    "english": "Shoulder Butt / Collar（輸入カットの参考対応）",
    "yakiniku": true,
    "note": "赤身と脂が入り組んだ部位。煮豚やしょうが焼きなどに向く。",
    "references": [
      {
        "label": "日本ハム：豚肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/pork/index.html"
      },
      {
        "label": "全国食肉事業協同組合連合会：お肉の表示ハンドブック2019（部位・輸入名）",
        "url": "https://www.ajmic.or.jp/kumiai/2021pdf/1_hb2019_20210812.pdf"
      },
      {
        "label": "米国食肉輸出連合会：American Pork Merchandising Guidebook",
        "url": "https://www.americanmeat.jp/trd/publications/book/pdf/us_pork_md_for_web.pdf"
      },
      {
        "label": "厚生労働省：豚のお肉や内臓を生食するのは、やめましょう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syouhisya/121004/index.html"
      }
    ]
  },
  {
    "id": "pork-loin",
    "cat": "pork",
    "name": "ロース",
    "kana": "ろーす",
    "location": "背中の中心部（肩〜腰）",
    "look": "赤身と脂身のバランスが良くきめ細かい",
    "texture": "柔らかくきめ細かい、上品な味わい",
    "cooking": [
      "とんかつ",
      "生姜焼き",
      "ソテー",
      "ステーキ"
    ],
    "dishes": "とんかつ・ポークソテー・生姜焼き",
    "aliases": "—",
    "english": "Loin",
    "yakiniku": true,
    "note": "外側の脂身に旨味。とんかつの王道部位。",
    "references": [
      {
        "label": "日本ハム：豚肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/pork/index.html"
      },
      {
        "label": "全国食肉事業協同組合連合会：お肉の表示ハンドブック2019（部位・輸入名）",
        "url": "https://www.ajmic.or.jp/kumiai/2021pdf/1_hb2019_20210812.pdf"
      },
      {
        "label": "厚生労働省：豚のお肉や内臓を生食するのは、やめましょう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syouhisya/121004/index.html"
      }
    ]
  },
  {
    "id": "pork-fillet",
    "cat": "pork",
    "name": "ヒレ",
    "kana": "ひれ",
    "location": "背骨の内側（ロースの内側）",
    "look": "脂肪がほとんどない赤身、きめ細かい",
    "texture": "きめ細かく柔らかい赤身で、脂肪が少なく淡白",
    "cooking": [
      "とんかつ",
      "ソテー",
      "ステーキ",
      "蒸し料理"
    ],
    "dishes": "ヒレかつ・ポークソテー",
    "aliases": "フィレ・ヘレ",
    "english": "Tenderloin / Fillet",
    "yakiniku": false,
    "note": "脂肪の少ない部位で、ヒレかつやソテーに向く。中心まで十分に加熱する。",
    "references": [
      {
        "label": "日本ハム：豚肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/pork/index.html"
      },
      {
        "label": "全国食肉事業協同組合連合会：お肉の表示ハンドブック2019（部位・輸入名）",
        "url": "https://www.ajmic.or.jp/kumiai/2021pdf/1_hb2019_20210812.pdf"
      },
      {
        "label": "厚生労働省：豚のお肉や内臓を生食するのは、やめましょう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syouhisya/121004/index.html"
      },
      {
        "label": "Ark館ヶ森：ヒレ・フィレ・ヘレの呼称と位置",
        "url": "https://www.arkfarm.co.jp/blog/19254/"
      }
    ]
  },
  {
    "id": "pork-belly",
    "cat": "pork",
    "name": "バラ（三枚肉）",
    "kana": "ばら",
    "location": "腹部",
    "look": "赤身と脂身が層状（三枚肉）",
    "texture": "脂が多くジューシーで柔らかい、コク深い",
    "cooking": [
      "角煮",
      "焼肉",
      "ベーコン",
      "しゃぶしゃぶ"
    ],
    "dishes": "角煮・サムギョプサル・ベーコン",
    "aliases": "三枚肉",
    "english": "Belly / Side Pork",
    "yakiniku": true,
    "note": "ベーコンの原料。脂の甘みが身上だがカロリー高め。",
    "references": [
      {
        "label": "日本ハム：豚肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/pork/index.html"
      },
      {
        "label": "全国食肉事業協同組合連合会：お肉の表示ハンドブック2019（部位・輸入名）",
        "url": "https://www.ajmic.or.jp/kumiai/2021pdf/1_hb2019_20210812.pdf"
      },
      {
        "label": "米国食肉輸出連合会：American BBQ Guidebook（豚の部位・リブ）",
        "url": "https://www.americanmeat.jp/trd/publications/book/pdf/bbq_guide_book.pdf"
      },
      {
        "label": "厚生労働省：豚のお肉や内臓を生食するのは、やめましょう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syouhisya/121004/index.html"
      }
    ]
  },
  {
    "id": "pork-momo",
    "cat": "pork",
    "name": "もも",
    "kana": "もも",
    "location": "後脚",
    "look": "脂肪が少ない大きな赤身",
    "texture": "脂が少なくあっさり。内ももは比較的きめ細かく、外ももは粗めでかたい",
    "cooking": [
      "焼き豚",
      "ロースト",
      "ソテー",
      "ハム"
    ],
    "dishes": "ローストポーク・ハム・煮豚",
    "aliases": "内もも・外ももなどに分かれる（別名ではなく細分部位）",
    "english": "Pork Leg / Fresh Ham（カット名の参考対応）",
    "yakiniku": false,
    "note": "ハムの原料。低脂肪でさっぱり。",
    "references": [
      {
        "label": "日本ハム：豚肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/pork/index.html"
      },
      {
        "label": "全国食肉事業協同組合連合会：お肉の表示ハンドブック2019（部位・輸入名）",
        "url": "https://www.ajmic.or.jp/kumiai/2021pdf/1_hb2019_20210812.pdf"
      },
      {
        "label": "米国食肉輸出連合会：American BBQ Guidebook（豚の部位・リブ）",
        "url": "https://www.americanmeat.jp/trd/publications/book/pdf/bbq_guide_book.pdf"
      },
      {
        "label": "厚生労働省：豚のお肉や内臓を生食するのは、やめましょう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syouhisya/121004/index.html"
      }
    ]
  },
  {
    "id": "pork-toro",
    "cat": "pork",
    "name": "豚トロ",
    "kana": "とんとろ",
    "location": "頬に続く首まわり（肩の前方）",
    "look": "霜降り状に脂が入った白っぽい肉",
    "texture": "コリコリと歯ごたえがあり脂が甘い",
    "cooking": [
      "焼肉",
      "炒め物"
    ],
    "dishes": "焼肉（豚トロ）・塩だれ炒め",
    "aliases": "トントロ・ネック（呼称や切り出し範囲は店により異なる）",
    "english": "Jowl Meat（参考対応。頬・首まわりのカット）",
    "yakiniku": true,
    "note": "1頭から少量しか取れない。焼肉で人気。",
    "references": [
      {
        "label": "米国食肉輸出連合会：焼肉ガイド（ジョールミート／トントロ）",
        "url": "https://www.americanmeat.jp/trd/publications/book/pdf/yakiniku2014.pdf"
      },
      {
        "label": "全国食肉事業協同組合連合会：お肉の表示ハンドブック2019（部位・輸入名）",
        "url": "https://www.ajmic.or.jp/kumiai/2021pdf/1_hb2019_20210812.pdf"
      },
      {
        "label": "厚生労働省：豚のお肉や内臓を生食するのは、やめましょう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syouhisya/121004/index.html"
      }
    ]
  },
  {
    "id": "pork-spareribs",
    "cat": "pork",
    "name": "スペアリブ",
    "kana": "すぺありぶ",
    "location": "バラの骨付き部分（あばら）",
    "look": "骨の周りに赤身と脂",
    "texture": "骨際の肉は旨味が濃くジューシー",
    "cooking": [
      "グリル",
      "煮込み",
      "BBQ"
    ],
    "dishes": "BBQスペアリブ・煮込み",
    "aliases": "骨付きバラ",
    "english": "Spare Ribs",
    "yakiniku": false,
    "note": "バラ側の骨付き肉。ロース側のバックリブとは区別される。煮込みやグリルに向き、骨の周囲まで十分に加熱する。",
    "references": [
      {
        "label": "日本ハム：豚肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/pork/index.html"
      },
      {
        "label": "米国食肉輸出連合会：American BBQ Guidebook（豚の部位・リブ）",
        "url": "https://www.americanmeat.jp/trd/publications/book/pdf/bbq_guide_book.pdf"
      },
      {
        "label": "厚生労働省：豚のお肉や内臓を生食するのは、やめましょう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syouhisya/121004/index.html"
      }
    ]
  },
  {
    "id": "chicken-mune",
    "cat": "chicken",
    "name": "ムネ",
    "kana": "むね",
    "location": "胸部",
    "look": "淡いピンクの大きな赤身、脂肪が少ない",
    "texture": "やわらかく味はあっさり、加熱でパサつきやすい",
    "cooking": [
      "焼き物",
      "揚げ物",
      "蒸し物",
      "加熱してサラダ"
    ],
    "dishes": "チキンソテー・蒸し鶏・サラダチキン",
    "aliases": "—",
    "english": "Breast",
    "yakiniku": false,
    "note": "あっさりした胸肉。サラダにも、中心まで十分に加熱したものを使う。",
    "references": [
      {
        "label": "日本ハム：鶏肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/poultry/"
      },
      {
        "label": "農林水産省：食鶏取引規格（手羽・もも・深胸筋・筋胃・小肉）",
        "url": "https://www.maff.go.jp/j/press/seisan/c_shokuniku/pdf/110107-01.pdf"
      },
      {
        "label": "USDA：Trade Descriptions for Poultry（英語の部位範囲）",
        "url": "https://www.ams.usda.gov/sites/default/files/media/Chicken_Trade_Descriptions.pdf"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "chicken-momo",
    "cat": "chicken",
    "name": "モモ",
    "kana": "もも",
    "location": "後脚の肉（上ももから下もも・すね側にかけて）",
    "look": "やや濃い色、適度な脂と筋",
    "texture": "筋肉質でややかたく、旨味とコクが強い",
    "cooking": [
      "からあげ",
      "照り焼き",
      "煮込み",
      "ソテー"
    ],
    "dishes": "からあげ・照り焼き・チキン南蛮",
    "aliases": "骨付きもも（骨が付いた商品形態）",
    "english": "Leg Meat（参考対応。Thighは上もも部分）",
    "yakiniku": false,
    "note": "からあげや照り焼きに使われる。骨付きは煮込みにも。中心まで十分に加熱する。",
    "references": [
      {
        "label": "日本ハム：鶏肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/poultry/"
      },
      {
        "label": "農林水産省：食鶏取引規格（手羽・もも・深胸筋・筋胃・小肉）",
        "url": "https://www.maff.go.jp/j/press/seisan/c_shokuniku/pdf/110107-01.pdf"
      },
      {
        "label": "カナダ食品検査庁：Poultry Meat cuts manual",
        "url": "https://inspection.canada.ca/en/food-labels/labelling/industry/meat-and-poultry-products/meat-cuts/poultry"
      },
      {
        "label": "USDA：Trade Descriptions for Poultry（英語の部位範囲）",
        "url": "https://www.ams.usda.gov/sites/default/files/media/Chicken_Trade_Descriptions.pdf"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "chicken-sasami",
    "cat": "chicken",
    "name": "ササミ",
    "kana": "ささみ",
    "location": "むね肉の内側にある深胸筋",
    "look": "笹の葉に似た細長い赤身で、中心に腱がある",
    "texture": "やわらかく脂肪が少なく淡白",
    "cooking": [
      "蒸し料理",
      "加熱してサラダ",
      "加熱して和え物",
      "フライ"
    ],
    "dishes": "バンバンジー・ササミフライ・和え物",
    "aliases": "笹身",
    "english": "Chicken Tenderloin（参考対応）",
    "yakiniku": false,
    "note": "むね肉の内側の筋肉。柔らかさを表す際にヒレにたとえられるが、牛・豚のヒレと同じ部位名ではない。中心まで加熱する。",
    "references": [
      {
        "label": "日本ハム：鶏肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/poultry/"
      },
      {
        "label": "農林水産省：食鶏取引規格（手羽・もも・深胸筋・筋胃・小肉）",
        "url": "https://www.maff.go.jp/j/press/seisan/c_shokuniku/pdf/110107-01.pdf"
      },
      {
        "label": "USDA：Trade Descriptions for Poultry（英語の部位範囲）",
        "url": "https://www.ams.usda.gov/sites/default/files/media/Chicken_Trade_Descriptions.pdf"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "chicken-tebasaki",
    "cat": "chicken",
    "name": "手羽先",
    "kana": "てばさき",
    "location": "翼のうち手羽元を除いた部分（手羽中と先端を含む）",
    "look": "皮と骨が多く肉は少なめ",
    "texture": "脂肪・ゼラチン質が多く皮がパリッと",
    "cooking": [
      "揚げ物",
      "グリル",
      "スープ"
    ],
    "dishes": "手羽先唐揚げ・名古屋風",
    "aliases": "—",
    "english": "2nd & 3rd Segment Wing（参考対応。Wing Flat + Wing Tip）",
    "yakiniku": false,
    "note": "手羽先から先端を除いたものが手羽中。Wing Tipだけでは先端部分のみを指す。揚げ物・焼き物・スープに向く。",
    "references": [
      {
        "label": "農林水産省：食鶏取引規格（手羽・もも・深胸筋・筋胃・小肉）",
        "url": "https://www.maff.go.jp/j/press/seisan/c_shokuniku/pdf/110107-01.pdf"
      },
      {
        "label": "USDA：Trade Descriptions for Poultry（英語の部位範囲）",
        "url": "https://www.ams.usda.gov/sites/default/files/media/Chicken_Trade_Descriptions.pdf"
      },
      {
        "label": "日本ハム：鶏肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/poultry/"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "chicken-tebamoto",
    "cat": "chicken",
    "name": "手羽元",
    "kana": "てばもと",
    "location": "翼の付け根側",
    "look": "太く肉付きが良い、骨付き",
    "texture": "ジューシーで食べ応えがある",
    "cooking": [
      "煮込み",
      "揚げ物",
      "グリル"
    ],
    "dishes": "手羽元のさっぱり煮・グリル",
    "aliases": "ウィングスティック",
    "english": "Wing Drumette",
    "yakiniku": false,
    "note": "翼の上腕部分。手羽先側のうち、2本の骨がある部分を手羽中という。骨の周囲まで十分に加熱する。",
    "references": [
      {
        "label": "農林水産省：食鶏取引規格（手羽・もも・深胸筋・筋胃・小肉）",
        "url": "https://www.maff.go.jp/j/press/seisan/c_shokuniku/pdf/110107-01.pdf"
      },
      {
        "label": "USDA：Trade Descriptions for Poultry（英語の部位範囲）",
        "url": "https://www.ams.usda.gov/sites/default/files/media/Chicken_Trade_Descriptions.pdf"
      },
      {
        "label": "日本ハム：鶏肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/poultry/"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "chicken-seseri",
    "cat": "chicken",
    "name": "せせり（首）",
    "kana": "せせり",
    "location": "首",
    "look": "細かい筋肉が集まった小さめの肉",
    "texture": "よく動く部位で歯ごたえと旨味が強い",
    "cooking": [
      "串焼き",
      "焼肉",
      "炒め物"
    ],
    "dishes": "焼き鳥（せせり）・塩焼き",
    "aliases": "首肉・ネック・首小肉",
    "english": "Neck Meat（骨を除いた首肉）",
    "yakiniku": true,
    "note": "首の周りから取る肉。『ソリレス』はももの付け根側の別部位で、せせりの別名ではない。",
    "references": [
      {
        "label": "農林水産省：鶏肉の焼き鳥部位解説",
        "url": "https://www.maff.go.jp/j/pr/aff/1612/spe2_01.html"
      },
      {
        "label": "農林水産省：食鶏取引規格（手羽・もも・深胸筋・筋胃・小肉）",
        "url": "https://www.maff.go.jp/j/press/seisan/c_shokuniku/pdf/110107-01.pdf"
      },
      {
        "label": "日本焼き鳥協会：焼き鳥の種類（せせり・そり・もも）",
        "url": "https://alex-co.jp/free/syurui"
      },
      {
        "label": "四万十鶏ふぁーむ：ソリレス（生産者の部位説明）",
        "url": "https://shimantodori.com/products/%E3%82%BD%E3%83%AA%E3%83%AC%E3%82%B9"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "chicken-sunagimo",
    "cat": "chicken",
    "name": "砂肝",
    "kana": "すなぎも",
    "location": "胃（筋胃）",
    "look": "赤褐色で筋肉質",
    "texture": "コリコリと独特の歯ごたえ、脂が少ない",
    "cooking": [
      "串焼き",
      "炒め物",
      "アヒージョ"
    ],
    "dishes": "焼き鳥（砂肝）・砂肝アヒージョ",
    "aliases": "ズリ・スナズリ",
    "english": "Gizzard",
    "yakiniku": true,
    "note": "低カロリー高タンパク。コリコリ食感が魅力。",
    "references": [
      {
        "label": "農林水産省：食鶏取引規格（手羽・もも・深胸筋・筋胃・小肉）",
        "url": "https://www.maff.go.jp/j/press/seisan/c_shokuniku/pdf/110107-01.pdf"
      },
      {
        "label": "農林水産省：鶏肉の焼き鳥部位解説",
        "url": "https://www.maff.go.jp/j/pr/aff/1612/spe2_01.html"
      },
      {
        "label": "日本ハム：鶏肉の部位（特徴・適した調理）",
        "url": "https://www.nipponham.co.jp/recipes/meat/knowledge/poultry/"
      },
      {
        "label": "USDA：Trade Descriptions for Poultry（英語の部位範囲）",
        "url": "https://www.ams.usda.gov/sites/default/files/media/Chicken_Trade_Descriptions.pdf"
      },
      {
        "label": "国立病院機構 静岡てんかん・神経医療センター：砂肝（砂ずり）のアヒージョ",
        "url": "https://shizuokamind.hosp.go.jp/services/nutrition-administration/recipe/side/05.pdf"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      }
    ]
  },
  {
    "id": "chicken-bonjiri",
    "cat": "chicken",
    "name": "ぼんじり",
    "kana": "ぼんじり",
    "location": "尾骨の周囲の肉",
    "look": "小さく脂がのった三角形",
    "texture": "脂が多くジューシーで柔らかい",
    "cooking": [
      "串焼き",
      "焼肉"
    ],
    "dishes": "焼き鳥（ぼんじり）",
    "aliases": "テール・さんかく",
    "english": "Chicken Tail（参考対応）",
    "yakiniku": true,
    "note": "尾の周囲の脂が多い肉。脂の旨味と弾力があり、焼き鳥に使われる。",
    "references": [
      {
        "label": "農林水産省：鶏肉の焼き鳥部位解説",
        "url": "https://www.maff.go.jp/j/pr/aff/1612/spe2_01.html"
      },
      {
        "label": "USDA：Trade Descriptions for Poultry（英語の部位範囲）",
        "url": "https://www.ams.usda.gov/sites/default/files/media/Chicken_Trade_Descriptions.pdf"
      },
      {
        "label": "日本焼き鳥協会：焼き鳥の種類（せせり・そり・もも）",
        "url": "https://alex-co.jp/free/syurui"
      },
      {
        "label": "厚生労働省：お肉はよく焼いて食べよう",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049964.html"
      },
      {
        "label": "かしわの川中：淡海地鶏ぼんじり（三角）",
        "url": "https://www.jidori.net/product/%E6%B7%A1%E6%B5%B7%E5%9C%B0%E9%B6%8F-%E3%81%BC%E3%82%93%E3%81%98%E3%82%8A%EF%BC%88%E4%B8%89%E8%A7%92%EF%BC%89/"
      }
    ]
  },
  {
    "id": "other-lamb-chop",
    "cat": "other",
    "name": "ラムチョップ（仔羊ロース）",
    "kana": "らむちょっぷ",
    "location": "仔羊の背中の骨付き肉。ここでは肋骨付きのリブチョップを指す。",
    "look": "肋骨に背中の肉が付いた切り身。表面の脂の残し方は商品で異なる。",
    "texture": "比較的柔らかく、羊肉特有の風味がある。",
    "cooking": [
      "グリル",
      "ロースト",
      "ステーキ"
    ],
    "dishes": "ラムチョップグリル",
    "aliases": "リブチョップ（連なった塊はラムラック）",
    "english": "Lamb rib chop / Rack of lamb（切り分け前）",
    "yakiniku": true,
    "note": "ラムは一般に若い羊の肉。年齢・歯による定義は国の規格で異なり、必ず1歳未満とは限らない。チョップには肩や腰から切り出す種類もある。",
    "references": [
      {
        "label": "ANZCO Foods：Lambの部位と調理",
        "url": "https://www.anzcofoods.com/brands-and-products/lamb/anzco-foods-lamb/"
      },
      {
        "label": "American Lamb Board：Cuts of Lamb",
        "url": "https://americanlamb.com/cuts-of-lamb/"
      },
      {
        "label": "Meat & Livestock Australia：ラムの定義（2019年改定）",
        "url": "https://elearning.mla.com.au/lessons/selecting-the-most-profitable-product-to-produce/"
      },
      {
        "label": "日本食肉消費総合センター：ラム",
        "url": "https://www.jmi.or.jp/info/word/ra/ra_009.html"
      }
    ]
  },
  {
    "id": "other-lamb-shoulder",
    "cat": "other",
    "name": "ラムショルダー（肩）",
    "kana": "らむしょるだー",
    "location": "仔羊の肩",
    "look": "肩周りの赤身に脂と筋が混じる。",
    "texture": "筋があるため塊はかためで、時間をかける加熱に向く。",
    "cooking": [
      "ジンギスカン",
      "煮込み",
      "ロースト"
    ],
    "dishes": "ジンギスカン・ラムシチュー",
    "aliases": "ショルダー",
    "english": "Lamb Shoulder",
    "yakiniku": true,
    "note": "肩の肉。塊は煮込みやロースト、薄切りは焼肉などに使う。羊の年齢や部位の切り分け方で食感は変わる。",
    "references": [
      {
        "label": "ANZCO Foods：Lambの部位と調理",
        "url": "https://www.anzcofoods.com/brands-and-products/lamb/anzco-foods-lamb/"
      },
      {
        "label": "American Lamb Board：Cuts of Lamb",
        "url": "https://americanlamb.com/cuts-of-lamb/"
      },
      {
        "label": "米国食肉輸出連合会：American Lamb Guidebook",
        "url": "https://www.americanmeat.jp/trd/publications/book/pdf/US_LambGuidebook2019_cuts_for_japan.pdf"
      }
    ]
  },
  {
    "id": "other-horse-akami",
    "cat": "other",
    "name": "馬肉（赤身）",
    "kana": "ばにく",
    "location": "馬のモモなどの、脂が比較的少ない肉",
    "look": "赤色の肉で、脂の量やきめは使用部位によって異なる。",
    "texture": "脂の風味は控えめ。柔らかさや歯ごたえは部位によって異なる。",
    "cooking": [
      "焼く",
      "煮込み",
      "刺身（生食用として管理された製品のみ）"
    ],
    "dishes": "馬肉の煮込み・馬刺し（生食用製品）",
    "aliases": "桜肉",
    "english": "Horse meat (lean)（説明訳）",
    "yakiniku": false,
    "note": "加熱用の馬肉を生で食べない。生食用でも食中毒リスクは残るため、子ども・高齢者など抵抗力が弱い人は生食を避ける。",
    "references": [
      {
        "label": "菅乃屋（千興ファーム）：赤身・モモの商品説明",
        "url": "https://www.suganoya.com/event/mother2026/"
      },
      {
        "label": "菅乃屋（千興ファーム）：馬肉各部位の商品説明",
        "url": "https://www.suganoya.com/c/all"
      },
      {
        "label": "農林水産省：馬肉蕎麦（熊本県）",
        "url": "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/baniku_soba_kumamoto.html"
      },
      {
        "label": "農林水産省：馬肉の寄生虫による食中毒Q&A",
        "url": "https://www.maff.go.jp/j/syouan/seisaku/foodpoisoning/f_encyclopedia/s_fayeri_qa.html"
      },
      {
        "label": "厚生労働省：食肉や内臓の生食のリスク",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000050019.html"
      },
      {
        "label": "厚生労働省：腸管出血性大腸菌による食中毒防止（令和4年9月）",
        "url": "https://www.mhlw.go.jp/web/t_doc?dataId=00tc7035&dataType=1&pageNo=1"
      }
    ]
  },
  {
    "id": "other-horse-tategami",
    "cat": "other",
    "name": "たてがみ（コーネ）",
    "kana": "たてがみ",
    "location": "馬の首筋、たてがみの下にある皮下脂肪",
    "look": "白い脂肪の部位。",
    "texture": "コリッとした食感と脂の甘みがある。",
    "cooking": [
      "刺身（生食用として管理された製品のみ）"
    ],
    "dishes": "たてがみの馬刺し（生食用製品）",
    "aliases": "コウネ・コーネ",
    "english": "Horse neck fat（説明訳）",
    "yakiniku": false,
    "note": "たてがみの毛ではなく、その下の脂肪。生食用製品の保存・解凍表示に従い、子ども・高齢者など抵抗力が弱い人は生食を避ける。",
    "references": [
      {
        "label": "菅乃屋（千興ファーム）：たてがみの部位と特徴",
        "url": "https://www.suganoya.com/blog/parts/tategami-2.html"
      },
      {
        "label": "菅乃屋（千興ファーム）：馬肉各部位の商品説明",
        "url": "https://www.suganoya.com/c/all"
      },
      {
        "label": "農林水産省：馬肉の寄生虫による食中毒Q&A",
        "url": "https://www.maff.go.jp/j/syouan/seisaku/foodpoisoning/f_encyclopedia/s_fayeri_qa.html"
      },
      {
        "label": "厚生労働省：食肉や内臓の生食のリスク",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000050019.html"
      },
      {
        "label": "厚生労働省：腸管出血性大腸菌による食中毒防止（令和4年9月）",
        "url": "https://www.mhlw.go.jp/web/t_doc?dataId=00tc7035&dataType=1&pageNo=1"
      }
    ]
  },
  {
    "id": "other-venison",
    "cat": "other",
    "name": "鹿肉（ロース・モモ）",
    "kana": "しかにく",
    "location": "鹿の背中のロースと、後脚のモモ",
    "look": "赤身が主体。脂の量や色は個体・季節・部位で異なる。",
    "texture": "ロースとモモでは筋の量や歯ごたえが異なる。",
    "cooking": [
      "ステーキ",
      "ロースト",
      "煮込み"
    ],
    "dishes": "鹿肉ステーキ・ジビエ煮込み",
    "aliases": "シカ肉",
    "english": "Venison (loin / leg)",
    "yakiniku": false,
    "note": "生や加熱不足で食べない。中心部を75℃で1分間以上、または同等以上の条件で加熱する。新鮮でも食中毒の危険はなくならない。",
    "references": [
      {
        "label": "国産ジビエ認証機構：シカ肉の部位と調理",
        "url": "https://www.cert-gibier.or.jp/gibier/venison/"
      },
      {
        "label": "日本ジビエ振興協会：ジビエハンドブック第2版",
        "url": "https://www.gibier.or.jp/wp-content/themes/gibier.or.jp/images/contents/handbook/gibierhandbook_2nd.pdf"
      },
      {
        "label": "厚生労働省：ジビエの加熱条件",
        "url": "https://www.mhlw.go.jp/stf/houdou_kouhou/kouhou_shuppan/magazine/202411_007.html"
      }
    ]
  },
  {
    "id": "other-boar",
    "cat": "other",
    "name": "猪肉（バラ・ロース）",
    "kana": "ししにく",
    "location": "猪の腹側のバラと、背中のロース",
    "look": "赤身に白い脂が付く。脂の厚みは季節や個体で異なる。",
    "texture": "脂の風味が特徴。部位や切り方、調理法で歯ごたえが異なる。",
    "cooking": [
      "ぼたん鍋",
      "煮込み",
      "焼く"
    ],
    "dishes": "ぼたん鍋・猪肉の味噌煮込み",
    "aliases": "ぼたん肉",
    "english": "Wild boar meat (belly / loin)",
    "yakiniku": false,
    "note": "生や加熱不足で食べない。中心部を75℃で1分間以上、または同等以上の条件で加熱する。ぼたん鍋は猪肉を使う郷土料理。",
    "references": [
      {
        "label": "国産ジビエ認証機構：イノシシ肉の部位と調理",
        "url": "https://www.cert-gibier.or.jp/gibier/boar/"
      },
      {
        "label": "日本ジビエ振興協会：ジビエハンドブック第2版",
        "url": "https://www.gibier.or.jp/wp-content/themes/gibier.or.jp/images/contents/handbook/gibierhandbook_2nd.pdf"
      },
      {
        "label": "農林水産省：ぼたん鍋（兵庫県）",
        "url": "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/40_3_hyogo.html"
      },
      {
        "label": "厚生労働省：ジビエの加熱条件",
        "url": "https://www.mhlw.go.jp/stf/houdou_kouhou/kouhou_shuppan/magazine/202411_007.html"
      }
    ]
  }
];

window.CATEGORIES = CATEGORIES;
window.MEAT_DATA = MEAT_DATA;
