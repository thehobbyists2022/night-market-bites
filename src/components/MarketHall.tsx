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
  const hero = recipesOf('kr')[0]?.heroImage || '';

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16">
      {/* Editorial hero: full-bleed photograph, serif headline */}
      <div className="relative mt-5 overflow-hidden rounded-xl border border-paper-border">
        {hero && <img src={hero} alt="" className="h-64 w-full object-cover sm:h-80" />}
        <div className="img-grad absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="kicker text-[10px] font-bold text-amber-200!">Night Market Bites</p>
          <h1 className="mt-1.5 max-w-lg font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {t('hallTitle') || 'The street food of Asia, cooked in your own kitchen.'}
          </h1>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-200">
            {t('hallSubtitle') ||
              'Seven night markets, 130+ recipes, local order cards and a taste passport — from Taiwan to Vietnam.'}
          </p>
        </div>
      </div>

      <p className="mt-9 mb-3 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wideish text-paper-muted">
        <span className="hairline" /> Choose a market
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {COUNTRIES.filter((c) => recipesOf(c.code).length > 0).map((c) => {
          const recipes = recipesOf(c.code);
          const cover = recipes[0]?.heroImage;
          return (
            <button
              key={c.code}
              onClick={() => onSelectCountry(c.code)}
              className="card-e card-e-hover group overflow-hidden text-left"
            >
              <div className="relative h-40">
                {cover && <img src={cover} alt="" className="h-full w-full object-cover" />}
                <div className="img-grad absolute inset-0" />
                <span className="absolute bottom-3 left-4 font-display text-lg font-bold text-white">
                  {countryName(c.code, language)}
                </span>
                <span className="absolute right-3 bottom-3 rounded-full bg-black/45 px-2.5 py-0.5 text-[10px] font-bold text-white">
                  {recipes.length} dishes
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <p className="text-xs font-semibold text-paper-ink">{c.district}</p>
                <p className="text-[10px] font-bold uppercase tracking-wideish text-paper-muted">{c.name}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
