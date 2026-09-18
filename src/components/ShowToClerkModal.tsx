import React, { useState } from 'react';
import { Volume2, X, Store, Check } from 'lucide-react';
import { speak } from '../utils/speech';
import type { CountryCode } from '../types/unified';

export interface ClerkModalData {
  type: 'ingredient' | 'dish';
  country: CountryCode;
  nativeTitle: string;
  phoneticTitle?: string;
  userLangTitle: string;
  subtitle?: string;
  whereToBuy?: string;
  substituteName?: string;
  substituteExplanation?: string;
  orderPhrase?: string;
}

interface ShowToClerkModalProps {
  data: ClerkModalData | null;
  onClose: () => void;
}

const DIETARY_OPTIONS: Record<CountryCode, { id: string; label: string; phrase: string }[]> = {
  tw: [
    { id: 'no-spicy', label: '不辣', phrase: '不要辣' },
    { id: 'mild-spicy', label: '微辣', phrase: '微辣就好' },
    { id: 'no-cilantro', label: '不要香菜', phrase: '不要加香菜' },
    { id: 'less-ice-sugar', label: '少冰微糖', phrase: '少冰微糖' },
  ],
  th: [
    { id: 'no-spicy', label: '不辣', phrase: 'Mai Phet (ไม่เผ็ด)' },
    { id: 'mild-spicy', label: '微辣', phrase: 'Phet Nit Noi (เผ็ดนิดหน่อย)' },
    { id: 'no-cilantro', label: '不要香菜', phrase: 'Mai Sai Phak Chi (ไม่ใส่ผักชี)' },
    { id: 'less-sweet', label: '少糖', phrase: 'Waan Noi (หวานน้อย)' },
  ],
  jp: [
    { id: 'no-wasabi', label: 'さび抜き', phrase: 'わさび抜きでお願いします' },
    { id: 'less-salt', label: '薄味', phrase: '薄味にしてください' },
    { id: 'no-onion', label: 'ネギ抜き', phrase: 'ネギを抜いてください' },
    { id: 'takeout', label: '持ち帰り', phrase: '持ち帰りでお願いします' },
  ],
  kr: [
    { id: 'no-spicy', label: '안 맵게', phrase: '안 맵게 해주세요' },
    { id: 'mild-spicy', label: '조금 맵게', phrase: '조금만 맵게 해주세요' },
    { id: 'no-cilantro', label: '고수 빼기', phrase: '고수는 빼주세요' },
    { id: 'takeout', label: '포장', phrase: '포장해 주세요' },
  ],
  my: [
    { id: 'no-spicy', label: 'Tak Pedas', phrase: 'Minta tak pedas' },
    { id: 'kurang-manis', label: 'Kurang Manis', phrase: 'Kurang manis' },
    { id: 'bungkus', label: 'Bungkus', phrase: 'Bungkus ya' },
  ],
  ph: [
    { id: 'not-spicy', label: 'Hindi Maanghang', phrase: 'Hindi maanghang po' },
    { id: 'takeout', label: 'Takeout', phrase: 'Pabalot po' },
  ],
  vn: [
    { id: 'no-spicy', label: 'Không cay', phrase: 'Không cho ớt / không cay' },
    { id: 'no-herbs', label: 'Không rau thơm', phrase: 'Không cho rau thơm' },
    { id: 'less-sweet', label: 'Ít đường', phrase: 'Cho ít đường' },
    { id: 'takeout', label: 'Mang về', phrase: 'Cho tôi mang về' },
  ],
};

