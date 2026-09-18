import type { Language } from '../types/unified';

export interface UIStrings {
  header: {
    brandSubtitle: string;
    survivalBtn: string;
  };
  marketHall: {
    heroBadge: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    survivalCardsBtn: string;
    searchResultsTitle: string;
    dishesUnit: string;
    clearSearch: string;
    districtsTitle: string;
    districtsSubtitle: string;
    dishesClassic: string;
    enterDistrict: string;
    spotlightTitle: string;
    spotlightSubtitle: string;
  };
  district: {
    allMarkets: string;
    districtDishes: string;
    categoryLabel: string;
    allCategory: string;
    tabDishes: string;
    tabMarkets: string;
    marketCount: string;
    openingHours: string;
    transitLabel: string;
    proTipLabel: string;
    orderPhraseLabel: string;
    viewGuideBtn: string;
    signatureDishesLabel: string;
    explorerSubtitle: string;
    transitFeatureBadge: string;
    audioFeatureBadge: string;
    dishesFeatureBadge: string;
    regionAll: string;
    foodieFunFact: string;
    orderingSimulation: string;
    listenAudio: string;
    playingAudio: string;
    cookGuide: string;
  };
  nightMarketModal: {
    badge: string;
    hours: string;
    transit: string;
    proTip: string;
    orderPhrase: string;
    speakBtn: string;
    speakingBtn: string;
    signatureDishes: string;
    viewRecipeBtn: string;
    closeBtn: string;
  };
  recipeDetail: {
    backToMarket: string;
    save: string;
    saved: string;
    startCookMode: string;
    ingredientsTitle: string;
    servings: string;
    defaultServings: string;
    keyFlavor: string;
    buyOnAmazon: string;
    clerkCardBtn: string;
    substituteBtn: string;
    substituteRatio: string;
    originsTitle: string;
    originsSubtitle: string;
    orderingPhraseTitle: string;
    listenPronunciation: string;
    speaking: string;
    stallFlashcard: string;
    famousMarkets: string;
    masterStepsTitle: string;
    openFullscreen: string;
    stepPrefix: string;
    tipsPrefix: string;
    troubleshootingTitle: string;
    troubleshootingSubtitle: string;
    causeLabel: string;
    solutionLabel: string;
    proTipsTitle: string;
  };
  cookware: {
    title: string;
    subtitle: string;
    traditional: string;
    airFryer: string;
    instantPot: string;
    takoyakiPlate: string;
    oven: string;
    riceCooker: string;
  };
  focusMode: {
    title: string;
    unmute: string;
    mute: string;
    voice: string;
    reading: string;
    servingsInfo: string;
    stepTimer: string;
    timerComplete: string;
    stopAlarm: string;
    startTimer: string;
    pauseTimer: string;
    resetTimer: string;
    prevStep: string;
    nextStep: string;
    finishMaster: string;
    masteredTitle: string;
    masteredDesc: string;
    returnRecipe: string;
  };
  clerkModal: {
    groceryBadge: string;
    stallBadge: string;
    showStaffPrompt: string;
    showVendorPrompt: string;
    itemName: string;
    whereToBuy: string;
    substitute: string;
    dietaryCustom: string;
    speakNative: string;
    speaking: string;
  };
  survivalModal: {
    badge: string;
    title: string;
    showVendorPrompt: string;
    speakBtn: string;
    speakingBtn: string;
    selectCardTitle: string;
  };
  drinkLab: {
    badge: string;
    title: string;
    subtitle: string;
    tabBoba: string;
    tabThai: string;
    tabMatcha: string;
    formulaTitle: string;
    teaBase: string;
    blackTea: string;
    oolongTea: string;
    greenTea: string;
    bobaAmount: string;
    sweetness: string;
    tigerGlaze: string;
    buyBobaAmazon: string;
    thaiRecipeTitle: string;
    condensedMilk: string;
    evaporatedMilk: string;
    buyThaiAmazon: string;
    matchaRecipeTitle: string;
    matchaAmount: string;
    waterTemp: string;
    buyMatchaAmazon: string;
  };
  pantry: {
    badge: string;
    pantryTitleSuffix: string;
    subtitle: string;
    amazonDisclosure: string;
    buyAmazonPrime: string;
    substitute: string;
    recommendedBrands: string;
  };
  passport: {
    title: string;
    subtitle: string;
    unlockedProgress: string;
    stampsSection: string;
    favoritesSection: string;
    emptyFavoritesTitle: string;
    emptyFavoritesSubtitle: string;
  };
  footer: {
    title: string;
    disclosure: string;
    copyright: string;
  };
  nav: {
    markets: string;
    drinkLab: string;
    pantry: string;
    passport: string;
  };
}

