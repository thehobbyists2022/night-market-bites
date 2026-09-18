import React, { useState, useEffect } from 'react';
import { text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { COUNTRIES } from '../config/countries';
import type { CountryRecipe } from '../types/unified';
import {
  ArrowLeft,
  Clock,
  Flame,
  Heart,
  Play,
} from 'lucide-react';
import { CookwareToggle } from './CookwareToggle';
import { ServingsScaler } from './ServingsScaler';
import { IngredientsList } from './IngredientsList';
import { NightMarketStory } from './NightMarketStory';
import { TroubleshootingFAQ } from './TroubleshootingFAQ';
import { FocusCookingMode } from './FocusCookingMode';
import { ShowToClerkModal, ClerkModalData } from './ShowToClerkModal';
import { soundEffects } from '../utils/soundEffects';
import { getUI } from '../i18n/uiStrings';

interface RecipeDetailViewProps {
  recipe: CountryRecipe;
  onBack: () => void;
}

export const RecipeDetailView: React.FC<RecipeDetailViewProps> = ({ recipe, onBack }) => {
  const { language } = useLanguage();
  const { favorites, toggleFavorite, markTasted } = useUser();
  const ui = getUI(language);

  const [units, setUnits] = useState<'metric' | 'US'>('metric');
  const [servings, setServings] = useState<number>(recipe.defaultServings || 2);
  const [selectedCookware, setSelectedCookware] = useState<string>(
    recipe.supportedCookware?.[0] || 'traditional'
  );
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);
  const [clerkModalData, setClerkModalData] = useState<ClerkModalData | null>(null);

  const meta = COUNTRIES.find((c) => c.code === recipe.country) || COUNTRIES[0];
  const ingredients = (recipe.ingredients as any[]) || [];
  const steps = (recipe.steps as any[]) || [];
  const proTips = (recipe.proTips as any[]) || [];
  const troubleshooting = (recipe.troubleshooting as any[]) || [];
  const isFav = (favorites[recipe.country] || []).includes(recipe.id);

  const recipeTitle = text(recipe.title, language);
  const recipeSubtitle = text(recipe.subtitle, language);

  useEffect(() => {
    markTasted(recipe.country, recipe.id);
  }, [recipe.country, recipe.id, markTasted]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 pt-4">
      {/* Back button & top bar */}
      <div className="my-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-2.5 text-sm sm:text-base font-bold text-stone-700 shadow-2xs hover:bg-stone-50 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>{ui.recipeDetail.backToMarket}</span>
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            toggleFavorite(recipe.country, recipe.id);
          }}
          className={`flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm sm:text-base font-bold transition-all ${
            isFav
              ? 'border-rose-300 bg-rose-50 text-rose-600 shadow-sm'
              : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
          }`}
        >
          <Heart className={`h-5 w-5 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
          <span>{isFav ? ui.recipeDetail.saved : ui.recipeDetail.save}</span>
        </button>
      </div>

      {/* Hero Banner Card */}
      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
        <div className="relative h-72 sm:h-96 lg:h-[420px] w-full overflow-hidden">
          <img
            src={recipe.heroImage}
            alt={recipeTitle}
            className="h-full w-full object-cover"
          />
          <div className="img-grad absolute inset-0" />

          {/* District badge */}
          <span
            className="absolute left-6 top-6 rounded-full px-4 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider backdrop-blur-md"
            style={{
              backgroundColor: `${meta.accent}33`,
              color: '#FFFFFF',
              border: `1px solid ${meta.accent}66`,
            }}
          >
            {meta.flag} {meta.district}
          </span>

          {/* Title on Hero */}
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl font-black leading-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl">
              {recipeTitle}
            </h1>
            {recipeSubtitle && (
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-stone-200 drop-shadow line-clamp-2">
                {recipeSubtitle}
              </p>
            )}
          </div>
        </div>

        {/* Quick Stats & CTA Bar */}
        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-5">
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-bold text-stone-600">
              <span className="flex items-center gap-1.5 rounded-2xl bg-amber-50 px-4 py-2 text-amber-900 border border-amber-200/60 font-black">
                <Clock className="h-4 w-4 text-amber-600" />
                {(recipe.prepTimeMinutes || 0) + recipe.cookTimeMinutes} min
              </span>

              <span className="flex items-center gap-1.5 rounded-2xl bg-stone-100 px-4 py-2 text-stone-800 font-black">
                <Flame className="h-4 w-4 text-rose-500" />
                {recipe.caloriesPerServing || 450} kcal
              </span>

              <span className="rounded-2xl bg-stone-100 px-4 py-2 capitalize text-stone-700 font-black">
                {recipe.difficulty}
              </span>
            </div>

            {/* Launch Focus Cooking Mode Button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setIsFocusMode(true);
              }}
              className="flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-sm sm:text-base font-black text-stone-950 shadow-glow transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>{ui.recipeDetail.startCookMode}</span>
            </button>
          </div>

          {/* Tagline */}
          {recipe.tagline && (
            <p className="mt-4 text-sm sm:text-base italic text-stone-600 font-medium">
              "{text(recipe.tagline, language)}"
            </p>
          )}
        </div>
      </div>

      {/* Main Content Grid: Left Column (Cookware + Ingredients), Right Column (Cooking Steps) */}
      <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-8 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Cookware Selector */}
          <CookwareToggle
            supportedCookware={recipe.supportedCookware || ['traditional']}
            selectedCookware={selectedCookware}
            onSelectCookware={setSelectedCookware}
          />

          {/* Ingredients Section */}
          <section className="rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-black text-stone-900 flex items-center gap-2">
                <span>🥢</span>
                <span>{ui.recipeDetail.ingredientsTitle}</span>
              </h2>

              <div className="flex items-center gap-2">
                {/* Servings Scaler */}
                <ServingsScaler
                  servings={servings}
                  baseServings={recipe.defaultServings || 2}
                  onChangeServings={setServings}
                />

                {/* Units Toggle */}
                <div className="flex rounded-xl border border-stone-200 bg-stone-100 p-0.5 text-xs font-bold">
                  {(['metric', 'US'] as const).map((u) => (
                    <button
                      key={u}
                      onClick={() => setUnits(u)}
                      className={`rounded-lg px-3 py-1 transition-colors ${
                        units === u ? 'bg-white text-stone-900 shadow-2xs font-extrabold' : 'text-stone-500'
                      }`}
                    >
                      {u === 'metric' ? 'g/ml' : 'oz'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <IngredientsList
              ingredients={ingredients}
              servings={servings}
              baseServings={recipe.defaultServings || 2}
              country={recipe.country}
              units={units}
              onOpenClerkModal={(data) => setClerkModalData(data)}
            />
          </section>
        </div>

        {/* Right Column (7 cols): Cooking Steps Preview List */}
        <div className="mt-8 lg:mt-0 lg:col-span-7 space-y-6">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
                <span>🍳</span>
                <span>{ui.recipeDetail.masterStepsTitle}</span>
              </h2>
              <button
                onClick={() => setIsFocusMode(true)}
                className="text-sm sm:text-base font-bold text-amber-600 hover:text-amber-700 underline underline-offset-4"
              >
                {ui.recipeDetail.openFullscreen}
              </button>
            </div>

            <div className="space-y-5">
              {steps.map((s: any) => {
                const cookwareVariation = s.cookwareVariations?.find(
                  (v: any) => v.cookware === selectedCookware
                );
                const instruction = cookwareVariation
                  ? text(cookwareVariation.instructionOverride, language)
                  : text(s.instruction, language);

                return (
                  <div
                    key={s.stepNumber}
                    className="rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-600">
                          {ui.recipeDetail.stepPrefix} {s.stepNumber}
                        </span>
                        <h3 className="mt-1 text-lg sm:text-xl font-black text-stone-900">
                          {text(s.title, language)}
                        </h3>
                      </div>

                      {s.durationSeconds && (
                        <span className="whitespace-nowrap rounded-full bg-amber-50 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-amber-800 border border-amber-200">
                          <Clock className="mr-1.5 inline h-4 w-4 text-amber-600" />
                          {Math.round(s.durationSeconds / 6) / 10} min
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-stone-800 font-normal">
                      {instruction}
                    </p>

                    {s.image && (
                      <img
                        src={s.image}
                        alt=""
                        className="mt-4 h-56 sm:h-72 w-full rounded-2xl object-cover border border-stone-100"
                      />
                    )}

                    {s.crucialTips && (
                      <div className="mt-4 rounded-2xl bg-amber-50/90 p-4 text-sm sm:text-base text-amber-950 border border-amber-200/70 font-medium">
                        💡 <span className="font-bold">{ui.recipeDetail.tipsPrefix}</span> {text(s.crucialTips as any, language)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Night Market Culture & Street Ordering + Troubleshooting FAQ (2 columns on desktop) */}
      <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-8 items-start">
        <section className="lg:col-span-6">
          <NightMarketStory
            culture={recipe.culture}
            country={recipe.country}
            recipeTitle={recipeTitle}
            onOpenClerkModal={(data) => setClerkModalData(data)}
          />
        </section>

        <section className="mt-8 lg:mt-0 lg:col-span-6">
          <TroubleshootingFAQ
            troubleshooting={troubleshooting}
            proTips={proTips}
          />
        </section>
      </div>

      {/* Focus Cooking Mode Modal */}
      {isFocusMode && (
        <FocusCookingMode
          recipe={recipe}
          cookware={selectedCookware}
          servings={servings}
          onExit={() => setIsFocusMode(false)}
        />
      )}

      {/* Show to Clerk Card Modal */}
      {clerkModalData && (
        <ShowToClerkModal
          data={clerkModalData}
          onClose={() => setClerkModalData(null)}
        />
      )}
    </div>
  );
};
