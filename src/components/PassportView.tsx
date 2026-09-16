import React from 'react';
import { COUNTRIES, countryName } from '../config/countries';
import { recipesOf, text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import type { CountryRecipe } from '../lib/selectRecipe';
import { Heart, Stamp } from 'lucide-react';

interface PassportViewProps {
  onSelectRecipe: (r: CountryRecipe) => void;
  onBack: () => void;
}

export const PassportView: React.FC<PassportViewProps> = ({ onSelectRecipe, onBack }) => {
  const { language } = useLanguage();
  const { favorites, tasted } = useUser();

  const favList = COUNTRIES.flatMap((c) =>
    (favorites[c.code] || []).map((id) => recipesOf(c.code).find((r) => r.id === id)).filter(Boolean)
  ) as CountryRecipe[];

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16">
      <div className="mt-6 rounded-xl border border-paper-border bg-gradient-to-br from-paper-card to-paper-soft p-6 text-center">
        <Stamp className="mx-auto h-10 w-10 text-paper-gold" />
        <h2 className="mt-2 text-2xl font-bold text-paper-ink">Taste Passport</h2>
        <p className="mt-1 text-sm text-paper-muted">
          Every stall you tour gets stamped into your passport.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {COUNTRIES.map((c) => {
          const all = recipesOf(c.code);
          const done = (tasted[c.code] || []).filter((id) => all.some((r) => r.id === id)).length;
          const pct = all.length ? Math.round((done / all.length) * 100) : 0;
          return (
            <button
              key={c.code}
              onClick={onBack}
              className="rounded-xl border border-paper-border bg-paper-card p-4 text-left"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-paper-ink">{c.flag} {countryName(c.code, language)}</span>
                <span className="text-[11px] font-bold text-paper-muted">{done}/{all.length}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper-soft">
                <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: c.accent }} />
              </div>
            </button>
          );
        })}
      </div>

      <h3 className="mt-8 flex items-center gap-2 text-base font-bold text-paper-ink">
        <Heart className="h-4 w-4 text-paper-persimmon" />
        Pocket list
      </h3>
      {favList.length === 0 ? (
        <p className="mt-2 rounded-lg border border-paper-border bg-paper-card px-4 py-6 text-center text-sm text-paper-muted">
          No favorites yet — tap the heart on any recipe.
        </p>
      ) : (
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {favList.map((r) => (
            <button
              key={`${r.country}-${r.id}`}
              onClick={() => onSelectRecipe(r)}
              className="flex items-center gap-3 rounded-lg border border-paper-border bg-paper-card p-2.5 text-left"
            >
              <img src={r.heroImage} alt="" className="h-12 w-12 shrink-0 rounded-xl object-cover" />
              <span className="min-w-0">
                <span className="block truncate text-xs font-bold text-paper-ink">{text(r.title, language)}</span>
                <span className="block text-[10px] text-paper-muted">
                  {COUNTRIES.find((c) => c.code === r.country)?.flag}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


