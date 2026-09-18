import type { Language, CountryCode } from '../types/unified';
import { COMPLETE_PHRASE_DICTIONARY, type PhraseEntry } from './phrases/index.ts';

export interface PhraseDetails {
  meaning: string;
  breakdown?: string;
}

export const PHRASE_DICTIONARY = COMPLETE_PHRASE_DICTIONARY;
export { COMPLETE_PHRASE_DICTIONARY };
export type { PhraseEntry };

// Generic pattern rules for parsing compound ordering expressions if an unseen phrase is encountered
const ORDERING_KEYWORDS: Array<{
  pattern: RegExp;
  en: string;
  "zh-TW": string;
  ja: string;
  ko: string;
  vi: string;
  th: string;
  ms: string;
  fil: string;
}> = [
  { pattern: /大包|大份|大碗|besar/i, en: "Large Portion", "zh-TW": "大份 / 大碗", ja: "大盛り・特大サイズ", ko: "큰 사이즈 / 곱빼기", vi: "Suất lớn", th: "ขนาดใหญ่", ms: "Saiz besar", fil: "Malaking parte" },
  { pattern: /小包|小份|小碗|kecil/i, en: "Small Portion", "zh-TW": "小份 / 小碗", ja: "小サイズ", ko: "작은 사이즈", vi: "Suất nhỏ", th: "ขนาดเล็ก", ms: "Saiz kecil", fil: "Maliit na parte" },
  { pattern: /要辣|加辣|大辣|cay|phet|maanghang/i, en: "Spicy (Chili added)", "zh-TW": "要辣（加辣椒粉/辣椒醬）", ja: "辛口（唐辛子あり）", ko: "매운맛 (고춧가루/칠리 추가)", vi: "Ăn cay (Thêm ớt)", th: "รสเผ็ด (ใส่พริก)", ms: "Pedas (Tambah cili)", fil: "Maanghang (May sili)" },
  { pattern: /小辣|微辣|kurang pedas|ít cay/i, en: "Mild Spicy", "zh-TW": "微辣 / 小辣", ja: "ピリ辛（控えめ）", ko: "덜 맵게 (순한 매운맛)", vi: "Cay nhẹ / Ít cay", th: "เผ็ดน้อย", ms: "Kurang pedas", fil: "Medyo maanghang lang" },
  { pattern: /不辣|不要辣|không cay|mai phet|tak pedas/i, en: "No Spicy / Not Spicy", "zh-TW": "不要辣 / 不辣", ja: "辛味抜き（辛さなし）", ko: "안 맵게 (순한맛)", vi: "Không cay", th: "ไม่เผ็ด", ms: "Tak pedas", fil: "Hindi maanghang" },
  { pattern: /加九層塔|九層塔/i, en: "Add Flash-Fried Thai Basil", "zh-TW": "加九層塔（高溫油爆香九層塔葉）", ja: "台湾バジルの素揚げ追加", ko: "튀긴 바질 잎 추가", vi: "Thêm húng quế chiên giòn", th: "ใส่ใบโหระพาทอด", ms: "Tambah daun selasih", fil: "Dagdag pritong Thai basil" },
  { pattern: /不加香菜|不要香菜|香菜抜き|고수 빼|không cho rau thơm/i, en: "No Cilantro / Coriander", "zh-TW": "不要加香菜", ja: "パクチー（香菜）抜き", ko: "고수는 빼주세요", vi: "Không cho rau thơm/ngò", th: "ไม่ใส่ผักชี", ms: "Tanpa daun ketumbar", fil: "Walang cilantro" },
  { pattern: /香菜多一點|多香菜/i, en: "Extra Fresh Cilantro", "zh-TW": "香菜多一點", ja: "パクチー増量", ko: "고수 넉넉히", vi: "Nhiều ngò gai/rau thơm", th: "ใส่ผักชีเยอะๆ", ms: "Lebih daun ketumbar", fil: "Maraming cilantro" },
  { pattern: /加一顆滷蛋|加滷蛋|ใส่ไข่|may itlog/i, en: "Add a Soy-Braised Egg", "zh-TW": "加一顆入味滷蛋", ja: "煮卵をトッピング", ko: "조림 계란 하나 추가", vi: "Thêm 1 quả trứng kho", th: "เพิ่มไข่พะโล้", ms: "Tambah telur rebus kicap", fil: "Dagdag itlog" },
  { pattern: /內用|makan sini/i, en: "For Dine-In (Eat here)", "zh-TW": "內用（在攤位後方享用）", ja: "店内・屋台席で食べる（イートイン）", ko: "여기서 먹고 갈게요 (매장 식사)", vi: "Ăn tại quán", th: "ทานที่ร้าน", ms: "Makan sini", fil: "Dine-in po" },
  { pattern: /外帶|打包|bungkus|pabalot|mang về/i, en: "Takeaway / To Go", "zh-TW": "外帶 / 打包邊走邊吃", ja: "お持ち帰り（テイクアウト）", ko: "포장해 주세요 (테이크아웃)", vi: "Cho mang về", th: "ห่อกลับบ้าน", ms: "Bungkus bawa pulang", fil: "Takeout / Pabalot po" },
  { pattern: /微冰|少冰|kurang ais|ít đá/i, en: "Light Ice (30%)", "zh-TW": "微冰（3分冰）", ja: "氷少なめ", ko: "얼음 적게", vi: "Ít đá", th: "น้ำแข็งน้อย", ms: "Kurang ais", fil: "Kaunting yelo" },
  { pattern: /無糖|不加糖|không đường/i, en: "No Added Sugar (0%)", "zh-TW": "不加額外果糖 / 無糖", ja: "砂糖追加なし", ko: "당도 0% (무설탕)", vi: "Không đường", th: "ไม่เพิ่มน้ำตาล", ms: "Tanpa gula", fil: "Walang dagdag na asukal" },
  { pattern: /蒜味|多蒜泥|bawang putih/i, en: "Extra Fresh Garlic", "zh-TW": "加蒜片 / 蒜泥多一點", ja: "生ニンニク追加", ko: "알싸한 생마늘/다진마늘 듬뿍", vi: "Nhiều tỏi tươi thơm nồng", th: "ใส่กระเทียมเยอะๆ", ms: "Lebih bawang putih", fil: "Maraming sariwang bawang" },
  { pattern: /泡菜多一點/i, en: "Extra Pickled Cabbage", "zh-TW": "酸甜台式高麗菜泡菜多一點", ja: "台湾甘酢ピクルス多め", ko: "대만식 양배추 피클 넉넉히", vi: "Nhiều bắp cải muối chua ngọt", th: "เพิ่มผักดองกะหล่ำปลี", ms: "Lebih jeruk kubis", fil: "Maraming pickled cabbage" },
  { pattern: /不要切|不切/i, en: "Do Not Cut (Preserves Juiciness)", "zh-TW": "整片不剪切（鎖住飽滿肉汁）", ja: "切らずにそのまま（ジューシーさをキープ）", ko: "자르지 말고 통째로 (육즙 보존)", vi: "Để nguyên miếng không cắt (Giữ trọn nước thịt)", th: "ไม่ต้องหั่น (เพื่อความฉ่ำของเนื้อ)", ms: "Jangan potong (Kekalkan jus daging)", fil: "Huwag hiwain (Para manatiling makatas)" },
  { pattern: /烏醋|加醋/i, en: "Add Taiwanese Black Vinegar (Sour & Aromatic)", "zh-TW": "加烏醋（台式陳年烏醋，提鮮解膩增酸）", ja: "台湾黒酢追加（コクと酸味が引き立つ）", ko: "대만식 흑초 추가 (산미와 깊이를 더함)", vi: "Thêm giấm đen Đài Loan (Chua thơm dậy vị)", th: "เพิ่มน้ำส้มสายชูดำ (เปรี้ยวหอม)", ms: "Tambah cuka hitam Taiwan (Masam & wangi)", fil: "Dagdag black vinegar ng Taiwan (Maasim at mabango)" },
  { pattern: /加多一點|多一點|多點|多加/i, en: "Extra / Add More Please", "zh-TW": "再多加一些（請幫我多給一點）", ja: "追加・多めにしてください", ko: "더 많이 넣어주세요", vi: "Cho thêm nhiều hơn một chút", th: "ขอเพิ่มมากหน่อยครับ", ms: "Tambah lebih banyak sikit", fil: "Dagdag pa nang kaunti" },
  { pattern: /肉羹湯|肉羹/i, en: "Pork Thick Soup (Silky starch-thickened broth with pork)", "zh-TW": "肉羹湯（勾芡豬肉羹香滑湯底，台灣庶民小吃）", ja: "肉羹湯（片栗粉でとろみをつけた豚肉スープ）", ko: "로우겅탕 (전분 걸쭉한 돼지 스프)", vi: "Canh thịt heo sánh đặc kiểu Đài Loan", th: "ซุปหมูเข้มข้นสไตล์ไต้หวัน", ms: "Sup daging babi pekat bertepung gaya Taiwan", fil: "Malapot na sopas ng baboy estilo Taiwan" },
  { pattern: /趁熱吃|趁熱/i, en: "Eat While Hot (Best enjoyed fresh out the wok!)", "zh-TW": "趁熱吃（剛起鍋最好吃！）", ja: "熱々のうちに召し上がれ！", ko: "뜨거울 때 바로 드세요!", vi: "Ăn khi còn nóng hổi!", th: "กินตอนร้อนๆ เลยนะ!", ms: "Makan masa panas lagi sedap!", fil: "Kumain habang mainit pa!" },
  { pattern: /剛出爐|現烤/i, en: "Freshly Baked / Just Out of the Oven", "zh-TW": "剛出爐（現烤最香）", ja: "焼きたて（今焼き上がったところ）", ko: "방금 구워낸 것 (갓 구워서 뜨끈뜨끈)", vi: "Vừa mới ra lò (Nóng giòn thơm ngon nhất)", th: "เพิ่งออกจากเตา (กรอบหอมที่สุด)", ms: "Baru keluar daripada ketuhar (Paling rangup)", fil: "Bagong galing sa hurno (Pinaka-crispy at mainit)" },
  { pattern: /梅子粉|要梅子/i, en: "Add Plum Powder (Sweet-sour Taiwanese fruit seasoning dusted on top)", "zh-TW": "加梅子粉（台式酸甜梅粉撒在表面，開胃提味）", ja: "梅子粉追加（甘酸っぱい台湾梅パウダーをトッピング）", ko: "매실 파우더 추가 (달콤새콤한 대만식 과일 분말 토핑)", vi: "Thêm bột mận (Gia vị chua ngọt đặc trưng Đài Loan rắc lên trên)", th: "โรยผงพลัม (เครื่องปรุงผลไม้รสหวานเปรี้ยวสไตล์ไต้หวัน)", ms: "Tambah serbuk plum (Perisa buah masam-manis gaya Taiwan)", fil: "Dagdag plum powder (Matamis-maasim na fruit seasoning ng Taiwan)" },
  { pattern: /厚切雞排|厚切/i, en: "Extra-Thick Cut Chicken Steak (Juicier and meatier than the standard cut)", "zh-TW": "厚切雞排（比一般版本更厚實、更多汁的炸雞排）", ja: "厚切りチキンステーキ（通常より厚く切られ、肉汁たっぷり）", ko: "두꺼운 두께로 자른 닭 스테이크 (일반보다 두툼하고 육즙이 풍부)", vi: "Gà chiên cắt dày đặc biệt (Dày hơn, nhiều thịt và mọng nước hơn bình thường)", th: "ไก่ทอดหั่นหนาพิเศษ (หนากว่า ฉ่ำกว่า เนื้อเยอะกว่าปกติ)", ms: "Ayam goreng potong tebal istimewa (Lebih tebal, lebih berair dari biasa)", fil: "Espesyal na makapal na chicken steak (Mas makapal at mas makatas kaysa karaniwan)" }
];

