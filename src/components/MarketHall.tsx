import React from 'react';
import { COUNTRIES, countryName } from '../config/countries';
import { recipesOf } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import type { CountryCode } from '../types/unified';

interface MarketHallProps {
  onSelectCountry: (code: CountryCode) => void;
}

export const MarketHall: React.FC<MarketHallProps> = ({ onSelectCountry }) => {
  const { language } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16">
      {/* NYT-style hero photograph with serif headline */}
      <div className="mt-5">
        <p className="kicker">Night Market Bites</p>
        <h1 className="mt-2 max-w-2xl font-display text-3xl font-bold leading-tight text-paper-ink sm:text-[2.6rem] sm:leading-[1.15]">
          The street food of Asia, cooked in your own kitchen.
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-paper-muted">
          Seven night markets, 130+ recipes, local order cards and a taste passport — from Taiwan to Vietnam.
        </p>
        <div className="rule mt-5" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COUNTRIES.filter((c) => recipesOf(c.code).length > 0).map((c) => {
          const recipes = recipesOf(c.code);
          const cover = recipes[0]?.heroImage;
          const dishes = recipes.slice(1, 4).map((r) => (r.title?.en || '').split(' ').slice(-2).join(' '));
          return (
            <button
              key={c.code}
              onClick={() => onSelectCountry(c.code)}
              className="card-e card-e-hover group overflow-hidden text-left"
            >
              <div className="relative h-44">
                {cover && <img src={cover} alt="" className="h-full w-full object-cover" />}
                <span className="absolute right-3 bottom-3 rounded bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white">
                  {recipes.length} dishes
                </span>
              </div>
              <div className="px-4 py-4">
                <p className="kicker">{c.name}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-paper-ink">
                  {countryName(c.code, language)}
                </h3>
                <p className="mt-1 text-xs font-semibold text-paper-muted">{c.district}</p>
                <p className="mt-2 text-[11px] leading-relaxed text-paper-muted">
                  {dishes.join(' · ')}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
