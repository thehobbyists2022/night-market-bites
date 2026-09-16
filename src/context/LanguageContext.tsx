import React, { createContext, useContext, useState } from 'react';
import { translations, Dictionary } from '../i18n/translations';
import type { Language } from '../types/unified';

export const UI_LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🌐' },
  { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'ms', label: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'fil', label: 'Filipino', flag: '🇵🇭' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function get(obj: Dictionary, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, k) => (acc as Dictionary)?.[k], obj);
}

function initFromUrl(): Language {
  try {
    const p = new URLSearchParams(window.location.search).get('lang') as Language;
    if (p && UI_LANGUAGES.some((l) => l.code === p)) return p;
  } catch { /* ignore */ }
  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(initFromUrl);

  const setLanguage = (lang: Language) => setLanguageState(lang);

  /** path lookup with EN fallback */
  const t = (path: string): string => {
    const v = get(translations[language], path) ?? get(translations.en, path);
    return typeof v === 'string' ? v : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
