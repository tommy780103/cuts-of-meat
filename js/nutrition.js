/*
 * 出典：文部科学省「日本食品標準成分表（八訂）増補2023年」から引用。
 * 令和8年3月27日正誤表対応版（公式Excel・食品成分DBを2026-10-17に照合）。
 * kcal = エネルギー(kcal)、protein = たんぱく質(PROT-) g、fat = 脂質(FAT-) g。
 * すべて可食部100g。原則「生」。第一・第二・第四胃のみ収載の「ゆで」を明示。
 * 牛精肉は輸入牛、豚精肉は大型種、鶏主品目は若どり・皮つきを代表条件とする。
 * 部位や処理条件の完全一致を意味しない代表値には note を付ける。
 * null は対応する公的収載値を確認できないもの。推定値やゼロではない。
 * https://www.mext.go.jp/a_menu/syokuhinseibun/mext_00001.html
 */
window.NUTRITION_REVIEWED_AT = '2026-10-17';
window.NUTRITION_DATA = {
  "beef-neck": null,
  "beef-shoulder": {
    "kcal": 160,
    "protein": 19,
    "fat": 10.6,
    "foodName": "肉類/＜畜肉類＞/うし/［輸入牛肉］/かた/脂身つき/生",
    "foodNumber": "11060",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11060_7",
    "condition": "うし・輸入牛肉・かた・脂身つき・生／可食部100g",
    "note": "輸入牛肉を代表条件として採用。和牛・乳用肥育牛・交雑牛や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "beef-chuck-roll": {
    "kcal": 221,
    "protein": 17.9,
    "fat": 17.4,
    "foodName": "肉類/＜畜肉類＞/うし/［輸入牛肉］/かたロース/脂身つき/生",
    "foodNumber": "11064",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11064_7",
    "condition": "うし・輸入牛肉・かたロース・脂身つき・生／可食部100g",
    "note": "輸入牛肉を代表条件として採用。和牛・乳用肥育牛・交雑牛や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "beef-rib": {
    "kcal": 212,
    "protein": 20.1,
    "fat": 15.4,
    "foodName": "肉類/＜畜肉類＞/うし/［輸入牛肉］/リブロース/脂身つき/生",
    "foodNumber": "11067",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11067_7",
    "condition": "うし・輸入牛肉・リブロース・脂身つき・生／可食部100g",
    "note": "輸入牛肉を代表条件として採用。和牛・乳用肥育牛・交雑牛や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "beef-sirloin": {
    "kcal": 273,
    "protein": 17.4,
    "fat": 23.7,
    "foodName": "肉類/＜畜肉類＞/うし/［輸入牛肉］/サーロイン/脂身つき/生",
    "foodNumber": "11071",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11071_7",
    "condition": "うし・輸入牛肉・サーロイン・脂身つき・生／可食部100g",
    "note": "輸入牛肉を代表条件として採用。和牛・乳用肥育牛・交雑牛や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "beef-fillet": {
    "kcal": 123,
    "protein": 20.5,
    "fat": 4.8,
    "foodName": "肉類/＜畜肉類＞/うし/［輸入牛肉］/ヒレ/赤肉/生",
    "foodNumber": "11085",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11085_7",
    "condition": "うし・輸入牛肉・ヒレ・赤肉・生／可食部100g",
    "note": "輸入牛肉を代表条件として採用。和牛・乳用肥育牛・交雑牛や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "beef-chateaubriand": null,
  "beef-brisket": {
    "kcal": 338,
    "protein": 14.4,
    "fat": 32.9,
    "foodName": "肉類/＜畜肉類＞/うし/［輸入牛肉］/ばら/脂身つき/生",
    "foodNumber": "11074",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11074_7",
    "condition": "うし・輸入牛肉・ばら・脂身つき・生／可食部100g",
    "note": "近い区分の代表値：輸入牛肉の「ばら・脂身つき・生」。かたばら単独の測定値ではなく、部位による脂の違いは反映していません。",
    "isRepresentative": true
  },
  "beef-shortplate": {
    "kcal": 338,
    "protein": 14.4,
    "fat": 32.9,
    "foodName": "肉類/＜畜肉類＞/うし/［輸入牛肉］/ばら/脂身つき/生",
    "foodNumber": "11074",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11074_7",
    "condition": "うし・輸入牛肉・ばら・脂身つき・生／可食部100g",
    "note": "代表値：輸入牛肉の「ばら・脂身つき・生」。ともばら内の細部位や脂の付き方による違いは反映していません。",
    "isRepresentative": true
  },
  "beef-tomosankaku": null,
  "beef-uchimomo": {
    "kcal": 148,
    "protein": 19.6,
    "fat": 8.6,
    "foodName": "肉類/＜畜肉類＞/うし/［輸入牛肉］/もも/脂身つき/生",
    "foodNumber": "11075",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11075_7",
    "condition": "うし・輸入牛肉・もも・脂身つき・生／可食部100g",
    "note": "近い区分の代表値：輸入牛肉の「もも・脂身つき・生」。うちもも単独と同一条件の値であることは確認できていません。",
    "isRepresentative": true
  },
  "beef-shintama": null,
  "beef-ranichi": {
    "kcal": 214,
    "protein": 18.4,
    "fat": 16.4,
    "foodName": "肉類/＜畜肉類＞/うし/［輸入牛肉］/ランプ/脂身つき/生",
    "foodNumber": "11082",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11082_7",
    "condition": "うし・輸入牛肉・ランプ・脂身つき・生／可食部100g",
    "note": "代表値：らんいちに含まれる「ランプ」の輸入牛肉・脂身つき・生。いちぼの個別値や、らんいち全体の平均値ではありません。",
    "isRepresentative": true
  },
  "beef-sotomomo": {
    "kcal": 197,
    "protein": 18.7,
    "fat": 14.3,
    "foodName": "肉類/＜畜肉類＞/うし/［輸入牛肉］/そともも/脂身つき/生",
    "foodNumber": "11079",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11079_7",
    "condition": "うし・輸入牛肉・そともも・脂身つき・生／可食部100g",
    "note": "輸入牛肉を代表条件として採用。和牛・乳用肥育牛・交雑牛や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "beef-shank": null,
  "horumon-harami": {
    "kcal": 288,
    "protein": 14.8,
    "fat": 27.3,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/横隔膜/生",
    "foodNumber": "11274",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11274_7",
    "condition": "うし・副生物・横隔膜・生／可食部100g",
    "note": "横隔膜全体の代表値。ハラミとサガリの個別値は収載されていないため、両者の差を示す値ではありません。牛の品種区分の指定はありません。",
    "isRepresentative": true
  },
  "horumon-sagari": {
    "kcal": 288,
    "protein": 14.8,
    "fat": 27.3,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/横隔膜/生",
    "foodNumber": "11274",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11274_7",
    "condition": "うし・副生物・横隔膜・生／可食部100g",
    "note": "横隔膜全体の代表値。サガリ単独の測定値ではありません。ハラミとサガリの差を示す値ではなく、牛の品種区分の指定もありません。",
    "isRepresentative": true
  },
  "horumon-tan": {
    "kcal": 318,
    "protein": 13.3,
    "fat": 31.8,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/舌/生",
    "foodNumber": "11090",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11090_7",
    "condition": "うし・副生物・舌・生／可食部100g",
    "note": "牛の舌全体の代表値。タン元・タン先の違いは分けていません。牛の品種区分の指定はありません。",
    "isRepresentative": false
  },
  "horumon-hatsu": {
    "kcal": 128,
    "protein": 16.5,
    "fat": 7.6,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/心臓/生",
    "foodNumber": "11091",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11091_7",
    "condition": "うし・副生物・心臓・生／可食部100g",
    "note": "牛の心臓・生の値。牛の品種区分の指定はありません。",
    "isRepresentative": false
  },
  "horumon-lever": {
    "kcal": 119,
    "protein": 19.6,
    "fat": 3.7,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/肝臓/生",
    "foodNumber": "11092",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11092_7",
    "condition": "うし・副生物・肝臓・生／可食部100g",
    "note": "牛の肝臓・生の分析値。生食を勧める表示ではありません。牛の品種区分の指定はありません。",
    "isRepresentative": false
  },
  "horumon-mino": {
    "kcal": 166,
    "protein": 24.5,
    "fat": 8.4,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/第一胃/ゆで",
    "foodNumber": "11094",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11094_7",
    "condition": "うし・副生物・第一胃・ゆで／可食部100g",
    "note": "例外として「ゆで」を掲載。生の値は収載されていないため、生肉100gとの単純比較はできません。成分表の別名は「みの、がつ」。",
    "isRepresentative": false
  },
  "horumon-hachinosu": {
    "kcal": 186,
    "protein": 12.4,
    "fat": 15.7,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/第二胃/ゆで",
    "foodNumber": "11095",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11095_7",
    "condition": "うし・副生物・第二胃・ゆで／可食部100g",
    "note": "例外として「ゆで」を掲載。生の値は収載されていないため、生肉100gとの単純比較はできません。成分表の別名は「はちのす」。",
    "isRepresentative": false
  },
  "horumon-senmai": {
    "kcal": 57,
    "protein": 11.7,
    "fat": 1.3,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/第三胃/生",
    "foodNumber": "11096",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11096_7",
    "condition": "うし・副生物・第三胃・生／可食部100g",
    "note": "牛の第三胃・生の分析値。下処理済み・ゆでたセンマイの値ではありません。",
    "isRepresentative": false
  },
  "horumon-giara": {
    "kcal": 308,
    "protein": 11.1,
    "fat": 30,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/第四胃/ゆで",
    "foodNumber": "11097",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11097_7",
    "condition": "うし・副生物・第四胃・ゆで／可食部100g",
    "note": "例外として「ゆで」を掲載。生の値は収載されていないため、生肉100gとの単純比較はできません。成分表の別名は「あかせんまい、ギアラ、あぼみ」。",
    "isRepresentative": false
  },
  "horumon-marucho": {
    "kcal": 268,
    "protein": 9.9,
    "fat": 26.1,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/小腸/生",
    "foodNumber": "11098",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11098_7",
    "condition": "うし・副生物・小腸・生／可食部100g",
    "note": "牛の小腸・生の代表値。商品ごとの脂の除去量や、裏返す等の下処理の違いは反映していません。",
    "isRepresentative": false
  },
  "horumon-shimacho": {
    "kcal": 150,
    "protein": 9.3,
    "fat": 13,
    "foodName": "肉類/＜畜肉類＞/うし/［副生物］/大腸/生",
    "foodNumber": "11099",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11099_7",
    "condition": "うし・副生物・大腸・生／可食部100g",
    "note": "牛の大腸・生の値。成分表の別名は「しまちょう、てっちゃん」。商品ごとの脂の除去量で変わります。",
    "isRepresentative": false
  },
  "pork-kata": {
    "kcal": 201,
    "protein": 18.5,
    "fat": 14.6,
    "foodName": "肉類/＜畜肉類＞/ぶた/［大型種肉］/かた/脂身つき/生",
    "foodNumber": "11115",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11115_7",
    "condition": "ぶた・大型種肉・かた・脂身つき・生／可食部100g",
    "note": "大型種肉を代表条件として採用。中型種や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "pork-kata-loin": {
    "kcal": 237,
    "protein": 17.1,
    "fat": 19.2,
    "foodName": "肉類/＜畜肉類＞/ぶた/［大型種肉］/かたロース/脂身つき/生",
    "foodNumber": "11119",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11119_7",
    "condition": "ぶた・大型種肉・かたロース・脂身つき・生／可食部100g",
    "note": "大型種肉を代表条件として採用。中型種や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "pork-loin": {
    "kcal": 248,
    "protein": 19.3,
    "fat": 19.2,
    "foodName": "肉類/＜畜肉類＞/ぶた/［大型種肉］/ロース/脂身つき/生",
    "foodNumber": "11123",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11123_7",
    "condition": "ぶた・大型種肉・ロース・脂身つき・生／可食部100g",
    "note": "大型種肉を代表条件として採用。中型種や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "pork-fillet": {
    "kcal": 118,
    "protein": 22.2,
    "fat": 3.7,
    "foodName": "肉類/＜畜肉類＞/ぶた/［大型種肉］/ヒレ/赤肉/生",
    "foodNumber": "11140",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11140_7",
    "condition": "ぶた・大型種肉・ヒレ・赤肉・生／可食部100g",
    "note": "大型種肉を代表条件として採用。中型種や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "pork-belly": {
    "kcal": 366,
    "protein": 14.4,
    "fat": 35.4,
    "foodName": "肉類/＜畜肉類＞/ぶた/［大型種肉］/ばら/脂身つき/生",
    "foodNumber": "11129",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11129_7",
    "condition": "ぶた・大型種肉・ばら・脂身つき・生／可食部100g",
    "note": "大型種肉を代表条件として採用。中型種や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "pork-momo": {
    "kcal": 171,
    "protein": 20.5,
    "fat": 10.2,
    "foodName": "肉類/＜畜肉類＞/ぶた/［大型種肉］/もも/脂身つき/生",
    "foodNumber": "11130",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11130_7",
    "condition": "ぶた・大型種肉・もも・脂身つき・生／可食部100g",
    "note": "大型種肉を代表条件として採用。中型種や脂身の除去条件が違う肉とは数値が異なります。",
    "isRepresentative": false
  },
  "pork-toro": {
    "kcal": 256,
    "protein": 17.4,
    "fat": 22.3,
    "foodName": "肉類/＜畜肉類＞/ぶた/［副生物］/頭部/ジョウルミート/生",
    "foodNumber": "11312",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11312_7",
    "condition": "ぶた・副生物・頭部・ジョウルミート・生／可食部100g",
    "note": "成分表のジョウルミート（頭部）を採用。公式備考の別名に「カシラニク、豚トロ」と記載があります。商品ごとの切り分けや脂の付き方で変わります。",
    "isRepresentative": false
  },
  "pork-spareribs": {
    "kcal": 366,
    "protein": 14.4,
    "fat": 35.4,
    "foodName": "肉類/＜畜肉類＞/ぶた/［大型種肉］/ばら/脂身つき/生",
    "foodNumber": "11129",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11129_7",
    "condition": "ぶた・大型種肉・ばら・脂身つき・生／可食部100g",
    "note": "近い区分の代表値：大型種の「ばら・脂身つき・生」。骨を除いた可食部100gの値で、骨付き重量100gやスペアリブ単独の測定値ではありません。",
    "isRepresentative": true
  },
  "chicken-mune": {
    "kcal": 133,
    "protein": 21.3,
    "fat": 5.9,
    "foodName": "肉類/＜鳥肉類＞/にわとり/［若どり・主品目］/むね/皮つき/生",
    "foodNumber": "11219",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11219_7",
    "condition": "にわとり・若どり・主品目・むね・皮つき・生／可食部100g",
    "note": "若どり・皮つきの値。皮なしのむね肉とは条件が異なります。",
    "isRepresentative": false
  },
  "chicken-momo": {
    "kcal": 190,
    "protein": 16.6,
    "fat": 14.2,
    "foodName": "肉類/＜鳥肉類＞/にわとり/［若どり・主品目］/もも/皮つき/生",
    "foodNumber": "11221",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11221_7",
    "condition": "にわとり・若どり・主品目・もも・皮つき・生／可食部100g",
    "note": "若どり・皮つきの値。皮なしのもも肉とは条件が異なります。",
    "isRepresentative": false
  },
  "chicken-sasami": {
    "kcal": 98,
    "protein": 23.9,
    "fat": 0.8,
    "foodName": "肉類/＜鳥肉類＞/にわとり/［若どり・副品目］/ささみ/生",
    "foodNumber": "11227",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11227_7",
    "condition": "にわとり・若どり・副品目・ささみ・生／可食部100g",
    "note": "若どりのささみ・生。皮つきのむね・ももとは部位と皮の条件が異なります。",
    "isRepresentative": false
  },
  "chicken-tebasaki": {
    "kcal": 207,
    "protein": 17.4,
    "fat": 16.2,
    "foodName": "肉類/＜鳥肉類＞/にわとり/［若どり・主品目］/手羽さき/皮つき/生",
    "foodNumber": "11285",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11285_7",
    "condition": "にわとり・若どり・主品目・手羽さき・皮つき・生／可食部100g",
    "note": "若どり・皮つき・生。骨を除いた可食部100gの値です。",
    "isRepresentative": false
  },
  "chicken-tebamoto": {
    "kcal": 175,
    "protein": 18.2,
    "fat": 12.8,
    "foodName": "肉類/＜鳥肉類＞/にわとり/［若どり・主品目］/手羽もと/皮つき/生",
    "foodNumber": "11286",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11286_7",
    "condition": "にわとり・若どり・主品目・手羽もと・皮つき・生／可食部100g",
    "note": "若どり・皮つき・生。骨を除いた可食部100gの値です。",
    "isRepresentative": false
  },
  "chicken-seseri": null,
  "chicken-sunagimo": {
    "kcal": 86,
    "protein": 18.3,
    "fat": 1.8,
    "foodName": "肉類/＜鳥肉類＞/にわとり/［副品目］/すなぎも/生",
    "foodNumber": "11233",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11233_7",
    "condition": "にわとり・副品目・すなぎも・生／可食部100g",
    "note": "鶏のすなぎも・生。成分表では若どり／親の区分が指定されていません。",
    "isRepresentative": false
  },
  "chicken-bonjiri": null,
  "other-lamb-chop": {
    "kcal": 287,
    "protein": 15.6,
    "fat": 25.9,
    "foodName": "肉類/＜畜肉類＞/めんよう/［ラム］/ロース/脂身つき/生",
    "foodNumber": "11202",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11202_7",
    "condition": "めんよう・ラム・ロース・脂身つき・生／可食部100g",
    "note": "ラムのロース・脂身つき・生を採用。骨を除いた可食部100gの値で、骨付き重量100gではありません。マトンの値とは異なります。",
    "isRepresentative": true
  },
  "other-lamb-shoulder": {
    "kcal": 214,
    "protein": 17.1,
    "fat": 17.1,
    "foodName": "肉類/＜畜肉類＞/めんよう/［ラム］/かた/脂身つき/生",
    "foodNumber": "11201",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11201_7",
    "condition": "めんよう・ラム・かた・脂身つき・生／可食部100g",
    "note": "ラムのかた・脂身つき・生。マトンやラムのかたロースの値ではありません。",
    "isRepresentative": false
  },
  "other-horse-akami": {
    "kcal": 102,
    "protein": 20.1,
    "fat": 2.5,
    "foodName": "肉類/＜畜肉類＞/うま/肉/赤肉/生",
    "foodNumber": "11109",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11109_7",
    "condition": "うま・肉・赤肉・生／可食部100g",
    "note": "馬肉の赤肉・生の代表値。細部位は区分されていません。",
    "isRepresentative": true
  },
  "other-horse-tategami": null,
  "other-venison": {
    "kcal": 119,
    "protein": 23.9,
    "fat": 4,
    "foodName": "肉類/＜畜肉類＞/しか/にほんじか/赤肉/生",
    "foodNumber": "11275",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11275_7",
    "condition": "しか・にほんじか・赤肉・生／可食部100g",
    "note": "にほんじかの赤肉・生を代表条件に採用。公式試料はえぞしか、ほんしゅうじか・きゅうしゅうじか。ロース・ももの個別値ではありません。",
    "isRepresentative": true
  },
  "other-boar": {
    "kcal": 249,
    "protein": 18.8,
    "fat": 19.8,
    "foodName": "肉類/＜畜肉類＞/いのしし/肉/脂身つき/生",
    "foodNumber": "11001",
    "sourceUrl": "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=11_11001_7",
    "condition": "いのしし・肉・脂身つき・生／可食部100g",
    "note": "いのししの肉・脂身つき・生を代表条件に採用。バラ・ロースの個別値ではありません。",
    "isRepresentative": true
  }
};