// Clean phrase of quotation marks and outer whitespace
function cleanPhrase(p: string): string {
  return p ? p.replace(/^[“”"']+|[“”"']+$/g, '').trim() : '';
}

// Strip parenthetical text (e.g. Romanization or English notes in parentheses)
function stripParens(p: string): string {
  return p.replace(/\s*[\(（].*?[\)）]/g, '').trim();
}

// Strip punctuation and normalize for resilient matching
function normalizeText(p: string): string {
  return p.replace(/[!！?？,，.。、~～\s\-_:：]/g, '').toLowerCase();
}

/**
 * Returns the localized meaning and supplementary breakdown for any ordering phrase.
 */
export function getPhraseDetails(
  rawPhrase: string,
  lang: Language,
  _country?: CountryCode
): PhraseDetails {
  if (!rawPhrase) {
    return { meaning: '' };
  }

  const cleaned = cleanPhrase(rawPhrase);

  // 1. Direct exact dictionary match
  const exact = COMPLETE_PHRASE_DICTIONARY[cleaned];
  if (exact) {
    const meaning = exact.meaning[lang] || exact.meaning.en || cleaned;
    const breakdown = exact.breakdown ? (exact.breakdown[lang] || exact.breakdown.en) : undefined;
    return { meaning, breakdown };
  }

  // 2. Exact match without parenthesized transliteration
  const noParens = stripParens(cleaned);
  if (noParens && COMPLETE_PHRASE_DICTIONARY[noParens]) {
    const item = COMPLETE_PHRASE_DICTIONARY[noParens];
    const meaning = item.meaning[lang] || item.meaning.en || cleaned;
    const breakdown = item.breakdown ? (item.breakdown[lang] || item.breakdown.en) : undefined;
    return { meaning, breakdown };
  }

  // 3. Resilient normalization match (ignoring punctuation, spaces, casing, and parentheses)
  const normCleaned = normalizeText(cleaned);
  const normNoParens = normalizeText(noParens);

  for (const [key, item] of Object.entries(COMPLETE_PHRASE_DICTIONARY)) {
    const normKey = normalizeText(key);
    const normKeyNoParens = normalizeText(stripParens(key));

    if (
      normCleaned === normKey ||
      normCleaned === normKeyNoParens ||
      normNoParens === normKey ||
      (normNoParens && normKeyNoParens && normNoParens === normKeyNoParens)
    ) {
      const meaning = item.meaning[lang] || item.meaning.en || cleaned;
      const breakdown = item.breakdown ? (item.breakdown[lang] || item.breakdown.en) : undefined;
      return { meaning, breakdown };
    }
  }

  // 4. Substring containment match: check if the query contains a known dictionary phrase (prioritizing longest match)
  const matchedKeys = Object.keys(COMPLETE_PHRASE_DICTIONARY)
    .filter(key => {
      const kNoParens = stripParens(key);
      return (
        cleaned.includes(key) ||
        (kNoParens.length >= 3 && cleaned.includes(kNoParens))
      );
    })
    .sort((a, b) => b.length - a.length);

  if (matchedKeys.length > 0) {
    const item = COMPLETE_PHRASE_DICTIONARY[matchedKeys[0]];
    const meaning = item.meaning[lang] || item.meaning.en || cleaned;
    const breakdown = item.breakdown ? (item.breakdown[lang] || item.breakdown.en) : undefined;
    return { meaning, breakdown };
  }

  // 5. Dynamic smart breakdown using keywords
  const matchedBreakdowns: string[] = [];
  for (const kw of ORDERING_KEYWORDS) {
    if (kw.pattern.test(cleaned)) {
      const label = kw[lang] || kw.en;
      matchedBreakdowns.push(label);
    }
  }

  if (matchedBreakdowns.length > 0) {
    const breakdownStr = matchedBreakdowns.join(' · ');
    return {
      meaning: cleaned,
      breakdown: breakdownStr
    };
  }

  // 6. Clean fallback
  const genericMeaningMap: Record<Language, string> = {
    en: "Show this card or play the audio for the street vendor",
    "zh-TW": "向攤販出示此卡片或播放發音即可點餐",
    ja: "このカードを店主に見せるか、音声を再生して注文してください",
    ko: "이 카드를 사장님께 보여주거나 음성을 들려주세요",
    vi: "Đưa thẻ này cho chủ quán hoặc bấm phát âm thanh để gọi món",
    th: "แสดงการ์ดนี้ให้พ่อค้าดู หรือกดเล่นเสียงเพื่อสั่งอาหาร",
    ms: "Tunjukkan kad ini kepada penjual atau mainkan audio untuk memesan",
    fil: "Ipakita ang card na ito sa tindero o i-play ang boses para umorder"
  };

  return {
    meaning: genericMeaningMap[lang] || genericMeaningMap.en
  };
}
