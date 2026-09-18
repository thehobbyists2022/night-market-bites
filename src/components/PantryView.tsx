import React, { useState } from 'react';
import { COUNTRIES } from '../config/countries';
import { text } from '../lib/selectRecipe';
import { PANTRY } from '../data/pantry';
import { useLanguage } from '../context/LanguageContext';
import type { CountryCode } from '../types/unified';
import { ShoppingBasket, ShoppingCart, ExternalLink, ArrowLeft } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface PantryViewProps {
  initialCountry?: CountryCode;
  onBack: () => void;
}

export const PantryView: React.FC<PantryViewProps> = ({ initialCountry, onBack }) => {
  const { language } = useLanguage();
  const [country, setCountry] = useState<CountryCode>(initialCountry || 'tw');
  const meta = COUNTRIES.find((c) => c.code === country) || COUNTRIES[0];
  const items = PANTRY[country] || [];

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-4">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white px-3.5 py-2 text-xs font-bold text-stone-700 shadow-2xs hover:bg-stone-50"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Markets</span>
      </button>

      {/* Header Banner */}
      <div className="mt-4 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950/40 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex items-center gap-2 text-xs font-extrabold text-amber-400 uppercase tracking-wider">
          <ShoppingBasket className="h-4 w-4" />
          <span>Asian Street Food Pantry & Spice Market</span>
        </div>
        <h1 className="mt-2 text-3xl font-black text-white">
          {meta.flag} {meta.name} 必備調料百寶箱
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-stone-300">
          Curated authentic ingredients, sauces, and cookware ready to order on Amazon Prime.
        </p>

        {/* Country Pills */}
        <div className="mt-5 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              onClick={() => {
                soundEffects.playClick();
                setCountry(c.code);
              }}
              className={`shrink-0 flex items-center gap-1.5 rounded-2xl px-4 py-2 text-xs font-extrabold transition-all ${
                country === c.code
                  ? 'bg-amber-500 text-stone-950 shadow-glow scale-[1.02]'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800'
              }`}
            >
              <span>{c.flag}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Amazon Disclosure Alert */}
      <div className="mt-4 rounded-2xl border border-amber-200/80 bg-amber-50/80 p-3 text-xs text-amber-950 leading-relaxed shadow-2xs flex items-center gap-2">
        <span className="text-base">🛒</span>
        <span>
          <span className="font-extrabold">Amazon Associates Disclosure:</span> As an Amazon Associate, Night Market Bites earns from qualifying purchases at no additional cost to you. Physical ingredients & cookware are sourced via Amazon Prime.
        </span>
      </div>

      {/* Pantry Items Grid */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it: any, i: number) => {
          const title = text(it.name, language);
          const desc = text(it.description, language);
          const amazonSearchUrl =
            it.amazonUrl ||
            `https://www.amazon.com/s?k=${encodeURIComponent(it.name?.en || it.nativeName || title)}&tag=nightmarketbites-20`;

          return (
            <div
              key={it.id || i}
              className="card-e overflow-hidden flex flex-col justify-between"
            >
              <div>
                {it.image && (
                  <div className="h-40 w-full overflow-hidden bg-stone-100">
                    <img src={it.image} alt={title} className="h-full w-full object-cover" />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-extrabold text-stone-900">{title}</h3>
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-800 uppercase tracking-wider">
                      {it.category}
                    </span>
                  </div>

                  {it.nativeName && (
                    <p className="mt-0.5 text-xs font-bold text-amber-700">{it.nativeName}</p>
                  )}

                  {desc && (
                    <p className="mt-2 text-xs leading-relaxed text-stone-600 line-clamp-3">
                      {desc}
                    </p>
                  )}

                  {it.substituteTip && (
                    <div className="mt-2.5 rounded-xl bg-emerald-50 p-2.5 text-[11px] text-emerald-900 border border-emerald-200">
                      🔄 <span className="font-bold">Substitute:</span> {String(it.substituteTip)}
                    </div>
                  )}

                  {Array.isArray(it.recommendedBrands) && it.recommendedBrands.length > 0 && (
                    <p className="mt-2 text-[11px] text-stone-500">
                      <span className="font-bold text-stone-700">Recommended Brands: </span>
                      {it.recommendedBrands.join(', ')}
                    </p>
                  )}
                </div>
              </div>

              {/* Amazon Prime Button */}
              <div className="p-4 pt-0">
                <a
                  href={amazonSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-amber-500 hover:bg-amber-400 py-2.5 text-xs font-extrabold text-stone-950 shadow-glow transition-all active:scale-95"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Buy on Amazon Prime</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
