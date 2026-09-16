import React from 'react';
import { COUNTRIES, countryName } from '../config/countries';
import { categoriesOf, recipesOf, text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import type { CountryCode, CountryRecipe } from '../types/unified';
import { ArrowLeft } from 'lucide-react';

interface DistrictViewProps {
  country: CountryCode;
  onBack: () => void;
  onSelectRecipe: (r: CountryRecipe) => void;
}

export const DistrictView: React.FC<DistrictViewProps> = ({ country, onBack, onSelectRecipe }) => {
  const { language } = useLanguage();
  const meta = COUNTRIES.find((c) => c.code === country)!;
  const recipes = recipesOf(country);
  const cats = categoriesOf(country);
  const [cat, setCat] = React.useState('all');
  const shown = cat === 'all' ? recipes : recipes.filter((r) => r.category === cat);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16">
      <button onClick={onBack} className="mt-5 flex items-center gap-1 text-xs font-bold text-night-muted">
        <ArrowLeft className="h-3.5 w-3.5" /> All districts
      </button>

      <div className="mt-4 rounded-3xl border border-night-border bg-gradient-to-br from-night-panel to-night-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-night-ink">
              {meta.flag} {countryName(country, language)}
            </h2>
            <p className="text-xs text-night-muted">{meta.district}</p>
          </div>
          <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: `${meta.accent}22`, color: meta.accent }}>
            {recipes.length} stalls
          </span>
        </div>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-bold capitalize ${
              cat === c
                ? 'border-night-lantern bg-night-lantern/15 text-night-lantern'
                : 'border-night-border text-night-muted hover:text-night-ink'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((r) => (
          <button
            key={r.id}
            onClick={() => onSelectRecipe(r)}
            className="overflow-hidden rounded-3xl border border-night-border bg-night-card text-left shadow transition hover:-translate-y-0.5 hover:border-night-lantern/60"
          >
            <img src={r.heroImage} alt="" className="h-36 w-full object-cover" />
            <div className="p-3.5">
              <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-bold text-night-ink">
                {text(r.title, language)}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-[11px] text-night-muted">
                {text(r.subtitle, language)}
              </p>
              <div className="mt-2.5 flex items-center gap-2 text-[10px] font-bold text-night-muted">
                <span className="rounded-full bg-night-panel px-2 py-0.5">{r.cookTimeMinutes} min</span>
                <span className="rounded-full bg-night-panel px-2 py-0.5 capitalize">{r.difficulty}</span>
                {r.caloriesPerServing && (
                  <span className="rounded-full bg-night-panel px-2 py-0.5">{r.caloriesPerServing} kcal</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
