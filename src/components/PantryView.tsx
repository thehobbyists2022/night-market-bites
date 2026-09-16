import React from 'react';
import { COUNTRIES } from '../config/countries';
import { text } from '../lib/selectRecipe';
import { PANTRY } from '../data/pantry';
import { useLanguage } from '../context/LanguageContext';
import type { CountryCode } from '../types/unified';
import { ArrowLeft, ShoppingBasket } from 'lucide-react';

interface PantryViewProps {
  initialCountry?: CountryCode;
  onBack: () => void;
}

export const PantryView: React.FC<PantryViewProps> = ({ initialCountry, onBack }) => {
  const { language, t } = useLanguage();
  const [country, setCountry] = React.useState<CountryCode>(initialCountry || 'tw');
  const meta = COUNTRIES.find((c) => c.code === country)!;
  const items = PANTRY[country] || [];

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16">
      <button onClick={onBack} className="mt-5 flex items-center gap-1 text-xs font-bold text-night-muted">
        <ArrowLeft className="h-3.5 w-3.5" /> Markets
      </button>

      <div className="mt-4 rounded-3xl border border-night-border bg-gradient-to-br from-night-panel to-night-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-black text-night-ink">
              <ShoppingBasket className="h-5 w-5 text-night-lantern" />
              {t('pantryTitle') || 'Korean Pantry'}
            </h2>
            <p className="text-xs text-night-muted">
              {meta.flag} {meta.district}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {COUNTRIES.map((c) => (
          <button
            key={c.code}
            onClick={() => setCountry(c.code)}
            className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-bold ${
              country === c.code
                ? 'border-night-lantern bg-night-lantern/15 text-night-lantern'
                : 'border-night-border text-night-muted hover:text-night-ink'
            }`}
          >
            {c.flag} {c.name}
          </button>
        ))}
      </div>

      <p className="mt-4 rounded-2xl bg-night-panel px-4 py-2.5 text-[11px] leading-relaxed text-night-muted">
        As an Amazon Associate, we earn from qualifying purchases. Shopping through the buttons below
        supports the app at no extra cost to you.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <div key={it.id || i} className="overflow-hidden rounded-3xl border border-night-border bg-night-card">
            {it.image && <img src={it.image} alt="" className="h-36 w-full object-cover" />}
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-night-ink">{text(it.name, language)}</h3>
                <span className="whitespace-nowrap rounded-full bg-night-panel px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-night-muted">
                  {it.category}
                </span>
              </div>
              {it.nativeName && <p className="mt-0.5 text-xs font-bold text-night-lantern">{it.nativeName}</p>}
              {it.description && (
                <p className="mt-2 line-clamp-3 text-[12px] leading-relaxed text-night-muted">
                  {text(it.description, language)}
                </p>
              )}
              {it.substituteTip && typeof it.substituteTip === 'string' && (
                <p className="mt-2 rounded-xl bg-night-mint/10 px-3 py-2 text-[11px] text-night-mint">
                  🔄 {it.substituteTip}
                </p>
              )}
              {Array.isArray(it.recommendedBrands) && (it.recommendedBrands as unknown[]).length > 0 && (
                <p className="mt-2 text-[11px] text-night-muted">
                  <span className="font-bold text-slate-300">Brands: </span>
                  {(it.recommendedBrands as unknown[]).filter((b) => typeof b === 'string').join(', ')}
                </p>
              )}
              {it.amazonUrl && (
                <a
                  href={it.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-night-lantern py-2 text-xs font-black text-night-bg"
                >
                  Shop on Amazon
                  <span className="text-[9px] font-bold opacity-70">↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
