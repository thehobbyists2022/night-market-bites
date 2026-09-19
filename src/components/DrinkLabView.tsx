import React, { useState } from 'react';
import { Sparkles, ShoppingCart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';
import { soundEffects } from '../utils/soundEffects';

type DrinkTab = 'boba' | 'cha-thai' | 'matcha';

export const DrinkLabView: React.FC = () => {
  const { language } = useLanguage();
  const ui = getUI(language);
  const [activeTab, setActiveTab] = useState<DrinkTab>('boba');

  // Boba Lab States
  const [teaBase, setTeaBase] = useState<'black' | 'oolong' | 'green'>('black');
  const [bobaAmount, setBobaAmount] = useState<number>(50);
  const [sweetness, setSweetness] = useState<number>(30);
  const [iceLevel] = useState<number>(50);
  const [tigerGlaze, setTigerGlaze] = useState<boolean>(true);

  // Thai Tea States
  const [condensedMilk, setCondensedMilk] = useState<number>(35);
  const [evaporatedMilk, setEvaporatedMilk] = useState<number>(25);

  // Matcha States
  const [matchaGrams, setMatchaGrams] = useState<number>(3);
  const [waterTemp, setWaterTemp] = useState<number>(80);

  const handleSliderChange = (setter: (v: number) => void, val: number) => {
    setter(val);
    soundEffects.playClick();
  };

  const getSweetnessLabel = () => {
    if (language === 'zh-TW') {
      return sweetness === 0 ? '無糖' : sweetness <= 30 ? '微糖' : sweetness <= 70 ? '少糖' : '全糖';
    }
    return sweetness === 0 ? 'Sugar Free' : sweetness <= 30 ? 'Micro Sweet' : sweetness <= 70 ? 'Less Sweet' : 'Full Sweet';
  };

  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 pt-4">
      {/* Top Banner */}
      <div className="mb-6 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950/40 p-6 text-white shadow-xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-extrabold text-amber-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{ui.drinkLab.badge}</span>
        </div>
        <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">
          {ui.drinkLab.title}
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-stone-300">
          {ui.drinkLab.subtitle}
        </p>

        {/* Tab Selectors */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          <button
            onClick={() => {
              setActiveTab('boba');
              soundEffects.playClick();
            }}
            className={`flex items-center justify-center gap-1.5 rounded-2xl py-2.5 text-xs font-extrabold transition-all ${
              activeTab === 'boba'
                ? 'bg-amber-500 text-stone-950 shadow-glow scale-[1.02]'
                : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <span>🇹🇼</span>
            <span>{ui.drinkLab.tabBoba}</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('cha-thai');
              soundEffects.playClick();
            }}
            className={`flex items-center justify-center gap-1.5 rounded-2xl py-2.5 text-xs font-extrabold transition-all ${
              activeTab === 'cha-thai'
                ? 'bg-orange-500 text-stone-950 shadow-glow scale-[1.02]'
                : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <span>🇹🇭</span>
            <span>{ui.drinkLab.tabThai}</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('matcha');
              soundEffects.playClick();
            }}
            className={`flex items-center justify-center gap-1.5 rounded-2xl py-2.5 text-xs font-extrabold transition-all ${
              activeTab === 'matcha'
                ? 'bg-emerald-500 text-stone-950 shadow-glow scale-[1.02]'
                : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <span>🇯🇵</span>
            <span>{ui.drinkLab.tabMatcha}</span>
          </button>
        </div>
      </div>

      {/* Lab 1: Taiwan Boba Milk Tea */}
      {activeTab === 'boba' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Visual Cup Simulation */}
            <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-stone-900 to-amber-950/20 p-6 text-center text-white shadow-lg flex flex-col items-center justify-center">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                Live Cup Simulator
              </p>

              {/* Cup Graphic */}
              <div className="relative w-36 h-60 rounded-b-3xl rounded-t-lg border-4 border-amber-200/50 bg-amber-50/10 overflow-hidden shadow-inner flex flex-col justify-end p-2">
                {/* Straw */}
                <div className="absolute -top-6 right-8 w-4 h-16 bg-amber-400/80 rounded-full rotate-12 -z-1" />

                {/* Milk Layer */}
                <div
                  className="w-full bg-gradient-to-b from-amber-100/90 to-amber-200/80 rounded-t-xl transition-all duration-300 flex items-center justify-center text-[10px] font-bold text-stone-700"
                  style={{ height: `${120 - bobaAmount}px` }}
                >
                  Fresh Milk
                </div>

                {/* Tea Layer */}
                <div
                  className="w-full bg-gradient-to-b from-amber-800/90 to-amber-950/90 transition-all duration-300 flex items-center justify-center text-[10px] font-bold text-amber-100"
                  style={{ height: '60px' }}
                >
                  {teaBase.toUpperCase()} TEA
                </div>

                {/* Boba Pearls */}
                <div
                  className="w-full bg-stone-950 rounded-b-2xl transition-all duration-300 flex items-center justify-center text-[10px] font-bold text-amber-400"
                  style={{ height: `${bobaAmount}px` }}
                >
                  ⚫ {bobaAmount}g Boba
                </div>

                {/* Tiger Glaze Indicator */}
                {tigerGlaze && (
                  <div className="absolute inset-0 border-r-4 border-l-4 border-amber-950/80 pointer-events-none opacity-80" />
                )}
              </div>

              <div className="mt-4 text-xs font-bold text-amber-300">
                Taste Profile: {getSweetnessLabel()} ({sweetness}%) · {iceLevel}% Ice
              </div>
            </div>

            {/* Controls */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-xl space-y-5 text-white">
              <h3 className="text-base font-extrabold text-white">
                {ui.drinkLab.formulaTitle}
              </h3>

              {/* Tea Base */}
              <div>
                <label className="text-xs font-bold text-stone-300 block mb-2">
                  {ui.drinkLab.teaBase}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['black', 'oolong', 'green'] as const).map((tb) => (
                    <button
                      key={tb}
                      onClick={() => setTeaBase(tb)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold capitalize transition-all ${
                        teaBase === tb
                          ? 'bg-amber-600 text-white shadow-sm'
                          : 'border border-white/15 bg-slate-800 text-stone-300 hover:bg-slate-700'
                      }`}
                    >
                      {tb === 'black' ? ui.drinkLab.blackTea : tb === 'oolong' ? ui.drinkLab.oolongTea : ui.drinkLab.greenTea}
                    </button>
                  ))}
                </div>
              </div>

              {/* Boba Amount Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                  <span>{ui.drinkLab.bobaAmount}</span>
                  <span className="text-amber-600">{bobaAmount} g</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={bobaAmount}
                  onChange={(e) => handleSliderChange(setBobaAmount, Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              {/* Sweetness Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                  <span>{ui.drinkLab.sweetness}</span>
                  <span className="text-amber-600">{sweetness}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  value={sweetness}
                  onChange={(e) => handleSliderChange(setSweetness, Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              {/* Tiger Glaze Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                <span className="text-xs font-bold text-stone-800">
                  {ui.drinkLab.tigerGlaze}
                </span>
                <button
                  onClick={() => setTigerGlaze(!tigerGlaze)}
                  className={`w-11 h-6 rounded-full transition-colors relative ${
                    tigerGlaze ? 'bg-amber-600' : 'bg-stone-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                      tigerGlaze ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* Amazon Ingredients Link */}
              <a
                href="https://www.amazon.com/s?k=taiwanese+boba+tapioca+pearls+black+tea&tag=nightmarketbites-20"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-amber-500 py-3 text-xs font-extrabold text-stone-950 shadow-glow hover:bg-amber-400 transition-all"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>{ui.drinkLab.buyBobaAmazon}</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Lab 2: Thai Iced Tea */}
      {activeTab === 'cha-thai' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-b from-stone-900 to-orange-950/20 p-6 text-center text-white shadow-lg flex flex-col items-center justify-center">
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-3">
                Thai Tea Pro Ratio
              </p>
              <div className="w-36 h-60 rounded-b-3xl rounded-t-lg border-4 border-orange-300/60 bg-orange-50/10 overflow-hidden shadow-inner flex flex-col justify-end p-2">
                <div
                  className="w-full bg-white/95 rounded-t-xl transition-all flex items-center justify-center text-[10px] font-bold text-stone-700"
                  style={{ height: `${evaporatedMilk * 1.5}px` }}
                >
                  {language === 'zh-TW' ? '淡奶' : 'Evaporated'}
                </div>
                <div
                  className="w-full bg-gradient-to-b from-orange-500 to-orange-700 transition-all flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ height: '100px' }}
                >
                  ชาไทย Thai Tea
                </div>
                <div
                  className="w-full bg-amber-100 transition-all flex items-center justify-center text-[10px] font-bold text-amber-950"
                  style={{ height: `${condensedMilk * 1.5}px` }}
                >
                  {language === 'zh-TW' ? '煉乳' : 'Condensed'}
                </div>
              </div>
              <p className="mt-4 text-xs font-bold text-orange-300">
                Rich & Creamy Street Cart Flavor
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-xl space-y-5 text-white">
              <h3 className="text-base font-extrabold text-white">
                {ui.drinkLab.thaiRecipeTitle}
              </h3>

              <div>
                <div className="flex justify-between text-xs font-bold text-stone-300 mb-1">
                  <span>{ui.drinkLab.condensedMilk}</span>
                  <span className="text-orange-400">{condensedMilk} ml</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  value={condensedMilk}
                  onChange={(e) => handleSliderChange(setCondensedMilk, Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-stone-300 mb-1">
                  <span>{ui.drinkLab.evaporatedMilk}</span>
                  <span className="text-orange-400">{evaporatedMilk} ml</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={evaporatedMilk}
                  onChange={(e) => handleSliderChange(setEvaporatedMilk, Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>

              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://www.amazon.com/s?k=chatramue+thai+tea+mix&tag=nightmarketbites-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 py-3 text-xs font-extrabold text-stone-950 shadow-glow hover:bg-orange-400 transition-all"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>{ui.drinkLab.buyThaiAmazon}</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lab 3: Japanese Matcha Latte */}
      {activeTab === 'matcha' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-stone-900 to-emerald-950/20 p-6 text-center text-white shadow-lg flex flex-col items-center justify-center">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                Ceremonial Whisking Guide
              </p>
              <div className="w-36 h-60 rounded-b-3xl rounded-t-lg border-4 border-emerald-300/60 bg-emerald-50/10 overflow-hidden shadow-inner flex flex-col justify-end p-2">
                <div
                  className="w-full bg-emerald-600 rounded-t-xl transition-all flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ height: `${matchaGrams * 20}px` }}
                >
                  {language === 'zh-TW' ? '抹茶濃縮液' : 'Matcha Shot'} ({matchaGrams}g)
                </div>
                <div className="w-full bg-stone-100 h-28 transition-all flex items-center justify-center text-[10px] font-bold text-stone-700">
                  Steamed Milk
                </div>
              </div>
              <p className="mt-4 text-xs font-bold text-emerald-300">
                Water Temp: {waterTemp}°C (Optimal: 80°C to avoid bitterness)
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-xl space-y-5 text-white">
              <h3 className="text-base font-extrabold text-white">
                {ui.drinkLab.matchaRecipeTitle}
              </h3>

              <div>
                <div className="flex justify-between text-xs font-bold text-stone-300 mb-1">
                  <span>{ui.drinkLab.matchaAmount}</span>
                  <span className="text-emerald-400">{matchaGrams} g</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="6"
                  step="0.5"
                  value={matchaGrams}
                  onChange={(e) => handleSliderChange(setMatchaGrams, Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                  <span>{ui.drinkLab.waterTemp}</span>
                  <span className="text-emerald-600">{waterTemp} °C</span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="95"
                  value={waterTemp}
                  onChange={(e) => handleSliderChange(setWaterTemp, Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              <div className="pt-2 border-t border-stone-100">
                <a
                  href="https://www.amazon.com/s?k=japanese+ceremonial+matcha+powder+uji&tag=nightmarketbites-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 text-xs font-extrabold text-white shadow-glow hover:bg-emerald-500 transition-all"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>{ui.drinkLab.buyMatchaAmazon}</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
