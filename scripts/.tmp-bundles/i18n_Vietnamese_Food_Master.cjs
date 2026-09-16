"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../Vietnamese Food Master/src/i18n/translations.ts
var translations_exports = {};
__export(translations_exports, {
  translations: () => translations
});
module.exports = __toCommonJS(translations_exports);
var translations = {
  "zh-TW": {
    appName: "\u8D8A\u5473\u5927\u5E2B | Vietnamese Food Master",
    appSubtitle: "\u9053\u5730\u8D8A\u5357\u8857\u982D\u5C0F\u5403\u30FB\u6EF4\u6F0F\u5496\u5561\u5BE6\u9A57\u5BA4\u30FB\u9999\u8349\u767E\u79D1\u8207\u591C\u5E02\u6587\u5316\u6307\u5357",
    searchPlaceholder: "\u641C\u5C0B\u8D8A\u5357\u5C0F\u5403\uFF08\u5982\uFF1A\u751F\u725B\u8089\u6CB3\u7C89\u3001\u70E4\u8089\u6CD5\u5305\u3001\u6625\u6372\u3001\u96DE\u86CB\u5496\u5561\u3001B\xE1nh M\xEC\uFF09...",
    nav: {
      explore: "\u6599\u7406\u63A2\u7D22",
      caPheLab: "\u6EF4\u6F0F\u5496\u5561\u5427",
      nightMarkets: "\u591C\u5E02\u7F8E\u98DF\u8857",
      pantry: "\u9999\u6599\u9B5A\u9732\u5EAB",
      favorites: "\u6211\u7684\u73CD\u85CF"
    },
    hero: {
      badge: "\u{1F1FB}\u{1F1F3} \u8D8A\u5357\u7F8E\u98DF\u9748\u9B42\u5B87\u5B99\u30FB\u5168\u7AEF\u6599\u7406\u6307\u5357",
      title: "\u820C\u5C16\u4E0A\u7684\u8D8A\u5357",
      titleHighlight: "\u8857\u982D\u7159\u706B\u8207\u9999\u8349\u6E05\u5E7D",
      subtitle: "\u5F9E\u6CB3\u5167\u70AD\u706B B\xFAn Ch\u1EA3 \u5230\u897F\u8CA2\u9165\u8106\u7206\u6C41\u6CD5\u5305\uFF0C\u7CBE\u9078 15+ \u9053\u570B\u5BB6\u7D1A\u62DB\u724C\u5C0F\u5403\u3002\u7368\u5BB6\u652F\u63F4\u300C\u6C23\u70B8\u934B\u300D\u300C\u58D3\u529B\u934B\u300D\u8207\u300C\u6EF4\u6F0F\u5496\u5561\u5BE6\u9A57\u5BA4\u300D\uFF0C\u5E36\u4F60\u5728\u5BB6\u5B8C\u7F8E\u5FA9\u523B\u9053\u5730\u8D8A\u5473\uFF01",
      ctaCook: "\u63A2\u7D22\u71B1\u9580\u98DF\u8B5C",
      ctaCaPhe: "\u9032\u5165 C\xE0 Ph\xEA \u8ABF\u98F2\u5BA4",
      quickAirFryer: "\u26A1 \u6C23\u70B8\u934B\u5C0F\u5403\u5C08\u5340 (\u6625\u6372/\u6CD5\u5305/\u70E4\u8089)",
      quickInstantPot: "\u{1F372} \u96FB\u5B50\u58D3\u529B\u934B\u5C08\u5340 (\u9AD8\u6E6F\u725B\u8089\u7C89/\u725B\u8169)"
    },
    categories: {
      all: "\u5168\u90E8\u6599\u7406",
      mains: "\u7C73\u9EB5\u4E3B\u98DF (Ph\u1EDF / B\xFAn)",
      rollsSnacks: "\u8857\u982D\u6372\u9905\u5C0F\u5403 (B\xE1nh M\xEC / Cu\u1ED1n)",
      soupsStews: "\u71B1\u6E6F\u71C9\u934B (B\xF2 Kho / Canh)",
      salads: "\u6DBC\u62CC\u6C99\u62C9 (N\u1ED9m / G\u1ECFi)",
      dessertsDrinks: "\u751C\u54C1\u5496\u5561 (C\xE0 Ph\xEA / Ch\xE8)"
    },
    filter: {
      airFryerOnly: "\u6C23\u70B8\u934B\u9069\u914D",
      instantPotOnly: "\u58D3\u529B\u934B\u9069\u914D",
      allCookware: "\u6240\u6709\u5EDA\u5177",
      difficulty: "\u96E3\u6613\u5EA6",
      dietary: "\u98F2\u98DF\u7FD2\u6163",
      resetFilters: "\u91CD\u8A2D\u6240\u6709\u7BE9\u9078",
      noResults: "\u67E5\u7121\u7B26\u5408\u689D\u4EF6\u7684\u8D8A\u5357\u5C0F\u5403",
      noResultsDesc: "\u5617\u8A66\u6E05\u9664\u7BE9\u9078\u6A19\u7C64\uFF0C\u6216\u641C\u5C0B\u5176\u4ED6\u95DC\u9375\u5B57\uFF08\u5982\uFF1APho\u3001Banh Mi\u3001\u6625\u6372\u3001\u6EF4\u6F0F\u5496\u5561\uFF09"
    },
    recipeCard: {
      prepTime: "\u5099\u6599",
      cookTime: "\u70F9\u98EA",
      servings: "\u4EBA\u4EFD",
      calories: "\u5927\u5361/\u4EFD",
      difficulty: {
        easy: "\u65B0\u624B\u53CB\u5584",
        medium: "\u9032\u968E\u63A8\u85A6",
        hard: "\u5927\u5EDA\u6311\u6230"
      },
      airFryerBadge: "\u6C23\u70B8\u934BOK",
      instantPotBadge: "\u58D3\u529B\u934BOK",
      masteredBadge: "\u5DF2\u5F81\u670D"
    },
    recipeDetail: {
      backToRecipes: "\u8FD4\u56DE\u6240\u6709\u6599\u7406",
      startFocusCooking: "\u958B\u555F\u514D\u624B\u6301\u8A9E\u97F3\u6599\u7406\u6A21\u5F0F",
      prepTime: "\u5099\u6599\u6642\u9593",
      cookTime: "\u70F9\u8ABF\u6642\u9593",
      totalTime: "\u7E3D\u8A08\u8017\u6642",
      servings: "\u4EFD\u91CF\u8A2D\u5B9A",
      calories: "\u71B1\u91CF\u9810\u4F30",
      unitSystem: "\u55AE\u4F4D\u5207\u63DB (\u516C\u5236 / \u7F8E\u5236)",
      cookwareToggleTitle: "\u9078\u64C7\u60A8\u7684\u70F9\u8ABF\u8A2D\u5099",
      cookwareOptions: {
        traditional: "\u50B3\u7D71\u7210\u706B / \u7092\u934B\u71C9\u934B",
        airFryer: "\u6C23\u70B8\u934B (\u6E1B\u6CB9\u9165\u8106)",
        instantPot: "\u96FB\u5B50\u58D3\u529B\u934B (\u6975\u901F\u6162\u71C9)"
      },
      ingredientsTitle: "\u6599\u7406\u98DF\u6750\u8207\u9EC3\u91D1\u6BD4\u4F8B",
      keyFlavorBadge: "\u9748\u9B42\u98A8\u5473\u95DC\u9375",
      substituteAvailable: "\u67E5\u770B\u5728\u5730\u8D85\u5E02\u66FF\u4EE3\u98DF\u6750",
      showToClerk: "\u51FA\u793A\u7D66\u6771\u5357\u4E9E\u96DC\u8CA8\u5E97\u8001\u95C6",
      clerkModalTitle: "\u6771\u5357\u4E9E\u96DC\u8CA8\u5E97\u8CB7\u83DC\u5361",
      clerkModalSubtitle: "\u63A1\u8CB7\u751F\u9BAE\u9999\u8349\u3001\u8ABF\u5473\u6599\u6642\uFF0C\u8ACB\u5C07\u6B64\u5361\u7247\u76F4\u63A5\u51FA\u793A\u7D66\u5E97\u54E1\u67E5\u770B\uFF1A",
      clerkPronounce: "\u8D8A\u8A9E\u767C\u97F3",
      closeModal: "\u95DC\u9589\u5361\u7247",
      stepsTitle: "\u8A73\u7D30\u70F9\u8ABF\u6B65\u9A5F\u6307\u5357",
      stepPrefix: "\u6B65\u9A5F",
      crucialTipTitle: "\u95DC\u9375\u6599\u7406\u79D8\u8A23",
      dangerWarningTitle: "\u907F\u5751\u9632\u5931\u6557\u8B66\u793A",
      timerStart: "\u958B\u59CB\u8A08\u6642",
      timerPause: "\u66AB\u505C",
      timerReset: "\u91CD\u8A2D",
      timerDone: "\u6642\u9593\u5230\uFF01",
      troubleshootingTitle: "\u6599\u7406\u7591\u96E3\u96DC\u75C7\u8207\u7FFB\u8ECA\u6436\u6551",
      troubleshootingSubtitle: "\u5728\u5BB6\u716E\u6CB3\u7C89\u6216\u6CD5\u5305\u5E38\u898B\u554F\u984C\uFF0C\u5C08\u696D\u4E3B\u5EDA\u5E6B\u4F60\u7CBE\u6E96\u6293\u6F0F",
      problem: "\u9047\u5230\u554F\u984C",
      cause: "\u539F\u56E0\u5256\u6790",
      solution: "\u6436\u6551\u89E3\u6CD5",
      cultureTitle: "\u8857\u982D\u8D77\u6E90\u8207\u6587\u5316\u6545\u4E8B",
      listenPronunciation: "\u8046\u807D\u9053\u5730\u8D8A\u8A9E\u767C\u97F3",
      famousMarkets: "\u8457\u540D\u767C\u6E90\u5730 / \u7F8E\u98DF\u4EE3\u8868\u8857\u5340",
      historyStory: "\u6B77\u53F2\u4EBA\u6587\u80CC\u666F",
      proTipsTitle: "\u4E3B\u5EDA\u79C1\u623F\u5403\u6CD5\u79D8\u7B08",
      markAsMastered: "\u6A19\u8A18\u70BA\u300C\u5DF2\u5F81\u670D\u6B64\u6599\u7406\u300D",
      masteredAlready: "\u{1F389} \u60A8\u5DF2\u6210\u529F\u5F81\u670D\u9019\u9053\u6599\u7406\uFF01",
      addToFavorites: "\u52A0\u5165\u6211\u7684\u6536\u85CF",
      removeFromFavorites: "\u5DF2\u6536\u85CF"
    },
    focusMode: {
      exit: "\u9000\u51FA\u514D\u624B\u6301\u6A21\u5F0F",
      stepProgress: "\u6B65\u9A5F\u9032\u5EA6",
      prevStep: "\u4E0A\u4E00\u6B65",
      nextStep: "\u4E0B\u4E00\u6B65",
      finishCooking: "\u5B8C\u6210\u6599\u7406\uFF01",
      readStepAloud: "\u8A9E\u97F3\u6717\u8B80\u6B65\u9A5F",
      reading: "\u6717\u8B80\u4E2D...",
      completedMessage: "\u592A\u68D2\u4E86\uFF01\u60A8\u5DF2\u6210\u529F\u5B8C\u6210\u9053\u5730\u8D8A\u5357\u6599\u7406\uFF01",
      dishMasteredPrompt: "\u7ACB\u5373\u7372\u53D6\u300C\u8D8A\u5357\u8857\u982D\u5EDA\u795E\u300D\u5FBD\u7AE0\uFF01"
    },
    caPheLab: {
      badge: "\u2615 \u8D8A\u5357\u6EF4\u6F0F\u5496\u5561\u8207\u8857\u982D\u8ABF\u98F2\u5427",
      title: "Qu\xE1n C\xE0 Ph\xEA \u5496\u5561\u5BE6\u9A57\u5BA4",
      subtitle: "\u63A2\u7D22\u4E16\u754C\u7B2C\u4E8C\u5927\u5496\u5561\u51FA\u53E3\u570B\u7684\u7368\u7279\u6C96\u716E\u9B45\u529B\uFF01\u5F9E\u7D93\u5178\u7149\u4E73\u51B0\u6EF4\u3001\u6CB3\u5167\u91D1\u9EC3\u86CB\u9EC3\u5496\u5561\u5230\u9806\u5316\u6D77\u9E7D\u5976\u84CB\uFF0C\u7CBE\u6E96\u8ABF\u914D\u9EC3\u91D1\u6C34\u7C89\u6BD4\u3002",
      selectPreset: "\u9078\u64C7\u7D93\u5178\u98A8\u5473\u7BC4\u672C",
      customDrip: "\u81EA\u7531\u5BA2\u88FD\u5316\u8ABF\u98F2",
      presets: {
        suada: "C\xE0 Ph\xEA S\u1EEFa \u0110\xE1 (\u7D93\u5178\u897F\u8CA2\u51B0\u7149\u4E73\u5496\u5561)",
        trung: "C\xE0 Ph\xEA Tr\u1EE9ng (\u6CB3\u5167\u50B3\u5947\u96DE\u86CB\u5496\u5561)",
        muoi: "C\xE0 Ph\xEA Mu\u1ED1i (\u9806\u5316\u5BAE\u5EF7\u6D77\u9E7D\u5976\u84CB\u5496\u5561)",
        dua: "C\xE0 Ph\xEA D\u1EEBa (\u5CF4\u6E2F\u751F\u6930\u51B0\u6C99\u5496\u5561)",
        bacXiu: "B\u1EA1c X\u1EC9u S\xE0i G\xF2n (\u897F\u8CA2\u767D\u5496\u5561 / \u6FC3\u751C\u5976\u9999)",
        traDao: "Tr\xE0 \u0110\xE0o Cam S\u1EA3 (\u871C\u6843\u67F3\u6A59\u9999\u8305\u51B0\u8336)"
      },
      coffeeBase: "\u8403\u53D6\u57FA\u5E95 (Phin \u6EF4\u6F0F\u6FFE\u58FA)",
      bases: {
        robusta: "\u5F97\u52D2\u7F85\u5E03\u65AF\u5854\u6DF1\u7119 (Bu\xF4n Ma Thu\u1ED9t \u70AD\u7119\u7126\u9999)",
        arabica: "\u5927\u53FB\u9AD8\u539F\u963F\u62C9\u6BD4\u5361 (C\u1EA7u \u0110\u1EA5t \u82B1\u679C\u8F15\u76C8\u9999)",
        traSen: "\u897F\u6E56\u84EE\u82B1\u85B0\u9999\u7DA0\u8336 (Tr\xE0 Sen \u6E05\u51BD\u7518\u751C)",
        traDao: "\u8D8A\u5357\u9AD8\u5730\u6DF1\u70D8\u7D05\u8336 (Tr\xE0 \u0110en \u679C\u9999\u9187\u539A)"
      },
      sweetnessLevel: "\u58FD\u661F\u516C\u7149\u4E73\u751C\u5EA6 (S\u1EEFa \u0110\u1EB7c \xD4ng Th\u1ECD)",
      sweetnessLabels: {
        zero: "0% \u9ED1\u5496\u5561\u7121\u7CD6 (C\xE0 Ph\xEA \u0110en)",
        light: "25% \u5FAE\u7CD6\u6E05\u723D (\xCDt ng\u1ECDt)",
        standard: "50% \u9EC3\u91D1\u6A19\u6E96 (V\u1EEBa)",
        saigonSweet: "100% \u897F\u8CA2\u9053\u5730\u751C\u6FC3 (Ng\u1ECDt \u0111\u1EADm)"
      },
      iceLevel: "\u51B0\u584A\u898F\u683C (\u0110\xE1)",
      iceLabels: {
        crushed: "\u6EFF\u676F\u788E\u51B0 (\u0110\xE1 b\xE0o - \u6700\u9053\u5730)",
        cubes: "\u5927\u51B0\u584A (\u0110\xE1 vi\xEAn)",
        hot: "\u71B1\u98F2\u6C34\u6D74\u4FDD\u6EAB (N\xF3ng)"
      },
      toppings: "\u5976\u84CB\u8207\u7279\u8ABF\u9802\u6599 (Toppings & Foams)",
      toppingsLabels: {
        none: "\u7121\u9802\u6599 (\u7D14\u7CB9\u5C64\u6B21)",
        eggCream: "\u6CB3\u5167\u6253\u767C\u86CB\u9EC3\u91D1\u96F2\u5976\u6CE1 (+110 kcal)",
        saltCream: "\u9806\u5316\u6D77\u9E7D\u6FC3\u9187\u539A\u5976\u84CB (+85 kcal)",
        coconutSlush: "\u9BAE\u69A8\u6930\u6F3F\u96EA\u878D\u51B0\u6C99 (+95 kcal)",
        coffeeJelly: "\u9ED1\u7CD6\u5496\u5561\u624B\u5DE5\u8106\u51CD (+30 kcal)",
        peachSlices: "\u539A\u5207\u7CD6\u6F2C\u9EC3\u6843\u679C\u8089 (+40 kcal)"
      },
      nutritionStats: {
        estimatedCalories: "\u9810\u4F30\u7E3D\u71B1\u91CF",
        caffeineLevel: "\u5496\u5561\u56E0\u542B\u91CF",
        phinDripTime: "Phin \u6EF4\u6F0F\u60B6\u84B8\u6642\u9593"
      },
      streetSlangTitle: "\u9053\u5730\u8D8A\u5357\u8857\u982D\u5496\u5561\u9928\u9EDE\u55AE\u53E3\u8A23",
      slangQuote: "\u300CCho m\u1ED9t ly c\xE0 ph\xEA s\u1EEFa \u0111\xE1 nhi\u1EC1u \u0111\xE1 \xEDt ng\u1ECDt mang \u0111i!\u300D",
      listenSlang: "\u9EDE\u64CA\u8046\u807D\u8D8A\u5357\u8857\u982D\u9EDE\u55AE\u767C\u97F3",
      homeBrewGuideTitle: "\u5C45\u5BB6 Phin \u6EF4\u6F0F\u624B\u6C96 4 \u5927\u9EC3\u91D1\u5B88\u5247",
      phinTip: "\u5148\u52A0 20ml \u6CB8\u6C34\u6F64\u6FD5\u60B6\u84B8 30 \u79D2\u4F7F\u5496\u5561\u7C89\u8212\u5C55\uFF0C\u518D\u8F15\u58D3\u58D3\u677F\u6CE8\u6C34\u81F3\u6EFF\uFF0C\u8B93\u5496\u5561\u4E00\u6EF4\u6EF4\u7DE9\u6162\u8403\u53D6 4-5 \u5206\u9418\u3002"
    },
    nightMarket: {
      badge: "\u{1F5FA}\uFE0F \u8D8A\u591C\u8D8A\u7F8E\u5473\u30FB\u7F8E\u98DF\u5730\u6A19\u5730\u5716",
      title: "\u8D8A\u5357\u8857\u982D\u7F8E\u98DF\u5730\u5716\u8207\u591C\u5E02\u6307\u5357",
      subtitle: "\u5F9E\u5317\u8D8A\u6CB3\u5167\u8001\u57CE\u5340\u7684\u8857\u908A\u5C0F\u77EE\u51F3\uFF0C\u5230\u5357\u8D8A\u897F\u8CA2\u9713\u8679\u9583\u720D\u7684\u6392\u6A94\u6D77\u9BAE\u8857\uFF0C\u5C0B\u627E\u6700\u9053\u5730\u7684\u96B1\u85CF\u7F8E\u5473\u3002",
      filterRegion: "\u6309\u5730\u7406\u5340\u57DF\u7BE9\u9078",
      regions: {
        all: "\u5168\u90E8\u5340\u57DF",
        north: "\u5317\u90E8 (\u6CB3\u5167 / \u8001\u57CE)",
        central: "\u4E2D\u90E8 (\u9806\u5316 / \u5CF4\u6E2F / \u6703\u5B89)",
        south: "\u5357\u90E8 (\u80E1\u5FD7\u660E\u5E02\u897F\u8CA2)",
        highlands: "\u4E2D\u592E\u9AD8\u539F (\u5927\u53FB\u907F\u6691\u5C71\u57CE)"
      },
      openingHours: "\u71DF\u696D\u6642\u9593",
      transport: "\u4EA4\u901A\u8207\u62B5\u9054\u6307\u5F15",
      signatureFood: "\u5FC5\u5403\u62DB\u724C\u63A8\u85A6",
      insiderTip: "\u5167\u884C\u8001\u9955\u907F\u5751\u6307\u5357",
      streetSlangOrder: "\u5728\u5730\u4EBA\u9EDE\u9910\u9ED1\u8A71",
      listenOrderPhrase: "\u8046\u807D\u9EDE\u9910\u8D8A\u8A9E\u767C\u97F3",
      viewRecipeButton: "\u67E5\u770B\u6B64\u5C0F\u5403\u98DF\u8B5C"
    },
    pantry: {
      badge: "\u{1F9C4} \u9748\u9B42\u9999\u6599\u8207\u842C\u80FD\u8ABF\u5473",
      title: "\u8D8A\u5357\u9999\u8349\u767E\u79D1\u8207 N\u01B0\u1EDBc Ch\u1EA5m \u6CBE\u91AC\u5BE6\u9A57\u5BA4",
      subtitle: "\u638C\u63E1\u8D8A\u5357\u83DC\u5E73\u8861\u751C\u3001\u9178\u3001\u9E79\u3001\u8FA3\u3001\u7518\u4E94\u5473\u7684\u79D8\u8A23\uFF01\u5F9E\u5BCC\u570B\u5CF6\u539F\u7522\u9802\u7D1A\u9B5A\u9732\uFF0C\u5230\u751F\u751F\u4E0D\u606F\u7684\u516D\u5927\u9BAE\u6D3B\u9999\u8349\u3002",
      balancerTitle: "\u842C\u80FD\u8D8A\u5F0F\u9178\u751C\u9B5A\u9732\u6C34 (N\u01B0\u1EDBc Ch\u1EA5m) \u6BD4\u4F8B\u5E73\u8861\u5668",
      balancerSubtitle: "\u6ED1\u52D5\u6ED1\u687F\u81EA\u7531\u8ABF\u6574\u4EFD\u91CF\u8207\u5357/\u5317\u53E3\u5473\u504F\u597D\uFF0C\u81EA\u52D5\u7CBE\u6E96\u63DB\u7B97\u5404\u5927\u98DF\u6750\u5927\u5319\u8207\u514B\u6578\uFF1A",
      servingsCount: "\u88FD\u4F5C\u4EFD\u91CF",
      tasteStyle: "\u98A8\u5473\u6D41\u6D3E\u9078\u64C7",
      southernSweet: "\u5357\u8D8A\u897F\u8CA2\u6D3E (\u5FAE\u504F\u6E05\u751C\u679C\u9178\uFF0C\u9752\u6AB8\u751C\u9999)",
      northernSavory: "\u5317\u8D8A\u6CB3\u5167\u6D3E (\u9E79\u9BAE\u9187\u539A\uFF0C\u849C\u8FA3\u56DE\u7518\u7A81\u51FA)",
      ingredientsRatio: "\u9EC3\u91D1\u8ABF\u91AC\u6BD4\u4F8B\u6E05\u55AE",
      fishSauce: "\u7279\u7D1A\u9B5A\u9732 (40\xB0N)",
      limeJuice: "\u65B0\u9BAE\u58D3\u69A8\u9752\u6AB8\u6C41",
      sugar: "\u7D30\u7802\u7CD6\u6216\u4E09\u6EAB\u7CD6",
      warmWater: "\u6EAB\u6C34 (\u878D\u5316\u7CD6\u7C92)",
      garlicMinced: "\u7D30\u5207\u849C\u672B",
      chiliMinced: "\u65B0\u9BAE\u9CE5\u773C\u671D\u5929\u6912\u672B",
      tbspUnit: "\u5927\u5319 (tbsp)",
      clovesUnit: "\u74E3 (\u5207\u672B)",
      chiliesUnit: "\u6839 (\u5207\u5708)",
      herbBibleTitle: "\u8D8A\u5357\u751F\u9BAE\u9999\u8349\u8056\u7D93 (Rau Th\u01A1m)",
      herbBibleSubtitle: "\u8D8A\u5357\u6599\u7406\u751F\u6A5F\u52C3\u52C3\u7684\u9748\u9B42\uFF01\u6BCF\u9053\u5C0F\u5403\u5FC5\u5099\u7684\u8349\u672C\u82AC\u82B3\uFF1A",
      fishSauceGradeTitle: "\u9B5A\u9732\u7B49\u7D1A\u6A19\u7C64 (35\xB0N / 40\xB0N / 60\xB0N) \u662F\u4EC0\u9EBC\u610F\u601D\uFF1F",
      fishSauceGradeDesc: "\xB0N (\u5EA6\u6578) \u4EE3\u8868\u6BCF\u516C\u5347\u9B5A\u9732\u4E2D\u63D0\u7149\u51FA\u7684\u5929\u7136\u86CB\u767D\u8CEA\u6BEB\u514B\u6578\u3002\u4E00\u822C\u716E\u6E6F\u7528 30\xB0N \u5373\u53EF\uFF1B\u82E5\u88FD\u4F5C\u751F\u6625\u6372\u6216\u6DBC\u62CC\u51B7\u76E4\u6CBE\u91AC\uFF0C\u5F37\u70C8\u63A8\u85A6\u9078\u7528 40\xB0N \u539F\u6DB2\u521D\u69A8\u9B5A\u9732\uFF08\u5982\u5BCC\u570B\u5CF6 Ph\xFA Qu\u1ED1c\uFF09\uFF0C\u9BAE\u751C\u99A5\u90C1\u800C\u4E0D\u6B7B\u9E79\uFF01"
    },
    favorites: {
      title: "\u6211\u7684\u73CD\u85CF\u98DF\u8B5C\u8207\u5EDA\u795E\u6210\u5C31",
      subtitle: "\u8A18\u9304\u60A8\u7684\u8D8A\u5357\u6599\u7406\u63A2\u7D22\u9032\u5EA6\uFF0C\u6536\u85CF\u5FC3\u5100\u5C0F\u5403\u4E26\u8A18\u9304\u6599\u7406\u6210\u679C\u3002",
      savedCount: "\u5DF2\u6536\u85CF\u6599\u7406",
      masteredCount: "\u5DF2\u6210\u529F\u5F81\u670D",
      emptyFavs: "\u76EE\u524D\u9084\u6C92\u6709\u6536\u85CF\u4EFB\u4F55\u8D8A\u5357\u5C0F\u5403\uFF0C\u5FEB\u53BB\u300C\u6599\u7406\u63A2\u7D22\u300D\u901B\u901B\u5427\uFF01",
      exploreDishes: "\u7ACB\u5373\u63A2\u7D22\u71B1\u9580\u6599\u7406",
      tabs: {
        saved: "\u6211\u7684\u6536\u85CF\u593E",
        mastered: "\u5DF2\u5F81\u670D\u5FBD\u7AE0\u9928"
      },
      conqueredDishes: "\u5DF2\u5F81\u670D {count} / {total} \u9053\u8D8A\u5357\u50B3\u5947\u8857\u982D\u6599\u7406",
      conqueredOf: "OF {total} CONQUERED",
      badgeCount: "\u5DF2\u638C\u63E1\u5927\u5E2B\u52F3\u7AE0 ({count})",
      viewRecipe: "\u67E5\u770B\u98DF\u8B5C",
      emptyFavTitle: "\u5C1A\u672A\u6536\u85CF\u4EFB\u4F55\u8D8A\u5357\u5C0F\u5403\u98DF\u8B5C",
      emptyFavDesc: "\u5728\u63A2\u7D22\u9801\u9762\u700F\u89BD\u5404\u9053\u8D8A\u5357\u7F8E\u98DF\uFF0C\u9EDE\u64CA\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u611B\u5FC3\uFF0C\u5373\u53EF\u5C07\u60A8\u60F3\u5B78\u7684\u9053\u5730\u7F8E\u5473\u6536\u85CF\u5230\u6B64\u8655\u96A8\u6642\u7FFB\u95B1\uFF01",
      emptyFavButton: "\u700F\u89BD\u7CBE\u9078\u8D8A\u5357\u7D93\u5178\u6599\u7406"
    },
    navbar: {
      brandBadge: "\u8D8A\u5473\u5927\u5E2B"
    },
    footer: {
      tagline: "\u5C08\u70BA\u5168\u7403\u8D8A\u5357\u5C0F\u5403\u8207\u8857\u982D\u7F8E\u98DF\u611B\u597D\u8005\u6253\u9020\uFF1A\u9053\u5730\u514B\u6578\u914D\u65B9\u3001\u6D77\u5916\u98DF\u6750\u66FF\u4EE3\u3001\u6C23\u70B8\u934B/\u96FB\u58D3\u529B\u934B\u9069\u914D\u8207\u591C\u5E02\u9EDE\u9910\u8D8A\u8A9E\u767C\u97F3\u6307\u5357\u3002",
      coreFeaturesTitle: "APP \u6838\u5FC3\u7279\u8272",
      featureRecipes: "16 \u9053\u9053\u5730\u8D8A\u5357\u7D93\u5178\u5C0F\u5403 5 \u570B\u8A9E\u8A00\u7CBE\u78BA\u514B\u6578\u98DF\u8B5C",
      featureCaPhe: "C\xE0 Ph\xEA \u8D8A\u5F0F\u5496\u5561\u8207\u8857\u982D\u7279\u8ABF\u52D5\u614B\u6EF4\u6F0F\u5BE6\u9A57\u5BA4",
      featureMarkets: "\u5168\u8D8A\u516D\u5927\u5340\u57DF\u7F8E\u98DF\u8857\u8207\u591C\u5E02\u8D8A\u8A9E\u9EDE\u9910\u767C\u97F3",
      featurePantry: "\u4E94\u5927\u9999\u8349\u5BF6\u5178\u3001\u9B5A\u9732\u5EA6\u6578\u6307\u5357\u8207\u842C\u80FD\u9B5A\u9732\u6CBE\u91AC\u8A08\u7B97\u5668",
      toolsTitle: "\u96E2\u7DDA\u652F\u63F4\u8207\u96A8\u8EAB\u5DE5\u5177",
      toolsDesc: "\u652F\u63F4\u5168\u87A2\u5E55\u514D\u624B\u6301\u5C08\u6CE8\u6599\u7406\u6A21\u5F0F\u3001\u6B65\u9032\u64EC\u771F\u8A08\u6642\u5668\u3001\u8A9E\u97F3\u767C\u97F3\u8207\u6D77\u5916\u4E9E\u8D85\u5E97\u54E1\u6C42\u52A9\u5927\u5B57\u5361\u3002",
      sisterAppsTitle: "\u4E9E\u6D32\u7F8E\u98DF\u77E9\u9663 \u2022 \u59CA\u59B9 App \u7CFB\u5217 (Asian Culinary Universe)",
      sisterAppsSubtitle: "\u540C\u4E00\u5EDA\u85DD\u5718\u968A\u7CBE\u5FC3\u6253\u9020\uFF0C\u9EDE\u64CA\u5373\u523B\u9020\u8A2A",
      copyrightTeam: "\u8D8A\u5473\u5927\u5E2B"
    },
    common: {
      minutes: "\u5206\u9418",
      quickShortcuts: "\u5FEB\u7BE9\u6377\u5F91\uFF1A",
      reset: "\u91CD\u8A2D",
      audioPlaying: "\u{1F50A} \u6B63\u5728\u64AD\u653E\u771F\u4EBA\u767C\u97F3...",
      chefModeReady: "\u6E96\u5099\u597D\u958B\u555F\u5927\u5EDA\u6A21\u5F0F\u4E86\u55CE\uFF1F",
      chefModeDesc: "\u5168\u87A2\u5E55\u8A9E\u97F3\u6717\u8B80\u6B65\u9A5F\u30FB\u5167\u5EFA\u8A08\u6642\u5668\u30FB\u5C08\u70BA\u5EDA\u623F\u70F9\u8ABF\u8A2D\u8A08",
      ingredientsReady: "{checked} / {total} \u5DF2\u5099\u59A5",
      suggestedSubstitute: "\u{1F4A1} \u5EFA\u8B70\u66FF\u4EE3\uFF1A",
      ratio: "\u6BD4\u4F8B",
      shoppingGuide: "\u{1F6D2} \u8CFC\u8CB7\u6307\u5357\uFF1A",
      dietaryLabels: {
        vegetarian: "\u7D20\u98DF",
        glutenFree: "\u7121\u9EA9\u8CEA",
        pescatarian: "\u6D77\u9BAE\u6C34\u7522"
      },
      calcTitle: "\u{1FAD7} \u842C\u80FD\u9748\u9B42\u9B5A\u9732\u6CBE\u91AC\u8A08\u7B97\u5668 (N\u01B0\u1EDBc Ch\u1EA5m Balancer)",
      calcDesc: "\u751F\u6625\u6372\u3001\u70E4\u8089\u7C73\u7DDA\u3001\u714E\u9905\u842C\u7528\uFF01\u81EA\u52D5\u8A08\u7B97\u6BD4\u4F8B\uFF0C\u4FDD\u8B49\u849C\u6CE5\u8FA3\u6912\u5B8C\u7F8E\u6D6E\u5728\u6C34\u9762\u3002",
      calcServings: "\u4EFD\u91CF\u898F\u6A21 (Servings)",
      calcPersonUnit: "\u4EBA\u4EFD (Persons)",
      calcSolo: "1\u4EBA\u55AE\u4EAB",
      calcFamily: "4\u4EBA\u5BB6\u5EAD",
      calcParty: "10\u4EBA\u6D3E\u5C0D",
      calcFloatingTipTitle: "\u4E3B\u5EDA\u6F02\u6D6E\u79D8\u8A23 (Floating Secret)",
      calcFloatingTip: "\u52D9\u5FC5\u5148\u7528\u6EAB\u6C34\u5FB9\u5E95\u878D\u5316\u4E8C\u7802\uFF0C\u518D\u5012\u5165\u7D14\u9B5A\u9732\u8207\u65B0\u9BAE\u6AB8\u6AAC\u6C41\u3002\u849C\u672B\u8207\u8FA3\u6912\u5708\u6700\u5F8C\u624D\u4E0B\uFF01\u5BC6\u5EA6\u5DEE\u6703\u8B93\u849C\u84C9\u5982\u96EA\u82B1\u822C\u6F02\u4EAE\u6D6E\u5728\u7D05\u5BF6\u77F3\u822C\u900F\u4EAE\u7684\u91AC\u6C41\u8868\u9762\uFF0C\u7D55\u4E0D\u6C89\u5E95\uFF01",
      calcProportionsTitle: "\u7CBE\u6E96\u8ABF\u914D\u9EC3\u91D1\u914D\u65B9 (Calculated Proportions)",
      calcFinelyMinced: "\u7814\u78E8\u8D8A\u7D30\u6D6E\u529B\u8D8A\u4F73",
      calcSpiceAdjust: "\u4F9D\u55DC\u8FA3\u7A0B\u5EA6\u5FAE\u8ABF",
      herbShopButton: "Amazon \u5C0B\u627E\u9999\u8349",
      herbFlavorProfile: "\u98A8\u5473\u7279\u5FB5 (Flavor Profile)",
      herbBestMatched: "\u7D93\u5178\u642D\u914D (Best Matched With)",
      herbWesternSub: "\u26A1 \u897F\u65B9\u8D85\u5E02\u6025\u7528\u66FF\u4EE3\u6CD5:",
      fishSauceGuideTitle: "\u{1F41F} \u9B5A\u9732\u5EA6\u6578 (\xB0N) \u89E3\u5BC6\u6307\u5357\uFF1A\u5982\u4F55\u770B\u61C2\u74F6\u8EAB\u5BC6\u78BC\uFF1F",
      fishSauceGuideDesc: "\u5EA6\u6578\u8D8A\u9AD8\u4EE3\u8868\u5929\u7136\u9B5A\u86CB\u767D\u6C2E\u7D20\uFF08Nitrogen\uFF09\u542B\u91CF\u8D8A\u6FC3\u90C1\u3002\u751F\u8638\u8207\u5FEB\u7092\u7528\u5C0D\u5EA6\u6578\uFF0C\u7F8E\u5473\u500D\u589E\uFF01",
      fishSauceIdealUsage: "\u6700\u4F73\u4F7F\u7528\u5834\u666F (Ideal Usage)",
      amazonSearch: "Amazon \u641C\u5C0B",
      pantryProductsTitle: "\u{1F96B} \u5FC5\u5099\u55AE\u54C1\u63A1\u8CFC\u63A8\u85A6 (Essential Pantry Products)",
      amazonPrime: "Amazon Prime"
    }
  },
  "en": {
    appName: "Vietnamese Food Master",
    appSubtitle: "Authentic Street Food, C\xE0 Ph\xEA Lab, Fresh Herbs & Night Market Guide",
    searchPlaceholder: "Search Vietnamese dishes (Pho, Banh Mi, Bun Cha, Egg Coffee, Spring Rolls)...",
    nav: {
      explore: "Explore Dishes",
      caPheLab: "C\xE0 Ph\xEA Lab",
      nightMarkets: "Night Markets",
      pantry: "Pantry & Herbs",
      favorites: "My Favorites"
    },
    hero: {
      badge: "\u{1F1FB}\u{1F1F3} The Ultimate Vietnamese Culinary Universe",
      title: "Flavors of Vietnam",
      titleHighlight: "Sizzling Woks & Herbal Harmony",
      subtitle: "From Hanoi\u2019s smokey Bun Cha to Saigon\u2019s shatteringly crispy Banh Mi, discover 15+ iconic street food masterclasses. Features multi-cookware guides, C\xE0 Ph\xEA brewing simulator, and hands-free cooking!",
      ctaCook: "Browse Recipes",
      ctaCaPhe: "Open C\xE0 Ph\xEA Lab",
      quickAirFryer: "\u26A1 Air Fryer Street Eats (Spring Rolls / Banh Mi)",
      quickInstantPot: "\u{1F372} Instant Pot Classics (Clear Pho / Bo Kho)"
    },
    categories: {
      all: "All Dishes",
      mains: "Mains & Noodles (Ph\u1EDF / B\xFAn)",
      rollsSnacks: "Street Rolls & Snacks (B\xE1nh M\xEC / Cu\u1ED1n)",
      soupsStews: "Soups & Stews (B\xF2 Kho / Canh)",
      salads: "Salads & Appetizers (N\u1ED9m / G\u1ECFi)",
      dessertsDrinks: "Desserts & Drinks (C\xE0 Ph\xEA / Ch\xE8)"
    },
    filter: {
      airFryerOnly: "Air Fryer Ready",
      instantPotOnly: "Instant Pot Ready",
      allCookware: "All Cookware",
      difficulty: "Difficulty",
      dietary: "Dietary",
      resetFilters: "Reset Filters",
      noResults: "No Vietnamese recipes found",
      noResultsDesc: "Try adjusting your filters or search for another keyword (e.g. Pho, Banh Mi, Spring Rolls)"
    },
    recipeCard: {
      prepTime: "Prep",
      cookTime: "Cook",
      servings: "servings",
      calories: "kcal/serv",
      difficulty: {
        easy: "Beginner",
        medium: "Intermediate",
        hard: "Master Chef"
      },
      airFryerBadge: "Air Fryer",
      instantPotBadge: "Instant Pot",
      masteredBadge: "Mastered"
    },
    recipeDetail: {
      backToRecipes: "Back to all dishes",
      startFocusCooking: "Start Hands-Free Voice Cooking Mode",
      prepTime: "Prep Time",
      cookTime: "Cook Time",
      totalTime: "Total Time",
      servings: "Servings Scaler",
      calories: "Estimated Calories",
      unitSystem: "Unit System (Metric / US)",
      cookwareToggleTitle: "Choose Your Cookware Equipment",
      cookwareOptions: {
        traditional: "Traditional Stove / Wok",
        airFryer: "Air Fryer (Crispy & Light)",
        instantPot: "Instant Pot (Turbo Pressure Simmer)"
      },
      ingredientsTitle: "Ingredients & Golden Ratios",
      keyFlavorBadge: "Key Flavor Profile",
      substituteAvailable: "View Local Supermarket Substitutes",
      showToClerk: "Show to Asian Grocery Clerk",
      clerkModalTitle: "Asian Grocery Clerk Card",
      clerkModalSubtitle: "Show this card to the grocery clerk when shopping for authentic Vietnamese ingredients:",
      clerkPronounce: "Vietnamese Pronunciation",
      closeModal: "Close Card",
      stepsTitle: "Step-by-Step Cooking Guide",
      stepPrefix: "Step",
      crucialTipTitle: "Crucial Chef Tip",
      dangerWarningTitle: "Watch Out / Avoid Common Mistakes",
      timerStart: "Start Timer",
      timerPause: "Pause",
      timerReset: "Reset",
      timerDone: "Timer Finished!",
      troubleshootingTitle: "Troubleshooting & Kitchen Rescues",
      troubleshootingSubtitle: "Common kitchen hurdles for pho broth and crispy baguettes, solved by pro cooks",
      problem: "Problem",
      cause: "Root Cause",
      solution: "Solution",
      cultureTitle: "Cultural Heritage & Origin Story",
      listenPronunciation: "Listen to Native Pronunciation",
      famousMarkets: "Iconic Birthplaces & Food Streets",
      historyStory: "Cultural Background",
      proTipsTitle: "Chef\u2019s Secret Dining Rituals",
      markAsMastered: "Mark as Mastered Dish",
      masteredAlready: "\u{1F389} You have conquered this dish!",
      addToFavorites: "Add to Favorites",
      removeFromFavorites: "Saved to Favorites"
    },
    focusMode: {
      exit: "Exit Hands-Free Mode",
      stepProgress: "Step Progress",
      prevStep: "Previous",
      nextStep: "Next Step",
      finishCooking: "Complete Dish!",
      readStepAloud: "Read Step Aloud",
      reading: "Reading...",
      completedMessage: "Bravo! You have mastered an authentic Vietnamese dish!",
      dishMasteredPrompt: "Earn your Vietnamese Street Food Master badge now!"
    },
    caPheLab: {
      badge: "\u2615 Vietnamese Phin Drip & Street Beverage Bar",
      title: "Qu\xE1n C\xE0 Ph\xEA Laboratory",
      subtitle: "Experience Vietnam\u2019s world-class coffee culture. From Saigon\u2019s iced condensed milk drip to Hanoi\u2019s whipped egg cap and Hue\u2019s sea salt cream.",
      selectPreset: "Choose Iconic Recipe Preset",
      customDrip: "Custom Brew Builder",
      presets: {
        suada: "C\xE0 Ph\xEA S\u1EEFa \u0110\xE1 (Saigon Classic Iced Milk Coffee)",
        trung: "C\xE0 Ph\xEA Tr\u1EE9ng (Hanoi Legendary Egg Coffee)",
        muoi: "C\xE0 Ph\xEA Mu\u1ED1i (Hue Imperial Salt Cream Coffee)",
        dua: "C\xE0 Ph\xEA D\u1EEBa (Da Nang Coconut Slush Coffee)",
        bacXiu: "B\u1EA1c X\u1EC9u S\xE0i G\xF2n (Saigon White Coffee / Extra Milk)",
        traDao: "Tr\xE0 \u0110\xE0o Cam S\u1EA3 (Peach Orange Lemongrass Tea)"
      },
      coffeeBase: "Phin Filter Extraction Base",
      bases: {
        robusta: "Bu\xF4n Ma Thu\u1ED9t Dark Robusta (Smoky Butter Roast)",
        arabica: "\u0110\xE0 L\u1EA1t C\u1EA7u \u0110\u1EA5t Arabica (Bright Floral Notes)",
        traSen: "West Lake Lotus Blossom Green Tea (Tr\xE0 Sen)",
        traDao: "Vietnamese Highland Black Tea (Tr\xE0 \u0110en)"
      },
      sweetnessLevel: "Condensed Milk Sweetness (S\u1EEFa \u0110\u1EB7c \xD4ng Th\u1ECD)",
      sweetnessLabels: {
        zero: "0% Black Unsweetened (C\xE0 Ph\xEA \u0110en)",
        light: "25% Lightly Sweet (\xCDt ng\u1ECDt)",
        standard: "50% Golden Standard (V\u1EEBa)",
        saigonSweet: "100% Authentic Saigon Sweet (Ng\u1ECDt \u0111\u1EADm)"
      },
      iceLevel: "Ice Specification (\u0110\xE1)",
      iceLabels: {
        crushed: "Packed Crushed Ice (\u0110\xE1 b\xE0o - Authentic)",
        cubes: "Ice Cubes (\u0110\xE1 vi\xEAn)",
        hot: "Hot Water Bath Keep Warm (N\xF3ng)"
      },
      toppings: "Foams & Street Toppings",
      toppingsLabels: {
        none: "Clean Drip (No Toppings)",
        eggCream: "Hanoi Whipped Golden Egg Cream (+110 kcal)",
        saltCream: "Hue Velvety Sea Salt Foam (+85 kcal)",
        coconutSlush: "Fresh Coconut Milk Slush (+95 kcal)",
        coffeeJelly: "Handcrafted Brown Sugar Coffee Jelly (+30 kcal)",
        peachSlices: "Crispy Pickled Peach Slices (+40 kcal)"
      },
      nutritionStats: {
        estimatedCalories: "Estimated Calories",
        caffeineLevel: "Caffeine Content",
        phinDripTime: "Phin Drip Extraction Time"
      },
      streetSlangTitle: "Authentic Street Slang Order Phrase",
      slangQuote: "\u201CCho m\u1ED9t ly c\xE0 ph\xEA s\u1EEFa \u0111\xE1 nhi\u1EC1u \u0111\xE1 \xEDt ng\u1ECDt mang \u0111i!\u201D",
      listenSlang: "Listen to Street Vietnamese Pronunciation",
      homeBrewGuideTitle: "4 Golden Rules for Perfect Phin Drip at Home",
      phinTip: "Add 20ml hot water first to bloom the coffee grounds for 30s, gently press the filter plate, and pour full water to allow a slow 4-5 minute drip."
    },
    nightMarket: {
      badge: "\u{1F5FA}\uFE0F Night Bites & Street Corners",
      title: "Vietnam Street Food & Night Market Explorer",
      subtitle: "From low plastic stools in Hanoi Old Quarter to buzzing seafood alleys in Ho Chi Minh City, find the finest local street gems.",
      filterRegion: "Filter by Region",
      regions: {
        all: "All Regions",
        north: "Northern (Hanoi / Old Quarter)",
        central: "Central (Hue / Da Nang / Hoi An)",
        south: "Southern (Ho Chi Minh City / Saigon)",
        highlands: "Highlands (Da Lat Cool Mountains)"
      },
      openingHours: "Hours of Operation",
      transport: "Transport & Directions",
      signatureFood: "Signature Street Must-Eats",
      insiderTip: "Local Insider Tip",
      streetSlangOrder: "Local Slang Ordering Phrase",
      listenOrderPhrase: "Listen to Order Phrase",
      viewRecipeButton: "View Dish Recipe"
    },
    pantry: {
      badge: "\u{1F9C4} Soul Seasonings & Alchemy",
      title: "Vietnamese Herb Bible & N\u01B0\u1EDBc Ch\u1EA5m Balancer",
      subtitle: "Master the 5 elements of Vietnamese cuisine: sweet, sour, salty, spicy, and umami. Featuring Phu Quoc fish sauce and fresh garden herbs.",
      balancerTitle: "Interactive N\u01B0\u1EDBc Ch\u1EA5m Dipping Sauce Calculator",
      balancerSubtitle: "Adjust servings and regional style to dynamically calculate tablespoons and grams for the perfect dipping bowl:",
      servingsCount: "Batch Servings",
      tasteStyle: "Regional Profile",
      southernSweet: "Southern Saigon (Bright lime, sweet balance)",
      northernSavory: "Northern Hanoi (Savory garlic, deep fish sauce depth)",
      ingredientsRatio: "Calculated Ingredient Ratios",
      fishSauce: "Premium Fish Sauce (40\xB0N)",
      limeJuice: "Fresh Squeezed Lime Juice",
      sugar: "Granulated or Cane Sugar",
      warmWater: "Warm Water (To Dissolve)",
      garlicMinced: "Fine Minced Garlic",
      chiliMinced: "Bird\u2019s Eye Chili Slices",
      tbspUnit: "tbsp",
      clovesUnit: "cloves (minced)",
      chiliesUnit: "chilies (sliced)",
      herbBibleTitle: "Fresh Herb Bible (Rau Th\u01A1m)",
      herbBibleSubtitle: "The aromatic living pulse of every Vietnamese table:",
      fishSauceGradeTitle: "What does the degree label (35\xB0N / 40\xB0N / 60\xB0N) mean on Fish Sauce?",
      fishSauceGradeDesc: "\xB0N indicates grams of natural nitrogen (protein) per liter. Use 30\xB0N for general cooking and broths; for dipping sauces and fresh rolls, strictly use 40\xB0N single-press fish sauce (like Ph\xFA Qu\u1ED1c) for smooth sweetness without harsh salinity."
    },
    favorites: {
      title: "My Saved Recipes & Conquered Badges",
      subtitle: "Track your culinary journey, save favorite street dishes, and collect master badges.",
      savedCount: "Saved Recipes",
      masteredCount: "Mastered Dishes",
      emptyFavs: "No saved recipes yet. Explore our vibrant street food catalog!",
      exploreDishes: "Explore Street Food Now",
      tabs: {
        saved: "Saved Dishes",
        mastered: "Conquered Badges"
      },
      conqueredDishes: "Conquered {count} of {total} Legendary Vietnamese Dishes",
      conqueredOf: "OF {total} CONQUERED",
      badgeCount: "Master Badges ({count})",
      viewRecipe: "View Recipe",
      emptyFavTitle: "No Saved Vietnamese Recipes Yet",
      emptyFavDesc: "Explore our vibrant street food catalog and click the heart icon on any recipe card to save it for easy access anytime!",
      emptyFavButton: "Explore Classic Dishes"
    },
    navbar: {
      brandBadge: "Master Chef"
    },
    footer: {
      tagline: "Dedicated to Vietnamese street food enthusiasts worldwide: authentic gram-accurate recipes, supermarket ingredient substitutions, air fryer / instant pot adaptations, and night market ordering pronunciation guides.",
      coreFeaturesTitle: "App Core Highlights",
      featureRecipes: "16 authentic Vietnamese street recipes with 5-language gram-accurate guides",
      featureCaPhe: "C\xE0 Ph\xEA Vietnamese coffee & beverage dynamic drip simulator lab",
      featureMarkets: "6 culinary regions with native night market street ordering pronunciations",
      featurePantry: "5-herb living encyclopedia, fish sauce degree guide & N\u01B0\u1EDBc Ch\u1EA5m calculator",
      toolsTitle: "Offline Support & Pro Kitchen Tools",
      toolsDesc: "Supports fullscreen hands-free voice cooking mode, responsive step timers, audio pronunciation, and Asian grocery clerk help cards.",
      sisterAppsTitle: "Asian Culinary Universe \u2022 Sister App Series",
      sisterAppsSubtitle: "Crafted with passion by the same culinary team\u2014click to explore",
      copyrightTeam: "Vietnamese Food Master"
    },
    common: {
      minutes: "mins",
      quickShortcuts: "Quick Shortcuts:",
      reset: "Reset",
      audioPlaying: "\u{1F50A} Playing native pronunciation...",
      chefModeReady: "Ready to cook like a Vietnamese street vendor?",
      chefModeDesc: "Fullscreen voice-guided steps, integrated timers, designed for your kitchen setup",
      ingredientsReady: "{checked} of {total} prepared",
      suggestedSubstitute: "\u{1F4A1} Suggested Substitute:",
      ratio: "Ratio",
      shoppingGuide: "\u{1F6D2} Shopping Guide:",
      dietaryLabels: {
        vegetarian: "Vegetarian",
        glutenFree: "Gluten-Free",
        pescatarian: "Pescatarian"
      },
      calcTitle: "\u{1FAD7} Interactive N\u01B0\u1EDBc Ch\u1EA5m Balancer (Dipping Sauce Calculator)",
      calcDesc: "Universal ratio for spring rolls, bun cha & banh xeo! Automatically calculates proportions ensuring floating garlic & chili.",
      calcServings: "Batch Servings",
      calcPersonUnit: "Persons",
      calcSolo: "1 Person Solo",
      calcFamily: "4 Persons Family",
      calcParty: "10 Persons Party",
      calcFloatingTipTitle: "Chef Floating Secret",
      calcFloatingTip: "Always dissolve sugar completely in warm water first before adding fish sauce and lime juice. Add minced garlic and sliced chilies last! The density difference makes the garlic float gracefully on the ruby sauce surface like snowflakes without sinking.",
      calcProportionsTitle: "Calculated Proportions (Golden Ratio)",
      calcFinelyMinced: "Finer mince floats better",
      calcSpiceAdjust: "Adjust to your spice preference",
      herbShopButton: "Find Herbs on Amazon",
      herbFlavorProfile: "Flavor Profile",
      herbBestMatched: "Best Matched With",
      herbWesternSub: "\u26A1 Western Supermarket Substitute:",
      fishSauceGuideTitle: "\u{1F41F} Fish Sauce Degrees (\xB0N) Masterclass: Decoding the Bottle",
      fishSauceGuideDesc: "Higher \xB0N represents richer natural nitrogen (protein) content. Choose the right degree for dipping vs stir-frying to multiply deliciousness!",
      fishSauceIdealUsage: "Ideal Usage",
      amazonSearch: "Search Amazon",
      pantryProductsTitle: "\u{1F96B} Essential Pantry Products",
      amazonPrime: "Amazon Prime"
    }
  },
  "vi": {
    appName: "B\u1EADc Th\u1EA7y \u1EA8m Th\u1EF1c Vi\u1EC7t | Vietnamese Food Master",
    appSubtitle: "M\xF3n Ngon \u0110\u01B0\u1EDDng Ph\u1ED1\u30FBQu\xE1n C\xE0 Ph\xEA Phin\u30FBV\u01B0\u1EDDn Rau Th\u01A1m & Ch\u1EE3 \u0110\xEAm",
    searchPlaceholder: "T\xECm ki\u1EBFm m\xF3n \u0103n Vi\u1EC7t (Ph\u1EDF, B\xE1nh M\xEC, B\xFAn Ch\u1EA3, C\xE0 Ph\xEA Tr\u1EE9ng, G\u1ECFi Cu\u1ED1n)...",
    nav: {
      explore: "Kh\xE1m Ph\xE1 M\xF3n",
      caPheLab: "Qu\xE1n C\xE0 Ph\xEA",
      nightMarkets: "Ph\u1ED1 \u1EA8m Th\u1EF1c",
      pantry: "Gia V\u1ECB & Rau Th\u01A1m",
      favorites: "M\xF3n Y\xEAu Th\xEDch"
    },
    hero: {
      badge: "\u{1F1FB}\u{1F1F3} Tinh Hoa \u1EA8m Th\u1EF1c \u0110\u01B0\u1EDDng Ph\u1ED1 Vi\u1EC7t Nam",
      title: "H\u01B0\u01A1ng V\u1ECB Vi\u1EC7t Nam",
      titleHighlight: "B\u1EBFp L\u1EEDa H\u1ED3ng & Rau Th\u01A1m Thanh Khi\u1EBFt",
      subtitle: "T\u1EEB B\xFAn Ch\u1EA3 n\u01B0\u1EDBng than hoa H\xE0 N\u1ED9i \u0111\u1EBFn \u1ED5 B\xE1nh M\xEC S\xE0i G\xF2n gi\xF2n r\u1EE5m, kh\xE1m ph\xE1 15+ m\xF3n \u0103n bi\u1EC3u t\u01B0\u1EE3ng v\u1EDBi ch\u1EBF \u0111\u1ED9 N\u1ED3i chi\xEAn kh\xF4ng d\u1EA7u, N\u1ED3i \xE1p su\u1EA5t v\xE0 Qu\xE1n C\xE0 Ph\xEA t\u01B0\u01A1ng t\xE1c!",
      ctaCook: "Xem C\xE1c M\xF3n Ngon",
      ctaCaPhe: "Pha Ch\u1EBF C\xE0 Ph\xEA Phin",
      quickAirFryer: "\u26A1 Chuy\xEAn m\u1EE5c N\u1ED3i Chi\xEAn Kh\xF4ng D\u1EA7u (Ch\u1EA3 Gi\xF2 / B\xE1nh M\xEC)",
      quickInstantPot: "\u{1F372} Chuy\xEAn m\u1EE5c N\u1ED3i \xC1p Su\u1EA5t (N\u1EA5u Ph\u1EDF / B\xF2 Kho)"
    },
    categories: {
      all: "T\u1EA5t C\u1EA3 M\xF3n",
      mains: "C\u01A1m & M\xEC Ph\u1EDF (Ph\u1EDF / B\xFAn)",
      rollsSnacks: "M\xF3n Cu\u1ED1n & B\xE1nh M\xEC (B\xE1nh M\xEC / Cu\u1ED1n)",
      soupsStews: "M\xF3n Canh & Kho (B\xF2 Kho / Canh)",
      salads: "G\u1ECFi & N\u1ED9m (N\u1ED9m / G\u1ECFi)",
      dessertsDrinks: "Tr\xE1ng Mi\u1EC7ng & C\xE0 Ph\xEA (C\xE0 Ph\xEA / Ch\xE8)"
    },
    filter: {
      airFryerOnly: "D\xF9ng N\u1ED3i Chi\xEAn",
      instantPotOnly: "D\xF9ng N\u1ED3i \xC1p Su\u1EA5t",
      allCookware: "M\u1ECDi D\u1EE5ng C\u1EE5",
      difficulty: "\u0110\u1ED9 Kh\xF3",
      dietary: "Ch\u1EBF \u0110\u1ED9 \u0102n",
      resetFilters: "\u0110\u1EB7t L\u1EA1i B\u1ED9 L\u1ECDc",
      noResults: "Kh\xF4ng t\xECm th\u1EA5y m\xF3n \u0103n ph\xF9 h\u1EE3p",
      noResultsDesc: "H\xE3y th\u1EED x\xF3a b\u1EDBt b\u1ED9 l\u1ECDc ho\u1EB7c t\xECm t\u1EEB kh\xF3a kh\xE1c (v\xED d\u1EE5: Ph\u1EDF, B\xE1nh M\xEC, Ch\u1EA3 Gi\xF2)"
    },
    recipeCard: {
      prepTime: "Chu\u1EA9n b\u1ECB",
      cookTime: "N\u1EA5u",
      servings: "ph\u1EA7n",
      calories: "kcal/ph\u1EA7n",
      difficulty: {
        easy: "D\u1EC5 l\xE0m",
        medium: "V\u1EEBa ph\u1EA3i",
        hard: "B\u1EADc th\u1EA7y"
      },
      airFryerBadge: "N\u1ED3i chi\xEAn",
      instantPotBadge: "N\u1ED3i \xE1p su\u1EA5t",
      masteredBadge: "\u0110\xE3 n\u1EA5u th\xE0nh c\xF4ng"
    },
    recipeDetail: {
      backToRecipes: "Quay l\u1EA1i danh s\xE1ch m\xF3n",
      startFocusCooking: "B\u1EADt Ch\u1EBF \u0110\u1ED9 N\u1EA5u R\u1EA3nh Tay Gi\u1ECDng N\xF3i",
      prepTime: "Th\u1EDDi Gian Chu\u1EA9n B\u1ECB",
      cookTime: "Th\u1EDDi Gian N\u1EA5u",
      totalTime: "T\u1ED5ng Th\u1EDDi Gian",
      servings: "S\u1ED1 L\u01B0\u1EE3ng Kh\u1EA9u Ph\u1EA7n",
      calories: "N\u0103ng L\u01B0\u1EE3ng \u01AF\u1EDBc T\xEDnh",
      unitSystem: "\u0110\u01A1n V\u1ECB \u0110o (H\u1EC7 M\xE9t / H\u1EC7 M\u1EF9)",
      cookwareToggleTitle: "Ch\u1ECDn Thi\u1EBFt B\u1ECB N\u1EA5u N\u01B0\u1EDBng",
      cookwareOptions: {
        traditional: "B\u1EBFp Truy\u1EC1n Th\u1ED1ng / Ch\u1EA3o & N\u1ED3i",
        airFryer: "N\u1ED3i Chi\xEAn Kh\xF4ng D\u1EA7u (Gi\xF2n Gi\u1EA3m D\u1EA7u)",
        instantPot: "N\u1ED3i \xC1p Su\u1EA5t \u0110i\u1EC7n (Ninh Nhanh \u0110\u1EADm V\u1ECB)"
      },
      ingredientsTitle: "Nguy\xEAn Li\u1EC7u & T\u1EF7 L\u1EC7 V\xE0ng",
      keyFlavorBadge: "Linh h\u1ED3n c\u1EE7a m\xF3n \u0103n",
      substituteAvailable: "Xem nguy\xEAn li\u1EC7u thay th\u1EBF",
      showToClerk: "Th\u1EBB Mua S\u1EAFm G\u1EEDi Ng\u01B0\u1EDDi B\xE1n",
      clerkModalTitle: "Th\u1EBB Mua S\u1EAFm Cho C\u1EEDa H\xE0ng / Si\xEAu Th\u1ECB",
      clerkModalSubtitle: "\u0110\u01B0a th\u1EBB n\xE0y cho ng\u01B0\u1EDDi b\xE1n khi \u0111i ch\u1EE3 ho\u1EB7c si\xEAu th\u1ECB ch\xE2u \xC1:",
      clerkPronounce: "Ph\xE1t \xE2m chu\u1EA9n",
      closeModal: "\u0110\xF3ng Th\u1EBB",
      stepsTitle: "C\xE1c B\u01B0\u1EDBc Th\u1EF1c Hi\u1EC7n Chi Ti\u1EBFt",
      stepPrefix: "B\u01B0\u1EDBc",
      crucialTipTitle: "B\xED Quy\u1EBFt \u0110\u1EA7u B\u1EBFp",
      dangerWarningTitle: "L\u01B0u \xDD Tr\xE1nh H\u1ECFng M\xF3n",
      timerStart: "B\u1EAFt \u0110\u1EA7u H\u1EB9n Gi\u1EDD",
      timerPause: "T\u1EA1m D\u1EEBng",
      timerReset: "\u0110\u1EB7t L\u1EA1i",
      timerDone: "H\u1EBFt Gi\u1EDD!",
      troubleshootingTitle: "X\u1EED L\xFD S\u1EF1 C\u1ED1 & C\u1EE9u Nguy M\xF3n \u0102n",
      troubleshootingSubtitle: "C\xE1c l\u1ED7i th\u01B0\u1EDDng g\u1EB7p khi n\u1EA5u n\u01B0\u1EDBc d\xF9ng ph\u1EDF hay n\u01B0\u1EDBng b\xE1nh m\xEC gi\xF2n r\u1EE5m",
      problem: "Hi\u1EC7n t\u01B0\u1EE3ng l\u1ED7i",
      cause: "Nguy\xEAn nh\xE2n",
      solution: "C\xE1ch kh\u1EAFc ph\u1EE5c",
      cultureTitle: "Ngu\u1ED3n G\u1ED1c & C\xE2u Chuy\u1EC7n V\u0103n H\xF3a",
      listenPronunciation: "Nghe ph\xE1t \xE2m chu\u1EA9n gi\u1ECDng b\u1EA3n x\u1EE9",
      famousMarkets: "\u0110\u1ECBa danh & Ch\u1EE3 \u1EA9m th\u1EF1c n\u1ED5i ti\u1EBFng",
      historyStory: "C\xE2u chuy\u1EC7n l\u1ECBch s\u1EED",
      proTipsTitle: "C\xE1ch Th\u01B0\u1EDFng Th\u1EE9c S\xE0nh \u0110i\u1EC7u",
      markAsMastered: "\u0110\xE1nh d\u1EA5u \u0111\xE3 n\u1EA5u th\xE0nh c\xF4ng",
      masteredAlready: "\u{1F389} B\u1EA1n \u0111\xE3 chinh ph\u1EE5c m\xF3n \u0103n n\xE0y!",
      addToFavorites: "L\u01B0u v\xE0o y\xEAu th\xEDch",
      removeFromFavorites: "\u0110\xE3 l\u01B0u"
    },
    focusMode: {
      exit: "Tho\xE1t Ch\u1EBF \u0110\u1ED9 R\u1EA3nh Tay",
      stepProgress: "Ti\u1EBFn \u0111\u1ED9 c\xE1c b\u01B0\u1EDBc",
      prevStep: "B\u01B0\u1EDBc Tr\u01B0\u1EDBc",
      nextStep: "B\u01B0\u1EDBc Ti\u1EBFp",
      finishCooking: "Ho\xE0n Th\xE0nh M\xF3n \u0102n!",
      readStepAloud: "\u0110\u1ECDc H\u01B0\u1EDBng D\u1EABn B\u1EB1ng Gi\u1ECDng N\xF3i",
      reading: "\u0110ang \u0111\u1ECDc...",
      completedMessage: "Tuy\u1EC7t v\u1EDDi! B\u1EA1n \u0111\xE3 ho\xE0n th\xE0nh xu\u1EA5t s\u1EAFc m\xF3n \u0103n Vi\u1EC7t Nam!",
      dishMasteredPrompt: "Nh\u1EADn ngay huy hi\u1EC7u \u0110\u1EA7u B\u1EBFp \u0110\u01B0\u1EDDng Ph\u1ED1!"
    },
    caPheLab: {
      badge: "\u2615 Qu\xE1n C\xE0 Ph\xEA Phin & \u0110\u1ED3 U\u1ED1ng \u0110\u01B0\u1EDDng Ph\u1ED1",
      title: "Ph\xF2ng Pha Ch\u1EBF C\xE0 Ph\xEA Phin",
      subtitle: "Kh\xE1m ph\xE1 v\u0103n h\xF3a c\xE0 ph\xEA n\u1EE9c ti\u1EBFng th\u1EBF gi\u1EDBi c\u1EE7a Vi\u1EC7t Nam. T\u1EEB C\xE0 Ph\xEA S\u1EEFa \u0110\xE1 S\xE0i G\xF2n, C\xE0 Ph\xEA Tr\u1EE9ng H\xE0 N\u1ED9i b\u1ED3ng b\u1EC1nh \u0111\u1EBFn C\xE0 Ph\xEA Mu\u1ED1i c\u1ED1 \u0111\xF4 Hu\u1EBF.",
      selectPreset: "Ch\u1ECDn C\xF4ng Th\u1EE9c Bi\u1EC3u T\u01B0\u1EE3ng",
      customDrip: "T\u1EF1 Pha Ch\u1EBF Theo Gu",
      presets: {
        suada: "C\xE0 Ph\xEA S\u1EEFa \u0110\xE1 (Kinh \u0110i\u1EC3n S\xE0i G\xF2n)",
        trung: "C\xE0 Ph\xEA Tr\u1EE9ng (Huy\u1EC1n Tho\u1EA1i H\xE0 N\u1ED9i)",
        muoi: "C\xE0 Ph\xEA Mu\u1ED1i (C\u1ED1 \u0110\xF4 Hu\u1EBF)",
        dua: "C\xE0 Ph\xEA D\u1EEBa (\u0110\xE0 N\u1EB5ng Sinh T\u1ED1 C\u1ED1t D\u1EEBa)",
        bacXiu: "B\u1EA1c X\u1EC9u S\xE0i G\xF2n (Nhi\u1EC1u S\u1EEFa \xCDt C\xE0 Ph\xEA)",
        traDao: "Tr\xE0 \u0110\xE0o Cam S\u1EA3 (M\xE1t L\u1EA1nh Thanh Nhi\u1EC7t)"
      },
      coffeeBase: "C\u1ED1t C\xE0 Ph\xEA Chi\u1EBFt Xu\u1EA5t B\u1EB1ng Phin",
      bases: {
        robusta: "Robusta \u0110\u1EAFk L\u1EAFk Bu\xF4n Ma Thu\u1ED9t (\u0110\u1EADm \u0111\xE0 rang b\u01A1)",
        arabica: "Arabica C\u1EA7u \u0110\u1EA5t \u0110\xE0 L\u1EA1t (Chua thanh h\u01B0\u01A1ng hoa)",
        traSen: "Tr\xE0 Xanh \u01AF\u1EDBp Sen T\xE2y H\u1ED3 (Thanh tao ng\u1ECDt h\u1EADu)",
        traDao: "Tr\xE0 \u0110en Cao Nguy\xEAn (\u0110\u1EADm v\u1ECB tr\xE1i c\xE2y)"
      },
      sweetnessLevel: "\u0110\u1ED9 Ng\u1ECDt S\u1EEFa \u0110\u1EB7c \xD4ng Th\u1ECD",
      sweetnessLabels: {
        zero: "0% C\xE0 Ph\xEA \u0110en Kh\xF4ng \u0110\u01B0\u1EDDng",
        light: "25% \xCDt Ng\u1ECDt Thanh M\xE1t",
        standard: "50% T\u1EF7 L\u1EC7 V\xE0ng Ti\xEAu Chu\u1EA9n",
        saigonSweet: "100% \u0110\u1EADm \u0110\xE0 Chu\u1EA9n Gu S\xE0i G\xF2n"
      },
      iceLevel: "M\u1EE9c \u0110\xE1 (\u0110\xE1)",
      iceLabels: {
        crushed: "\u0110\xE1 B\xE0o \u0110\u1EA7y Ly (Chu\u1EA9n v\u1ECB \u0111\u01B0\u1EDDng ph\u1ED1)",
        cubes: "\u0110\xE1 Vi\xEAn",
        hot: "U\u1ED1ng N\xF3ng Ng\xE2m B\xE1t N\u01B0\u1EDBc S\xF4i"
      },
      toppings: "L\u1EDBp Kem & Topping Th\u01B0\u1EE3ng H\u1EA1ng",
      toppingsLabels: {
        none: "Nguy\xEAn B\u1EA3n (Kh\xF4ng Topping)",
        eggCream: "Kem Tr\u1EE9ng \u0110\xE1nh B\xF4ng H\xE0 N\u1ED9i (+110 kcal)",
        saltCream: "Kem Mu\u1ED1i B\xE9o Ng\u1EADy X\u1EE9 Hu\u1EBF (+85 kcal)",
        coconutSlush: "Sinh T\u1ED1 C\u1ED1t D\u1EEBa \u0110\xE1 Xay (+95 kcal)",
        coffeeJelly: "Th\u1EA1ch C\xE0 Ph\xEA Th\u1EE7 C\xF4ng (+30 kcal)",
        peachSlices: "\u0110\xE0o Ng\xE2m Gi\xF2n (+40 kcal)"
      },
      nutritionStats: {
        estimatedCalories: "\u01AF\u1EDBc T\xEDnh N\u0103ng L\u01B0\u1EE3ng",
        caffeineLevel: "H\xE0m L\u01B0\u1EE3ng Caffeine",
        phinDripTime: "Th\u1EDDi Gian Nh\u1ECF Gi\u1ECDt Phin"
      },
      streetSlangTitle: "C\xE2u Kh\u1EA9u Quy\u1EBFt G\u1ECDi C\xE0 Ph\xEA \u0110\u01B0\u1EDDng Ph\u1ED1",
      slangQuote: "\u201CCho m\u1ED9t ly c\xE0 ph\xEA s\u1EEFa \u0111\xE1 nhi\u1EC1u \u0111\xE1 \xEDt ng\u1ECDt mang \u0111i!\u201D",
      listenSlang: "Nghe gi\u1ECDng ph\xE1t \xE2m g\u1ECDi c\xE0 ph\xEA",
      homeBrewGuideTitle: "4 B\xED Quy\u1EBFt Pha C\xE0 Ph\xEA Phin Ho\xE0n H\u1EA3o T\u1EA1i Nh\xE0",
      phinTip: "R\xF3t tr\u01B0\u1EDBc 20ml n\u01B0\u1EDBc s\xF4i \u0111\u1EC3 \u1EE7 n\u1EDF c\xE0 ph\xEA trong 30 gi\xE2y, g\xE0i nh\u1EB9 n\u1EAFp ch\u1EB7n r\u1ED3i m\u1EDBi ch\xE2m \u0111\u1EA7y n\u01B0\u1EDBc \u0111\u1EC3 c\xE0 ph\xEA nh\u1ECF gi\u1ECDt ch\u1EADm r\xE3i trong 4-5 ph\xFAt."
    },
    nightMarket: {
      badge: "\u{1F5FA}\uFE0F Ph\u1ED1 L\xEAn \u0110\xE8n\u30FBM\xF3n Ngon L\xEAn Ng\xF4i",
      title: "B\u1EA3n \u0110\u1ED3 \u1EA8m Th\u1EF1c \u0110\u01B0\u1EDDng Ph\u1ED1 & Ch\u1EE3 \u0110\xEAm Vi\u1EC7t Nam",
      subtitle: "T\u1EEB nh\u1EEFng chi\u1EBFc gh\u1EBF nh\u1EF1a con ph\u1ED1 c\u1ED5 H\xE0 N\u1ED9i \u0111\u1EBFn ph\u1ED1 \u1ED1c r\u1EF1c r\u1EE1 \xE1nh \u0111\xE8n S\xE0i G\xF2n.",
      filterRegion: "L\u1ECDc Theo V\xF9ng Mi\u1EC1n",
      regions: {
        all: "T\u1EA5t C\u1EA3 V\xF9ng Mi\u1EC1n",
        north: "Mi\u1EC1n B\u1EAFc (H\xE0 N\u1ED9i / Ph\u1ED1 C\u1ED5)",
        central: "Mi\u1EC1n Trung (Hu\u1EBF / \u0110\xE0 N\u1EB5ng / H\u1ED9i An)",
        south: "Mi\u1EC1n Nam (TP. H\u1ED3 Ch\xED Minh / S\xE0i G\xF2n)",
        highlands: "T\xE2y Nguy\xEAn (\u0110\xE0 L\u1EA1t S\u01B0\u01A1ng M\xF9)"
      },
      openingHours: "Gi\u1EDD M\u1EDF C\u1EEDa",
      transport: "Ch\u1EC9 \u0110\u01B0\u1EDDng & Ph\u01B0\u01A1ng Ti\u1EC7n",
      signatureFood: "M\xF3n Ngon Ph\u1EA3i Th\u1EED",
      insiderTip: "Kinh Nghi\u1EC7m \u0102n U\u1ED1ng B\u1EA3n \u0110\u1ECBa",
      streetSlangOrder: "C\xE2u G\u1ECDi M\xF3n Chu\u1EA9n S\xE0nh",
      listenOrderPhrase: "Nghe Ph\xE1t \xC2m G\u1ECDi M\xF3n",
      viewRecipeButton: "Xem C\xF4ng Th\u1EE9c M\xF3n N\xE0y"
    },
    pantry: {
      badge: "\u{1F9C4} Gia V\u1ECB Th\u1EA7n Th\xE1nh & Rau Th\u01A1m",
      title: "V\u01B0\u1EDDn Rau Th\u01A1m & C\xF4ng Th\u1EE9c Pha N\u01B0\u1EDBc Ch\u1EA5m",
      subtitle: "L\xE0m ch\u1EE7 ngh\u1EC7 thu\u1EADt c\xE2n b\u1EB1ng ng\u0169 v\u1ECB Chua - Cay - M\u1EB7n - Ng\u1ECDt - B\xF9i c\u1EE7a m\xF3n Vi\u1EC7t.",
      balancerTitle: "Th\u01B0\u1EDBc \u0110o Pha N\u01B0\u1EDBc M\u1EAFm Chua Ng\u1ECDt (N\u01B0\u1EDBc Ch\u1EA5m)",
      balancerSubtitle: "K\xE9o thanh tr\u01B0\u1EE3t \u0111\u1EC3 t\u1EF1 \u0111\u1ED9ng t\xEDnh to\xE1n l\u01B0\u1EE3ng th\xECa canh v\xE0 gam nguy\xEAn li\u1EC7u theo kh\u1EA9u v\u1ECB Nam / B\u1EAFc:",
      servingsCount: "S\u1ED1 Ph\u1EA7n Pha",
      tasteStyle: "Gu Kh\u1EA9u V\u1ECB",
      southernSweet: "Ki\u1EC3u Mi\u1EC1n Nam (Ng\u1ECDt thanh v\u1ECB chanh \u0111\u01B0\u1EDDng, th\u01A1m d\u1ECBu)",
      northernSavory: "Ki\u1EC3u Mi\u1EC1n B\u1EAFc (\u0110\u1EADm \u0111\xE0 t\u1ECFi \u1EDBt, m\u1EB7n m\xE0 chu\u1EA9n v\u1ECB)",
      ingredientsRatio: "T\u1EF7 L\u1EC7 Nguy\xEAn Li\u1EC7u",
      fishSauce: "N\u01B0\u1EDBc m\u1EAFm ngon (40\xB0N)",
      limeJuice: "N\u01B0\u1EDBc c\u1ED1t chanh t\u01B0\u01A1i",
      sugar: "\u0110\u01B0\u1EDDng c\xE1t tr\u1EAFng",
      warmWater: "N\u01B0\u1EDBc \u1EA5m (\u0111\u1EC3 h\xF2a tan \u0111\u01B0\u1EDDng)",
      garlicMinced: "T\u1ECFi b\u0103m nhuy\u1EC5n",
      chiliMinced: "\u1EDAt hi\u1EC3m b\u0103m nh\u1ECF",
      tbspUnit: "th\xECa canh (tbsp)",
      clovesUnit: "t\xE9p t\u1ECFi",
      chiliesUnit: "tr\xE1i \u1EDBt",
      herbBibleTitle: "B\xE1ch Khoa To\xE0n Th\u01B0 Rau Th\u01A1m (Rau Th\u01A1m)",
      herbBibleSubtitle: "Linh h\u1ED3n xanh t\u01B0\u01A1i c\u1EE7a m\u1ED7i m\xE2m c\u01A1m v\xE0 m\xF3n cu\u1ED1n Vi\u1EC7t Nam:",
      fishSauceGradeTitle: "Ch\u1EC9 s\u1ED1 \u0111\u1ED9 \u0111\u1EA1m (\xB0N) tr\xEAn chai n\u01B0\u1EDBc m\u1EAFm c\xF3 \xFD ngh\u0129a g\xEC?",
      fishSauceGradeDesc: "\u0110\u1ED9 \u0111\u1EA1m (\xB0N) l\xE0 s\u1ED1 gam nit\u01A1 c\xF3 trong 1 l\xEDt n\u01B0\u1EDBc m\u1EAFm. N\u1EA5u n\u01B0\u1EDBng th\xF4ng th\u01B0\u1EDDng d\xF9ng lo\u1EA1i 30\xB0N; ri\xEAng \u0111\u1EC3 pha n\u01B0\u1EDBc ch\u1EA5m hay ch\u1EA5m g\u1ECFi cu\u1ED1n, h\xE3y ch\u1ECDn n\u01B0\u1EDBc m\u1EAFm nh\u0129 40\xB0N (nh\u01B0 Ph\xFA Qu\u1ED1c) \u0111\u1EC3 c\xF3 h\u1EADu v\u1ECB ng\u1ECDt \u0111\u1EA7m s\xE2u s\u1EAFc."
    },
    favorites: {
      title: "M\xF3n Y\xEAu Th\xEDch & B\u1ED9 S\u01B0u T\u1EADp Huy Hi\u1EC7u",
      subtitle: "Theo d\xF5i h\xE0nh tr\xECnh \u1EA9m th\u1EF1c c\u1EE7a b\u1EA1n, l\u01B0u gi\u1EEF c\xF4ng th\u1EE9c t\xE2m \u0111\u1EAFc.",
      savedCount: "M\xF3n \u0111\xE3 l\u01B0u",
      masteredCount: "\u0110\xE3 n\u1EA5u th\xE0nh c\xF4ng",
      emptyFavs: "Ch\u01B0a c\xF3 m\xF3n \u0103n n\xE0o \u0111\u01B0\u1EE3c l\u01B0u. H\xE3y kh\xE1m ph\xE1 th\u1EF1c \u0111\u01A1n \u0111\u01B0\u1EDDng ph\u1ED1 ngay!",
      exploreDishes: "Kh\xE1m Ph\xE1 M\xF3n Ngon Ngay",
      tabs: {
        saved: "M\xF3n \u0110\xE3 L\u01B0u",
        mastered: "Huy Hi\u1EC7u \u0110\u1EA7u B\u1EBFp"
      },
      conqueredDishes: "\u0110\xE3 chinh ph\u1EE5c {count} / {total} m\xF3n \u0103n Vi\u1EC7t Nam huy\u1EC1n tho\u1EA1i",
      conqueredOf: "OF {total} CONQUERED",
      badgeCount: "Huy hi\u1EC7u \u0111\xE3 \u0111\u1EA1t ({count})",
      viewRecipe: "Xem c\xF4ng th\u1EE9c",
      emptyFavTitle: "Ch\u01B0a c\xF3 m\xF3n \u0103n n\xE0o \u0111\u01B0\u1EE3c l\u01B0u",
      emptyFavDesc: "Kh\xE1m ph\xE1 danh m\u1EE5c m\xF3n \u0103n \u0111\u01B0\u1EDDng ph\u1ED1 h\u1EA5p d\u1EABn v\xE0 nh\u1EA5n v\xE0o bi\u1EC3u t\u01B0\u1EE3ng tr\xE1i tim \u0111\u1EC3 l\u01B0u l\u1EA1i c\xF4ng th\u1EE9c y\xEAu th\xEDch!",
      emptyFavButton: "Kh\xE1m ph\xE1 m\xF3n ngon ngay"
    },
    navbar: {
      brandBadge: "B\u1EADc Th\u1EA7y Vi\u1EC7t"
    },
    footer: {
      tagline: "D\xE0nh ri\xEAng cho nh\u1EEFng ng\u01B0\u1EDDi \u0111am m\xEA \u1EA9m th\u1EF1c \u0111\u01B0\u1EDDng ph\u1ED1 Vi\u1EC7t Nam tr\xEAn to\xE0n th\u1EBF gi\u1EDBi: c\xF4ng th\u1EE9c chu\u1EA9n gram, gia v\u1ECB thay th\u1EBF t\u1EA1i si\xEAu th\u1ECB ngo\u1EA1i, ch\u1EBF \u0111\u1ED9 n\u1EA5u n\u1ED3i chi\xEAn kh\xF4ng d\u1EA7u / n\u1ED3i \xE1p su\u1EA5t v\xE0 h\u01B0\u1EDBng d\u1EABn ph\xE1t \xE2m khi g\u1ECDi m\xF3n.",
      coreFeaturesTitle: "\u0110\u1EB7c \u0110i\u1EC3m N\u1ED5i B\u1EADt",
      featureRecipes: "16 m\xF3n \u0103n Vi\u1EC7t chu\u1EA9n v\u1ECB k\xE8m c\xF4ng th\u1EE9c ch\xEDnh x\xE1c b\u1EB1ng 5 ng\xF4n ng\u1EEF",
      featureCaPhe: "Ph\xF2ng th\xED nghi\u1EC7m pha ch\u1EBF c\xE0 ph\xEA phin v\xE0 th\u1EE9c u\u1ED1ng \u0111\u01B0\u1EDDng ph\u1ED1 n\u0103ng \u0111\u1ED9ng",
      featureMarkets: "6 v\xF9ng \u1EA9m th\u1EF1c l\u1EDBn c\xF9ng \xE2m thanh ph\xE1t \xE2m g\u1ECDi m\xF3n chu\u1EA9n b\u1EA3n x\u1EE9",
      featurePantry: "C\u1EA9m nang 5 lo\u1EA1i rau th\u01A1m, gi\u1EA3i m\xE3 \u0111\u1ED9 \u0111\u1EA1m n\u01B0\u1EDBc m\u1EAFm & c\xF4ng c\u1EE5 pha n\u01B0\u1EDBc ch\u1EA5m",
      toolsTitle: "H\u1ED7 Tr\u1EE3 N\u1EA5u Ti\u1EC7n L\u1EE3i",
      toolsDesc: "H\u1ED7 tr\u1EE3 ch\u1EBF \u0111\u1ED9 n\u1EA5u r\u1EA3nh tay to\xE0n m\xE0n h\xECnh, b\u1ED9 \u0111\u1EBFm gi\u1EDD t\u1EEBng b\u01B0\u1EDBc, ph\xE1t \xE2m gi\u1ECDng n\xF3i v\xE0 th\u1EBB mua s\u1EAFm ti\u1EC7n l\u1EE3i.",
      sisterAppsTitle: "H\u1EC7 Sinh Th\xE1i \u1EA8m Th\u1EF1c Ch\xE2u \xC1 \u2022 Sister Apps",
      sisterAppsSubtitle: "\u0110\u01B0\u1EE3c s\xE1ng t\u1EA1o b\u1EDFi c\xF9ng m\u1ED9t \u0111\u1ED9i ng\u0169 \u0111am m\xEA \u1EA9m th\u1EF1c\u2014nh\u1EA5n \u0111\u1EC3 tr\u1EA3i nghi\u1EC7m",
      copyrightTeam: "B\u1EADc Th\u1EA7y \u1EA8m Th\u1EF1c Vi\u1EC7t"
    },
    common: {
      minutes: "ph\xFAt",
      quickShortcuts: "L\u1ED1i t\u1EAFt nhanh:",
      reset: "\u0110\u1EB7t l\u1EA1i",
      audioPlaying: "\u{1F50A} \u0110ang ph\xE1t \xE2m chu\u1EA9n...",
      chefModeReady: "S\u1EB5n s\xE0ng n\u1EA5u nh\u01B0 \u0111\u1EA7u b\u1EBFp \u0111\u01B0\u1EDDng ph\u1ED1?",
      chefModeDesc: "\u0110\u1ECDc to c\xE1c b\u01B0\u1EDBc n\u1EA5u \u0103n to\xE0n m\xE0n h\xECnh, t\xEDch h\u1EE3p \u0111\u1ED3ng h\u1ED3 b\u1EA5m gi\u1EDD",
      ingredientsReady: "{checked} / {total} \u0111\xE3 chu\u1EA9n b\u1ECB",
      suggestedSubstitute: "\u{1F4A1} Nguy\xEAn li\u1EC7u thay th\u1EBF:",
      ratio: "T\u1EF7 l\u1EC7",
      shoppingGuide: "\u{1F6D2} H\u01B0\u1EDBng d\u1EABn mua h\xE0ng:",
      dietaryLabels: {
        vegetarian: "\u0102n chay",
        glutenFree: "Kh\xF4ng Gluten",
        pescatarian: "H\u1EA3i s\u1EA3n c\xE1"
      },
      calcTitle: "\u{1FAD7} M\xE1y Pha N\u01B0\u1EDBc Ch\u1EA5m T\u1EF1 \u0110\u1ED9ng (N\u01B0\u1EDBc Ch\u1EA5m Balancer)",
      calcDesc: "D\xF9ng cho g\u1ECFi cu\u1ED1n, b\xFAn ch\u1EA3, b\xE1nh x\xE8o! T\u1EF1 t\xEDnh to\xE1n t\u1EF7 l\u1EC7 gi\xFAp t\u1ECFi \u1EDBt lu\xF4n n\u1ED5i b\u1ED3ng b\u1EC1nh \u0111\u1EB9p m\u1EAFt.",
      calcServings: "S\u1ED1 l\u01B0\u1EE3ng kh\u1EA9u ph\u1EA7n",
      calcPersonUnit: "ng\u01B0\u1EDDi",
      calcSolo: "1 ng\u01B0\u1EDDi",
      calcFamily: "4 ng\u01B0\u1EDDi gia \u0111\xECnh",
      calcParty: "10 ng\u01B0\u1EDDi ti\u1EC7c t\xF9ng",
      calcFloatingTipTitle: "B\xED quy\u1EBFt gi\xFAp t\u1ECFi \u1EDBt n\u1ED5i",
      calcFloatingTip: "Nh\u1EA5t \u0111\u1ECBnh ph\u1EA3i h\xF2a tan \u0111\u01B0\u1EDDng trong n\u01B0\u1EDBc \u1EA5m tr\u01B0\u1EDBc, sau \u0111\xF3 m\u1EDBi cho n\u01B0\u1EDBc m\u1EAFm v\xE0 n\u01B0\u1EDBc c\u1ED1t chanh. T\u1ECFi b\u0103m v\xE0 \u1EDBt b\u0103m cho v\xE0o sau c\xF9ng! \u0110\u1ED9 ch\xEAnh l\u1EC7ch kh\u1ED1i l\u01B0\u1EE3ng ri\xEAng s\u1EBD gi\xFAp t\u1ECFi n\u1ED5i b\u1ED3ng b\u1EC1nh kh\xF4ng bao gi\u1EDD b\u1ECB ch\xECm.",
      calcProportionsTitle: "T\u1EF7 L\u1EC7 Pha Chu\u1EA9n X\xE1c",
      calcFinelyMinced: "B\u0103m c\xE0ng nhuy\u1EC5n n\u1ED5i c\xE0ng t\u1ED1t",
      calcSpiceAdjust: "Gia gi\u1EA3m theo \u0111\u1ED9 cay \u01B0a th\xEDch",
      herbShopButton: "T\xECm Th\u1EA3o M\u1ED9c Tr\xEAn Amazon",
      herbFlavorProfile: "H\u01B0\u01A1ng V\u1ECB \u0110\u1EB7c Tr\u01B0ng",
      herbBestMatched: "K\u1EBFt H\u1EE3p Ho\xE0n H\u1EA3o V\u1EDBi",
      herbWesternSub: "\u26A1 C\xE1ch Thay Th\u1EBF T\u1EA1i Si\xEAu Th\u1ECB T\xE2y:",
      fishSauceGuideTitle: "\u{1F41F} Gi\u1EA3i M\xE3 \u0110\u1ED9 \u0110\u1EA1m (\xB0N) N\u01B0\u1EDBc M\u1EAFm: \u0110\u1ECDc \u0110\xFAng Nh\xE3n Chai",
      fishSauceGuideDesc: "\u0110\u1ED9 \u0111\u1EA1m c\xE0ng cao h\xE0m l\u01B0\u1EE3ng \u0111\u1EA1m t\u1EF1 nhi\xEAn c\xE0ng \u0111\u1EADm \u0111\xE0. Ch\u1ECDn \u0111\xFAng lo\u1EA1i khi ch\u1EA5m hay x\xE0o n\u1EA5u \u0111\u1EC3 m\xF3n \u0103n th\xEAm ngon!",
      fishSauceIdealUsage: "M\u1EE5c \u0110\xEDch S\u1EED D\u1EE5ng L\xFD T\u01B0\u1EDFng",
      amazonSearch: "T\xECm tr\xEAn Amazon",
      pantryProductsTitle: "\u{1F96B} S\u1EA3n Ph\u1EA9m Gia V\u1ECB Thi\u1EBFt Y\u1EBFu",
      amazonPrime: "Amazon Prime"
    }
  },
  "ja": {
    appName: "\u30D9\u30C8\u30CA\u30E0\u6599\u7406\u30DE\u30B9\u30BF\u30FC | Vietnamese Food Master",
    appSubtitle: "\u672C\u5834\u5C4B\u53F0\u6599\u7406\u30FB\u30AB\u30D5\u30A7\u30D5\u30A3\u30F3\u8ABF\u98F2\u30E9\u30DC\u30FB\u30CF\u30FC\u30D6\u56F3\u9451\u30FB\u591C\u5E02\u30AC\u30A4\u30C9",
    searchPlaceholder: "\u30D9\u30C8\u30CA\u30E0\u6599\u7406\u3092\u691C\u7D22\uFF08\u30D5\u30A9\u30FC\u3001\u30D0\u30A4\u30F3\u30DF\u30FC\u3001\u30D6\u30F3\u30C1\u30E3\u30FC\u3001\u30A8\u30C3\u30B0\u30B3\u30FC\u30D2\u30FC\u3001\u751F\u6625\u5DFB\u304D\uFF09...",
    nav: {
      explore: "\u6599\u7406\u3092\u63A2\u3059",
      caPheLab: "\u30AB\u30D5\u30A7\u8ABF\u98F2\u30E9\u30DC",
      nightMarkets: "\u591C\u5E02\u30B0\u30EB\u30E1\u8857",
      pantry: "\u8ABF\u5473\u6599\u30FB\u30CF\u30FC\u30D6",
      favorites: "\u304A\u6C17\u306B\u5165\u308A"
    },
    hero: {
      badge: "\u{1F1FB}\u{1F1F3} \u30D9\u30C8\u30CA\u30E0\u5C4B\u53F0\u30B0\u30EB\u30E1\u306E\u6C7A\u5B9A\u7248\u30A2\u30D7\u30EA",
      title: "\u30D9\u30C8\u30CA\u30E0\u306E\u9999\u308A\u3068\u5473\u308F\u3044",
      titleHighlight: "\u70AD\u706B\u306E\u71B1\u6C17\u3068\u723D\u3084\u304B\u306A\u30CF\u30FC\u30D6",
      subtitle: "\u30CF\u30CE\u30A4\u540D\u7269\u306E\u70AD\u706B\u713C\u304D\u8089\u30D6\u30F3\u30C1\u30E3\u30FC\u304B\u3089\u3001\u30B5\u30AF\u30B5\u30AF\u6975\u4E0A\u30D0\u30A4\u30F3\u30DF\u30FC\u307E\u3067\uFF01\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\uFF06\u5727\u529B\u934B\u5BFE\u5FDC\u30EC\u30B7\u30D4\u3068\u3001\u672C\u683C\u30D5\u30A3\u30F3\u30B3\u30FC\u30D2\u30FC\u8ABF\u98F2\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC\u3092\u642D\u8F09\u3002",
      ctaCook: "\u30EC\u30B7\u30D4\u4E00\u89A7\u3092\u898B\u308B",
      ctaCaPhe: "\u30AB\u30D5\u30A7\u30E9\u30DC\u3092\u958B\u304F",
      quickAirFryer: "\u26A1 \u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u7279\u96C6 (\u63DA\u3052\u6625\u5DFB\u304D/\u30D0\u30A4\u30F3\u30DF\u30FC)",
      quickInstantPot: "\u{1F372} \u96FB\u6C17\u5727\u529B\u934B\u7279\u96C6 (\u7D76\u54C1\u30D5\u30A9\u30FC/\u30DC\u30FC\u30B3\u30FC)"
    },
    categories: {
      all: "\u3059\u3079\u3066\u306E\u6599\u7406",
      mains: "\u9EBA\u30FB\u3054\u98EF\u3082\u306E (\u30D5\u30A9\u30FC / \u30D6\u30F3)",
      rollsSnacks: "\u6625\u5DFB\u304D\u30FB\u30D1\u30F3 (\u30D0\u30A4\u30F3\u30DF\u30FC / \u751F\u6625\u5DFB\u304D)",
      soupsStews: "\u716E\u8FBC\u307F\u30FB\u30B9\u30FC\u30D7 (\u30DC\u30FC\u30B3\u30FC / \u30B9\u30FC\u30D7)",
      salads: "\u30B5\u30E9\u30C0\u30FB\u548C\u3048\u7269 (\u30D1\u30D1\u30A4\u30E4\u30B5\u30E9\u30C0)",
      dessertsDrinks: "\u30B9\u30A4\u30FC\u30C4\u30FB\u30AB\u30D5\u30A7 (\u30B3\u30FC\u30D2\u30FC / \u30C1\u30A7\u30FC)"
    },
    filter: {
      airFryerOnly: "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u5BFE\u5FDC",
      instantPotOnly: "\u5727\u529B\u934B\u5BFE\u5FDC",
      allCookware: "\u3059\u3079\u3066\u306E\u8ABF\u7406\u5668\u5177",
      difficulty: "\u96E3\u6613\u5EA6",
      dietary: "\u98DF\u4E8B\u30BF\u30A4\u30D7",
      resetFilters: "\u7D5E\u308A\u8FBC\u307F\u3092\u30EA\u30BB\u30C3\u30C8",
      noResults: "\u8A72\u5F53\u3059\u308B\u30D9\u30C8\u30CA\u30E0\u6599\u7406\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
      noResultsDesc: "\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u89E3\u9664\u3059\u308B\u304B\u3001\u5225\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\uFF08\u4F8B\uFF1APho, Banh Mi, \u6625\u5DFB\u304D\uFF09\u3067\u691C\u7D22\u3057\u3066\u304F\u3060\u3055\u3044"
    },
    recipeCard: {
      prepTime: "\u4E0B\u6E96\u5099",
      cookTime: "\u8ABF\u7406",
      servings: "\u4EBA\u524D",
      calories: "kcal/\u4EBA",
      difficulty: {
        easy: "\u521D\u7D1A",
        medium: "\u4E2D\u7D1A",
        hard: "\u4E0A\u7D1A"
      },
      airFryerBadge: "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FCOK",
      instantPotBadge: "\u5727\u529B\u934BOK",
      masteredBadge: "\u30DE\u30B9\u30BF\u30FC\u6E08\u307F"
    },
    recipeDetail: {
      backToRecipes: "\u6599\u7406\u4E00\u89A7\u306B\u623B\u308B",
      startFocusCooking: "\u30CF\u30F3\u30BA\u30D5\u30EA\u30FC\u97F3\u58F0\u8ABF\u7406\u30E2\u30FC\u30C9\u3092\u958B\u59CB",
      prepTime: "\u4E0B\u6E96\u5099\u6642\u9593",
      cookTime: "\u8ABF\u7406\u6642\u9593",
      totalTime: "\u5408\u8A08\u6240\u8981\u6642\u9593",
      servings: "\u4EBA\u524D\u8A2D\u5B9A",
      calories: "\u63A8\u5B9A\u30AB\u30ED\u30EA\u30FC",
      unitSystem: "\u5358\u4F4D\u5207\u308A\u66FF\u3048 (\u30E1\u30FC\u30C8\u30EB\u6CD5 / \u7C73\u56FD\u5358\u4F4D)",
      cookwareToggleTitle: "\u8ABF\u7406\u5668\u5177\u3092\u9078\u629E",
      cookwareOptions: {
        traditional: "\u4F1D\u7D71\u306E\u934B\u30FB\u30D5\u30E9\u30A4\u30D1\u30F3",
        airFryer: "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC (\u6CB9\u5206\u30AB\u30C3\u30C8\uFF06\u30B5\u30AF\u30B5\u30AF)",
        instantPot: "\u96FB\u6C17\u5727\u529B\u934B (\u6642\u77ED\uFF06\u65E8\u5473\u51DD\u7E2E)"
      },
      ingredientsTitle: "\u6750\u6599\u3068\u9EC4\u91D1\u6BD4\u7387",
      keyFlavorBadge: "\u98A8\u5473\u306E\u6C7A\u3081\u624B",
      substituteAvailable: "\u8EAB\u8FD1\u306A\u4EE3\u7528\u98DF\u6750\u3092\u898B\u308B",
      showToClerk: "\u30A2\u30B8\u30A2\u98DF\u6750\u5E97\u54E1\u306B\u898B\u305B\u308B\u30AB\u30FC\u30C9",
      clerkModalTitle: "\u304A\u8CB7\u3044\u7269\u30B5\u30DD\u30FC\u30C8\u30AB\u30FC\u30C9",
      clerkModalSubtitle: "\u30A2\u30B8\u30A2\u98DF\u6750\u5E97\u3067\u8CB7\u3044\u7269\u3092\u3059\u308B\u969B\u3001\u3053\u306E\u753B\u9762\u3092\u305D\u306E\u307E\u307E\u5E97\u54E1\u3055\u3093\u306B\u304A\u898B\u305B\u304F\u3060\u3055\u3044\uFF1A",
      clerkPronounce: "\u30D9\u30C8\u30CA\u30E0\u8A9E\u306E\u767A\u97F3",
      closeModal: "\u9589\u3058\u308B",
      stepsTitle: "\u8A73\u3057\u3044\u8ABF\u7406\u624B\u9806",
      stepPrefix: "\u30B9\u30C6\u30C3\u30D7",
      crucialTipTitle: "\u30D7\u30ED\u76F4\u4F1D\u306E\u30B3\u30C4",
      dangerWarningTitle: "\u5931\u6557\u3092\u9632\u3050\u6CE8\u610F\u70B9",
      timerStart: "\u30BF\u30A4\u30DE\u30FC\u958B\u59CB",
      timerPause: "\u4E00\u6642\u505C\u6B62",
      timerReset: "\u30EA\u30BB\u30C3\u30C8",
      timerDone: "\u6642\u9593\u306B\u306A\u308A\u307E\u3057\u305F\uFF01",
      troubleshootingTitle: "\u3088\u304F\u3042\u308B\u5931\u6557\u3068\u89E3\u6C7A\u7B56 (Q&A)",
      troubleshootingSubtitle: "\u6F84\u3093\u3060\u30B9\u30FC\u30D7\u306E\u53D6\u308A\u65B9\u3084\u30B5\u30AF\u30B5\u30AF\u306E\u30D1\u30F3\u306E\u713C\u304D\u65B9\u306A\u3069\u3001\u7591\u554F\u3092\u5373\u5EA7\u306B\u89E3\u6C7A",
      problem: "\u56F0\u3063\u305F\u73FE\u8C61",
      cause: "\u539F\u56E0",
      solution: "\u89E3\u6C7A\u65B9\u6CD5",
      cultureTitle: "\u6599\u7406\u306E\u30EB\u30FC\u30C4\u3068\u6587\u5316\u7684\u80CC\u666F",
      listenPronunciation: "\u30CD\u30A4\u30C6\u30A3\u30D6\u306E\u767A\u97F3\u3092\u805E\u304F",
      famousMarkets: "\u767A\u7965\u306E\u5730\u30FB\u6709\u540D\u306A\u540D\u7269\u901A\u308A",
      historyStory: "\u6B74\u53F2\u3068\u7269\u8A9E",
      proTipsTitle: "\u672C\u5834\u306E\u901A\u306A\u98DF\u3079\u65B9",
      markAsMastered: "\u3053\u306E\u6599\u7406\u3092\u300C\u30DE\u30B9\u30BF\u30FC\u6E08\u307F\u300D\u306B\u3059\u308B",
      masteredAlready: "\u{1F389} \u3053\u306E\u6599\u7406\u3092\u30DE\u30B9\u30BF\u30FC\u3057\u307E\u3057\u305F\uFF01",
      addToFavorites: "\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",
      removeFromFavorites: "\u4FDD\u5B58\u6E08\u307F"
    },
    focusMode: {
      exit: "\u8ABF\u7406\u30E2\u30FC\u30C9\u3092\u7D42\u4E86",
      stepProgress: "\u9032\u884C\u72B6\u6CC1",
      prevStep: "\u524D\u306E\u624B\u9806",
      nextStep: "\u6B21\u306E\u624B\u9806",
      finishCooking: "\u6599\u7406\u304C\u5B8C\u6210\uFF01",
      readStepAloud: "\u624B\u9806\u3092\u97F3\u58F0\u3067\u8AAD\u307F\u4E0A\u3052",
      reading: "\u8AAD\u307F\u4E0A\u3052\u4E2D...",
      completedMessage: "\u304A\u898B\u4E8B\uFF01\u672C\u5834\u306E\u30D9\u30C8\u30CA\u30E0\u6599\u7406\u304C\u5B8C\u6210\u3057\u307E\u3057\u305F\uFF01",
      dishMasteredPrompt: "\u300C\u30D9\u30C8\u30CA\u30E0\u5C4B\u53F0\u30DE\u30B9\u30BF\u30FC\u300D\u30D0\u30C3\u30B8\u3092\u7372\u5F97\u3057\u307E\u3057\u3087\u3046\uFF01"
    },
    caPheLab: {
      badge: "\u2615 \u30D9\u30C8\u30CA\u30E0\u5F0F\u30C9\u30EA\u30C3\u30D7\uFF06\u30AB\u30D5\u30A7\u8ABF\u98F2\u30D0\u30FC",
      title: "Qu\xE1n C\xE0 Ph\xEA \u8ABF\u98F2\u30E9\u30DC",
      subtitle: "\u4E16\u754C\u7B2C2\u4F4D\u306E\u30B3\u30FC\u30D2\u30FC\u5927\u56FD\u30FB\u30D9\u30C8\u30CA\u30E0\u306E\u5965\u6DF1\u3044\u30AB\u30D5\u30A7\u6587\u5316\u3002\u30B5\u30A4\u30B4\u30F3\u98A8\u7DF4\u4E73\u30A2\u30A4\u30B9\u304B\u3089\u30CF\u30CE\u30A4\u540D\u7269\u30A8\u30C3\u30B0\u30B3\u30FC\u30D2\u30FC\u307E\u3067\u624B\u8EFD\u306B\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\uFF01",
      selectPreset: "\u5B9A\u756A\u4EBA\u6C17\u30E1\u30CB\u30E5\u30FC\u304B\u3089\u9078\u3076",
      customDrip: "\u30AB\u30B9\u30BF\u30E0\u8ABF\u98F2",
      presets: {
        suada: "C\xE0 Ph\xEA S\u1EEFa \u0110\xE1 (\u30B5\u30A4\u30B4\u30F3\u30AF\u30E9\u30B7\u30C3\u30AF\u7DF4\u4E73\u30A2\u30A4\u30B9\u30B3\u30FC\u30D2\u30FC)",
        trung: "C\xE0 Ph\xEA Tr\u1EE9ng (\u30CF\u30CE\u30A4\u4F1D\u8AAC\u306E\u30A8\u30C3\u30B0\u30B3\u30FC\u30D2\u30FC)",
        muoi: "C\xE0 Ph\xEA Mu\u1ED1i (\u30D5\u30A8\u5BAE\u5EF7\u767A\u7965\u306E\u5869\u30AF\u30EA\u30FC\u30E0\u30B3\u30FC\u30D2\u30FC)",
        dua: "C\xE0 Ph\xEA D\u1EEBa (\u30C0\u30CA\u30F3\u767A\u7965\u30B3\u30B3\u30CA\u30C3\u30C4\u30D5\u30ED\u30FC\u30BA\u30F3\u30B3\u30FC\u30D2\u30FC)",
        bacXiu: "B\u1EA1c X\u1EC9u (\u30DF\u30EB\u30AF\u30EA\u30C3\u30C1\u306A\u30B5\u30A4\u30B4\u30F3\u30DB\u30EF\u30A4\u30C8\u30B3\u30FC\u30D2\u30FC)",
        traDao: "Tr\xE0 \u0110\xE0o Cam S\u1EA3 (\u30D4\u30FC\u30C1\uFF06\u30EC\u30E2\u30F3\u30B0\u30E9\u30B9\u30A2\u30A4\u30B9\u30C6\u30A3\u30FC)"
      },
      coffeeBase: "\u30D5\u30A3\u30F3\uFF08\u91D1\u5C5E\u30D5\u30A3\u30EB\u30BF\u30FC\uFF09\u62BD\u51FA\u30D9\u30FC\u30B9",
      bases: {
        robusta: "\u30C0\u30AF\u30E9\u30AF\u7523\u30ED\u30D6\u30B9\u30BF\u6DF1\u714E\u308A (\u9999\u3070\u3057\u3044\u30D0\u30BF\u30FC\u7119\u714E)",
        arabica: "\u30C0\u30E9\u30C3\u30C8\u7523\u30A2\u30E9\u30D3\u30AB (\u30D5\u30EB\u30FC\u30C6\u30A3\u30FC\u3067\u8EFD\u3084\u304B\u306A\u9178\u5473)",
        traSen: "\u30CF\u30CE\u30A4\u897F\u6E56\u84EE\u82B1\u7DD1\u8336 (\u6E05\u3089\u304B\u306A\u30CF\u30B9\u306E\u9999\u308A)",
        traDao: "\u30D9\u30C8\u30CA\u30E0\u9AD8\u5730\u7523\u30D6\u30E9\u30C3\u30AF\u30C6\u30A3\u30FC (\u82B3\u9187\u306A\u7D05\u8336)"
      },
      sweetnessLevel: "\u7DF4\u4E73\u306E\u7518\u3055\u30EC\u30D9\u30EB (S\u1EEFa \u0110\u1EB7c \xD4ng Th\u1ECD)",
      sweetnessLabels: {
        zero: "0% \u7121\u7CD6\u30D6\u30E9\u30C3\u30AF (C\xE0 Ph\xEA \u0110en)",
        light: "25% \u3059\u3063\u304D\u308A\u5FAE\u7CD6 (\xCDt ng\u1ECDt)",
        standard: "50% \u9EC4\u91D1\u6BD4\u7387\u306E\u5B9A\u756A (V\u1EEBa)",
        saigonSweet: "100% \u672C\u5834\u30B5\u30A4\u30B4\u30F3\u306E\u6FC3\u539A\u306A\u7518\u3055 (Ng\u1ECDt \u0111\u1EADm)"
      },
      iceLevel: "\u6C37\u306E\u30B9\u30BF\u30A4\u30EB (\u0110\xE1)",
      iceLabels: {
        crushed: "\u30AF\u30E9\u30C3\u30B7\u30E5\u30A2\u30A4\u30B9\u5C71\u76DB\u308A (\u672C\u5834\u306E\u5C4B\u53F0\u6D41)",
        cubes: "\u89D2\u6C37",
        hot: "\u6E6F\u714E\u4FDD\u6E29\u306E\u30DB\u30C3\u30C8\u30B9\u30BF\u30A4\u30EB"
      },
      toppings: "\u30D5\u30A9\u30FC\u30E0\uFF06\u30C8\u30C3\u30D4\u30F3\u30B0",
      toppingsLabels: {
        none: "\u30C8\u30C3\u30D4\u30F3\u30B0\u306A\u3057",
        eggCream: "\u30CF\u30CE\u30A4\u7279\u88FD\u3075\u308F\u3075\u308F\u5375\u9EC4\u30AF\u30EA\u30FC\u30E0 (+110 kcal)",
        saltCream: "\u6FC3\u539A\u306A\u30D5\u30A8\u98A8\u30B7\u30FC\u30BD\u30EB\u30C8\u30D5\u30A9\u30FC\u30E0 (+85 kcal)",
        coconutSlush: "\u751F\u643E\u308A\u30B3\u30B3\u30CA\u30C3\u30C4\u30D5\u30ED\u30FC\u30BA\u30F3 (+95 kcal)",
        coffeeJelly: "\u624B\u4F5C\u308A\u30AF\u30E9\u30D5\u30C8\u73C8\u7432\u30BC\u30EA\u30FC (+30 kcal)",
        peachSlices: "\u30B8\u30E5\u30FC\u30B7\u30FC\u306A\u9EC4\u6843\u306E\u679C\u8089 (+40 kcal)"
      },
      nutritionStats: {
        estimatedCalories: "\u63A8\u5B9A\u7DCF\u30AB\u30ED\u30EA\u30FC",
        caffeineLevel: "\u30AB\u30D5\u30A7\u30A4\u30F3\u91CF",
        phinDripTime: "\u30C9\u30EA\u30C3\u30D7\u62BD\u51FA\u6642\u9593"
      },
      streetSlangTitle: "\u30D9\u30C8\u30CA\u30E0\u5C4B\u53F0\u30AB\u30D5\u30A7\u3067\u306E\u30EA\u30A2\u30EB\u306A\u6CE8\u6587\u30D5\u30EC\u30FC\u30BA",
      slangQuote: "\u300CCho m\u1ED9t ly c\xE0 ph\xEA s\u1EEFa \u0111\xE1 nhi\u1EC1u \u0111\xE1 \xEDt ng\u1ECDt mang \u0111i!\u300D",
      listenSlang: "\u30D9\u30C8\u30CA\u30E0\u8A9E\u306E\u6CE8\u6587\u97F3\u58F0\u3092\u518D\u751F",
      homeBrewGuideTitle: "\u81EA\u5B85\u3067\u5B8C\u74A7\u306A\u30D5\u30A3\u30F3\u30B3\u30FC\u30D2\u30FC\u3092\u6DF9\u308C\u308B4\u3064\u306E\u9244\u5247",
      phinTip: "\u6700\u521D\u306B20ml\u306E\u304A\u6E6F\u3092\u6CE8\u3044\u306730\u79D2\u9593\u84B8\u3089\u3057\u3001\u4E2D\u84CB\u3092\u8EFD\u304F\u62BC\u3055\u3048\u3066\u304B\u3089\u304A\u6E6F\u3092\u6E80\u305F\u3057\u30014\u301C5\u5206\u304B\u3051\u3066\u3086\u3063\u304F\u308A\u62BD\u51FA\u3057\u307E\u3059\u3002"
    },
    nightMarket: {
      badge: "\u{1F5FA}\uFE0F \u591C\u306E\u30B0\u30EB\u30E1\u8857\u9053\u30DE\u30C3\u30D7",
      title: "\u30D9\u30C8\u30CA\u30E0\u5C4B\u53F0\u8857\uFF06\u591C\u5E02\u30B0\u30EB\u30E1\u30AC\u30A4\u30C9",
      subtitle: "\u30CF\u30CE\u30A4\u65E7\u5E02\u8857\u306E\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u6905\u5B50\u304B\u3089\u3001\u71B1\u6C17\u3042\u3075\u308C\u308B\u30B5\u30A4\u30B4\u30F3\u306E\u30B7\u30FC\u30D5\u30FC\u30C9\u901A\u308A\u307E\u3067\u3002",
      filterRegion: "\u5730\u57DF\u3067\u7D5E\u308A\u8FBC\u3080",
      regions: {
        all: "\u3059\u3079\u3066\u306E\u5730\u57DF",
        north: "\u5317\u90E8 (\u30CF\u30CE\u30A4\u30FB\u65E7\u5E02\u8857)",
        central: "\u4E2D\u90E8 (\u30D5\u30A8\u30FB\u30C0\u30CA\u30F3\u30FB\u30DB\u30A4\u30A2\u30F3)",
        south: "\u5357\u90E8 (\u30DB\u30FC\u30C1\u30DF\u30F3\u30FB\u30B5\u30A4\u30B4\u30F3)",
        highlands: "\u9AD8\u539F\u5730\u5E2F (\u30C0\u30E9\u30C3\u30C8\u907F\u6691\u5730)"
      },
      openingHours: "\u55B6\u696D\u6642\u9593",
      transport: "\u30A2\u30AF\u30BB\u30B9\u6848\u5185",
      signatureFood: "\u540D\u7269\u30B9\u30C8\u30EA\u30FC\u30C8\u30D5\u30FC\u30C9",
      insiderTip: "\u5730\u5143\u30C4\u30A6\u306E\u30A2\u30C9\u30D0\u30A4\u30B9",
      streetSlangOrder: "\u5C4B\u53F0\u3067\u4F7F\u3048\u308B\u6CE8\u6587\u30D5\u30EC\u30FC\u30BA",
      listenOrderPhrase: "\u30D5\u30EC\u30FC\u30BA\u97F3\u58F0\u3092\u518D\u751F",
      viewRecipeButton: "\u3053\u306E\u6599\u7406\u306E\u30EC\u30B7\u30D4\u3092\u898B\u308B"
    },
    pantry: {
      badge: "\u{1F9C4} \u65E8\u5473\u306E\u79D8\u5BC6\u30FB\u30CF\u30FC\u30D6\u3068\u8ABF\u5473\u6599",
      title: "\u30D9\u30C8\u30CA\u30E0\u30CF\u30FC\u30D6\u8056\u66F8\uFF06\u30CC\u30AF\u30C1\u30E3\u30E0\u8ABF\u5408\u30E9\u30DC",
      subtitle: "\u7518\u30FB\u9178\u30FB\u8F9B\u30FB\u5869\u30FB\u65E8\u306E\u4E94\u5473\u3092\u6975\u3081\u308B\uFF01\u30D5\u30FC\u30B3\u30C3\u30AF\u5CF6\u306E\u4E00\u756A\u643E\u308A\u9B5A\u91A4\u304B\u3089\u30D5\u30EC\u30C3\u30B7\u30E5\u30CF\u30FC\u30D6\u307E\u3067\u3002",
      balancerTitle: "\u4E07\u80FD\u30BF\u30EC\u300C\u30CC\u30AF\u30C1\u30E3\u30E0 (N\u01B0\u1EDBc Ch\u1EA5m)\u300D\u914D\u5408\u30D0\u30E9\u30F3\u30B5\u30FC",
      balancerSubtitle: "\u30B9\u30E9\u30A4\u30C0\u30FC\u3092\u52D5\u304B\u3057\u3066\u5206\u91CF\u3084\u5317\u90E8\u30FB\u5357\u90E8\u306E\u304A\u597D\u307F\u306E\u5473\u306B\u5408\u308F\u305B\u3066\u5927\u3055\u3058\u6570\u3092\u81EA\u52D5\u8A08\u7B97\uFF1A",
      servingsCount: "\u51FA\u6765\u4E0A\u304C\u308A\u5206\u91CF",
      tasteStyle: "\u5730\u57DF\u306E\u5473\u4ED8\u3051\u30B9\u30BF\u30A4\u30EB",
      southernSweet: "\u5357\u90E8\u30B5\u30A4\u30B4\u30F3\u6D41 (\u30E9\u30A4\u30E0\u3068\u7802\u7CD6\u306E\u52B9\u3044\u305F\u7518\u9178\u3063\u3071\u3055)",
      northernSavory: "\u5317\u90E8\u30CF\u30CE\u30A4\u6D41 (\u30CB\u30F3\u30CB\u30AF\u3068\u5510\u8F9B\u5B50\u306E\u6DF1\u307F\u306E\u3042\u308B\u65E8\u5869\u5473)",
      ingredientsRatio: "\u9EC4\u91D1\u6BD4\u7387\u306E\u6750\u6599\u8868",
      fishSauce: "\u4E0A\u8CEA\u30CC\u30AF\u30DE\u30E0 (\u9B5A\u91A4 40\xB0N)",
      limeJuice: "\u7D5E\u308A\u305F\u3066\u751F\u30E9\u30A4\u30E0\u679C\u6C41",
      sugar: "\u7802\u7CD6",
      warmWater: "\u306C\u308B\u307E\u6E6F (\u7802\u7CD6\u3092\u6EB6\u304B\u3059\u7528)",
      garlicMinced: "\u307F\u3058\u3093\u5207\u308A\u30CB\u30F3\u30CB\u30AF",
      chiliMinced: "\u5C0F\u53E3\u5207\u308A\u751F\u5510\u8F9B\u5B50",
      tbspUnit: "\u5927\u3055\u3058",
      clovesUnit: "\u7247 (\u307F\u3058\u3093\u5207\u308A)",
      chiliesUnit: "\u672C (\u8F2A\u5207\u308A)",
      herbBibleTitle: "\u30D5\u30EC\u30C3\u30B7\u30E5\u30CF\u30FC\u30D6\u56F3\u9451 (Rau Th\u01A1m)",
      herbBibleSubtitle: "\u30D9\u30C8\u30CA\u30E0\u6599\u7406\u3092\u5F69\u308B\u723D\u3084\u304B\u306A\u9999\u308A\u306E\u4E3B\u5F79\u305F\u3061\uFF1A",
      fishSauceGradeTitle: "\u9B5A\u91A4\u30E9\u30D9\u30EB\u306E\u300C\u5EA6\u6570 (\xB0N)\u300D\u306E\u610F\u5473\u3068\u306F\uFF1F",
      fishSauceGradeDesc: "\xB0N\u306F1\u30EA\u30C3\u30C8\u30EB\u4E2D\u306E\u5929\u7136\u7A92\u7D20\uFF08\u65E8\u5473\u30BF\u30F3\u30D1\u30AF\u8CEA\uFF09\u306E\u542B\u6709\u91CF\u3092\u8868\u3057\u307E\u3059\u3002\u666E\u6BB5\u306E\u52A0\u71B1\u8ABF\u7406\u306F30\xB0N\u3067\u5341\u5206\u3067\u3059\u304C\u3001\u751F\u6625\u5DFB\u304D\u3084\u30BF\u30EC\u4F5C\u308A\u306B\u306F40\xB0N\u306E\u4E00\u756A\u643E\u308A\u539F\u6DB2\uFF08\u30D5\u30FC\u30B3\u30C3\u30AF\u5CF6\u7523\u306A\u3069\uFF09\u3092\u4F7F\u3046\u3068\u89D2\u304C\u7ACB\u305F\u305A\u307E\u308D\u3084\u304B\u306A\u30B3\u30AF\u304C\u697D\u3057\u3081\u307E\u3059\u3002"
    },
    favorites: {
      title: "\u304A\u6C17\u306B\u5165\u308A\u30EC\u30B7\u30D4\uFF06\u30DE\u30B9\u30BF\u30FC\u8A18\u9332",
      subtitle: "\u6311\u6226\u3057\u305F\u6599\u7406\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u3001\u81EA\u5206\u3060\u3051\u306E\u30D9\u30C8\u30CA\u30E0\u6599\u7406\u624B\u5E33\u3092\u5B8C\u6210\u3055\u305B\u3088\u3046\u3002",
      savedCount: "\u4FDD\u5B58\u6E08\u307F",
      masteredCount: "\u30DE\u30B9\u30BF\u30FC\u6E08\u307F",
      emptyFavs: "\u307E\u3060\u4FDD\u5B58\u3055\u308C\u305F\u30EC\u30B7\u30D4\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u300C\u6599\u7406\u3092\u63A2\u3059\u300D\u304B\u3089\u304A\u6C17\u306B\u5165\u308A\u3092\u898B\u3064\u3051\u307E\u3057\u3087\u3046\uFF01",
      exploreDishes: "\u4EBA\u6C17\u306E\u6599\u7406\u3092\u63A2\u3059",
      tabs: {
        saved: "\u4FDD\u5B58\u3057\u305F\u6599\u7406",
        mastered: "\u30DE\u30B9\u30BF\u30FC\u3057\u305F\u6599\u7406"
      },
      conqueredDishes: "\u4F1D\u8AAC\u306E\u30D9\u30C8\u30CA\u30E0\u6599\u7406 {total}\u54C1\u4E2D {count}\u54C1\u3092\u30DE\u30B9\u30BF\u30FC",
      conqueredOf: "OF {total} CONQUERED",
      badgeCount: "\u7372\u5F97\u30D0\u30C3\u30B8 ({count})",
      viewRecipe: "\u30EC\u30B7\u30D4\u3092\u898B\u308B",
      emptyFavTitle: "\u4FDD\u5B58\u3055\u308C\u305F\u30EC\u30B7\u30D4\u304C\u3042\u308A\u307E\u305B\u3093",
      emptyFavDesc: "\u30D9\u30C8\u30CA\u30E0\u5C4B\u53F0\u30B0\u30EB\u30E1\u3092\u95B2\u89A7\u3057\u3001\u6C17\u306B\u306A\u308B\u6599\u7406\u306E\u30CF\u30FC\u30C8\u30DE\u30FC\u30AF\u3092\u30BF\u30C3\u30D7\u3057\u3066\u304A\u6C17\u306B\u5165\u308A\u306B\u767B\u9332\u3057\u307E\u3057\u3087\u3046\uFF01",
      emptyFavButton: "\u5B9A\u756A\u6599\u7406\u3092\u898B\u3064\u3051\u308B"
    },
    navbar: {
      brandBadge: "\u30D9\u30C8\u30CA\u30E0\u6599\u7406\u5927\u5E2B"
    },
    footer: {
      tagline: "\u4E16\u754C\u4E2D\u306E\u30D9\u30C8\u30CA\u30E0\u6599\u7406\u30D5\u30A1\u30F3\u306E\u305F\u3081\u306B\uFF1A\u672C\u5834\u306E\u6B63\u78BA\u306A\u30B0\u30E9\u30E0\u30EC\u30B7\u30D4\u3001\u6D77\u5916\u30B9\u30FC\u30D1\u30FC\u3067\u306E\u4EE3\u66FF\u98DF\u6750\u3001\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u30FB\u5727\u529B\u934B\u5BFE\u5FDC\u3001\u73FE\u5730\u591C\u5E02\u3067\u306E\u6CE8\u6587\u97F3\u58F0\u30AC\u30A4\u30C9\u3092\u304A\u5C4A\u3051\u3057\u307E\u3059\u3002",
      coreFeaturesTitle: "\u30A2\u30D7\u30EA\u306E\u4E3B\u306A\u7279\u5FB4",
      featureRecipes: "\u53B3\u907816\u54C1\u306E\u30D9\u30C8\u30CA\u30E0\u540D\u7269\u6599\u7406 5\u8A00\u8A9E\u5BFE\u5FDC\u306E\u30B0\u30E9\u30E0\u6B63\u78BA\u30EC\u30B7\u30D4",
      featureCaPhe: "\u672C\u5834\u30AB\u30D5\u30A7\u30D5\u30A3\u30F3\u8ABF\u98F2\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC\uFF06\u30B9\u30C8\u30EA\u30FC\u30C8\u30C9\u30EA\u30F3\u30AF\u7814\u7A76\u5BA4",
      featureMarkets: "\u5168\u8D8A6\u5927\u30A8\u30EA\u30A2\u306E\u5C4B\u53F0\u8857\uFF06\u30CD\u30A4\u30C6\u30A3\u30D6\u767A\u97F3\u306B\u3088\u308B\u6CE8\u6587\u97F3\u58F0",
      featurePantry: "5\u5927\u30D5\u30EC\u30C3\u30B7\u30E5\u30CF\u30FC\u30D6\u56F3\u9451\u3001\u9B5A\u91A4\u5EA6\u6570\u30AC\u30A4\u30C9\uFF06\u4E07\u80FD\u30BF\u30EC\u8A08\u7B97\u6A5F",
      toolsTitle: "\u30AD\u30C3\u30C1\u30F3\u304A\u5F79\u7ACB\u3061\u6A5F\u80FD",
      toolsDesc: "\u30CF\u30F3\u30BA\u30D5\u30EA\u30FC\u5168\u753B\u9762\u97F3\u58F0\u8ABF\u7406\u30E2\u30FC\u30C9\u3001\u5DE5\u7A0B\u5225\u30BF\u30A4\u30DE\u30FC\u3001\u5E97\u54E1\u306B\u898B\u305B\u308B\u3060\u3051\u306E\u304A\u8CB7\u3044\u7269\u30AB\u30FC\u30C9\u3092\u642D\u8F09\u3002",
      sisterAppsTitle: "\u30A2\u30B8\u30A2\u7F8E\u98DF\u30E6\u30CB\u30D0\u30FC\u30B9 \u2022 \u59C9\u59B9\u30A2\u30D7\u30EA\u30B7\u30EA\u30FC\u30BA",
      sisterAppsSubtitle: "\u540C\u4E00\u306E\u60C5\u71B1\u7684\u30C1\u30FC\u30E0\u306B\u3088\u308B\u958B\u767A\u2014\u30BF\u30C3\u30D7\u3057\u3066\u4ECA\u3059\u3050\u8A2A\u554F",
      copyrightTeam: "\u30D9\u30C8\u30CA\u30E0\u6599\u7406\u30DE\u30B9\u30BF\u30FC"
    },
    common: {
      minutes: "\u5206",
      quickShortcuts: "\u30AF\u30A4\u30C3\u30AF\u691C\u7D22\uFF1A",
      reset: "\u30EA\u30BB\u30C3\u30C8",
      audioPlaying: "\u{1F50A} \u30CD\u30A4\u30C6\u30A3\u30D6\u767A\u97F3\u3092\u518D\u751F\u4E2D...",
      chefModeReady: "\u672C\u5834\u306E\u6599\u7406\u4EBA\u30E2\u30FC\u30C9\u3092\u958B\u59CB\u3057\u307E\u3059\u304B\uFF1F",
      chefModeDesc: "\u5168\u753B\u9762\u306E\u97F3\u58F0\u8AAD\u307F\u4E0A\u3052\u624B\u9806\u3001\u5185\u8535\u30BF\u30A4\u30DE\u30FC\u3001\u8ABF\u7406\u306B\u96C6\u4E2D\u3067\u304D\u308B\u8A2D\u8A08",
      ingredientsReady: "{total}\u54C1\u4E2D {checked}\u54C1\u304C\u6E96\u5099\u5B8C\u4E86",
      suggestedSubstitute: "\u{1F4A1} \u304A\u3059\u3059\u3081\u306E\u4EE3\u7528\uFF1A",
      ratio: "\u6BD4\u7387",
      shoppingGuide: "\u{1F6D2} \u8CFC\u5165\u306E\u30D2\u30F3\u30C8\uFF1A",
      dietaryLabels: {
        vegetarian: "\u30D9\u30B8\u30BF\u30EA\u30A2\u30F3",
        glutenFree: "\u30B0\u30EB\u30C6\u30F3\u30D5\u30EA\u30FC",
        pescatarian: "\u9B5A\u4ECB\u30FB\u30DA\u30B9\u30AB\u30C8\u30EA\u30A2\u30F3"
      },
      calcTitle: "\u{1FAD7} \u4E07\u80FD\u30CC\u30C3\u30AF\u30C1\u30E3\u30E0\u9EC4\u91D1\u6BD4\u7387\u8A08\u7B97\u6A5F (N\u01B0\u1EDBc Ch\u1EA5m Balancer)",
      calcDesc: "\u751F\u6625\u5DFB\u304D\u3001\u30D6\u30F3\u30C1\u30E3\u30FC\u3001\u30D0\u30A4\u30F3\u30BB\u30AA\u306B\u4E07\u80FD\uFF01\u85AC\u5473\u306E\u306B\u3093\u306B\u304F\u3068\u5510\u8F9B\u5B50\u304C\u7DBA\u9E97\u306B\u6D6E\u304B\u3076\u914D\u5408\u3092\u81EA\u52D5\u7B97\u51FA\u3002",
      calcServings: "\u5206\u91CF\u8A2D\u5B9A (Servings)",
      calcPersonUnit: "\u4EBA\u524D (Persons)",
      calcSolo: "1\u4EBA\u5206",
      calcFamily: "4\u4EBA\u5BB6\u65CF\u5206",
      calcParty: "10\u4EBA\u30D1\u30FC\u30C6\u30A3\u5206",
      calcFloatingTipTitle: "\u85AC\u5473\u304C\u6C88\u307E\u306A\u3044\u30D7\u30ED\u306E\u79D8\u8A23",
      calcFloatingTip: "\u5FC5\u305A\u6700\u521D\u306B\u306C\u308B\u307E\u6E6F\u3067\u7802\u7CD6\u3092\u5B8C\u5168\u306B\u6EB6\u304B\u3057\u3066\u304B\u3089\u3001\u9B5A\u91A4\u3068\u30E9\u30A4\u30E0\u679C\u6C41\u3092\u52A0\u3048\u3066\u304F\u3060\u3055\u3044\u3002\u523B\u307F\u30CB\u30F3\u30CB\u30AF\u3068\u5510\u8F9B\u5B50\u306F\u3010\u6700\u5F8C\u3011\u306B\u5165\u308C\u308B\u3053\u3068\uFF01\u6BD4\u91CD\u306E\u5DEE\u3067\u30CB\u30F3\u30CB\u30AF\u304C\u6C88\u307E\u305A\u96EA\u306E\u3088\u3046\u306B\u7F8E\u3057\u304F\u6D6E\u304B\u3073\u307E\u3059\u3002",
      calcProportionsTitle: "\u8A08\u7B97\u3055\u308C\u305F\u9EC4\u91D1\u6BD4\u7387",
      calcFinelyMinced: "\u7D30\u304B\u304F\u523B\u3080\u307B\u3069\u6D6E\u304D\u3084\u3059\u304F\u306A\u308A\u307E\u3059",
      calcSpiceAdjust: "\u8F9B\u3055\u306E\u597D\u307F\u306B\u5FDC\u3058\u3066\u8ABF\u6574\u53EF\u80FD",
      herbShopButton: "Amazon\u3067\u30CF\u30FC\u30D6\u3092\u63A2\u3059",
      herbFlavorProfile: "\u98A8\u5473\u306E\u7279\u5FB4",
      herbBestMatched: "\u6700\u9AD8\u306E\u7D44\u307F\u5408\u308F\u305B",
      herbWesternSub: "\u26A1 \u4E00\u822C\u30B9\u30FC\u30D1\u30FC\u3067\u306E\u4EE3\u7528\u30C6\u30AF\u30CB\u30C3\u30AF:",
      fishSauceGuideTitle: "\u{1F41F} \u9B5A\u91A4\u306E\u5EA6\u6570(\xB0N)\u5B8C\u5168\u89E3\u8AAD\u30AC\u30A4\u30C9\uFF1A\u30E9\u30D9\u30EB\u306E\u898B\u65B9",
      fishSauceGuideDesc: "\u5EA6\u6570\u304C\u9AD8\u3044\u307B\u3069\u5929\u7136\u306E\u65E8\u5473\u7A92\u7D20\uFF08\u30BF\u30F3\u30D1\u30AF\u8CEA\uFF09\u304C\u6FC3\u539A\u3067\u3059\u3002\u3064\u3051\u30C0\u30EC\u3068\u7092\u3081\u7269\u3067\u4F7F\u3044\u5206\u3051\u308C\u3070\u7F8E\u5473\u3057\u3055\u500D\u5897\uFF01",
      fishSauceIdealUsage: "\u6700\u9069\u306A\u4F7F\u3044\u9053",
      amazonSearch: "Amazon\u3067\u691C\u7D22",
      pantryProductsTitle: "\u{1F96B} \u5B9A\u756A\u304A\u3059\u3059\u3081\u8ABF\u5473\u6599\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3",
      amazonPrime: "Amazon Prime"
    }
  },
  "ko": {
    appName: "\uBCA0\uD2B8\uB0A8 \uD478\uB4DC \uB9C8\uC2A4\uD130 | Vietnamese Food Master",
    appSubtitle: "\uC815\uD1B5 \uAE38\uAC70\uB9AC \uC74C\uC2DD\u30FB\uD540 \uB4DC\uB9BD \uCEE4\uD53C \uB7A9\u30FB\uD5C8\uBE0C \uBC31\uACFC \uBC0F \uC57C\uC2DC\uC7A5 \uAC00\uC774\uB4DC",
    searchPlaceholder: "\uBCA0\uD2B8\uB0A8 \uC694\uB9AC \uAC80\uC0C9 (\uC300\uAD6D\uC218, \uBC18\uBBF8, \uBD84\uC9DC, \uC5D0\uADF8\uCEE4\uD53C, \uC2A4\uD504\uB9C1\uB864)...",
    nav: {
      explore: "\uC694\uB9AC \uD0D0\uC0C9",
      caPheLab: "\uBCA0\uD2B8\uB0A8 \uCE74\uD398 \uB7A9",
      nightMarkets: "\uC57C\uC2DC\uC7A5 \uB9DB\uC9D1 \uC9C0\uB3C4",
      pantry: "\uD53C\uC2DC\uC18C\uC2A4 & \uD5C8\uBE0C",
      favorites: "\uB098\uC758 \uBCF4\uAD00\uD568"
    },
    hero: {
      badge: "\u{1F1FB}\u{1F1F3} \uBCA0\uD2B8\uB0A8 \uAE38\uAC70\uB9AC \uBBF8\uC2DD\uC758 \uC815\uC218",
      title: "\uBCA0\uD2B8\uB0A8\uC758 \uB9DB\uACFC \uD5A5",
      titleHighlight: "\uC22F\uBD88\uC758 \uC628\uAE30\uC640 \uC2E0\uC120\uD55C \uD5C8\uBE0C",
      subtitle: "\uD558\uB178\uC774 \uC22F\uBD88 \uBD84\uC9DC\uBD80\uD130 \uC0AC\uC774\uACF5\uC758 \uBC14\uC0AD\uD55C \uBC18\uBBF8\uAE4C\uC9C0! \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\u30FB\uC778\uC2A4\uD134\uD2B8\uD31F \uB9DE\uCDA4 \uB808\uC2DC\uD53C\uC640 \uC804\uD1B5 \uD540 \uCEE4\uD53C \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uB9CC\uB098\uBCF4\uC138\uC694.",
      ctaCook: "\uC778\uAE30 \uB808\uC2DC\uD53C \uBCF4\uAE30",
      ctaCaPhe: "\uCE74\uD398 \uB7A9 \uC785\uC7A5",
      quickAirFryer: "\u26A1 \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uC694\uB9AC (\uC9DC\uC870 / \uBC18\uBBF8)",
      quickInstantPot: "\u{1F372} \uC804\uAE30 \uC555\uB825\uC1A5 \uC694\uB9AC (\uC9C4\uD55C \uC300\uAD6D\uC218 \uC721\uC218 / \uBCF4\uCF54)"
    },
    categories: {
      all: "\uBAA8\uB4E0 \uC694\uB9AC",
      mains: "\uBA74 & \uBC25\uB958 (\uC300\uAD6D\uC218 / \uBD84)",
      rollsSnacks: "\uBC18\uBBF8 & \uB864 \uC694\uB9AC (\uBC18\uBBF8 / \uACE0\uC774\uAFB8\uC628)",
      soupsStews: "\uAD6D\uBB3C & \uC870\uB9BC (\uBCF4\uCF54 / \uAD6D\uBB3C \uC694\uB9AC)",
      salads: "\uC0D0\uB7EC\uB4DC (\uD30C\uD30C\uC57C \uC0D0\uB7EC\uB4DC)",
      dessertsDrinks: "\uB514\uC800\uD2B8 & \uCEE4\uD53C (\uCE74\uD398 / \uC9F8)"
    },
    filter: {
      airFryerOnly: "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uAC00\uB2A5",
      instantPotOnly: "\uC555\uB825\uC1A5 \uAC00\uB2A5",
      allCookware: "\uBAA8\uB4E0 \uC870\uB9AC\uAE30\uAD6C",
      difficulty: "\uB09C\uC774\uB3C4",
      dietary: "\uC2DD\uB2E8 \uC720\uD615",
      resetFilters: "\uD544\uD130 \uCD08\uAE30\uD654",
      noResults: "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uBCA0\uD2B8\uB0A8 \uC694\uB9AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4",
      noResultsDesc: "\uD544\uD130\uB97C \uC7AC\uC124\uC815\uD558\uAC70\uB098 \uB2E4\uB978 \uAC80\uC0C9\uC5B4(\uC608: \uC300\uAD6D\uC218, \uBC18\uBBF8, \uC2A4\uD504\uB9C1\uB864)\uB97C \uC785\uB825\uD574\uBCF4\uC138\uC694"
    },
    recipeCard: {
      prepTime: "\uC900\uBE44",
      cookTime: "\uC870\uB9AC",
      servings: "\uC778\uBD84",
      calories: "kcal/\uC778\uBD84",
      difficulty: {
        easy: "\uCD08\uAE09",
        medium: "\uC911\uAE09",
        hard: "\uACE0\uAE09"
      },
      airFryerBadge: "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4",
      instantPotBadge: "\uC555\uB825\uC1A5",
      masteredBadge: "\uB9C8\uC2A4\uD130\uD568"
    },
    recipeDetail: {
      backToRecipes: "\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30",
      startFocusCooking: "\uD578\uC988\uD504\uB9AC \uC74C\uC131 \uC694\uB9AC \uBAA8\uB4DC \uC2DC\uC791",
      prepTime: "\uC900\uBE44 \uC2DC\uAC04",
      cookTime: "\uC870\uB9AC \uC2DC\uAC04",
      totalTime: "\uCD1D \uC18C\uC694 \uC2DC\uAC04",
      servings: "\uC778\uBD84 \uC870\uC808",
      calories: "\uC608\uC0C1 \uCE7C\uB85C\uB9AC",
      unitSystem: "\uB2E8\uC704 \uBCC0\uD658 (\uBBF8\uD130\uBC95 / \uBBF8\uAD6D\uC2DD)",
      cookwareToggleTitle: "\uC870\uB9AC \uAE30\uAD6C \uC120\uD0DD",
      cookwareOptions: {
        traditional: "\uC804\uD1B5 \uAC00\uC2A4\uB808\uC778\uC9C0 / \uB0C4\uBE44",
        airFryer: "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 (\uB2F4\uBC31 \uBC14\uC0AD)",
        instantPot: "\uC804\uAE30 \uC555\uB825\uC1A5 (\uCD08\uACE0\uC18D \uAE4A\uC740 \uB9DB)"
      },
      ingredientsTitle: "\uC7AC\uB8CC \uBC0F \uD669\uAE08 \uBE44\uC728",
      keyFlavorBadge: "\uB9DB\uC758 \uD575\uC2EC",
      substituteAvailable: "\uAD6D\uB0B4 \uB9C8\uD2B8 \uB300\uCCB4 \uC7AC\uB8CC \uBCF4\uAE30",
      showToClerk: "\uC2DD\uB8CC\uD488\uC810 \uC810\uC6D0\uC5D0\uAC8C \uBCF4\uC5EC\uC8FC\uAE30",
      clerkModalTitle: "\uC544\uC2DC\uC548 \uB9C8\uD2B8 \uC7A5\uBCF4\uAE30 \uCE74\uB4DC",
      clerkModalSubtitle: "\uC2DD\uC7AC\uB8CC\uB97C \uAD6C\uC785\uD560 \uB54C \uC810\uC6D0\uC5D0\uAC8C \uC774 \uCE74\uB4DC\uB97C \uADF8\uB300\uB85C \uBCF4\uC5EC\uC8FC\uC138\uC694:",
      clerkPronounce: "\uBCA0\uD2B8\uB0A8\uC5B4 \uBC1C\uC74C",
      closeModal: "\uCE74\uB4DC \uB2EB\uAE30",
      stepsTitle: "\uB2E8\uACC4\uBCC4 \uC0C1\uC138 \uC870\uB9AC\uBC95",
      stepPrefix: "\uB2E8\uACC4",
      crucialTipTitle: "\uC170\uD504\uC758 \uD575\uC2EC \uAFC0\uD301",
      dangerWarningTitle: "\uC2E4\uD328 \uBC29\uC9C0 \uC8FC\uC758\uC0AC\uD56D",
      timerStart: "\uD0C0\uC774\uBA38 \uC2DC\uC791",
      timerPause: "\uC77C\uC2DC\uC815\uC9C0",
      timerReset: "\uCD08\uAE30\uD654",
      timerDone: "\uC2DC\uAC04 \uC885\uB8CC!",
      troubleshootingTitle: "\uC694\uB9AC \uBB38\uC81C \uD574\uACB0 FAQ",
      troubleshootingSubtitle: "\uB9D1\uC740 \uC721\uC218 \uB0B4\uAE30, \uBC14\uC0AD\uD55C \uBC14\uAC8C\uD2B8 \uAD7D\uAE30 \uB4F1 \uC790\uC8FC \uACAA\uB294 \uBB38\uC81C \uC644\uBCBD \uD574\uACB0",
      problem: "\uBB38\uC81C \uC99D\uC0C1",
      cause: "\uC6D0\uC778",
      solution: "\uD574\uACB0 \uBC29\uBC95",
      cultureTitle: "\uC694\uB9AC\uC758 \uAE30\uC6D0\uACFC \uBB38\uD654 \uC774\uC57C\uAE30",
      listenPronunciation: "\uD604\uC9C0\uC778 \uBC1C\uC74C \uB4E3\uAE30",
      famousMarkets: "\uC720\uBA85 \uBC1C\uC0C1\uC9C0 \uBC0F \uB9DB\uC9D1 \uACE8\uBAA9",
      historyStory: "\uC5ED\uC0AC \uBC0F \uBC30\uACBD",
      proTipsTitle: "\uD604\uC9C0\uC778\uCC98\uB7FC \uB9DB\uC788\uAC8C \uBA39\uB294 \uBC95",
      markAsMastered: "\u2018\uB9C8\uC2A4\uD130\uD55C \uC694\uB9AC\u2019\uB85C \uB4F1\uB85D",
      masteredAlready: "\u{1F389} \uC774 \uC694\uB9AC\uB97C \uC815\uBCF5\uD558\uC168\uC2B5\uB2C8\uB2E4!",
      addToFavorites: "\uC990\uACA8\uCC3E\uAE30 \uCD94\uAC00",
      removeFromFavorites: "\uC800\uC7A5\uB428"
    },
    focusMode: {
      exit: "\uD578\uC988\uD504\uB9AC \uBAA8\uB4DC \uC885\uB8CC",
      stepProgress: "\uC9C4\uD589 \uB2E8\uACC4",
      prevStep: "\uC774\uC804 \uB2E8\uACC4",
      nextStep: "\uB2E4\uC74C \uB2E8\uACC4",
      finishCooking: "\uC694\uB9AC \uC644\uC131!",
      readStepAloud: "\uB2E8\uACC4 \uC74C\uC131 \uC548\uB0B4",
      reading: "\uC77D\uB294 \uC911...",
      completedMessage: "\uCD95\uD558\uD569\uB2C8\uB2E4! \uC815\uD1B5 \uBCA0\uD2B8\uB0A8 \uC694\uB9AC\uB97C \uC644\uC131\uD588\uC2B5\uB2C8\uB2E4!",
      dishMasteredPrompt: "\u2018\uBCA0\uD2B8\uB0A8 \uC2A4\uD2B8\uB9AC\uD2B8 \uC170\uD504\u2019 \uBC30\uC9C0\uB97C \uD68D\uB4DD\uD558\uC138\uC694!"
    },
    caPheLab: {
      badge: "\u2615 \uBCA0\uD2B8\uB0A8 \uD540 \uB4DC\uB9BD & \uAE38\uAC70\uB9AC \uC74C\uB8CC \uB7A9",
      title: "Qu\xE1n C\xE0 Ph\xEA \uC5F0\uAD6C\uC18C",
      subtitle: "\uC138\uACC4 2\uC704 \uCEE4\uD53C \uC0DD\uC0B0\uAD6D \uBCA0\uD2B8\uB0A8\uC758 \uD2B9\uBCC4\uD55C \uCEE4\uD53C \uBB38\uD654. \uC5F0\uC720 \uC544\uC774\uC2A4\uCEE4\uD53C\uBD80\uD130 \uD558\uB178\uC774 \uC5D0\uADF8\uCEE4\uD53C, \uD6C4\uC5D0 \uC18C\uAE08\uCEE4\uD53C\uAE4C\uC9C0 \uB098\uB9CC\uC758 \uD669\uAE08 \uBE44\uC728\uC744 \uCC3E\uC544\uBCF4\uC138\uC694.",
      selectPreset: "\uB300\uD45C \uC2DC\uADF8\uB2C8\uCC98 \uBA54\uB274 \uC120\uD0DD",
      customDrip: "\uCEE4\uC2A4\uD140 \uBE0C\uB8E8\uC789",
      presets: {
        suada: "C\xE0 Ph\xEA S\u1EEFa \u0110\xE1 (\uC0AC\uC774\uACF5 \uC815\uD1B5 \uC5F0\uC720 \uC544\uC774\uC2A4\uCEE4\uD53C)",
        trung: "C\xE0 Ph\xEA Tr\u1EE9ng (\uD558\uB178\uC774 \uC804\uC124\uC758 \uC5D0\uADF8\uCEE4\uD53C)",
        muoi: "C\xE0 Ph\xEA Mu\u1ED1i (\uD6C4\uC5D0 \uC655\uC2E4 \uC194\uD2B8 \uD06C\uB9BC\uCEE4\uD53C)",
        dua: "C\xE0 Ph\xEA D\u1EEBa (\uB2E4\uB0AD \uCF54\uCF54\uB11B \uC2A4\uBB34\uB514\uCEE4\uD53C)",
        bacXiu: "B\u1EA1c X\u1EC9u (\uB2EC\uCF64\uD55C \uC0AC\uC774\uACF5 \uD654\uC774\uD2B8 \uBC00\uD06C\uCEE4\uD53C)",
        traDao: "Tr\xE0 \u0110\xE0o Cam S\u1EA3 (\uBCF5\uC22D\uC544 \uC624\uB80C\uC9C0 \uB808\uBAAC\uADF8\uB77C\uC2A4 \uC544\uC774\uC2A4\uD2F0)"
      },
      coffeeBase: "\uD540(Phin) \uD544\uD130 \uC6D0\uB450 \uBCA0\uC774\uC2A4",
      bases: {
        robusta: "\uB2E5\uB77D\uC131 \uBD80\uC628\uB9C8\uD22C\uC637 \uB2E4\uD06C \uB85C\uBD80\uC2A4\uD0C0 (\uACE0\uC18C\uD55C \uBC84\uD130 \uB85C\uC2A4\uD305)",
        arabica: "\uB2EC\uB78F \uACE0\uC6D0 \uC544\uB77C\uBE44\uCE74 (\uC0B0\uB73B\uD558\uACE0 \uC740\uC740\uD55C \uAF43\uD5A5\uAE30)",
        traSen: "\uD558\uB178\uC774 \uC11C\uD638 \uC5F0\uAF43 \uB179\uCC28 (\uB9D1\uACE0 \uD5A5\uAE0B\uD55C \uB4B7\uB9DB)",
        traDao: "\uBCA0\uD2B8\uB0A8 \uACE0\uC0B0\uC9C0\uB300 \uD64D\uCC28 (\uACFC\uC77C\uD5A5 \uD48D\uBD80\uD55C \uD64D\uCC28)"
      },
      sweetnessLevel: "\uC5F0\uC720 \uB2F9\uB3C4 \uC870\uC808 (S\u1EEFa \u0110\u1EB7c \xD4ng Th\u1ECD)",
      sweetnessLabels: {
        zero: "0% \uBB34\uAC00\uB2F9 \uBE14\uB799\uCEE4\uD53C (C\xE0 Ph\xEA \u0110en)",
        light: "25% \uAE54\uB054\uD55C \uC800\uB2F9 (\xCDt ng\u1ECDt)",
        standard: "50% \uC815\uD1B5 \uD669\uAE08 \uBE44\uC728 (V\u1EEBa)",
        saigonSweet: "100% \uC0AC\uC774\uACF5 \uD604\uC9C0\uC758 \uCC10\uD55C \uB2EC\uCF64\uD568 (Ng\u1ECDt \u0111\u1EADm)"
      },
      iceLevel: "\uC5BC\uC74C \uC120\uD0DD (\u0110\xE1)",
      iceLabels: {
        crushed: "\uAC04 \uC5BC\uC74C \uAC00\uB4DD (\uAC00\uC7A5 \uC815\uD1B5\uC801\uC778 \uAE38\uAC70\uB9AC \uBC29\uC2DD)",
        cubes: "\uAC01\uC5BC\uC74C",
        hot: "\uB530\uB73B\uD55C \uC911\uD0D5 \uC2A4\uD0C0\uC77C"
      },
      toppings: "\uD06C\uB9BC \uD3FC \uBC0F \uD1A0\uD551",
      toppingsLabels: {
        none: "\uD1A0\uD551 \uC5C6\uC74C",
        eggCream: "\uD558\uB178\uC774\uC2DD \uCAC0\uB4DD\uD55C \uB178\uB978\uC790 \uD3FC (+110 kcal)",
        saltCream: "\uD6C4\uC5D0\uC2DD \uC9ED\uC9E4\uD558\uACE0 \uACE0\uC18C\uD55C \uC194\uD2B8\uD3FC (+85 kcal)",
        coconutSlush: "\uC0DD \uCF54\uCF54\uB11B \uBC00\uD06C \uC2AC\uB7EC\uC2DC (+95 kcal)",
        coffeeJelly: "\uC218\uC81C \uD751\uB2F9 \uCEE4\uD53C \uC824\uB9AC (+30 kcal)",
        peachSlices: "\uB2EC\uCF64 \uC544\uC0AD\uD55C \uD669\uB3C4 \uC2AC\uB77C\uC774\uC2A4 (+40 kcal)"
      },
      nutritionStats: {
        estimatedCalories: "\uC608\uC0C1 \uCD1D \uCE7C\uB85C\uB9AC",
        caffeineLevel: "\uCE74\uD398\uC778 \uD568\uB7C9",
        phinDripTime: "\uD540 \uCD94\uCD9C \uC18C\uC694 \uC2DC\uAC04"
      },
      streetSlangTitle: "\uD604\uC9C0 \uAE38\uAC70\uB9AC \uCE74\uD398 \uC8FC\uBB38 \uAFC0\uD301 \uBB38\uC7A5",
      slangQuote: "\u201CCho m\u1ED9t ly c\xE0 ph\xEA s\u1EEFa \u0111\xE1 nhi\u1EC1u \u0111\xE1 \xEDt ng\u1ECDt mang \u0111i!\u201D",
      listenSlang: "\uBCA0\uD2B8\uB0A8\uC5B4 \uC8FC\uBB38 \uBC1C\uC74C \uB4E3\uAE30",
      homeBrewGuideTitle: "\uC9D1\uC5D0\uC11C \uD540 \uCEE4\uD53C \uC644\uBCBD\uD558\uAC8C \uB0B4\uB9AC\uB294 4\uAC00\uC9C0 \uC6D0\uCE59",
      phinTip: "\uB728\uAC70\uC6B4 \uBB3C 20ml\uB97C \uBA3C\uC800 \uBD80\uC5B4 30\uCD08\uAC04 \uC6D0\uB450\uB97C \uBD88\uB9B0 \uD6C4, \uC18D \uB69C\uAED1\uC744 \uC0B4\uC9DD \uB204\uB974\uACE0 \uBB3C\uC744 \uAC00\uB4DD \uBD80\uC5B4 4~5\uBD84\uAC04 \uCC9C\uCC9C\uD788 \uCD94\uCD9C\uD558\uC138\uC694."
    },
    nightMarket: {
      badge: "\u{1F5FA}\uFE0F \uBC24\uC774 \uB418\uBA74 \uB354 \uB9DB\uC788\uB294 \uAC70\uB9AC",
      title: "\uBCA0\uD2B8\uB0A8 \uC57C\uC2DC\uC7A5 & \uBBF8\uC2DD \uAC70\uB9AC \uAC00\uC774\uB4DC",
      subtitle: "\uD558\uB178\uC774 \uAD6C\uC2DC\uAC00\uC9C0\uC758 \uB0AE\uC740 \uD50C\uB77C\uC2A4\uD2F1 \uC758\uC790\uBD80\uD130 \uD654\uB824\uD55C \uC0AC\uC774\uACF5\uC758 \uD574\uC0B0\uBB3C \uACE8\uBAA9\uAE4C\uC9C0.",
      filterRegion: "\uC9C0\uC5ED\uBCC4 \uD544\uD130",
      regions: {
        all: "\uBAA8\uB4E0 \uC9C0\uC5ED",
        north: "\uBD81\uBD80 (\uD558\uB178\uC774 / \uAD6C\uC2DC\uAC00\uC9C0)",
        central: "\uC911\uBD80 (\uD6C4\uC5D0 / \uB2E4\uB0AD / \uD638\uC774\uC548)",
        south: "\uB0A8\uBD80 (\uD638\uCC0C\uBBFC\uC2DC / \uC0AC\uC774\uACF5)",
        highlands: "\uACE0\uC6D0 \uC9C0\uB300 (\uC120\uC120\uD55C \uB2EC\uB78F)"
      },
      openingHours: "\uC6B4\uC601 \uC2DC\uAC04",
      transport: "\uAD50\uD1B5 \uBC0F \uCC3E\uC544\uAC00\uB294 \uBC95",
      signatureFood: "\uAF2D \uB9DB\uBD10\uC57C \uD560 \uC2DC\uADF8\uB2C8\uCC98 \uBA54\uB274",
      insiderTip: "\uD604\uC9C0\uC778\uB9CC \uC544\uB294 \uAFC0\uD301",
      streetSlangOrder: "\uD604\uC9C0 \uB178\uC810 \uC8FC\uBB38 \uD45C\uD604",
      listenOrderPhrase: "\uC8FC\uBB38 \uBC1C\uC74C \uB4E3\uAE30",
      viewRecipeButton: "\uC774 \uC694\uB9AC \uB808\uC2DC\uD53C \uBCF4\uAE30"
    },
    pantry: {
      badge: "\u{1F9C4} \uBCA0\uD2B8\uB0A8 \uBBF8\uC2DD\uC758 \uC601\uD63C",
      title: "\uBCA0\uD2B8\uB0A8 \uD5C8\uBE0C \uC0AC\uC804 & \uB9CC\uB2A5 \uD53C\uC2DC\uC18C\uC2A4(\uB291\uCC38) \uB7A9",
      subtitle: "\uB2E8\uB9DB\u30FB\uC2E0\uB9DB\u30FB\uC9E0\uB9DB\u30FB\uB9E4\uC6B4\uB9DB\u30FB\uAC10\uCE60\uB9DB\uC758 \uC644\uBCBD\uD55C \uC870\uD654. \uD478\uAFB8\uC625 \uC12C\uC758 \uD504\uB9AC\uBBF8\uC5C4 \uD53C\uC2DC\uC18C\uC2A4\uC640 \uC2F1\uC2F1\uD55C \uC0DD\uD5C8\uBE0C \uC774\uC57C\uAE30.",
      balancerTitle: "\uB9CC\uB2A5 \uB291\uCC38(N\u01B0\u1EDBc Ch\u1EA5m) \uC18C\uC2A4 \uD669\uAE08\uBE44\uC728 \uACC4\uC0B0\uAE30",
      balancerSubtitle: "\uC2AC\uB77C\uC774\uB354\uB97C \uC870\uC808\uD558\uC5EC \uC778\uBD84 \uC218\uC640 \uB0A8\uBD80/\uBD81\uBD80 \uCDE8\uD5A5\uC5D0 \uB9DE\uB294 \uD070\uC220\uACFC \uADF8\uB7A8 \uC218\uB97C \uC790\uB3D9\uC73C\uB85C \uACC4\uC0B0\uD574\uBCF4\uC138\uC694:",
      servingsCount: "\uB9CC\uB4E4 \uC778\uBD84 \uC218",
      tasteStyle: "\uC120\uD638\uD558\uB294 \uC9C0\uC5ED \uC2A4\uD0C0\uC77C",
      southernSweet: "\uB0A8\uBD80 \uC0AC\uC774\uACF5\uC2DD (\uB77C\uC784\uACFC \uB2E8\uB9DB\uC774 \uAC15\uC870\uB41C \uD654\uC0AC\uD55C \uB9DB)",
      northernSavory: "\uBD81\uBD80 \uD558\uB178\uC774\uC2DD (\uB9C8\uB298\uACFC \uAE4A\uC740 \uC561\uC813\uC758 \uC9ED\uC870\uB984\uD55C \uAC10\uCE60\uB9DB)",
      ingredientsRatio: "\uACC4\uC0B0\uB41C \uC7AC\uB8CC \uBE44\uC728",
      fishSauce: "\uD504\uB9AC\uBBF8\uC5C4 \uD53C\uC2DC\uC18C\uC2A4 (40\xB0N)",
      limeJuice: "\uC0DD \uB77C\uC784\uC999",
      sugar: "\uC124\uD0D5",
      warmWater: "\uBBF8\uC628\uC218 (\uC124\uD0D5 \uB179\uC774\uAE30\uC6A9)",
      garlicMinced: "\uB2E4\uC9C4 \uB9C8\uB298",
      chiliMinced: "\uC1A1\uC1A1 \uC36C \uBCA0\uD2B8\uB0A8 \uACE0\uCD94",
      tbspUnit: "\uD070\uC220 (tbsp)",
      clovesUnit: "\uCABD (\uB2E4\uC9C4 \uAC83)",
      chiliesUnit: "\uAC1C (\uC1A1\uC1A1 \uC36C \uAC83)",
      herbBibleTitle: "\uC2E0\uC120 \uD5C8\uBE0C \uB300\uBC31\uACFC (Rau Th\u01A1m)",
      herbBibleSubtitle: "\uBCA0\uD2B8\uB0A8 \uC2DD\uD0C1\uC744 \uC0B4\uC544 \uC228 \uC26C\uAC8C \uD558\uB294 \uD5A5\uAE0B\uD55C \uC8FC\uC5ED\uB4E4:",
      fishSauceGradeTitle: "\uD53C\uC2DC\uC18C\uC2A4 \uB77C\uBCA8\uC758 \u2018\uB3C4\uC218(\xB0N)\u2019\uB294 \uBB34\uC5C7\uC744 \uB73B\uD558\uB098\uC694?",
      fishSauceGradeDesc: "\xB0N\uC740 1\uB9AC\uD130\uB2F9 \uD3EC\uD568\uB41C \uCC9C\uC5F0 \uC9C8\uC18C(\uB2E8\uBC31\uC9C8) \uD568\uB7C9\uC744 \uB73B\uD569\uB2C8\uB2E4. \uC77C\uBC18 \uC694\uB9AC\uC6A9\uC73C\uB85C\uB294 30\xB0N\uC774\uBA74 \uCDA9\uBD84\uD558\uC9C0\uB9CC, \uB514\uD551 \uC18C\uC2A4\uB098 \uC2A4\uD504\uB9C1\uB864\uC6A9\uC73C\uB85C\uB294 40\xB0N 1\uCC28 \uCD94\uCD9C \uD53C\uC2DC\uC18C\uC2A4(\uD478\uAFB8\uC625\uC0B0 \uB4F1)\uB97C \uC0AC\uC6A9\uD574\uC57C \uC9E0\uB9DB\uC774 \uD280\uC9C0 \uC54A\uACE0 \uBD80\uB4DC\uB7EC\uC6B4 \uAC10\uCE60\uB9DB\uC744 \uC990\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    },
    favorites: {
      title: "\uB098\uC758 \uBCF4\uAD00\uD568 & \uB9C8\uC2A4\uD130\uD55C \uC694\uB9AC",
      subtitle: "\uB098\uB9CC\uC758 \uBCA0\uD2B8\uB0A8 \uC694\uB9AC \uB3C4\uC804\uAE30\uB97C \uAE30\uB85D\uD558\uACE0 \uC170\uD504 \uBC30\uC9C0\uB97C \uBAA8\uC544\uBCF4\uC138\uC694.",
      savedCount: "\uC800\uC7A5\uD55C \uC694\uB9AC",
      masteredCount: "\uB9C8\uC2A4\uD130\uD55C \uC694\uB9AC",
      emptyFavs: "\uC544\uC9C1 \uC800\uC7A5\uB41C \uC694\uB9AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC694\uB9AC \uD0D0\uC0C9 \uD0ED\uC5D0\uC11C \uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC694\uB9AC\uB97C \uCC3E\uC544\uBCF4\uC138\uC694!",
      exploreDishes: "\uC778\uAE30 \uC694\uB9AC \uB458\uB7EC\uBCF4\uAE30",
      tabs: {
        saved: "\uC800\uC7A5\uD55C \uC694\uB9AC",
        mastered: "\uB9C8\uC2A4\uD130 \uBC30\uC9C0"
      },
      conqueredDishes: "\uC804\uC124\uC758 \uBCA0\uD2B8\uB0A8 \uAE38\uAC70\uB9AC \uC694\uB9AC {total}\uAC1C \uC911 {count}\uAC1C \uC815\uBCF5",
      conqueredOf: "OF {total} CONQUERED",
      badgeCount: "\uB9C8\uC2A4\uD130 \uBC30\uC9C0 ({count})",
      viewRecipe: "\uB808\uC2DC\uD53C \uBCF4\uAE30",
      emptyFavTitle: "\uC800\uC7A5\uB41C \uBCA0\uD2B8\uB0A8 \uC694\uB9AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4",
      emptyFavDesc: "\uAE38\uAC70\uB9AC \uC74C\uC2DD \uCE74\uD0C8\uB85C\uADF8\uB97C \uB458\uB7EC\uBCF4\uACE0 \uB808\uC2DC\uD53C \uCE74\uB4DC\uC758 \uD558\uD2B8\uB97C \uB20C\uB7EC \uB098\uB9CC\uC758 \uC990\uACA8\uCC3E\uAE30\uB97C \uC644\uC131\uD574\uBCF4\uC138\uC694!",
      emptyFavButton: "\uB300\uD45C \uC694\uB9AC \uB458\uB7EC\uBCF4\uAE30"
    },
    navbar: {
      brandBadge: "\uBCA0\uD2B8\uB0A8 \uBBF8\uC2DD \uB300\uC0AC"
    },
    footer: {
      tagline: "\uC804 \uC138\uACC4 \uBCA0\uD2B8\uB0A8 \uC74C\uC2DD \uC560\uD638\uAC00\uB97C \uC704\uD55C \uC644\uBCBD\uD55C \uAE38\uC7A1\uC774: \uC815\uD655\uD55C g \uB2E8\uC704 \uB808\uC2DC\uD53C, \uB9C8\uD2B8 \uB300\uCCB4 \uC2DD\uC7AC\uB8CC, \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4/\uC778\uC2A4\uD134\uD2B8\uD31F \uD638\uD658, \uC57C\uC2DC\uC7A5 \uC8FC\uBB38 \uC74C\uC131 \uC548\uB0B4.",
      coreFeaturesTitle: "\uC571 \uC8FC\uC694 \uD2B9\uC9D5",
      featureRecipes: "16\uAC00\uC9C0 \uC815\uD1B5 \uBCA0\uD2B8\uB0A8 \uAE38\uAC70\uB9AC \uC74C\uC2DD\uC758 5\uAC1C \uAD6D\uC5B4 \uC815\uBC00 \uB808\uC2DC\uD53C",
      featureCaPhe: "\uBCA0\uD2B8\uB0A8 \uD540 \uB4DC\uB9BD \uCEE4\uD53C & \uC74C\uB8CC \uC5F0\uAD6C\uC2E4 \uC2DC\uBBAC\uB808\uC774\uD130",
      featureMarkets: "\uBCA0\uD2B8\uB0A8 6\uB300 \uBBF8\uC2DD \uC9C0\uC5ED\uACFC \uD604\uC9C0\uC5B4 \uC8FC\uBB38 \uBC1C\uC74C \uC624\uB514\uC624",
      featurePantry: "5\uB300 \uC0DD\uD5C8\uBE0C \uBC31\uACFC, \uD53C\uC2DC\uC18C\uC2A4 \uB3C4\uC218 \uAC00\uC774\uB4DC & \uB291\uCC38 \uC18C\uC2A4 \uACC4\uC0B0\uAE30",
      toolsTitle: "\uC8FC\uBC29 \uB9DE\uCDA4 \uD3B8\uC758 \uAE30\uB2A5",
      toolsDesc: "\uC804\uCCB4 \uD654\uBA74 \uD578\uC988\uD504\uB9AC \uC74C\uC131 \uC694\uB9AC \uBAA8\uB4DC, \uB2E8\uACC4\uBCC4 \uD0C0\uC774\uBA38, \uC544\uC2DC\uC548 \uB9C8\uD2B8 \uC810\uC6D0 \uC18C\uD1B5 \uCE74\uB4DC\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.",
      sisterAppsTitle: "\uC544\uC2DC\uC548 \uBBF8\uC2DD \uC720\uB2C8\uBC84\uC2A4 \u2022 \uC790\uB9E4 \uC571 \uC2DC\uB9AC\uC988",
      sisterAppsSubtitle: "\uB3D9\uC77C\uD55C \uBBF8\uC2DD \uAC1C\uBC1C\uD300\uC758 \uC5F4\uC815\uC73C\uB85C \uD0C4\uC0DD\uD588\uC2B5\uB2C8\uB2E4\u2014\uD074\uB9AD\uD558\uC5EC \uB458\uB7EC\uBCF4\uC138\uC694",
      copyrightTeam: "\uBCA0\uD2B8\uB0A8 \uD478\uB4DC \uB9C8\uC2A4\uD130"
    },
    common: {
      minutes: "\uBD84",
      quickShortcuts: "\uBE60\uB978 \uD544\uD130:",
      reset: "\uC7AC\uC124\uC815",
      audioPlaying: "\u{1F50A} \uC6D0\uC5B4\uBBFC \uBC1C\uC74C \uC7AC\uC0DD \uC911...",
      chefModeReady: "\uBCA0\uD2B8\uB0A8 \uC170\uD504 \uBAA8\uB4DC\uB97C \uC2DC\uC791\uD560\uAE4C\uC694?",
      chefModeDesc: "\uC804\uCCB4 \uD654\uBA74 \uC74C\uC131 \uC548\uB0B4 \uB2E8\uACC4, \uB0B4\uC7A5 \uD0C0\uC774\uBA38, \uC694\uB9AC\uC5D0 \uCD5C\uC801\uD654\uB41C \uC778\uD130\uD398\uC774\uC2A4",
      ingredientsReady: "{checked} / {total} \uC900\uBE44 \uC644\uB8CC",
      suggestedSubstitute: "\u{1F4A1} \uCD94\uCC9C \uB300\uCCB4 \uC2DD\uC7AC\uB8CC:",
      ratio: "\uBE44\uC728",
      shoppingGuide: "\u{1F6D2} \uAD6C\uB9E4 \uAC00\uC774\uB4DC:",
      dietaryLabels: {
        vegetarian: "\uCC44\uC2DD",
        glutenFree: "\uAE00\uB8E8\uD150\uD504\uB9AC",
        pescatarian: "\uD398\uC2A4\uCE74\uD14C\uB9AC\uC5B8"
      },
      calcTitle: "\u{1FAD7} \uB9CC\uB2A5 \uB291\uCC38(N\u01B0\u1EDBc Ch\u1EA5m) \uC18C\uC2A4 \uD669\uAE08\uBE44\uC728 \uACC4\uC0B0\uAE30",
      calcDesc: "\uC2A4\uD504\uB9C1\uB864, \uBD84\uC9DC, \uBC18\uC384\uC624 \uB9CC\uB2A5 \uB514\uD551\uC18C\uC2A4! \uB9C8\uB298\uACFC \uACE0\uCD94\uAC00 \uAC00\uB77C\uC549\uC9C0 \uC54A\uACE0 \uB3D9\uB3D9 \uB728\uB294 \uD669\uAE08 \uBE44\uC728\uC744 \uC790\uB3D9 \uACC4\uC0B0\uD569\uB2C8\uB2E4.",
      calcServings: "\uC778\uBD84 \uC218 \uC870\uC808",
      calcPersonUnit: "\uC778\uBD84",
      calcSolo: "1\uC778\uBD84 \uD63C\uBC25",
      calcFamily: "4\uC778 \uAC00\uC871",
      calcParty: "10\uC778 \uD30C\uD2F0",
      calcFloatingTipTitle: "\uB9C8\uB298\uACFC \uACE0\uCD94\uAC00 \uB728\uB294 \uC170\uD504\uC758 \uBE44\uBC95",
      calcFloatingTip: "\uBC18\uB4DC\uC2DC \uBBF8\uC628\uC218\uC5D0 \uC124\uD0D5\uC744 \uC644\uC804\uD788 \uB179\uC778 \uB4A4 \uD53C\uC2DC\uC18C\uC2A4\uC640 \uB77C\uC784\uC999\uC744 \uB123\uC73C\uC138\uC694. \uB2E4\uC9C4 \uB9C8\uB298\uACFC \uACE0\uCD94\uB294 [\uB9E8 \uB9C8\uC9C0\uB9C9]\uC5D0 \uB123\uC5B4\uC57C \uBC00\uB3C4 \uCC28\uC774\uB85C \uC778\uD574 \uBCF4\uC11D \uAC19\uC740 \uBD89\uC740 \uC18C\uC2A4 \uC704\uC5D0 \uB208\uAF43\uCC98\uB7FC \uC608\uC058\uAC8C \uB739\uB2C8\uB2E4!",
      calcProportionsTitle: "\uACC4\uC0B0\uB41C \uD669\uAE08 \uBE44\uC728",
      calcFinelyMinced: "\uACF1\uAC8C \uB2E4\uC9C8\uC218\uB85D \uB354 \uC798 \uB739\uB2C8\uB2E4",
      calcSpiceAdjust: "\uAE30\uD638\uC5D0 \uB530\uB77C \uB9E4\uC6B4\uB9DB \uC870\uC808",
      herbShopButton: "\uC544\uB9C8\uC874\uC5D0\uC11C \uD5C8\uBE0C \uCC3E\uAE30",
      herbFlavorProfile: "\uD48D\uBBF8 \uD2B9\uC9D5",
      herbBestMatched: "\uC5B4\uC6B8\uB9AC\uB294 \uC694\uB9AC",
      herbWesternSub: "\u26A1 \uC77C\uBC18 \uB9C8\uD2B8 \uAC04\uD3B8 \uB300\uCCB4 \uD301:",
      fishSauceGuideTitle: "\u{1F41F} \uD53C\uC2DC\uC18C\uC2A4 \uB3C4\uC218(\xB0N) \uC644\uC804 \uC815\uBCF5 \uAC00\uC774\uB4DC: \uB77C\uBCA8 \uC77D\uB294 \uBC95",
      fishSauceGuideDesc: "\uB3C4\uC218\uAC00 \uB192\uC744\uC218\uB85D \uCC9C\uC5F0 \uB2E8\uBC31\uC9C8 \uC9C8\uC18C \uD568\uB7C9\uC774 \uD48D\uBD80\uD569\uB2C8\uB2E4. \uB514\uD551\uC6A9\uACFC \uBCF6\uC74C\uC6A9\uC5D0 \uB9DE\uCDB0 \uC0AC\uC6A9\uD558\uBA74 \uC694\uB9AC\uC758 \uC644\uC131\uB3C4\uAC00 \uB2EC\uB77C\uC9D1\uB2C8\uB2E4!",
      fishSauceIdealUsage: "\uCD94\uCC9C \uC6A9\uB3C4",
      amazonSearch: "\uC544\uB9C8\uC874 \uAC80\uC0C9",
      pantryProductsTitle: "\u{1F96B} \uD544\uC218 \uC591\uB150 & \uC2DD\uC7AC\uB8CC \uCD94\uCC9C",
      amazonPrime: "Amazon Prime"
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  translations
});
