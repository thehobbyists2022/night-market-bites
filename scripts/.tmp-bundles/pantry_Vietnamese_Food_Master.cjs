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

// ../Vietnamese Food Master/src/data/pantryKit.ts
var pantryKit_exports = {};
__export(pantryKit_exports, {
  fishSauceGrades: () => fishSauceGrades,
  freshHerbs: () => freshHerbs
});
module.exports = __toCommonJS(pantryKit_exports);
var freshHerbs = [
  {
    id: "ngo-gai",
    name: {
      "zh-TW": "\u523A\u82B9 / \u92F8\u9F52\u9999\u83DC (Ng\xF2 Gai)",
      "en": "Culantro / Sawtooth Coriander (Ng\xF2 Gai)",
      "vi": "Ng\xF2 Gai (M\xF9i T\xE0u)",
      "ja": "\u30CE\u30B3\u30AE\u30EA\u30B3\u30EA\u30A2\u30F3\u30C0\u30FC\uFF08\u30AA\u30AA\u30D0\u30B3\u30A8\u30F3\u30C9\u30ED\uFF09",
      "ko": "\uCFE8\uB780\uD2B8\uB85C (\uD1B1\uB2C8\uBC14\uC9C8 / \uC751\uC624\uAC00\uC774)"
    },
    vietName: "Rau ng\xF2 gai (M\xF9i t\xE0u)",
    vietPronunciation: "Naw Guy (Moo-ee Tow)",
    flavorProfile: {
      "zh-TW": "\u5F37\u70C8\u6301\u4E45\u7684\u67D1\u6A58\u8207\u82AB\u837D\u9999\u6C23\uFF0C\u8010\u9AD8\u6EAB\u4E45\u716E\u4E0D\u767C\u9ED1",
      "en": "Intense, citrusy coriander punch that holds up under hot broth",
      "vi": "M\xF9i th\u01A1m n\u1ED3ng \u0111\u1EB7c tr\u01B0ng, kh\xF4ng b\u1ECB d\u1EADp n\xE1t khi g\u1EB7p n\u01B0\u1EDBc s\xF4i",
      "ja": "\u30D1\u30AF\u30C1\u30FC\u3088\u308A\u3082\u6FC3\u539A\u3067\u67D1\u6A58\u7CFB\u306E\u723D\u3084\u304B\u306A\u82B3\u9999\u3002\u71B1\u306B\u5F37\u3044",
      "ko": "\uACE0\uC218\uBCF4\uB2E4 \uD5A5\uC774 \uC9D9\uACE0 \uC2DC\uD2B8\uB7EC\uC2A4\uD55C \uD48D\uBBF8\uAC00 \uAC15\uD558\uBA70 \uC5F4\uC5D0 \uAC15\uD568"
    },
    bestUsedIn: {
      "zh-TW": "\u751F\u725B\u8089\u6CB3\u7C89 (Ph\u1EDF B\xF2)\u3001\u6E44\u516C\u6CB3\u9178\u8FA3\u9B5A\u6E6F (Canh Chua)",
      "en": "Beef Pho, Mekong Tamarind Fish Soup (Canh Chua)",
      "vi": "Ph\u1EDF b\xF2, canh chua c\xE1, ch\xE1o l\xF2ng",
      "ja": "\u30D5\u30A9\u30FC\u30FB\u30DC\u30FC\u3001\u30AB\u30A4\u30F3\u30FB\u30C1\u30E5\u30A2",
      "ko": "\uC18C\uACE0\uAE30 \uC300\uAD6D\uC218, \uC0DD\uC120 \uC0C8\uCF64\uD0D5"
    },
    substituteTip: {
      "zh-TW": "\u82E5\u8D85\u5E02\u7121\u552E\uFF0C\u53EF\u7528\u4E00\u822C\u82AB\u837D (\u9999\u83DC) \u52A0\u4E0A\u5C11\u8A31\u65B0\u9BAE\u7DA0\u8584\u8377\u4EE5 2:1 \u6BD4\u4F8B\u6DF7\u5408\u66FF\u4EE3",
      "en": "Substitute with 2 parts fresh cilantro + 1 part fresh mint leaves",
      "vi": "Thay th\u1EBF b\u1EB1ng rau m\xF9i ta (ng\xF2 r\xED) th\xEAm ch\xFAt l\xE1 h\xFAng l\u1EE7i",
      "ja": "\u30D1\u30AF\u30C1\u30FC2\uFF1A\u751F\u30DF\u30F3\u30C81\u306E\u5272\u5408\u3067\u30D6\u30EC\u30F3\u30C9\u3057\u3066\u4EE3\u7528\u53EF\u80FD",
      "ko": "\uC77C\uBC18 \uACE0\uC218 2 : \uC0DD \uC2A4\uD53C\uC544\uBBFC\uD2B8 1 \uBE44\uC728\uB85C \uC11E\uC5B4 \uC0AC\uC6A9"
    },
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hung-que",
    name: {
      "zh-TW": "\u8D8A\u5357\u4E5D\u5C64\u5854 (H\xFAng Qu\u1EBF)",
      "en": "Vietnamese Sweet Basil (H\xFAng Qu\u1EBF)",
      "vi": "Rau H\xFAng Qu\u1EBF",
      "ja": "\u30D9\u30C8\u30CA\u30E0\u30D0\u30B8\u30EB\uFF08\u30D5\u30F3\u30FB\u30AF\u30A8\uFF09",
      "ko": "\uD0C0\uC774/\uBCA0\uD2B8\uB0A8 \uBC14\uC9C8 (\uD6D9\uAFF0)"
    },
    vietName: "Rau h\xFAng qu\u1EBF",
    vietPronunciation: "Hoong Kway",
    flavorProfile: {
      "zh-TW": "\u5E36\u6709\u8FF7\u4EBA\u7684\u4E01\u9999\u3001\u516B\u89D2\u8F9B\u751C\u8207\u6E05\u6DBC\u8584\u8377\u7518\u5473\uFF0C\u7D2B\u7D05\u8396\u8449\u9999\u6C23\u6FC3\u70C8",
      "en": "Sweet anise, licorice and clove notes with purple-tinged sturdy stems",
      "vi": "V\u1ECB ng\u1ECDt thanh pha l\u1EABn h\u01B0\u01A1ng qu\u1EBF cay nh\u1EB9 \u0111\u1EB7c tr\u01B0ng",
      "ja": "\u30A2\u30CB\u30B9\u3084\u30AF\u30ED\u30FC\u30D6\u306B\u4F3C\u305F\u7518\u304F\u30B9\u30D1\u30A4\u30B7\u30FC\u306A\u82B3\u9999",
      "ko": "\uC544\uB2C8\uC2A4\uC640 \uC815\uD5A5, \uACC4\uD53C \uD5A5\uC774 \uAC10\uB3C4\uB294 \uB2EC\uCF64\uD558\uACE0 \uC54C\uC2F8\uD55C \uD5C8\uBE0C"
    },
    bestUsedIn: {
      "zh-TW": "\u751F\u725B\u8089\u6CB3\u7C89 (Ph\u1EDF)\u3001\u751F\u6625\u6372 (G\u1ECFi Cu\u1ED1n)\u3001\u8D8A\u5F0F\u714E\u9905 (B\xE1nh X\xE8o)",
      "en": "Pho, Fresh Summer Rolls (G\u1ECFi Cu\u1ED1n), B\xE1nh X\xE8o",
      "vi": "\u0102n k\xE8m ph\u1EDF, g\u1ECFi cu\u1ED1n, b\xE1nh x\xE8o, l\xF2ng l\u1EE3n",
      "ja": "\u30D5\u30A9\u30FC\u3001\u751F\u6625\u5DFB\u304D\u3001\u30D0\u30A4\u30F3\u30BB\u30AA",
      "ko": "\uC300\uAD6D\uC218 \uACE0\uBA85, \uC6D4\uB0A8\uC308, \uBC18\uC384\uC624"
    },
    substituteTip: {
      "zh-TW": "\u53EF\u7528\u7FA9\u5927\u5229\u751C\u7F85\u52D2\u52A0\u4E0A\u4E00\u5C0F\u64AE\u8334\u9999\u7C7D\uFF0C\u6216\u76F4\u63A5\u4F7F\u7528\u6CF0\u570B\u4E5D\u5C64\u5854 (Thai Basil)",
      "en": "Use Thai basil, or Italian sweet basil with a pinch of anise seeds",
      "vi": "D\xF9ng h\xFAng qu\u1EBF Th\xE1i ho\u1EB7c h\xFAng t\xE2y (basil)",
      "ja": "\u30BF\u30A4\u30D0\u30B8\u30EB\u307E\u305F\u306F\u30A4\u30BF\u30EA\u30A2\u30F3\u30D0\u30B8\u30EB\u3067\u4EE3\u7528",
      "ko": "\uD0C0\uC774 \uBC14\uC9C8 \uB610\uB294 \uC77C\uBC18 \uC2A4\uC704\uD2B8 \uBC14\uC9C8\uB85C \uB300\uCCB4"
    },
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rau-ram",
    name: {
      "zh-TW": "\u53FB\u6C99\u8449 / \u8D8A\u5357\u9999\u83DC (Rau R\u0103m)",
      "en": "Vietnamese Coriander / Laksa Leaf (Rau R\u0103m)",
      "vi": "Rau R\u0103m",
      "ja": "\u30E9\u30A6\u30FB\u30E9\u30E0\uFF08\u30BF\u30C7\u79D1\u306E\u30D9\u30C8\u30CA\u30E0\u30B3\u30EA\u30A2\u30F3\u30C0\u30FC\uFF09",
      "ko": "\uB77C\uC6B0\uB78C (\uBCA0\uD2B8\uB0A8 \uACE0\uC218 / \uB77D\uC0AC \uC78E)"
    },
    vietName: "Rau r\u0103m",
    vietPronunciation: "Row Rahm",
    flavorProfile: {
      "zh-TW": "\u5C16\u8449\u5FAE\u8F9B\u8FA3\uFF0C\u5E36\u6709\u9ED1\u80E1\u6912\u8207\u67D1\u6A58\u4EA4\u7E54\u7684\u751F\u8591\u9999\u6C23\uFF0C\u6EAB\u80C3\u9A45\u5BD2",
      "en": "Pointed leaves with a peppery, citrusy, warm ginger bite",
      "vi": "V\u1ECB cay n\u1ED3ng \u1EA5m \xE1p, th\u01A1m \u0111\u1EADm gi\u1EA3i tanh tuy\u1EC7t h\u1EA3o",
      "ja": "\u30D4\u30EA\u30C3\u3068\u3057\u305F\u80E1\u6912\u306E\u3088\u3046\u306A\u8F9B\u5473\u3068\u723D\u5FEB\u306A\u67D1\u6A58\u306E\u9999\u308A",
      "ko": "\uD6C4\uCD94\uCC98\uB7FC \uC54C\uC2F8\uD558\uACE0 \uC0DD\uAC15\uACFC \uC2DC\uD2B8\uB7EC\uC2A4 \uD5A5\uC774 \uB3C4\uB294 \uB3C5\uD2B9\uD55C \uD48D\uBBF8"
    },
    bestUsedIn: {
      "zh-TW": "\u9D28\u4ED4\u86CB (H\u1ED9t v\u1ECBt l\u1ED9n)\u3001\u6D77\u9BAE\u96DE\u8089\u6C99\u62C9 (G\u1ECFi g\xE0)\u3001\u5927\u53FB\u70E4\u7C73\u7D19",
      "en": "Balut (H\u1ED9t v\u1ECBt l\u1ED9n), Chicken Cabbage Salad (G\u1ECFi G\xE0)",
      "vi": "\u0102n k\xE8m tr\u1EE9ng v\u1ECBt l\u1ED9n, g\u1ECFi g\xE0, b\xE1nh tr\xE1ng tr\u1ED9n",
      "ja": "\u30DB\u30D3\u30ED\u30F3\uFF08\u5B75\u5316\u76F4\u524D\u306E\u30A2\u30D2\u30EB\u306E\u5375\uFF09\u3001\u30C1\u30AD\u30F3\u30B5\u30E9\u30C0\u3001\u30D0\u30A4\u30F3\u30C1\u30E3\u30F3\u30C1\u30E7\u30F3",
      "ko": "\uBC1C\uB86F, \uB2ED\uACE0\uAE30 \uC0D0\uB7EC\uB4DC, \uBC18\uC9F1\uCAD1"
    },
    substituteTip: {
      "zh-TW": "\u53EF\u7528\u5C11\u8A31\u65B0\u9BAE\u9999\u83DC\u8449\u52A0\u4E0A\u73FE\u78E8\u9ED1\u80E1\u6912\u8207\u6AB8\u6AAC\u76AE\u5C51\u6DF7\u5408\u6A21\u64EC",
      "en": "Substitute with cilantro mixed with fresh ground black pepper and lemon zest",
      "vi": "D\xF9ng ng\xF2 r\xED r\u1EAFc th\xEAm ch\xFAt ti\xEAu s\u1ECD xay",
      "ja": "\u30D1\u30AF\u30C1\u30FC\u306B\u633D\u304D\u305F\u3066\u9ED2\u80E1\u6912\u3068\u30EC\u30E2\u30F3\u30D4\u30FC\u30EB\u3092\u8DB3\u3057\u3066\u4EE3\u7528",
      "ko": "\uACE0\uC218\uC5D0 \uAC13 \uAC04 \uD6C4\uCD94\uC640 \uB808\uBAAC \uC81C\uC2A4\uD2B8\uB97C \uC11E\uC5B4 \uC0AC\uC6A9"
    },
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kinh-gioi",
    name: {
      "zh-TW": "\u8D8A\u5357\u9999\u85B7 / \u834A\u82A5 (Kinh Gi\u1EDBi)",
      "en": "Vietnamese Lemon Mint / Kinh Gi\u1EDBi Balm",
      "vi": "Rau Kinh Gi\u1EDBi",
      "ja": "\u30AD\u30F3\u30BE\u30A4\uFF08\u30D9\u30C8\u30CA\u30E0\u30EC\u30E2\u30F3\u30D0\u30FC\u30E0 / \u9999\u85B7\uFF09",
      "ko": "\uD0A8\uC870\uC774 (\uBCA0\uD2B8\uB0A8 \uB808\uBAAC\uBBFC\uD2B8 / \uD5A5\uC720)"
    },
    vietName: "Rau kinh gi\u1EDBi",
    vietPronunciation: "Keen Zeu-oy",
    flavorProfile: {
      "zh-TW": "\u6E05\u65B0\u7684\u6AB8\u6AAC\u9999\u8702\u8349\u8207\u9999\u8305\u9999\u6C23\uFF0C\u8449\u7247\u5FAE\u6BDB\uFF0C\u6E05\u71B1\u89E3\u81A9",
      "en": "Zesty lemongrass and sweet lemon balm aroma with a velvety mouthfeel",
      "vi": "M\xF9i th\u01A1m d\u1ECBu m\xE1t c\u1EE7a chanh s\u1EA3, cay nh\u1EB9 s\u1EA3ng kho\xE1i",
      "ja": "\u30EC\u30E2\u30F3\u30D0\u30FC\u30E0\u306E\u3088\u3046\u306A\u723D\u3084\u304B\u306A\u67D1\u6A58\u9999\u3068\u6E05\u6DBC\u611F",
      "ko": "\uB808\uBAAC\uBC24\uACFC \uB808\uBAAC\uADF8\uB77C\uC2A4 \uD5A5\uC774 \uB3C4\uB294 \uC0C1\uCF8C\uD558\uACE0 \uCCAD\uB7C9\uD55C \uD5C8\uBE0C"
    },
    bestUsedIn: {
      "zh-TW": "\u6CB3\u5167\u70AD\u70E4\u8C6C\u8089\u7C73\u7DDA (B\xFAn Ch\u1EA3)\u3001\u8C46\u8150\u8766\u91AC\u7C73\u7DDA (B\xFAn \u0110\u1EADu M\u1EAFm T\xF4m)",
      "en": "B\xFAn Ch\u1EA3, Fermented Shrimp Paste Tofu (B\xFAn \u0110\u1EADu M\u1EAFm T\xF4m)",
      "vi": "Linh h\u1ED3n c\u1EE7a b\xFAn ch\u1EA3, b\xFAn \u0111\u1EADu m\u1EAFm t\xF4m, n\u1ED9m b\xF2 kh\xF4",
      "ja": "\u30D6\u30F3\u30C1\u30E3\u30FC\u3001\u30D6\u30F3\u30C0\u30A6\u30DE\u30E0\u30C8\u30E0\u3001\u30D1\u30D1\u30A4\u30E4\u30B5\u30E9\u30C0",
      "ko": "\uBD84\uC9DC, \uBD84\uB354\uC6B0\uB9D8\uB620, \uC18C\uACE0\uAE30 \uC721\uD3EC \uC0D0\uB7EC\uB4DC"
    },
    substituteTip: {
      "zh-TW": "\u53EF\u7528\u897F\u65B9\u65B0\u9BAE\u6AB8\u6AAC\u9999\u8702\u8349 (Lemon Balm) \u6216\u7DA0\u8584\u8377\u4EE3\u63DB",
      "en": "Substitute with fresh lemon balm or spearmint",
      "vi": "Thay b\u1EB1ng l\xE1 b\u1EA1c h\xE0 ho\u1EB7c h\xFAng chanh",
      "ja": "\u30D5\u30EC\u30C3\u30B7\u30E5\u30EC\u30E2\u30F3\u30D0\u30FC\u30E0\u307E\u305F\u306F\u30B9\u30DA\u30A2\u30DF\u30F3\u30C8\u3067\u4EE3\u7528",
      "ko": "\uC0DD \uB808\uBAAC\uBC24 \uB610\uB294 \uC2A4\uD53C\uC544\uBBFC\uD2B8\uB85C \uB300\uCCB4"
    },
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tia-to",
    name: {
      "zh-TW": "\u8D8A\u5357\u96D9\u8272\u7D2B\u8607\u8449 (T\xEDa T\xF4)",
      "en": "Vietnamese Bicolor Perilla (T\xEDa T\xF4)",
      "vi": "Rau T\xEDa T\xF4",
      "ja": "\u30C6\u30A3\u30A2\u30FB\u30C8\u30FC\uFF08\u88CF\u8D64\u7D2B\u8607 / \u30A8\u30B4\u30DE\u306E\u8449\uFF09",
      "ko": "\uD2F0\uC544\uD1A0 (\uBCA0\uD2B8\uB0A8 \uC790\uC18C\uC5FD / \uC801\uC790\uC18C)"
    },
    vietName: "Rau t\xEDa t\xF4",
    vietPronunciation: "Tee-ah Toh",
    flavorProfile: {
      "zh-TW": "\u6B63\u9762\u7FE0\u7DA0\u3001\u80CC\u9762\u6DF1\u7D2B\uFF0C\u5E36\u6709\u8089\u6842\u3001\u8334\u9999\u8207\u4E01\u9999\u7684\u5FAE\u6F80\u8F9B\u9999",
      "en": "Bicolor green and purple leaf with warming cinnamon, anise and earthiness",
      "vi": "L\xE1 hai m\xE0u xanh t\xEDm, v\u1ECB cay \u1EA5m gi\u1EA3i c\u1EA3m r\u1EA5t t\u1ED1t",
      "ja": "\u8868\u304C\u7DD1\u3001\u88CF\u304C\u8D64\u7D2B\u3002\u30B7\u30BD\u3068\u30B7\u30CA\u30E2\u30F3\u304C\u5408\u308F\u3055\u3063\u305F\u3088\u3046\u306A\u5965\u6DF1\u3044\u9999\u308A",
      "ko": "\uC55E\uBA74\uC740 \uCD08\uB85D, \uB4B7\uBA74\uC740 \uBCF4\uB77C\uC0C9\uC774\uBA70 \uC2DC\uC18C\uC640 \uACC4\uD53C \uD5A5\uC774 \uAC10\uB3C4\uB294 \uD5C8\uBE0C"
    },
    bestUsedIn: {
      "zh-TW": "\u70AD\u70E4\u8C6C\u8089\u7C73\u7DDA (B\xFAn Ch\u1EA3)\u3001\u7530\u87BA\u7C73\u7DDA (B\xFAn \u1ED0c)\u3001\u725B\u8089\u6E6F",
      "en": "B\xFAn Ch\u1EA3, Snail Noodle Soup (B\xFAn \u1ED0c), Beef Soups",
      "vi": "B\xFAn ch\u1EA3 H\xE0 N\u1ED9i, b\xFAn \u1ED1c, ch\xE1o t\xEDa t\xF4 th\u1ECBt b\u0103m",
      "ja": "\u30D6\u30F3\u30C1\u30E3\u30FC\u3001\u30AB\u30BF\u30C4\u30E0\u30EA\u3046\u3069\u3093\u3001\u5404\u7A2E\u30B9\u30FC\u30D7",
      "ko": "\uBD84\uC9DC, \uC6B0\uB801\uC774 \uC300\uAD6D\uC218, \uC18C\uACE0\uAE30 \uC694\uB9AC"
    },
    substituteTip: {
      "zh-TW": "\u53EF\u7528\u65E5\u672C\u7D05\u7D2B\u8607\u6216\u97D3\u570B\u829D\u9EBB\u8449 (Kkaennip) \u4EE3\u63DB",
      "en": "Substitute with Japanese red shiso or Korean perilla leaves",
      "vi": "D\xF9ng l\xE1 t\xEDa t\xF4 \u0111\u1ECF Nh\u1EADt B\u1EA3n ho\u1EB7c l\xE1 m\xE8 H\xE0n Qu\u1ED1c",
      "ja": "\u65E5\u672C\u306E\u8D64\u7D2B\u8607\u307E\u305F\u306F\u97D3\u56FD\u306E\u30A8\u30B4\u30DE\u306E\u8449\u3067\u4EE3\u7528",
      "ko": "\uD55C\uAD6D\uC758 \uAE7B\uC78E \uB610\uB294 \uC77C\uBCF8 \uC801\uC790\uC18C\uB85C \uB300\uCCB4"
    },
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  }
];
var fishSauceGrades = [
  {
    grade: "40\xB0N",
    label: {
      "zh-TW": "40\xB0N \u539F\u6DB2\u521D\u69A8\u7279\u7D1A (N\u01B0\u1EDBc M\u1EAFm C\u1ED1t / \u5BCC\u570B\u5CF6\u7CBE\u9078)",
      "en": "40\xB0N First-Press Extra Virgin (Ph\xFA Qu\u1ED1c Supreme)",
      "vi": "40\xB0N N\u01B0\u1EDBc M\u1EAFm Nh\u0129 C\u1ED1t Truy\u1EC1n Th\u1ED1ng Ph\xFA Qu\u1ED1c",
      "ja": "40\xB0N \u521D\u643E\u308A\u30A8\u30AD\u30B9\u30C8\u30E9\u30D0\u30FC\u30B8\u30F3\uFF08\u6700\u9AD8\u7D1A\u30D5\u30FC\u30B3\u30C3\u30AF\u5CF6\u7523\uFF09",
      "ko": "40\xB0N 1\uCC28 \uCD94\uCD9C \uD504\uB9AC\uBBF8\uC5C4 \uC5D1\uC2A4\uD2B8\uB77C \uBC84\uC9C4 (\uD478\uAFB8\uC625\uC0B0)"
    },
    idealUsage: {
      "zh-TW": "\u751F\u6625\u6372\u6CBE\u91AC\u3001\u6DBC\u62CC\u6C99\u62C9\u3001\u767D\u5207\u8089\u8638\u6C34\uFF08\u6700\u63A8\u85A6\uFF01\uFF09",
      "en": "Dipping sauces, raw spring rolls, cold salads (Highly Recommended!)",
      "vi": "Pha n\u01B0\u1EDBc ch\u1EA5m nem, ch\u1EA5m g\u1ECFi cu\u1ED1n, th\u1ECBt lu\u1ED9c (\u0110\u1EC9nh cao)",
      "ja": "\u751F\u6625\u5DFB\u304D\u306E\u30BF\u30EC\u3001\u30B5\u30E9\u30C0\u3001\u8339\u3067\u8089\u306E\u3064\u3051\u30C0\u30EC\uFF08\u6700\u3082\u304A\u3059\u3059\u3081\uFF01\uFF09",
      "ko": "\uB514\uD551 \uC18C\uC2A4, \uC6D4\uB0A8\uC308, \uC0D0\uB7EC\uB4DC, \uC218\uC721 \uB514\uD551 (\uAC00\uC7A5 \uCD94\uCC9C!)"
    },
    description: {
      "zh-TW": "\u6BCF\u516C\u5347\u542B\u6709 40 \u514B\u5929\u7136\u9B5A\u86CB\u767D\u6C2E\u7D20\u3002\u7D14\u6728\u6876\u5929\u7136\u767C\u9175 12-15 \u500B\u6708\uFF0C\u8272\u6FA4\u5982\u7425\u73C0\u7D05\u5BF6\u77F3\uFF0C\u53E3\u611F\u5713\u6F64\u9BAE\u7F8E\u3001\u5E36\u6709\u5F37\u70C8\u5929\u7136\u56DE\u7518\uFF0C\u9E79\u800C\u4E0D\u6F80\uFF01",
      "en": "Contains 40g natural nitrogen per liter. Aged 12-15 months in tropical wood barrels for an amber hue and lingering sweet umami.",
      "vi": "Ch\u1EE9a 40g \u0111\u1EA1m nit\u01A1 t\u1EF1 nhi\xEAn t\u1EEB c\xE1 c\u01A1m than v\xE0 mu\u1ED1i bi\u1EC3n, \u1EE7 ch\u01B0\u1EE3p th\xF9ng g\u1ED7 12 th\xE1ng, m\xE0u n\xE2u c\xE1nh gi\xE1n h\u1EADu v\u1ECB ng\u1ECDt \u0111\u1EADm.",
      "ja": "1L\u3042\u305F\u308A40g\u306E\u5929\u7136\u7A92\u7D20\u3092\u542B\u3080\u3002\u6728\u6A3D\u719F\u6210\u3067\u7425\u73C0\u8272\u306B\u8F1D\u304D\u3001\u5869\u8F9B\u3055\u304C\u5C16\u3089\u305A\u6DF1\u3044\u65E8\u5473\u3068\u7518\u307F\u304C\u53E3\u3044\u3063\u3071\u3044\u306B\u5E83\u304C\u308A\u307E\u3059\u3002",
      "ko": "\uB9AC\uD130\uB2F9 40g\uC758 \uCC9C\uC5F0 \uB2E8\uBC31\uC9C8 \uD568\uC720. \uBAA9\uD1B5\uC5D0\uC11C 1\uB144 \uC774\uC0C1 \uC790\uC5F0 \uC219\uC131\uB418\uC5B4 \uC9E0\uB9DB\uC774 \uD280\uC9C0 \uC54A\uACE0 \uB2EC\uCF64\uD55C \uAC10\uCE60\uB9DB\uC774 \uC624\uB798 \uC9C0\uC18D\uB429\uB2C8\uB2E4."
    }
  },
  {
    grade: "30\xB0N",
    label: {
      "zh-TW": "30\xB0N \u65E5\u5E38\u70F9\u98EA\u70F9\u8ABF\u7D1A (\u6599\u7406\u71B1\u7092\u71B1\u6E6F\u5C08\u7528)",
      "en": "30\xB0N Everyday Cooking Grade (Stir-Fries & Stocks)",
      "vi": "30\xB0N N\u01B0\u1EDBc M\u1EAFm N\u1EA5u N\u01B0\u1EDBng H\xE0ng Ng\xE0y",
      "ja": "30\xB0N \u30C7\u30A4\u30EA\u30FC\u8ABF\u7406\u7528\uFF08\u7092\u3081\u7269\u30FB\u716E\u8FBC\u307F\u30FB\u30B9\u30FC\u30D7\uFF09",
      "ko": "30\xB0N \uC77C\uC0C1 \uC694\uB9AC\uC6A9 (\uBCF6\uC74C, \uC870\uB9BC, \uAD6D\uBB3C \uC694\uB9AC)"
    },
    idealUsage: {
      "zh-TW": "\u7206\u7092\u3001\u9183\u8089\u3001\u6CB3\u7C89\u9AD8\u6E6F\u8ABF\u5473\u3001\u71C9\u8089 (B\xF2 Kho / Th\u1ECBt Kho)",
      "en": "Wok frying, marinades, pho broth seasoning, braises",
      "vi": "Kho th\u1ECBt c\xE1, n\xEAm n\u01B0\u1EDBc d\xF9ng ph\u1EDF, x\xE0o n\u1EA5u",
      "ja": "\u7092\u3081\u7269\u3001\u8089\u306E\u4E0B\u5473\u3001\u30D5\u30A9\u30FC\u306E\u30B9\u30FC\u30D7\u8ABF\u5473\u3001\u89D2\u716E",
      "ko": "\uBCF6\uC74C \uC694\uB9AC, \uACE0\uAE30 \uC7AC\uC6B0\uAE30, \uC300\uAD6D\uC218 \uC721\uC218 \uAC04 \uB9DE\uCD94\uAE30"
    },
    description: {
      "zh-TW": "\u9E79\u5473\u9BAE\u660E\uFF0C\u8010\u9AD8\u6EAB\u7206\u7092\uFF0C\u80FD\u8FC5\u901F\u9396\u4F4F\u8089\u8CEA\u9BAE\u5473\u4E26\u6563\u767C\u7368\u7279\u71B1\u5E36\u9999\u6C23\uFF0C\u662F\u5BB6\u5EAD\u5EDA\u623F\u6599\u7406\u9AD8\u6027\u50F9\u6BD4\u4E4B\u9078\u3002",
      "en": "Sharp savory profile designed for high-heat cooking, anchoring marinades and rich broths with robust savory depth.",
      "vi": "V\u1ECB m\u1EB7n m\xF2i r\xF5 r\u1EC7t, ch\u1ECBu nhi\u1EC7t \u0111\u1ED9 cao khi n\u1EA5u n\u01B0\u1EDBng m\xE0 kh\xF4ng b\u1ECB bi\u1EBFn \u0111\u1ED5i h\u01B0\u01A1ng v\u1ECB.",
      "ja": "\u5F37\u706B\u8ABF\u7406\u306B\u9069\u3057\u305F\u30B7\u30E3\u30FC\u30D7\u306A\u5869\u5473\u3002\u30B9\u30FC\u30D7\u3084\u716E\u8FBC\u307F\u6599\u7406\u306E\u30D9\u30FC\u30B9\u306B\u6700\u9069\u3067\u3059\u3002",
      "ko": "\uAC00\uC5F4 \uC694\uB9AC\uC5D0 \uC801\uD569\uD558\uBA70 \uBCF6\uC74C\uC774\uB098 \uC870\uB9BC \uC2DC \uC721\uC999\uC758 \uAC10\uCE60\uB9DB\uC744 \uB2E8\uB2E8\uD558\uAC8C \uC7A1\uC544\uC90D\uB2C8\uB2E4."
    }
  },
  {
    grade: "60\xB0N",
    label: {
      "zh-TW": "60\xB0N \u73CD\u7A00\u6975\u54C1\u6FC3\u7E2E\u6EF4\u6FFE (\u6975\u5C11\u91CF\u63D0\u9BAE\u6EF4\u6DCB)",
      "en": "60\xB0N Connoisseur Artisan Reserve (Finishing Droplets)",
      "vi": "60\xB0N N\u01B0\u1EDBc M\u1EAFm Cao \u0110\u1EA1m Th\u01B0\u1EE3ng H\u1EA1ng",
      "ja": "60\xB0N \u5E7B\u306E\u30A8\u30AF\u30B9\u30C8\u30EA\u30FC\u30E0\u30EA\u30B6\u30FC\u30D6\uFF08\u4ED5\u4E0A\u3052\u306E\u6570\u6EF4\uFF09",
      "ko": "60\xB0N \uCD5C\uACE0\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uB18D\uCD95 \uB9AC\uC800\uBE0C (\uD53C\uB2C8\uC2F1\uC6A9)"
    },
    idealUsage: {
      "zh-TW": "\u8D77\u934B\u524D\u6EF4\u5165 2-3 \u6EF4\u63D0\u9BAE\u3001\u7D14\u751F\u98F2\u54C1\u9451\u3001\u9802\u7D1A\u751F\u725B\u8089\u7C89\u51FA\u934B\u9EDE\u7DB4",
      "en": "Finishing 2-3 drops over hot soups, premium tasting",
      "vi": "R\u01B0\u1EDBi 2 gi\u1ECDt l\xEAn b\xE1t ph\u1EDF n\xF3ng tr\u01B0\u1EDBc khi \u0103n \u0111\u1EC3 d\u1EADy m\xF9i",
      "ja": "\u4ED5\u4E0A\u304C\u308A\u306E\u71B1\u3005\u30B9\u30FC\u30D7\u306B2\u301C3\u6EF4\u843D\u3068\u3057\u3066\u9999\u308A\u3092\u7ACB\u305F\u305B\u308B",
      "ko": "\uC644\uC131\uB41C \uB728\uAC70\uC6B4 \uC694\uB9AC\uC5D0 2~3\uBC29\uC6B8 \uB5A8\uC5B4\uB728\uB824 \uD48D\uBBF8\uB97C \uADF9\uB300\uD654"
    },
    description: {
      "zh-TW": "\u63A1\u7528\u4F4E\u6EAB\u771F\u7A7A\u6FC3\u7E2E\u63D0\u7149\u51FA\u7684\u73CD\u8CB4\u9ED1\u91D1\uFF0C\u8CEA\u5730\u5982\u5229\u53E3\u9152\u822C\u6FC3\u7A20\uFF0C\u86CB\u767D\u8CEA\u5BC6\u5EA6\u6975\u9AD8\uFF0C\u5165\u53E3\u5982\u6D77\u9BAE\u9AD8\u6E6F\u7CBE\u83EF\u822C\u6ED1\u9806\u9187\u539A\u3002",
      "en": "Ultra-dense nectar extracted through low-temperature reduction. Thick and syrup-like with pure seafood essence.",
      "vi": "\u0110\u01B0\u1EE3c c\xF4 \u0111\u1EB7c ch\xE2n kh\xF4ng \u1EDF nhi\u1EC7t \u0111\u1ED9 th\u1EA5p, s\xE1nh \u0111\u1EB7c nh\u01B0 m\u1EADt ong v\u1EDBi h\xE0m l\u01B0\u1EE3ng \u0111\u1EA1m c\u1EF1c cao.",
      "ja": "\u4F4E\u6E29\u771F\u7A7A\u6FC3\u7E2E\u3067\u4F5C\u3089\u308C\u308B\u5E7B\u306E\u3057\u305A\u304F\u3002\u30B7\u30ED\u30C3\u30D7\u306E\u3088\u3046\u306B\u6FC3\u539A\u3067\u3001\u9B5A\u4ECB\u306E\u30A8\u30AD\u30B9\u304C\u51DD\u7E2E\u3055\u308C\u3066\u3044\u307E\u3059\u3002",
      "ko": "\uC800\uC628 \uB18D\uCD95\uC73C\uB85C \uD0C4\uC0DD\uD55C \uAFC0\uCC98\uB7FC \uAC78\uCB49\uD55C \uCD5C\uACE0\uAE09 \uC561\uC813\uC73C\uB85C, \uBA87 \uBC29\uC6B8\uB9CC\uC73C\uB85C\uB3C4 \uC694\uB9AC\uC758 \uACA9\uC744 \uB192\uC5EC\uC90D\uB2C8\uB2E4."
    }
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fishSauceGrades,
  freshHerbs
});
