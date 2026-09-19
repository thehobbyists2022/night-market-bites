import React from 'react';
import { COUNTRIES, countryName } from '../config/countries';
import { recipesOf, text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';
import { useUser } from '../context/UserContext';
import type { CountryRecipe } from '../types/unified';
import { Heart, Stamp, Lock, Award } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface PassportViewProps {
  onSelectRecipe: (r: CountryRecipe) => void;
  onBack: () => void;
}

const STAMP_NAMES: Record<string, Record<string, string>> = {
  tw: { en: 'Shilin & Ningxia Night Market Stamp', 'zh-TW': '士林・寧夏夜市之印', ja: '士林・寧夏夜市の印' },
  th: { en: 'Chatuchak & Yaowarat Stamp', 'zh-TW': 'Chatuchak 恰圖恰之印', ja: 'チャトゥチャック夜市の印' },
  jp: { en: 'Dotonbori & Nakasu Yatai Stamp', 'zh-TW': '道頓堀・中洲屋台之印', ja: '道頓堀・中洲屋台の印' },
  kr: { en: 'Myeongdong & Gwangjang Market Stamp', 'zh-TW': '明洞・廣藏市場之印', ja: '明洞・広蔵市場の印' },
  my: { en: 'Jalan Alor Night Market Stamp', 'zh-TW': 'Jalan Alor 亞羅街之印', ja: 'アローストリートの印' },
  ph: { en: 'Quiapo & Mercato Centrale Stamp', 'zh-TW': 'Quiapo 奎阿波之印', ja: 'キアポ・メルカートの印' },
  vn: { en: 'Ben Thanh Market Stamp', 'zh-TW': 'Bến Thành 濱城之印', ja: 'ベンタイン市場の印' },
};

export const PassportView: React.FC<PassportViewProps> = ({ onSelectRecipe, onBack }) => {
  const { language } = useLanguage();
  const ui = getUI(language);
  const { favorites, tasted } = useUser();

  const favList = COUNTRIES.flatMap((c) =>
    (favorites[c.code] || [])
      .map((id) => recipesOf(c.code).find((r) => r.id === id))
      .filter(Boolean)
  ) as CountryRecipe[];

  const totalRecipesCount = COUNTRIES.reduce((acc, c) => acc + recipesOf(c.code).length, 0);
  const totalTastedCount = COUNTRIES.reduce(
    (acc, c) => acc + (tasted[c.code] || []).length,
    0
  );

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-4">
      <button
        onClick={onBack}
        className="mb-4 flex items-center gap-1.5 rounded-xl border border-white/15 bg-slate-900/90 px-3.5 py-2 text-xs font-bold text-stone-200 shadow-2xs hover:bg-slate-800 transition-colors"
      >
        <span>← {ui.recipeDetail.backToMarket}</span>
      </button>

      {/* Passport Hero */}
      <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950/40 p-6 sm:p-8 text-center text-white shadow-xl">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-400/30 shadow-glow">
          <Stamp className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-black sm:text-3xl text-white">
          {ui.passport.title}
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-stone-300">
          {ui.passport.subtitle}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone-800/80 px-4 py-1.5 text-xs font-extrabold text-amber-300">
          <Award className="h-4 w-4 text-amber-400" />
          <span>{ui.passport.unlockedProgress} {totalTastedCount} / {totalRecipesCount} {ui.marketHall.dishesUnit}</span>
        </div>
      </div>

      {/* 7-Country Passport Stamps Grid */}
      <section className="mt-8">
        <h2 className="text-lg font-extrabold text-white flex items-center gap-2 mb-4">
          <span>🛂</span>
          <span>{ui.passport.stampsSection}</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((c) => {
            const all = recipesOf(c.code);
            const done = (tasted[c.code] || []).filter((id) => all.some((r) => r.id === id)).length;
            const isUnlocked = done > 0;
            const pct = all.length ? Math.round((done / all.length) * 100) : 0;
            const stampName = STAMP_NAMES[c.code]?.[language] || STAMP_NAMES[c.code]?.en || `${countryName(c.code, language)} Stamp`;

            return (
              <div
                key={c.code}
                className={`relative overflow-hidden rounded-3xl p-5 border transition-all ${
                  isUnlocked
                    ? 'border-amber-500/40 bg-gradient-to-b from-slate-900 to-amber-950/30 shadow-xl text-white'
                    : 'border-white/10 bg-slate-900/60 opacity-60 text-stone-400'
                }`}
              >
                {/* Stamp visual circle */}
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                      isUnlocked
                        ? 'border-amber-400 bg-amber-500/20 text-amber-300 rotate-[-8deg] shadow-md'
                        : 'border-dashed border-slate-700 bg-slate-800 text-stone-500'
                    }`}
                  >
                    {isUnlocked ? (
                      <div className="text-center font-serif text-[10px] font-black leading-none">
                        <span className="text-xs">{c.flag}</span>
                        <div className="mt-0.5 scale-75 uppercase">VISITED</div>
                        <div className="text-[8px] text-amber-400">STAMP</div>
                      </div>
                    ) : (
                      <Lock className="h-5 w-5 text-stone-500" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-white truncate">
                        {c.flag} {countryName(c.code, language)}
                      </span>
                      <span className="text-[11px] font-black text-amber-400">
                        {done}/{all.length}
                      </span>
                    </div>

                    <p className="text-[11px] text-stone-400 truncate mt-0.5">
                      {stampName}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pocket List / Saved Favorites */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 text-lg font-extrabold text-white mb-4">
          <Heart className="h-5 w-5 text-rose-500 fill-rose-500" />
          <span>{ui.passport.favoritesSection}: {favList.length}</span>
        </h2>

        {favList.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center text-xs text-stone-400 shadow-2xs">
            <Heart className="mx-auto h-8 w-8 text-stone-500 mb-2" />
            <p className="font-bold text-stone-200 text-sm">{ui.passport.emptyFavoritesTitle}</p>
            <p className="mt-1">{ui.passport.emptyFavoritesSubtitle}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {favList.map((r) => {
              const countryMeta = COUNTRIES.find((c) => c.code === r.country);
              return (
                <button
                  key={`${r.country}-${r.id}`}
                  onClick={() => {
                    soundEffects.playClick();
                    onSelectRecipe(r);
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/90 p-3 text-left shadow-2xs hover:border-amber-400/50 transition-all"
                >
                  <img
                    src={r.heroImage}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-extrabold text-white">
                      {text(r.title, language)}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-amber-400 font-semibold">
                      {countryMeta?.flag} {countryName(r.country, language)} · {r.cookTimeMinutes} min
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
