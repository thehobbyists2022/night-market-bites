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
      <button onClick={onBack} className="mt-5 flex items-center gap-1 text-xs font-bold text-paper-muted hover:text-paper-ink">
        <ArrowLeft className="h-3.5 w-3.5" /> All markets
      </button>

      <div className="mt-3 flex flex-wrap items-end justify-between gap-3 border-b border-paper-border pb-5">
        <div>
          <p className="kicker">{meta.name}</p>
          <h2 className="mt-1 font-display text-3xl font-bold text-paper-ink">{meta.district}</h2>
          <p className="mt-1 text-xs font-semibold text-paper-muted">
            {meta.flag} {countryName(country, language)} · {recipes.length} dishes
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-bold capitalize transition ${
              cat === c
                ? 'bg-paper-ink border-paper-ink text-white'
                : 'border-paper-border bg-paper-card text-paper-muted hover:text-paper-ink'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((r) => (
          <button
            key={r.id}
            onClick={() => onSelectRecipe(r)}
            className="card-e card-e-hover group overflow-hidden text-left"
          >
            <div className="relative h-36">
              <img src={r.heroImage} alt="" className="h-full w-full object-cover" />
              <div className="img-grad absolute inset-0" />
              <span className="absolute right-2.5 bottom-2.5 rounded-full bg-black/45 px-2.5 py-0.5 text-[10px] font-bold text-white">
                {r.cookTimeMinutes} min
              </span>
            </div>
            <div className="p-4">
              <h3 className="line-clamp-2 min-h-[2.6rem] font-display text-[15px] font-bold leading-snug text-paper-ink">
                {text(r.title, language)}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-paper-muted">
                {text(r.subtitle, language)}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                <span className="chip-e capitalize">{r.difficulty}</span>
                <span className="chip-e capitalize">{r.category}</span>
                {r.caloriesPerServing && <span className="chip-e">{r.caloriesPerServing} kcal</span>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
