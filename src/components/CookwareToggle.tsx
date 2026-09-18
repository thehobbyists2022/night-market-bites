import React from 'react';
import { Flame, Wind, Zap, Disc } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';

interface CookwareToggleProps {
  supportedCookware: string[];
  selectedCookware: string;
  onSelectCookware: (cw: string) => void;
}

const COOKWARE_ICONS: Record<string, { icon: any; color: string }> = {
  traditional: { icon: Flame, color: 'text-orange-500' },
  airFryer: { icon: Wind, color: 'text-cyan-500' },
  instantPot: { icon: Zap, color: 'text-purple-500' },
  takoyakiPlate: { icon: Disc, color: 'text-amber-500' },
  oven: { icon: Flame, color: 'text-red-500' },
  riceCooker: { icon: Zap, color: 'text-emerald-500' },
};

export const CookwareToggle: React.FC<CookwareToggleProps> = ({
  supportedCookware,
  selectedCookware,
  onSelectCookware,
}) => {
  const { language } = useLanguage();
  const ui = getUI(language);

  if (!supportedCookware || supportedCookware.length <= 1) return null;

  const getCookwareLabel = (cw: string): string => {
    switch (cw) {
      case 'traditional':
        return ui.cookware.traditional;
      case 'airFryer':
        return ui.cookware.airFryer;
      case 'instantPot':
        return ui.cookware.instantPot;
      case 'takoyakiPlate':
        return ui.cookware.takoyakiPlate;
      case 'oven':
        return ui.cookware.oven;
      case 'riceCooker':
        return ui.cookware.riceCooker;
      default:
        return cw;
    }
  };

  return (
    <div className="mb-6 rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-50/80 via-orange-50/50 to-stone-50 p-5 shadow-xs">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-amber-900">
          <span>🍳</span>
          <span>{ui.cookware.title}</span>
        </span>
        <span className="rounded-full bg-amber-200/90 px-3 py-1 text-xs font-black text-amber-950">
          {ui.cookware.subtitle}
        </span>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {supportedCookware.map((cw) => {
          const meta = COOKWARE_ICONS[cw] || { icon: Flame, color: 'text-amber-500' };
          const Icon = meta.icon;
          const isSelected = selectedCookware === cw;
          const label = getCookwareLabel(cw);

          return (
            <button
              key={cw}
              onClick={() => onSelectCookware(cw)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                isSelected
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25 scale-[1.02]'
                  : 'border border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
              }`}
            >
              <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${isSelected ? 'text-white' : meta.color}`} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
