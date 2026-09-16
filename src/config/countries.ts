import type { CountryCode, Language } from '../types/unified';

export interface CountryMeta {
  code: CountryCode;
  name: string;
  flag: string;
  names: Partial<Record<Language, string>>;
  district: string;
  accent: string;
}

export const COUNTRIES: CountryMeta[] = [
  {
    code: 'tw',
    flag: '🇹🇼',
    name: 'Taiwan',
    names: {
      en: 'Taiwan', 'zh-TW': '台灣', th: 'ไต้หวัน', ja: '台湾', ko: '대만', ms: 'Taiwan', fil: 'Taiwan', vi: 'Đài Loan',
    },
    district: 'Shilin Night Market',
    accent: '#FFC24B',
  },
  {
    code: 'th',
    flag: '🇹🇭',
    name: 'Thailand',
    names: {
      en: 'Thailand', 'zh-TW': '泰國', th: 'ไทย', ja: 'タイ', ko: '태국', ms: 'Thailand', fil: 'Thailand', vi: 'Thái Lan',
    },
    district: 'Yaowarat Road',
    accent: '#FF4D6D',
  },
  {
    code: 'jp',
    flag: '🇯🇵',
    name: 'Japan',
    names: {
      en: 'Japan', 'zh-TW': '日本', th: 'ญี่ปุ่น', ja: '日本', ko: '일본', ms: 'Jepun', fil: 'Japan', vi: 'Nhật Bản',
    },
    district: 'Dotonbori',
    accent: '#3DDC97',
  },
  {
    code: 'kr',
    flag: '🇰🇷',
    name: 'Korea',
    names: {
      en: 'Korea', 'zh-TW': '韓國', th: 'เกาหลี', ja: '韓国', ko: '한국', ms: 'Korea', fil: 'Korea', vi: 'Hàn Quốc',
    },
    district: 'Myeongdong Street',
    accent: '#FFC24B',
  },
  {
    code: 'my',
    flag: '🇲🇾',
    name: 'Malaysia',
    names: {
      en: 'Malaysia', 'zh-TW': '馬來西亞', th: 'มาเลเซีย', ja: 'マレーシア', ko: '말레이시아', ms: 'Malaysia', fil: 'Malaysia', vi: 'Malaysia',
    },
    district: 'Jonker Street',
    accent: '#FF4D6D',
  },
  {
    code: 'ph',
    flag: '🇵🇭',
    name: 'Philippines',
    names: {
      en: 'Philippines', 'zh-TW': '菲律賓', th: 'ฟิลิปปินส์', ja: 'フィリピン', ko: '필리핀', ms: 'Pilipinas', fil: 'Pilipinas', vi: 'Philippines',
    },
    district: 'MercatoCapitagento',
    accent: '#3DDC97',
  },
  {
    code: 'vn',
    flag: '🇻🇳',
    name: 'Vietnam',
    names: {
      en: 'Vietnam', 'zh-TW': '越南', th: 'เวียดนาม', ja: 'ベトナム', ko: '베트남', ms: 'Vietnam', fil: 'Vietnam', vi: 'Việt Nam',
    },
    district: 'Ben Thanh Market',
    accent: '#FFC24B',
  },
];

export function countryName(code: CountryCode, lang: Language): string {
  const c = COUNTRIES.find((x) => x.code === code);
  return c?.names[lang] || c?.name || code;
}
