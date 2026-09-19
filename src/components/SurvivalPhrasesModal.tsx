import React, { useState } from 'react';
import { X, Volume2, Store } from 'lucide-react';
import { speak } from '../utils/speech';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';
import type { CountryCode } from '../types/unified';
import { COUNTRIES, countryName } from '../config/countries';

interface SurvivalPhrase {
  id: string;
  icon: string;
  en: string;
  translations: Record<CountryCode, { text: string; phonetic: string }>;
}

const PHRASE_TITLES: Record<string, Record<string, string>> = {
  'no-cilantro': { en: 'No Cilantro / Coriander', 'zh-TW': '不要香菜', ja: 'パクチー抜き' },
  'not-spicy': { en: 'Not Spicy / Mild', 'zh-TW': '不辣 / 微辣', ja: '辛さなし / ピリ辛' },
  'less-ice-sugar': { en: 'Less Ice & Less Sweet', 'zh-TW': '少冰微糖', ja: '氷少なめ甘さ控えめ' },
  'takeout': { en: 'Takeout / To Go', 'zh-TW': '外帶打包', ja: '持ち帰り' },
  'vegetarian': { en: 'Vegetarian (No Meat)', 'zh-TW': '素食 (無肉無海鮮)', ja: 'ベジタリアン（肉なし）' },
  'delicious': { en: 'Super Delicious!', 'zh-TW': '超好吃！謝謝！', ja: 'とても美味しい！' },
};

const SURVIVAL_PHRASES: SurvivalPhrase[] = [
  {
    id: 'no-cilantro',
    icon: '🌿',
    en: 'No Cilantro / Coriander',
    translations: {
      tw: { text: '不要加香菜', phonetic: 'Bù yào jiā xiāngcài' },
      th: { text: 'ไม่ใส่ผักชี', phonetic: 'Mai Sai Phak Chi' },
      jp: { text: 'パクチー抜きで', phonetic: 'Pakuchi nuki de' },
      kr: { text: '고수 빼주세요', phonetic: 'Gosu bbae-juseyo' },
      my: { text: 'Tanpa daun ketumbar', phonetic: 'Tanpa daun ketumbar' },
      ph: { text: 'Walang wansoy', phonetic: 'Walang wansoy' },
      vn: { text: 'Không cho rau mùi / ngò rí', phonetic: 'Khong cho rau mui' },
    },
  },
  {
    id: 'not-spicy',
    icon: '🌶️',
    en: 'Not Spicy / Mild',
    translations: {
      tw: { text: '不要辣 / 微辣就好', phonetic: 'Bù yào là / Wēi là jiù hǎo' },
      th: { text: 'ไม่เผ็ด / เผ็ดนิดหน่อย', phonetic: 'Mai Phet / Phet Nit Noi' },
      jp: { text: '辛くしないでください', phonetic: 'Karaku shinaide kudasai' },
      kr: { text: '안 맵게 해주세요', phonetic: 'An maepge he-juseyo' },
      my: { text: 'Minta tak pedas', phonetic: 'Minta tak pedas' },
      ph: { text: 'Hindi maanghang po', phonetic: 'Hindi maanghang po' },
      vn: { text: 'Không ăn cay / Đừng cho ớt', phonetic: 'Khong an cay' },
    },
  },
  {
    id: 'less-ice-sugar',
    icon: '🧊',
    en: 'Less Ice & Less Sweet',
    translations: {
      tw: { text: '少冰微糖 (三分甜)', phonetic: 'Shǎo bīng wēi táng' },
      th: { text: 'หวานน้อย ใส่น้ำแข็งน้อย', phonetic: 'Waan Noi, Sai Nam Kheng Noi' },
      jp: { text: '氷少なめ、甘さ控えめで', phonetic: 'Koori sukuname, amasa hikaeme de' },
      kr: { text: '얼음 적게, 덜 달게 해주세요', phonetic: 'Eoreum jeokge, deol dalge' },
      my: { text: 'Kurang ais dan kurang manis', phonetic: 'Kurang ais dan manis' },
      ph: { text: 'Bawas yelo at asukal po', phonetic: 'Bawas yelo at asukal po' },
      vn: { text: 'Ít đá, ít đường', phonetic: 'It da, it duong' },
    },
  },
  {
    id: 'takeout',
    icon: '🥡',
    en: 'Takeout / To Go',
    translations: {
      tw: { text: '我要外帶，謝謝', phonetic: 'Wǒ yào wàidài, xièxie' },
      th: { text: 'ใส่ถุงกลับบ้านครับ/ค่ะ', phonetic: 'Sai Thung Klap Baan' },
      jp: { text: '持ち帰りでお願いします', phonetic: 'Mochikaeri de onegaishimasu' },
      kr: { text: '포장해 주세요', phonetic: 'Pojang-hae juseyo' },
      my: { text: 'Bungkus satu ya', phonetic: 'Bungkus satu ya' },
      ph: { text: 'Pabalot po (Takeout)', phonetic: 'Pabalot po' },
      vn: { text: 'Cho tôi mang về', phonetic: 'Cho toi mang ve' },
    },
  },
  {
    id: 'vegetarian',
    icon: '🥗',
    en: 'Vegetarian (No Meat)',
    translations: {
      tw: { text: '我吃素，不含肉或海鮮', phonetic: 'Wǒ chī sù' },
      th: { text: 'อาหารเจ / มังสวิรัติ (ไม่ใส่เนื้อสัตว์)', phonetic: 'Ahan Je / Mangsawirat' },
      jp: { text: 'ベジタリアンです（肉・魚なし）', phonetic: 'Bejitarian desu' },
      kr: { text: '채식주의자입니다 (고기 빼주세요)', phonetic: 'Chaesikjuuija imnida' },
      my: { text: 'Saya vegetarian (tanpa daging)', phonetic: 'Saya vegetarian' },
      ph: { text: 'Vegetarian po ako', phonetic: 'Vegetarian po ako' },
      vn: { text: 'Tôi ăn chay (không thịt)', phonetic: 'Toi an chay' },
    },
  },
  {
    id: 'delicious',
    icon: '😋',
    en: 'Super Delicious!',
    translations: {
      tw: { text: '非常好吃！老闆謝謝！', phonetic: 'Fēicháng hǎochī!' },
      th: { text: 'อร่อยมากครับ/ค่ะ!', phonetic: 'Aroi Maak!' },
      jp: { text: 'とても美味しいです！', phonetic: 'Totemo oishii desu!' },
      kr: { text: '정말 맛있어요! 감사합니다!', phonetic: 'Jeongmal masisseoyo!' },
      my: { text: 'Sangat sedap! Terima kasih!', phonetic: 'Sangat sedap!' },
      ph: { text: 'Napakasarap po! Salamat!', phonetic: 'Napakasarap po!' },
      vn: { text: 'Ngon tuyệt vời! Cảm ơn!', phonetic: 'Ngon tuyet voi!' },
    },
  },
];

