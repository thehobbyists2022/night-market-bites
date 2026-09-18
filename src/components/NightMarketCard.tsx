import React from 'react';
import type { NightMarketItem } from '../types/unified';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';
import { text } from '../lib/selectRecipe';
import { soundEffects } from '../utils/soundEffects';
import { Clock, Navigation, MapPin, ChevronRight, Sparkles } from 'lucide-react';

interface NightMarketCardProps {
  market: NightMarketItem;
  onOpenModal: (market: NightMarketItem) => void;
}

export const NightMarketCard: React.FC<NightMarketCardProps> = ({
  market,
  onOpenModal,
}) => {
  const { language } = useLanguage();
  const ui = getUI(language);

  const marketName = text(market.name, language);
  const cityName = text(market.city, language);
  const description = text(market.description, language);
  const hours = text(market.openingHours, language);
  const transit = text(market.transportInfo, language);

  return (
    <div
      onClick={() => {
        soundEffects.playClick();
        onOpenModal(market);
      }}
      className="card-e card-e-hover group flex flex-col justify-between overflow-hidden text-left cursor-pointer transition-all duration-300"
    >
      <div>
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden bg-stone-900">
          <img
            src={market.imageUrl}
            alt={marketName}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

          {/* Location Badge */}
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-stone-950/80 px-2.5 py-1 text-[11px] font-black text-amber-300 backdrop-blur-md shadow-sm">
            <MapPin className="h-3 w-3" />
            <span>{cityName}</span>
          </div>

          {/* Signature dishes pill count */}
          {market.signatureDishes && market.signatureDishes.length > 0 && (
            <span className="absolute right-3 bottom-3 rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-black text-stone-950 shadow-md">
              {market.signatureDishes.length} {ui.district.signatureDishesLabel}
            </span>
          )}
        </div>

        {/* Info Content */}
        <div className="p-4 sm:p-5 space-y-3">
          <div>
            <h3 className="text-lg font-black text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
              {marketName}
            </h3>
            <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Quick info chips */}
          <div className="space-y-1.5 pt-1 text-[11px] text-stone-500 border-t border-stone-100">
            {hours && (
              <div className="flex items-center gap-1.5 truncate">
                <Clock className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                <span className="truncate">{hours}</span>
              </div>
            )}
            {transit && (
              <div className="flex items-center gap-1.5 truncate">
                <Navigation className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                <span className="truncate">{transit}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-stone-100 bg-stone-50/60 px-4 py-2.5 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:bg-amber-50/60 transition-colors">
        <span className="flex items-center gap-1">
          <Sparkles className="h-3 w-3" />
          <span>{ui.district.viewGuideBtn}</span>
        </span>
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};
