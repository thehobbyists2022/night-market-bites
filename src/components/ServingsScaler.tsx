import React from 'react';
import { Users, Minus, Plus } from 'lucide-react';

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
  return (
    <div className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white p-1 shadow-2xs">
      <div className="flex items-center gap-1.5 px-2 text-xs font-bold text-stone-600">
        <Users className="h-3.5 w-3.5 text-amber-600" />
        <span>{servings} Servings</span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onChangeServings(Math.max(1, servings - 1))}
          disabled={servings <= 1}
          className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 disabled:opacity-30"
          aria-label="Decrease Servings"
        >
          <Minus className="h-3 w-3" />
        </button>

        <button
          onClick={() => onChangeServings(baseServings)}
          className={`px-2 py-1 text-[10px] font-bold rounded-md transition-colors ${
            servings === baseServings
              ? 'bg-amber-100 text-amber-800'
              : 'text-stone-400 hover:text-stone-700'
          }`}
          title="Reset to default servings"
        >
          Default
        </button>

        <button
          onClick={() => onChangeServings(Math.min(12, servings + 1))}
          disabled={servings >= 12}
          className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 disabled:opacity-30"
          aria-label="Increase Servings"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};
