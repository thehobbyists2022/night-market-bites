import React, { useState } from 'react';
import { UI_LANGUAGES, useLanguage } from '../context/LanguageContext';
import { Languages, Store, Flame } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface HeaderBarProps {
  onBackHome: () => void;
  onOpenSurvivalModal?: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ onBackHome, onOpenSurvivalModal }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur-md safe-top">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
        {/* Brand Logo & Name */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onBackHome();
          }}
          className="flex items-center gap-2.5 text-left active:scale-98 transition-transform"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-stone-950 font-black text-base shadow-glow">
            <Flame className="h-5 w-5 fill-current" />
          </div>
          <div>
            <span className="block font-black text-sm sm:text-base tracking-tight text-stone-900 leading-tight">
              Night Market Bites
            </span>
            <span className="block text-[10px] font-bold text-amber-700 tracking-wider">
              7-Country Asian Street Food
            </span>
          </div>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Survival Phrases Button */}
          {onOpenSurvivalModal && (
            <button
              onClick={() => {
                soundEffects.playClick();
                onOpenSurvivalModal();
              }}
              className="flex items-center gap-1 rounded-xl bg-amber-50 border border-amber-300 px-2.5 py-1.5 text-xs font-bold text-amber-900 shadow-2xs hover:bg-amber-100 transition-colors"
              title="Night Market Emergency Phrases"
            >
              <Store className="h-3.5 w-3.5 text-amber-600" />
              <span className="hidden sm:inline">急救卡</span>
            </button>
          )}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => {
                soundEffects.playClick();
                setOpen(!open);
              }}
              className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 px-2.5 py-1.5 text-xs font-bold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <Languages className="h-3.5 w-3.5 text-amber-600" />
              <span>{UI_LANGUAGES.find((l) => l.code === language)?.flag}</span>
            </button>

            {open && (
              <div className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl animate-in fade-in duration-150">
                <div className="p-1">
                  {UI_LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        soundEffects.playClick();
                        setLanguage(l.code);
                        setOpen(false);
                      }}
                      className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-semibold transition-colors ${
                        language === l.code
                          ? 'bg-amber-50 font-bold text-amber-800'
                          : 'text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
