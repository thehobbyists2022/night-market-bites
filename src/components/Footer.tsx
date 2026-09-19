import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const ui = getUI(language);

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-4 py-8 text-center text-xs text-stone-400">
      <div className="mx-auto max-w-2xl space-y-2">
        <p className="font-bold text-stone-200">
          {ui.footer.title}
        </p>
        <p className="text-[11px] leading-relaxed text-stone-400">
          🛒 <span className="font-semibold text-stone-300">Amazon Associates Disclosure:</span> {ui.footer.disclosure}
        </p>
        <p className="text-[10px] text-stone-500 pt-2 border-t border-white/10">
          {ui.footer.copyright} All authentic recipe instructions, culture stories, and speech synthesis are designed for home cooks and world travelers.
        </p>
      </div>
    </footer>
  );
};
