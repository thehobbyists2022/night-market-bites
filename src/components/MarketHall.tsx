import React, { useState } from 'react';
import { COUNTRIES, countryName } from '../config/countries';
import { recipesOf, text } from '../lib/selectRecipe';
import { getNightMarketsByCountry } from '../data/nightMarkets';
import { useLanguage } from '../context/LanguageContext';
import type { CountryCode, CountryRecipe } from '../types/unified';
import { Sparkles, Search, Store } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';
import { getUI } from '../i18n/uiStrings';

interface MarketHallProps {
  onSelectCountry: (code: CountryCode, tab?: 'dishes' | 'markets') => void;
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 pt-6">
      {/* Hero Banner with Night Market Vibe */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950/60 p-7 sm:p-10 lg:p-12 text-white shadow-xl">
        <div className="pointer-events-none absolute -right-12 -top-12 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 -bottom-12 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/20 px-3.5 py-1.5 text-xs sm:text-sm font-extrabold text-amber-300">
            <Sparkles className="h-4 w-4" />
            <span>{ui.marketHall.heroBadge}</span>
          </div>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white">
            Night Market Bites
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-stone-200">
            {ui.marketHall.heroSubtitle}
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 h-5 w-5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ui.marketHall.searchPlaceholder}
                className="w-full rounded-2xl border border-white/20 bg-white/10 pl-12 pr-4 py-3.5 text-sm sm:text-base text-white placeholder-stone-400 backdrop-blur-md focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            {/* Emergency Survival Card Launcher */}
            {onOpenSurvivalModal && (
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenSurvivalModal();
                }}
                className="flex items-center justify-center gap-2 rounded-2xl bg-amber-500 hover:bg-amber-400 px-6 py-3.5 text-xs sm:text-sm font-black text-stone-950 shadow-glow transition-all active:scale-95 shrink-0"
              >
                <Store className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{ui.marketHall.survivalCardsBtn}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* If Searching, show search results */}
      {searchQuery.trim() ? (
        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              {ui.marketHall.searchResultsTitle}: {searchResults.length} {ui.marketHall.dishesUnit}
            </h2>
            <button
              onClick={() => setSearchQuery('')}
              className="text-sm font-bold text-amber-600 hover:text-amber-700"
            >
              {ui.marketHall.clearSearch}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  <div className="relative h-48 sm:h-56 w-full">
                    <img
                      src={recipe.heroImage}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="img-grad absolute inset-0" />
                    <span className="absolute left-3 top-3 rounded-full bg-stone-900/85 px-3 py-1 text-xs font-black text-white backdrop-blur-md">
                      {countryMeta?.flag} {countryMeta?.name}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-base sm:text-lg text-stone-900 leading-snug">
                      {text(recipe.title, language)}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
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
        <section className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 flex items-center gap-2.5">
                <span>🏮</span>
                <span>{ui.marketHall.districtsTitle}</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1">
                {ui.marketHall.districtsSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {COUNTRIES.filter((c) => recipesOf(c.code).length > 0).map((c) => {
              const recipes = recipesOf(c.code);
              const markets = getNightMarketsByCountry(c.code);
              const cover = recipes[0]?.heroImage;
              const dishes = recipes.slice(1, 4).map((r) => text(r.title, language)).filter(Boolean);

              return (
                <div
                  key={c.code}
                  className="card-e card-e-hover group overflow-hidden text-left flex flex-col justify-between"
                >
                  <div
                    onClick={() => {
                      soundEffects.playClick();
                      onSelectCountry(c.code, 'markets');
                    }}
                    className="cursor-pointer"
                  >
                    <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                      {cover && (
                        <img
                          src={cover}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      <div className="img-grad absolute inset-0" />

                      <div className="absolute left-3.5 top-3.5 flex items-center gap-2 rounded-full bg-stone-950/80 px-3.5 py-1.5 text-xs sm:text-sm font-black text-white backdrop-blur-md border border-white/15">
                        <span>{c.flag}</span>
                        <span>{c.name}</span>
                      </div>

                      <div className="absolute right-3.5 bottom-3.5 flex items-center gap-2">
                        <span className="rounded-xl bg-amber-500 px-3 py-1 text-xs font-black text-stone-950 shadow-md">
                          🏮 {markets.length} {ui.district.tabMarkets}
                        </span>
                        <span className="rounded-xl bg-stone-900/90 text-stone-100 px-3 py-1 text-xs font-bold shadow-md backdrop-blur-md border border-white/10">
                          🍢 {recipes.length}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <p className="kicker text-amber-700 text-xs sm:text-sm">{c.district}</p>
                      <h3 className="mt-1 text-xl sm:text-2xl font-black text-stone-900 leading-tight">
                        {countryName(c.code, language)}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600 line-clamp-1 font-medium">
                        {dishes.join(' · ')}
                      </p>
                    </div>
                  </div>

                  {/* Dual Action Footer: Explore Night Markets vs Cooking Dishes */}
                  <div className="grid grid-cols-2 border-t border-stone-100 bg-stone-50/70 divide-x divide-stone-100">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        onSelectCountry(c.code, 'markets');
                      }}
                      className="px-3 py-3.5 text-center text-xs sm:text-sm font-extrabold text-amber-800 hover:bg-amber-100/80 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>🏮</span>
                      <span>{markets.length} {ui.district.tabMarkets}</span>
                    </button>

                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        onSelectCountry(c.code, 'dishes');
                      }}
                      className="px-3 py-3.5 text-center text-xs sm:text-sm font-extrabold text-stone-700 hover:bg-amber-50 hover:text-amber-800 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>🍢</span>
                      <span>{recipes.length} {ui.district.tabDishes}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

