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

      <div className="mt-4 rounded-3xl border border-night-border p-6" style={{ background: `linear-gradient(135deg, ${meta.accent}22, rgba(18,26,56,0.9) 60%)` }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-night-muted">Night market district</p>
            <h2 className="mt-1 text-2xl font-black text-night-ink sm:text-3xl">
              <span className="mr-1.5 text-2xl">{meta.flag}</span>
              {countryName(country, language)}
            </h2>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-night-muted">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: meta.accent, boxShadow: `0 0 8px ${meta.accent}` }} />
              {meta.district}
            </p>
          </div>
          <span
            className="rounded-2xl px-3.5 py-2 text-center text-xs font-black"
            style={{ backgroundColor: `${meta.accent}26`, color: meta.accent }}
          >
            {recipes.length}
            <span className="block text-[9px] font-bold uppercase tracking-wider opacity-80">stalls</span>
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
            className="neon-card neon-card-hover group overflow-hidden text-left"
          >
            <div className="relative h-36">
              <img src={r.heroImage} alt="" className="h-full w-full object-cover" />
              <div className="img-grad absolute inset-0" />
              <span className="absolute right-2 bottom-2 chip">{r.cookTimeMinutes} min · {r.cookTimeMinutes && r.prepTimeMinutes ? r.prepTimeMinutes + r.cookTimeMinutes + ' total' : ''}</span>
            </div>
            <div className="p-3.5">
              <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-bold text-night-ink">
                {text(r.title, language)}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-[11px] text-night-muted">
                {text(r.subtitle, language)}
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="chip capitalize">{r.difficulty}</span>
                <span className="chip capitalize">{r.category}</span>
                {r.caloriesPerServing && <span className="chip">{r.caloriesPerServing} kcal</span>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
