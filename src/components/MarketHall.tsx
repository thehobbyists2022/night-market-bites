import React, { useState } from 'react';
import { COUNTRIES, countryName } from '../config/countries';
import { recipesOf, text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import type { CountryCode, CountryRecipe } from '../types/unified';
import { Sparkles, Search, Store, ChevronRight } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';
import { getUI } from '../i18n/uiStrings';

interface MarketHallProps {
  onSelectCountry: (code: CountryCode) => void;
  onSelectRecipe?: (recipe: CountryRecipe) => void;
  onOpenSurvivalModal?: () => void;
}

export const MarketHall: React.FC<MarketHallProps> = ({
  onSelectCountry,
  onSelectRecipe,
  onOpenSurvivalModal,
}) => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const ui = getUI(language);

  // Collect all recipes for search
  const allRecipes = COUNTRIES.flatMap((c) => recipesOf(c.code));
  const searchResults = searchQuery.trim()
    ? allRecipes.filter((r) => {
        const titleMatch = text(r.title, language).toLowerCase().includes(searchQuery.toLowerCase());
        const enTitleMatch = (r.title?.en || '').toLowerCase().includes(searchQuery.toLowerCase());
        const nativeMatch = String(r.culture?.nativeName || '').toLowerCase().includes(searchQuery.toLowerCase());
        return titleMatch || enTitleMatch || nativeMatch;
      })
    : [];

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-4">
      {/* Hero Banner with Night Market Vibe */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950/60 p-6 sm:p-8 text-white shadow-xl">
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 -bottom-12 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/20 px-3 py-1 text-xs font-extrabold text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{ui.marketHall.heroBadge}</span>
          </div>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-white">
            Night Market Bites
          </h1>
          <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-stone-300">
            {ui.marketHall.heroSubtitle}
          </p>

          {/* Search Bar */}
          <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ui.marketHall.searchPlaceholder}
                className="w-full rounded-2xl border border-white/20 bg-white/10 pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-stone-400 backdrop-blur-md focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            {/* Emergency Survival Card Launcher */}
            {onOpenSurvivalModal && (
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenSurvivalModal();
                }}
                className="flex items-center justify-center gap-2 rounded-2xl bg-amber-500 hover:bg-amber-400 px-5 py-3 text-xs font-extrabold text-stone-950 shadow-glow transition-all active:scale-95"
              >
                <Store className="h-4 w-4" />
                <span>{ui.marketHall.survivalCardsBtn}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* If Searching, show search results */}
      {searchQuery.trim() ? (
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-stone-900">
              {ui.marketHall.searchResultsTitle}: {searchResults.length} {ui.marketHall.dishesUnit}
            </h2>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-amber-600"
            >
              {ui.marketHall.clearSearch}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {searchResults.map((recipe) => {
              const countryMeta = COUNTRIES.find((c) => c.code === recipe.country);
              return (
                <button
                  key={`${recipe.country}-${recipe.id}`}
                  onClick={() => {
                    soundEffects.playClick();
                    if (onSelectRecipe) onSelectRecipe(recipe);
                  }}
                  className="card-e card-e-hover overflow-hidden text-left"
                >
                  <div className="relative h-44 w-full">
                    <img
                      src={recipe.heroImage}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <div className="img-grad absolute inset-0" />
                    <span className="absolute left-3 top-3 rounded-full bg-stone-900/80 px-2.5 py-0.5 text-[10px] font-extrabold text-white backdrop-blur-md">
                      {countryMeta?.flag} {countryMeta?.name}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-extrabold text-base text-stone-900">
                      {text(recipe.title, language)}
                    </h3>
                    <p className="mt-1 text-xs text-stone-500 line-clamp-2">
                      {text(recipe.subtitle, language)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      ) : (
        /* Standard 7 Country Districts */
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-stone-900 flex items-center gap-2">
                <span>🏮</span>
                <span>{ui.marketHall.districtsTitle}</span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                {ui.marketHall.districtsSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COUNTRIES.filter((c) => recipesOf(c.code).length > 0).map((c) => {
              const recipes = recipesOf(c.code);
              const cover = recipes[0]?.heroImage;
              const dishes = recipes.slice(1, 4).map((r) => text(r.title, language)).filter(Boolean);

              return (
                <button
                  key={c.code}
                  onClick={() => {
                    soundEffects.playClick();
                    onSelectCountry(c.code);
                  }}
                  className="card-e card-e-hover group overflow-hidden text-left"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    {cover && (
                      <img
                        src={cover}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="img-grad absolute inset-0" />

                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-stone-950/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </div>

                    <span className="absolute right-3 bottom-3 rounded-xl bg-amber-500 px-2.5 py-1 text-[11px] font-black text-stone-950 shadow-md">
                      {recipes.length} {ui.marketHall.dishesClassic}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="kicker text-amber-700">{c.district}</p>
                    <h3 className="mt-1 text-xl font-extrabold text-stone-900">
                      {countryName(c.code, language)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-stone-500 line-clamp-1">
                      {dishes.join(' · ')}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3 text-xs font-bold text-amber-700">
                      <span>{ui.marketHall.enterDistrict}</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
