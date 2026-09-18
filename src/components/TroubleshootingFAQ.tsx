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
    <div className="mb-8 space-y-4">
      {/* Troubleshooting Q&A */}
      {troubleshooting.length > 0 && (
        <div className="rounded-3xl border border-stone-200/80 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <AlertCircle className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-stone-900">
                {ui.recipeDetail.troubleshootingTitle}
              </h3>
              <p className="text-xs text-stone-500">{ui.recipeDetail.troubleshootingSubtitle}</p>
            </div>
          </div>

          <div className="divide-y divide-stone-100">
            {troubleshooting.map((item, idx) => {
              const isOpen = openItem === idx;
              return (
                <div key={idx} className="py-3 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setOpenItem(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between text-left text-sm font-bold text-stone-800 hover:text-amber-700"
                  >
                    <span>❓ {text(item.problem, language)}</span>
                    {isOpen ? <ChevronUp className="h-4 w-4 shrink-0 text-stone-400" /> : <ChevronDown className="h-4 w-4 shrink-0 text-stone-400" />}
                  </button>

                  {isOpen && (
                    <div className="mt-2.5 space-y-2 rounded-2xl bg-amber-50/60 p-3.5 text-xs animate-in fade-in duration-150">
                      {item.cause && (
                        <div>
                          <span className="font-bold text-amber-900">🔍 {ui.recipeDetail.causeLabel} </span>
                          <span className="text-stone-700">{text(item.cause, language)}</span>
                        </div>
                      )}
                      {item.solution && (
                        <div className="pt-1.5 border-t border-amber-200/50">
                          <span className="font-bold text-emerald-800">✅ {ui.recipeDetail.solutionLabel} </span>
                          <span className="text-stone-700 font-semibold">{text(item.solution, language)}</span>
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
        <div className="rounded-3xl border border-stone-200/80 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-lg">💡</span>
            <h3 className="text-base font-extrabold text-stone-900">
              {ui.recipeDetail.proTipsTitle}
            </h3>
          </div>
          <ul className="space-y-2 text-xs leading-relaxed text-stone-600">
            {proTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 rounded-xl bg-stone-50 p-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>{text(tip as any, language)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
