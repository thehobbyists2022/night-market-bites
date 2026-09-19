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
      {/* Hero Banner with Festive Night Market Vibe */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-300/40 bg-gradient-to-br from-amber-600 via-orange-600 to-rose-700 p-7 sm:p-10 lg:p-12 text-white shadow-2xl">
        <div className="pointer-events-none absolute -right-12 -top-12 h-80 w-80 rounded-full bg-yellow-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 -bottom-12 h-80 w-80 rounded-full bg-rose-500/30 blur-3xl" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3.5 py-1.5 text-xs sm:text-sm font-extrabold text-amber-100 backdrop-blur-md shadow-sm">
            <Sparkles className="h-4 w-4 text-amber-200" />
            <span>{ui.marketHall.heroBadge}</span>
          </div>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white drop-shadow-sm">
            Night Market Bites
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-amber-50">
            {ui.marketHall.heroSubtitle}
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 h-5 w-5 text-amber-200" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ui.marketHall.searchPlaceholder}
                className="w-full rounded-2xl border border-white/30 bg-white/20 pl-12 pr-4 py-3.5 text-sm sm:text-base text-white placeholder-amber-100/70 backdrop-blur-md focus:border-white focus:outline-none focus:ring-2 focus:ring-amber-200 shadow-inner"
              />
            </div>

            {/* Emergency Survival Card Launcher */}
            {onOpenSurvivalModal && (
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenSurvivalModal();
                }}
                className="flex items-center justify-center gap-2 rounded-2xl bg-amber-400 hover:bg-amber-300 px-6 py-3.5 text-xs sm:text-sm font-black text-amber-950 shadow-xl transition-all active:scale-95 shrink-0"
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
                  <div className="p-5 bg-slate-900/90">
                    <h3 className="font-black text-base sm:text-lg text-white leading-snug">
                      {text(recipe.title, language)}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed">
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
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
                <span>🏮</span>
                <span>{ui.marketHall.districtsTitle}</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-400 mt-1">
                {ui.marketHall.districtsSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {COUNTRIES.filter((c) => recipesOf(c.code).length > 0).map((c) => {
              const recipes = recipesOf(c.code);
              const markets = getNightMarketsByCountry(c.code);

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
                    {/* Header with Original App Icon & National Flag */}
                    <div
                      className="relative h-48 sm:h-52 w-full overflow-hidden flex items-center justify-center p-4 transition-all"
                      style={{
                        background: c.theme.cardHeaderBg,
                        borderBottom: `3px solid ${c.theme.secondary}66`,
                      }}
                    >
                      {/* Ambient festive radial glow */}
                      <div
                        className="absolute inset-0 opacity-30 blur-2xl pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${c.theme.secondary} 0%, transparent 70%)`,
                        }}
                      />

                      {/* Top Left: Country Flag + Name Badge */}
                      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-black text-white backdrop-blur-md border border-white/20 shadow-sm">
                        <span className="text-base">{c.flag}</span>
                        <span>{countryName(c.code, language)}</span>
                      </div>

                      {/* Top Right: Original App Name */}
                      <div className="absolute right-3 top-3 flex items-center rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-black text-white backdrop-blur-md border border-white/25">
                        <span>{c.appName}</span>
                      </div>

                      {/* Center Stage: Authentic App Icon */}
                      <div className="relative z-10 flex flex-col items-center justify-center">
                        <img
                          src={c.appIcon}
                          alt={c.appName}
                          className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl sm:rounded-3xl object-cover shadow-2xl border-2 border-white/40 transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Bottom Counts */}
                      <div className="absolute right-3 bottom-2.5 flex items-center gap-1.5 z-10">
                        <span className="rounded-xl bg-white/95 text-stone-900 px-2.5 py-1 text-xs font-black shadow-md border border-white/40">
                          🏮 {markets.length} {ui.district.tabMarkets}
                        </span>
                        <span className="rounded-xl bg-black/60 text-white px-2.5 py-1 text-xs font-black shadow-md backdrop-blur-md border border-white/20">
                          🍢 {recipes.length} {ui.district.tabDishes}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 bg-slate-900/90">
                      <div className="flex items-center justify-between">
                        <p
                          className="kicker text-xs sm:text-sm font-extrabold tracking-wide"
                          style={{ color: c.theme.secondary }}
                        >
                          {c.district}
                        </p>
                        <span className="text-lg">{c.flag}</span>
                      </div>
                      <h3 className="mt-1 text-xl sm:text-2xl font-black text-white leading-tight">
                        {countryName(c.code, language)}
                      </h3>

                      {/* Multiple Signature Dishes Preview */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {recipes.slice(0, 3).map((r) => (
                          <span
                            key={r.id}
                            className="rounded-lg px-2.5 py-1 text-xs font-bold border transition-colors"
                            style={{
                              backgroundColor: `${c.theme.primary}26`,
                              color: '#F8FAFC',
                              borderColor: `${c.theme.primary}55`,
                            }}
                          >
                            {text(r.title, language)}
                          </span>
                        ))}
                        {recipes.length > 3 && (
                          <span
                            className="rounded-lg px-2 py-1 text-xs font-black border"
                            style={{
                              backgroundColor: `${c.theme.secondary}2a`,
                              color: '#F8FAFC',
                              borderColor: `${c.theme.secondary}55`,
                            }}
                          >
                            +{recipes.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Dual Action Footer: Explore Night Markets vs Cooking Dishes */}
                  <div className="grid grid-cols-2 border-t border-white/10 bg-slate-950/70 divide-x divide-white/10">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        onSelectCountry(c.code, 'markets');
                      }}
                      className="px-3 py-3.5 text-center text-xs sm:text-sm font-extrabold text-amber-400 hover:bg-white/5 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>🏮</span>
                      <span>{markets.length} {ui.district.tabMarkets}</span>
                    </button>

                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        onSelectCountry(c.code, 'dishes');
                      }}
                      className="px-3 py-3.5 text-center text-xs sm:text-sm font-extrabold text-stone-300 hover:bg-white/5 hover:text-amber-300 transition-colors flex items-center justify-center gap-1.5"
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