export const UI_STRINGS: Record<Language, UIStrings> = {
  en: {
    header: {
      brandSubtitle: '7-Country Asian Street Food Guide',
      survivalBtn: 'Survival Cards',
    },
    marketHall: {
      heroBadge: '7 Asian Night Markets · 130+ Authentic Street Dishes',
      heroSubtitle:
        'The premier Asian street food guide: hands-free cooking steps, bilingual clerk flashcards, Amazon Prime ingredients, and offline audio pronunciations.',
      searchPlaceholder: 'Search 130+ street dishes (e.g. Popcorn Chicken, Pad Thai, Matcha)...',
      survivalCardsBtn: 'Night Market Survival Cards',
      searchResultsTitle: 'Search Results',
      dishesUnit: 'dishes',
      clearSearch: 'Clear',
      districtsTitle: 'Seven Night Market Districts',
      districtsSubtitle: 'Select a district below to explore iconic night market stalls and authentic dishes.',
      dishesClassic: 'Iconic Dishes',
      enterDistrict: 'Enter District',
      spotlightTitle: 'World Famous Night Markets',
      spotlightSubtitle: 'Iconic street food hubs, yatai stalls, and bustling night bazaars across 7 Asian regions.',
    },
    district: {
      allMarkets: 'All Night Markets',
      districtDishes: 'dishes of authentic street food',
      categoryLabel: 'Category:',
      allCategory: 'All',
      tabDishes: 'Street Food Recipes',
      tabMarkets: 'Night Market Guides',
      marketCount: 'iconic night markets',
      openingHours: 'Opening Hours',
      transitLabel: 'Transit & MRT',
      proTipLabel: 'Insider Pro Tip',
      orderPhraseLabel: 'Local Order Phrase',
      viewGuideBtn: 'Explore Market Guide',
      signatureDishesLabel: 'Must-Eat Dishes',
      explorerSubtitle: 'Explore iconic stalls, secret foodie tips, transit station exits, and audio ordering slang across regions.',
      transitFeatureBadge: '🚅 Transit & Station Guides',
      audioFeatureBadge: '🔊 Native Audio Ordering',
      dishesFeatureBadge: '🍽️ 1-Click Iconic Recipes',
      regionAll: 'All Regions',
      foodieFunFact: 'Foodie Insider Secret',
      orderingSimulation: 'Local Ordering Slang',
      listenAudio: 'Listen Audio',
      playingAudio: 'Playing...',
      cookGuide: 'Cooking Guide',
    },
    nightMarketModal: {
      badge: 'Night Market & Food Street Guide',
      hours: 'Opening Hours',
      transit: 'Transportation & MRT',
      proTip: 'Insider Secret & Pro Tip',
      orderPhrase: 'Local Slang Order Phrase',
      speakBtn: '🔊 Speak Native Pronunciation',
      speakingBtn: 'Pronouncing...',
      signatureDishes: 'Iconic Signature Dishes in this Market',
      viewRecipeBtn: 'View Recipe',
      closeBtn: 'Close Guide',
    },
    recipeDetail: {
      backToMarket: 'Back to Market',
      save: 'Save',
      saved: 'Saved',
      startCookMode: 'Start Cooking Mode',
      ingredientsTitle: 'Ingredients',
      servings: 'Servings',
      defaultServings: 'Default',
      keyFlavor: 'Key Flavor',
      buyOnAmazon: 'Buy on Amazon',
      clerkCardBtn: 'Clerk Card',
      substituteBtn: 'Substitute',
      substituteRatio: 'Ratio',
      originsTitle: 'Night Market Origins',
      originsSubtitle: 'Cultural Roots & Lore',
      orderingPhraseTitle: 'Street Food Ordering Phrase',
      listenPronunciation: 'Listen',
      speaking: 'Speaking...',
      stallFlashcard: 'Stall Flashcard',
      famousMarkets: 'Famous Night Markets:',
      masterStepsTitle: 'Master Steps',
      openFullscreen: 'Open Fullscreen →',
      stepPrefix: 'Step',
      tipsPrefix: 'Tips:',
      troubleshootingTitle: 'Troubleshooting FAQ',
      troubleshootingSubtitle: 'Why did my dish fail and how to fix it',
      causeLabel: 'Cause:',
      solutionLabel: 'Fix:',
      proTipsTitle: 'Chef Pro Tips',
    },
    cookware: {
      title: 'Cooking Method',
      subtitle: 'Steps adapt automatically',
      traditional: 'Traditional Wok / Stove',
      airFryer: 'Air Fryer',
      instantPot: 'Instant Pot / Pressure Cooker',
      takoyakiPlate: 'Takoyaki Plate',
      oven: 'Oven',
      riceCooker: 'Rice Cooker',
    },
    focusMode: {
      title: 'Focus Cooking Mode',
      unmute: 'Unmute',
      mute: 'Mute',
      voice: 'Voice',
      reading: 'Reading',
      servingsInfo: 'Servings',
      stepTimer: 'Step Timer',
      timerComplete: 'Timer Complete!',
      stopAlarm: 'Stop Alarm',
      startTimer: 'Start Timer',
      pauseTimer: 'Pause',
      resetTimer: 'Reset Timer',
      prevStep: 'Previous',
      nextStep: 'Next Step',
      finishMaster: 'Finish & Master',
      masteredTitle: 'Dish Mastered!',
      masteredDesc: 'You have completed all steps. A passport stamp has been recorded in your Taste Passport!',
      returnRecipe: 'Return to Recipe',
    },
    clerkModal: {
      groceryBadge: '🏪 Asian Grocery Clerk Card',
      stallBadge: '🏮 Street Vendor Order Card',
      showStaffPrompt: 'Show this card to store staff',
      showVendorPrompt: 'Show this card to the street vendor',
      itemName: 'Item Name:',
      whereToBuy: 'Where to find:',
      substitute: 'Substitute:',
      dietaryCustom: 'Dietary Customizations:',
      speakNative: '🔊 Speak Native Pronunciation',
      speaking: 'Speaking...',
    },
    survivalModal: {
      badge: 'Night Market Survival Cards',
      title: 'Dietary & Emergency Order Cards',
      showVendorPrompt: 'Show this card to the vendor',
      speakBtn: '🔊 Speak Native Phrase',
      speakingBtn: 'Speaking...',
      selectCardTitle: 'Select Survival Card:',
    },
    drinkLab: {
      badge: 'Interactive Street Drink Lab',
      title: 'Asian Street Beverage Bar',
      subtitle: 'Master the exact secret ratios of Taiwan Boba, Thai Iced Tea, and Uji Matcha.',
      tabBoba: 'Boba Milk Tea',
      tabThai: 'Thai Iced Tea',
      tabMatcha: 'Matcha Latte',
      formulaTitle: 'Customize Your Golden Ratio',
      teaBase: 'Tea Base:',
      blackTea: 'Assam Black Tea',
      oolongTea: 'High Mountain Oolong',
      greenTea: 'Jasmine Green Tea',
      bobaAmount: 'Boba Pearls:',
      sweetness: 'Sweetness:',
      tigerGlaze: 'Tiger Stripes Brown Sugar Glaze',
      buyBobaAmazon: '🛒 Find Tea & Boba Pearls on Amazon',
      thaiRecipeTitle: 'Bangkok Street Cart Recipe',
      condensedMilk: 'Sweetened Condensed Milk:',
      evaporatedMilk: 'Evaporated Milk Topping:',
      buyThaiAmazon: '🛒 Buy Authentic ChaTraMue on Amazon',
      matchaRecipeTitle: 'Ceremonial Matcha Ratio',
      matchaAmount: 'Ceremonial Matcha:',
      waterTemp: 'Water Temperature:',
      buyMatchaAmazon: '🛒 Buy Uji Matcha Powder on Amazon',
    },
    pantry: {
      badge: 'Asian Street Food Pantry & Spice Market',
      pantryTitleSuffix: 'Essential Pantry & Spices',
      subtitle: 'Curated authentic ingredients, sauces, and cookware ready to order on Amazon Prime.',
      amazonDisclosure:
        'Amazon Associates Disclosure: As an Amazon Associate, Night Market Bites earns from qualifying purchases at no additional cost to you.',
      buyAmazonPrime: 'Buy on Amazon Prime',
      substitute: 'Substitute:',
      recommendedBrands: 'Recommended Brands:',
    },
    passport: {
      title: 'Taste Passport',
      subtitle: 'Explore authentic street dishes and collect commemorative rubber stamps for all 7 countries.',
      unlockedProgress: 'Progress:',
      stampsSection: '7-Country Passport Stamps',
      favoritesSection: 'Saved Favorites',
      emptyFavoritesTitle: 'No favorites saved yet',
      emptyFavoritesSubtitle: 'Tap the heart icon on any recipe to save it to your pocket list.',
    },
    footer: {
      title: 'Night Market Bites · Asian Street Food Guide',
      disclosure:
        'Amazon Associates Disclosure: As an Amazon Associate, Night Market Bites earns from qualifying purchases at no extra cost to you. Physical ingredients & cookware are sourced via Amazon Prime.',
      copyright: '© 2026 Night Market Bites. Built for iOS & iPadOS.',
    },
    nav: {
      markets: 'Markets',
      drinkLab: 'Drink Lab',
      pantry: 'Pantry',
      passport: 'Passport',
    },
  },

  'zh-TW': {
    header: {
      brandSubtitle: '亞洲七國正宗夜市美食指南',
      survivalBtn: '點餐急救卡',
    },
    marketHall: {
      heroBadge: '7 大亞洲夜市 · 130+ 道正宗街頭小吃',
      heroSubtitle: '亞洲頂級街頭美食與夜市文化手冊：手把手料理教學、大字店員溝通卡、Amazon 原料直購與離線語音發音。',
      searchPlaceholder: '搜尋 130+ 道夜市小吃 (如 鹽酥雞, Pad Thai, 抹茶)...',
      survivalCardsBtn: '夜市點餐急救卡',
      searchResultsTitle: '搜尋結果',
      dishesUnit: '道小吃',
      clearSearch: '清除搜尋',
      districtsTitle: '七大夜市街區',
      districtsSubtitle: '點擊進入各國專屬街區，探索當季必吃與道地風味。',
      dishesClassic: '道經典小吃',
      enterDistrict: '漫遊夜市街區',
      spotlightTitle: '亞洲指標傳奇夜市',
      spotlightSubtitle: '精選七國最具煙火氣的排檔、屋台、巴剎與夜市名勝街區。',
    },
    district: {
      allMarkets: '所有夜市街區',
      districtDishes: '道街頭正宗夜市料理',
      categoryLabel: '分類:',
      allCategory: '全部',
      tabDishes: '道地街頭料理',
      tabMarkets: '夜市街區導覽',
      marketCount: '處指標名勝夜市',
      openingHours: '營業時間',
      transitLabel: '交通捷運指南',
      proTipLabel: '老饕秘訣',
      orderPhraseLabel: '在地點餐發音',
      viewGuideBtn: '查看夜市指南',
      signatureDishesLabel: '必吃招牌美食',
      explorerSubtitle: '探索各大區域指標名攤、老饕冷知識、捷運交通與道地點餐用語。',
      transitFeatureBadge: '🚅 捷運與交通抵達指引',
      audioFeatureBadge: '🔊 在地原音點餐用語',
      dishesFeatureBadge: '🍽️ 指標料理一鍵直達食譜',
      regionAll: '全區旗艦',
      foodieFunFact: '老饕私房冷知識',
      orderingSimulation: '在地原音點餐模擬',
      listenAudio: '聆聽發音',
      playingAudio: '播放中...',
      cookGuide: '料理食譜指南',
    },
    nightMarketModal: {
      badge: '夜市與美食街區深度導覽',
      hours: '營業時間',
      transit: '交通與捷運抵達指南',
      proTip: '內行老饕必備秘訣',
      orderPhrase: '道地在地點餐發音',
      speakBtn: '🔊 播放當地語音發音',
      speakingBtn: '朗讀發音中...',
      signatureDishes: '此夜市不可錯過的代表料理',
      viewRecipeBtn: '查看料理食譜',
      closeBtn: '關閉導覽',
    },
    recipeDetail: {
      backToMarket: '返回夜市',
      save: '收藏',
      saved: '已收藏',
      startCookMode: '開始沉浸式烹飪',
      ingredientsTitle: '食材清單',
      servings: '人份',
      defaultServings: '預設',
      keyFlavor: '靈魂風味',
      buyOnAmazon: 'Amazon 購買',
      clerkCardBtn: '問店員卡',
      substituteBtn: '替代方案',
      substituteRatio: '比例',
      originsTitle: '夜市文化與起源',
      originsSubtitle: '街頭典故與由來',
      orderingPhraseTitle: '夜市點餐短語',
      listenPronunciation: '播放發音',
      speaking: '朗讀中...',
      stallFlashcard: '攤販文字卡',
      famousMarkets: '著名夜市:',
      masterStepsTitle: '分步料理指南',
      openFullscreen: '全螢幕模式 →',
      stepPrefix: '步驟',
      tipsPrefix: '秘訣:',
      troubleshootingTitle: '常見烹飪失敗與急救',
      troubleshootingSubtitle: '料理常見失敗原因與急救方案',
      causeLabel: '原因分析:',
      solutionLabel: '解決秘訣:',
      proTipsTitle: '主廚秘笈',
    },
    cookware: {
      title: '選擇烹飪模式',
      subtitle: '步驟自動依模式調整',
      traditional: '傳統爐灶 / 炒鍋',
      airFryer: '氣炸鍋',
      instantPot: '壓力鍋 (Instant Pot)',
      takoyakiPlate: '章魚燒烤盤',
      oven: '烤箱',
      riceCooker: '電鍋',
    },
    focusMode: {
      title: '沉浸式烹飪模式',
      unmute: '開啟聲音',
      mute: '靜音',
      voice: '語音朗讀',
      reading: '朗讀中',
      servingsInfo: '人份',
      stepTimer: '步驟計時器',
      timerComplete: '計時結束！',
      stopAlarm: '關閉鬧鈴',
      startTimer: '開始計時',
      pauseTimer: '暫停',
      resetTimer: '重設計時',
      prevStep: '上一步',
      nextStep: '下一步',
      finishMaster: '完成並掌握',
      masteredTitle: '料理挑戰成功！',
      masteredDesc: '您已完成所有烹飪步驟！已在味蕾護照加蓋專屬紀念鋼印。',
      returnRecipe: '返回食譜',
    },
    clerkModal: {
      groceryBadge: '🏪 亞超採購卡',
      stallBadge: '🏮 夜市點餐卡',
      showStaffPrompt: '請向店員出示此卡片',
      showVendorPrompt: '請向老闆出示此卡片',
      itemName: '品名:',
      whereToBuy: '哪裡可以買到:',
      substitute: '替代方案:',
      dietaryCustom: '點餐客製需求:',
      speakNative: '🔊 播放當地語音',
      speaking: '正在朗讀中...',
    },
    survivalModal: {
      badge: '夜市生存急救卡',
      title: '夜市點餐避坑與生存急救卡',
      showVendorPrompt: '向老闆出示此畫面',
      speakBtn: '🔊 播放當地語音',
      speakingBtn: '朗讀中...',
      selectCardTitle: '選擇急救卡片:',
    },
    drinkLab: {
      badge: '互動街頭飲品工坊',
      title: '亞洲街頭飲品工坊',
      subtitle: '探索波霸奶茶、泰式手標奶茶與宇治抹茶的黃金比例。',
      tabBoba: '波霸奶茶',
      tabThai: '泰式奶茶',
      tabMatcha: '宇治抹茶',
      formulaTitle: '調配你的黃金比例',
      teaBase: '茶湯基底:',
      blackTea: '阿薩姆紅茶',
      oolongTea: '凍頂烏龍',
      greenTea: '茉莉綠茶',
      bobaAmount: '珍珠份量:',
      sweetness: '黑糖甜度:',
      tigerGlaze: '黑糖琥珀虎紋掛杯',
      buyBobaAmazon: '🛒 在 Amazon 購買珍珠與茶包原料',
      thaiRecipeTitle: '曼谷街頭手標泰奶配方',
      condensedMilk: '泰國煉乳:',
      evaporatedMilk: '三花淡奶:',
      buyThaiAmazon: '🛒 購買正宗手標泰茶 (ChaTraMue)',
      matchaRecipeTitle: '宇治抹茶拿鐵茶道參數',
      matchaAmount: '抹茶粉用量:',
      waterTemp: '沖泡水溫:',
      buyMatchaAmazon: '🛒 購買宇治抹茶粉與茶筅',
    },
    pantry: {
      badge: '亞洲夜市調料百寶箱',
      pantryTitleSuffix: '必備調料百寶箱',
      subtitle: '7 國經典夜市必備調味品、替代方案與 Amazon 直購通道。',
      amazonDisclosure:
        'Amazon 導購聲明：作為 Amazon Associates 合作夥伴，Night Market Bites 透過合格購買賺取收益，您無需支付任何額外費用。',
      buyAmazonPrime: '前往 Amazon Prime 購買',
      substitute: '替代方案:',
      recommendedBrands: '推薦品牌:',
    },
    passport: {
      title: '亞洲夜市味蕾護照',
      subtitle: '每探索或烹飪一道夜市小吃，點擊完成即可在專屬護照加蓋紀念鋼印。',
      unlockedProgress: '解鎖進度:',
      stampsSection: '七國街區紀念鋼印',
      favoritesSection: '口袋收藏清單',
      emptyFavoritesTitle: '尚無收藏的夜市小吃',
      emptyFavoritesSubtitle: '瀏覽食譜時點擊愛心圖標，即可加入您的口袋清單。',
    },
    footer: {
      title: 'Night Market Bites · 亞洲夜市正宗街頭美食指南',
      disclosure:
        'Amazon 導購聲明：作為 Amazon Associates 合作夥伴，Night Market Bites 透過合格購買賺取微薄收益。實體原料與廚具皆透過 Amazon Prime 導購。',
      copyright: '© 2026 Night Market Bites. 專為 iOS & iPadOS 打造。',
    },
    nav: {
      markets: '夜市大廳',
      drinkLab: '飲品工坊',
      pantry: '調料百寶箱',
      passport: '味蕾護照',
    },
  },

  ja: {
    header: {
      brandSubtitle: 'アジア7カ国の屋台グルメガイド',
      survivalBtn: '注文カード',
    },
    marketHall: {
      heroBadge: 'アジア7大夜市 · 130以上の本格屋台料理',
      heroSubtitle:
        'アジアの屋台グルメ完全ガイド：料理手順、現地語注文カード、Amazon食材ガイド、オフライン音声発音機能。',
      searchPlaceholder: '130以上の屋台料理を検索 (例: 塩唐揚げ, パッタイ, 抹茶)...',
      survivalCardsBtn: '夜市トラベル注文カード',
      searchResultsTitle: '検索結果',
      dishesUnit: '品',
      clearSearch: 'クリア',
      districtsTitle: '7大夜市・屋台街',
      districtsSubtitle: '国別の屋台街を選んで、人気グルメと伝統の味を巡りましょう。',
      dishesClassic: '定番料理',
      enterDistrict: '屋台街を見る',
      spotlightTitle: 'アジアの伝説的ナイトマーケット',
      spotlightSubtitle: '活気あふれる屋台街、夜市、パサール・マラムの名所めぐり。',
    },
    district: {
      allMarkets: 'すべての夜市',
      districtDishes: '品の本格屋台グルメ',
      categoryLabel: 'カテゴリー:',
      allCategory: 'すべて',
      tabDishes: '屋台料理レシピ',
      tabMarkets: '夜市・屋台街ガイド',
      marketCount: 'カ所の名物夜市',
      openingHours: '営業時間',
      transitLabel: 'アクセス・交通',
      proTipLabel: 'ツウの豆知識',
      orderPhraseLabel: '現地注文フレーズ',
      viewGuideBtn: '夜市ガイドを見る',
      signatureDishesLabel: '名物グルメ',
      explorerSubtitle: '各地域の名物屋台、食通の豆知識、アクセス情報、現地注文フレーズを網羅。',
      transitFeatureBadge: '🚅 駅出口・アクセス情報',
      audioFeatureBadge: '🔊 現地ネイティブ音声',
      dishesFeatureBadge: '🍽️ 名物グルメ直結レシピ',
      regionAll: '全域',
      foodieFunFact: '食通の隠れた豆知識',
      orderingSimulation: 'ローカル注文シミュレーション',
      listenAudio: '音声を聴く',
      playingAudio: '再生中...',
      cookGuide: 'レシピを見る',
    },
    nightMarketModal: {
      badge: '夜市・屋台街ガイド',
      hours: '営業時間',
      transit: 'アクセス・最寄駅',
      proTip: '耳寄り豆知識＆コツ',
      orderPhrase: '現地語での注文フレーズ',
      speakBtn: '🔊 音声で発音を聞く',
      speakingBtn: '再生中...',
      signatureDishes: 'この夜市の名物ストリートフード',
      viewRecipeBtn: 'レシピを見る',
      closeBtn: '閉じる',
    },
    recipeDetail: {
      backToMarket: '戻る',
      save: '保存',
      saved: '保存済み',
      startCookMode: 'クッキングモード開始',
      ingredientsTitle: '材料リスト',
      servings: '人前',
      defaultServings: '標準',
      keyFlavor: '味の決め手',
      buyOnAmazon: 'Amazonで購入',
      clerkCardBtn: '店員見せ用カード',
      substituteBtn: '代用案',
      substituteRatio: '比率',
      originsTitle: '夜市ストーリー',
      originsSubtitle: '歴史と屋台文化',
      orderingPhraseTitle: '現地での注文フレーズ',
      listenPronunciation: '発音を聴く',
      speaking: '再生中...',
      stallFlashcard: '屋台注文カード',
      famousMarkets: '有名な夜市・屋台:',
      masterStepsTitle: '調理手順',
      openFullscreen: '全画面表示 →',
      stepPrefix: 'ステップ',
      tipsPrefix: 'コツ:',
      troubleshootingTitle: 'よくある失敗と対策',
      troubleshootingSubtitle: '失敗の原因とリカバリー法',
      causeLabel: '原因:',
      solutionLabel: '対策:',
      proTipsTitle: 'プロの裏ワザ',
    },
    cookware: {
      title: '調理器具モード',
      subtitle: 'モードに合わせて手順が自動調整されます',
      traditional: '直火・フライパン',
      airFryer: 'ノンフライヤー',
      instantPot: '電気圧力鍋',
      takoyakiPlate: 'たこ焼きプレート',
      oven: 'オーブン',
      riceCooker: '炊飯器',
    },
    focusMode: {
      title: 'フォーカスクッキングモード',
      unmute: '音声を有効化',
      mute: 'ミュート',
      voice: '音声読上',
      reading: '読上中',
      servingsInfo: '人前',
      stepTimer: 'タイマー',
      timerComplete: 'タイマー完了！',
      stopAlarm: 'アラーム停止',
      startTimer: 'タイマー開始',
      pauseTimer: '一時停止',
      resetTimer: 'リセット',
      prevStep: '前へ',
      nextStep: '次へ',
      finishMaster: 'マスター完了！',
      masteredTitle: '料理マスター達成！',
      masteredDesc: 'すべての手順を完了しました。味覚パスポートに記念スタンプが押されました！',
      returnRecipe: 'レシピに戻る',
    },
    clerkModal: {
      groceryBadge: '🏪 アジア系スーパー店員カード',
      stallBadge: '🏮 屋台注文用カード',
      showStaffPrompt: 'この画面を店員に見せてください',
      showVendorPrompt: 'この画面を屋台の店主に直接見せてください',
      itemName: '品名:',
      whereToBuy: '売り場目安:',
      substitute: '代用品:',
      dietaryCustom: 'お好み・注文カスタム:',
      speakNative: '🔊 現地語で発音する',
      speaking: '再生中...',
    },
    survivalModal: {
      badge: '夜市サバイバルカード',
      title: '夜市トラブル回避＆お役立ち注文カード',
      showVendorPrompt: '屋台の店主にこの画面を見せてください',
      speakBtn: '🔊 フレーズを発音',
      speakingBtn: '再生中...',
      selectCardTitle: 'カードを選択:',
    },
    drinkLab: {
      badge: 'インタラクティブ屋台ビバレッジラボ',
      title: 'アジア屋台ドリンク工房',
      subtitle: '台湾タピオカ、タイティー、宇治抹茶の黄金比率をマスター。',
      tabBoba: 'タピオカミルクティー',
      tabThai: 'タイアイスティー',
      tabMatcha: '抹茶ラテ',
      formulaTitle: '黄金比率をカスタマイズ',
      teaBase: 'ベースの茶葉:',
      blackTea: 'アッサム紅茶',
      oolongTea: '凍頂烏龍茶',
      greenTea: 'ジャスミン緑茶',
      bobaAmount: 'タピオカ量:',
      sweetness: '甘さ:',
      tigerGlaze: '黒糖タイガー模様',
      buyBobaAmazon: '🛒 Amazonでタピオカ・茶葉を購入',
      thaiRecipeTitle: 'バンコク本格タイティー比率',
      condensedMilk: '練乳:',
      evaporatedMilk: 'エバミルク:',
      buyThaiAmazon: '🛒 Amazonで正統手標タイティーを購入',
      matchaRecipeTitle: '宇治抹茶ラテ パラメータ',
      matchaAmount: '抹茶粉末量:',
      waterTemp: '湯温:',
      buyMatchaAmazon: '🛒 Amazonで宇治抹茶・茶筅を購入',
    },
    pantry: {
      badge: 'アジア屋台食材・調味料パントリー',
      pantryTitleSuffix: '必須調味料ボックス',
      subtitle: '厳選された本場の調味料・食材・調理器具をAmazon Primeで簡単入手。',
      amazonDisclosure:
        'Amazonアソシエイト開示情報：Night Market Bitesは適格販売により収入を得ています（追加費用はかかりません）。',
      buyAmazonPrime: 'Amazon Primeで購入',
      substitute: '代用品:',
      recommendedBrands: '推奨ブランド:',
    },
    passport: {
      title: '味覚パスポート',
      subtitle: 'アジア7大夜市の料理を巡り、記念スタンプを集めましょう。',
      unlockedProgress: '達成度:',
      stampsSection: '7カ国の記念スタンプ',
      favoritesSection: 'お気に入りリスト',
      emptyFavoritesTitle: 'お気に入りはまだありません',
      emptyFavoritesSubtitle: 'レシピのハートアイコンをタップするとここに追加されます。',
    },
    footer: {
      title: 'Night Market Bites · アジア屋台グルメガイド',
      disclosure:
        'Amazonアソシエイト開示情報：Night Market Bitesは適格販売により収入を得ています。',
      copyright: '© 2026 Night Market Bites. Built for iOS & iPadOS.',
    },
    nav: {
      markets: '夜市',
      drinkLab: 'ラボ',
      pantry: '食材箱',
      passport: 'パスポート',
    },
  },

  // Fallbacks for ko, th, vi, ms, fil using polished English with regional title touch
  ko: {} as any,
  th: {} as any,
  vi: {} as any,
  ms: {} as any,
  fil: {} as any,
};

// Fill fallbacks with 'en' for any missing language
(['ko', 'th', 'vi', 'ms', 'fil'] as Language[]).forEach((lang) => {
  UI_STRINGS[lang] = UI_STRINGS.en;
});

export function getUI(lang: Language): UIStrings {
  return UI_STRINGS[lang] || UI_STRINGS.en;
}
