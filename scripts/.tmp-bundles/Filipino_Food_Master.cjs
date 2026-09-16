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

// ../Filipino Food Master/src/data/recipes.ts
var recipes_exports = {};
__export(recipes_exports, {
  getRecipeById: () => getRecipeById,
  getRecipeBySlug: () => getRecipeBySlug,
  recipes: () => recipes
});
module.exports = __toCommonJS(recipes_exports);

// ../Filipino Food Master/src/data/recipes/sisig.ts
var sisig = {
  id: "sisig",
  slug: "sisig",
  title: {
    "zh-TW": "\u6B63\u5B97\u9435\u677F\u9165\u8106\u5E2D\u897F\u683C (Pork Sisig)",
    "en": "Authentic Sizzling Pork Sisig",
    "fil": "Sizzling Pork Sisig ng Pampanga",
    "ja": "\u672C\u5834\u9244\u677F\u30B7\u30B7\u30B0\uFF08\u8C5A\u8089\u3068\u30EC\u30D0\u30FC\u306E\u30AB\u30EA\u30AB\u30EA\u7092\u3081\uFF09",
    "ko": "\uC815\uD1B5 \uC9C0\uAE00\uC9C0\uAE00 \uD3EC\uD06C \uC2DC\uC2DC\uADF8 (\uCCA0\uD310 \uB3FC\uC9C0\uACE0\uAE30 \uBCF6\uC74C)"
  },
  subtitle: {
    "zh-TW": "\u9F90\u57F9\u6B50\u7F8E\u98DF\u4E4B\u90FD\u50B3\u5947\u30FB\u71B1\u6C23\u6CB8\u9A30\u751F\u86CB\u6D41\u5FC3\u30FB\u91D1\u6854\u8F9B\u9999\u9165\u8106\u72C2\u6F6E",
    "en": "Culinary Capital Legend with Runny Egg, Fresh Calamansi & Crispy Pork",
    "fil": "Alamat ng Pampanga na may itlog, sariwang sili at kalamansi",
    "ja": "\u30D1\u30F3\u30D1\u30F3\u30AC\u5DDE\u767A\u7965\u30FB\u9999\u3070\u3057\u3044\u8C5A\u8089\u3068\u534A\u719F\u5375\u3001\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u306E\u723D\u5FEB\u611F",
    "ko": "\uD31C\uD321\uAC00 \uC804\uD1B5\uC758 \uB9DB, \uC9C0\uAE00\uAC70\uB9AC\uB294 \uBC18\uC219 \uACC4\uB780\uACFC \uAE54\uB77C\uB9CC\uC2DC\uC758 \uBC14\uC0AD\uD55C \uC870\uD654"
  },
  tagline: {
    "zh-TW": "\u540D\u5EDA\u5B89\u6771\u5C3C\u6CE2\u767B\u76DB\u8B9A\u300C\u8DB3\u4EE5\u6539\u8B8A\u4E16\u754C\u7684\u9748\u9B42\u4E0B\u9152\u83DC\u300D\uFF0C\u8106\u76AE\u8207\u9178\u9999\u4EA4\u7E54",
    "en": "Praised by Anthony Bourdain as a world-changing dish: sizzling, crunchy, porky perfection",
    "fil": "Ang pambansang pulutan at ulam na ipinagmamalaki sa buong mundo",
    "ja": "\u30A2\u30F3\u30BD\u30CB\u30FC\u30FB\u30DC\u30FC\u30C7\u30A3\u30F3\u3082\u7D76\u8CDB\u3057\u305F\u30D5\u30A3\u30EA\u30D4\u30F3\u6700\u5F37\u306E\u56FD\u6C11\u7684\u30D3\u30FC\u30EB\u306E\u304A\u4F9B",
    "ko": "\uC564\uC11C\uB2C8 \uBCF4\uB385\uC774 \uADF9\uCC2C\uD55C \uC138\uACC4 \uCD5C\uACE0\uC758 \uB9E5\uC8FC \uC548\uC8FC\uC774\uC790 \uBC25\uB3C4\uB451"
  },
  heroImage: "/images/sisig.jpg",
  difficulty: "medium",
  prepTimeMinutes: 20,
  cookTimeMinutes: 25,
  defaultServings: 3,
  caloriesPerServing: 520,
  category: "sizzling",
  dietaryTags: ["classic"],
  supportedCookware: ["traditional", "airFryer"],
  culture: {
    originRegion: {
      "zh-TW": "\u5442\u5B8B\u5CF6\u30FB\u9F90\u57F9\u6B50\u7701\u5B89\u8D6B\u52D2\u65AF\u5E02 (Angeles City, Pampanga)",
      "en": "Angeles City, Pampanga (Culinary Capital)",
      "fil": "Lungsod ng Angeles, Pampanga",
      "ja": "\u30D1\u30F3\u30D1\u30F3\u30AC\u5DDE\u30A2\u30F3\u30D8\u30EC\u30B9\u5E02",
      "ko": "\uD31C\uD321\uAC00\uC8FC \uC559\uD5EC\uB808\uC2A4 \uC2DC"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u5B89\u8D6B\u52D2\u65AF Aling Lucing Sisig \u5275\u59CB\u8001\u8857", "en": "Aling Lucing Sisig Crossing", "fil": "Aling Lucing Sisig Crossing", "ja": "\u30A2\u30EA\u30F3\u30FB\u30EB\u30B7\u30F3\u767A\u7965\u5730", "ko": "\uC54C\uB9C1 \uB8E8\uC2F1 \uC2DC\uC2DC\uADF8 \uBCF8\uC810 \uAC70\uB9AC" },
      { "zh-TW": "\u99AC\u5C3C\u62C9\u6E6F\u90FD Ugbo \u7F8E\u98DF\u8857", "en": "Ugbo Street Food Strip, Manila", "fil": "Ugbo St., Tondo Maynila", "ja": "\u30DE\u30CB\u30E9\u30FB\u30A6\u30B0\u30DC\u5C4B\u53F0\u8857", "ko": "\uB9C8\uB2D0\uB77C \uC6B0\uADF8\uBCF4 \uC57C\uC2DC\uC7A5" }
    ],
    historyStory: {
      "zh-TW": "Sisig \u6700\u65E9\u53EA\u662F\u5B55\u5A66\u98DF\u7528\u7684\u9178\u5473\u6DBC\u62CC\u83DC\u30021970 \u5E74\u4EE3\uFF0C\u4F4D\u65BC\u5B89\u8D6B\u52D2\u65AF\u9435\u8DEF\u65C1\u7684\u6524\u8CA9\u5973\u4E3B\u4EBA Lucia Cunanan\uFF08\u4EBA\u7A31 Aling Lucing\uFF09\u5229\u7528\u9130\u8FD1\u514B\u62C9\u514B\u7F8E\u8ECD\u57FA\u5730\u5EE2\u68C4\u7684\u8C6C\u982D\u8089\u3001\u8C6C\u8033\u6735\u8207\u8C6C\u81C9\u8089\uFF0C\u5148\u6C34\u716E\u53BB\u8165\u3001\u70AD\u706B\u70E4\u7126\u8106\u5F8C\u5207\u788E\uFF0C\u518D\u8207\u6D0B\u8525\u3001\u809D\u91AC\u548C\u91D1\u6854\u9AD8\u6EAB\u7FFB\u7092\uFF0C\u8A95\u751F\u4E86\u9707\u64BC\u4E16\u754C\u7684\u73FE\u4EE3\u9435\u677F Sisig\uFF01",
      "en": 'Originally an ancient sour salad for expectant mothers, modern Sisig was revolutionized in the 1970s by Lucia Cunanan ("Aling Lucing") in Angeles City. She took surplus pig heads from the nearby US Clark Air Base, boiled, charred them over hot charcoal, minced, and tossed with chicken liver, onions, and calamansi on screaming-hot cast iron.',
      "fil": "Pinauso ni Aling Lucing Cunanan sa Angeles, Pampanga noong 1970s gamit ang pisngi at tainga ng baboy na inihaw at tinadtad nang pino, hinaluan ng atay at kalamansi sa mainit na sizzling plate.",
      "ja": "1970\u5E74\u4EE3\u306B\u30D1\u30F3\u30D1\u30F3\u30AC\u5DDE\u306E\u30A2\u30EA\u30F3\u30FB\u30EB\u30B7\u30F3\u3055\u3093\u304C\u7C73\u8ECD\u57FA\u5730\u304B\u3089\u4F59\u5270\u3068\u306A\u3063\u305F\u8C5A\u982D\u8089\u3092\u6D3B\u304B\u3057\u3001\u716E\u3066\u70AD\u706B\u3067\u9999\u3070\u3057\u304F\u713C\u304D\u3001\u7D30\u304B\u304F\u523B\u3093\u3067\u30EC\u30D0\u30FC\u30DA\u30FC\u30B9\u30C8\u3084\u67D1\u6A58\u3068\u7092\u3081\u5408\u308F\u305B\u305F\u306E\u304C\u73FE\u4EE3\u30B7\u30B7\u30B0\u306E\u8D77\u6E90\u3067\u3059\u3002",
      "ko": "1970\uB144\uB300 \uD31C\uD321\uAC00\uC758 \uC54C\uB9C1 \uB8E8\uC2F1\uC774 \uBBF8\uAD70 \uAE30\uC9C0\uC5D0\uC11C \uB098\uC628 \uB3FC\uC9C0\uBA38\uB9AC \uBD80\uC704\uB97C \uC22F\uBD88\uC5D0 \uAD6C\uC6CC \uC798\uAC8C \uB2E4\uC9C4 \uD6C4, \uB2ED\uAC04\uACFC \uC591\uD30C, \uAE54\uB77C\uB9CC\uC2DC\uC640 \uD568\uAED8 \uB728\uAC70\uC6B4 \uCCA0\uD310\uC5D0 \uBCF6\uC544\uB0B4\uBA70 \uC804\uC124\uC774 \uC2DC\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
    },
    filipinoScript: "Sizzling Sisig na Baboy",
    filipinoPhonetics: "See-zling See-sig nah Bah-boy",
    audioPronunciationText: "Pabili po ng isang sizzling pork sisig na may itlog at maanghang!"
  },
  ingredients: [
    {
      id: "pork-belly-ear",
      name: { "zh-TW": "\u5E36\u76AE\u8C6C\u4E94\u82B1\u8207\u8C6C\u8033\u6735 (\u80A5\u7626\u8106\u517C\u5177)", "en": "Pork Belly & Pork Ears (Cooked & Minced)", "fil": "Liempo at Tainga ng Baboy", "ja": "\u8C5A\u30D0\u30E9\u8089\u3068\u8C5A\u8033\uFF08\u8339\u3067\u3066\u7D30\u5207\u308C\uFF09", "ko": "\uB3FC\uC9C0 \uC0BC\uACB9\uC0B4 \uBC0F \uB3FC\uC9C0 \uADC0 (\uC798\uAC8C \uB2E4\uC9D0)" },
      amount: 500,
      unitMetric: "g",
      unitUS: "1.1 lb",
      isKeyFlavor: true,
      filipinoName: "Liempo at Tainga ng Baboy",
      filipinoPronunciation: "Lee-yem-poh aht Tah-eeng-ah nang Bah-boy",
      substitute: {
        substituteName: { "zh-TW": "\u7D14\u5E36\u76AE\u8C6C\u4E94\u82B1\u8089\u4E01\uFF08\u82E5\u7121\u8C6C\u8033\u53EF\u7528\u70B8\u8C6C\u76AE\u788E\u589E\u8106\uFF09", "en": "Skin-on Pork Belly + Crushed Chicharon for crunch", "fil": "Purong Liempo na may Chicharon", "ja": "\u76AE\u4ED8\u304D\u8C5A\u30D0\u30E9\u8089 \uFF0B \u7815\u3044\u305F\u30C1\u30C1\u30E3\u30ED\u30F3\uFF08\u8C5A\u76AE\u63DA\u3052\uFF09", "ko": "\uAECD\uC9C8 \uC788\uB294 \uC0BC\uACB9\uC0B4 + \uBD80\uC21C \uCE58\uCC28\uB860(\uB3FC\uC9C0\uAECD\uB370\uAE30 \uD280\uAE40)" },
        ratio: "1:1",
        explanation: { "zh-TW": "\u8C6C\u8033\u6735\u63D0\u4F9B\u8EDF\u9AA8\u723D\u8106\u611F\uFF0C\u82E5\u8CB7\u4E0D\u5230\u8C6C\u8033\uFF0C\u53EF\u5168\u7528\u4E94\u82B1\u8089\uFF0C\u8D77\u934B\u524D\u62CC\u5165\u58D3\u788E\u7684\u9165\u8106\u70B8\u8C6C\u76AE\uFF08Chicharon\uFF09\uFF01", "en": "Pork ears give cartilage crunch. If unavailable, use pork belly and fold in crushed crispy chicharon right before serving.", "fil": "Kung walang tainga, gumamit ng chicharon para sa malutong na texture.", "ja": "\u8C5A\u8033\u306E\u8EDF\u9AA8\u306E\u30B3\u30EA\u30B3\u30EA\u611F\u306E\u4EE3\u308F\u308A\u306B\u3001\u8C5A\u76AE\u30B9\u30CA\u30C3\u30AF\uFF08\u30C1\u30C1\u30E3\u30ED\u30F3\uFF09\u3092\u7815\u3044\u3066\u52A0\u3048\u308B\u3068\u5B8C\u74A7\u3067\u3059\u3002", "ko": "\uB3FC\uC9C0 \uADC0\uC758 \uC624\uB3C5\uC624\uB3C5\uD55C \uC2DD\uAC10 \uB300\uC2E0 \uBC14\uC0AD\uD55C \uCE58\uCC28\uB860 \uACFC\uC790\uB97C \uBD80\uC218\uC5B4 \uB123\uC73C\uBA74 \uD6CC\uB96D\uD558\uAC8C \uB300\uCCB4\uB429\uB2C8\uB2E4." },
        whereToBuy: { "zh-TW": "\u50B3\u7D71\u5E02\u5834\u8089\u6524\u6216\u4E9E\u6D32\u8D85\u5E02\u8089\u54C1\u5340", "en": "Asian butcher, Seafood City, or Mexican carniceria", "fil": "Palengke o butcher shop", "ja": "\u30A2\u30B8\u30A2\u7CBE\u8089\u5E97\u307E\u305F\u306F\u901A\u8CA9", "ko": "\uC815\uC721\uC810 \uB610\uB294 \uC544\uC2DC\uC548 \uB9C8\uD2B8" }
      }
    },
    {
      id: "chicken-liver",
      name: { "zh-TW": "\u65B0\u9BAE\u96DE\u809D (\u6162\u714E\u6417\u788E\u6210\u5929\u7136\u6FC3\u91AC)", "en": "Chicken Liver (Cooked & Minced/Mashed)", "fil": "Atay ng Manok", "ja": "\u9D8F\u30EC\u30D0\u30FC\uFF08\u30BD\u30C6\u30FC\u3057\u3066\u7C97\u304F\u6F70\u3059\uFF09", "ko": "\uB2ED \uAC04 (\uAD6C\uC6CC\uC11C \uC73C\uAE78)" },
      amount: 100,
      unitMetric: "g",
      unitUS: "3.5 oz",
      isKeyFlavor: true,
      filipinoName: "Atay ng Manok",
      filipinoPronunciation: "Ah-tie nang Mah-nok",
      substitute: {
        substituteName: { "zh-TW": "\u5E02\u552E\u512A\u8CEA\u6CD5\u5F0F/\u83F2\u5F0F\u96DE\u809D\u91AC\u7F50\u982D (Liver Spread)", "en": "Canned Liver Spread (Reno brand)", "fil": "Reno Liver Spread", "ja": "\u7F36\u8A70\u30EC\u30D0\u30FC\u30B9\u30D7\u30EC\u30C3\u30C9\uFF08Reno\uFF09", "ko": "\uB808\uB178(Reno) \uCE94 \uAC04 \uC2A4\uD504\uB808\uB4DC" },
        ratio: "3 \u5927\u5319 (3 tbsp)",
        explanation: { "zh-TW": "\u83F2\u5F8B\u8CD3\u4EBA\u5E38\u7528 Reno \u96DE\u809D\u91AC\u7F50\u982D\u4EE3\u66FF\u65B0\u9BAE\u96DE\u809D\uFF0C\u98A8\u5473\u66F4\u6FC3\u9187\u5E36\u6709\u5FAE\u751C\uFF0C\u975E\u5E38\u5730\u9053\uFF01", "en": "Filipino households frequently use Reno Liver Spread canned paste for instant rich umami.", "fil": "Pwedeng gumamit ng Reno liver spread para mas mabilis.", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u306E\u5BB6\u5EAD\u3067\u306F\u7F36\u8A70\u306EReno\u30EC\u30D0\u30FC\u30B9\u30D7\u30EC\u30C3\u30C9\u3092\u4F7F\u3046\u306E\u304C\u4E00\u822C\u7684\u3067\u3059\u3002", "ko": "\uD544\uB9AC\uD540 \uD604\uC9C0 \uAC00\uC815\uC5D0\uC11C\uB294 \uAC04\uD3B8\uD558\uAC8C \uB808\uB178 \uCE94 \uAC04 \uC2A4\uD504\uB808\uB4DC\uB97C \uC560\uC6A9\uD569\uB2C8\uB2E4." },
        whereToBuy: { "zh-TW": "\u6771\u5357\u4E9E\u8D85\u5E02\u6216\u7DB2\u8CFC", "en": "Southeast Asian aisles or Amazon", "fil": "Sari-sari store o grocery", "ja": "\u30A2\u30B8\u30A2\u98DF\u6750\u5E97", "ko": "\uC544\uC2DC\uC548 \uC2DD\uB8CC\uD488\uC810 \uB610\uB294 \uC628\uB77C\uC778" }
      }
    },
    {
      id: "red-onion",
      name: { "zh-TW": "\u7D05\u6D0B\u8525 (\u5207\u7D30\u4E01)", "en": "Red Onion (Finely Chopped)", "fil": "Pulang Sibuyas", "ja": "\u8D64\u7389\u306D\u304E\uFF08\u307F\u3058\u3093\u5207\u308A\uFF09", "ko": "\uC801\uC591\uD30C (\uC798\uAC8C \uB2E4\uC9D0)" },
      amount: 1.5,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Pulang Sibuyas",
      filipinoPronunciation: "Poo-lang See-boo-yas"
    },
    {
      id: "siling-labuyo",
      name: { "zh-TW": "\u83F2\u5F8B\u8CD3\u9CE5\u773C\u5C0F\u8FA3\u6912 (\u5207\u788E)", "en": "Philippine Bird's Eye Chilies (Siling Labuyo)", "fil": "Siling Labuyo", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u7523 \u5C0F\u5510\u8F9B\u5B50\uFF08\u30B7\u30EA\u30F3\u30FB\u30E9\u30D6\u30E8\uFF09", "ko": "\uD544\uB9AC\uD540 \uC950\uB625\uACE0\uCD94 (\uC2E4\uB9C1 \uB77C\uBD80\uC694)" },
      amount: 4,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Siling Labuyo",
      filipinoPronunciation: "See-leeng Lah-boo-yoh"
    },
    {
      id: "calamansi",
      name: { "zh-TW": "\u65B0\u9BAE\u56DB\u5B63\u67D1\u6854 (\u5C0D\u534A\u5207\u958B\u64E0\u6C41)", "en": "Fresh Calamansi (Halved for Squeezing)", "fil": "Sariwang Kalamansi", "ja": "\u65B0\u9BAE\u306A\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\uFF08\u679C\u6C41\uFF09", "ko": "\uC2E0\uC120\uD55C \uAE54\uB77C\uB9CC\uC2DC (\uBC18\uC73C\uB85C \uC790\uB984)" },
      amount: 5,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Kalamansi",
      filipinoPronunciation: "Kah-lah-mahn-see"
    },
    {
      id: "cane-vinegar",
      name: { "zh-TW": "\u5927\u809A\u5A46\u7518\u8517\u767D\u918B", "en": "Philippine Cane Vinegar (Sukang Maasim)", "fil": "Sukang Maasim", "ja": "\u30B5\u30C8\u30A6\u30AD\u30D3\u9162", "ko": "\uC0AC\uD0D5\uC218\uC218 \uC2DD\uCD08" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      filipinoName: "Sukang Maasim",
      filipinoPronunciation: "Soo-kang Mah-ah-sim"
    },
    {
      id: "soy-sauce",
      name: { "zh-TW": "\u83F2\u5F8B\u8CD3\u7D14\u91C0\u9020\u91AC\u6CB9 (Toyo)", "en": "Philippine Soy Sauce (Toyo)", "fil": "Toyo", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u91A4\u6CB9\uFF08\u30C8\u30E8\uFF09", "ko": "\uD544\uB9AC\uD540 \uC591\uC870\uAC04\uC7A5 (\uD1A0\uC694)" },
      amount: 1.5,
      unitMetric: "tbsp",
      unitUS: "1.5 tbsp",
      filipinoName: "Toyo",
      filipinoPronunciation: "Toh-yoh"
    },
    {
      id: "mayonnaise",
      name: { "zh-TW": "\u7F8E\u4E43\u6ECB (\u73FE\u4EE3\u99AC\u5C3C\u62C9\u6ED1\u9806\u6D41\u6D3E)", "en": "Mayonnaise (Manila Creamy Style)", "fil": "Mayonesa", "ja": "\u30DE\u30E8\u30CD\u30FC\u30BA\uFF08\u30AF\u30EA\u30FC\u30DF\u30FC\u6D3E\uFF09", "ko": "\uB9C8\uC694\uB124\uC988 (\uD604\uB300 \uB9C8\uB2D0\uB77C \uC2A4\uD0C0\uC77C)" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      filipinoName: "Mayonesa",
      filipinoPronunciation: "Mah-yoh-neh-sah"
    },
    {
      id: "egg",
      name: { "zh-TW": "\u65B0\u9BAE\u751F\u96DE\u86CB (\u6253\u5728\u6EFE\u71D9\u9435\u677F\u4E2D\u592E)", "en": "Fresh Egg (Cracked onto Sizzling Plate)", "fil": "Sariwang Itlog", "ja": "\u751F\u5375\uFF08\u71B1\u3005\u9244\u677F\u306E\u771F\u3093\u4E2D\u306B\u843D\u3068\u3059\uFF09", "ko": "\uC2E0\uC120\uD55C \uC0DD\uB780 (\uB728\uAC70\uC6B4 \uCCA0\uD310 \uC911\uC559\uC5D0 \uC62C\uB9BC)" },
      amount: 1,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Itlog",
      filipinoPronunciation: "Eet-log"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u6C34\u716E\u4E94\u82B1\u8089\u8207\u8C6C\u8033\u719F\u900F\u53BB\u8165", "en": "Boil & Tenderize Pork Belly and Ears", "fil": "Pakuluan ang Liempo at Tainga", "ja": "\u8C5A\u8089\u3068\u8C5A\u8033\u3092\u4E0B\u8339\u3067\u3057\u3066\u81ED\u307F\u3092\u53D6\u308B", "ko": "\uB3FC\uC9C0 \uC0BC\uACB9\uC0B4\uACFC \uADC0\uB97C \uD479 \uC0B6\uC544 \uC7A1\uB0B4 \uC81C\uAC70" },
      instruction: {
        "zh-TW": "\u5927\u6E6F\u934B\u4E2D\u653E\u5165\u4E94\u82B1\u8089\u584A\u3001\u6D17\u6DE8\u8C6C\u8033\uFF0C\u52A0\u5165\u6E05\u6C34\u6DF9\u904E\uFF0C\u653E\u5165\u62CD\u6241\u6574\u9846\u849C\u30012\u7247\u6708\u6842\u8449\u8207 1 \u8336\u5319\u9ED1\u80E1\u6912\u7C92\u3002\u5927\u706B\u716E\u6CB8\u5F8C\u6488\u9664\u6D6E\u6CAB\uFF0C\u8F49\u4E2D\u5C0F\u706B\u71C9\u716E 35-40 \u5206\u9418\uFF0C\u76F4\u5230\u7B77\u5B50\u80FD\u8F15\u6613\u7A7F\u900F\u8C6C\u76AE\uFF0C\u6488\u51FA\u5FB9\u5E95\u701D\u4E7E\u6C34\u5206\u667E\u6DBC\u3002",
        "en": "In a pot, submerge pork belly and cleaned ears in water with crushed garlic cloves, 2 bay leaves, and 1 tsp black peppercorns. Bring to a boil, skim scum, and simmer 35-40 mins until skin is tender. Drain thoroughly and pat dry with paper towels.",
        "fil": "Pakuluan ang liempo at tainga kasama ang bawang, dahon ng laurel, at paminta nang 35-40 minuto hanggang lumambot. Patuyuin nang mabuti.",
        "ja": "\u934B\u306B\u8C5A\u8089\u3001\u8C5A\u8033\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u30ED\u30FC\u30EA\u30A82\u679A\u3001\u9ED2\u80E1\u6912\u3092\u5165\u308C\u3001\u30A2\u30AF\u3092\u53D6\u308A\u306A\u304C\u3089\u5F31\u706B\u3067\u7D0440\u5206\u716E\u8FBC\u307F\u307E\u3059\u3002\u53D6\u308A\u51FA\u3057\u305F\u3089\u6C34\u5206\u3092\u30DA\u30FC\u30D1\u30FC\u3067\u3057\u3063\u304B\u308A\u62ED\u304D\u53D6\u308A\u307E\u3059\u3002",
        "ko": "\uB0C4\uBE44\uC5D0 \uB3FC\uC9C0\uACE0\uAE30\uC640 \uADC0, \uD1B5\uB9C8\uB298, \uC6D4\uACC4\uC218\uC78E 2\uC7A5, \uD1B5\uD6C4\uCD94\uB97C \uB123\uACE0 35~40\uBD84\uAC04 \uD479 \uC0B6\uC544\uC90D\uB2C8\uB2E4. \uAC74\uC838\uB0B4\uC5B4 \uD0A4\uCE5C\uD0C0\uC6D4\uB85C \uBB3C\uAE30\uB97C \uC644\uC804\uD788 \uC81C\uAC70\uD569\uB2C8\uB2E4."
      },
      durationSeconds: 2400,
      image: "/images/sisig-step1.jpg",
      crucialTips: {
        "zh-TW": "\u8089\u76AE\u8868\u9762\u7684\u6C34\u5206\u5FC5\u9808\u5FB9\u5E95\u5438\u4E7E\uFF0C\u5F8C\u7E8C\u714E\u70B8\u6216\u6C23\u70B8\u624D\u80FD\u7206\u51FA\u5982\u7206\u7C73\u82B1\u822C\u7684\u5927\u6C34\u6CE1\u9165\u8106\u5916\u76AE\uFF01",
        "en": "The skin must be completely dry before roasting/frying to achieve maximum blistering crunch!",
        "fil": "Kailangang tuyong-tuyo ang balat bago i-ihaw o iprito para lumutong nang husto.",
        "ja": "\u76AE\u8868\u9762\u306E\u6C34\u5206\u3092\u3057\u3063\u304B\u308A\u62ED\u304D\u53D6\u308B\u3053\u3068\u304C\u3001\u5F8C\u306E\u30AB\u30EA\u30AB\u30EA\u98DF\u611F\u3092\u751F\u3080\u6700\u5927\u306E\u79D8\u8A23\u3067\u3059\u3002",
        "ko": "\uAECD\uC9C8 \uD45C\uBA74\uC758 \uBB3C\uAE30\uB97C \uC644\uBCBD\uD788 \uB9D0\uB824\uC57C \uBC14\uC0AD\uD558\uAC8C \uBD80\uD480\uC5B4 \uC624\uB974\uB294 \uD06C\uB9AC\uC2A4\uD53C \uC2DD\uAC10\uC774 \uC644\uC131\uB429\uB2C8\uB2E4."
      }
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u9AD8\u6EAB\u714E\u70E4\u7206\u51FA\u91D1\u9EC3\u7126\u8106\u5916\u76AE", "en": "Broil, Grill or Air Fry until Ultra-Crispy", "fil": "Ihawin o I-Air Fry Hanggang Malutong", "ja": "\u9999\u3070\u3057\u304F\u713C\u304D\u4E0A\u3052\u3066\u76AE\u3092\u30AB\u30EA\u30AB\u30EA\u306B", "ko": "\uAECD\uC9C8\uC744 \uB178\uB987\uD558\uACE0 \uADF9\uB3C4\uB85C \uBC14\uC0AD\uD558\uAC8C \uAD7D\uAE30" },
      instruction: {
        "zh-TW": "\u3010\u50B3\u7D71\u5E73\u5E95\u934B/\u70E4\u7DB2\u6CD5\u3011\u5E73\u5E95\u934B\u4E0B\u5C11\u8A31\u6CB9\u4E2D\u5927\u706B\u714E\u4E94\u82B1\u8089\u584A\uFF0C\u5C07\u8089\u76AE\u671D\u4E0B\u58D3\u714E\uFF0C\u7206\u51FA\u91D1\u9EC3\u8106\u76AE\uFF1B\u6216\u7F6E\u65BC\u6728\u70AD\u70E4\u7DB2\u7FFB\u70E4\u81F3\u5E36\u6709\u8A98\u4EBA\u70AD\u9999\u8207\u5FAE\u7126\u3002\u3010\u6C23\u70B8\u934B\u6A21\u5F0F\u8ACB\u53C3\u898B\u5207\u63DB\u3011\u3002\u714E\u8106\u5F8C\u593E\u51FA\uFF0C\u5207\u6210 0.5 \u516C\u5206\u7684\u7D30\u5C0F\u788E\u4E01\u3002",
        "en": "Traditional method: Pan-sear the boiled pork belly in a hot skillet skin-side down until blistered and golden, or grill over hot charcoal for authentic smoky char. Once cool enough to handle, finely chop all meat and ears into small dice (approx. 0.5cm).",
        "fil": "Iprito o ihawin ang liempo at tainga hanggang maging malutong at tustado ang balat. Hiwain nang pinong-pino pagkatapos.",
        "ja": "\u30D5\u30E9\u30A4\u30D1\u30F3\u307E\u305F\u306F\u70AD\u706B\u3067\u76AE\u76EE\u3092\u62BC\u3057\u4ED8\u3051\u306A\u304C\u3089\u30AB\u30EA\u30C3\u3068\u713C\u304D\u4E0A\u3052\u307E\u3059\u3002\u7C97\u71B1\u304C\u53D6\u308C\u305F\u3089\u3001\u8089\u3068\u8033\u30925mm\u89D2\u306E\u7D30\u5207\u308C\u306B\u523B\u307F\u307E\u3059\u3002",
        "ko": "\uD32C\uC5D0 \uAECD\uC9C8\uC744 \uC544\uB798\uB85C \uB20C\uB7EC\uAC00\uBA70 \uBC14\uC0AD\uD558\uAC8C \uAD7D\uAC70\uB098 \uC22F\uBD88\uC5D0 \uB178\uB987\uD558\uAC8C \uC9C1\uD654\uD569\uB2C8\uB2E4. \uD55C \uAE40 \uC2DD\uD78C \uD6C4 0.5cm \uD06C\uAE30\uB85C \uC798\uAC8C \uAE4D\uB451\uC370\uAE30\uD569\uB2C8\uB2E4."
      },
      durationSeconds: 720,
      image: "/images/sisig-step2.jpg",
      cookwareVariations: [
        {
          cookware: "airFryer",
          tempAndSetting: "Air Fryer: 200\xB0C (395\xB0F) for 15-18 mins",
          instructionOverride: {
            "zh-TW": "\u6C23\u70B8\u934B\u6A21\u5F0F\uFF1A\u5C07\u716E\u719F\u5438\u4E7E\u6C34\u5206\u7684\u4E94\u82B1\u8089\u584A\u76AE\u671D\u4E0A\u7F6E\u65BC\u6C23\u70B8\u70B8\u7C43\u4E2D\uFF0C\u4EE5 200\xB0C \u6C23\u70B8 15-18 \u5206\u9418\uFF0C\u76F4\u898B\u8C6C\u76AE\u8D77\u7D30\u5BC6\u9165\u8106\u6C34\u6CE1\u3002\u96F6\u6CB9\u7159\uFF0C\u5916\u76AE\u5982\u9905\u4E7E\u822C\u9999\u8106\uFF01\u51FA\u934B\u5F8C\u5207\u7D30\u788E\u4E01\u3002",
            "en": "Air Fryer Variation: Place dried pork skin-side UP into the basket. Air fry at 200\xB0C (395\xB0F) for 15-18 minutes until the skin is intensely blistered and golden brown. Let cool slightly, then finely mince.",
            "fil": "Paraan sa Air Fryer: Ilagay ang liempo (pataas ang balat) sa 200\xB0C nang 15-18 minuto hanggang pumutok at lumutong ang balat. Hiwain nang pino.",
            "ja": "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u8A2D\u5B9A\uFF1A\u76AE\u3092\u4E0A\u306B\u3057\u3066\u30D0\u30B9\u30B1\u30C3\u30C8\u306B\u4E26\u3079\u3001200\u2103\u306715\u301C18\u5206\u52A0\u71B1\u3002\u76AE\u304C\u30D7\u30C4\u30D7\u30C4\u3068\u81A8\u3089\u3093\u3067\u6700\u9AD8\u306E\u98DF\u611F\u306B\u306A\u308A\u307E\u3059\u3002\u53D6\u308A\u51FA\u3057\u3066\u523B\u307F\u307E\u3059\u3002",
            "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uBAA8\uB4DC: \uAECD\uC9C8\uC774 \uC704\uB85C \uD5A5\uD558\uAC8C \uB123\uACE0 200\xB0C\uC5D0\uC11C 15~18\uBD84\uAC04 \uC870\uB9AC\uD569\uB2C8\uB2E4. \uAECD\uC9C8\uC774 \uD06C\uB798\uCEE4\uCC98\uB7FC \uBC14\uC0AD\uD558\uAC8C \uD280\uACA8\uC9C0\uBA74 \uC798\uAC8C \uB2E4\uC838\uC90D\uB2C8\uB2E4."
          }
        }
      ]
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u9999\u714E\u96DE\u809D\u8207\u7206\u7092\u6D0B\u8525\u8F9B\u9999\u6599", "en": "Sear Chicken Liver & Saut\xE9 Aromatics", "fil": "Lutuin ang Atay at Ginisang Sibuyas", "ja": "\u9D8F\u30EC\u30D0\u30FC\u3092\u713C\u304D\u9999\u8F9B\u91CE\u83DC\u3068\u7092\u3081\u5408\u308F\u305B\u308B", "ko": "\uB2ED \uAC04\uC744 \uBCF6\uC544 \uC73C\uAE6C \uB4A4 \uC591\uD30C\uC640 \uD568\uAED8 \uC870\uB9AC" },
      instruction: {
        "zh-TW": "\u934B\u4E2D\u5C11\u8A31\u6CB9\u4E0B\u96DE\u809D\uFF0C\u96D9\u9762\u714E\u719F\u5F8C\u7528\u934B\u93DF\u6216\u7814\u78E8\u7897\u58D3\u6210\u6FC3\u7A20\u7D30\u6CE5\u3002\u52A0\u5165\u5207\u788E\u7684\u7D05\u6D0B\u8525\u788E\uFF08\u7559 1/3 \u751F\u6D0B\u8525\u51FA\u934B\u5099\u7528\uFF09\u548C\u671D\u5929\u6912\u5708\uFF0C\u5927\u706B\u5FEB\u901F\u7178\u7092\u51FA\u64B2\u9F3B\u9999\u6C23\u3002",
        "en": "In a hot skillet, sear chicken livers until cooked through, then mash with a fork/spatula into a paste. Add 2/3 of the chopped red onions and sliced bird\u2019s eye chilies. Stir-fry vigorously for 1 minute until fragrant.",
        "fil": "Iprito ang atay at durugin. Igisa kasama ang 2/3 ng sibuyas at siling labuyo.",
        "ja": "\u30EC\u30D0\u30FC\u3092\u9999\u3070\u3057\u304F\u713C\u304D\u3001\u30D8\u30E9\u3067\u6F70\u3057\u3066\u30DA\u30FC\u30B9\u30C8\u72B6\u306B\u3057\u307E\u3059\u3002\u523B\u307F\u8D64\u7389\u306D\u304E\uFF081/3\u306F\u4ED5\u4E0A\u3052\u7528\u306B\u6B8B\u3059\uFF09\u3068\u5510\u8F9B\u5B50\u3092\u52A0\u3048\u3066\u5F37\u706B\u3067\u30B5\u30C3\u3068\u7092\u3081\u307E\u3059\u3002",
        "ko": "\uD32C\uC5D0 \uB2ED \uAC04\uC744 \uB178\uB987\uD558\uAC8C \uC775\uD78C \uB4A4 \uC8FC\uAC71\uC73C\uB85C \uC73C\uAE68\uC5B4 \uD398\uC774\uC2A4\uD2B8\uB85C \uB9CC\uB4ED\uB2C8\uB2E4. \uC801\uC591\uD30C\uC758 2/3\uC640 \uC36C \uACE0\uCD94\uB97C \uB123\uACE0 \uC13C \uBD88\uC5D0 1\uBD84\uAC04 \uBCF6\uC544 \uD5A5\uC744 \uB0C5\uB2C8\uB2E4."
      },
      durationSeconds: 240,
      image: "/images/sisig-step3.jpg"
    },
    {
      stepNumber: 4,
      title: { "zh-TW": "\u6DF7\u5408\u8106\u8089\u4E01\u3001\u8ABF\u5473\u91AC\u6C41\u8207\u7F8E\u4E43\u6ECB", "en": "Toss Pork, Calamansi, Seasoning & Mayo", "fil": "Haluin ang Baboy, Toyo, Suka at Mayonesa", "ja": "\u523B\u307F\u8089\u3001\u8ABF\u5473\u6599\u3001\u30DE\u30E8\u30CD\u30FC\u30BA\u3092\u5408\u308F\u305B\u308B", "ko": "\uB2E4\uC9C4 \uACE0\uAE30, \uAE54\uB77C\uB9CC\uC2DC \uC591\uB150 \uBC0F \uB9C8\uC694\uB124\uC988 \uBC84\uBB34\uB9AC\uAE30" },
      instruction: {
        "zh-TW": "\u5C07\u5207\u788E\u7684\u91D1\u9EC3\u4E94\u82B1\u8089\u4E01\u5012\u5165\u934B\u4E2D\uFF0C\u6DCB\u5165 2 \u5927\u5319\u7518\u8517\u767D\u918B\u30011.5 \u5927\u5319\u91AC\u6CB9\u3001\u64E0\u5165 3 \u9846\u56DB\u5B63\u6854\u6C41\u8207\u9069\u91CF\u7814\u78E8\u9ED1\u80E1\u6912\u3002\u5927\u706B\u7FFB\u62CC\u5747\u52FB\u6536\u6C41 2 \u5206\u9418\uFF0C\u95DC\u706B\uFF0C\u62CC\u5165\u7F8E\u4E43\u6ECB\u589E\u52A0\u7D72\u6ED1\u6CB9\u6F64\u611F\u3002",
        "en": "Toss the minced crispy pork into the pan. Pour in 2 tbsp cane vinegar, 1.5 tbsp soy sauce, freshly squeezed juice of 3 calamansi, and cracked black pepper. Toss over high heat for 2 mins. Turn off heat and stir in mayonnaise until glossy.",
        "fil": "Ihalo ang tinadtad na baboy, sukang maasim, toyo, katas ng kalamansi, at paminta. Haluin at patayin ang apoy bago ihalo ang mayonesa.",
        "ja": "\u523B\u3093\u3060\u8C5A\u8089\u3092\u52A0\u3048\u3001\u30B5\u30C8\u30A6\u30AD\u30D3\u9162\u3001\u91A4\u6CB9\u3001\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u679C\u6C41\u3001\u9ED2\u80E1\u6912\u3092\u6295\u5165\u3002\u5F37\u706B\u3067\u624B\u65E9\u304F\u548C\u3048\u305F\u3089\u706B\u3092\u6B62\u3081\u3001\u30DE\u30E8\u30CD\u30FC\u30BA\u3092\u52A0\u3048\u3066\u5168\u4F53\u306B\u8276\u3092\u51FA\u3057\u307E\u3059\u3002",
        "ko": "\uB2E4\uC9C4 \uACE0\uAE30\uB97C \uD32C\uC5D0 \uB123\uACE0 \uC2DD\uCD08, \uAC04\uC7A5, \uAE54\uB77C\uB9CC\uC2DC \uC999, \uD751\uD6C4\uCD94\uB97C \uB123\uC5B4 \uC13C \uBD88\uC5D0 2\uBD84\uAC04 \uBCF6\uC2B5\uB2C8\uB2E4. \uBD88\uC744 \uB044\uACE0 \uB9C8\uC694\uB124\uC988\uB97C \uB123\uC5B4 \uBD80\uB4DC\uB7FD\uAC8C \uBC84\uBB34\uB9BD\uB2C8\uB2E4."
      },
      durationSeconds: 180,
      image: "/images/sisig-step4.jpg"
    },
    {
      stepNumber: 5,
      title: { "zh-TW": "\u9435\u677F\u71D2\u7D05\u6ECB\u6ECB\u76DB\u76E4\uFF0C\u6253\u5165\u751F\u86CB\u8D81\u71B1\u652A\u62CC", "en": "Transfer to Sizzling Plate, Top with Egg", "fil": "Ihain sa Mainit na Sizzling Plate na may Itlog", "ja": "\u30A2\u30C4\u30A2\u30C4\u306E\u9244\u677F\u306B\u76DB\u308A\u751F\u5375\u3092\u843D\u3068\u3059", "ko": "\uB2EC\uAD70 \uCCA0\uD310\uC5D0 \uB2F4\uC544 \uC0DD\uACC4\uB780\uC744 \uC62C\uB9AC\uACE0 \uC11C\uBE59" },
      instruction: {
        "zh-TW": "\u5C07\u9444\u9435\u70E4\u76E4\u653E\u5728\u7210\u706B\u4E0A\u71D2\u81F3\u5192\u7159\uFF08\u82E5\u7121\u9435\u677F\u53EF\u76F4\u63A5\u7528\u539F\u71B1\u934B\u71B1\u5230\u5E95\uFF09\u3002\u8D81\u71B1\u76DB\u5165\u7092\u597D\u7684 Sisig\uFF0C\u4E2D\u592E\u6316\u500B\u5C0F\u6D1E\u6253\u5165\u4E00\u9846\u65B0\u9BAE\u751F\u96DE\u86CB\uFF0C\u5468\u570D\u6492\u4E0A\u9810\u7559\u7684\u751F\u6D0B\u8525\u4E01\u8207\u671D\u5929\u6912\u5708\uFF0C\u9644\u4E0A\u5207\u534A\u91D1\u6854\u3002\u98DF\u7528\u6642\u8D81\u9435\u677F\u6EFE\u71D9\u5C07\u96DE\u86CB\u8207\u8089\u4E01\u5B8C\u5168\u652A\u62CC\u52FB\u958B\uFF01",
        "en": "Heat a cast-iron sizzling platter over high burner until smoking hot. Heap the hot Sisig onto the platter, make a center well, and crack a fresh raw egg. Garnish with remaining crisp raw onions, chili slices, and halved calamansi. Stir the egg into the piping hot meat at the table!",
        "fil": "Initin ang sizzling plate hanggang umusok. Ilagay ang sisig, basagin ang itlog sa gitna, budburan ng sariwang sibuyas at sili. Ihalo ang itlog habang kumukulo pa!",
        "ja": "\u9244\u677F\u3092\u7159\u304C\u51FA\u308B\u307E\u3067\u5F37\u706B\u3067\u71B1\u3057\u307E\u3059\u3002\u30B7\u30B7\u30B0\u3092\u5C71\u76DB\u308A\u306B\u76DB\u308A\u3001\u4E2D\u592E\u306B\u304F\u307C\u307F\u3092\u4F5C\u3063\u3066\u751F\u5375\u3092\u5272\u308A\u843D\u3068\u3057\u307E\u3059\u3002\u6B8B\u308A\u306E\u751F\u7389\u306D\u304E\u3068\u67D1\u6A58\u3092\u6DFB\u3048\u3001\u71B1\u3044\u3046\u3061\u306B\u5168\u4F53\u3092\u6DF7\u305C\u3066\u53EC\u3057\u4E0A\u304C\u308C\uFF01",
        "ko": "\uBB34\uC1E0 \uCCA0\uD310\uC744 \uC5F0\uAE30\uAC00 \uB0A0 \uB54C\uAE4C\uC9C0 \uC13C \uBD88\uC5D0 \uB2EC\uAD70 \uB4A4 \uC2DC\uC2DC\uADF8\uB97C \uB4EC\uBFCD \uC62C\uB9BD\uB2C8\uB2E4. \uAC00\uC6B4\uB370\uC5D0 \uC2E0\uC120\uD55C \uC0DD\uB780\uC744 \uD1A1 \uAE68\uD2B8\uB824 \uC62C\uB9AC\uACE0 \uC0DD\uC591\uD30C\uC640 \uACE0\uCD94\uB97C \uACC1\uB4E4\uC5EC \uC989\uC11D\uC5D0\uC11C \uBE44\uBCBC \uBA39\uC2B5\uB2C8\uB2E4."
      },
      durationSeconds: 120,
      image: "/images/sisig-step5.jpg",
      dangerWarnings: {
        "zh-TW": "\u9444\u9435\u677F\u6975\u5176\u6EFE\u71D9\uFF0C\u79FB\u52D5\u6642\u52D9\u5FC5\u4F7F\u7528\u539A\u9632\u71D9\u624B\u5957\u8207\u6728\u6258\u76E4\uFF0C\u5C0F\u5FC3\u6CB9\u8102\u5FAE\u6FFA\uFF01",
        "en": "Cast-iron platters are scorching hot! Always use heavy heat-proof gloves and place on a wooden serving base.",
        "fil": "Napakainit ng bakal na plato; gumamit ng gloves at kahoy na patungan.",
        "ja": "\u9244\u677F\u306F\u8D85\u9AD8\u6E29\u3067\u3059\u3002\u706B\u50B7\u306B\u6CE8\u610F\u3057\u3001\u5FC5\u305A\u6728\u88FD\u30D7\u30EC\u30FC\u30C8\u306B\u306E\u305B\u3066\u904B\u3093\u3067\u304F\u3060\u3055\u3044\u3002",
        "ko": "\uCCA0\uD310\uC774 \uB9E4\uC6B0 \uB728\uAC70\uC6B0\uB2C8 \uBC18\uB4DC\uC2DC \uC624\uBE10 \uC7A5\uAC11\uC744 \uCC29\uC6A9\uD558\uACE0 \uB098\uBB34 \uBC1B\uCE68\uB300\uC5D0 \uC62C\uB824 \uC11C\uBE59\uD558\uC138\uC694."
      }
    }
  ],
  troubleshooting: [
    {
      id: "not-crispy",
      problem: { "zh-TW": "\u8C6C\u8089\u4E01\u5403\u8D77\u4F86\u6CB9\u81A9\u8EDF\u721B\uFF0C\u7F3A\u4E4F\u723D\u8106\u5EA6", "en": "Meat is soggy and oily instead of crispy", "fil": "Malambot at mamantika ang sisig, hindi malutong", "ja": "\u8C5A\u8089\u304C\u6CB9\u3063\u307D\u304F\u30D9\u30C1\u30E3\u30C3\u3068\u3057\u3066\u30AB\u30EA\u30AB\u30EA\u611F\u304C\u306A\u3044", "ko": "\uACE0\uAE30\uAC00 \uBC14\uC0AD\uD558\uC9C0 \uC54A\uACE0 \uB205\uB205\uD558\uACE0 \uAE30\uB984\uC9D0" },
      cause: { "zh-TW": "\u6C34\u716E\u5F8C\u8C6C\u76AE\u6C34\u5206\u672A\u5438\u4E7E\uFF0C\u6216\u714E\u70E4\u6EAB\u5EA6\u904E\u4F4E\u3001\u6642\u9593\u4E0D\u8DB3", "en": "Pork skin had excess moisture, or frying oil/pan was not hot enough", "fil": "Basa ang balat bago iprito o mahina ang apoy", "ja": "\u4E0B\u8339\u3067\u5F8C\u306E\u6C34\u6C17\u304C\u6B8B\u3063\u3066\u3044\u305F\u304B\u3001\u713C\u304D\u6E29\u5EA6\u304C\u4F4E\u3059\u304E\u305F\u305F\u3081", "ko": "\uC0B6\uC740 \uD6C4 \uBB3C\uAE30\uB97C \uCDA9\uBD84\uD788 \uB2E6\uC9C0 \uC54A\uC558\uAC70\uB098 \uBD88\uC774 \uC57D\uD574 \uC81C\uB300\uB85C \uD280\uACA8\uC9C0\uC9C0 \uC54A\uC74C" },
      solution: {
        "zh-TW": "\u4E94\u82B1\u8089\u716E\u719F\u5F8C\u5FC5\u9808\u7528\u5EDA\u623F\u7D19\u5DFE\u58D3\u4E7E\uFF0C\u6C23\u70B8\u934B\u4EE5 200\xB0C \u9AD8\u6EAB\u5C07\u8C6C\u76AE\u6CB9\u8102\u5B8C\u5168\u903C\u51FA\u81F3\u8D77\u5927\u6CE1\uFF1B\u8D77\u934B\u524D\u53EF\u984D\u5916\u62CC\u5165\u5C11\u8A31\u634F\u788E\u7684\u70B8\u8C6C\u76AE\uFF08Chicharon\uFF09\u77AC\u9593\u589E\u52A0\u8106\u723D\uFF01",
        "en": "Pat boiled meat completely dry. Air fry at 200\xB0C to blow up crispy blisters. You can also fold in crushed chicharon right before plating.",
        "fil": "Patuyuin ang balat bago lutuin. Magdagdag ng durog na chicharon bago ihain.",
        "ja": "\u6C34\u5206\u3092\u5B8C\u5168\u306B\u62ED\u304D\u53D6\u308A\u3001\u9AD8\u6E29\u3067\u76AE\u3092\u81A8\u3089\u307E\u305B\u307E\u3059\u3002\u7815\u3044\u305F\u30C1\u30C1\u30E3\u30ED\u30F3\u3092\u4ED5\u4E0A\u3052\u306B\u6DF7\u305C\u308B\u88CF\u6280\u3082\u6709\u52B9\u3067\u3059\u3002",
        "ko": "\uBB3C\uAE30\uB97C \uC644\uBCBD\uD788 \uC81C\uAC70\uD558\uACE0 200\uB3C4 \uC774\uC0C1 \uACE0\uC628\uC5D0 \uAD6C\uC6B0\uBA70, \uC644\uC131 \uC9C1\uC804 \uBC14\uC0AD\uD55C \uCE58\uCC28\uB860\uC744 \uBD80\uC234 \uB123\uC73C\uBA74 \uC2DD\uAC10\uC774 \uC0B4\uC544\uB0A9\uB2C8\uB2E4."
      }
    },
    {
      id: "too-sour-or-salty",
      problem: { "zh-TW": "\u9178\u5EA6\u904E\u65BC\u523A\u6FC0\u55C6\u53E3\uFF0C\u6216\u9E79\u5EA6\u592A\u9AD8", "en": "Too harshly sour or salty", "fil": "Masyadong maasim o maalat", "ja": "\u9178\u5473\u304C\u5F37\u3059\u304E\u308B\u304B\u3001\u5869\u8F9B\u3044", "ko": "\uC2E0\uB9DB\uC774 \uB108\uBB34 \uC3D8\uAC70\uB098 \uB108\uBB34 \uC9EC" },
      cause: { "zh-TW": "\u918B\u904E\u65E9\u52A0\u5165\u51B7\u934B\u672A\u5B8C\u5168\u63EE\u767C\uFF0C\u6216\u7F8E\u4E43\u6ECB\u8207\u91AC\u6CB9\u6BD4\u4F8B\u5931\u8861", "en": "Vinegar was added without cooking off, or unbalanced soy sauce", "fil": "Hindi naluto nang kusa ang suka", "ja": "\u9162\u306E\u9178\u5473\u3092\u98DB\u3070\u3059\u52A0\u71B1\u304C\u8DB3\u308A\u306A\u304B\u3063\u305F\u305F\u3081", "ko": "\uC2DD\uCD08\uB97C \uB123\uACE0 \uBD88\uC5D0 \uCDA9\uBD84\uD788 \uB0A0\uB9AC\uC9C0 \uC54A\uC558\uAC70\uB098 \uAC04\uC7A5 \uC591 \uACFC\uB2E4" },
      solution: {
        "zh-TW": "\u918B\u5012\u5165\u5F8C\u5207\u5FCC\u7ACB\u5373\u652A\u62CC\uFF0C\u8B93\u5176\u5728\u9AD8\u6EAB\u934B\u5E95\u6CB8\u9A30 30 \u79D2\u81F3\u9152\u9178\u5473\u81EA\u7136\u8F49\u70BA\u7518\u9187\uFF1B\u82E5\u5DF2\u904E\u9178\uFF0C\u53EF\u88DC\u62CC 1 \u8336\u5319\u7F8E\u4E43\u6ECB\u6216\u5C11\u8A31\u767D\u7CD6\u4E2D\u548C\u3002",
        "en": "Do not stir immediately after pouring vinegar; let it bubble for 30s. Counter excess sourness with an extra dollop of mayo.",
        "fil": "Hayaang kumulo ang suka nang hindi hinahalo. Magdagdag ng kaunting asukal o mayonesa.",
        "ja": "\u9162\u3092\u52A0\u3048\u305F\u3089\u3059\u3050\u306B\u6DF7\u305C\u305A\u300130\u79D2\u307B\u3069\u6CB8\u9A30\u3055\u305B\u3066\u89D2\u3092\u53D6\u308A\u307E\u3059\u3002\u9178\u3063\u3071\u3059\u304E\u308B\u5834\u5408\u306F\u30DE\u30E8\u30CD\u30FC\u30BA\u3092\u5C11\u3057\u8DB3\u3057\u3066\u6574\u3048\u307E\u3059\u3002",
        "ko": "\uC2DD\uCD08\uB97C \uB123\uC740 \uC9C1\uD6C4 \uC813\uC9C0 \uB9D0\uACE0 30\uCD08\uAC04 \uB053\uC5EC \uC2E0\uBBF8\uB97C \uB0A0\uB824\uC900 \uB4A4 \uC11E\uACE0, \uB9C8\uC694\uB124\uC988\uB97C \uC870\uAE08 \uB354 \uB123\uC5B4 \uBD80\uB4DC\uB7FD\uAC8C \uC870\uC808\uD569\uB2C8\uB2E4."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u8001\u9955\u5403\u6CD5\u3011\uFF1A\u684C\u4E0A\u7684\u9BAE\u5207\u56DB\u5B63\u67D1\uFF08Calamansi\uFF09\u4E00\u5B9A\u8981\u5728\u5373\u5C07\u5165\u53E3\u524D\u624D\u73FE\u64E0\u5728\u8089\u4E0A\uFF0C\u71B1\u6C23\u70D8\u51FA\u6E05\u65B0\u67D1\u6A58\u6CB9\u9999\uFF0C\u662F\u6700\u6975\u81F4\u7684\u4EAB\u53D7\uFF01",
      "en": "Pro Tip: Always squeeze your fresh calamansi tableside right onto the sizzling meat. The heat unlocks the fragrant citrus rind oils instantly!",
      "fil": "Tip ng Kusinero: Pigain ang kalamansi bago kainin habang umuusok pa para lumabas ang bango ng balat nito.",
      "ja": "\u30D7\u30ED\u306E\u6280\uFF1A\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u306F\u98DF\u3079\u308B\u76F4\u524D\u306B\u71B1\u3005\u306E\u8089\u3078\u7D5E\u308A\u304B\u3051\u308B\u3068\u3001\u679C\u76AE\u306E\u7CBE\u6CB9\u304C\u7ACB\u3061\u4E0A\u308A\u6700\u9AD8\u306E\u9999\u308A\u3092\u653E\u3061\u307E\u3059\u3002",
      "ko": "\uC170\uD504 \uD301: \uC11C\uBE59 \uC9C1\uD6C4 \uB728\uAC70\uC6B4 \uACE0\uAE30 \uC704\uC5D0 \uC2E0\uC120\uD55C \uAE54\uB77C\uB9CC\uC2DC\uB97C \uC989\uC11D\uC5D0\uC11C \uC9DC\uC8FC\uBA74 \uC2DC\uD2B8\uB7EC\uC2A4 \uC5D0\uC13C\uC2A4\uAC00 \uD3ED\uBC1C\uD558\uBA70 \uCD5C\uC0C1\uC758 \uB9DB\uC744 \uB0C5\uB2C8\uB2E4."
    },
    {
      "zh-TW": "\u642D\u914D\u751F\u5564\u9152\uFF08San Miguel Pale Pilsen\uFF09\u6216\u5927\u7897\u71B1\u9A30\u9A30\u7684\u849C\u9999\u5927\u849C\u98EF\uFF08Sinangag\uFF09\uFF0C\u662F\u83F2\u5F8B\u8CD3\u4EBA\u6700\u9A55\u50B2\u7684\u570B\u6C11\u9748\u9B42\u642D\u914D\uFF01",
      "en": "Pairing: Best enjoyed with ice-cold San Miguel Pale Pilsen beer or a massive bowl of toasted garlic fried rice (Sinangag)!",
      "fil": "Pinakamasarap kasabay ng malamig na San Miguel beer o mainit na sinangag na kanin.",
      "ja": "\u30DA\u30A2\u30EA\u30F3\u30B0\uFF1A\u30AD\u30F3\u30AD\u30F3\u306B\u51B7\u3048\u305F\u30B5\u30F3\u30DF\u30B2\u30EB\u30D3\u30FC\u30EB\u3001\u307E\u305F\u306F\u5C71\u76DB\u308A\u306E\u30AC\u30FC\u30EA\u30C3\u30AF\u30E9\u30A4\u30B9\uFF08\u30B7\u30CA\u30AC\u30B0\uFF09\u3068\u5408\u308F\u305B\u308B\u306E\u304C\u738B\u9053\u3067\u3059\uFF01",
      "ko": "\uD398\uC5B4\uB9C1: \uC2DC\uC6D0\uD55C \uC0B0\uBBF8\uAD6C\uC5D8 \uB9E5\uC8FC \uB610\uB294 \uACE0\uC18C\uD55C \uB9C8\uB298 \uBCF6\uC74C\uBC25(\uC2DC\uB0AD\uC545)\uACFC \uD568\uAED8 \uBA39\uC73C\uBA74 \uADF8 \uC5B4\uB5A4 \uC694\uB9AC\uB3C4 \uBD80\uB7FD\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/adobo.ts
var adobo = {
  id: "adobo",
  slug: "adobo",
  title: {
    "zh-TW": "\u6B63\u5B97\u83F2\u5F8B\u8CD3\u570B\u83DC\u96D9\u62FC\u963F\u591A\u6CE2 (Chicken & Pork Adobo)",
    "en": "Classic Chicken & Pork Adobo (Adobong Puti/Pula)",
    "fil": "Klasikong Adobong Manok at Baboy",
    "ja": "\u672C\u5834\u30D5\u30A3\u30EA\u30D4\u30F3\u306E\u56FD\u6C11\u98DF\u30A2\u30C9\u30DC\uFF08\u9D8F\u8089\u3068\u8C5A\u8089\u306E\u9162\u91A4\u6CB9\u716E\u8FBC\u307F\uFF09",
    "ko": "\uD544\uB9AC\uD540 \uAD6D\uBBFC \uC694\uB9AC \uC544\uB3C4\uBCF4 (\uCE58\uD0A8 & \uD3EC\uD06C \uC2DD\uCD08 \uAC04\uC7A5 \uC870\uB9BC)"
  },
  subtitle: {
    "zh-TW": "\u767E\u5E74\u767D\u7518\u8517\u918B\u30FB\u6574\u982D\u5927\u849C\u9ED1\u80E1\u6912\u7206\u7092\u30FB\u8D8A\u9673\u8D8A\u9999\u767D\u98EF\u6BBA\u624B",
    "en": "Slow-Simmered Garlic, Cane Vinegar, Bay Leaves & Caramelized Glaze",
    "fil": "Lutong bahay na may bawang, dahon ng laurel, toyo at sukang maasim",
    "ja": "\u30B5\u30C8\u30A6\u30AD\u30D3\u9162\u3001\u4E38\u3054\u3068\u306B\u3093\u306B\u304F\u3001\u30ED\u30FC\u30EA\u30A8\u306E\u82B3\u9187\u306A\u65E8\u5473\u304C\u67D3\u307F\u6E21\u308B\u9038\u54C1",
    "ko": "\uC0AC\uD0D5\uC218\uC218 \uC2DD\uCD08, \uD1B5\uB9C8\uB298, \uC6D4\uACC4\uC218 \uC78E\uC73C\uB85C \uC878\uC5EC\uB0B8 \uAC10\uCE60\uB9DB\uC758 \uC815\uC810"
  },
  tagline: {
    "zh-TW": "\u6BCF\u500B\u83F2\u5F8B\u8CD3\u5BB6\u5EAD\u6C38\u9060\u7684\u9A55\u50B2\uFF0C\u8089\u8CEA\u9165\u5AE9\u3001\u91AC\u6C41\u62CC\u98EF\u5929\u4E0B\u7B2C\u4E00",
    "en": "The undisputed national dish: tender meat braised in savory vinegar, soy, and garlic",
    "fil": "Ang paboritong lutong-ina ng bawat Pilipino, mas masarap habang tumatagal",
    "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u4EBA\u306E\u8AB0\u3082\u304C\u611B\u3059\u308B\u304A\u3075\u304F\u308D\u306E\u5473\u3002\u4E00\u6669\u5BDD\u304B\u305B\u308B\u3068\u65E8\u5473\u304C\u3055\u3089\u306B\u500D\u5897",
    "ko": "\uBAA8\uB4E0 \uD544\uB9AC\uD540\uC778\uC774 \uC0AC\uB791\uD558\uB294 \uC18C\uC6B8 \uD478\uB4DC. \uB2E4\uC74C \uB0A0 \uBA39\uC73C\uBA74 \uB354 \uAE4A\uC5B4\uC9C0\uB294 \uD48D\uBBF8"
  },
  heroImage: "/images/adobo.jpg",
  difficulty: "easy",
  prepTimeMinutes: 15,
  cookTimeMinutes: 40,
  defaultServings: 4,
  caloriesPerServing: 480,
  category: "mains",
  dietaryTags: ["classic"],
  supportedCookware: ["traditional", "instantPot", "airFryer"],
  culture: {
    originRegion: {
      "zh-TW": "\u5168\u83F2\u5F8B\u8CD3\u7FA4\u5CF6\uFF08\u897F\u73ED\u7259\u6B96\u6C11\u524D\u5DF2\u5B58\u5728\u7684\u53E4\u8001\u571F\u8457\u539F\u5473\u70F9\u8ABF\u6CD5\uFF09",
      "en": "Indigenous Philippine Islands (Pre-colonial origin)",
      "fil": "Buong Kapuluan ng Pilipinas",
      "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u5168\u571F\uFF08\u30B9\u30DA\u30A4\u30F3\u690D\u6C11\u5730\u4EE5\u524D\u306E\u5148\u4F4F\u6C11\u4F1D\u7D71\u6599\u7406\uFF09",
      "ko": "\uD544\uB9AC\uD540 \uC804\uC5ED (\uC2DD\uBBFC\uC9C0 \uC774\uC804\uBD80\uD130 \uC804\uD574 \uB0B4\uB824\uC628 \uC804\uD1B5 \uC870\uB9AC\uBC95)"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u99AC\u5C3C\u62C9 Carriedo \u8857\u908A\u5E73\u50F9\u71B1\u7092\u98DF\u5802 (Carinderia)", "en": "Carinderia food stalls across Manila", "fil": "Mga Karinderya sa Maynila", "ja": "\u30DE\u30CB\u30E9\u5EB6\u6C11\u306E\u5927\u8846\u98DF\u5802\u30AB\u30EA\u30F3\u30C7\u30EA\u30A2", "ko": "\uB9C8\uB2D0\uB77C \uB85C\uCEEC \uCE74\uB9B0\uB370\uB9AC\uC544 \uC2DD\uB2F9\uAC00" },
      { "zh-TW": "\u594E\u677E\u5E02 Maginhawa \u7F8E\u98DF\u8857", "en": "Maginhawa Food District, Quezon City", "fil": "Maginhawa St., Quezon City", "ja": "\u30B1\u30BD\u30F3\u5E02\u30DE\u30AE\u30F3\u30CF\u30EF\u901A\u308A", "ko": "\uD018\uC874 \uC2DC\uD2F0 \uB9C8\uAE34\uD558\uC640 \uAC70\uB9AC" }
    ],
    historyStory: {
      "zh-TW": "\u5728\u897F\u73ED\u7259\u4EBA\u8E0F\u4E0A\u83F2\u5F8B\u8CD3\u4E4B\u524D\uFF0C\u5CF6\u6C11\u70BA\u4E86\u5728\u708E\u71B1\u71B1\u5E36\u4FDD\u5B58\u8089\u54C1\uFF0C\u4FBF\u5229\u7528\u5929\u7136\u767C\u9175\u7684\u7518\u8517\u767D\u918B\u8207\u6D77\u9E7D\u3001\u91CE\u751F\u5927\u849C\u6162\u71C9\u8089\u584A\u300216\u4E16\u7D00\u897F\u73ED\u7259\u4EBA\u5230\u4F86\u6642\uFF0C\u501F\u7528\u4E86\u897F\u8A9E\u300CAdobar\uFF08\u9183\u88FD\uFF09\u300D\u4E00\u8A5E\u7A31\u547C\u5B83\u3002\u5982\u4ECA Adobo \u6F14\u8B8A\u70BA\u52A0\u5165\u91AC\u6CB9\u3001\u5927\u91CF\u849C\u74E3\u3001\u9ED1\u80E1\u6912\u7C92\u8207\u4E7E\u71E5\u6708\u6842\u8449\u7684\u570B\u5BF6\u71C9\u8089\uFF0C\u4E5F\u662F\u83F2\u5F8B\u8CD3\u5B87\u822A\u54E1\u8207\u6D77\u5916\u904A\u5B50\u7684\u5FC3\u9748\u5BC4\u8A17\uFF01",
      "en": 'Long before Ferdinand Magellan arrived in 1521, indigenous Filipinos cooked meat with wild vinegar and salt to preserve it in the tropical climate. Spanish colonizers noted this technique and labeled it "Adobo" (from Spanish adobar, meaning marinade). Over centuries, dark soy sauce and bay leaves transformed it into the beloved national classic.',
      "fil": 'Bago pa man dumating ang mga Espanyol, nagluluto na ang mga katutubong Pilipino ng karne sa suka at asin upang hindi mapanis sa init. Tinawag itong "adobo" ng mga Kastila at ngayon ay naging pambansang ulam.',
      "ja": "16\u4E16\u7D00\u306E\u30B9\u30DA\u30A4\u30F3\u6765\u8A2A\u4EE5\u524D\u304B\u3089\u3001\u71B1\u5E2F\u306E\u6C17\u5019\u3067\u8089\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u30B5\u30C8\u30A6\u30AD\u30D3\u9162\u3067\u716E\u8FBC\u3080\u5148\u4F4F\u6C11\u65CF\u306E\u77E5\u6075\u304C\u3042\u308A\u307E\u3057\u305F\u3002\u30B9\u30DA\u30A4\u30F3\u4EBA\u304C\u3053\u308C\u3092\u300C\u30A2\u30C9\u30D0\u30EB\uFF08\u30DE\u30EA\u30CD\u3059\u308B\uFF09\u300D\u3068\u540D\u4ED8\u3051\u3001\u73FE\u5728\u306E\u56FD\u6C11\u98DF\u3078\u3068\u767A\u5C55\u3057\u307E\u3057\u305F\u3002",
      "ko": "16\uC138\uAE30 \uC2A4\uD398\uC778 \uC815\uBCF5 \uC774\uC804\uBD80\uD130 \uC5F4\uB300 \uAE30\uD6C4\uC5D0\uC11C \uACE0\uAE30\uB97C \uBCF4\uC874\uD558\uAE30 \uC704\uD574 \uC2DD\uCD08\uC640 \uB9C8\uB298\uB85C \uC878\uC5EC\uBA39\uB358 \uC6D0\uC8FC\uBBFC\uC758 \uC9C0\uD61C\uC5D0\uC11C \uCD9C\uBC1C\uD558\uC5EC, \uAC04\uC7A5\uACFC \uC6D4\uACC4\uC218 \uC78E\uC774 \uB354\uD574\uC838 \uD544\uB9AC\uD540 \uCD5C\uACE0\uC758 \uB300\uD45C \uC694\uB9AC\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4."
    },
    filipinoScript: "Adobong Manok at Baboy",
    filipinoPhonetics: "Ah-doh-bong Mah-nok aht Bah-boy",
    audioPronunciationText: "Pabili po ng kanin at isang order ng Adobong Manok at Baboy!"
  },
  ingredients: [
    {
      id: "pork-belly",
      name: { "zh-TW": "\u4E94\u82B1\u8089\u584A (\u5207 3 \u516C\u5206\u5927\u584A)", "en": "Pork Belly (Cut into 1.5-inch cubes)", "fil": "Liempo ng Baboy", "ja": "\u8C5A\u30D0\u30E9\u89D2\u5207\u308A\u8089\uFF083cm\u89D2\uFF09", "ko": "\uB3FC\uC9C0 \uC0BC\uACB9\uC0B4 (3cm \uAE4D\uB451\uC370\uAE30)" },
      amount: 400,
      unitMetric: "g",
      unitUS: "14 oz",
      isKeyFlavor: true,
      filipinoName: "Liempo ng Baboy",
      filipinoPronunciation: "Lee-yem-poh nang Bah-boy"
    },
    {
      id: "chicken-thighs",
      name: { "zh-TW": "\u5E36\u9AA8\u5E36\u76AE\u96DE\u817F\u584A (\u5207\u5927\u584A)", "en": "Bone-in Chicken Thighs / Drumsticks (Cut into pieces)", "fil": "Paa o Hita ng Manok", "ja": "\u9AA8\u4ED8\u304D\u9D8F\u3082\u3082\u8089\uFF08\u3076\u3064\u5207\u308A\uFF09", "ko": "\uD1A0\uB9C9 \uB2ED\uB2E4\uB9AC\uC0B4/\uB113\uC801\uB2E4\uB9AC (\uBF08 \uC788\uB294 \uAC83)" },
      amount: 400,
      unitMetric: "g",
      unitUS: "14 oz",
      isKeyFlavor: true,
      filipinoName: "Hita ng Manok",
      filipinoPronunciation: "Hee-tah nang Mah-nok"
    },
    {
      id: "garlic-whole-head",
      name: { "zh-TW": "\u65B0\u9BAE\u5927\u849C (\u6574\u982D\u62CD\u6241\uFF0C\u4FDD\u7559\u5C11\u8A31\u849C\u76AE)", "en": "Fresh Garlic (1 whole head, crushed)", "fil": "Bawang (Isang buong ulo)", "ja": "\u306B\u3093\u306B\u304F\uFF08\u4E38\u3054\u30681\u682A\u3001\u5305\u4E01\u306E\u8179\u3067\u6F70\u3059\uFF09", "ko": "\uC2E0\uC120\uD55C \uD1B5\uB9C8\uB298 (1\uD1B5 \uD1B5\uC9F8\uB85C \uCE7C\uB4F1\uC73C\uB85C \uC73C\uAE78)" },
      amount: 10,
      unitMetric: "clove",
      unitUS: "clove",
      isKeyFlavor: true,
      filipinoName: "Bawang",
      filipinoPronunciation: "Bah-wang"
    },
    {
      id: "cane-vinegar",
      name: { "zh-TW": "\u83F2\u5F8B\u8CD3\u5927\u809A\u5A46\u767D\u7518\u8517\u918B", "en": "Philippine Cane Vinegar (Sukang Maasim)", "fil": "Sukang Maasim (Datu Puti)", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u7523 \u30B5\u30C8\u30A6\u30AD\u30D3\u9162", "ko": "\uD544\uB9AC\uD540 \uC0AC\uD0D5\uC218\uC218 \uC2DD\uCD08" },
      amount: 80,
      unitMetric: "ml",
      unitUS: "0.33 cup",
      isKeyFlavor: true,
      filipinoName: "Sukang Maasim",
      filipinoPronunciation: "Soo-kang Mah-ah-sim",
      substitute: {
        substituteName: { "zh-TW": "\u7121\u7CD6\u7D14\u7C73\u918B\u6216\u767D\u918B + \u860B\u679C\u918B (2:1)", "en": "Rice Vinegar or White Distilled + Apple Cider (2:1)", "fil": "Puting Suka na may Apple Cider", "ja": "\u7C73\u9162\u307E\u305F\u306F\u7A40\u7269\u9162\uFF0B\u30EA\u30F3\u30B4\u9162\uFF082:1\uFF09", "ko": "\uC300\uC2DD\uCD08 \uB610\uB294 \uC591\uC870\uC2DD\uCD08 + \uC0AC\uACFC\uC2DD\uCD08 (2:1)" },
        ratio: "1:1",
        explanation: { "zh-TW": "\u7D14\u7518\u8517\u918B\u9178\u5EA6\u7D04 4.5%\uFF0C\u6EAB\u548C\u4E14\u6709\u8517\u7CD6\u767C\u9175\u5E95\u860A\uFF1B\u82E5\u4F7F\u7528\u4E00\u822C 5% \u767D\u918B\uFF0C\u53EF\u52A0\u4E00\u5C0F\u64AE\u7CD6\u8ABF\u548C\u3002", "en": "Cane vinegar is mellow with subtle cane sweetness. If using white vinegar, add a pinch of sugar.", "fil": "Magdagdag ng kurot ng asukal kung regular na suka ang gagamitin.", "ja": "\u65E5\u672C\u306E\u7A40\u7269\u9162\u3092\u4F7F\u3046\u5834\u5408\u306F\u3001\u7802\u7CD6\u3092\u3072\u3068\u3064\u307E\u307F\u52A0\u3048\u3066\u9178\u5473\u3092\u307E\u308D\u3084\u304B\u306B\u3057\u307E\u3059\u3002", "ko": "\uC0AC\uD0D5\uC218\uC218 \uC2DD\uCD08\uB294 \uC0B0\uBBF8\uAC00 \uBD80\uB4DC\uB7EC\uC6B0\uBBC0\uB85C \uC77C\uBC18 \uC2DD\uCD08 \uC0AC\uC6A9 \uC2DC \uC124\uD0D5 \uD55C \uAF2C\uC9D1\uC744 \uB354\uD574\uC90D\uB2C8\uB2E4." },
        whereToBuy: { "zh-TW": "\u6771\u5357\u4E9E\u8D85\u5E02\u6216\u7DB2\u8CFC", "en": "Asian markets or Weee!", "fil": "Supermarket o sari-sari store", "ja": "\u30A2\u30B8\u30A2\u98DF\u6750\u5E97", "ko": "\uC544\uC2DC\uC548 \uC2DD\uB8CC\uD488\uC810 \uB610\uB294 \uC628\uB77C\uC778" }
      }
    },
    {
      id: "soy-sauce",
      name: { "zh-TW": "\u83F2\u5F8B\u8CD3\u7D14\u91C0\u91AC\u6CB9 (Silver Swan \u6216 Datu Puti)", "en": "Philippine Soy Sauce (Toyo)", "fil": "Toyo", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u6FC3\u53E3\u91A4\u6CB9\uFF08\u30C8\u30E8\uFF09", "ko": "\uD544\uB9AC\uD540 \uC591\uC870\uAC04\uC7A5 (Silver Swan \uB610\uB294 Datu Puti)" },
      amount: 60,
      unitMetric: "ml",
      unitUS: "0.25 cup",
      isKeyFlavor: true,
      filipinoName: "Toyo",
      filipinoPronunciation: "Toh-yoh"
    },
    {
      id: "bay-leaves",
      name: { "zh-TW": "\u4E7E\u71E5\u6708\u6842\u8449", "en": "Dried Laurel / Bay Leaves", "fil": "Dahon ng Laurel", "ja": "\u30ED\u30FC\u30EA\u30A8\uFF08\u6708\u6842\u6A39\u306E\u8449\uFF09", "ko": "\uB9D0\uB9B0 \uC6D4\uACC4\uC218 \uC78E" },
      amount: 4,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Dahon ng Laurel",
      filipinoPronunciation: "Dah-hon nang Lah-oo-rel"
    },
    {
      id: "black-peppercorn",
      name: { "zh-TW": "\u6574\u9846\u539F\u7C92\u9ED1\u80E1\u6912 (\u90E8\u5206\u7528\u5200\u80CC\u58D3\u788E)", "en": "Whole Black Peppercorns (lightly cracked)", "fil": "Buong Paminta", "ja": "\u7C92\u9ED2\u80E1\u6912\uFF08\u8EFD\u304F\u6F70\u3059\uFF09", "ko": "\uD1B5\uD751\uD6C4\uCD94 (\uCE7C\uB4F1\uC73C\uB85C \uC0B4\uC9DD \uC73C\uAE78)" },
      amount: 1,
      unitMetric: "tbsp",
      unitUS: "1 tbsp",
      isKeyFlavor: true,
      filipinoName: "Paminta",
      filipinoPronunciation: "Pah-meen-tah"
    },
    {
      id: "brown-sugar",
      name: { "zh-TW": "\u4E8C\u7802\u6216\u9ED1\u7CD6 (\u5E73\u8861\u9178\u9E79)", "en": "Brown Sugar (to balance & glaze)", "fil": "Pulang Asukal", "ja": "\u9ED2\u7CD6\u307E\u305F\u306F\u4E09\u6E29\u7CD6", "ko": "\uD751\uC124\uD0D5 \uB610\uB294 \uD669\uC124\uD0D5" },
      amount: 1,
      unitMetric: "tsp",
      unitUS: "1 tsp",
      filipinoName: "Asukal",
      filipinoPronunciation: "Ah-soo-kal"
    },
    {
      id: "water",
      name: { "zh-TW": "\u6E05\u6C34\u6216\u6E05\u9AD8\u6E6F", "en": "Water or light broth", "fil": "Tubig", "ja": "\u6C34\u307E\u305F\u306F\u8584\u3044\u51FA\u6C41", "ko": "\uBB3C \uB610\uB294 \uB9D1\uC740 \uC721\uC218" },
      amount: 180,
      unitMetric: "ml",
      unitUS: "0.75 cup",
      filipinoName: "Tubig",
      filipinoPronunciation: "Too-beeg"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u9183\u6F2C\u8089\u584A\u5165\u5473", "en": "Marinate Meat in Soy, Garlic & Pepper", "fil": "Ibabad ang Karne sa Toyo, Bawang at Paminta", "ja": "\u8089\u306B\u4E0B\u5473\u3092\u63C9\u307F\u8FBC\u3080", "ko": "\uACE0\uAE30\uC5D0 \uAC04\uC7A5, \uB9C8\uB298, \uD6C4\uCD94\uB85C \uBC11\uAC04\uD558\uAE30" },
      instruction: {
        "zh-TW": "\u53D6\u5927\u7897\u653E\u5165\u5207\u584A\u4E94\u82B1\u8089\u8207\u96DE\u817F\u584A\uFF0C\u52A0\u5165\u62CD\u788E\u5927\u849C\u3001\u91AC\u6CB9\u3001\u58D3\u7834\u9ED1\u80E1\u6912\u7C92\u8207\u6708\u6842\u8449\uFF0C\u6293\u52FB\u9183\u6F2C\u81F3\u5C11 20-30 \u5206\u9418\uFF08\u51B7\u85CF\u9183\u6F2C\u9694\u591C\u98A8\u5473\u66F4\u9187\u539A\uFF09\u3002\u6CE8\u610F\u6B64\u6B65\u9A5F\u5148\u4E0D\u8981\u52A0\u5165\u918B\u3002",
        "en": "Combine pork belly and chicken pieces in a bowl. Add crushed garlic, soy sauce, cracked black peppercorns, and bay leaves. Toss thoroughly and let marinate for at least 20-30 mins (or overnight in the fridge). Do NOT add vinegar yet.",
        "fil": "Pagsamahin ang baboy at manok sa mangkok kasama ang toyo, bawang, paminta, at dahon ng laurel. Ibabad nang 20-30 minuto. Huwag munang ilagay ang suka.",
        "ja": "\u30DC\u30A6\u30EB\u306B\u8C5A\u8089\u3001\u9D8F\u8089\u3001\u6F70\u3057\u305F\u30CB\u30F3\u30CB\u30AF\u3001\u91A4\u6CB9\u3001\u7C92\u9ED2\u80E1\u6912\u3001\u30ED\u30FC\u30EA\u30A8\u3092\u5165\u308C\u3001\u624B\u3067\u3088\u304F\u63C9\u307F\u8FBC\u3093\u306720\u301C30\u5206\u7F6E\u304D\u307E\u3059\u3002\u203B\u3053\u306E\u6BB5\u968E\u3067\u306F\u307E\u3060\u304A\u9162\u306F\u5165\u308C\u307E\u305B\u3093\u3002",
        "ko": "\uBCFC\uC5D0 \uB3FC\uC9C0\uACE0\uAE30\uC640 \uB2ED\uACE0\uAE30, \uC73C\uAE6C \uB9C8\uB298, \uAC04\uC7A5, \uD1B5\uD6C4\uCD94, \uC6D4\uACC4\uC218 \uC78E\uC744 \uB123\uACE0 \uACE8\uACE0\uB8E8 \uBC84\uBB34\uB824 20~30\uBD84\uAC04 \uC7AC\uC6CC\uB461\uB2C8\uB2E4. (\uC2DD\uCD08\uB294 \uC544\uC9C1 \uB123\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4)."
      },
      durationSeconds: 1200,
      image: "/images/adobo-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u9AD8\u6EAB\u714E\u8089\u81F3\u8868\u9762\u91D1\u9EC3\u5FAE\u7126", "en": "Brown Pork & Chicken in Hot Skillet", "fil": "Iprito ang Karne Hanggang Mamula", "ja": "\u8089\u306E\u8868\u9762\u3092\u9999\u3070\u3057\u304F\u713C\u304D\u4ED8\u3051\u308B", "ko": "\uD32C\uC5D0 \uACE0\uAE30 \uAC89\uBA74\uC744 \uB178\uB987\uD558\uAC8C \uC2DC\uC5B4\uB9C1" },
      instruction: {
        "zh-TW": "\u539A\u5E95\u934B\u4E2D\u5012 1 \u5927\u5319\u6CB9\u4E2D\u5927\u706B\u71D2\u71B1\uFF0C\u593E\u51FA\u9183\u597D\u7684\u8089\u584A\uFF08\u9183\u6C41\u8207\u849C\u7C92\u7559\u5728\u7897\u4E2D\u5099\u7528\uFF09\uFF0C\u653E\u5165\u934B\u4E2D\u96D9\u9762\u714E\u81F3\u91D1\u9EC3\u5FAE\u7126\u3001\u91CB\u51FA\u8A98\u4EBA\u8089\u9999\uFF08\u7D04 6-8 \u5206\u9418\uFF09\u3002\u714E\u51FA\u7126\u7CD6\u5316\u8910\u8B8A\u662F\u9802\u7D1A Adobo \u91AC\u6C41\u9999\u6C23\u7684\u6839\u57FA\u3002",
        "en": "Heat 1 tbsp oil in a heavy pot over medium-high heat. Remove meat from marinade (save the liquid and garlic). Sear the pork and chicken pieces until beautifully browned on all sides (6-8 mins). Browning creates essential caramelized fond on the pan bottom.",
        "fil": "Painitin ang mantika sa kaldero. Iprito ang karne hanggang maging mamula-mula at masarap tingnan (itabi ang pinagbabaran).",
        "ja": "\u934B\u306B\u6CB9\u5927\u3055\u30581\u3092\u71B1\u3057\u3001\u6F2C\u3051\u30C0\u30EC\u304B\u3089\u53D6\u308A\u51FA\u3057\u305F\u8089\u3092\u4E2D\u5F37\u706B\u3067\u8868\u9762\u304C\u3053\u3093\u304C\u308A\u3059\u308B\u307E\u30676\u301C8\u5206\u713C\u304D\u4ED8\u3051\u307E\u3059\uFF08\u6B8B\u308A\u306E\u30BF\u30EC\u3068\u30CB\u30F3\u30CB\u30AF\u306F\u53D6\u3063\u3066\u304A\u304F\uFF09\u3002",
        "ko": "\uB0C4\uBE44\uC5D0 \uAE30\uB984\uC744 \uB450\uB974\uACE0 \uC7AC\uC6CC\uB454 \uACE0\uAE30\uB9CC \uAC74\uC838\uB0B4\uC5B4 \uAC89\uBA74\uC774 \uB178\uB987\uD574\uC9C8 \uB54C\uAE4C\uC9C0 6~8\uBD84\uAC04 \uAD6C\uC6CC\uC90D\uB2C8\uB2E4 (\uB0A8\uC740 \uC591\uB150\uC7A5\uACFC \uB9C8\uB298\uC740 \uBCF4\uAD00)."
      },
      durationSeconds: 480,
      image: "/images/adobo-step2.jpg"
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u6CE8\u5165\u7518\u8517\u918B\u70F9\u716E\uFF08\u95DC\u9375\uFF1A\u5148\u4E0D\u652A\u62CC\uFF01\uFF09", "en": "Pour Cane Vinegar & Simmer UNTOUCHED", "fil": "Ilagay ang Suka (Bawal Haluin Muna!)", "ja": "\u30B5\u30C8\u30A6\u30AD\u30D3\u9162\u3092\u6CE8\u304E\u3001\u6DF7\u305C\u305A\u306B\u6CB8\u9A30\u3055\u305B\u308B", "ko": "\uC2DD\uCD08\uB97C \uBD93\uACE0 \uC813\uC9C0 \uC54A\uACE0 \uB053\uC774\uAE30 (\uD575\uC2EC \uBE44\uBC95!)" },
      instruction: {
        "zh-TW": "\u5C07\u7897\u4E2D\u5269\u9918\u7684\u849C\u74E3\u3001\u6708\u6842\u8449\u8207\u91AC\u6CB9\u6C41\u5012\u56DE\u934B\u4E2D\uFF0C\u63A5\u8457\u6CBF\u934B\u908A\u6DCB\u5165 80ml \u767D\u7518\u8517\u918B\u8207 180ml \u6E05\u6C34\u3002\u5927\u706B\u716E\u6CB8\u5F8C\u3010\u5207\u8A18\u7D55\u5C0D\u4E0D\u8981\u7528\u93DF\u5B50\u652A\u62CC\uFF01\u3011\uFF0C\u4FDD\u6301\u655E\u958B\u934B\u84CB\u6CB8\u9A30 3-4 \u5206\u9418\uFF0C\u8B93\u918B\u7684\u751F\u6F80\u9178\u55C6\u5473\u5145\u5206\u63EE\u767C\uFF0C\u8F49\u5316\u70BA\u6EAB\u6F64\u7518\u9178\u3002",
        "en": "Pour the reserved marinade, garlic, and bay leaves back in. Pour in 80ml cane vinegar and 180ml water. Bring to a rapid rolling boil UNCOVERED. [CRUCIAL RULE: DO NOT STIR!] Let it bubble vigorously untouched for 3-4 minutes so raw harsh vinegar acidity cooks off.",
        "fil": "Ibalik ang pinagbabaran at ibuhos ang suka at tubig. Pakuluan nang HINDI HINAHALO nang 3-4 minuto upang mawala ang tapang ng hilaw na suka.",
        "ja": "\u6B8B\u308A\u306E\u30BF\u30EC\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u30ED\u30FC\u30EA\u30A8\u3092\u934B\u306B\u623B\u3057\u3001\u30B5\u30C8\u30A6\u30AD\u30D3\u9162\u3068\u6C34\u3092\u52A0\u3048\u307E\u3059\u3002\u6CB8\u9A30\u3057\u305F\u3089\u3010\u7D76\u5BFE\u306B\u6DF7\u305C\u306A\u3044\u3053\u3068\uFF01\u3011\u3002\u30D5\u30BF\u3092\u305B\u305A3\u301C4\u5206\u30B0\u30C4\u30B0\u30C4\u6CB8\u304B\u3057\u3066\u9162\u306E\u30C4\u30F3\u3068\u3057\u305F\u523A\u6FC0\u3092\u98DB\u3070\u3057\u307E\u3059\u3002",
        "ko": "\uB0A8\uC740 \uC591\uB150, \uB9C8\uB298, \uC6D4\uACC4\uC218 \uC78E\uC744 \uB123\uACE0 \uC2DD\uCD08 80ml\uC640 \uBB3C 180ml\uB97C \uBD93\uC2B5\uB2C8\uB2E4. \uB053\uC5B4\uC624\uB974\uBA74 \u3010\uC808\uB300\uB85C \uC813\uC9C0 \uB9C8\uC138\uC694!\u3011 \uB69C\uAED1\uC744 \uC5F4\uACE0 3~4\uBD84\uAC04 \uADF8\uB300\uB85C \uB053\uC5EC \uD1A1 \uC3D8\uB294 \uC0DD\uC2DD\uCD08 \uD5A5\uC744 \uB0A0\uB824\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 240,
      image: "/images/adobo-step3.jpg",
      crucialTips: {
        "zh-TW": "\u52A0\u918B\u5F8C\u7ACB\u5373\u652A\u62CC\u6703\u7834\u58DE\u9178\u5473\u7684\u9187\u5316\uFF0C\u4F7F\u6E6F\u6C41\u8B8A\u6FC1\u767C\u6F80\u3002\u975C\u7F6E\u6CB8\u9A30\u662F\u6BCF\u4F4D\u83F2\u7C4D\u5ABD\u5ABD\u4EE3\u4EE3\u76F8\u50B3\u7684\u7F8E\u5473\u9EC3\u91D1\u9435\u5247\uFF01",
        "en": "Stirring raw vinegar immediately results in harsh, chalky sourness. Letting it boil undisturbed transforms it into sweet, mellow umami.",
        "fil": "Kapag hinalo agad ang suka, magiging mapait o matapang ang asim. Hayaan itong kusa kumulo.",
        "ja": "\u9162\u3092\u5165\u308C\u3066\u3059\u3050\u304B\u304D\u6DF7\u305C\u308B\u3068\u9178\u5473\u304C\u30C8\u30B2\u30C8\u30B2\u3057\u304F\u306A\u308A\u307E\u3059\u3002\u3058\u3063\u3068\u6CB8\u9A30\u3092\u5F85\u3064\u306E\u304C\u672C\u5834\u306E\u639F\u3067\u3059\u3002",
        "ko": "\uC2DD\uCD08\uB97C \uB123\uC790\uB9C8\uC790 \uC800\uC73C\uBA74 \uAC70\uCE60\uACE0 \uB5AB\uC740 \uC2E0\uB9DB\uC774 \uB0A8\uC2B5\uB2C8\uB2E4. \uC190\uB300\uC9C0 \uC54A\uACE0 \uB053\uC774\uB294 \uAC83\uC774 \uD544\uB9AC\uD540 \uC5B4\uBA38\uB2C8\uB4E4\uC758 \uBD88\uBB38\uC728\uC785\uB2C8\uB2E4."
      }
    },
    {
      stepNumber: 4,
      title: { "zh-TW": "\u52A0\u84CB\u6162\u71C9\u81F3\u4E94\u82B1\u8089\u9165\u8EDF\u9165\u721B", "en": "Cover & Simmer on Low Heat until Tender", "fil": "Takpan at Pakuluan sa Mahinang Apoy", "ja": "\u30D5\u30BF\u3092\u3057\u3066\u5F31\u706B\u3067\u3058\u3063\u304F\u308A\u716E\u8FBC\u3080", "ko": "\uB69C\uAED1 \uB36E\uACE0 \uBB49\uADFC\uD55C \uC57D\uBD88\uC5D0 \uBD80\uB4DC\uB7FD\uAC8C \uC870\uB9AC\uAE30" },
      instruction: {
        "zh-TW": "\u52A0\u5165 1 \u8336\u5319\u4E8C\u7802\uFF0C\u62CC\u52FB\u3002\u84CB\u4E0A\u934B\u84CB\uFF0C\u8F49\u5C0F\u706B\u6162\u71C9 25-30 \u5206\u9418\uFF0C\u76F4\u5230\u4E94\u82B1\u8089\u8EDF\u5AE9\u5316\u53E3\uFF0C\u96DE\u8089\u9165\u8EDF\u591A\u6C41\uFF0C\u6E6F\u6C41\u5448\u73FE\u7425\u73C0\u900F\u4EAE\u8272\u3002",
        "en": "Stir in 1 tsp brown sugar. Cover with lid, turn heat down to low, and simmer gently for 25-30 minutes until the pork belly is meltingly tender and chicken absorbs the dark savory sauce.",
        "fil": "Ihalo ang 1 kutsaritang asukal. Takpan at hinaan ang apoy nang 25-30 minuto hanggang lumambot ang karne.",
        "ja": "\u9ED2\u7CD6\u5C0F\u3055\u30581\u3092\u52A0\u3048\u3066\u5168\u4F53\u3092\u6DF7\u305C\u307E\u3059\u3002\u30D5\u30BF\u3092\u3057\u3066\u5F31\u706B\u306725\u301C30\u5206\u3001\u8C5A\u8089\u304C\u7BB8\u3067\u5D29\u308C\u308B\u307B\u3069\u67D4\u3089\u304B\u304F\u306A\u308B\u307E\u3067\u716E\u8FBC\u307F\u307E\u3059\u3002",
        "ko": "\uD751\uC124\uD0D5 1\uC791\uC740\uC220\uC744 \uB123\uACE0 \uC11E\uC740 \uB4A4 \uB69C\uAED1\uC744 \uB36E\uACE0 \uC57D\uBD88\uC5D0\uC11C 25~30\uBD84\uAC04 \uBB49\uADFC\uD558\uAC8C \uC878\uC5EC \uACE0\uAE30\uB97C \uBD80\uB4DC\uB7FD\uAC8C \uC775\uD799\uB2C8\uB2E4."
      },
      durationSeconds: 1800,
      image: "/images/adobo-step4.jpg",
      cookwareVariations: [
        {
          cookware: "instantPot",
          tempAndSetting: "Instant Pot: Meat/Stew Mode (High Pressure) for 15 mins",
          instructionOverride: {
            "zh-TW": "\u58D3\u529B\u934B\u6A21\u5F0F\uFF1A\u4F7F\u7528 Saut\xE9\uFF08\u714E\u7092\uFF09\u6A94\u5C07\u8089\u584A\u8207\u849C\u7C92\u714E\u9999\uFF0C\u6CE8\u5165\u91AC\u6CB9\u3001\u918B\u8207\u6C34\uFF08\u6C34\u4EFD\u6E1B\u5C11\u81F3 120ml\uFF09\uFF0C\u52A0\u84CB\u9078 Meat/Stew \u9AD8\u58D3 15 \u5206\u9418\uFF0C\u81EA\u7136\u6D29\u58D3 10 \u5206\u9418\u3002\u958B\u84CB\u5F8C\u958B Saut\xE9 \u6A94\u5927\u706B\u6536\u6C41 5 \u5206\u9418\u81F3\u6CB9\u4EAE\u8D77\u7A20\u3002",
            "en": "Instant Pot Variation: Use Saut\xE9 mode to brown meat and garlic. Add marinade, vinegar, and water (reduce water to 120ml). Lock lid and cook on High Pressure for 15 mins, followed by 10 mins natural release. Open lid and switch back to Saut\xE9 for 5 mins to reduce glaze.",
            "fil": "Instant Pot: Gamitin ang Saut\xE9 mode para iprito ang karne. Ilagay ang sabaw (bawasan ang tubig sa 120ml). Isara at i-set sa High Pressure nang 15 minuto. I-saut\xE9 nang 5 minuto para lumapot ang sarsa.",
            "ja": "\u96FB\u6C17\u5727\u529B\u934B\u8A2D\u5B9A\uFF1ASaut\xE9\u30E2\u30FC\u30C9\u3067\u8089\u3092\u713C\u304D\u3001\u8ABF\u5473\u6599\u3068\u6C34\uFF08120ml\u306B\u6E1B\u91CF\uFF09\u3092\u52A0\u3048\u307E\u3059\u3002\u9AD8\u5727\u306715\u5206\u52A0\u5727\u8ABF\u7406\u5F8C\u300110\u5206\u84B8\u3089\u3057\u3066\u6E1B\u5727\u3002\u30D5\u30BF\u3092\u958B\u3051\u3066Saut\xE9\u30675\u5206\u716E\u8A70\u3081\u3066\u30C4\u30E4\u3092\u51FA\u3057\u307E\u3059\u3002",
            "ko": "\uC778\uC2A4\uD134\uD2B8\uD31F \uC124\uC815: \uBCF6\uC74C(Saut\xE9) \uBAA8\uB4DC\uB85C \uACE0\uAE30\uB97C \uAD7D\uACE0, \uC591\uB150\uACFC \uBB3C(120ml\uB85C \uAC10\uC18C)\uC744 \uB123\uC740 \uB4A4 \uACE0\uC555 15\uBD84 \uC870\uB9AC \uD6C4 10\uBD84 \uC790\uC5F0 \uAC10\uC555\uD569\uB2C8\uB2E4. \uB69C\uAED1\uC744 \uC5F4\uACE0 \uBCF6\uC74C \uBAA8\uB4DC\uB85C 5\uBD84\uAC04 \uAD6D\uBB3C\uC744 \uC878\uC5EC\uC90D\uB2C8\uB2E4."
          }
        }
      ]
    },
    {
      stepNumber: 5,
      title: { "zh-TW": "\u958B\u84CB\u5927\u706B\u6536\u6C41\uFF0C\u5F62\u6210\u6CB9\u4EAE\u7126\u7CD6\u5149\u6FA4", "en": "Uncover & Reduce to a Glossy Caramelized Glaze", "fil": "Patuyuin nang Kaunti Hanggang Kumintab ang Sarsa", "ja": "\u30D5\u30BF\u3092\u958B\u3051\u3066\u716E\u8A70\u3081\u3001\u7167\u308A\u713C\u304D\u72B6\u306E\u30C4\u30E4\u3092\u51FA\u3059", "ko": "\uB69C\uAED1 \uC5F4\uACE0 \uC13C \uBD88\uC5D0 \uC878\uC5EC \uC724\uAE30 \uB098\uB294 \uAE00\uB808\uC774\uC988 \uC644\uC131" },
      instruction: {
        "zh-TW": "\u63ED\u958B\u934B\u84CB\uFF0C\u8F49\u4E2D\u5927\u706B\u6536\u6C41 5-6 \u5206\u9418\uFF0C\u540C\u6642\u7528\u6E6F\u52FA\u5C07\u6FC3\u90C1\u6CB9\u4EAE\u7684\u849C\u9999\u91AC\u6C41\u4E0D\u65B7\u6DCB\u5728\u8089\u584A\u4E0A\uFF0C\u76F4\u5230\u6E6F\u6C41\u8B8A\u6FC3\u7E2E\u6210\u6CB9\u4EAE\u81A0\u8CEA\uFF08\u82E5\u559C\u6B61\u7126\u8106\u53E3\u611F\uFF0C\u53EF\u5C07\u8089\u584A\u653E\u9032\u6C23\u70B8\u934B 200\xB0C \u6C23\u70B8 3 \u5206\u9418\u56DE\u70E4\uFF09\u3002\u76DB\u76E4\u914D\u71B1\u547C\u547C\u7684\u767D\u98EF\uFF01",
        "en": "Remove lid, turn heat to medium-high, and simmer for 5-6 mins. Spoon the glossy garlic-vinegar oil over the meat continuously until the sauce reduces into a rich, lip-smacking lacquer. Serve over massive mounds of steaming white rice!",
        "fil": "Buksan ang takip at pakuluan sa katamtamang lakas ng apoy nang 5-6 minuto hanggang kumintab at lumapot ang sarsa. Ihain kasama ng mainit na kanin!",
        "ja": "\u30D5\u30BF\u3092\u53D6\u308A\u3001\u4E2D\u5F37\u706B\u30675\u301C6\u5206\u716E\u8A70\u3081\u307E\u3059\u3002\u30B9\u30D7\u30FC\u30F3\u3067\u6FC3\u539A\u306A\u716E\u6C41\u3092\u8089\u306B\u4F55\u5EA6\u3082\u56DE\u3057\u304B\u3051\u3001\u7F8E\u3057\u3044\u7167\u308A\u304C\u51FA\u305F\u3089\u5B8C\u6210\u3002\u708A\u304D\u305F\u3066\u306E\u3054\u98EF\u306E\u4E0A\u306B\u305F\u3063\u3077\u308A\u304B\u3051\u3066\u3069\u3046\u305E\uFF01",
        "ko": "\uB69C\uAED1\uC744 \uC5F4\uACE0 \uC911\uAC15\uBD88\uC5D0\uC11C 5~6\uBD84\uAC04 \uAD6D\uBB3C\uC744 \uB07C\uC5B9\uC5B4\uAC00\uBA70 \uC878\uC5EC\uC90D\uB2C8\uB2E4. \uC18C\uC2A4\uAC00 \uC790\uC791\uD558\uAC8C \uB18D\uCD95\uB418\uC5B4 \uACE0\uAE30\uC5D0 \uC724\uAE30\uAC00 \uB3CC\uBA74 \uC644\uC131\uC785\uB2C8\uB2E4. \uB530\uB73B\uD55C \uBC25 \uC704\uC5D0 \uB4EC\uBFCD \uC5B9\uC5B4 \uC990\uAE30\uC138\uC694!"
      },
      durationSeconds: 360,
      image: "/images/adobo-step5.jpg"
    }
  ],
  troubleshooting: [
    {
      id: "vinegar-too-sharp",
      problem: { "zh-TW": "\u9178\u5473\u55C6\u9F3B\u523A\u53E3\uFF0C\u4E0D\u5920\u67D4\u548C\u9187\u9999", "en": "Harsh and piercing vinegar taste", "fil": "Masyadong matapang ang asim ng suka", "ja": "\u9162\u306E\u9178\u5473\u304C\u5F37\u3059\u304E\u3066\u5589\u306B\u30C4\u30F3\u3068\u304F\u308B", "ko": "\uC2DD\uCD08 \uB9DB\uC774 \uB108\uBB34 \uAC15\uD558\uACE0 \uD1A1 \uC3E8" },
      cause: { "zh-TW": "\u52A0\u918B\u5F8C\u7ACB\u5373\u652A\u52D5\uFF0C\u6216\u52A0\u84CB\u904E\u65E9\uFF0C\u9178\u6C23\u88AB\u60B6\u5728\u934B\u4E2D\u7121\u6CD5\u63EE\u767C", "en": "Stirred the vinegar immediately or covered the pot before raw fumes could escape", "fil": "Hinalo agad ang suka o tinakpan agad ang kaldero", "ja": "\u9162\u3092\u5165\u308C\u305F\u76F4\u5F8C\u306B\u304B\u304D\u6DF7\u305C\u305F\u304B\u3001\u65E9\u3005\u306B\u30D5\u30BF\u3092\u3057\u3066\u9178\u6C17\u3092\u9589\u3058\u8FBC\u3081\u305F\u305F\u3081", "ko": "\uC2DD\uCD08\uB97C \uBD93\uACE0 \uBC14\uB85C \uC800\uC5C8\uAC70\uB098 \uB69C\uAED1\uC744 \uB108\uBB34 \uC77C\uCC0D \uB2EB\uC544 \uC2E0\uBBF8\uAC00 \uC99D\uBC1C\uD558\uC9C0 \uBABB\uD568" },
      solution: {
        "zh-TW": "\u52A0\u918B\u5F8C\u52D9\u5FC5\u5927\u706B\u6CB8\u9A30 3 \u5206\u9418\u4E14\u4E0D\u652A\u62CC\u3002\u82E5\u5DF2\u904E\u9178\uFF0C\u53EF\u88DC\u52A0 1/2 \u8336\u5319\u9ED1\u7CD6\u53CA 2 \u5927\u5319\u6E05\u6C34\uFF0C\u958B\u84CB\u5FAE\u6536\u6C41\u5373\u53EF\u633D\u6551\u3002",
        "en": "Let boil uncovered without stirring for 3 mins. Salvage by adding 1/2 tsp brown sugar and 2 tbsp water, then reduce gently.",
        "fil": "Pakuluan nang walang takip nang hindi hinahalo. Magdagdag ng kaunting asukal kung maasim pa rin.",
        "ja": "\u9162\u3092\u5165\u308C\u305F\u3089\u30D5\u30BF\u3092\u958B\u3051\u305F\u307E\u307E\u5F37\u706B\u30673\u5206\u653E\u7F6E\u3002\u9178\u5473\u304C\u6B8B\u308B\u5834\u5408\u306F\u9ED2\u7CD6\u5C0F\u3055\u3058\u534A\u5206\u3068\u6C34\u3092\u8DB3\u3057\u3066\u8ABF\u6574\u3057\u307E\u3059\u3002",
        "ko": "\uC2DD\uCD08\uB97C \uB123\uACE0 \uB69C\uAED1\uC744 \uC5F0 \uCC44 3\uBD84\uAC04 \uC813\uC9C0 \uB9C8\uC138\uC694. \uC774\uBBF8 \uC2DC\uB2E4\uBA74 \uD751\uC124\uD0D5 \uBC18 \uD2F0\uC2A4\uD47C\uACFC \uBB3C 2\uD070\uC220\uC744 \uB123\uACE0 \uC0B4\uC9DD \uB354 \uC878\uC5EC\uC90D\uB2C8\uB2E4."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u9694\u591C\u963F\u591A\u6CE2\u66F4\u7F8E\u5473\u5B9A\u5F8B\u3011\uFF1AAdobo \u716E\u597D\u7684\u7576\u5929\u5F88\u7F8E\u5473\uFF0C\u4F46\u653E\u5728\u51B0\u7BB1\u51B7\u85CF\u4E00\u591C\u5F8C\uFF0C\u8089\u8102\u8207\u918B\u3001\u849C\u9999\u5FB9\u5E95\u878D\u70BA\u4E00\u9AD4\uFF0C\u9694\u5929\u52A0\u71B1\u5403\u98A8\u5473\u76F4\u63A5\u8E8D\u5347 200%\uFF01",
      "en": "The Overnight Adobo Rule: Adobo is incredible today, but after resting overnight in the fridge, the pork fat, vinegar, and garlic harmonize into an out-of-this-world depth of flavor. Always make extra!",
      "fil": "Batas ng Adobo: Mas masarap ang adobo kapag pinalipas ang magdamag dahil sumisipsip ang sarsa sa laman ng karne.",
      "ja": "\u30A2\u30C9\u30DC\u306E\u9EC4\u91D1\u5F8B\uFF1A\u4F5C\u3063\u3066\u3059\u3050\u3082\u7F8E\u5473\u3067\u3059\u304C\u3001\u51B7\u8535\u5EAB\u3067\u4E00\u6669\u5BDD\u304B\u305B\u308B\u3068\u8089\u6C41\u3068\u9162\u3068\u30CB\u30F3\u30CB\u30AF\u304C\u5947\u8DE1\u7684\u306A\u8ABF\u548C\u3092\u9042\u3052\u3001\u7FCC\u65E5\u306F\u683C\u6BB5\u306B\u7F8E\u5473\u3057\u304F\u306A\u308A\u307E\u3059\u3002",
      "ko": "\uC544\uB3C4\uBCF4\uC758 \uBC95\uCE59: \uB2F9\uC77C\uB3C4 \uB9DB\uC788\uC9C0\uB9CC \uB0C9\uC7A5\uACE0\uC5D0 \uD558\uB8FB\uBC24 \uC7AC\uC6B4 \uB4A4 \uB2E4\uC74C \uB0A0 \uB370\uC6CC \uBA39\uC73C\uBA74 \uACE0\uAE30\uC640 \uC18C\uC2A4\uC758 \uAC10\uCE60\uB9DB\uC774 2\uBC30 \uC774\uC0C1 \uAE4A\uC5B4\uC9D1\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/sinigang.ts
var sinigang = {
  id: "sinigang",
  slug: "sinigang",
  title: {
    "zh-TW": "\u6B63\u5B97\u7F85\u671B\u5B50\u6392\u9AA8\u9178\u6E6F (Sinigang na Baboy)",
    "en": "Tamarind Pork Rib Sour Soup (Sinigang na Baboy)",
    "fil": "Sinigang na Baboy sa Sampalok",
    "ja": "\u672C\u5834\u30BF\u30DE\u30EA\u30F3\u30C9\u30DD\u30FC\u30AF\u9178\u5473\u30B9\u30FC\u30D7\uFF08\u30B7\u30CB\u30AC\u30F3\u30FB\u30CA\u30FB\u30D0\u30DC\u30A4\uFF09",
    "ko": "\uC815\uD1B5 \uD0C0\uB9C8\uB9B0\uB4DC \uB3FC\uC9C0\uAC08\uBE44 \uC2E0\uB9DB \uD0D5 (\uC2DC\uB2C8\uAC15 \uB098 \uBC14\uBCF4\uC774)"
  },
  subtitle: {
    "zh-TW": "\u4E16\u754C\u6700\u4F73\u6E6F\u54C1\u699C\u9996\u30FB\u719F\u6210\u7F85\u671B\u5B50\u958B\u80C3\u679C\u9178\u30FB\u7A7A\u5FC3\u83DC\u756A\u8304\u9BAE\u5AE9\u71C9\u6392\u9AA8",
    "en": "World\u2019s #1 Ranked Soup: Tangy Tamarind Broth, Pork Ribs & Fresh Water Spinach",
    "fil": "Paboritong sabaw ng pamilya na may maasim na sampalok, kangkong at labanos",
    "ja": "\u4E16\u754C\u30B9\u30FC\u30D7\u30E9\u30F3\u30AD\u30F3\u30B0\u4E16\u754C\u4E00\uFF01\u723D\u5FEB\u306A\u30BF\u30DE\u30EA\u30F3\u30C9\u306E\u9178\u5473\u3068\u9AA8\u4ED8\u304D\u8089\u306E\u65E8\u5473",
    "ko": "\uC138\uACC4 \uCD5C\uACE0 \uC218\uD504 1\uC704\uC5D0 \uBE5B\uB098\uB294 \uC2DC\uC6D0\uD558\uACE0 \uC0C1\uD07C\uD55C \uD0C0\uB9C8\uB9B0\uB4DC \uAC08\uBE44\uD0D5"
  },
  tagline: {
    "zh-TW": "\u98A8\u9761\u5168\u7403\u7684\u83F2\u5F8B\u8CD3\u570B\u5BF6\u9178\u6E6F\uFF0C\u9178\u723D\u958B\u80C3\u3001\u8089\u9999\u56DB\u6EA2\uFF0C\u559D\u4E00\u53E3\u6691\u6C23\u5168\u6D88",
    "en": "TasteAtlas World\u2019s Best Soup: irresistible mouthwatering sourness that warms the soul",
    "fil": "Ang pampagana at mainit na sabaw na laging hinahanap-hanap ng bawat Pilipino",
    "ja": "\u4E00\u53E3\u98F2\u3080\u3068\u3084\u307F\u3064\u304D\u306B\u306A\u308B\u7D76\u5999\u306A\u9178\u5473\u3002\u8102\u3063\u3053\u3044\u6599\u7406\u3082\u30B9\u30C3\u30AD\u30EA\u6D17\u3044\u6D41\u3059\u9B54\u6CD5\u306E\u30B9\u30FC\u30D7",
    "ko": "\uD55C \uC785 \uBA39\uC790\uB9C8\uC790 \uC785\uB9DB\uC744 \uB3CB\uC6B0\uB294 \uAE4A\uC740 \uC0B0\uBBF8\uC640 \uAD6C\uC218\uD55C \uACE0\uAE30 \uAD6D\uBB3C\uC758 \uC644\uBCBD\uD55C \uC870\uD654"
  },
  heroImage: "/images/sinigang.jpg",
  difficulty: "easy",
  prepTimeMinutes: 15,
  cookTimeMinutes: 45,
  defaultServings: 4,
  caloriesPerServing: 380,
  category: "soups",
  dietaryTags: ["classic", "glutenFree"],
  supportedCookware: ["traditional", "instantPot"],
  culture: {
    originRegion: {
      "zh-TW": "\u4ED6\u52A0\u797F\u539F\u9109\u8207\u5168\u83F2\u7FA4\u5CF6\uFF08Tagalog Region\uFF09",
      "en": "Tagalog Region & Across the Philippines",
      "fil": "Katagalugan at Buong Pilipinas",
      "ja": "\u30BF\u30AC\u30ED\u30B0\u5730\u65B9\u304A\u3088\u3073\u30D5\u30A3\u30EA\u30D4\u30F3\u5168\u57DF",
      "ko": "\uD0C0\uAC08\uB85C\uADF8 \uC9C0\uC5ED \uBC0F \uD544\uB9AC\uD540 \uC804\uC5ED"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u594E\u963F\u5761\u5927\u5E02\u5834\u751F\u9BAE\u98DF\u6524", "en": "Quiapo Wet Market Food Stalls", "fil": "Palengke ng Quiapo", "ja": "\u30AD\u30A2\u30DD\u5E02\u5834\u98DF\u5802", "ko": "\uD034\uC544\uD3EC \uC218\uC0B0\uC2DC\uC7A5 \uC2DD\uB2F9" },
      { "zh-TW": "\u5BBF\u9727\u5361\u723E\u90A6\u8001\u5E02\u5834", "en": "Carbon Market Eateries, Cebu", "fil": "Carbon Market sa Cebu", "ja": "\u30BB\u30D6\u30FB\u30AB\u30EB\u30DC\u30F3\u5E02\u5834", "ko": "\uC138\uBD80 \uCE74\uB974\uBCF8 \uC2DC\uC7A5" }
    ],
    historyStory: {
      "zh-TW": "Sinigang \u6E90\u81EA\u4ED6\u52A0\u797F\u8A9E\u300CSigang\u300D\uFF08\u6162\u706B\u7168\u71C9\uFF09\u3002\u83F2\u5F8B\u8CD3\u4EBA\u5728\u71B1\u5E36\u5CF6\u5DBC\u6C23\u5019\u4E2D\uFF0C\u5229\u7528\u91CE\u751F\u7684\u7F85\u671B\u5B50\uFF08Sampalok\uFF09\u3001\u9752\u8292\u679C\u6216\u5361\u7C73\u4E9E\u65AF\uFF08Kamias\uFF09\u7684\u5929\u7136\u679C\u9178\u4F86\u70F9\u716E\u8089\u985E\u8207\u6D77\u9BAE\u3002\u5176\u5FAE\u9178\u5E36\u9BAE\u7684\u6E05\u723D\u6ECB\u5473\uFF0C\u5728 2021 \u8207 2022 \u5E74\u9023\u7E8C\u88AB\u570B\u969B\u7F8E\u98DF\u6B0A\u5A01\u6307\u5357 TasteAtlas \u8A55\u9078\u70BA\u300C\u5168\u7403\u6700\u4F73\u6E6F\u54C1\u7B2C\u4E00\u540D\u300D\uFF01",
      "en": 'Derived from the Tagalog root "sigang" (to stew), indigenous Filipinos turned to local souring fruits like tamarind (sampalok), green mango, and kamias to create clean, revitalizing broths. It was voted the #1 Best Soup in the World by TasteAtlas multiple years in a row!',
      "fil": 'Mula sa salitang "sigang" na ibig sabihin ay ilaga. Ginagamitan ng maasim na prutas tulad ng sampalok, kamias, o bayabas. Ginawaran bilang pinakamasarap na sabaw sa buong mundo ng TasteAtlas.',
      "ja": "\u30BF\u30AC\u30ED\u30B0\u8A9E\u306E\u300C\u716E\u308B\uFF08\u30B7\u30AC\u30F3\uFF09\u300D\u304C\u8A9E\u6E90\u3002\u71B1\u5E2F\u3067\u98DF\u6B32\u3092\u523A\u6FC0\u3059\u308B\u305F\u3081\u3001\u81EA\u751F\u3059\u308B\u30BF\u30DE\u30EA\u30F3\u30C9\u306E\u679C\u5B9F\u306E\u9178\u5473\u3092\u6D3B\u304B\u3057\u3066\u4F5C\u3089\u308C\u307E\u3057\u305F\u3002\u4E16\u754C\u30B0\u30EB\u30E1\u30AC\u30A4\u30C9\u300CTasteAtlas\u300D\u3067\u4E16\u754C\u4E00\u306E\u30B9\u30FC\u30D7\u306B\u9078\u51FA\u3055\u308C\u305F\u540D\u4F5C\u3067\u3059\u3002",
      "ko": '\uD0C0\uAC08\uB85C\uADF8\uC5B4\uB85C "\uB053\uC774\uB2E4"\uB77C\uB294 \uB73B\uC5D0\uC11C \uC720\uB798\uD588\uC73C\uBA70, \uC57C\uC0DD \uD0C0\uB9C8\uB9B0\uB4DC\uC758 \uC0C1\uD07C\uD55C \uC0B0\uBBF8\uB97C \uD65C\uC6A9\uD574 \uACE0\uAE30\uC640 \uCC44\uC18C\uB97C \uC2DC\uC6D0\uD558\uAC8C \uB053\uC5EC\uB0B8 \uAD6D\uBB3C \uC694\uB9AC\uB85C \uC138\uACC4 \uCD5C\uACE0 \uC218\uD504 1\uC704\uC5D0 \uC120\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.'
    },
    filipinoScript: "Sinigang na Baboy sa Sampalok",
    filipinoPhonetics: "See-nee-gang nah Bah-boy sah Sahm-pah-lok",
    audioPronunciationText: "Pahingi po ng mainit na sabaw ng Sinigang na Baboy!"
  },
  ingredients: [
    {
      id: "pork-ribs",
      name: { "zh-TW": "\u8C6C\u5C0F\u6392\u6216\u5E36\u9AA8\u8EDF\u9AA8 (\u5207\u584A)", "en": "Pork Spare Ribs or Pork Belly (Cut into chunks)", "fil": "Buto-buto o Liempo ng Baboy", "ja": "\u8C5A\u30B9\u30DA\u30A2\u30EA\u30D6\uFF08\u4E00\u53E3\u5927\uFF09", "ko": "\uB3FC\uC9C0 \uB4F1\uAC08\uBE44 \uB610\uB294 \uC0BC\uACB9\uC0B4 (\uD55C\uC785 \uD06C\uAE30)" },
      amount: 600,
      unitMetric: "g",
      unitUS: "1.3 lb",
      isKeyFlavor: true,
      filipinoName: "Buto-buto ng Baboy",
      filipinoPronunciation: "Boo-toh Boo-toh nang Bah-boy"
    },
    {
      id: "tamarind-soup-mix",
      name: { "zh-TW": "\u5929\u7136\u7F85\u671B\u5B50\u9178\u6E6F\u7C89 (Knorr Sinigang Mix) \u6216\u65B0\u9BAE\u7F85\u671B\u5B50\u6CE5", "en": "Tamarind Soup Base Mix (Knorr Sinigang) or Fresh Tamarind Pulp", "fil": "Sinigang sa Sampalok Mix", "ja": "\u30BF\u30DE\u30EA\u30F3\u30C9\u30B9\u30FC\u30D7\u306E\u7D20\uFF08\u30AF\u30CE\u30FC\u30EB\u30FB\u30B7\u30CB\u30AC\u30F3\uFF09", "ko": "\uD0C0\uB9C8\uB9B0\uB4DC \uC218\uD504 \uBCA0\uC774\uC2A4 \uBBF9\uC2A4 (Knorr \uC2DC\uB2C8\uAC15 \uBBF9\uC2A4)" },
      amount: 40,
      unitMetric: "g",
      unitUS: "1.4 oz",
      isKeyFlavor: true,
      filipinoName: "Sampalok Mix",
      filipinoPronunciation: "Sahm-pah-lok Mix",
      substitute: {
        substituteName: { "zh-TW": "\u7D14\u7121\u7CD6\u7F85\u671B\u5B50\u6FC3\u7E2E\u818F 2 \u5927\u5319 + \u6AB8\u6AAC\u6C41 1 \u5927\u5319", "en": "Pure Tamarind Paste (2 tbsp) + Fresh Lemon Juice (1 tbsp)", "fil": "Purong Katas ng Sampalok at Lemon", "ja": "\u30BF\u30DE\u30EA\u30F3\u30C9\u30DA\u30FC\u30B9\u30C8\u5927\u3055\u30582 \uFF0B \u30EC\u30E2\u30F3\u679C\u6C41\u5927\u3055\u30581", "ko": "\uC21C\uC218 \uD0C0\uB9C8\uB9B0\uB4DC \uD398\uC774\uC2A4\uD2B8 2\uD070\uC220 + \uB808\uBAAC\uC999 1\uD070\uC220" },
        ratio: "1:1",
        explanation: { "zh-TW": "\u82E5\u8CB7\u4E0D\u5230 Knorr \u83F2\u5F8B\u8CD3\u5C08\u7528\u7F85\u671B\u5B50\u7C89\u5305\uFF0C\u53EF\u7528\u6771\u5357\u4E9E\u7D14\u7F85\u671B\u5B50\u818F\u8ABF\u6C34\uFF0C\u52A0\u5C11\u8A31\u6D0B\u8525\u8207\u9B5A\u9732\u8ABF\u914D\u3002", "en": "Tamarind paste delivers authentic botanical sourness. Whisk with warm water and a splash of fish sauce.", "fil": "Tunawin ang purong sampalok sa maligamgam na tubig.", "ja": "\u5E02\u8CA9\u306E\u30BF\u30DE\u30EA\u30F3\u30C9\u30DA\u30FC\u30B9\u30C8\u3092\u304A\u6E6F\u3067\u6EB6\u304B\u3057\u3001\u30CA\u30F3\u30D7\u30E9\u30FC\u3067\u5869\u6C17\u3092\u6574\u3048\u3066\u4EE3\u7528\u3067\u304D\u307E\u3059\u3002", "ko": "\uD0C0\uB9C8\uB9B0\uB4DC \uD398\uC774\uC2A4\uD2B8\uB97C \uB530\uB73B\uD55C \uBB3C\uC5D0 \uD480\uACE0 \uD53C\uC2DC\uC18C\uC2A4\uB85C \uAC04\uC744 \uB9DE\uCD94\uBA74 \uC815\uD1B5 \uB9DB\uC774 \uB0A9\uB2C8\uB2E4." },
        whereToBuy: { "zh-TW": "\u5404\u5927\u4E9E\u6D32\u8D85\u5E02\u8ABF\u5473\u5340\u6216\u7DB2\u8CFC", "en": "Asian markets, Seafood City, Amazon", "fil": "Supermarket o sari-sari store", "ja": "\u30A2\u30B8\u30A2\u98DF\u6750\u5E97\u30FB\u901A\u8CA9", "ko": "\uC544\uC2DC\uC548 \uB9C8\uD2B8 \uB610\uB294 \uC628\uB77C\uC778" }
      }
    },
    {
      id: "kangkong",
      name: { "zh-TW": "\u65B0\u9BAE\u7A7A\u5FC3\u83DC (\u6458\u6BB5\uFF0C\u7559\u4E0B\u9BAE\u5AE9\u83DC\u8449\u8207\u5AE9\u8396)", "en": "Fresh Water Spinach (Kangkong, trimmed)", "fil": "Kangkong", "ja": "\u7A7A\u82AF\u83DC\uFF08\u30AF\u30A6\u30B7\u30F3\u30B5\u30A4\uFF09", "ko": "\uC2E0\uC120\uD55C \uACF5\uC2EC\uCC44 (\uBAA8\uB2DD\uAE00\uB85C\uB9AC)" },
      amount: 150,
      unitMetric: "g",
      unitUS: "5.3 oz",
      isKeyFlavor: true,
      filipinoName: "Kangkong",
      filipinoPronunciation: "Kahng-kong"
    },
    {
      id: "radish",
      name: { "zh-TW": "\u767D\u863F\u8514 (\u53BB\u76AE\u5207\u539A\u5713\u7247)", "en": "White Daikon Radish (Sliced)", "fil": "Labanos", "ja": "\u5927\u6839\uFF08\u539A\u3081\u306E\u8F2A\u5207\u308A\uFF09", "ko": "\uBB34 (\uB450\uD23C\uD558\uAC8C \uBC18\uB2EC\uC370\uAE30)" },
      amount: 1,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Labanos",
      filipinoPronunciation: "Lah-bah-nos"
    },
    {
      id: "tomatoes",
      name: { "zh-TW": "\u719F\u756A\u8304 (\u5207\u5927\u584A)", "en": "Ripe Tomatoes (Quartered)", "fil": "Kamatis", "ja": "\u5B8C\u719F\u30C8\u30DE\u30C8\uFF08\u304F\u3057\u5207\u308A\uFF09", "ko": "\uC644\uC219 \uD1A0\uB9C8\uD1A0 (\uD07C\uC9C1\uD558\uAC8C \uAE4D\uB451\uC370\uAE30)" },
      amount: 2,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Kamatis",
      filipinoPronunciation: "Kah-mah-tees"
    },
    {
      id: "onion",
      name: { "zh-TW": "\u6D0B\u8525 (\u5207\u584A)", "en": "Yellow or Red Onion (Wedges)", "fil": "Sibuyas", "ja": "\u7389\u306D\u304E\uFF08\u304F\u3057\u5207\u308A\uFF09", "ko": "\uC591\uD30C (\uD07C\uC9C1\uD558\uAC8C \uC370\uAE30)" },
      amount: 1,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Sibuyas",
      filipinoPronunciation: "See-boo-yas"
    },
    {
      id: "siling-haba",
      name: { "zh-TW": "\u9577\u9752\u6912 (\u4E0D\u5207\u65B7\uFF0C\u63D0\u4F9B\u6E05\u5E7D\u6912\u9999)", "en": "Long Green Chili (Siling Haba, whole)", "fil": "Siling Haba (Pansigang)", "ja": "\u9752\u5510\u8F9B\u5B50\uFF08\u30B7\u30EA\u30F3\u30FB\u30CF\u30D0\u3001\u4E38\u3054\u3068\uFF09", "ko": "\uD48B\uACE0\uCD94/\uCCAD\uC591\uACE0\uCD94 (\uC790\uB974\uC9C0 \uC54A\uACE0 \uD1B5\uC73C\uB85C)" },
      amount: 2,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Siling Haba",
      filipinoPronunciation: "See-leeng Hah-bah"
    },
    {
      id: "patis",
      name: { "zh-TW": "\u83F2\u5F8B\u8CD3\u7D14\u9B5A\u9732 (Patis)", "en": "Philippine Fish Sauce (Patis)", "fil": "Patis", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u9B5A\u91A4\uFF08\u30D1\u30C6\u30A3\u30B9\uFF09", "ko": "\uD544\uB9AC\uD540 \uD53C\uC2DC\uC18C\uC2A4 (\uD30C\uD2F0\uC2A4)" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      isKeyFlavor: true,
      filipinoName: "Patis",
      filipinoPronunciation: "Pah-tees"
    },
    {
      id: "taro",
      name: { "zh-TW": "\u5C0F\u828B\u982D (\u53BB\u76AE\u5207\u584A\uFF0C\u716E\u81F3\u878D\u5316\u4F7F\u6E6F\u6C41\u5FAE\u7A20)", "en": "Small Taro Root / Gabi (Quartered to thicken broth)", "fil": "Gabi (Bahagyang pampalapot)", "ja": "\u30B5\u30C8\u30A4\u30E2\uFF08\u30BF\u30ED\u30A4\u30E2\u3001\u30B9\u30FC\u30D7\u306B\u3068\u308D\u307F\u3092\u3064\u3051\u308B\uFF09", "ko": "\uD1A0\uB780 (\uAD6D\uBB3C\uC744 \uAC78\uCB49\uD558\uAC8C \uB9CC\uB4DC\uB294 \uBE44\uACB0)" },
      amount: 2,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Gabi",
      filipinoPronunciation: "Gah-bee"
    },
    {
      id: "water",
      name: { "zh-TW": "\u6DD8\u7C73\u6C34\u6216\u6E05\u6C34 (\u6DD8\u7C73\u6C34\u80FD\u589E\u6DFB\u7C73\u9999\u7518\u9187)", "en": "Rice-washing water or plain water", "fil": "Hugas-bigas o Tubig", "ja": "\u7C73\u306E\u3068\u304E\u6C41\u307E\u305F\u306F\u6C34", "ko": "\uC300\uB728\uBB3C \uB610\uB294 \uBB3C" },
      amount: 1200,
      unitMetric: "ml",
      unitUS: "5 cups",
      filipinoName: "Hugas-bigas",
      filipinoPronunciation: "Hoo-gahs Bee-gahs"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u6C34\u716E\u6392\u9AA8\u53BB\u8840\u6C34\u4E26\u6162\u71C9\u6E05\u6E6F", "en": "Boil Ribs, Skim Scum & Simmer Base Broth", "fil": "Pakuluan ang Karne at Tanggalin ang Bula", "ja": "\u6392\u9AA8\uFF08\u30EA\u30D6\uFF09\u3092\u8339\u3067\u30A2\u30AF\u3092\u53D6\u308A\u51FA\u6C41\u3092\u3068\u308B", "ko": "\uAC08\uBE44\uB97C \uB053\uC5EC \uBD88\uC21C\uBB3C\uC744 \uAC77\uC5B4\uB0B4\uACE0 \uC721\uC218 \uB0B4\uAE30" },
      instruction: {
        "zh-TW": "\u5C07\u6392\u9AA8\u653E\u5165\u5927\u6E6F\u934B\u4E2D\uFF0C\u5012\u5165 1200ml \u6DD8\u7C73\u6C34\u6216\u6E05\u6C34\u3002\u5927\u706B\u716E\u6EFE\u5F8C\uFF0C\u7528\u6E6F\u52FA\u5FB9\u5E95\u6487\u53BB\u6D6E\u6CAB\u76F4\u5230\u6E6F\u6C34\u6F84\u6E05\u3002\u653E\u5165\u5207\u584A\u6D0B\u8525\u3001\u5207\u74E3\u756A\u8304\u8207\u53BB\u76AE\u828B\u982D\u584A\uFF0C\u8F49\u5C0F\u706B\u52A0\u84CB\u6162\u71C9 30-35 \u5206\u9418\uFF0C\u76F4\u5230\u6392\u9AA8\u8EDF\u5AE9\u3001\u828B\u982D\u8868\u9762\u5FAE\u5316\u3002",
        "en": "Place pork ribs into a large pot with 1200ml rice wash or water. Bring to a rapid boil, continuously skimming off all brown foam and scum for a pristine broth. Add chopped onions, tomatoes, and taro pieces. Lower heat to gentle simmer, cover, and cook 30-35 mins until pork is tender and taro begins to soften.",
        "fil": "Pakuluan ang buto-buto sa tubig o hugas-bigas. Tanggalin ang bula. Ilagay ang sibuyas, kamatis, at gabi. Takpan at pakuluan nang 30-35 minuto.",
        "ja": "\u934B\u306B\u6392\u9AA8\u3068\u7C73\u306E\u3068\u304E\u6C41\uFF08\u307E\u305F\u306F\u6C34\uFF09\u3092\u5165\u308C\u5F37\u706B\u306B\u304B\u3051\u307E\u3059\u3002\u30A2\u30AF\u3092\u4E01\u5BE7\u306B\u3059\u304F\u3044\u53D6\u308A\u3001\u7389\u306D\u304E\u3001\u30C8\u30DE\u30C8\u3001\u30B5\u30C8\u30A4\u30E2\u3092\u52A0\u3048\u307E\u3059\u3002\u5F31\u706B\u306B\u3057\u3066\u30D5\u30BF\u3092\u3057\u3001\u8089\u304C\u67D4\u3089\u304B\u304F\u306A\u308B\u307E\u306730\u301C35\u5206\u716E\u307E\u3059\u3002",
        "ko": "\uB0C4\uBE44\uC5D0 \uAC08\uBE44\uC640 \uC300\uB728\uBB3C\uC744 \uBD93\uACE0 \uC13C \uBD88\uC5D0 \uB053\uC785\uB2C8\uB2E4. \uB5A0\uC624\uB974\uB294 \uAC70\uD488\uC744 \uB9D0\uB054\uD788 \uAC77\uC5B4\uB0B8 \uB4A4 \uC591\uD30C, \uD1A0\uB9C8\uD1A0, \uD1A0\uB780\uC744 \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C 30~35\uBD84\uAC04 \uBB49\uADFC\uD558\uAC8C \uB053\uC5EC\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 2100,
      image: "/images/sinigang-step1.jpg",
      cookwareVariations: [
        {
          cookware: "instantPot",
          tempAndSetting: "Instant Pot: Soup Mode (High Pressure) for 18 mins",
          instructionOverride: {
            "zh-TW": "\u58D3\u529B\u934B\u6A21\u5F0F\uFF1A\u5C07\u6392\u9AA8\u3001\u6E05\u6C34\u3001\u756A\u8304\u3001\u6D0B\u8525\u8207\u828B\u982D\u5168\u653E\u5165\u5167\u81BD\uFF0C\u84CB\u7DCA\u95A5\u9580\u9078 Soup \u9AD8\u58D3 18 \u5206\u9418\uFF0C\u81EA\u7136\u6D29\u58D3 10 \u5206\u9418\u3002\u958B\u84CB\u5F8C\u6392\u9AA8\u8089\u5DF2\u5165\u53E3\u5373\u5316\uFF0C\u828B\u982D\u878D\u5316\u8D77\u6C99\uFF01",
            "en": "Instant Pot Variation: Put ribs, water, tomatoes, onions, and taro into inner pot. Cook on High Pressure (Soup setting) for 18 mins, then 10 mins natural pressure release. Tender ribs and creamy broth in record time!",
            "fil": "Instant Pot: Ilagay ang karne, tubig, kamatis, sibuyas, at gabi. I-set sa High Pressure nang 18 minuto.",
            "ja": "\u96FB\u6C17\u5727\u529B\u934B\u8A2D\u5B9A\uFF1A\u8089\u3001\u6C34\u3001\u30C8\u30DE\u30C8\u3001\u7389\u306D\u304E\u3001\u30B5\u30C8\u30A4\u30E2\u3092\u5165\u308C\u9AD8\u5727\u306718\u5206\u52A0\u5727\u8ABF\u7406\u300210\u5206\u84B8\u3089\u3057\u3066\u6E1B\u5727\u3057\u307E\u3059\u3002\u8089\u304C\u30DB\u30ED\u30DB\u30ED\u306B\u306A\u308A\u307E\u3059\u3002",
            "ko": "\uC778\uC2A4\uD134\uD2B8\uD31F \uC124\uC815: \uACE0\uAE30, \uBB3C, \uD1A0\uB9C8\uD1A0, \uC591\uD30C, \uD1A0\uB780\uC744 \uB123\uACE0 \uACE0\uC555(Soup)\uC73C\uB85C 18\uBD84 \uC870\uB9AC \uD6C4 10\uBD84 \uC790\uC5F0 \uAC10\uC555\uD569\uB2C8\uB2E4."
          }
        }
      ]
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u52A0\u5165\u767D\u863F\u8514\u8207\u9577\u9752\u6912\u71C9\u716E", "en": "Add Daikon Radish & Green Chilies", "fil": "Ilagay ang Labanos at Siling Haba", "ja": "\u5927\u6839\u3068\u9752\u5510\u8F9B\u5B50\u3092\u52A0\u3048\u3066\u716E\u308B", "ko": "\uBB34\uC640 \uD1B5 \uD48B\uACE0\uCD94\uB97C \uB123\uACE0 \uC775\uD788\uAE30" },
      instruction: {
        "zh-TW": "\u52A0\u5165\u5207\u7247\u767D\u863F\u8514\u548C\u6574\u689D\u5B8C\u6574\u7684\u9577\u9752\u6912\uFF08Siling Haba\uFF09\u3002\u8ABF\u5165 2 \u5927\u5319\u9B5A\u9732\uFF08Patis\uFF09\u3002\u7E7C\u7E8C\u52A0\u84CB\u71C9\u716E 6-8 \u5206\u9418\uFF0C\u76F4\u5230\u767D\u863F\u8514\u5448\u73FE\u534A\u900F\u660E\u6E05\u4EAE\u719F\u900F\u3002",
        "en": "Add the sliced radish and whole long green chilies (keep whole so they perfume the broth without overwhelming spicy heat). Season with 2 tbsp fish sauce (Patis). Simmer 6-8 mins until daikon is translucent.",
        "fil": "Ihalo ang labanos, siling haba, at patis. Pakuluan nang 6-8 minuto hanggang lumambot ang labanos.",
        "ja": "\u5927\u6839\u3001\u4E38\u3054\u3068\u306E\u9752\u5510\u8F9B\u5B50\uFF08\u5207\u3089\u306A\u3044\u3053\u3068\u3067\u9999\u308A\u306E\u307F\u3092\u79FB\u3059\uFF09\u3001\u9B5A\u91A4\u5927\u3055\u30582\u3092\u52A0\u3048\u307E\u3059\u3002\u30D5\u30BF\u3092\u3057\u3066\u5927\u6839\u304C\u900F\u304D\u901A\u308B\u307E\u30676\u301C8\u5206\u716E\u307E\u3059\u3002",
        "ko": "\uBB34\uC640 \uD1B5 \uD48B\uACE0\uCD94(\uC790\uB974\uC9C0 \uC54A\uC544\uC57C \uB9F5\uC9C0 \uC54A\uACE0 \uD5A5\uAE0B\uD568), \uD53C\uC2DC\uC18C\uC2A4 2\uD070\uC220\uC744 \uB123\uACE0 \uBB34\uAC00 \uD22C\uBA85\uD574\uC9C8 \uB54C\uAE4C\uC9C0 6~8\uBD84\uAC04 \uB354 \uB053\uC785\uB2C8\uB2E4."
      },
      durationSeconds: 480,
      image: "/images/sinigang-step2.jpg"
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u4E0B\u7F85\u671B\u5B50\u9178\u6E6F\u7C89\uFF0C\u8ABF\u51FA\u9EC3\u91D1\u9178\u5EA6", "en": "Stir in Tamarind Base & Adjust Tartness", "fil": "Ihalo ang Sinigang sa Sampalok Mix", "ja": "\u30BF\u30DE\u30EA\u30F3\u30C9\u306E\u7D20\u3092\u52A0\u3048\u9178\u5473\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u6574\u3048\u308B", "ko": "\uD0C0\uB9C8\uB9B0\uB4DC \uD30C\uC6B0\uB354\uB97C \uB123\uACE0 \uD669\uAE08 \uC0B0\uBBF8 \uB9DE\uCD94\uAE30" },
      instruction: {
        "zh-TW": "\u8F49\u4E2D\u5927\u706B\uFF0C\u6492\u5165\u7F85\u671B\u5B50\u9178\u6E6F\u7C89\uFF08\u53EF\u4F9D\u500B\u4EBA\u55DC\u9178\u7A0B\u5EA6\u5206\u6B21\u6DFB\u52A0\uFF09\uFF0C\u652A\u62CC\u81F3\u5B8C\u5168\u878D\u5316\u3002\u8A66\u5690\u6E6F\u982D\uFF0C\u61C9\u7576\u5448\u73FE\u660E\u4EAE\u9192\u8166\u3001\u4EE4\u4EBA\u751F\u6D25\u7684\u5929\u7136\u679C\u9178\u8207\u8089\u6E6F\u65E8\u5473\u4EA4\u7E54\u3002",
        "en": "Turn heat up to medium-high. Gradually pour in the tamarind soup mix, stirring well until fully dissolved. Taste the broth\u2014it should hit you with a bright, mouth-watering, punchy tartness balanced by savory pork broth.",
        "fil": "Ibuhos ang sampalok mix habang hinahalo. Tikman ang sabaw kung sapat na ang asim.",
        "ja": "\u706B\u3092\u5F37\u3081\u3001\u30BF\u30DE\u30EA\u30F3\u30C9\u306E\u7D20\u3092\u5C11\u3057\u305A\u3064\u52A0\u3048\u306A\u304C\u3089\u6EB6\u304B\u3057\u307E\u3059\u3002\u30B9\u30FC\u30D7\u3092\u5473\u898B\u3057\u3001\u30AD\u30E5\u30C3\u3068\u5FC3\u5730\u3088\u3044\u679C\u5B9F\u306E\u9178\u5473\u3068\u65E8\u5473\u304C\u8ABF\u548C\u3057\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3057\u307E\u3059\u3002",
        "ko": "\uBD88\uC744 \uC62C\uB9AC\uACE0 \uD0C0\uB9C8\uB9B0\uB4DC \uBBF9\uC2A4\uB97C \uACE8\uACE0\uB8E8 \uD480\uC5B4 \uB123\uC2B5\uB2C8\uB2E4. \uC785\uC548 \uAC00\uB4DD \uCE68\uC774 \uACE0\uC774\uB294 \uC0C1\uCF8C\uD55C \uC0B0\uBBF8\uAC00 \uD37C\uC9C0\uB3C4\uB85D \uAC04\uC744 \uC870\uC808\uD569\uB2C8\uB2E4."
      },
      durationSeconds: 120,
      image: "/images/sinigang-step3.jpg"
    },
    {
      stepNumber: 4,
      title: { "zh-TW": "\u4E0B\u9BAE\u5AE9\u7A7A\u5FC3\u83DC\uFF0C\u95DC\u706B\u9918\u6EAB\u71D9\u719F", "en": "Add Fresh Kangkong & Kill Heat to Wilt", "fil": "Ilagay ang Kangkong at Patayin ang Apoy", "ja": "\u7A7A\u82AF\u83DC\u3092\u5165\u308C\u3001\u4F59\u71B1\u3067\u30B5\u30C3\u3068\u706B\u3092\u901A\u3059", "ko": "\uC2E0\uC120\uD55C \uACF5\uC2EC\uCC44\uB97C \uB123\uACE0 \uBD88\uC744 \uB044\uACE0 \uC794\uC5F4\uB85C \uC775\uD788\uAE30" },
      instruction: {
        "zh-TW": "\u5C07\u6D17\u6DE8\u6458\u597D\u7684\u7A7A\u5FC3\u83DC\u5168\u90E8\u653E\u5165\u6EFE\u6E6F\u4E2D\uFF0C\u7528\u52FA\u5B50\u8F15\u8F15\u58D3\u5165\u6E6F\u5167\uFF0C\u7ACB\u5373\u95DC\u706B\uFF01\u84CB\u4E0A\u934B\u84CB\u71DC 1 \u5206\u9418\uFF0C\u5229\u7528\u6E6F\u982D\u9918\u6EAB\u5C07\u7A7A\u5FC3\u83DC\u71D9\u81F3\u7FE0\u7DA0\u8106\u5AE9\u3002\u8D81\u71B1\u5927\u7897\u76DB\u51FA\uFF0C\u9644\u4E0A\u4E00\u5C0F\u789F\u7D14\u9B5A\u9732\u52A0\u788E\u8FA3\u6912\u4F9B\u8638\u6392\u9AA8\uFF01",
        "en": "Submerge the fresh water spinach (kangkong) into the bubbling soup, then IMMEDIATELY turn off the burner! Cover pot and let sit for 1 minute so greens wilt into brilliant crisp emerald green. Serve piping hot with extra fish sauce and chili on the side!",
        "fil": "Ilubog ang kangkong sa sabaw at patayin AGAD ang apoy. Takpan nang 1 minuto bago ihain kasama ng patis at sili.",
        "ja": "\u7A7A\u82AF\u83DC\u3092\u71B1\u3044\u30B9\u30FC\u30D7\u306B\u6C88\u3081\u305F\u3089\u3010\u5373\u5EA7\u306B\u706B\u3092\u6B62\u3081\u307E\u3059\uFF01\u3011\u3002\u30D5\u30BF\u3092\u3057\u30661\u5206\u84B8\u3089\u3057\u3001\u30B7\u30E3\u30AD\u30B7\u30E3\u30AD\u306E\u9BAE\u3084\u304B\u306A\u7DD1\u8272\u306B\u4ED5\u4E0A\u3052\u307E\u3059\u3002\u5C0F\u76BF\u306E\u9B5A\u91A4\u3068\u5510\u8F9B\u5B50\u3092\u6DFB\u3048\u3066\u71B1\u3005\u3092\u3069\u3046\u305E\uFF01",
        "ko": "\uACF5\uC2EC\uCC44\uB97C \uAD6D\uBB3C\uC5D0 \uBC00\uC5B4 \uB123\uC740 \uB4A4 \u3010\uC989\uC2DC \uBD88\uC744 \uB055\uB2C8\uB2E4!\u3011 \uB69C\uAED1\uC744 \uB36E\uACE0 1\uBD84\uAC04 \uC794\uC5F4\uB85C \uC228\uC744 \uC8FD\uC5EC \uC544\uC0AD\uD558\uACE0 \uD478\uB978\uBE5B\uC744 \uC0B4\uB9BD\uB2C8\uB2E4. \uD53C\uC2DC\uC18C\uC2A4\uC640 \uACE0\uCD94\uB97C \uACC1\uB4E4\uC5EC \uC644\uC131\uD569\uB2C8\uB2E4."
      },
      durationSeconds: 90,
      image: "/images/sinigang-step4.jpg",
      crucialTips: {
        "zh-TW": "\u7A7A\u5FC3\u83DC\u5207\u5FCC\u5728\u6EFE\u6CB8\u706B\u4E0A\u4E45\u716E\uFF0C\u5426\u5247\u6703\u767C\u9ED1\u8B8A\u8EDF\u721B\u5931\u53BB\u9748\u9B42\uFF01\u95DC\u706B\u9918\u6EAB\u6D78\u719F\u624D\u80FD\u4FDD\u6301\u9752\u7FE0\u723D\u8106\u3002",
        "en": "Never boil kangkong over high heat or it turns brown and slimy. Residual heat wilts it to perfect tenderness.",
        "fil": "Huwag pakuluan ang kangkong nang matagal para hindi mangitim.",
        "ja": "\u7A7A\u82AF\u83DC\u306F\u716E\u8FBC\u307F\u3059\u304E\u308B\u3068\u9ED2\u305A\u3093\u3067\u30C9\u30ED\u30C9\u30ED\u306B\u306A\u308A\u307E\u3059\u3002\u706B\u3092\u6B62\u3081\u305F\u5F8C\u306E\u4F59\u71B1\u8ABF\u7406\u304C\u6700\u5927\u306E\u30B3\u30C4\u3067\u3059\u3002",
        "ko": "\uACF5\uC2EC\uCC44\uB294 \uD384\uD384 \uB053\uB294 \uBD88\uC5D0\uC11C \uC624\uB798 \uC775\uD788\uBA74 \uAE4C\uB9E3\uAC8C \uBCC0\uD558\uACE0 \uBB3C\uB7EC\uC9D1\uB2C8\uB2E4. \uBD88\uC744 \uB044\uACE0 \uC794\uC5F4\uB85C \uC775\uD600\uC57C \uD569\uB2C8\uB2E4."
      }
    }
  ],
  troubleshooting: [
    {
      id: "too-sour",
      problem: { "zh-TW": "\u7F85\u671B\u5B50\u7C89\u52A0\u592A\u591A\uFF0C\u6E6F\u982D\u904E\u9178\u4EE4\u4EBA\u76BA\u7709", "en": "Broth is overpoweringly sour", "fil": "Masyadong maasim ang sabaw", "ja": "\u9178\u5473\u304C\u5F37\u3059\u304E\u3066\u9178\u3063\u3071\u3059\u304E\u308B", "ko": "\uC218\uD504\uAC00 \uB108\uBB34 \uC154\uC11C \uBA39\uAE30 \uBD80\uB2F4\uC2A4\uB7EC\uC6C0" },
      cause: { "zh-TW": "\u4E00\u6B21\u6027\u5012\u5165\u6574\u5927\u5305\u9178\u6E6F\u7C89\uFF0C\u6C34\u91CF\u4E0D\u8DB3", "en": "Poured entire packet at once or evaporated too much water", "fil": "Napasobra ang lagay ng sinigang mix", "ja": "\u7C89\u672B\u3092\u4E00\u5EA6\u306B\u5165\u308C\u3059\u304E\u305F\u304B\u3001\u6C34\u5206\u304C\u84B8\u767A\u3057\u3059\u304E\u305F\u305F\u3081", "ko": "\uBBF9\uC2A4\uB97C \uD55C \uBC88\uC5D0 \uB108\uBB34 \uB9CE\uC774 \uB123\uC5C8\uAC70\uB098 \uBB3C\uC774 \uC878\uC544\uB4E6" },
      solution: {
        "zh-TW": "\u52A0\u5165\u534A\u7897\u71B1\u958B\u6C34\u6216\u6E05\u6C34\u7A00\u91CB\uFF0C\u4E26\u591A\u653E\u5169\u7247\u767D\u863F\u8514\u6216\u534A\u9846\u719F\u756A\u8304\uFF0C\u5FAE\u716E 3 \u5206\u9418\u5373\u53EF\u5E73\u8861\u9178\u5EA6\u3002",
        "en": "Add 1/2 cup hot water, along with extra tomato wedges or daikon slices to balance the acidity.",
        "fil": "Magdagdag ng kaunting mainit na tubig o dagdag na kamatis.",
        "ja": "\u304A\u6E6F\u3092\u534A\u30AB\u30C3\u30D7\u8DB3\u3057\u3001\u30C8\u30DE\u30C8\u3084\u5927\u6839\u3092\u5C11\u3057\u52A0\u3048\u30663\u5206\u307B\u3069\u5F31\u706B\u3067\u716E\u308B\u3068\u9178\u5473\u304C\u843D\u3061\u7740\u304D\u307E\u3059\u3002",
        "ko": "\uB530\uB73B\uD55C \uBB3C \uBC18 \uCEF5\uC744 \uBD93\uACE0 \uD1A0\uB9C8\uD1A0\uB97C \uBC18 \uAC1C \uB354 \uB123\uC5B4 3\uBD84\uAC04 \uB053\uC5EC\uC8FC\uBA74 \uC0B0\uBBF8\uAC00 \uBD80\uB4DC\uB7EC\uC6CC\uC9D1\uB2C8\uB2E4."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u6DD8\u7C73\u6C34\u9B54\u6CD5\u3011\uFF1A\u716E\u83F2\u5F8B\u8CD3\u9178\u6E6F\u5F37\u70C8\u63A8\u85A6\u4F7F\u7528\u6D17\u7C73\u6642\u7684\u7B2C\u4E8C\u904D\u300C\u6DD8\u7C73\u6C34\uFF08Hugas-bigas\uFF09\u300D\u4EE3\u66FF\u6E05\u6C34\uFF0C\u5929\u7136\u6FB1\u7C89\u80FD\u8B93\u6E6F\u9AD4\u66F4\u6EAB\u6F64\u7518\u6ED1\uFF0C\u8207\u7F85\u671B\u5B50\u9178\u5473\u5B8C\u7F8E\u878D\u5408\uFF01",
      "en": 'Pro Tip: Using "Hugas-bigas" (the second rinse water from washing your rice) creates an authentic silky body that binds the tamarind tartness to the pork fat.',
      "fil": "Tip ng Kusinero: Gamitin ang ikalawang hugas-bigas bilang sabaw upang maging malinamnam at malapot ang sabaw.",
      "ja": "\u79D8\u4F1D\u306E\u6280\uFF1A\u6C34\u306E\u304B\u308F\u308A\u306B\u7C73\u306E2\u756A\u76EE\u306E\u7814\u304E\u6C41\u3092\u4F7F\u3046\u3068\u3001\u3067\u3093\u3077\u3093\u304C\u9178\u5473\u306E\u89D2\u3092\u4E38\u3081\u3001\u6975\u4E0A\u306E\u307E\u308D\u3084\u304B\u3055\u3092\u751F\u307F\u51FA\u3057\u307E\u3059\u3002",
      "ko": "\uBE44\uBC95: \uC300\uC744 \uC53B\uC740 \uB450 \uBC88\uC9F8 \uC300\uB728\uBB3C\uC744 \uC721\uC218\uB85C \uC0AC\uC6A9\uD558\uBA74 \uC804\uBD84\uC9C8\uC774 \uD0C0\uB9C8\uB9B0\uB4DC\uC758 \uC0B0\uBBF8\uB97C \uAC10\uC2F8\uC8FC\uC5B4 \uD55C\uCE35 \uBD80\uB4DC\uB7FD\uACE0 \uAE4A\uC740 \uB9DB\uC774 \uB0A9\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/lumpiaShanghai.ts
var lumpiaShanghai = {
  id: "lumpia-shanghai",
  slug: "lumpia-shanghai",
  title: {
    "zh-TW": "\u6B63\u5B97\u9165\u8106\u83F2\u5F0F\u70B8\u6625\u6372 (Lumpia Shanghai)",
    "en": "Crispy Filipino Spring Rolls (Lumpia Shanghai)",
    "fil": "Lumpia Shanghai (Malutong na Paborito)",
    "ja": "\u30B5\u30AF\u30B5\u30AF\u672C\u5834\u30EB\u30F3\u30D4\u30A2\uFF08\u30D5\u30A3\u30EA\u30D4\u30F3\u98A8\u4E00\u53E3\u63DA\u3052\u6625\u5DFB\u304D\uFF09",
    "ko": "\uBC14\uC0AD\uD55C \uD544\uB9AC\uD540\uC2DD \uD280\uAE40 \uCD98\uAD8C \uB8F8\uD53C\uC544 \uC0C1\uD558\uC774"
  },
  subtitle: {
    "zh-TW": "\u5BB6\u5EAD\u6176\u5178\u79D2\u6BBA\u7B2C\u4E00\u540D\u30FB\u76AE\u8106\u5982\u7D19\u7206\u6C41\u8089\u9921\u30FB\u9178\u751C\u8FA3\u91AC\u7D55\u4F73\u62CD\u6A94",
    "en": "Fiesta Crowdfavorite: Ultra-Thin Shatteringly Crisp Skin, Juicy Pork Filling & Sweet Chili Dip",
    "fil": "Laging nauubos sa handaan; napakaraming sahog at sobrang lutong",
    "ja": "\u30D1\u30FC\u30C6\u30A3\u30FC\u3067\u771F\u3063\u5148\u306B\u6D88\u3048\u308B\u8D85\u4EBA\u6C17\u30D5\u30A3\u30F3\u30AC\u30FC\u30D5\u30FC\u30C9\uFF01\u8584\u76AE\u30D1\u30EA\u30D1\u30EA\u306E\u6975\u307F",
    "ko": "\uD544\uB9AC\uD540 \uC794\uCE6B\uC0C1\uC758 \uBD80\uB3D9\uC758 \uC778\uAE30 1\uC704, \uC587\uACE0 \uBC14\uC0AD\uD55C \uD53C\uC5D0 \uC721\uC999 \uAC00\uB4DD\uD55C \uC18C"
  },
  tagline: {
    "zh-TW": "\u4E00\u4E0A\u684C\u77AC\u9593\u88AB\u6436\u5149\u7684\u83F2\u5F0F\u805A\u6703\u9748\u9B42\uFF0C\u6C23\u70B8\u934B\u8F15\u9B06\u505A\u51FA\u8584\u8106\u9165\u9999",
    "en": "The ultimate party snack that vanishes in seconds\u2014golden, crispy, and addictive",
    "fil": "Ang pinakahinahanap sa bawat handaan sa Pilipinas, laging bitbit sa salo-salo",
    "ja": "\u8AB0\u3082\u304C\u624B\u3092\u4F38\u3070\u3059\u9EC4\u91D1\u8272\u306E\u30B9\u30CA\u30C3\u30AF\u3002\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u3067\u3082\u5B8C\u74A7\u306A\u30B5\u30AF\u30B5\u30AF\u611F",
    "ko": "\uBAA8\uB450\uAC00 \uAC00\uC7A5 \uBA3C\uC800 \uC190\uC744 \uBED7\uB294 \uD30C\uD2F0\uC758 \uC8FC\uC778\uACF5. \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uB85C\uB3C4 \uC190\uC27D\uAC8C \uC644\uC131"
  },
  heroImage: "/images/lumpia-shanghai.jpg",
  difficulty: "medium",
  prepTimeMinutes: 25,
  cookTimeMinutes: 15,
  defaultServings: 6,
  caloriesPerServing: 320,
  category: "streetFood",
  dietaryTags: ["classic"],
  supportedCookware: ["traditional", "airFryer"],
  culture: {
    originRegion: {
      "zh-TW": "\u99AC\u5C3C\u62C9\u83EF\u4EBA\u79FB\u6C11\u878D\u5408\u6599\u7406 (Binondo, Manila)",
      "en": "Binondo, Manila (Chinatown fusion)",
      "fil": "Binondo, Maynila (Impluwensyang Tsino)",
      "ja": "\u30DE\u30CB\u30E9\u30FB\u30C1\u30E3\u30A4\u30CA\u30BF\u30A6\u30F3\uFF08\u30D3\u30CE\u30F3\u30C9\uFF09\u767A\u7965",
      "ko": "\uB9C8\uB2D0\uB77C \uBE44\uB17C\uB3C4 \uCC28\uC774\uB098\uD0C0\uC6B4"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u5CB7\u502B\u6D1B\u8001\u8857 (Binondo, Manila)", "en": "Binondo Heritage Alleys", "fil": "Binondo Maynila", "ja": "\u30D3\u30CE\u30F3\u30C9\u4E2D\u83EF\u8857", "ko": "\uBE44\uB17C\uB3C4 \uCC28\uC774\uB098\uD0C0\uC6B4 \uAC70\uB9AC" },
      { "zh-TW": "\u5168\u83F2\u5404\u5F0F\u5BB6\u5EAD\u751F\u65E5\u6D3E\u5C0D\u8207 Fiesta \u6176\u5178", "en": "Fiesta buffets & street fairs", "fil": "Kahit saang handaan sa Pilipinas", "ja": "\u5168\u6BD4\u30D5\u30A3\u30A8\u30B9\u30BF\u5C4B\u53F0", "ko": "\uD544\uB9AC\uD540 \uC804\uC5ED \uD30C\uD2F0 \uBDD4\uD398" }
    ],
    historyStory: {
      "zh-TW": "\u95A9\u5357\u83EF\u4EBA\u79FB\u6C11\u5728\u6578\u767E\u5E74\u524D\u5C07\u6F64\u9905\uFF08Lumpia\uFF09\u5E36\u5230\u99AC\u5C3C\u62C9\uFF0C\u83F2\u5F8B\u8CD3\u4EBA\u5C07\u5176\u6539\u9020\u6210\u7D30\u9577\u3001\u7CBE\u7DFB\u3001\u4E00\u53E3\u54AC\u4E0B\u723D\u8106\u7206\u6C41\u7684\u300CLumpia Shanghai\u300D\u3002\u5728\u4EFB\u4F55\u83F2\u5F8B\u8CD3\u4EBA\u751F\u65E5\u3001\u6D17\u79AE\u6216\u5A5A\u79AE\u6176\u5178\u4E0A\uFF0C\u82E5\u9910\u684C\u4E0A\u6C92\u6709\u9019\u9053\u91D1\u9EC3\u70B8\u6625\u6372\uFF0C\u6D3E\u5C0D\u5C31\u7A31\u4E0D\u4E0A\u5B8C\u6574\uFF01",
      "en": "Fujian Chinese traders brought spring rolls to Manila centuries ago. Filipinos transformed them into slender, cigar-sized rolls packed with seasoned minced pork, carrots, and aromatics. Today, no Filipino fiesta is complete without an overflowing mountain of golden Lumpia!",
      "fil": "Dinala ng mga mangangalakal na Tsino sa Pilipinas at naging paboritong pagkain sa bawat selebrasyon tulad ng Pasko at kaarawan.",
      "ja": "\u798F\u5EFA\u306E\u79FB\u6C11\u304C\u4F1D\u3048\u305F\u6625\u5DFB\u304D\u304C\u3001\u30D5\u30A3\u30EA\u30D4\u30F3\u3067\u7D30\u8EAB\u306E\u4E00\u53E3\u30B5\u30A4\u30BA\u306B\u9032\u5316\u3002\u7D30\u304B\u304F\u523B\u3093\u3060\u91CE\u83DC\u3068\u3072\u304D\u8089\u3092\u6975\u8584\u306E\u76AE\u3067\u5DFB\u304D\u3001\u30AB\u30EA\u30C3\u3068\u63DA\u3052\u308B\u56FD\u6C11\u7684\u30D5\u30A3\u30F3\u30AC\u30FC\u30D5\u30FC\u30C9\u3068\u306A\u308A\u307E\u3057\u305F\u3002",
      "ko": "\uC911\uAD6D \uD478\uC820\uC131 \uC0C1\uC778\uB4E4\uC774 \uC804\uD30C\uD55C \uCD98\uAD8C\uC774 \uD544\uB9AC\uD540\uC5D0\uC11C \uD55C\uC785\uC5D0 \uBA39\uAE30 \uC88B\uC740 \uAC00\uB298\uACE0 \uBC14\uC0AD\uD55C \uD615\uD0DC\uB85C \uBC1C\uC804\uD558\uC600\uC73C\uBA70, \uBAA8\uB4E0 \uCD95\uC81C\uC640 \uC794\uCE58\uC5D0 \uC808\uB300 \uBE60\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    },
    filipinoScript: "Lumpia Shanghai na Baboy",
    filipinoPhonetics: "Loom-pyah Shang-high nah Bah-boy",
    audioPronunciationText: "Pabili po ng sampung pirasong malutong na Lumpia Shanghai!"
  },
  ingredients: [
    {
      id: "minced-pork",
      name: { "zh-TW": "\u8C6C\u7D30\u7D5E\u8089 (\u80A5\u7626\u6BD4 2:8)", "en": "Ground Pork (80% lean)", "fil": "Giniling na Baboy", "ja": "\u8C5A\u3072\u304D\u8089\uFF08\u8D64\u8EAB8\uFF1A\u8102\u8EAB2\uFF09", "ko": "\uB3FC\uC9C0\uACE0\uAE30 \uB2E4\uC9D0\uC721 (\uBAA9\uC0B4/\uC55E\uB2E4\uB9AC\uC0B4)" },
      amount: 400,
      unitMetric: "g",
      unitUS: "14 oz",
      isKeyFlavor: true,
      filipinoName: "Giniling na Baboy",
      filipinoPronunciation: "Gee-nee-leeng nang Bah-boy"
    },
    {
      id: "lumpia-wrappers",
      name: { "zh-TW": "\u8584\u6625\u6372\u76AE (\u8D85\u8584\u6625\u6372\u76AE)", "en": "Thin Spring Roll Wrappers (Lumpia Wrappers)", "fil": "Pabalat ng Lumpia", "ja": "\u6625\u5DFB\u304D\u306E\u76AE\uFF08\u8584\u624B\uFF09", "ko": "\uCD98\uAD8C\uD53C (\uC587\uC740 \uAC83)" },
      amount: 25,
      unitMetric: "sheet",
      unitUS: "sheet",
      isKeyFlavor: true,
      filipinoName: "Pabalat ng Lumpia",
      filipinoPronunciation: "Pah-bah-laht nang Loom-pyah"
    },
    {
      id: "carrots",
      name: { "zh-TW": "\u80E1\u863F\u8514 (\u5207\u8D85\u7D30\u788E\u788E\u4E01)", "en": "Carrots (Finely minced)", "fil": "Karot (Pinong-pino)", "ja": "\u4EBA\u53C2\uFF08\u6975\u7D30\u307F\u3058\u3093\u5207\u308A\uFF09", "ko": "\uB2F9\uADFC (\uB9E4\uC6B0 \uC798\uAC8C \uB2E4\uC9D0)" },
      amount: 1,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Karot",
      filipinoPronunciation: "Kah-rot"
    },
    {
      id: "onion",
      name: { "zh-TW": "\u6D0B\u8525 (\u5207\u6975\u7D30\u4E01)", "en": "Yellow Onion (Finely minced)", "fil": "Sibuyas", "ja": "\u7389\u306D\u304E\uFF08\u6975\u7D30\u307F\u3058\u3093\u5207\u308A\uFF09", "ko": "\uC591\uD30C (\uC798\uAC8C \uB2E4\uC9D0)" },
      amount: 1,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Sibuyas",
      filipinoPronunciation: "See-boo-yas"
    },
    {
      id: "garlic",
      name: { "zh-TW": "\u5927\u849C\u672B", "en": "Garlic (Finely minced)", "fil": "Bawang", "ja": "\u306B\u3093\u306B\u304F\uFF08\u307F\u3058\u3093\u5207\u308A\uFF09", "ko": "\uB2E4\uC9C4 \uB9C8\uB298" },
      amount: 4,
      unitMetric: "clove",
      unitUS: "clove",
      filipinoName: "Bawang",
      filipinoPronunciation: "Bah-wang"
    },
    {
      id: "scallions",
      name: { "zh-TW": "\u9752\u8525\u82B1", "en": "Green Onions (Finely chopped)", "fil": "Dahon ng Sibuyas", "ja": "\u4E07\u80FD\u306D\u304E\uFF08\u5C0F\u53E3\u5207\u308A\uFF09", "ko": "\uC1A1\uC1A1 \uC36C \uCABD\uD30C" },
      amount: 3,
      unitMetric: "stalk",
      unitUS: "stalk",
      filipinoName: "Dahon ng Sibuyas",
      filipinoPronunciation: "Dah-hon nang See-boo-yas"
    },
    {
      id: "egg",
      name: { "zh-TW": "\u96DE\u86CB (\u4F5C\u70BA\u8089\u9921\u9ECF\u8457\u5291)", "en": "Egg (as binder for filling)", "fil": "Itlog (Pang-bind)", "ja": "\u5375\uFF08\u3064\u306A\u304E\u7528\uFF09", "ko": "\uB2EC\uAC40 (\uBC18\uC8FD \uC810\uC131\uC6A9)" },
      amount: 1,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Itlog",
      filipinoPronunciation: "Eet-log"
    },
    {
      id: "soy-sauce",
      name: { "zh-TW": "\u7D14\u91C0\u9020\u91AC\u6CB9", "en": "Soy Sauce", "fil": "Toyo", "ja": "\u91A4\u6CB9", "ko": "\uAC04\uC7A5" },
      amount: 1.5,
      unitMetric: "tbsp",
      unitUS: "1.5 tbsp",
      filipinoName: "Toyo",
      filipinoPronunciation: "Toh-yoh"
    },
    {
      id: "sesame-oil",
      name: { "zh-TW": "\u7D14\u829D\u9EBB\u9999\u6CB9", "en": "Sesame Oil", "fil": "Mantika ng Linga", "ja": "\u3054\u307E\u6CB9", "ko": "\uCC38\uAE30\uB984" },
      amount: 1,
      unitMetric: "tsp",
      unitUS: "1 tsp",
      filipinoName: "Linga Oil",
      filipinoPronunciation: "Leeng-ah Oil"
    },
    {
      id: "sweet-chili-sauce",
      name: { "zh-TW": "\u751C\u8FA3\u91AC (\u6CBE\u91AC\u5FC5\u5099)", "en": "Sweet Chili Sauce (for dipping)", "fil": "Sweet Chili Sauce", "ja": "\u30B9\u30A4\u30FC\u30C8\u30C1\u30EA\u30BD\u30FC\u30B9\uFF08\u30C7\u30A3\u30C3\u30D7\u7528\uFF09", "ko": "\uC2A4\uC704\uD2B8 \uCE60\uB9AC\uC18C\uC2A4 (\uCC0D\uBA39\uC6A9)" },
      amount: 4,
      unitMetric: "tbsp",
      unitUS: "4 tbsp",
      isKeyFlavor: true,
      filipinoName: "Sweet Chili Sauce",
      filipinoPronunciation: "Sweet Chee-lee Sauce"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u8ABF\u88FD\u591A\u6C41\u9BAE\u9999\u8089\u9921", "en": "Mix Seasoned Pork Filling", "fil": "Ihanda at Haluin ang Palaman", "ja": "\u3072\u304D\u8089\u3068\u91CE\u83DC\u306E\u5177\u6750\u3092\u3088\u304F\u6DF7\u305C\u308B", "ko": "\uB2E4\uC9C4 \uB3FC\uC9C0\uACE0\uAE30\uC640 \uCC44\uC18C \uBC18\uC8FD \uCE58\uB300\uAE30" },
      instruction: {
        "zh-TW": "\u5728\u5927\u7897\u4E2D\u653E\u5165\u7D5E\u8089\u3001\u788E\u80E1\u863F\u8514\u3001\u6D0B\u8525\u4E01\u3001\u849C\u672B\u3001\u8525\u82B1\uFF0C\u6253\u5165\u4E00\u9846\u96DE\u86CB\uFF0C\u52A0\u5165\u91AC\u6CB9\u3001\u829D\u9EBB\u9999\u6CB9\u3001\u534A\u8336\u5319\u9E7D\u8207\u9ED1\u80E1\u6912\u7C89\u3002\u7528\u624B\u6216\u7B77\u5B50\u9806\u8457\u540C\u4E00\u65B9\u5411\u652A\u62CC\u7D04 2 \u5206\u9418\uFF0C\u76F4\u5230\u8089\u9921\u8D77\u81A0\u5E36\u6709\u9ECF\u6027\u3002",
        "en": "Combine ground pork, minced carrots, onions, garlic, green onions, and egg in a bowl. Season with soy sauce, sesame oil, 1/2 tsp salt, and pepper. Mix vigorously in one direction for 2 minutes until sticky and homogenous.",
        "fil": "Pagsamahin ang giniling na baboy, karot, sibuyas, bawang, dahon ng sibuyas, itlog, toyo, mantika ng linga, asin at paminta sa isang mangkok.",
        "ja": "\u30DC\u30A6\u30EB\u306B\u8C5A\u3072\u304D\u8089\u3001\u4EBA\u53C2\u3001\u7389\u306D\u304E\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u30CD\u30AE\u3001\u5375\u3001\u91A4\u6CB9\u3001\u3054\u307E\u6CB9\u3001\u5869\u80E1\u6912\u3092\u5165\u308C\u3001\u7C98\u308A\u304C\u51FA\u308B\u307E\u3067\u624B\u65E9\u304F\u7DF4\u308A\u5408\u308F\u305B\u307E\u3059\u3002",
        "ko": "\uBCFC\uC5D0 \uB2E4\uC9C4 \uB3FC\uC9C0\uACE0\uAE30, \uB2F9\uADFC, \uC591\uD30C, \uB9C8\uB298, \uD30C, \uB2EC\uAC40, \uAC04\uC7A5, \uCC38\uAE30\uB984, \uC18C\uAE08 \uD6C4\uCD94\uB97C \uB123\uACE0 \uCC30\uAE30\uAC00 \uC0DD\uAE38 \uB54C\uAE4C\uC9C0 \uD55C \uBC29\uD5A5\uC73C\uB85C \uCE58\uB300\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 180,
      image: "/images/lumpia-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u7DCA\u5BC6\u5305\u88F9\u7D30\u9577\u6625\u6372\u96EA\u8304\u72C0", "en": "Wrap into Slender Cigar Rolls", "fil": "Balutin nang Mahigpit ang Lumpia", "ja": "\u7D30\u9577\u304F\u304D\u3063\u3061\u308A\u3068\u6625\u5DFB\u304D\u3092\u5DFB\u304F", "ko": "\uC2DC\uAC00 \uBAA8\uC591\uC73C\uB85C \uC587\uACE0 \uB2E8\uB2E8\uD558\uAC8C \uB9D0\uAE30" },
      instruction: {
        "zh-TW": "\u6524\u958B\u4E00\u5F35\u8584\u6625\u6372\u76AE\uFF0C\u5728\u4E00\u5074\u92EA\u4E0A\u7D04 1.5 \u5927\u5319\u7D30\u9577\u689D\u8089\u9921\u3002\u5C07\u5E95\u908A\u7DCA\u7DCA\u5F80\u4E0A\u7FFB\u6298\u5305\u88F9\u8089\u9921\uFF0C\u5169\u5074\u6298\u5165\uFF0C\u7DCA\u5BC6\u5411\u524D\u6372\u6210\u5747\u52FB\u7684\u7D30\u96EA\u8304\u72C0\u3002\u5C01\u53E3\u8655\u62B9\u5C11\u8A31\u6C34\u6216\u6C34\u6FB1\u7C89\u9ECF\u7DCA\u3002\u7528\u4E7E\u6DE8\u526A\u5200\u526A\u6210\u7D04 5-6 \u516C\u5206\u4E00\u53E3\u5927\u5C0F\u9577\u5EA6\u3002",
        "en": "Lay a wrapper flat. Place 1.5 tbsp of meat filling along one edge in a thin, pencil-thick log. Roll tightly from bottom, tucking sides inward, rolling forward into a slender cigar. Dab edge with water to seal. Cut each roll into 2-3 bite-sized pieces with clean kitchen scissors.",
        "fil": "Maglagay ng 1.5 kutsarang palaman sa pabalat. Irolyo nang mahigpit at lagyan ng kaunting tubig sa dulo para dumikit. Gupitin sa tamang haba.",
        "ja": "\u6625\u5DFB\u304D\u306E\u76AE\u3092\u5E83\u3052\u3001\u624B\u524D\u306B\u7D30\u9577\u304F\u5177\u3092\u7F6E\u304D\u307E\u3059\u3002\u7A7A\u6C17\u304C\u5165\u3089\u306A\u3044\u3088\u3046\u304D\u3064\u3081\u306B\u5DFB\u304D\u3001\u4E21\u7AEF\u3092\u6298\u3063\u3066\u30B9\u30C6\u30A3\u30C3\u30AF\u72B6\u306B\u4E38\u3081\u3001\u6C34\u3067\u7CCA\u4ED8\u3051\u3057\u307E\u3059\u3002\u30CF\u30B5\u30DF\u3067\u4E00\u53E3\u5927\u306B\u5207\u308A\u5206\u3051\u307E\u3059\u3002",
        "ko": "\uCD98\uAD8C\uD53C \uC704\uC5D0 \uBC18\uC8FD\uC744 \uC587\uACE0 \uAE38\uAC8C \uC62C\uB9B0 \uB4A4 \uACF5\uAE30\uAC00 \uB4E4\uC5B4\uAC00\uC9C0 \uC54A\uAC8C \uB2E8\uB2E8\uD788 \uB9D0\uC544\uC90D\uB2C8\uB2E4. \uB05D\uBD80\uBD84\uC5D0 \uBB3C\uC744 \uBB3B\uD600 \uBD99\uC778 \uB4A4 \uAC00\uC704\uB85C \uBA39\uAE30 \uC88B\uC740 \uD06C\uAE30\uB85C \uC790\uB985\uB2C8\uB2E4."
      },
      durationSeconds: 900,
      image: "/images/lumpia-step2.jpg",
      crucialTips: {
        "zh-TW": "\u8089\u9921\u5207\u5FCC\u5305\u592A\u7C97\uFF0C\u5426\u5247\u70B8\u6642\u76AE\u7126\u4E86\u5167\u90E8\u9084\u6C92\u719F\uFF01\u7D30\u9577\u5F62\u72C0\u80FD\u78BA\u4FDD\u8089\u9921 3-4 \u5206\u9418\u5167\u5FEB\u901F\u719F\u900F\u591A\u6C41\u3002",
        "en": "Keep the rolls slender (pencil thickness). If rolled too thick, the outside will burn before the raw pork inside cooks through!",
        "fil": "Huwag gawing masyadong mataba ang lumpia para maluto nang husto ang loob nang hindi nasusunog ang balat.",
        "ja": "\u592A\u304F\u5DFB\u304D\u3059\u304E\u306A\u3044\u3053\u3068\uFF01\u7D30\u8EAB\u306B\u5DFB\u304F\u3053\u3068\u3067\u3001\u77ED\u6642\u9593\u3067\u4E2D\u307E\u3067\u706B\u304C\u901A\u308A\u3001\u5916\u5074\u304C\u7126\u3052\u308B\u306E\u3092\u9632\u304E\u307E\u3059\u3002",
        "ko": "\uB108\uBB34 \uB450\uAECD\uAC8C \uB9D0\uBA74 \uAECD\uC9C8\uC740 \uD0C0\uACE0 \uC18D\uC740 \uC548 \uC775\uC744 \uC218 \uC788\uC73C\uB2C8, \uC5F0\uD544 \uAD75\uAE30\uB85C \uC587\uACE0 \uAC00\uB298\uAC8C \uB9C8\uB294 \uAC83\uC774 \uD575\uC2EC\uC785\uB2C8\uB2E4."
      }
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u6CB9\u70B8\u81F3\u91D1\u9EC3\u9165\u8106\u6216\u6C23\u70B8\u51FA\u934B", "en": "Deep Fry or Air Fry to Golden Crunch", "fil": "Iprito sa Mainit na Mantika o Air Fryer", "ja": "\u30AB\u30EA\u30C3\u3068\u9EC4\u91D1\u8272\u306B\u63DA\u3052\u308B\uFF08\u307E\u305F\u306F\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\uFF09", "ko": "\uD669\uAE08\uBE5B\uC73C\uB85C \uBC14\uC0AD\uD558\uAC8C \uD280\uAE30\uAE30 (\uB610\uB294 \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4)" },
      instruction: {
        "zh-TW": "\u3010\u50B3\u7D71\u70B8\u6CD5\u3011\u6CB9\u934B\u5012\u6CB9\u71D2\u81F3 175\xB0C\uFF08\u7B77\u5B50\u63D2\u5165\u5192\u7D30\u5BC6\u5C0F\u6CE1\uFF09\uFF0C\u4E0B\u6625\u6372\u4E2D\u706B\u70B8 3-4 \u5206\u9418\u81F3\u8868\u9762\u5448\u73FE\u5747\u52FB\u91D1\u9EC3\u9165\u8106\uFF0C\u6488\u51FA\u7ACB\u8D77\u701D\u6CB9\u3002\u3010\u6C23\u70B8\u934B\u6A21\u5F0F\u8ACB\u53C3\u898B\u5207\u63DB\u3011\u3002\u8D81\u71B1\u8638\u751C\u8FA3\u91AC\u5927\u53E3\u4EAB\u7528\uFF01",
        "en": "Traditional Fry: Heat oil to 175\xB0C (350\xB0F). Deep-fry lumpia in batches for 3-4 mins until dazzling golden and crackly crisp. Drain vertically on paper towels. Serve piping hot with sweet chili sauce!",
        "fil": "Iprito sa katamtamang lakas ng mantika nang 3-4 minuto hanggang maging ginintuang dilaw at malutong.",
        "ja": "\u63DA\u3052\u6CB9\u3092175\u2103\u306B\u71B1\u3057\u3001\u91CD\u306A\u3089\u306A\u3044\u3088\u3046\u306B\u5165\u308C\u30663\u301C4\u5206\u3001\u30AD\u30C4\u30CD\u8272\u306B\u306A\u308B\u307E\u3067\u63DA\u3052\u307E\u3059\u3002\u6CB9\u3092\u5207\u3063\u3066\u30B9\u30A4\u30FC\u30C8\u30C1\u30EA\u30BD\u30FC\u30B9\u3092\u6DFB\u3048\u307E\u3059\u3002",
        "ko": "175\uB3C4\uB85C \uB2EC\uAD70 \uAE30\uB984\uC5D0 3~4\uBD84\uAC04 \uB178\uB987\uB178\uB987\uD558\uACE0 \uBC14\uC0AD\uD558\uAC8C \uD280\uACA8\uB0C5\uB2C8\uB2E4. \uAE30\uB984\uC744 \uBE7C\uACE0 \uC2A4\uC704\uD2B8 \uCE60\uB9AC\uC18C\uC2A4\uC640 \uD568\uAED8 \uC11C\uBE59\uD569\uB2C8\uB2E4."
      },
      durationSeconds: 300,
      image: "/images/lumpia-step3.jpg",
      cookwareVariations: [
        {
          cookware: "airFryer",
          tempAndSetting: "Air Fryer: 195\xB0C (385\xB0F) for 8-10 mins (brush with oil)",
          instructionOverride: {
            "zh-TW": "\u6C23\u70B8\u934B\u6A21\u5F0F\uFF1A\u5C07\u5305\u597D\u7684\u6625\u6372\u55AE\u5C64\u5E73\u92EA\u5728\u6C23\u70B8\u7C43\u4E2D\uFF0C\u8868\u9762\u5237\u4E0A\u8584\u8584\u4E00\u5C64\u98DF\u7528\u6CB9\u3002\u4EE5 195\xB0C \u6C23\u70B8 8-10 \u5206\u9418\uFF0C\u4E2D\u9014\u7FFB\u9762\u4E00\u6B21\uFF0C\u76F4\u5230\u6574\u6839\u6625\u6372\u91D1\u9EC3\u7206\u8106\uFF0C\u96F6\u6B98\u6CB9\u8D85\u7D1A\u6E05\u723D\uFF01",
            "en": "Air Fryer Variation: Arrange lumpia in a single layer in the basket without overlapping. Brush or spray generously with cooking oil. Air fry at 195\xB0C (385\xB0F) for 8-10 mins, shaking basket halfway through, until shatteringly crisp!",
            "fil": "Paraan sa Air Fryer: Pahiran ng mantika ang ibabaw. I-air fry sa 195\xB0C nang 8-10 minuto, baligtarin sa kalahating oras.",
            "ja": "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u8A2D\u5B9A\uFF1A\u91CD\u306A\u3089\u306A\u3044\u3088\u3046\u4E26\u3079\u3001\u6CB9\u3092\u30CF\u30B1\u3067\u5168\u4F53\u306B\u5857\u308A\u307E\u3059\u3002195\u2103\u30678\u301C10\u5206\u3001\u9014\u4E2D\u3067\u4E00\u5EA6\u88CF\u8FD4\u3057\u306A\u304C\u3089\u30AD\u30C4\u30CD\u8272\u306B\u713C\u304D\u4E0A\u3052\u307E\u3059\u3002",
            "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uC124\uC815: \uACB9\uCE58\uC9C0 \uC54A\uAC8C \uB123\uACE0 \uC624\uC77C\uC744 \uACE8\uACE0\uB8E8 \uBC1C\uB77C\uC90D\uB2C8\uB2E4. 195\xB0C\uC5D0\uC11C 8~10\uBD84\uAC04 \uC911\uAC04\uC5D0 \uD55C \uBC88 \uB4A4\uC9D1\uC5B4\uAC00\uBA70 \uBC14\uC0AD\uD558\uAC8C \uD280\uACA8\uB0C5\uB2C8\uB2E4."
          }
        }
      ]
    }
  ],
  troubleshooting: [
    {
      id: "wrapper-burst",
      problem: { "zh-TW": "\u6625\u6372\u5728\u6CB9\u70B8\u6642\u5916\u76AE\u7206\u88C2\u7834\u6D1E\uFF0C\u8089\u9921\u6D41\u51FA", "en": "Wrappers burst open while frying", "fil": "Pumutok ang pabalat habang piniprito", "ja": "\u63DA\u3052\u3066\u3044\u308B\u6700\u4E2D\u306B\u76AE\u304C\u7834\u308C\u3066\u4E2D\u8EAB\u304C\u51FA\u3066\u3057\u307E\u3046", "ko": "\uD280\uAE38 \uB54C \uCD98\uAD8C\uD53C\uAC00 \uD130\uC838 \uB0B4\uC6A9\uBB3C\uC774 \uD758\uB7EC\uB098\uC634" },
      cause: { "zh-TW": "\u8089\u9921\u542B\u6709\u904E\u591A\u852C\u83DC\u6C34\u5206\uFF0C\u6216\u6372\u5F97\u592A\u9B06\u6B98\u7559\u904E\u591A\u7A7A\u6C23\u53D7\u71B1\u81A8\u8139", "en": "Filling was too watery or rolls were wrapped loosely with trapped air pockets", "fil": "Masyadong maluwag ang pagkakabalot o may natirang hangin sa loob", "ja": "\u5177\u6750\u306E\u6C34\u5206\u304C\u591A\u3044\u304B\u3001\u5DFB\u304D\u65B9\u304C\u7DE9\u304F\u5185\u90E8\u306E\u7A7A\u6C17\u304C\u81A8\u5F35\u3057\u305F\u305F\u3081", "ko": "\uBC18\uC8FD\uC5D0 \uC218\uBD84\uC774 \uB108\uBB34 \uB9CE\uAC70\uB098 \uD5D0\uAC81\uAC8C \uB9D0\uC544 \uB0B4\uBD80 \uACF5\uAE30\uAC00 \uD33D\uCC3D\uD568" },
      solution: {
        "zh-TW": "\u5207\u788E\u7684\u6D0B\u8525\u8207\u80E1\u863F\u8514\u52D9\u5FC5\u5438\u4E7E\u6C34\u5206\uFF1B\u5305\u6625\u6372\u6642\u52D9\u5FC5\u7DCA\u5BE6\u5411\u524D\u6372\uFF0C\u64E0\u51FA\u6240\u6709\u7A7A\u6C23\uFF0C\u5C01\u53E3\u7528\u6C34\u5FB9\u5E95\u9ECF\u7DCA\u3002",
        "en": "Pat minced vegetables dry before mixing. Wrap firmly to expel all air pockets.",
        "fil": "Patuyuin ang gulay at higpitan ang pagkakabalot.",
        "ja": "\u91CE\u83DC\u306E\u6C34\u6C17\u3092\u3057\u3063\u304B\u308A\u5207\u308A\u3001\u7A7A\u6C17\u304C\u5165\u3089\u306A\u3044\u3088\u3046\u30AD\u30E5\u30C3\u3068\u786C\u3081\u306B\u5DFB\u304F\u306E\u304C\u30B3\u30C4\u3067\u3059\u3002",
        "ko": "\uB2E4\uC9C4 \uCC44\uC18C\uC758 \uBB3C\uAE30\uB97C \uC81C\uAC70\uD558\uACE0, \uACF5\uAE30\uB97C \uBE7C\uB0B4\uBA70 \uB2E8\uB2E8\uD788 \uB9D0\uC544\uC8FC\uC138\uC694."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u51B7\u51CD\u96A8\u5403\u5927\u6CD5\u3011\uFF1A\u83F2\u5F8B\u8CD3\u5BB6\u5EAD\u5E38\u4E00\u6B21\u5305\u4E0A\u4E00\u767E\u689D\u6625\u6372\uFF0C\u6574\u9F4A\u6392\u5728\u70E4\u76E4\u4E0A\u51B7\u51CD\u5B9A\u578B\u5F8C\u88DD\u5165\u5BC6\u5C01\u888B\u3002\u8981\u5403\u6642\u300C\u7121\u9700\u9000\u51B0\u300D\uFF0C\u76F4\u63A5\u653E\u9032\u6C23\u70B8\u934B\u6216\u6CB9\u934B\u70B8\u719F\uFF0C\u662F\u5BB6\u4E2D\u6700\u5B8C\u7F8E\u7684\u96A8\u53EB\u96A8\u5230\u6DF1\u591C\u7F8E\u98DF\uFF01",
      "en": "Pro Freezer Hack: Filipinos make lumpia in batches of 100! Freeze them flat on trays, then bag them. Fry directly from frozen WITHOUT thawing for instant late-night crispy magic!",
      "fil": "Tip sa Freezer: Pwedeng i-freeze ang hilaw na lumpia at iprito nang direkta mula sa freezer nang hindi na kailangang i-defrost.",
      "ja": "\u51B7\u51CD\u4FDD\u5B58\u306E\u77E5\u6075\uFF1A\u4E00\u5EA6\u306B\u305F\u304F\u3055\u3093\u5DFB\u3044\u3066\u51B7\u51CD\u5EAB\u306B\u5E38\u5099\u3002\u89E3\u51CD\u305B\u305A\u51CD\u3063\u305F\u307E\u307E\u63DA\u3052\u308B\u3060\u3051\u3067\u3001\u3044\u3064\u3067\u3082\u63DA\u3052\u305F\u3066\u30B5\u30AF\u30B5\u30AF\u304C\u697D\u3057\u3081\u307E\u3059\uFF01",
      "ko": "\uB0C9\uB3D9 \uAFC0\uD301: \uD55C \uBC88\uC5D0 \uB300\uB7C9\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uD2B8\uB808\uC774\uC5D0 \uC5BC\uB9B0 \uB4A4 \uC9C0\uD37C\uBC31\uC5D0 \uBCF4\uAD00\uD558\uC138\uC694. \uD574\uB3D9 \uC5C6\uC774 \uB0C9\uB3D9 \uC0C1\uD0DC \uADF8\uB300\uB85C \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uB098 \uAE30\uB984\uC5D0 \uD280\uAE30\uBA74 \uC5B8\uC81C\uB4E0 \uC644\uBCBD\uD569\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/kwekKwek.ts
var kwekKwek = {
  id: "kwek-kwek",
  slug: "kwek-kwek",
  title: {
    "zh-TW": "\u8857\u982D\u91D1\u9EC3\u8106\u76AE\u70B8\u9D6A\u9D89\u86CB (Kwek-Kwek & Tokneneng)",
    "en": "Street-Style Crispy Orange Battered Quail Eggs (Kwek-Kwek)",
    "fil": "Kwek-Kwek at Tokneneng ng Kanto",
    "ja": "\u540D\u7269\u5C4B\u53F0\u30B0\u30EB\u30E1 \u30AF\u30EF\u30AF\u30EF\uFF08\u63DA\u3052\u30A6\u30BA\u30E9\u5375\u306E\u30AA\u30EC\u30F3\u30B8\u8863\u63DA\u3052\uFF09",
    "ko": "\uD544\uB9AC\uD540 \uAD6D\uBBFC \uAE38\uAC70\uB9AC \uAC04\uC2DD \uD018\uD06C\uD018\uD06C (\uC8FC\uD669\uC0C9 \uC637\uC744 \uC785\uC740 \uD280\uAE40 \uBA54\uCD94\uB9AC\uC54C)"
  },
  subtitle: {
    "zh-TW": "\u99AC\u5C3C\u62C9\u8857\u982D\u624B\u63A8\u8ECA\u7B2C\u4E00\u9738\u4E3B\u30FB\u5929\u7136\u80ED\u8102\u6A39\u6A59\u8272\u8106\u6BBC\u30FB\u8F9B\u8FA3\u6D0B\u8525\u849C\u918B\u8638\u91AC",
    "en": "The #1 Philippine Street Cart Snack: Neon Orange Annatto Batter, Crispy Shell & Spiced Sinamak Vinegar",
    "fil": "Pambansang merienda sa kanto na isinasawsaw sa maanghang na suka at matamis na sarsa",
    "ja": "\u30DE\u30CB\u30E9\u306E\u8857\u89D2\u3067\u5FC5\u305A\u51FA\u4F1A\u3046\u9BAE\u3084\u304B\u306A\u30AA\u30EC\u30F3\u30B8\u8272\u306E\u5C4B\u53F0\u30D5\u30FC\u30C9\uFF01\u7279\u88FD\u30B9\u30D1\u30A4\u30B7\u30FC\u9162\u3067",
    "ko": "\uB9C8\uB2D0\uB77C \uB178\uC810 \uC5B4\uB514\uC11C\uB098 \uBCFC \uC218 \uC788\uB294 \uC8FC\uD669\uBE5B \uBC14\uC0AD\uD55C \uD280\uAE40\uC637\uACFC \uB9E4\uCF64\uC0C8\uCF64 \uC2DD\uCD08 \uC18C\uC2A4"
  },
  tagline: {
    "zh-TW": "\u6BCF\u4E00\u652F\u7AF9\u7C64\u4E32\u8D77 4 \u9846\u6EFE\u71D9\u91D1\u9EC3\u5C0F\u86CB\uFF0C\u653E\u9032\u8001\u7239\u7279\u8ABF\u91AC\u6C41\u5927\u7F50\u6D78\u900F\u624D\u662F\u7CBE\u9AD3",
    "en": "Crispy outside, tender egg inside\u2014the quintessential Philippine street food ritual",
    "fil": "Napakasarap tuhugin at isawsaw sa baso ng masarap na sukang may sili at sibuyas",
    "ja": "\u5916\u306F\u30B5\u30AF\u30B5\u30AF\u4E2D\u306F\u30DB\u30AF\u30DB\u30AF\uFF01\u7518\u8F9B\u30BD\u30FC\u30B9\u3068\u8F9B\u53E3\u9162\u306E\u30C0\u30D6\u30EB\u30C7\u30A3\u30C3\u30D7\u304C\u73FE\u5730\u6D41",
    "ko": "\uAC89\uC740 \uD06C\uB7F0\uCE58\uD558\uACE0 \uC18D\uC740 \uB2F4\uBC31\uD55C \uBA54\uCD94\uB9AC\uC54C. \uB9E4\uCF64\uD55C \uC591\uD30C \uC2DD\uCD08\uC5D0 \uD479 \uCC0D\uC5B4 \uBA39\uB294 \uBB18\uBBF8"
  },
  heroImage: "/images/kwek-kwek.jpg",
  difficulty: "easy",
  prepTimeMinutes: 15,
  cookTimeMinutes: 10,
  defaultServings: 4,
  caloriesPerServing: 260,
  category: "streetFood",
  dietaryTags: ["classic", "vegetarian"],
  supportedCookware: ["traditional", "airFryer"],
  culture: {
    originRegion: {
      "zh-TW": "\u5927\u99AC\u5C3C\u62C9\u5730\u5340\u8857\u982D\u6D41\u52D5\u5C0F\u5403\u6524 (Manila Street Carts)",
      "en": "Street food carts of Metro Manila",
      "fil": "Mga Kariton ng Street Food sa Maynila",
      "ja": "\u30DE\u30CB\u30E9\u5E02\u8857\u5730\u306E\u5C4B\u53F0\u8857\u767A\u7965",
      "ko": "\uB9C8\uB2D0\uB77C \uAE38\uAC70\uB9AC \uD3EC\uC7A5\uB9C8\uCC28"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u594E\u963F\u5761\u6559\u5802\u5468\u908A\u8857\u5DF7", "en": "Quiapo Plaza Miranda", "fil": "Plaza Miranda, Quiapo", "ja": "\u30AD\u30A2\u30DD\u5E83\u5834\u5C4B\u53F0\u7FA4", "ko": "\uD034\uC544\uD3EC \uD50C\uB77C\uC790 \uBBF8\uB780\uB2E4 \uB178\uC810" },
      { "zh-TW": "\u8056\u6258\u99AC\u65AF\u5927\u5B78\u5468\u908A\u7F8E\u98DF\u8857 (UST Dapitan)", "en": "UST Dapitan & Noval Student Food Street", "fil": "Dapitan St., UST Maynila", "ja": "\u30B5\u30F3\u30C8\u30FB\u30C8\u30DE\u30B9\u5927\u5B66\u524D\u5C4B\u53F0\u901A\u308A", "ko": "UST \uB300\uD559\uAC00 \uAE38\uAC70\uB9AC \uC74C\uC2DD \uAC70\uB9AC" }
    ],
    historyStory: {
      "zh-TW": "\u50B3\u8AAA Kwek-Kwek \u8D77\u6E90\u65BC\u5927\u99AC\u5C3C\u62C9\u4E00\u4F4D\u8857\u908A\u6524\u8CA9\uFF0C\u5728\u716E\u525D\u9D6A\u9D89\u86CB\u6642\u4E0D\u5C0F\u5FC3\u5F04\u7834\u4E86\u86CB\u767D\uFF0C\u70BA\u4E86\u4E0D\u6D6A\u8CBB\uFF0C\u4FBF\u5C07\u7834\u86CB\u88F9\u4E0A\u52A0\u4E86\u5929\u7136\u80ED\u8102\u6A39\uFF08Atsuete\uFF09\u7D05\u6728\u6A59\u8272\u9EB5\u7CCA\u4E0B\u6CB9\u934B\u70B8\u5F97\u9165\u8106\uFF0C\u610F\u5916\u5275\u9020\u51FA\u98A8\u9761\u5168\u83F2\u534A\u500B\u4E16\u7D00\u7684\u300CKwek-Kwek\u300D\uFF08\u82E5\u662F\u7528\u5927\u9846\u96DE\u86CB\u88F9\u7C89\u70B8\uFF0C\u5247\u88AB\u7A31\u70BA Tokneneng\uFF09\uFF01",
      "en": 'Legend has it that a Manila street hawker accidentally dropped peeled boiled quail eggs, damaging their whites. Not wanting to waste them, she whipped up a quick tempura-style batter tinted vibrant sunset orange with annatto (atsuete) seeds and deep-fried them. The name mimics bird chirping ("kwek-kwek")! (When made with regular chicken eggs, it is called "Tokneneng".)',
      "fil": "Ayon sa kwento, nagsimula ito nang aksidenteng mapunit ang puti ng itlog ng pugo ng isang tindera, kaya binalot niya ito sa kulay kahel na harina gamit ang atsuete at ipinirito. Kapag itlog ng manok ang gamit, tinatawag itong Tokneneng.",
      "ja": "\u30DE\u30CB\u30E9\u306E\u5C4B\u53F0\u5E97\u4E3B\u304C\u8339\u3067\u5375\u306E\u767D\u8EAB\u3092\u5D29\u3057\u3066\u3057\u307E\u3044\u3001\u7121\u99C4\u306B\u3057\u306A\u3044\u3088\u3046\u30A2\u30C1\u30E5\u30A8\u30C6\u3067\u30AA\u30EC\u30F3\u30B8\u8272\u306B\u7740\u8272\u3057\u305F\u8863\u3092\u307E\u3068\u308F\u305B\u3066\u63DA\u3052\u305F\u306E\u304C\u59CB\u307E\u308A\u3068\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u5927\u304D\u306A\u9D8F\u5375\u3067\u4F5C\u308B\u3082\u306E\u306F\u300C\u30C8\u30AF\u30CD\u30CD\u30F3\u300D\u3068\u547C\u3070\u308C\u307E\u3059\u3002",
      "ko": '\uB9C8\uB2D0\uB77C\uC758 \uD55C \uB178\uC810\uC0C1\uC774 \uAECD\uC9C8\uC744 \uBC97\uAE30\uB2E4 \uAE68\uC9C4 \uBA54\uCD94\uB9AC\uC54C\uC744 \uBC84\uB9AC\uC9C0 \uC54A\uACE0 \uC544\uB098\uD1A0 \uCC9C\uC5F0 \uC0C9\uC18C\uB97C \uB123\uC740 \uC8FC\uD669\uC0C9 \uD280\uAE40\uC637\uC5D0 \uD280\uACA8 \uD314\uAE30 \uC2DC\uC791\uD558\uBA74\uC11C \uD0C4\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uB2EC\uAC40\uB85C \uB9CC\uB4E0 \uAC83\uC740 "\uD1A1\uB124\uB139"\uC774\uB77C \uBD80\uB985\uB2C8\uB2E4.'
    },
    filipinoScript: "Kwek-Kwek at Tokneneng",
    filipinoPhonetics: "Kwek Kwek aht Tok-neh-neng",
    audioPronunciationText: "Manong, pabili pong sampung kwek-kwek, pakilagyan ng maraming suka!"
  },
  ingredients: [
    {
      id: "quail-eggs",
      name: { "zh-TW": "\u9D6A\u9D89\u86CB (\u6C34\u716E\u719F\u3001\u525D\u6BBC\u6D17\u6DE8\u701D\u4E7E)", "en": "Quail Eggs (Hard-boiled & peeled)", "fil": "Itlog ng Pugo (Nilaga at binalatan)", "ja": "\u30A6\u30BA\u30E9\u306E\u5375\uFF08\u56FA\u8339\u3067\u3057\u3066\u6BBB\u3092\u5265\u304F\uFF09", "ko": "\uBA54\uCD94\uB9AC\uC54C (\uC644\uC219\uC73C\uB85C \uC0B6\uC544 \uAECD\uC9C8\uC744 \uBC97\uAE40)" },
      amount: 20,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Itlog ng Pugo",
      filipinoPronunciation: "Eet-log nang Poo-goh"
    },
    {
      id: "flour",
      name: { "zh-TW": "\u4E2D\u7B4B\u9EB5\u7C89", "en": "All-Purpose Flour", "fil": "Harina", "ja": "\u8584\u529B\u7C89\u307E\u305F\u306F\u4E2D\u529B\u7C89", "ko": "\uC911\uB825\uBD84 \uBC00\uAC00\uB8E8" },
      amount: 120,
      unitMetric: "g",
      unitUS: "1 cup",
      filipinoName: "Harina",
      filipinoPronunciation: "Hah-ree-nah"
    },
    {
      id: "cornstarch",
      name: { "zh-TW": "\u7389\u7C73\u6FB1\u7C89 (\u4F7F\u70B8\u76AE\u8584\u8106\u786C\u633A\u4E0D\u56DE\u8EDF)", "en": "Cornstarch (for shatteringly crisp shell)", "fil": "Cornstarch", "ja": "\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\uFF08\u30AB\u30EA\u30AB\u30EA\u306E\u79D8\u8A23\uFF09", "ko": "\uC625\uC218\uC218 \uC804\uBD84 (\uBC14\uC0AD\uD55C \uC2DD\uAC10\uC6A9)" },
      amount: 30,
      unitMetric: "g",
      unitUS: "0.25 cup",
      isKeyFlavor: true,
      filipinoName: "Cornstarch",
      filipinoPronunciation: "Corn-starch"
    },
    {
      id: "annatto-powder",
      name: { "zh-TW": "\u80ED\u8102\u6A39\u7D05\u6728\u7C7D\u7C89 (Atsuete Powder) \u6216\u5929\u7136\u6A59\u8272\u7D20", "en": "Annatto Powder (Atsuete) or Food Color", "fil": "Atsuete Powder", "ja": "\u30A2\u30C1\u30E5\u30A8\u30C6\u7C89\u672B\uFF08\u7D05\u6728\u5929\u7136\u7740\u8272\uFF09", "ko": "\uC544\uCD94\uC5D0\uD14C \uD30C\uC6B0\uB354 (\uC544\uB098\uD1A0 \uCC9C\uC5F0 \uC624\uB80C\uC9C0 \uD30C\uC6B0\uB354)" },
      amount: 1,
      unitMetric: "tbsp",
      unitUS: "1 tbsp",
      isKeyFlavor: true,
      filipinoName: "Atsuete",
      filipinoPronunciation: "Ah-choo-weh-teh"
    },
    {
      id: "water",
      name: { "zh-TW": "\u51B0\u6C34 (\u8ABF\u9EB5\u7CCA\u5FC5\u7528\u51B0\u6C34)", "en": "Ice-cold Water", "fil": "Malamig na Tubig", "ja": "\u51B7\u6C34", "ko": "\uC5BC\uC74C\uBB3C" },
      amount: 160,
      unitMetric: "ml",
      unitUS: "0.67 cup",
      filipinoName: "Malamig na Tubig",
      filipinoPronunciation: "Mah-lah-meeg nah Too-beeg"
    },
    {
      id: "cane-vinegar",
      name: { "zh-TW": "\u5927\u809A\u5A46\u7518\u8517\u918B (\u8ABF\u88FD\u8FA3\u849C\u6D0B\u8525\u918B\u6C41)", "en": "Philippine Cane Vinegar (for dipping sauce)", "fil": "Sukang Maasim", "ja": "\u30B5\u30C8\u30A6\u30AD\u30D3\u9162\uFF08\u3064\u3051\u30C0\u30EC\u7528\uFF09", "ko": "\uC0AC\uD0D5\uC218\uC218 \uC2DD\uCD08 (\uB514\uD551 \uC18C\uC2A4\uC6A9)" },
      amount: 100,
      unitMetric: "ml",
      unitUS: "0.4 cup",
      isKeyFlavor: true,
      filipinoName: "Sukang Maasim",
      filipinoPronunciation: "Soo-kang Mah-ah-sim"
    },
    {
      id: "red-onion-minced",
      name: { "zh-TW": "\u7D05\u6D0B\u8525\u788E (\u918B\u6C41\u914D\u6599)", "en": "Red Onion (Finely chopped for sauce)", "fil": "Tinadtad na Pulang Sibuyas", "ja": "\u523B\u307F\u8D64\u7389\u306D\u304E", "ko": "\uB2E4\uC9C4 \uC801\uC591\uD30C" },
      amount: 0.5,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Sibuyas",
      filipinoPronunciation: "See-boo-yas"
    },
    {
      id: "chili",
      name: { "zh-TW": "\u671D\u5929\u6912 (\u526A\u788E)", "en": "Bird's Eye Chilies (Chopped)", "fil": "Siling Labuyo", "ja": "\u523B\u307F\u5510\u8F9B\u5B50", "ko": "\uC1A1\uC1A1 \uC36C \uACE0\uCD94" },
      amount: 3,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Sili",
      filipinoPronunciation: "See-lee"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u8ABF\u88FD\u62DB\u724C\u843D\u65E5\u6A59\u8272\u8106\u76AE\u7C89\u6F3F", "en": "Whisk Vibrant Orange Annatto Batter", "fil": "Gawin ang Kulay Kahel na Harina Gamit ang Atsuete", "ja": "\u30A2\u30C1\u30E5\u30A8\u30C6\u3067\u9BAE\u3084\u304B\u306A\u30AA\u30EC\u30F3\u30B8\u8272\u306E\u8863\u3092\u4F5C\u308B", "ko": "\uC544\uCD94\uC5D0\uD14C\uB85C \uD654\uB824\uD55C \uC8FC\uD669\uBE5B \uD280\uAE40 \uBC18\uC8FD \uB9CC\uB4E4\uAE30" },
      instruction: {
        "zh-TW": "\u7897\u4E2D\u5148\u7528 2 \u5927\u5319\u6EAB\u6C34\u5C07\u80ED\u8102\u6A39\u7C89\uFF08Atsuete\uFF09\u5B8C\u5168\u5316\u958B\uFF0C\u986F\u73FE\u8277\u9E97\u6A59\u7D05\u8272\u3002\u52A0\u5165\u4E2D\u7B4B\u9EB5\u7C89\u3001\u7389\u7C73\u6FB1\u7C89\u3001\u534A\u8336\u5319\u9E7D\u8207\u5C11\u8A31\u80E1\u6912\u7C89\uFF0C\u7DE9\u7DE9\u5012\u5165\u51B0\u6C34\uFF0C\u7528\u6253\u86CB\u5668\u652A\u62CC\u6210\u7121\u9846\u7C92\u3001\u7A0D\u5FAE\u6FC3\u7A20\u80FD\u639B\u4F4F\u7B77\u5B50\u7684\u5747\u52FB\u9EB5\u7CCA\uFF08\u5982\u540C\u539A\u53EF\u9E97\u9905\u7C89\u6F3F\u8CEA\u5730\uFF09\u3002",
        "en": "Dissolve annatto powder in 2 tbsp warm water until bright orange. In a mixing bowl, combine flour, cornstarch, 1/2 tsp salt, and pepper. Gradually whisk in the orange water and ice-cold water until a smooth, velvety batter forms (pancake batter consistency).",
        "fil": "Tunawin ang atsuete sa maligamgam na tubig. Ihalo ang harina, cornstarch, asin, at malamig na tubig hanggang maging makinis at malapot na batter.",
        "ja": "\u30A2\u30C1\u30E5\u30A8\u30C6\u7C89\u3092\u306C\u308B\u307E\u6E6F\u5927\u3055\u30582\u3067\u6EB6\u304B\u3057\u9BAE\u3084\u304B\u306B\u767A\u8272\u3055\u305B\u307E\u3059\u3002\u8584\u529B\u7C89\u3001\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\u3001\u5869\u3001\u51B7\u6C34\u3092\u6DF7\u305C\u3001\u30C0\u30DE\u306E\u306A\u3044\u6ED1\u3089\u304B\u306A\u3068\u308D\u307F\u8863\u3092\u4F5C\u308A\u307E\u3059\u3002",
        "ko": "\uC544\uCD94\uC5D0\uD14C \uD30C\uC6B0\uB354\uB97C \uB530\uB73B\uD55C \uBB3C 2\uD070\uC220\uC5D0 \uD480\uC5B4 \uC624\uB80C\uC9C0\uBE5B\uC744 \uB0C5\uB2C8\uB2E4. \uBC00\uAC00\uB8E8, \uC804\uBD84, \uC18C\uAE08, \uC5BC\uC74C\uBB3C\uC744 \uB123\uACE0 \uBA4D\uC6B8 \uC5C6\uC774 \uBD80\uB4DC\uB7EC\uC6B4 \uBC18\uC8FD\uC744 \uB9CC\uB4ED\uB2C8\uB2E4."
      },
      durationSeconds: 240,
      image: "/images/kwek-kwek-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u8ABF\u88FD\u8857\u982D\u795E\u4ED9\u9748\u9B42\u6CBE\u91AC (Sinamak Suka)", "en": "Prepare Spiced Vinegar Dipping Sauce", "fil": "Ihanda ang Maanghang na Sukang Sawsawan", "ja": "\u5C4B\u53F0\u540D\u7269\u306E\u30B9\u30D1\u30A4\u30B7\u30FC\u9162\u30C0\u30EC\u3092\u5408\u308F\u305B\u308B", "ko": "\uD544\uB9AC\uD540 \uAE38\uAC70\uB9AC \uD2B9\uC81C \uACE0\uCD94 \uC591\uD30C \uC2DD\uCD08 \uC18C\uC2A4 \uB9CC\uB4E4\uAE30" },
      instruction: {
        "zh-TW": "\u5C0F\u7897\u4E2D\u5012\u5165 100ml \u7518\u8517\u918B\uFF0C\u52A0\u5165\u5207\u788E\u7684\u7D05\u6D0B\u8525\u3001\u62CD\u788E\u5927\u849C\u672B\u3001\u526A\u788E\u7684\u671D\u5929\u6912\u5708\u3001\u534A\u8336\u5319\u9E7D\u8207 1 \u8336\u5319\u767D\u7CD6\uFF0C\u652A\u62CC\u5747\u52FB\u975C\u7F6E 10 \u5206\u9418\u8B93\u6D0B\u8525\u751C\u5473\u8207\u6912\u9999\u91CB\u5165\u918B\u4E2D\u3002\u9019\u5C31\u662F\u99AC\u5C3C\u62C9\u8001\u8857\u982D\u6700\u4EE4\u4EBA\u9B42\u727D\u5922\u7E08\u7684\u9748\u9B42\u89E3\u81A9\u6CBE\u91AC\uFF01",
        "en": "In a sauce bowl, combine cane vinegar, finely chopped red onions, minced garlic, chopped bird\u2019s eye chilies, 1/2 tsp salt, and 1 tsp sugar. Stir and let sit 10 mins so aromatics infuse. This is the legendary Sinamak street vinegar dip!",
        "fil": "Paghaluin ang sukang maasim, sibuyas, bawang, sili, asin, at asukal sa isang mangkok.",
        "ja": "\u30B5\u30C8\u30A6\u30AD\u30D3\u9162\u306B\u523B\u307F\u8D64\u7389\u306D\u304E\u3001\u304A\u308D\u3057\u30CB\u30F3\u30CB\u30AF\u3001\u523B\u307F\u5510\u8F9B\u5B50\u3001\u5869\u3001\u7802\u7CD6\u3092\u5408\u308F\u305B\u300110\u5206\u7F6E\u3044\u3066\u98A8\u5473\u3092\u306A\u3058\u307E\u305B\u307E\u3059\u3002",
        "ko": "\uC0AC\uD0D5\uC218\uC218 \uC2DD\uCD08\uC5D0 \uB2E4\uC9C4 \uC801\uC591\uD30C, \uB9C8\uB298, \uACE0\uCD94, \uC18C\uAE08, \uC124\uD0D5\uC744 \uC11E\uC5B4 10\uBD84\uAC04 \uC219\uC131\uC2DC\uCF1C \uB9E4\uCF64\uC0C1\uD07C\uD55C \uC2DC\uB098\uB9C9 \uC2DD\uCD08\uC7A5\uC744 \uC644\uC131\uD569\uB2C8\uB2E4."
      },
      durationSeconds: 180,
      image: "/images/kwek-kwek-step2.jpg"
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u86CB\u88F9\u4E7E\u7C89\u5F8C\u5747\u52FB\u639B\u7CCA\u70B8\u81F3\u9165\u8106", "en": "Dredge, Dip in Orange Batter & Deep Fry", "fil": "Pahiran ng Harina, Isawsaw sa Batter at Iprito", "ja": "\u7C89\u3092\u307E\u3076\u3057\u3066\u30AA\u30EC\u30F3\u30B8\u8863\u3092\u7D61\u3081\u3001\u30AB\u30EA\u30C3\u3068\u63DA\u3052\u308B", "ko": "\uB367\uAC00\uB8E8\uB97C \uBB3B\uD600 \uBC18\uC8FD\uC5D0 \uD401\uB2F9 \uB2F4\uADFC \uB4A4 \uBC14\uC0AD\uD558\uAC8C \uD280\uAE30\uAE30" },
      instruction: {
        "zh-TW": "\u3010\u95DC\u9375\u79D8\u8A23\u3011\uFF1A\u525D\u597D\u7684\u719F\u9D6A\u9D89\u86CB\u5148\u5728\u4E7E\u7389\u7C73\u7C89\u4E2D\u6EFE\u4E0A\u4E00\u5C64\u8584\u7C89\uFF08\u9019\u6A23\u9EB5\u7CCA\u624D\u6293\u5F97\u7262\u4E0D\u812B\u76AE\uFF01\uFF09\u3002\u63A5\u8457\u653E\u5165\u6A59\u8272\u9EB5\u7CCA\u4E2D\u6EFE\u52FB\u3002\u6CB9\u934B\u71D2\u71B1\u81F3 180\xB0C\uFF0C\u7528\u6E6F\u5319\u4E00\u7C92\u7C92\u8200\u5165\u6EFE\u6CB9\u4E2D\uFF0C\u4E2D\u706B\u70B8\u7D04 2.5-3 \u5206\u9418\uFF0C\u81F3\u5916\u6BBC\u9F13\u8D77\u91D1\u9EC3\u786C\u8106\uFF0C\u6488\u51FA\u701D\u6CB9\u3002\u7528\u7AF9\u7C64\u4E32\u8D77 4 \u9846\u4E00\u4E32\u76DB\u76E4\uFF01",
        "en": "CRUCIAL STEP: Lightly dust the peeled boiled quail eggs in dry cornstarch first (this ensures the wet batter clings firmly without peeling off!). Drop eggs into the orange batter. Lower into 180\xB0C (350\xB0F) hot oil and fry for 2.5-3 mins until the outer shell is puffy and crisp. Skewer onto bamboo sticks!",
        "fil": "Pagulungin muna ang itlog sa tuyong cornstarch bago isawsaw sa batter. Iprito sa mainit na mantika nang 2-3 minuto hanggang lumutong.",
        "ja": "\u3010\u6700\u91CD\u8981\u306E\u30B3\u30C4\u3011\u8339\u3067\u5375\u306B\u307E\u305A\u8584\u304F\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\uFF08\u4E7E\u7C89\uFF09\u3092\u307E\u3076\u3057\u307E\u3059\uFF08\u3053\u308C\u3067\u8863\u304C\u6ED1\u308A\u843D\u3061\u306A\u304F\u306A\u308A\u307E\u3059\uFF09\u3002\u30AA\u30EC\u30F3\u30B8\u8863\u3092\u305F\u3063\u3077\u308A\u7D61\u3081\u3001180\u2103\u306E\u6CB9\u30672.5\u301C3\u5206\u30AB\u30E9\u30C3\u3068\u63DA\u3052\u307E\u3059\u3002",
        "ko": "\u3010\uD575\uC2EC \uBE44\uBC95\u3011 \uBA3C\uC800 \uBA54\uCD94\uB9AC\uC54C\uC5D0 \uB9C8\uB978 \uC804\uBD84\uC744 \uC0B4\uC9DD \uBB3B\uD600\uC90D\uB2C8\uB2E4 (\uBC18\uC8FD\uC774 \uBC97\uACA8\uC9C0\uC9C0 \uC54A\uC74C). \uC8FC\uD669\uC0C9 \uBC18\uC8FD\uC5D0 \uD479 \uB2F4\uADFC \uB4A4 180\uB3C4 \uAE30\uB984\uC5D0 2.5~3\uBD84\uAC04 \uBC14\uC0AD\uD558\uAC8C \uD280\uACA8 \uAF2C\uCE58\uC5D0 \uB001\uB2C8\uB2E4."
      },
      durationSeconds: 180,
      image: "/images/kwek-kwek-step3.jpg",
      cookwareVariations: [
        {
          cookware: "airFryer",
          tempAndSetting: "Air Fryer: 200\xB0C (395\xB0F) for 6-8 mins (Spray with oil)",
          instructionOverride: {
            "zh-TW": "\u6C23\u70B8\u934B\u6A21\u5F0F\uFF1A\u5728\u6C23\u70B8\u934B\u70D8\u7119\u7D19\u4E0A\u5674\u4E0A\u4E00\u5C64\u6CB9\uFF0C\u5C07\u88F9\u6EFF\u6A59\u8272\u9EB5\u7CCA\u7684\u9D6A\u9D89\u86CB\u9593\u9694\u64FA\u653E\uFF0C\u8868\u9762\u5674\u98DF\u7528\u6CB9\u3002\u4EE5 200\xB0C \u6C23\u70B8 6-8 \u5206\u9418\uFF0C\u5916\u6BBC\u8FC5\u901F\u786C\u5316\u5B9A\u578B\u6210\u8106\u76AE\uFF0C\u514D\u958B\u6CB9\u934B\u8D85\u65B9\u4FBF\uFF01",
            "en": "Air Fryer Variation: Line basket with parchment and spray with oil. Place battered eggs with spacing. Generously spray tops with cooking oil. Air fry at 200\xB0C (395\xB0F) for 6-8 mins until shells set crunchy and golden!",
            "fil": "Paraan sa Air Fryer: Lagyan ng mantika ang parchment paper, ayusin ang mga itlog at i-spray ng mantika. Lutuin sa 200\xB0C nang 6-8 minuto.",
            "ja": "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u8A2D\u5B9A\uFF1A\u30D0\u30B9\u30B1\u30C3\u30C8\u306B\u30AF\u30C3\u30AD\u30F3\u30B0\u30B7\u30FC\u30C8\u3092\u6577\u304D\u6CB9\u3092\u30B9\u30D7\u30EC\u30FC\u3057\u307E\u3059\u3002\u8863\u3092\u3064\u3051\u305F\u5375\u3092\u4E26\u3079\u3001\u4E0A\u304B\u3089\u3082\u6CB9\u3092\u5439\u304D\u4ED8\u3051\u3066200\u2103\u30676\u301C8\u5206\u52A0\u71B1\u3057\u307E\u3059\u3002",
            "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uC124\uC815: \uC885\uC774\uD638\uC77C\uC5D0 \uC624\uC77C\uC744 \uBFCC\uB9AC\uACE0 \uBC18\uC8FD\uC744 \uC785\uD78C \uBA54\uCD94\uB9AC\uC54C\uC744 \uC5B9\uC740 \uB4A4 \uC704\uC5D0\uB3C4 \uC624\uC77C\uC744 \uCDA9\uBD84\uD788 \uBFCC\uB824 200\xB0C\uC5D0\uC11C 6~8\uBD84\uAC04 \uD280\uAE41\uB2C8\uB2E4."
          }
        }
      ]
    }
  ],
  troubleshooting: [
    {
      id: "batter-slips-off",
      problem: { "zh-TW": "\u4E0B\u6CB9\u934B\u5F8C\uFF0C\u6A59\u8272\u5916\u76AE\u812B\u843D\uFF0C\u9732\u51FA\u5149\u79BF\u79BF\u7684\u86CB", "en": "Batter slides off in the oil leaving bare eggs", "fil": "Natatanggal ang balat ng harina habang piniprito", "ja": "\u6CB9\u306B\u5165\u308C\u305F\u77AC\u9593\u306B\u8863\u304C\u5265\u304C\u308C\u843D\u3061\u3066\u3057\u307E\u3046", "ko": "\uAE30\uB984\uC5D0 \uB123\uC790\uB9C8\uC790 \uD280\uAE40\uC637\uC774 \uAECD\uC9C8\uCC98\uB7FC \uBC97\uACA8\uC9D0" },
      cause: { "zh-TW": "\u6C34\u716E\u86CB\u8868\u9762\u5149\u6ED1\u6F6E\u6FD5\uFF0C\u672A\u5148\u62CD\u4E0A\u4E00\u5C64\u4E7E\u7389\u7C73\u6FB1\u7C89", "en": "Eggs were wet and slippery without a dry starch dusting", "fil": "Basa ang itlog at walang tuyong harina bago isawsaw sa batter", "ja": "\u5375\u306E\u8868\u9762\u304C\u6FE1\u308C\u305F\u307E\u307E\u3067\u3001\u4E8B\u524D\u306E\u6253\u3061\u7C89\uFF08\u7C89\u307E\u3076\u3057\uFF09\u3092\u3057\u306A\u304B\u3063\u305F\u305F\u3081", "ko": "\uBA54\uCD94\uB9AC\uC54C \uD45C\uBA74\uC5D0 \uC218\uBD84\uC774 \uB0A8\uC558\uAC70\uB098 \uB9C8\uB978 \uC804\uBD84\uC744 \uB367\uBC14\uB974\uC9C0 \uC54A\uC544 \uBC18\uC8FD\uC774 \uBBF8\uB044\uB7EC\uC9D0" },
      solution: {
        "zh-TW": "\u719F\u86CB\u64E6\u4E7E\u5F8C\uFF0C\u52D9\u5FC5\u5148\u4E1F\u5728\u4E7E\u6FB1\u7C89\u76E4\u88E1\u5FB9\u5E95\u6EFE\u52FB\u4E00\u5C64\u767D\u7C89\uFF0C\u518D\u4E1F\u5165\u6FD5\u9EB5\u7CCA\uFF0C\u7C89\u6F3F\u4FBF\u5982\u78C1\u9435\u822C\u7DCA\u5BC6\u8CBC\u5408\uFF01",
        "en": "Dry eggs completely with paper towels, dredge thoroughly in dry cornstarch, then plunge into wet batter.",
        "fil": "Patuyuin ang itlog at balutin sa tuyong cornstarch bago isawsaw sa batter.",
        "ja": "\u30DA\u30FC\u30D1\u30FC\u3067\u6C34\u5206\u3092\u62ED\u304D\u53D6\u308A\u3001\u4E7E\u3044\u305F\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\u3092\u6E80\u904D\u306A\u304F\u307E\u3068\u308F\u305B\u3066\u304B\u3089\u8863\u6DB2\u306B\u304F\u3050\u3089\u305B\u307E\u3059\u3002",
        "ko": "\uBB3C\uAE30\uB97C \uB2E6\uACE0 \uB9C8\uB978 \uC804\uBD84 \uAC00\uB8E8\uB97C \uAF3C\uAF3C\uD788 \uBB3B\uD78C \uB2E4\uC74C \uBC18\uC8FD\uC744 \uC785\uD600\uC8FC\uBA74 \uC808\uB300 \uBC97\uACA8\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u96D9\u91AC\u5408\u58C1\u9802\u7D1A\u5403\u6CD5\u3011\uFF1A\u99AC\u5C3C\u62C9\u8857\u982D\u8001\u9955\u5FC5\u5099\u79D8\u8A23\u2014\u2014\u7AF9\u7C64\u4E32\u597D\u71B1\u9A30\u9A30\u7684 Kwek-Kwek\uFF0C\u5148\u4F38\u9032\u751C\u8FA3\u91AC\u5927\u7F50\u6D78\u88F9\u4E00\u5C64\u751C\u7518\uFF0C\u518D\u8FC5\u901F\u5728\u849C\u8FA3\u6D0B\u8525\u767D\u918B\u7F50\u88E1\u9EDE\u8638\uFF0C\u9178\u3001\u751C\u3001\u8F9B\u3001\u9999\u56DB\u5473\u5728\u820C\u5C16\u9023\u74B0\u7206\u70B8\uFF01",
      "en": 'Double Dip Street Hack: The authentic way to eat kwek-kwek is the "Double Dip"\u2014first swirl your skewer in the sweet brown gravy, then immediately tap it in the spiced garlic vinegar for an explosion of flavors!',
      "fil": "Tip sa Kanto: Isawsaw muna sa matamis na sarsa bago isawsaw sa maasim na suka para sa perpektong sarap!",
      "ja": "\u73FE\u5730\u306E\u88CF\u30EF\u30B6\uFF1A\u307E\u305A\u7518\u3044\u30BF\u30EC\u306B\u4E32\u3092\u304F\u3050\u3089\u305B\u3001\u305D\u306E\u3042\u3068\u30D4\u30EA\u8F9B\u9162\u306B\u30C1\u30E7\u30F3\u3068\u3064\u3051\u308B\u300C\u30C0\u30D6\u30EB\u30C7\u30A3\u30C3\u30D7\u300D\u3067\u98DF\u3079\u308B\u3068\u6700\u9AD8\u306E\u5473\u308F\u3044\u306B\u306A\u308A\u307E\u3059\uFF01",
      "ko": '\uB178\uC810 \uACE0\uC218\uC758 \uBE44\uBC95: \uB2EC\uCF64\uD55C \uBE0C\uB77C\uC6B4 \uC18C\uC2A4\uC5D0 \uBA3C\uC800 \uD479 \uCC0D\uC740 \uB4A4, \uB9E4\uCF64\uD55C \uACE0\uCD94 \uC2DD\uCD08\uC5D0 \uC0B4\uC9DD \uB2F4\uAC00 \uBA39\uB294 "\uB354\uBE14 \uB525"\uC73C\uB85C \uC990\uAE30\uBA74 \uB2E8\uC9E0\uACFC \uC0B0\uBBF8\uAC00 \uD3ED\uBC1C\uD569\uB2C8\uB2E4.'
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/porkBbq.ts
var porkBbq = {
  id: "pork-bbq",
  slug: "pork-bbq",
  title: {
    "zh-TW": "\u8857\u982D\u7126\u7CD6\u83F2\u5F0F\u70AD\u70E4\u8C6C\u8089\u4E32 (Filipino Pork BBQ)",
    "en": "Street-Style Filipino Pork BBQ Skewers",
    "fil": "Inihaw na Pork BBQ sa Kanto",
    "ja": "\u672C\u5834\u5C4B\u53F0\u306E\u7518\u8F9B\u30DD\u30FC\u30AF\u30D0\u30FC\u30D9\u30AD\u30E5\u30FC\u4E32\uFF08\u30A4\u30CB\u30CF\u30A6\u30FB\u30CA\u30FB\u30D0\u30DC\u30A4\uFF09",
    "ko": "\uD544\uB9AC\uD540 \uAE38\uAC70\uB9AC \uC22F\uBD88 \uB3FC\uC9C0 \uBC14\uBCA0\uD050 \uAF2C\uCE58 (\uC774\uB2C8\uD558\uC6B0 \uB098 \uBC14\uBCF4\uC774)"
  },
  subtitle: {
    "zh-TW": "\u9999\u8549\u756A\u8304\u91AC\u9748\u9B42\u79D8\u6C41\u30FB\u96EA\u78A7\u6C7D\u6C34\u9183\u6F2C\u5AE9\u5316\u30FB\u7D05\u6728\u7C7D\u6CB9\u7126\u7CD6\u70AD\u9999\u6CB9\u4EAE",
    "en": "Glazed in Sweet Banana Ketchup, 7-Up & Garlic with Smoky Caramelized Char",
    "fil": "Malambot at malinamnam na inihaw na may banana ketchup at kalamansi",
    "ja": "\u30D0\u30CA\u30CA\u30B1\u30C1\u30E3\u30C3\u30D7\u3068\u70AD\u9178\u98F2\u6599\u3067\u6975\u9650\u307E\u3067\u67D4\u3089\u304B\u304F\u3057\u305F\u9B45\u60D1\u306E\u30C6\u30EA\u30E4\u30AD\u98A8BBQ",
    "ko": "\uBC14\uB098\uB098 \uCF00\uCCA9\uACFC \uC0AC\uC774\uB2E4\uB85C \uBD80\uB4DC\uB7FD\uAC8C \uC7AC\uC6CC \uC22F\uBD88\uC5D0 \uAD6C\uC6CC\uB0B8 \uB2EC\uCF64\uC9ED\uC9E4 \uAF2C\uCE58\uAD6C\uC774"
  },
  tagline: {
    "zh-TW": "\u8DEF\u908A\u6524\u70AD\u7159\u88CA\u88CA\u7684\u6700\u8FF7\u4EBA\u9999\u6C23\uFF0C\u8089\u8CEA\u8EDF\u5AE9\u7206\u6C41\u3001\u751C\u9999\u5FAE\u9178\u8B93\u4EBA\u4E00\u4E32\u63A5\u4E00\u4E32",
    "en": "The irresistible aroma of Philippine street corners: sweet, savory, garlicky, and smoky",
    "fil": "Paboritong pulutan at ulam sa gabi na may sawsawan na maasim na suka",
    "ja": "\u5915\u66AE\u308C\u306E\u30DE\u30CB\u30E9\u3092\u5305\u307F\u8FBC\u3080\u70AD\u706B\u306E\u7518\u3044\u7159\u3002\u51B7\u3048\u305F\u30D3\u30FC\u30EB\u304C\u4F55\u676F\u3067\u3082\u9032\u3080\u5C4B\u53F0\u306E\u4E3B\u5F79",
    "ko": "\uC800\uB141 \uBB34\uB835 \uB178\uC810\uAC00\uB97C \uAC00\uB4DD \uCC44\uC6B0\uB294 \uB2EC\uCF64\uD558\uACE0 \uACE0\uC18C\uD55C \uC22F\uBD88 \uC5F0\uAE30, \uB9E5\uC8FC\uC640 \uC601\uD63C\uC758 \uB2E8\uC9DD"
  },
  heroImage: "/images/pork-bbq.jpg",
  difficulty: "easy",
  prepTimeMinutes: 25,
  cookTimeMinutes: 15,
  defaultServings: 4,
  caloriesPerServing: 420,
  category: "streetFood",
  dietaryTags: ["classic"],
  supportedCookware: ["traditional", "airFryer"],
  culture: {
    originRegion: {
      "zh-TW": "\u5168\u83F2\u5F8B\u8CD3\u8857\u89D2\u624B\u63A8\u8ECA\u8207\u9732\u5929\u71D2\u70E4\u6392\u6A94 (Street Inihaw Stalls)",
      "en": "Across street corners & night stalls of the Philippines",
      "fil": "Bawat Kanto at Palengke sa Pilipinas",
      "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u5168\u571F\u306E\u8857\u89D2\u70AD\u706B\u713C\u304D\u30B9\u30BF\u30F3\u30C9",
      "ko": "\uD544\uB9AC\uD540 \uC804\uC5ED \uAE38\uAC70\uB9AC \uC22F\uBD88 \uAD6C\uC774 \uB178\uC810"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u5BBF\u9727\u62C9\u723E\u897F\u5B89\u71D2\u70E4\u4E00\u689D\u8857", "en": "Larsian BBQ Strip, Cebu", "fil": "Larsian sa Cebu", "ja": "\u30BB\u30D6\u5CF6\u30E9\u30EB\u30B7\u30A2\u30F3\u901A\u308A", "ko": "\uC138\uBD80 \uB77C\uB974\uC2DC\uC548 \uBC14\uBCA0\uD050 \uACE8\uBAA9" },
      { "zh-TW": "\u99AC\u5361\u8482\u6CE2\u5E03\u62C9\u8F9B\u7F8E\u98DF\u5DF7", "en": "Poblacion Night Alley, Makati", "fil": "Poblacion Makati", "ja": "\u30DE\u30AB\u30C6\u30A3\u30FB\u30DD\u30D6\u30E9\u30B7\u30AA\u30F3", "ko": "\uB9C8\uCE74\uD2F0 \uD3EC\uBE14\uB77C\uC2DC\uC628 \uAC70\uB9AC" }
    ],
    historyStory: {
      "zh-TW": "\u83F2\u5F8B\u8CD3\u7684\u70AD\u70E4\u6587\u5316\u7D71\u7A31\u70BA\u300CInihaw\u300D\u3002\u7F8E\u8ECD\u9032\u99D0\u6642\u671F\u5E36\u4F86\u4E86\u897F\u5F0F BBQ \u6982\u5FF5\uFF0C\u4F46\u83F2\u5F8B\u8CD3\u6524\u8CA9\u767C\u63EE\u7121\u7AAE\u5275\u610F\uFF0C\u5C07\u672C\u5730\u7279\u6709\u7684\u9999\u8549\u756A\u8304\u91AC\uFF08Banana Ketchup\uFF09\u3001\u7518\u8517\u918B\u3001\u5927\u849C\u3001\u9ED1\u80E1\u6912\uFF0C\u4EE5\u53CA\u6AB8\u6AAC\u6C7D\u6C34\uFF08Sprite \u6216 7-Up\uFF09\u8ABF\u548C\u6210\u7368\u6B65\u5168\u7403\u7684\u795E\u79D8\u9183\u8089\u6C41\u3002\u6C7D\u6C34\u4E2D\u7684\u78B3\u9178\u80FD\u77AC\u9593\u8EDF\u5316\u8C6C\u8089\u7E96\u7DAD\uFF0C\u7CD6\u5206\u5728\u70AD\u706B\u4E0A\u7126\u7CD6\u5316\uFF0C\u9020\u5C31\u4E86\u83F2\u5F0F\u70E4\u4E32\u7121\u4EBA\u80FD\u6297\u62D2\u7684\u9B45\u529B\uFF01",
      "en": 'The Filipino grilling tradition is called "Inihaw". Street vendors invented a uniquely Pinoy marinade using local Banana Ketchup, cane vinegar, heavy garlic, and citrus soda (7-Up or Sprite). The soda acids tenderize the pork while sugars create a lacquered mahogany caramel crust over glowing charcoal!',
      "fil": "Ang inihaw na pork BBQ ay paborito ng mga Pilipino. Ang sikreto sa lambot ay ang pagbabad sa 7-Up o Sprite at banana ketchup para sa manamis-namis na sarsa.",
      "ja": "\u300C\u30A4\u30CB\u30CF\u30A6\u300D\u3068\u547C\u3070\u308C\u308B\u4F1D\u7D71\u306E\u70AD\u706B\u713C\u304D\u3002\u5C4B\u53F0\u306E\u5E97\u4E3B\u305F\u3061\u304C\u7DE8\u307F\u51FA\u3057\u305F\u79D8\u4F1D\u306E\u30DE\u30EA\u30CD\u6DB2\u306B\u306F\u3001\u30D0\u30CA\u30CA\u30B1\u30C1\u30E3\u30C3\u30D7\u3084\u30B5\u30C8\u30A6\u30AD\u30D3\u9162\u306E\u307B\u304B\u3001\u30B9\u30D7\u30E9\u30A4\u30C8\u7B49\u306E\u70AD\u9178\u98F2\u6599\u304C\u4F7F\u308F\u308C\u3001\u9A5A\u304F\u307B\u3069\u306E\u67D4\u3089\u304B\u3055\u3068\u7167\u308A\u3092\u751F\u307F\u51FA\u3057\u307E\u3059\u3002",
      "ko": '\uD544\uB9AC\uD540\uC2DD \uC22F\uBD88\uAD6C\uC774 "\uC774\uB2C8\uD558\uC6B0"\uC758 \uAF43. \uC0AC\uC774\uB2E4\uB098 7-Up\uC758 \uD0C4\uC0B0\uC73C\uB85C \uACE0\uAE30\uB97C \uADF9\uB3C4\uB85C \uC5F0\uD558\uAC8C \uB9CC\uB4E4\uACE0, \uBC14\uB098\uB098 \uCF00\uCCA9\uACFC \uB9C8\uB298 \uC591\uB150\uC73C\uB85C \uBD89\uC740 \uC724\uAE30\uB97C \uB0B4\uBA70 \uAD7D\uB294 \uAC83\uC774 \uB3C5\uBCF4\uC801\uC778 \uBE44\uBC95\uC785\uB2C8\uB2E4.'
    },
    filipinoScript: "Inihaw na Pork Barbecue",
    filipinoPhonetics: "Ee-nee-haw nah Pork Bar-beh-kyoo",
    audioPronunciationText: "Manong, pabili pong limang tuhog ng Pork BBQ, paki-init sa uling!"
  },
  ingredients: [
    {
      id: "pork-shoulder-belly",
      name: { "zh-TW": "\u8C6C\u6885\u82B1\u8089\u6216\u4E94\u82B1\u8089 (\u5207\u8584\u9577\u8089\u7247)", "en": "Pork Shoulder or Pork Belly (Sliced thin into ribbons)", "fil": "Kasim o Liempo ng Baboy", "ja": "\u8C5A\u80A9\u30ED\u30FC\u30B9\u307E\u305F\u306F\u8C5A\u30D0\u30E9\uFF08\u8584\u5207\u308A\u77ED\u518A\uFF09", "ko": "\uB3FC\uC9C0 \uBAA9\uC0B4 \uB610\uB294 \uC0BC\uACB9\uC0B4 (\uC587\uACE0 \uAE38\uAC8C \uC800\uBBFC \uAC83)" },
      amount: 600,
      unitMetric: "g",
      unitUS: "1.3 lb",
      isKeyFlavor: true,
      filipinoName: "Kasim ng Baboy",
      filipinoPronunciation: "Kah-seem nang Bah-boy"
    },
    {
      id: "banana-ketchup",
      name: { "zh-TW": "\u83F2\u5F0F\u9999\u8549\u756A\u8304\u91AC (Jufran \u6216 UFC)", "en": "Jufran Banana Ketchup (Sweet & Tangy)", "fil": "Banana Ketchup (Jufran)", "ja": "\u30D0\u30CA\u30CA\u30B1\u30C1\u30E3\u30C3\u30D7\uFF08\u30B8\u30E5\u30D5\u30E9\u30F3\uFF09", "ko": "\uBC14\uB098\uB098 \uCF00\uCCA9 (Jufran)" },
      amount: 120,
      unitMetric: "ml",
      unitUS: "0.5 cup",
      isKeyFlavor: true,
      filipinoName: "Banana Ketchup",
      filipinoPronunciation: "Bah-nah-nah Ketchup"
    },
    {
      id: "citrus-soda",
      name: { "zh-TW": "\u96EA\u78A7\u6216\u4E03\u559C\u6C7D\u6C34 (Sprite / 7-Up \u8EDF\u5316\u8089\u8CEA\u79D8\u5BC6)", "en": "Lemon-Lime Soda (7-Up or Sprite)", "fil": "Sprite o 7-Up", "ja": "\u30B9\u30D7\u30E9\u30A4\u30C8\u307E\u305F\u306F7-UP\uFF08\u70AD\u9178\u98F2\u6599\uFF09", "ko": "\uC2A4\uD504\uB77C\uC774\uD2B8 \uB610\uB294 \uC0AC\uC774\uB2E4 (\uC5F0\uC721 \uC791\uC6A9)" },
      amount: 120,
      unitMetric: "ml",
      unitUS: "0.5 cup",
      isKeyFlavor: true,
      filipinoName: "Sprite / 7-Up",
      filipinoPronunciation: "Sprite"
    },
    {
      id: "soy-sauce",
      name: { "zh-TW": "\u7D14\u91C0\u9020\u91AC\u6CB9", "en": "Philippine Soy Sauce (Toyo)", "fil": "Toyo", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u91A4\u6CB9", "ko": "\uAC04\uC7A5" },
      amount: 60,
      unitMetric: "ml",
      unitUS: "0.25 cup",
      filipinoName: "Toyo",
      filipinoPronunciation: "Toh-yoh"
    },
    {
      id: "calamansi-juice",
      name: { "zh-TW": "\u65B0\u9BAE\u56DB\u5B63\u67D1\u6854\u6C41 (\u6216\u6AB8\u6AAC\u6C41)", "en": "Fresh Calamansi Juice (or Lemon/Lime)", "fil": "Katas ng Kalamansi", "ja": "\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u679C\u6C41\uFF08\u307E\u305F\u306F\u30EC\u30E2\u30F3\u6C41\uFF09", "ko": "\uAE54\uB77C\uB9CC\uC2DC \uC999 (\uB610\uB294 \uB808\uBAAC/\uB77C\uC784\uC999)" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      isKeyFlavor: true,
      filipinoName: "Katas ng Kalamansi",
      filipinoPronunciation: "Kah-tahs nang Kah-lah-mahn-see"
    },
    {
      id: "brown-sugar",
      name: { "zh-TW": "\u9ED1\u7CD6\u6216\u4E8C\u7802\u7CD6", "en": "Dark Brown Sugar", "fil": "Pulang Asukal", "ja": "\u9ED2\u7CD6", "ko": "\uD751\uC124\uD0D5" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      filipinoName: "Asukal",
      filipinoPronunciation: "Ah-soo-kal"
    },
    {
      id: "garlic",
      name: { "zh-TW": "\u5927\u849C (\u58D3\u6210\u849C\u6CE5)", "en": "Garlic (Finely grated or crushed)", "fil": "Bawang", "ja": "\u306B\u3093\u306B\u304F\uFF08\u3059\u308A\u304A\u308D\u3057\uFF09", "ko": "\uB2E4\uC9C4 \uB9C8\uB298" },
      amount: 8,
      unitMetric: "clove",
      unitUS: "clove",
      filipinoName: "Bawang",
      filipinoPronunciation: "Bah-wang"
    },
    {
      id: "bamboo-skewers",
      name: { "zh-TW": "\u7AF9\u7C64 (\u63D0\u524D\u6CE1\u6C34 30 \u5206\u9418\u9632\u70E4\u7126)", "en": "Bamboo Skewers (soaked in water 30 mins)", "fil": "Tuhog na Kawayan", "ja": "\u7AF9\u4E32\uFF08\u6C34\u306B30\u5206\u6D78\u3057\u3066\u304A\u304F\uFF09", "ko": "\uB300\uB098\uBB34 \uAF2C\uCE58 (\uBB3C\uC5D0 30\uBD84 \uBD88\uB9BC)" },
      amount: 12,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Tuhog",
      filipinoPronunciation: "Too-hog"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u8ABF\u88FD\u9EC3\u91D1\u6BD4\u4F8B\u79D8\u91AC\u9183\u8089", "en": "Mix Soda Banana Marinade & Marinate Pork", "fil": "Ibabad ang Karne sa Sprite, Ketchup at Bawang", "ja": "\u79D8\u4F1D\u30BF\u30EC\u3092\u4F5C\u308A\u3001\u8089\u3092\u4E00\u6669\u3058\u3063\u304F\u308A\u6F2C\u3051\u8FBC\u3080", "ko": "\uC0AC\uC774\uB2E4 \uBC14\uB098\uB098 \uC591\uB150\uC5D0 \uACE0\uAE30 \uC7AC\uC6B0\uAE30" },
      instruction: {
        "zh-TW": "\u5728\u5927\u7897\u4E2D\u6DF7\u5408\u9999\u8549\u756A\u8304\u91AC\u3001\u96EA\u78A7\u6C7D\u6C34\u3001\u91AC\u6CB9\u3001\u91D1\u6854\u6C41\u3001\u849C\u6CE5\u3001\u9ED1\u7CD6\u8207 1 \u8336\u5319\u73FE\u78E8\u9ED1\u80E1\u6912\u3002\u5C07\u5207\u8584\u7684\u8C6C\u8089\u7247\u653E\u5165\u7897\u4E2D\u5FB9\u5E95\u6293\u52FB\u6309\u6469\uFF0C\u51B7\u85CF\u9183\u6F2C\u81F3\u5C11 4 \u5C0F\u6642\uFF08\u6700\u597D\u9183\u6F2C\u9694\u591C\uFF09\u3002\u53D6\u51FA\u8089\u7247\u524D\uFF0C\u5C07\u7897\u4E2D\u5269\u9918\u7684\u9183\u6C41\u7559\u4E0B\u716E\u6EFE\u505A\u70BA\u5F8C\u7E8C\u5237\u91AC\uFF01",
        "en": "In a large bowl, whisk together banana ketchup, Sprite, soy sauce, calamansi juice, grated garlic, brown sugar, and cracked black pepper. Add sliced pork, massage thoroughly, and marinate in the fridge for at least 4 hours (overnight preferred). Reserve leftover marinade for basting glaze!",
        "fil": "Paghaluin ang banana ketchup, Sprite, toyo, kalamansi, bawang, asukal, at paminta. Ibabad ang karne nang hindi bababa sa 4 na oras o magdamag sa ref.",
        "ja": "\u30DC\u30A6\u30EB\u306B\u30D0\u30CA\u30CA\u30B1\u30C1\u30E3\u30C3\u30D7\u3001\u30B9\u30D7\u30E9\u30A4\u30C8\u3001\u91A4\u6CB9\u3001\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u679C\u6C41\u3001\u304A\u308D\u3057\u30CB\u30F3\u30CB\u30AF\u3001\u9ED2\u7CD6\u3001\u9ED2\u80E1\u6912\u3092\u6DF7\u305C\u307E\u3059\u3002\u8089\u3092\u5165\u308C\u3066\u3088\u304F\u63C9\u307F\u8FBC\u307F\u3001\u51B7\u8535\u5EAB\u30674\u6642\u9593\u4EE5\u4E0A\uFF08\u4E00\u6669\u63A8\u5968\uFF09\u5BDD\u304B\u305B\u307E\u3059\u3002\u6F2C\u3051\u6C41\u306F\u4ED5\u4E0A\u3052\u306E\u30BF\u30EC\u7528\u306B\u53D6\u3063\u3066\u304A\u304D\u307E\u3059\u3002",
        "ko": "\uBCFC\uC5D0 \uBC14\uB098\uB098 \uCF00\uCCA9, \uC0AC\uC774\uB2E4, \uAC04\uC7A5, \uAE54\uB77C\uB9CC\uC2DC \uC999, \uB2E4\uC9C4 \uB9C8\uB298, \uD751\uC124\uD0D5, \uD751\uD6C4\uCD94\uB97C \uC11E\uC2B5\uB2C8\uB2E4. \uC587\uAC8C \uC36C \uACE0\uAE30\uB97C \uB123\uACE0 \uACE8\uACE0\uB8E8 \uC8FC\uBB3C\uB7EC \uCD5C\uC18C 4\uC2DC\uAC04(\uD558\uB8FB\uBC24 \uAD8C\uC7A5) \uC7AC\uC6CC\uB461\uB2C8\uB2E4."
      },
      durationSeconds: 14400,
      image: "/images/pork-bbq-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u4E32\u8089\u4E26\u6162\u71AC\u6FC3\u7A20\u7126\u7CD6\u5237\u91AC", "en": "Thread onto Skewers & Simmer Basting Glaze", "fil": "Tuhugin ang Karne at Lutuin ang Pamahid", "ja": "\u8089\u3092\u4E32\u306B\u6CE2\u6253\u305F\u305B\u3066\u523A\u3057\u3001\u30CF\u30B1\u5857\u308A\u30BF\u30EC\u3092\u716E\u8A70\u3081\u308B", "ko": "\uAF2C\uCE58\uC5D0 \uACE0\uAE30\uB97C \uAFF0\uACE0 \uBC14\uB97C \uC18C\uC2A4 \uC878\uC774\uAE30" },
      instruction: {
        "zh-TW": "\u5C07\u6CE1\u900F\u6C34\u7684\u7AF9\u7C64\u4EE5\u300CS\u578B\u6CE2\u6D6A\u647A\u758A\u65B9\u5F0F\u300D\u7A7F\u5165\u8089\u7247\uFF0C\u80A5\u7626\u76F8\u9593\uFF0C\u6BCF\u4E32\u7D04\u7A7F 4-5 \u6298\u3002\u5C07\u5269\u9918\u7684\u9183\u8089\u6C41\u5012\u5165\u5C0F\u934B\u4E2D\uFF0C\u52A0 1 \u5927\u5319\u6CB9\u8207\u5C11\u8A31\u9ED1\u7CD6\uFF0C\u5C0F\u706B\u6162\u71AC 3-4 \u5206\u9418\u81F3\u6FC3\u7A20\u6709\u5149\u6FA4\uFF0C\u505A\u70BA\u70E4\u8089\u6642\u7684\u539A\u5237\u91AC\u3002",
        "en": "Thread meat onto pre-soaked bamboo skewers like an accordion (ribbon style), interleaving lean and fat. Pour leftover marinade into a small saucepan with 1 tbsp oil, simmer for 3-4 mins until reduced into a thick glossy glaze for brushing.",
        "fil": "Ituhog ang karne sa kawayan nang pa-alon. Pakuluan ang natirang pinagbabaran kasama ang kaunting mantika para gawing pamahid.",
        "ja": "\u6C34\u306B\u6D78\u3057\u305F\u7AF9\u4E32\u306B\u3001\u8089\u3092\u30A2\u30B3\u30FC\u30C7\u30A3\u30AA\u30F3\u72B6\u306B\u6CE2\u6253\u305F\u305B\u3066\u523A\u3057\u307E\u3059\u3002\u6B8B\u3063\u305F\u6F2C\u3051\u30C0\u30EC\u306B\u6CB9\u5927\u3055\u30581\u3092\u52A0\u3048\u3001\u5C0F\u934B\u30673\u301C4\u5206\u716E\u8A70\u3081\u3066\u30C4\u30E4\u306E\u3042\u308B\u5857\u308A\u30BF\u30EC\u3092\u4F5C\u308A\u307E\u3059\u3002",
        "ko": "\uBB3C\uC5D0 \uBD88\uB9B0 \uAF2C\uCE58\uC5D0 \uACE0\uAE30\uB97C \uBB3C\uACB0 \uBAA8\uC591\uC73C\uB85C \uC8FC\uB984\uC7A1\uC544 \uAFF0\uC5B4\uC90D\uB2C8\uB2E4. \uB0A8\uC740 \uC591\uB150\uC5D0 \uAE30\uB984 1\uD070\uC220\uC744 \uB123\uACE0 \uB0C4\uBE44\uC5D0 3~4\uBD84\uAC04 \uC878\uC5EC \uBC1C\uB77C\uC904 \uAE00\uB808\uC774\uC988 \uC18C\uC2A4\uB97C \uB9CC\uB4ED\uB2C8\uB2E4."
      },
      durationSeconds: 300,
      image: "/images/pork-bbq-step2.jpg"
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u70AD\u706B\u7FFB\u70E4\u6216\u6C23\u70B8\uFF0C\u591A\u904D\u539A\u5237\u91AC\u6C41\u51FA\u7210", "en": "Grill over Coals or Air Fry, Basting Constantly", "fil": "Ihawin sa Uling o Air Fryer at Pahiran ng Sarsa", "ja": "\u70AD\u706B\u307E\u305F\u306F\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u3067\u713C\u304D\u3001\u30BF\u30EC\u3092\u91CD\u306D\u5857\u308A\u3059\u308B", "ko": "\uC22F\uBD88 \uB610\uB294 \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uC5D0 \uAD6C\uC6B0\uBA70 \uC18C\uC2A4 \uB367\uBC14\uB974\uAE30" },
      instruction: {
        "zh-TW": "\u3010\u70AD\u706B\u70E4\u67B6\u6CD5\u3011\u7F6E\u65BC\u7D05\u71B1\u6728\u70AD\u70E4\u67B6\u4E0A\uFF0C\u6BCF\u9762\u70E4 3-4 \u5206\u9418\u3002\u7FFB\u9762\u6642\u539A\u539A\u5237\u4E0A\u6FC3\u7E2E\u9999\u8549\u91AC\u6C41\uFF0C\u7FFB\u70E4 3-4 \u6B21\uFF0C\u76F4\u5230\u8089\u908A\u7DE3\u5E36\u6709\u8FF7\u4EBA\u7684\u5FAE\u7126\u70AD\u6591\uFF08\u7D04 10-12 \u5206\u9418\uFF09\u3002\u3010\u6C23\u70B8\u934B\u6A21\u5F0F\u8ACB\u53C3\u898B\u5207\u63DB\u3011\u3002\u8D81\u71B1\u8638\u849C\u8FA3\u6D0B\u8525\u767D\u918B\u958B\u52D5\uFF01",
        "en": "Traditional Grill: Cook over glowing coals for 3-4 mins per side. Continually brush generously with the sweet basting glaze every time you flip, grilling 10-12 mins total until beautifully charred on the edges. Serve hot with spiced garlic vinegar dip!",
        "fil": "Ihawin sa uling nang 3-4 minuto bawat gilid. Pahiran nang paulit-ulit ng sarsa hanggang magkaroon ng sunog-sunog na gilid. Isawsaw sa suka!",
        "ja": "\u70AD\u706B\u3067\u4E21\u9762\u30923\u301C4\u5206\u305A\u3064\u713C\u304D\u3001\u88CF\u8FD4\u3059\u305F\u3073\u306B\u5237\u6BDB\u3067\u30BF\u30EC\u3092\u305F\u3063\u3077\u308A\u5857\u308A\u91CD\u306D\u307E\u3059\u3002\u7E01\u306B\u9999\u3070\u3057\u3044\u7126\u3052\u76EE\u304C\u3064\u3044\u305F\u3089\u5B8C\u6210\u3002\u30D4\u30EA\u8F9B\u9162\u30C0\u30EC\u3092\u3064\u3051\u3066\u71B1\u3005\u3092\u982C\u5F35\u308A\u307E\u3059\uFF01",
        "ko": "\uC22F\uBD88\uC5D0 \uC55E\uB4A4\uB85C 3~4\uBD84\uC529 \uAD7D\uACE0 \uB4A4\uC9D1\uC744 \uB54C\uB9C8\uB2E4 \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uB367\uBC1C\uB77C \uAC00\uC7A5\uC790\uB9AC\uAC00 \uC0B4\uC9DD \uADF8\uC744\uB9B4 \uB54C\uAE4C\uC9C0 10~12\uBD84\uAC04 \uAD6C\uC6CC\uB0C5\uB2C8\uB2E4. \uB9E4\uCF64\uD55C \uACE0\uCD94 \uC2DD\uCD08\uC5D0 \uCC0D\uC5B4 \uBA39\uC2B5\uB2C8\uB2E4."
      },
      durationSeconds: 600,
      image: "/images/pork-bbq-step3.jpg",
      cookwareVariations: [
        {
          cookware: "airFryer",
          tempAndSetting: "Air Fryer: 200\xB0C (395\xB0F) for 10-12 mins (flip & baste at 6 mins)",
          instructionOverride: {
            "zh-TW": "\u6C23\u70B8\u934B\u6A21\u5F0F\uFF1A\u5C07\u4E32\u597D\u7684\u8089\u4E32\u653E\u5165\u6C23\u70B8\u7C43\uFF08\u82E5\u7AF9\u7C64\u904E\u9577\u53EF\u526A\u77ED\uFF09\uFF0C\u4EE5 200\xB0C \u70E4 6 \u5206\u9418\u3002\u53D6\u51FA\u7FFB\u9762\u4E26\u539A\u539A\u5237\u4E0A\u4E00\u5C64\u7126\u7CD6\u5237\u91AC\uFF0C\u7E7C\u7E8C\u6C23\u70B8 4-5 \u5206\u9418\uFF0C\u8868\u9762\u8D77\u5FAE\u7126\u7CD6\u5316\u7D05\u6591\uFF0C\u8089\u6C41\u56DB\u6EA2\uFF01",
            "en": "Air Fryer Variation: Place skewers in basket (trim sticks if needed). Air fry at 200\xB0C (395\xB0F) for 6 mins. Open basket, flip, brush generously with basting glaze, and air fry for another 4-5 mins until beautifully caramelized and sizzling.",
            "fil": "Paraan sa Air Fryer: I-air fry sa 200\xB0C nang 6 minuto, baligtarin, pahiran ng sarsa at lutuin pa nang 4-5 minuto.",
            "ja": "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u8A2D\u5B9A\uFF1A\u30D0\u30B9\u30B1\u30C3\u30C8\u306B\u4E26\u3079200\u2103\u30676\u5206\u52A0\u71B1\u3002\u88CF\u8FD4\u3057\u3066\u30BF\u30EC\u3092\u305F\u3063\u3077\u308A\u5857\u308A\u3001\u3055\u3089\u306B4\u301C5\u5206\u9999\u3070\u3057\u304F\u713C\u304D\u4E0A\u3052\u307E\u3059\u3002",
            "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uC124\uC815: 200\xB0C\uC5D0\uC11C 6\uBD84\uAC04 \uAD6C\uC6B4 \uB4A4 \uB4A4\uC9D1\uC5B4 \uAE00\uB808\uC774\uC988 \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uBC14\uB974\uACE0 4~5\uBD84\uAC04 \uB354 \uAD6C\uC6CC \uB178\uB987\uD55C \uCE90\uB7EC\uBA5C \uD06C\uB7EC\uC2A4\uD2B8\uB97C \uC644\uC131\uD569\uB2C8\uB2E4."
          }
        }
      ]
    }
  ],
  troubleshooting: [
    {
      id: "meat-too-tough",
      problem: { "zh-TW": "\u70E4\u8089\u4E32\u5403\u8D77\u4F86\u8089\u8CEA\u4E7E\u67F4\u767C\u786C", "en": "Meat is dry, tough, and chewy", "fil": "Matigas at tuyo ang karne", "ja": "\u8089\u304C\u30D1\u30B5\u3064\u3044\u3066\u56FA\u304F\u306A\u3063\u3066\u3057\u307E\u3063\u305F", "ko": "\uACE0\uAE30\uAC00 \uD37D\uD37D\uD558\uACE0 \uC9C8\uAE40" },
      cause: { "zh-TW": "\u9183\u6F2C\u6642\u9593\u904E\u77ED\uFF0C\u672A\u52A0\u6C7D\u6C34\uFF0C\u6216\u4F7F\u7528\u4E86\u5168\u7626\u8089\u4E14\u70E4\u592A\u4E45", "en": "Skipped the soda, marinated less than 2 hours, or used lean pork", "fil": "Kulang sa babad o walang taba ang karne", "ja": "\u70AD\u9178\u6C34\u3092\u4F7F\u308F\u306A\u304B\u3063\u305F\u304B\u3001\u6F2C\u3051\u8FBC\u307F\u6642\u9593\u304C\u77ED\u3059\u304E\u305F\u305F\u3081", "ko": "\uC0AC\uC774\uB2E4\uB97C \uB123\uC9C0 \uC54A\uC558\uAC70\uB098 \uC7AC\uC6B0\uB294 \uC2DC\uAC04\uC774 \uB108\uBB34 \uC9E7\uC558\uC74C" },
      solution: {
        "zh-TW": "\u52D9\u5FC5\u9078\u7528\u5E36\u6709\u5C11\u8A31\u6CB9\u8102\u7684\u6885\u82B1\u8089\uFF08Kasim\uFF09\uFF0C\u52A0\u5165\u96EA\u78A7\u6C7D\u6C34\u81F3\u5C11\u51B7\u85CF\u9183\u6F2C 4 \u5C0F\u6642\u4EE5\u4E0A\uFF0C\u78B3\u9178\u8207\u679C\u9178\u6703\u8B93\u8089\u8CEA\u5165\u53E3\u67D4\u5AE9\u591A\u6C41\uFF01",
        "en": "Always use pork shoulder with marbling. Let the carbonation and calamansi acid break down muscle fibers for at least 4 hours.",
        "fil": "Gumamit ng kasim na may kaunting taba at ibabad nang matagal sa Sprite.",
        "ja": "\u9069\u5EA6\u306B\u8102\u306E\u4E57\u3063\u305F\u8C5A\u80A9\u30ED\u30FC\u30B9\u3092\u4F7F\u3044\u3001\u30B9\u30D7\u30E9\u30A4\u30C8\u5165\u308A\u306E\u30BF\u30EC\u306B4\u6642\u9593\u4EE5\u4E0A\u6F2C\u3051\u8FBC\u3080\u3053\u3068\u3067\u5287\u7684\u306B\u67D4\u3089\u304B\u304F\u306A\u308A\u307E\u3059\u3002",
        "ko": "\uC9C0\uBC29\uC774 \uC801\uB2F9\uD55C \uBAA9\uC0B4 \uBD80\uC704\uB97C \uC0AC\uC6A9\uD558\uACE0, \uC0AC\uC774\uB2E4 \uC591\uB150\uC5D0 \uCD5C\uC18C 4\uC2DC\uAC04 \uC774\uC0C1 \uCDA9\uBD84\uD788 \uC7AC\uC6CC\uC8FC\uC138\uC694."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u7AF9\u7C64\u6CE1\u6C34\u6551\u547D\u6307\u5357\u3011\uFF1A\u7AF9\u7C64\u5728\u7A7F\u8089\u524D\u52D9\u5FC5\u5728\u51B7\u6C34\u4E2D\u6D78\u6CE1\u81F3\u5C11 30 \u5206\u9418\uFF0C\u5438\u98FD\u6C34\u5206\u7684\u7AF9\u5B50\u5728\u9AD8\u6EAB\u70AD\u706B\u6216\u6C23\u70B8\u934B\u4E2D\u624D\u4E0D\u6703\u88AB\u76F4\u63A5\u71D2\u65B7\u70AD\u5316\uFF01",
      "en": "Never Skip Soaking: Always soak wooden skewers in water for 30 minutes before threading meat. Waterlogged bamboo will never catch fire or snap on hot grates!",
      "fil": "Huwag kalimutang ibabad ang tuhog sa tubig nang 30 minuto para hindi masunog sa ihawan.",
      "ja": "\u7AF9\u4E32\u306E\u6C34\u6F2C\u3051\u306F\u5FC5\u9808\uFF1A\u4E32\u3092\u6C34\u306B30\u5206\u6D78\u3057\u3066\u304A\u304F\u3060\u3051\u3067\u3001\u70AD\u706B\u3084\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u3067\u4E32\u304C\u71C3\u3048\u305F\u308A\u6298\u308C\u305F\u308A\u3059\u308B\u306E\u3092\u9632\u3052\u307E\u3059\u3002",
      "ko": "\uB300\uB098\uBB34 \uAF2C\uCE58\uB294 \uACE0\uAE30\uB97C \uAFF0\uAE30 \uC804 \uBC18\uB4DC\uC2DC \uCC2C\uBB3C\uC5D0 30\uBD84 \uC774\uC0C1 \uBD88\uB824\uB450\uC5B4\uC57C \uC22F\uBD88\uC774\uB098 \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uC5D0\uC11C \uD0C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/chickenInasal.ts
var chickenInasal = {
  id: "chicken-inasal",
  slug: "chicken-inasal",
  title: {
    "zh-TW": "\u5DF4\u79D1\u6D1B\u5FB7\u9999\u8305\u70E4\u96DE (Chicken Inasal)",
    "en": "Bacolod Chicken Inasal (Lemongrass Calamansi Roast)",
    "fil": "Inasal na Manok ng Bacolod",
    "ja": "\u30D0\u30B3\u30ED\u30C9\u540D\u7269\u30C1\u30AD\u30F3\u30FB\u30A4\u30CA\u30B5\u30EB\uFF08\u30EC\u30E2\u30F3\u30B0\u30E9\u30B9\u9999\u308B\u9EC4\u91D1\u70AD\u706B\u713C\u304D\u9D8F\uFF09",
    "ko": "\uBC14\uCF5C\uB85C\uB4DC \uCE58\uD0A8 \uC774\uB098\uC0B4 (\uB808\uBAAC\uADF8\uB77C\uC2A4 \uAE54\uB77C\uB9CC\uC2DC \uD669\uAE08 \uC22F\uBD88 \uD1B5\uB2ED)"
  },
  subtitle: {
    "zh-TW": "\u5FAE\u7B11\u4E4B\u90FD\u5DF4\u79D1\u6D1B\u5FB7\u795E\u4F5C\u30FB\u65B0\u9BAE\u9999\u8305\u56DB\u5B63\u67D1\u30FB\u7D05\u6728\u96DE\u6CB9\u849C\u9999\u98EF\u9748\u9B42\u5929\u82B1\u677F",
    "en": "City of Smiles Legend: Fresh Lemongrass, Calamansi, Sinamak & Golden Annatto Chicken Oil",
    "fil": "Sikat na inihaw na manok mula sa Negros na may tanglad at dilaw na mantika",
    "ja": "\u30CD\u30B0\u30ED\u30B9\u5CF6\u30D0\u30B3\u30ED\u30C9\u306E\u81F3\u5B9D\uFF01\u30A2\u30C1\u30E5\u30A8\u30C6\u9D8F\u6CB9\u3092\u304B\u3051\u305F\u30AC\u30FC\u30EA\u30C3\u30AF\u30E9\u30A4\u30B9\u3068\u5171\u306B",
    "ko": "\uB808\uBAAC\uADF8\uB77C\uC2A4\uC640 \uAE54\uB77C\uB9CC\uC2DC\uB85C \uC219\uC131\uD574 \uC544\uCD94\uC5D0\uD14C \uCE58\uD0A8 \uC624\uC77C \uBC25\uACFC \uD568\uAED8 \uBA39\uB294 \uC804\uC124\uC758 \uD1B5\uB2ED"
  },
  tagline: {
    "zh-TW": "\u83F2\u5F8B\u8CD3\u70E4\u96DE\u7684\u6975\u81F4\u5DD4\u5CF0\uFF0C\u9178\u9999\u8349\u672C\u76F4\u64CA\u9748\u9B42\uFF0C\u91D1\u9EC3\u7D05\u6728\u96DE\u6CB9\u62CC\u98EF\u767E\u5403\u4E0D\u53AD",
    "en": "The crowned king of Philippine roast chicken: citrusy, herbal, smoky, and golden",
    "fil": "Ang pambansang paboritong inihaw na manok na laging may kasamang unli-rice at chicken oil",
    "ja": "\u723D\u5FEB\u306A\u30CF\u30FC\u30D6\u306E\u9178\u5473\u3068\u30B9\u30E2\u30FC\u30AD\u30FC\u306A\u76AE\u3002\u9EC4\u91D1\u306E\u30C1\u30AD\u30F3\u30AA\u30A4\u30EB\u3054\u98EF\u3068\u306E\u76F8\u6027\u306F\u7570\u6B21\u5143",
    "ko": "\uC0C8\uCF64\uD55C \uD5C8\uBE0C \uD5A5\uACFC \uC22F\uBD88 \uD5A5\uC758 \uD658\uC0C1\uC801\uC778 \uC870\uD654, \uD669\uAE08\uBE5B \uCE58\uD0A8 \uC624\uC77C \uBC25\uACFC \uBB34\uD55C \uD761\uC785"
  },
  heroImage: "/images/chicken-inasal.jpg",
  difficulty: "medium",
  prepTimeMinutes: 25,
  cookTimeMinutes: 30,
  defaultServings: 4,
  caloriesPerServing: 450,
  category: "mains",
  dietaryTags: ["classic", "halal", "glutenFree"],
  supportedCookware: ["traditional", "airFryer"],
  culture: {
    originRegion: {
      "zh-TW": "\u897F\u5167\u683C\u7F85\u7701\u30FB\u5FAE\u7B11\u4E4B\u90FD\u5DF4\u79D1\u6D1B\u5FB7 (Bacolod City, Western Visayas)",
      "en": "Bacolod City, Negros Occidental (City of Smiles)",
      "fil": "Lungsod ng Bacolod, Negros Occidental",
      "ja": "\u30CD\u30B0\u30ED\u30B9\u5CF6\u30D0\u30B3\u30ED\u30C9\u5E02",
      "ko": "\uBC14\uCF5C\uB85C\uB4DC \uC2DC\uD2F0 (\uB124\uADF8\uB85C\uC2A4 \uC625\uC2DC\uB374\uD0C8)"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u5DF4\u79D1\u6D1B\u5FB7 Manokan Country \u70E4\u96DE\u4E00\u689D\u8857", "en": "Manokan Country Open-Air Strip, Bacolod", "fil": "Manokan Country sa Bacolod", "ja": "\u30D0\u30B3\u30ED\u30C9\u30FB\u30DE\u30CE\u30AB\u30F3\u30AB\u30F3\u30C8\u30EA\u30FC\u5C4B\u53F0\u8857", "ko": "\uBC14\uCF5C\uB85C\uB4DC \uB9C8\uB178\uCE78 \uCEE8\uD2B8\uB9AC \uC57C\uC678 \uC2DD\uB2F9\uAC00" },
      { "zh-TW": "\u99AC\u5C3C\u62C9\u5404\u5927 Inasal \u70AD\u70E4\u9910\u9928", "en": "Metro Manila Inasal Houses", "fil": "Mga Inasal Stalls sa Maynila", "ja": "\u30DE\u30CB\u30E9\u5404\u6240\u306E\u30A4\u30CA\u30B5\u30EB\u5C02\u9580\u5E97", "ko": "\uB9C8\uB2D0\uB77C \uC774\uB098\uC0B4 \uC804\uBB38\uC810 \uAC70\uB9AC" }
    ],
    historyStory: {
      "zh-TW": "Inasal \u6E90\u81EA\u6021\u6717\u8207\u5DF4\u79D1\u6D1B\u5FB7\u7684\u5E0C\u5229\u84CB\u8FB2\u8A9E\uFF08Hiligaynon\uFF09\uFF0C\u610F\u70BA\u300C\u70AD\u706B\u7099\u70E4\u300D\u3002\u4E0D\u540C\u65BC\u7F8E\u5F0F\u751C\u70E4\u96DE\uFF0C\u6B63\u5B97 Inasal \u4E0D\u52A0\u7CD6\uFF0C\u800C\u662F\u4F7F\u7528\u5927\u91CF\u65B0\u9BAE\u9999\u8305\u3001\u751F\u8591\u3001\u5927\u849C\u3001\u56DB\u5B63\u6854\u6C41\u8207\u6930\u5B50\u767D\u918B\u9183\u6F2C\u3002\u5728\u7099\u70E4\u6642\uFF0C\u4E0D\u65B7\u5237\u4E0A\u4EE5\u96DE\u8102\u80AA\u548C\u7D05\u6728\u7C7D\uFF08Atsuete\uFF09\u71AC\u51FA\u7684\u300C\u9EC3\u91D1\u7D05\u6728\u96DE\u6CB9\uFF08Chicken Oil\uFF09\u300D\uFF0C\u70E4\u51FA\u843D\u65E5\u822C\u71E6\u721B\u6CB9\u4EAE\u7684\u8106\u76AE\uFF01",
      "en": 'Inasal means "cooked over charcoal" in Hiligaynon. Unlike sweet barbecue, Bacolod Inasal is decidedly tangy and aromatic\u2014marinated in bruised lemongrass stalks, calamansi, ginger, and coconut vinegar. While grilling, it is continually basted with rendered chicken fat infused with annatto seeds (Chicken Oil), giving it that legendary golden sunset sheen!',
      "fil": "Galing sa salitang Hiligaynon na ang ibig sabihin ay inihaw sa baga. Pinasikat sa Manokan Country sa Bacolod gamit ang tanglad, luya, kalamansi, at ang tanyag na dilaw na chicken oil.",
      "ja": "\u30D0\u30B3\u30ED\u30C9\u306E\u65B9\u8A00\u3067\u300C\u70AD\u706B\u713C\u304D\u300D\u3092\u610F\u5473\u3059\u308B\u30A4\u30CA\u30B5\u30EB\u3002\u7518\u3044BBQ\u3068\u306F\u4E00\u7DDA\u3092\u753B\u3057\u3001\u30EC\u30E2\u30F3\u30B0\u30E9\u30B9\u3001\u751F\u59DC\u3001\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u3001\u30B3\u30B3\u30CA\u30C3\u30C4\u9162\u3067\u6F2C\u3051\u8FBC\u307F\u307E\u3059\u3002\u30A2\u30C1\u30E5\u30A8\u30C6\u3067\u9EC4\u91D1\u8272\u306B\u3057\u305F\u9D8F\u6CB9\u3092\u30CF\u30B1\u3067\u5857\u308A\u306A\u304C\u3089\u713C\u304D\u4E0A\u3052\u308B\u306E\u304C\u4F1D\u7D71\u3067\u3059\u3002",
      "ko": '\uD790\uB9AC\uAC00\uC774\uB17C \uC5B4\uB85C "\uC22F\uBD88\uC5D0 \uAD7D\uB2E4"\uB77C\uB294 \uB73B. \uB2EC\uC9C0 \uC54A\uACE0 \uB808\uBAAC\uADF8\uB77C\uC2A4, \uC0DD\uAC15, \uAE54\uB77C\uB9CC\uC2DC, \uC2DD\uCD08\uC758 \uC0C1\uCF8C\uD55C \uD5A5\uC774 \uB2ED\uACE0\uAE30\uC5D0 \uAE4A\uC219\uC774 \uBC30\uC5B4\uB4E4\uBA70, \uC544\uCD94\uC5D0\uD14C \uCE58\uD0A8 \uC624\uC77C\uC744 \uB367\uBC1C\uB77C\uAC00\uBA70 \uAD6C\uC6CC\uB0C5\uB2C8\uB2E4.'
    },
    filipinoScript: "Inasal na Manok ng Bacolod",
    filipinoPhonetics: "Ee-nah-sal nah Mah-nok nang Bah-koh-lod",
    audioPronunciationText: "Isang Pecho-Pak po na Inasal at may extra chicken oil sa kanin!"
  },
  ingredients: [
    {
      id: "chicken-quarters",
      name: { "zh-TW": "\u5168\u96DE\u817F\u9023\u9AA8\u5E36\u5927\u817F (Chicken Leg Quarters)", "en": "Chicken Leg Quarters or Bone-in Thighs", "fil": "Paa at Hita ng Manok (Paa-Pak)", "ja": "\u9AA8\u4ED8\u304D\u30C1\u30AD\u30F3\u30EC\u30C3\u30B0\uFF08\u30E2\u30E2\uFF06\u30B5\u30A4\uFF09", "ko": "\uC7A5\uAC01 (\uB113\uC801\uB2E4\uB9AC\uAC00 \uBD99\uC740 \uD1B5\uB2ED\uB2E4\uB9AC)" },
      amount: 4,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Hita at Paa ng Manok",
      filipinoPronunciation: "Hee-tah aht Pah-ah nang Mah-nok"
    },
    {
      id: "lemongrass",
      name: { "zh-TW": "\u65B0\u9BAE\u9999\u8305 (\u62CD\u6241\u5207\u788E\uFF0C\u9999\u6C23\u9748\u9B42)", "en": "Fresh Lemongrass (Bruised & finely minced)", "fil": "Sariwang Tanglad", "ja": "\u751F\u30EC\u30E2\u30F3\u30B0\u30E9\u30B9\uFF08\u6839\u5143\u3092\u53E9\u3044\u3066\u523B\u3080\uFF09", "ko": "\uC2E0\uC120\uD55C \uB808\uBAAC\uADF8\uB77C\uC2A4 (\uCE7C\uB4F1\uC73C\uB85C \uC73C\uAE6C \uB4A4 \uB2E4\uC9D0)" },
      amount: 3,
      unitMetric: "stalk",
      unitUS: "stalk",
      isKeyFlavor: true,
      filipinoName: "Tanglad",
      filipinoPronunciation: "Tang-lad"
    },
    {
      id: "ginger",
      name: { "zh-TW": "\u8001\u8591 (\u53BB\u76AE\u78E8\u6CE5)", "en": "Fresh Ginger (Peeled & grated)", "fil": "Luya", "ja": "\u751F\u59DC\uFF08\u3059\u308A\u304A\u308D\u3057\uFF09", "ko": "\uB2E4\uC9C4 \uC0DD\uAC15" },
      amount: 30,
      unitMetric: "g",
      unitUS: "1 oz",
      filipinoName: "Luya",
      filipinoPronunciation: "Loo-yah"
    },
    {
      id: "garlic",
      name: { "zh-TW": "\u65B0\u9BAE\u849C\u672B", "en": "Fresh Garlic (Minced)", "fil": "Bawang", "ja": "\u306B\u3093\u306B\u304F\uFF08\u307F\u3058\u3093\u5207\u308A\uFF09", "ko": "\uB2E4\uC9C4 \uB9C8\uB298" },
      amount: 8,
      unitMetric: "clove",
      unitUS: "clove",
      filipinoName: "Bawang",
      filipinoPronunciation: "Bah-wang"
    },
    {
      id: "calamansi-juice",
      name: { "zh-TW": "\u65B0\u9BAE\u56DB\u5B63\u67D1\u6854\u6C41", "en": "Fresh Calamansi Juice", "fil": "Katas ng Kalamansi", "ja": "\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u751F\u679C\u6C41", "ko": "\uC2E0\uC120\uD55C \uAE54\uB77C\uB9CC\uC2DC \uC999" },
      amount: 60,
      unitMetric: "ml",
      unitUS: "0.25 cup",
      isKeyFlavor: true,
      filipinoName: "Kalamansi",
      filipinoPronunciation: "Kah-lah-mahn-see"
    },
    {
      id: "coconut-vinegar",
      name: { "zh-TW": "\u83F2\u5F8B\u8CD3\u6930\u5B50\u767D\u918B\u6216\u7518\u8517\u918B", "en": "Coconut Vinegar (Sukang Tuba) or Cane Vinegar", "fil": "Sukang Paombong o Suka", "ja": "\u30B3\u30B3\u30CA\u30C3\u30C4\u5929\u7136\u9162\u307E\u305F\u306F\u30B5\u30C8\u30A6\u30AD\u30D3\u9162", "ko": "\uCF54\uCF54\uB11B \uC2DD\uCD08 \uB610\uB294 \uC0AC\uD0D5\uC218\uC218 \uC2DD\uCD08" },
      amount: 60,
      unitMetric: "ml",
      unitUS: "0.25 cup",
      filipinoName: "Sukang Suka",
      filipinoPronunciation: "Soo-kang Soo-kah"
    },
    {
      id: "brown-sugar",
      name: { "zh-TW": "\u9ED1\u7CD6 (\u5FAE\u91CF\u63D0\u5473)", "en": "Brown Sugar (a touch to balance)", "fil": "Asukal na Pula", "ja": "\u9ED2\u7CD6\uFF08\u96A0\u3057\u5473\u7A0B\u5EA6\uFF09", "ko": "\uD751\uC124\uD0D5 (\uAC10\uCE60\uB9DB\uC6A9 \uC18C\uB7C9)" },
      amount: 1,
      unitMetric: "tbsp",
      unitUS: "1 tbsp",
      filipinoName: "Asukal",
      filipinoPronunciation: "Ah-soo-kal"
    },
    {
      id: "annatto-chicken-oil",
      name: { "zh-TW": "\u81EA\u88FD\u7D05\u6728\u96DE\u6CB9 (\u96DE\u6CB9\u70B8\u7D05\u6728\u7C7D\u63D0\u53D6)", "en": "Rendered Annatto Chicken Oil (for basting & rice)", "fil": "Chicken Oil na may Atsuete", "ja": "\u9EC4\u91D1\u30A2\u30C1\u30E5\u30A8\u30C6\u30C1\u30AD\u30F3\u30AA\u30A4\u30EB\uFF08\u30CF\u30B1\u5857\u308A\uFF06\u3054\u98EF\u7528\uFF09", "ko": "\uC544\uCD94\uC5D0\uD14C \uCE58\uD0A8 \uC624\uC77C (\uBC14\uB974\uB294 \uC624\uC77C & \uBC25 \uBE44\uBE54\uC6A9)" },
      amount: 80,
      unitMetric: "ml",
      unitUS: "0.33 cup",
      isKeyFlavor: true,
      filipinoName: "Chicken Oil",
      filipinoPronunciation: "Chee-ken Oil"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u8349\u672C\u67D1\u6A58\u79D8\u6C41\u6DF1\u5EA6\u9183\u6F2C\u96DE\u817F", "en": "Bruise Aromatics & Marinate Chicken", "fil": "Ibabad ang Manok sa Tanglad, Luya at Kalamansi", "ja": "\u30CF\u30FC\u30D6\u3068\u67D1\u6A58\u306E\u7279\u88FD\u30C0\u30EC\u306B\u9D8F\u8089\u3092\u3058\u3063\u304F\u308A\u6F2C\u3051\u8FBC\u3080", "ko": "\uD5C8\uBE0C\uC640 \uAE54\uB77C\uB9CC\uC2DC \uD2B9\uC81C \uC591\uB150\uC5D0 \uB2ED\uACE0\uAE30 \uC7AC\uC6B0\uAE30" },
      instruction: {
        "zh-TW": "\u5C07\u96DE\u817F\u8089\u539A\u8655\u5283\u958B 2 \u5200\u4EE5\u4FBF\u5165\u5473\u3002\u5728\u5927\u7897\u4E2D\u7528\u529B\u63C9\u634F\u62CD\u788E\u7684\u9999\u8305\u3001\u751F\u8591\u6CE5\u3001\u5927\u849C\u672B\uFF0C\u91CB\u653E\u8349\u672C\u7CBE\u6CB9\uFF0C\u52A0\u5165\u56DB\u5B63\u67D1\u6854\u6C41\u3001\u6930\u5B50\u918B\u3001\u9ED1\u7CD6\u30012\u8336\u5319\u7C97\u9E7D\u8207\u9ED1\u80E1\u6912\u788E\u3002\u5C07\u96DE\u817F\u653E\u5165\u6DF1\u60C5\u6309\u6469\uFF0C\u52A0\u84CB\u51B7\u85CF\u9183\u6F2C\u81F3\u5C11 6 \u5C0F\u6642\u6216\u9694\u591C\u3002",
        "en": "Score deep slits into the thickest parts of the chicken legs. In a bowl, crush bruised lemongrass, ginger, and garlic to release botanical oils. Whisk in calamansi juice, coconut vinegar, brown sugar, 2 tsp coarse salt, and black pepper. Submerge chicken, massage well, and marinate chilled for at least 6 hours or overnight.",
        "fil": "Hiwain nang bahagya ang laman ng manok. Pagsamahin ang tanglad, luya, bawang, kalamansi, suka, asukal, asin at paminta. Ibabad ang manok nang hindi bababa sa 6 na oras.",
        "ja": "\u30C1\u30AD\u30F3\u30EC\u30C3\u30B0\u306E\u539A\u3044\u90E8\u5206\u306B\u96A0\u3057\u5305\u4E01\u3092\u5165\u308C\u307E\u3059\u3002\u53E9\u3044\u305F\u30EC\u30E2\u30F3\u30B0\u30E9\u30B9\u3001\u751F\u59DC\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u679C\u6C41\u3001\u30B3\u30B3\u30CA\u30C3\u30C4\u9162\u3001\u5869\u80E1\u6912\u3092\u63C9\u307F\u8FBC\u307F\u3001\u51B7\u8535\u5EAB\u30676\u6642\u9593\u4EE5\u4E0A\u6F2C\u3051\u8FBC\u307F\u307E\u3059\u3002",
        "ko": "\uB2ED\uB2E4\uB9AC \uC0B4\uC774 \uB450\uAEBC\uC6B4 \uBD80\uC704\uC5D0 \uCE7C\uC9D1\uC744 \uB0C5\uB2C8\uB2E4. \uC73C\uAE6C \uB808\uBAAC\uADF8\uB77C\uC2A4, \uC0DD\uAC15, \uB9C8\uB298, \uAE54\uB77C\uB9CC\uC2DC \uC999, \uC2DD\uCD08, \uC124\uD0D5, \uC18C\uAE08, \uD6C4\uCD94\uB97C \uC11E\uC5B4 \uB2ED\uACE0\uAE30\uC5D0 \uBC84\uBB34\uB9B0 \uB4A4 \uB0C9\uC7A5\uACE0\uC5D0 6\uC2DC\uAC04 \uC774\uC0C1 \uC7AC\uC6C1\uB2C8\uB2E4."
      },
      durationSeconds: 21600,
      image: "/images/chicken-inasal-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u71AC\u88FD\u843D\u65E5\u91D1\u9EC3\u300C\u7D05\u6728\u849C\u9999\u96DE\u6CB9\u300D", "en": "Render Golden Annatto Chicken Basting Oil", "fil": "Gawin ang Dilaw na Mantika (Chicken Oil)", "ja": "\u9EC4\u91D1\u306E\u300C\u30A2\u30C1\u30E5\u30A8\u30C6\u30C1\u30AD\u30F3\u30AA\u30A4\u30EB\u300D\u3092\u716E\u51FA\u3059", "ko": "\uD669\uAE08\uBE5B \uC544\uCD94\uC5D0\uD14C \uCE58\uD0A8 \uC624\uC77C \uB9CC\uB4E4\uAE30" },
      instruction: {
        "zh-TW": "\u5C0F\u934B\u4E2D\u653E\u5165\u96DE\u76AE/\u96DE\u80A5\u6CB9\uFF08\u6216\u690D\u7269\u6CB9\u52A0\u9EC3\u6CB9 80ml\uFF09\uFF0C\u653E\u5165 2 \u5927\u5319\u7D05\u6728\u7C7D\uFF08Atsuete\uFF09\u8207 3 \u74E3\u62CD\u6241\u849C\u982D\u3002\u7528\u6975\u5C0F\u706B\u6162\u7178 5-6 \u5206\u9418\uFF0C\u76F4\u5230\u6CB9\u8102\u88AB\u67D3\u6210\u7121\u6BD4\u71E6\u721B\u7684\u843D\u65E5\u6A58\u7D05\u8272\uFF0C\u904E\u6FFE\u6389\u7D05\u6728\u7C7D\u5099\u7528\u3002\u6B64\u6CB9\u5C31\u662F Inasal \u7126\u8106\u5916\u76AE\u8207\u62CC\u98EF\u7684\u842C\u80FD\u795E\u6CB9\uFF01",
        "en": "In a small saucepan, gently warm 80ml chicken fat/oil with 2 tbsp annatto seeds (atsuete) and 3 crushed garlic cloves over low heat for 5-6 mins until glowing sunset orange. Strain out the seeds. This liquid gold is the secret to the crispy glaze and famous garlic rice!",
        "fil": "Painitin ang mantika o taba ng manok kasama ang atsuete at bawang sa mahinang apoy nang 5-6 minuto hanggang maging kulay kahel. Salain.",
        "ja": "\u5C0F\u934B\u306B\u9D8F\u6CB9\uFF08\u307E\u305F\u306F\u30B5\u30E9\u30C0\u6CB9\u3068\u30D0\u30BF\u30FC\uFF0980ml\u3001\u30A2\u30C1\u30E5\u30A8\u30C6\u30B7\u30FC\u30C9\u5927\u3055\u30582\u3001\u6F70\u3057\u30CB\u30F3\u30CB\u30AF\u3092\u5165\u308C\u3001\u6975\u5F31\u706B\u30675\u5206\u71B1\u3057\u3066\u9BAE\u3084\u304B\u306A\u30AA\u30EC\u30F3\u30B8\u8272\u3092\u62BD\u51FA\u3057\u307E\u3059\u3002\u7A2E\u3092\u6FFE\u3057\u3066\u5B8C\u6210\u3002",
        "ko": "\uC791\uC740 \uB0C4\uBE44\uC5D0 \uB2ED\uAE30\uB984(\uB610\uB294 \uC2DD\uC6A9\uC720\uC640 \uBC84\uD130) 80ml, \uC544\uCD94\uC5D0\uD14C \uC528\uC557 2\uD070\uC220, \uB9C8\uB298\uC744 \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C 5~6\uBD84\uAC04 \uB053\uC5EC \uBD89\uC740 \uC624\uB80C\uC9C0\uBE5B \uAE30\uB984\uC744 \uC6B0\uB824\uB0B8 \uB4A4 \uCCB4\uC5D0 \uAC78\uB7EC\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 360,
      image: "/images/chicken-inasal-step2.jpg"
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u70AD\u706B\u7099\u70E4\u6216\u6C23\u70B8\uFF0C\u53CD\u8986\u539A\u5237\u96DE\u6CB9", "en": "Grill over Charcoal or Air Fry, Basting with Chicken Oil", "fil": "Ihawin sa Uling o Air Fryer at Pahiran ng Chicken Oil", "ja": "\u70AD\u706B\u307E\u305F\u306F\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u3067\u713C\u304D\u3001\u30C1\u30AD\u30F3\u30AA\u30A4\u30EB\u3092\u5857\u308A\u91CD\u306D\u308B", "ko": "\uC22F\uBD88 \uB610\uB294 \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uC5D0 \uAD6C\uC6B0\uBA70 \uCE58\uD0A8 \uC624\uC77C \uB367\uBC14\uB974\uAE30" },
      instruction: {
        "zh-TW": "\u3010\u70AD\u706B\u70E4\u7210\u6CD5\u3011\u5C07\u96DE\u817F\u653E\u4E0A\u6728\u70AD\u70E4\u7DB2\u4E2D\u706B\u70E4\uFF0C\u6BCF 4-5 \u5206\u9418\u7FFB\u9762\u4E00\u6B21\uFF0C\u6BCF\u6B21\u7FFB\u9762\u90FD\u7528\u6BDB\u5237\u539A\u539A\u5857\u62B9\u81EA\u88FD\u7D05\u6728\u96DE\u6CB9\u3002\u70E4\u7D04 20-25 \u5206\u9418\u81F3\u9AA8\u908A\u8089\u719F\u900F\u3001\u5916\u76AE\u7126\u9999\u91D1\u9EC3\u3002\u3010\u6C23\u70B8\u934B\u6A21\u5F0F\u8ACB\u53C3\u898B\u5207\u63DB\u3011\u3002\u76DB\u76E4\u914D\u4E0A\u5927\u849C\u98EF\uFF0C\u6DCB\u4E0A\u96DE\u6CB9\u8207\u91D1\u6854\u8FA3\u6912\u91AC\u6CB9\uFF01",
        "en": "Grill over medium coals, turning every 4-5 mins. Continually baste generously with the golden annatto chicken oil every single flip! Grill 20-25 mins until juices run clear and skin is blistering crisp. Serve over Sinangag (garlic rice), drizzling extra chicken oil and toyomansi on top!",
        "fil": "Ihawin sa uling nang 20-25 minuto. Pahiran ng chicken oil sa bawat pagbaligtad hanggang maluto nang husto at lumutong ang balat.",
        "ja": "\u70AD\u706B\u306B\u306E\u305B\u30014\u301C5\u5206\u3054\u3068\u306B\u8FD4\u3057\u306A\u304C\u3089\u30A2\u30C1\u30E5\u30A8\u30C6\u30C1\u30AD\u30F3\u30AA\u30A4\u30EB\u3092\u8D05\u6CA2\u306B\u5857\u308A\u91CD\u306D\u307E\u3059\u300220\u301C25\u5206\u3067\u4E2D\u307E\u3067\u706B\u3092\u901A\u3057\u76AE\u3092\u30D1\u30EA\u30C3\u3068\u713C\u304D\u4E0A\u3052\u307E\u3059\u3002\u30AC\u30FC\u30EA\u30C3\u30AF\u30E9\u30A4\u30B9\u306B\u30C1\u30AD\u30F3\u30AA\u30A4\u30EB\u3092\u5782\u3089\u3057\u3066\u8C6A\u5FEB\u306B\uFF01",
        "ko": "\uC911\uAC04 \uBD88\uC758 \uC22F\uBD88\uC5D0 \uC5B9\uC5B4 4~5\uBD84\uB9C8\uB2E4 \uB4A4\uC9D1\uC73C\uBA70 \uC544\uCD94\uC5D0\uD14C \uCE58\uD0A8 \uC624\uC77C\uC744 \uB4EC\uBFCD \uBC1C\uB77C\uC90D\uB2C8\uB2E4. 20~25\uBD84\uAC04 \uC18D\uAE4C\uC9C0 \uC644\uBCBD\uD788 \uC775\uD788\uACE0 \uAECD\uC9C8\uC744 \uBC14\uC0AD\uD558\uAC8C \uAD7D\uC2B5\uB2C8\uB2E4. \uB9C8\uB298\uBC25 \uC704\uC5D0 \uCE58\uD0A8 \uC624\uC77C\uC744 \uBFCC\uB824 \uD568\uAED8 \uC990\uAE30\uC138\uC694."
      },
      durationSeconds: 1500,
      image: "/images/chicken-inasal-step3.jpg",
      cookwareVariations: [
        {
          cookware: "airFryer",
          tempAndSetting: "Air Fryer: 190\xB0C (375\xB0F) for 22-25 mins (brush with chicken oil)",
          instructionOverride: {
            "zh-TW": "\u6C23\u70B8\u934B\u6A21\u5F0F\uFF1A\u5C07\u96DE\u817F\u76AE\u671D\u4E0A\u653E\u5165\u6C23\u70B8\u7C43\uFF0C\u8868\u9762\u5237\u6EFF\u7D05\u6728\u96DE\u6CB9\u3002\u4EE5 190\xB0C \u6C23\u70B8 12 \u5206\u9418\uFF0C\u7FFB\u9762\u5237\u6CB9\u6C23\u70B8 8 \u5206\u9418\uFF0C\u6700\u5F8C\u7FFB\u56DE\u96DE\u76AE\u671D\u4E0A\u5237\u6CB9\u4EE5 200\xB0C \u6C23\u70B8 3 \u5206\u9418\uFF0C\u70E4\u51FA\u7121\u6BD4\u91D1\u9EC3\u7206\u8106\u7684\u6975\u81F4\u8106\u76AE\uFF01",
            "en": "Air Fryer Variation: Place chicken leg skin-side UP into basket. Brush generously with annatto chicken oil. Air fry at 190\xB0C (375\xB0F) for 12 mins. Flip, brush oil, air fry 8 mins. Flip skin-side back UP, brush extra oil, and crisp at 200\xB0C (395\xB0F) for 3 mins until blistered and golden!",
            "fil": "Paraan sa Air Fryer: Ilagay ang manok sa 190\xB0C nang 12 minuto, baligtarin at pahiran ng mantika nang 8 minuto, ibalik ang balat sa itaas at i-200\xB0C nang 3 minuto para lumutong.",
            "ja": "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u8A2D\u5B9A\uFF1A\u76AE\u3092\u4E0A\u306B\u3057\u3066\u6CB9\u3092\u5857\u308A190\u2103\u306712\u5206\u3002\u88CF\u8FD4\u3057\u3066\u6CB9\u3092\u5857\u308A8\u5206\u3002\u518D\u5EA6\u76AE\u3092\u4E0A\u306B\u3057\u3066200\u2103\u30673\u5206\u52A0\u71B1\u3057\u3001\u76AE\u3092\u30D1\u30EA\u30C3\u3068\u9EC4\u91D1\u8272\u306B\u4ED5\u4E0A\u3052\u307E\u3059\u3002",
            "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uC124\uC815: \uAECD\uC9C8\uC774 \uC704\uB85C \uD5A5\uD558\uAC8C \uB123\uACE0 \uC624\uC77C\uC744 \uBC1C\uB77C 190\xB0C\uC5D0\uC11C 12\uBD84 \uAD7D\uC2B5\uB2C8\uB2E4. \uB4A4\uC9D1\uC5B4 \uC624\uC77C\uC744 \uBC14\uB974\uACE0 8\uBD84 \uAD6C\uC6B4 \uB4A4, \uB2E4\uC2DC \uAECD\uC9C8 \uCABD\uC73C\uB85C \uB3CC\uB824 200\xB0C\uC5D0\uC11C 3\uBD84\uAC04 \uBC14\uC0AD\uD558\uAC8C \uAD6C\uC6CC\uB0C5\uB2C8\uB2E4."
          }
        }
      ]
    }
  ],
  troubleshooting: [
    {
      id: "skin-burned-raw-inside",
      problem: { "zh-TW": "\u5916\u76AE\u5DF2\u7D93\u7126\u9ED1\uFF0C\u4F46\u96DE\u9AA8\u6DF1\u8655\u4ECD\u6709\u8840\u7D72\u672A\u719F", "en": "Skin chars black before the bone is cooked through", "fil": "Sunog ang balat ngunit may dugo pa sa loob ng buto", "ja": "\u76AE\u304C\u771F\u3063\u9ED2\u306B\u7126\u3052\u305F\u306E\u306B\u3001\u9AA8\u306E\u5468\u308A\u304C\u307E\u3060\u751F\u713C\u3051", "ko": "\uAECD\uC9C8\uC740 \uAC80\uAC8C \uD0C0\uB294\uB370 \uBF08 \uBD80\uADFC \uC18D\uC0B4\uC774 \uB35C \uC775\uC74C" },
      cause: { "zh-TW": "\u70AD\u706B\u592A\u65FA\uFF0C\u6216\u96DE\u817F\u6700\u539A\u8655\u672A\u5148\u5283\u5200\u5283\u900F", "en": "Direct fire too intense or skipped scoring thickest parts of the thigh", "fil": "Masyadong malakas ang apoy o hindi nahiwa ang makakapal na parte", "ja": "\u706B\u529B\u304C\u5F37\u3059\u304E\u305F\u304B\u3001\u8089\u306E\u539A\u3044\u90E8\u5206\u306B\u5207\u308A\u8FBC\u307F\u3092\u5165\u308C\u306A\u304B\u3063\u305F\u305F\u3081", "ko": "\uBD88\uC774 \uB108\uBB34 \uC138\uAC70\uB098 \uB450\uAEBC\uC6B4 \uC0B4 \uBD80\uC704\uC5D0 \uCE7C\uC9D1\uC744 \uB0B4\uC9C0 \uC54A\uC74C" },
      solution: {
        "zh-TW": "\u9183\u8089\u524D\u52D9\u5FC5\u6CBF\u8457\u5927\u9AA8\u6DF1\u5283\u5169\u5200\uFF1B\u70AD\u70E4\u6642\u82E5\u706B\u82D7\u7AC4\u8D77\uFF0C\u79FB\u81F3\u9593\u63A5\u5FAE\u70AD\u5340\u6162\u70D8\uFF0C\u6700\u5F8C\u624D\u79FB\u56DE\u5F37\u706B\u5237\u6CB9\u4E0A\u8272\u3002",
        "en": "Always score deep cuts down to the bone before marinating. Move chicken to cooler indirect heat if grease flares up.",
        "fil": "Hiwain hanggang buto bago ibabad at iwasan ang malaking apoy.",
        "ja": "\u9AA8\u306B\u9054\u3059\u308B\u307E\u3067\u6DF1\u3081\u306E\u5207\u308C\u76EE\u3092\u5165\u308C\u307E\u3059\u3002\u708E\u304C\u4E0A\u304C\u3063\u305F\u3089\u706B\u306E\u5F31\u3044\u7AEF\u306B\u907F\u96E3\u3055\u305B\u3001\u3058\u3063\u304F\u308A\u9060\u706B\u3067\u706B\u3092\u901A\u3057\u307E\u3059\u3002",
        "ko": "\uBF08\uC5D0 \uB2FF\uC744 \uC815\uB3C4\uB85C \uAE4A\uAC8C \uCE7C\uC9D1\uC744 \uB0B4\uACE0, \uBD88\uAF43\uC774 \uD280\uBA74 \uAC04\uC811 \uC5F4 \uBD80\uC704\uB85C \uC62E\uACA8 \uCC9C\uCC9C\uD788 \uC18D\uAE4C\uC9C0 \uC775\uD600\uC8FC\uC138\uC694."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u5DF4\u79D1\u6D1B\u5FB7\u9748\u9B42\u5403\u6CD5\u3011\uFF1A\u5927\u849C\u7092\u98EF\uFF08Sinangag\uFF09\u7AEF\u4E0A\u684C\uFF0C\u8C6A\u723D\u5730\u6DCB\u4E0A\u4E00\u5927\u52FA\u9EC3\u91D1\u7D05\u6728\u96DE\u6CB9\uFF0C\u6492\u4E0A\u70B8\u849C\u9165\uFF0C\u62FF\u624B\u6293\u8457\u9999\u8106\u70E4\u96DE\u914D\u8457\u5403\uFF0C\u662F\u7576\u5730\u6700\u5730\u9053\u7684\u6975\u81F4\u72C2\u6B61\uFF01",
      "en": "The Bacolod Ritual: Drizzle a generous ladle of golden annatto chicken oil directly over hot garlic rice (Sinangag), sprinkle crispy toasted garlic, and eat with your bare hands (Kamayan style)!",
      "fil": "Gawain sa Bacolod: Buhusan ng maraming dilaw na chicken oil ang mainit na sinangag at kumain nang nakakamay!",
      "ja": "\u30D0\u30B3\u30ED\u30C9\u6D41\u306E\u6975\u610F\uFF1A\u708A\u304D\u305F\u3066\u306E\u30AC\u30FC\u30EA\u30C3\u30AF\u30E9\u30A4\u30B9\u306B\u9EC4\u91D1\u306E\u30C1\u30AD\u30F3\u30AA\u30A4\u30EB\u3092\u305F\u3063\u3077\u308A\u5782\u3089\u3057\u3001\u624B\u3065\u304B\u307F\uFF08\u30AB\u30DE\u30E4\u30F3\u30B9\u30BF\u30A4\u30EB\uFF09\u3067\u9D8F\u8089\u3068\u4E00\u7DD2\u306B\u982C\u5F35\u308B\u306E\u304C\u672C\u5834\u306E\u639F\u3067\u3059\uFF01",
      "ko": '\uBC14\uCF5C\uB85C\uB4DC \uC815\uD1B5 \uBC29\uC2DD: \uB728\uAC70\uC6B4 \uB9C8\uB298 \uBCF6\uC74C\uBC25 \uC704\uC5D0 \uD669\uAE08\uBE5B \uCE58\uD0A8 \uC624\uC77C\uC744 \uB4EC\uBFCD \uB07C\uC5B9\uACE0, \uBC14\uC0AD\uD55C \uB2ED\uACE0\uAE30\uB97C \uC190\uC73C\uB85C \uB72F\uC5B4 \uD568\uAED8 \uBA39\uB294 "\uCE74\uB9C8\uC580" \uC2A4\uD0C0\uC77C\uC774 \uCD5C\uACE0\uC785\uB2C8\uB2E4.'
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/kareKare.ts
var kareKare = {
  id: "kare-kare",
  slug: "kare-kare",
  title: {
    "zh-TW": "\u6FC3\u90C1\u82B1\u751F\u725B\u5C3E\u852C\u83DC\u7172 (Kare-Kare with Bagoong)",
    "en": "Rich Oxtail Peanut Stew with Bagoong (Kare-Kare)",
    "fil": "Kare-Kareng Buntot ng Baka na may Bagoong",
    "ja": "\u672C\u5834\u30AB\u30EC\u30AB\u30EC\uFF08\u725B\u30C6\u30FC\u30EB\u3068\u91CE\u83DC\u306E\u6FC3\u539A\u30D4\u30FC\u30CA\u30C3\u30C4\u716E\u8FBC\u307F\uFF09",
    "ko": "\uC815\uD1B5 \uC18C\uAF2C\uB9AC \uB545\uCF69 \uC2A4\uD29C \uCE74\uB808\uCE74\uB808 (\uC0C8\uC6B0 \uBC1C\uD6A8\uC7A5 \uBC14\uACE0\uC639 \uACC1\uB4E4\uC784)"
  },
  subtitle: {
    "zh-TW": "\u7687\u5BB6\u6176\u5178\u91D1\u9EC3\u5FA1\u81B3\u30FB\u6162\u71AC\u725B\u5C3E\u81A0\u8CEA\u8C50\u539A\u30FB\u70D8\u70E4\u7814\u78E8\u82B1\u751F\u91AC\u8207\u7518\u9999\u8766\u91AC",
    "en": "Royal Fiesta Centerpiece: Gelatinous Braised Oxtail in Velvety Annatto Peanut Sauce",
    "fil": "Pang-kapistahang ulam na may makapal na sarsa ng mani, talong, at sitaw",
    "ja": "\u5BAE\u5EF7\u306E\u5BB4\u304B\u3089\u751F\u307E\u308C\u305F\u9EC4\u91D1\u306E\u30B7\u30C1\u30E5\u30FC\u3002\u30A2\u30C1\u30E5\u30A8\u30C6\u8272\u306B\u67D3\u307E\u3063\u305F\u6975\u4E0A\u30D4\u30FC\u30CA\u30C3\u30C4\u30BD\u30FC\u30B9",
    "ko": "\uD544\uB9AC\uD540 \uCD95\uC81C\uC758 \uC815\uC218, \uCF5C\uB77C\uAC90 \uAC00\uB4DD\uD55C \uC18C\uAF2C\uB9AC\uC640 \uBD80\uB4DC\uB7EC\uC6B4 \uB545\uCF69 \uC18C\uC2A4\uC758 \uD558\uBAA8\uB2C8"
  },
  tagline: {
    "zh-TW": "\u6BCF\u4E00\u53E3\u90FD\u5145\u6EFF\u5805\u679C\u99A5\u90C1\u8207\u725B\u8089\u81A0\u8CEA\uFF0C\u642D\u914D\u81EA\u7092\u9E79\u751C\u8766\u91AC\u662F\u4EBA\u9593\u7D55\u914D",
    "en": "Nutty, rich, and deeply comforting\u2014elevated to culinary art when paired with saut\xE9ed bagoong",
    "fil": "Hindi kumpleto ang kare-kare kung walang ginisang bagoong alamang sa tabi",
    "ja": "\u82B3\u9187\u306A\u30D4\u30FC\u30CA\u30C3\u30C4\u3068\u725B\u30C6\u30FC\u30EB\u306E\u65E8\u5473\u3002\u5C0F\u30A8\u30D3\u306E\u5869\u8F9B\uFF08\u30D0\u30B4\u30AA\u30F3\uFF09\u3092\u6DFB\u3048\u3066\u5B8C\u6210\u3059\u308B\u82B8\u8853\u54C1",
    "ko": "\uACE0\uC18C\uD55C \uB545\uCF69\uC18C\uC2A4\uC640 \uCAC0\uB4DD\uD55C \uC18C\uAF2C\uB9AC. \uC9ED\uC9E4\uB2EC\uCF64\uD55C \uBC14\uACE0\uC639 \uC0C8\uC6B0\uC7A5\uC744 \uC5B9\uC5B4 \uBA39\uB294 \uADF9\uC0C1\uC758 \uD48D\uBBF8"
  },
  heroImage: "/images/kare-kare.jpg",
  difficulty: "hard",
  prepTimeMinutes: 20,
  cookTimeMinutes: 60,
  defaultServings: 5,
  caloriesPerServing: 560,
  category: "mains",
  dietaryTags: ["classic"],
  supportedCookware: ["traditional", "instantPot"],
  culture: {
    originRegion: {
      "zh-TW": "\u4E2D\u5442\u5B8B\u30FB\u9F90\u57F9\u6B50\u7701 (Pampanga / Southern Tagalog)",
      "en": "Pampanga & Southern Tagalog",
      "fil": "Pampanga at Katimugang Katagalugan",
      "ja": "\u30D1\u30F3\u30D1\u30F3\u30AC\u5DDE\u304A\u3088\u3073\u5357\u90E8\u30BF\u30AC\u30ED\u30B0\u5730\u65B9",
      "ko": "\uD31C\uD321\uAC00\uC8FC \uBC0F \uB0A8\uBD80 \uD0C0\uAC08\uB85C\uADF8"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u8056\u8CBB\u723E\u5357\u591A\u8001\u8857\u5E02\u5834 (San Fernando, Pampanga)", "en": "San Fernando Heritage Market", "fil": "Palengke ng San Fernando", "ja": "\u30B5\u30F3\u30D5\u30A7\u30EB\u30CA\u30F3\u30C9\u5E02\u5834", "ko": "\uC0B0\uD398\uB974\uB09C\uB3C4 \uC804\uD1B5 \uC2DC\uC7A5" },
      { "zh-TW": "\u99AC\u5C3C\u62C9\u5404\u8001\u5B57\u865F\u50B3\u7D71\u98DF\u5802", "en": "Heritage Aristocrat Restaurant, Manila", "fil": "The Aristocrat Restaurant, Maynila", "ja": "\u30DE\u30CB\u30E9\u4F1D\u7D71\u30EC\u30B9\u30C8\u30E9\u30F3", "ko": "\uB9C8\uB2D0\uB77C \uC804\uD1B5 \uC2DD\uB2F9\uAC00" }
    ],
    historyStory: {
      "zh-TW": "Kare-Kare \u7684\u8D77\u6E90\u6709\u5169\u5927\u8AAA\u6CD5\uFF1A\u4E00\u662F\u6E90\u81EA\u83AB\u6D1B\u7A46\u65AF\u6797\uFF08Moro\uFF09\u6599\u7406\u7684\u5370\u5EA6\u9999\u6599\u71C9\u8089\u6F14\u8B8A\uFF1B\u53E6\u4E00\u8AAA\u5247\u662F 1762 \u5E74\u82F1\u8ECD\u4F54\u9818\u99AC\u5C3C\u62C9\u6642\uFF0C\u96A8\u8ECD\u800C\u4F86\u7684\u5370\u5EA6\u58EB\u5175\uFF08Sepoys\uFF09\u5728\u5361\u56E0\u5854\uFF08Cainta\uFF09\u5B9A\u5C45\uFF0C\u56E0\u7F3A\u5C11\u5496\u54E9\u9999\u6599\uFF0C\u9042\u6539\u7528\u672C\u5730\u70E4\u82B1\u751F\u3001\u7092\u7C73\u7C89\u8207\u80ED\u8102\u6A39\u7D05\u6728\u7C7D\u8ABF\u914D\u51FA\u6FC3\u90C1\u91D1\u9EC3\u7684\u71C9\u8089\u3002\u914D\u4E0A\u6162\u706B\u7092\u719F\u7684\u8766\u91AC\uFF08Bagoong\uFF09\uFF0C\u6210\u70BA\u83F2\u5F8B\u8CD3\u6700\u53D7\u5C0A\u5D07\u7684\u570B\u5BB4\u83DC\u991A\u3002",
      "en": "Kare-Kare originated either from pre-colonial Moro stewing methods or from 18th-century Indian Sepoy soldiers stationed in Cainta, Rizal. Missing their homeland curry, they adapted local roasted peanuts, toasted ground rice, and annatto for a golden gravy. The stew is deliberately mild, designed to be seasoned bite-by-bite with salty-sweet saut\xE9ed shrimp paste (Bagoong Alamang).",
      "fil": "Nagmula sa mga sundalong Sepoy mula sa India na nanirahan sa Cainta noong panahon ng digmaan. Dahil walang curry, ginamit nila ang dinurog na mani at atsuete.",
      "ja": "18\u4E16\u7D00\u306B\u99D0\u7559\u3057\u305F\u30BB\u30DD\u30A4\uFF08\u30A4\u30F3\u30C9\u5175\uFF09\u304C\u6545\u90F7\u306E\u30AB\u30EC\u30FC\u3092\u518D\u73FE\u3057\u3088\u3046\u3068\u3001\u624B\u306B\u5165\u3063\u305F\u30D4\u30FC\u30CA\u30C3\u30C4\u3001\u7C73\u7C89\u3001\u30A2\u30C1\u30E5\u30A8\u30C6\u3092\u4F7F\u3063\u3066\u4F5C\u308A\u4E0A\u3052\u305F\u306E\u304C\u59CB\u307E\u308A\u3068\u8A00\u308F\u308C\u3066\u3044\u307E\u3059\u3002",
      "ko": "18\uC138\uAE30 \uD544\uB9AC\uD540\uC5D0 \uC8FC\uB454\uD55C \uC778\uB3C4 \uBCD1\uC0AC\uB4E4\uC774 \uCEE4\uB9AC \uB300\uC2E0 \uD604\uC9C0\uC758 \uBCF6\uC740 \uB545\uCF69\uACFC \uC300\uAC00\uB8E8, \uC544\uB098\uD1A0\uB85C \uC18C\uC2A4\uB97C \uB9CC\uB4E4\uC5B4 \uC18C\uAF2C\uB9AC\uB97C \uC878\uC5EC\uB0B8 \uAC83\uC5D0\uC11C \uC2DC\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
    },
    filipinoScript: "Kare-Kareng Buntot ng Baka",
    filipinoPhonetics: "Kah-reh Kah-rehng Boon-tot nang Bah-kah",
    audioPronunciationText: "Pabili po ng isang mangkok ng Kare-Kare at dagdagan ng bagoong!"
  },
  ingredients: [
    {
      id: "oxtail-beef-shank",
      name: { "zh-TW": "\u725B\u5C3E\u584A\u6216\u725B\u8171\u8089 (\u5207\u539A\u584A)", "en": "Oxtail (cut into segments) or Beef Shank", "fil": "Buntot ng Baka", "ja": "\u725B\u30C6\u30FC\u30EB\uFF08\u307E\u305F\u306F\u725B\u3059\u306D\u8089\uFF09", "ko": "\uC18C\uAF2C\uB9AC \uB610\uB294 \uC544\uB871\uC0AC\uD0DC (\uD1A0\uB9C9 \uB0B8 \uAC83)" },
      amount: 800,
      unitMetric: "g",
      unitUS: "1.75 lb",
      isKeyFlavor: true,
      filipinoName: "Buntot ng Baka",
      filipinoPronunciation: "Boon-tot nang Bah-kah"
    },
    {
      id: "peanut-butter",
      name: { "zh-TW": "\u7D14\u7814\u78E8\u7121\u7CD6\u7C97\u7C92\u82B1\u751F\u91AC (\u6216\u70D8\u70E4\u82B1\u751F\u73FE\u78E8)", "en": "Creamy Natural Peanut Butter (Unsweetened preferred)", "fil": "Palaman na Mani (Peanut Butter)", "ja": "\u7121\u7CD6\u30D4\u30FC\u30CA\u30C3\u30C4\u30D0\u30BF\u30FC\uFF08\u307E\u305F\u306F\u7092\u308A\u843D\u82B1\u751F\u30DA\u30FC\u30B9\u30C8\uFF09", "ko": "\uB545\uCF69\uBC84\uD130 (\uBB34\uAC00\uB2F9 \uD06C\uB9AC\uBBF8 \uB610\uB294 \uD06C\uB7F0\uCE58)" },
      amount: 150,
      unitMetric: "g",
      unitUS: "0.67 cup",
      isKeyFlavor: true,
      filipinoName: "Peanut Butter",
      filipinoPronunciation: "Pee-nat Bah-ter"
    },
    {
      id: "atsuete-oil",
      name: { "zh-TW": "\u7D05\u6728\u7C7D\u6CB9 (Annatto Oil \u67D3\u51FA\u65E5\u843D\u91D1\u9EC3)", "en": "Annatto Oil (Atsuete Oil for golden amber glow)", "fil": "Mantika ng Atsuete", "ja": "\u30A2\u30C1\u30E5\u30A8\u30C6\u30AA\u30A4\u30EB\uFF08\u9BAE\u3084\u304B\u306A\u9EC4\u91D1\u8272\u306B\u67D3\u3081\u308B\uFF09", "ko": "\uC544\uCD94\uC5D0\uD14C \uC624\uC77C (\uD669\uAE08\uBE5B \uC0C9\uAC10\uC6A9)" },
      amount: 3,
      unitMetric: "tbsp",
      unitUS: "3 tbsp",
      isKeyFlavor: true,
      filipinoName: "Atsuete Oil",
      filipinoPronunciation: "Ah-choo-weh-teh Oil"
    },
    {
      id: "toasted-rice-flour",
      name: { "zh-TW": "\u70D8\u70E4\u7CEF\u7C73\u7C89 (\u4E7E\u934B\u6162\u7092\u81F3\u91D1\u9EC3\uFF0C\u5929\u7136\u589E\u7A20\u7C73\u9999)", "en": "Toasted Glutinous Rice Flour (Toasted ground rice for thickening)", "fil": "Kinamatisang Bigas / Toasted Rice Flour", "ja": "\u7092\u308A\u7C73\u7C89\uFF08\u30D5\u30E9\u30A4\u30D1\u30F3\u3067\u4E7E\u714E\u308A\u3057\u3066\u3068\u308D\u307F\u3092\u3064\u3051\u308B\uFF09", "ko": "\uBCF6\uC740 \uCC39\uC300\uAC00\uB8E8 (\uAD6C\uC218\uD55C \uD48D\uBBF8\uC640 \uAC78\uCB49\uD55C \uB18D\uB3C4 \uC870\uC808)" },
      amount: 40,
      unitMetric: "g",
      unitUS: "0.33 cup",
      isKeyFlavor: true,
      filipinoName: "Harina ng Bigas",
      filipinoPronunciation: "Hah-ree-nah nang Bee-gahs"
    },
    {
      id: "eggplant",
      name: { "zh-TW": "\u9577\u7D2B\u8304\u5B50 (\u5207\u659C\u6EFE\u5200\u584A)", "en": "Asian Eggplant (Sliced diagonally)", "fil": "Talong", "ja": "\u30CA\u30B9\uFF08\u4E71\u5207\u308A\uFF09", "ko": "\uAC00\uC9C0 (\uC5B4\uC2B7\uC370\uAE30)" },
      amount: 2,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Talong",
      filipinoPronunciation: "Tah-long"
    },
    {
      id: "string-beans",
      name: { "zh-TW": "\u9577\u8C47\u8C46 / \u9577\u56DB\u5B63\u8C46 (\u5207\u6BB5)", "en": "Yardlong String Beans (Sitaw, cut into 3-inch batons)", "fil": "Sitaw", "ja": "\u5341\u516D\u3055\u3055\u3052\uFF08\u307E\u305F\u306F\u30A4\u30F3\u30B2\u30F3\u8C46\uFF09", "ko": "\uB871\uBE48 / \uC904\uAE30 \uCF69 (7cm \uAE38\uC774\uB85C \uC370\uAE30)" },
      amount: 100,
      unitMetric: "g",
      unitUS: "3.5 oz",
      filipinoName: "Sitaw",
      filipinoPronunciation: "See-taw"
    },
    {
      id: "bok-choy",
      name: { "zh-TW": "\u9752\u6C5F\u83DC\u6216\u767D\u83DC", "en": "Bok Choy (trimmed)", "fil": "Pechay", "ja": "\u9752\u6897\u83DC\uFF08\u30C1\u30F3\u30B2\u30F3\u30B5\u30A4\uFF09", "ko": "\uCCAD\uACBD\uCC44" },
      amount: 2,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Pechay",
      filipinoPronunciation: "Peh-tsay"
    },
    {
      id: "ginisang-bagoong",
      name: { "zh-TW": "\u7092\u719F\u7D30\u8766\u91AC (\u98DF\u7528\u6642\u4F50\u642D\u9748\u9B42\uFF0C\u4E0D\u53EF\u7F3A\u5C11\uFF01)", "en": "Saut\xE9ed Shrimp Paste (Ginisang Bagoong Alamang)", "fil": "Ginisang Bagoong Alamang", "ja": "\u7092\u3081\u30A2\u30DF\u30A8\u30D3\u5869\u8F9B\uFF08\u30D0\u30B4\u30AA\u30F3\uFF09", "ko": "\uBCF6\uC74C \uC0C8\uC6B0 \uBC1C\uD6A8\uC7A5 (\uBC14\uACE0\uC639 \uC54C\uB77C\uB9DD)" },
      amount: 4,
      unitMetric: "tbsp",
      unitUS: "4 tbsp",
      isKeyFlavor: true,
      filipinoName: "Bagoong Alamang",
      filipinoPronunciation: "Bah-goh-ong Ah-lah-mang"
    },
    {
      id: "onion-garlic",
      name: { "zh-TW": "\u6D0B\u8525\u8207\u5927\u849C (\u7206\u9999\u5E95\u6599)", "en": "Yellow Onion & Garlic (Minced for base)", "fil": "Sibuyas at Bawang", "ja": "\u7389\u306D\u304E\u3068\u306B\u3093\u306B\u304F", "ko": "\uC591\uD30C\uC640 \uB9C8\uB298" },
      amount: 1,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Sibuyas at Bawang",
      filipinoPronunciation: "See-boo-yas at Bah-wang"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u6162\u71C9\u725B\u5C3E\u81F3\u81A0\u8CEA\u8EDF\u721B\u878D\u5316", "en": "Boil & Simmer Oxtail until Fork-Tender", "fil": "Pakuluan ang Buntot ng Baka Hanggang Lumambot", "ja": "\u725B\u30C6\u30FC\u30EB\u3092\u30C8\u30ED\u30C8\u30ED\u306B\u306A\u308B\u307E\u3067\u3058\u3063\u304F\u308A\u716E\u8FBC\u3080", "ko": "\uC18C\uAF2C\uB9AC\uB97C \uD479 \uC0B6\uC544 \uBD80\uB4DC\uB7FD\uACE0 \uCAC0\uB4DD\uD558\uAC8C \uB9CC\uB4E4\uAE30" },
      instruction: {
        "zh-TW": "\u725B\u5C3E\u6BB5\u51B7\u6C34\u5165\u934B\u5927\u706B\u716E\u6EFE\uFF0C\u6C46\u71D9 5 \u5206\u9418\u6488\u51FA\u6C96\u6D17\u4E7E\u6DE8\u3002\u63DB\u4E00\u934B\u4E7E\u6DE8\u6E05\u6C34\uFF08\u7D04 1500ml\uFF09\uFF0C\u653E\u5165\u725B\u5C3E\u584A\u3001\u62CD\u6241\u849C\u74E3\u3001\u6D0B\u8525\u584A\u8207\u5C11\u8A31\u9ED1\u80E1\u6912\u7C92\u3002\u5927\u706B\u716E\u6CB8\u8F49\u5C0F\u706B\u52A0\u84CB\u71C9\u716E 1.5 - 2 \u5C0F\u6642\uFF08\u6216\u4F7F\u7528\u58D3\u529B\u934B 35 \u5206\u9418\uFF09\uFF0C\u76F4\u5230\u725B\u5C3E\u8EDF\u721B\u3001\u7B77\u5B50\u80FD\u8F15\u9B06\u63D2\u900F\u9AA8\u8089\u3002\u4FDD\u7559\u6FC3\u90C1\u725B\u5C3E\u9AD8\u6E6F\u5099\u7528\uFF01",
        "en": "Parboil oxtail pieces for 5 mins, drain and rinse. In a clean pot with 1500ml water, simmer oxtail with garlic, onions, and peppercorns on low heat for 1.5 - 2 hours (or 35 mins in an Instant Pot) until meltingly tender and rich in collagen. Strain and reserve the golden broth!",
        "fil": "Pakuluan ang buntot ng baka nang 1.5 hanggang 2 oras hanggang lumambot nang husto ang litid at laman. Itabi ang masarap na sabaw.",
        "ja": "\u725B\u30C6\u30FC\u30EB\u3092\u4E00\u5EA6\u8339\u3067\u3053\u307C\u3057\u3066\u6D17\u3044\u3001\u65B0\u3057\u3044\u6C341500ml\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u7389\u306D\u304E\u3068\u5171\u306B\u5F31\u706B\u30671.5\u301C2\u6642\u9593\uFF08\u5727\u529B\u934B\u306A\u308935\u5206\uFF09\u716E\u8FBC\u307F\u307E\u3059\u3002\u65E8\u5473\u306E\u6EB6\u3051\u51FA\u3057\u305F\u30B9\u30FC\u30D7\u306F\u53D6\u3063\u3066\u304A\u304D\u307E\u3059\u3002",
        "ko": "\uC18C\uAF2C\uB9AC\uB97C \uB053\uB294 \uBB3C\uC5D0 5\uBD84\uAC04 \uB370\uCCD0 \uBD88\uC21C\uBB3C\uC744 \uC53B\uC5B4\uB0C5\uB2C8\uB2E4. \uC0C8 \uBB3C 1500ml\uC5D0 \uB9C8\uB298, \uC591\uD30C\uC640 \uD568\uAED8 \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C 1.5~2\uC2DC\uAC04(\uC555\uB825\uC1A5\uC740 35\uBD84) \uD479 \uB053\uC5EC\uC90D\uB2C8\uB2E4. \uC6B0\uB7EC\uB09C \uC721\uC218\uB294 \uBCF4\uAD00\uD569\uB2C8\uB2E4."
      },
      durationSeconds: 5400,
      image: "/images/kare-kare-step1.jpg",
      cookwareVariations: [
        {
          cookware: "instantPot",
          tempAndSetting: "Instant Pot: Meat/Stew High Pressure for 35 mins (natural release)",
          instructionOverride: {
            "zh-TW": "\u58D3\u529B\u934B\u6A21\u5F0F\uFF1A\u6C46\u71D9\u6D17\u6DE8\u7684\u725B\u5C3E\u6BB5\u653E\u5165\u5167\u81BD\uFF0C\u52A0\u6C34 1000ml\u3001\u6D0B\u8525\u849C\u982D\uFF0C\u9078 Meat/Stew \u9AD8\u58D3 35 \u5206\u9418\uFF0C\u81EA\u7136\u6D29\u58D3 15 \u5206\u9418\u3002\u725B\u5C3E\u81A0\u8CEA\u5168\u90E8\u91CB\u51FA\uFF0C\u8EDF\u5AE9\u591A\u6C41\uFF0C\u7701\u4E0B 70% \u74E6\u65AF\u6642\u9593\uFF01",
            "en": "Instant Pot Variation: Place blanched oxtail into inner pot with 1000ml water and aromatics. Pressure cook on High for 35 mins, then allow 15 mins natural pressure release. Fall-off-the-bone tender!",
            "fil": "Instant Pot: Ilagay ang buntot ng baka sa 1000ml tubig. I-set sa High Pressure nang 35 minuto.",
            "ja": "\u96FB\u6C17\u5727\u529B\u934B\u8A2D\u5B9A\uFF1A\u5185\u934B\u306B\u725B\u30C6\u30FC\u30EB\u3068\u6C341000ml\u3092\u5165\u308C\u3001\u9AD8\u5727\u306735\u5206\u52A0\u5727\u8ABF\u7406\u300215\u5206\u84B8\u3089\u3057\u3066\u6E1B\u5727\u3057\u307E\u3059\u3002\u9A5A\u304F\u307B\u3069\u30DB\u30ED\u30DB\u30ED\u306B\uFF01",
            "ko": "\uC778\uC2A4\uD134\uD2B8\uD31F \uC124\uC815: \uC18C\uAF2C\uB9AC\uC640 \uBB3C 1000ml, \uD5A5\uC2E0\uCC44\uB97C \uB123\uACE0 \uACE0\uC555 35\uBD84 \uC870\uB9AC \uD6C4 15\uBD84 \uC790\uC5F0 \uAC10\uC555\uD569\uB2C8\uB2E4. \uBF08\uC5D0\uC11C \uC0B4\uC774 \uC3D9 \uBE60\uC9C8 \uC815\uB3C4\uB85C \uBD80\uB4DC\uB7EC\uC6CC\uC9D1\uB2C8\uB2E4."
          }
        }
      ]
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u7092\u51FA\u7D05\u6728\u91D1\u9999\u5E95\u6CB9\uFF0C\u878D\u5316\u6FC3\u9187\u82B1\u751F\u91AC", "en": "Saut\xE9 Aromatics in Annatto Oil & Whisk Peanut Butter", "fil": "Igisa sa Atsuete Oil at Ilagay ang Peanut Butter", "ja": "\u30A2\u30C1\u30E5\u30A8\u30C6\u6CB9\u3067\u7092\u3081\u3001\u30D4\u30FC\u30CA\u30C3\u30C4\u30D0\u30BF\u30FC\u3092\u6EB6\u304B\u3057\u5408\u308F\u305B\u308B", "ko": "\uC544\uCD94\uC5D0\uD14C \uC624\uC77C\uC5D0 \uC591\uD30C \uB9C8\uB298\uC744 \uBCF6\uACE0 \uB545\uCF69\uBC84\uD130 \uD480\uAE30" },
      instruction: {
        "zh-TW": "\u6DF1\u934B\u4E2D\u5012\u5165 3 \u5927\u5319\u7D05\u6728\u7C7D\u6CB9\uFF08Atsuete Oil\uFF09\uFF0C\u4E2D\u706B\u7206\u9999\u5207\u788E\u6D0B\u8525\u8207\u849C\u6CE5\u3002\u5012\u5165\u716E\u597D\u7684\u725B\u5C3E\u584A\u7FFB\u7092\u5747\u52FB\u88F9\u4E0A\u4EAE\u6A59\u8272\u3002\u5012\u5165\u7D04 600ml \u725B\u5C3E\u9AD8\u6E6F\u716E\u6EFE\uFF0C\u8F49\u5C0F\u706B\uFF0C\u52A0\u5165 150g \u82B1\u751F\u91AC\uFF0C\u7528\u6253\u86CB\u5668\u6216\u6E6F\u52FA\u652A\u62CC\u5747\u52FB\u81F3\u91AC\u6C41\u5B8C\u5168\u4E73\u5316\u3001\u5448\u73FE\u7D72\u7D68\u822C\u91D1\u8272\u6FC3\u6E6F\u8CEA\u5730\u3002",
        "en": "In a large heavy pot, heat 3 tbsp annatto oil. Saut\xE9 onions and garlic until fragrant. Add cooked oxtail and stir until coated in glowing orange oil. Pour in 600ml reserved beef broth, bring to simmer, and whisk in 150g peanut butter until silky, creamy, and golden.",
        "fil": "Painitin ang atsuete oil, igisa ang sibuyas at bawang. Ilagay ang buntot ng baka at sabaw, tapos ihalo ang peanut butter hanggang lumapot.",
        "ja": "\u5927\u934B\u306B\u30A2\u30C1\u30E5\u30A8\u30C6\u30AA\u30A4\u30EB\u5927\u3055\u30583\u3092\u71B1\u3057\u3001\u7389\u306D\u304E\u3068\u30CB\u30F3\u30CB\u30AF\u3092\u7092\u3081\u307E\u3059\u3002\u725B\u30C6\u30FC\u30EB\u3092\u52A0\u3048\u3066\u8272\u3092\u7D61\u3081\u3001\u725B\u30C6\u30FC\u30EB\u30B9\u30FC\u30D7600ml\u3092\u6CE8\u304E\u307E\u3059\u3002\u30D4\u30FC\u30CA\u30C3\u30C4\u30D0\u30BF\u30FC\u3092\u6EB6\u304B\u3057\u5165\u308C\u3001\u6ED1\u3089\u304B\u306A\u9EC4\u91D1\u8272\u306E\u30BD\u30FC\u30B9\u306B\u3057\u307E\u3059\u3002",
        "ko": "\uB0C4\uBE44\uC5D0 \uC544\uCD94\uC5D0\uD14C \uC624\uC77C 3\uD070\uC220\uC744 \uB450\uB974\uACE0 \uC591\uD30C\uC640 \uB9C8\uB298\uC744 \uBCF6\uC2B5\uB2C8\uB2E4. \uC18C\uAF2C\uB9AC\uB97C \uB123\uC5B4 \uCF54\uD305\uD55C \uB4A4 \uC721\uC218 600ml\uB97C \uBD93\uACE0, \uB545\uCF69\uBC84\uD130\uB97C \uB123\uC5B4 \uBA4D\uC6B8 \uC5C6\uC774 \uBD80\uB4DC\uB7FD\uAC8C \uD480\uC5B4\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 300,
      image: "/images/kare-kare-step2.jpg"
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u8ABF\u5165\u7092\u7C73\u7C89\u6C34\u52FE\u51FA\u539A\u82A1\uFF0C\u52A0\u5165\u852C\u83DC\u7168\u719F", "en": "Thicken with Toasted Rice & Simmer Veggies", "fil": "Palaputin Gamit ang Harina ng Bigas at Ilagay ang Gulay", "ja": "\u7092\u308A\u7C73\u7C89\u3067\u3068\u308D\u307F\u3092\u3064\u3051\u3001\u91CE\u83DC\u3092\u52A0\u3048\u3066\u716E\u8FBC\u3080", "ko": "\uBCF6\uC740 \uCC39\uC300\uAC00\uB8E8 \uBB3C\uB85C \uB18D\uB3C4\uB97C \uC7A1\uACE0 \uCC44\uC18C \uC775\uD788\uAE30" },
      instruction: {
        "zh-TW": "\u5C07\u70D8\u70E4\u7CEF\u7C73\u7C89\u52A0\u5C11\u8A31\u51B7\u6C34\u8ABF\u52FB\u6210\u7C73\u6F3F\uFF0C\u908A\u652A\u62CC\u908A\u6DCB\u5165\u934B\u4E2D\uFF0C\u5C0F\u706B\u6162\u716E 3 \u5206\u9418\uFF0C\u91AC\u6C41\u6703\u8B8A\u5F97\u5982\u7D72\u7D68\u822C\u6FC3\u7A20\u6CB9\u4EAE\u3002\u653E\u5165\u9577\u8C47\u8C46\u6BB5\u3001\u8304\u5B50\u584A\u8207\u9752\u6C5F\u83DC\uFF0C\u52A0\u84CB\u5C0F\u706B\u71DC\u716E 5 \u5206\u9418\u76F4\u5230\u852C\u83DC\u9BAE\u751C\u8106\u5AE9\u3002\u5927\u7897\u76DB\u51FA\uFF0C\u65C1\u908A\u5FC5\u5B9A\u642D\u914D\u4E00\u5927\u52FA\u9999\u7092\u8766\u91AC\uFF08Ginisang Bagoong\uFF09\uFF01",
        "en": "Slurry toasted rice flour with 4 tbsp cold water. Drizzle into bubbling stew while stirring; cook 3 mins until the sauce thickens into luxurious velvet. Add string beans, eggplant slices, and bok choy; simmer 5 mins until tender-crisp. Serve in a clay pot accompanied by a generous dish of saut\xE9ed bagoong!",
        "fil": "Tunawin ang toasted rice flour sa tubig at ihalo sa sarsa. Ilagay ang sitaw, talong, at pechay nang 5 minuto. Ihain na may kasamang bagoong alamang!",
        "ja": "\u7092\u308A\u7C73\u7C89\u3092\u6C34\u3067\u6EB6\u3044\u3066\u52A0\u3048\u3001\u3068\u308D\u307F\u304C\u51FA\u308B\u307E\u30673\u5206\u716E\u307E\u3059\u3002\u30A4\u30F3\u30B2\u30F3\u3001\u30CA\u30B9\u3001\u9752\u6897\u83DC\u3092\u52A0\u30485\u5206\u307B\u3069\u716E\u3066\u91CE\u83DC\u306B\u706B\u3092\u901A\u3057\u307E\u3059\u3002\u5C0F\u76BF\u306B\u305F\u3063\u3077\u308A\u306E\u30D0\u30B4\u30AA\u30F3\uFF08\u30A8\u30D3\u5473\u564C\uFF09\u3092\u6DFB\u3048\u3066\u5B8C\u6210\u3067\u3059\uFF01",
        "ko": "\uBCF6\uC740 \uCC39\uC300\uAC00\uB8E8\uB97C \uCC2C\uBB3C\uC5D0 \uAC1C\uC5B4 \uAD6D\uBB3C\uC5D0 \uB458\uB7EC \uB123\uACE0 3\uBD84\uAC04 \uC800\uC5B4\uAC00\uBA70 \uAC78\uCB49\uD558\uAC8C \uB18D\uB3C4\uB97C \uB9DE\uCDA5\uB2C8\uB2E4. \uCF69, \uAC00\uC9C0, \uCCAD\uACBD\uCC44\uB97C \uB123\uACE0 5\uBD84\uAC04 \uC775\uD600\uC90D\uB2C8\uB2E4. \uBCF6\uC74C \uBC14\uACE0\uC639 \uC0C8\uC6B0\uC7A5\uC744 \uACC1\uB4E4\uC5EC \uC0C1\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4."
      },
      durationSeconds: 480,
      image: "/images/kare-kare-step3.jpg"
    }
  ],
  troubleshooting: [
    {
      id: "sauce-too-bland",
      problem: { "zh-TW": "\u82B1\u751F\u91AC\u6C41\u559D\u8D77\u4F86\u6DE1\u800C\u7121\u5473\uFF0C\u7F3A\u5C11\u9E79\u9999", "en": "Sauce tastes flat and lacks saltiness", "fil": "Matabang ang sarsa ng kare-kare", "ja": "\u30D4\u30FC\u30CA\u30C3\u30C4\u30BD\u30FC\u30B9\u306E\u5473\u304C\u8584\u304F\u3001\u5869\u6C17\u304C\u8DB3\u308A\u306A\u3044", "ko": "\uC2A4\uD29C \uB9DB\uC774 \uBC0B\uBC0B\uD558\uACE0 \uAC04\uC774 \uC548 \uB41C \uB290\uB08C" },
      cause: { "zh-TW": "\u50B3\u7D71 Kare-Kare \u5728\u71C9\u716E\u6642\u6545\u610F\u4E0D\u52A0\u904E\u591A\u9E7D\u5206\uFF0C\u98A8\u5473\u5B8C\u5168\u4F9D\u8CF4\u98DF\u7528\u6642\u642D\u914D\u7684\u7092\u8766\u91AC\uFF08Bagoong\uFF09\uFF01", "en": "Traditional Kare-Kare is intentionally left lightly salted because it is meant to be seasoned at the table with the salty-sweet bagoong!", "fil": "Sadya itong matabang dahil ang ginisang bagoong ang nagbibigay ng alat at lasa habang kumakain.", "ja": "\u4F1D\u7D71\u7684\u306A\u30AB\u30EC\u30AB\u30EC\u306F\u610F\u56F3\u7684\u306B\u8584\u5473\u306B\u4ED5\u4E0A\u3052\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u6DFB\u3048\u3089\u308C\u305F\u30A8\u30D3\u5869\u8F9B\uFF08\u30D0\u30B4\u30AA\u30F3\uFF09\u3068\u6DF7\u305C\u3066\u521D\u3081\u3066\u5B8C\u6210\u3059\u308B\u6599\u7406\u3067\u3059\u3002", "ko": "\uC804\uD1B5 \uCE74\uB808\uCE74\uB808\uB294 \uC9ED\uC870\uB984\uD55C \uBC14\uACE0\uC639 \uC0C8\uC6B0\uC7A5\uACFC \uBE44\uBCBC \uBA39\uB3C4\uB85D \uC6D0\uB798 \uAC04\uC744 \uC138\uAC8C \uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC815\uC11D\uC785\uB2C8\uB2E4." },
      solution: {
        "zh-TW": "\u5343\u842C\u4E0D\u8981\u5728\u934B\u88E1\u72C2\u52A0\u9E7D\uFF01\u8200\u4E00\u52FA\u6FC3\u7A20\u82B1\u751F\u91AC\u6C41\u8207\u71C9\u8EDF\u7684\u725B\u5C3E\u8089\uFF0C\u914D\u4E0A\u4E00\u5C0F\u62B9\u9E79\u751C\u9999\u8FA3\u7684 Ginisang Bagoong \u8766\u91AC\u8207\u767D\u98EF\u4E00\u540C\u5165\u53E3\uFF0C\u6ECB\u5473\u77AC\u9593\u6607\u83EF\u5713\u6EFF\uFF01",
        "en": "Do not oversalt the pot! Spoon some peanut gravy over rice, dollop a bit of savory Bagoong on top, and eat together.",
        "fil": "Kumuha ng kanin, lagyan ng sarsa at karne, at lagyan ng bagoong alamang bago isubo.",
        "ja": "\u934B\u306B\u5869\u3092\u8DB3\u3057\u3059\u304E\u306A\u3044\u3053\u3068\uFF01\u3054\u98EF\u306E\u4E0A\u306B\u30AB\u30EC\u30AB\u30EC\u3092\u304B\u3051\u3001\u30B9\u30D7\u30FC\u30F3\u306E\u5148\u306B\u30D0\u30B4\u30AA\u30F3\u3092\u5C11\u3057\u4E57\u305B\u3066\u4E00\u7DD2\u306B\u98DF\u3079\u308B\u3068\u611F\u52D5\u7684\u306A\u7F8E\u5473\u3057\u3055\u306B\u306A\u308A\u307E\u3059\u3002",
        "ko": "\uB0C4\uBE44\uC5D0 \uC18C\uAE08\uC744 \uB354 \uB123\uC9C0 \uB9C8\uC138\uC694! \uBC25 \uC704\uC5D0 \uC2A4\uD29C\uB97C \uC5B9\uACE0 \uBC14\uACE0\uC639 \uC0C8\uC6B0\uC7A5\uC744 \uC870\uAE08 \uC5B9\uC5B4 \uD568\uAED8 \uB4DC\uC2DC\uBA74 \uC644\uBCBD\uD55C \uAC10\uCE60\uB9DB\uC744 \uB290\uB084 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u70D8\u70E4\u7092\u7C73\u7C89\u589E\u9999\u3011\uFF1A\u4E0D\u8981\u7701\u7565\u7092\u7C73\u7C89\u6B65\u9A5F\uFF01\u5C07\u767D\u7CEF\u7C73\u653E\u5728\u4E7E\u5E73\u5E95\u934B\u4E2D\u4E0D\u653E\u6CB9\u5C0F\u706B\u4E7E\u7178\u81F3\u5FAE\u7126\u9EC3\uFF0C\u7814\u78E8\u6210\u7C89\u52A0\u5165\u7172\u4E2D\uFF0C\u4E0D\u50C5\u63D0\u4F9B\u539A\u5BE6\u6FC3\u7A20\u5EA6\uFF0C\u66F4\u6709\u7206\u7C73\u82B1\u822C\u7684\u7368\u7279\u5805\u679C\u7A40\u7269\u9999\uFF01",
      "en": "Toasted Rice Secret: Dry-toasting rice in a skillet until golden brown before grinding yields a distinct roasted aroma and velvet mouthfeel that regular cornstarch can never replicate!",
      "fil": "Tip ng Kusinero: Isangag muna ang bigas sa kawali bago durugin para sa mabangong sarsa.",
      "ja": "\u7092\u308A\u7C73\u306E\u6975\u610F\uFF1A\u7C73\u3092\u6CB9\u3092\u5F15\u304B\u305A\u306B\u30D5\u30E9\u30A4\u30D1\u30F3\u3067\u30AD\u30C4\u30CD\u8272\u306B\u306A\u308B\u307E\u3067\u4E7E\u714E\u308A\u3057\u3066\u304B\u3089\u7C89\u7815\u3059\u308B\u3068\u3001\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\u3067\u306F\u51FA\u305B\u306A\u3044\u9999\u3070\u3057\u3055\u3068\u5965\u6DF1\u3044\u3068\u308D\u307F\u304C\u751F\u307E\u308C\u307E\u3059\u3002",
      "ko": "\uBCF6\uC740 \uC300\uAC00\uB8E8 \uBE44\uBC95: \uB9C8\uB978 \uD32C\uC5D0 \uCC39\uC300\uC744 \uB178\uB987\uD558\uAC8C \uBCF6\uC544 \uAC08\uC544 \uB123\uC73C\uBA74 \uC804\uBD84\uACFC\uB294 \uBE44\uAD50\uD560 \uC218 \uC5C6\uB294 \uAD6C\uC218\uD55C \uD31D\uCF58 \uD48D\uBBF8\uC640 \uD658\uC0C1\uC801\uC778 \uB18D\uB3C4\uAC00 \uC644\uC131\uB429\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/haloHalo.ts
var haloHalo = {
  id: "halo-halo",
  slug: "halo-halo",
  title: {
    "zh-TW": "\u83F2\u5F8B\u8CD3\u570B\u5BF6\u5F69\u8679\u516B\u5BF6\u96EA\u82B1\u51B0 (Halo-Halo Especial)",
    "en": "The Ultimate Halo-Halo Especial (Rainbow Shaved Ice)",
    "fil": "Espesyal na Halo-Halo ng Pilipinas",
    "ja": "\u672C\u5834\u6700\u9AD8\u5CF0\u30CF\u30ED\u30CF\u30ED\uFF08\u4E03\u8272\u5177\u6750\u306E\u6975\u4E0A\u304B\u304D\u6C37\u30D1\u30D5\u30A7\uFF09",
    "ko": "\uD544\uB9AC\uD540 \uAD6D\uBCF4\uAE09 \uB808\uC778\uBCF4\uC6B0 \uBE59\uC218 \uD560\uB85C\uD560\uB85C \uC5D0\uC2A4\uD398\uC15C"
  },
  subtitle: {
    "zh-TW": "\u7FA4\u5CF6\u751C\u54C1\u81F3\u5C0A\u30FB\u7D2B\u85AF\u6CE5\u7126\u7CD6\u5E03\u4E01\u30FB\u6930\u679C\u871C\u8549\u897F\u7C73\u9732\u30FB\u70D8\u70E4\u9752\u7CEF\u7C73\u7C92\u9802\u7D1A\u51A0\u5195",
    "en": "The King of Tropical Sweets: Layered Shaved Ice, Ube Halaya, Leche Flan & Crispy Pinipig",
    "fil": "Pambansang panghimagas na may ube, leche flan, saging, sago at sorbetes sa ibabaw",
    "ja": "\u5F69\u308A\u8C4A\u304B\u306A\u540D\u7269\u30C8\u30C3\u30D4\u30F3\u30B0\u304C\u91CD\u306A\u308A\u5408\u3046\u5357\u56FD\u30D5\u30A3\u30EA\u30D4\u30F3\u306E\u8C61\u5FB4\u7684\u30B9\u30A4\u30FC\u30C4",
    "ko": "\uC6B0\uBCA0 \uBCF4\uB77C\uC7BC, \uCE90\uB7EC\uBA5C \uD478\uB529, \uCF54\uCF54\uB11B \uC824\uB9AC\uAC00 \uCE35\uCE35\uC774 \uC313\uC778 \uB0A8\uAD6D\uC758 \uC2DC\uC6D0\uD55C \uBCF4\uBB3C"
  },
  tagline: {
    "zh-TW": "\u300CHalo-Halo\u300D\u5728\u83F2\u8A9E\u610F\u70BA\u300C\u652A\u62CC\u6DF7\u5408\u300D\uFF01\u4E94\u5F69\u6591\u6595\u7684\u5927\u73BB\u7483\u676F\uFF0C\u652A\u52FB\u5403\u6700\u9053\u5730",
    "en": '"Halo-Halo" literally means "mix-mix"\u2014the vibrant national cooler you stir and savor',
    "fil": "Haluin nang mabuti mula ilalim hanggang ibabaw upang maranasan ang tunay na sarap",
    "ja": "\u30BF\u30AC\u30ED\u30B0\u8A9E\u3067\u300C\u6DF7\u305C\u3053\u305C\u300D\u3092\u610F\u5473\u3059\u308B\u56FD\u6C11\u7684\u6C37\u83D3\u5B50\u3002\u5E95\u304B\u3089\u8C6A\u5FEB\u306B\u6DF7\u305C\u3066\u98DF\u3079\u308B\u306E\u304C\u6D41\u5100",
    "ko": '\uD0C0\uAC08\uB85C\uADF8\uC5B4\uB85C "\uC11E\uACE0 \uC11E\uB294\uB2E4"\uB294 \uB73B! \uC720\uB9AC\uC794 \uBC14\uB2E5\uBD80\uD130 \uC2DC\uC6D0\uD558\uAC8C \uBE44\uBCBC \uBA39\uB294 \uCD5C\uACE0\uC758 \uC5EC\uB984 \uB514\uC800\uD2B8'
  },
  heroImage: "/images/halo-halo.jpg",
  difficulty: "easy",
  prepTimeMinutes: 20,
  cookTimeMinutes: 5,
  defaultServings: 2,
  caloriesPerServing: 420,
  category: "desserts",
  dietaryTags: ["classic", "vegetarian"],
  supportedCookware: ["traditional"],
  culture: {
    originRegion: {
      "zh-TW": "\u5168\u83F2\u5F8B\u8CD3\uFF08\u8D77\u6E90\u65BC\u4E8C\u6230\u524D\u594E\u963F\u5761\u8207\u5CB7\u502B\u6D1B\u7684\u65E5\u88D4\u65E5\u5F0F\u7D05\u8C46\u5228\u51B0 Kakigori\uFF09",
      "en": "Pre-WWII Manila (Evolution of Japanese Kakigori & Mitsumame)",
      "fil": "Maynila at Buong Pilipinas",
      "ja": "\u30DE\u30CB\u30E9\u767A\u7965\uFF08\u6226\u524D\u306E\u65E5\u672C\u4EBA\u79FB\u6C11\u306E\u304B\u304D\u6C37\u300C\u304B\u304D\u6C37\u30FB\u305C\u3093\u3056\u3044\u300D\u304C\u73FE\u5730\u3067\u9032\u5316\uFF09",
      "ko": "\uB9C8\uB2D0\uB77C (\uC81C2\uCC28 \uC138\uACC4\uB300\uC804 \uC774\uC804 \uC77C\uBCF8\uC2DD \uBE59\uC218\uC5D0\uC11C \uD604\uC9C0\uD654\uB418\uC5B4 \uBC1C\uC804)"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u594E\u963F\u5761\u8001\u6559\u5802\u5468\u908A\u751C\u54C1\u51B7\u98F2\u6392\u6A94", "en": "Quiapo Halo-Halo Carts", "fil": "Halo-Halo sa Quiapo", "ja": "\u30AD\u30A2\u30DD\u5C4B\u53F0\u901A\u308A", "ko": "\uD034\uC544\uD3EC \uB514\uC800\uD2B8 \uB178\uC810" },
      { "zh-TW": "\u90A6\u677F\u7259\u7701 Guagua \u77E5\u540D\u8001\u5B57\u865F (Razon\u2019s Halo-Halo)", "en": "Razon\u2019s Heritage of Guagua, Pampanga", "fil": "Guagua, Pampanga", "ja": "\u30D1\u30F3\u30D1\u30F3\u30AC\u5DDE\u30B0\u30A2\u30B0\u30A2", "ko": "\uD31C\uD321\uAC00 \uAD6C\uC544\uAD6C\uC544 \uC804\uD1B5\uC810" }
    ],
    historyStory: {
      "zh-TW": "20\u4E16\u7D00\u521D\uFF0C\u8A31\u591A\u65E5\u672C\u79FB\u6C11\u5728\u99AC\u5C3C\u62C9\u594E\u963F\u5761\u5E02\u5834\u958B\u8A2D\u65E5\u5F0F\u5228\u51B0\u5E97\uFF08Mongo-ya\uFF09\uFF0C\u552E\u8CE3\u52A0\u5165\u751C\u7D05\u8C46\u7684\u788E\u51B0\u751C\u9EDE\u3002\u83F2\u5F8B\u8CD3\u4EBA\u96A8\u5F8C\u767C\u63EE\u7121\u8207\u502B\u6BD4\u7684\u71B1\u5E36\u5275\u610F\uFF0C\u9678\u7E8C\u52A0\u5165\u4E86\u672C\u5730\u76DB\u7522\u7684\u7CD6\u716E\u82AD\u8549\u3001\u7D2B\u85AF\u6CE5\uFF08Ube\uFF09\u3001\u6930\u679C\u3001\u4E9E\u7B54\u5B50\uFF0C\u4EE5\u53CA\u897F\u73ED\u7259\u6B96\u6C11\u7559\u4E0B\u4F86\u7684\u7687\u5BB6\u7126\u7CD6\u5E03\u4E01\uFF08Leche Flan\uFF09\u3002\u9019\u676F\u517C\u5177\u591A\u570B\u6587\u5316\u878D\u5408\u7684\u751C\u54C1\uFF0C\u6210\u70BA\u83F2\u570B\u4E0D\u53EF\u52D5\u6416\u7684\u570B\u5BF6\uFF01",
      "en": "In the early 1900s, Japanese immigrants in Manila operated refreshment parlors serving shaved ice with sweetened beans (kakigori). Filipinos enthusiastically adopted the concept, expanding it with indigenous sweet plantains, ube halaya, nata de coco, macapuno, and crowning it with a decadent slice of Spanish Leche Flan and ube ice cream!",
      "fil": "Nagsimula noong bago ang digmaan mula sa Japanese kakigori na may monggo. Dinagdagan ito ng mga Pilipino ng ube, leche flan, langka, at saging na saba hanggang maging sikat na halo-halo.",
      "ja": "\u6226\u524D\u30DE\u30CB\u30E9\u3067\u65E5\u672C\u4EBA\u79FB\u6C11\u304C\u55B6\u3093\u3067\u3044\u305F\u7518\u5473\u51E6\u306E\u304B\u304D\u6C37\uFF08\u5C0F\u8C46\u305C\u3093\u3056\u3044\uFF09\u304C\u8D77\u6E90\u3002\u30D5\u30A3\u30EA\u30D4\u30F3\u306E\u4EBA\u3005\u304C\u81EA\u751F\u306E\u71B1\u5E2F\u679C\u5B9F\u3084\u30A6\u30D9\u3001\u30B9\u30DA\u30A4\u30F3\u7531\u6765\u306E\u30D7\u30EA\u30F3\u3092\u5408\u308F\u305B\u3001\u4E16\u754C\u306B\u8A87\u308B\u8C6A\u83EF\u306A\u30CF\u30ED\u30CF\u30ED\u3078\u3068\u5B8C\u6210\u3055\u305B\u307E\u3057\u305F\u3002",
      "ko": "1900\uB144\uB300 \uCD08 \uB9C8\uB2D0\uB77C\uC758 \uC77C\uBCF8 \uC774\uBBFC\uC790\uB4E4\uC774 \uD314\uB358 \uD325\uBE59\uC218\uC5D0\uC11C \uC720\uB798\uD558\uC5EC, \uD544\uB9AC\uD540\uC778\uB4E4\uC774 \uC6B0\uBCA0, \uCF54\uCF54\uB11B, \uBC14\uB098\uB098, \uC2A4\uD398\uC778\uC2DD \uD478\uB529\uC744 \uB354\uD574 \uC138\uACC4\uC5D0\uC11C \uAC00\uC7A5 \uD654\uB824\uD55C \uBB34\uC9C0\uAC1C \uBE59\uC218\uB85C \uBC1C\uC804\uC2DC\uCF30\uC2B5\uB2C8\uB2E4."
    },
    filipinoScript: "Espesyal na Halo-Halo",
    filipinoPhonetics: "Es-peh-syal nah Hah-loh Hah-loh",
    audioPronunciationText: "Pabili po ng dalawang baso ng Special Halo-Halo, may Leche Flan at Ube!"
  },
  ingredients: [
    {
      id: "shaved-ice",
      name: { "zh-TW": "\u7D30\u7DFB\u7DBF\u5BC6\u5228\u51B0", "en": "Fine Shaved Ice", "fil": "Kiskis na Yelo", "ja": "\u304D\u3081\u7D30\u304B\u3044\u524A\u308A\u6C37", "ko": "\uACE0\uC6B4 \uB208\uAF43/\uC0E4\uBCA0\uD2B8 \uC5BC\uC74C" },
      amount: 400,
      unitMetric: "g",
      unitUS: "14 oz",
      isKeyFlavor: true,
      filipinoName: "Yelo",
      filipinoPronunciation: "Yeh-loh"
    },
    {
      id: "evaporated-milk",
      name: { "zh-TW": "\u7D93\u5178\u4E09\u82B1\u6DE1\u5976 (Evaporated Milk)", "en": "Evaporated Milk (Gatas Evaporada)", "fil": "Gatas Evaporada", "ja": "\u30A8\u30D0\u30DF\u30EB\u30AF\uFF08\u7121\u7CD6\u7DF4\u4E73\uFF09", "ko": "\uBB34\uAC00\uB2F9 \uC5F0\uC720 (\uC5D0\uBC14\uD3EC\uB808\uC774\uD2F0\uB4DC \uBC00\uD06C)" },
      amount: 120,
      unitMetric: "ml",
      unitUS: "0.5 cup",
      isKeyFlavor: true,
      filipinoName: "Gatas Evaporada",
      filipinoPronunciation: "Gah-tahs Eh-vah-poh-rah-dah"
    },
    {
      id: "ube-halaya",
      name: { "zh-TW": "\u81EA\u88FD\u9999\u6FC3\u7D2B\u85AF\u6CE5 (Ube Halaya)", "en": "Ube Halaya (Purple Yam Jam)", "fil": "Ube Halaya", "ja": "\u30A6\u30D9\u7D2B\u828B\u30DA\u30FC\u30B9\u30C8\uFF08\u30A6\u30D9\u30FB\u30CF\u30E9\u30E4\uFF09", "ko": "\uC6B0\uBCA0 \uC790\uC0C9\uB9C8 \uC7BC (\uC6B0\uBCA0 \uD560\uB77C\uC57C)" },
      amount: 60,
      unitMetric: "g",
      unitUS: "2 oz",
      isKeyFlavor: true,
      filipinoName: "Ube Halaya",
      filipinoPronunciation: "Oo-beh Hah-lah-yah"
    },
    {
      id: "leche-flan-slice",
      name: { "zh-TW": "\u7126\u7CD6\u5E03\u4E01\u5207\u7247 (Leche Flan)", "en": "Leche Flan (Caramel Custard Slices)", "fil": "Hiwa ng Leche Flan", "ja": "\u30AB\u30B9\u30BF\u30FC\u30C9\u30D7\u30EA\u30F3\uFF08\u30EC\u30C1\u30A7\u30FB\u30D5\u30E9\u30F3\uFF09", "ko": "\uCE90\uB7EC\uBA5C \uCEE4\uC2A4\uD130\uB4DC \uD478\uB529 \uC2AC\uB77C\uC774\uC2A4" },
      amount: 2,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Leche Flan",
      filipinoPronunciation: "Leh-cheh Flan"
    },
    {
      id: "sweetened-banana",
      name: { "zh-TW": "\u7126\u7CD6\u7CD6\u716E\u82AD\u8549\u4E01 (Minatamis na Saging)", "en": "Sweetened Saba Bananas (diced)", "fil": "Minatamis na Saging", "ja": "\u9ED2\u7CD6\u716E\u8FBC\u307F\u30D0\u30CA\u30CA", "ko": "\uB2EC\uCF64\uD558\uAC8C \uC878\uC778 \uC0AC\uBC14 \uBC14\uB098\uB098" },
      amount: 60,
      unitMetric: "g",
      unitUS: "2 oz",
      filipinoName: "Minatamis na Saging",
      filipinoPronunciation: "Mee-nah-tah-mees nah Sah-geeng"
    },
    {
      id: "nata-de-coco",
      name: { "zh-TW": "\u6676\u7469\u767D\u6930\u679C (Nata de Coco)", "en": "Nata de Coco (Coconut Gel Cubes)", "fil": "Nata de Coco", "ja": "\u30CA\u30BF\u30C7\u30B3\u30B3", "ko": "\uB098\uD0C0\uB4DC\uCF54\uCF54" },
      amount: 40,
      unitMetric: "g",
      unitUS: "1.4 oz",
      filipinoName: "Nata de Coco",
      filipinoPronunciation: "Nah-tah deh Koh-koh"
    },
    {
      id: "macapuno",
      name: { "zh-TW": "\u7CD6\u6F2C\u6930\u5B50\u80DA\u4E73\u7D72 (Macapuno Strings)", "en": "Macapuno (Sweetened Coconut Sport)", "fil": "Minatamis na Macapuno", "ja": "\u30DE\u30AB\u30D7\u30CE\uFF08\u30BC\u30EA\u30FC\u72B6\u30B3\u30B3\u30CA\u30C3\u30C4\uFF09", "ko": "\uB9C8\uCE74\uD478\uB178 \uCF54\uCF54\uB11B \uACFC\uC721 \uC808\uC784" },
      amount: 40,
      unitMetric: "g",
      unitUS: "1.4 oz",
      filipinoName: "Macapuno",
      filipinoPronunciation: "Mah-kah-poo-noh"
    },
    {
      id: "pinipig",
      name: { "zh-TW": "\u9165\u8106\u70E4\u9752\u7CEF\u7C73\u7C92 (Pinipig)", "en": "Crispy Toasted Young Rice (Pinipig)", "fil": "Pinipig", "ja": "\u7092\u308A\u9752\u7C73\uFF08\u30D4\u30CB\u30D4\u30C3\u30B0\uFF09", "ko": "\uBC14\uC0AD\uD55C \uBCF6\uC740 \uC300\uACFC\uC790 (\uD53C\uB2C8\uD53C\uADF8)" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      isKeyFlavor: true,
      filipinoName: "Pinipig",
      filipinoPronunciation: "Pee-nee-peeg"
    },
    {
      id: "ube-ice-cream",
      name: { "zh-TW": "\u7D2B\u85AF\u51B0\u6DC7\u6DCB\u7403 (Sorbetes na Ube)", "en": "Ube Ice Cream Scoop", "fil": "Sorbetes na Ube", "ja": "\u30A6\u30D9\u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0", "ko": "\uC6B0\uBCA0 \uC790\uC0C9\uB9C8 \uC544\uC774\uC2A4\uD06C\uB9BC 1\uC2A4\uCFF1" },
      amount: 2,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Sorbetes na Ube",
      filipinoPronunciation: "Sor-beh-tes nah Oo-beh"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u5728\u9AD8\u8173\u73BB\u7483\u676F\u5E95\u5806\u758A\u7E7D\u7D1B\u914D\u6599", "en": "Layer Sweet Ingredients in Tall Glass", "fil": "Iayos ang mga Sahog sa Ilalim ng Matangkad na Baso", "ja": "\u80CC\u306E\u9AD8\u3044\u30B0\u30E9\u30B9\u5E95\u306B\u5F69\u308A\u8C4A\u304B\u306A\u5177\u6750\u3092\u91CD\u306D\u308B", "ko": "\uAE34 \uC720\uB9AC\uC794 \uBC14\uB2E5\uC5D0 \uB2E4\uCC44\uB85C\uC6B4 \uD1A0\uD551 \uAE54\uAE30" },
      instruction: {
        "zh-TW": "\u6E96\u5099\u5169\u500B\u4E7E\u6DE8\u7684\u5927\u5BB9\u91CF\u9AD8\u8173\u73BB\u7483\u676F\u6216\u6DF1\u7897\u3002\u5728\u676F\u5E95\u4F9D\u6B21\u92EA\u5165\uFF1A\u7CD6\u6F2C\u82AD\u8549\u4E01\u3001\u6676\u7469\u6930\u679C\uFF08Nata de Coco\uFF09\u3001\u6930\u5B50\u80DA\u4E73\u7D72\uFF08Macapuno\uFF09\u3001\u871C\u7D05\u8C46\u3001\u751C\u6CE2\u7F85\u871C\u7D72\u3002\u4E94\u5F69\u7E7D\u7D1B\u7684\u65B7\u5C64\u662F\u7D93\u5178\u8996\u89BA\u4EAB\u53D7\u3002",
        "en": "Prepare two tall, wide clear glasses. Layer bottom with diced sweet Saba bananas, translucent nata de coco, macapuno coconut sport, sweet beans, and jackfruit strips. The visible layers of color create the signature rainbow look.",
        "fil": "Maghanda ng dalawang matangkad na baso. Ilagay sa ilalim ang minatamis na saging, nata de coco, macapuno, minatamis na beans, at langka.",
        "ja": "\u900F\u660E\u306A\u30D1\u30D5\u30A7\u30B0\u30E9\u30B9\u30922\u3064\u7528\u610F\u3057\u307E\u3059\u3002\u5E95\u306B\u30D0\u30CA\u30CA\u7518\u716E\u3001\u30CA\u30BF\u30C7\u30B3\u30B3\u3001\u30DE\u30AB\u30D7\u30CE\u3001\u5C0F\u8C46\u3001\u30D1\u30E9\u30DF\u30C4\u679C\u8089\u3092\u5C64\u306B\u306A\u308B\u3088\u3046\u306B\u7F8E\u3057\u304F\u91CD\u306D\u307E\u3059\u3002",
        "ko": "\uD22C\uBA85\uD55C \uC720\uB9AC\uC794 \uBC14\uB2E5\uC5D0 \uC870\uB9B0 \uBC14\uB098\uB098, \uB098\uD0C0\uB4DC\uCF54\uCF54, \uB9C8\uCE74\uD478\uB178, \uB2E8\uD325, \uC7AD\uD504\uB8E8\uD2B8\uB97C \uCE35\uCE35\uC774 \uC608\uC058\uAC8C \uAE54\uC544\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 180,
      image: "/images/halo-halo-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u586B\u5165\u7DBF\u5BC6\u5228\u51B0\u4E26\u6DCB\u5165\u6FC3\u9187\u4E09\u82B1\u6DE1\u5976", "en": "Pack Shaved Ice & Drizzle Rich Evaporated Milk", "fil": "Punuin ng Kayod na Yelo at Buhusan ng Gatas", "ja": "\u524A\u308A\u6C37\u3092\u3053\u3093\u3082\u308A\u76DB\u308A\u3001\u30A8\u30D0\u30DF\u30EB\u30AF\u3092\u305F\u3063\u3077\u308A\u6CE8\u3050", "ko": "\uACE0\uC6B4 \uC5BC\uC74C\uC744 \uC18C\uBCF5\uC774 \uB2F4\uACE0 \uBB34\uAC00\uB2F9 \uC5F0\uC720 \uB4EC\uBFCD \uBD93\uAE30" },
      instruction: {
        "zh-TW": "\u7528\u624B\u6416\u5228\u51B0\u6A5F\u6216\u96FB\u52D5\u788E\u51B0\u6A5F\u78E8\u51FA\u7D30\u81A9\u5982\u96EA\u7684\u51B0\u6676\uFF0C\u7DCA\u5BE6\u5730\u586B\u6EFF\u73BB\u7483\u676F\u76F4\u5230\u676F\u53E3\u5FAE\u9686\u8D77\u6210\u5713\u9802\u96EA\u4E18\u72C0\u3002\u5C07 60ml \u6FC3\u9999\u7684\u4E09\u82B1\u6DE1\u5976\u5747\u52FB\u6DCB\u5728\u51B0\u6676\u4E0A\uFF0C\u770B\u8457\u767D\u96EA\u7DE9\u7DE9\u5438\u98FD\u4E73\u9999\u3001\u878D\u9032\u5E95\u5C64\u3002",
        "en": "Pack finely shaved ice tightly into each glass, mounding gently into a snowy dome at the rim. Pour 60ml of rich evaporated milk evenly over the shaved ice, watching it saturate the ice and seep into the lower layers.",
        "fil": "Lagyan ng pinong yelo hanggang mapuno ang baso. Ibuhos ang gatas na ebaporada sa ibabaw ng yelo.",
        "ja": "\u7D30\u304B\u304F\u524A\u3063\u305F\u6C37\u3092\u30B0\u30E9\u30B9\u306E\u30D5\u30C1\u307E\u3067\u3053\u3093\u3082\u308A\u76DB\u308A\u3001\u30C9\u30FC\u30E0\u72B6\u306B\u3057\u307E\u3059\u3002\u4E0A\u304B\u3089\u30A8\u30D0\u30DF\u30EB\u30AF\u3092\u56DE\u3057\u304B\u3051\u3001\u6C37\u5168\u4F53\u306B\u30DF\u30EB\u30AF\u3092\u884C\u304D\u6E21\u3089\u305B\u307E\u3059\u3002",
        "ko": "\uACF1\uAC8C \uAC04 \uC5BC\uC74C\uC744 \uC794 \uC704\uB85C \uC18C\uBCF5\uD558\uAC8C \uCC44\uC6C1\uB2C8\uB2E4. \uBB34\uAC00\uB2F9 \uC5F0\uC720 60ml\uB97C \uC5BC\uC74C \uC704\uC5D0 \uACE8\uACE0\uB8E8 \uB07C\uC5B9\uC5B4 \uC5BC\uC74C \uC0AC\uC774\uC0AC\uC774\uB85C \uC6B0\uC720\uAC00 \uC2A4\uBA70\uB4E4\uAC8C \uD569\uB2C8\uB2E4."
      },
      durationSeconds: 120,
      image: "/images/halo-halo-step2.jpg"
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u51A0\u4E0A\u7D2B\u85AF\u6CE5\u3001\u7126\u7CD6\u5E03\u4E01\u8207\u51B0\u6DC7\u6DCB\u7403", "en": "Crown with Ube Halaya, Leche Flan & Ube Ice Cream", "fil": "Patungan ng Ube Halaya, Leche Flan at Sorbetes", "ja": "\u30A6\u30D9\u9921\u3001\u30D7\u30EA\u30F3\u3001\u30A6\u30D9\u30A2\u30A4\u30B9\u3092\u51A0\u306E\u3088\u3046\u306B\u98FE\u308B", "ko": "\uC6B0\uBCA0 \uC7BC, \uCE90\uB7EC\uBA5C \uD478\uB529, \uC6B0\uBCA0 \uC544\uC774\uC2A4\uD06C\uB9BC\uC73C\uB85C \uD654\uB8E1\uC810\uC815" },
      instruction: {
        "zh-TW": "\u5728\u5228\u51B0\u96EA\u9802\u7684\u4E00\u5074\u653E\u4E0A\u4E00\u5927\u52FA\u6FC3\u90C1\u6DF1\u7D2B\u7684 Ube Halaya \u7D2B\u85AF\u6CE5\uFF0C\u53E6\u4E00\u5074\u5E73\u92EA\u4E00\u584A\u6ED1\u5AE9\u91D1\u9EC3\u7684 Leche Flan \u7126\u7CD6\u5E03\u4E01\u5207\u7247\u3002\u4E2D\u592E\u6316\u4E0A\u4E00\u5927\u7403\u5929\u9D5D\u7D68\u822C\u7DBF\u5BC6\u7684 Ube \u7D2B\u85AF\u51B0\u6DC7\u6DCB\uFF0C\u6700\u5F8C\u5927\u6C23\u6492\u4E0A\u4E00\u5927\u5319\u91D1\u9EC3\u9999\u8106\u7684\u70E4\u9752\u7CEF\u7C73\u7C92\uFF08Pinipig\uFF09\uFF01\u63D2\u4E0A\u9577\u6E6F\u5319\u7AEF\u4E0A\u684C\uFF01",
        "en": "On top of the shaved ice dome, place a generous spoonful of purple Ube Halaya jam on one side and a slice of golden caramel Leche Flan on the other. Crown the center with a giant scoop of artisanal Ube ice cream. Generously scatter crispy toasted Pinipig on top! Insert a long sundae spoon and serve!",
        "fil": "Ilagay sa ibabaw ang ube halaya, isang hiwa ng leche flan, at isang scoop ng ube ice cream. Budburan ng malutong na pinipig sa ibabaw!",
        "ja": "\u96EA\u5C71\u306E\u4E0A\u306B\u30A6\u30D9\u7D2B\u828B\u30DA\u30FC\u30B9\u30C8\u3068\u30AB\u30B9\u30BF\u30FC\u30C9\u30D7\u30EA\u30F3\u3092\u306E\u305B\u3001\u4E2D\u592E\u306B\u30A6\u30D9\u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0\u3092\u5802\u3005\u3068\u93AE\u5EA7\u3055\u305B\u307E\u3059\u3002\u4ED5\u4E0A\u3052\u306B\u9999\u3070\u3057\u3044\u7092\u308A\u9752\u7C73\uFF08\u30D4\u30CB\u30D4\u30C3\u30B0\uFF09\u3092\u6563\u3089\u3057\u3066\u5B8C\u6210\u3067\u3059\uFF01",
        "ko": "\uC5BC\uC74C \uC704\uC5D0 \uC6B0\uBCA0 \uC7BC\uACFC \uCE90\uB7EC\uBA5C \uD478\uB529\uC744 \uC62C\uB9AC\uACE0, \uAC00\uC6B4\uB370\uC5D0 \uC790\uC0C9\uB9C8(\uC6B0\uBCA0) \uC544\uC774\uC2A4\uD06C\uB9BC \uD55C \uC2A4\uCFF1\uC744 \uD06C\uAC8C \uC5B9\uC2B5\uB2C8\uB2E4. \uBC14\uC0AD\uD55C \uD53C\uB2C8\uD53C\uADF8 \uC300 \uD1A0\uD551\uC744 \uBFCC\uB824 \uAE34 \uC2A4\uD47C\uACFC \uD568\uAED8 \uC11C\uBE59\uD569\uB2C8\uB2E4."
      },
      durationSeconds: 120,
      image: "/images/halo-halo-step3.jpg"
    }
  ],
  troubleshooting: [
    {
      id: "ice-melts-too-fast",
      problem: { "zh-TW": "\u9084\u6C92\u5403\u5E7E\u53E3\uFF0C\u6574\u676F\u51B0\u5C31\u5316\u6210\u6C34\u4E86", "en": "Shaved ice melts into water too quickly", "fil": "Mabilis matunaw ang yelo sa baso", "ja": "\u98DF\u3079\u308B\u524D\u306B\u6C37\u304C\u3069\u3093\u3069\u3093\u6EB6\u3051\u3066\u6C34\u3063\u307D\u304F\u306A\u3063\u3066\u3057\u307E\u3046", "ko": "\uBA39\uAE30\uB3C4 \uC804\uC5D0 \uC5BC\uC74C\uC774 \uAE08\uBC29 \uB179\uC544 \uBB3C\uC774 \uB428" },
      cause: { "zh-TW": "\u5E95\u5C64\u914D\u6599\u6EAB\u5EA6\u904E\u9AD8\uFF0C\u6216\u4F7F\u7528\u4E86\u5E38\u6EAB\u6DE1\u5976", "en": "Ingredients or milk were warm/room temperature", "fil": "Mainit ang mga minatamis na sahog o gatas", "ja": "\u30C8\u30C3\u30D4\u30F3\u30B0\u3084\u30DF\u30EB\u30AF\u304C\u5E38\u6E29\u306E\u307E\u307E\u6E29\u304B\u304B\u3063\u305F\u305F\u3081", "ko": "\uD1A0\uD551\uC774\uB098 \uC5F0\uC720\uAC00 \uBBF8\uC9C0\uADFC\uD55C \uC0C1\uD0DC\uC5D0\uC11C \uC5BC\uC74C\uC744 \uC62C\uB838\uC74C" },
      solution: {
        "zh-TW": "\u5728\u7D44\u88DD\u524D\uFF0C\u5C07\u7D2B\u85AF\u6CE5\u3001\u7126\u7CD6\u5E03\u4E01\u3001\u5404\u985E\u679C\u51CD\u914D\u6599\u4EE5\u53CA\u6DE1\u5976\u5168\u90E8\u653E\u5728\u51B0\u7BB1\u5145\u5206\u51B0\u93AE\uFF01\u51B0\u6DBC\u900F\u9802\u7684\u914D\u6599\u80FD\u8B93\u5228\u51B0\u7DAD\u6301 15 \u5206\u9418\u5805\u633A\u8106\u6DBC\u3002",
        "en": "Chill ALL ingredients, glass cups, and evaporated milk in the fridge before assembling!",
        "fil": "Palamigin muna ang lahat ng sangkap, baso, at gatas sa ref bago ihalo.",
        "ja": "\u30B0\u30E9\u30B9\u3001\u5177\u6750\u3001\u30DF\u30EB\u30AF\u306B\u81F3\u308B\u307E\u3067\u3001\u4E8B\u524D\u306B\u51B7\u8535\u5EAB\u3067\u3057\u3063\u304B\u308A\u51B7\u3084\u3057\u3066\u304A\u304F\u306E\u304C\u9244\u5247\u3067\u3059\u3002",
        "ko": "\uC720\uB9AC\uC794\uACFC \uBAA8\uB4E0 \uD1A0\uD551, \uC5F0\uC720\uB97C \uC870\uB9BD \uC804 \uB0C9\uC7A5\uACE0\uC5D0 \uCC28\uAC11\uAC8C \uBCF4\uAD00\uD588\uB2E4\uAC00 \uC0AC\uC6A9\uD558\uC138\uC694."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u6B63\u5B97\u83F2\u5F8B\u8CD3\u5403\u6CD5\u3011\uFF1A\u5148\u5690\u4E00\u53E3\u9802\u5C64\u7684\u7D14\u7D2B\u85AF\u6CE5\u8207\u7126\u7CD6\u5E03\u4E01\uFF0C\u611F\u53D7\u6975\u81F4\u751C\u6FC3\uFF1B\u63A5\u8457\u96D9\u624B\u63E1\u7DCA\u9577\u6E6F\u5319\uFF0C\u5F9E\u73BB\u7483\u676F\u5E95\u6DF1\u8655\u300C\u5927\u53E3\u7528\u529B\u652A\u62CC\uFF08Halo-Halo\uFF09\u300D\uFF0C\u5C07\u96EA\u82B1\u51B0\u3001\u6DE1\u5976\u3001\u7D2B\u85AF\u6CE5\u3001\u679C\u51CD\u8207\u5E03\u4E01\u5B8C\u5168\u878D\u70BA\u4E00\u9AD4\uFF0C\u8B8A\u6210\u7D2B\u7C89\u8272\u5982\u6CE5\u6F3F\u822C\u7684\u6FC3\u7A20\u5976\u6614\uFF0C\u5927\u53E3\u5438\u542E\uFF0C\u624D\u662F\u9748\u9B42\u6240\u5728\uFF01",
      "en": "How Filipinos Eat It: First take one decadent bite of the flan and ube cream. Then grab your long spoon and STIR FURIOUSLY from the bottom until everything melts into a glorious purple creamy slush! Drink and spoon up the sweet magic!",
      "fil": "Tamang Paraan ng Pagkain: Tikman muna ang leche flan, tapos ay haluin nang mabuti ang buong baso hanggang maging kulay ube ang buong yelo bago higupin.",
      "ja": "\u672C\u5834\u306E\u98DF\u3079\u65B9\uFF1A\u307E\u305A\u30D7\u30EA\u30F3\u3068\u30A2\u30A4\u30B9\u3092\u4E00\u53E3\u5473\u308F\u3063\u305F\u3089\u3001\u3042\u3068\u306F\u5E95\u304B\u3089\u30B9\u30D7\u30FC\u30F3\u3067\u4E00\u5FC3\u4E0D\u4E71\u306B\u300C\u6DF7\u305C\u3053\u305C\uFF08\u30CF\u30ED\u30CF\u30ED\uFF09\u300D\uFF01\u5168\u4F53\u304C\u30AF\u30EA\u30FC\u30DF\u30FC\u306A\u7D2B\u8272\u306B\u306A\u3063\u305F\u3068\u3053\u308D\u3092\u4E00\u6C17\u306B\u3059\u3059\u308B\u306E\u304C\u771F\u306E\u30D5\u30A3\u30EA\u30D4\u30F3\u6D41\u3067\u3059\u3002",
      "ko": "\uD604\uC9C0\uC778\uCC98\uB7FC \uBA39\uB294 \uBC95: \uBA3C\uC800 \uD478\uB529\uACFC \uC544\uC774\uC2A4\uD06C\uB9BC\uC744 \uD55C \uC785 \uB9DB\uBCF8 \uB4A4, \uAE34 \uC2A4\uD47C\uC73C\uB85C \uBC14\uB2E5\uBD80\uD130 \uD798\uCC28\uAC8C \uBE44\uBCBC\uC8FC\uC138\uC694! \uC5F0\uBCF4\uB78F\uBE5B \uBD80\uB4DC\uB7EC\uC6B4 \uC170\uC774\uD06C \uC0C1\uD0DC\uAC00 \uB418\uC5C8\uC744 \uB54C \uD638\uB85C\uB85D \uB9C8\uC2DC\uB294 \uAC83\uC774 \uCD5C\uACE0\uC758 \uBB18\uBBF8\uC785\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/lecheFlan.ts
var lecheFlan = {
  id: "leche-flan",
  slug: "leche-flan",
  title: {
    "zh-TW": "\u83F2\u5F0F\u7687\u5BB6\u91D1\u7B94\u7126\u7CD6\u5E03\u4E01 (Leche Flan)",
    "en": "Velvety Filipino Caramel Custard (Leche Flan)",
    "fil": "Makinis at Malinamnam na Leche Flan",
    "ja": "\u672C\u5834\u6975\u4E0A\u30EC\u30C1\u30A7\u30FB\u30D5\u30E9\u30F3\uFF08\u5375\u9EC4\u306E\u307F\u3067\u4F5C\u308B\u6FC3\u539A\u30AD\u30E3\u30E9\u30E1\u30EB\u30AB\u30B9\u30BF\u30FC\u30C9\uFF09",
    "ko": "\uD544\uB9AC\uD540 \uD669\uC2E4\uC758 \uB9DB \uB808\uCCB4 \uD50C\uB780 (\uB178\uB978\uC790\uB85C \uB9CC\uB4E0 \uC9C4\uD55C \uCE90\uB7EC\uBA5C \uCEE4\uC2A4\uD130\uB4DC)"
  },
  subtitle: {
    "zh-TW": "\u897F\u73ED\u7259\u5BAE\u5EF7\u53E4\u5178\u6D41\u6D3E\u30FB\u7D14\u86CB\u9EC3\u6FC3\u7E2E\u5976\u9999\u30FB\u5982\u7D72\u7D79\u822C\u7DBF\u5BC6\u7121\u6C23\u5B54\u30FB\u7425\u73C0\u7126\u7CD6\u6DB2\u7DE9\u7DE9\u6D41\u6DCC",
    "en": "Pure Egg Yolks, Sweet Condensed & Evaporated Milk Baked to Silk with Amber Caramel",
    "fil": "Espesyal na panghimagas sa llanera na makinis at walang butas-butas",
    "ja": "\u6C17\u6CE1\u30BC\u30ED\u306E\u9A5A\u7570\u7684\u306A\u306A\u3081\u3089\u304B\u3055\u3002\u7425\u73C0\u8272\u306E\u307B\u308D\u82E6\u30AB\u30E9\u30E1\u30EB\u3068\u6FC3\u539A\u306A\u5375\u9EC4\u306E\u81F3\u798F",
    "ko": "\uAE30\uD3EC \uC5C6\uC774 \uBE44\uB2E8\uACB0\uCC98\uB7FC \uBD80\uB4DC\uB7EC\uC6B4 \uD14D\uC2A4\uCC98, \uC309\uC2F8\uB984\uD55C \uCE90\uB7EC\uBA5C \uC2DC\uB7FD\uC758 \uC644\uBCBD\uD55C \uBC38\uB7F0\uC2A4"
  },
  tagline: {
    "zh-TW": "\u5168\u4E9E\u6D32\u6700\u6FC3\u9187\u7684\u91CD\u86CB\u9EC3\u5E03\u4E01\uFF0C\u6BCF\u4E00\u53E3\u90FD\u5728\u820C\u5C16\u5316\u4F5C\u6975\u81F4\u6FC3\u7A20\u7684\u7126\u7CD6\u5976\u9999",
    "en": "Richer, denser, and far more decadent than French cr\xE8me caramel\u2014a national obsession",
    "fil": "Ang paboritong matamis sa Pasko at kapistahan na tunaw sa bawat subo",
    "ja": "\u4E16\u754C\u5404\u56FD\u306E\u30D7\u30EA\u30F3\u30D5\u30A1\u30F3\u3092\u865C\u306B\u3059\u308B\u7A76\u6975\u306E\u6FC3\u539A\u3055\u3002\u4E00\u53E3\u3067\u5E83\u304C\u308B\u81F3\u9AD8\u306E\u53E3\u6EB6\u3051",
    "ko": "\uC77C\uBC18 \uD478\uB529\uACFC\uB294 \uCC28\uC6D0\uC774 \uB2E4\uB978 \uBB35\uC9C1\uD568\uACFC \uB18D\uCD95\uB41C \uC6B0\uC720\uC758 \uD48D\uBBF8\uB85C \uC0AC\uB791\uBC1B\uB294 \uD544\uB9AC\uD540\uC758 \uC790\uB791"
  },
  heroImage: "/images/leche-flan.jpg",
  difficulty: "medium",
  prepTimeMinutes: 20,
  cookTimeMinutes: 45,
  defaultServings: 6,
  caloriesPerServing: 360,
  category: "desserts",
  dietaryTags: ["classic", "vegetarian", "glutenFree"],
  supportedCookware: ["traditional", "instantPot", "airFryer"],
  culture: {
    originRegion: {
      "zh-TW": "\u897F\u73ED\u7259\u6B96\u6C11\u6642\u671F\u4FEE\u9053\u9662\u8207\u5404\u5927\u6B77\u53F2\u838A\u5712 (Spanish Colonial Era)",
      "en": "Spanish Colonial convent kitchens (using egg yolks left over from masonry)",
      "fil": "Kusina ng mga Prayle at Simbahan noong panahon ng Kastila",
      "ja": "\u30B9\u30DA\u30A4\u30F3\u690D\u6C11\u5730\u6642\u4EE3\u306E\u4FEE\u9053\u9662\uFF08\u6559\u4F1A\u306E\u77F3\u57A3\u4F5C\u308A\u306B\u5375\u767D\u3092\u4F7F\u3063\u305F\u4F59\u308A\u304B\u3089\u8A95\u751F\uFF09",
      "ko": "\uC2A4\uD398\uC778 \uC2DD\uBBFC\uC9C0 \uC2DC\uC808 \uC218\uB3C4\uC6D0 (\uC131\uB2F9 \uAC74\uCD95\uC5D0 \uB2EC\uAC40 \uD770\uC790\uB97C \uC4F0\uACE0 \uB0A8\uC740 \uB178\uB978\uC790\uB85C \uAC1C\uBC1C)"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u594E\u677E\u5E02\u5404\u8001\u5B57\u865F\u70D8\u7119\u7CD5\u9EDE\u574A", "en": "Heritage bakeries of Quezon City & Bulacan", "fil": "Bulacan at Quezon City", "ja": "\u30D6\u30E9\u30AB\u30F3\u5DDE\u540D\u7269\u30D9\u30FC\u30AB\u30EA\u30FC", "ko": "\uBD88\uB77C\uCE78 \uC804\uD1B5 \uBCA0\uC774\uCEE4\uB9AC \uAC70\uB9AC" },
      { "zh-TW": "\u5168\u83F2\u8056\u8A95\u591C\uFF08Noche Buena\uFF09\u5BB6\u5BB6\u6236\u6236\u9910\u684C", "en": "Noche Buena Christmas Eve Feast Tables", "fil": "Noche Buena sa buong bansa", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u5168\u571F\u306E\u30AF\u30EA\u30B9\u30DE\u30B9\u795D\u5BB4", "ko": "\uD544\uB9AC\uD540 \uD06C\uB9AC\uC2A4\uB9C8\uC2A4 \uC774\uBE0C \uCD95\uC81C \uC2DD\uD0C1" }
    ],
    historyStory: {
      "zh-TW": "\u5728\u897F\u73ED\u7259\u7D71\u6CBB\u6642\u671F\uFF0C\u5929\u4E3B\u6559\u795E\u7236\u5728\u5168\u83F2\u5EFA\u9020\u77F3\u9020\u5927\u6559\u5802\u6642\uFF0C\u5229\u7528\u6578\u4EE5\u767E\u842C\u8A08\u7684\u751F\u96DE\u86CB\u6E05\u6DF7\u5408\u77F3\u7070\u4F5C\u70BA\u5805\u56FA\u7684\u6C34\u6CE5\u9ECF\u8457\u5291\u3002\u70BA\u4E86\u4E0D\u6D6A\u8CBB\u6D77\u91CF\u7684\u86CB\u9EC3\uFF0C\u5EDA\u5E2B\u8207\u4FEE\u5973\u5011\u5C07\u7D14\u86CB\u9EC3\u8207\u7149\u4E73\u3001\u84B8\u993E\u6DE1\u5976\u6DF7\u5408\uFF0C\u88DD\u5728\u50B3\u7D71\u6A62\u5713\u5F62\u9435\u76D2\uFF08Llanera\uFF09\u4E2D\u84B8\u70E4\u51FA\u6975\u81F4\u5962\u83EF\u7684 Leche Flan\u3002\u5B83\u6210\u4E86\u83F2\u5F8B\u8CD3\u5404\u5927\u5BB6\u65CF\u8DE8\u5E74\u591C\u5FC5\u5099\u7684\u58D3\u8EF8\u7687\u51A0\uFF01",
      "en": 'During the Spanish era, millions of egg whites were used as mortar binding to build historical coral stone churches. To avoid wasting mountains of egg yolks, convent bakers combined them with condensed and evaporated milk inside oval tin molds called "Llaneras". It became the crown jewel of Noche Buena Christmas feasts!',
      "fil": "Noong panahon ng Kastila, ginamit ang puti ng itlog sa pagpapatayo ng mga simbahan. Ang natirang dilaw ng itlog ay ginawang napakasarap na leche flan sa llanera.",
      "ja": "\u6559\u4F1A\u306E\u77F3\u9020\u308A\u306E\u58C1\u3092\u56FA\u3081\u308B\u30E2\u30EB\u30BF\u30EB\u3068\u3057\u3066\u5375\u767D\u304C\u5927\u91CF\u306B\u4F7F\u308F\u308C\u305F\u305F\u3081\u3001\u6B8B\u3063\u305F\u5927\u91CF\u306E\u5375\u9EC4\u3092\u6D3B\u7528\u3057\u3066\u4FEE\u9053\u9662\u3067\u8A95\u751F\u3057\u305F\u6B74\u53F2\u7684\u30B9\u30A4\u30FC\u30C4\u3067\u3059\u3002",
      "ko": "\uC2DD\uBBFC\uC9C0 \uC2DC\uC808 \uC11D\uC870 \uC131\uB2F9\uC744 \uC9C0\uC744 \uB54C \uC811\uCC29\uC81C\uB85C \uD770\uC790\uB97C \uC0AC\uC6A9\uD558\uBA74\uC11C \uB0A8\uC740 \uC218\uB9CE\uC740 \uB178\uB978\uC790\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uC218\uB140\uC6D0\uC5D0\uC11C \uB9CC\uB4E0 \uAC83\uC5D0\uC11C \uC720\uB798\uD588\uC2B5\uB2C8\uB2E4."
    },
    filipinoScript: "Espesyal na Leche Flan",
    filipinoPhonetics: "Es-peh-syal nah Leh-cheh Flan",
    audioPronunciationText: "Pabili po ng isang buong llanera ng makinis na Leche Flan!"
  },
  ingredients: [
    {
      id: "egg-yolks",
      name: { "zh-TW": "\u7D14\u65B0\u9BAE\u86CB\u9EC3 (\u5FB9\u5E95\u5206\u96E2\u86CB\u767D\uFF0C\u6975\u81F4\u6FC3\u7A20)", "en": "Egg Yolks only (separated cleanly)", "fil": "Pula ng Itlog (Ihiwalay ang puti)", "ja": "\u5375\u9EC4\u306E\u307F\uFF08\u767D\u8EAB\u306F\u5B8C\u5168\u306B\u9664\u304F\uFF09", "ko": "\uC2E0\uC120\uD55C \uB2EC\uAC40 \uB178\uB978\uC790\uB9CC (\uD770\uC790 \uC644\uC804 \uBD84\uB9AC)" },
      amount: 10,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Pula ng Itlog",
      filipinoPronunciation: "Poo-lah nang Eet-log"
    },
    {
      id: "condensed-milk",
      name: { "zh-TW": "\u539F\u5473\u52A0\u7CD6\u7149\u4E73 (Condensed Milk)", "en": "Sweetened Condensed Milk", "fil": "Gatas Kondensada", "ja": "\u52A0\u7CD6\u7DF4\u4E73\uFF08\u30B3\u30F3\u30C7\u30F3\u30B9\u30DF\u30EB\u30AF\uFF09", "ko": "\uAC00\uB2F9 \uC5F0\uC720" },
      amount: 300,
      unitMetric: "ml",
      unitUS: "1 can",
      isKeyFlavor: true,
      filipinoName: "Gatas Kondensada",
      filipinoPronunciation: "Gah-tahs Kon-den-sah-dah"
    },
    {
      id: "evaporated-milk",
      name: { "zh-TW": "\u7121\u7CD6\u84B8\u993E\u6DE1\u5976 (Evaporated Milk)", "en": "Evaporated Milk", "fil": "Gatas Evaporada", "ja": "\u7121\u7CD6\u7DF4\u4E73\uFF08\u30A8\u30D0\u30DF\u30EB\u30AF\uFF09", "ko": "\uBB34\uAC00\uB2F9 \uC5F0\uC720 (\uC5D0\uBC14\uD3EC\uB808\uC774\uD2F0\uB4DC \uBC00\uD06C)" },
      amount: 300,
      unitMetric: "ml",
      unitUS: "1 can",
      isKeyFlavor: true,
      filipinoName: "Gatas Evaporada",
      filipinoPronunciation: "Gah-tahs Eh-vah-poh-rah-dah"
    },
    {
      id: "granulated-sugar",
      name: { "zh-TW": "\u767D\u7802\u7CD6 (\u71AC\u716E\u7126\u7CD6\u6DB2\u7528)", "en": "Granulated White Sugar (for golden caramel syrup)", "fil": "Puting Asukal (Pang-arnibal)", "ja": "\u767D\u7802\u7CD6\uFF08\u30AB\u30E9\u30E1\u30EB\u7528\uFF09", "ko": "\uBC31\uC124\uD0D5 (\uCE90\uB7EC\uBA5C \uC2DC\uB7FD\uC6A9)" },
      amount: 100,
      unitMetric: "g",
      unitUS: "0.5 cup",
      isKeyFlavor: true,
      filipinoName: "Asukal",
      filipinoPronunciation: "Ah-soo-kal"
    },
    {
      id: "vanilla-calamansi",
      name: { "zh-TW": "\u7D14\u9999\u8349\u7CBE\u8207\u5FAE\u91CF\u91D1\u6854\u76AE\u5C51 (\u53BB\u86CB\u8165\u589E\u9999)", "en": "Pure Vanilla Extract & zest of 1 calamansi", "fil": "Bainilya at balat ng kalamansi", "ja": "\u30D0\u30CB\u30E9\u30A8\u30C3\u30BB\u30F3\u30B9\u3068\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u679C\u76AE\u3059\u308A\u304A\u308D\u3057", "ko": "\uBC14\uB2D0\uB77C \uC775\uC2A4\uD2B8\uB799 & \uAE54\uB77C\uB9CC\uC2DC \uC81C\uC2A4\uD2B8 \uC18C\uB7C9" },
      amount: 1,
      unitMetric: "tsp",
      unitUS: "1 tsp",
      filipinoName: "Bainilya",
      filipinoPronunciation: "Bah-ee-neel-yah"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u6162\u706B\u71AC\u716E\u7425\u73C0\u91D1\u9EC3\u7126\u7CD6\u5E95", "en": "Melt Caramel Directly in the Llanera / Pan", "fil": "Tunawin ang Asukal para sa Arnibal", "ja": "\u578B\uFF08\u307E\u305F\u306F\u5C0F\u934B\uFF09\u306E\u4E2D\u3067\u7802\u7CD6\u3092\u6EB6\u304B\u3057\u30AD\u30E3\u30E9\u30E1\u30EB\u3092\u4F5C\u308B", "ko": "\uD2C0\uC5D0 \uC124\uD0D5\uC744 \uB179\uC5EC \uC601\uB871\uD55C \uC570\uBC84 \uCE90\uB7EC\uBA5C \uB9CC\uB4E4\uAE30" },
      instruction: {
        "zh-TW": "\u5728\u50B3\u7D71\u83F2\u5F8B\u8CD3\u6A62\u5713\u70E4\u6A21\uFF08Llanera\uFF09\u6216\u5E73\u5E95\u8010\u71B1\u6A21\u5177\u4E2D\u653E\u5165\u767D\u7CD6\u8207 1 \u5927\u5319\u6E05\u6C34\u3002\u653E\u5728\u5FAE\u5F31\u74E6\u65AF\u5C0F\u706B\u4E0A\u52A0\u71B1\uFF08\u6216\u5728\u5C0F\u5976\u934B\u4E2D\u71AC\u716E\uFF09\uFF0C\u7121\u9808\u7528\u93DF\u5B50\u652A\u52D5\uFF0C\u53EA\u9700\u8F15\u8F15\u6416\u6643\u6A21\u5177\uFF0C\u76F4\u5230\u767D\u7CD6\u5B8C\u5168\u878D\u5316\u5316\u70BA\u8A98\u4EBA\u7684\u6E05\u6F88\u7425\u73C0\u91D1\u9EC3\u8272\u3002\u95DC\u706B\uFF0C\u65CB\u8F49\u6A21\u5177\u8B93\u7126\u7CD6\u5747\u52FB\u92EA\u6EFF\u6A21\u5E95\uFF0C\u975C\u7F6E\u51B7\u537B\u786C\u5316\u3002",
        "en": "Place white sugar and 1 tbsp water directly into the bottom of an oval aluminum mold (Llanera) or small saucepan. Place over gentle low heat. Do NOT stir with a spoon; gently swirl the mold as sugar melts and browns into a gleaming clear amber caramel. Remove from heat and tilt mold so caramel coats the bottom. Let cool and harden.",
        "fil": "Tunawin ang asukal sa llanera sa mahinang apoy hanggang maging kulay arnibal. Ikot ang llanera at palamigin hanggang tumigas.",
        "ja": "\u713C\u304D\u578B\uFF08\u307E\u305F\u306F\u5C0F\u934B\uFF09\u306B\u7802\u7CD6\u3068\u6C34\u5927\u3055\u30581\u3092\u5165\u308C\u3001\u5F31\u706B\u306B\u304B\u3051\u307E\u3059\u3002\u6DF7\u305C\u305A\u306B\u578B\u3092\u63FA\u3059\u308A\u306A\u304C\u3089\u52A0\u71B1\u3057\u3001\u900F\u304D\u901A\u3063\u305F\u7425\u73C0\u8272\u306E\u30AD\u30E3\u30E9\u30E1\u30EB\u306B\u306A\u3063\u305F\u3089\u706B\u3092\u6B62\u3081\u3001\u5E95\u5168\u4F53\u306B\u884C\u304D\u6E21\u3089\u305B\u3066\u51B7\u307E\u3057\u307E\u3059\u3002",
        "ko": "\uC6D0\uD615 \uB610\uB294 \uD0C0\uC6D0\uD615 \uD2C0\uC5D0 \uC124\uD0D5\uACFC \uBB3C 1\uD070\uC220\uC744 \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C \uC813\uC9C0 \uB9D0\uACE0 \uD32C\uC744 \uB3CC\uB824\uAC00\uBA70 \uB053\uC785\uB2C8\uB2E4. \uB9D1\uC740 \uD638\uBC15\uC0C9 \uCE90\uB7EC\uBA5C\uC774 \uB418\uBA74 \uBD88\uC744 \uB044\uACE0 \uBC14\uB2E5\uC5D0 \uACE0\uB8E8 \uD3B4\uC900 \uB4A4 \uC2DD\uD600 \uAD73\uD799\uB2C8\uB2E4."
      },
      durationSeconds: 300,
      image: "/images/leche-flan-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u8F15\u67D4\u6DF7\u5408\u86CB\u9EC3\u4E73\u6DB2\uFF0C\u4E09\u9053\u904E\u7BE9\u53BB\u6C23\u6CE1", "en": "Gently Whisk Custard & Strain 3 Times", "fil": "Haluin nang Dahan-dahan at Salain nang Tatlong Beses", "ja": "\u5375\u9EC4\u3068\u30DF\u30EB\u30AF\u3092\u512A\u3057\u304F\u6DF7\u305C\u30013\u56DE\u6FFE\u3057\u3066\u6C17\u6CE1\u3092\u306A\u304F\u3059", "ko": "\uB178\uB978\uC790\uC640 \uC6B0\uC720\uB97C \uAC70\uD488 \uC5C6\uC774 \uC11E\uACE0 3\uBC88 \uCCB4\uC5D0 \uAC70\uB974\uAE30" },
      instruction: {
        "zh-TW": "\u7897\u4E2D\u653E\u5165 10 \u9846\u7D14\u86CB\u9EC3\uFF0C\u52A0\u5165\u7149\u4E73\u3001\u6DE1\u5976\u3001\u9999\u8349\u7CBE\u8207\u5FAE\u91CF\u91D1\u6854\u76AE\u5C51\u3002\u7528\u6253\u86CB\u5668\u3010\u9806\u540C\u4E00\u65B9\u5411\u8F15\u67D4\u6162\u652A\uFF0C\u5207\u5FCC\u6253\u51FA\u6C23\u6CE1\uFF01\u3011\u3002\u62FF\u7D30\u5BC6\u6FFE\u7DB2\u5C07\u5E03\u4E01\u6DB2\u3010\u9023\u7E8C\u904E\u7BE9 3 \u6B21\u3011\uFF0C\u6FFE\u9664\u6240\u6709\u672A\u878D\u86CB\u5E36\u8207\u5FAE\u5C0F\u6C23\u5B54\u3002\u9019\u662F\u6210\u5C31\u7D72\u7D79\u7121\u5B54\u8CEA\u5730\u7684\u6700\u95DC\u9375\u79D8\u8A23\uFF01",
        "en": "Gently whisk 10 egg yolks with condensed milk, evaporated milk, vanilla, and calamansi zest. [CRUCIAL: STIR GENTLY IN ONE DIRECTION WITHOUT WHIPPING AIR!]. Pour the custard through a fine-mesh strainer 3 TIMES to remove all chalaza and air bubbles. This guarantees mirror-smooth texture!",
        "fil": "Dahan-dahang haluin ang 10 pula ng itlog, kondensada, evaporada, at bainilya. Salain sa pinong salaan nang TATLONG BESES upang maging makinis na parang sutla.",
        "ja": "\u5375\u9EC410\u500B\u306B\u7DF4\u4E73\u3001\u30A8\u30D0\u30DF\u30EB\u30AF\u3001\u30D0\u30CB\u30E9\u3092\u5408\u308F\u305B\u3001\u7A7A\u6C17\u304C\u5165\u3089\u306A\u3044\u3088\u3046\u540C\u4E00\u65B9\u5411\u306B\u9759\u304B\u306B\u6DF7\u305C\u307E\u3059\u3002\u30AD\u30E1\u3092\u6574\u3048\u308B\u305F\u3081\u3010\u76EE\u306E\u7D30\u304B\u3044\u30B6\u30EB\u30673\u56DE\u6FFE\u3057\u307E\u3059\u3011\u3002\u6C17\u6CE1\u306E\u306A\u3044\u81F3\u9AD8\u306E\u820C\u89E6\u308A\u304C\u751F\u307E\u308C\u307E\u3059\u3002",
        "ko": "\uBCFC\uC5D0 \uB178\uB978\uC790 10\uAC1C, \uC5F0\uC720, \uBB34\uAC00\uB2F9 \uC5F0\uC720, \uBC14\uB2D0\uB77C\uB97C \uB123\uACE0 \uAC70\uD488\uC774 \uC0DD\uAE30\uC9C0 \uC54A\uB3C4\uB85D \uC0B4\uC0B4 \uC800\uC5B4\uC90D\uB2C8\uB2E4. \uC54C\uB048\uACFC \uAE30\uD3EC\uB97C \uC644\uBCBD\uD788 \uC5C6\uC560\uAE30 \uC704\uD574 \u3010\uACE0\uC6B4 \uCCB4\uC5D0 3\uBC88 \uAC78\uB7EC\uC90D\uB2C8\uB2E4\u3011."
      },
      durationSeconds: 360,
      image: "/images/leche-flan-step2.jpg",
      crucialTips: {
        "zh-TW": "\u5207\u5FCC\u50CF\u505A\u86CB\u7CD5\u90A3\u6A23\u5FEB\u901F\u6253\u767C\uFF01\u5FEB\u901F\u6253\u5165\u7A7A\u6C23\u6703\u4F7F\u70E4\u51FA\u4F86\u7684\u5E03\u4E01\u5145\u6EFF\u8702\u7AA9\u5B54\u6D1E\u3002\u52D5\u4F5C\u8D8A\u6EAB\u67D4\uFF0C\u8CEA\u5730\u8D8A\u50CF\u9AD8\u7D1A\u5929\u9D5D\u7D68\u3002",
        "en": "Never whip vigorously! Aerating the mixture causes spongy, bubbly holes. Gentle sweeping strokes make it velvety and dense.",
        "fil": "Huwag batihin nang mabilis upang hindi magkabula-bula sa loob pag naluto.",
        "ja": "\u6FC0\u3057\u304F\u6CE1\u7ACB\u3066\u306A\u3044\u3053\u3068\uFF01\u7A7A\u6C17\u304C\u6DF7\u3056\u308B\u3068\u30B9\u304C\u5165\u3063\u3066\u8702\u306E\u5DE3\u72B6\u306B\u306A\u3063\u3066\u3057\u307E\u3044\u307E\u3059\u3002\u512A\u3057\u304F\u6DF7\u305C\u308B\u306E\u304C\u30B7\u30EB\u30AF\u306E\u820C\u89E6\u308A\u306E\u79D8\u8A23\u3067\u3059\u3002",
        "ko": "\uD718\uD551\uAE30\uB97C \uAC70\uC138\uAC8C \uCE58\uB300\uC9C0 \uB9C8\uC138\uC694! \uACF5\uAE30\uAC00 \uB4E4\uC5B4\uAC00\uBA74 \uAD6C\uC6E0\uC744 \uB54C \uAD6C\uBA4D(\uAE30\uD3EC)\uC774 \uC22D\uC22D \uB6AB\uB9BD\uB2C8\uB2E4. \uBD80\uB4DC\uB7FD\uAC8C \uC6D0\uC744 \uADF8\uB9AC\uB4EF \uC800\uC5B4\uC8FC\uC138\uC694."
      }
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u92C1\u7B94\u7D19\u7DCA\u5BC6\u5BC6\u5C01\uFF0C\u6C34\u6D74\u84B8\u70E4\u6216\u51B7\u537B\u812B\u6A21", "en": "Seal with Foil, Steam / Water Bath Bake & Invert", "fil": "Takpan ng Foil, I-steam at Palamigin Bago Baligtarin", "ja": "\u30A2\u30EB\u30DF\u30DB\u30A4\u30EB\u3067\u5BC6\u9589\u3057\u6E6F\u714E\u84B8\u3057\u713C\u304D\u3001\u51B7\u3084\u3057\u3066\u76BF\u306B\u8FD4\u3059", "ko": "\uD638\uC77C\uB85C \uBC00\uBD09 \uD6C4 \uC911\uD0D5 \uCC0C\uAE30, \uCC28\uAC8C \uC2DD\uD600 \uB4A4\uC9D1\uAE30" },
      instruction: {
        "zh-TW": "\u5C07\u904E\u7BE9\u5F8C\u7684\u5E03\u4E01\u6DB2\u7DE9\u7DE9\u5012\u5165\u7126\u7CD6\u6A21\u5177\u4E2D\uFF08\u4E5D\u5206\u6EFF\uFF09\u3002\u8868\u9762\u7528\u92C1\u7B94\u7D19\u3010\u7DCA\u5BC6\u5305\u88F9\u5C01\u53E3\uFF0C\u9632\u6B62\u84B8\u6C23\u6C34\u73E0\u6EF4\u843D\u8868\u9762\u3011\u3002\u653E\u5165\u84B8\u934B\u4E2D\u706B\u84B8 35-40 \u5206\u9418\uFF08\u7B77\u5B50\u63D2\u4E2D\u592E\u4E7E\u6DE8\u62D4\u51FA\u5373\u53EF\uFF09\u3002\u3010\u6216\u58D3\u529B\u934B\u6A21\u5F0F\u8ACB\u53C3\u898B\u5207\u63DB\u3011\u3002\u53D6\u51FA\u5E38\u6EAB\u667E\u6DBC\u5F8C\uFF0C\u51B7\u85CF\u81F3\u5C11 4 \u5C0F\u6642\u3002\u7528\u8584\u5200\u6CBF\u908A\u7DE3\u5283\u4E00\u5708\uFF0C\u5012\u6263\u5728\u5927\u5713\u76E4\u4E0A\uFF0C\u7425\u73C0\u7126\u7CD6\u6DB2\u5982\u7011\u5E03\u50BE\u7009\uFF01",
        "en": "Pour silky custard into the caramel-lined mold. Seal tightly with aluminum foil so water condensation does not drip onto the surface. Steam over medium heat for 35-40 mins until set (toothpick comes out clean). Refrigerate at least 4 hours. Run a thin knife along the edges and invert onto a lipped platter. The caramel sauce cascades down!",
        "fil": "Takpan nang mahigpit ng aluminum foil ang llanera. I-steam nang 35-40 minuto. Palamigin sa ref nang 4 na oras bago itaob sa plato.",
        "ja": "\u6C34\u6EF4\u304C\u843D\u3061\u306A\u3044\u3088\u3046\u30A2\u30EB\u30DF\u30DB\u30A4\u30EB\u3067\u3057\u3063\u304B\u308A\u30D5\u30BF\u3092\u3057\u3001\u4E2D\u706B\u306E\u84B8\u3057\u5668\u306735\u301C40\u5206\u84B8\u3057\u307E\u3059\u3002\u7C97\u71B1\u3092\u53D6\u308A\u51B7\u8535\u5EAB\u30674\u6642\u9593\u4EE5\u4E0A\u3057\u3063\u304B\u308A\u51B7\u3084\u3057\u307E\u3059\u3002\u30CA\u30A4\u30D5\u3067\u5468\u56F2\u3092\u5916\u3057\u3001\u304A\u76BF\u306E\u4E0A\u306B\u4E00\u6C17\u306B\u3072\u3063\u304F\u308A\u8FD4\u3059\u3068\u30AD\u30E3\u30E9\u30E1\u30EB\u304C\u7F8E\u3057\u304F\u6D41\u308C\u51FA\u3057\u307E\u3059\uFF01",
        "ko": "\uD2C0\uC5D0 \uBC18\uC8FD\uC744 \uBD93\uACE0 \uC218\uC99D\uAE30\uAC00 \uB5A8\uC5B4\uC9C0\uC9C0 \uC54A\uAC8C \uC54C\uB8E8\uBBF8\uB284 \uD638\uC77C\uB85C \uAF3C\uAF3C\uD788 \uAC10\uC309\uB2C8\uB2E4. \uCC1C\uAE30\uC5D0 35~40\uBD84\uAC04 \uCA84\uB0B8 \uD6C4 \uB0C9\uC7A5\uACE0\uC5D0\uC11C 4\uC2DC\uAC04 \uC774\uC0C1 \uAD73\uD799\uB2C8\uB2E4. \uCE7C\uB85C \uAC00\uC7A5\uC790\uB9AC\uB97C \uBD84\uB9AC\uD574 \uC811\uC2DC\uC5D0 \uB4A4\uC9D1\uC5B4\uC8FC\uBA74 \uC644\uC131!"
      },
      durationSeconds: 2400,
      image: "/images/leche-flan-step3.jpg",
      cookwareVariations: [
        {
          cookware: "instantPot",
          tempAndSetting: "Instant Pot: Steam / Manual Low Pressure for 14 mins (natural release)",
          instructionOverride: {
            "zh-TW": "\u58D3\u529B\u934B\u6A21\u5F0F\uFF1A\u5167\u81BD\u653E\u84B8\u67B6\u4E26\u52A0 250ml \u6C34\u3002\u5305\u597D\u92C1\u7B94\u7D19\u7684\u5E03\u4E01\u76D2\u653E\u84B8\u67B6\u4E0A\u3002\u9078 Steam \u6216 Manual \u4F4E\u58D3 14 \u5206\u9418\uFF0C\u7D50\u675F\u5F8C\u81EA\u7136\u6D29\u58D3 15 \u5206\u9418\u3002\u6BD4\u84B8\u934B\u66F4\u5747\u52FB\uFF0C\u51FA\u934B\u5B8C\u7F8E\u5982\u93E1\u9762\uFF01",
            "en": "Instant Pot Variation: Add 250ml water to inner pot with trivet. Place foil-covered llanera on trivet. Steam on Low Pressure for 14 mins, followed by 15 mins natural release. Mirror-like perfection every time!",
            "fil": "Instant Pot: Maglagay ng 250ml tubig at patungan. Ilagay ang llanera at i-set sa Low Pressure nang 14 minuto, natural release 15 minuto.",
            "ja": "\u96FB\u6C17\u5727\u529B\u934B\u8A2D\u5B9A\uFF1A\u6C34250ml\u3068\u84B8\u3057\u53F0\u3092\u5165\u308C\u3001\u30DB\u30A4\u30EB\u3092\u5DFB\u3044\u305F\u578B\u3092\u7F6E\u304D\u307E\u3059\u3002\u4F4E\u5727\u306714\u5206\u8ABF\u7406\u3057\u300115\u5206\u84B8\u3089\u3057\u3066\u6E1B\u5727\u3002\u84B8\u3057\u5668\u3088\u308A\u5B89\u5B9A\u3057\u3066\u93E1\u9762\u306B\u4ED5\u4E0A\u304C\u308A\u307E\u3059\u3002",
            "ko": "\uC778\uC2A4\uD134\uD2B8\uD31F \uC124\uC815: \uBB3C 250ml\uC640 \uCC1C\uB9DD\uC744 \uB123\uACE0 \uD638\uC77C\uB85C \uC2FC \uD2C0\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC800\uC555 14\uBD84 \uC870\uB9AC \uD6C4 15\uBD84 \uC790\uC5F0 \uAC10\uC555\uD569\uB2C8\uB2E4."
          }
        }
      ]
    }
  ],
  troubleshooting: [
    {
      id: "bubbly-texture",
      problem: { "zh-TW": "\u5207\u958B\u5F8C\u5167\u90E8\u6709\u8A31\u591A\u8702\u7AA9\u5B54\u6D1E\uFF0C\u53E3\u611F\u7C97\u7CD9", "en": "Custard has ugly bubbles/holes and grainy texture", "fil": "May mga butas-butas sa loob ng flan", "ja": "\u3059\u3060\u3061\uFF08\u6C17\u6CE1\u306E\u7A74\uFF09\u304C\u3067\u304D\u3066\u53E3\u5F53\u305F\u308A\u304C\u30B6\u30E9\u3064\u304F", "ko": "\uB2E8\uBA74\uC5D0 \uAD6C\uBA4D\uC774 \uC22D\uC22D \uB6AB\uB824 \uC2DD\uAC10\uC774 \uAC70\uCE60\uC74C" },
      cause: { "zh-TW": "\u84B8\u70E4\u706B\u5019\u904E\u5927\uFF08\u6C34\u6CB8\u9A30\u7FFB\u6EFE\u904E\u731B\uFF09\uFF0C\u6216\u904E\u7BE9\u4E0D\u5920\u5FB9\u5E95", "en": "Steaming heat was too high, or mixture was whipped aggressively", "fil": "Masyadong malakas ang apoy habang ini-steam", "ja": "\u84B8\u3059\u706B\u529B\u304C\u5F37\u3059\u304E\u3066\u5185\u90E8\u304C\u6CB8\u9A30\u3057\u3066\u3057\u307E\u3063\u305F\u305F\u3081", "ko": "\uCC1C\uAE30\uC758 \uBD88\uC774 \uB108\uBB34 \uC138\uC11C \uBC18\uC8FD\uC774 \uB053\uC5B4\uC62C\uB790\uAC70\uB098 \uB35C \uAC78\uB800\uC74C" },
      solution: {
        "zh-TW": "\u84B8\u716E\u6642\u52D9\u5FC5\u4FDD\u6301\u300C\u4E2D\u5FAE\u706B\u300D\uFF0C\u6C34\u9762\u5FAE\u5FAE\u5192\u5C0F\u6CE1\u5373\u53EF\uFF0C\u4E0D\u53EF\u5927\u6EFE\uFF1B\u5FC5\u9808\u904E\u7BE9 3 \u904D\u4E26\u7528\u92C1\u7B94\u7D19\u7DCA\u5BC6\u5C01\u4F4F\u6A21\u53E3\u3002",
        "en": "Keep steam on gentle medium-low simmer. Never let water boil aggressively. Always strain 3 times and foil tightly.",
        "fil": "Hinaan ang apoy sa katamtaman lamang at salain nang mabuti.",
        "ja": "\u30B0\u30E9\u30B0\u30E9\u6CB8\u9A30\u3055\u305B\u305A\u3001\u30D5\u30C4\u30D5\u30C4\u3068\u9759\u304B\u306B\u6E6F\u6C17\u304C\u7ACB\u3064\u4E2D\u5F31\u706B\u3092\u4FDD\u3061\u307E\u3059\u3002\u30A2\u30EB\u30DF\u30DB\u30A4\u30EB\u5BC6\u9589\u30683\u56DE\u6FFE\u3057\u3092\u5FB9\u5E95\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        "ko": "\uBB3C\uC774 \uC694\uB3D9\uCE58\uC9C0 \uC54A\uAC8C \uC911\uC57D\uBD88\uC744 \uC720\uC9C0\uD558\uACE0, \uBC18\uB4DC\uC2DC 3\uBC88 \uCCB4\uC5D0 \uAC70\uB974\uACE0 \uD638\uC77C\uB85C \uBE48\uD2C8\uC5C6\uC774 \uAC10\uC2F8\uC8FC\uC138\uC694."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u91D1\u6854\u76AE\u53BB\u8165\u9EDE\u775B\u79D8\u65B9\u3011\uFF1A\u5728\u6FC3\u90C1\u7684\u7D14\u86CB\u9EC3\u8207\u7149\u4E73\u6DB2\u4E2D\uFF0C\u78E8\u5165\u5FAE\u91CF\u65B0\u9BAE\u56DB\u5B63\u67D1\u6854\u76AE\u5C51\uFF08Calamansi Zest\uFF09\uFF0C\u67D1\u6A58\u5929\u7136\u7CBE\u6CB9\u80FD\u5B8C\u7F8E\u6D88\u9664\u751F\u86CB\u9EC3\u7684\u8165\u91CD\uFF0C\u5E36\u4F86\u512A\u96C5\u9AD8\u8CB4\u7684\u6E05\u723D\u5F8C\u97FB\uFF01",
      "en": "Calamansi Zest Magic: Grate a whisper of fresh green calamansi lime zest into your yolk mix. The citrus oils neutralize egginess, imparting an aristocratic floral aroma!",
      "fil": "Tip ng Kusinero: Maglagay ng kaunting gadgad na balat ng kalamansi upang mawala ang lansa ng itlog at maging mabango.",
      "ja": "\u67D1\u6A58\u30D4\u30FC\u30EB\u306E\u9B54\u6CD5\uFF1A\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\uFF08\u307E\u305F\u306F\u30B9\u30C0\u30C1\uFF09\u306E\u76AE\u3092\u3054\u304F\u5FAE\u91CF\u3059\u308A\u304A\u308D\u3057\u3066\u52A0\u3048\u308B\u3068\u3001\u6FC3\u539A\u306A\u5375\u9EC4\u306E\u751F\u81ED\u3055\u304C\u6D88\u3048\u3001\u723D\u3084\u304B\u306A\u9AD8\u7D1A\u611F\u304C\u751F\u307E\u308C\u307E\u3059\u3002",
      "ko": "\uAE54\uB77C\uB9CC\uC2DC \uC81C\uC2A4\uD2B8 \uBE44\uBC95: \uC2E0\uC120\uD55C \uAE54\uB77C\uB9CC\uC2DC \uAECD\uC9C8\uC744 \uC544\uC8FC \uC0B4\uC9DD \uAC08\uC544 \uB123\uC5B4\uBCF4\uC138\uC694. \uB178\uB978\uC790 \uD2B9\uC720\uC758 \uBE44\uB9B0\uB0B4\uB97C \uC644\uBCBD\uD788 \uC7A1\uACE0 \uC0C1\uD07C\uD55C \uADC0\uC871\uC758 \uD48D\uBBF8\uB97C \uB354\uD574\uC90D\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/pancitBihon.ts
var pancitBihon = {
  id: "pancit-bihon",
  slug: "pancit-bihon",
  title: {
    "zh-TW": "\u9577\u58FD\u5409\u7965\u83F2\u5F0F\u7092\u7C73\u7C89 (Pancit Bihon Guisado)",
    "en": "Festive Filipino Stir-Fried Rice Vermicelli (Pancit Bihon)",
    "fil": "Pancit Bihon Guisado (Pang-Haba ng Buhay)",
    "ja": "\u672C\u5834\u30D1\u30F3\u30B7\u30C3\u30C8\u30FB\u30D3\u30DB\u30F3\uFF08\u9577\u5BFF\u3092\u795D\u3046\u30D5\u30A3\u30EA\u30D4\u30F3\u98A8\u713C\u304D\u30D3\u30FC\u30D5\u30F3\uFF09",
    "ko": "\uD544\uB9AC\uD540\uC2DD \uC794\uCE58 \uBCF6\uC74C \uC300\uAD6D\uC218 \uD310\uC2EF \uBE44\uD63C"
  },
  subtitle: {
    "zh-TW": "\u751F\u65E5\u6176\u5178\u9577\u58FD\u8C61\u5FB5\u30FB\u5438\u98FD\u96DE\u9AD8\u6E6F\u7CBE\u83EF\u30FB\u9BAE\u8766\u4E94\u82B1\u8089\u9AD8\u9E97\u83DC\u7206\u7092\u30FB\u56DB\u5B63\u6854\u9748\u9B42\u9EDE\u775B",
    "en": "Celebration Staple Symbolizing Long Life: Rice Vermicelli Soaked in Rich Broth, Pork & Crisp Veggies",
    "fil": "Tradisyunal na handa sa kaarawan na may hipon, baboy, repolyo at kalamansi",
    "ja": "\u8A95\u751F\u65E5\u306B\u6B20\u304B\u305B\u306A\u3044\u9577\u5BFF\u306E\u30B7\u30F3\u30DC\u30EB\u3002\u9D8F\u51FA\u6C41\u306E\u65E8\u5473\u3092\u5438\u3063\u305F\u9EBA\u306B\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u3092\u643E\u3063\u3066",
    "ko": "\uC7A5\uC218\uB97C \uAE30\uC6D0\uD558\uB294 \uC0DD\uC77C\uC0C1 \uD544\uC218 \uBA54\uB274, \uC9C4\uD55C \uB2ED \uC721\uC218\uB97C \uBA38\uAE08\uC740 \uC300\uAD6D\uC218\uC640 \uC2E0\uC120\uD55C \uCC44\uC18C \uBCF6\uC74C"
  },
  tagline: {
    "zh-TW": "\u904E\u751F\u65E5\u7D55\u4E0D\u80FD\u5207\u65B7\u7684\u5E78\u904B\u7C73\u7C89\uFF01\u64E0\u4E0A\u65B0\u9BAE\u91D1\u6854\u6C41\uFF0C\u9BAE\u723D\u4E7E\u9999\u7121\u6BD4",
    "en": "Never cut the noodles\u2014they represent long life! Finished with a zesty squeeze of calamansi",
    "fil": "Bawal putulin ang noodles para sa mahabang buhay; mas masarap kapag may kalamansi",
    "ja": "\u9EBA\u3092\u5207\u3089\u305A\u306B\u98DF\u3079\u308B\u306E\u304C\u9577\u5BFF\u306E\u7FD2\u308F\u3057\u3002\u67D1\u6A58\u306E\u9178\u5473\u3068\u9999\u3070\u3057\u3044\u91A4\u6CB9\u306E\u98A8\u5473\u304C\u629C\u7FA4",
    "ko": "\uC7A5\uC218\uB97C \uC704\uD574 \uBA74\uC744 \uC808\uB300 \uC790\uB974\uC9C0 \uC54A\uB294 \uC804\uD1B5! \uC0C8\uCF64\uD55C \uAE54\uB77C\uB9CC\uC2DC\uB97C \uB458\uB7EC \uBA39\uC73C\uBA74 \uBB34\uD55C \uD761\uC785"
  },
  heroImage: "/images/pancit-bihon.jpg",
  difficulty: "easy",
  prepTimeMinutes: 15,
  cookTimeMinutes: 15,
  defaultServings: 4,
  caloriesPerServing: 390,
  category: "mains",
  dietaryTags: ["classic", "glutenFree"],
  supportedCookware: ["traditional"],
  culture: {
    originRegion: {
      "zh-TW": "\u5CB7\u502B\u6D1B\u83EF\u4EBA\u8857\u50B3\u5165\u4E26\u5168\u83F2\u666E\u53CA (Binondo Chinatown, Manila)",
      "en": "Binondo Chinatown, Manila",
      "fil": "Binondo at Buong Kapuluan",
      "ja": "\u30DE\u30CB\u30E9\u4E2D\u83EF\u8857\uFF08\u30D3\u30CE\u30F3\u30C9\uFF09\u767A\u7965\u30FB\u5168\u56FD\u666E\u53CA",
      "ko": "\uB9C8\uB2D0\uB77C \uBE44\uB17C\uB3C4 \uCC28\uC774\uB098\uD0C0\uC6B4"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u5CB7\u502B\u6D1B\u65B0\u6625\u8001\u8857\u98DF\u6A94", "en": "Binondo Food Alleyways", "fil": "Ongpin St., Binondo", "ja": "\u30D3\u30CE\u30F3\u30C9\u30FB\u30AA\u30F3\u30B0\u30D4\u30F3\u901A\u308A", "ko": "\uBE44\uB17C\uB3C4 \uC639\uD540 \uAC70\uB9AC" },
      { "zh-TW": "\u5168\u83F2\u5404\u5F0F\u5BB6\u5EAD\u751F\u65E5\u5BB4\u5E2D", "en": "Every Filipino birthday fiesta table", "fil": "Handaan sa kaarawan", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u5168\u571F\u306E\u8A95\u751F\u65E5\u795D\u5BB4", "ko": "\uD544\uB9AC\uD540 \uC804\uC5ED \uC0DD\uC77C \uC794\uCE6B\uC0C1" }
    ],
    historyStory: {
      "zh-TW": "Pancit \u6E90\u81EA\u95A9\u5357\u8A9E\u300C\u4FBF\u98DF\u300D\uFF08Pi\u0101n-\xEA-si\u030Dt\uFF0C\u610F\u70BA\u5FEB\u901F\u65B9\u4FBF\u7684\u98DF\u7269\uFF09\u3002\u83EF\u4EBA\u79FB\u6C11\u5C07\u7092\u7C73\u7C89\u624B\u85DD\u50B3\u7D66\u83F2\u5F8B\u8CD3\u4EBA\u5F8C\uFF0C\u7576\u5730\u4EBA\u5C07\u5176\u6607\u83EF\u70BA\u751F\u65E5\u6176\u5178\u8C61\u5FB5\u300C\u9577\u58FD\uFF08Haba ng buhay\uFF09\u300D\u7684\u5409\u7965\u83DC\u991A\u3002\u50B3\u7D71\u7FD2\u4FD7\u4E2D\u7092\u7C73\u7C89\u7D55\u5C0D\u4E0D\u80FD\u7528\u526A\u5200\u526A\u65B7\uFF01\u6BCF\u4E00\u76E4\u71B1\u9A30\u9A30\u51FA\u934B\u7684 Pancit\uFF0C\u5FC5\u5B9A\u5806\u6EFF\u914D\u6599\u4E26\u9644\u4E0A\u5207\u534A\u7684\u9752\u91D1\u6854\u3002",
      "en": 'Pancit stems from the Hokkien Chinese phrase "pian-e-sit" (convenient cooked food). Local Filipinos embraced it as an auspicious birthday dish symbolizing long life and prosperity. By tradition, you must NEVER cut the noodles while cooking or eating. Served with halved fresh calamansi to cut through the savory umami.',
      "fil": "Galing sa salitang Hokkien na nangangahulugang lutong mabilis. Naging simbolo ng mahabang buhay sa kaarawan kaya bawal putulin ang noodles.",
      "ja": "\u798F\u5EFA\u8A9E\u306E\u300C\u4FBF\u98DF\uFF08\u624B\u8EFD\u306A\u98DF\u4E8B\uFF09\u300D\u304C\u8A9E\u6E90\u3002\u30DE\u30CB\u30E9\u306B\u5B9A\u7740\u5F8C\u3001\u9EBA\u306E\u9577\u3055\u304C\u9577\u5BFF\u3092\u8868\u3059\u3068\u3057\u3066\u8A95\u751F\u65E5\u3084\u795D\u3044\u4E8B\u306E\u8C61\u5FB4\u7684\u6599\u7406\u3068\u306A\u308A\u307E\u3057\u305F\u3002\u9EBA\u3092\u5207\u3089\u306A\u3044\u306E\u304C\u7E01\u8D77\u62C5\u304E\u306E\u4F1D\u7D71\u3067\u3059\u3002",
      "ko": '\uD478\uC820 \uBC29\uC5B8\uC758 "\uAC04\uD3B8\uD55C \uC74C\uC2DD"\uC5D0\uC11C \uC720\uB798\uD588\uC73C\uBA70, \uAD6D\uC218\uC758 \uAE34 \uBA74\uBC1C\uC774 \uBB34\uBCD1\uC7A5\uC218\uB97C \uC0C1\uC9D5\uD558\uC5EC \uC0DD\uC77C \uD30C\uD2F0\uC758 \uD544\uC218 \uC804\uD1B5 \uC694\uB9AC\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC870\uB9AC\uD560 \uB54C \uBA74\uC744 \uC790\uB974\uC9C0 \uC54A\uB294 \uAC83\uC774 \uCCA0\uCE59\uC785\uB2C8\uB2E4.'
    },
    filipinoScript: "Pancit Bihon Guisado",
    filipinoPhonetics: "Pahn-seet Bee-hon Gee-sah-doh",
    audioPronunciationText: "Pabili po ng isang bilao ng masarap na Pancit Bihon!"
  },
  ingredients: [
    {
      id: "bihon-noodles",
      name: { "zh-TW": "\u512A\u8CEA\u83F2\u5F0F\u7C73\u7C89 (Bihon Rice Vermicelli)", "en": "Filipino Bihon Rice Vermicelli", "fil": "Bihon Noodles", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u7523 \u30D3\u30FC\u30D5\u30F3\uFF08\u7C73\u7C89\u9EBA\uFF09", "ko": "\uBE44\uD63C \uC300\uAD6D\uC218 \uBA74 (\uBC84\uBBF8\uCCBC\uB9AC)" },
      amount: 250,
      unitMetric: "g",
      unitUS: "9 oz",
      isKeyFlavor: true,
      filipinoName: "Bihon",
      filipinoPronunciation: "Bee-hon"
    },
    {
      id: "chicken-shreds",
      name: { "zh-TW": "\u719F\u96DE\u7D72\u6216\u4E94\u82B1\u8089\u7D72", "en": "Shredded Chicken Breast or Sliced Pork", "fil": "Himay na Manok o Baboy", "ja": "\u307B\u3050\u3057\u9D8F\u80F8\u8089\u307E\u305F\u306F\u8C5A\u8089\u7D30\u5207\u308A", "ko": "\uCC22\uC740 \uB2ED\uAC00\uC2B4\uC0B4 \uB610\uB294 \uC587\uAC8C \uC36C \uB3FC\uC9C0\uACE0\uAE30" },
      amount: 150,
      unitMetric: "g",
      unitUS: "5.3 oz",
      filipinoName: "Manok / Baboy",
      filipinoPronunciation: "Mah-nok / Bah-boy"
    },
    {
      id: "shrimp",
      name: { "zh-TW": "\u9BAE\u8766\u4EC1 (\u958B\u80CC\u53BB\u8766\u7DDA)", "en": "Fresh Shrimps (Peeled & deveined)", "fil": "Sariwang Hipon", "ja": "\u3080\u304D\u30A8\u30D3", "ko": "\uC190\uC9C8\uD55C \uCE75\uD14C\uC77C \uC0C8\uC6B0" },
      amount: 100,
      unitMetric: "g",
      unitUS: "3.5 oz",
      filipinoName: "Hipon",
      filipinoPronunciation: "Hee-pon"
    },
    {
      id: "cabbage",
      name: { "zh-TW": "\u9AD8\u9E97\u83DC (\u5207\u7C97\u7D72)", "en": "Green Cabbage (Shredded)", "fil": "Repolyo", "ja": "\u30AD\u30E3\u30D9\u30C4\uFF08\u3056\u304F\u5207\u308A\uFF09", "ko": "\uC591\uBC30\uCD94 (\uAD75\uAC8C \uCC44 \uC370\uAE30)" },
      amount: 150,
      unitMetric: "g",
      unitUS: "5.3 oz",
      filipinoName: "Repolyo",
      filipinoPronunciation: "Reh-pol-yoh"
    },
    {
      id: "carrot",
      name: { "zh-TW": "\u80E1\u863F\u8514 (\u5207\u7D30\u7D72)", "en": "Carrot (Julienned)", "fil": "Karot", "ja": "\u4EBA\u53C2\uFF08\u5343\u5207\u308A\uFF09", "ko": "\uB2F9\uADFC (\uCC44 \uC370\uAE30)" },
      amount: 1,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Karot",
      filipinoPronunciation: "Kah-rot"
    },
    {
      id: "snow-peas",
      name: { "zh-TW": "\u8377\u862D\u8C46 / \u751C\u8C46 (\u53BB\u8001\u7B4B)", "en": "Snow Peas / Snap Peas (Chicharo)", "fil": "Chicharo", "ja": "\u30B5\u30E4\u30A8\u30F3\u30C9\u30A6", "ko": "\uC2A4\uB178\uC6B0\uD53C / \uAE4D\uC9C0\uC644\uB450" },
      amount: 50,
      unitMetric: "g",
      unitUS: "1.8 oz",
      filipinoName: "Chicharo",
      filipinoPronunciation: "Chee-chah-roh"
    },
    {
      id: "chicken-broth",
      name: { "zh-TW": "\u9AD8\u9BAE\u96DE\u9AD8\u6E6F (\u7168\u716E\u7C73\u7C89\u7528)", "en": "Rich Chicken Broth", "fil": "Sabaw ng Manok", "ja": "\u9D8F\u30AC\u30E9\u30B9\u30FC\u30D7", "ko": "\uC9C4\uD55C \uB2ED \uC721\uC218" },
      amount: 500,
      unitMetric: "ml",
      unitUS: "2 cups",
      isKeyFlavor: true,
      filipinoName: "Sabaw",
      filipinoPronunciation: "Sah-baw"
    },
    {
      id: "soy-sauce",
      name: { "zh-TW": "\u7D14\u91C0\u9020\u91AC\u6CB9", "en": "Soy Sauce (Toyo)", "fil": "Toyo", "ja": "\u91A4\u6CB9", "ko": "\uAC04\uC7A5" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      filipinoName: "Toyo",
      filipinoPronunciation: "Toh-yoh"
    },
    {
      id: "oyster-sauce",
      name: { "zh-TW": "\u8814\u6CB9", "en": "Oyster Sauce", "fil": "Oyster Sauce", "ja": "\u30AA\u30A4\u30B9\u30BF\u30FC\u30BD\u30FC\u30B9", "ko": "\uAD74\uC18C\uC2A4" },
      amount: 1.5,
      unitMetric: "tbsp",
      unitUS: "1.5 tbsp",
      filipinoName: "Oyster Sauce",
      filipinoPronunciation: "Oyster Sauce"
    },
    {
      id: "calamansi",
      name: { "zh-TW": "\u65B0\u9BAE\u56DB\u5B63\u67D1\u6854 (\u5207\u534A\u76DB\u76E4)", "en": "Fresh Calamansi (Halved for serving)", "fil": "Sariwang Kalamansi", "ja": "\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\uFF08\u534A\u5206\u306B\u5207\u308B\uFF09", "ko": "\uC2E0\uC120\uD55C \uAE54\uB77C\uB9CC\uC2DC (\uBC18\uC73C\uB85C \uC790\uB984)" },
      amount: 4,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Kalamansi",
      filipinoPronunciation: "Kah-lah-mahn-see"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u71B1\u944A\u7206\u7092\u8089\u7D72\u3001\u8766\u4EC1\u8207\u723D\u8106\u852C\u83DC", "en": "Saut\xE9 Aromatics, Meats & Vegetables", "fil": "Igisa ang Bawang, Karne, Hipon at Gulay", "ja": "\u8089\u3001\u30A8\u30D3\u3001\u91CE\u83DC\u3092\u5F37\u706B\u3067\u9999\u3070\u3057\u304F\u7092\u3081\u308B", "ko": "\uACE0\uAE30, \uC0C8\uC6B0, \uCC44\uC18C\uB97C \uC13C \uBD88\uC5D0 \uBCF6\uC544\uB0B4\uAE30" },
      instruction: {
        "zh-TW": "\u5927\u7092\u934B\u71B1\u6CB9\uFF0C\u4E0B\u849C\u672B\u8207\u6D0B\u8525\u7D72\u7206\u9999\u3002\u52A0\u5165\u4E94\u82B1\u8089\u7D72\u3001\u96DE\u7D72\u8207\u9BAE\u8766\u4EC1\u5927\u706B\u7FFB\u7092\u81F3\u8B8A\u8272\u3002\u4E0B\u80E1\u863F\u8514\u7D72\u3001\u8377\u862D\u8C46\u8207\u9AD8\u9E97\u83DC\u5927\u706B\u5FEB\u7092 1.5 \u5206\u9418\u65B7\u751F\u3002\u52A0\u5165 2 \u5927\u5319\u91AC\u6CB9\u8207 1.5 \u5927\u5319\u8814\u6CB9\u7FFB\u52FB\u3002\u76DB\u51FA\u4E00\u534A\u7684\u7092\u852C\u83DC\u8089\u7D72\u5099\u7528\uFF08\u7559\u4F5C\u6700\u5F8C\u84CB\u9802\u88DD\u98FE\uFF09\u3002",
        "en": "In a hot wok, saut\xE9 minced garlic and sliced onions. Add pork, shredded chicken, and shrimp; stir-fry over high heat until browned. Toss in carrots, snow peas, and cabbage for 1.5 mins until tender-crisp. Season with soy sauce and oyster sauce. Scoop out half of the saut\xE9ed toppings and set aside for the topping garnish.",
        "fil": "Painitin ang mantika sa kawali, igisa ang bawang at sibuyas. Ilagay ang baboy, manok, at hipon. Ihalo ang gulay at toyo. Itabi ang kalahati para sa ibabaw.",
        "ja": "\u4E2D\u83EF\u934B\u306B\u6CB9\u3092\u71B1\u3057\u3001\u30CB\u30F3\u30CB\u30AF\u3068\u7389\u306D\u304E\u3092\u7092\u3081\u307E\u3059\u3002\u8C5A\u8089\u3001\u9D8F\u8089\u3001\u30A8\u30D3\u3092\u52A0\u3048\u5F37\u706B\u3067\u7092\u3081\u3001\u4EBA\u53C2\u3001\u30AD\u30E3\u30D9\u30C4\u3001\u30B9\u30CA\u30C3\u30D7\u30A8\u30F3\u30C9\u30A6\u3092\u30B5\u30C3\u3068\u7092\u3081\u5408\u308F\u305B\u307E\u3059\u3002\u91A4\u6CB9\u3068\u30AA\u30A4\u30B9\u30BF\u30FC\u30BD\u30FC\u30B9\u3067\u5473\u4ED8\u3051\u3057\u3001\u5177\u6750\u306E\u534A\u5206\u3092\u4ED5\u4E0A\u3052\u306E\u30C8\u30C3\u30D4\u30F3\u30B0\u7528\u306B\u53D6\u308A\u5206\u3051\u3066\u304A\u304D\u307E\u3059\u3002",
        "ko": "\uD32C\uC5D0 \uB9C8\uB298\uACFC \uC591\uD30C\uB97C \uBCF6\uB2E4\uAC00 \uACE0\uAE30\uC640 \uC0C8\uC6B0\uB97C \uB123\uC5B4 \uBCF6\uC2B5\uB2C8\uB2E4. \uB2F9\uADFC, \uC644\uB450, \uC591\uBC30\uCD94\uB97C \uB123\uACE0 \uAC04\uC7A5\uACFC \uAD74\uC18C\uC2A4\uB85C \uAC04\uD569\uB2C8\uB2E4. \uD1A0\uD551\uC6A9\uC73C\uB85C \uACE0\uBA85 \uC808\uBC18\uC744 \uB530\uB85C \uB35C\uC5B4\uB461\uB2C8\uB2E4."
      },
      durationSeconds: 240,
      image: "/images/pancit-bihon-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u6CE8\u5165\u71B1\u96DE\u9AD8\u6E6F\u716E\u6CB8\uFF0C\u4E0B\u7C73\u7C89\u5438\u98FD\u6E6F\u6C41", "en": "Pour Broth & Simmer Bihon until Liquid Absorbs", "fil": "Ibuhos ang Sabaw at Ilagay ang Bihon Noodles", "ja": "\u30B9\u30FC\u30D7\u3092\u6CE8\u304E\u3001\u30D3\u30FC\u30D5\u30F3\u306B\u65E8\u5473\u3092\u5438\u308F\u305B\u308B", "ko": "\uB2ED \uC721\uC218\uB97C \uBD93\uACE0 \uB053\uC5EC \uC300\uAD6D\uC218\uC5D0 \uAD6D\uBB3C \uC2A4\uBA70\uB4E4\uAC8C \uD558\uAE30" },
      instruction: {
        "zh-TW": "\u934B\u4E2D\u5269\u9918\u7684\u852C\u83DC\u5E95\u6599\u4E2D\u5012\u5165 500ml \u9BAE\u71B1\u96DE\u9AD8\u6E6F\uFF0C\u5927\u706B\u716E\u6CB8\u3002\u5C07\u4E7E\u7C73\u7C89\u3010\u76F4\u63A5\u653E\u5165\u6EFE\u6E6F\u4E2D\uFF08\u7121\u9808\u63D0\u524D\u6CE1\u8EDF\uFF01\uFF09\u3011\uFF0C\u7528\u7B77\u5B50\u4E0D\u65B7\u7FFB\u52D5\u6309\u58D3\uFF0C\u8B93\u7C73\u7C89\u5982\u6D77\u7DBF\u822C\u5728 3-4 \u5206\u9418\u5167\u5C07\u6FC3\u90C1\u9BAE\u7F8E\u7684\u96DE\u9AD8\u6E6F\u5B8C\u5168\u5438\u98FD\u6536\u4E7E\uFF01",
        "en": "Pour 500ml of hot chicken broth into the pan with the remaining veggies. Bring to rolling boil. Add dry bihon noodles [NO NEED TO PRE-SOAK!]. Use tongs/chopsticks to submerge and toss constantly for 3-4 mins until noodles absorb ALL the savory broth and swell tender.",
        "fil": "Ibuhos ang 500ml sabaw ng manok sa kawali. Kapag kumukulo na, ilagay ang tuyong bihon (hindi na kailangang ibabad). Haluin hanggang masipsip ang sabaw.",
        "ja": "\u934B\u306B\u6B8B\u3063\u305F\u5177\u6750\u306B\u71B1\u3044\u9D8F\u30B9\u30FC\u30D7500ml\u3092\u6CE8\u304E\u6CB8\u9A30\u3055\u305B\u307E\u3059\u3002\u4E7E\u71E5\u30D3\u30FC\u30D5\u30F3\u3092\u3010\u6C34\u623B\u3057\u305B\u305A\u76F4\u63A5\u6295\u5165\uFF01\u3011\u3002\u7BB8\u3067\u30B9\u30FC\u30D7\u306B\u6C88\u3081\u306A\u304C\u30893\u301C4\u5206\u6DF7\u305C\u3001\u9EBA\u306B\u30B9\u30FC\u30D7\u306E\u65E8\u5473\u3092\u4E00\u6EF4\u6B8B\u3089\u305A\u5438\u308F\u305B\u307E\u3059\u3002",
        "ko": "\uB0C4\uBE44\uC5D0 \uB728\uAC70\uC6B4 \uB2ED \uC721\uC218 500ml\uB97C \uBD93\uACE0 \uB053\uC785\uB2C8\uB2E4. \uB9C8\uB978 \uBE44\uD63C \uC300\uAD6D\uC218\uB97C \u3010\uBD88\uB9AC\uC9C0 \uC54A\uACE0 \uBC14\uB85C \uB123\uC5B4\u3011 \uAD6D\uBB3C\uC774 \uC644\uC804\uD788 \uD761\uC218\uB420 \uB54C\uAE4C\uC9C0 3~4\uBD84\uAC04 \uC800\uC5B4\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 240,
      image: "/images/pancit-bihon-step2.jpg",
      crucialTips: {
        "zh-TW": "\u4E7E\u7C73\u7C89\u76F4\u63A5\u4E0B\u6EFE\u6E6F\u716E\uFF0C\u80FD\u6700\u5927\u9650\u5EA6\u5438\u6536\u96DE\u9AD8\u6E6F\u8207\u852C\u83DC\u7CBE\u83EF\uFF1B\u82E5\u4E8B\u5148\u6CE1\u6C34\uFF0C\u7C73\u7C89\u5438\u6EFF\u767D\u6C34\u5C31\u7121\u6CD5\u5438\u6536\u91AC\u6C41\u4E86\uFF01",
        "en": "Never soak bihon in cold water first! Adding dry noodles forces them to drink the savory chicken broth instead of plain water.",
        "fil": "Huwag ibabad sa tubig ang bihon bago lutuin upang sabaw ng manok ang kanyang masipsip.",
        "ja": "\u30D3\u30FC\u30D5\u30F3\u3092\u4E8B\u524D\u306B\u6C34\u306B\u6D78\u3055\u306A\u3044\u3053\u3068\uFF01\u4E7E\u3044\u305F\u307E\u307E\u30B9\u30FC\u30D7\u306B\u5165\u308C\u308B\u3053\u3068\u3067\u3001\u9D8F\u51FA\u6C41\u306E\u65E8\u5473\u3060\u3051\u3092\u51DD\u7E2E\u3057\u3066\u5438\u3044\u8FBC\u307F\u307E\u3059\u3002",
        "ko": "\uBA74\uC744 \uBBF8\uB9AC \uCC2C\uBB3C\uC5D0 \uBD88\uB9AC\uC9C0 \uB9C8\uC138\uC694! \uB9C8\uB978 \uC0C1\uD0DC\uB85C \uB123\uC5B4\uC57C \uB9F9\uBB3C\uC774 \uC544\uB2CC \uB9DB\uC788\uB294 \uB2ED \uC721\uC218\uB97C \uACE0\uC2A4\uB780\uD788 \uBA38\uAE08\uC2B5\uB2C8\uB2E4."
      }
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u5927\u706B\u7FFB\u52FB\u6536\u4E7E\uFF0C\u64FA\u4E0A\u9802\u5C64\u914D\u6599\u8207\u91D1\u6854", "en": "Toss Dry over High Heat & Garnish with Calamansi", "fil": "Haluin at Ipatong ang Gulay at Sariwang Kalamansi", "ja": "\u5F37\u706B\u3067\u6C34\u5206\u3092\u98DB\u3070\u3057\u3001\u5177\u6750\u3068\u67D1\u6A58\u3092\u76DB\u308A\u4ED8\u3051\u308B", "ko": "\uC13C \uBD88\uC5D0 \uC218\uBD84\uC744 \uB0A0\uB9AC\uACE0 \uACE0\uBA85\uACFC \uAE54\uB77C\uB9CC\uC2DC \uC5B9\uC5B4 \uC644\uC131" },
      instruction: {
        "zh-TW": "\u6E6F\u6C41\u6536\u4E7E\u5F8C\u8F49\u5927\u706B\u7FFB\u7092 1 \u5206\u9418\u903C\u51FA\u944A\u6C23\u3002\u95DC\u706B\u76DB\u5165\u5927\u5713\u76E4\u4E2D\uFF0C\u5C07\u525B\u624D\u9810\u7559\u7684\u4E00\u534A\u9BAE\u8766\u3001\u8089\u7D72\u8207\u7FE0\u7DA0\u852C\u83DC\u92EA\u5728\u6700\u9802\u5C64\u3002\u56DB\u5468\u64FA\u4E0A\u5207\u534A\u7684\u56DB\u5B63\u67D1\u6854\uFF08Calamansi\uFF09\u3002\u98DF\u7528\u524D\u89AA\u624B\u64E0\u4E0A\u679C\u6C41\u62CC\u52FB\uFF0C\u9BAE\u9999\u64B2\u9F3B\uFF01",
        "en": "Toss over high heat for 1 min to achieve wok-hei aroma. Transfer to a large serving platter, arrange the reserved colorful toppings on top, and flank with halved fresh calamansi limes. Squeeze citrus juice generously right before digging in!",
        "fil": "Haluin nang mabilis sa malakas na apoy. Ilagay sa bilao o malaking plato, ipatong ang natirang sahog sa ibabaw at palamutian ng kalamansi.",
        "ja": "\u6C34\u5206\u304C\u98DB\u3093\u3060\u3089\u5F37\u706B\u30671\u5206\u717D\u3063\u3066\u9999\u3070\u3057\u3055\u3092\u5F15\u304D\u51FA\u3057\u307E\u3059\u3002\u5927\u76BF\u306B\u76DB\u308A\u3001\u53D6\u308A\u5206\u3051\u3066\u304A\u3044\u305F\u5177\u6750\u3092\u4E0A\u306B\u98FE\u308A\u3001\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u3092\u6DFB\u3048\u307E\u3059\u3002\u679C\u6C41\u3092\u305F\u3063\u3077\u308A\u7D5E\u3063\u3066\u304A\u53EC\u3057\u4E0A\u304C\u308A\u304F\u3060\u3055\u3044\uFF01",
        "ko": "\uAD6D\uBB3C\uC774 \uB2E4 \uC878\uC544\uB4E4\uBA74 \uC13C \uBD88\uC5D0 1\uBD84\uAC04 \uBCF6\uC544 \uBD88\uD5A5\uC744 \uC785\uD799\uB2C8\uB2E4. \uC811\uC2DC\uC5D0 \uB2F4\uACE0 \uB35C\uC5B4\uB454 \uACE0\uBA85\uC744 \uC62C\uB9B0 \uB4A4 \uAE54\uB77C\uB9CC\uC2DC\uB97C \uB458\uB7EC\uC90D\uB2C8\uB2E4. \uC999\uC744 \uC9DC\uC11C \uACC1\uB4E4\uC5EC \uB4DC\uC138\uC694!"
      },
      durationSeconds: 120,
      image: "/images/pancit-bihon-step3.jpg"
    }
  ],
  troubleshooting: [
    {
      id: "mushy-noodles",
      problem: { "zh-TW": "\u7C73\u7C89\u7CCA\u6210\u4E00\u5718\u6216\u65B7\u788E\u8EDF\u721B", "en": "Noodles become mushy, soggy, and break into fragments", "fil": "Nalabsak at nadurog ang bihon", "ja": "\u30D3\u30FC\u30D5\u30F3\u304C\u30C9\u30ED\u30C9\u30ED\u306B\u67D4\u3089\u304B\u304F\u306A\u308A\u3059\u304E\u3066\u5207\u308C\u3066\u3057\u307E\u3046", "ko": "\uAD6D\uC218\uAC00 \uB5A1\uC9C0\uACE0 \uB69D\uB69D \uB04A\uC5B4\uC9C0\uBA70 \uBB3C\uB7EC\uC9D0" },
      cause: { "zh-TW": "\u9AD8\u6E6F\u52A0\u592A\u591A\uFF0C\u6216\u4E8B\u5148\u628A\u7C73\u7C89\u6CE1\u6C34\u592A\u4E45\u5C0E\u81F4\u5438\u6C34\u904E\u91CF", "en": "Too much broth or noodles were pre-soaked for too long", "fil": "Napasobra sa sabaw o nababad sa tubig ang noodles", "ja": "\u30B9\u30FC\u30D7\u306E\u91CF\u304C\u591A\u3059\u304E\u305F\u304B\u3001\u8339\u3067\u3059\u304E\u304C\u539F\u56E0", "ko": "\uC721\uC218 \uC591\uC774 \uB108\uBB34 \uB9CE\uC558\uAC70\uB098 \uC870\uB9AC \uC2DC\uAC04\uC774 \uAE38\uC5C8\uC74C" },
      solution: {
        "zh-TW": "250g \u4E7E\u7C73\u7C89\u7CBE\u6E96\u642D\u914D 500ml \u9AD8\u6E6F\uFF1B\u7C73\u7C89\u5438\u98FD\u6E6F\u6C34\u5F8C\u7ACB\u5373\u8F49\u5927\u706B\u7FFB\u7092\u6536\u4E7E\uFF0C\u5207\u5FCC\u4E45\u71DC\u3002",
        "en": "Follow strict ratio: 250g dry bihon to 500ml broth. Toss on high heat as soon as liquid is absorbed.",
        "fil": "Tamang sukad ng sabaw (500ml sa 250g na bihon).",
        "ja": "\u4E7E\u9EBA250g\u306B\u5BFE\u3057\u30B9\u30FC\u30D7500ml\u306E\u9EC4\u91D1\u6BD4\u3092\u5B88\u308A\u3001\u6C34\u5206\u3092\u5438\u3063\u305F\u3089\u5F37\u706B\u3067\u30B5\u30C3\u3068\u7092\u308A\u4E0A\u3052\u307E\u3059\u3002",
        "ko": "\uB9C8\uB978 \uBA74 250g\uB2F9 \uC721\uC218 500ml \uBE44\uC728\uC744 \uC9C0\uD0A4\uACE0, \uAD6D\uBB3C\uC774 \uC878\uC544\uB4E4\uBA74 \uC989\uC2DC \uC13C \uBD88\uC5D0 \uBCF6\uC544 \uC218\uBD84\uC744 \uB0A0\uB824\uC8FC\uC138\uC694."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u9577\u58FD\u795D\u798F\u4E0D\u5207\u9EB5\u3011\uFF1A\u5728\u83F2\u5F8B\u8CD3\u6587\u5316\u4E2D\uFF0C\u7AEF\u4E0A\u684C\u7684\u7092\u7C73\u7C89\u4EE3\u8868\u795D\u798F\u4E3B\u4EBA\u8207\u58FD\u661F\u300C\u9577\u547D\u767E\u6B72\u300D\uFF0C\u56E0\u6B64\u70F9\u98EA\u8207\u593E\u53D6\u6642\u7D55\u5C0D\u4E0D\u8981\u526A\u65B7\u9EB5\u689D\uFF0C\u6574\u6839\u5438\u542E\u6700\u5E78\u904B\uFF01",
      "en": "Do Not Cut the Strands: Long noodles equal a long, prosperous life! Always serve strands intact to honor this ancient and joyous Filipino birthday tradition.",
      "fil": "Huwag gupitin ang noodles upang maging mahaba ang buhay ng may kaarawan.",
      "ja": "\u9EBA\u3092\u5207\u3089\u306A\u3044\u639F\uFF1A\u9577\u3044\u9EBA\u306F\u9577\u5BFF\u306E\u8A3C\u3002\u304A\u795D\u3044\u306E\u5E2D\u3067\u306F\u30CF\u30B5\u30DF\u3067\u5207\u3089\u305A\u3001\u9577\u3044\u307E\u307E\u76DB\u308A\u4ED8\u3051\u3066\u30C4\u30EB\u30C4\u30EB\u3068\u3044\u305F\u3060\u304F\u306E\u304C\u7E01\u8D77\u7269\u3067\u3059\u3002",
      "ko": "\uBA74\uC744 \uC790\uB974\uC9C0 \uB9C8\uC138\uC694: \uAE34 \uBA74\uBC1C\uC740 \uAE34 \uC218\uBA85\uACFC \uBCF5\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC808\uB300 \uBA74\uC744 \uAC00\uC704\uB85C \uC790\uB974\uC9C0 \uB9D0\uACE0 \uAE38\uAC8C \uB4DC\uC2DC\uB294 \uAC83\uC774 \uC804\uD1B5\uC785\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/turon.ts
var turon = {
  id: "turon",
  slug: "turon",
  title: {
    "zh-TW": "\u7126\u7CD6\u9999\u8549\u6CE2\u7F85\u871C\u70B8\u6625\u6372 (Turon)",
    "en": "Crispy Caramelized Banana Spring Rolls (Turon)",
    "fil": "Turon na may Saging Saba at Langka",
    "ja": "\u672C\u5834\u30C8\u30A5\u30ED\u30F3\uFF08\u30B5\u30D0\u30D0\u30CA\u30CA\u3068\u30D1\u30E9\u30DF\u30C4\u306E\u7126\u304C\u3057\u9ED2\u7CD6\u63DA\u3052\u6625\u5DFB\u304D\uFF09",
    "ko": "\uBC14\uC0AD\uD55C \uCE90\uB7EC\uBA5C \uBC14\uB098\uB098 \uD280\uAE40 \uCD98\uAD8C \uD22C\uB860 (Turon)"
  },
  subtitle: {
    "zh-TW": "\u8857\u982D\u6700\u92B7\u9B42\u4E0B\u5348\u8336\u30FB\u7CD6\u6F2C\u82AD\u8549\u8207\u6FC3\u9999\u6CE2\u7F85\u871C\u30FB\u5916\u5C64\u8584\u8106\u7409\u7483\u7126\u7CD6\u5916\u6BBC",
    "en": "The Ultimate Afternoon Street Snack: Ripe Saba Bananas & Sweet Jackfruit in Glass-Brittle Caramel Crust",
    "fil": "Paboritong meryenda sa hapon na may malutong na arnibal sa labas at matamis na saba sa loob",
    "ja": "\u5916\u5074\u306F\u30D1\u30EA\u30D1\u30EA\u306E\u7425\u73C0\u8272\u30AB\u30E9\u30E1\u30EB\uFF01\u4E2D\u306F\u71B1\u3005\u3068\u308D\u3051\u308B\u30D0\u30CA\u30CA\u3068\u82B3\u9187\u306A\u30B8\u30E3\u30C3\u30AF\u30D5\u30EB\u30FC\u30C4",
    "ko": "\uAC89\uC740 \uD0D5\uD6C4\uB8E8\uCC98\uB7FC \uD30C\uC0AD\uD55C \uCE90\uB7EC\uBA5C \uD06C\uB7EC\uC2A4\uD2B8, \uC18D\uC740 \uBD80\uB4DC\uB7FD\uACE0 \uB2EC\uCF64\uD55C \uBC14\uB098\uB098\uC640 \uC7AD\uD504\uB8E8\uD2B8"
  },
  tagline: {
    "zh-TW": "\u4E00\u53E3\u54AC\u4E0B\u5982\u73BB\u7483\u7CD6\u8863\u822C\u788E\u88C2\u7206\u8106\uFF0C\u5167\u9921\u8EDF\u7CEF\u71B1\u71D9\u3001\u679C\u9999\u56DB\u6EA2\u7684\u570B\u6C11\u751C\u9EDE",
    "en": "Shatteringly crisp sugar glaze outside, molten sweet banana inside",
    "fil": "Napakalutong ng bawat kagat, lalong masarap kapag may kasamang sorbetes",
    "ja": "\u5C4B\u53F0\u306E\u7518\u3044\u9999\u308A\u306B\u8A98\u308F\u308C\u308B\u56FD\u6C11\u7684\u304A\u3084\u3064\u3002\u4E00\u53E3\u304B\u3058\u308C\u3070\u30AB\u30EA\u30C3\u3068\u5FC3\u5730\u3088\u3044\u97F3\u304C\u97FF\u304D\u307E\u3059",
    "ko": "\uD55C \uC785 \uBCA0\uC5B4 \uBB3C\uBA74 \uBC14\uC0AD\uD55C \uC124\uD0D5 \uCF54\uD305\uC774 \uC640\uC0AD \uBD80\uC11C\uC9C0\uB294 \uD544\uB9AC\uD540 \uB300\uD45C \uAE38\uAC70\uB9AC \uAC04\uC2DD"
  },
  heroImage: "/images/turon.jpg",
  difficulty: "easy",
  prepTimeMinutes: 15,
  cookTimeMinutes: 12,
  defaultServings: 4,
  caloriesPerServing: 280,
  category: "desserts",
  dietaryTags: ["classic", "vegetarian", "vegan"],
  supportedCookware: ["traditional", "airFryer"],
  culture: {
    originRegion: {
      "zh-TW": "\u5168\u83F2\u5F8B\u8CD3\u57CE\u9109\u8857\u5DF7\u6D41\u52D5\u624B\u63A8\u8ECA (Street Cart Merienda)",
      "en": "Across the Philippine archipelago as a classic 3 PM Merienda snack",
      "fil": "Lahat ng Kanto sa Pilipinas (Paboritong Meryenda)",
      "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u5168\u571F\u306E\u8857\u89D2\u30B9\u30CA\u30C3\u30AF\uFF083\u6642\u306E\u30DF\u30EA\u30A8\u30F3\u30C0\uFF1D\u304A\u3084\u3064\uFF09",
      "ko": "\uD544\uB9AC\uD540 \uC804\uC5ED \uAE38\uAC70\uB9AC \uAC04\uC2DD (\uC624\uD6C4 3\uC2DC \uBA54\uB9AC\uC5D4\uB2E4 \uAC04\uC2DD)"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u99AC\u5C3C\u62C9\u5927\u5B78\u5468\u908A\u8DEF\u908A\u6524\u8ECA", "en": "University belt street carts, Manila", "fil": "U-Belt Maynila", "ja": "\u30DE\u30CB\u30E9\u5927\u5B66\u8857\u5C4B\u53F0", "ko": "\uB9C8\uB2D0\uB77C \uB300\uD559\uAC00 \uAE38\uAC70\uB9AC \uCE74\uD2B8" },
      { "zh-TW": "\u594E\u963F\u5761\u5E02\u5834\u5C0F\u5403\u6524", "en": "Quiapo afternoon merienda stalls", "fil": "Quiapo sa hapon", "ja": "\u30AD\u30A2\u30DD\u5348\u5F8C\u5C4B\u53F0", "ko": "\uD034\uC544\uD3EC \uC624\uD6C4 \uAC04\uC2DD \uB178\uC810" }
    ],
    historyStory: {
      "zh-TW": "Turon\uFF08\u5728\u67D0\u4E9B\u5730\u5340\u4E5F\u7A31 Lumpiang Saging\uFF09\u8D77\u6E90\u65BC\u83F2\u5F8B\u8CD3\u76DB\u7522\u82AD\u8549\u7684\u9109\u6751\u793E\u5340\u3002\u7A2E\u690D\u8FB2\u6C11\u5C07\u904E\u5269\u7684\u6599\u7406\u82AD\u8549\uFF08Saba\uFF09\u5207\u7247\uFF0C\u88F9\u4E0A\u7D05\u7CD6\uFF0C\u5305\u9032\u8584\u6625\u6372\u76AE\u4E2D\u6CB9\u70B8\uFF0C\u4E26\u5728\u8D77\u934B\u524D\u5C07\u7D05\u7CD6\u76F4\u63A5\u6492\u5165\u6EFE\u6CB9\uFF0C\u4F7F\u7CD6\u6F3F\u77AC\u9593\u7126\u7CD6\u5316\u4E26\u7DCA\u7DCA\u5438\u9644\u5728\u6625\u6372\u76AE\u5916\u5C64\uFF0C\u5F62\u6210\u5982\u7425\u73C0\u7409\u7483\u822C\u7684\u8106\u6BBC\u3002\u52A0\u5165\u91D1\u9EC3\u6CE2\u7F85\u871C\u7D72\uFF08Langka\uFF09\u66F4\u6210\u70BA\u5962\u83EF\u5347\u7D1A\u7248\uFF01",
      "en": "Born in rural Philippine communities with abundant plantain groves, farming families rolled sliced Saba bananas in brown sugar, wrapped them in spring roll skins, and fried them. The brilliant street vendor innovation was melting brown sugar straight into the hot oil so it forms a candy-shell glass glaze on the outside!",
      "fil": "Nagsimula sa mga probinsya kung saan marami ang saging na saba. Paboritong meryenda ng mga Pilipino na pinatamis ng asukal na pula at pinalamanan ng langka.",
      "ja": "\u30D0\u30CA\u30CA\u8FB2\u6751\u306E\u77E5\u6075\u304B\u3089\u751F\u307E\u308C\u305F\u56FD\u6C11\u7684\u304A\u3084\u3064\u3002\u6CB9\u306E\u4E2D\u306B\u76F4\u63A5\u9ED2\u7CD6\u3092\u6295\u5165\u3057\u3066\u5916\u5074\u306B\u98F4\u72B6\u306E\u30D1\u30EA\u30D1\u30EA\u30B3\u30FC\u30C6\u30A3\u30F3\u30B0\u3092\u65BD\u3059\u306E\u304C\u5C4B\u53F0\u79D8\u4F1D\u306E\u6280\u6CD5\u3067\u3059\u3002",
      "ko": "\uC0AC\uBC14 \uBC14\uB098\uB098\uAC00 \uD48D\uBD80\uD55C \uC2DC\uACE8\uC5D0\uC11C \uC2DC\uC791\uB41C \uAC04\uC2DD\uC73C\uB85C, \uD280\uAE40\uAE30\uB984\uC5D0 \uD751\uC124\uD0D5\uC744 \uC9C1\uC811 \uB123\uC5B4 \uCD98\uAD8C\uD53C \uAC89\uBA74\uC5D0 \uBC14\uC0AD\uD55C \uC720\uB9AC\uC54C \uCE90\uB7EC\uBA5C \uCF54\uD305\uC744 \uC785\uD788\uB294 \uAC83\uC774 \uD2B9\uC9D5\uC785\uB2C8\uB2E4."
    },
    filipinoScript: "Turon na may Langka",
    filipinoPhonetics: "Too-ron nah may Lang-kah",
    audioPronunciationText: "Manong, pabili po ng apat na bagong pritong mainit na Turon!"
  },
  ingredients: [
    {
      id: "saba-bananas",
      name: { "zh-TW": "\u83F2\u5F8B\u8CD3\u6599\u7406\u82AD\u8549 (Saba Plantains\uFF0C\u7E31\u5411\u5C0D\u534A\u5256\u958B)", "en": "Saba Bananas / Plantains (Sliced lengthwise in half)", "fil": "Saging na Saba (Hati sa gitna)", "ja": "\u30B5\u30D0\u30D0\u30CA\u30CA\uFF08\u30D5\u30A3\u30EA\u30D4\u30F3\u7523\u8ABF\u7406\u7528\u30D0\u30CA\u30CA\u3001\u7E26\u534A\u5206\u306B\u5207\u308B\uFF09", "ko": "\uC0AC\uBC14 \uBC14\uB098\uB098 (\uD50C\uB79C\uD2F4, \uC138\uB85C\uB85C \uBC18 \uAC00\uB984)" },
      amount: 4,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Saging na Saba",
      filipinoPronunciation: "Sah-geeng nang Sah-bah"
    },
    {
      id: "jackfruit",
      name: { "zh-TW": "\u719F\u751C\u6CE2\u7F85\u871C\u7D72 (Langka)", "en": "Ripe Sweet Jackfruit strips (Langka)", "fil": "Minatamis na Langka", "ja": "\u30B8\u30E3\u30C3\u30AF\u30D5\u30EB\u30FC\u30C4\u679C\u8089\uFF08\u7D30\u5207\u308A\uFF09", "ko": "\uB2EC\uCF64\uD55C \uC7AD\uD504\uB8E8\uD2B8 (\uCC44 \uC36C \uAC83)" },
      amount: 80,
      unitMetric: "g",
      unitUS: "2.8 oz",
      isKeyFlavor: true,
      filipinoName: "Langka",
      filipinoPronunciation: "Lang-kah"
    },
    {
      id: "brown-sugar",
      name: { "zh-TW": "\u9ED1\u7CD6\u6216\u4E8C\u7802\u7CD6 (\u88F9\u9999\u8549\u8207\u7126\u7CD6\u8106\u6BBC\u7528)", "en": "Dark Brown Sugar (for dusting and caramel glaze)", "fil": "Pulang Asukal", "ja": "\u9ED2\u7CD6\u307E\u305F\u306F\u4E09\u6E29\u7CD6", "ko": "\uD751\uC124\uD0D5 (\uBC14\uB098\uB098 \uBC84\uBB34\uB9BC \uBC0F \uCE90\uB7EC\uBA5C\uC6A9)" },
      amount: 100,
      unitMetric: "g",
      unitUS: "0.5 cup",
      isKeyFlavor: true,
      filipinoName: "Asukal na Pula",
      filipinoPronunciation: "Ah-soo-kal nah Poo-lah"
    },
    {
      id: "spring-roll-wrappers",
      name: { "zh-TW": "\u8584\u6625\u6372\u76AE", "en": "Spring Roll / Lumpia Wrappers", "fil": "Pabalat ng Lumpia", "ja": "\u6625\u5DFB\u304D\u306E\u76AE", "ko": "\uCD98\uAD8C\uD53C" },
      amount: 8,
      unitMetric: "sheet",
      unitUS: "sheet",
      filipinoName: "Pabalat ng Lumpia",
      filipinoPronunciation: "Pah-bah-laht nang Loom-pyah"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u82AD\u8549\u88F9\u6EFF\u9ED1\u7CD6\u4E26\u92EA\u4E0A\u91D1\u9EC3\u6CE2\u7F85\u871C", "en": "Dredge Bananas in Sugar & Top with Jackfruit", "fil": "Pagulungin ang Saging sa Asukal at Lagyan ng Langka", "ja": "\u30D0\u30CA\u30CA\u306B\u9ED2\u7CD6\u3092\u307E\u3076\u3057\u3001\u30D1\u30E9\u30DF\u30C4\u3092\u6DFB\u3048\u308B", "ko": "\uBC14\uB098\uB098\uC5D0 \uD751\uC124\uD0D5\uC744 \uB4EC\uBFCD \uBB3B\uD788\uACE0 \uC7AD\uD504\uB8E8\uD2B8 \uC5B9\uAE30" },
      instruction: {
        "zh-TW": "\u5C07\u6210\u719F\u5FAE\u751C\u7684 Saba \u82AD\u8549\u7E31\u5411\u5C0D\u5256\u6210\u5169\u534A\u3002\u76E4\u4E2D\u5012\u5165\u9ED1\u7CD6\uFF0C\u5C07\u6BCF\u4E00\u7247\u82AD\u8549\u5728\u9ED1\u7CD6\u4E2D\u7FFB\u6EFE\u88F9\u4E0A\u4E00\u5C64\u539A\u539A\u7684\u7CD6\u8863\u3002\u53D6\u4E00\u5F35\u6625\u6372\u76AE\uFF0C\u653E\u4E0A\u4E00\u7247\u88F9\u7CD6\u82AD\u8549\uFF0C\u5728\u82AD\u8549\u4E0A\u65B9\u92EA\u5165 2-3 \u689D\u91D1\u9EC3\u751C\u6CE2\u7F85\u871C\u7D72\uFF08Langka\uFF09\u3002",
        "en": "Cut ripe Saba bananas in half lengthwise. Roll each banana slice generously in brown sugar until completely coated. Place one sugar-dusted banana slice onto a spring roll wrapper, and arrange 2-3 strips of fragrant sweet jackfruit (langka) on top.",
        "fil": "Hatiin ang saging sa gitna. Pagulungin sa pulang asukal. Ilagay sa pabalat ng lumpia at patungan ng 2-3 pirasong langka.",
        "ja": "\u30B5\u30D0\u30D0\u30CA\u30CA\u3092\u7E26\u534A\u5206\u306B\u5207\u308A\u307E\u3059\u3002\u9ED2\u7CD6\u3092\u5168\u4F53\u306B\u305F\u3063\u3077\u308A\u307E\u3076\u3057\u307E\u3059\u3002\u6625\u5DFB\u304D\u306E\u76AE\u306E\u4E2D\u592E\u306B\u7F6E\u304D\u3001\u4E0A\u306B\u7D30\u5207\u308A\u306E\u30D1\u30E9\u30DF\u30C4\uFF08\u30B8\u30E3\u30C3\u30AF\u30D5\u30EB\u30FC\u30C4\uFF09\u30922\u301C3\u672C\u306E\u305B\u307E\u3059\u3002",
        "ko": "\uC0AC\uBC14 \uBC14\uB098\uB098\uB97C \uC138\uB85C\uB85C \uBC18 \uC790\uB985\uB2C8\uB2E4. \uD751\uC124\uD0D5 \uC704\uC5D0 \uAD74\uB824 \uC124\uD0D5\uC637\uC744 \uC785\uD78C \uB4A4, \uCD98\uAD8C\uD53C \uC704\uC5D0 \uC62C\uB9AC\uACE0 \uADF8 \uC704\uC5D0 \uD5A5\uAE0B\uD55C \uC7AD\uD504\uB8E8\uD2B8 2~3\uC904\uC744 \uC5B9\uC5B4\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 180,
      image: "/images/turon-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u7DCA\u5BC6\u6372\u8D77\u6625\u6372\u76AE\u5C01\u53E3", "en": "Wrap Firmly & Seal Edges with Water", "fil": "Balutin nang Mahigpit at I-seal Gamit ang Tubig", "ja": "\u7AEF\u3092\u6298\u308A\u8FBC\u3093\u3067\u3057\u3063\u304B\u308A\u5DFB\u304D\u3001\u6C34\u3067\u7CCA\u4ED8\u3051\u3059\u308B", "ko": "\uB2E8\uB2E8\uD788 \uB9D0\uC544\uC11C \uBB3C\uB85C \uB05D\uBD80\uBD84 \uBD99\uC774\uAE30" },
      instruction: {
        "zh-TW": "\u5C07\u6625\u6372\u76AE\u5E95\u7AEF\u5F80\u4E0A\u6298\u5305\u4F4F\u82AD\u8549\uFF0C\u5169\u5074\u5411\u5167\u6298\u7DCA\uFF0C\u7DCA\u5BC6\u5411\u524D\u6EFE\u6372\u6210\u5DE5\u6574\u7684\u6241\u9577\u65B9\u5F62\u6625\u6372\u3002\u5C01\u53E3\u8655\u62B9\u4E0A\u5C11\u8A31\u6E05\u6C34\u9ECF\u5408\u3002\u91CD\u8907\u5B8C\u6210\u6240\u6709\u9999\u8549\u6372\u3002",
        "en": "Fold the bottom edge over the banana, tuck in both left and right sides tightly, and roll forward snugly into a neat envelope roll. Dab the final edge with water to seal firmly.",
        "fil": "Irolyo nang mahigpit ang pabalat, itiklop ang magkabilang gilid, at lagyan ng kaunting tubig sa dulo para sumara.",
        "ja": "\u4E0B\u304B\u3089\u6298\u308A\u4E0A\u3052\u3001\u4E21\u7AEF\u3092\u305F\u305F\u3093\u3067\u30AD\u30C4\u30CD\u8272\u306B\u63DA\u304C\u308B\u3088\u3046\u9699\u9593\u306A\u304F\u5DFB\u304D\u4E0A\u3052\u307E\u3059\u3002\u5DFB\u304D\u7D42\u308F\u308A\u306B\u6C34\u3092\u5857\u3063\u3066\u5BC6\u7740\u3055\u305B\u307E\u3059\u3002",
        "ko": "\uC544\uB7AB\uBD80\uBD84\uC744 \uC811\uC5B4 \uC62C\uB9AC\uACE0 \uC591\uC606\uC744 \uC811\uC740 \uB4A4 \uB2E8\uB2E8\uD558\uAC8C \uB9D0\uC544\uC90D\uB2C8\uB2E4. \uB05D\uBD80\uBD84\uC5D0 \uBB3C\uC744 \uBC1C\uB77C \uD480\uB9AC\uC9C0 \uC54A\uAC8C \uBD09\uD569\uD569\uB2C8\uB2E4."
      },
      durationSeconds: 240,
      image: "/images/turon-step2.jpg"
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u6CB9\u934B\u7206\u9999\u7126\u7CD6\uFF0C\u6EFE\u4E0A\u7409\u7483\u8106\u7CD6\u8863\u6216\u6C23\u70B8", "en": "Deep Fry with Floating Caramel or Air Fry", "fil": "Iprito at Pahiran ng Tunaw na Asukal sa Mantika", "ja": "\u6CB9\u306E\u4E2D\u306B\u9ED2\u7CD6\u3092\u5165\u308C\u3066\u63DA\u3052\u3001\u8868\u9762\u306B\u30AB\u30E9\u30E1\u30EB\u3092\u307E\u3068\u308F\u305B\u308B", "ko": "\uAE30\uB984\uC5D0 \uC124\uD0D5\uC744 \uB179\uC5EC \uD280\uAE30\uBA70 \uBC14\uC0AD\uD55C \uCE90\uB7EC\uBA5C \uC637 \uC785\uD788\uAE30" },
      instruction: {
        "zh-TW": "\u3010\u8857\u982D\u50B3\u5947\u7126\u7CD6\u6CD5\u3011\u4E2D\u706B\u71B1\u6CB9\u934B\u81F3 170\xB0C\uFF0C\u4E0B\u9999\u8549\u6372\u70B8 2 \u5206\u9418\u3002\u95DC\u9375\u6642\u523B\u4F86\u4E86\uFF01\u3010\u5728\u6CB9\u934B\u5468\u570D\u6492\u5165 2 \u5927\u5319\u9ED1\u7CD6\u3011\u3002\u9ED1\u7CD6\u9047\u71B1\u6CB9\u6703\u878D\u5316\u6D6E\u5728\u6CB9\u9762\u4E0A\uFF0C\u6B64\u6642\u7528\u7B77\u5B50\u4E0D\u65B7\u6EFE\u52D5\u9999\u8549\u6372\uFF0C\u8B93\u6F02\u6D6E\u7684\u7194\u878D\u9ED1\u7CD6\u5747\u52FB\u9644\u8457\u5728\u5916\u76AE\u4E0A\uFF01\u70B8\u81F3\u6625\u6372\u91D1\u9EC3\u3001\u7126\u7CD6\u767C\u8106\u5373\u53EF\u593E\u51FA\uFF0C\u653E\u5728\u9632\u9ECF\u7DB2\u67B6\u4E0A\u667E\u6DBC\u3002\u3010\u6C23\u70B8\u934B\u6A21\u5F0F\u8ACB\u53C3\u898B\u5207\u63DB\u3011\u3002",
        "en": "Traditional Street Caramel Technique: Heat oil to 170\xB0C (340\xB0F). Fry rolls for 2 mins. NOW THE SECRET: Sprinkle 2 tbsp brown sugar directly into the hot oil! As the sugar melts and floats, roll the turon continuously so the molten caramel clings to the outside shell. Transfer to a rack to harden into a brittle candy shell!",
        "fil": "Iprito ang turon nang 2 minuto. Budburan ng 2 kutsaritang asukal na pula ang mantika habang nagpiprito para dumikit ang arnibal sa balat.",
        "ja": "\u3010\u5C4B\u53F0\u79D8\u4F1D\u306E\u6280\u3011\u6CB9\u3092170\u2103\u306B\u71B1\u30572\u5206\u63DA\u3052\u307E\u3059\u3002\u3053\u3053\u3067\u3010\u6CB9\u306E\u4E2D\u306B\u76F4\u63A5\u9ED2\u7CD6\u5927\u3055\u30582\u3092\u6295\u5165\uFF01\u3011\u3002\u6EB6\u3051\u3066\u6D6E\u304D\u4E0A\u304C\u3063\u3066\u304D\u305F\u30AB\u30E9\u30E1\u30EB\u3092\u7D61\u3081\u308B\u3088\u3046\u306B\u8EE2\u304C\u3057\u306A\u304C\u3089\u63DA\u3052\u3001\u98F4\u72B6\u306E\u76AE\u306B\u4ED5\u4E0A\u3052\u307E\u3059\u3002\u7DB2\u306E\u4E0A\u3067\u51B7\u307E\u3059\u3068\u30D1\u30EA\u30D1\u30EA\u306B\u56FA\u307E\u308A\u307E\u3059\u3002",
        "ko": "\u3010\uB178\uC810 \uBE44\uBC95\u3011 170\uB3C4 \uAE30\uB984\uC5D0 2\uBD84\uAC04 \uD280\uAE34 \uB4A4, \u3010\uAE30\uB984 \uC18D\uC5D0 \uD751\uC124\uD0D5 2\uD070\uC220\uC744 \uC194\uC194 \uBFCC\uB9BD\uB2C8\uB2E4\u3011! \uB179\uC544 \uB5A0\uC624\uB978 \uCE90\uB7EC\uBA5C\uC5D0 \uCD98\uAD8C\uC744 \uAD74\uB824 \uAC89\uBA74\uC5D0 \uB2EC\uCF64\uD55C \uD0D5\uD6C4\uB8E8 \uCF54\uD305\uC744 \uC785\uD600\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 300,
      image: "/images/turon-step3.jpg",
      cookwareVariations: [
        {
          cookware: "airFryer",
          tempAndSetting: "Air Fryer: 195\xB0C (385\xB0F) for 8-10 mins (Brush with oil & melted brown sugar)",
          instructionOverride: {
            "zh-TW": "\u6C23\u70B8\u934B\u6A21\u5F0F\uFF1A\u5C07\u9999\u8549\u6372\u8868\u9762\u5237\u4E0A\u4E00\u5C64\u6CB9\uFF0C\u518D\u5237\u4E0A\u4E00\u5C64\u539A\u539A\u7684\u9ED1\u7CD6\u6C34\uFF08\u6216\u6EFE\u4E00\u5C64\u9ED1\u7CD6\u7C92\uFF09\u3002\u653E\u5165\u6C23\u70B8\u934B 195\xB0C \u6C23\u70B8 8-10 \u5206\u9418\uFF0C\u4E2D\u9014\u7FFB\u9762\uFF0C\u5916\u76AE\u7126\u7CD6\u878D\u5316\u786C\u8106\uFF0C\u5167\u9921\u8EDF\u751C\u878D\u5316\uFF01",
            "en": "Air Fryer Variation: Generously brush rolls with cooking oil, then brush with thick brown sugar syrup or roll in brown sugar. Air fry at 195\xB0C (385\xB0F) for 8-10 mins, turning halfway, until bubbling, golden, and brittle.",
            "fil": "Paraan sa Air Fryer: Pahiran ng mantika at pulang asukal. I-air fry sa 195\xB0C nang 8-10 minuto hanggang lumutong.",
            "ja": "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u8A2D\u5B9A\uFF1A\u8868\u9762\u306B\u6CB9\u3092\u5857\u308A\u3001\u9ED2\u7CD6\u30B7\u30ED\u30C3\u30D7\uFF08\u307E\u305F\u306F\u9ED2\u7CD6\uFF09\u3092\u307E\u3076\u3057\u3066195\u2103\u30678\u301C10\u5206\u52A0\u71B1\u3002\u30AB\u30E9\u30E1\u30EB\u304C\u30AB\u30EA\u30C3\u3068\u4ED5\u4E0A\u304C\u308A\u307E\u3059\u3002",
            "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uC124\uC815: \uD45C\uBA74\uC5D0 \uC624\uC77C\uC744 \uBC14\uB974\uACE0 \uD751\uC124\uD0D5 \uC2DC\uB7FD\uC744 \uB367\uBC14\uB978 \uB4A4 195\xB0C\uC5D0\uC11C 8~10\uBD84\uAC04 \uAD6C\uC6CC \uBC14\uC0AD\uD55C \uCE90\uB7EC\uBA5C \uC637\uC744 \uC644\uC131\uD569\uB2C8\uB2E4."
          }
        }
      ]
    }
  ],
  troubleshooting: [
    {
      id: "soggy-crust",
      problem: { "zh-TW": "\u51FA\u934B\u5F8C\u5916\u76AE\u8FC5\u901F\u56DE\u8EDF\uFF0C\u7126\u7CD6\u9ECF\u7CCA\u4E0D\u8106", "en": "Caramel remains sticky and crust turns soggy quickly", "fil": "Malagkit at hindi naging malutong ang balat", "ja": "\u63DA\u3052\u305F\u5F8C\u306B\u3059\u3050\u76AE\u304C\u30B7\u30CA\u30B7\u30CA\u306B\u306A\u3063\u3066\u30AB\u30EA\u30C3\u3068\u3057\u306A\u3044", "ko": "\uD280\uAE34 \uD6C4 \uAECD\uC9C8\uC774 \uAE08\uBC29 \uB205\uB205\uD574\uC9C0\uACE0 \uBC14\uC0AD\uD558\uC9C0 \uC54A\uC74C" },
      cause: { "zh-TW": "\u51FA\u934B\u5F8C\u76F4\u63A5\u91CD\u758A\u5806\u5728\u5438\u6CB9\u7D19\u4E0A\uFF0C\u71B1\u6C34\u6C23\u60B6\u8EDF\u4E86\u5916\u76AE", "en": "Piled on top of each other over paper towels, trapping steam", "fil": "Pinagpatong-patong habang mainit kaya nagpawis", "ja": "\u63DA\u3052\u305F\u3066\u3092\u30DA\u30FC\u30D1\u30FC\u306E\u4E0A\u306B\u91CD\u306D\u3066\u7F6E\u304D\u3001\u6E6F\u6C17\u3067\u6E7F\u6C17\u3066\u3057\u307E\u3063\u305F\u305F\u3081", "ko": "\uB728\uAC70\uC6B4 \uC0C1\uD0DC\uC5D0\uC11C \uD0A4\uCE5C\uD0C0\uC6D4 \uC704\uC5D0 \uACB9\uCCD0 \uC313\uC544 \uC218\uC99D\uAE30\uAC00 \uAC07\uD614\uC74C" },
      solution: {
        "zh-TW": "\u51FA\u934B\u5F8C\u5207\u8A18\u4E0D\u8981\u7528\u5EDA\u623F\u7D19\u5DFE\u5E73\u653E\u91CD\u758A\uFF01\u5FC5\u9808\u55AE\u7368\u7ACB\u5728\u91D1\u5C6C\u51B7\u537B\u7DB2\u67B6\u4E0A\u5206\u958B\u64FA\u653E\uFF0C\u901A\u98A8 2 \u5206\u9418\u5F8C\u7126\u7CD6\u5C31\u6703\u77AC\u9593\u51B7\u537B\u786C\u5316\u5982\u73BB\u7483\uFF01",
        "en": "Never pile turon on paper towels! Place them separately on a wire cooling rack so hot air escapes and the caramel crystallizes into glass.",
        "fil": "Patuyuin sa wire rack nang nakahiwalay upang tumigas ang arnibal.",
        "ja": "\u30DA\u30FC\u30D1\u30FC\u306B\u306F\u7F6E\u304B\u305A\u3001\u7DB2\u306E\u4E0A\u306B\u91CD\u306A\u3089\u306A\u3044\u3088\u3046\u7ACB\u3066\u3066\u51B7\u307E\u3057\u307E\u3059\u3002\u7A7A\u6C17\u306B\u89E6\u308C\u308B\u30682\u5206\u3067\u30AC\u30E9\u30B9\u306E\u3088\u3046\u306B\u30D1\u30EA\u30C3\u3068\u56FA\u307E\u308A\u307E\u3059\u3002",
        "ko": "\uD0A4\uCE5C\uD0C0\uC6D4\uC5D0 \uACB9\uCCD0\uB450\uC9C0 \uB9D0\uACE0 \uC2DD\uD798\uB9DD \uC704\uC5D0 \uB530\uB85C\uB530\uB85C \uC62C\uB824\uB450\uC138\uC694. 2\uBD84\uB9CC \uD55C \uAE40 \uC2DD\uD788\uBA74 \uC720\uB9AC\uC54C\uCC98\uB7FC \uB531\uB531\uD558\uAC8C \uAD73\uC2B5\uB2C8\uB2E4."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u51B0\u706B\u4EA4\u878D\u5962\u83EF\u5403\u6CD5\u3011\uFF1A\u525B\u51FA\u934B\u9084\u71D9\u53E3\u7684\u9165\u8106 Turon \u6A6B\u5207\u6210\u5169\u6BB5\uFF0C\u76E4\u4E2D\u6316\u4E0A\u4E00\u5927\u7403\u51B0\u6DBC\u900F\u9802\u7684\u9999\u8349\u6216\u7D2B\u85AF\u51B0\u6DC7\u6DCB\uFF08Turon a la Mode\uFF09\uFF0C\u6DCB\u4E0A\u4E00\u9EDE\u6D77\u9E7D\u7126\u7CD6\u91AC\uFF0C\u51B0\u8207\u706B\u5728\u53E3\u4E2D\u4EA4\u878D\uFF0C\u662F\u4E94\u661F\u7D1A\u98EF\u5E97\u4E0B\u5348\u8336\u6975\u81F4\u4E4B\u4F5C\uFF01",
      "en": "Turon \xE0 la Mode: Serve scorching hot, freshly fried turon alongside a massive scoop of cold vanilla or ube ice cream. The temperature contrast between molten caramel and frosty ice cream is pure bliss!",
      "fil": "Turon a la Mode: Napakasarap kapag ipinares ang mainit na turon sa malamig na sorbetes na ube o vanilla!",
      "ja": "\u30C8\u30A5\u30ED\u30F3\u30FB\u30A2\u30FB\u30E9\u30FB\u30E2\u30FC\u30C9\uFF1A\u63DA\u3052\u305F\u3066\u30A2\u30C4\u30A2\u30C4\u306E\u30C8\u30A5\u30ED\u30F3\u306B\u3001\u51B7\u305F\u3044\u30A6\u30D9\u30A2\u30A4\u30B9\uFF08\u307E\u305F\u306F\u30D0\u30CB\u30E9\u30A2\u30A4\u30B9\uFF09\u3092\u6DFB\u3048\u3066\u3002\u71B1\u3055\u3068\u51B7\u305F\u3055\u306E\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u304C\u7D76\u54C1\u3067\u3059\uFF01",
      "ko": "\uD22C\uB860 \uC544 \uB77C \uBAA8\uB4DC: \uAC13 \uD280\uACA8 \uB728\uAC70\uC6B4 \uD22C\uB860 \uC606\uC5D0 \uCC28\uAC00\uC6B4 \uC6B0\uBCA0\uB098 \uBC14\uB2D0\uB77C \uC544\uC774\uC2A4\uD06C\uB9BC\uC744 \uACC1\uB4E4\uC5EC\uBCF4\uC138\uC694. \uC785\uC548\uC5D0\uC11C \uD3BC\uCCD0\uC9C0\uB294 \uC628\uB0C9\uC758 \uC870\uD654\uAC00 \uC608\uC220\uC785\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/taho.ts
var taho = {
  id: "taho",
  slug: "taho",
  title: {
    "zh-TW": "\u99AC\u5C3C\u62C9\u6E05\u6668\u9ED1\u7CD6\u73CD\u73E0\u8C46\u82B1 (Warm Taho)",
    "en": "Warm Silken Tofu with Arnibal Syrup & Sago Pearls (Taho)",
    "fil": "Mainit na Taho na may Arnibal at Sago",
    "ja": "\u672C\u5834\u6E29\u304B\u3044\u30BF\u30DB\uFF08\u9ED2\u7CD6\u30B7\u30ED\u30C3\u30D7\u3068\u30BF\u30D4\u30AA\u30AB\u306E\u30D5\u30A3\u30EA\u30D4\u30F3\u98A8\u51FA\u6765\u7ACB\u3066\u8C46\u82B1\uFF09",
    "ko": "\uD544\uB9AC\uD540 \uC544\uCE68\uC758 \uC18C\uC6B8 \uD478\uB4DC \uB530\uB73B\uD55C \uD0C0\uD638 (\uD751\uB2F9 \uC2DC\uB7FD \uD0C0\uD53C\uC624\uCE74 \uC21C\uB450\uBD80)"
  },
  subtitle: {
    "zh-TW": "\u6E05\u6668\u5C0F\u5DF7\u60A0\u63DA\u53EB\u8CE3\u8072\u30FB\u6975\u81F4\u5AE9\u6ED1\u6EAB\u71B1\u8C46\u82B1\u30FB\u7425\u73C0\u9ED1\u7CD6\u871C\u8207\uFF31\u5F48\u897F\u7C73\u9732",
    "en": "The Iconic Street Call of Manila Mornings: Steaming Silken Tofu, Warm Caramel Arnibal & Chewy Sago",
    "fil": 'Boses ng magtataho tuwing umaga: "Taho-ooo!" na may matamis na arnibal at malambot na sago',
    "ja": "\u30DE\u30CB\u30E9\u306E\u671D\u3092\u544A\u3052\u308B\u300C\u30BF\u30DB\u30FC\uFF01\u300D\u306E\u639B\u3051\u58F0\u3002\u6E29\u304B\u3044\u304A\u307C\u308D\u8C46\u8150\u306B\u9ED2\u7CD6\u871C\u304C\u7D61\u3080\u7652\u3057\u306E\u5473",
    "ko": '\uACE8\uBAA9\uAE38\uC744 \uAE68\uC6B0\uB294 "\uD0C0\uD638~!" \uC678\uCE68. \uBD80\uB4DC\uB7EC\uC6B4 \uC628\uB450\uBD80\uC5D0 \uB2EC\uCF64\uD55C \uD751\uB2F9 \uC2DC\uB7FD\uACFC \uCAC4\uAE43\uD55C \uC0AC\uACE0 \uD384'
  },
  tagline: {
    "zh-TW": "\u6311\u8457\u6241\u64D4\u7684\u8C46\u82B1\u8001\u7239\u8D70\u904D\u8857\u982D\uFF0C\u6367\u4E0A\u4E00\u676F\u6696\u624B\u6696\u80C3\u7684\u6975\u81F4\u9999\u751C\u6668\u5149",
    "en": "Hawked from iconic silver aluminum buckets across every Philippine neighborhood at dawn",
    "fil": "Paboritong almusal at meryenda ng mga bata at matanda sa kalsada",
    "ja": "\u5929\u79E4\u68D2\u3092\u62C5\u3044\u3060\u884C\u5546\u4EBA\u304C\u58F2\u308B\u51FA\u6765\u7ACB\u3066\u306E\u6E29\u3082\u308A\u3002\u30D5\u30A3\u30EA\u30D4\u30F3\u4EBA\u306E\u671D\u306B\u6B20\u304B\u305B\u306A\u3044\u4E00\u676F",
    "ko": "\uC740\uC0C9 \uD1B5\uC744 \uBA58 \uD589\uC0C1 \uC544\uC800\uC528\uAC00 \uAC74\uB124\uB294 \uB530\uC2A4\uD55C \uC544\uCE68\uC758 \uC120\uBB3C, \uC601\uD63C\uC744 \uB2EC\uB798\uC8FC\uB294 \uB2EC\uCF64\uD568"
  },
  heroImage: "/images/taho.jpg",
  difficulty: "easy",
  prepTimeMinutes: 10,
  cookTimeMinutes: 15,
  defaultServings: 2,
  caloriesPerServing: 210,
  category: "desserts",
  dietaryTags: ["classic", "vegetarian", "vegan", "glutenFree"],
  supportedCookware: ["traditional"],
  culture: {
    originRegion: {
      "zh-TW": "\u99AC\u5C3C\u62C9\u8001\u57CE\u5340\u8207\u5168\u83F2\u5F8B\u8CD3\u6E05\u6668\u8857\u5DF7 (Dawn Street Hawkers)",
      "en": "Street corners across the entire Philippine archipelago at dawn",
      "fil": "Bawat Barangay sa Pilipinas tuwing umaga",
      "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u5168\u571F\u306E\u65E9\u671D\u30B9\u30C8\u30EA\u30FC\u30C8",
      "ko": "\uD544\uB9AC\uD540 \uC804\uC5ED \uC544\uCE68 \uACE8\uBAA9\uAE38"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u99AC\u5C3C\u62C9\u9ECE\u524E\u516C\u5712\u6668\u5149\u8857\u908A", "en": "Rizal Park Morning Walk, Manila", "fil": "Luneta Park sa umaga", "ja": "\u30DE\u30CB\u30E9\u30FB\u30EA\u30B5\u30FC\u30EB\u516C\u5712", "ko": "\uB9C8\uB2D0\uB77C \uB9AC\uC798 \uACF5\uC6D0 \uC544\uCE68 \uC0B0\uCC45\uAE38" },
      { "zh-TW": "\u78A7\u7464\u5E02\u8349\u8393\u8C46\u82B1\u8857\u5340 (Baguio Strawberry Taho)", "en": "Baguio City Heritage Strawberry Taho Stalls", "fil": "Baguio City (Strawberry Taho)", "ja": "\u30D0\u30AE\u30AA\u5E02\u30B9\u30C8\u30ED\u30D9\u30EA\u30FC\u30FB\u30BF\u30DB", "ko": "\uBC14\uAE30\uC624 \uC2DC\uD2F0 \uB538\uAE30 \uD0C0\uD638 \uAC70\uB9AC" }
    ],
    historyStory: {
      "zh-TW": "Taho \u6E90\u81EA\u95A9\u5357\u8A9E\u7684\u300C\u8C46\u82B1\u300D\uFF08T\u0101u-hue\uFF09\u3002\u6578\u500B\u4E16\u7D00\u524D\u50B3\u5165\u99AC\u5C3C\u62C9\u5F8C\uFF0C\u6F14\u8B8A\u70BA\u6975\u5177\u7279\u8272\u7684\u8857\u982D\u578B\u614B\uFF1A\u5C0F\u8CA9\uFF08Magtataho\uFF09\u80A9\u6311\u4E00\u6839\u7AF9\u6241\u64D4\uFF0C\u5169\u982D\u5404\u639B\u4E00\u500B\u5713\u67F1\u5F62\u4EAE\u9280\u8272\u92C1\u6876\uFF0C\u4E00\u6876\u88DD\u8457\u6EFE\u71D9\u6975\u5AE9\u7684\u8C46\u8150\u8166\uFF0C\u53E6\u4E00\u6876\u88DD\u8457\u716E\u900F\u7684\u9ED1\u8272\u6728\u85AF\u5C0F\u73CD\u73E0\uFF08Sago\uFF09\u8207\u6DF1\u9ED1\u6FC3\u9187\u7684\u9ED1\u7CD6\u871C\uFF08Arnibal\uFF09\u3002\u96A8\u8457\u4E00\u8072\u9AD8\u4EA2\u60A0\u63DA\u7684\u300CTaho-ooo!\u300D\uFF0C\u5C45\u6C11\u7D1B\u7D1B\u5E36\u8457\u99AC\u514B\u676F\u4E0B\u6A13\u8CFC\u8CB7\u3002",
      "en": 'Derived from Hokkien "T\u0101u-hue" (soy curd), the Filipino Magtataho (taho peddler) carries two large aluminum tins balanced on a bamboo yoke across his shoulders. One bucket holds steaming silken tofu, while the other holds chewy sago pearls and warm caramelized dark brown sugar syrup (Arnibal). The vendor\u2019s iconic baritone cry of "Taho-ooo!" is the sound of Philippine sunrise.',
      "fil": 'Galing sa salitang Hokkien na "tau-hue". Kilala ang magtataho na may dalang dalawang balde sa pingga habang sumisigaw ng "Taho!" sa bawat kanto.',
      "ja": "\u798F\u5EFA\u306E\u300C\u8C46\u82B1\uFF08\u30C8\u30A6\u30D5\u30A1\uFF09\u300D\u304C\u30EB\u30FC\u30C4\u3002\u5929\u79E4\u68D2\u306E\u4E21\u7AEF\u306B\u30B7\u30EB\u30D0\u30FC\u306E\u30D0\u30B1\u30C4\u3092\u63D0\u3052\u3001\u300C\u30BF\u30DB\u30FC\uFF01\u300D\u3068\u6717\u3005\u3068\u53EB\u3073\u306A\u304C\u3089\u6B69\u304F\u884C\u5546\u4EBA\u306F\u3001\u30D5\u30A3\u30EA\u30D4\u30F3\u306E\u671D\u3092\u8C61\u5FB4\u3059\u308B\u8A69\u60C5\u3042\u3075\u308C\u308B\u5149\u666F\u3067\u3059\u3002",
      "ko": '\uD478\uC820\uC131 "\uB450\uD654(\u8C46\u82B1)"\uC5D0\uC11C \uC2DC\uC791\uB41C \uC74C\uC2DD\uC73C\uB85C, \uC740\uC0C9 \uC6D0\uD1B5 \uB450 \uAC1C\uB97C \uBA58 \uD589\uC0C1 \uC544\uC800\uC528\uAC00 "\uD0C0\uD638~!"\uB77C\uACE0 \uC678\uCE58\uBA74 \uC9D1\uC9D1\uB9C8\uB2E4 \uCEF5\uC744 \uB4E4\uACE0\uB098\uC640 \uB530\uB048\uD55C \uB450\uBD80\uB97C \uBC1B\uC544\uBA39\uB294 \uC815\uACA8\uC6B4 \uD48D\uACBD\uC785\uB2C8\uB2E4.'
    },
    filipinoScript: "Mainit na Taho",
    filipinoPhonetics: "Mah-ee-neet nah Tah-hoh",
    audioPronunciationText: "Kuya Magtataho, pabili po ng isang malaking baso ng mainit na Taho!"
  },
  ingredients: [
    {
      id: "silken-tofu",
      name: { "zh-TW": "\u8D85\u5AE9\u7D14\u8C46\u8150\u82B1\u6216\u5AE9\u8C46\u8150 (\u5FAE\u6CE2\u6216\u9694\u6C34\u84B8\u71B1)", "en": "Fresh Silken Tofu (steamed warm)", "fil": "Malambot na Tokwa (Silken Tofu)", "ja": "\u7D79\u3054\u3057\u8C46\u8150\u307E\u305F\u306F\u51FA\u6765\u7ACB\u3066\u304A\u307C\u308D\u8C46\u8150\uFF08\u6E29\u3081\u308B\uFF09", "ko": "\uBD80\uB4DC\uB7EC\uC6B4 \uC21C\uB450\uBD80 \uB610\uB294 \uC5F0\uB450\uBD80 (\uB530\uB73B\uD558\uAC8C \uB370\uC6C0)" },
      amount: 400,
      unitMetric: "g",
      unitUS: "14 oz",
      isKeyFlavor: true,
      filipinoName: "Tofu / Tokwa",
      filipinoPronunciation: "Toh-foo"
    },
    {
      id: "dark-brown-sugar",
      name: { "zh-TW": "\u6DF1\u9ED1\u7D05\u7CD6\u6216\u9ED1\u7CD6 (Muscovado / Dark Brown Sugar)", "en": "Dark Muscovado / Dark Brown Sugar", "fil": "Pulang Asukal (Muscovado)", "ja": "\u9ED2\u7CD6\u307E\u305F\u306F\u30E2\u30B9\u30B3\u30D0\u30C9\u7CD6\uFF08\u672A\u7CBE\u88FD\u9ED2\u7CD6\uFF09", "ko": "\uB2E4\uD06C \uBA38\uC2A4\uCF54\uBC14\uB3C4 \uD751\uC124\uD0D5" },
      amount: 150,
      unitMetric: "g",
      unitUS: "0.75 cup",
      isKeyFlavor: true,
      filipinoName: "Muscovado",
      filipinoPronunciation: "Moos-koh-vah-doh"
    },
    {
      id: "pandan-leaf",
      name: { "zh-TW": "\u65B0\u9BAE\u9999\u862D\u8449 (\u6253\u7D50\uFF0C\u71AC\u716E\u9ED1\u7CD6\u871C\u9999\u6C23\u9748\u9B42)", "en": "Fresh Pandan Leaf (Knotted for syrup infusion)", "fil": "Dahon ng Pandan", "ja": "\u30D1\u30F3\u30C0\u30F3\u30EA\u30FC\u30D5\uFF08\u7D50\u3073\u76EE\u3092\u4F5C\u308B\uFF09", "ko": "\uD310\uB2E8 \uC78E (\uBB36\uC5B4\uC11C \uC2DC\uB7FD\uC5D0 \uD5A5 \uB0B4\uAE30)" },
      amount: 1,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Dahon ng Pandan",
      filipinoPronunciation: "Dah-hon nang Pahn-dahn"
    },
    {
      id: "sago-pearls",
      name: { "zh-TW": "\u5C0F\u7C92\u897F\u7C73\u9732 / \u73CD\u73E0 (\u716E\u900F\u81F3\u534A\u900F\u660E\uFF31\u5F48)", "en": "Small Sago / Tapioca Pearls (Cooked tender)", "fil": "Sago Pearls", "ja": "\u5C0F\u7C92\u30BF\u30D4\u30AA\u30AB\u30D1\u30FC\u30EB\uFF08\u900F\u660E\u306B\u8339\u3067\u308B\uFF09", "ko": "\uC791\uC740 \uC0AC\uACE0 \uD384 / \uD0C0\uD53C\uC624\uCE74 (\uD22C\uBA85\uD558\uAC8C \uC0B6\uC740 \uAC83)" },
      amount: 80,
      unitMetric: "g",
      unitUS: "2.8 oz",
      isKeyFlavor: true,
      filipinoName: "Sago",
      filipinoPronunciation: "Sah-goh"
    },
    {
      id: "water-for-syrup",
      name: { "zh-TW": "\u6E05\u6C34 (\u716E\u9ED1\u7CD6\u871C)", "en": "Water (for Arnibal brown syrup)", "fil": "Tubig para sa Arnibal", "ja": "\u6C34\uFF08\u9ED2\u7CD6\u30B7\u30ED\u30C3\u30D7\u7528\uFF09", "ko": "\uBB3C (\uC2DC\uB7FD\uC6A9)" },
      amount: 120,
      unitMetric: "ml",
      unitUS: "0.5 cup",
      filipinoName: "Tubig",
      filipinoPronunciation: "Too-beeg"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u6162\u706B\u7D30\u71AC\u9999\u862D\u9ED1\u7CD6\u871C (Arnibal)", "en": "Simmer Aromatic Pandan Brown Sugar Syrup (Arnibal)", "fil": "Lutuin ang Mabangong Arnibal na may Pandan", "ja": "\u30D1\u30F3\u30C0\u30F3\u9999\u308B\u9ED2\u7CD6\u30B7\u30ED\u30C3\u30D7\uFF08\u30A2\u30EB\u30CB\u30D0\u30EB\uFF09\u3092\u4F5C\u308B", "ko": "\uD5A5\uAE0B\uD55C \uD310\uB2E8 \uD751\uB2F9 \uC2DC\uB7FD(\uC544\uB974\uB2C8\uBC1C) \uC878\uC774\uAE30" },
      instruction: {
        "zh-TW": "\u5C0F\u5976\u934B\u4E2D\u5012\u5165\u9ED1\u7CD6\u8207 120ml \u6E05\u6C34\uFF0C\u653E\u5165\u6D17\u6DE8\u6253\u7D50\u7684\u9999\u862D\u8449\u3002\u5C0F\u706B\u6162\u71AC\u7D04 6-8 \u5206\u9418\uFF0C\u8F15\u8F15\u652A\u62CC\u8B93\u9ED1\u7CD6\u5B8C\u5168\u878D\u5316\uFF0C\u7CD6\u6F3F\u8B8A\u6FC3\u7A20\u6CB9\u4EAE\uFF0C\u6563\u767C\u51FA\u6DF1\u9083\u7684\u7126\u7CD6\u8207\u9999\u862D\u82AC\u82B3\u3002\u95DC\u706B\u593E\u51FA\u9999\u862D\u8449\uFF0C\u9ED1\u7CD6\u871C\u4FDD\u6EAB\u5099\u7528\u3002",
        "en": "In a small saucepan, combine dark brown/muscovado sugar, water, and knotted pandan leaf. Simmer gently over medium-low heat for 6-8 mins until sugar dissolves into a glossy, fragrant amber syrup (Arnibal). Discard pandan leaf and keep warm.",
        "fil": "Pakuluan ang asukal na pula, tubig, at dahon ng pandan nang 6-8 minuto sa mahinang apoy hanggang maging malapot na arnibal.",
        "ja": "\u5C0F\u934B\u306B\u9ED2\u7CD6\u3001\u6C34\u3001\u7D50\u3093\u3060\u30D1\u30F3\u30C0\u30F3\u30EA\u30FC\u30D5\u3092\u5165\u308C\u3001\u5F31\u706B\u30676\u301C8\u5206\u52A0\u71B1\u3002\u9ED2\u7CD6\u304C\u6EB6\u3051\u3066\u30C4\u30E4\u306E\u3042\u308B\u30B7\u30ED\u30C3\u30D7\u306B\u306A\u3063\u305F\u3089\u8449\u3092\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002",
        "ko": "\uB0C4\uBE44\uC5D0 \uD751\uC124\uD0D5, \uBB3C, \uBB36\uC740 \uD310\uB2E8 \uC78E\uC744 \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C 6~8\uBD84\uAC04 \uB053\uC5EC \uC724\uAE30 \uD750\uB974\uB294 \uD751\uB2F9 \uC2DC\uB7FD\uC744 \uC644\uC131\uD569\uB2C8\uB2E4."
      },
      durationSeconds: 480,
      image: "/images/taho-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u6EAB\u71B1\u5AE9\u8C46\u8150\u82B1\u4E26\u701D\u4E7E\u6C34\u6C23", "en": "Steam Warm Silken Tofu & Drain Liquid", "fil": "Painitin ang Tokwa sa Pasingawan", "ja": "\u7D79\u3054\u3057\u8C46\u8150\u3092\u84B8\u3057\u3066\u6E29\u3081\u3001\u4F59\u5206\u306A\u6C34\u6C17\u3092\u5207\u308B", "ko": "\uC21C\uB450\uBD80\uB97C \uB530\uB73B\uD558\uAC8C \uCC0C\uACE0 \uC218\uBD84 \uBE7C\uAE30" },
      instruction: {
        "zh-TW": "\u5C07\u65B0\u9BAE\u5AE9\u8C46\u8150\u6216\u76D2\u88DD\u8D85\u5AE9\u8C46\u8150\u79FB\u5165\u7897\u4E2D\uFF0C\u9694\u6C34\u84B8 5-8 \u5206\u9418\uFF08\u6216\u7528\u5FAE\u6CE2\u7210\u4E2D\u706B\u6EAB\u71B1 1.5 \u5206\u9418\uFF09\u3002\u5012\u6389\u84B8\u51FA\u591A\u9918\u7684\u6E05\u6C34\uFF0C\u4FDD\u6301\u8C46\u8150\u6EAB\u71B1\u8EDF\u5AE9\u3002",
        "en": "Steam silken tofu in a heatproof dish for 5-8 mins (or microwave gently on medium power for 1.5 mins) until hot. Gently drain any excess standing water.",
        "fil": "Pasingawan ang tokwa nang 5-8 minuto hanggang uminit. Itapon ang labis na tubig.",
        "ja": "\u7D79\u8C46\u8150\u3092\u8010\u71B1\u76BF\u306B\u306E\u305B\u3001\u84B8\u3057\u5668\u30675\u301C8\u5206\u6E29\u3081\u307E\u3059\uFF08\u96FB\u5B50\u30EC\u30F3\u30B8\u30671\u5206\u534A\u3067\u3082\u53EF\uFF09\u3002\u51FA\u305F\u6C34\u5206\u306F\u512A\u3057\u304F\u6368\u3066\u307E\u3059\u3002",
        "ko": "\uC21C\uB450\uBD80\uB97C \uADF8\uB987\uC5D0 \uB2F4\uC544 \uCC1C\uAE30\uC5D0 5~8\uBD84\uAC04 \uCA84\uC11C \uB530\uB048\uD558\uAC8C \uB370\uC6C1\uB2C8\uB2E4. \uBC30\uC5B4 \uB098\uC628 \uBB3C\uC740 \uC0B4\uC9DD \uB530\uB77C \uBC84\uB9BD\uB2C8\uB2E4."
      },
      durationSeconds: 360,
      image: "/images/taho-step2.jpg"
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u795E\u7D1A\u624B\u6CD5\u7247\u8C46\u82B1\uFF0C\u6F86\u6DCB\u9ED1\u7CD6\u871C\u8207\u897F\u7C73\u9732", "en": "Skim Thin Flakes, Pour Arnibal & Sago", "fil": "Hiwain nang Maninipis at Lagyan ng Arnibal at Sago", "ja": "\u8584\u304F\u3059\u304F\u3044\u53D6\u308A\u3001\u9ED2\u7CD6\u871C\u3068\u30BF\u30D4\u30AA\u30AB\u3092\u305F\u3063\u3077\u308A\u6CE8\u3050", "ko": "\uC21F\uAC00\uB77D\uC73C\uB85C \uC587\uAC8C \uD3EC \uB728\uB4EF \uB5A0 \uB2F4\uACE0 \uC2DC\uB7FD\uACFC \uD384 \uBD93\uAE30" },
      instruction: {
        "zh-TW": "\u4EFF\u6548\u8DEF\u908A\u8C46\u82B1\u8001\u7239\u7684\u624B\u6CD5\uFF1A\u7528\u4E00\u628A\u5927\u5E73\u91D1\u5C6C\u52FA\uFF0C\u6CBF\u8457\u6EAB\u71B1\u8C46\u8150\u8868\u9762\u3010\u8F15\u8F15\u7247\u51FA\u4E00\u5C64\u5C64\u8584\u5982\u82B1\u74E3\u7684\u6ED1\u5AE9\u8C46\u82B1\u3011\uFF0C\u8200\u5165\u73BB\u7483\u676F\u4E2D\u3002\u5728\u9802\u5C64\u6DCB\u4E0A 2-3 \u5927\u5319\u71B1\u9A30\u9A30\u7684\u6FC3\u9999\u9ED1\u7CD6\u871C\uFF0C\u518D\u92EA\u4E0A\u5169\u5927\u52FA\u6676\u7469\u5254\u900F\u7684\uFF31\u5F48\u897F\u7C73\u9732\u3002\u62FF\u5C0F\u52FA\u5B50\u8D81\u71B1\u5927\u53E3\u8200\u8457\u5403\uFF01",
        "en": "Mimic the street vendor\u2019s artistry: using a flat metal spoon, skim paper-thin layers of steaming silken tofu and layer them into clear glasses. Drizzle generously with 2-3 tbsp of warm dark Arnibal syrup and spoon glistening sago pearls on top. Eat warm with a spoon or drink straight from the cup!",
        "fil": "Gamit ang kutsara, hiwain nang manipis ang tokwa at ilagay sa baso. Buhusan ng mainit na arnibal at sago bago higupin!",
        "ja": "\u5E73\u3089\u306A\u30B9\u30D7\u30FC\u30F3\u3067\u8C46\u8150\u306E\u8868\u9762\u3092\u82B1\u3073\u3089\u306E\u3088\u3046\u306B\u8584\u304F\u524A\u304E\u53D6\u3063\u3066\u30B0\u30E9\u30B9\u306B\u5165\u308C\u307E\u3059\u3002\u71B1\u3005\u306E\u9ED2\u7CD6\u871C\u3092\u56DE\u3057\u304B\u3051\u3001\u30BF\u30D4\u30AA\u30AB\u3092\u30C8\u30C3\u30D4\u30F3\u30B0\u3002\u30B9\u30D7\u30FC\u30F3\u3067\u6DF7\u305C\u306A\u304C\u3089\u6E29\u304B\u3044\u3046\u3061\u306B\u3044\u305F\u3060\u304D\u307E\u3059\uFF01",
        "ko": "\uB0A9\uC791\uD55C \uC2A4\uD47C\uC73C\uB85C \uC21C\uB450\uBD80\uB97C \uAF43\uC78E\uCC98\uB7FC \uC587\uAC8C \uD3EC \uB5A0\uC11C \uC794\uC5D0 \uB2F4\uC2B5\uB2C8\uB2E4. \uB530\uB73B\uD55C \uD751\uB2F9 \uC2DC\uB7FD 3\uD070\uC220\uC744 \uB450\uB974\uACE0 \uCAC4\uAE43\uD55C \uC0AC\uACE0 \uD384\uC744 \uC5B9\uC5B4 \uB530\uC2A4\uD558\uAC8C \uC990\uAE41\uB2C8\uB2E4."
      },
      durationSeconds: 120,
      image: "/images/taho-step3.jpg"
    }
  ],
  troubleshooting: [
    {
      id: "watery-tofu",
      problem: { "zh-TW": "\u9ED1\u7CD6\u871C\u6DCB\u4E0A\u53BB\u5F8C\u7ACB\u523B\u88AB\u591A\u9918\u6C34\u5206\u7A00\u91CB\uFF0C\u8B8A\u5F97\u6E05\u6DE1\u5982\u6C34", "en": "Arnibal syrup dilutes into thin brown water", "fil": "Naging matabang ang arnibal dahil sa tubig ng tokwa", "ja": "\u8C46\u8150\u304B\u3089\u6C34\u5206\u304C\u51FA\u3066\u9ED2\u7CD6\u30B7\u30ED\u30C3\u30D7\u304C\u8584\u307E\u3063\u3066\u3057\u307E\u3046", "ko": "\uB450\uBD80\uC758 \uC218\uBD84 \uB54C\uBB38\uC5D0 \uD751\uB2F9 \uC2DC\uB7FD\uC774 \uBB3D\uC5B4\uC838 \uBC0D\uBC0D\uD568" },
      cause: { "zh-TW": "\u8C46\u8150\u52A0\u71B1\u5F8C\u672A\u5FB9\u5E95\u5012\u6389\u6EF2\u51FA\u7684\u591A\u9918\u6C34\u5206", "en": "Did not drain excess liquid released from steaming tofu", "fil": "Hindi naitapon ang tubig na lumabas sa tokwa", "ja": "\u6E29\u3081\u305F\u8C46\u8150\u304B\u3089\u51FA\u305F\u6C34\u5206\u3092\u3057\u3063\u304B\u308A\u6368\u3066\u306A\u304B\u3063\u305F\u305F\u3081", "ko": "\uB450\uBD80\uB97C \uB370\uC6B4 \uB4A4 \uC2A4\uBA70 \uB098\uC628 \uBB3C\uAE30\uB97C \uB530\uB77C\uB0B4\uC9C0 \uC54A\uC558\uC74C" },
      solution: {
        "zh-TW": "\u7247\u8C46\u82B1\u524D\uFF0C\u52D9\u5FC5\u5C07\u7897\u50BE\u659C\uFF0C\u7528\u6E6F\u5319\u64CB\u4F4F\u8C46\u8150\uFF0C\u628A\u84B8\u51FA\u4F86\u7684\u767D\u6C34\u5012\u5F97\u4E7E\u4E7E\u6DE8\u6DE8\uFF1B\u9ED1\u7CD6\u871C\u71AC\u6FC3\u7A20\u4E00\u4E9B\uFF0C\u624D\u80FD\u9644\u8457\u5728\u8C46\u8150\u8868\u9762\u3002",
        "en": "Tilt the dish and thoroughly pour off all released liquid before scooping. Simmer your Arnibal until thick and glossy.",
        "fil": "Itapon ang tubig ng tokwa bago ilagay sa baso.",
        "ja": "\u5668\u3092\u50BE\u3051\u3066\u8C46\u8150\u304B\u3089\u51FA\u305F\u6C34\u5206\u3092\u5B8C\u5168\u306B\u6368\u3066\u3066\u304B\u3089\u76DB\u308A\u4ED8\u3051\u307E\u3059\u3002\u30B7\u30ED\u30C3\u30D7\u3082\u5C11\u3057\u716E\u8A70\u3081\u3066\u3068\u308D\u307F\u3092\u3064\u3051\u308B\u3068\u7D61\u307F\u304C\u826F\u304F\u306A\u308A\u307E\u3059\u3002",
        "ko": "\uB450\uBD80\uB97C \uB728\uAE30 \uC804 \uADF8\uB987\uC744 \uAE30\uC6B8\uC5EC \uB098\uC628 \uBB3C\uC744 \uB9D0\uB054\uD788 \uBC84\uB9AC\uACE0, \uC2DC\uB7FD\uC744 \uC9C4\uD558\uAC8C \uC878\uC5EC\uC8FC\uC138\uC694."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u78A7\u7464\u8349\u8393\u8C46\u82B1\u9A5A\u559C\u3011\uFF1A\u5728\u83F2\u5F8B\u8CD3\u907F\u6691\u52DD\u5730\u78A7\u7464\u5E02\uFF08Baguio\uFF09\uFF0C\u5C0F\u8CA9\u6703\u5728\u9ED1\u7CD6\u871C\u4E2D\u52A0\u5165\u5927\u91CF\u65B0\u9BAE\u9AD8\u5C71\u8349\u8393\u679C\u6CE5\u71AC\u88FD\u6210\u300CStrawberry Taho\u300D\uFF0C\u7C89\u5AE9\u679C\u9999\u9178\u751C\u4EA4\u7E54\uFF0C\u82E5\u6709\u65B0\u9BAE\u8349\u8393\u4E0D\u59A8\u8A66\u8A66\u9019\u6B3E\u50B3\u5947\u8B8A\u594F\uFF01",
      "en": "Baguio Strawberry Twist: In the mountain cool of Baguio City, vendors infuse the syrup with fresh mountain strawberries. Stir in 2 tbsp fresh strawberry puree for Baguio\u2019s world-famous Strawberry Taho!",
      "fil": "Tip sa Baguio: Maglagay ng sariwang strawberry jam o syrup para sa tanyag na Strawberry Taho ng Baguio City.",
      "ja": "\u30D0\u30AE\u30AA\u306E\u82FA\u30BF\u30DB\u5909\u594F\u66F2\uFF1A\u9AD8\u539F\u90FD\u5E02\u30D0\u30AE\u30AA\u3067\u306F\u9ED2\u7CD6\u306E\u304B\u308F\u308A\u306B\u30D5\u30EC\u30C3\u30B7\u30E5\u306A\u82FA\u30B8\u30E3\u30E0\u30B7\u30ED\u30C3\u30D7\u3092\u304B\u3051\u308B\u300C\u30B9\u30C8\u30ED\u30D9\u30EA\u30FC\u30FB\u30BF\u30DB\u300D\u304C\u5927\u4EBA\u6C17\u3067\u3059\uFF01",
      "ko": '\uBC14\uAE30\uC624 \uB538\uAE30 \uD0C0\uD638: \uACE0\uC0B0 \uD734\uC591\uC9C0 \uBC14\uAE30\uC624\uC5D0\uC11C\uB294 \uD751\uB2F9 \uB300\uC2E0 \uC0DD\uB538\uAE30 \uD4CC\uB808 \uC2DC\uB7FD\uC744 \uB123\uC5B4 \uB9CC\uB4E0 "\uB538\uAE30 \uD0C0\uD638"\uAC00 \uBA85\uBB3C\uC785\uB2C8\uB2E4. \uB538\uAE30\uC7BC\uC744 \uB354\uD574 \uC0C1\uD07C\uD558\uAC8C \uC990\uACA8\uBCF4\uC138\uC694.'
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/arrozCaldo.ts
var arrozCaldo = {
  id: "arroz-caldo",
  slug: "arroz-caldo",
  title: {
    "zh-TW": "\u6696\u80C3\u8591\u9999\u571F\u96DE\u7A20\u7CA5 (Arroz Caldo)",
    "en": "Gingery Chicken Rice Porridge (Arroz Caldo)",
    "fil": "Arroz Caldo na may Manok at Bawang",
    "ja": "\u672C\u5834\u30A2\u30ED\u30B9\u30FB\u30AB\u30EB\u30C9\uFF08\u9EC4\u91D1\u306B\u3093\u306B\u304F\u3068\u751F\u59DC\u304C\u9999\u308B\u30D5\u30A3\u30EA\u30D4\u30F3\u9D8F\u7CA5\uFF09",
    "ko": "\uD669\uAE08 \uB9C8\uB298\uACFC \uC0DD\uAC15 \uD5A5 \uAC00\uB4DD\uD55C \uD544\uB9AC\uD540 \uB2ED\uC8FD \uC544\uB85C\uC2A4 \uCE7C\uB3C4 (Arroz Caldo)"
  },
  subtitle: {
    "zh-TW": "\u897F\u73ED\u7259\u547D\u540D\u7684\u6696\u5FC3\u570B\u7CA5\u30FB\u8001\u8591\u9EBB\u6CB9\u571F\u96DE\u6162\u706B\u71AC\u7CDC\u30FB\u6EFF\u6EFF\u9EC3\u91D1\u849C\u9165\u8207\u56DB\u5B63\u67D1",
    "en": "Soul-Warming Comfort: Jasmine & Glutinous Rice Simmered with Ginger, Chicken, Toasted Garlic & Egg",
    "fil": "Pampainit sa tag-ulan na may maraming toasted garlic, itlog, at kalamansi",
    "ja": "\u96E8\u306E\u65E5\u3084\u671D\u98DF\u306B\u67D3\u307F\u6E21\u308B\u6975\u4E0A\u306E\u6E29\u3082\u308A\u3002\u9999\u3070\u3057\u3044\u30D5\u30E9\u30A4\u30C9\u30AC\u30FC\u30EA\u30C3\u30AF\u3068\u67D1\u6A58\u3092\u6DFB\u3048\u3066",
    "ko": "\uBE44 \uC624\uB294 \uB0A0\uACFC \uC544\uCE68\uC744 \uB530\uC2A4\uD558\uAC8C \uCC44\uC6CC\uC8FC\uB294 \uC18C\uC6B8 \uD478\uB4DC, \uBC14\uC0AD\uD55C \uB9C8\uB298 \uD50C\uB808\uC774\uD06C\uC640 \uC0B6\uC740 \uB2EC\uAC40"
  },
  tagline: {
    "zh-TW": "\u96E8\u5B63\u8207\u751F\u75C5\u6642\u6700\u6E34\u671B\u7684\u4E00\u7897\u6EAB\u67D4\uFF0C\u4E00\u53E3\u5403\u4E0B\u751F\u8591\u7684\u8F9B\u9999\u8207\u849C\u9165\u7684\u9165\u8106",
    "en": "The ultimate comfort bowl for rainy mornings and recovering spirits",
    "fil": "Gamot sa lagnat at pampalakas ng katawan na laging lutong-bahay",
    "ja": "\u751F\u59DC\u306E\u30DD\u30AB\u30DD\u30AB\u611F\u3068\u30AB\u30EA\u30AB\u30EA\u306B\u3093\u306B\u304F\u306E\u82B3\u3070\u3057\u3055\u3002\u4E00\u53E3\u3067\u8EAB\u4F53\u306E\u82AF\u304B\u3089\u6E29\u307E\u308B\u9B54\u6CD5\u306E\u7CA5",
    "ko": "\uC6D0\uAE30 \uD68C\uBCF5\uACFC \uAC10\uAE30 \uC608\uBC29\uC5D0 \uC73C\uB738\uC778 \uC601\uC591 \uB2ED\uC8FD, \uC740\uC740\uD55C \uC0DD\uAC15 \uD5A5\uACFC \uC0C1\uD07C\uD55C \uAE54\uB77C\uB9CC\uC2DC\uC758 \uC870\uD654"
  },
  heroImage: "/images/arroz-caldo.jpg",
  difficulty: "easy",
  prepTimeMinutes: 15,
  cookTimeMinutes: 35,
  defaultServings: 4,
  caloriesPerServing: 350,
  category: "soups",
  dietaryTags: ["classic", "glutenFree"],
  supportedCookware: ["traditional", "instantPot"],
  culture: {
    originRegion: {
      "zh-TW": "\u897F\u897F\u91CC\u8207\u83EF\u4EBA\u6F6E\u5DDE\u5EE3\u6771\u9B5A\u751F\u96DE\u7CA5\u5728\u99AC\u5C3C\u62C9\u7684\u878D\u5408 (Filipino-Chinese-Spanish Heritage)",
      "en": "Crossroads of Chinese Congee and Spanish nomenclature in colonial Manila",
      "fil": "Maynila at Katagalugan",
      "ja": "\u30DE\u30CB\u30E9\u767A\u7965\uFF08\u4E2D\u83EF\u306E\u767D\u7CA5\u6587\u5316\u3068\u30B9\u30DA\u30A4\u30F3\u8A9E\u540D\u306E\u878D\u5408\uFF09",
      "ko": "\uB9C8\uB2D0\uB77C (\uC911\uAD6D \uAD11\uB465\uC2DD \uC8FD\uACFC \uC2A4\uD398\uC778 \uBA85\uCE6D\uC774 \uACB0\uD569\uB41C \uC5ED\uC0AC\uC801 \uC74C\uC2DD)"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u594E\u963F\u5761\u6E05\u6668 Lugawan \u7CA5\u6524", "en": "Quiapo morning Lugawan street stalls", "fil": "Lugawan sa Quiapo", "ja": "\u30AD\u30A2\u30DD\u671D\u7CA5\u5C4B\u53F0", "ko": "\uD034\uC544\uD3EC \uC544\uCE68 \uC8FD \uB178\uC810" },
      { "zh-TW": "\u99AC\u5C3C\u62C9\u591C\u5E02\u8857\u982D Gotohan \u5BB5\u591C\u6A94", "en": "24/7 Gotohan & Lugawan joints, Manila", "fil": "Gotohan sa kanto", "ja": "24\u6642\u9593\u55B6\u696D\u306E\u304A\u7CA5\u30B9\u30BF\u30F3\u30C9", "ko": "\uB9C8\uB2D0\uB77C 24\uC2DC\uAC04 \uC8FD \uC804\uBB38 \uC2DD\uB2F9" }
    ],
    historyStory: {
      "zh-TW": "\u83F2\u5F8B\u8CD3\u672C\u571F\u672C\u5C31\u6709\u50B3\u7D71\u767D\u7C73\u716E\u7CA5\uFF08Lugaw\uFF09\u7684\u7FD2\u4FD7\u3002\u83EF\u4EBA\u79FB\u6C11\u5C07\u5EE3\u6771\u96DE\u7CA5\uFF08Chicken Congee\uFF09\u5F15\u9032\u99AC\u5C3C\u62C9\u5F8C\uFF0C\u897F\u73ED\u7259\u6B96\u6C11\u8005\u56E0\u559C\u611B\u9019\u9053\u6696\u80C3\u7F8E\u98DF\uFF0C\u70BA\u5176\u53D6\u4E86\u897F\u8A9E\u540D\u5B57\u300CArroz Caldo\u300D\uFF08\u5B57\u9762\u610F\u70BA\u300C\u71B1\u6E6F\u7C73\u98EF\u300D\uFF09\u3002\u83F2\u5F8B\u8CD3\u4EBA\u5DE7\u5999\u52A0\u5165\u672C\u571F\u8001\u8591\u3001\u7D05\u6728\u7C7D\u5929\u7136\u5FAE\u9EC3\u8272\u6FA4\u3001\u70B8\u81F3\u91D1\u9EC3\u8106\u9999\u7684\u5927\u849C\u788E\uFF08Toasted Garlic\uFF09\u8207\u56DB\u5B63\u67D1\u6854\u6C41\uFF0C\u8A95\u751F\u4E86\u9019\u9053\u8209\u4E16\u7121\u96D9\u7684\u7642\u7652\u6696\u5FC3\u71B1\u7CA5\uFF01",
      "en": 'While indigenous Filipinos ate plain rice porridge called "Lugaw", Chinese immigrants introduced ginger chicken congee. Spanish colonizers fell in love with it and christened it "Arroz Caldo" (literally "broth rice"). Filipinos elevated it with generous julienned ginger, safflower/annatto for a gentle golden hue, mountain of toasted garlic bits, and a spritz of fresh calamansi.',
      "fil": "Galing sa pinaghalong lugaw ng mga Tsino at pangalang Kastila. Kilala sa saganang luya, kasubha (safflower), at maraming toasted garlic.",
      "ja": "\u4E2D\u83EF\u7CFB\u306E\u751F\u59DC\u9D8F\u7CA5\u306B\u30B9\u30DA\u30A4\u30F3\u4EBA\u304C\u300C\u30A2\u30ED\u30B9\u30FB\u30AB\u30EB\u30C9\uFF08\u6E29\u304B\u3044\u30B9\u30FC\u30D7\u98EF\uFF09\u300D\u3068\u540D\u4ED8\u3051\u3001\u30D5\u30A3\u30EA\u30D4\u30F3\u98A8\u306B\u5927\u91CF\u306E\u30AC\u30FC\u30EA\u30C3\u30AF\u30D5\u30E9\u30A4\u3068\u67D1\u6A58\u3001\u30B5\u30D5\u30E9\u30F3\uFF08\u307E\u305F\u306F\u30D9\u30CB\u30D0\u30CA\uFF09\u306E\u9EC4\u8272\u3044\u5F69\u308A\u3092\u52A0\u3048\u3066\u5B8C\u6210\u3055\u305B\u307E\u3057\u305F\u3002",
      "ko": '\uC911\uAD6D\uC2DD \uB2ED\uC8FD\uC5D0 \uC2A4\uD398\uC778\uC5B4\uB85C "\uB530\uB73B\uD55C \uAD6D\uBC25"\uC774\uB780 \uB73B\uC758 \uC774\uB984\uC744 \uBD99\uC600\uC73C\uBA70, \uD544\uB9AC\uD540\uC2DD\uC73C\uB85C \uC0DD\uAC15\uC744 \uB4EC\uBFCD \uB123\uACE0 \uD669\uAE08 \uB9C8\uB298 \uD6C4\uB808\uC774\uD06C\uC640 \uAE54\uB77C\uB9CC\uC2DC\uB97C \uACC1\uB4E4\uC5EC \uBA39\uC2B5\uB2C8\uB2E4.'
    },
    filipinoScript: "Arroz Caldo na may Manok",
    filipinoPhonetics: "Ah-ros Kahl-doh nah may Mah-nok",
    audioPronunciationText: "Pabili po ng mainit na Arroz Caldo na may maraming toasted garlic at itlog!"
  },
  ingredients: [
    {
      id: "chicken-cuts",
      name: { "zh-TW": "\u5E36\u9AA8\u96DE\u817F\u584A (\u5207\u5C0F\u584A\uFF0C\u71AC\u51FA\u7518\u7F8E\u96DE\u6E6F)", "en": "Bone-in Chicken Thighs (Chopped into bite-sized pieces)", "fil": "Hita ng Manok", "ja": "\u9AA8\u4ED8\u304D\u9D8F\u3082\u3082\u8089\uFF08\u4E00\u53E3\u5927\u3076\u3064\u5207\u308A\uFF09", "ko": "\uD1A0\uB9C9 \uB2ED\uB2E4\uB9AC\uC0B4 (\uBF08 \uC788\uB294 \uAC83)" },
      amount: 400,
      unitMetric: "g",
      unitUS: "14 oz",
      isKeyFlavor: true,
      filipinoName: "Manok",
      filipinoPronunciation: "Mah-nok"
    },
    {
      id: "glutinous-jasmine-rice",
      name: { "zh-TW": "\u7CEF\u7C73\u8207\u8309\u8389\u9999\u7C73 (1:1 \u6DF7\u642D\uFF0C\u517C\u5177\u9ECF\u7CEF\u7A20\u5EA6\u8207\u7C73\u9999)", "en": "Glutinous Rice + Jasmine Rice (1:1 mix for perfect texture)", "fil": "Malagkit at Regular na Bigas", "ja": "\u3082\u3061\u7C73\u3068\u3046\u308B\u3061\u7C73\u306E\u30D6\u30EC\u30F3\u30C9\uFF081:1\uFF09", "ko": "\uCC39\uC300\uACFC \uBA65\uC300 (1:1 \uD63C\uD569\uC73C\uB85C \uCAC0\uB4DD\uD558\uACE0 \uBD80\uB4DC\uB7EC\uC6B4 \uC2DD\uAC10)" },
      amount: 150,
      unitMetric: "g",
      unitUS: "0.75 cup",
      isKeyFlavor: true,
      filipinoName: "Malagkit",
      filipinoPronunciation: "Mah-lahg-keet"
    },
    {
      id: "ginger",
      name: { "zh-TW": "\u65B0\u9BAE\u8001\u8591 (\u53BB\u76AE\u5207\u5927\u91CF\u7C97\u7D72\uFF0C\u6696\u80C3\u7CBE\u83EF)", "en": "Fresh Ginger (Julienned generously)", "fil": "Maraming Luya", "ja": "\u751F\u59DC\uFF08\u305F\u3063\u3077\u308A\u306E\u5343\u5207\u308A\uFF09", "ko": "\uC2E0\uC120\uD55C \uC0DD\uAC15 (\uAD75\uAC8C \uCC44 \uC36C \uAC83 \uB4EC\uBFCD)" },
      amount: 50,
      unitMetric: "g",
      unitUS: "1.8 oz",
      isKeyFlavor: true,
      filipinoName: "Luya",
      filipinoPronunciation: "Loo-yah"
    },
    {
      id: "garlic-crispy",
      name: { "zh-TW": "\u5927\u849C\u672B (\u6162\u706B\u6162\u70B8\u6210\u9EC3\u91D1\u849C\u9165)", "en": "Garlic (Minced & fried into crispy golden bits)", "fil": "Toasted Garlic (Bawang)", "ja": "\u30D5\u30E9\u30A4\u30C9\u30AC\u30FC\u30EA\u30C3\u30AF\uFF08\u3053\u3093\u304C\u308A\u30AD\u30C4\u30CD\u8272\u306B\u7092\u3081\u308B\uFF09", "ko": "\uB2E4\uC9C4 \uB9C8\uB298 (\uBC14\uC0AD\uD558\uAC8C \uD280\uACA8 \uACE8\uB4E0 \uAC08\uB9AD \uD50C\uB808\uC774\uD06C \uB9CC\uB4E4\uAE30)" },
      amount: 8,
      unitMetric: "clove",
      unitUS: "clove",
      isKeyFlavor: true,
      filipinoName: "Bawang",
      filipinoPronunciation: "Bah-wang"
    },
    {
      id: "patis",
      name: { "zh-TW": "\u83F2\u5F8B\u8CD3\u7D14\u9B5A\u9732 (Patis)", "en": "Fish Sauce (Patis)", "fil": "Patis", "ja": "\u9B5A\u91A4\uFF08\u30D1\u30C6\u30A3\u30B9\uFF09", "ko": "\uD53C\uC2DC\uC18C\uC2A4 (\uD30C\uD2F0\uC2A4)" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      filipinoName: "Patis",
      filipinoPronunciation: "Pah-tees"
    },
    {
      id: "water-broth",
      name: { "zh-TW": "\u6E05\u6C34\u6216\u96DE\u9AD8\u6E6F", "en": "Water or Chicken Stock", "fil": "Tubig o Sabaw", "ja": "\u6C34\u307E\u305F\u306F\u9D8F\u30AC\u30E9\u30B9\u30FC\u30D7", "ko": "\uBB3C \uB610\uB294 \uB2ED \uC721\uC218" },
      amount: 1200,
      unitMetric: "ml",
      unitUS: "5 cups",
      filipinoName: "Tubig",
      filipinoPronunciation: "Too-beeg"
    },
    {
      id: "boiled-eggs",
      name: { "zh-TW": "\u6C34\u716E\u86CB (\u5C0D\u534A\u5256\u958B\u4F5C\u70BA\u914D\u6599)", "en": "Hard-boiled Eggs (Halved)", "fil": "Nilagang Itlog", "ja": "\u3086\u3067\u5375\uFF08\u534A\u5206\u306B\u5207\u308B\uFF09", "ko": "\uC0B6\uC740 \uB2EC\uAC40 (\uBC18 \uAC00\uB984)" },
      amount: 2,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Nilagang Itlog",
      filipinoPronunciation: "Nee-lah-gahng Eet-log"
    },
    {
      id: "calamansi-scallions",
      name: { "zh-TW": "\u65B0\u9BAE\u56DB\u5B63\u67D1\u6854\u8207\u9752\u8525\u82B1", "en": "Fresh Calamansi & Chopped Scallions", "fil": "Kalamansi at Dahon ng Sibuyas", "ja": "\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u3068\u5C0F\u53E3\u306D\u304E", "ko": "\uAE54\uB77C\uB9CC\uC2DC\uC640 \uC1A1\uC1A1 \uC36C \uD30C" },
      amount: 4,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Kalamansi",
      filipinoPronunciation: "Kah-lah-mahn-see"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u6162\u706B\u70B8\u51FA\u62DB\u724C\u9EC3\u91D1\u9999\u8106\u849C\u9165", "en": "Fry Minced Garlic into Crunchy Golden Bits", "fil": "Iprito ang Bawang Hanggang Maging Toasted Garlic", "ja": "\u5F31\u706B\u3067\u306B\u3093\u306B\u304F\u3092\u7092\u3081\u3001\u9EC4\u91D1\u8272\u306E\u30AC\u30FC\u30EA\u30C3\u30AF\u30C1\u30C3\u30D7\u3092\u4F5C\u308B", "ko": "\uC57D\uBD88\uC5D0 \uB9C8\uB298\uC744 \uBCF6\uC544 \uD669\uAE08\uBE5B \uBC14\uC0AD\uD55C \uAC08\uB9AD \uD6C4\uB808\uC774\uD06C \uB9CC\uB4E4\uAE30" },
      instruction: {
        "zh-TW": "\u6DF1\u934B\u4E2D\u5012\u5165 3 \u5927\u5319\u6CB9\uFF0C\u51B7\u6CB9\u4E0B\u5165\u7D30\u849C\u672B\uFF0C\u8F49\u4E2D\u5C0F\u706B\u6162\u70B8\u3002\u4E0D\u65B7\u652A\u52D5\u8B93\u849C\u672B\u53D7\u71B1\u5747\u52FB\uFF0C\u76F4\u5230\u8B8A\u6210\u91D1\u9EC3\u9999\u8106\uFF08\u5207\u8A18\u4E0D\u8981\u70B8\u7126\uFF09\u3002\u8FC5\u901F\u7528\u6F0F\u52FA\u6488\u51FA\u849C\u9165\u701D\u6CB9\u5099\u7528\uFF0C\u934B\u4E2D\u7559\u4E0B\u7684\u5C31\u662F\u9999\u6C23\u903C\u4EBA\u7684\u300C\u9EC3\u91D1\u5927\u849C\u6CB9\u300D\uFF01",
        "en": "Add 3 tbsp oil into a deep pot. Add minced garlic to cool oil and cook gently over medium-low heat, stirring constantly until golden brown and crispy (do not burn!). Scoop out the crispy garlic bits onto paper towels. Keep the fragrant garlic oil in the pot!",
        "fil": "Painitin ang mantika at dahan-dahang iprito ang bawang sa mahinang apoy hanggang maging toasted. Itabi ang bawang ngunit iwan ang mantika sa kaldero.",
        "ja": "\u934B\u306B\u6CB9\u5927\u3055\u30583\u3068\u523B\u307F\u30CB\u30F3\u30CB\u30AF\u3092\u5165\u308C\u3001\u5F31\u706B\u3067\u3058\u3063\u304F\u308A\u7092\u3081\u307E\u3059\u3002\u30AD\u30C4\u30CD\u8272\u3067\u30AB\u30EA\u30AB\u30EA\u306B\u306A\u3063\u305F\u3089\u30CB\u30F3\u30CB\u30AF\u3092\u3059\u304F\u3044\u51FA\u3057\u3066\u6CB9\u3092\u5207\u308A\u3001\u934B\u306B\u306F\u9999\u3070\u3057\u3044\u30AC\u30FC\u30EA\u30C3\u30AF\u30AA\u30A4\u30EB\u3092\u6B8B\u3057\u307E\u3059\u3002",
        "ko": "\uB0C4\uBE44\uC5D0 \uAE30\uB984 3\uD070\uC220\uACFC \uB2E4\uC9C4 \uB9C8\uB298\uC744 \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C \uD0C0\uC9C0 \uC54A\uAC8C \uC800\uC5B4\uAC00\uBA70 \uB178\uB987\uD558\uAC8C \uD280\uAE41\uB2C8\uB2E4. \uBC14\uC0AD\uD574\uC9C4 \uB9C8\uB298 \uCE69\uC740 \uAC74\uC838\uB0B4\uACE0, \uB0C4\uBE44\uC5D0\uB294 \uB9C8\uB298 \uAE30\uB984\uC744 \uB0A8\uACA8\uB461\uB2C8\uB2E4."
      },
      durationSeconds: 240,
      image: "/images/arroz-caldo-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u5927\u849C\u6CB9\u7178\u7092\u751F\u8591\u7D72\u3001\u96DE\u8089\u8207\u7C73\u7C92", "en": "Saut\xE9 Ginger, Chicken & Rice in Garlic Oil", "fil": "Igisa ang Luya, Manok, at Bigas sa Mantika ng Bawang", "ja": "\u30AC\u30FC\u30EA\u30C3\u30AF\u30AA\u30A4\u30EB\u3067\u751F\u59DC\u3001\u9D8F\u8089\u3001\u7C73\u3092\u7092\u3081\u308B", "ko": "\uB9C8\uB298 \uAE30\uB984\uC5D0 \uCC44 \uC36C \uC0DD\uAC15, \uB2ED\uACE0\uAE30, \uC300\uC744 \uBCF6\uAE30" },
      instruction: {
        "zh-TW": "\u5229\u7528\u934B\u4E2D\u7559\u4E0B\u7684\u849C\u6CB9\uFF0C\u4E2D\u5927\u706B\u7206\u9999\u5927\u91CF\u751F\u8591\u7D72\u8207\u6D0B\u8525\u4E01\u7D04 1 \u5206\u9418\uFF0C\u76F4\u5230\u751F\u8591\u8F9B\u9999\u56DB\u6EA2\u3002\u52A0\u5165\u96DE\u817F\u8089\u584A\u7FFB\u7092\u81F3\u8089\u8272\u767C\u767D\uFF0C\u8ABF\u5165 2 \u5927\u5319\u9B5A\u9732\uFF08Patis\uFF09\u3002\u5012\u5165\u6DD8\u6D17\u701D\u4E7E\u7684\u7CEF\u7C73\u8207\u9999\u7C73\uFF0C\u7FFB\u7092 1.5 \u5206\u9418\u8B93\u6BCF\u9846\u7C73\u7C92\u88F9\u4E0A\u4E00\u5C64\u91D1\u9EC3\u849C\u6CB9\u8207\u96DE\u6CB9\u3002",
        "en": "In the reserved garlic oil, saut\xE9 the mounds of ginger matchsticks and onions for 1 min until aromatic. Add chicken pieces and sear until opaque. Season with 2 tbsp fish sauce. Add drained rice and stir-fry for 1.5 mins until glistening with fragrant chicken fat.",
        "fil": "Igisa ang maraming luya at sibuyas sa mantika ng bawang. Ilagay ang manok at patis. Ihalo ang bigas nang 1-2 minuto.",
        "ja": "\u6B8B\u3063\u305F\u30AC\u30FC\u30EA\u30C3\u30AF\u30AA\u30A4\u30EB\u3067\u5343\u5207\u308A\u751F\u59DC\u3068\u7389\u306D\u304E\u3092\u5F37\u706B\u3067\u7092\u3081\u3001\u9D8F\u8089\u3092\u52A0\u3048\u3066\u7092\u3081\u5408\u308F\u305B\u307E\u3059\u3002\u9B5A\u91A4\u5927\u3055\u30582\u3092\u52A0\u3048\u3001\u6D17\u3063\u305F\u7C73\u3092\u6295\u5165\u3057\u3066\u5168\u4F53\u306B\u6CB9\u304C\u56DE\u308B\u307E\u3067\u7092\u3081\u307E\u3059\u3002",
        "ko": "\uB9C8\uB298 \uAE30\uB984\uC5D0 \uCC44 \uC36C \uC0DD\uAC15\uC744 \uB4EC\uBFCD \uB123\uACE0 \uBCF6\uB2E4\uAC00 \uB2ED\uACE0\uAE30\uB97C \uB123\uC5B4 \uBCF6\uC2B5\uB2C8\uB2E4. \uD53C\uC2DC\uC18C\uC2A4\uB97C \uB123\uACE0 \uC300\uC744 \uB123\uC5B4 \uAE30\uB984\uC5D0 1\uBD84\uAC04 \uACE0\uC18C\uD558\uAC8C \uBCF6\uC544\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 240,
      image: "/images/arroz-caldo-step2.jpg"
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u52A0\u9AD8\u6E6F\u6162\u706B\u71AC\u716E\u6210\u7DBF\u5BC6\u7A20\u7CA5\uFF0C\u76DB\u76E4\u6492\u849C\u9165", "en": "Simmer into Silky Porridge & Garnish Generously", "fil": "Pakuluan Hanggang Lumapot at Lagyan ng Sahog sa Ibabaw", "ja": "\u30B9\u30FC\u30D7\u3092\u6CE8\u3044\u3067\u3068\u308D\u3068\u308D\u306B\u716E\u8FBC\u307F\u3001\u30C8\u30C3\u30D4\u30F3\u30B0\u3092\u98FE\u308B", "ko": "\uC721\uC218\uB97C \uBD93\uACE0 \uD479 \uB053\uC5EC \uBD80\uB4DC\uB7EC\uC6B4 \uC8FD\uC73C\uB85C \uC644\uC131 \uD6C4 \uACE0\uBA85 \uC5B9\uAE30" },
      instruction: {
        "zh-TW": "\u5012\u5165 1200ml \u6E05\u6C34\u6216\u96DE\u9AD8\u6E6F\uFF0C\u5927\u706B\u716E\u6EFE\u5F8C\u8F49\u5C0F\u706B\u3002\u52A0\u84CB\u5FAE\u63A9\u6162\u71AC 20-25 \u5206\u9418\uFF0C\u671F\u9593\u6BCF\u9694\u5E7E\u5206\u9418\u9806\u934B\u5E95\u652A\u62CC\u9632\u6B62\u7C73\u7C92\u9ECF\u5E95\uFF0C\u76F4\u5230\u7C73\u7C92\u7206\u958B\u3001\u6E6F\u6C41\u5448\u73FE\u6FC3\u90C1\u7DBF\u6ED1\u7684\u767D\u91D1\u7A20\u7CA5\uFF08\u82E5\u559C\u6B61\u504F\u9EC3\u8272\u6FA4\u53EF\u52A0\u5FAE\u91CF\u7D05\u6728\u6CB9\u6216\u8591\u9EC3\uFF09\u3002\u5927\u7897\u76DB\u51FA\uFF0C\u64FA\u4E0A\u534A\u9846\u6C34\u716E\u86CB\u3001\u6492\u4E0A\u5806\u6210\u5C0F\u5C71\u7684\u9EC3\u91D1\u849C\u9165\u3001\u9752\u8525\u82B1\uFF0C\u65C1\u908A\u653E\u4E0A\u5207\u534A\u91D1\u6854\uFF0C\u64E0\u6C41\u62CC\u98DF\uFF01",
        "en": "Pour in 1200ml water or chicken broth, bring to a boil, then turn to low heat. Partially cover and simmer for 20-25 mins, stirring occasionally to prevent sticking, until the rice grains bloom into a rich, silky porridge. Ladle into deep bowls, top with boiled egg halves, heaps of crispy toasted garlic, fresh green onions, and fresh calamansi limes!",
        "fil": "Ibuhos ang 1200ml tubig o sabaw. Hinaan ang apoy at pakuluan nang 20-25 minuto habang hinahalo. Ihain sa mangkok na may nilagang itlog, maraming toasted garlic, dahon ng sibuyas, at kalamansi.",
        "ja": "\u6C34\uFF08\u307E\u305F\u306F\u30B9\u30FC\u30D7\uFF091200ml\u3092\u6CE8\u304E\u3001\u6CB8\u9A30\u3057\u305F\u3089\u5F31\u706B\u306B\u3057\u3066\u5E95\u304C\u7126\u3052\u4ED8\u304B\u306A\u3044\u3088\u3046\u6642\u3005\u6DF7\u305C\u306A\u304C\u308920\u301C25\u5206\u716E\u8FBC\u307F\u307E\u3059\u3002\u304A\u7C73\u304C\u82B1\u958B\u3044\u3066\u30C8\u30ED\u30C8\u30ED\u306B\u306A\u3063\u305F\u3089\u5668\u306B\u76DB\u308A\u3001\u3086\u3067\u5375\u3001\u5C71\u76DB\u308A\u306E\u30D5\u30E9\u30A4\u30C9\u30AC\u30FC\u30EA\u30C3\u30AF\u3001\u30CD\u30AE\u3092\u306E\u305B\u3001\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u3092\u643E\u3063\u3066\u5B8C\u6210\uFF01",
        "ko": "\uBB3C 1200ml\uB97C \uBD93\uACE0 \uB053\uC73C\uBA74 \uC57D\uBD88\uB85C \uC904\uC5EC \uB20B\uC9C0 \uC54A\uAC8C \uC800\uC5B4\uAC00\uBA70 20~25\uBD84\uAC04 \uD479 \uB053\uC785\uB2C8\uB2E4. \uC8FD\uC774 \uBF40\uC597\uACE0 \uAC78\uCB49\uD574\uC9C0\uBA74 \uADF8\uB987\uC5D0 \uB2F4\uACE0 \uC0B6\uC740 \uB2EC\uAC40, \uB4EC\uBFCD \uC62C\uB9B0 \uB9C8\uB298 \uD50C\uB808\uC774\uD06C, \uD30C, \uAE54\uB77C\uB9CC\uC2DC\uB97C \uC5B9\uC5B4\uB0C5\uB2C8\uB2E4."
      },
      durationSeconds: 1500,
      image: "/images/arroz-caldo-step3.jpg",
      cookwareVariations: [
        {
          cookware: "instantPot",
          tempAndSetting: "Instant Pot: Porridge Setting for 20 mins (natural release)",
          instructionOverride: {
            "zh-TW": "\u58D3\u529B\u934B\u6A21\u5F0F\uFF1A\u7528 Saut\xE9 \u6A94\u70B8\u849C\u9165\u4E26\u7178\u7092\u751F\u8591\u3001\u96DE\u8089\u8207\u751F\u7C73\u3002\u6CE8\u5165 1000ml \u6C34\uFF0C\u9078 Porridge \u6A94\u9AD8\u58D3 20 \u5206\u9418\uFF0C\u81EA\u7136\u6D29\u58D3 15 \u5206\u9418\u3002\u958B\u84CB\u652A\u62CC\uFF0C\u7C73\u7C92\u5B8C\u5168\u5316\u7CDC\uFF0C\u8D85\u7D1A\u9999\u6FC3\u7701\u5FC3\uFF01",
            "en": "Instant Pot Variation: Use Saut\xE9 mode to fry garlic, then saut\xE9 ginger, chicken, and rice. Add 1000ml water, seal, and cook on Porridge mode (High Pressure) for 20 mins with 15 mins natural release. Velvety congee in one touch!",
            "fil": "Instant Pot: Gamitin ang Saut\xE9 mode para sa bawang, luya, at manok. Ilagay ang 1000ml tubig at i-set sa Porridge mode nang 20 minuto.",
            "ja": "\u96FB\u6C17\u5727\u529B\u934B\u8A2D\u5B9A\uFF1ASaut\xE9\u30E2\u30FC\u30C9\u3067\u30CB\u30F3\u30CB\u30AF\u3068\u751F\u59DC\u3001\u9D8F\u8089\u3001\u7C73\u3092\u7092\u3081\u3001\u6C341000ml\u3092\u52A0\u3048Porridge\u30E2\u30FC\u30C9\u306720\u5206\u52A0\u5727\u5F8C\u300115\u5206\u84B8\u3089\u3057\u3066\u6E1B\u5727\u3002\u9A5A\u304F\u307B\u3069\u306A\u3081\u3089\u304B\u306A\u304A\u7CA5\u304C\u5B8C\u6210\u3057\u307E\u3059\u3002",
            "ko": "\uC778\uC2A4\uD134\uD2B8\uD31F \uC124\uC815: \uBCF6\uC74C \uBAA8\uB4DC\uB85C \uB9C8\uB298\uACFC \uC0DD\uAC15, \uB2ED\uACE0\uAE30, \uC300\uC744 \uBCF6\uACE0 \uBB3C 1000ml\uB97C \uBD93\uC2B5\uB2C8\uB2E4. \uC8FD(Porridge) \uBAA8\uB4DC\uB85C 20\uBD84 \uC870\uB9AC \uD6C4 15\uBD84 \uC790\uC5F0 \uAC10\uC555\uD569\uB2C8\uB2E4."
          }
        }
      ]
    }
  ],
  troubleshooting: [
    {
      id: "too-thick",
      problem: { "zh-TW": "\u7CA5\u653E\u6DBC\u5F8C\u8B8A\u5F97\u592A\u904E\u6FC3\u7A20\u539A\u91CD\uFF0C\u50CF\u7C73\u7CCA\u4E00\u584A\u584A", "en": "Porridge thickens into dense solid paste after resting", "fil": "Naging sobrang lapot at nanigas ang arroz caldo", "ja": "\u51B7\u3081\u308B\u3068\u304A\u7CA5\u304C\u56FA\u307E\u308A\u3059\u304E\u3066\u30DC\u30C6\u30DC\u30C6\u306B\u306A\u3063\u3066\u3057\u307E\u3046", "ko": "\uC2DC\uAC04\uC774 \uC9C0\uB098\uBA74\uC11C \uC8FD\uC774 \uB108\uBB34 \uBED1\uBED1\uD558\uAC8C \uAD73\uC74C" },
      cause: { "zh-TW": "\u7CEF\u7C73\u5438\u6C34\u6027\u6975\u5F37\uFF0C\u975C\u7F6E\u904E\u7A0B\u4E2D\u6301\u7E8C\u81A8\u8139", "en": "Glutinous rice continually drinks moisture as starch cools", "fil": "Mabilis sumipsip ng sabaw ang malagkit na bigas", "ja": "\u3082\u3061\u7C73\u306E\u3067\u3093\u3077\u3093\u304C\u51B7\u3081\u308B\u306B\u3064\u308C\u3066\u6C34\u5206\u3092\u5438\u3044\u5C3D\u304F\u3059\u305F\u3081", "ko": "\uCC39\uC300\uC758 \uC804\uBD84 \uC131\uBD84\uC774 \uC2DD\uC73C\uBA74\uC11C \uC218\uBD84\uC744 \uBAA8\uB450 \uD761\uC218\uD568" },
      solution: {
        "zh-TW": "\u5403\u4E4B\u524D\u5012\u5165\u534A\u7897\u71B1\u96DE\u9AD8\u6E6F\u6216\u71B1\u6C34\uFF0C\u7528\u5C0F\u706B\u5FAE\u6CB8\u652A\u62CC 1 \u5206\u9418\uFF0C\u7ACB\u523B\u6062\u5FA9\u7D72\u7D68\u822C\u9806\u6ED1\u8CEA\u5730\u3002",
        "en": "Stir in 1/2 cup boiling water or warm chicken stock over low heat for 1 minute before serving.",
        "fil": "Magdagdag ng kaunting mainit na sabaw o tubig habang pinapainit.",
        "ja": "\u98DF\u3079\u308B\u76F4\u524D\u306B\u71B1\u3044\u30B9\u30FC\u30D7\u304B\u304A\u6E6F\u3092\u534A\u30AB\u30C3\u30D7\u8DB3\u3057\u3001\u5F31\u706B\u30671\u5206\u304B\u304D\u6DF7\u305C\u308B\u3068\u6ED1\u3089\u304B\u3055\u304C\u8607\u308A\u307E\u3059\u3002",
        "ko": "\uB4DC\uC2E4 \uB54C \uB530\uB73B\uD55C \uC721\uC218\uB098 \uBB3C \uBC18 \uCEF5\uC744 \uBD93\uACE0 1\uBD84\uAC04 \uC800\uC5B4\uAC00\uBA70 \uB370\uC6CC\uC8FC\uBA74 \uBD80\uB4DC\uB7EC\uC6C0\uC774 \uC0B4\uC544\uB0A9\uB2C8\uB2E4."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u8001\u8591\u91CF\u52A0\u500D\u8207\u73FE\u64E0\u91D1\u6854\u3011\uFF1A\u6B63\u5B97 Arroz Caldo \u7684\u9748\u9B42\u5728\u65BC\u300C\u751F\u8591\u4E0D\u80FD\u7701\u300D\uFF01\u5927\u91CF\u7684\u751F\u8591\u7D72\u5728\u71B1\u7CA5\u4E2D\u71C9\u900F\uFF0C\u8F9B\u9999\u5B8C\u5168\u91CB\u5165\u6E6F\u7CDC\uFF1B\u7897\u908A\u64E0\u5165 2 \u9846\u56DB\u5B63\u67D1\uFF08Calamansi\uFF09\uFF0C\u679C\u9178\u77AC\u9593\u89E3\u958B\u8089\u8102\uFF0C\u8B93\u6574\u7897\u7CA5\u8B8A\u5F97\u7121\u6BD4\u6E05\u96C5\u9BAE\u6D3B\uFF01",
      "en": "The Golden Duo: Never be shy with ginger\u2014the sharper the ginger warmth, the more restorative the porridge. Always finish with 2 freshly squeezed calamansi limes to electrify the savory chicken broth!",
      "fil": "Tip ng Kusinero: Damihan ang luya at huwag kalimutang pigain ang kalamansi bago higupin ang sabaw.",
      "ja": "\u751F\u59DC\u3068\u67D1\u6A58\u306E\u76F8\u4E57\u52B9\u679C\uFF1A\u751F\u59DC\u306F\u30B1\u30C1\u3089\u305A\u305F\u3063\u3077\u308A\u5343\u5207\u308A\u3092\u5165\u308C\u308B\u306E\u304C\u672C\u5834\u6D41\u3002\u305D\u3057\u3066\u98DF\u3079\u308B\u76F4\u524D\u306B\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u679C\u6C41\u3092\u7D5E\u308B\u3053\u3068\u3067\u3001\u91CD\u305F\u3044\u9D8F\u7CA5\u304C\u9A5A\u304F\u307B\u3069\u8EFD\u3084\u304B\u3067\u723D\u5FEB\u306A\u5473\u3078\u3068\u6607\u83EF\u3057\u307E\u3059\uFF01",
      "ko": "\uD669\uAE08 \uBE44\uACB0: \uC0DD\uAC15\uC744 \uC544\uB07C\uC9C0 \uB9D0\uACE0 \uB4EC\uBFCD \uB123\uC5B4\uC57C \uAE4A\uC740 \uB9DB\uC774 \uB0A9\uB2C8\uB2E4. \uB4DC\uC2DC\uAE30 \uC9C1\uC804 \uC2E0\uC120\uD55C \uAE54\uB77C\uB9CC\uC2DC\uB97C 2\uAC1C \uC9DC \uB123\uC73C\uBA74 \uB2ED\uC8FD\uC758 \uB290\uB07C\uD568\uC774 \uC0AC\uB77C\uC9C0\uACE0 \uB180\uB78D\uB3C4\uB85D \uC0C1\uCF8C\uD574\uC9D1\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/crispyPata.ts
var crispyPata = {
  id: "crispy-pata",
  slug: "crispy-pata",
  title: {
    "zh-TW": "\u91D1\u9EC3\u7206\u8106\u83F2\u5F0F\u70B8\u5927\u8E44\u8180 (Crispy Pata)",
    "en": "Crispy Deep-Fried Pork Knuckle (Crispy Pata)",
    "fil": "Malutong na Crispy Pata",
    "ja": "\u672C\u5834\u30AF\u30EA\u30B9\u30D4\u30FC\u30FB\u30D1\u30BF\uFF08\u30D5\u30A3\u30EA\u30D4\u30F3\u98A8\u8C5A\u3059\u306D\u8089\u306E\u9EC4\u91D1\u30AB\u30EA\u30AB\u30EA\u63DA\u3052\uFF09",
    "ko": "\uAC89\uBC14\uC18D\uCD09 \uB05D\uD310\uC655 \uD544\uB9AC\uD540\uC2DD \uD280\uAE34 \uC871\uBC1C \uD06C\uB9AC\uC2A4\uD53C \uD30C\uD0C0 (Crispy Pata)"
  },
  subtitle: {
    "zh-TW": "\u83F2\u5F8B\u8CD3\u5927\u83DC\u93AE\u684C\u4E4B\u5BF6\u30FB\u5916\u76AE\u5982\u7206\u7C73\u82B1\u822C\u9165\u8106\u7834\u88C2\u30FB\u9AA8\u8089\u9165\u721B\u591A\u6C41\u30FB\u849C\u8FA3\u918B\u6C41\u7D55\u914D",
    "en": "The Grand King of Filipino Banquets: Blistered Shattering Skin & Fall-Apart Tender Pork with Spiced Soya-Vinegar Dip",
    "fil": "Bida sa bawat inuman at handaan na may sobrang lutong na balat at malambot na laman",
    "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u5927\u5BB4\u4F1A\u306E\u82B1\u5F62\u6599\u7406\uFF01\u5F3E\u3051\u308B\u3088\u3046\u306B\u30AF\u30EA\u30B9\u30D4\u30FC\u306A\u76AE\u3068\u3001\u30B8\u30E5\u30FC\u30B7\u30FC\u306B\u3068\u308D\u3051\u308B\u8089",
    "ko": "\uD544\uB9AC\uD540 \uB300\uD615 \uCD95\uC81C\uC758 \uD558\uC774\uB77C\uC774\uD2B8! \uD06C\uB798\uCEE4\uCC98\uB7FC \uBC14\uC0AD\uD55C \uAECD\uC9C8\uACFC \uCD09\uCD09\uD558\uAC8C \uB179\uC544\uB0B4\uB9AC\uB294 \uC721\uC999"
  },
  tagline: {
    "zh-TW": "\u5148\u9999\u6599\u6162\u71C9\u3001\u98A8\u4E7E\u5F8C\u9AD8\u6EAB\u7206\u70B8\uFF0C\u5494\u5693\u4E00\u8072\u8106\u97FF\u9707\u64BC\u5168\u5834\u7684\u7D42\u6975\u8089\u98DF\u72C2\u6B61",
    "en": "Simmered in aromatics, thoroughly dried, and deep-fried to astronomical crunch",
    "fil": "Paboritong pulutan na kapag kinagat ay maririnig ang tunog ng lutong",
    "ja": "\u30CF\u30FC\u30D6\u3067\u716E\u8FBC\u307F\u3001\u4E7E\u71E5\u3055\u305B\u3066\u304B\u3089\u63DA\u3052\u308B\u4F1D\u7D71\u6280\u6CD5\u3002\u30D1\u30EA\u30C3\u3068\u3044\u3046\u97F3\u304C\u90E8\u5C4B\u4E2D\u306B\u97FF\u304D\u307E\u3059",
    "ko": "\uD5A5\uC2E0\uCC44\uB85C \uD479 \uC0B6\uC740 \uB4A4 \uBC14\uC2F9 \uB9D0\uB824 \uD280\uACA8\uB0B4\uB294 \uD544\uB9AC\uD540 \uC815\uD1B5 \uBA85\uBB3C \uC694\uB9AC, \uADF9\uAC15\uC758 \uBC14\uC0AD\uD568"
  },
  heroImage: "/images/crispy-pata.jpg",
  difficulty: "hard",
  prepTimeMinutes: 30,
  cookTimeMinutes: 60,
  defaultServings: 6,
  caloriesPerServing: 680,
  category: "sizzling",
  dietaryTags: ["classic"],
  supportedCookware: ["traditional", "airFryer", "instantPot"],
  culture: {
    originRegion: {
      "zh-TW": "\u5361\u6D1B\u5967\u574E\u5E02 Barrio Fiesta \u9910\u5EF3 (Caloocan, Metro Manila, 1950s)",
      "en": "Invented in the 1950s by Rodolfo Ongpauco at Barrio Fiesta, Caloocan",
      "fil": "Inimbento sa Barrio Fiesta sa Caloocan noong 1950s",
      "ja": "1950\u5E74\u4EE3\u306B\u30DE\u30CB\u30E9\u8FD1\u90CA\u30AB\u30ED\u30FC\u30AB\u30F3\u5E02\u306E\u540D\u5E97\u30D0\u30EA\u30AA\u30FB\u30D5\u30A3\u30A8\u30B9\u30BF\u3067\u8A95\u751F",
      "ko": "1950\uB144\uB300 \uB9C8\uB2D0\uB77C \uCE7C\uB85C\uC624\uCE78\uC758 \uC720\uBA85 \uB808\uC2A4\uD1A0\uB791 \uBC14\uB9AC\uC624 \uD53C\uC5D0\uC2A4\uD0C0\uC5D0\uC11C \uAC1C\uBC1C"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u99AC\u5C3C\u62C9\u6E6F\u90FD Ugbo \u6DF1\u591C\u6392\u6A94", "en": "Ugbo Food Strip, Tondo", "fil": "Ugbo St., Tondo Maynila", "ja": "\u30DE\u30CB\u30E9\u30FB\u30C8\u30F3\u30C9\u5730\u533A\u5C4B\u53F0\u8857", "ko": "\uB9C8\uB2D0\uB77C \uD1A4\uB3C4 \uC6B0\uADF8\uBCF4 \uC57C\uC2DC\uC7A5" },
      { "zh-TW": "\u5168\u83F2\u5404\u5927 Barrio Fiesta \u8001\u5B57\u865F", "en": "Barrio Fiesta Heritage Restaurants", "fil": "Barrio Fiesta Restaurants", "ja": "\u30D0\u30EA\u30AA\u30FB\u30D5\u30A3\u30A8\u30B9\u30BF\u5404\u5E97", "ko": "\uBC14\uB9AC\uC624 \uD53C\uC5D0\uC2A4\uD0C0 \uBCF8\uC810" }
    ],
    historyStory: {
      "zh-TW": "1950\u5E74\u4EE3\uFF0C\u99AC\u5C3C\u62C9\u5361\u6D1B\u5967\u574E\u5E02 Barrio Fiesta \u9910\u5EF3\u5275\u8FA6\u4EBA\u4E4B\u5B50 Rodolfo Ongpauco\uFF0C\u770B\u5230\u5EDA\u623F\u88E1\u88AB\u4E1F\u68C4\u7684\u5927\u91CF\u8C6C\u8E44\u8180\uFF08Pata\uFF09\uFF0C\u9748\u6A5F\u4E00\u52D5\u5C07\u5176\u5148\u653E\u5165\u5927\u934B\u52A0\u5165\u6D0B\u8525\u3001\u849C\u74E3\u3001\u6708\u6842\u8449\u6162\u71C9\u81F3\u8EDF\u721B\uFF0C\u51B7\u85CF\u98A8\u4E7E\u5F8C\u4E1F\u9032\u5927\u6CB9\u934B\u70B8\u88FD\u3002\u6C92\u60F3\u5230\u8C6C\u76AE\u5728\u9AD8\u6EAB\u6CB9\u4E2D\u77AC\u9593\u7206\u88C2\u8D77\u5BC6\u96C6\u6C23\u6CE1\uFF0C\u9165\u8106\u5982\u8584\u8106\u9905\u4E7E\uFF0C\u9AA8\u8089\u591A\u6C41\u6ED1\u5AE9\uFF0C\u5F9E\u6B64\u6210\u70BA\u8F5F\u52D5\u5168\u570B\u7684\u83F2\u5F8B\u8CD3\u9802\u7D1A\u570B\u83DC\uFF01",
      "en": "In the 1950s, Rodolfo Ongpauco\u2014son of the founders of Barrio Fiesta in Caloocan\u2014experimented with surplus pig knuckles. He boiled the knuckle tender with bay leaves, star anise, garlic and peppercorns, dried it in the fridge, and deep-fried it until the skin puffed into millions of brittle blisters. It revolutionized Filipino party food forever!",
      "fil": "Inimbento ni Rodolfo Ongpauco noong dekada 50 gamit ang tinapong pata ng baboy. Pinasikat sa Barrio Fiesta at naging pambansang paborito sa salo-salo.",
      "ja": "1950\u5E74\u4EE3\u306B\u30D0\u30EA\u30AA\u30FB\u30D5\u30A3\u30A8\u30B9\u30BF\u306E\u606F\u5B50\u30ED\u30C9\u30EB\u30D5\u30A9\u304C\u4F59\u3063\u305F\u8C5A\u3059\u306D\u8089\u3092\u716E\u8FBC\u3093\u3067\u4E7E\u71E5\u3055\u305B\u3001\u5F37\u706B\u3067\u63DA\u3052\u305F\u3068\u3053\u308D\u3001\u76AE\u304C\u5947\u8DE1\u7684\u306A\u30AB\u30EA\u30AB\u30EA\u98DF\u611F\u306B\u306A\u308A\u7206\u767A\u7684\u4EBA\u6C17\u30E1\u30CB\u30E5\u30FC\u3068\u306A\u308A\u307E\u3057\u305F\u3002",
      "ko": "1950\uB144\uB300 \uBC14\uB9AC\uC624 \uD53C\uC5D0\uC2A4\uD0C0 \uCC3D\uC5C5\uC8FC\uC758 \uC544\uB4E4\uC774 \uB0A8\uC740 \uB3FC\uC9C0 \uC871\uBC1C\uC744 \uD5A5\uC2E0\uB8CC\uC640 \uC0B6\uC544 \uBC14\uC2F9 \uB9D0\uB9B0 \uB4A4 \uD280\uACA8\uB0B4\uC5B4, \uD06C\uB798\uCEE4\uCC98\uB7FC \uBC14\uC0AD\uD55C \uAECD\uC9C8\uC744 \uAC00\uC9C4 \uD601\uBA85\uC801\uC778 \uC694\uB9AC\uB85C \uD0C4\uC0DD\uC2DC\uCF30\uC2B5\uB2C8\uB2E4."
    },
    filipinoScript: "Crispy Pata na Baboy",
    filipinoPhonetics: "Krees-pee Pah-tah nah Bah-boy",
    audioPronunciationText: "Isang buong malutong na Crispy Pata po at maraming sawsawan na Toyomansi!"
  },
  ingredients: [
    {
      id: "pork-knuckle",
      name: { "zh-TW": "\u6574\u96BB\u5E36\u76AE\u8C6C\u524D\u8E44\u6216\u5F8C\u8E44\u8180 (Pork Shank/Hock)", "en": "Whole Pork Hock / Knuckle (Skin-on)", "fil": "Buong Pata ng Baboy", "ja": "\u76AE\u4ED8\u304D\u8C5A\u3059\u306D\u8089\uFF08\u8C5A\u8DB3\u30FB\u30DB\u30C3\u30AF\u4E38\u3054\u30681\u672C\uFF09", "ko": "\uD1B5 \uB3FC\uC9C0 \uC7A5\uC871/\uC55E\uB2E4\uB9AC \uC871\uBC1C (\uAECD\uC9C8 \uC788\uB294 \uAC83)" },
      amount: 1400,
      unitMetric: "g",
      unitUS: "3 lb",
      isKeyFlavor: true,
      filipinoName: "Pata ng Baboy",
      filipinoPronunciation: "Pah-tah nang Bah-boy"
    },
    {
      id: "bay-leaves",
      name: { "zh-TW": "\u4E7E\u71E5\u6708\u6842\u8449", "en": "Dried Bay Leaves", "fil": "Dahon ng Laurel", "ja": "\u30ED\u30FC\u30EA\u30A8", "ko": "\uC6D4\uACC4\uC218 \uC78E" },
      amount: 5,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Dahon ng Laurel",
      filipinoPronunciation: "Dah-hon nang Lah-oo-rel"
    },
    {
      id: "star-anise",
      name: { "zh-TW": "\u516B\u89D2\u8334\u9999 (\u71C9\u716E\u53BB\u8165\u589E\u9999)", "en": "Star Anise", "fil": "Star Anise", "ja": "\u516B\u89D2\uFF08\u30B9\u30BF\u30FC\u30A2\u30CB\u30B9\uFF09", "ko": "\uD314\uAC01" },
      amount: 2,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Star Anise",
      filipinoPronunciation: "Star Anise"
    },
    {
      id: "garlic-onion",
      name: { "zh-TW": "\u6574\u982D\u5927\u849C\u8207\u6D0B\u8525\u584A", "en": "Whole Head Garlic & 1 Onion (for broth)", "fil": "Bawang at Sibuyas", "ja": "\u4E38\u3054\u3068\u306B\u3093\u306B\u304F\u3068\u7389\u306D\u304E", "ko": "\uD1B5\uB9C8\uB298 1\uD1B5\uACFC \uC591\uD30C 1\uAC1C" },
      amount: 1,
      unitMetric: "piece",
      unitUS: "piece",
      filipinoName: "Bawang at Sibuyas",
      filipinoPronunciation: "Bah-wang at See-boo-yas"
    },
    {
      id: "peppercorns",
      name: { "zh-TW": "\u6574\u9846\u539F\u7C92\u9ED1\u80E1\u6912", "en": "Whole Black Peppercorns", "fil": "Pamintang Buo", "ja": "\u7C92\u9ED2\u80E1\u6912", "ko": "\uD1B5\uD751\uD6C4\uCD94" },
      amount: 1,
      unitMetric: "tbsp",
      unitUS: "1 tbsp",
      filipinoName: "Paminta",
      filipinoPronunciation: "Pah-meen-tah"
    },
    {
      id: "coarse-salt",
      name: { "zh-TW": "\u7C97\u6D77\u9E7D (\u62B9\u76AE\u8207\u71C9\u8089\u7528)", "en": "Coarse Sea Salt (for boiling & rubbing skin)", "fil": "Asin", "ja": "\u7C97\u5869", "ko": "\uAD75\uC740 \uCC9C\uC77C\uC5FC" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      filipinoName: "Asin",
      filipinoPronunciation: "Ah-seen"
    },
    {
      id: "cane-vinegar-dip",
      name: { "zh-TW": "\u7518\u8517\u918B\u8207\u91AC\u6CB9\u849C\u8FA3\u6CBE\u91AC (Toyomansi-Suka Dip)", "en": "Cane Vinegar, Soy Sauce, Calamansi, Garlic & Chili Dip", "fil": "Toyo, Suka, Kalamansi, Bawang at Sili (Toyomansi)", "ja": "\u30B5\u30C8\u30A6\u30AD\u30D3\u9162\u30FB\u91A4\u6CB9\u30FB\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u30FB\u30CB\u30F3\u30CB\u30AF\u5510\u8F9B\u5B50\u30C0\u30EC", "ko": "\uC0AC\uD0D5\uC218\uC218 \uC2DD\uCD08, \uAC04\uC7A5, \uAE54\uB77C\uB9CC\uC2DC, \uB9C8\uB298, \uACE0\uCD94 \uD2B9\uC81C \uB514\uD551 \uC18C\uC2A4" },
      amount: 120,
      unitMetric: "ml",
      unitUS: "0.5 cup",
      isKeyFlavor: true,
      filipinoName: "Toyomansi Suka",
      filipinoPronunciation: "Toh-yoh-mahn-see Soo-kah"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u9999\u6599\u6C34\u5927\u706B\u6162\u71C9\u8E44\u8180\u81F3\u9AA8\u8089\u8EDF\u5AE9", "en": "Simmer Pork Hock with Aromatics until Tender", "fil": "Pakuluan ang Pata Kasama ang mga Pampalasa", "ja": "\u9999\u8F9B\u91CE\u83DC\u3068\u5171\u306B\u8C5A\u3059\u306D\u8089\u3092\u67D4\u3089\u304B\u304F\u306A\u308B\u307E\u3067\u716E\u8FBC\u3080", "ko": "\uD5A5\uC2E0\uB8CC\uB97C \uB123\uACE0 \uC871\uBC1C\uC744 \uD479 \uC0B6\uC544 \uBD80\uB4DC\uB7FD\uAC8C \uB9CC\uB4E4\uAE30" },
      instruction: {
        "zh-TW": "\u5927\u6DF1\u934B\u4E2D\u653E\u5165\u6D17\u6DE8\u522E\u9664\u96DC\u6BDB\u7684\u6574\u96BB\u8C6C\u8E44\u8180\uFF0C\u52A0\u6E05\u6C34\u5B8C\u5168\u6DF9\u6C92\u8E44\u8180\u3002\u52A0\u5165\u62CD\u6241\u5927\u849C\u3001\u5207\u584A\u6D0B\u8525\u3001\u6708\u6842\u8449\u3001\u516B\u89D2\u3001\u9ED1\u80E1\u6912\u7C92\u8207 2 \u5927\u5319\u9E7D\u3002\u5927\u706B\u716E\u6CB8\u6488\u6DE8\u6D6E\u6CAB\uFF0C\u8F49\u5C0F\u706B\u52A0\u84CB\u6162\u71C9 1 \u5C0F\u6642 15 \u5206\u9418\u81F3 1.5 \u5C0F\u6642\uFF08\u6216\u4F7F\u7528\u58D3\u529B\u934B 35 \u5206\u9418\uFF09\uFF0C\u76F4\u5230\u7B77\u5B50\u80FD\u8F15\u6613\u7A7F\u900F\u5916\u76AE\u8207\u8E44\u7B4B\uFF0C\u6488\u51FA\u3002",
        "en": "Place the whole cleaned pork knuckle into a large stockpot, submerge in water. Add crushed garlic, onion quarters, bay leaves, star anise, peppercorns, and 2 tbsp salt. Bring to a rapid boil and skim scum. Cover and simmer gently for 75-90 mins (or 35 mins in Instant Pot) until fork-tender but intact. Lift out carefully.",
        "fil": "Pakuluan ang pata sa tubig kasama ang bawang, sibuyas, dahon ng laurel, star anise, paminta, at asin nang 1.5 oras hanggang lumambot nang husto.",
        "ja": "\u5927\u934B\u306B\u8C5A\u3059\u306D\u8089\u3092\u5165\u308C\u3001\u305F\u3063\u3077\u308A\u306E\u6C34\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u7389\u306D\u304E\u3001\u30ED\u30FC\u30EA\u30A8\u3001\u516B\u89D2\u3001\u9ED2\u80E1\u6912\u3001\u5869\u3092\u52A0\u3048\u307E\u3059\u3002\u6CB8\u9A30\u3055\u305B\u3066\u30A2\u30AF\u3092\u53D6\u308A\u3001\u30D5\u30BF\u3092\u3057\u3066\u5F31\u706B\u306775\u301C90\u5206\uFF08\u5727\u529B\u934B\u306A\u308935\u5206\uFF09\u76AE\u304C\u67D4\u3089\u304B\u304F\u306A\u308B\u307E\u3067\u716E\u8FBC\u307F\u307E\u3059\u3002",
        "ko": "\uB0C4\uBE44\uC5D0 \uC871\uBC1C\uACFC \uBB3C\uC744 \uB109\uB109\uD788 \uBD93\uACE0 \uB9C8\uB298, \uC591\uD30C, \uC6D4\uACC4\uC218 \uC78E, \uD314\uAC01, \uD1B5\uD6C4\uCD94, \uC18C\uAE08\uC744 \uB123\uC2B5\uB2C8\uB2E4. \uB053\uC5B4\uC624\uB974\uBA74 \uAC70\uD488\uC744 \uAC77\uC5B4\uB0B4\uACE0 \uB69C\uAED1 \uB36E\uC5B4 \uC57D\uBD88\uC5D0\uC11C 75~90\uBD84\uAC04(\uC555\uB825\uC1A5 35\uBD84) \uD479 \uC0B6\uC544 \uAC74\uC838\uB0C5\uB2C8\uB2E4."
      },
      durationSeconds: 5400,
      image: "/images/crispy-pata-step1.jpg",
      cookwareVariations: [
        {
          cookware: "instantPot",
          tempAndSetting: "Instant Pot: Meat/Stew High Pressure for 35 mins (natural release)",
          instructionOverride: {
            "zh-TW": "\u58D3\u529B\u934B\u6A21\u5F0F\uFF1A\u8E44\u8180\u52A0 1000ml \u6C34\u8207\u5168\u90E8\u9999\u6599\uFF0C\u84CB\u4E0A\u95A5\u9580\u9078 Meat/Stew \u9AD8\u58D3 35 \u5206\u9418\uFF0C\u81EA\u7136\u6D29\u58D3 15 \u5206\u9418\u3002\u8089\u8CEA\u9165\u721B\u591A\u6C41\uFF0C\u7701\u4E0B\u5927\u628A\u6642\u9593\uFF01",
            "en": "Instant Pot Variation: Add knuckle with 1000ml water and aromatics. Cook on High Pressure for 35 mins, then natural release for 15 mins. Perfect tenderness without hours of simmering!",
            "fil": "Instant Pot: Ilagay ang pata at 1000ml tubig. I-set sa Meat/Stew High Pressure nang 35 minuto.",
            "ja": "\u96FB\u6C17\u5727\u529B\u934B\u8A2D\u5B9A\uFF1A\u8089\u3068\u6C341000ml\u3001\u8ABF\u5473\u6599\u3092\u5165\u308C\u9AD8\u5727\u306735\u5206\u52A0\u5727\u5F8C\u300115\u5206\u84B8\u3089\u3057\u3066\u6E1B\u5727\u3057\u307E\u3059\u3002\u8089\u304C\u4FE1\u3058\u3089\u308C\u306A\u3044\u307B\u3069\u67D4\u3089\u304B\u304F\u306A\u308A\u307E\u3059\u3002",
            "ko": "\uC778\uC2A4\uD134\uD2B8\uD31F \uC124\uC815: \uC871\uBC1C\uACFC \uBB3C 1000ml, \uD5A5\uC2E0\uB8CC\uB97C \uB123\uACE0 \uACE0\uC555 35\uBD84 \uC870\uB9AC \uD6C4 15\uBD84 \uC790\uC5F0 \uAC10\uC555\uD569\uB2C8\uB2E4."
          }
        }
      ]
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u6233\u6D1E\u62B9\u9E7D\uFF0C\u653E\u51B0\u7BB1\u51B7\u85CF\u98A8\u4E7E\uFF08\u6975\u81F4\u8106\u76AE\u79D8\u8A23\uFF01\uFF09", "en": "Prick Skin, Rub Salt & Chill Dry in Fridge (The Crunch Secret!)", "fil": "Tusukin ang Balat, Lagyan ng Asin at Patuyuin sa Ref", "ja": "\u76AE\u306B\u7121\u6570\u306E\u7A74\u3092\u958B\u3051\u3001\u5869\u3092\u63C9\u307F\u8FBC\u307F\u51B7\u8535\u5EAB\u3067\u4E7E\u71E5\u3055\u305B\u308B", "ko": "\uAECD\uC9C8\uC5D0 \uD3EC\uD06C\uB85C \uAD6C\uBA4D\uC744 \uC22D\uC22D \uB0B4\uACE0 \uC18C\uAE08 \uBC1C\uB77C \uB0C9\uC7A5\uACE0\uC5D0 \uB9D0\uB9AC\uAE30 (\uD575\uC2EC \uBE44\uBC95!)" },
      instruction: {
        "zh-TW": "\u3010\u95DC\u9375\u79D8\u8A23\u3011\uFF1A\u6488\u51FA\u7684\u8E44\u8180\u7528\u5EDA\u623F\u7D19\u5DFE\u5FB9\u5E95\u64E6\u4E7E\u3002\u62FF\u53C9\u5B50\u6216\u5C16\u7C64\u5728\u8C6C\u76AE\u8868\u9762\u3010\u5BC6\u96C6\u6233\u51FA\u7121\u6578\u5FAE\u5C0F\u7D30\u5B54\uFF08\u4E0D\u8981\u6233\u7A7F\u5230\u8089\uFF09\u3011\u3002\u5728\u8868\u76AE\u8584\u8584\u62B9\u4E0A\u4E00\u5C64\u9E7D\u8207\u5C11\u8A31\u767D\u918B\u3002\u5C07\u8E44\u8180\u653E\u5728\u7DB2\u67B6\u4E0A\uFF0C\u3010\u653E\u5165\u51B0\u7BB1\u51B7\u85CF\u4E0D\u52A0\u84CB\u98A8\u4E7E\u81F3\u5C11 4-6 \u5C0F\u6642\u6216\u9694\u591C\u3011\u3002\u51B7\u98A8\u6703\u8B93\u8C6C\u76AE\u6C34\u5206\u5B8C\u5168\u84B8\u767C\u62BD\u4E7E\uFF0C\u5448\u73FE\u76AE\u9769\u822C\u7DCA\u7E43\u4E7E\u723D\u72C0\u614B\uFF01",
        "en": "CRUCIAL CRISP SECRET: Pat hot knuckle completely dry. Using a fork or skewer, poke hundreds of tiny holes across the skin (pricking skin only, not into the deep meat). Rub with a light layer of salt and 1 tbsp vinegar. Place uncovered on a wire rack in the fridge for at least 4-6 hours or overnight. The chilled circulating air completely dehydrates the skin into parchment!",
        "fil": "Patuyuin ang pata gamit ang paper towel. Tusukin ng tinidor ang balat nang maraming beses. Lagyan ng asin at suka, at patuyuin sa ref nang walang takip nang magdamag.",
        "ja": "\u3010\u6700\u5927\u306E\u79D8\u8A23\u3011\u30DA\u30FC\u30D1\u30FC\u3067\u6C34\u5206\u3092\u5FB9\u5E95\u7684\u306B\u62ED\u304D\u53D6\u308A\u307E\u3059\u3002\u30D5\u30A9\u30FC\u30AF\u3067\u76AE\u5168\u4F53\u306B\u3010\u7121\u6570\u306E\u5C0F\u3055\u306A\u7A74\u3092\u958B\u3051\u307E\u3059\u3011\u3002\u5869\u5C11\u3005\u3068\u9162\u3092\u8584\u304F\u5857\u308A\u3001\u30E9\u30C3\u30D7\u3092\u305B\u305A\u306B\u51B7\u8535\u5EAB\u3067\u4E00\u6669\uFF08\u6700\u4F4E4\u6642\u9593\uFF09\u98A8\u4E7E\u3055\u305B\u307E\u3059\u3002\u76AE\u304C\u30AB\u30B5\u30AB\u30B5\u306B\u4E7E\u304F\u3053\u3068\u3067\u3001\u63DA\u3052\u305F\u6642\u306B\u7206\u767A\u7684\u306A\u30AB\u30EA\u30AB\u30EA\u611F\u3092\u751F\u307F\u307E\u3059\uFF01",
        "ko": "\u3010\uBC14\uC0AD\uD568\uC758 \uBE44\uACB0\u3011 \uC871\uBC1C \uBB3C\uAE30\uB97C \uAF3C\uAF3C\uD788 \uB2E6\uACE0 \uD3EC\uD06C\uB85C \uAECD\uC9C8 \uC804\uCCB4\uC5D0 \uC218\uBC31 \uAC1C\uC758 \uBBF8\uC138\uD55C \uAD6C\uBA4D\uC744 \uB0C5\uB2C8\uB2E4. \uC2DD\uCD08 1\uD070\uC220\uACFC \uC18C\uAE08\uC744 \uC587\uAC8C \uBC14\uB978 \uB4A4 \uB7A9\uC744 \uC50C\uC6B0\uC9C0 \uC54A\uACE0 \uB0C9\uC7A5\uACE0\uC5D0 \uD558\uB8FB\uBC24(\uCD5C\uC18C 4\uC2DC\uAC04) \uBC14\uC2F9 \uB9D0\uB9BD\uB2C8\uB2E4."
      },
      durationSeconds: 14400,
      image: "/images/crispy-pata-step2.jpg",
      crucialTips: {
        "zh-TW": "\u5982\u679C\u8C6C\u76AE\u9084\u7559\u6709\u6FD5\u6C23\u76F4\u63A5\u4E0B\u934B\uFF0C\u4E0D\u50C5\u4E0D\u6703\u7206\u76AE\uFF0C\u9084\u6703\u5287\u70C8\u5674\u6CB9\u5F15\u767C\u5371\u96AA\uFF01\u5FB9\u5E95\u98A8\u4E7E\u7684\u8C6C\u76AE\u4E0B\u934B\u624D\u6703\u50CF\u7C73\u9999\u822C\u81A8\u8139\u7206\u8106\u3002",
        "en": "Wet skin causes violent oil splattering and stays leathery. Fully dehydrated skin puffs into crispy glass blisters instantly!",
        "fil": "Mapanganib magprito kapag basa ang balat dahil puputok ang mantika. Kailangang tuyong-tuyo.",
        "ja": "\u6C34\u5206\u304C\u6B8B\u3063\u3066\u3044\u308B\u3068\u6FC0\u3057\u304F\u6CB9\u304C\u306F\u306D\u3066\u5371\u967A\u306A\u4E0A\u3001\u76AE\u304C\u786C\u304F\u306A\u3063\u3066\u3057\u307E\u3044\u307E\u3059\u3002\u5B8C\u5168\u306B\u4E7E\u304B\u3059\u3053\u3068\u304C\u6210\u529F\u3078\u306E\u7D76\u5BFE\u6761\u4EF6\u3067\u3059\u3002",
        "ko": "\uBB3C\uAE30\uAC00 \uB0A8\uC740 \uC0C1\uD0DC\uB85C \uD280\uAE30\uBA74 \uAE30\uB984\uC774 \uC0AC\uBC29\uC73C\uB85C \uD280\uC5B4 \uC704\uD5D8\uD558\uBA70 \uAECD\uC9C8\uC774 \uC9C8\uACA8\uC9D1\uB2C8\uB2E4. \uD45C\uBA74\uC774 \uC644\uC804\uD788 \uAC74\uC870\uD574\uC57C \uBC14\uC0AD\uD558\uAC8C \uBD80\uD489\uB2C8\uB2E4."
      }
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u9AD8\u6EAB\u7206\u70B8\u81F3\u91D1\u9EC3\u7206\u76AE\u8D77\u6CE1\uFF0C\u5207\u584A\u8638\u849C\u8FA3\u918B", "en": "Deep Fry to Blistered Gold or Air Fry to Perfection", "fil": "Iprito Hanggang Pumutok ang Balat o I-Air Fry", "ja": "\u9AD8\u6E29\u3067\u63DA\u3052\u3066\u76AE\u3092\u6C17\u6CE1\u72B6\u306B\u5F3E\u3051\u3055\u305B\u308B\uFF08\u307E\u305F\u306F\u30A8\u30A2\u30D5\u30E9\u30A4\uFF09", "ko": "\uACE0\uC628\uC5D0 \uD280\uACA8 \uAECD\uC9C8\uC744 \uBC14\uC0AD\uD558\uAC8C \uBD80\uD480\uB9AC\uAE30 (\uB610\uB294 \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4)" },
      instruction: {
        "zh-TW": "\u3010\u6DF1\u934B\u6CB9\u70B8\u6CD5\u3011\u6DF1\u934B\u5012\u6CB9\u71D2\u81F3 190\xB0C\u3002\u5C0F\u5FC3\u5C07\u98A8\u4E7E\u7684\u8E44\u8180\u6ED1\u5165\u6CB9\u934B\uFF0C\u3010\u7ACB\u5373\u84CB\u4E0A\u934B\u84CB\u9632\u6CB9\u6FFA\uFF01\u3011\u3002\u4FDD\u6301\u4E2D\u5927\u706B\u70B8 8-10 \u5206\u9418\uFF0C\u7FFB\u9762\u518D\u70B8 8 \u5206\u9418\uFF0C\u76F4\u5230\u6574\u96BB\u8E44\u8180\u5916\u76AE\u91D1\u9EC3\u3001\u8D77\u6EFF\u7D30\u5BC6\u767D\u8272\u8106\u6CE1\u3002\u6488\u51FA\u7ACB\u5728\u67B6\u4E0A\u701D\u6CB9 5 \u5206\u9418\u3002\u62FF\u5927\u83DC\u5200\u65AC\u6210\u5927\u584A\uFF0C\u5916\u76AE\u5494\u5693\u8106\u97FF\uFF0C\u914D\u4E0A\u7531\u7518\u8517\u918B\u3001\u91AC\u6CB9\u3001\u91D1\u6854\u3001\u62CD\u6241\u5927\u849C\u8207\u5C0F\u8FA3\u6912\u8ABF\u6210\u7684\u5C08\u5C6C Toyomansi \u6CBE\u91AC\uFF01",
        "en": "Traditional Fry: Heat deep oil to 190\xB0C (375\xB0F). Lower dried pork carefully into the oil and IMMEDIATELY COVER WITH LID to contain splatter! Fry 8-10 mins per side until the entire skin erupts into a sea of crispy golden blisters. Rest vertically on a rack for 5 mins. Chop with a cleaver and serve with spiced toyomansi-vinegar dip!",
        "fil": "Iprito sa mainit na mantika (190\xB0C) nang 8-10 minuto bawat gilid. Takpan ang kawali para hindi mapilantikan ng mantika. Hiwain at isawsaw sa toyo-mansi na may suka at sili!",
        "ja": "\u6CB9\u3092190\u2103\u306B\u71B1\u3057\u3001\u8089\u3092\u9759\u304B\u306B\u5165\u308C\u3010\u3059\u3050\u306B\u30D5\u30BF\u3092\u3057\u3066\u6CB9\u306F\u306D\u3092\u9632\u304E\u307E\u3059\uFF01\u3011\u3002\u4E21\u9762\u30928\u301C10\u5206\u305A\u3064\u63DA\u3052\u3001\u76AE\u5168\u4F53\u304C\u767D\u304F\u30D7\u30C4\u30D7\u30C4\u3068\u81A8\u3089\u3093\u3060\u3089\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002\u5305\u4E01\u3067\u8C6A\u5FEB\u306B\u5207\u308A\u5206\u3051\u3001\u7279\u88FD\u30D4\u30EA\u8F9B\u67D1\u6A58\u9162\u91A4\u6CB9\u30C0\u30EC\u306B\u3064\u3051\u3066\u3069\u3046\u305E\uFF01",
        "ko": "\uAE30\uB984\uC744 190\uB3C4\uB85C \uB2EC\uAD70 \uB4A4 \uC871\uBC1C\uC744 \uB123\uACE0 \u3010\uC989\uC2DC \uB69C\uAED1\uC744 \uB36E\uC5B4 \uAE30\uB984 \uD290\uC744 \uBC29\uC9C0\uD569\uB2C8\uB2E4!\u3011 \uC55E\uB4A4\uB85C 8~10\uBD84\uC529 \uD280\uACA8 \uAECD\uC9C8\uC774 \uD558\uC597\uAC8C \uBD80\uD480\uC5B4 \uC624\uB974\uBA74 \uAC74\uC838\uB0C5\uB2C8\uB2E4. \uCE7C\uB85C \uD07C\uC9C1\uD558\uAC8C \uC370\uC5B4 \uB9E4\uCF64\uD55C \uD1A0\uC694\uB9CC\uC2DC \uC2DD\uCD08\uC7A5\uC5D0 \uCC0D\uC5B4 \uB4DC\uC138\uC694!"
      },
      durationSeconds: 900,
      image: "/images/crispy-pata-step3.jpg",
      cookwareVariations: [
        {
          cookware: "airFryer",
          tempAndSetting: "Air Fryer: 200\xB0C (395\xB0F) for 25-30 mins (zero mess!)",
          instructionOverride: {
            "zh-TW": "\u6C23\u70B8\u934B\u6A21\u5F0F\uFF08\u5C45\u5BB6\u5F37\u70C8\u63A8\u85A6\uFF01\uFF09\uFF1A\u5C07\u98A8\u4E7E\u7684\u8E44\u8180\u8868\u9762\u5747\u52FB\u5237\u4E0A\u8584\u6CB9\u3002\u653E\u5165\u6C23\u70B8\u7C43\u4EE5 200\xB0C \u6C23\u70B8 15 \u5206\u9418\uFF0C\u7FFB\u9762\u518D\u5237\u6CB9\u6C23\u70B8 12-15 \u5206\u9418\u3002\u8C6C\u76AE\u5728\u9AD8\u6EAB\u71B1\u98A8\u4E0B\u760B\u72C2\u7206\u51FA\u9EC3\u91D1\u6C34\u6CE1\uFF0C\u5B8C\u5168\u4E0D\u5674\u6CB9\u3001\u5EDA\u623F\u4E7E\u4E7E\u6DE8\u6DE8\uFF0C\u9165\u8106\u5EA6\u8207\u6CB9\u70B8\u4E00\u6A21\u4E00\u6A23\uFF01",
            "en": "Air Fryer Variation (Home Game-Changer!): Brush the dehydrated pork skin lightly with cooking oil. Place in basket. Air fry at 200\xB0C (395\xB0F) for 15 mins, flip, brush oil, and air fry for another 12-15 mins. The skin erupts into thousands of airy blisters with ZERO grease splatter in your kitchen!",
            "fil": "Paraan sa Air Fryer: Pahiran ng mantika ang tuyong balat. I-air fry sa 200\xB0C nang 15 minuto, baligtarin at i-air fry pa nang 12-15 minuto. Walang talsik ng mantika at kasing lutong ng prito!",
            "ja": "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u8A2D\u5B9A\uFF08\u5BB6\u5EAD\u306B\u8D85\u30AA\u30B9\u30B9\u30E1\uFF01\uFF09\uFF1A\u98A8\u4E7E\u3055\u305B\u305F\u76AE\u306B\u6CB9\u3092\u8584\u304F\u5857\u308A\u3001200\u2103\u306715\u5206\u52A0\u71B1\u3002\u88CF\u8FD4\u3057\u3066\u6CB9\u3092\u5857\u308A\u3055\u3089\u306B12\u301C15\u5206\u52A0\u71B1\u3057\u307E\u3059\u3002\u6CB9\u306F\u306D\u306E\u5FC3\u914D\u30BC\u30ED\u3067\u3001\u304A\u5E97\u30EC\u30D9\u30EB\u306E\u30AB\u30EA\u30AB\u30EA\u7206\u305C\u76AE\u304C\u518D\u73FE\u3067\u304D\u307E\u3059\uFF01",
            "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uC124\uC815 (\uAC00\uC815\uC6A9 \uAC15\uB825 \uCD94\uCC9C!): \uB9D0\uB9B0 \uC871\uBC1C \uAECD\uC9C8\uC5D0 \uC624\uC77C\uC744 \uBC14\uB974\uACE0 200\xB0C\uC5D0\uC11C 15\uBD84 \uAD7D\uC2B5\uB2C8\uB2E4. \uB4A4\uC9D1\uC5B4\uC11C \uC624\uC77C\uC744 \uBC14\uB974\uACE0 12~15\uBD84\uAC04 \uB354 \uAD6C\uC6CC\uC8FC\uBA74 \uAE30\uB984 \uD290 \uC804\uD600 \uC5C6\uC774 \uC2DD\uB2F9 \uC218\uC900\uC758 \uBC14\uC0AD\uD55C \uAECD\uC9C8\uC774 \uC644\uC131\uB429\uB2C8\uB2E4!"
          }
        }
      ]
    }
  ],
  troubleshooting: [
    {
      id: "skin-hard-like-rock",
      problem: { "zh-TW": "\u8C6C\u76AE\u70B8\u5F8C\u5805\u786C\u5982\u77F3\uFF0C\u54AC\u4E0D\u52D5\u751A\u81F3\u55D1\u7259", "en": "Pork skin is rock-hard and chewy instead of airy and crispy", "fil": "Matigas na parang bato ang balat, hindi malutong", "ja": "\u76AE\u304C\u30AB\u30C1\u30B3\u30C1\u306B\u786C\u304F\u3066\u565B\u307F\u5207\u308C\u306A\u3044", "ko": "\uAECD\uC9C8\uC774 \uBC14\uC0AD\uD558\uC9C0 \uC54A\uACE0 \uB3CC\uCC98\uB7FC \uB531\uB531\uD574\uC11C \uC539\uAE30 \uD798\uB4E6" },
      cause: { "zh-TW": "\u7B2C\u4E00\u968E\u6BB5\u6C34\u716E\u6642\u9593\u4E0D\u8DB3\uFF08\u8C6C\u76AE\u672A\u716E\u900F\u8EDF\u5316\uFF09\uFF0C\u6216\u6CB9\u6EAB\u904E\u4F4E\u5C0E\u81F4\u76AE\u70B8\u4E7E\u812B\u6C34\u6210\u4E86\u76AE\u9769", "en": "Did not boil long enough to gelatinize collagen, or frying oil was too cold", "fil": "Kulang sa kulo ang pata kaya matigas pa ang balat bago iprito", "ja": "\u4E0B\u8339\u3067\u6642\u9593\u304C\u8DB3\u308A\u305A\u30B3\u30E9\u30FC\u30B2\u30F3\u304C\u67D4\u3089\u304B\u304F\u306A\u3063\u3066\u3044\u306A\u304B\u3063\u305F\u304B\u3001\u6CB9\u306E\u6E29\u5EA6\u304C\u4F4E\u3059\u304E\u305F\u305F\u3081", "ko": "\uCCAB \uBC88\uC9F8 \uC0B6\uB294 \uC2DC\uAC04\uC774 \uBD80\uC871\uD574 \uAECD\uC9C8\uC774 \uB35C \uBB3C\uB800\uAC70\uB098 \uD280\uAE40 \uC628\uB3C4\uAC00 \uB0AE\uC558\uC74C" },
      solution: {
        "zh-TW": "\u6C34\u716E\u6216\u58D3\u529B\u934B\u71C9\u716E\u6642\uFF0C\u52D9\u5FC5\u78BA\u4FDD\u7B77\u5B50\u80FD\u8F15\u9B06\u63D2\u900F\u539A\u76AE\uFF1B\u4E14\u6CB9\u70B8/\u6C23\u70B8\u5FC5\u9808\u5728 190-200\xB0C \u9AD8\u6EAB\u77AC\u9593\u5C07\u76AE\u5167\u6C34\u5206\u81A8\u8139\u70B8\u51FA\u7206\u6CE1\u3002",
        "en": "Boil until fork-tender so collagen softens completely. Fry or air-fry at 200\xB0C high heat so the skin expands instantaneously.",
        "fil": "Siguraduhing malambot na ang balat bago patuyuin at iprito sa napakainit na mantika.",
        "ja": "\u4E0B\u8339\u3067\u306E\u969B\u3001\u7BB8\u304C\u30B9\u30C3\u3068\u901A\u308B\u307E\u3067\u67D4\u3089\u304B\u304F\u716E\u308B\u3053\u3068\u3002\u305D\u3057\u3066200\u2103\u306E\u9AD8\u6E29\u3067\u4E00\u6C17\u306B\u6C17\u6CE1\u3092\u7206\u305C\u3055\u305B\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002",
        "ko": "\uC813\uAC00\uB77D\uC774 \uAECD\uC9C8\uC744 \uBD80\uB4DC\uB7FD\uAC8C \uB6AB\uACE0 \uB4E4\uC5B4\uAC08 \uB54C\uAE4C\uC9C0 \uC0B6\uC544\uC8FC\uACE0, 200\uB3C4 \uACE0\uC628\uC5D0\uC11C \uC21C\uC2DD\uAC04\uC5D0 \uAECD\uC9C8\uC744 \uD33D\uCC3D\uC2DC\uCF1C \uD280\uACA8\uC8FC\uC138\uC694."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u8001\u9955\u914D\u642D\u3011\uFF1A\u525B\u70B8\u597D\u7684\u71B1\u9A30\u9A30 Crispy Pata\uFF0C\u4E00\u5B9A\u8981\u914D\u4E0A\u4E00\u7897\u52A0\u4E86\u5927\u91CF\u751F\u849C\u672B\u3001\u788E\u671D\u5929\u6912\u8207\u65B0\u9BAE\u56DB\u5B63\u67D1\u6A58\u6C41\u7684\u7518\u8517\u9ED1\u91AC\u6CB9\uFF08Toyomansi\uFF09\u3002\u5C07\u9178\u8FA3\u91AC\u6C41\u6F86\u5728\u9165\u76AE\u80A5\u8089\u4E0A\uFF0C\u9178\u723D\u89E3\u81A9\uFF0C\u4E00\u53E3\u63A5\u4E00\u53E3\u505C\u4E0D\u4E0B\u4F86\uFF01",
      "en": "The Divine Toyomansi Dip: Never eat Crispy Pata without its soulmate dipping bowl: dark soy sauce, cane vinegar, lots of minced raw garlic, crushed bird\u2019s eye chilies, and 3 squeezed calamansi limes. The fiery tartness balances the rich pork crunch impeccably!",
      "fil": "Tip ng Kusinero: Huwag kakalimutan ang sawsawan na toyo, suka, maraming bawang, sili, at kalamansi para sa balanseng sarap.",
      "ja": "\u79D8\u4F1D\u306E\u3064\u3051\u30C0\u30EC\uFF1A\u30AB\u30EA\u30AB\u30EA\u306E\u71B1\u3005\u30D1\u30BF\u306B\u306F\u3001\u30B5\u30C8\u30A6\u30AD\u30D3\u9162\u3068\u91A4\u6CB9\u3001\u305F\u3063\u3077\u308A\u306E\u751F\u30CB\u30F3\u30CB\u30AF\u3001\u5510\u8F9B\u5B50\u3001\u30AB\u30E9\u30DE\u30F3\u30B7\u30FC\u679C\u6C41\u3092\u5408\u308F\u305B\u305F\u7279\u88FD\u30C0\u30EC\u304C\u5FC5\u9808\u3002\u6FC3\u539A\u306A\u8102\u3092\u723D\u5FEB\u306B\u6D41\u3057\u3066\u304F\u308C\u307E\u3059\uFF01",
      "ko": "\uC18C\uC6B8\uBA54\uC774\uD2B8 \uD1A0\uC694\uB9CC\uC2DC \uC18C\uC2A4: \uAC04\uC7A5\uACFC \uC2DD\uCD08, \uB2E4\uC9C4 \uC0DD\uB9C8\uB298, \uCCAD\uC591\uACE0\uCD94, \uAE54\uB77C\uB9CC\uC2DC\uB97C \uB4EC\uBFCD \uB123\uC740 \uC804\uC6A9 \uC18C\uC2A4\uB97C \uAF2D \uACC1\uB4E4\uC774\uC138\uC694. \uAE30\uB984\uC9C4 \uBC14\uC0AD\uD568\uC744 \uC0C1\uD07C\uD558\uAC8C \uC7A1\uC544\uC8FC\uC5B4 \uBB3C\uB9AC\uC9C0 \uC54A\uACE0 \uACC4\uC18D \uB4E4\uC5B4\uAC11\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes/fishBalls.ts
var fishBalls = {
  id: "fish-balls",
  slug: "fish-balls",
  title: {
    "zh-TW": "\u8857\u982D\u624B\u63A8\u8ECA\u70B8\u9B5A\u4E38\u8207\u4E94\u9999\u5377 (Fish Balls & Kikiam)",
    "en": "Street Cart Fish Balls & Kikiam with Manong\u2019s Sauce",
    "fil": "Street Food Fish Balls at Kikiam na may Manong Sauce",
    "ja": "\u672C\u5834\u5C4B\u53F0\u306E\u63DA\u3052\u30D5\u30A3\u30C3\u30B7\u30E5\u30DC\u30FC\u30EB\uFF06\u30AD\u30AD\u30A2\u30E0\uFF08\u79D8\u4F1D\u30DE\u30CE\u30F3\u30BD\u30FC\u30B9\uFF09",
    "ko": "\uD544\uB9AC\uD540 \uAE38\uAC70\uB9AC \uC218\uB808 \uC5B4\uBB35 \uD280\uAE40 & \uD0A4\uD0A4\uC554 (\uB9C8\uB18D \uD2B9\uC81C \uC18C\uC2A4)"
  },
  subtitle: {
    "zh-TW": "\u99AC\u5C3C\u62C9\u8857\u982D\u9748\u9B42\u63A8\u8ECA\u5C0F\u5403\u30FB\u6241\u5E73\u70B8\u9B5A\u4E38\u4E94\u9999\u8089\u5377\u30FB\u6FC3\u7A20\u751C\u8FA3\u9ED1\u7CD6\u8001\u7239\u91AC\u6C41",
    "en": "The King of Manila Street Carts: Crispy Flat Fish Balls, Kikiam & the Legendary Brown Starch Sauce",
    "fil": "Ang paboritong tuhog-tuhog sa kanto kasama ang masarap na matamis at maanghang na sawsawan",
    "ja": "\u653E\u8AB2\u5F8C\u3084\u4ED5\u4E8B\u5E30\u308A\u306B\u4E32\u3067\u523A\u3057\u3066\u98DF\u3079\u308B\u9752\u6625\u306E\u5473\u3002\u7518\u8F9B\u3044\u3068\u308D\u307F\u30C0\u30EC\u306B\u305F\u3063\u3077\u308A\u6D78\u3057\u3066",
    "ko": "\uD558\uAD63\uAE38\uACFC \uD1F4\uADFC\uAE38\uC758 \uCD94\uC5B5, \uAF2C\uCE58\uB85C \uC9C1\uC811 \uAC74\uC838 \uBA39\uB294 \uBC14\uC0AD\uD55C \uC5B4\uBB35\uACFC \uB2EC\uCF64\uB9E4\uCF64 \uD2B9\uC81C \uC804\uBD84 \uC18C\uC2A4"
  },
  tagline: {
    "zh-TW": "\u7528\u9577\u7AF9\u7C64\u5728\u6CB8\u9A30\u5927\u5E73\u5E95\u934B\u4E2D\u81EA\u5DF1\u6233\u4E38\u5B50\uFF0C\u6D78\u9032\u73BB\u7483\u7F50\u91AC\u6C41\u88E1\u624D\u662F\u6B63\u5B97\u8857\u982D\u5403\u6CD5",
    "en": "The ultimate interactive street ritual: poke your skewers straight into the vendor\u2019s wok!",
    "fil": "Tusok-tusok sa kawali at sawsaw sa garapon\u2014ang tunay na tatak ng kanto sa Pilipinas",
    "ja": "\u5C4B\u53F0\u306E\u5927\u934B\u304B\u3089\u81EA\u5206\u3067\u4E32\u3067\u523A\u3057\u3066\u53D6\u308B\u300C\u30C8\u30A5\u30BD\u30AF\u30FB\u30C8\u30A5\u30BD\u30AF\uFF08\u4E32\u523A\u3057\uFF09\u300D\u306E\u697D\u3057\u3055",
    "ko": "\uB053\uB294 \uD32C\uC5D0\uC11C \uAF2C\uCE58\uB85C \uC9C1\uC811 \uAC74\uC838\uB0B4\uC5B4 \uC720\uB9AC\uBCD1 \uC18C\uC2A4\uC5D0 \uD479 \uB2F4\uAC00 \uBA39\uB294 \uD544\uB9AC\uD540\uB9CC\uC758 \uAE38\uAC70\uB9AC \uBB38\uD654"
  },
  heroImage: "/images/fish-balls.jpg",
  difficulty: "easy",
  prepTimeMinutes: 10,
  cookTimeMinutes: 10,
  defaultServings: 3,
  caloriesPerServing: 240,
  category: "streetFood",
  dietaryTags: ["classic", "pescatarian"],
  supportedCookware: ["traditional", "airFryer"],
  culture: {
    originRegion: {
      "zh-TW": "\u5927\u99AC\u5C3C\u62C9\u6240\u6709\u5B78\u6821\u9580\u53E3\u8207\u5341\u5B57\u8DEF\u53E3\u624B\u63A8\u8ECA (Street Corners of Manila)",
      "en": "Every street corner, church plaza, and school gate across the Philippines",
      "fil": "Bawat Kanto at Tabi ng Paaralan sa Pilipinas",
      "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u5168\u571F\u306E\u5B66\u6821\u524D\u3084\u99C5\u524D\u306E\u624B\u62BC\u3057\u8ECA\u5C4B\u53F0",
      "ko": "\uD544\uB9AC\uD540 \uC804\uC5ED\uC758 \uD559\uAD50 \uC55E\uACFC \uACE8\uBAA9\uAE38 \uB9AC\uC5B4\uCE74 \uB178\uC810"
    },
    famousStreetMarkets: [
      { "zh-TW": "\u5FB7\u62C9\u85A9\u5927\u5B78\u8207\u8056\u6258\u99AC\u65AF\u5927\u5B78\u7F8E\u98DF\u8857", "en": "Taft Avenue & UST Food Alleys, Manila", "fil": "Taft Avenue at Espa\xF1a Maynila", "ja": "\u30DE\u30CB\u30E9\u5927\u5B66\u8857\u30BF\u30D5\u30C8\u901A\u308A", "ko": "\uB9C8\uB2D0\uB77C \uD0C0\uD504\uD2B8 \uC560\uBE44\uB274 \uB300\uD559\uAC00" },
      { "zh-TW": "\u594E\u963F\u5761 Carriedo \u8857\u89D2\u624B\u63A8\u8ECA", "en": "Carriedo street pushcarts, Quiapo", "fil": "Carriedo St., Quiapo", "ja": "\u30AD\u30A2\u30DD\u30FB\u30AB\u30EA\u30A8\u30C9\u901A\u308A", "ko": "\uD034\uC544\uD3EC \uCE74\uB9AC\uC5D0\uB3C4 \uB178\uC810" }
    ],
    historyStory: {
      "zh-TW": "\u83F2\u5F8B\u8CD3\u7684\u70B8\u9B5A\u4E38\uFF08Fish Balls\uFF09\u8207\u95A9\u5357\u6F6E\u6C55\u9B5A\u4E38\u4E0D\u540C\uFF0C\u662F\u58D3\u5F97\u6241\u5E73\u5713\u5F62\u3001\u6CB9\u70B8\u5F8C\u8FC5\u901F\u81A8\u8139\u96A8\u5F8C\u5FAE\u51F9\u7684\u7279\u6B8A\u53E3\u611F\u3002\u8CA9\u8CE3\u7684\u5C0F\u8CA9\u88AB\u89AA\u5207\u7A31\u70BA\u300CManong\uFF08\u8001\u7239\uFF09\u300D\u3002\u98DF\u5BA2\u62FF\u8457\u9577\u7AF9\u7C64\uFF0C\u570D\u8457\u6EFE\u71D9\u7684\u5927\u5E73\u5E95\u6CB9\u934B\u81EA\u884C\u6233\u53D6\u719F\u900F\u6F02\u6D6E\u7684\u9B5A\u4E38\u8207\u4E94\u9999\u5377\uFF08Kikiam\uFF09\uFF0C\u518D\u5C07\u6574\u4E32\u4E38\u5B50\u653E\u9032\u8001\u7239\u7279\u8ABF\u7684\u8910\u8272\u751C\u8FA3\u6FB1\u7C89\u91AC\uFF08Manong Sauce\uFF09\u8207\u8FA3\u6D0B\u8525\u767D\u918B\u7F50\u4E2D\u8638\u900F\uFF0C\u9019\u662F\u6BCF\u500B\u83F2\u5F8B\u8CD3\u4EBA\u6700\u6DF1\u523B\u7684\u96C6\u9AD4\u7AE5\u5E74\u56DE\u61B6\uFF01",
      "en": 'Unlike spherical Chinese fish balls, Filipino street fish balls are flattened discs that puff up dramatically when dropped into hot oil and collapse slightly as they crisp. The vendor is affectionately called "Manong". Customers perform the "Tusok-Tusok" ritual\u2014poking their own skewers into the communal wok and dipping them into giant glass jars of sweet-spicy brown sauce and spiced vinegar!',
      "fil": 'Ang fish ball at kikiam ang pinakatanyag na street food sa Pilipinas. Ang "tusok-tusok" sa kawali ni Manong at pagsawsaw sa matamis at maanghang na sarsa ang paboritong bonding ng magkakaibigan.',
      "ja": "\u4E2D\u83EF\u7CFB\u306E\u9B5A\u56E3\u5B50\u304C\u73FE\u5730\u3067\u5E73\u305F\u3044\u5F62\u306B\u9032\u5316\u3002\u6CB9\u306B\u5165\u308C\u308B\u3068\u30D7\u30AF\u30C3\u3068\u81A8\u3089\u307F\u3001\u5C4B\u53F0\u306E\u304A\u3058\u3055\u3093\uFF08\u30DE\u30CE\u30F3\uFF09\u306E\u79D8\u4F1D\u30C0\u30EC\u306B\u3064\u3051\u3066\u98DF\u3079\u308B\u300C\u30C8\u30A5\u30BD\u30AF\u30FB\u30C8\u30A5\u30BD\u30AF\uFF08\u4E32\u523A\u3057\uFF09\u300D\u306F\u30D5\u30A3\u30EA\u30D4\u30F3\u4EBA\u306B\u3068\u3063\u3066\u306E\u9752\u6625\u306E\u5473\u3067\u3059\u3002",
      "ko": "\uC911\uAD6D\uC2DD \uC5B4\uBB35\uC774 \uD544\uB9AC\uD540\uC5D0\uC11C \uB0A9\uC791\uD55C \uB514\uC2A4\uD06C \uBAA8\uC591\uC73C\uB85C \uBCC0\uD615\uB41C \uAC83. \uD280\uAE30\uBA74 \uD1B5\uD1B5\uD558\uAC8C \uBD80\uD480\uC5B4 \uC624\uB974\uBA70, \uAF2C\uCE58\uB85C \uC9C1\uC811 \uCC14\uB7EC \uAC74\uC9C4 \uB4A4 \uB9C8\uB18D \uD2B9\uC81C \uBE0C\uB77C\uC6B4 \uC18C\uC2A4\uC5D0 \uD479 \uC801\uC154 \uBA39\uB294 \uC804\uD1B5\uC774 \uC788\uC2B5\uB2C8\uB2E4."
    },
    filipinoScript: "Fish Balls at Kikiam na may Manong Sauce",
    filipinoPhonetics: "Fish Balls aht Kee-kyam nah may Mah-nong Sauce",
    audioPronunciationText: "Manong, magkano po ang isang tuhog ng fish balls at kikiam?"
  },
  ingredients: [
    {
      id: "street-fish-balls",
      name: { "zh-TW": "\u83F2\u5F0F\u6241\u5E73\u8857\u982D\u70B8\u9B5A\u4E38 (\u6241\u5713\u5F62)", "en": "Philippine Flat Fish Balls (frozen/chilled pack)", "fil": "Fish Balls (Pang-kanto)", "ja": "\u30D5\u30A3\u30EA\u30D4\u30F3\u98A8\u5E73\u305F\u3044\u30D5\u30A3\u30C3\u30B7\u30E5\u30DC\u30FC\u30EB", "ko": "\uD544\uB9AC\uD540\uC2DD \uB0A9\uC791 \uC5B4\uBB35 \uBCFC" },
      amount: 20,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Fish Balls",
      filipinoPronunciation: "Fish Balls"
    },
    {
      id: "kikiam",
      name: { "zh-TW": "\u8857\u982D\u4E94\u9999\u9999\u8178\u5377 (Kikiam\uFF0C\u6E90\u81EA\u4E94\u9999\u8089\u5377)", "en": "Street-Style Kikiam (Five-Spice Sausage Rolls)", "fil": "Kikiam", "ja": "\u30AD\u30AD\u30A2\u30E0\uFF08\u4E94\u9999\u7C89\u9999\u308B\u3059\u308A\u8EAB\u30BD\u30FC\u30BB\u30FC\u30B8\uFF09", "ko": "\uD0A4\uD0A4\uC554 (\uC624\uD5A5 \uAC00\uBBF8 \uC218\uC81C \uC5B4\uBB35 \uC18C\uC2DC\uC9C0)" },
      amount: 10,
      unitMetric: "piece",
      unitUS: "piece",
      isKeyFlavor: true,
      filipinoName: "Kikiam",
      filipinoPronunciation: "Kee-kyam"
    },
    {
      id: "brown-sugar-sauce",
      name: { "zh-TW": "\u9ED1\u7CD6\u6216\u7D05\u7CD6 (Manong \u79D8\u91AC\u57FA\u5E95)", "en": "Brown Sugar (for Manong Sweet Sauce)", "fil": "Pulang Asukal", "ja": "\u9ED2\u7CD6\uFF08\u30BF\u30EC\u7528\uFF09", "ko": "\uD751\uC124\uD0D5 (\uB9C8\uB18D \uC18C\uC2A4\uC6A9)" },
      amount: 60,
      unitMetric: "g",
      unitUS: "0.33 cup",
      isKeyFlavor: true,
      filipinoName: "Asukal",
      filipinoPronunciation: "Ah-soo-kal"
    },
    {
      id: "soy-sauce",
      name: { "zh-TW": "\u7D14\u91C0\u91AC\u6CB9", "en": "Soy Sauce", "fil": "Toyo", "ja": "\u91A4\u6CB9", "ko": "\uAC04\uC7A5" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      filipinoName: "Toyo",
      filipinoPronunciation: "Toh-yoh"
    },
    {
      id: "cornstarch-sauce",
      name: { "zh-TW": "\u7389\u7C73\u7C89 (\u716E\u51FA\u5982\u7D72\u6ED1\u81A0\u8CEA\u7684\u539A\u7A20\u5EA6)", "en": "Cornstarch (slurry for thick glassy texture)", "fil": "Cornstarch", "ja": "\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\uFF08\u6FC3\u539A\u306A\u3068\u308D\u307F\u7528\uFF09", "ko": "\uC625\uC218\uC218 \uC804\uBD84 (\uAC78\uCB49\uD55C \uB18D\uB3C4\uC6A9)" },
      amount: 2,
      unitMetric: "tbsp",
      unitUS: "2 tbsp",
      isKeyFlavor: true,
      filipinoName: "Cornstarch",
      filipinoPronunciation: "Corn-starch"
    },
    {
      id: "garlic-onion-sauce",
      name: { "zh-TW": "\u5927\u849C\u672B\u3001\u6D0B\u8525\u788E\u8207\u7D05\u8FA3\u6912\u5708", "en": "Minced Garlic, Onion & Fresh Chilies (for sauce)", "fil": "Bawang, Sibuyas, at Siling Labuyo", "ja": "\u307F\u3058\u3093\u5207\u308A\u30CB\u30F3\u30CB\u30AF\u3001\u7389\u306D\u304E\u3001\u5510\u8F9B\u5B50", "ko": "\uB2E4\uC9C4 \uB9C8\uB298, \uC591\uD30C, \uC36C \uCCAD\uC591\uACE0\uCD94" },
      amount: 1,
      unitMetric: "tbsp",
      unitUS: "1 tbsp",
      filipinoName: "Bawang at Sili",
      filipinoPronunciation: "Bah-wang aht See-lee"
    },
    {
      id: "water",
      name: { "zh-TW": "\u6E05\u6C34 (\u716E\u91AC\u6C41\u7528)", "en": "Water (for sauce)", "fil": "Tubig", "ja": "\u6C34", "ko": "\uBB3C" },
      amount: 250,
      unitMetric: "ml",
      unitUS: "1 cup",
      filipinoName: "Tubig",
      filipinoPronunciation: "Too-beeg"
    }
  ],
  steps: [
    {
      stepNumber: 1,
      title: { "zh-TW": "\u6162\u706B\u71AC\u716E\u8857\u982D\u9748\u9B42\u300C\u8001\u7239\u9ED1\u7CD6\u751C\u8FA3\u6FC3\u91AC\u300D", "en": "Simmer Famous Street Manong Brown Sauce", "fil": "Lutuin ang Matamis at Maanghang na Sawsawan ni Manong", "ja": "\u5C4B\u53F0\u540D\u7269\u300C\u30DE\u30CE\u30F3\u30FB\u30D6\u30E9\u30A6\u30F3\u30BD\u30FC\u30B9\uFF08\u7518\u8F9B\u3068\u308D\u307F\u30C0\u30EC\uFF09\u300D\u3092\u4F5C\u308B", "ko": "\uC804\uC124\uC758 \uAE38\uAC70\uB9AC \uB9C8\uB18D \uBE0C\uB77C\uC6B4 \uC18C\uC2A4 \uC878\uC774\uAE30" },
      instruction: {
        "zh-TW": "\u5C0F\u934B\u4E2D\u5012\u5165 250ml \u6E05\u6C34\u3001\u9ED1\u7CD6\u30012 \u5927\u5319\u91AC\u6CB9\u3001\u849C\u672B\u3001\u6D0B\u8525\u788E\u8207\u526A\u788E\u7684\u671D\u5929\u6912\u3002\u5C07\u7389\u7C73\u7C89\u52A0\u5C11\u8A31\u51B7\u6C34\u8ABF\u52FB\uFF0C\u908A\u652A\u62CC\u908A\u5012\u5165\u934B\u4E2D\u3002\u5C0F\u706B\u52A0\u71B1\u4E0D\u65B7\u6162\u652A\uFF0C\u76F4\u5230\u91AC\u6C41\u6CB8\u9A30\u3001\u900F\u660E\u7A20\u4EAE\u5982\u7425\u73C0\u8272\u6FC3\u7CD6\u6F3F\uFF0C\u95DC\u706B\u76DB\u5165\u5927\u73BB\u7483\u7F50\u4E2D\u653E\u6DBC\u3002\u751C\u3001\u9E79\u3001\u8F9B\u3001\u9999\uFF0C\u5B8C\u7F8E\u9084\u539F\u8857\u982D\u6524\u8ECA\u98A8\u5473\uFF01",
        "en": "In a saucepan, combine water, brown sugar, soy sauce, minced garlic, chopped onion, and chilies. Whisk cornstarch with 3 tbsp water into a slurry, then stir into the pot. Cook over medium-low heat, stirring constantly until bubbling into a thick, glossy mahogany sauce. Pour into a glass jar. Authentic Manong sauce is born!",
        "fil": "Pagsamahin ang tubig, pulang asukal, toyo, bawang, sibuyas, sili, at cornstarch slurry. Pakuluan sa mahinang apoy habang hinahalo hanggang lumapot nang husto.",
        "ja": "\u5C0F\u934B\u306B\u6C34\u3001\u9ED2\u7CD6\u3001\u91A4\u6CB9\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u7389\u306D\u304E\u3001\u5510\u8F9B\u5B50\u3092\u5408\u308F\u305B\u307E\u3059\u3002\u6C34\u6EB6\u304D\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\u3092\u56DE\u3057\u5165\u308C\u3001\u4E2D\u5F31\u706B\u3067\u6DF7\u305C\u306A\u304C\u3089\u8276\u3084\u304B\u306A\u3068\u308D\u307F\u304C\u3064\u304F\u307E\u3067\u716E\u8A70\u3081\u307E\u3059\u3002\u30AC\u30E9\u30B9\u74F6\u306B\u79FB\u3057\u3066\u5B8C\u6210\u3002",
        "ko": "\uB0C4\uBE44\uC5D0 \uBB3C, \uD751\uC124\uD0D5, \uAC04\uC7A5, \uB9C8\uB298, \uC591\uD30C, \uACE0\uCD94\uB97C \uB123\uACE0 \uB053\uC785\uB2C8\uB2E4. \uC804\uBD84\uBB3C\uC744 \uB458\uB7EC \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C \uC8FC\uAC71\uC73C\uB85C \uC800\uC5B4\uAC00\uBA70 \uC724\uAE30 \uB098\uB294 \uAC78\uCB49\uD55C \uC18C\uC2A4\uB85C \uC878\uC5EC\uC90D\uB2C8\uB2E4."
      },
      durationSeconds: 300,
      image: "/images/fish-balls-step1.jpg"
    },
    {
      stepNumber: 2,
      title: { "zh-TW": "\u6CB9\u934B\u6162\u70B8\u9B5A\u4E38\u8207\u4E94\u9999\u5377\uFF0C\u81A8\u8139\u8D77\u8106\u76AE", "en": "Deep Fry or Air Fry until Puffy & Golden", "fil": "Iprito ang Fish Balls at Kikiam Hanggang Lumobo at Lumutong", "ja": "\u9B5A\u56E3\u5B50\u3068\u30AD\u30AD\u30A2\u30E0\u3092\u30D7\u30AF\u30C3\u3068\u81A8\u3089\u3080\u307E\u3067\u63DA\u3052\u308B\uFF08\u307E\u305F\u306F\u30A8\u30A2\u30D5\u30E9\u30A4\uFF09", "ko": "\uC5B4\uBB35\uACFC \uD0A4\uD0A4\uC554\uC744 \uD1B5\uD1B5\uD558\uAC8C \uBD80\uD480 \uB54C\uAE4C\uC9C0 \uD280\uAE30\uAE30" },
      instruction: {
        "zh-TW": "\u5E73\u5E95\u6CB9\u934B\u71D2\u71B1\u6CB9\u81F3 175\xB0C\uFF0C\u4E0B\u5165\u6241\u9B5A\u4E38\u8207 Kikiam\u3002\u9B5A\u4E38\u4E0B\u934B\u5F8C\u6703\u5728\u71B1\u6CB9\u4E2D\u8FC5\u901F\u81A8\u8139\u9F13\u8D77\u6210\u91D1\u9EC3\u5713\u7403\uFF08\u7D04 2.5-3 \u5206\u9418\uFF09\uFF0C\u5916\u76AE\u8B8A\u5F97\u8584\u8106\u786C\u633A\u3002\u6488\u51FA\u701D\u6CB9\u3002\u3010\u6C23\u70B8\u934B\u6A21\u5F0F\u8ACB\u53C3\u898B\u5207\u63DB\u3011\u3002",
        "en": "Heat oil in a skillet to 175\xB0C (350\xB0F). Slide in flat fish balls and kikiam. Watch the fish balls puff up dramatically into spheres and turn golden brown with a crispy skin (2.5-3 mins). Drain on wire rack.",
        "fil": "Iprito ang fish balls at kikiam sa mainit na mantika nang 2-3 minuto hanggang lumobo at maging kulay ginto.",
        "ja": "175\u2103\u306B\u71B1\u3057\u305F\u6CB9\u306B\u30D5\u30A3\u30C3\u30B7\u30E5\u30DC\u30FC\u30EB\u3068\u30AD\u30AD\u30A2\u30E0\u3092\u5165\u308C\u307E\u3059\u3002\u4E38\u304F\u30D7\u30AF\u30D7\u30AF\u3068\u81A8\u3089\u307F\u3001\u8868\u9762\u304C\u30AD\u30C4\u30CD\u8272\u3067\u30AB\u30EA\u30C3\u3068\u306A\u308B\u307E\u30672.5\u301C3\u5206\u63DA\u3052\u307E\u3059\u3002",
        "ko": "175\uB3C4 \uAE30\uB984\uC5D0 \uB0A9\uC791 \uC5B4\uBB35\uACFC \uD0A4\uD0A4\uC554\uC744 \uB123\uC2B5\uB2C8\uB2E4. 2~3\uBD84\uAC04 \uD280\uAE30\uBA74 \uD1B5\uD1B5\uD558\uAC8C \uACF5\uCC98\uB7FC \uBD80\uD480\uC5B4 \uC624\uB974\uBA70 \uBC14\uC0AD\uD574\uC9D1\uB2C8\uB2E4."
      },
      durationSeconds: 180,
      image: "/images/fish-balls-step2.jpg",
      cookwareVariations: [
        {
          cookware: "airFryer",
          tempAndSetting: "Air Fryer: 195\xB0C (385\xB0F) for 6-8 mins (shake halfway)",
          instructionOverride: {
            "zh-TW": "\u6C23\u70B8\u934B\u6A21\u5F0F\uFF1A\u5C07\u9B5A\u4E38\u8207 Kikiam \u5674\u4E0A\u4E00\u5C64\u8584\u6CB9\u653E\u5165\u6C23\u70B8\u7C43\uFF0C\u4EE5 195\xB0C \u6C23\u70B8 6-8 \u5206\u9418\uFF0C\u4E2D\u9014\u6416\u6643\u70B8\u7C43\u4E00\u6B21\uFF0C\u51FA\u934B\u5916\u8106\u5167\u5F48\uFF0C\u5B8C\u5168\u4E0D\u6CB9\u81A9\uFF01",
            "en": "Air Fryer Variation: Spray fish balls and kikiam lightly with oil. Air fry at 195\xB0C (385\xB0F) for 6-8 mins, shaking basket halfway through, until puffed and crisp!",
            "fil": "Paraan sa Air Fryer: I-spray ng mantika at i-air fry sa 195\xB0C nang 6-8 minuto, alugin sa kalahati.",
            "ja": "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u8A2D\u5B9A\uFF1A\u6CB9\u3092\u30B9\u30D7\u30EC\u30FC\u3057\u3001195\u2103\u30676\u301C8\u5206\u52A0\u71B1\u3002\u9014\u4E2D\u3067\u4E00\u5EA6\u30D0\u30B9\u30B1\u30C3\u30C8\u3092\u632F\u3063\u3066\u5747\u4E00\u306B\u81A8\u3089\u307E\u305B\u307E\u3059\u3002",
            "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uC124\uC815: \uC624\uC77C\uC744 \uC0B4\uC9DD \uBFCC\uB9AC\uACE0 195\xB0C\uC5D0\uC11C 6~8\uBD84\uAC04 \uC911\uAC04\uC5D0 \uD754\uB4E4\uC5B4\uC8FC\uBA70 \uBC14\uC0AD\uD558\uAC8C \uC870\uB9AC\uD569\uB2C8\uB2E4."
          }
        }
      ]
    },
    {
      stepNumber: 3,
      title: { "zh-TW": "\u7AF9\u7C64\u4E32\u8D77\uFF0C\u6DF1\u60C5\u6D78\u88F9\u7279\u8ABF\u91AC\u6C41\u5927\u5FEB\u6735\u9824", "en": "Skewer & Dip Deep into Manong\u2019s Sauce", "fil": "Ituhog sa Kawayan at Isawsaw sa Sarsa", "ja": "\u7AF9\u4E32\u306B\u523A\u3057\u3001\u79D8\u4F1D\u30BF\u30EC\u306B\u3069\u3063\u3077\u308A\u6D78\u3057\u3066\u5473\u308F\u3046", "ko": "\uAF2C\uCE58\uC5D0 \uAFF0\uC5B4 \uB9C8\uB18D \uC18C\uC2A4\uC5D0 \uD479 \uC801\uC154 \uBA39\uAE30" },
      instruction: {
        "zh-TW": "\u62FF\u9577\u7AF9\u7C64\u5C07\u70B8\u597D\u7684\u6241\u9B5A\u4E38\u8207 Kikiam \u4E00\u4E32\u4E32\u6233\u8D77\uFF08\u6BCF\u4E32\u7D04 4-5 \u9846\uFF09\u3002\u6574\u4E32\u76F4\u63A5\u63D2\u9032\u8001\u7239\u7279\u8ABF\u9ED1\u7CD6\u751C\u8FA3\u91AC\u7F50\u4E2D\uFF0C\u65CB\u8F49\u88F9\u6EFF\u6FC3\u7A20\u7425\u73C0\u7CD6\u6F3F\uFF0C\u63A5\u8457\u4F9D\u559C\u597D\u5728\u9694\u58C1\u849C\u8FA3\u6D0B\u8525\u767D\u918B\u7F50\u4E2D\u9EDE\u8638\u4E00\u4E0B\uFF0C\u4E00\u53E3\u54AC\u4E0B\u5916\u8106\u5167\uFF31\uFF0C\u9178\u751C\u8FA3\u9E79\u5728\u820C\u5C16\u72C2\u6B61\uFF01",
        "en": "Skewer 4-5 balls onto long bamboo sticks. Plunge the skewer deep into your jar of thick Manong sauce, twisting so the glossy caramel coats every sphere. Tap lightly in the spiced vinegar jar next door, and experience Manila street bliss in every bite!",
        "fil": "Tuhugin ng 4-5 piraso sa patpat ng kawayan. Isawsaw nang sagana sa garapon ng sarsa ni Manong bago isubo!",
        "ja": "\u7AF9\u4E32\u306B4\u301C5\u500B\u523A\u3057\u307E\u3059\u3002\u30DE\u30CE\u30F3\u7279\u88FD\u30BD\u30FC\u30B9\u306E\u74F6\u306B\u3069\u3063\u3077\u308A\u3068\u6D78\u3057\u3001\u96A3\u306E\u30D4\u30EA\u8F9B\u9162\u306B\u5C11\u3057\u30C1\u30E7\u30F3\u3068\u3064\u3051\u307E\u3059\u3002\u30AB\u30EA\u30C3\u3068\u30E2\u30C1\u30E2\u30C1\u306E\u98DF\u611F\u3068\u7518\u9178\u3063\u3071\u3044\u30BF\u30EC\u304C\u53E3\u3044\u3063\u3071\u3044\u306B\u5E83\u304C\u308A\u307E\u3059\uFF01",
        "ko": "\uAE34 \uB300\uB098\uBB34 \uAF2C\uCE58\uC5D0 4~5\uAC1C\uC529 \uAFF0\uC5B4\uC90D\uB2C8\uB2E4. \uBB35\uC9C1\uD55C \uB9C8\uB18D \uC18C\uC2A4 \uBCD1\uC5D0 \uAE4A\uC219\uC774 \uB2F4\uAC00 \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uBB3B\uD788\uACE0, \uB9E4\uCF64\uD55C \uC2DD\uCD08\uC5D0 \uC0B4\uC9DD \uCC0D\uC5B4 \uD55C\uC785 \uAC00\uB4DD \uC990\uAE30\uC138\uC694!"
      },
      durationSeconds: 60,
      image: "/images/fish-balls-step3.jpg"
    }
  ],
  troubleshooting: [
    {
      id: "sauce-too-watery",
      problem: { "zh-TW": "\u91AC\u6C41\u592A\u7A00\u8584\uFF0C\u7121\u6CD5\u639B\u5728\u70B8\u597D\u7684\u9B5A\u4E38\u8868\u9762", "en": "Sauce is watery and runs off the balls instead of clinging", "fil": "Masyadong malabnaw ang sarsa at hindi kumakapit sa fish balls", "ja": "\u30BD\u30FC\u30B9\u304C\u30B5\u30E9\u30B5\u30E9\u3059\u304E\u3066\u9B5A\u56E3\u5B50\u306B\u7D61\u307E\u306A\u3044", "ko": "\uC18C\uC2A4\uAC00 \uB108\uBB34 \uBB3D\uC5B4\uC11C \uC5B4\uBB35 \uD45C\uBA74\uC5D0 \uBB3B\uC9C0 \uC54A\uACE0 \uD758\uB7EC\uB0B4\uB9BC" },
      cause: { "zh-TW": "\u7389\u7C73\u6FB1\u7C89\u6C34\u6BD4\u4F8B\u4E0D\u8DB3\uFF0C\u6216\u52A0\u71B1\u6642\u9593\u592A\u77ED\u672A\u5FB9\u5E95\u7CCA\u5316\u6CB8\u9A30", "en": "Insufficient cornstarch or did not bring to a full boil to activate starch", "fil": "Kulang sa cornstarch o hindi nakulo nang husto", "ja": "\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\u304C\u8DB3\u308A\u306A\u3044\u304B\u3001\u6CB8\u9A30\u3055\u305B\u3066\u3068\u308D\u307F\u3092\u5F15\u304D\u51FA\u3055\u306A\u304B\u3063\u305F\u305F\u3081", "ko": "\uC804\uBD84 \uC591\uC774 \uBD80\uC871\uD588\uAC70\uB098 \uCDA9\uBD84\uD788 \uB053\uC5EC \uD638\uD654\uC2DC\uD0A4\uC9C0 \uC54A\uC558\uC74C" },
      solution: {
        "zh-TW": "\u88DC\u8ABF 1 \u8336\u5319\u7389\u7C73\u7C89\u52A0\u5C11\u8A31\u6C34\uFF0C\u5012\u56DE\u5C0F\u934B\u4E2D\u5FAE\u6CB8\u652A\u62CC 1 \u5206\u9418\uFF0C\u76F4\u5230\u91AC\u6C41\u5448\u73FE\u5982\u8702\u871C\u822C\u6FC3\u7A20\u900F\u4EAE\u3002",
        "en": "Add 1 more tsp of cornstarch slurry and simmer for 1 minute until sauce thickens like syrup.",
        "fil": "Magdagdag ng kaunting tinunaw na cornstarch at pakuluan pa nang 1 minuto.",
        "ja": "\u6C34\u6EB6\u304D\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\u5C0F\u3055\u30581\u3092\u8DB3\u3057\u3001\u5F31\u706B\u30671\u5206\u52A0\u71B1\u3059\u308B\u3068\u30C8\u30ED\u30EA\u3068\u6FC3\u5BC6\u306A\u30BF\u30EC\u306B\u306A\u308A\u307E\u3059\u3002",
        "ko": "\uC804\uBD84\uBB3C 1\uC791\uC740\uC220\uC744 \uB354 \uB123\uACE0 1\uBD84\uAC04 \uC800\uC5B4\uAC00\uBA70 \uB053\uC5EC \uC2DC\uB7FD\uCC98\uB7FC \uB18D\uB3C4\uB97C \uC7A1\uC544\uC8FC\uC138\uC694."
      }
    }
  ],
  proTips: [
    {
      "zh-TW": "\u3010\u8001\u8857\u8001\u7239\u91AC\u6C41\u79D8\u8A23\u3011\uFF1A\u8DEF\u908A\u5C0F\u8CA9\u7684\u5927\u7F50\u91AC\u6C41\u4E4B\u6240\u4EE5\u7121\u6BD4\u8A98\u4EBA\uFF0C\u662F\u56E0\u70BA\u849C\u788E\u3001\u6D0B\u8525\u788E\u8207\u671D\u5929\u6912\u5728\u6EAB\u71B1\u7684\u9ED1\u7CD6\u91AC\u6CB9\u4E2D\u6D78\u6CE1\u4E86\u4E00\u6574\u5929\uFF0C\u6240\u6709\u8F9B\u9999\u5168\u90E8\u6EB6\u9032\u4E86\u751C\u6F3F\u4E2D\u3002\u5728\u5BB6\u505A\u53EF\u4EE5\u63D0\u524D\u534A\u5929\u71AC\u597D\u653E\u6DBC\uFF0C\u98A8\u5473\u66F4\u4E0A\u4E00\u5C64\u6A13\uFF01",
      "en": "The Secret of Aging Sauce: Street cart sauce tastes unbelievable because the raw garlic, onion, and crushed chilies steep in the warm sweet soy syrup for hours. Make your sauce a few hours ahead for maximum depth of flavor!",
      "fil": "Lihim ni Manong: Mas masarap ang sarsa kapag nababad ang bawang at sili sa arnibal nang ilang oras.",
      "ja": "\u30DE\u30CE\u30F3\u79D8\u4F1D\u306E\u719F\u6210\uFF1A\u5C4B\u53F0\u306E\u30BF\u30EC\u304C\u7F8E\u5473\u3057\u3044\u306E\u306F\u3001\u30CB\u30F3\u30CB\u30AF\u3084\u5510\u8F9B\u5B50\u304C\u7518\u8F9B\u30C0\u30EC\u306B\u4F55\u6642\u9593\u3082\u6F2C\u304B\u3063\u3066\u30A8\u30AD\u30B9\u304C\u6EB6\u3051\u51FA\u3057\u3066\u3044\u308B\u304B\u3089\u3002\u6570\u6642\u9593\u524D\u306B\u4F5C\u3063\u3066\u304A\u304F\u3068\u683C\u6BB5\u306B\u7F8E\u5473\u3057\u304F\u306A\u308A\u307E\u3059\uFF01",
      "ko": "\uB9C8\uB18D \uC18C\uC2A4\uC758 \uC219\uC131 \uBE44\uACB0: \uB9C8\uB298\uACFC \uC591\uD30C, \uACE0\uCD94\uAC00 \uB2EC\uCF64\uD55C \uD751\uB2F9 \uAC04\uC7A5 \uC18C\uC2A4\uC5D0 \uBA87 \uC2DC\uAC04 \uB3D9\uC548 \uD479 \uC6B0\uB7EC\uB098\uC57C \uAE4A\uC740 \uB9DB\uC774 \uB0A9\uB2C8\uB2E4. \uBA87 \uC2DC\uAC04 \uC804 \uBBF8\uB9AC \uB9CC\uB4E4\uC5B4 \uB450\uC2DC\uBA74 \uCD5C\uACE0\uC758 \uB9DB\uC744 \uB0C5\uB2C8\uB2E4."
    }
  ]
};

// ../Filipino Food Master/src/data/recipes.ts
var recipes = [
  sisig,
  adobo,
  sinigang,
  lumpiaShanghai,
  kwekKwek,
  porkBbq,
  chickenInasal,
  kareKare,
  haloHalo,
  lecheFlan,
  pancitBihon,
  turon,
  taho,
  arrozCaldo,
  crispyPata,
  fishBalls
];
var getRecipeById = (id) => {
  return recipes.find((r) => r.id === id);
};
var getRecipeBySlug = (slug) => {
  return recipes.find((r) => r.slug === slug);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getRecipeById,
  getRecipeBySlug,
  recipes
});
