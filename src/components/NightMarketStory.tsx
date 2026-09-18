import React, { useState } from 'react';
import { text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';
import { BookOpen, Volume2, MapPin, Sparkles, Store } from 'lucide-react';
import { speak } from '../utils/speech';
import type { CountryCode } from '../types/unified';
import type { ClerkModalData } from './ShowToClerkModal';
import { getPhraseDetails } from '../utils/phraseTranslation';

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
  const ui = getUI(language);
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

  const phraseDetails = getPhraseDetails(orderPhrase, language, country);

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
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-400/40 bg-amber-500/20 text-amber-400">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg sm:text-xl font-black text-white">
              <span>{ui.recipeDetail.originsTitle}</span>
              {language === 'zh-TW' && (
                <span className="text-xs sm:text-sm font-bold text-amber-400">・{ui.recipeDetail.originsSubtitle}</span>
              )}
            </h3>
          </div>
        </div>

        {/* Street Ordering Phrase Card */}
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-1.5 text-xs font-black tracking-wider text-amber-300 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{ui.recipeDetail.orderingPhraseTitle}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-wide text-white">
              {orderPhrase}
            </div>
            {phonetic && (
              <div className="font-mono text-sm sm:text-base text-amber-200/90 font-medium">
                {phonetic}
              </div>
            )}

            {/* Localized Meaning & Breakdown for foreign visitors */}
            {phraseDetails && (
              <div className="mt-2 rounded-xl border border-amber-400/20 bg-black/30 p-3 space-y-1.5 text-left">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300 block">
                    💡 {ui.recipeDetail.phraseMeaningLabel}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white/90 block mt-0.5 leading-snug">
                    {phraseDetails.meaning}
                  </span>
                </div>
                {phraseDetails.breakdown && (
                  <div className="pt-1.5 border-t border-white/10">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300 block">
                      🔍 {ui.recipeDetail.phraseBreakdownLabel}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-amber-100/80 block mt-0.5 leading-relaxed">
                      {phraseDetails.breakdown}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Audio Button */}
            <button
              onClick={handleSpeak}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs sm:text-sm font-black text-stone-950 shadow-md shadow-amber-500/25 transition-all hover:bg-amber-400 active:scale-95"
            >
              <Volume2 className={`h-4 w-4 sm:h-5 sm:w-5 ${isPlaying ? 'animate-bounce' : ''}`} />
              <span>{isPlaying ? ui.recipeDetail.speaking : ui.recipeDetail.listenPronunciation}</span>
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
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              <Store className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
              <span>{ui.recipeDetail.stallFlashcard}</span>
            </button>
          </div>
        </div>

        {/* Cultural Lore Story */}
        {culture.historyStory && (
          <p className="text-sm sm:text-base leading-relaxed text-stone-200">
            {text(culture.historyStory, language)}
          </p>
        )}

        {/* Famous Night Markets Badges */}
        {culture.famousNightMarkets && Array.isArray(culture.famousNightMarkets) && (
          <div className="flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-3.5 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 font-bold text-amber-400">
              <MapPin className="h-4 w-4" />
              <span>{ui.recipeDetail.famousMarkets}</span>
            </span>
            {culture.famousNightMarkets.map((nm: any, idx: number) => (
              <span
                key={idx}
                className="rounded-xl border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-stone-200"
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
