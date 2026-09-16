import React from 'react';
import { text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { COUNTRIES } from '../config/countries';
import type { CountryRecipe, IngredientLike, StepLike } from '../lib/selectRecipe';
import { ArrowLeft, Clock, Flame, Heart, Users, Volume2 } from 'lucide-react';
import { speak } from '../utils/speech';

interface RecipeDetailViewProps {
  recipe: CountryRecipe;
  onBack: () => void;
}

export const RecipeDetailView: React.FC<RecipeDetailViewProps> = ({ recipe, onBack }) => {
  const { language } = useLanguage();
  const { favorites, toggleFavorite, markTasted } = useUser();
  const [units, setUnits] = React.useState<'metric' | 'US'>('metric');
  const meta = COUNTRIES.find((c) => c.code === recipe.country)!;
  const ingredients = (recipe.ingredients as IngredientLike[]) || [];
  const steps = (recipe.steps as StepLike[]) || [];
  const proTips = (recipe.proTips as unknown[]) || [];
  const isFav = (favorites[recipe.country] || []).includes(recipe.id);

  React.useEffect(() => {
    markTasted(recipe.country, recipe.id);
  }, [recipe.country, recipe.id, markTasted]);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      <button onClick={onBack} className="mt-5 flex items-center gap-1 text-xs font-bold text-paper-muted">
        <ArrowLeft className="h-3.5 w-3.5" /> Back
      </button>

      <div className="mt-4 overflow-hidden rounded-xl border border-paper-border bg-paper-card">
        <div className="relative">
          <img src={recipe.heroImage} alt="" className="h-56 w-full object-cover sm:h-72" />
          <div className="img-grad absolute inset-0" />
          <span
            className="absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider"
            style={{ backgroundColor: `${meta.accent}26`, color: meta.accent }}
          >
            {meta.flag} {meta.district}
          </span>
          <div className="absolute right-4 bottom-4 left-4">
            <h2 className="text-2xl font-bold leading-tight text-white drop-shadow sm:text-3xl">
              {text(recipe.title, language)}
            </h2>
            <p className="mt-1 text-sm text-slate-200/90 line-clamp-2">{text(recipe.subtitle, language)}</p>
          </div>
        </div>
        <div className="p-5">

          <button
            onClick={() => toggleFavorite(recipe.country, recipe.id)}
            className={`mt-3 flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold ${
              isFav
                ? 'border-paper-persimmon bg-paper-persimmon/10 text-paper-persimmon'
                : 'border-paper-border text-paper-muted'
            }`}
          >
            <Heart className={`h-3.5 w-3.5 ${isFav ? 'fill-current' : ''}`} />
            {isFav ? 'In pocket list' : 'Add to pocket list'}
          </button>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold text-paper-muted">
            <span className="flex items-center gap-1 rounded-full bg-paper-soft px-3 py-1.5">
              <Clock className="h-3.5 w-3.5 text-paper-gold" />
              {(recipe.prepTimeMinutes || 0) + recipe.cookTimeMinutes} min
            </span>
            <span className="flex items-center gap-1 rounded-full bg-paper-soft px-3 py-1.5">
              <Users className="h-3.5 w-3.5 text-paper-gold" />
              {recipe.defaultServings || 2}
            </span>
            {recipe.caloriesPerServing && (
              <span className="flex items-center gap-1 rounded-full bg-paper-soft px-3 py-1.5">
                <Flame className="h-3.5 w-3.5 text-paper-persimmon" />
                {recipe.caloriesPerServing} kcal
              </span>
            )}
            <span className="rounded-full bg-paper-soft px-3 py-1.5 capitalize">{recipe.difficulty}</span>
          </div>

          {(recipe.culture?.nativeName || recipe.culture?.audioPronunciationText) && (
            <div className="mt-4 rounded-lg bg-paper-soft px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-paper-muted">Show this card to the clerk</p>
              {recipe.culture?.nativeName && (
                <p className="mt-0.5 flex items-center justify-between gap-2">
                  <span>
                    <span className="text-lg font-bold text-paper-gold">{recipe.culture.nativeName}</span>
                    {recipe.culture?.nativePhonetics && (
                      <span className="block text-xs italic text-paper-muted">{recipe.culture.nativePhonetics}</span>
                    )}
                  </span>
                  {recipe.culture?.audioPronunciationText && (
                    <button
                      onClick={() => speak(String(recipe.culture!.audioPronunciationText), recipe.country)}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-paper-soft text-paper-ink"
                      title="Pronounce"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  )}
                </p>
              )}
              {!recipe.culture?.nativeName && recipe.culture?.audioPronunciationText && (
                <button
                  onClick={() => speak(String(recipe.culture!.audioPronunciationText), recipe.country)}
                  className="mt-1.5 flex items-center gap-1.5 rounded-xl bg-paper-soft border border-paper-border px-3 py-1.5 text-xs font-bold text-paper-ink"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                  Pronounce
                </button>
              )}
              <p className="mt-1.5 text-[10px] text-paper-muted">
                Cannot buy the exact plates? Key ingredients with their local names are listed below; show them to shop staff.
              </p>
            </div>
          )}
        </div>
      </div>

      <section className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-bold text-paper-ink">Ingredients</h3>
          <div className="flex rounded-xl border border-paper-border bg-paper-soft p-0.5 text-[11px] font-bold">
            {(['metric', 'US'] as const).map((u) => (
              <button
                key={u}
                onClick={() => setUnits(u)}
                className={`rounded-lg px-3 py-1.5 ${units === u ? 'bg-paper-soft text-paper-ink' : 'text-paper-muted'}`}
              >
                {u === 'metric' ? 'g / ml' : 'oz / cup'}
              </button>
            ))}
          </div>
        </div>
        <ul className="space-y-2">
          {ingredients.map((ing, i) => (
            <li key={i} className="flex items-start justify-between gap-3 rounded-lg border border-paper-border bg-paper-card px-4 py-3">
              <span className="min-w-0">
                <span className="text-sm text-paper-ink">
                  {text(ing.name, language)}
                  {ing.isKeyFlavor && (
                    <span className="ml-2 rounded-full bg-night-mint/20 px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-paper-olive">
                      key
                    </span>
                  )}
                </span>
                <IngredientNative ing={ing} />
              </span>
              <span className="whitespace-nowrap text-right text-sm font-bold text-paper-gold">
                {ing.amount} {units === 'metric' ? ing.unitMetric : ing.unitUS}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-base font-bold text-paper-ink">Master steps</h3>
        <ol className="mt-3 space-y-3">
          {steps.map((s) => (
            <li key={s.stepNumber} className="rounded-xl border border-paper-border bg-paper-card p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-paper-persimmon">
                    Step {s.stepNumber}
                  </p>
                  <h4 className="mt-0.5 text-sm font-bold text-paper-ink">{text(s.title, language)}</h4>
                </div>
                {s.durationSeconds && (
                  <span className="whitespace-nowrap rounded-full bg-paper-soft px-2.5 py-1 text-[10px] font-bold text-paper-muted">
                    <Clock className="mr-1 inline h-3 w-3" />
                    {Math.round(s.durationSeconds / 6) / 10} min
                  </span>
                )}
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-300">{text(s.instruction, language)}</p>
              {s.image && <img src={s.image} alt="" className="mt-3 h-40 w-full rounded-lg object-cover" />}
              {s.crucialTips && (
                <p className="mt-2.5 rounded-xl bg-paper-soft px-3 py-2 text-xs text-paper-ink border border-paper-border">
                  💡 {text(s.crucialTips as never, language)}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>

      {proTips.length > 0 && (
        <section className="mt-6">
          <h3 className="text-base font-bold text-paper-ink">Pro tips</h3>
          <ul className="mt-2 space-y-2">
            {proTips.map((tip, i) => (
              <li key={i} className="rounded-lg border border-paper-border bg-paper-card px-4 py-3 text-[13px] text-slate-300">
                {text(tip as never, language)}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

const IngredientNative: React.FC<{ ing: IngredientLike }> = ({ ing }) => {
  const native =
    (ing as Record<string, unknown>).koreanName ||
    (ing as Record<string, unknown>).japaneseKanji ||
    (ing as Record<string, unknown>).chineseName ||
    (ing as Record<string, unknown>).thaiName ||
    (ing as Record<string, unknown>).malayName ||
    (ing as Record<string, unknown>).filipinoName;
  const phonetic =
    (ing as Record<string, unknown>).koreanPronunciation ||
    (ing as Record<string, unknown>).japaneseRomaji ||
    (ing as Record<string, unknown>).englishPronunciation;
  if (typeof native !== 'string') return null;
  return (
    <span className="mt-0.5 block text-[11px] font-bold text-paper-gold">
      {native}
      {typeof phonetic === 'string' && <span className="ml-1.5 font-normal italic text-paper-muted">{phonetic}</span>}
    </span>
  );
};


