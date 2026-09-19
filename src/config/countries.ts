import type { CountryCode, Language } from '../types/unified';

export interface CountryTheme {
  primary: string;
  secondary: string;
  gradient: string;
  pageBg: string;
  cardHeaderBg: string;
  badgeBg: string;
  badgeText: string;
}

export interface CountryMeta {
  code: CountryCode;
  name: string;
  flag: string;
  names: Partial<Record<Language, string>>;
  district: string;
  accent: string;
  appIcon: string;
  appName: string;
  theme: CountryTheme;
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
    accent: '#E63946',
    appIcon: '/app-icons/taiwan.png',
    appName: 'TaiwanBite',
    theme: {
      primary: '#E63946',
      secondary: '#FF9F1C',
      gradient: 'linear-gradient(135deg, #991B1B 0%, #DC2626 40%, #EA580C 100%)',
      pageBg: '#FAF7F2',
      cardHeaderBg: 'linear-gradient(135deg, #991B1B 0%, #DC2626 45%, #EA580C 100%)',
      badgeBg: 'bg-red-500',
      badgeText: 'text-white',
    },
  },
  {
    code: 'th',
    flag: '🇹🇭',
    name: 'Thailand',
    names: {
      en: 'Thailand', 'zh-TW': '泰國', th: 'ไทย', ja: 'タイ', ko: '태국', ms: 'Thailand', fil: 'Thailand', vi: 'Thái Lan',
    },
    district: 'Yaowarat Road',
    accent: '#EA580C',
    appIcon: '/app-icons/thailand.png',
    appName: 'ThaiFood Master',
    theme: {
      primary: '#EA580C',
      secondary: '#F59E0B',
      gradient: 'linear-gradient(135deg, #C2410C 0%, #EA580C 45%, #E11D48 100%)',
      pageBg: '#FAF6EE',
      cardHeaderBg: 'linear-gradient(135deg, #C2410C 0%, #EA580C 45%, #E11D48 100%)',
      badgeBg: 'bg-orange-500',
      badgeText: 'text-white',
    },
  },
  {
    code: 'jp',
    flag: '🇯🇵',
    name: 'Japan',
    names: {
      en: 'Japan', 'zh-TW': '日本', th: 'ญี่ปุ่น', ja: '日本', ko: '일본', ms: 'Jepun', fil: 'Japan', vi: 'Nhật Bản',
    },
    district: 'Dotonbori',
    accent: '#DC2626',
    appIcon: '/app-icons/japan.png',
    appName: 'Japan Food Master',
    theme: {
      primary: '#DC2626',
      secondary: '#D97706',
      gradient: 'linear-gradient(135deg, #7F1D1D 0%, #B91C1C 45%, #B45309 100%)',
      pageBg: '#FAF8F5',
      cardHeaderBg: 'linear-gradient(135deg, #7F1D1D 0%, #B91C1C 45%, #B45309 100%)',
      badgeBg: 'bg-red-600',
      badgeText: 'text-white',
    },
  },
  {
    code: 'kr',
    flag: '🇰🇷',
    name: 'Korea',
    names: {
      en: 'Korea', 'zh-TW': '韓國', th: 'เกาหลี', ja: '韓国', ko: '한국', ms: 'Korea', fil: 'Korea', vi: 'Hàn Quốc',
    },
    district: 'Myeongdong Street',
    accent: '#E11D48',
    appIcon: '/app-icons/korea.png',
    appName: 'Korean Food Master',
    theme: {
      primary: '#E11D48',
      secondary: '#EA580C',
      gradient: 'linear-gradient(135deg, #9F1239 0%, #BE123C 45%, #C2410C 100%)',
      pageBg: '#FAF6F5',
      cardHeaderBg: 'linear-gradient(135deg, #9F1239 0%, #BE123C 45%, #C2410C 100%)',
      badgeBg: 'bg-rose-600',
      badgeText: 'text-white',
    },
  },
  {
    code: 'my',
    flag: '🇲🇾',
    name: 'Malaysia',
    names: {
      en: 'Malaysia', 'zh-TW': '馬來西亞', th: 'มาเลเซีย', ja: 'マレーシア', ko: '말레이시아', ms: 'Malaysia', fil: 'Malaysia', vi: 'Malaysia',
    },
    district: 'Jonker Street',
    accent: '#059669',
    appIcon: '/app-icons/malaysia.png',
    appName: 'Malaysia Food Master',
    theme: {
      primary: '#059669',
      secondary: '#F59E0B',
      gradient: 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #B45309 100%)',
      pageBg: '#F6FAF7',
      cardHeaderBg: 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #B45309 100%)',
      badgeBg: 'bg-emerald-600',
      badgeText: 'text-white',
    },
  },
  {
    code: 'ph',
    flag: '🇵🇭',
    name: 'Philippines',
    names: {
      en: 'Philippines', 'zh-TW': '菲律賓', th: 'ฟิลิปปินส์', ja: 'フィリピン', ko: '필리핀', ms: 'Pilipinas', fil: 'Pilipinas', vi: 'Philippines',
    },
    district: 'Mercato Centrale',
    accent: '#7C3AED',
    appIcon: '/app-icons/philippines.png',
    appName: 'Filipino Food Master',
    theme: {
      primary: '#7C3AED',
      secondary: '#F59E0B',
      gradient: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 45%, #C2410C 100%)',
      pageBg: '#FAF7FC',
      cardHeaderBg: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 45%, #C2410C 100%)',
      badgeBg: 'bg-purple-600',
      badgeText: 'text-white',
    },
  },
  {
    code: 'vn',
    flag: '🇻🇳',
    name: 'Vietnam',
    names: {
      en: 'Vietnam', 'zh-TW': '越南', th: 'เวียดนาม', ja: 'ベトナム', ko: '베트남', ms: 'Vietnam', fil: 'Vietnam', vi: 'Việt Nam',
    },
    district: 'Ben Thanh Market',
    accent: '#059669',
    appIcon: '/app-icons/vietnam.png',
    appName: 'Viet Food Master',
    theme: {
      primary: '#059669',
      secondary: '#F59E0B',
      gradient: 'linear-gradient(135deg, #064E3B 0%, #059669 45%, #B45309 100%)',
      pageBg: '#F5FAF7',
      cardHeaderBg: 'linear-gradient(135deg, #064E3B 0%, #059669 45%, #B45309 100%)',
      badgeBg: 'bg-teal-600',
      badgeText: 'text-white',
    },
  },
];

export function countryName(code: CountryCode, lang: Language): string {
  const c = COUNTRIES.find((x) => x.code === code);
  return c?.names[lang] || c?.name || code;
}
