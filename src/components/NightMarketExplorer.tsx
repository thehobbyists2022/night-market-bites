import React, { useState } from 'react';
import type { CountryCode, CountryRecipe, Language } from '../types/unified';
import { getNightMarketsByCountry } from '../data/nightMarkets';
import { COUNTRIES, countryName } from '../config/countries';
import { findRecipeByIdOrSlug, text } from '../lib/selectRecipe';
import { useLanguage } from '../context/LanguageContext';
import { getUI } from '../i18n/uiStrings';
import { soundEffects } from '../utils/soundEffects';
import {
  Compass,
  Train,
  Clock,
  Volume2,
  Sparkles,
  ArrowRight,
  HelpCircle,
  MapPin,
  Flame,
} from 'lucide-react';

interface NightMarketExplorerProps {
  country: CountryCode;
  onSelectRecipe: (recipe: CountryRecipe) => void;
}

interface RegionTab {
  id: string;
  label: Partial<Record<Language, string>> & { en: string };
  icon: string;
}

const COUNTRY_REGION_CONFIG: Record<CountryCode, RegionTab[]> = {
  tw: [
    {
      id: 'all',
      label: {
        'zh-TW': '全台旗艦 (10)',
        en: 'All Taiwan (10)',
        ja: '全台湾 (10)',
        ko: '전체 (10)',
        vi: 'Toàn Đài Loan (10)',
      },
      icon: '🏮',
    },
    {
      id: 'north',
      label: {
        'zh-TW': '北部・雙北基隆',
        en: 'North (Taipei/Keelung)',
        ja: '北部（台北・基隆）',
        ko: '북부 (타이베이/지룽)',
        vi: 'Miền Bắc',
      },
      icon: '🏙️',
    },
    {
      id: 'central',
      label: {
        'zh-TW': '中部・台中逢甲',
        en: 'Central (Taichung)',
        ja: '中部（台中）',
        ko: '중부 (타이중)',
        vi: 'Miền Trung',
      },
      icon: '🏞️',
    },
    {
      id: 'south',
      label: {
        'zh-TW': '南部・台南高雄',
        en: 'South (Tainan/Kaohsiung)',
        ja: '南部（台南・高雄）',
        ko: '남부 (타이난/가오슝)',
        vi: 'Miền Nam',
      },
      icon: '🌴',
    },
    {
      id: 'east',
      label: {
        'zh-TW': '東部・宜蘭花蓮',
        en: 'East (Yilan/Hualien)',
        ja: '東部（宜蘭・花蓮）',
        ko: '동부 (이란/화롄)',
        vi: 'Miền Đông',
      },
      icon: '🌊',
    },
  ],
  th: [
    {
      id: 'all',
      label: {
        'zh-TW': '全泰精選 (7)',
        en: 'All Thailand (7)',
        ja: '全タイ (7)',
        ko: '태국 전체 (7)',
        vi: 'Toàn Thái Lan (7)',
      },
      icon: '🏮',
    },
    {
      id: 'central',
      label: {
        'zh-TW': '中部・曼谷唐人街',
        en: 'Bangkok / Central',
        ja: '中部（バンコク）',
        ko: '중부 (방콕)',
        vi: 'Miền Trung / Bangkok',
      },
      icon: '🏙️',
    },
    {
      id: 'north',
      label: {
        'zh-TW': '北部・清邁古城',
        en: 'North / Chiang Mai',
        ja: '北部（チェンマイ）',
        ko: '북부 (치앙마이)',
        vi: 'Miền Bắc / Chiang Mai',
      },
      icon: '🏞️',
    },
    {
      id: 'south',
      label: {
        'zh-TW': '南部・普吉海島',
        en: 'South / Phuket',
        ja: '南部（プーケット）',
        ko: '남부 (푸켓)',
        vi: 'Miền Nam / Phuket',
      },
      icon: '🌴',
    },
    {
      id: 'isan',
      label: {
        'zh-TW': '東北・伊善風情',
        en: 'Isan / Northeast',
        ja: '東北（イサーン）',
        ko: '북동부 (이산)',
        vi: 'Đông Bắc (Isan)',
      },
      icon: '🌶️',
    },
  ],
  jp: [
    {
      id: 'all',
      label: {
        'zh-TW': '全日巡禮 (7)',
        en: 'All Japan (7)',
        ja: '全日本 (7)',
        ko: '일본 전체 (7)',
        vi: 'Toàn Nhật Bản (7)',
      },
      icon: '🏮',
    },
    {
      id: 'kyushu',
      label: {
        'zh-TW': '九州・福岡中洲屋台',
        en: 'Kyushu (Fukuoka Yatai)',
        ja: '九州（福岡・中洲屋台）',
        ko: '규슈 (후쿠오카)',
        vi: 'Kyushu (Fukuoka)',
      },
      icon: '🍜',
    },
    {
      id: 'kansai',
      label: {
        'zh-TW': '關西・大阪道頓堀京都',
        en: 'Kansai (Osaka/Kyoto)',
        ja: '関西（大阪・京都）',
        ko: '간사이 (오사카/교토)',
        vi: 'Kansai (Osaka/Kyoto)',
      },
      icon: '🐙',
    },
    {
      id: 'kanto',
      label: {
        'zh-TW': '關東・東京昭和橫丁',
        en: 'Kanto (Tokyo Yokocho)',
        ja: '関東（東京横丁・浅草）',
        ko: '간토 (도쿄)',
        vi: 'Kanto (Tokyo)',
      },
      icon: '🗼',
    },
    {
      id: 'hokkaido',
      label: {
        'zh-TW': '北海道・函館朝市',
        en: 'Hokkaido (Hakodate)',
        ja: '北海道（函館朝市）',
        ko: '홋카이도 (하코ダテ)',
        vi: 'Hokkaido (Hakodate)',
      },
      icon: '🦀',
    },
  ],
  kr: [
    {
      id: 'all',
      label: {
        'zh-TW': '全韓旗艦 (6)',
        en: 'All Korea (6)',
        ja: '韓国全土 (6)',
        ko: '한국 전체 (6)',
        vi: 'Toàn Hàn Quốc (6)',
      },
      icon: '🏮',
    },
    {
      id: 'seoul',
      label: {
        'zh-TW': '首爾・廣藏明洞弘大',
        en: 'Seoul (Gwangjang & Youth)',
        ja: 'ソウル（広蔵・明洞・弘大）',
        ko: '서울 (광장/명동/홍대)',
        vi: 'Thủ đô Seoul',
      },
      icon: '🏙️',
    },
    {
      id: 'busan',
      label: {
        'zh-TW': '釜山・富平罐頭夜市',
        en: 'Busan (Bupyeong Night Market)',
        ja: '釜山（富平カントン市場）',
        ko: '부산 (부평깡통야시장)',
        vi: 'Busan Bupyeong',
      },
      icon: '🌊',
    },
  ],
  my: [
    {
      id: 'all',
      label: {
        'zh-TW': '全馬精選 (10)',
        en: 'All Malaysia (10)',
        ja: 'マレーシア全土 (10)',
        ko: '말레이시아 전체 (10)',
        vi: 'Toàn Malaysia (10)',
      },
      icon: '🏮',
    },
    {
      id: 'kl',
      label: {
        'zh-TW': '吉隆坡雪蘭莪・亞羅街',
        en: 'Kuala Lumpur / Klang',
        ja: 'クアラルンプール・クラン',
        ko: '쿠알라룸푸르 / 클랑',
        vi: 'Kuala Lumpur / Klang',
      },
      icon: '🏙️',
    },
    {
      id: 'penang',
      label: {
        'zh-TW': '檳城・新關仔角美食',
        en: 'Penang (Gurney & Chulia)',
        ja: 'ペナン（ガーニー・チュリア）',
        ko: '페낭 (거니/추리아)',
        vi: 'Penang',
      },
      icon: '🏖️',
    },
    {
      id: 'south',
      label: {
        'zh-TW': '南馬中馬・馬六甲怡保',
        en: 'Melaka & Ipoh Old Town',
        ja: 'マラッカ・イポー',
        ko: '말라카 / 이포',
        vi: 'Melaka / Ipoh',
      },
      icon: '🏛️',
    },
    {
      id: 'eastCoast',
      label: {
        'zh-TW': '東海岸・吉蘭丹',
        en: 'East Coast (Kelantan)',
        ja: '東海岸（コタバル）',
        ko: '동해안 (켈란탄)',
        vi: 'Bờ Đông (Kelantan)',
      },
      icon: '🥥',
    },
    {
      id: 'borneo',
      label: {
        'zh-TW': '東馬・沙巴亞庇加雅街',
        en: 'Sabah Borneo (Kota Kinabalu)',
        ja: 'サバ・ボルネオ（コタキナバル）',
        ko: '보르네오 사바 (코타키나발루)',
        vi: 'Sabah Borneo',
      },
      icon: '🌴',
    },
  ],
  ph: [
    {
      id: 'all',
      label: {
        'zh-TW': '全國精選 (6)',
        en: 'All Philippines (6)',
        ja: 'フィリピン全土 (6)',
        ko: '필리핀 전체 (6)',
        vi: 'Toàn Philippines (6)',
      },
      icon: '🏮',
    },
    {
      id: 'ncr',
      label: {
        'zh-TW': '馬尼拉大都會・奎阿坡BGC',
        en: 'Metro Manila (Quiapo/BGC)',
        ja: 'マニラ首都圏（キアポ・BGC）',
        ko: '메트로 마닐라',
        vi: 'Vùng Thủ đô Manila',
      },
      icon: '🏙️',
    },
    {
      id: 'visayas',
      label: {
        'zh-TW': '米沙鄢・宿霧碳烤集市',
        en: 'Visayas (Cebu Larsian)',
        ja: 'ビサヤ（セブ島）',
        ko: '비사야 (세부)',
        vi: 'Visayas (Cebu)',
      },
      icon: '🌴',
    },
    {
      id: 'mindanao',
      label: {
        'zh-TW': '棉蘭老・達沃羅哈斯夜市',
        en: 'Mindanao (Davao Roxas)',
        ja: 'ミンダナオ（ダバオ）',
        ko: '민다나오 (다바오)',
        vi: 'Mindanao (Davao)',
      },
      icon: '🌋',
    },
  ],
  vn: [
    {
      id: 'all',
      label: {
        'zh-TW': '全越精選 (6)',
        en: 'All Vietnam (6)',
        ja: 'ベトナム全土 (6)',
        ko: '베트남 전체 (6)',
        vi: 'Toàn Việt Nam (6)',
      },
      icon: '🏮',
    },
    {
      id: 'north',
      label: {
        'zh-TW': '北部・河內老街與同春',
        en: 'North (Hanoi Old Quarter)',
        ja: '北部（ハノイ旧市街・同春）',
        ko: '북부 (하노이 구시가지)',
        vi: 'Miền Bắc (Hà Nội)',
      },
      icon: '🏙️',
    },
    {
      id: 'central',
      label: {
        'zh-TW': '中部・順化東霸峴港會安',
        en: 'Central (Hue/Da Nang/Hoi An)',
        ja: '中部（フエ・ダナン・ホイアン）',
        ko: '중부 (후에/다낭/호이안)',
        vi: 'Miền Trung (Huế/Đà Nẵng/Hội An)',
      },
      icon: '🏮',
    },
    {
      id: 'south',
      label: {
        'zh-TW': '南部・胡志明濱城與永慶',
        en: 'South (Saigon / HCMC)',
        ja: '南部（ホーチミン市・ベンタイン）',
        ko: '남부 (호치민시)',
        vi: 'Miền Nam (TP. Hồ Chí Minh)',
      },
      icon: '🌆',
    },
    {
      id: 'highlands',
      label: {
        'zh-TW': '西原・大叻高原階梯夜市',
        en: 'Highlands (Da Lat Steps)',
        ja: '高原（ダラット）',
        ko: '고원 (달랏)',
        vi: 'Tây Nguyên (Đà Lạt)',
      },
      icon: '🌲',
    },
  ],
};

