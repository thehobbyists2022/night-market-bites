import React, { useState } from 'react';
import { text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface TroubleshootingFAQProps {
  troubleshooting?: any[];
  proTips?: any[];
}

export const TroubleshootingFAQ: React.FC<TroubleshootingFAQProps> = ({
  troubleshooting = [],
  proTips = [],
}) => {
  const { language } = useLanguage();
  const ui = getUI(language);
  const [openItem, setOpenItem] = useState<number | null>(null);

  if (troubleshooting.length === 0 && proTips.length === 0) return null;

  return (
    <div className="mb-8 space-y-6">
      {/* Troubleshooting Q&A */}
      {troubleshooting.length > 0 && (
        <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-7 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-stone-900">
                {ui.recipeDetail.troubleshootingTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500">{ui.recipeDetail.troubleshootingSubtitle}</p>
            </div>
          </div>

          <div className="divide-y divide-stone-100">
            {troubleshooting.map((item, idx) => {
              const isOpen = openItem === idx;
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setOpenItem(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between text-left text-base sm:text-lg font-bold text-stone-800 hover:text-amber-700"
                  >
                    <span>❓ {text(item.problem, language)}</span>
                    {isOpen ? <ChevronUp className="h-5 w-5 shrink-0 text-stone-400" /> : <ChevronDown className="h-5 w-5 shrink-0 text-stone-400" />}
                  </button>

                  {isOpen && (
                    <div className="mt-3 space-y-2.5 rounded-2xl bg-amber-50/70 p-4 text-sm sm:text-base animate-in fade-in duration-150">
                      {item.cause && (
                        <div>
                          <span className="font-extrabold text-amber-950">🔍 {ui.recipeDetail.causeLabel} </span>
                          <span className="text-stone-800">{text(item.cause, language)}</span>
                        </div>
                      )}
                      {item.solution && (
                        <div className="pt-2 border-t border-amber-200/60">
                          <span className="font-extrabold text-emerald-800">✅ {ui.recipeDetail.solutionLabel} </span>
                          <span className="text-stone-900 font-semibold">{text(item.solution, language)}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Pro Tips Section */}
      {proTips.length > 0 && (
        <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-7 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <h3 className="text-lg sm:text-xl font-black text-stone-900">
              {ui.recipeDetail.proTipsTitle}
            </h3>
          </div>
          <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-stone-700">
            {proTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3 rounded-2xl bg-stone-50 p-4 border border-stone-100">
                <span className="text-amber-600 font-black text-lg leading-none">•</span>
                <span className="font-medium">{text(tip as any, language)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
