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
      {/* Hero banner */}
      <div className="relative mt-6 overflow-hidden rounded-3xl border border-night-border">
        <div className="bg-gradient-to-br from-[#16224e] via-night-panel to-[#0a0e22] px-6 pb-10 pt-12 text-center">
          <div className="lantern-string">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                style={{
                  color: i % 3 === 0 ? '#ffc24b' : i % 3 === 1 ? '#ff4d6d' : '#3ddc97',
                  opacity: 0.85,
                }}
              />
            ))}
          </div>
          <div className="mt-6 text-4xl">🏮 🍢 🧋 🥟 🍜 🎡</div>
          <span className="mt-4 inline-block rounded-full bg-night-lantern/15 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-night-lantern">
            Night Market Bites
          </span>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-night-ink sm:text-4xl">
            {t('hallTitle') || 'Asia Night Market'}
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-night-muted">
            {t('hallSubtitle') ||
              'Walk into a district, pick a stall, cook the real street food of seven countries.'}
          </p>
          <p className="mt-3 text-[11px] font-bold text-night-muted">
            130+ recipes · 8 languages · order cards · taste passport
          </p>
        </div>
      </div>

      <p className="mt-8 mb-3 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-night-muted">
        <span className="h-px w-4 bg-night-lantern" /> Pick a district
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COUNTRIES.filter((c) => recipesOf(c.code).length > 0).map((c) => {
          const recipes = recipesOf(c.code);
          const top = recipes.slice(0, 3);
          return (
            <button
              key={c.code}
              onClick={() => onSelectCountry(c.code)}
              className="neon-card neon-card-hover group overflow-hidden text-left"
            >
              <div className="relative h-32">
                <div className="grid h-full grid-cols-3 gap-px bg-night-border">
                  {top.map((r) => (
                    <img key={r.id} src={r.heroImage} alt="" className="h-full w-full object-cover" />
                  ))}
                </div>
                <div className="img-grad absolute inset-0" />
                <span
                  className="absolute left-3 bottom-2.5 text-lg font-black text-white drop-shadow"
                  style={{ color: c.accent }}
                >
                  {c.flag} {countryName(c.code, language)}
                </span>
                <span className="absolute right-2.5 bottom-2.5 chip">{recipes.length} dishes</span>
              </div>
              <div className="px-4 py-3">
                <p className="truncate text-xs text-night-muted">{c.district}</p>
                <p className="mt-1 truncate text-[11px] text-night-muted/80">
                  {top.map((r) => (r.title?.en || '').split(' ').slice(-2).join(' ')).join(' · ')}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
