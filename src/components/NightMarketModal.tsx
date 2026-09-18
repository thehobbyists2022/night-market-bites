import React, { useState } from 'react';
import type { NightMarketItem, CountryRecipe } from '../types/unified';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';
import { text, findRecipeByIdOrSlug } from '../lib/selectRecipe';
import { COUNTRIES, countryName } from '../config/countries';
import { speak } from '../utils/speech';
import { soundEffects } from '../utils/soundEffects';
import {
  X,
  Clock,
  Navigation,
  Sparkles,
  Volume2,
  Utensils,
  ChevronRight,
  MapPin,
} from 'lucide-react';

interface NightMarketModalProps {
  market: NightMarketItem;
  onClose: () => void;
  onSelectRecipe?: (recipe: CountryRecipe) => void;
}

export const NightMarketModal: React.FC<NightMarketModalProps> = ({
  market,
  onClose,
  onSelectRecipe,
}) => {
  const { language } = useLanguage();
  const ui = getUI(language);
  const [isPlaying, setIsPlaying] = useState(false);

  const countryMeta = COUNTRIES.find((c) => c.code === market.country) || COUNTRIES[0];
  const marketName = text(market.name, language);
  const cityName = text(market.city, language);
  const description = text(market.description, language);
  const hours = text(market.openingHours, language);
  const transit = text(market.transportInfo, language);
  const funFact = text(market.funFact, language);
  const slangMeaning = text(market.localSlangMeaning, language);

  const handleSpeak = () => {
    if (!market.localSlangOrderPhrase) return;
    setIsPlaying(true);
    soundEffects.playClick();
    speak(market.localSlangOrderPhrase, market.country, {
      rate: 0.85,
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-amber-500/30 bg-warm-card shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image Header */}
        <div className="relative h-60 sm:h-72 w-full shrink-0 overflow-hidden bg-stone-900">
          <img
            src={market.imageUrl}
            alt={marketName}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-950/70 text-white shadow-lg backdrop-blur-md transition-all hover:bg-stone-900 active:scale-95"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Badges on Top Left */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-stone-950/80 px-3 py-1 text-xs font-black text-white backdrop-blur-md">
              <span>{countryMeta.flag}</span>
              <span>{countryName(market.country, language)}</span>
            </span>
            <span className="flex items-center gap-1 rounded-full bg-amber-500/90 px-2.5 py-1 text-xs font-black text-stone-950 shadow-sm backdrop-blur-md">
              <MapPin className="h-3 w-3" />
              <span>{cityName}</span>
            </span>
          </div>

          {/* Title on bottom of hero */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
              {ui.nightMarketModal.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">
              {marketName}
            </h2>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Description */}
          <p className="text-sm leading-relaxed text-stone-700 sm:text-base">
            {description}
          </p>

          {/* Key Facts: Hours & Transit Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Hours */}
            {hours && (
              <div className="flex items-start gap-3 rounded-2xl border border-stone-200/80 bg-white p-3.5 shadow-2xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-stone-400">
                    {ui.nightMarketModal.hours}
                  </h4>
                  <p className="mt-0.5 text-xs sm:text-sm font-bold text-stone-800">
                    {hours}
                  </p>
                </div>
              </div>
            )}

            {/* Transit */}
            {transit && (
              <div className="flex items-start gap-3 rounded-2xl border border-stone-200/80 bg-white p-3.5 shadow-2xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-stone-400">
                    {ui.nightMarketModal.transit}
                  </h4>
                  <p className="mt-0.5 text-xs sm:text-sm font-bold text-stone-800">
                    {transit}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Local Slang Ordering Phrase Card */}
          {market.localSlangOrderPhrase && (
            <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-stone-900 to-amber-950/60 p-4 text-white shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{ui.nightMarketModal.orderPhrase}</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-white">
                    {market.localSlangOrderPhrase}
                  </div>
                  {market.localSlangRomaji && (
                    <div className="font-mono text-xs text-amber-200/80">
                      {market.localSlangRomaji}
                    </div>
                  )}
                  {slangMeaning && (
                    <div className="text-xs text-stone-300">
                      💡 {slangMeaning}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSpeak}
                  disabled={isPlaying}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-4 py-2.5 text-xs font-black text-stone-950 shadow-md transition-all active:scale-95 disabled:opacity-50"
                >
                  <Volume2 className={`h-4 w-4 ${isPlaying ? 'animate-bounce' : ''}`} />
                  <span>
                    {isPlaying
                      ? ui.nightMarketModal.speakingBtn
                      : ui.nightMarketModal.speakBtn}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Pro Tip / Fun Fact */}
          {funFact && (
            <div className="flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50/80 p-4">
              <span className="text-xl">💡</span>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-900">
                  {ui.nightMarketModal.proTip}
                </h4>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-amber-950">
                  {funFact}
                </p>
              </div>
            </div>
          )}

          {/* Signature Street Foods */}
          {market.signatureDishes && market.signatureDishes.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Utensils className="h-4 w-4 text-amber-600" />
                <h3 className="text-sm font-black uppercase tracking-wider text-stone-900">
                  {ui.nightMarketModal.signatureDishes}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {market.signatureDishes.map((dishKey) => {
                  const recipe = findRecipeByIdOrSlug(dishKey);
                  const title = recipe
                    ? text(recipe.title, language)
                    : dishKey
                        .split('-')
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join(' ');

                  return (
                    <button
                      key={dishKey}
                      onClick={() => {
                        if (recipe && onSelectRecipe) {
                          soundEffects.playClick();
                          onClose();
                          onSelectRecipe(recipe);
                        }
                      }}
                      disabled={!recipe}
                      className={`flex items-center justify-between gap-2 rounded-xl border p-3 text-left transition-all ${
                        recipe
                          ? 'border-amber-200 bg-white hover:border-amber-400 hover:bg-amber-50/50 active:scale-[0.99] cursor-pointer shadow-2xs'
                          : 'border-stone-200 bg-stone-50/50 cursor-default opacity-80'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {recipe?.heroImage ? (
                          <img
                            src={recipe.heroImage}
                            alt=""
                            className="h-10 w-10 rounded-lg object-cover shrink-0"
                          />
                        ) : (
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 text-sm font-black">
                            🍢
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-xs font-extrabold text-stone-900 truncate">
                            {title}
                          </p>
                          {recipe && (
                            <p className="text-[10px] text-amber-700 font-bold">
                              {recipe.cookTimeMinutes} min · {recipe.difficulty}
                            </p>
                          )}
                        </div>
                      </div>

                      {recipe && (
                        <div className="flex items-center gap-1 text-[11px] font-extrabold text-amber-600 shrink-0">
                          <span>{ui.nightMarketModal.viewRecipeBtn}</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action */}
        <div className="border-t border-stone-200/80 bg-stone-50 px-5 py-3.5 flex justify-end">
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="rounded-xl border border-stone-300 bg-white px-5 py-2 text-xs font-black text-stone-700 hover:bg-stone-100 active:scale-95"
          >
            {ui.nightMarketModal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