const TTS_LANG_CODES: Record<CountryCode, string> = {
  tw: 'zh-TW',
  th: 'th-TH',
  jp: 'ja-JP',
  kr: 'ko-KR',
  my: 'ms-MY',
  ph: 'fil-PH',
  vn: 'vi-VN',
};

export const NightMarketExplorer: React.FC<NightMarketExplorerProps> = ({
  country,
  onSelectRecipe,
}) => {
  const { language } = useLanguage();
  const ui = getUI(language);
  const meta = COUNTRIES.find((c) => c.code === country) || COUNTRIES[0];
  const allMarkets = getNightMarketsByCountry(country);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [playingMarketId, setPlayingMarketId] = useState<string | null>(null);

  const regionTabs = COUNTRY_REGION_CONFIG[country] || [
    {
      id: 'all',
      label: {
        'zh-TW': `全區導覽 (${allMarkets.length})`,
        en: `All Markets (${allMarkets.length})`,
        ja: `全域 (${allMarkets.length})`,
        ko: `전체 (${allMarkets.length})`,
        vi: `Tất cả (${allMarkets.length})`,
      },
      icon: '🏮',
    },
  ];

  const filteredMarkets =
    selectedRegion === 'all'
      ? allMarkets
      : allMarkets.filter((m) => m.region === selectedRegion);

  const handleSpeak = (phrase: string, marketId: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setPlayingMarketId(marketId);

    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = TTS_LANG_CODES[country] || 'en-US';
    utterance.rate = 0.88;
    utterance.onend = () => setPlayingMarketId(null);
    utterance.onerror = () => setPlayingMarketId(null);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Explorer Overview Header */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #0F172A 0%, #1E293B 60%, ${meta.accent}33 100%)`,
          border: `1px solid ${meta.accent}44`,
        }}
      >
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-wider mb-3 border border-amber-500/30">
            <Compass className="w-3.5 h-3.5" />
            <span>{countryName(country, language)} {ui.district.tabMarkets}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-2">
            {countryName(country, language)} · {allMarkets.length} {ui.district.marketCount}
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
            {ui.district.explorerSubtitle}
          </p>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-xl bg-white/10 text-stone-200 backdrop-blur-md border border-white/10 font-bold">
              {ui.district.transitFeatureBadge}
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/10 text-stone-200 backdrop-blur-md border border-white/10 font-bold">
              {ui.district.audioFeatureBadge}
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/10 text-stone-200 backdrop-blur-md border border-white/10 font-bold">
              {ui.district.dishesFeatureBadge}
            </span>
          </div>
        </div>
      </div>

      {/* Regional Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {regionTabs.map((tab) => {
          const isActive = selectedRegion === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.playClick();
                setSelectedRegion(tab.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-stone-900 text-amber-400 shadow-md border border-amber-500/40 scale-[1.02]'
                  : 'bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200 shadow-2xs'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label[language] || tab.label['zh-TW'] || tab.label.en}</span>
            </button>
          );
        })}
      </div>

      {/* Night Market Immersion Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredMarkets.map((market) => {
          const marketNameStr = text(market.name, language);
          const cityNameStr = text(market.city, language);
          const descriptionStr = text(market.description, language);
          const transitStr = text(market.mrtStation, language) || text(market.transportInfo, language);
          const funFactStr = text(market.funFact, language);

          return (
            <div
              key={market.id}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Hero Image & Headings */}
                <div className="relative h-64 sm:h-76 w-full bg-stone-950 overflow-hidden shrink-0">
                  <img
                    src={market.imageUrl}
                    alt={marketNameStr}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                  {/* Top Corner Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-950/80 text-amber-300 text-xs sm:text-sm font-black backdrop-blur-md border border-amber-500/30">
                      <MapPin className="w-4 h-4" />
                      <span>{cityNameStr}</span>
                    </div>

                    <span className="text-xs font-black uppercase px-3.5 py-1.5 rounded-full bg-stone-950/80 text-white backdrop-blur-md border border-white/20">
                      {(market.region || '').toUpperCase()} · {meta.flag} {meta.name}
                    </span>
                  </div>

                  {/* Bottom Title inside Hero */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">
                      {marketNameStr}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 space-y-6">
                  {/* Cultural Story */}
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    {descriptionStr}
                  </p>

                  {/* Transit & Opening Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm bg-stone-50 p-4 rounded-2xl border border-stone-100">
                    {transitStr && (
                      <div className="flex items-start gap-2.5 text-stone-700">
                        <Train className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-stone-900 block">
                            {ui.district.transitLabel}
                          </span>
                          <span className="text-stone-600 leading-snug">{transitStr}</span>
                        </div>
                      </div>
                    )}

                    {market.openingHours && (
                      <div className="flex items-start gap-2.5 text-stone-700">
                        <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-stone-900 block">
                            {ui.district.openingHours}
                          </span>
                          <span className="text-stone-600 leading-snug">{text(market.openingHours, language)}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Foodie Fun Fact / Cultural Tip */}
                  {funFactStr && (
                    <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-xs sm:text-sm text-amber-950">
                      <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-amber-900 block mb-0.5">
                          💡 {ui.district.foodieFunFact}
                        </span>
                        <span className="text-stone-700 leading-relaxed">{funFactStr}</span>
                      </div>
                    </div>
                  )}

                  {/* Local Slang Ordering Audio Bar */}
                  {market.localSlangOrderPhrase && (
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-900 text-white border border-stone-800 shadow-sm">
                      <div className="flex items-center gap-3 overflow-hidden pr-2">
                        <span className="text-xl shrink-0">🗣️</span>
                        <div className="truncate">
                          <span className="text-xs text-amber-400 font-extrabold block uppercase tracking-wider">
                            {ui.district.orderingSimulation}
                          </span>
                          <span className="text-sm sm:text-base text-stone-100 font-bold truncate block">
                            &ldquo;{market.localSlangOrderPhrase}&rdquo;
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleSpeak(market.localSlangOrderPhrase!, market.id)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black shrink-0 transition-all active:scale-95 ${
                          playingMarketId === market.id
                            ? 'bg-amber-400 text-stone-950 scale-105 shadow-glow'
                            : 'bg-white/15 hover:bg-white/25 text-white'
                        }`}
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>
                          {playingMarketId === market.id
                            ? ui.district.playingAudio
                            : ui.district.listenAudio}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Signature Dishes from this Market */}
              {market.signatureDishes && market.signatureDishes.length > 0 && (
                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                  <div className="flex items-center gap-2 mb-3 border-t border-stone-100 pt-4">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <h4 className="text-xs sm:text-sm font-black tracking-wider text-stone-600 uppercase">
                      {ui.district.signatureDishesLabel}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {market.signatureDishes.map((dishId) => {
                      const recipe = findRecipeByIdOrSlug(dishId);
                      if (!recipe) return null;
                      const dishTitle = text(recipe.title, language);
                      const dishSubtitle = text(recipe.subtitle, language);

                      return (
                        <div
                          key={dishId}
                          onClick={() => {
                            soundEffects.playClick();
                            onSelectRecipe(recipe);
                          }}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 hover:bg-amber-50/80 border border-stone-200/80 hover:border-amber-300 transition-all cursor-pointer group/card"
                        >
                          <img
                            src={recipe.heroImage}
                            alt={dishTitle}
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0 group-hover/card:scale-105 transition-transform"
                            loading="lazy"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-black text-xs sm:text-sm text-stone-900 truncate group-hover/card:text-amber-800 transition-colors">
                              {dishTitle}
                            </h5>
                            {dishSubtitle && (
                              <p className="text-xs text-stone-500 truncate mt-0.5">
                                {dishSubtitle}
                              </p>
                            )}
                            <div className="flex items-center gap-2 mt-1 text-xs text-stone-500 font-bold">
                              <span>{recipe.cookTimeMinutes} min</span>
                              {recipe.caloriesPerServing && (
                                <span className="flex items-center text-rose-500">
                                  <Flame className="w-3 h-3 mr-0.5" />
                                  {recipe.caloriesPerServing} kcal
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-xs font-bold text-amber-600 shrink-0 mr-1 group-hover/card:translate-x-1 transition-transform">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