export const ShowToClerkModal: React.FC<ShowToClerkModalProps> = ({ data, onClose }) => {
  const [selectedDiet, setSelectedDiet] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!data) return null;

  const dietOptions = DIETARY_OPTIONS[data.country] || [];

  const toggleDiet = (id: string) => {
    setSelectedDiet((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSpeak = () => {
    let phraseToSpeak = '';
    if (data.type === 'ingredient') {
      const askPrefixes: Record<CountryCode, string> = {
        tw: `請問你們有賣 ${data.nativeTitle} 嗎？`,
        th: `Mii ${data.nativeTitle} mai khrap/kha?`,
        jp: `すみません、${data.nativeTitle} はありますか？`,
        kr: `실례지만, ${data.nativeTitle} 있나요?`,
        my: `Ada jual ${data.nativeTitle} tak?`,
        ph: `Meron po ba kayong ${data.nativeTitle}?`,
        vn: `Xin hỏi ở đây có bán ${data.nativeTitle} không?`,
      };
      phraseToSpeak = askPrefixes[data.country] || data.nativeTitle;
    } else {
      phraseToSpeak = data.orderPhrase || data.nativeTitle;
      if (selectedDiet.length > 0) {
        const dietPhrases = selectedDiet
          .map((id) => dietOptions.find((o) => o.id === id)?.phrase)
          .filter(Boolean)
          .join(', ');
        phraseToSpeak += `, ${dietPhrases}`;
      }
    }

    setIsSpeaking(true);
    speak(phraseToSpeak, data.country, {
      rate: 0.82,
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl border-2 border-amber-400/80 bg-white p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-stone-200"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Badge Header */}
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-800">
            <Store className="h-3.5 w-3.5 text-amber-600" />
            {data.type === 'ingredient' ? '🏪 亞超採購卡 (Show to Grocery Clerk)' : '🏮 夜市點餐卡 (Show to Street Vendor)'}
          </span>
        </div>

        {/* High-Contrast Flashcard Display */}
        <div className="mb-5 rounded-2xl border-2 border-dashed border-amber-400/60 bg-gradient-to-b from-amber-50/90 to-orange-50/50 p-6 text-center">
          <p className="mb-2 text-xs font-bold text-amber-900/70">
            {data.type === 'ingredient'
              ? '請向店員出示此卡片・Show this to store staff'
              : '請向老闆出示此卡片・Show this to stall owner'}
          </p>

          {/* Huge Local Text */}
          <h2 className="mb-2 font-display text-4xl font-extrabold tracking-wide text-stone-900 sm:text-5xl">
            {data.nativeTitle}
          </h2>

          {/* Phonetic guide */}
          {data.phoneticTitle && (
            <p className="inline-block rounded-full bg-white/90 px-3.5 py-1 font-mono text-xs font-bold text-amber-800 shadow-xs">
              {data.phoneticTitle}
            </p>
          )}

          {/* Active Dietary Badges in Stall Mode */}
          {data.type === 'dish' && selectedDiet.length > 0 && (
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              {selectedDiet.map((id) => {
                const opt = dietOptions.find((o) => o.id === id);
                return (
                  <span
                    key={id}
                    className="inline-flex items-center gap-1 rounded-md bg-amber-600 px-2.5 py-1 text-xs font-bold text-white shadow-xs"
                  >
                    <Check className="h-3 w-3" />
                    {opt?.phrase}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {/* English & Subtitle Details */}
        <div className="mb-5 space-y-2 rounded-xl bg-stone-50 p-3.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-stone-400 uppercase tracking-wider">Dish / Item Name:</span>
            <span className="font-bold text-stone-800">{data.userLangTitle}</span>
          </div>

          {data.whereToBuy && (
            <div className="pt-2 border-t border-stone-200/60">
              <span className="font-bold text-amber-800">🛒 哪裡可以買到 (Where to find): </span>
              <span className="text-stone-600">{data.whereToBuy}</span>
            </div>
          )}

          {data.substituteName && (
            <div className="pt-2 border-t border-stone-200/60">
              <span className="font-bold text-emerald-800">🔄 替代方案 (Substitute): </span>
              <span className="text-stone-700 font-semibold">{data.substituteName}</span>
              {data.substituteExplanation && (
                <p className="mt-0.5 text-stone-500 text-[11px] leading-relaxed">
                  {data.substituteExplanation}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Dietary Modifier Pills for Street Food Ordering */}
        {data.type === 'dish' && dietOptions.length > 0 && (
          <div className="mb-5">
            <p className="mb-2 text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              點餐客製需求・Dietary Customizations:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {dietOptions.map((opt) => {
                const active = selectedDiet.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleDiet(opt.id)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                      active
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'border border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Action: Voice Pronunciation Assistance */}
        <button
          onClick={handleSpeak}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:brightness-105 active:scale-98"
        >
          <Volume2 className={`h-4 w-4 ${isSpeaking ? 'animate-bounce text-white' : ''}`} />
          <span>{isSpeaking ? '正在朗讀中 (Speaking...)' : '🔊 播放當地語音 (Speak Native Pronunciation)'}</span>
        </button>
      </div>
    </div>
  );
};
