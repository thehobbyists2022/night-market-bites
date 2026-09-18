import React from 'react';
import { Users, Minus, Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';

interface ServingsScalerProps {
  servings: number;
  baseServings: number;
  onChangeServings: (next: number) => void;
}

export const ServingsScaler: React.FC<ServingsScalerProps> = ({
  servings,
  baseServings,
  onChangeServings,
}) => {
  const { language } = useLanguage();
  const ui = getUI(language);

  return (
    <div className="flex items-center gap-2.5 rounded-2xl border border-stone-200 bg-white p-1.5 shadow-2xs">
      <div className="flex items-center gap-2 px-2.5 text-xs sm:text-sm font-extrabold text-stone-800">
        <Users className="h-4 w-4 text-amber-600" />
        <span>{servings} {ui.recipeDetail.servings}</span>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onChangeServings(Math.max(1, servings - 1))}
          disabled={servings <= 1}
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 disabled:opacity-30 transition-colors"
          aria-label="Decrease Servings"
        >
          <Minus className="h-4 w-4" />
        </button>

        <button
          onClick={() => onChangeServings(baseServings)}
          className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
            servings === baseServings
              ? 'bg-amber-100 text-amber-900 font-extrabold'
              : 'text-stone-500 hover:text-stone-800'
          }`}
          title="Reset to default servings"
        >
          {ui.recipeDetail.defaultServings}
        </button>

        <button
          onClick={() => onChangeServings(Math.min(12, servings + 1))}
          disabled={servings >= 12}
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 disabled:opacity-30 transition-colors"
          aria-label="Increase Servings"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
