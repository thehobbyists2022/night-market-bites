import React, { useState } from 'react';
import { text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';
import { Sparkles, ShoppingCart, Store, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import type { CountryCode } from '../types/unified';
import type { ClerkModalData } from './ShowToClerkModal';

interface IngredientsListProps {
  ingredients: any[];
  servings: number;
  baseServings: number;
  country: CountryCode;
  units: 'metric' | 'US';
  onOpenClerkModal: (data: ClerkModalData) => void;
}

export const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  servings,
  baseServings,
  country,
  units,
  onOpenClerkModal,
}) => {
  const { language } = useLanguage();
  const ui = getUI(language);
  const [expandedSubId, setExpandedSubId] = useState<string | null>(null);

  const calculateAmount = (baseAmount: number | undefined) => {
    if (!baseAmount) return '';
    const scale = servings / (baseServings || 2);
    const scaled = baseAmount * scale;
    return Number.isInteger(scaled) ? scaled : Math.round(scaled * 10) / 10;
  };

  const getNativeName = (ing: any): { native: string; phonetic?: string } => {
    const native =
      ing.chineseName ||
      ing.thaiName ||
      ing.japaneseKanji ||
      ing.koreanName ||
      ing.vietnameseName ||
      ing.malayName ||
      ing.filipinoName ||
      text(ing.name, language);

    const phonetic =
      ing.chinesePinyin ||
      ing.thaiPhonetics ||
      ing.japaneseRomaji ||
      ing.koreanPronunciation ||
      ing.englishPronunciation;

    return { native: String(native), phonetic: phonetic ? String(phonetic) : undefined };
  };

  return (
    <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-7 shadow-sm">
      <div className="divide-y divide-stone-100">
        {ingredients.map((item, idx) => {
          const isSubExpanded = expandedSubId === (item.id || idx.toString());
          const displayAmount = calculateAmount(item.amount);
          const unit = units === 'metric' ? item.unitMetric : item.unitUS;
          const { native, phonetic } = getNativeName(item);
          const userTitle = text(item.name, language);

          // Amazon search query
          const amazonQuery = item.name?.en || native || userTitle;
          const amazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent(amazonQuery)}&tag=nightmarketbites-20`;

          return (
            <div key={item.id || idx} className="py-4 sm:py-5 first:pt-0 last:pb-0">
              <div className="flex items-start justify-between gap-4">
                {/* Ingredient Name & Badges */}
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="font-black text-base sm:text-lg text-stone-900">
                      {userTitle}
                    </span>
                    {item.isKeyFlavor && (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-amber-100 px-2.5 py-1 text-xs font-black text-amber-800">
                        <Sparkles className="h-3 w-3" />
                        {ui.recipeDetail.keyFlavor}
                      </span>
                    )}
                  </div>

                  {native && (
                    <div className="mt-1 text-sm sm:text-base text-amber-700 font-semibold">
                      {native}
                      {phonetic && <span className="ml-2 font-normal italic text-xs sm:text-sm text-stone-500">({phonetic})</span>}
                    </div>
                  )}
                </div>

                {/* Amount */}
                {displayAmount !== '' && (
                  <div className="whitespace-nowrap text-right pl-2">
                    <span className="text-lg sm:text-xl font-black text-amber-800">{displayAmount}</span>
                    <span className="ml-1.5 text-sm sm:text-base font-bold text-stone-600">{unit}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons: Amazon Buy & Show to Clerk & Substitute */}
              <div className="mt-3 flex items-center gap-2.5 flex-wrap">
                {/* Direct Amazon Buy Button */}
                <a
                  href={amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 px-3.5 py-1.5 text-xs sm:text-sm font-black text-amber-900 shadow-2xs transition-all hover:bg-amber-100 hover:scale-105 active:scale-95"
                  title="Search authentic ingredients on Amazon Prime"
                >
                  <ShoppingCart className="h-3.5 w-3.5 text-amber-700" />
                  <span>{ui.recipeDetail.buyOnAmazon}</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>

                {/* Show to Clerk Button (Flashcard) */}
                <button
                  onClick={() =>
                    onOpenClerkModal({
                      type: 'ingredient',
                      country,
                      nativeTitle: native,
                      phoneticTitle: phonetic,
                      userLangTitle: userTitle,
                      whereToBuy: item.substitute?.whereToBuy
                        ? text(item.substitute.whereToBuy, language)
                        : undefined,
                      substituteName: item.substitute?.substituteName
                        ? text(item.substitute.substituteName, language)
                        : undefined,
                      substituteExplanation: item.substitute?.explanation
                        ? text(item.substitute.explanation, language)
                        : undefined,
                    })
                  }
                  className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-stone-700 transition-colors hover:bg-stone-100"
                >
                  <Store className="h-3.5 w-3.5 text-stone-500" />
                  <span>{ui.recipeDetail.clerkCardBtn}</span>
                </button>

                {/* Substitute Accordion Trigger */}
                {item.substitute && (
                  <button
                    onClick={() => setExpandedSubId(isSubExpanded ? null : (item.id || idx.toString()))}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs sm:text-sm font-bold transition-colors ${
                      isSubExpanded
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                        : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>{ui.recipeDetail.substituteBtn}</span>
                    {isSubExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </button>
                )}
              </div>

              {/* Substitute Detail Accordion */}
              {item.substitute && isSubExpanded && (
                <div className="mt-3 rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-4 text-xs sm:text-sm text-stone-800 space-y-2 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-emerald-950 text-sm sm:text-base">
                      💡 {text(item.substitute.substituteName, language)}
                    </span>
                    {item.substitute.ratio && (
                      <span className="rounded-lg bg-emerald-200/80 px-2.5 py-0.5 text-xs font-black text-emerald-950">
                        {ui.recipeDetail.substituteRatio} {item.substitute.ratio}
                      </span>
                    )}
                  </div>
                  {item.substitute.explanation && (
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {text(item.substitute.explanation, language)}
                    </p>
                  )}
                  {item.substitute.whereToBuy && (
                    <p className="text-xs sm:text-sm text-emerald-900 font-bold">
                      🛒 {text(item.substitute.whereToBuy, language)}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
