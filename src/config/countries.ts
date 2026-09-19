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
      secondary: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #B91C1C 0%, #DC2626 50%, #EF4444 100%)',
      pageBg: '#FFF8F6',
      cardHeaderBg: 'linear-gradient(135deg, #B91C1C 0%, #DC2626 50%, #EF4444 100%)',
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
      secondary: '#FBBF24',
      gradient: 'linear-gradient(135deg, #C2410C 0%, #EA580C 50%, #F59E0B 100%)',
      pageBg: '#FFFDF0',
      cardHeaderBg: 'linear-gradient(135deg, #C2410C 0%, #EA580C 50%, #F59E0B 100%)',
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
    accent: '#1E40AF',
    appIcon: '/app-icons/japan.png',
    appName: 'Japan Food Master',
    theme: {
      primary: '#1E40AF',
      secondary: '#38BDF8',
      gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 55%, #2563EB 100%)',
      pageBg: '#F4F7FB',
      cardHeaderBg: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 55%, #2563EB 100%)',
      badgeBg: 'bg-blue-600',
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
      secondary: '#FB7185',
      gradient: 'linear-gradient(135deg, #881337 0%, #BE123C 50%, #E11D48 100%)',
      pageBg: '#FFF5F7',
      cardHeaderBg: 'linear-gradient(135deg, #881337 0%, #BE123C 50%, #E11D48 100%)',
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
    accent: '#D97706',
    appIcon: '/app-icons/malaysia.png',
    appName: 'Malaysia Food Master',
    theme: {
      primary: '#D97706',
      secondary: '#FCD34D',
      gradient: 'linear-gradient(135deg, #78350F 0%, #B45309 45%, #D97706 100%)',
      pageBg: '#FEFCE8',
      cardHeaderBg: 'linear-gradient(135deg, #78350F 0%, #B45309 45%, #D97706 100%)',
      badgeBg: 'bg-amber-600',
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
      secondary: '#C084FC',
      gradient: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 50%, #8B5CF6 100%)',
      pageBg: '#FAF5FF',
      cardHeaderBg: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 50%, #8B5CF6 100%)',
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
      secondary: '#34D399',
      gradient: 'linear-gradient(135deg, #064E3B 0%, #059669 50%, #10B981 100%)',
      pageBg: '#F0FDF4',
      cardHeaderBg: 'linear-gradient(135deg, #064E3B 0%, #059669 50%, #10B981 100%)',
      badgeBg: 'bg-emerald-600',
      badgeText: 'text-white',
    },
  },
];

export function countryName(code: CountryCode, lang: Language): string {
  const c = COUNTRIES.find((x) => x.code === code);
  return c?.names[lang] || c?.name || code;
}