interface SurvivalPhrasesModalProps {
  onClose: () => void;
}

export const SurvivalPhrasesModal: React.FC<SurvivalPhrasesModalProps> = ({ onClose }) => {
  const { language } = useLanguage();
  const ui = getUI(language);
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>('tw');
  const [activePhrase, setActivePhrase] = useState<SurvivalPhrase>(SURVIVAL_PHRASES[0]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const countryInfo = COUNTRIES.find((c) => c.code === selectedCountry) || COUNTRIES[0];
  const currentTrans = activePhrase.translations[selectedCountry];

  const handleSpeak = () => {
    setIsSpeaking(true);
    speak(currentTrans.text, selectedCountry, {
      rate: 0.82,
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl border-2 border-amber-400/40 bg-slate-900 p-6 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-stone-300 hover:bg-slate-700"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Store className="h-4 w-4" />
            <span>{ui.survivalModal.badge}</span>
          </div>
          <h2 className="text-xl font-extrabold text-white">
            {ui.survivalModal.title}
          </h2>
        </div>

        {/* Country Selector Pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar mb-4">
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              onClick={() => setSelectedCountry(c.code)}
              className={`flex items-center gap-1 shrink-0 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                selectedCountry === c.code
                  ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                  : 'bg-slate-800 text-stone-300 hover:bg-slate-700'
              }`}
            >
              <span>{c.flag}</span>
              <span>{countryName(c.code, language)}</span>
            </button>
          ))}
        </div>

        {/* Big Flashcard Display */}
        <div className="rounded-2xl border-2 border-dashed border-amber-400/60 bg-gradient-to-b from-amber-950/40 to-slate-950/70 p-6 text-center shadow-inner mb-4">
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
            {countryInfo.flag} {countryInfo.district}・{ui.survivalModal.showVendorPrompt}
          </p>

          <div className="text-4xl mb-2">{activePhrase.icon}</div>

          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-white mb-2">
            {currentTrans.text}
          </h3>

          <p className="inline-block rounded-full bg-slate-800/90 border border-white/10 px-3.5 py-1 font-mono text-xs font-bold text-amber-300 shadow-2xs">
            {currentTrans.phonetic}
          </p>

          <p className="mt-3 text-xs text-stone-400 font-medium">
            {language === 'zh-TW' ? '英文/意涵: ' : 'Meaning: '}{activePhrase.en}
          </p>
        </div>

        {/* Speak Button */}
        <button
          onClick={handleSpeak}
          className="mb-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-sm font-bold text-slate-950 shadow-glow transition-all active:scale-98"
        >
          <Volume2 className={`h-4 w-4 ${isSpeaking ? 'animate-bounce' : ''}`} />
          <span>{isSpeaking ? ui.survivalModal.speakingBtn : ui.survivalModal.speakBtn}</span>
        </button>

        {/* Phrase Selection Chips */}
        <div className="overflow-y-auto flex-1 pr-1 space-y-1.5">
          <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2">
            {ui.survivalModal.selectCardTitle}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {SURVIVAL_PHRASES.map((phrase) => {
              const isSelected = activePhrase.id === phrase.id;
              const chipLabel = PHRASE_TITLES[phrase.id]?.[language] || phrase.en;
              return (
                <button
                  key={phrase.id}
                  onClick={() => setActivePhrase(phrase)}
                  className={`flex items-center gap-2 rounded-xl p-2.5 text-left text-xs font-bold transition-all ${
                    isSelected
                      ? 'border-2 border-amber-400 bg-amber-500/20 text-amber-200 shadow-2xs'
                      : 'border border-white/10 bg-slate-800/80 text-stone-200 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-lg">{phrase.icon}</span>
                  <span className="truncate">{chipLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
