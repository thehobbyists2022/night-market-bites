import React, { useState } from 'react';
import { text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Volume2, MapPin, Sparkles, Store } from 'lucide-react';
import { speak } from '../utils/speech';
import type { CountryCode } from '../types/unified';
import type { ClerkModalData } from './ShowToClerkModal';

interface NightMarketStoryProps {
  culture: any;
  country: CountryCode;
  recipeTitle: string;
  onOpenClerkModal: (data: ClerkModalData) => void;
}

export const NightMarketStory: React.FC<NightMarketStoryProps> = ({
  culture,
  country,
  recipeTitle,
  onOpenClerkModal,
}) => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  if (!culture) return null;

  const nativeName =
    culture.nativeName ||
    culture.japaneseKanji ||
    culture.koreanName ||
    culture.thaiName ||
    culture.vietnameseName ||
    culture.chineseName;

  const phonetic =
    culture.nativePhonetics ||
    culture.mandarinPinyin ||
    culture.japaneseRomaji ||
    culture.koreanPronunciation ||
    culture.thaiPhonetics;

  const orderPhrase =
    culture.audioPronunciationText ||
    culture.orderPhrase ||
    nativeName ||
    recipeTitle;

  const handleSpeak = () => {
    setIsPlaying(true);
    speak(orderPhrase, country, {
      rate: 0.85,
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  };

  return (
    <div className="relative mb-8 overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950/50 p-6 text-white shadow-xl">
      {/* Lantern Glow Background */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-amber-400/40 bg-amber-500/20 text-amber-400">
            <BookOpen className="h-4 w-4" />
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-base font-extrabold text-white">
              <span>Night Market Origins</span>
              <span className="text-xs font-normal text-amber-400">・夜市文化與起源</span>
            </h3>
          </div>
        </div>

        {/* Street Ordering Phrase Card */}
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider text-amber-300 uppercase">
              <Sparkles className="h-3 w-3" />
              <span>Street Food Ordering Phrase (點餐短語)</span>
            </div>
            <div className="text-xl font-extrabold tracking-wide text-white">
              {orderPhrase}
            </div>
            {phonetic && (
              <div className="font-mono text-xs text-amber-200/90">
                {phonetic}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Audio Button */}
            <button
              onClick={handleSpeak}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-3.5 py-2 text-xs font-bold text-stone-950 shadow-md shadow-amber-500/25 transition-all hover:bg-amber-400 active:scale-95"
            >
              <Volume2 className={`h-4 w-4 ${isPlaying ? 'animate-bounce' : ''}`} />
              <span>{isPlaying ? 'Speaking...' : '發音 (Listen)'}</span>
            </button>

            {/* Show Stall Card */}
            <button
              onClick={() =>
                onOpenClerkModal({
                  type: 'dish',
                  country,
                  nativeTitle: nativeName || orderPhrase,
                  phoneticTitle: phonetic,
                  userLangTitle: recipeTitle,
                  orderPhrase,
                })
              }
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-white/20"
            >
              <Store className="h-4 w-4 text-amber-300" />
              <span>攤販文字卡</span>
            </button>
          </div>
        </div>

        {/* Cultural Lore Story */}
        {culture.historyStory && (
          <p className="text-xs sm:text-sm leading-relaxed text-stone-300">
            {text(culture.historyStory, language)}
          </p>
        )}

        {/* Famous Night Markets Badges */}
        {culture.famousNightMarkets && Array.isArray(culture.famousNightMarkets) && (
          <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-3 text-xs">
            <span className="flex items-center gap-1 font-bold text-amber-400">
              <MapPin className="h-3.5 w-3.5" />
              <span>Famous Stalls (著名夜市):</span>
            </span>
            {culture.famousNightMarkets.map((nm: any, idx: number) => (
              <span
                key={idx}
                className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] text-stone-200"
              >
                {typeof nm === 'string' ? nm : text(nm, language)}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
