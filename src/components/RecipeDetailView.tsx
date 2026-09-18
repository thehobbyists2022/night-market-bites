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

interface RecipeDetailViewProps {
  recipe: CountryRecipe;
  onBack: () => void;
}

export const RecipeDetailView: React.FC<RecipeDetailViewProps> = ({ recipe, onBack }) => {
  const { language } = useLanguage();
  const { favorites, toggleFavorite, markTasted } = useUser();

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
    <div className="mx-auto max-w-3xl px-4 pb-24">
      {/* Back button & top bar */}
      <div className="my-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white px-3.5 py-2 text-xs font-bold text-stone-700 shadow-2xs hover:bg-stone-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Market</span>
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            toggleFavorite(recipe.country, recipe.id);
          }}
          className={`flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all ${
            isFav
              ? 'border-rose-300 bg-rose-50 text-rose-600 shadow-sm'
              : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
          <span>{isFav ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {/* Hero Banner Card */}
      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={recipe.heroImage}
            alt={recipeTitle}
            className="h-full w-full object-cover"
          />
          <div className="img-grad absolute inset-0" />

          {/* District badge */}
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md"
            style={{
              backgroundColor: `${meta.accent}33`,
              color: '#FFFFFF',
              border: `1px solid ${meta.accent}66`,
            }}
          >
            {meta.flag} {meta.district}
          </span>

          {/* Title on Hero */}
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-2xl font-black leading-tight text-white drop-shadow-md sm:text-3xl">
              {recipeTitle}
            </h1>
            {recipeSubtitle && (
              <p className="mt-1 text-xs sm:text-sm text-stone-200 drop-shadow line-clamp-2">
                {recipeSubtitle}
              </p>
            )}
          </div>
        </div>

        {/* Quick Stats & CTA Bar */}
        <div className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-stone-600">
              <span className="flex items-center gap-1 rounded-xl bg-amber-50 px-3 py-1.5 text-amber-900 border border-amber-200/60">
                <Clock className="h-3.5 w-3.5 text-amber-600" />
                {(recipe.prepTimeMinutes || 0) + recipe.cookTimeMinutes} min
              </span>

              <span className="flex items-center gap-1 rounded-xl bg-stone-100 px-3 py-1.5 text-stone-800">
                <Flame className="h-3.5 w-3.5 text-rose-500" />
                {recipe.caloriesPerServing || 450} kcal
              </span>

              <span className="rounded-xl bg-stone-100 px-3 py-1.5 capitalize text-stone-700">
                {recipe.difficulty}
              </span>
            </div>

            {/* Launch Focus Cooking Mode Button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setIsFocusMode(true);
              }}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-xs font-extrabold text-stone-950 shadow-glow transition-all hover:scale-105 active:scale-95"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>開始沉浸式烹飪 (Cook Mode)</span>
            </button>
          </div>

          {/* Tagline */}
          {recipe.tagline && (
            <p className="mt-3 text-xs italic text-stone-500">
              "{text(recipe.tagline, language)}"
            </p>
          )}
        </div>
      </div>

      {/* Cookware Selector */}
      <div className="mt-6">
        <CookwareToggle
          supportedCookware={recipe.supportedCookware || ['traditional']}
          selectedCookware={selectedCookware}
          onSelectCookware={setSelectedCookware}
        />
      </div>

      {/* Ingredients Section */}
      <section className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-stone-900 flex items-center gap-2">
            <span>🥢</span>
            <span>Ingredients (食材清單)</span>
          </h2>

          <div className="flex items-center gap-2">
            {/* Servings Scaler */}
            <ServingsScaler
              servings={servings}
              baseServings={recipe.defaultServings || 2}
              onChangeServings={setServings}
            />

            {/* Units Toggle */}
            <div className="flex rounded-xl border border-stone-200 bg-stone-100 p-0.5 text-[10px] font-bold">
              {(['metric', 'US'] as const).map((u) => (
                <button
                  key={u}
                  onClick={() => setUnits(u)}
                  className={`rounded-lg px-2.5 py-1 transition-colors ${
                    units === u ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500'
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

      {/* Night Market Culture & Street Ordering Card */}
      <section className="mt-8">
        <NightMarketStory
          culture={recipe.culture}
          country={recipe.country}
          recipeTitle={recipeTitle}
          onOpenClerkModal={(data) => setClerkModalData(data)}
        />
      </section>

      {/* Cooking Steps Preview List */}
      <section className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-stone-900 flex items-center gap-2">
            <span>🍳</span>
            <span>Master Steps (分步料理指南)</span>
          </h2>
          <button
            onClick={() => setIsFocusMode(true)}
            className="text-xs font-bold text-amber-600 hover:text-amber-700"
          >
            Open Fullscreen →
          </button>
        </div>

        <div className="space-y-4">
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
                className="rounded-3xl border border-stone-200/80 bg-white p-5 shadow-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600">
                      Step {s.stepNumber}
                    </span>
                    <h3 className="mt-0.5 text-base font-extrabold text-stone-900">
                      {text(s.title, language)}
                    </h3>
                  </div>

                  {s.durationSeconds && (
                    <span className="whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-800 border border-amber-200">
                      <Clock className="mr-1 inline h-3 w-3 text-amber-600" />
                      {Math.round(s.durationSeconds / 6) / 10} min
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-stone-700">
                  {instruction}
                </p>

                {s.image && (
                  <img
                    src={s.image}
                    alt=""
                    className="mt-3 h-48 w-full rounded-2xl object-cover border border-stone-100"
                  />
                )}

                {s.crucialTips && (
                  <div className="mt-3 rounded-2xl bg-amber-50/80 p-3 text-xs text-amber-900 border border-amber-200/60">
                    💡 <span className="font-bold">Tips:</span> {text(s.crucialTips as any, language)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Troubleshooting & Pro Tips */}
      <section className="mt-8">
        <TroubleshootingFAQ
          troubleshooting={troubleshooting}
          proTips={proTips}
        />
      </section>

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
