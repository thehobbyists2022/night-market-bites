import React from 'react';
import { Flame, Wind, Zap, Disc } from 'lucide-react';

interface CookwareToggleProps {
  supportedCookware: string[];
  selectedCookware: string;
  onSelectCookware: (cw: string) => void;
}

const COOKWARE_META: Record<string, { label: string; icon: any; color: string }> = {
  traditional: { label: 'Traditional (Stove/Wok)', icon: Flame, color: 'text-orange-500' },
  airFryer: { label: 'Air Fryer (氣炸鍋)', icon: Wind, color: 'text-cyan-500' },
  instantPot: { label: 'Instant Pot (壓力鍋)', icon: Zap, color: 'text-purple-500' },
  takoyakiPlate: { label: 'Takoyaki Plate (章魚燒盤)', icon: Disc, color: 'text-amber-500' },
  oven: { label: 'Oven (烤箱)', icon: Flame, color: 'text-red-500' },
  riceCooker: { label: 'Rice Cooker (電鍋)', icon: Zap, color: 'text-emerald-500' },
};

export const CookwareToggle: React.FC<CookwareToggleProps> = ({
  supportedCookware,
  selectedCookware,
  onSelectCookware,
}) => {
  if (!supportedCookware || supportedCookware.length <= 1) return null;

  return (
    <div className="mb-6 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-50/70 via-orange-50/40 to-stone-50 p-4 shadow-xs">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
          <span>🍳</span>
          <span>Cooking Method (選擇烹飪模式)</span>
        </span>
        <span className="rounded-full bg-amber-200/80 px-2.5 py-0.5 text-[10px] font-bold text-amber-900">
          Steps adapt automatically
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {supportedCookware.map((cw) => {
          const meta = COOKWARE_META[cw] || { label: cw, icon: Flame, color: 'text-amber-500' };
          const Icon = meta.icon;
          const isSelected = selectedCookware === cw;

          return (
            <button
              key={cw}
              onClick={() => onSelectCookware(cw)}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all active:scale-95 ${
                isSelected
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25 scale-[1.02]'
                  : 'border border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
              }`}
            >
              <Icon className={`h-4 w-4 ${isSelected ? 'text-white' : meta.color}`} />
              <span>{meta.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
