import React, { useState, useEffect } from 'react';
import { COUNTRIES, countryName } from '../config/countries';
import { categoriesOf, recipesOf, text } from '../lib/selectRecipe';
import { getNightMarketsByCountry } from '../data/nightMarkets';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import type { CountryCode, CountryRecipe } from '../types/unified';
import { ArrowLeft, Clock, Flame, Heart, Filter, Store, Utensils } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';
import { getUI } from '../i18n/uiStrings';
import { NightMarketExplorer } from './NightMarketExplorer';

interface DistrictViewProps {
  country: CountryCode;
  onBack: () => void;
  onSelectRecipe: (r: CountryRecipe) => void;
  initialTab?: 'dishes' | 'markets';
}

export const DistrictView: React.FC<DistrictViewProps> = ({
  country,
  onBack,
  onSelectRecipe,
  initialTab = 'markets',
}) => {
  const { language } = useLanguage();
  const { favorites } = useUser();
  const meta = COUNTRIES.find((c) => c.code === country) || COUNTRIES[0];
  const recipes = recipesOf(country);
  const markets = getNightMarketsByCountry(country);
  const cats = ['all', ...categoriesOf(country)];
  const [selectedCat, setSelectedCat] = useState('all');
  const [activeTab, setActiveTab] = useState<'dishes' | 'markets'>(initialTab);
  const ui = getUI(language);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, country]);

  const shownRecipes =
    selectedCat === 'all'
      ? recipes
      : recipes.filter((r) => r.category === selectedCat);

  return (
    <div
      className="min-h-screen pb-24 pt-6 transition-colors duration-300 -mt-6"
      style={{ backgroundColor: meta.theme.pageBg }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-xl border border-stone-200/80 bg-white/90 px-4 py-2.5 text-xs sm:text-sm font-bold text-stone-700 shadow-2xs hover:bg-white transition-colors backdrop-blur-md"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{ui.district.allMarkets}</span>
        </button>

        {/* District Header Banner */}
        <div
          className="mt-5 overflow-hidden rounded-3xl p-7 sm:p-10 lg:p-12 text-white shadow-2xl relative"
          style={{
            background: meta.theme.gradient,
            border: `2px solid ${meta.theme.secondary}66`,
          }}
        >
          {/* Ambient ambient glows */}
          <div
            className="absolute -right-10 -top-10 h-80 w-80 rounded-full opacity-35 blur-3xl pointer-events-none"
            style={{ background: meta.theme.secondary }}
          />
          <div
            className="absolute -left-10 -bottom-10 h-80 w-80 rounded-full opacity-25 blur-3xl pointer-events-none"
            style={{ background: meta.theme.primary }}
          />

          <div className="flex flex-wrap items-center justify-between gap-6 relative z-10">
            <div className="flex-1 min-w-[240px]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-3xl sm:text-4xl">{meta.flag}</span>
                <span className="rounded-full bg-black/30 px-3.5 py-1 text-xs sm:text-sm font-extrabold backdrop-blur-md border border-white/20">
                  {meta.name} Night Market District
                </span>
                {meta.appName && (
                  <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-black text-white border border-white/30 backdrop-blur-md shadow-sm">
                    {meta.appName}
                  </span>
                )}
              </div>
              <h1 className="mt-3 text-3xl font-black sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-sm">
                {meta.district}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-white/90">
                {countryName(country, language)} · {markets.length} {ui.district.marketCount} · {recipes.length} {ui.district.districtDishes}
              </p>
            </div>

            {/* Authentic App Icon */}
            {meta.appIcon && (
              <div className="shrink-0">
                <img
                  src={meta.appIcon}
                  alt={meta.appName}
                  className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-3xl border-2 border-white/40 shadow-2xl object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Top Segmented Navigation Tab: Markets vs Dishes */}
        <div className="mt-8 flex items-center gap-3 border-b border-stone-200/80 pb-4">
          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('markets');
            }}
            className={`flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-xs sm:text-sm lg:text-base font-extrabold transition-all ${
              activeTab === 'markets'
                ? 'text-white shadow-lg scale-[1.02]'
                : 'border border-stone-200 bg-white/80 text-stone-700 hover:bg-white'
            }`}
            style={activeTab === 'markets' ? { backgroundColor: meta.theme.primary } : undefined}
          >
            <Store className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>{ui.district.tabMarkets} ({markets.length})</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('dishes');
            }}
            className={`flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-xs sm:text-sm lg:text-base font-extrabold transition-all ${
              activeTab === 'dishes'
                ? 'text-white shadow-lg scale-[1.02]'
                : 'border border-stone-200 bg-white/80 text-stone-700 hover:bg-white'
            }`}
            style={activeTab === 'dishes' ? { backgroundColor: meta.theme.primary } : undefined}
          >
            <Utensils className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>{ui.district.tabDishes} ({recipes.length})</span>
          </button>
        </div>

        {activeTab === 'dishes' ? (
          <>
            {/* Category Filter Bar */}
            <div className="mt-6 flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-stone-500 pl-1 shrink-0">
                <Filter className="h-4 w-4" />
                <span>{ui.district.categoryLabel}</span>
              </div>
              {cats.map((c) => {
                const isSelected = selectedCat === c;
                return (
                  <button
                    key={c}
                    onClick={() => {
                      soundEffects.playClick();
                      setSelectedCat(c);
                    }}
                    className={`shrink-0 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold capitalize transition-all ${
                      isSelected
                        ? 'text-white shadow-sm scale-[1.02]'
                        : 'border border-stone-200 bg-white/80 text-stone-700 hover:bg-white'
                    }`}
                    style={isSelected ? { backgroundColor: meta.theme.primary } : undefined}
                  >
                    {c === 'all' ? ui.district.allCategory : c}
                  </button>
                );
              })}
            </div>

          {/* Recipe Cards Grid */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shownRecipes.map((r) => {
              const isFav = (favorites[country] || []).includes(r.id);
              const title = text(r.title, language);
              const subtitle = text(r.subtitle, language);
              const native =
                language !== 'en' && typeof r.culture?.nativeName === 'string'
                  ? r.culture.nativeName
                  : undefined;

              return (
                <button
                  key={r.id}
                  onClick={() => {
                    soundEffects.playClick();
                    onSelectRecipe(r);
                  }}
                  className="card-e card-e-hover group overflow-hidden text-left"
                >
                  {/* Recipe Cover */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                    <img
                      src={r.heroImage}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="img-grad absolute inset-0" />

                    {/* Cook time badge */}
                    <span className="absolute right-3.5 bottom-3.5 flex items-center gap-1.5 rounded-xl bg-black/70 px-3 py-1.5 text-xs font-extrabold text-white backdrop-blur-md">
                      <Clock className="h-3.5 w-3.5 text-amber-400" />
                      {r.cookTimeMinutes} min
                    </span>

                    {/* Favorite indicator */}
                    {isFav && (
                      <span className="absolute top-3.5 right-3.5 rounded-full bg-rose-500/90 p-2 text-white shadow-sm">
                        <Heart className="h-4 w-4 fill-current" />
                      </span>
                    )}
                  </div>

                  {/* Recipe Details */}
                  <div className="p-5">
                    <h3 className="font-black text-base sm:text-lg text-stone-900 leading-snug line-clamp-1">
                      {title}
                    </h3>

                    {native && (
                      <p className="text-xs sm:text-sm font-bold text-amber-700 mt-1">
                        {native}
                      </p>
                    )}

                    {subtitle && (
                      <p className="mt-1.5 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                        {subtitle}
                      </p>
                    )}

                    <div className="mt-3.5 flex flex-wrap items-center gap-2 border-t border-stone-100 pt-3">
                      <span className="chip-e capitalize text-xs font-bold px-2.5 py-1">
                        {r.difficulty}
                      </span>
                      <span className="chip-e capitalize text-xs font-bold text-amber-800 bg-amber-50 border-amber-200/60 px-2.5 py-1">
                        {r.category}
                      </span>
                      {r.caloriesPerServing && (
                        <span className="chip-e text-xs text-stone-600 px-2.5 py-1">
                          <Flame className="h-3.5 w-3.5 mr-1 text-rose-500 inline" />
                          {r.caloriesPerServing} kcal
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </>
      ) : (
        /* Comprehensive Night Market Explorer */
        <div className="mt-8">
          <NightMarketExplorer
            country={country}
            onSelectRecipe={onSelectRecipe}
          />
        </div>
      )}
      </div>
    </div>
  );
};
