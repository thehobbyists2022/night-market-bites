import React from 'react';
import { COUNTRIES, countryName } from '../config/countries';
import { recipesOf } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import type { CountryCode } from '../types/unified';

interface MarketHallProps {
  onSelectCountry: (code: CountryCode) => void;
}

export const MarketHall: React.FC<MarketHallProps> = ({ onSelectCountry }) => {
  const { language, t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16">
      <div className="rounded-3xl border border-night-border bg-gradient-to-br from-night-panel to-night-card p-8 text-center mt-6">
        <span className="inline-block rounded-full bg-night-lantern/15 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-night-lantern">
          Night Market Bites
        </span>
        <h1 className="mt-3 text-2xl font-black tracking-tight text-night-ink sm:text-3xl">
          {t('hallTitle') || 'Asia Night Market'}
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-night-muted">
          {t('hallSubtitle') ||
            'Walk into a district, pick a stall, cook the real street food of seven countries.'}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COUNTRIES.filter((c) => recipesOf(c.code).length > 0).map((c) => {
          const recipes = recipesOf(c.code);
          const hero1 = recipes[0]?.heroImage;
          const hero2 = recipes[1]?.heroImage;
          const hero3 = recipes[2]?.heroImage;
          return (
            <button
              key={c.code}
              onClick={() => onSelectCountry(c.code)}
              className="group overflow-hidden rounded-3xl border border-night-border bg-night-card text-left shadow transition hover:-translate-y-0.5 hover:border-night-lantern/60"
            >
              <div className="relative h-28 bg-night-panel">
                {hero1 && (
                  <img src={hero1} alt="" className="h-full w-full rounded-2xl object-cover opacity-70" />
                )}
                <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-1">
                  {hero2 && <img src={hero2} alt="" className="rounded-lg object-cover opacity-90" />}
                  {hero3 && <img src={hero3} alt="" className="rounded-lg object-cover opacity-90" />}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-night-ink">
                    {c.flag} {countryName(c.code, language)}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                    style={{ backgroundColor: `${c.accent}22`, color: c.accent }}
                  >
                    {recipes.length} dishes
                  </span>
                </div>
                <p className="mt-1 truncate text-xs text-night-muted">{c.district}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
