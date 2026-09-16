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

// ../Taiwan/src/data/recipes.ts
var recipes_exports = {};
__export(recipes_exports, {
  recipes: () => recipes
});
module.exports = __toCommonJS(recipes_exports);
var recipes = [
  {
    "id": "popcorn-chicken",
    "slug": "popcorn-chicken",
    "title": {
      "zh-TW": "\u7D93\u5178\u53F0\u7063\u9E7D\u9165\u96DE",
      "en": "Classic Taiwanese Popcorn Chicken",
      "ja": "\u672C\u5834\u53F0\u6E7E\u306E\u5869\u5510\u63DA\u3052\uFF08\u5869\u9165\u9D8F\uFF09",
      "ko": "\uB300\uB9CC\uC2DD \uD31D\uCF58 \uCE58\uD0A8 (\uC60C\uC218\uC9C0)",
      "vi": "G\xE0 l\u1EAFc mu\u1ED1i ti\xEAu \u0110\xE0i Loan"
    },
    "subtitle": {
      "zh-TW": "\u4E5D\u5C64\u5854\u9999\u6C23\u7206\u767C\u30FB\u7C97\u5730\u74DC\u7C89\u6975\u81F4\u9165\u8106",
      "en": "Bursting with Thai Basil Aroma & Coarse Tapioca Crunch",
      "ja": "\u53F0\u6E7E\u30D0\u30B8\u30EB\u306E\u9999\u308A\u3068\u7C97\u633D\u304D\u3055\u3064\u307E\u3044\u3082\u7C89\u306E\u6975\u4E0A\u30B6\u30AF\u30B6\u30AF\u611F",
      "ko": "\uBC14\uC9C8 \uD5A5 \uD3ED\uBC1C\u30FB\uAD75\uC740 \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC758 \uBC14\uC0AD\uD568",
      "vi": "H\xFAng qu\u1EBF th\u01A1m l\u1EEBng & Gi\xF2n r\u1EE5m b\u1ED9t khoai lang"
    },
    "tagline": {
      "zh-TW": "\u53F0\u7063\u591C\u5E02\u9748\u9B42\u9738\u4E3B\uFF0C\u6BCF\u8D70\u4E09\u6B65\u5C31\u6709\u4E00\u6524\u7684\u570B\u6C11\u5BB5\u591C",
      "en": "The undisputed king of Taiwanese night markets",
      "ja": "\u53F0\u6E7E\u591C\u5E02\u306E\u738B\u9053\u30023\u6B69\u6B69\u3051\u3070\u5C4B\u53F0\u306B\u51FA\u4F1A\u3046\u56FD\u6C11\u7684\u591C\u98DF",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5\uC758 \uB300\uD45C \uAC04\uC2DD\uC774\uC790 \uAD6D\uBBFC \uC57C\uC2DD",
      "vi": "\xD4ng vua \u1EA9m th\u1EF1c ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan"
    },
    "heroImage": "/images/popcorn-chicken.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 10,
    "defaultServings": 2,
    "caloriesPerServing": 420,
    "category": "fried",
    "dietaryTags": [
      "classic",
      "halal"
    ],
    "supportedCookware": [
      "traditional",
      "airFryer"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5317 / \u53F0\u5357",
        "en": "Taipei / Tainan",
        "ja": "\u53F0\u5317 / \u53F0\u5357",
        "ko": "\uD0C0\uC774\uBCA0\uC774 / \uD0C0\uC774\uB09C",
        "vi": "\u0110\xE0i B\u1EAFc / \u0110\xE0i Nam"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u58EB\u6797\u591C\u5E02",
          "en": "Shilin Night Market",
          "ja": "\u58EB\u6797\u591C\u5E02",
          "ko": "\uC2A4\uB9B0 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Shilin"
        },
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        },
        {
          "zh-TW": "\u6A02\u83EF\u591C\u5E02",
          "en": "Lehua Night Market",
          "ja": "\u6A02\u83EF\u591C\u5E02",
          "ko": "\uB7EC\uD654 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Lehua"
        }
      ],
      "historyStory": {
        "zh-TW": "\u9E7D\u9165\u96DE\u8A95\u751F\u65BC1970\u5E74\u4EE3\u7684\u53F0\u5357\uFF0C\u6700\u521D\u662F\u6524\u8CA9\u70BA\u4E86\u4E0D\u6D6A\u8CBB\u8089\u584A\uFF0C\u5C07\u96DE\u8089\u5207\u6210\u4E00\u53E3\u5927\u5C0F\uFF0C\u88F9\u4E0A\u7C97\u9846\u7C92\u5730\u74DC\u7C89\u6CB9\u70B8\u3002\u8D77\u934B\u524D\u4E00\u628A\u65B0\u9BAE\u4E5D\u5C64\u5854\u7684\u9AD8\u6EAB\u6CB9\u7206\uFF0C\u5275\u9020\u51FA\u7121\u6CD5\u8907\u88FD\u7684\u53F0\u5473\u9748\u9B42\u9999\u6C23\u3002",
        "en": "Invented in Tainan during the 1970s, street vendors sliced chicken thighs into bite-sized pieces and coated them with coarse sweet potato starch. The signature finish of flash-frying fresh Thai basil creates an unmistakable aroma.",
        "ja": "1970\u5E74\u4EE3\u306E\u53F0\u5357\u767A\u7965\u3002\u4E00\u53E3\u5927\u306E\u9D8F\u3082\u3082\u8089\u306B\u7C97\u7C92\u3055\u3064\u307E\u3044\u3082\u7C89\u3092\u307E\u3076\u3057\u3066\u30AB\u30EA\u30C3\u3068\u63DA\u3052\u3001\u4ED5\u4E0A\u3052\u306B\u30B5\u30C3\u3068\u7D20\u63DA\u3052\u3057\u305F\u53F0\u6E7E\u30D0\u30B8\u30EB\u3092\u5408\u308F\u305B\u308B\u306E\u304C\u672C\u5834\u306E\u5473\u3067\u3059\u3002",
        "ko": "1970\uB144\uB300 \uB300\uB9CC \uB0A8\uBD80 \uD0C0\uC774\uB09C\uC5D0\uC11C \uC2DC\uC791\uB41C \uAD6D\uBBFC \uC57C\uC2DD\uC785\uB2C8\uB2E4. \uD55C \uC785 \uD06C\uAE30\uC758 \uB2ED\uACE0\uAE30\uB97C \uAD75\uC740 \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC5D0 \uBB3B\uD600 \uD280\uACA8\uB0B4\uACE0, \uAC13 \uD280\uAE34 \uBC14\uC9C8 \uC78E\uACFC \uD2B9\uC81C \uD6C4\uCD94 \uC18C\uAE08\uC744 \uACC1\uB4E4\uC785\uB2C8\uB2E4.",
        "vi": "Ra \u0111\u1EDDi t\u1EEB nh\u1EEFng n\u0103m 1970 t\u1EA1i \u0110\xE0i Nam, g\xE0 \u0111\u01B0\u1EE3c c\u1EAFt mi\u1EBFng v\u1EEBa \u0103n, l\u0103n qua b\u1ED9t khoai lang h\u1EA1t to chi\xEAn gi\xF2n tan c\xF9ng l\xE1 h\xFAng qu\u1EBF t\u01B0\u01A1i."
      },
      "taiwaneseHokkien": "Ki\xE2m-soo-ke (\u3110\u3127\u3122\u02CA \u3119\u3128 \u310D\u311F)",
      "mandarinPinyin": "Y\xE1ns\u016Bj\u012B (\u3127\u3122\u02CA \u3119\u3128 \u3110\u3127)",
      "audioPronunciationText": "\u9E7D\u9165\u96DE\uFF0C\u8981\u8FA3\u52A0\u4E5D\u5C64\u5854"
    },
    "ingredients": [
      {
        "id": "chicken-thigh",
        "name": {
          "zh-TW": "\u53BB\u9AA8\u5E36\u76AE\u96DE\u817F\u8089",
          "en": "Boneless Chicken Thigh",
          "ja": "\u9D8F\u3082\u3082\u8089\uFF08\u76AE\u4ED8\u304D\uFF09",
          "ko": "\uB2ED\uB2E4\uB9AC\uC0B4 (\uC21C\uC0B4)",
          "vi": "Th\u1ECBt \u0111\xF9i g\xE0 r\xFAt x\u01B0\u01A1ng"
        },
        "amount": 400,
        "unitMetric": "g",
        "unitUS": "14 oz",
        "chineseName": "\u53BB\u9AA8\u96DE\u817F\u8089",
        "chinesePinyin": "Q\xF9 g\u01D4 j\u012B tu\u01D0 r\xF2u"
      },
      {
        "id": "sweet-potato-starch",
        "name": {
          "zh-TW": "\u53F0\u7063\u7C97\u9846\u7C92\u5730\u74DC\u7C89 (\u756A\u85AF\u7C89)",
          "en": "Taiwanese Coarse Sweet Potato Starch",
          "ja": "\u53F0\u6E7E\u7523 \u7C97\u7C92\u3055\u3064\u307E\u3044\u3082\u7C89\uFF08\u5730\u74DC\u7C89\uFF09",
          "ko": "\uB300\uB9CC\uC0B0 \uAD75\uC740 \uACE0\uAD6C\uB9C8 \uC804\uBD84",
          "vi": "B\u1ED9t khoai lang h\u1EA1t to \u0110\xE0i Loan"
        },
        "amount": 100,
        "unitMetric": "g",
        "unitUS": "0.7 cup",
        "isKeyFlavor": true,
        "chineseName": "\u7C97\u9846\u7C92\u5730\u74DC\u7C89",
        "chinesePinyin": "C\u016B k\u0113l\xEC d\xECgu\u0101 f\u011Bn",
        "substitute": {
          "substituteName": {
            "zh-TW": "\u6728\u85AF\u7C89 (\u6A39\u85AF\u7C89) + \u5C11\u91CF\u592A\u767D\u7C89",
            "en": "Tapioca Starch (or Potato Starch + Cornstarch 1:1)",
            "ja": "\u30BF\u30D4\u30AA\u30AB\u7C89 \u307E\u305F\u306F \u7247\u6817\u7C89\uFF0B\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\uFF081:1\uFF09",
            "ko": "\uD0C0\uD53C\uC624\uCE74 \uC804\uBD84 \uB610\uB294 \uAC10\uC790\uC804\uBD84+\uC625\uC218\uC218\uC804\uBD84(1:1)",
            "vi": "B\u1ED9t n\u0103ng ho\u1EB7c B\u1ED9t b\u1EAFp k\u1EBFt h\u1EE3p b\u1ED9t khoai t\xE2y"
          },
          "ratio": "1:1",
          "explanation": {
            "zh-TW": "\u53F0\u7063\u9E7D\u9165\u96DE\u8868\u9762\u4E00\u7C92\u7C92\u91D1\u9EC3\u5C0F\u8106\u73E0\u4F86\u81EA\u300C\u7C97\u9846\u7C92\u300D\u5730\u74DC\u7C89\u3002\u82E5\u7121\u53EF\u7528\u6728\u85AF\u7C89\u4EE3\u66FF\uFF0C\u4F46\u907F\u514D\u7D14\u7389\u7C73\u7C89\uFF08\u53E3\u611F\u6703\u504F\u786C\u7C89\u611F\u91CD\uFF09\u3002",
            "en": "The iconic bumpy, super-crunchy crust comes from coarse granules. Tapioca starch is the closest substitute.",
            "ja": "\u72EC\u7279\u306E\u30B6\u30AF\u30B6\u30AF\u3057\u305F\u98DF\u611F\u306F\u7C97\u7C92\u7C89\u306A\u3089\u3067\u306F\u3002\u624B\u306B\u5165\u3089\u306A\u3044\u5834\u5408\u306F\u30BF\u30D4\u30AA\u30AB\u7C89\u3067\u4EE3\u7528\u53EF\u80FD\u3067\u3059\u3002",
            "ko": "\uD2B9\uC720\uC758 \uC624\uB3CC\uD1A0\uB3CC\uD558\uACE0 \uBC14\uC0AD\uD55C \uD06C\uB7EC\uC2A4\uD2B8\uB294 \uAD75\uC740 \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC5D0\uC11C \uB098\uC635\uB2C8\uB2E4. \uC5C6\uC744 \uB550 \uD0C0\uD53C\uC624\uCE74 \uC804\uBD84\uC774 \uAC00\uC7A5 \uAC00\uAE5D\uC2B5\uB2C8\uB2E4.",
            "vi": "\u0110\u1ED9 gi\xF2n x\u1ED1p \u0111\u1EB7c tr\u01B0ng h\u1EA1t n\u1ED5i \u0111\u1EBFn t\u1EEB b\u1ED9t khoai lang h\u1EA1t th\xF4. C\xF3 th\u1EC3 thay b\u1EB1ng b\u1ED9t n\u0103ng."
          },
          "whereToBuy": {
            "zh-TW": "\u5927\u83EF\u8D85\u5E02 (99 Ranch)\u3001H-Mart\u3001\u4E9E\u8D85\u7C89\u985E\u5C08\u5340",
            "en": "99 Ranch Market, H-Mart, or Asian grocery flour aisle",
            "ja": "\u4E2D\u83EF\u7269\u7523\u5E97\u3001\u30A2\u30B8\u30A2\u7CFB\u30B9\u30FC\u30D1\u30FC\u3001Amazon",
            "ko": "\uC544\uC2DC\uC548 \uB9C8\uCF13, \uC628\uB77C\uC778 \uC911\uAD6D \uC2DD\uC790\uC7AC \uBAB0",
            "vi": "Si\xEAu th\u1ECB ch\xE2u \xC1 ho\u1EB7c ti\u1EC7m th\u1EF1c ph\u1EA9m \u0110\xE0i Loan"
          }
        }
      },
      {
        "id": "thai-basil",
        "name": {
          "zh-TW": "\u65B0\u9BAE\u4E5D\u5C64\u5854 (\u6216\u7F85\u52D2)",
          "en": "Fresh Thai Basil (or Sweet Basil)",
          "ja": "\u65B0\u9BAE\u306A\u53F0\u6E7E\u30D0\u30B8\u30EB\uFF08\u4E5D\u5C64\u5854\uFF09\u307E\u305F\u306F\u30DB\u30FC\u30EA\u30FC\u30D0\u30B8\u30EB",
          "ko": "\uC2E0\uC120\uD55C \uD0C0\uC774 \uBC14\uC9C8 (\uAD6C\uCE35\uD0D1)",
          "vi": "L\xE1 h\xFAng qu\u1EBF t\u01B0\u01A1i"
        },
        "amount": 30,
        "unitMetric": "g",
        "unitUS": "1 bunch",
        "isKeyFlavor": true,
        "chineseName": "\u4E5D\u5C64\u5854",
        "chinesePinyin": "Ji\u01D4 c\xE9ng t\u01CE",
        "substitute": {
          "substituteName": {
            "zh-TW": "\u751C\u7F85\u52D2 (Sweet Basil) \u6216 \u7FA9\u5927\u5229\u7F85\u52D2",
            "en": "Italian Sweet Basil or Holy Basil",
            "ja": "\u30B9\u30A4\u30FC\u30C8\u30D0\u30B8\u30EB",
            "ko": "\uC2A4\uC704\uD2B8 \uBC14\uC9C8",
            "vi": "H\xFAng qu\u1EBF t\xE2y (Sweet Basil)"
          },
          "ratio": "1:1",
          "explanation": {
            "zh-TW": "\u4E5D\u5C64\u5854\u9999\u6C23\u6BD4\u897F\u9910\u751C\u7F85\u52D2\u66F4\u8F9B\u9999\u6FC3\u90C1\u3002\u6CB9\u70B8\u524D\u5FC5\u9808\u5FB9\u5E95\u64E6\u4E7E\u6C34\u4EFD\uFF0C\u5426\u5247\u6703\u5287\u70C8\u5674\u6CB9\uFF01",
            "en": "Thai basil has a sharper, anise-like pungency. Ensure leaves are bone-dry before frying to avoid oil splatter.",
            "ja": "\u4E5D\u5C64\u5854\u306F\u30A2\u30CB\u30B9\u306E\u3088\u3046\u306A\u5F37\u3044\u9999\u308A\u304C\u7279\u5FB4\u3002\u6CB9\u30CF\u30CD\u3092\u9632\u3050\u305F\u3081\u6C34\u5206\u3092\u5B8C\u5168\u306B\u62ED\u304D\u53D6\u3063\u3066\u304F\u3060\u3055\u3044\u3002",
            "ko": "\uD0C0\uC774 \uBC14\uC9C8\uC740 \uD5A5\uC774 \uB354 \uC9C4\uD569\uB2C8\uB2E4. \uAE30\uB984\uC5D0 \uB123\uAE30 \uC804 \uBB3C\uAE30\uB97C \uC644\uBCBD\uD788 \uC81C\uAC70\uD574\uC57C \uAE30\uB984\uC774 \uD280\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
            "vi": "L\xE1 ph\u1EA3i th\u1EADt kh\xF4 r\xE1o tr\u01B0\u1EDBc khi cho v\xE0o ch\u1EA3o d\u1EA7u \u0111\u1EC3 tr\xE1nh b\u1EAFn d\u1EA7u nguy hi\u1EC3m."
          },
          "whereToBuy": {
            "zh-TW": "\u5404\u570B\u8D85\u5E02\u852C\u83DC\u51B7\u85CF\u5340\u3001\u6771\u5357\u4E9E\u8D85\u5E02",
            "en": "Asian markets, Trader Joe's, Whole Foods herb section",
            "ja": "\u30A2\u30B8\u30A2\u7CFB\u30B9\u30FC\u30D1\u30FC\u3001\u4E00\u90E8\u5927\u578B\u30B9\u30FC\u30D1\u30FC",
            "ko": "\uB300\uD615 \uB9C8\uD2B8 \uD5C8\uBE0C \uCF54\uB108, \uB3D9\uB0A8\uC544 \uC2DD\uB8CC\uD488\uC810",
            "vi": "Ch\u1EE3 t\u01B0\u01A1i ho\u1EB7c si\xEAu th\u1ECB \u0111\u1ECBa ph\u01B0\u01A1ng"
          }
        }
      },
      {
        "id": "garlic",
        "name": {
          "zh-TW": "\u5927\u849C (\u58D3\u6CE5+\u5207\u788E)",
          "en": "Garlic (Minced & Crushed)",
          "ja": "\u306B\u3093\u306B\u304F\uFF08\u3059\u308A\u304A\u308D\u3057\uFF0B\u307F\u3058\u3093\u5207\u308A\uFF09",
          "ko": "\uB9C8\uB298 (\uB2E4\uC9C4 \uB9C8\uB298)",
          "vi": "T\u1ECFi b\u0103m nhuy\u1EC5n"
        },
        "amount": 4,
        "unitMetric": "clove",
        "unitUS": "4 cloves",
        "chineseName": "\u5927\u849C",
        "chinesePinyin": "D\xE0 su\xE0n"
      },
      {
        "id": "soy-sauce",
        "name": {
          "zh-TW": "\u53F0\u7063\u7D14\u91C0\u9020\u91AC\u6CB9",
          "en": "Taiwanese Dark Soy Sauce",
          "ja": "\u91A4\u6CB9",
          "ko": "\uC9C4\uAC04\uC7A5",
          "vi": "N\u01B0\u1EDBc t\u01B0\u01A1ng \u0111\u1EADu n\xE0nh"
        },
        "amount": 25,
        "unitMetric": "ml",
        "unitUS": "1.5 tbsp",
        "chineseName": "\u91AC\u6CB9",
        "chinesePinyin": "Ji\xE0ng y\xF3u"
      },
      {
        "id": "rice-wine",
        "name": {
          "zh-TW": "\u6599\u7406\u7C73\u9152 (\u6216\u7D39\u8208\u9152)",
          "en": "Taiwanese Rice Wine (or Shaoxing Wine)",
          "ja": "\u53F0\u6E7E\u6599\u7406\u9152\uFF08\u7C73\u9152\uFF09\u307E\u305F\u306F\u7D39\u8208\u9152",
          "ko": "\uB300\uB9CC \uC694\uB9AC\uC220 (\uBBF8\uC8FC \uB610\uB294 \uC18C\uD765\uC8FC)",
          "vi": "R\u01B0\u1EE3u g\u1EA1o n\u1EA5u \u0103n"
        },
        "amount": 15,
        "unitMetric": "ml",
        "unitUS": "1 tbsp",
        "chineseName": "\u6599\u7406\u7C73\u9152",
        "chinesePinyin": "Li\xE0o l\u01D0 m\u01D0 ji\u01D4",
        "substitute": {
          "substituteName": {
            "zh-TW": "\u6E05\u771F\u53CB\u5584\uFF1A\u65B0\u9BAE\u8591\u6C41 + \u860B\u679C\u918B",
            "en": "Halal-friendly: Fresh ginger juice + splash of apple cider vinegar",
            "ja": "\u751F\u59DC\u306E\u643E\u308A\u6C41\uFF0B\u30EA\u30F3\u30B4\u9162\u5C11\u3005",
            "ko": "\uC0DD\uAC15\uC999 + \uC0AC\uACFC\uC2DD\uCD08 \uC57D\uAC04",
            "vi": "N\u01B0\u1EDBc c\u1ED1t g\u1EEBng t\u01B0\u01A1i + gi\u1EA5m t\xE1o"
          },
          "ratio": "1:1",
          "explanation": {
            "zh-TW": "\u53BB\u8165\u8EDF\u5316\u8089\u8CEA\u3002\u6E05\u771F\u98F2\u98DF\u6216\u7121\u9152\u7CBE\u70F9\u98EA\u53EF\u4F7F\u7528\u751F\u8591\u6C41\u66FF\u4EE3\u3002",
            "en": "Tenderizes chicken and removes gamey smell. Ginger juice is a great alcohol-free alternative.",
            "ja": "\u8089\u3092\u67D4\u3089\u304B\u304F\u3057\u81ED\u307F\u3092\u6D88\u3057\u307E\u3059\u3002\u30CE\u30F3\u30A2\u30EB\u30B3\u30FC\u30EB\u8ABF\u7406\u306B\u306F\u751F\u59DC\u6C41\u304C\u6700\u9069\u3067\u3059\u3002",
            "ko": "\uC7A1\uB0B4\uB97C \uC7A1\uACE0 \uC721\uC9C8\uC744 \uBD80\uB4DC\uB7FD\uAC8C \uD569\uB2C8\uB2E4. \uBB34\uC54C\uCF54\uC62C \uC2DC \uC0DD\uAC15\uC999\uC73C\uB85C \uB300\uCCB4\uD558\uC138\uC694.",
            "vi": "Kh\u1EED m\xF9i v\xE0 l\xE0m m\u1EC1m th\u1ECBt. Ng\u01B0\u1EDDi \u0103n Halal c\xF3 th\u1EC3 d\xF9ng n\u01B0\u1EDBc g\u1EEBng."
          },
          "whereToBuy": {
            "zh-TW": "\u8D85\u5E02\u8ABF\u5473\u54C1\u5C08\u5340",
            "en": "Supermarket vinegar/Asian aisle",
            "ja": "\u30B9\u30FC\u30D1\u30FC\u8ABF\u5473\u6599\u30B3\u30FC\u30CA\u30FC",
            "ko": "\uC77C\uBC18 \uB9C8\uD2B8",
            "vi": "Si\xEAu th\u1ECB"
          }
        }
      },
      {
        "id": "five-spice",
        "name": {
          "zh-TW": "\u53F0\u7063\u4E94\u9999\u7C89",
          "en": "Taiwanese Five-Spice Powder",
          "ja": "\u4E94\u9999\u7C89\uFF08\u30A6\u30FC\u30B7\u30E3\u30F3\u30D5\u30A7\u30F3\uFF09",
          "ko": "\uC624\uD5A5\uBD84 (\uC624\uD5A5\uAC00\uB8E8)",
          "vi": "B\u1ED9t ng\u0169 v\u1ECB h\u01B0\u01A1ng"
        },
        "amount": 3,
        "unitMetric": "g",
        "unitUS": "0.5 tsp",
        "isKeyFlavor": true,
        "chineseName": "\u4E94\u9999\u7C89",
        "chinesePinyin": "W\u01D4 xi\u0101ng f\u011Bn"
      },
      {
        "id": "white-pepper-salt",
        "name": {
          "zh-TW": "\u591C\u5E02\u7279\u8ABF\u767D\u80E1\u6912\u9E7D (\u9E7D+\u767D\u80E1\u6912+\u5FAE\u91CF\u8089\u6842+\u7CD6)",
          "en": "Taiwanese Night Market Pepper Salt (White pepper + Salt + Hint of Cinnamon + Sugar)",
          "ja": "\u7279\u88FD\u53F0\u6E7E\u80E1\u6912\u5869\uFF08\u5869\uFF0B\u767D\u80E1\u6912\uFF0B\u30B7\u30CA\u30E2\u30F3\u6975\u5FAE\u91CF\uFF0B\u7802\u7CD6\uFF09",
          "ko": "\uB300\uB9CC\uC2DD \uD2B9\uC81C \uD6C4\uCD94\uC18C\uAE08 (\uBC31\uD6C4\uCD94+\uC18C\uAE08+\uACC4\uD53C \uC57D\uAC04+\uC124\uD0D5)",
          "vi": "Mu\u1ED1i ti\xEAu tr\u1EAFng \u0111\u1EB7c ch\u1EBF \u0110\xE0i Loan"
        },
        "amount": 8,
        "unitMetric": "g",
        "unitUS": "1.5 tsp",
        "isKeyFlavor": true,
        "chineseName": "\u80E1\u6912\u9E7D\u7C89",
        "chinesePinyin": "H\xFA ji\u0101o y\xE1n f\u011Bn"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u96DE\u8089\u5207\u584A\u8207\u79D8\u88FD\u91AC\u6C41\u9183\u6F2C",
          "en": "Slice & Marinate Chicken with Five-Spice",
          "ja": "\u9D8F\u8089\u3092\u30AB\u30C3\u30C8\u3057\u79D8\u4F1D\u306E\u30BF\u30EC\u306B\u6F2C\u3051\u8FBC\u3080",
          "ko": "\uB2ED\uACE0\uAE30 \uC190\uC9C8 \uBC0F \uD2B9\uC81C \uC591\uB150\uC5D0 \uC7AC\uC6B0\uAE30",
          "vi": "C\u1EAFt th\u1ECBt v\xE0 \u01B0\u1EDBp v\u1EDBi gia v\u1ECB ng\u0169 v\u1ECB h\u01B0\u01A1ng"
        },
        "instruction": {
          "zh-TW": "\u5C07\u53BB\u9AA8\u96DE\u817F\u8089\u5207\u6210\u7D04 2.5~3 \u516C\u5206\u7684\u4E00\u53E3\u5927\u5C0F\u3002\u52A0\u5165\u91AC\u6CB9\u3001\u7C73\u9152\u3001\u849C\u6CE5\u3001\u4E94\u9999\u7C89\u3001\u7CD6\u8207\u767D\u80E1\u6912\u7C89\uFF0C\u7528\u624B\u6293\u9183\u6309\u6469 2 \u5206\u9418\uFF0C\u51B7\u85CF\u9183\u6F2C\u81F3\u5C11 20 \u5206\u9418\uFF08\u9183\u9694\u591C\u66F4\u5165\u5473\uFF09\u3002",
          "en": "Cut chicken thigh into 2.5-3cm bite-sized chunks. Add soy sauce, rice wine, minced garlic, five-spice powder, sugar, and white pepper. Massage for 2 mins, then chill in fridge for at least 20 mins.",
          "ja": "\u9D8F\u3082\u3082\u8089\u3092\u4E00\u53E3\u5927\uFF08\u7D042.5\u301C3cm\u89D2\uFF09\u306B\u5207\u308A\u307E\u3059\u3002\u91A4\u6CB9\u3001\u9152\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u4E94\u9999\u7C89\u3001\u7802\u7CD6\u3001\u767D\u80E1\u6912\u3092\u52A0\u3048\u3001\u624B\u3067\u3088\u304F\u63C9\u307F\u8FBC\u3093\u3067\u51B7\u8535\u5EAB\u306720\u5206\u4EE5\u4E0A\u5BDD\u304B\u305B\u307E\u3059\u3002",
          "ko": "\uB2ED\uB2E4\uB9AC\uC0B4\uC744 \uD55C \uC785 \uD06C\uAE30(2.5~3cm)\uB85C \uAE4D\uB451\uC370\uAE30\uD569\uB2C8\uB2E4. \uC9C4\uAC04\uC7A5, \uB9DB\uC220, \uB2E4\uC9C4 \uB9C8\uB298, \uC624\uD5A5\uBD84, \uC124\uD0D5, \uBC31\uD6C4\uCD94\uB97C \uB123\uACE0 \uC870\uBB3C\uC870\uBB3C 2\uBD84\uAC04 \uB9C8\uC0AC\uC9C0\uD55C \uB4A4 \uB0C9\uC7A5\uACE0\uC5D0\uC11C \uCD5C\uC18C 20\uBD84\uAC04 \uC7AC\uC6CC\uB461\uB2C8\uB2E4.",
          "vi": "Th\xE1i \u0111\xF9i g\xE0 th\xE0nh mi\u1EBFng v\u1EEBa \u0103n c\u1EE1 3cm. Cho n\u01B0\u1EDBc t\u01B0\u01A1ng, r\u01B0\u1EE3u, t\u1ECFi, ng\u0169 v\u1ECB h\u01B0\u01A1ng, ti\xEAu v\xE0o b\xF3p \u0111\u1EC1u 2 ph\xFAt r\u1ED3i \u01B0\u1EDBp l\u1EA1nh 20 ph\xFAt."
        },
        "image": "/images/popcorn-chicken-step1.jpg",
        "durationSeconds": 1200,
        "crucialTips": {
          "zh-TW": "\u96DE\u817F\u8089\u6BD4\u96DE\u80F8\u8089\u591A\u6C41\u5AE9\u6ED1\uFF1B\u9183\u6599\u4E2D\u52A0\u4E00\u5C0F\u52FA\u7CD6\u80FD\u5E6B\u52A9\u9AD8\u6EAB\u5FEB\u901F\u4E0A\u8272\u7522\u751F\u7F8E\u62C9\u5FB7\u7126\u9999\uFF01",
          "en": "Chicken thigh stays juicy and never dries out. A pinch of sugar accelerates Maillard browning in hot oil.",
          "ja": "\u3082\u3082\u8089\u3092\u4F7F\u3046\u3053\u3068\u3067\u30B8\u30E5\u30FC\u30B7\u30FC\u306B\u4ED5\u4E0A\u304C\u308A\u307E\u3059\u3002\u7802\u7CD6\u304C\u6CB9\u306E\u4E2D\u3067\u9999\u3070\u3057\u3044\u7167\u308A\u3092\u751F\u307F\u51FA\u3057\u307E\u3059\u3002",
          "ko": "\uB2ED\uB2E4\uB9AC\uC0B4\uC744 \uC368\uC57C \uC721\uC999\uC774 \uCD09\uCD09\uD569\uB2C8\uB2E4. \uC18C\uB7C9\uC758 \uC124\uD0D5\uC774 \uD280\uAE40\uC637\uC758 \uBC14\uC0AD\uD55C \uAC08\uC0C9\uBE5B\uC744 \uB3D5\uC2B5\uB2C8\uB2E4.",
          "vi": "D\xF9ng \u0111\xF9i g\xE0 \u0111\u1EC3 th\u1ECBt m\u1EC1m m\u1ECDng. Ch\xFAt \u0111\u01B0\u1EDDng gi\xFAp g\xE0 l\xEAn m\xE0u v\xE0ng \xF3ng \u0111\u1EB9p m\u1EAFt."
        }
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u88F9\u4E0A\u7C97\u5730\u74DC\u7C89\u8207\u300C\u56DE\u6F6E\u300D\u95DC\u9375\u6B65\u9A5F",
          "en": 'Dredge in Coarse Starch & Rest for "Hydration"',
          "ja": "\u7C97\u633D\u304D\u3055\u3064\u307E\u3044\u3082\u7C89\u3092\u307E\u3076\u3057\u300C\u7C89\u623B\u3057\uFF08\u56DE\u6F6E\uFF09\u300D\u3059\u308B",
          "ko": "\uAD75\uC740 \uACE0\uAD6C\uB9C8 \uC804\uBD84 \uBB3B\uD788\uAE30 \uBC0F 5\uBD84 \uD734\uC9C0 (\uD280\uAE40\uC637 \uBC00\uCC29 \uD575\uC2EC)",
          "vi": "T\u1EA9m b\u1ED9t khoai lang v\xE0 ngh\u1EC9 cho b\u1ED9t ng\u1EA5m \u1EA9m (H\u1ED3i tri\u1EC1u)"
        },
        "instruction": {
          "zh-TW": "\u5C07\u9183\u597D\u7684\u96DE\u8089\u9010\u584A\u5747\u52FB\u88F9\u4E0A\u7C97\u9846\u7C92\u5730\u74DC\u7C89\uFF0C\u8F15\u8F15\u6309\u58D3\u8B93\u7C89\u9644\u8457\u3002\u64FA\u5728\u76E4\u4E2D\u300C\u975C\u7F6E 5 \u5206\u9418\u7B49\u5F85\u7C89\u8B8A\u6F6E\u6FD5\uFF08\u56DE\u6F6E\uFF09\u300D\uFF0C\u9019\u4E00\u6B65\u80FD\u9632\u6B62\u4E0B\u934B\u6642\u7C89\u8089\u5206\u96E2\u3001\u70B8\u6CB9\u8B8A\u6E3E\u6FC1\uFF01",
          "en": 'Coat each chicken chunk thoroughly in coarse sweet potato starch. Place on a tray and WAIT 5 MINUTES for the starch to absorb moisture and turn slightly damp ("Huichao"). This locks the crust so it never falls off in oil!',
          "ja": "\u9D8F\u8089\u306B\u7C97\u633D\u304D\u3055\u3064\u307E\u3044\u3082\u7C89\u3092\u3057\u3063\u304B\u308A\u307E\u3076\u3057\u307E\u3059\u3002\u30D0\u30C3\u30C8\u306B\u4E26\u3079\u300C5\u5206\u9593\u305D\u306E\u307E\u307E\u7F6E\u3044\u3066\u7C89\u3092\u3057\u3063\u3068\u308A\u99B4\u67D3\u307E\u305B\u308B\uFF08\u56DE\u6F6E\uFF09\u300D\u306E\u304C\u6700\u5927\u306E\u30B3\u30C4\uFF01\u7C89\u843D\u3061\u3092\u9632\u304E\u307E\u3059\u3002",
          "ko": "\uB2ED\uACE0\uAE30 \uC870\uAC01\uB9C8\uB2E4 \uAD75\uC740 \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC744 \uAF3C\uAF3C\uD788 \uBB3B\uD799\uB2C8\uB2E4. \uD2B8\uB808\uC774\uC5D0 \uC62C\uB9AC\uACE0 5\uBD84\uAC04 \uADF8\uB300\uB85C \uB450\uC5B4 \uC804\uBD84\uC774 \uACE0\uAE30 \uC218\uBD84\uC744 \uBA38\uAE08\uB3C4\uB85D \uAE30\uB2E4\uB9BD\uB2C8\uB2E4 (\uD280\uAE38 \uB54C \uAC00\uB8E8\uAC00 \uB5A8\uC5B4\uC9C0\uB294 \uAC83\uC744 \uC644\uBCBD \uBC29\uC9C0).",
          "vi": "L\u0103n t\u1EEBng mi\u1EBFng g\xE0 qua b\u1ED9t khoai lang h\u1EA1t to. X\u1EBFp ra \u0111\u0129a \u0110\u1EC2 NGH\u1EC8 5 PH\xDAT cho b\u1ED9t h\xFAt \u1EA9m h\u01A1i s\u1EABm m\xE0u l\u1EA1i. B\xED quy\u1EBFt n\xE0y gi\xFAp b\u1ED9t b\xE1m ch\u1EB7t kh\xF4ng b\u1ECB r\u01A1i r\u1EE5ng."
        },
        "image": "/images/popcorn-chicken-step2.jpg",
        "durationSeconds": 300,
        "dangerWarnings": {
          "zh-TW": "\u5343\u842C\u4E0D\u8981\u88F9\u7C89\u5F8C\u7ACB\u523B\u4E0B\u934B\uFF01\u672A\u56DE\u6F6E\u7684\u4E7E\u7C89\u9047\u5230\u6EFE\u6CB9\u6703\u5927\u91CF\u6389\u843D\uFF0C\u5C0E\u81F4\u6CB9\u767C\u9ED1\u7522\u751F\u7126\u5473\u3002",
          "en": "DO NOT drop freshly dusted chicken immediately into oil! Dry starch will instantly detach and burn the oil.",
          "ja": "\u7C89\u3092\u3064\u3051\u3066\u3059\u3050\u63DA\u3052\u306A\u3044\u3067\u304F\u3060\u3055\u3044\uFF01\u7C89\u304C\u306F\u304C\u308C\u3066\u6CB9\u304C\u6C5A\u308C\u3001\u7126\u3052\u4ED8\u304D\u306E\u539F\u56E0\u306B\u306A\u308A\u307E\u3059\u3002",
          "ko": "\uAC00\uB8E8\uB97C \uBB3B\uD788\uC790\uB9C8\uC790 \uBC14\uB85C \uAE30\uB984\uC5D0 \uB123\uC9C0 \uB9C8\uC138\uC694! \uAC00\uB8E8\uAC00 \uBD84\uB9AC\uB418\uC5B4 \uAE30\uB984\uC774 \uD0C0\uBC84\uB9BD\uB2C8\uB2E4.",
          "vi": "Tuy\u1EC7t \u0111\u1ED1i kh\xF4ng th\u1EA3 v\xE0o ch\u1EA3o ngay! B\u1ED9t kh\xF4 s\u1EBD bong ra l\xE0m ch\xE1y kh\xE9t d\u1EA7u."
        }
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u521D\u6B21\u6CB9\u70B8\uFF1A\u5B9A\u578B\u8207\u719F\u5316 (160\xB0C)",
          "en": "First Fry: Set Shape & Cook Through (160\xB0C / 320\xB0F)",
          "ja": "1\u5EA6\u76EE\u306E\u63DA\u3052\uFF1A\u4E2D\u307E\u3067\u706B\u3092\u901A\u3059\uFF08160\u2103\u30FB\u4E2D\u6E29\uFF09",
          "ko": "1\uCC28 \uD280\uAE40: \uC18D\uAE4C\uC9C0 \uC775\uD788\uAE30 (160\xB0C \uC911\uC628)",
          "vi": "Chi\xEAn l\u1EA7n 1: L\xE0m ch\xEDn th\u1ECBt t\u1EEB trong ra ngo\xE0i (160\xB0C)"
        },
        "instruction": {
          "zh-TW": "\u3010\u50B3\u7D71\u6CB9\u70B8\u3011\uFF1A\u6CB9\u6EAB\u5347\u81F3 160\xB0C\uFF08\u6728\u7B77\u63D2\u5165\u5192\u7D30\u5C0F\u6C23\u6CE1\uFF09\uFF0C\u9010\u584A\u4E0B\u96DE\u8089\uFF0C\u5148\u4E0D\u8981\u7FFB\u52D5\u8B93\u9EB5\u8863\u5B9A\u578B 1 \u5206\u9418\uFF0C\u63A5\u8457\u70B8\u7D04 3~4 \u5206\u9418\u81F3\u516B\u5206\u719F\u6488\u51FA\u3002\n\u3010\u6C23\u70B8\u934B\u6A21\u5F0F\u3011\uFF1A\u5674\u5C11\u8A31\u6CB9\uFF0C\u8A2D\u5B9A 180\xB0C (355\xB0F) \u70E4 10 \u5206\u9418\u3002",
          "en": "Traditional Fry: Heat oil to 160\xB0C (320\xB0F). Drop chicken chunks one by one. Do not stir for the first minute to let crust set. Fry for 3-4 mins until light golden and cooked through. Remove and drain.\nAir Fryer: Lightly spray with oil, air-fry at 180\xB0C (355\xB0F) for 10 mins.",
          "ja": "\u3010\u6CB9\u3067\u63DA\u3052\u308B\u5834\u5408\u3011\uFF1A\u6CB9\u3092160\u2103\u306B\u71B1\u3057\u3001\u8089\u30921\u3064\u305A\u3064\u5165\u308C\u307E\u3059\u3002\u6700\u521D\u306E1\u5206\u306F\u89E6\u3089\u305A\u8863\u3092\u56FA\u3081\u3001\u5408\u8A083\u301C4\u5206\u63DA\u3052\u3066\u4E00\u5EA6\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002\n\u3010\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u3011\uFF1A\u6CB9\u3092\u8EFD\u304F\u5439\u304D\u304B\u3051\u3001180\u2103\u306710\u5206\u52A0\u71B1\u3002",
          "ko": "\u3010\uAE30\uB984 \uD280\uAE40\u3011\uFF1A\uAE30\uB984 \uC628\uB3C4\uB97C 160\xB0C\uB85C \uB9DE\uCD94\uACE0 \uB2ED\uACE0\uAE30\uB97C \uD558\uB098\uC529 \uB123\uC2B5\uB2C8\uB2E4. 1\uBD84\uAC04 \uAC74\uB4DC\uB9AC\uC9C0 \uC54A\uACE0 \uC637\uC744 \uAD73\uD78C \uB4A4 3~4\uBD84\uAC04 \uD280\uACA8 \uAC74\uC838\uB0C5\uB2C8\uB2E4.\n\u3010\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\u3011\uFF1A\uC624\uC77C \uC2A4\uD504\uB808\uC774\uB97C \uBFCC\uB9B0 \uD6C4 180\xB0C\uC5D0\uC11C 10\uBD84\uAC04 \uC870\uB9AC\uD569\uB2C8\uB2E4.",
          "vi": "Chi\xEAn d\u1EA7u: \u0110un d\u1EA7u 160\xB0C, th\u1EA3 t\u1EEBng mi\u1EBFng g\xE0 v\xE0o kh\xF4ng \u0111\u1EA3o trong 1 ph\xFAt \u0111\u1EA7u. Chi\xEAn 3-4 ph\xFAt r\u1ED3i v\u1EDBt ra r\xE1o d\u1EA7u.\nN\u1ED3i chi\xEAn kh\xF4ng d\u1EA7u: X\u1ECBt ch\xFAt d\u1EA7u, n\u01B0\u1EDBng 180\xB0C trong 10 ph\xFAt."
        },
        "image": "/images/popcorn-chicken-step3.jpg",
        "durationSeconds": 240,
        "cookwareVariations": [
          {
            "cookware": "airFryer",
            "tempAndSetting": "Air Fryer: 180\xB0C (355\xB0F) for 10 mins",
            "instructionOverride": {
              "zh-TW": "\u5728\u6C23\u70B8\u934B\u70B8\u7C43\u5E95\u90E8\u92EA\u70D8\u7119\u7D19\u6216\u5237\u8584\u6CB9\uFF0C\u653E\u5165\u56DE\u6F6E\u5F8C\u7684\u96DE\u8089\u584A\uFF08\u4E0D\u8981\u91CD\u758A\uFF09\uFF0C\u8868\u9762\u5747\u52FB\u5674\u4E0A\u4E00\u5C64\u98DF\u7528\u6CB9\u3002\u4EE5 180\xB0C \u6C23\u70B8 10 \u5206\u9418\uFF0C\u4E2D\u9014 6 \u5206\u9418\u6642\u7FFB\u9762\u4E00\u6B21\u3002",
              "en": "Place chicken in single layer in air fryer basket. Generously spray oil over the starch coating. Air fry at 180\xB0C (355\xB0F) for 10 mins, flipping at 6 mins.",
              "ja": "\u91CD\u306A\u3089\u306A\u3044\u3088\u3046\u306B\u4E26\u3079\u3001\u8868\u9762\u5168\u4F53\u306B\u3057\u3063\u304B\u308A\u6CB9\u3092\u30B9\u30D7\u30EC\u30FC\u3057\u307E\u3059\u3002180\u2103\u306710\u5206\u3001\u9014\u4E2D\u3067\u4E00\u5EA6\u88CF\u8FD4\u3057\u307E\u3059\u3002",
              "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uC5D0 \uACB9\uCE58\uC9C0 \uC54A\uAC8C \uB2F4\uACE0 \uD45C\uBA74\uC5D0 \uC2DD\uC6A9\uC720\uB97C \uACE8\uACE0\uB8E8 \uBD84\uC0AC\uD569\uB2C8\uB2E4. 180\xB0C\uC5D0\uC11C 10\uBD84\uAC04 \uB3CC\uB9AC\uACE0 6\uBD84\uC9F8\uC5D0 \uD55C \uBC88 \uB4A4\uC9D1\uC5B4\uC90D\uB2C8\uB2E4.",
              "vi": "X\u1EBFp g\xE0 v\xE0o khay m\u1ED9t l\u1EDBp kh\xF4ng \u0111\xE8 l\xEAn nhau, x\u1ECBt \u0111\u1EABm d\u1EA7u l\xEAn m\u1EB7t b\u1ED9t. N\u01B0\u1EDBng 180\xB0C 10 ph\xFAt, l\u1EADt m\u1EB7t l\xFAc 6 ph\xFAt."
            }
          }
        ]
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u5927\u706B\u5FA9\u70B8\u8207\u4E5D\u5C64\u5854\u9AD8\u6EAB\u7206\u9999 (190\xB0C)",
          "en": "Second Flash-Fry with Thai Basil for Super Crunch (190\xB0C / 375\xB0F)",
          "ja": "2\u5EA6\u76EE\u306E\u9AD8\u6E29\u63DA\u3052\uFF06\u53F0\u6E7E\u30D0\u30B8\u30EB\u306E\u7D20\u63DA\u3052\uFF08190\u2103\u30FB\u9AD8\u6E29\uFF09",
          "ko": "2\uCC28 \uACE0\uC628 \uC7AC\uD280\uAE40 & \uBC14\uC9C8 \uD3ED\uD48D \uD22C\uD558 (190\xB0C \uD06C\uB7F0\uCE58)",
          "vi": "Chi\xEAn l\u1EA7n 2 l\u1EEDa l\u1EDBn & Th\u1EA3 h\xFAng qu\u1EBF gi\xF2n tan (190\xB0C)"
        },
        "instruction": {
          "zh-TW": "\u3010\u50B3\u7D71\u6CB9\u70B8\u3011\uFF1A\u5C07\u6CB9\u6EAB\u62C9\u9AD8\u81F3 190\xB0C\uFF08\u5927\u706B\u71B1\u6CB9\uFF09\u3002\u5012\u56DE\u96DE\u8089\u5927\u706B\u5FA9\u70B8 45~60 \u79D2\u903C\u51FA\u591A\u9918\u6CB9\u8102\uFF0C\u8D77\u934B\u524D 5 \u79D2\u4E1F\u5165\u300C\u64E6\u4E7E\u6C34\u5206\u7684\u4E5D\u5C64\u5854\u300D\uFF0C\u6ECB\u6ECB\u4F5C\u97FF\u9999\u6C23\u7206\u767C\u5F8C\u7ACB\u523B\u8207\u96DE\u8089\u4E00\u540C\u6488\u51FA\u701D\u6CB9\uFF01\n\u3010\u6C23\u70B8\u934B\u6A21\u5F0F\u3011\uFF1A\u8F49 200\xB0C (400\xB0F) \u5FA9\u70B8 3 \u5206\u9418\uFF0C\u6700\u5F8C 1 \u5206\u9418\u52A0\u5165\u4E5D\u5C64\u5854\u3002",
          "en": "Traditional: Raise oil temp to 190\xB0C (375\xB0F). Drop chicken back in for 45-60 secs to expel oil and achieve ultra-crispiness. 5 seconds before pulling out, toss in BONE-DRY Thai basil leaves\u2014listen to the sizzling explosion of aroma, then immediately scoop everything out!\nAir Fryer: Crank to 200\xB0C (400\xB0F) for 3 mins, tossing in basil for the final 1 min.",
          "ja": "\u3010\u6CB9\u3067\u63DA\u3052\u308B\u5834\u5408\u3011\uFF1A\u6CB9\u6E29\u3092190\u2103\u306B\u4E0A\u3052\u3001\u8089\u3092\u623B\u3057\u306645\u301C60\u79D2\u4E8C\u5EA6\u63DA\u3052\u3002\u5F15\u304D\u4E0A\u3052\u308B5\u79D2\u524D\u306B\u300C\u6C34\u6C17\u3092\u5207\u3063\u305F\u30D0\u30B8\u30EB\u300D\u3092\u4E00\u6C17\u306B\u6295\u5165\uFF01\u9999\u308A\u304C\u7ACB\u3063\u305F\u3089\u5373\u5EA7\u306B\u5F15\u304D\u4E0A\u3052\u307E\u3059\u3002\n\u3010\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u3011\uFF1A200\u2103\u306B\u6E29\u5EA6\u3092\u4E0A\u30523\u5206\u8FFD\u52A0\u3001\u6700\u5F8C\u306E1\u5206\u3067\u30D0\u30B8\u30EB\u3092\u52A0\u3048\u307E\u3059\u3002",
          "ko": "\u3010\uAE30\uB984 \uD280\uAE40\u3011\uFF1A\uAE30\uB984 \uC628\uB3C4\uB97C 190\xB0C\uB85C \uC62C\uB824 \uB2ED\uACE0\uAE30\uB97C \uB2E4\uC2DC \uB123\uACE0 45~60\uCD08\uAC04 \uACE0\uC628\uC73C\uB85C \uD280\uACA8 \uAE30\uB984\uC744 \uBE8D\uB2C8\uB2E4. \uAC74\uC9C0\uAE30 5\uCD08 \uC804 \uBC14\uC9C8 \uC78E\uC744 \uB123\uACE0 \uBC14\uC0AD\uD55C \uD5A5\uC774 \uC62C\uB77C\uC624\uBA74 \uC989\uC2DC \uD568\uAED8 \uAC74\uC838\uB0C5\uB2C8\uB2E4!\n\u3010\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\u3011\uFF1A200\xB0C\uB85C \uC62C\uB824 3\uBD84 \uB354 \uAD7D\uACE0 \uB9C8\uC9C0\uB9C9 1\uBD84\uC5D0 \uBC14\uC9C8\uC744 \uB123\uC2B5\uB2C8\uB2E4.",
          "vi": "Chi\xEAn l\u1EA7n 2: T\u0103ng nhi\u1EC7t 190\xB0C, th\u1EA3 g\xE0 v\xE0o chi\xEAn nhanh 45-60 gi\xE2y \u0111\u1EC3 \xE9p b\u1EDBt d\u1EA7u. 5 gi\xE2y tr\u01B0\u1EDBc khi v\u1EDBt, th\u1EA3 ngay l\xE1 h\xFAng qu\u1EBF kh\xF4 v\xE0o \u0111\u1EA3o \u0111\u1EC1u r\u1ED3i v\u1EDBt ra ngay!"
        },
        "image": "/images/popcorn-chicken-step4.jpg",
        "durationSeconds": 60,
        "dangerWarnings": {
          "zh-TW": "\u26A0\uFE0F \u4E5D\u5C64\u5854\u4E0B\u6CB9\u934B\u6642\u6703\u5287\u70C8\u5288\u556A\u4F5C\u97FF\uFF01\u8ACB\u52D9\u5FC5\u5148\u7528\u5EDA\u623F\u7D19\u5DFE\u5FB9\u5E95\u64E6\u4E7E\u8449\u7247\u6C34\u5206\uFF0C\u4E26\u5099\u597D\u934B\u84CB\u6216\u9632\u6FFA\u7DB2\u3002",
          "en": "\u26A0\uFE0F Fresh herbs splutter vigorously when dropped in hot oil! Keep hands back and use a splatter guard.",
          "ja": "\u26A0\uFE0F \u30D0\u30B8\u30EB\u6295\u5165\u6642\u306B\u6CB9\u304C\u6FC0\u3057\u304F\u306F\u3058\u3051\u307E\u3059\uFF01\u5FC5\u305A\u6C34\u5206\u3092\u5B8C\u5168\u306B\u62ED\u304D\u53D6\u308A\u3001\u6CE8\u610F\u3057\u3066\u4F5C\u696D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
          "ko": "\u26A0\uFE0F \uBC14\uC9C8\uC774 \uAE30\uB984\uC5D0 \uB2FF\uC73C\uBA74 \uD0C0\uB2E5\uD0C0\uB2E5 \uD291\uB2C8\uB2E4! \uBB3C\uAE30\uB97C \uC644\uBCBD\uD788 \uB2E6\uC544\uB0B4\uACE0 \uC870\uC2EC\uD558\uC138\uC694.",
          "vi": "\u26A0\uFE0F L\xE1 h\xFAng qu\u1EBF g\u1EB7p d\u1EA7u n\xF3ng s\u1EBD n\u1ED5 t\xED t\xE1ch! H\xE3y lau th\u1EADt kh\xF4 v\xE0 c\u1EA9n th\u1EADn."
        },
        "cookwareVariations": [
          {
            "cookware": "airFryer",
            "tempAndSetting": "Air Fryer: 200\xB0C (400\xB0F) for 3 mins",
            "instructionOverride": {
              "zh-TW": "\u5C07\u6C23\u70B8\u934B\u5347\u6EAB\u81F3\u6700\u9AD8\u6EAB 200\xB0C (400\xB0F)\uFF0C\u7E7C\u7E8C\u6C23\u70B8 3 \u5206\u9418\u8B93\u5916\u76AE\u91D1\u9EC3\u9165\u8106\u3002\u6700\u5F8C 1 \u5206\u9418\u5C07\u64E6\u4E7E\u4E26\u62B9\u4E0A\u5C11\u8A31\u6CB9\u7684\u4E5D\u5C64\u5854\u4E1F\u5165\u62CC\u52FB\uFF0C\u51FA\u934B\u9999\u6C23\u64B2\u9F3B\uFF01",
              "en": "Increase temperature to 200\xB0C (400\xB0F) for 3 mins. Add oil-brushed basil leaves for the last 1 min and shake basket.",
              "ja": "200\u2103\u306E\u6700\u9AD8\u6E29\u306B\u4E0A\u30523\u5206\u9593\u52A0\u71B1\u3002\u6700\u5F8C\u306E1\u5206\u3067\u6CB9\u3092\u7D61\u3081\u305F\u30D0\u30B8\u30EB\u3092\u6295\u5165\u3057\u3066\u30B5\u30C3\u3068\u9999\u308A\u3092\u307E\u3068\u308F\u305B\u307E\u3059\u3002",
              "ko": "\uC628\uB3C4\uB97C 200\xB0C\uB85C \uB192\uC5EC 3\uBD84\uAC04 \uB354 \uB3CC\uB824 \uBC14\uC0AD\uD568\uC744 \uADF9\uB300\uD654\uD569\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9 1\uBD84\uC5D0 \uC624\uC77C\uC744 \uC0B4\uC9DD \uBC14\uB978 \uBC14\uC9C8\uC744 \uB123\uACE0 \uC11E\uC5B4\uC90D\uB2C8\uB2E4.",
              "vi": "T\u0103ng nhi\u1EC7t 200\xB0C n\u01B0\u1EDBng 3 ph\xFAt. 1 ph\xFAt cu\u1ED1i cho l\xE1 h\xFAng qu\u1EBF xoa ch\xFAt d\u1EA7u v\xE0o \u0111\u1EA3o \u0111\u1EC1u th\u01A1m ph\u1EE9c."
            }
          }
        ]
      },
      {
        "stepNumber": 5,
        "title": {
          "zh-TW": "\u6492\u4E0A\u591C\u5E02\u9748\u9B42\u80E1\u6912\u9E7D\uFF0C\u88DD\u888B\u7AF9\u7C64\u958B\u5403\uFF01",
          "en": "Toss with Pepper Salt & Serve with Skewers",
          "ja": "\u7279\u88FD\u80E1\u6912\u5869\u3092\u305F\u3063\u3077\u308A\u632F\u308A\u3001\u7AF9\u4E32\u3067\u3044\u305F\u3060\u304F\uFF01",
          "ko": "\uD2B9\uC81C \uD6C4\uCD94\uC18C\uAE08 \uACE8\uACE0\uB8E8 \uBFCC\uB824 \uB098\uBB34\uAF2C\uCE58\uB85C \uCF55 \uCC0D\uC5B4 \uBA39\uAE30!",
          "vi": "R\u1EAFc mu\u1ED1i ti\xEAu \u0111\u1EB7c ch\u1EBF, x\xF3c \u0111\u1EC1u trong t\xFAi gi\u1EA5y!"
        },
        "instruction": {
          "zh-TW": "\u5C07\u70B8\u597D\u7684\u9E7D\u9165\u96DE\u8207\u9165\u8106\u4E5D\u5C64\u5854\u653E\u5165\u5927\u91D1\u5C6C\u76C6\u4E2D\uFF0C\u8D81\u71B1\u5927\u91CF\u6492\u4E0A\u9748\u9B42\u767D\u80E1\u6912\u9E7D\uFF08\u559C\u8FA3\u8005\u53EF\u52A0\u7279\u7D30\u8FA3\u6912\u7C89\uFF09\uFF0C\u96D9\u624B\u6382\u76C6\u5747\u52FB\u7FFB\u6EFE\uFF0C\u88DD\u5165\u7D19\u888B\u63D2\u4E0A\u7AF9\u7C64\uFF0C\u8D81\u71B1\u4EAB\u7528\uFF01",
          "en": "Place piping-hot chicken and crispy basil in a large metal mixing bowl. Generously dust with Taiwanese pepper salt (and chili powder if desired). Toss well to coat every piece. Serve in paper bags with bamboo skewers!",
          "ja": "\u30DC\u30A6\u30EB\u306B\u71B1\u3005\u306E\u5510\u63DA\u3052\u3068\u30D0\u30B8\u30EB\u3092\u5165\u308C\u3001\u7279\u88FD\u80E1\u6912\u5869\uFF08\u8F9B\u515A\u306F\u4E00\u5473\u5510\u8F9B\u5B50\u3082\uFF09\u3092\u305F\u3063\u3077\u308A\u632F\u3063\u3066\u8C6A\u5FEB\u306B\u30C8\u30B9\u3057\u307E\u3059\u3002\u7D19\u888B\u306B\u5165\u308C\u3001\u7AF9\u4E32\u3067\u523A\u3057\u3066\u30A2\u30C4\u30A2\u30C4\u3092\u3069\u3046\u305E\uFF01",
          "ko": "\uB728\uAC70\uC6B4 \uCE58\uD0A8\uACFC \uBC14\uC0AD\uD55C \uBC14\uC9C8\uC744 \uBCFC\uC5D0 \uB2F4\uACE0, \uD2B9\uC81C \uD6C4\uCD94\uC18C\uAE08(\uAE30\uD638\uC5D0 \uB530\uB77C \uACE0\uCDA7\uAC00\uB8E8 \uCD94\uAC00)\uC744 \uB109\uB109\uD788 \uBFCC\uB824 \uACE8\uACE0\uB8E8 \uD138\uC5B4 \uC11E\uC5B4\uC90D\uB2C8\uB2E4. \uC885\uC774\uBD09\uD22C\uC5D0 \uB2F4\uC544 \uB098\uBB34\uAF2C\uCE58\uB85C \uC990\uAE30\uC138\uC694!",
          "vi": "Cho g\xE0 n\xF3ng h\u1ED5i v\xE0 l\xE1 qu\u1EBF gi\xF2n v\xE0o \xE2u l\u1EDBn, r\u1EAFc \u0111\u1EABm mu\u1ED1i ti\xEAu tr\u1EAFng \u0110\xE0i Loan, x\xF3c \u0111\u1EC1u cho b\xE1m \u0111\u1EC1u r\u1ED3i cho v\xE0o t\xFAi gi\u1EA5y c\u1EAFm que tre th\u01B0\u1EDFng th\u1EE9c!"
        },
        "image": "/images/popcorn-chicken-step5.jpg",
        "durationSeconds": 30
      }
    ],
    "troubleshooting": [
      {
        "id": "ts-pc-1",
        "problem": {
          "zh-TW": "\u70B8\u51FA\u4F86\u7684\u9EB5\u8863\u7C89\u7C89\u7684\u3001\u5BB9\u6613\u812B\u843D\u6389\u7C89\uFF1F",
          "en": "Why is my crust powdery and falling off in oil?",
          "ja": "\u8863\u304C\u7C89\u3063\u307D\u304F\u3001\u6CB9\u306E\u4E2D\u3067\u30DC\u30ED\u30DC\u30ED\u306F\u304C\u308C\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uD280\uAE40\uC637\uC774 \uBC14\uC0AD\uD558\uC9C0 \uC54A\uACE0 \uAC00\uB8E8\uAC00 \uB5A8\uC5B4\uC9C0\uBA70 \uBC97\uACA8\uC9C0\uB098\uC694?",
          "vi": "T\u1EA1i sao l\u1EDBp v\u1ECF b\u1ECB b\u1EDF b\u1ED9t v\xE0 bong tr\xF3c khi chi\xEAn?"
        },
        "cause": {
          "zh-TW": "\u88F9\u7C89\u5F8C\u6C92\u6709\u7B49\u5F85\u300C\u56DE\u6F6E\u300D\uFF0C\u4E7E\u7C89\u5C1A\u672A\u5438\u6536\u8089\u6C41\u5C31\u76F4\u63A5\u4E0B\u6CB9\u934B\u3002",
          "en": 'Skipped the "Hydration" step. Dry powder hits hot oil and floats away instantly.',
          "ja": "\u7C89\u3092\u3064\u3051\u305F\u5F8C\u306E\u300C\u7C89\u623B\u3057\uFF08\u56DE\u6F6E\uFF09\u300D\u6642\u9593\u3092\u53D6\u3089\u305A\u306B\u3059\u3050\u63DA\u3052\u305F\u305F\u3081\u3067\u3059\u3002",
          "ko": "\uC804\uBD84\uC744 \uBB3B\uD78C \uD6C4 5\uBD84\uAC04 \uD734\uC9C0(\uD68C\uC870) \uACFC\uC815\uC744 \uAC70\uCE58\uC9C0 \uC54A\uACE0 \uBC14\uB85C \uD280\uACBC\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "B\u1ECF qua b\u01B0\u1EDBc ngh\u1EC9 h\u1ED3i tri\u1EC1u khi\u1EBFn b\u1ED9t kh\xF4 ch\u01B0a k\u1ECBp h\xFAt \u1EA9m b\xE1m v\xE0o th\u1ECBt."
        },
        "solution": {
          "zh-TW": "\u88F9\u5B8C\u5730\u74DC\u7C89\u5F8C\u52D9\u5FC5\u975C\u7F6E 5 \u5206\u9418\uFF0C\u770B\u5230\u7C89\u7C92\u8B8A\u6DF1\u8272\u6F6E\u6FD5\u518D\u4E0B\u934B\uFF01",
          "en": "Always wait 5 minutes until starch turns darker and slightly moist before frying.",
          "ja": "\u7C89\u3092\u307E\u3076\u3057\u305F\u5F8C\u3001\u5FC5\u305A5\u5206\u653E\u7F6E\u3057\u3066\u7C89\u304C\u3057\u3063\u3068\u308A\u3057\u3066\u304B\u3089\u6CB9\u306B\u5165\u308C\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uAC00\uB8E8\uAC00 \uACE0\uAE30 \uD45C\uBA74\uC5D0\uC11C \uCD09\uCD09\uD558\uAC8C \uC0C9\uC774 \uBCC0\uD560 \uB54C\uAE4C\uC9C0 \uBC18\uB4DC\uC2DC 5\uBD84 \uAE30\uB2E4\uB824\uC8FC\uC138\uC694!",
          "vi": "B\u1EAFt bu\u1ED9c \u0111\u1EC3 ngh\u1EC9 5 ph\xFAt cho b\u1ED9t \u0111\u1ED5i m\xE0u \u1EA9m s\u1EABm r\u1ED3i m\u1EDBi th\u1EA3 v\xE0o chi\xEAn."
        }
      },
      {
        "id": "ts-pc-2",
        "problem": {
          "zh-TW": "\u653E\u6DBC\u5F8C\u5F88\u5FEB\u8B8A\u8EDF\u3001\u4E0D\u9165\u8106\uFF1F",
          "en": "Why does the chicken get soggy quickly after cooling down?",
          "ja": "\u51B7\u3081\u308B\u3068\u3059\u3050\u306B\u30D5\u30CB\u30E3\u30D5\u30CB\u30E3\u306B\u306A\u3063\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uC2DC\uAC04\uC774 \uC9C0\uB098\uBA74 \uAE08\uBC29 \uB205\uB205\uD574\uC9C0\uB098\uC694?",
          "vi": "T\u1EA1i sao g\xE0 nhanh \u1EC9u kh\xF4ng gi\u1EEF \u0111\u01B0\u1EE3c \u0111\u1ED9 gi\xF2n?"
        },
        "cause": {
          "zh-TW": "\u6C92\u6709\u9032\u884C\u300C\u9AD8\u6EAB\u5927\u706B\u5FA9\u70B8\u300D\uFF0C\u5167\u90E8\u6B98\u7559\u6CB9\u4EFD\u8207\u6C34\u6C23\u6EF2\u51FA\u3002",
          "en": "Skipped the high-heat second flash fry to force out trapped water and oil.",
          "ja": "2\u5EA6\u76EE\u306E\u9AD8\u6E29\u63DA\u3052\uFF08\u4E8C\u5EA6\u63DA\u3052\uFF09\u3092\u884C\u308F\u306A\u304B\u3063\u305F\u305F\u3081\u3001\u4F59\u5206\u306A\u6CB9\u3068\u6C34\u5206\u304C\u6B8B\u3063\u3066\u3044\u307E\u3059\u3002",
          "ko": "190\xB0C \uACE0\uC628 \uC7AC\uD280\uAE40 \uACFC\uC815\uC744 \uC0DD\uB7B5\uD558\uC5EC \uC218\uBD84\uACFC \uAE30\uB984\uC774 \uAC89\uBA74\uC5D0 \uAC07\uD614\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "Ch\u01B0a chi\xEAn l\u1EA7n 2 \u1EDF nhi\u1EC7t \u0111\u1ED9 cao \u0111\u1EC3 \xE9p h\u1EBFt h\u01A1i n\u01B0\u1EDBc v\xE0 d\u1EA7u th\u1EEBa."
        },
        "solution": {
          "zh-TW": "\u4E00\u5B9A\u8981\u4EE5 190\xB0C \u5927\u706B\u5FA9\u70B8 45 \u79D2\uFF0C\u9AD8\u6EAB\u903C\u6CB9\u662F\u6301\u4E45\u9165\u8106\u7684\u95DC\u9375\uFF01",
          "en": "Flash-fry at 190\xB0C for 45-60 seconds. High heat forces the moisture out!",
          "ja": "\u4ED5\u4E0A\u3052\u306B190\u2103\u306E\u5F37\u706B\u306745\u79D2\u30B5\u30C3\u3068\u4E8C\u5EA6\u63DA\u3052\u3059\u308B\u3053\u3068\u3067\u30AB\u30EA\u30AB\u30EA\u611F\u304C\u6301\u7D9A\u3057\u307E\u3059\uFF01",
          "ko": "\uBC18\uB4DC\uC2DC 190\xB0C\uC5D0\uC11C 45\uCD08\uAC04 \uACE0\uC628 \uC7AC\uD280\uAE40\uC744 \uD574\uC8FC\uC138\uC694. \uBC14\uC0AD\uD568\uC774 \uC624\uB798 \uAC11\uB2C8\uB2E4!",
          "vi": "Nh\u1EA5t \u0111\u1ECBnh ph\u1EA3i chi\xEAn l\u1EA1i l\u1EA7n 2 \u1EDF 190\xB0C trong 45 gi\xE2y \u0111\u1EC3 gi\xF2n l\xE2u c\u1EA3 ti\u1EBFng."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u53F0\u7063\u5730\u74DC\u7C89\u5206\u300C\u7C97\u9846\u7C92\u300D\u8207\u300C\u7D30\u9846\u7C92\u300D\uFF0C\u505A\u9E7D\u9165\u96DE\u4E00\u5B9A\u8981\u6307\u540D\u3010\u7C97\u9846\u7C92\u3011\uFF0C\u624D\u6709\u591C\u5E02\u4E00\u7C92\u7C92\u7ACB\u9AD4\u9165\u8106\u53E3\u611F\uFF01",
        "en": 'Always buy "Coarse" Sweet Potato Starch, not fine powder. The bumpy texture is the secret to night-market crunch.',
        "ja": "\u30B5\u30C4\u30DE\u30A4\u30E2\u7C89\u306B\u306F\u300C\u7C97\u7C92\u300D\u3068\u300C\u7D30\u7C92\u300D\u304C\u3042\u308A\u307E\u3059\u3002\u5869\u9165\u9D8F\u306B\u306F\u5FC5\u305A\u3010\u7C97\u7C92\uFF08\u7C97\u9846\u7C92\uFF09\u3011\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\uFF01",
        "ko": "\uB300\uB9CC \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC740 '\uAD75\uC740 \uC785\uC790'\uC640 '\uACE0\uC6B4 \uC785\uC790'\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC60C\uC218\uC9C0\uC6A9\uC740 \uBB34\uC870\uAC74 \u3010\uAD75\uC740 \uC785\uC790\u3011\uB97C \uACE8\uB77C\uC57C \uD569\uB2C8\uB2E4.",
        "vi": "H\xE3y ch\u1ECDn \u0111\xFAng lo\u1EA1i b\u1ED9t khoai lang \u3010H\u1EA1t To (Coarse)\u3011 \u0111\u1EC3 c\xF3 l\u1EDBp v\u1ECF gi\xF2n s\u1EA7n s\xF9i chu\u1EA9n ch\u1EE3 \u0111\xEAm."
      },
      {
        "zh-TW": "\u80E1\u6912\u9E7D\u4E2D\u52A0\u5165\u5FAE\u91CF\uFF081\u5C0F\u64AE\uFF09\u8089\u6842\u7C89\u8207\u7518\u8349\u7C89\uFF0C\u5C31\u662F\u5404\u5927\u6392\u968A\u540D\u6524\u79D8\u800C\u4E0D\u5BA3\u7684\u300C\u53E4\u65E9\u5473\u4E2D\u85E5\u80E1\u6912\u9E7D\u300D\u79D8\u5BC6\uFF01",
        "en": "Add a micro-pinch of ground cinnamon and licorice powder into your salt-pepper mix for that legendary street cart aroma.",
        "ja": "\u80E1\u6912\u5869\u306B\u30B7\u30CA\u30E2\u30F3\u30D1\u30A6\u30C0\u30FC\u3068\u7518\u8349\u7C89\u3092\u307B\u3093\u306E\u8033\u304B\u304D\u4E00\u676F\u52A0\u3048\u308B\u3068\u3001\u884C\u5217\u6709\u540D\u5E97\u306E\u79D8\u4F1D\u306E\u5473\u306B\u306A\u308A\u307E\u3059\uFF01",
        "ko": "\uD6C4\uCD94\uC18C\uAE08\uC5D0 \uACC4\uD53C\uAC00\uB8E8 \uD55C \uAF2C\uC9D1\uC744 \uB354\uD558\uBA74 \uB300\uB9CC \uD604\uC9C0 \uB9DB\uC9D1\uB4E4\uC758 \uD2B9\uC81C \uBE44\uBC95 \uC591\uB150 \uB9DB\uC774 \uB0A9\uB2C8\uB2E4.",
        "vi": "Th\xEAm m\u1ED9t x\xEDu b\u1ED9t qu\u1EBF v\xE0o mu\u1ED1i ti\xEAu s\u1EBD t\u1EA1o n\xEAn m\xF9i th\u01A1m th\u1EA3o m\u1ED9c gia truy\u1EC1n quy\u1EBFn r\u0169."
      }
    ]
  },
  {
    "id": "braised-pork-rice",
    "slug": "braised-pork-rice",
    "title": {
      "zh-TW": "\u53E4\u65E9\u5473\u624B\u5207\u9999\u83C7\u6EF7\u8089\u98EF",
      "en": "Taiwanese Hand-Cut Braised Pork Rice (Lu Rou Fan)",
      "ja": "\u53F0\u6E7E\u4F1D\u7D71 \u624B\u5207\u308A\u8C5A\u30D0\u30E9\u716E\u8FBC\u307F\u3054\u98EF\uFF08\u9B6F\u8089\u98EF\uFF09",
      "ko": "\uC815\uD1B5 \uC190\uCE7C \uB8E8\uB85C\uC6B0\uD310 (\uB300\uB9CC\uC2DD \uB3FC\uC9C0\uACE0\uAE30 \uB36E\uBC25)",
      "vi": "C\u01A1m th\u1ECBt kho t\xE0u n\u1EA5m h\u01B0\u01A1ng \u0110\xE0i Loan (Lu Rou Fan)"
    },
    "subtitle": {
      "zh-TW": "\u624B\u5207\u5E36\u76AE\u4E94\u82B1\u689D\u30FB\u6162\u706B\u71AC\u51FA\u9ECF\u5634\u81A0\u8CEA",
      "en": "Hand-Cut Skin-on Pork Belly & Rich Collagen Glaze",
      "ja": "\u624B\u5207\u308A\u76AE\u4ED8\u304D\u8C5A\u30D0\u30E9\u3068\u3058\u3063\u304F\u308A\u716E\u8FBC\u3093\u3060\u6975\u4E0A\u30B3\u30E9\u30FC\u30B2\u30F3",
      "ko": "\uC190\uCE7C\uB85C \uC36C \uC624\uACB9\uC0B4\uACFC \uC785\uC548\uC5D0 \uCC29 \uAC10\uAE30\uB294 \uC9C4\uD55C \uCF5C\uB77C\uAC90 \uC18C\uC2A4",
      "vi": "Th\u1ECBt ba ch\u1EC9 th\xE1i tay d\u1EBBo qu\xE1nh ng\u1EADp tr\xE0n collagen"
    },
    "tagline": {
      "zh-TW": "\u53F0\u7063\u4EBA\u5FC3\u76EE\u4E2D\u6C38\u6046\u7684\u7B2C\u4E00\u540D Comfort Food",
      "en": "The ultimate Taiwanese comfort food loved across generations",
      "ja": "\u53F0\u6E7E\u4EBA\u306E\u5FC3\u3092\u63B4\u3093\u3067\u96E2\u3055\u306A\u3044\u6C38\u9060\u306E\u30BD\u30A6\u30EB\u30D5\u30FC\u30C9",
      "ko": "\uB300\uB9CC\uC778\uB4E4\uC758 \uC601\uC6D0\uD55C \uB118\uBC84\uC6D0 \uC18C\uC6B8\uD478\uB4DC",
      "vi": "M\xF3n \u0103n qu\u1ED1c d\xE2n an \u1EE7i t\xE2m h\u1ED3n ng\u01B0\u1EDDi \u0110\xE0i Loan"
    },
    "heroImage": "/images/braised-pork-rice.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 50,
    "defaultServings": 4,
    "caloriesPerServing": 580,
    "category": "mains",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional",
      "instantPot"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u5168\u53F0\u7063 / \u53F0\u5357\u30FB\u53F0\u5317",
        "en": "All Taiwan / Tainan & Taipei",
        "ja": "\u53F0\u6E7E\u5168\u571F / \u53F0\u5357\u30FB\u53F0\u5317",
        "ko": "\uB300\uB9CC \uC804\uC5ED / \uD0C0\uC774\uB09C\u30FB\uD0C0\uC774\uBCA0\uC774",
        "vi": "To\xE0n \u0110\xE0i Loan / \u0110\xE0i Nam & \u0110\xE0i B\u1EAFc"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u5BE7\u590F\u591C\u5E02 (\u5713\u74B0\u6EF7\u8089\u98EF)",
          "en": "Ningxia Night Market",
          "ja": "\u5BE7\u590F\u591C\u5E02",
          "ko": "\uB2DD\uC0E4 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Ningxia"
        },
        {
          "zh-TW": "\u5357\u6A5F\u5834\u591C\u5E02",
          "en": "Nanjichang Night Market",
          "ja": "\u5357\u6A5F\u5834\u591C\u5E02",
          "ko": "\uB09C\uC9C0\uCC3D \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Nanjichang"
        }
      ],
      "historyStory": {
        "zh-TW": "\u65E9\u671F\u53F0\u7063\u7269\u8CC7\u5331\u4E4F\uFF0C\u5BB6\u5EAD\u4E3B\u5A66\u5C07\u96F6\u788E\u4E94\u82B1\u8089\u5207\u4E01\uFF0C\u52A0\u5165\u91AC\u6CB9\u3001\u7D05\u8525\u9165\u6162\u706B\u6162\u71C9\uFF0C\u8B93\u5168\u5BB6\u90FD\u80FD\u7528\u5C11\u8A31\u8089\u6C41\u62CC\u4E0B\u597D\u5E7E\u7897\u767D\u98EF\u3002\u53F0\u7063\u5317\u90E8\u504F\u9E79\u9999\u6DF1\u8272\uFF0C\u5357\u90E8\u5247\u504F\u7518\u751C\u5E36\u7D05\u7CDF\u9999\u3002",
        "en": "Originating from humble beginnings where every cut of meat was precious, housewives chopped pork belly scraps into small cubes, braising them with soy sauce and fried shallots so a small pot could flavor bowls of rice for the whole family.",
        "ja": "\u6614\u3001\u8CB4\u91CD\u3060\u3063\u305F\u8C5A\u8089\u3092\u4F59\u3059\u3053\u3068\u306A\u304F\u4F7F\u3046\u305F\u3081\u3001\u7D30\u304B\u304F\u523B\u3093\u3060\u8C5A\u8089\u3092\u63DA\u3052\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u3084\u91A4\u6CB9\u3067\u30B3\u30C8\u30B3\u30C8\u716E\u8A70\u3081\u305F\u306E\u304C\u59CB\u307E\u308A\u3002\u6FC3\u539A\u306A\u30BF\u30EC\u3067\u3054\u98EF\u304C\u4F55\u676F\u3067\u3082\u9032\u307F\u307E\u3059\u3002",
        "ko": "\uAC00\uC871 \uBAA8\uB450\uAC00 \uC801\uC740 \uC591\uC758 \uACE0\uAE30\uB85C \uBC25\uC744 \uBC30\uBD88\uB9AC \uBA39\uC744 \uC218 \uC788\uB3C4\uB85D \uC0BC\uACB9\uC0B4\uC744 \uC798\uAC8C \uC370\uC5B4 \uC0EC\uB86F \uD280\uAE40, \uAC04\uC7A5\uACFC \uD568\uAED8 \uC870\uB824 \uBC25 \uC704\uC5D0 \uC5B9\uC5B4 \uBA39\uB358 \uC9C0\uD61C\uC5D0\uC11C \uD0C4\uC0DD\uD55C \uAD6D\uBBFC \uC694\uB9AC\uC785\uB2C8\uB2E4.",
        "vi": "B\u1EAFt ngu\u1ED3n t\u1EEB s\u1EF1 t\u1EA7n t\u1EA3o c\u1EE7a ng\u01B0\u1EDDi ph\u1EE5 n\u1EEF x\u01B0a, th\xE1i v\u1EE5n th\u1ECBt ba ch\u1EC9 kho c\xF9ng h\xE0nh phi v\xE0 n\u01B0\u1EDBc t\u01B0\u01A1ng \u0111\u1EC3 chan c\u01A1m nu\xF4i s\u1ED1ng c\u1EA3 gia \u0111\xECnh."
      },
      "taiwaneseHokkien": "L\xF3o-bah-pn\u0304g (\u310C\u311B\u02CB \u3105\u311A \u3105\u3125)",
      "mandarinPinyin": "L\u01D4r\xF2uf\xE0n (\u310C\u3128\u02C7 \u3116\u3121\u02CB \u3108\u3122\u02CB)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u4F86\u4E00\u7897\u5927\u6EF7\u8089\u98EF\u52A0\u4E00\u9846\u6EF7\u86CB"
    },
    "ingredients": [
      {
        "id": "pork-belly",
        "name": {
          "zh-TW": "\u5E36\u76AE\u8C6C\u4E94\u82B1\u8089 (\u624B\u5207\u8089\u689D)",
          "en": "Skin-on Pork Belly (Hand-Cut Strips)",
          "ja": "\u76AE\u4ED8\u304D\u8C5A\u30D0\u30E9\u8089\uFF08\u624B\u5207\u308A\u77ED\u518A\u72B6\uFF09",
          "ko": "\uAECD\uC9C8 \uBD99\uC740 \uD1B5\uC0BC\uACB9\uC0B4 (\uC190\uCE7C \uC370\uAE30)",
          "vi": "Th\u1ECBt ba ch\u1EC9 c\xF3 b\xEC (Th\xE1i con ch\xEC)"
        },
        "amount": 600,
        "unitMetric": "g",
        "unitUS": "1.3 lbs",
        "isKeyFlavor": true,
        "chineseName": "\u5E36\u76AE\u4E94\u82B1\u8089",
        "chinesePinyin": "D\xE0i p\xED w\u01D4 hu\u0101 r\xF2u"
      },
      {
        "id": "fried-shallots",
        "name": {
          "zh-TW": "\u53F0\u7063\u7D14\u624B\u5DE5\u6CB9\u8525\u9165 (\u7D05\u8525\u9165)",
          "en": "Crispy Taiwanese Fried Shallots",
          "ja": "\u53F0\u6E7E\u7523 \u63DA\u3052\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\uFF08\u6CB9\u8471\u9165\uFF09",
          "ko": "\uB300\uB9CC\uC0B0 \uC218\uC81C \uD280\uAE34 \uC0EC\uB86F (\uC720\uCD1D\uC218)",
          "vi": "H\xE0nh t\xEDm phi gi\xF2n \u0110\xE0i Loan"
        },
        "amount": 60,
        "unitMetric": "g",
        "unitUS": "0.8 cup",
        "isKeyFlavor": true,
        "chineseName": "\u6CB9\u8525\u9165",
        "chinesePinyin": "Y\xF3u c\u014Dng s\u016B",
        "substitute": {
          "substituteName": {
            "zh-TW": "\u65B0\u9BAE\u7D05\u8525\u982D\u5207\u788E\u4EE5\u8C6C\u6CB9\u6216\u690D\u7269\u6CB9\u81EA\u70B8",
            "en": "Fresh Asian shallots thinly sliced & fried in oil until golden",
            "ja": "\u751F\u306E\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\uFF08\u8D64\u7389\u306D\u304E\uFF09\u3092\u8584\u5207\u308A\u306B\u3057\u3066\u6CB9\u3067\u63DA\u3052\u308B",
            "ko": "\uC2E0\uC120\uD55C \uC0EC\uB86F(\uC801\uC591\uD30C)\uC744 \uC587\uAC8C \uC370\uC5B4 \uAE30\uB984\uC5D0 \uD280\uACA8 \uC0AC\uC6A9",
            "vi": "T\u1EF1 phi h\xE0nh t\xEDm t\u01B0\u01A1i trong d\u1EA7u \u0111\u1EBFn khi v\xE0ng ru\u1ED9m"
          },
          "ratio": "1:1",
          "explanation": {
            "zh-TW": "\u6CB9\u8525\u9165\u662F\u6EF7\u8089\u98EF\u7684\u300C\u9748\u9B42\u9999\u6C23\u57FA\u5E95\u300D\uFF0C\u4E0D\u53EF\u7528\u897F\u5F0F\u6D0B\u8525\u9165\u6216\u5927\u849C\u9165\u66FF\u4EE3\uFF01\u82E5\u8CB7\u4E0D\u5230\u73FE\u6210\uFF0C\u53EF\u8CB7\u65B0\u9BAE\u7D05\u8525\u982D\u81EA\u5DF1\u5C0F\u706B\u70B8\u9165\u3002",
            "en": "Fried shallots provide 80% of Lu Rou Fan's distinctive aroma. Do not use Western French's fried onions or garlic chips.",
            "ja": "\u6CB9\u8471\u9165\u306F\u5473\u306E\u6C7A\u3081\u624B\u3067\u3059\u3002\u624B\u306B\u5165\u3089\u306A\u3044\u5834\u5408\u306F\u8D64\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u3092\u6CB9\u3067\u3058\u3063\u304F\u308A\u63DA\u3052\u3066\u4F5C\u308C\u307E\u3059\u3002",
            "ko": "\uC720\uCD1D\uC218\uB294 \uB8E8\uB85C\uC6B0\uD310\uC758 \uC601\uD63C\uC785\uB2C8\uB2E4. \uC11C\uC591\uC2DD \uC5B4\uB2C8\uC5B8 \uD06C\uB9AC\uC2A4\uD53C\uB098 \uB9C8\uB298\uCE69\uC73C\uB85C \uB300\uCCB4\uD558\uC9C0 \uB9D0\uACE0 \uC0EC\uB86F\uC744 \uC9C1\uC811 \uD280\uAE30\uC138\uC694.",
            "vi": "H\xE0nh t\xEDm phi l\xE0 linh h\u1ED3n c\u1EE7a m\xF3n \u0103n, kh\xF4ng th\u1EC3 thay b\u1EB1ng h\xE0nh t\xE2y hay t\u1ECFi phi."
          },
          "whereToBuy": {
            "zh-TW": "\u5927\u83EF\u8D85\u5E02\u3001\u6771\u5357\u4E9E\u8D85\u5E02\u3001Amazon (\u641C\u5C0B Fried Red Shallots)",
            "en": "99 Ranch, H-Mart, Southeast Asian groceries, Amazon",
            "ja": "\u4E2D\u83EF\u98DF\u6750\u5E97\u3001Amazon",
            "ko": "\uC544\uC2DC\uC548 \uB9C8\uD2B8, \uC628\uB77C\uC778 \uC1FC\uD551\uBAB0",
            "vi": "Si\xEAu th\u1ECB ch\xE2u \xC1 ho\u1EB7c ch\u1EE3 Vi\u1EC7t"
          }
        }
      },
      {
        "id": "shiitake-mushrooms",
        "name": {
          "zh-TW": "\u53F0\u7063\u4E7E\u9999\u83C7 (\u6CE1\u6C34\u5207\u7D72\uFF0C\u9999\u83C7\u6C34\u4FDD\u7559)",
          "en": "Dried Shiitake Mushrooms (Soaked & Sliced, reserve water)",
          "ja": "\u5E72\u3057\u690E\u8338\uFF08\u6C34\u623B\u3057\u3057\u3066\u7D30\u5207\u308A\u3001\u623B\u3057\u6C41\u3082\u4F7F\u7528\uFF09",
          "ko": "\uAC74\uD45C\uACE0\uBC84\uC12F (\uBD88\uB9B0 \uD6C4 \uCC44\uC370\uAE30, \uBC84\uC12F \uC6B0\uB9B0 \uBB3C \uC0AC\uC6A9)",
          "vi": "N\u1EA5m h\u01B0\u01A1ng kh\xF4 (Ng\xE2m n\u1EDF th\xE1i s\u1EE3i, gi\u1EEF n\u01B0\u1EDBc ng\xE2m)"
        },
        "amount": 6,
        "unitMetric": "piece",
        "unitUS": "6 pieces",
        "chineseName": "\u4E7E\u9999\u83C7",
        "chinesePinyin": "G\u0101n xi\u0101ng g\u016B"
      },
      {
        "id": "taiwan-soy-paste",
        "name": {
          "zh-TW": "\u53F0\u7063\u91D1\u862D\u91AC\u6CB9\u818F (\u6216\u9ED1\u9F8D\u852D\u6CB9\u818F)",
          "en": "Taiwanese Thick Soy Paste",
          "ja": "\u53F0\u6E7E\u3068\u308D\u307F\u91A4\u6CB9\uFF08\u91A4\u6CB9\u818F / \u30BD\u30A4\u30DA\u30FC\u30B9\u30C8\uFF09",
          "ko": "\uB300\uB9CC \uAC78\uCB49\uD55C \uAC04\uC7A5\uC18C\uC2A4 (\uC7A5\uC720\uACE0 / \uAE40\uB780)",
          "vi": "N\u01B0\u1EDBc t\u01B0\u01A1ng ng\u1ECDt s\u1EC7t \u0110\xE0i Loan (Soy Paste)"
        },
        "amount": 40,
        "unitMetric": "ml",
        "unitUS": "2.5 tbsp",
        "isKeyFlavor": true,
        "chineseName": "\u91AC\u6CB9\u818F",
        "chinesePinyin": "Ji\xE0ng y\xF3u g\u0101o",
        "substitute": {
          "substituteName": {
            "zh-TW": "\u512A\u8CEA\u751F\u62BD 2\u5927\u5319 + \u8814\u6CB9 1\u5927\u5319 + \u51B0\u7CD6 1\u8336\u5319",
            "en": "Soy Sauce (2 tbsp) + Oyster Sauce (1 tbsp) + Sugar (1 tsp)",
            "ja": "\u91A4\u6CB9\u5927\u3055\u30582 \uFF0B \u30AA\u30A4\u30B9\u30BF\u30FC\u30BD\u30FC\u30B9\u5927\u3055\u30581 \uFF0B \u7802\u7CD6\u5C0F\u3055\u30581",
            "ko": "\uC9C4\uAC04\uC7A5 2\uD070\uC220 + \uAD74\uC18C\uC2A4 1\uD070\uC220 + \uC124\uD0D5 1\uC791\uC740\uC220",
            "vi": "N\u01B0\u1EDBc t\u01B0\u01A1ng (2 th\xECa) + D\u1EA7u h\xE0o (1 th\xECa) + \u0110\u01B0\u1EDDng ph\xE8n (1 th\xECa cafe)"
          },
          "ratio": "1:1",
          "explanation": {
            "zh-TW": "\u91AC\u6CB9\u818F\u6BD4\u666E\u901A\u91AC\u6CB9\u66F4\u6FC3\u7A20\u5FAE\u751C\uFF0C\u82E5\u7121\u53EF\u7528\u91AC\u6CB9+\u8814\u6CB9+\u7CD6\u8ABF\u548C\u51FA\u76F8\u4F3C\u7684\u7A20\u4EAE\u751C\u9E79\u611F\u3002",
            "en": "Taiwanese soy paste is thicker and sweeter. If not found, mixing soy sauce with oyster sauce and rock sugar replicates the gloss and rich sweet-savory profile.",
            "ja": "\u91A4\u6CB9\u818F\u306F\u7518\u307F\u3068\u3068\u308D\u307F\u304C\u3042\u308A\u307E\u3059\u3002\u30AA\u30A4\u30B9\u30BF\u30FC\u30BD\u30FC\u30B9\u3068\u91A4\u6CB9\u30FB\u7802\u7CD6\u3092\u5408\u308F\u305B\u308B\u3068\u8FD1\u3044\u4ED5\u4E0A\u304C\u308A\u306B\u306A\u308A\u307E\u3059\u3002",
            "ko": "\uC7A5\uC720\uACE0\uB294 \uC9C4\uD558\uACE0 \uB2EC\uCF64\uD55C \uB9DB\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uAD74\uC18C\uC2A4\uC640 \uC9C4\uAC04\uC7A5, \uC124\uD0D5\uC744 \uC11E\uC73C\uBA74 \uB9E4\uC6B0 \uD761\uC0AC\uD569\uB2C8\uB2E4.",
            "vi": "Pha n\u01B0\u1EDBc t\u01B0\u01A1ng v\u1EDBi d\u1EA7u h\xE0o v\xE0 ch\xFAt \u0111\u01B0\u1EDDng ph\xE8n \u0111\u1EC3 t\u1EA1o \u0111\u1ED9 s\xE1nh ng\u1ECDt."
          },
          "whereToBuy": {
            "zh-TW": "\u5927\u83EF\u8D85\u5E02\u3001\u4E9E\u8D85\u3001Amazon",
            "en": "Asian supermarkets (Kimlan Soy Paste), Amazon",
            "ja": "\u4E2D\u83EF\u30B9\u30FC\u30D1\u30FC\u3001Amazon",
            "ko": "\uC911\uAD6D \uC2DD\uC790\uC7AC \uB9C8\uD2B8",
            "vi": "Si\xEAu th\u1ECB \u0111\u1ED3 Hoa"
          }
        }
      },
      {
        "id": "rock-sugar",
        "name": {
          "zh-TW": "\u9EC3\u51B0\u7CD6 (\u7092\u7CD6\u8272\u7528)",
          "en": "Yellow Rock Sugar",
          "ja": "\u9EC4\u6C37\u7802\u7CD6",
          "ko": "\uD669\uC124\uD0D5 \uB610\uB294 \uBE59\uD0D5",
          "vi": "\u0110\u01B0\u1EDDng ph\xE8n v\xE0ng"
        },
        "amount": 30,
        "unitMetric": "g",
        "unitUS": "2 tbsp",
        "chineseName": "\u51B0\u7CD6",
        "chinesePinyin": "B\u012Bng t\xE1ng"
      },
      {
        "id": "hard-boiled-eggs",
        "name": {
          "zh-TW": "\u525D\u6BBC\u6C34\u716E\u86CB (\u5165\u5473\u6EF7\u86CB)",
          "en": "Hard-Boiled Eggs (for Braising)",
          "ja": "\u3086\u3067\u5375\uFF08\u6BBB\u3092\u3080\u3044\u305F\u3082\u306E\uFF09",
          "ko": "\uC0B6\uC740 \uB2EC\uAC40 (\uAECD\uC9C8 \uAE50 \uAC83)",
          "vi": "Tr\u1EE9ng g\xE0 lu\u1ED9c b\xF3c v\u1ECF"
        },
        "amount": 4,
        "unitMetric": "piece",
        "unitUS": "4 pieces",
        "chineseName": "\u6C34\u716E\u86CB",
        "chinesePinyin": "Shu\u01D0 zh\u01D4 d\xE0n"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u4E94\u82B1\u8089\u6C46\u71D9\u8207\u624B\u5207\u8089\u689D",
          "en": "Blanch Pork Belly & Hand-Cut Strips",
          "ja": "\u8C5A\u8089\u306E\u4E0B\u8339\u3067\u3068\u624B\u5207\u308A\u30AB\u30C3\u30C8",
          "ko": "\uC0BC\uACB9\uC0B4 \uB370\uCE58\uAE30 \uBC0F \uC190\uCE7C \uC370\uAE30",
          "vi": "Ch\u1EA7n s\u01A1 th\u1ECBt v\xE0 th\xE1i con ch\xEC"
        },
        "instruction": {
          "zh-TW": "\u6574\u584A\u5E36\u76AE\u4E94\u82B1\u8089\u51B7\u6C34\u4E0B\u934B\uFF0C\u52A0\u5165\u8591\u7247\u8207\u7C73\u9152\u6C46\u71D9 5 \u5206\u9418\u53BB\u8165\uFF0C\u6488\u51FA\u6C96\u51B7\u6C34\u3002\u63A5\u8457\u7528\u5200\u5207\u6210\u7D04 0.7 \u516C\u5206\u5BEC\u30013 \u516C\u5206\u9577\u7684\u9577\u689D\u8089\u4E01\uFF08\u4E0D\u8981\u7528\u7D5E\u8089\uFF01\u624B\u5207\u624D\u6709\u81A0\u8CEA\uFF09\u3002",
          "en": "Place whole pork belly in cold water with ginger and rice wine. Bring to boil for 5 mins to remove scum, rinse with cold water. Slice into 0.7cm x 3cm strips (Hand-cut is essential for collagen\u2014do not use ground meat!).",
          "ja": "\u8C5A\u30D0\u30E9\u8089\u306E\u584A\u3092\u751F\u59DC\u30FB\u9152\u3068\u5171\u306B\u6C34\u304B\u3089\u8339\u3067\u30015\u5206\u307B\u3069\u4E0B\u8339\u3067\u3057\u3066\u30A2\u30AF\u3092\u629C\u304D\u6C34\u6D17\u3044\u30020.7cm\xD73cm\u307B\u3069\u306E\u77ED\u518A\u72B6\u306B\u624B\u5207\u308A\u3057\u307E\u3059\uFF08\u3072\u304D\u8089\u3067\u306F\u306A\u304F\u624B\u5207\u308A\u304C\u7F8E\u5473\u3057\u3055\u306E\u79D8\u8A23\uFF01\uFF09\u3002",
          "ko": "\uD1B5\uC0BC\uACB9\uC0B4\uC744 \uC0DD\uAC15, \uB9DB\uC220\uACFC \uD568\uAED8 \uCC2C\uBB3C\uC5D0 \uB123\uACE0 5\uBD84\uAC04 \uB053\uC5EC \uBD88\uC21C\uBB3C\uC744 \uC81C\uAC70\uD55C \uB4A4 \uCC2C\uBB3C\uC5D0 \uD5F9\uAD7D\uB2C8\uB2E4. 0.7cm \uB450\uAED8\uB85C \uCE7C\uB85C \uAE38\uCB49\uD558\uAC8C \uC379\uB2C8\uB2E4 (\uB2E4\uC9D0\uC721 \uB300\uC2E0 \uC190\uCE7C\uB85C \uC370\uC5B4\uC57C \uCAC0\uB4DD\uD55C \uC2DD\uAC10\uC774 \uC0B4\uC544\uB0A9\uB2C8\uB2E4).",
          "vi": "Lu\u1ED9c s\u01A1 th\u1ECBt ba ch\u1EC9 5 ph\xFAt v\u1EDBi g\u1EEBng v\xE0 r\u01B0\u1EE3u, r\u1EEDa s\u1EA1ch. D\xF9ng dao th\xE1i mi\u1EBFng con ch\xEC nh\u1ECF d\xE0i (th\xE1i tay s\u1EBD gi\u1EEF \u0111\u01B0\u1EE3c \u0111\u1ED9 b\xE9o d\u1EBBo, kh\xF4ng d\xF9ng th\u1ECBt b\u0103m)."
        },
        "image": "/images/lu-rou-step1.jpg",
        "durationSeconds": 420,
        "crucialTips": {
          "zh-TW": "\u6C46\u71D9\u5F8C\u6CE1\u51B0\u6C34\u8089\u8CEA\u6703\u8B8A\u7DCA\u5BE6\uFF0C\u5200\u5B50\u66F4\u5BB9\u6613\u5207\u51FA\u6F02\u4EAE\u5DE5\u6574\u7684\u4E94\u82B1\u8089\u689D\uFF01",
          "en": "Chilling the blanched pork belly in ice water makes it firm and super easy to cut straight strips.",
          "ja": "\u4E0B\u8339\u3067\u5F8C\u306B\u51B7\u6C34\u3067\u51B7\u3084\u3059\u3068\u304A\u8089\u304C\u7DE0\u307E\u308A\u3001\u7DBA\u9E97\u306B\u5207\u308A\u3084\u3059\u304F\u306A\u308A\u307E\u3059\u3002",
          "ko": "\uB370\uCE5C \uD6C4 \uC5BC\uC74C\uBB3C\uC5D0 \uB2F4\uAC00\uB450\uBA74 \uACE0\uAE30\uAC00 \uB2E8\uB2E8\uD574\uC838 \uAE54\uB054\uD558\uAC8C \uC370\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.",
          "vi": "Ng\xE2m n\u01B0\u1EDBc \u0111\xE1 sau khi ch\u1EA7n gi\xFAp th\u1ECBt s\u0103n ch\u1EAFc, d\u1EC5 th\xE1i \u0111\u1EC1u \u0111\u1EB9p."
        }
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u7178\u7092\u51FA\u6CB9\u8207\u51B0\u7CD6\u7092\u7CD6\u8272",
          "en": "Render Pork Fat & Caramelize Sugar",
          "ja": "\u8C5A\u306E\u8102\u3092\u3058\u3063\u304F\u308A\u7092\u3081\uFF06\u6C37\u7802\u7CD6\u3067\u7167\u308A\u3092\u51FA\u3059",
          "ko": "\uC0BC\uACB9\uC0B4 \uAE30\uB984 \uB0B4\uAE30 \uBC0F \uC124\uD0D5 \uCE90\uB7EC\uBA5C\uB77C\uC774\uC9D5",
          "vi": "X\xE0o s\u0103n th\u1ECBt & \u0110\u1EA3o \u0111\u01B0\u1EDDng ph\xE8n t\u1EA1o m\xE0u"
        },
        "instruction": {
          "zh-TW": "\u934B\u4E2D\u4E0D\u653E\u6CB9\uFF0C\u4E0B\u4E94\u82B1\u8089\u689D\u4E2D\u706B\u7178\u7092\u7D04 6~8 \u5206\u9418\uFF0C\u903C\u51FA\u591A\u9918\u6CB9\u8102\u4E14\u8089\u908A\u7DE3\u5FAE\u7126\u9999\u3002\u52A0\u5165\u51B0\u7CD6\u4E00\u540C\u7FFB\u7092\u81F3\u7CD6\u878D\u5316\u5305\u88F9\u8089\u689D\uFF0C\u5448\u73FE\u7425\u73C0\u8272\u6CB9\u4EAE\u5149\u6FA4\u3002",
          "en": "In a dry pan, stir-fry pork strips over medium heat for 6-8 mins to render out natural fat until edges are lightly browned. Add rock sugar and stir until melted and amber glossy.",
          "ja": "\u6CB9\u3092\u5F15\u304B\u305A\u306B\u934B\u306B\u8C5A\u8089\u3092\u5165\u308C\u3001\u4E2D\u706B\u30676\u301C8\u5206\u7092\u3081\u3066\u4F59\u5206\u306A\u8102\u3092\u51FA\u3057\u9999\u3070\u3057\u304F\u7092\u3081\u307E\u3059\u3002\u6C37\u7802\u7CD6\u3092\u52A0\u3048\u3066\u6EB6\u304B\u3057\u3001\u5168\u4F53\u306B\u7425\u73C0\u8272\u306E\u7167\u308A\u3092\u307E\u3068\u308F\u305B\u307E\u3059\u3002",
          "ko": "\uB9C8\uB978 \uD32C\uC5D0 \uC36C \uC0BC\uACB9\uC0B4\uC744 \uB123\uACE0 \uC911\uBD88\uC5D0\uC11C 6~8\uBD84\uAC04 \uBCF6\uC544 \uAE30\uB984\uC744 \uBE7C\uACE0 \uB178\uB987\uD558\uAC8C \uAD7D\uC2B5\uB2C8\uB2E4. \uBE59\uD0D5(\uC124\uD0D5)\uC744 \uB123\uACE0 \uB179\uC5EC \uACE0\uAE30\uC5D0 \uBC18\uC9DD\uC774\uB294 \uCE90\uB7EC\uBA5C \uC0C9\uC744 \uC785\uD799\uB2C8\uB2E4.",
          "vi": "Cho th\u1ECBt v\xE0o ch\u1EA3o kh\xF4ng c\u1EA7n d\u1EA7u, \u0111\u1EA3o l\u1EEDa v\u1EEBa 6-8 ph\xFAt cho ra b\u1EDBt m\u1EE1. Cho \u0111\u01B0\u1EDDng ph\xE8n v\xE0o \u0111\u1EA3o tan t\u1EA1o m\xE0u c\xE1nh gi\xE1n \xF3ng \u1EA3."
        },
        "image": "/images/lu-rou-step2.jpg",
        "durationSeconds": 480
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u7206\u9999\u9999\u83C7\u3001\u6CB9\u8525\u9165\u8207\u7197\u91AC\u6CB9",
          "en": "Add Mushrooms, Fried Shallots & Aromatics",
          "ja": "\u690E\u8338\u30FB\u6CB9\u8471\u9165\u30FB\u91A4\u6CB9\u3092\u6295\u5165\u3057\u3066\u9999\u308A\u7206\u767A",
          "ko": "\uD45C\uACE0\uBC84\uC12F, \uC0EC\uB86F\uD280\uAE40, \uAC04\uC7A5 \uBD93\uACE0 \uD5A5 \uC785\uD788\uAE30",
          "vi": "Th\xEAm n\u1EA5m h\u01B0\u01A1ng, h\xE0nh phi v\xE0 phi th\u01A1m n\u01B0\u1EDBc t\u01B0\u01A1ng"
        },
        "instruction": {
          "zh-TW": "\u52A0\u5165\u6CE1\u8EDF\u7684\u9999\u83C7\u4E01\u3001\u849C\u672B\u7092\u9999\uFF0C\u6CBF\u8457\u934B\u908A\u6DCB\u5165\u91AC\u6CB9\u8207\u91AC\u6CB9\u818F\u7197\u51FA\u7126\u9999\u6C23\u3002\u63A5\u8457\u5012\u5165\u7C73\u9152\u3001\u4E94\u9999\u7C89\u3001\u767D\u80E1\u6912\u7C89\u8207\u9748\u9B42\u300C\u6CB9\u8525\u9165\u300D\u7FFB\u7092\u5747\u52FB\uFF0C\u77AC\u9593\u9999\u6C23\u56DB\u6EA2\uFF01",
          "en": "Add diced shiitake mushrooms and garlic. Pour soy sauce and soy paste around the pan edge to scorch aroma. Add rice wine, five-spice, white pepper, and the fried shallots, stirring well.",
          "ja": "\u623B\u3057\u305F\u690E\u8338\u3068\u30CB\u30F3\u30CB\u30AF\u3092\u52A0\u3048\u3001\u934B\u808C\u304B\u3089\u91A4\u6CB9\u3068\u91A4\u6CB9\u818F\u3092\u56DE\u3057\u5165\u308C\u3066\u9999\u3070\u3057\u3055\u3092\u5F15\u304D\u51FA\u3057\u307E\u3059\u3002\u9152\u3001\u4E94\u9999\u7C89\u3001\u767D\u80E1\u6912\u3001\u305D\u3057\u3066\u79D8\u4F1D\u306E\u6CB9\u8471\u9165\u3092\u52A0\u3048\u3066\u4E00\u6C17\u306B\u7092\u3081\u5408\u308F\u305B\u307E\u3059\uFF01",
          "ko": "\uBD88\uB9B0 \uD45C\uACE0\uBC84\uC12F\uACFC \uB9C8\uB298\uC744 \uB123\uACE0 \uBCF6\uB2E4\uAC00 \uD32C \uAC00\uC7A5\uC790\uB9AC\uC5D0 \uAC04\uC7A5\uACFC \uC7A5\uC720\uACE0\uB97C \uB458\uB7EC \uBD88\uD5A5\uC744 \uB0C5\uB2C8\uB2E4. \uB9DB\uC220, \uC624\uD5A5\uBD84, \uBC31\uD6C4\uCD94, \uADF8\uB9AC\uACE0 \uD280\uAE34 \uC0EC\uB86F\uC744 \uB123\uACE0 \uACE8\uACE0\uB8E8 \uBCF6\uC544\uC90D\uB2C8\uB2E4.",
          "vi": "Cho n\u1EA5m h\u01B0\u01A1ng, t\u1ECFi v\xE0o \u0111\u1EA3o th\u01A1m. R\u01B0\u1EDBi n\u01B0\u1EDBc t\u01B0\u01A1ng quanh th\xE0nh ch\u1EA3o t\u1EA1o m\xF9i th\u01A1m ch\xE1y c\u1EA1nh, cho r\u01B0\u1EE3u n\u1EA5u, ng\u0169 v\u1ECB h\u01B0\u01A1ng v\xE0 h\xE0nh phi v\xE0o \u0111\u1EA3o \u0111\u1EC1u."
        },
        "image": "/images/lu-rou-step3.jpg",
        "durationSeconds": 180
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u6162\u706B\u6162\u71C9\u6216\u58D3\u529B\u934B\u58D3\u88FD (\u5165\u5473\u8EDF\u5AE9)",
          "en": "Slow Simmer or Instant Pot (Melt-in-Mouth)",
          "ja": "\u3058\u3063\u304F\u308A\u30B3\u30C8\u30B3\u30C8\u716E\u8FBC\u307F\uFF08\u307E\u305F\u306F\u5727\u529B\u934B\u8ABF\u7406\uFF09",
          "ko": "\uBB49\uADFC\uD558\uAC8C \uB053\uC774\uAE30 \uB610\uB294 \uC555\uB825\uC1A5 \uC870\uB9AC",
          "vi": "Ninh nh\u1ECF l\u1EEDa ho\u1EB7c d\xF9ng n\u1ED3i \xE1p su\u1EA5t"
        },
        "instruction": {
          "zh-TW": "\u52A0\u5165\u9999\u83C7\u6C34\u8207\u6E05\u6C34\uFF08\u6DF9\u904E\u8089\u8868\u9762\uFF09\uFF0C\u653E\u5165\u525D\u6BBC\u6C34\u716E\u86CB\u3002\u5927\u706B\u716E\u6EFE\u5F8C\u8F49\u5FAE\u5C0F\u706B\uFF0C\u52A0\u84CB\u6162\u706B\u6162\u71C9 45~60 \u5206\u9418\u81F3\u8089\u8CEA\u8EDF\u721B\u3001\u5E36\u76AE\u4E94\u82B1\u8089\u6EB6\u51FA\u6FC3\u7A20\u9ECF\u5634\u7684\u81A0\u8CEA\u7CBE\u83EF\u3002",
          "en": "Traditional Pot: Add reserved mushroom water and water to cover pork. Add boiled eggs. Bring to boil, then simmer on low heat for 50 mins until collagen thickens.\nInstant Pot: High Pressure for 25 mins, Natural Release.",
          "ja": "\u3010\u666E\u901A\u934B\u3011\uFF1A\u690E\u8338\u306E\u623B\u3057\u6C41\u3068\u6C34\u3092\u3072\u305F\u3072\u305F\u306B\u52A0\u3048\u3001\u3086\u3067\u5375\u3092\u6295\u5165\u3002\u6CB8\u9A30\u5F8C\u3001\u5F31\u706B\u3067\u84CB\u3092\u3057\u306645\u301C60\u5206\u30B3\u30C8\u30B3\u30C8\u716E\u8FBC\u307F\u307E\u3059\u3002\n\u3010\u96FB\u6C17\u5727\u529B\u934B\u3011\uFF1A\u9AD8\u5727\u306725\u5206\u52A0\u71B1\u5F8C\u3001\u81EA\u7136\u6E1B\u5727\u3002",
          "ko": "\u3010\uC77C\uBC18 \uB0C4\uBE44\u3011\uFF1A\uBC84\uC12F \uC6B0\uB9B0 \uBB3C\uACFC \uBB3C\uC744 \uACE0\uAE30\uAC00 \uC7A0\uAE30\uB3C4\uB85D \uBD93\uACE0 \uC0B6\uC740 \uB2EC\uAC40\uC744 \uB123\uC2B5\uB2C8\uB2E4. \uB053\uC5B4\uC624\uB974\uBA74 \uC57D\uBD88\uB85C \uC904\uC5EC \uB69C\uAED1 \uB36E\uACE0 50\uBD84\uAC04 \uBB49\uADFC\uD788 \uC870\uB824\uC90D\uB2C8\uB2E4.\n\u3010\uC778\uC2A4\uD134\uD2B8\uD31F\u3011\uFF1A\uACE0\uC555(High Pressure)\uC73C\uB85C 25\uBD84 \uC870\uB9AC \uD6C4 \uC790\uC5F0 \uAC10\uC555.",
          "vi": "N\u1ED3i th\u01B0\u1EDDng: \u0110\u1ED5 n\u01B0\u1EDBc ng\xE2m n\u1EA5m v\xE0 n\u01B0\u1EDBc l\u1ECDc x\u0103m x\u1EAFp m\u1EB7t th\u1ECBt, th\u1EA3 tr\u1EE9ng lu\u1ED9c v\xE0o. \u0110un s\xF4i r\u1ED3i h\u1EA1 l\u1EEDa nh\u1ECF ninh 50 ph\xFAt.\nN\u1ED3i \xE1p su\u1EA5t: Ch\u1ECDn High Pressure 25 ph\xFAt, x\u1EA3 van t\u1EF1 nhi\xEAn."
        },
        "image": "/images/lu-rou-step4.jpg",
        "durationSeconds": 3e3,
        "cookwareVariations": [
          {
            "cookware": "instantPot",
            "tempAndSetting": "Manual High Pressure: 25 mins + Natural Release",
            "instructionOverride": {
              "zh-TW": "\u5728 Instant Pot \u5167\u81BD\u4E2D\u5148\u7528 Saut\xE9 \u6A21\u5F0F\u7178\u8089\u8207\u7206\u9999\uFF0C\u52A0\u6C34\u8207\u6C34\u716E\u86CB\u5F8C\u9396\u4E0A\u934B\u84CB\uFF0C\u8A2D\u5B9A Meat/Stew \u6216 High Pressure 25 \u5206\u9418\uFF0C\u5B8C\u6210\u5F8C\u81EA\u7136\u6D29\u58D3\u3002\u6253\u958B\u5F8C\u8089\u5165\u53E3\u5373\u5316\uFF01",
              "en": "Use Instant Pot Saut\xE9 mode to brown pork and aromatics. Add liquid and eggs. Lock lid, set High Pressure for 25 mins, then Natural Release for velvety tenderness.",
              "ja": "Saut\xE9\uFF08\u7092\u3081\uFF09\u30E2\u30FC\u30C9\u3067\u5177\u6750\u3092\u7092\u3081\u305F\u5F8C\u3001\u6C34\u3068\u5375\u3092\u52A0\u3048\u3066\u84CB\u3092\u3057\u3001\u9AD8\u5727\u306725\u5206\u52A0\u71B1\u3002\u5727\u529B\u304C\u81EA\u7136\u306B\u629C\u3051\u308B\u307E\u3067\u5F85\u3066\u3070\u3001\u3068\u308D\u3051\u308B\u67D4\u3089\u304B\u3055\u306B\uFF01",
              "ko": "\uC778\uC2A4\uD134\uD2B8\uD31F Saut\xE9 \uBAA8\uB4DC\uB85C \uBCF6\uC740 \uD6C4 \uBB3C\uACFC \uB2EC\uAC40\uC744 \uB123\uACE0 \uB69C\uAED1\uC744 \uB2EB\uC2B5\uB2C8\uB2E4. High Pressure 25\uBD84 \uC124\uC815 \uD6C4 \uC790\uC5F0 \uAC10\uC555\uD558\uBA74 \uACE0\uAE30\uAC00 \uC0AC\uB974\uB974 \uB179\uC544\uB0B4\uB9BD\uB2C8\uB2E4.",
              "vi": "D\xF9ng ch\u1EBF \u0111\u1ED9 Saut\xE9 x\xE0o th\u1ECBt, th\xEAm n\u01B0\u1EDBc v\xE0 tr\u1EE9ng r\u1ED3i ch\u1ECDn High Pressure 25 ph\xFAt, \u0111\u1EC3 x\u1EA3 van t\u1EF1 nhi\xEAn."
            }
          }
        ]
      },
      {
        "stepNumber": 5,
        "title": {
          "zh-TW": "\u6DCB\u5728\u71B1\u9A30\u9A30\u767D\u98EF\u4E0A\uFF0C\u642D\u914D\u6EF7\u86CB\u9EC3\u74DC\uFF01",
          "en": "Ladle over Steamed Rice & Garnish",
          "ja": "\u708A\u304D\u305F\u3066\u3054\u98EF\u306B\u305F\u3063\u3077\u308A\u304B\u3051\u3066\u53EC\u3057\u4E0A\u304C\u308C\uFF01",
          "ko": "\uB530\uB73B\uD55C \uC300\uBC25 \uC704\uC5D0 \uB4EC\uBFCD \uC5B9\uC5B4 \uC644\uC131!",
          "vi": "M\xFAc chan l\xEAn c\u01A1m tr\u1EAFng n\xF3ng h\u1ED5i v\xE0 th\u01B0\u1EDFng th\u1EE9c!"
        },
        "instruction": {
          "zh-TW": "\u76DB\u4E00\u7897\u71B1\u6C23\u9A30\u9A30\u7684\u8D8A\u5149\u7C73\u6216\u58FD\u53F8\u7C73\u767D\u98EF\uFF0C\u6DCB\u4E0A\u5169\u5927\u52FA\u6FC3\u90C1\u6CB9\u4EAE\u7684\u6EF7\u8089\u8207\u6E6F\u6C41\uFF0C\u5207\u958B\u534A\u9846\u5165\u5473\u7684\u6EF7\u86CB\uFF0C\u653E\u4E0A\u9EC3\u91D1\u9183\u9EC3\u74DC\u7247\u6216\u71D9\u9752\u83DC\uFF0C\u62CC\u52FB\u5927\u53E3\u4EAB\u7528\uFF01",
          "en": "Scoop hot steamed jasmine/short-grain rice into a bowl. Ladle 2 generous spoonfuls of glossy braised pork sauce over top. Slice a braised egg in half, add pickled cucumber, and enjoy!",
          "ja": "\u71B1\u3005\u306E\u3054\u98EF\u306E\u4E0A\u306B\u30C4\u30E4\u30C4\u30E4\u306E\u30EB\u30FC\u30ED\u30FC\u3092\u305F\u3063\u3077\u308A\u304B\u3051\u307E\u3059\u3002\u534A\u5206\u306B\u5207\u3063\u305F\u716E\u5375\u3068\u305F\u304F\u3042\u3093\uFF08\u307E\u305F\u306F\u9752\u83DC\uFF09\u3092\u6DFB\u3048\u3001\u3088\u304F\u6DF7\u305C\u3066\u304A\u53EC\u3057\u4E0A\u304C\u308A\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uAC13 \uC9C0\uC740 \uB530\uB73B\uD55C \uBC25 \uC704\uC5D0 \uC724\uAE30 \uD750\uB974\uB294 \uB8E8\uB85C\uC6B0 \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uC5B9\uACE0, \uC870\uB9B0 \uB2EC\uAC40\uACFC \uC808\uC778 \uC624\uC774\uB97C \uACC1\uB4E4\uC5EC \uC4F1\uC4F1 \uBE44\uBCBC \uB4DC\uC138\uC694!",
          "vi": "X\u1EDBi b\xE1t c\u01A1m n\xF3ng d\u1EBBo, chan 2 mu\xF4i th\u1ECBt kho \xF3ng \xE1nh \u0111\u1EADm \u0111\xE0, b\u1ED5 \u0111\xF4i qu\u1EA3 tr\u1EE9ng ng\u1EA5m s\u1ED1t, \u0103n k\xE8m d\u01B0a leo mu\u1ED1i chua gi\u1EA3i ng\u1EA5y."
        },
        "image": "/images/braised-pork-rice.jpg",
        "durationSeconds": 60
      }
    ],
    "troubleshooting": [
      {
        "id": "ts-lr-1",
        "problem": {
          "zh-TW": "\u6EF7\u8089\u5403\u8D77\u4F86\u592A\u6CB9\u81A9\uFF0C\u6C92\u6709\u9ECF\u5634\u7684\u81A0\u8CEA\u611F\u89BA\uFF1F",
          "en": "Why is the braised pork too greasy instead of sticky-collagen rich?",
          "ja": "\u8102\u3063\u3053\u3044\u3060\u3051\u3067\u3001\u5507\u306B\u307E\u3068\u308F\u308A\u3064\u304F\u3088\u3046\u306A\u30B3\u30E9\u30FC\u30B2\u30F3\u611F\u304C\u51FA\u306A\u3044\uFF1F",
          "ko": "\uAE30\uB984\uC9C0\uAE30\uB9CC \uD558\uACE0 \uCAC0\uB4DD\uD55C \uCF5C\uB77C\uAC90 \uC2DD\uAC10\uC774 \uB35C\uD55C \uC774\uC720\uB294?",
          "vi": "T\u1EA1i sao s\u1ED1t th\u1ECBt b\u1ECB ng\u1EA5y m\u1EE1 ch\u1EE9 kh\xF4ng c\xF3 \u0111\u1ED9 keo d\xEDnh m\xF4i?"
        },
        "cause": {
          "zh-TW": "\u6C92\u6709\u8CB7\u300C\u5E36\u76AE\u300D\u4E94\u82B1\u8089\uFF0C\u6216\u662F\u4E94\u82B1\u8089\u7178\u7092\u6642\u9593\u4E0D\u5920\uFF0C\u6CB9\u8102\u672A\u88AB\u903C\u51FA\u3002",
          "en": "Missing the pig skin (which contains all collagen) or didn\u2019t render pork fat long enough at start.",
          "ja": "\u300C\u76AE\u4ED8\u304D\u300D\u306E\u8C5A\u8089\u3092\u4F7F\u3063\u3066\u3044\u306A\u3044\u304B\u3001\u6700\u521D\u306E\u7092\u3081\u3067\u8102\u3092\u3057\u3063\u304B\u308A\u51FA\u3055\u306A\u304B\u3063\u305F\u305F\u3081\u3067\u3059\u3002",
          "ko": "\uAECD\uC9C8\uC774 \uC5C6\uB294 \uBD80\uC704\uB97C \uC0AC\uC6A9\uD588\uAC70\uB098 \uCC98\uC74C\uC5D0 \uAE30\uB984\uC744 \uCDA9\uBD84\uD788 \uBF51\uC544\uB0B4\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "Kh\xF4ng d\xF9ng th\u1ECBt c\xF3 b\xEC (da heo l\xE0 n\u01A1i ch\u1EE9a collagen t\u1EA1o \u0111\u1ED9 d\u1EBBo) ho\u1EB7c ch\u01B0a x\xE0o k\u1EF9 cho ra b\u1EDBt m\u1EE1."
        },
        "solution": {
          "zh-TW": "\u8ACB\u52D9\u5FC5\u9078\u64C7\u5E36\u8C6C\u76AE\u7684\u4E94\u82B1\u8089\uFF1B\u82E5\u8CB7\u4E0D\u5230\u5E36\u76AE\u8089\uFF0C\u53EF\u5728\u71C9\u716E\u6642\u4E1F\u5165\u4E00\u5C0F\u584A\u4E7E\u6728\u8033\u6216\u8C6C\u76AE\u4E01\u540C\u716E\u3002",
          "en": "Always ask butcher for skin-on pork belly. If skinless, add a small piece of pork rind or rehydrated wood ear fungus.",
          "ja": "\u5FC5\u305A\u76AE\u4ED8\u304D\u8C5A\u30D0\u30E9\u3092\u9078\u3073\u307E\u3057\u3087\u3046\u3002\u624B\u306B\u5165\u3089\u306A\u3044\u5834\u5408\u306F\u8C5A\u76AE\u306E\u5C0F\u7247\u3092\u4E00\u7DD2\u306B\u716E\u8FBC\u3080\u3068\u89E3\u6C7A\u3057\u307E\u3059\u3002",
          "ko": "\uAC00\uAE09\uC801 \uAECD\uC9C8\uC774 \uBD99\uC740 \uC624\uACB9\uC0B4\uC744 \uC120\uD0DD\uD558\uC138\uC694. \uAECD\uC9C8\uC774 \uC5C6\uB2E4\uBA74 \uBB3C\uC5D0 \uBD88\uB9B0 \uBAA9\uC774\uBC84\uC12F\uC744 \uC798\uAC8C \uC370\uC5B4 \uB123\uC5B4\uB3C4 \uCAC0\uB4DD\uD574\uC9D1\uB2C8\uB2E4.",
          "vi": "H\xE3y ch\u1ECDn th\u1ECBt ba ch\u1EC9 c\xF3 b\xEC. N\u1EBFu kh\xF4ng c\xF3 b\xEC, c\xF3 th\u1EC3 cho th\xEAm ch\xFAt m\u1ED9c nh\u0129 b\u0103m nh\u1ECF \u0111\u1EC3 t\u1EA1o \u0111\u1ED9 s\xE1nh d\xEDnh."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u6EF7\u8089\u98EF\u7684\u6E6F\u6C41\u5982\u679C\u653E\u9694\u591C\uFF0C\u6CB9\u8102\u6703\u51DD\u56FA\u6D6E\u5728\u8868\u9762\uFF0C\u6488\u6389\u767D\u6CB9\u5F8C\u518D\u52A0\u71B1\uFF0C\u5473\u9053\u6BD4\u7B2C\u4E00\u5929\u66F4\u52A0\u6FC3\u90C1\u9187\u539A\uFF01",
        "en": "Lu Rou Fan tastes even better the next day! Refrigerate overnight, skim off solidified top fat, and reheat for richer, cleaner flavor.",
        "ja": "\u4E00\u6669\u5BDD\u304B\u305B\u308B\u3068\u4F59\u5206\u306A\u8102\u304C\u767D\u304F\u56FA\u307E\u308B\u306E\u3067\u30B9\u30D7\u30FC\u30F3\u3067\u53D6\u308A\u9664\u3051\u307E\u3059\u30022\u65E5\u76EE\u306E\u307B\u3046\u304C\u5473\u304C\u67D3\u307F\u3066\u683C\u6BB5\u306B\u7F8E\u5473\u3057\u304F\u306A\u308A\u307E\u3059\uFF01",
        "ko": "\uB8E8\uB85C\uC6B0\uD310\uC740 \uD558\uB8E8 \uC219\uC131\uC2DC\uCF30\uC744 \uB54C \uAC00\uC7A5 \uB9DB\uC788\uC2B5\uB2C8\uB2E4! \uB0C9\uC7A5\uACE0\uC5D0 \uB123\uC5B4 \uAD73\uC740 \uAE30\uB984\uC744 \uAC77\uC5B4\uB0B4\uACE0 \uB2E4\uC2DC \uB370\uC6B0\uBA74 \uB2F4\uBC31\uD558\uACE0 \uC9C4\uD55C \uB9DB\uC774 \uB0A9\uB2C8\uB2E4.",
        "vi": "Th\u1ECBt kho \u0111\u1EC3 qua \u0111\xEAm h\xF4m sau h\u1EDBt b\u1EDBt m\u1EE1 \u0111\xF4ng r\u1ED3i \u0111un l\u1EA1i s\u1EBD c\xE0ng \u0111\u1EADm \u0111\xE0 th\u01A1m ngon g\u1EA5p b\u1ED9i!"
      }
    ]
  },
  {
    "id": "boba-milk-tea",
    "slug": "boba-milk-tea",
    "title": {
      "zh-TW": "\u624B\u7092\u9ED1\u7CD6\u73CD\u73E0\u9BAE\u5976\u8336",
      "en": "Taiwanese Brown Sugar Boba Fresh Milk",
      "ja": "\u624B\u7092\u308A\u9ED2\u7CD6\u30BF\u30D4\u30AA\u30AB\u751F\u30DF\u30EB\u30AF\u30C6\u30A3\u30FC",
      "ko": "\uC218\uC81C \uD751\uB2F9 \uBC84\uBE14 \uC0DD\uC6B0\uC720 (\uD751\uB2F9 \uBC84\uBE14\uD2F0)",
      "vi": "S\u1EEFa t\u01B0\u01A1i tr\xE2n ch\xE2u \u0111\u01B0\u1EDDng \u0111en \u0110\xE0i Loan"
    },
    "subtitle": {
      "zh-TW": "\u73FE\u716E\u624B\u4F5C\u7C89\u5713\u30FB\u9ED1\u7CD6\u7425\u73C0\u864E\u7D0B\u639B\u676F",
      "en": "Warm Chewy Tapioca Pearls & Dripping Tiger Stripes",
      "ja": "\u624B\u4F5C\u308A\u30E2\u30C1\u30E2\u30C1\u751F\u30BF\u30D4\u30AA\u30AB\u3068\u7F8E\u3057\u3044\u9ED2\u7CD6\u306E\u864E\u6A21\u69D8",
      "ko": "\uAC13 \uC0B6\uC740 \uC218\uC81C \uD384\uACFC \uD758\uB7EC\uB0B4\uB9AC\uB294 \uD751\uB2F9 \uD638\uB791\uC774 \uBB34\uB2AC",
      "vi": "Tr\xE2n ch\xE2u d\u1EBBo qu\xE1nh n\u1EA5u t\u01B0\u01A1i & V\xE2n h\u1ED5 ph\xE1ch \u0111\u1EB9p m\u1EAFt"
    },
    "tagline": {
      "zh-TW": "\u98A8\u9761\u5168\u4E16\u754C\u7684\u53F0\u7063\u4E4B\u5149\uFF0C\u638C\u63E1\u71B1\u73CD\u73E0\u8207\u51B0\u9BAE\u5976\u7684\u51B0\u706B\u4EA4\u878D",
      "en": "The global sensation: warm caramel pearls meet ice-cold fresh milk",
      "ja": "\u4E16\u754C\u4E2D\u3067\u5927\u30D6\u30FC\u30E0\u3092\u5DFB\u304D\u8D77\u3053\u3057\u305F\u53F0\u6E7E\u30B9\u30A4\u30FC\u30C4\u306E\u6700\u9AD8\u5CF0",
      "ko": "\uC804 \uC138\uACC4\uB97C \uC0AC\uB85C\uC7A1\uC740 \uB300\uB9CC\uC758 \uC790\uBD80\uC2EC, \uB530\uB73B\uD55C \uD384\uACFC \uCC28\uAC00\uC6B4 \uC0DD\uC6B0\uC720\uC758 \uC870\uD654",
      "vi": "C\u01A1n s\u1ED1t tr\xE0 s\u1EEFa to\xE0n c\u1EA7u \u0111\u1EBFn t\u1EEB \u0110\xE0i Loan"
    },
    "heroImage": "/images/boba-milk-tea.jpg",
    "difficulty": "hard",
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 40,
    "defaultServings": 2,
    "caloriesPerServing": 360,
    "category": "desserts",
    "dietaryTags": [
      "vegetarian",
      "halal",
      "glutenFree"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u4E2D / \u53F0\u5357",
        "en": "Taichung / Tainan",
        "ja": "\u53F0\u4E2D / \u53F0\u5357",
        "ko": "\uD0C0\uC774\uC911 / \uD0C0\uC774\uB09C",
        "vi": "\u0110\xE0i Trung / \u0110\xE0i Nam"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        },
        {
          "zh-TW": "\u516C\u9928\u591C\u5E02 (\u9673\u4E09\u9F0E\u5275\u59CB\u5730)",
          "en": "Gongguan Night Market",
          "ja": "\u516C\u9928\u591C\u5E02",
          "ko": "\uAD81\uAD00 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Gongguan"
        }
      ],
      "historyStory": {
        "zh-TW": "\u73CD\u73E0\u5976\u8336\u6E90\u81EA1980\u5E74\u4EE3\u7684\u53F0\u4E2D\u6625\u6C34\u5802\u8207\u53F0\u5357\u7FF0\u6797\u8336\u9928\u3002\u800C\u300C\u9ED1\u7CD6\u73CD\u73E0\u9BAE\u5976\u300D\u66F4\u662F\u5C07\u53E4\u6CD5\u7092\u9ED1\u7CD6\u7684\u7126\u9999\u767C\u63EE\u5230\u6975\u81F4\uFF0C\u5B8C\u5168\u4E0D\u52A0\u4E00\u6EF4\u8336\u6E6F\uFF0C\u4EE5\u7D14\u9BAE\u5976\u7684\u6FC3\u9187\u896F\u6258\u9ED1\u7CD6\u871C\u73CD\u73E0\u7684\u6EAB\u71B1\u8EDFQ\u3002",
        "en": "Invented in the 1980s in Taiwan, modern Brown Sugar Boba elevates the craft by caramelizing pure cane sugar with hand-rolled tapioca balls, served without tea in rich whole milk.",
        "ja": "1980\u5E74\u4EE3\u306B\u53F0\u6E7E\u3067\u8A95\u751F\u3002\u9ED2\u7CD6\u30BF\u30D4\u30AA\u30AB\u30DF\u30EB\u30AF\u306F\u8336\u8449\u3092\u4F7F\u308F\u305A\u3001\u3058\u3063\u304F\u308A\u716E\u8A70\u3081\u305F\u6E29\u304B\u3044\u9ED2\u7CD6\u30BF\u30D4\u30AA\u30AB\u306B\u51B7\u305F\u3044\u6FC3\u539A\u30DF\u30EB\u30AF\u3092\u6CE8\u304E\u3001\u6E29\u5EA6\u5DEE\u3092\u697D\u3057\u3080\u9032\u5316\u7CFB\u30C9\u30EA\u30F3\u30AF\u3067\u3059\u3002",
        "ko": "1980\uB144\uB300 \uB300\uB9CC\uC5D0\uC11C \uD0C4\uC0DD\uD55C \uBC84\uBE14\uD2F0\uC758 \uC815\uC810\uC785\uB2C8\uB2E4. \uCC3B\uBB3C \uC5C6\uC774 \uC9C4\uD558\uAC8C \uC878\uC778 \uB530\uB73B\uD55C \uD751\uB2F9 \uD384\uC5D0 \uC2E0\uC120\uD55C \uC0DD\uC6B0\uC720\uB97C \uBD80\uC5B4 \uC785\uC548\uC5D0\uC11C \uD37C\uC9C0\uB294 \uC628\uB3C4 \uCC28\uC640 \uCAC4\uAE43\uD568\uC744 \uC990\uAE41\uB2C8\uB2E4.",
        "vi": "Ra \u0111\u1EDDi t\u1EEB th\u1EADp ni\xEAn 1980 t\u1EA1i \u0110\xE0i Loan, m\xF3n s\u1EEFa t\u01B0\u01A1i tr\xE2n ch\xE2u \u0111\u01B0\u1EDDng \u0111en tr\u1EE9 danh k\u1EBFt h\u1EE3p tr\xE2n ch\xE2u \u1EA5m n\xF3ng n\u1EA5u \u0111\u01B0\u1EDDng m\xEDa c\xF9ng s\u1EEFa t\u01B0\u01A1i thanh tr\xF9ng m\xE1t l\u1EA1nh."
      },
      "taiwaneseHokkien": "Tsin-tsu Leng-t\xEA (\u3117\u3123 \u3117\u3128 \u310C\u3127\u3125\u02CA \u3109\u311F\u02CA)",
      "mandarinPinyin": "Zh\u0113nzh\u016B N\u01CEich\xE1 (\u3113\u3123 \u3113\u3128 \u310B\u311E\u02C7 \u3114\u311A\u02CA)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u4E00\u676F\u9ED1\u7CD6\u73CD\u73E0\u9BAE\u5976\uFF0C\u5FAE\u51B0\u4E0D\u52A0\u7CD6"
    },
    "ingredients": [
      {
        "id": "tapioca-starch",
        "name": {
          "zh-TW": "\u6728\u85AF\u7C89 (\u6A39\u85AF\u7C89 / \u83F1\u7C89)",
          "en": "Tapioca Starch (Pure Cassava)",
          "ja": "\u30BF\u30D4\u30AA\u30AB\u7C89\uFF08\u30AD\u30E3\u30C3\u30B5\u30D0\u7C89\uFF09",
          "ko": "\uD0C0\uD53C\uC624\uCE74 \uC804\uBD84",
          "vi": "B\u1ED9t n\u0103ng (B\u1ED9t s\u1EAFn c\u1EE7 m\xEC)"
        },
        "amount": 100,
        "unitMetric": "g",
        "unitUS": "0.7 cup",
        "isKeyFlavor": true,
        "chineseName": "\u6728\u85AF\u7C89",
        "chinesePinyin": "M\xF9 sh\u01D4 f\u011Bn",
        "substitute": {
          "substituteName": {
            "zh-TW": "\u6CF0\u570B\u9032\u53E3\u6728\u85AF\u7C89 (Tapioca Starch)",
            "en": "Thai Tapioca Starch / Flour",
            "ja": "\u30BF\u30A4\u7523\u30BF\u30D4\u30AA\u30AB\u7C89",
            "ko": "\uD0DC\uAD6D\uC0B0 \uD0C0\uD53C\uC624\uCE74 \uC804\uBD84",
            "vi": "B\u1ED9t n\u0103ng Th\xE1i Lan"
          },
          "ratio": "1:1",
          "explanation": {
            "zh-TW": "\u505A\u73CD\u73E0\u7C89\u5713\u3010\u7D55\u5C0D\u4E0D\u80FD\u7528\u7389\u7C73\u7C89\u6216\u592A\u767D\u7C89\u3011\u66FF\u4EE3\uFF01\u53EA\u6709\u7D14\u6728\u85AF\u7C89\u624D\u80FD\u5728\u9AD8\u6EAB\u71D9\u9EB5\u5F8C\u7522\u751F\u6C34\u6676\u822C\u7684Q\u5F48\u56BC\u52C1\u3002",
            "en": 'Must use 100% Tapioca Starch. Cornstarch or potato starch WILL FAIL to produce the chewy "Q" texture.',
            "ja": "\u30BF\u30D4\u30AA\u30AB\u4F5C\u308A\u306B\u306F\u3010\u7247\u6817\u7C89\u3084\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\u306F\u4E0D\u53EF\u3011\u3067\u3059\u3002\u5FC5\u305A\u7D14\u30BF\u30D4\u30AA\u30AB\u7C89\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "ko": "\uC625\uC218\uC218\uC804\uBD84\uC774\uB098 \uAC10\uC790\uC804\uBD84\uC740 \uC808\uB300 \uC548 \uB429\uB2C8\uB2E4. \uC624\uC9C1 100% \uD0C0\uD53C\uC624\uCE74 \uC804\uBD84\uB9CC \uD2B9\uC720\uC758 \uCAC4\uAE43\uD55C Q\uAC10\uC744 \uB0C5\uB2C8\uB2E4.",
            "vi": "B\u1EAFt bu\u1ED9c d\xF9ng 100% b\u1ED9t n\u0103ng, b\u1ED9t b\u1EAFp hay b\u1ED9t khoai t\xE2y s\u1EBD kh\xF4ng th\u1EC3 dai d\u1EBBo."
          },
          "whereToBuy": {
            "zh-TW": "\u5404\u5927\u8D85\u5E02\u70D8\u7119\u5340\u3001\u6771\u5357\u4E9E\u8D85\u5E02 (\u4E09\u8C61\u724C)",
            "en": "Asian/Hispanic grocery baking aisle (E.g. Cock Brand, Bob's Red Mill)",
            "ja": "\u696D\u52D9\u30B9\u30FC\u30D1\u30FC\u3001\u30AB\u30EB\u30C7\u30A3\u3001\u30A2\u30B8\u30A2\u98DF\u6750\u5E97",
            "ko": "\uB300\uD615 \uB9C8\uD2B8 \uC81C\uACFC\uC81C\uBE75 \uCF54\uB108, \uC544\uC2DC\uC548 \uB9C8\uCF13",
            "vi": "C\xE1c si\xEAu th\u1ECB ho\u1EB7c ti\u1EC7m l\xE0m b\xE1nh"
          }
        }
      },
      {
        "id": "taiwan-brown-sugar",
        "name": {
          "zh-TW": "\u53F0\u7063\u7D14\u9ED1\u7CD6 (\u6216\u6C96\u7E69\u9ED1\u7CD6)",
          "en": "Taiwan Dark Brown Sugar / Muscovado",
          "ja": "\u7D14\u9ED2\u7CD6\uFF08\u53F0\u6E7E\u7523\u307E\u305F\u306F\u6C96\u7E04\u9ED2\u7CD6\uFF09",
          "ko": "\uB300\uB9CC \uC21C\uC218 \uD751\uC124\uD0D5 (\uC6D0\uB2F9)",
          "vi": "\u0110\u01B0\u1EDDng \u0111en nguy\xEAn ch\u1EA5t \u0110\xE0i Loan"
        },
        "amount": 80,
        "unitMetric": "g",
        "unitUS": "0.4 cup",
        "isKeyFlavor": true,
        "chineseName": "\u9ED1\u7CD6",
        "chinesePinyin": "H\u0113i t\xE1ng"
      },
      {
        "id": "fresh-whole-milk",
        "name": {
          "zh-TW": "\u512A\u8CEA\u5168\u8102\u9BAE\u5976",
          "en": "Whole Fresh Milk (or Oat Milk)",
          "ja": "\u6FC3\u539A\u306A\u6210\u5206\u7121\u8ABF\u6574\u725B\u4E73",
          "ko": "\uC2E0\uC120\uD55C \uC804\uC9C0 \uC0DD\uC6B0\uC720",
          "vi": "S\u1EEFa t\u01B0\u01A1i thanh tr\xF9ng nguy\xEAn kem"
        },
        "amount": 400,
        "unitMetric": "ml",
        "unitUS": "1.7 cups",
        "chineseName": "\u5168\u8102\u9BAE\u5976",
        "chinesePinyin": "Qu\xE1n zh\u012B xi\u0101n n\u01CEi"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u716E\u6CB8\u9ED1\u7CD6\u6C34\u8207\u71D9\u9EB5\u5718 (\u9632\u5931\u6557\u7B2C\u4E00\u8981\u8A23)",
          "en": "Boil Brown Sugar & Gelatinize Dough (Key!)",
          "ja": "\u9ED2\u7CD6\u6C34\u3092\u6CB8\u9A30\u3055\u305B\u3066\u300C\u6E6F\u3054\u306D\u300D\u3059\u308B\uFF08\u6700\u91CD\u8981\uFF01\uFF09",
          "ko": "\uD751\uB2F9\uBB3C \uB053\uC5EC \uC775\uBC18\uC8FD\uD558\uAE30 (\uC2E4\uD328 \uBC29\uC9C0 \uD575\uC2EC!)",
          "vi": "\u0110un s\xF4i n\u01B0\u1EDBc \u0111\u01B0\u1EDDng \u0111en v\xE0 l\u1EA5y b\u1ED9t ch\xEDn (B\xED quy\u1EBFt c\u1ED1t l\xF5i)"
        },
        "instruction": {
          "zh-TW": "\u5C07 35g \u9ED1\u7CD6\u8207 60ml \u6C34\u5012\u5165\u5C0F\u934B\u4E2D\uFF0C\u5927\u706B\u716E\u81F3\u300C\u5B8C\u5168\u6EFE\u6CB8\u300D\uFF08\u5287\u70C8\u5192\u5927\u6CE1\u6CE1\uFF09\u3002\u7ACB\u523B\u7184\u706B\uFF0C\u4E00\u53E3\u6C23\u5012\u5165\u5168\u90E8\u6A39\u85AF\u7C89\uFF0C\u8FC5\u901F\u7528\u7B77\u5B50\u652A\u62CC\u6210\u7D6E\u72C0\u3002",
          "en": "Combine 35g brown sugar and 60ml water in a small pot. Bring to a ROARING BOIL (big rapid bubbles). Turn off heat, dump in ALL tapioca starch immediately, and stir vigorously with chopsticks.",
          "ja": "\u5C0F\u934B\u306B\u9ED2\u7CD635g\u3068\u6C3460ml\u3092\u5165\u308C\u3001\u5F37\u706B\u3067\u300C\u5B8C\u5168\u306B\u30B0\u30E9\u30B0\u30E9\u6CB8\u9A30\u300D\u3055\u305B\u307E\u3059\u3002\u706B\u3092\u6B62\u3081\u3001\u30BF\u30D4\u30AA\u30AB\u7C89\u3092\u4E00\u6C17\u306B\u5168\u91CF\u6295\u5165\u3057\u3066\u7BB8\u3067\u624B\u65E9\u304F\u6DF7\u305C\u307E\u3059\u3002",
          "ko": "\uC791\uC740 \uB0C4\uBE44\uC5D0 \uD751\uC124\uD0D5 35g\uACFC \uBB3C 60ml\uB97C \uB123\uACE0 \uD314\uD314 \uB053\uC5EC \uC644\uC804\uD788 \uAE30\uD3EC\uAC00 \uC62C\uB77C\uC62C \uB54C \uBD88\uC744 \uB044\uACE0, \uD0C0\uD53C\uC624\uCE74 \uC804\uBD84\uC744 \uD55C \uBC88\uC5D0 \uBD80\uC5B4 \uC813\uAC00\uB77D\uC73C\uB85C \uBE60\uB974\uAC8C \uC11E\uC5B4\uC90D\uB2C8\uB2E4.",
          "vi": "Cho 35g \u0111\u01B0\u1EDDng \u0111en v\xE0 60ml n\u01B0\u1EDBc v\xE0o n\u1ED3i nh\u1ECF \u0111un S\xD4I S\xD9NG S\u1EE4C. T\u1EAFt b\u1EBFp, \u0111\u1ED5 to\xE0n b\u1ED9 b\u1ED9t n\u0103ng v\xE0o khu\u1EA5y nhanh tay."
        },
        "image": "/images/boba-step1.jpg",
        "durationSeconds": 180,
        "dangerWarnings": {
          "zh-TW": "\u26A0\uFE0F \u6C34\u6EAB\u4E0D\u5920\u9AD8\u6703\u5C0E\u81F4\u6FB1\u7C89\u7121\u6CD5\u7CCA\u5316\uFF08\u8B8A\u6210\u975E\u725B\u9813\u6D41\u9AD4\u6C34\u6F3F\uFF09\u3002\u6C34\u4E00\u5B9A\u8981\u6EFE\u6CB8\u72C0\u614B\u7ACB\u523B\u4E0B\u7C89\uFF01",
          "en": "\u26A0\uFE0F The water MUST be boiling hot! If lukewarm, the starch turns into a puddle of non-Newtonian fluid instead of dough.",
          "ja": "\u26A0\uFE0F \u304A\u6E6F\u304C\u6CB8\u9A30\u3057\u3066\u3044\u306A\u3044\u3068\u3001\u7C89\u304C\u56FA\u307E\u3089\u305A\u30C9\u30ED\u30C9\u30ED\u306E\u6DB2\u4F53\u306B\u306A\u3063\u3066\u5931\u6557\u3057\u307E\u3059\u3002\u5FC5\u305A\u30B0\u30E9\u30B0\u30E9\u716E\u7ACB\u3063\u305F\u72B6\u614B\u3067\u7C89\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\u26A0\uFE0F \uBB3C\uC774 \uD314\uD314 \uB053\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC5D0\uC11C \uC804\uBD84\uC744 \uB123\uC73C\uBA74 \uBC18\uC8FD\uC774 \uB418\uC9C0 \uC54A\uACE0 \uBB3C\uCC98\uB7FC \uD480\uC5B4\uC9D1\uB2C8\uB2E4. \uBC18\uB4DC\uC2DC 100\xB0C \uB053\uB294 \uBB3C\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4!",
          "vi": "\u26A0\uFE0F N\u01B0\u1EDBc B\u1EAET BU\u1ED8C ph\u1EA3i s\xF4i s\xF9ng s\u1EE5c, n\u1EBFu n\u01B0\u1EDBc ngu\u1ED9i b\u1ED9t s\u1EBD b\u1ECB ch\u1EA3y l\u1ECFng kh\xF4ng nh\u1ED3i \u0111\u01B0\u1EE3c."
        }
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u63C9\u52FB\u9EB5\u5718\u8207\u6413\u63C9\u73CD\u73E0\u7C89\u5713",
          "en": "Knead Dough & Roll Boba Pearls",
          "ja": "\u751F\u5730\u3092\u3053\u306D\u3066\u5C0F\u3055\u306A\u4E38\u306B\u6210\u5F62\u3059\u308B",
          "ko": "\uBC18\uC8FD \uCE58\uB300\uAE30 \uBC0F \uB3D9\uAE00\uB3D9\uAE00 \uD384 \uBE5A\uAE30",
          "vi": "Nh\u1ED3i b\u1ED9t d\u1EBBo m\u1ECBn v\xE0 vo vi\xEAn tr\xE2n ch\xE2u"
        },
        "instruction": {
          "zh-TW": "\u5C07\u9EB5\u7D6E\u5012\u5728\u6848\u677F\u4E0A\uFF0C\u8D81\u6EAB\u71B1\u7528\u624B\u63C9\u58D3\u6210\u5149\u6ED1\u4E0D\u9ECF\u624B\u7684\u6DF1\u8910\u8272\u9EB5\u5718\u3002\u6413\u6210\u9577\u7D30\u689D\uFF0C\u7528\u5207\u9EB5\u5200\u5207\u6210\u5C0F\u4E01\uFF0C\u518D\u7528\u624B\u638C\u5FC3\u6413\u6210\u76F4\u5F91\u7D04 0.8 \u516C\u5206\u7684\u5C0F\u5713\u7403\uFF0C\u6492\u5C11\u8A31\u4E7E\u7C89\u9632\u9ECF\u3002",
          "en": "Turn dough onto board while warm. Knead into a smooth, elastic dark brown dough. Roll into long skinny ropes, cut into small cubes, and roll between palms into 0.8cm boba balls. Dust lightly with dry starch.",
          "ja": "\u6E29\u304B\u3044\u3046\u3061\u306B\u624B\u3067\u6ED1\u3089\u304B\u306B\u306A\u308B\u307E\u3067\u3053\u306D\u307E\u3059\u3002\u7D30\u9577\u3044\u68D2\u72B6\u306B\u4F38\u3070\u3057\u3066\u5305\u4E01\u3067\u5C0F\u3055\u304F\u30AB\u30C3\u30C8\u3057\u3001\u624B\u306E\u3072\u3089\u3067\u76F4\u5F840.8cm\u306E\u4E38\u3044\u7C92\u306B\u4E38\u3081\u307E\u3059\u3002\u304F\u3063\u3064\u304B\u306A\u3044\u3088\u3046\u7C89\u3092\u307E\u3076\u3057\u307E\u3059\u3002",
          "ko": "\uB530\uB73B\uD560 \uB54C \uC190\uC73C\uB85C \uB9E4\uB044\uB7FD\uACE0 \uCC30\uC9C4 \uBC18\uC8FD\uC774 \uB420 \uB54C\uAE4C\uC9C0 \uCE58\uB311\uB2C8\uB2E4. \uC587\uACE0 \uAE38\uAC8C \uB298\uC5EC \uC791\uC740 \uD050\uBE0C \uBAA8\uC591\uC73C\uB85C \uC790\uB978 \uB4A4, \uC190\uBC14\uB2E5\uC73C\uB85C \uAD74\uB824 0.8cm \uAD6C\uC2AC \uBAA8\uC591\uC73C\uB85C \uBE5A\uACE0 \uB367\uAC00\uB8E8\uB97C \uBFCC\uB824\uB461\uB2C8\uB2E4.",
          "vi": "Nh\u1ED3i b\u1ED9t khi c\xF2n \u1EA5m \u0111\u1EBFn khi m\u1ECBn kh\xF4ng d\xEDnh tay. Se th\xE0nh s\u1EE3i d\xE0i, c\u1EAFt h\u1EA1t l\u1EF1u v\xE0 vo tr\xF2n c\u1EE1 0.8cm. \xC1o m\u1ED9t l\u1EDBp b\u1ED9t kh\xF4 ch\u1ED1ng d\xEDnh."
        },
        "image": "/images/boba-step2.jpg",
        "durationSeconds": 600
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u716E\u73CD\u73E0\u8207\u60B6\u716E (Q\u5F48\u95DC\u9375)",
          "en": "Boil & Steam Pearls (The Q-Bounce)",
          "ja": "\u30BF\u30D4\u30AA\u30AB\u3092\u8339\u3067\u3066\u3057\u3063\u304B\u308A\u84B8\u3089\u3059\uFF08\u30E2\u30C1\u30E2\u30C1\u306E\u79D8\u8A23\uFF09",
          "ko": "\uD384 \uC0B6\uAE30 \uBC0F \uB738 \uB4E4\uC774\uAE30 (\uCAC4\uAE43\uD568\uC758 \uC644\uC131)",
          "vi": "Lu\u1ED9c v\xE0 \u1EE7 tr\xE2n ch\xE2u (B\xED quy\u1EBFt d\u1EBBo qu\xE1nh)"
        },
        "instruction": {
          "zh-TW": "\u934B\u4E2D\u52A0\u5165\u5927\u534A\u934B\u6C34\uFF08\u7D04\u73CD\u73E0\u91CF\u76848\u500D\uFF09\u716E\u6EFE\uFF0C\u4E0B\u73CD\u73E0\u8F15\u8F15\u652A\u62CC\u9632\u9ECF\u5E95\u3002\u5927\u706B\u716E 20 \u5206\u9418\u5F8C\u7184\u706B\uFF0C\u52A0\u84CB\u60B6 20 \u5206\u9418\u3002\u6488\u51FA\u904E\u51B7\u958B\u6C34\u6C96\u6D17\u701D\u4E7E\uFF0C\u53E3\u611F\u77AC\u9593\u8B8A\u5F97\u8D85\u7D1AQ\u5F48\uFF01",
          "en": "Bring a large pot of water (8x pearl volume) to boil. Add pearls, stirring gently. Boil on medium-high for 20 mins, turn off heat, cover and let STEAM for 20 mins. Rinse under ice-cold water to lock in chewy texture!",
          "ja": "\u305F\u3063\u3077\u308A\u306E\u6E6F\uFF08\u30BF\u30D4\u30AA\u30AB\u306E8\u500D\uFF09\u3092\u6CB8\u304B\u3057\u3001\u30BF\u30D4\u30AA\u30AB\u3092\u5165\u308C\u3066\u5E95\u306B\u304F\u3063\u3064\u304B\u306A\u3044\u3088\u3046\u6DF7\u305C\u307E\u3059\u3002\u4E2D\u706B\u306720\u5206\u8339\u3067\u305F\u5F8C\u3001\u706B\u3092\u6B62\u3081\u84CB\u3092\u3057\u306620\u5206\u84B8\u3089\u3057\u307E\u3059\u3002\u51B7\u6C34\u3067\u30B5\u30C3\u3068\u6D17\u3063\u3066\u6C34\u6C17\u3092\u5207\u308A\u307E\u3059\u3002",
          "ko": "\uB109\uB109\uD55C \uBB3C\uC744 \uB053\uC5EC \uD384\uC744 \uB123\uACE0 \uAC00\uBCCD\uAC8C \uC800\uC5B4\uC90D\uB2C8\uB2E4. \uC911\uBD88\uC5D0\uC11C 20\uBD84\uAC04 \uC0B6\uC740 \uD6C4 \uBD88\uC744 \uB044\uACE0 \uB69C\uAED1 \uB36E\uC5B4 20\uBD84\uAC04 \uB738\uC744 \uB4E4\uC785\uB2C8\uB2E4. \uCC2C\uBB3C\uC5D0 \uD5F9\uAD88 \uD0F1\uAE00\uD0F1\uAE00\uD55C \uC2DD\uAC10\uC744 \uC0B4\uB9BD\uB2C8\uB2E4.",
          "vi": "\u0110un nhi\u1EC1u n\u01B0\u1EDBc s\xF4i, th\u1EA3 tr\xE2n ch\xE2u v\xE0o khu\u1EA5y nh\u1EB9. Lu\u1ED9c l\u1EEDa v\u1EEBa 20 ph\xFAt, t\u1EAFt b\u1EBFp \u0111\u1EADy vung \u1EE7 20 ph\xFAt. V\u1EDBt ra x\u1EA3 n\u01B0\u1EDBc \u0111\xE1 l\u1EA1nh cho tr\xE2n ch\xE2u gi\xF2n d\u1EBBo."
        },
        "image": "/images/boba-step3.jpg",
        "durationSeconds": 2400
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u9ED1\u7CD6\u871C\u6162\u71AC\u871C\u73CD\u73E0",
          "en": "Simmer in Thick Brown Sugar Syrup",
          "ja": "\u9ED2\u7CD6\u30B7\u30ED\u30C3\u30D7\u3067\u6FC3\u539A\u306B\u716E\u7D61\u3081\u308B",
          "ko": "\uD751\uB2F9 \uC2DC\uB7FD\uC5D0 \uC878\uC5EC \uD384\uC5D0 \uB2F9 \uC785\uD788\uAE30",
          "vi": "N\u1EA5u tr\xE2n ch\xE2u v\u1EDBi siro \u0111\u01B0\u1EDDng \u0111en s\u1EC7t"
        },
        "instruction": {
          "zh-TW": "\u5C0F\u934B\u4E2D\u52A0\u5165\u5269\u9918 45g \u9ED1\u7CD6\u8207 50ml \u6C34\u716E\u6EB6\uFF0C\u5012\u5165\u701D\u4E7E\u7684\u73CD\u73E0\u3002\u4EE5\u5C0F\u706B\u6162\u71AC\u7FFB\u716E\u7D04 5~8 \u5206\u9418\uFF0C\u76F4\u5230\u9ED1\u7CD6\u6F3F\u8B8A\u5F97\u6FC3\u7A20\u5982\u8702\u871C\u822C\u5305\u88F9\u4F4F\u6BCF\u9846\u73CD\u73E0\u3002",
          "en": "In a pan, melt 45g brown sugar with 50ml water. Add the cooked pearls and simmer over low heat for 5-8 mins until the syrup becomes thick and glossy like liquid honey.",
          "ja": "\u934B\u306B\u6B8B\u308A\u306E\u9ED2\u7CD645g\u3068\u6C3450ml\u3092\u71B1\u3057\u3066\u6EB6\u304B\u3057\u3001\u30BF\u30D4\u30AA\u30AB\u3092\u52A0\u3048\u307E\u3059\u3002\u5F31\u706B\u30675\u301C8\u5206\u30B3\u30C8\u30B3\u30C8\u716E\u8A70\u3081\u3066\u3001\u30CF\u30C1\u30DF\u30C4\u306E\u3088\u3046\u306B\u6FC3\u539A\u306B\u3068\u308D\u307F\u304C\u3064\u304F\u307E\u3067\u7D61\u3081\u307E\u3059\u3002",
          "ko": "\uD32C\uC5D0 \uB0A8\uC740 \uD751\uC124\uD0D5 45g\uACFC \uBB3C 50ml\uB97C \uB123\uACE0 \uB053\uC774\uB2E4\uAC00 \uC0B6\uC740 \uD384\uC744 \uB123\uC2B5\uB2C8\uB2E4. \uC57D\uBD88\uC5D0\uC11C 5~8\uBD84\uAC04 \uC878\uC5EC \uC2DC\uB7FD\uC774 \uAFC0\uCC98\uB7FC \uAC78\uCB49\uD558\uAC8C \uCF54\uD305\uB418\uB3C4\uB85D \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "\u0110un 45g \u0111\u01B0\u1EDDng \u0111en v\u1EDBi 50ml n\u01B0\u1EDBc cho tan, tr\xFAt tr\xE2n ch\xE2u v\xE0o rim l\u1EEDa nh\u1ECF 5-8 ph\xFAt \u0111\u1EBFn khi siro s\xE1nh k\u1EB9o b\xE1m \u0111\u1EC1u."
        },
        "image": "/images/boba-step4.jpg",
        "durationSeconds": 480
      },
      {
        "stepNumber": 5,
        "title": {
          "zh-TW": "\u65CB\u8F49\u639B\u676F\u3001\u6CE8\u5165\u9BAE\u5976\uFF01",
          "en": "Swirl Tiger Stripes & Pour Cold Milk",
          "ja": "\u30AB\u30C3\u30D7\u3092\u50BE\u3051\u3066\u864E\u6A21\u69D8\u3092\u4F5C\u308A\u3001\u30DF\u30EB\u30AF\u3092\u6CE8\u3050\uFF01",
          "ko": "\uCEF5 \uBCBD\uBA74\uC5D0 \uD638\uB791\uC774 \uBB34\uB2AC \uB450\uB974\uACE0 \uCC28\uAC00\uC6B4 \uC6B0\uC720 \uBD93\uAE30!",
          "vi": "T\u1EA1o v\xE2n \u0111\u01B0\u1EDDng \u0111en h\u1ED5 ph\xE1ch v\xE0 r\xF3t s\u1EEFa t\u01B0\u01A1i!"
        },
        "instruction": {
          "zh-TW": "\u8D81\u6EAB\u71B1\u8200\u5165\u5169\u5927\u52FA\u6FC3\u7A20\u9ED1\u7CD6\u73CD\u73E0\u81F3\u73BB\u7483\u676F\u5E95\uFF0C\u5C07\u676F\u5B50\u50BE\u659C 45 \u5EA6\u65CB\u8F49\u4E00\u5708\uFF0C\u8B93\u9ED1\u7CD6\u6F3F\u5728\u676F\u58C1\u6D41\u6DCC\u51FA\u7D55\u7F8E\u300C\u864E\u7D0B\u300D\u3002\u52A0\u5165\u6EFF\u6EFF\u51B0\u584A\uFF0C\u5012\u5165\u51B0\u6DBC\u5168\u8102\u9BAE\u5976\uFF0C\u5927\u529F\u544A\u6210\uFF01",
          "en": 'Spoon 2-3 big scoops of warm brown sugar pearls into cup. Tilt and rotate glass 45\xB0 so sticky syrup drips down cup walls forming "Tiger Stripes". Add ice cubes to brim, pour ice-cold fresh milk, and enjoy!',
          "ja": "\u6E29\u304B\u3044\u30BF\u30D4\u30AA\u30AB\u3092\u30AB\u30C3\u30D7\u306E\u5E95\u306B\u5165\u308C\u3001\u30AB\u30C3\u30D7\u3092\u50BE\u3051\u3066\u56DE\u3057\u306A\u304C\u3089\u5074\u9762\u306B\u30B7\u30ED\u30C3\u30D7\u306E\u300C\u864E\u6A21\u69D8\u300D\u3092\u63CF\u304D\u307E\u3059\u3002\u6C37\u3092\u305F\u3063\u3077\u308A\u5165\u308C\u3001\u51B7\u305F\u3044\u725B\u4E73\u3092\u6CE8\u3044\u3067\u5B8C\u6210\uFF01",
          "ko": "\uB530\uB73B\uD55C \uD751\uB2F9 \uD384\uC744 \uCEF5 \uBC14\uB2E5\uC5D0 \uB2F4\uACE0, \uCEF5\uC744 \uAE30\uC6B8\uC5EC \uB3CC\uB824\uAC00\uBA70 \uBCBD\uBA74\uC5D0 \uD751\uB2F9 \uC2DC\uB7FD \uBB34\uB2AC\uB97C \uB9CC\uB4ED\uB2C8\uB2E4. \uC5BC\uC74C\uC744 \uAC00\uB4DD \uCC44\uC6B0\uACE0 \uCC28\uAC00\uC6B4 \uC0DD\uC6B0\uC720\uB97C \uBD80\uC5B4\uC8FC\uBA74 \uC644\uC131!",
          "vi": "M\xFAc tr\xE2n ch\xE2u \u1EA5m n\xF3ng v\xE0o ly, nghi\xEAng ly l\u0103n tr\xF2n t\u1EA1o v\xE2n h\u1ED5 ph\xE1ch. Th\xEAm \u0111\xE1 vi\xEAn \u0111\u1EA7y mi\u1EC7ng ly r\u1ED3i r\xF3t s\u1EEFa t\u01B0\u01A1i kh\xF4ng \u0111\u01B0\u1EDDng l\u1EA1nh v\xE0o."
        },
        "image": "/images/boba-milk-tea.jpg",
        "durationSeconds": 120
      }
    ],
    "troubleshooting": [
      {
        "id": "ts-bb-1",
        "problem": {
          "zh-TW": "\u9EB5\u5718\u52A0\u6C34\u5F8C\u8B8A\u6210\u4E00\u7058\u6C34\u6F3F\uFF0C\u5B8C\u5168\u7121\u6CD5\u6210\u5718\uFF1F",
          "en": "Why did my dough turn into a liquid puddle instead of a solid ball?",
          "ja": "\u7C89\u306B\u6C34\u5206\u3092\u52A0\u3048\u305F\u3089\u30C9\u30ED\u30C9\u30ED\u306E\u6DB2\u4F53\u306B\u306A\u3063\u3066\u307E\u3068\u307E\u3089\u306A\u3044\uFF1F",
          "ko": "\uBC18\uC8FD\uC774 \uBB49\uCCD0\uC9C0\uC9C0 \uC54A\uACE0 \uBB3C\uCC98\uB7FC \uD758\uB7EC\uB0B4\uB9AC\uB098\uC694?",
          "vi": "T\u1EA1i sao b\u1ED9t b\u1ECB ch\u1EA3y l\u1ECFng kh\xF4ng nh\u1ED3i th\xE0nh kh\u1ED1i \u0111\u01B0\u1EE3c?"
        },
        "cause": {
          "zh-TW": "\u9ED1\u7CD6\u6C34\u6EAB\u5EA6\u4E0D\u5920\u9AD8\uFF08\u672A\u9054\u5230100\xB0C\u6CB8\u9A30\u5373\u4E0B\u7C89\uFF09\uFF0C\u6728\u85AF\u6FB1\u7C89\u672A\u80FD\u5B8C\u6210\u9810\u7CCA\u5316\u3002",
          "en": "The liquid was not at a roaring boil. Tapioca starch needs near 100\xB0C heat to gelatinize.",
          "ja": "\u9ED2\u7CD6\u6C34\u304C\u3057\u3063\u304B\u308A\u6CB8\u9A30\u3057\u3066\u3044\u306A\u304B\u3063\u305F\u305F\u3081\u3001\u30BF\u30D4\u30AA\u30AB\u7C89\u304C\u7CCA\u5316\uFF08\u03B1\u5316\uFF09\u3057\u306A\u304B\u3063\u305F\u306E\u304C\u539F\u56E0\u3067\u3059\u3002",
          "ko": "\uD751\uB2F9\uBB3C\uC774 100\xB0C\uB85C \uD314\uD314 \uB053\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC5D0\uC11C \uC804\uBD84\uC744 \uBD80\uC5B4 \uC804\uBD84\uC774 \uD638\uD654\uB418\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",
          "vi": "N\u01B0\u1EDBc \u0111\u01B0\u1EDDng ch\u01B0a s\xF4i s\xF9ng s\u1EE5c \u0111\xE3 \u0111\u1ED5 b\u1ED9t v\xE0o khi\u1EBFn b\u1ED9t kh\xF4ng ch\xEDn n\u1EDF."
        },
        "solution": {
          "zh-TW": "\u633D\u6551\u6CD5\uFF1A\u5C07\u6574\u934B\u6FD5\u6F3F\u653E\u56DE\u74E6\u65AF\u7210\u4E0A\uFF0C\u958B\u6975\u5C0F\u706B\u5FEB\u901F\u652A\u62CC 15 \u79D2\uFF0C\u6FB1\u7C89\u9047\u71B1\u6703\u77AC\u9593\u62B1\u5718\uFF0C\u7ACB\u523B\u96E2\u706B\u63C9\u634F\uFF01",
          "en": "Rescue Fix: Put saucepan back on ultra-low heat, stir continuously for 15s until it instantly solidifies into elastic dough!",
          "ja": "\u6551\u6E08\u6CD5\uFF1A\u934B\u3092\u6975\u5F31\u706B\u306B\u304B\u3051\u3001\u30D8\u30E9\u3067\u7D20\u65E9\u304F\u6DF7\u305C\u308B\u306815\u79D2\u307B\u3069\u3067\u6025\u306B\u56FA\u307E\u3063\u3066\u307E\u3068\u307E\u308A\u307E\u3059\uFF01",
          "ko": "\uC751\uAE09 \uCC98\uCE58\uFF1A\uB0C4\uBE44\uB97C \uC57D\uBD88\uC5D0 \uC62C\uB9AC\uACE0 15\uCD08\uAC04 \uBE60\uB974\uAC8C \uC800\uC5B4\uC8FC\uBA74 \uC21C\uC2DD\uAC04\uC5D0 \uB369\uC5B4\uB9AC\uB85C \uBB49\uCCD0\uC9D1\uB2C8\uB2E4!",
          "vi": "C\u1EE9u b\u1ED9t: \u0110\u1EB7t l\u1EA1i n\u1ED3i l\xEAn b\u1EBFp l\u1EEDa th\u1EADt nh\u1ECF, \u0111\u1EA3o nhanh 15 gi\xE2y b\u1ED9t s\u1EBD \u0111\u1EB7c qu\xE1nh l\u1EA1i ngay."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u9ED1\u7CD6\u73CD\u73E0\u4E00\u5B9A\u8981\u300C\u73FE\u716E\u73FE\u5403\u300D\uFF0C\u6EAB\u71B1\u7684\u73CD\u73E0\u9047\u5230\u51B0\u9BAE\u5976\u6703\u5728\u5916\u5C64\u5F62\u6210\u4E00\u5C64\u8106\u5F48\u4FDD\u8B77\u819C\uFF0C\u54AC\u4E0B\u53BB\u53C8\u8EDF\u53C8\u7CEF\uFF01",
        "en": "Serve warm pearls fresh! The hot-and-cold shock against iced milk creates that legendary heavenly mouthfeel.",
        "ja": "\u9ED2\u7CD6\u30BF\u30D4\u30AA\u30AB\u306F\u6E29\u304B\u3044\u3046\u3061\u306B\u51B7\u305F\u3044\u30DF\u30EB\u30AF\u3068\u5408\u308F\u305B\u308B\u306E\u304C\u9244\u5247\u3002\u6E29\u5EA6\u5DEE\u3067\u6975\u4E0A\u306E\u98DF\u611F\u304C\u751F\u307E\u308C\u307E\u3059\uFF01",
        "ko": "\uD751\uB2F9 \uD384\uC740 \uAC13 \uB9CC\uB4E4\uC5B4 \uB530\uB73B\uD560 \uB54C \uCC28\uAC00\uC6B4 \uC6B0\uC720\uC640 \uB9CC\uB098\uC57C \uAC89\uC740 \uD0F1\uAE00\uD558\uACE0 \uC18D\uC740 \uBD80\uB4DC\uB7EC\uC6B4 \uADF9\uC0C1\uC758 \uB9DB\uC774 \uB0A9\uB2C8\uB2E4.",
        "vi": "Th\u01B0\u1EDFng th\u1EE9c khi tr\xE2n ch\xE2u c\xF2n \u1EA5m v\u1EDBi s\u1EEFa l\u1EA1nh \u0111\u1EC3 c\u1EA3m nh\u1EADn \u0111\u1ED9 d\u1EBBo m\u1EC1m ho\xE0n h\u1EA3o."
      }
    ]
  },
  {
    "id": "oyster-omelet",
    "slug": "oyster-omelet",
    "title": {
      "zh-TW": "\u591C\u5E02\u62DB\u724C\u86B5\u4ED4\u714E",
      "en": "Taiwanese Night Market Oyster Omelet",
      "ja": "\u591C\u5E02\u540D\u7269 \u53F0\u6E7E\u98A8\u7261\u8823\u30AA\u30E0\u30EC\u30C4\uFF08\u86B5\u4ED4\u714E\uFF09",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5 \uB300\uD45C \uAD74\uC804 (\uC624\uC544\uC820)",
      "vi": "H\xE0u chi\xEAn tr\u1EE9ng s\u1ED1t h\u1ED3ng \u0110\xE0i Loan (Oyster Omelet)"
    },
    "subtitle": {
      "zh-TW": "\u908A\u7DE3\u7126\u8106\u7C89\u6F3F\u8EDFQ\u30FB\u7279\u88FD\u7C89\u7D05\u751C\u8FA3\u91AC",
      "en": "Crispy Lace Edges, Chewy Starch & Special Pink Sauce",
      "ja": "\u30D5\u30C1\u306F\u30AB\u30EA\u30AB\u30EA\u4E2D\u306F\u30E2\u30C1\u30E2\u30C1\uFF06\u7279\u88FD\u30D4\u30F3\u30AF\u7518\u8F9B\u30C0\u30EC",
      "ko": "\uAC00\uC7A5\uC790\uB9AC\uB294 \uBC14\uC0AD \uC18D\uC740 \uCAC0\uB4DD\uFF06\uD2B9\uC81C \uBD84\uD64D \uCE60\uB9AC\uC18C\uC2A4",
      "vi": "Vi\u1EC1n gi\xF2n r\u1EE5m b\u1ED9t dai d\u1EBBo & S\u1ED1t h\u1ED3ng chua ng\u1ECDt th\u1EA7n th\xE1nh"
    },
    "tagline": {
      "zh-TW": "\u7C73\u5176\u6797\u5FC5\u6BD4\u767B\u591C\u5E02\u5C0F\u5403\u5E38\u5BA2\uFF0C\u80A5\u7F8E\u9BAE\u86B5\u8207\u9752\u83DC\u7684\u5B8C\u7F8E\u4EA4\u878D",
      "en": "Michelin Bib Gourmand regular featuring plump ocean oysters",
      "ja": "\u30DF\u30B7\u30E5\u30E9\u30F3\u30FB\u30D3\u30D6\u30B0\u30EB\u30DE\u30F3\u5E38\u9023\u3002\u30D7\u30EA\u30D7\u30EA\u306E\u7261\u8823\u3068\u30B7\u30E3\u30AD\u30B7\u30E3\u30AD\u9752\u83DC\u306E\u5171\u6F14",
      "ko": "\uBBF8\uC290\uB7AD \uBE55\uAD6C\uB974\uB9DD \uB2E8\uACE8 \uBA54\uB274, \uC2F1\uC2F1\uD55C \uAD74\uACFC \uCC44\uC18C\uC758 \uD669\uAE08 \uC870\uD569",
      "vi": "M\xF3n \u0103n \u0111\u1EA1t chu\u1EA9n Michelin Bib Gourmand v\u1EDBi h\xE0u t\u01B0\u01A1i b\xE9o ng\u1EADy"
    },
    "heroImage": "/images/oyster-omelet.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 8,
    "defaultServings": 2,
    "caloriesPerServing": 380,
    "category": "mains",
    "dietaryTags": [
      "classic",
      "glutenFree"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5357\u5B89\u5E73 / \u53F0\u5317",
        "en": "Tainan Anping / Taipei",
        "ja": "\u53F0\u5357\u30FB\u5B89\u5E73 / \u53F0\u5317",
        "ko": "\uD0C0\uC774\uB09C \uC548\uD551 / \uD0C0\uC774\uBCA0\uC774",
        "vi": "\u0110\xE0i Nam An B\xECnh / \u0110\xE0i B\u1EAFc"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u5BE7\u590F\u591C\u5E02 (\u5713\u74B0\u908A\u86B5\u4ED4\u714E)",
          "en": "Ningxia Night Market",
          "ja": "\u5BE7\u590F\u591C\u5E02",
          "ko": "\uB2DD\uC0E4 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Ningxia"
        },
        {
          "zh-TW": "\u58EB\u6797\u591C\u5E02",
          "en": "Shilin Night Market",
          "ja": "\u58EB\u6797\u591C\u5E02",
          "ko": "\uC2A4\uB9B0 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Shilin"
        }
      ],
      "historyStory": {
        "zh-TW": "\u76F8\u50B31661\u5E74\u912D\u6210\u529F\u653B\u6253\u8377\u862D\u4EBA\u6642\u7F3A\u7CE7\uFF0C\u8ECD\u968A\u5C31\u5730\u53D6\u6750\u4EE5\u6CBF\u6D77\u9BAE\u86B5\u3001\u5730\u74DC\u7C89\u6C34\u8207\u96DE\u86CB\u714E\u719F\u88F9\u8179\uFF0C\u6F14\u8B8A\u81F3\u4ECA\u6210\u70BA\u5168\u53F0\u591C\u5E02\u4EE3\u8868\u6027\u7F8E\u98DF\u3002\u9748\u9B42\u7C89\u7D05\u6D77\u5C71\u91AC\u662F\u7531\u756A\u8304\u91AC\u3001\u5473\u564C\u3001\u91AC\u6CB9\u818F\u8207\u7CD6\u8ABF\u88FD\u800C\u6210\u3002",
        "en": "Legend has it that in 1661, General Koxinga faced food shortages while besieging Dutch forces, mixing coastal oysters with sweet potato slurry to feed his army. The signature pink sweet-chili sauce is a blend of ketchup, miso, and soy paste.",
        "ja": "1661\u5E74\u3001\u912D\u6210\u529F\u306E\u8ECD\u968A\u304C\u98DF\u6599\u4E0D\u8DB3\u306E\u969B\u306B\u6CBF\u5CB8\u306E\u7261\u8823\u3068\u3055\u3064\u307E\u3044\u3082\u7C89\u3092\u6C34\u3067\u6EB6\u3044\u3066\u713C\u3044\u305F\u306E\u304C\u8D77\u6E90\u3068\u4F1D\u3048\u3089\u308C\u307E\u3059\u3002\u30D4\u30F3\u30AF\u8272\u306E\u7518\u8F9B\u30C0\u30EC\uFF08\u6D77\u5C71\u91A4\uFF09\u304C\u7F8E\u5473\u3057\u3055\u3092\u5F15\u304D\u7ACB\u3066\u307E\u3059\u3002",
        "ko": "1661\uB144 \uC815\uC131\uACF5 \uC7A5\uAD70 \uAD70\uB300\uC758 \uC2DD\uB7C9 \uBD80\uC871\uC744 \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uD574\uC548\uAC00\uC758 \uAD74\uACFC \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC744 \uC11E\uC5B4 \uBD80\uCCD0 \uBA39\uC740 \uAC83\uC5D0\uC11C \uC720\uB798\uD588\uC2B5\uB2C8\uB2E4. \uD2B9\uC720\uC758 \uB2EC\uCF64\uB9E4\uCF64\uD55C \uBD84\uD64D \uC18C\uC2A4\uAC00 \uC77C\uD488\uC785\uB2C8\uB2E4.",
        "vi": "T\u01B0\u01A1ng truy\u1EC1n n\u0103m 1661 khi thi\u1EBFu l\u01B0\u01A1ng th\u1EF1c, t\u01B0\u1EDBng Tr\u1ECBnh Th\xE0nh C\xF4ng \u0111\xE3 d\xF9ng h\xE0u bi\u1EC3n v\xE0 b\u1ED9t khoai lang tr\xE1ng b\xE1nh nu\xF4i qu\xE2n, t\u1EA1o n\xEAn m\xF3n \u0103n tr\u1EE9 danh."
      },
      "taiwaneseHokkien": "\xD4-\xE1-tsian (\u311B\u02CA \u311A\u02CB \u3110\u3127\u3122)",
      "mandarinPinyin": "K\u0113 Z\u01CEi Ji\u0101n (\u310E\u311C \u3117\u02C7 \u3110\u3127\u3122)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u4E00\u4EFD\u86B5\u4ED4\u714E\uFF0C\u91AC\u591A\u4E00\u9EDE\u83DC\u591A\u4E00\u9EDE"
    },
    "ingredients": [
      {
        "id": "fresh-oysters",
        "name": {
          "zh-TW": "\u65B0\u9BAE\u9BAE\u86B5 (\u751F\u8814\u8089)",
          "en": "Fresh Shucked Oysters",
          "ja": "\u751F\u7261\u8823\uFF08\u52A0\u71B1\u7528\u307E\u305F\u306F\u751F\u98DF\u7528\uFF09",
          "ko": "\uC2F1\uC2F1\uD55C \uC0DD\uAD74",
          "vi": "Ru\u1ED9t h\xE0u t\u01B0\u01A1i s\u1ED1ng"
        },
        "amount": 150,
        "unitMetric": "g",
        "unitUS": "5.3 oz",
        "isKeyFlavor": true,
        "chineseName": "\u9BAE\u86B5",
        "chinesePinyin": "Xi\u0101n k\u0113"
      },
      {
        "id": "sweet-potato-starch-powder",
        "name": {
          "zh-TW": "\u5730\u74DC\u7C89 (\u756A\u85AF\u7C89)",
          "en": "Sweet Potato Starch",
          "ja": "\u3055\u3064\u307E\u3044\u3082\u7C89\uFF08\u5730\u74DC\u7C89\uFF09",
          "ko": "\uACE0\uAD6C\uB9C8 \uC804\uBD84",
          "vi": "B\u1ED9t khoai lang"
        },
        "amount": 30,
        "unitMetric": "g",
        "unitUS": "3 tbsp",
        "isKeyFlavor": true,
        "chineseName": "\u5730\u74DC\u7C89",
        "chinesePinyin": "D\xEC gu\u0101 f\u011Bn"
      },
      {
        "id": "potato-starch",
        "name": {
          "zh-TW": "\u592A\u767D\u7C89 (\u99AC\u9234\u85AF\u6FB1\u7C89)",
          "en": "Potato Starch",
          "ja": "\u7247\u6817\u7C89",
          "ko": "\uAC10\uC790 \uC804\uBD84",
          "vi": "B\u1ED9t khoai t\xE2y / B\u1ED9t n\u0103ng"
        },
        "amount": 10,
        "unitMetric": "g",
        "unitUS": "1 tbsp",
        "chineseName": "\u592A\u767D\u7C89",
        "chinesePinyin": "T\xE0i b\xE1i f\u011Bn"
      },
      {
        "id": "eggs",
        "name": {
          "zh-TW": "\u65B0\u9BAE\u96DE\u86CB",
          "en": "Fresh Eggs",
          "ja": "\u5375",
          "ko": "\uB2EC\uAC40",
          "vi": "Tr\u1EE9ng g\xE0 t\u01B0\u01A1i"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 pieces",
        "chineseName": "\u96DE\u86CB",
        "chinesePinyin": "J\u012B d\xE0n"
      },
      {
        "id": "bok-choy",
        "name": {
          "zh-TW": "\u5C0F\u767D\u83DC (\u6216\u833C\u84BF / \u8C46\u82BD\u83DC)",
          "en": "Bok Choy or Crown Daisy (Tong Ho)",
          "ja": "\u30C1\u30F3\u30B2\u30F3\u83DC \u307E\u305F\u306F \u6625\u83CA",
          "ko": "\uCCAD\uACBD\uCC44 \uB610\uB294 \uC465\uAC13",
          "vi": "C\u1EA3i th\xECa ho\u1EB7c rau c\xFAc t\u1EA7n"
        },
        "amount": 100,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "chineseName": "\u5C0F\u767D\u83DC",
        "chinesePinyin": "Xi\u01CEo b\xE1i c\xE0i"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u8ABF\u88FD\u9EC3\u91D1\u6BD4\u4F8B\u7C89\u6F3F\u8207\u7279\u88FD\u91AC\u6C41",
          "en": "Mix Starch Batter & Special Pink Sauce",
          "ja": "\u9EC4\u91D1\u7C89\u6F3F\u3068\u7279\u88FD\u30BD\u30FC\u30B9\u3092\u6E96\u5099\u3059\u308B",
          "ko": "\uD669\uAE08 \uC804\uBD84\uBB3C \uBC0F \uD2B9\uC81C \uC18C\uC2A4 \uB9CC\uB4E4\uAE30",
          "vi": "Pha b\u1ED9t v\xE0ng v\xE0 n\u1EA5u s\u1ED1t h\u1ED3ng"
        },
        "instruction": {
          "zh-TW": "\u7897\u4E2D\u6DF7\u5408\u5730\u74DC\u7C89 30g\u3001\u592A\u767D\u7C89 10g\u3001\u6C34 100ml\u3001\u5C11\u8A31\u9E7D\u8207\u767D\u80E1\u6912\u652A\u52FB\u5099\u7528\u3002\n\u3010\u91AC\u6C41\u8ABF\u88FD\u3011\uFF1A\u5C0F\u934B\u4E2D\u5C07\u756A\u8304\u91AC 2\u5319\u3001\u5473\u564C 1\u8336\u5319\u3001\u7CD6 1.5\u5319\u3001\u91AC\u6CB9\u818F 1\u5319\u8207\u6C34 80ml \u716E\u6EFE\uFF0C\u52FE\u8584\u82A1\u5099\u7528\u3002",
          "en": "Mix 30g sweet potato starch, 10g potato starch, 100ml water, pinch of salt. For Sauce: Boil 2 tbsp ketchup, 1 tsp miso, 1.5 tbsp sugar, 1 tbsp soy paste, and 80ml water. Thicken with starch slurry.",
          "ja": "\u30DC\u30A6\u30EB\u306B\u30B5\u30C4\u30DE\u30A4\u30E2\u7C8930g\u3001\u7247\u6817\u7C8910g\u3001\u6C34100ml\u3001\u5869\u80E1\u6912\u5C11\u3005\u3092\u6DF7\u305C\u3066\u304A\u304D\u307E\u3059\u3002\u30BD\u30FC\u30B9\uFF1A\u30B1\u30C1\u30E3\u30C3\u30D7\u5927\u3055\u30582\u3001\u5473\u564C\u5C0F\u3055\u30581\u3001\u7802\u7CD6\u5927\u3055\u30581.5\u3001\u6C3480ml\u3092\u4E00\u716E\u7ACB\u3061\u3055\u305B\u6C34\u6EB6\u304D\u7247\u6817\u7C89\u3067\u3068\u308D\u307F\u3092\u3064\u3051\u307E\u3059\u3002",
          "ko": "\uBCFC\uC5D0 \uACE0\uAD6C\uB9C8\uC804\uBD84 30g, \uAC10\uC790\uC804\uBD84 10g, \uBB3C 100ml, \uC18C\uAE08 \uD6C4\uCD94\uB97C \uC11E\uC5B4\uB461\uB2C8\uB2E4. \uC18C\uC2A4\uFF1A\uCF00\uCCA9 2\uC2A4\uD47C, \uB41C\uC7A5 1\uC791\uC740\uC220, \uC124\uD0D5 1.5\uC2A4\uD47C, \uBB3C 80ml\uB97C \uB053\uC5EC \uC804\uBD84\uBB3C\uB85C \uAC78\uCB49\uD558\uAC8C \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "Pha 30g b\u1ED9t khoai lang, 10g b\u1ED9t n\u0103ng, 100ml n\u01B0\u1EDBc. S\u1ED1t: \u0110un s\xF4i 2 th\xECa ketchup, 1 th\xECa cafe miso, 1.5 th\xECa \u0111\u01B0\u1EDDng, 80ml n\u01B0\u1EDBc v\xE0 l\xE0m s\u1EC7t b\u1EB1ng ch\xFAt b\u1ED9t n\u0103ng."
        },
        "image": "/images/oyster-omelet-step1.jpg",
        "durationSeconds": 300
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u71B1\u934B\u714E\u86B5\u4ED4\u8207\u6DCB\u4E0B\u7C89\u6F3F",
          "en": "Sear Oysters & Pour Batter",
          "ja": "\u7261\u8823\u3092\u30B5\u30C3\u3068\u7092\u3081\u3001\u751F\u5730\u3092\u56DE\u3057\u5165\u308C\u308B",
          "ko": "\uAD74 \uAD7D\uAE30 \uBC0F \uC804\uBD84 \uBC18\uC8FD \uBD93\uAE30",
          "vi": "\xC1p ch\u1EA3o h\xE0u v\xE0 r\u01B0\u1EDBi b\u1ED9t"
        },
        "instruction": {
          "zh-TW": "\u5E73\u5E95\u934B\u5012\u5165 2 \u5927\u5319\u6CB9\u5927\u706B\u71D2\u71B1\uFF0C\u653E\u5165\u6D17\u6DE8\u64E6\u4E7E\u7684\u86B5\u4ED4\u714E 30 \u79D2\u81F3\u8868\u9762\u7DCA\u7E2E\u5FAE\u51FA\u9999\u6C23\u3002\u7ACB\u523B\u5C07\u7C89\u6F3F\u518D\u6B21\u652A\u52FB\uFF0C\u7531\u5916\u5411\u5167\u5747\u52FB\u6DCB\u5728\u86B5\u4ED4\u4E0A\u65B9\u3002",
          "en": "Heat 2 tbsp oil in a flat skillet over high heat. Add oysters and sear for 30s. Restir the starch slurry and pour evenly around and over the sizzling oysters.",
          "ja": "\u30D5\u30E9\u30A4\u30D1\u30F3\u306B\u6CB9\u5927\u3055\u30582\u3092\u5F37\u706B\u3067\u71B1\u3057\u3001\u6C34\u6C17\u3092\u5207\u3063\u305F\u7261\u8823\u3092\u5165\u308C\u306630\u79D2\u30B5\u30C3\u3068\u7092\u3081\u307E\u3059\u3002\u3088\u304F\u6DF7\u305C\u76F4\u3057\u305F\u751F\u5730\u3092\u4E00\u6C17\u306B\u56DE\u3057\u5165\u308C\u307E\u3059\u3002",
          "ko": "\uD32C\uC5D0 \uC2DD\uC6A9\uC720 2\uD070\uC220\uC744 \uB450\uB974\uACE0 \uAD74\uC744 \uB123\uC5B4 30\uCD08\uAC04 \uBE60\uB974\uAC8C \uBCF6\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC798 \uC800\uC740 \uC804\uBD84\uBB3C\uC744 \uAD74 \uC704\uB85C \uB465\uAE00\uAC8C \uB458\uB7EC \uBD80\uC5B4\uC90D\uB2C8\uB2E4.",
          "vi": "\u0110un n\xF3ng 2 th\xECa d\u1EA7u, cho h\xE0u v\xE0o \u0111\u1EA3o nhanh 30 gi\xE2y. Khu\u1EA5y \u0111\u1EC1u b\u1ED9t r\u1ED3i r\u01B0\u1EDBi tr\xF2n ph\u1EE7 k\xEDn h\xE0u."
        },
        "image": "/images/oyster-omelet-step2.jpg",
        "durationSeconds": 90
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u6253\u5165\u96DE\u86CB\u8207\u92EA\u4E0A\u9BAE\u5AE9\u9752\u83DC",
          "en": "Crack Egg & Lay Fresh Greens",
          "ja": "\u5375\u3092\u5272\u308A\u307B\u3050\u3057\u3001\u9752\u83DC\u3092\u305F\u3063\u3077\u308A\u4E57\u305B\u308B",
          "ko": "\uB2EC\uAC40 \uD130\uB728\uB9AC\uAE30 \uBC0F \uCC44\uC18C \uC5B9\uAE30",
          "vi": "\u0110\u1EADp tr\u1EE9ng v\xE0 r\u1EA3i rau xanh"
        },
        "instruction": {
          "zh-TW": "\u7576\u7C89\u6F3F\u908A\u7DE3\u8B8A\u900F\u660E\u5FAE\u8106\u6642\uFF0C\u6253\u5165\u4E00\u9846\u96DE\u86CB\u4E26\u7528\u934B\u93DF\u5283\u7834\u86CB\u9EC3\u63A8\u52FB\u3002\u92EA\u4E0A\u6EFF\u6EFF\u7684\u5C0F\u767D\u83DC\u6BB5\u3002",
          "en": "When the batter edges turn translucent and crisp, crack an egg directly on top, puncture yolk and spread. Cover generously with chopped greens.",
          "ja": "\u751F\u5730\u306E\u30D5\u30C1\u304C\u900F\u660E\u306B\u900F\u304D\u901A\u3063\u3066\u304D\u305F\u3089\u3001\u5375\u3092\u5272\u308A\u843D\u3068\u3057\u3066\u9EC4\u8EAB\u3092\u5D29\u3057\u3066\u5E83\u3052\u307E\u3059\u3002\u305D\u306E\u4E0A\u306B\u305F\u3063\u3077\u308A\u306E\u9752\u83DC\u3092\u4E57\u305B\u307E\u3059\u3002",
          "ko": "\uBC18\uC8FD \uAC00\uC7A5\uC790\uB9AC\uAC00 \uD22C\uBA85\uD574\uC9C0\uBA74 \uB2EC\uAC40\uC744 \uAE68\uB728\uB824 \uB178\uB978\uC790\uB97C \uD130\uB728\uB824 \uD3BC\uCE58\uACE0, \uC704\uC5D0 \uC370\uC5B4\uB454 \uCCAD\uACBD\uCC44\uB97C \uB4EC\uBFCD \uC62C\uB9BD\uB2C8\uB2E4.",
          "vi": "Khi m\xE9p b\u1ED9t trong l\u1EA1i, \u0111\u1EADp tr\u1EE9ng g\xE0 d\u1EB1m v\u1EE1 l\xF2ng \u0111\u1ECF thoa \u0111\u1EC1u, r\u1EA3i ng\u1EADp c\u1EA3i th\xECa l\xEAn tr\xEAn."
        },
        "image": "/images/oyster-omelet-step3.jpg",
        "durationSeconds": 90
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u5E25\u6C23\u7FFB\u9762\uFF01\u714E\u81F3\u96D9\u9762\u91D1\u9EC3\u8106\u76AE",
          "en": "The Flip & Crisping the Crust",
          "ja": "\u601D\u3044\u5207\u3063\u3066\u3072\u3063\u304F\u308A\u8FD4\u3057\u3001\u4E21\u9762\u3092\u30AB\u30EA\u30C3\u3068\u713C\u304F",
          "ko": "\uB4A4\uC9D1\uAE30 \uBC0F \uC591\uBA74 \uB178\uB987\uD558\uAC8C \uAD7D\uAE30",
          "vi": "L\u1EADt m\u1EB7t b\xE1nh chi\xEAn gi\xF2n \u0111\u1EC1u hai m\u1EB7t"
        },
        "instruction": {
          "zh-TW": "\u7528\u934B\u93DF\u7531\u4E0B\u65B9\u63A8\u52D5\uFF0C\u4FD0\u843D\u7FFB\u9762\uFF01\u8F49\u4E2D\u5927\u706B\u7E7C\u7E8C\u714E\u7D04 1~2 \u5206\u9418\uFF0C\u8B93\u9752\u83DC\u65B7\u751F\u3001\u5E95\u90E8\u7684\u7C89\u6F3F\u908A\u7DE3\u5448\u73FE\u8A98\u4EBA\u7684\u91D1\u9EC3\u7126\u8106\u3002",
          "en": "Slide spatula underneath and flip boldly in one motion! Cook for 1-2 more mins until greens wilt and the bottom crust becomes golden and crisp.",
          "ja": "\u30D5\u30E9\u30A4\u8FD4\u3057\u3092\u4E00\u6C17\u306B\u5DEE\u3057\u8FBC\u307F\u3001\u601D\u3044\u5207\u3063\u3066\u88CF\u8FD4\u3057\u307E\u3059\uFF01\u4E2D\u5F37\u706B\u30671\u301C2\u5206\u713C\u304D\u3001\u91CE\u83DC\u306B\u706B\u3092\u901A\u3057\u5E95\u9762\u3092\u30AB\u30EA\u30AB\u30EA\u306B\u4ED5\u4E0A\u3052\u307E\u3059\u3002",
          "ko": "\uB4A4\uC9D1\uAC1C\uB97C \uAE4A\uC219\uC774 \uB123\uC5B4 \uD55C \uBC88\uC5D0 \uCC29 \uB4A4\uC9D1\uC5B4\uC90D\uB2C8\uB2E4! \uC911\uAC15\uBD88\uC5D0\uC11C 1~2\uBD84\uAC04 \uB354 \uAD6C\uC6CC \uCC44\uC18C \uC228\uC744 \uC8FD\uC774\uACE0 \uAC00\uC7A5\uC790\uB9AC\uB97C \uBC14\uC0AD\uD558\uAC8C \uAD7D\uC2B5\uB2C8\uB2E4.",
          "vi": "Lu\u1ED3n x\u1EBBng l\u1EADt d\u1EE9t kho\xE1t m\u1ED9t l\u1EA7n. Chi\xEAn l\u1EEDa v\u1EEBa 1-2 ph\xFAt cho rau ch\xEDn v\xE0 vi\u1EC1n b\u1ED9t gi\xF2n x\xE9m v\xE0ng."
        },
        "image": "/images/oyster-omelet-step4.jpg",
        "durationSeconds": 120
      },
      {
        "stepNumber": 5,
        "title": {
          "zh-TW": "\u8D77\u934B\u6DCB\u4E0A\u6EFF\u6EFF\u7C89\u7D05\u751C\u8FA3\u91AC\uFF01",
          "en": "Plate & Drown in Pink Sauce",
          "ja": "\u304A\u76BF\u306B\u76DB\u308A\u3001\u7279\u88FD\u30D4\u30F3\u30AF\u3060\u308C\u3092\u305F\u3063\u3077\u308A\u304B\u3051\u3066\u5B8C\u6210\uFF01",
          "ko": "\uC811\uC2DC\uC5D0 \uB2F4\uACE0 \uBD84\uD64D \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uBFCC\uB824 \uC644\uC131!",
          "vi": "Cho ra \u0111\u0129a v\xE0 r\u01B0\u1EDBi ng\u1EADp s\u1ED1t h\u1ED3ng \u0111\u1EB7c tr\u01B0ng!"
        },
        "instruction": {
          "zh-TW": "\u6ED1\u5165\u5927\u76E4\u4E2D\uFF0C\u6DCB\u4E0A 3 \u5927\u5319\u6EAB\u71B1\u7684\u7279\u88FD\u6D77\u5C71\u751C\u8FA3\u91AC\uFF0C\u8D81\u71B1\u7528\u7B77\u5B50\u6495\u958B\u62C9\u7D72\u4EAB\u7528\uFF01",
          "en": "Slide onto a large plate. Generously ladle warm pink sweet chili sauce all over. Dig in while sizzling hot!",
          "ja": "\u304A\u76BF\u306B\u6ED1\u3089\u305B\u308B\u3088\u3046\u306B\u76DB\u308A\u4ED8\u3051\u3001\u6E29\u3081\u305F\u7279\u88FD\u3060\u308C\u3092\u305F\u3063\u3077\u308A\u56DE\u3057\u304B\u3051\u3066\u71B1\u3005\u306E\u3046\u3061\u306B\u53EC\u3057\u4E0A\u304C\u308C\uFF01",
          "ko": "\uC811\uC2DC\uC5D0 \uB2F4\uACE0 \uB530\uB73B\uD55C \uD2B9\uC81C \uBD84\uD64D \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uB07C\uC5B9\uC5B4 \uBC14\uB85C \uB4DC\uC138\uC694!",
          "vi": "Tr\u01B0\u1EE3t ra \u0111\u0129a l\u1EDBn, r\u01B0\u1EDBi \u0111\u1EABm 3 mu\u1ED7ng s\u1ED1t h\u1ED3ng chua ng\u1ECDt \u1EA5m n\xF3ng v\xE0 th\u01B0\u1EDFng th\u1EE9c ngay khi c\xF2n n\xF3ng h\u1ED5i."
        },
        "image": "/images/oyster-omelet.jpg",
        "durationSeconds": 30
      }
    ],
    "troubleshooting": [
      {
        "id": "ts-oy-1",
        "problem": {
          "zh-TW": "\u7FFB\u9762\u6642\u7C89\u76AE\u7834\u88C2\u788E\u6389\u3001\u86B5\u4ED4\u6563\u958B\uFF1F",
          "en": "Why does the omelet break apart when flipping?",
          "ja": "\u3072\u3063\u304F\u308A\u8FD4\u3059\u6642\u306B\u751F\u5730\u304C\u7834\u308C\u3066\u30DC\u30ED\u30DC\u30ED\u306B\u306A\u3063\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uB4A4\uC9D1\uC744 \uB54C \uBC18\uC8FD\uC774 \uCC22\uC5B4\uC9C0\uACE0 \uAD74\uC774 \uD769\uC5B4\uC9C0\uB098\uC694?",
          "vi": "T\u1EA1i sao b\xE1nh b\u1ECB v\u1EE1 n\xE1t khi l\u1EADt?"
        },
        "cause": {
          "zh-TW": "\u592A\u65E9\u7FFB\u9762\uFF08\u5E95\u90E8\u7C89\u6F3F\u5C1A\u672A\u900F\u660E\u51DD\u56FA\u6210\u819C\uFF09\uFF0C\u6216\u8005\u934B\u5B50\u6CB9\u4E0D\u5920\u71B1\u3002",
          "en": "Flipped too early before the bottom starch fully set into a translucent cohesive sheet.",
          "ja": "\u5E95\u306E\u751F\u5730\u304C\u307E\u3060\u56FA\u307E\u308A\u304D\u3063\u3066\u3044\u306A\u3044\u3046\u3061\u306B\u89E6\u3063\u3066\u3057\u307E\u3063\u305F\u306E\u304C\u539F\u56E0\u3067\u3059\u3002",
          "ko": "\uBC14\uB2E5\uC758 \uC804\uBD84\uC774 \uD22C\uBA85\uD558\uAC8C \uAD73\uC5B4 \uB9C9\uC744 \uD615\uC131\uD558\uAE30 \uC804\uC5D0 \uB108\uBB34 \uC77C\uCC0D \uB4A4\uC9D1\uC5C8\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "L\u1EADt b\xE1nh qu\xE1 s\u1EDBm khi l\u1EDBp b\u1ED9t \u0111\xE1y ch\u1EA3o ch\u01B0a k\u1ECBp \u0111\xF4ng k\u1EBFt th\xE0nh m\xE0ng dai."
        },
        "solution": {
          "zh-TW": "\u770B\u5230\u908A\u7DE3\u714E\u51FA\u91D1\u9EC3\u5FAE\u6372\u8106\u908A\u3001\u4E2D\u9593\u5B8C\u5168\u900F\u660E\u6642\uFF0C\u7528\u5927\u5E73\u93DF\u4E00\u6C23\u5475\u6210\u4FD0\u843D\u7FFB\u9762\uFF01",
          "en": "Wait until edges are golden crispy and center is fully translucent, then slide spatula deeply and flip in one swift movement.",
          "ja": "\u30D5\u30C1\u304C\u30AB\u30EA\u30C3\u3068\u3057\u3066\u5168\u4F53\u304C\u900F\u304D\u901A\u308B\u307E\u3067\u3058\u3063\u304F\u308A\u5F85\u3063\u3066\u304B\u3089\u3001\u4E00\u6C17\u306B\u88CF\u8FD4\u3057\u307E\u3057\u3087\u3046\uFF01",
          "ko": "\uAC00\uC7A5\uC790\uB9AC\uAC00 \uBC14\uC0AD\uD558\uAC8C \uC775\uACE0 \uC804\uCCB4\uAC00 \uD22C\uBA85\uD574\uC84C\uC744 \uB54C \uB4A4\uC9D1\uAC1C\uB97C \uAE4A\uC219\uC774 \uB123\uC5B4 \uACFC\uAC10\uD558\uAC8C \uB4A4\uC9D1\uC73C\uC138\uC694.",
          "vi": "Ch\u1EDD \u0111\u1EBFn khi vi\u1EC1n gi\xF2n v\xE0ng v\xE0 gi\u1EEFa trong su\u1ED1t, d\xF9ng x\u1EBBng to l\u1EADt d\u1EE9t kho\xE1t."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u8ABF\u7C89\u6F3F\u6642\u52A0\u5165\u5C11\u8A31\u592A\u767D\u7C89\uFF08\u6BD4\u4F8B 3:1\uFF09\uFF0C\u80FD\u8B93\u86B5\u4ED4\u714E\u5916\u8106\u5167\u8EDFQ\uFF0C\u65E2\u4E0D\u9ECF\u721B\u4E5F\u4E0D\u6B7B\u786C\uFF01",
        "en": "Mixing sweet potato starch with potato starch (3:1) gives the optimal balance of crispy lace edge and chewy center.",
        "ja": "\u30B5\u30C4\u30DE\u30A4\u30E2\u7C89\u306B\u5C11\u91CF\u306E\u7247\u6817\u7C89\uFF083:1\uFF09\u3092\u6DF7\u305C\u308B\u3068\u3001\u5916\u306F\u30AB\u30EA\u30C3\u3001\u4E2D\u306F\u30E2\u30C1\u30E2\u30C1\u306E\u7D76\u5999\u306A\u98DF\u611F\u306B\u306A\u308A\u307E\u3059\uFF01",
        "ko": "\uACE0\uAD6C\uB9C8\uC804\uBD84\uACFC \uAC10\uC790\uC804\uBD84\uC744 3:1 \uBE44\uC728\uB85C \uC11E\uC5B4\uC8FC\uBA74 \uBC14\uC0AD\uD568\uACFC \uCAC0\uB4DD\uD568\uC774 \uB3D9\uC2DC\uC5D0 \uC0B4\uC544\uB0A9\uB2C8\uB2E4.",
        "vi": "Pha b\u1ED9t khoai lang v\u1EDBi b\u1ED9t n\u0103ng theo t\u1EF7 l\u1EC7 3:1 \u0111\u1EC3 \u0111\u1EA1t \u0111\u1ED9 gi\xF2n ngo\xE0i d\u1EBBo trong \u0111\u1EC9nh nh\u1EA5t."
      }
    ]
  },
  {
    "id": "sweet-potato-balls",
    "slug": "sweet-potato-balls",
    "title": {
      "zh-TW": "\u591C\u5E02\u5DE8\u578B\u7A7A\u5FC3\u5730\u74DC\u7403",
      "en": "Taiwanese Hollow QQ Sweet Potato Balls",
      "ja": "\u591C\u5E02\u540D\u7269 \u5DE8\u5927\u4E2D\u7A7A\u3055\u3064\u307E\u3044\u3082\u30DC\u30FC\u30EB\uFF08\u5730\u74DC\u7403\uFF09",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5 \uC18D \uBE48 \uACE0\uAD6C\uB9C8\uBCFC (\uB514\uACFC\uCD94)",
      "vi": "B\xE1nh khoai lang vi\xEAn r\u1ED7ng ru\u1ED9t gi\xF2n r\u1EE5m (QQ Balls)"
    },
    "subtitle": {
      "zh-TW": "\u9023\u7E8C\u6309\u58D3\u6392\u6C23\u81A8\u8139\u30FB\u5916\u6975\u9165\u8106\u5167\u6975Q\u5F48",
      "en": "The Repetitive Pressing Technique for Giant Puffy Spheres",
      "ja": "\u4F55\u5EA6\u3082\u6CB9\u306E\u4E2D\u3067\u62BC\u3057\u6F70\u3057\u3066\u81A8\u3089\u307E\u305B\u308B\uFF01\u5916\u30AB\u30EA\u4E2D\u30E2\u30C1\u306E\u6975\u4E0A\u98DF\u611F",
      "ko": "\uC5F0\uC18D \uAFB9\uAFB9 \uB204\uB974\uAE30 \uAE30\uBC95\uC73C\uB85C \uD48D\uC120\uCC98\uB7FC \uBD80\uD480\uB9AC\uB294 \uBC14\uC0AD \uCAC0\uB4DD \uC2A4\uB0B5",
      "vi": "K\u1EF9 thu\u1EADt \xE9p d\u1EA7u li\xEAn ho\xE0n gi\xFAp b\xE1nh n\u1EDF ph\u1ED3ng gi\xF2n r\u1ED7ng ru\u1ED9t"
    },
    "tagline": {
      "zh-TW": "\u591C\u5E02\u6392\u968A\u4EBA\u624B\u4E00\u5305\u7684\u7642\u7652\u5C0F\u5403\uFF0C\u638C\u63E1\u9023\u7E8C\u6309\u58D3\u7684\u81A8\u8139\u9B54\u6CD5",
      "en": "The most addictive night market snack with a magical puffing technique",
      "ja": "\u591C\u5E02\u3067\u884C\u5217\u304C\u7D76\u3048\u306A\u3044\u56FD\u6C11\u7684\u4EBA\u6C17\u30B9\u30A4\u30FC\u30C4\u3002\u81A8\u3089\u3080\u9B54\u6CD5\u306E\u98DF\u611F",
      "ko": "\uC904 \uC11C\uC11C \uBA39\uB294 \uB300\uB9CC \uC57C\uC2DC\uC7A5\uC758 \uD790\uB9C1 \uAC04\uC2DD, \uD33D\uCC3D\uC758 \uB9C8\uBC95",
      "vi": "M\xF3n \u0103n v\u1EB7t g\xE2y nghi\u1EC7n nh\u1EA5t m\u1ECDi ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan"
    },
    "heroImage": "/images/sweet-potato-balls.jpg",
    "difficulty": "hard",
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 15,
    "defaultServings": 3,
    "caloriesPerServing": 280,
    "category": "desserts",
    "dietaryTags": [
      "vegan",
      "vegetarian",
      "halal",
      "glutenFree"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u4E2D / \u9AD8\u96C4",
        "en": "Taichung / Kaohsiung",
        "ja": "\u53F0\u4E2D / \u9AD8\u96C4",
        "ko": "\uD0C0\uC774\uC911 / \uAC00\uC624\uC29D",
        "vi": "\u0110\xE0i Trung / Cao H\xF9ng"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02 (\u5DE8\u7121\u9738\u5730\u74DC\u7403)",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        },
        {
          "zh-TW": "\u745E\u8C50\u591C\u5E02",
          "en": "Ruifeng Night Market",
          "ja": "\u745E\u8C4A\u591C\u5E02",
          "ko": "\uB8E8\uC774\uD391 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Ruifeng"
        }
      ],
      "historyStory": {
        "zh-TW": "\u5730\u74DC\u7403\uFF08\u53C8\u7A31QQ\u86CB\uFF09\u662F\u53F0\u7063\u591C\u5E02\u6700\u53D7\u6B61\u8FCE\u7684\u624B\u5DE5\u5C0F\u5403\u4E4B\u4E00\u3002\u8001\u95C6\u62FF\u8457\u5927\u6F0F\u52FA\u5728\u71B1\u6CB9\u4E2D\u4E0D\u65B7\u7528\u529B\u6309\u58D3\u525B\u70B8\u71B1\u7684\u751F\u80DA\uFF0C\u5229\u7528\u7A7A\u6C23\u9032\u51FA\u8B93\u5730\u74DC\u7403\u5982\u6C23\u7403\u822C\u8D8A\u58D3\u8D8A\u5927\u3001\u5F62\u6210\u5916\u6BBC\u6975\u8106\u5167\u90E8\u7A7A\u5FC3\u7684\u795E\u5947\u53E3\u611F\u3002",
        "en": "A mesmerizing Taiwanese night market specialty where vendors use large perforated skimmers to repeatedly mash the frying dough balls against the wok. This pumps air inside, expanding them into giant hollow, crispy golden globes.",
        "ja": "\u591C\u5E02\u306E\u5C4B\u53F0\u3067\u8077\u4EBA\u304C\u5927\u304D\u306A\u7A74\u3042\u304D\u304A\u7389\u3067\u4F55\u5EA6\u3082\u30AE\u30E5\u30C3\u30AE\u30E5\u30C3\u3068\u62BC\u3057\u6F70\u3057\u306A\u304C\u3089\u63DA\u3052\u308B\u306E\u304C\u7279\u5FB4\u3002\u7A7A\u6C17\u304C\u5165\u3063\u3066\u98A8\u8239\u306E\u3088\u3046\u306B\u81A8\u3089\u307F\u3001\u5916\u306F\u30B5\u30AF\u30B5\u30AF\u3001\u4E2D\u306F\u7A7A\u6D1E\u3067\u30E2\u30C1\u30E2\u30C1\u306B\u306A\u308A\u307E\u3059\u3002",
        "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5\uC5D0\uC11C \uAD6D\uC790\uB85C \uD280\uAE40\uC744 \uAFB9\uAFB9 \uB204\uB974\uBA70 \uD280\uAE30\uB294 \uBAA8\uC2B5\uC73C\uB85C \uC720\uBA85\uD55C \uAC04\uC2DD\uC785\uB2C8\uB2E4. \uB204\uB97C\uC218\uB85D \uACF5\uAE30\uAC00 \uB4E4\uC5B4\uAC00 \uD48D\uC120\uCC98\uB7FC \uBD80\uD480\uC5B4 \uC62C\uB77C \uAC89\uC740 \uBC14\uC0AD\uD558\uACE0 \uC18D\uC740 \uD145 \uBE48 \uCAC4\uAE43\uD55C \uC2DD\uAC10\uC774 \uC644\uC131\uB429\uB2C8\uB2E4.",
        "vi": "\u0110\u1EB7c s\u1EA3n ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan v\u1EDBi k\u1EF9 thu\u1EADt d\xF9ng v\xE1 th\u1EE7ng \xE9p li\xEAn t\u1EE5c trong ch\u1EA3o d\u1EA7u \u0111\u1EC3 b\xE1nh n\u1EDF ph\u1ED3ng to nh\u01B0 qu\u1EA3 b\xF3ng gi\xF2n r\u1EE5m."
      },
      "taiwaneseHokkien": "Han-ts\xFB-ki\xFB (\u310F\u3122 \u3110\u3127\u02CA \u310D\u3127\u3128\u02CA)",
      "mandarinPinyin": "D\xECgu\u0101qi\xFA (\u3109\u3127\u02CB \u310D\u3128\u311A \u3111\u3127\u3121\u02CA)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u5927\u5305\u5730\u74DC\u7403\u4E00\u4EFD\uFF0C\u9EC3\u8272\u7D2B\u8272\u90FD\u8981"
    },
    "ingredients": [
      {
        "id": "sweet-potato",
        "name": {
          "zh-TW": "\u9EC3\u8089\u6216\u7D05\u8089\u5730\u74DC (\u53BB\u76AE\u84B8\u719F)",
          "en": "Yellow/Orange Sweet Potato (Steamed & Peeled)",
          "ja": "\u3055\u3064\u307E\u3044\u3082\uFF08\u76AE\u3092\u3080\u3044\u3066\u84B8\u3057\u305F\u3082\u306E\uFF09",
          "ko": "\uACE0\uAD6C\uB9C8 (\uAECD\uC9C8 \uBC97\uACA8 \uCC10 \uAC83)",
          "vi": "Khoai lang v\xE0ng ho\u1EB7c t\xEDm (H\u1EA5p ch\xEDn nghi\u1EC1n nhuy\u1EC5n)"
        },
        "amount": 250,
        "unitMetric": "g",
        "unitUS": "9 oz",
        "isKeyFlavor": true,
        "chineseName": "\u5730\u74DC",
        "chinesePinyin": "D\xEC gu\u0101"
      },
      {
        "id": "tapioca-starch-spb",
        "name": {
          "zh-TW": "\u6728\u85AF\u7C89 (\u6A39\u85AF\u7C89)",
          "en": "Tapioca Starch (Cassava Flour)",
          "ja": "\u30BF\u30D4\u30AA\u30AB\u7C89\uFF08\u6A39\u85AF\u7C89\uFF09",
          "ko": "\uD0C0\uD53C\uC624\uCE74 \uC804\uBD84",
          "vi": "B\u1ED9t n\u0103ng"
        },
        "amount": 100,
        "unitMetric": "g",
        "unitUS": "0.7 cup",
        "isKeyFlavor": true,
        "chineseName": "\u6728\u85AF\u7C89",
        "chinesePinyin": "M\xF9 sh\u01D4 f\u011Bn"
      },
      {
        "id": "sugar-spb",
        "name": {
          "zh-TW": "\u7D30\u767D\u7802\u7CD6",
          "en": "Granulated Sugar",
          "ja": "\u4E0A\u767D\u7CD6\u307E\u305F\u306F\u30B0\u30E9\u30CB\u30E5\u30FC\u7CD6",
          "ko": "\uBC31\uC124\uD0D5",
          "vi": "\u0110\u01B0\u1EDDng c\xE1t tr\u1EAFng"
        },
        "amount": 40,
        "unitMetric": "g",
        "unitUS": "3 tbsp",
        "chineseName": "\u7D30\u7802\u7CD6",
        "chinesePinyin": "X\xEC sh\u0101 t\xE1ng"
      },
      {
        "id": "frying-oil",
        "name": {
          "zh-TW": "\u8010\u9AD8\u6EAB\u690D\u7269\u6CB9 (\u6CB9\u70B8\u7528)",
          "en": "High-Heat Frying Oil",
          "ja": "\u63DA\u3052\u6CB9\uFF08\u30B5\u30E9\u30C0\u6CB9\u307E\u305F\u306F\u7C73\u6CB9\uFF09",
          "ko": "\uC2DD\uC6A9\uC720 (\uD280\uAE40\uC6A9)",
          "vi": "D\u1EA7u \u0103n chi\xEAn r\xE1n"
        },
        "amount": 500,
        "unitMetric": "ml",
        "unitUS": "2 cups",
        "chineseName": "\u98DF\u7528\u6CB9",
        "chinesePinyin": "Sh\xED y\xF2ng y\xF3u"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u84B8\u719F\u5730\u74DC\u4E26\u8D81\u71B1\u58D3\u6CE5\u62CC\u7CD6",
          "en": "Steam Sweet Potato & Mash with Sugar",
          "ja": "\u3055\u3064\u307E\u3044\u3082\u3092\u84B8\u3057\u3066\u71B1\u3044\u3046\u3061\u306B\u7802\u7CD6\u3068\u30DE\u30C3\u30B7\u30E5\u3059\u308B",
          "ko": "\uACE0\uAD6C\uB9C8 \uCC0C\uAE30 \uBC0F \uB728\uAC70\uC6B8 \uB54C \uC124\uD0D5 \uB123\uACE0 \uC73C\uAE68\uAE30",
          "vi": "H\u1EA5p ch\xEDn khoai lang v\xE0 nghi\u1EC1n nhuy\u1EC5n v\u1EDBi \u0111\u01B0\u1EDDng"
        },
        "instruction": {
          "zh-TW": "\u5730\u74DC\u53BB\u76AE\u5207\u539A\u7247\uFF0C\u5927\u706B\u84B8 15 \u5206\u9418\u81F3\u7AF9\u7C64\u53EF\u8F15\u6613\u7A7F\u900F\u3002\u8D81\u71B1\u5012\u5165\u5927\u76C6\u4E2D\uFF0C\u52A0\u5165 40g \u7802\u7CD6\uFF0C\u7528\u58D3\u6CE5\u5668\u6216\u53C9\u5B50\u58D3\u6210\u7D30\u81A9\u7121\u9846\u7C92\u7684\u5730\u74DC\u6CE5\u3002",
          "en": "Peel and slice sweet potato. Steam for 15 mins until fork-tender. Transfer to a bowl while steaming hot, add 40g sugar, and mash into a smooth lump-free puree.",
          "ja": "\u3055\u3064\u307E\u3044\u3082\u306E\u76AE\u3092\u3080\u3044\u3066\u8F2A\u5207\u308A\u306B\u3057\u300115\u5206\u84B8\u3057\u307E\u3059\u3002\u71B1\u3044\u3046\u3061\u306B\u30DC\u30A6\u30EB\u306B\u5165\u308C\u3001\u7802\u7CD640g\u3092\u52A0\u3048\u3066\u30D5\u30A9\u30FC\u30AF\u3084\u30DE\u30C3\u30B7\u30E3\u30FC\u3067\u306A\u3081\u3089\u304B\u306B\u6F70\u3057\u307E\u3059\u3002",
          "ko": "\uACE0\uAD6C\uB9C8 \uAECD\uC9C8\uC744 \uBC97\uACA8 \uC370\uC5B4 15\uBD84\uAC04 \uCC1D\uB2C8\uB2E4. \uB728\uAC70\uC6B8 \uB54C \uBCFC\uC5D0 \uB2F4\uACE0 \uC124\uD0D5 40g\uC744 \uB123\uC5B4 \uD3EC\uD06C\uB098 \uB9E4\uC154\uB85C \uB369\uC5B4\uB9AC \uC5C6\uC774 \uACF1\uAC8C \uC73C\uAE68\uC90D\uB2C8\uB2E4.",
          "vi": "Khoai g\u1ECDt v\u1ECF th\xE1i khoanh h\u1EA5p 15 ph\xFAt cho ch\xEDn m\u1EC1m. Cho v\xE0o \xE2u d\u1EB1m nhuy\u1EC5n l\xFAc c\xF2n n\xF3ng c\xF9ng 40g \u0111\u01B0\u1EDDng."
        },
        "image": "/images/spb-step1.jpg",
        "durationSeconds": 900
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u5206\u6B21\u52A0\u5730\u74DC\u7C89\u63C9\u5718\uFF0C\u5206\u5207\u6413\u5713",
          "en": "Knead with Starch & Roll into Balls",
          "ja": "\u30BF\u30D4\u30AA\u30AB\u7C89\u3092\u52A0\u3048\u3066\u3053\u306D\u3001\u4E00\u53E3\u5927\u306E\u4E38\u306B\u6210\u5F62\u3059\u308B",
          "ko": "\uD0C0\uD53C\uC624\uCE74 \uC804\uBD84 \uC11E\uC5B4 \uBC18\uC8FD \uD6C4 \uB3D9\uAE00\uB3D9\uAE00 \uBE5A\uAE30",
          "vi": "Nh\u1ED3i b\u1ED9t n\u0103ng v\xE0 vo vi\xEAn tr\xF2n \u0111\u1EC1u"
        },
        "instruction": {
          "zh-TW": "\u8D81\u5FAE\u6EAB\u5206\u6B21\u52A0\u5165 100g \u6728\u85AF\u7C89\uFF0C\u7528\u624B\u63C9\u634F\u6210\u300C\u8033\u5782\u822C\u67D4\u8EDF\u3001\u4E0D\u9ECF\u624B\u300D\u7684\u5149\u6ED1\u9EB5\u5718\u3002\u6413\u6210\u9577\u689D\uFF0C\u5207\u6210\u7D04 10~12g \u7684\u5C0F\u5291\u5B50\uFF0C\u96D9\u624B\u6413\u6210\u5713\u6ED1\u5C0F\u7403\u3002",
          "en": "Add 100g tapioca starch gradually to warm puree. Knead into a soft, smooth dough (like earlobe texture). Roll into long cylinders, divide into 10g nuggets, and roll into smooth spheres.",
          "ja": "\u6E29\u304B\u3044\u3046\u3061\u306B\u30BF\u30D4\u30AA\u30AB\u7C89100g\u3092\u5C11\u3057\u305A\u3064\u52A0\u3048\u3001\u8033\u305F\u3076\u304F\u3089\u3044\u306E\u67D4\u3089\u304B\u3055\u306B\u3053\u306D\u307E\u3059\u3002\u68D2\u72B6\u306B\u4F38\u3070\u3057\u306610g\u305A\u3064\u306B\u5207\u308A\u5206\u3051\u3001\u4E38\u304F\u6210\u5F62\u3057\u307E\u3059\u3002",
          "ko": "\uBBF8\uC628\uC77C \uB54C \uD0C0\uD53C\uC624\uCE74 \uC804\uBD84 100g\uC744 \uB098\uB204\uC5B4 \uB123\uC73C\uBA70 \uADD3\uBCFC\uCC98\uB7FC \uBD80\uB4DC\uB7FD\uACE0 \uB9E4\uB044\uB7EC\uC6B4 \uBC18\uC8FD\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uAE38\uAC8C \uB298\uC5EC 10g\uC529 \uC790\uB974\uACE0 \uB465\uAE00\uAC8C \uBE5A\uC5B4\uC90D\uB2C8\uB2E4.",
          "vi": "Cho b\u1ED9t n\u0103ng v\xE0o nh\u1ED3i th\xE0nh kh\u1ED1i d\u1EBBo m\u1ECBn nh\u01B0 d\xE1i tai kh\xF4ng d\xEDnh tay. Chia th\xE0nh vi\xEAn 10g vo tr\xF2n."
        },
        "image": "/images/spb-step2.jpg",
        "durationSeconds": 600
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u6EAB\u6CB9\u4E0B\u934B\u5FAE\u70B8\u6D6E\u8D77 (120\xB0C)",
          "en": "Gentle Fry in Warm Oil until Floating (120\xB0C / 250\xB0F)",
          "ja": "\u306C\u308B\u3081\u306E\u6CB9\uFF08120\u2103\uFF09\u306B\u5165\u308C\u3001\u6D6E\u304D\u4E0A\u304C\u308B\u307E\u3067\u9759\u304B\u306B\u63DA\u3052\u308B",
          "ko": "\uC800\uC628 \uAE30\uB984(120\xB0C)\uC5D0 \uB123\uACE0 \uB5A0\uC624\uB97C \uB54C\uAE4C\uC9C0 \uC11C\uC11C\uD788 \uD280\uAE30\uAE30",
          "vi": "Th\u1EA3 v\xE0o ch\u1EA3o d\u1EA7u \u1EA5m 120\xB0C chi\xEAn nh\u1EB9 \u0111\u1EBFn khi n\u1ED5i"
        },
        "instruction": {
          "zh-TW": "\u934B\u4E2D\u5012\u5165\u8DB3\u91CF\u6CB9\uFF0C\u51B7\u6CB9\u958B\u5C0F\u706B\u5347\u6EAB\u81F3\u7D04 120\xB0C\uFF08\u7B77\u5B50\u5468\u570D\u6709\u5FAE\u5C0F\u6C23\u6CE1\uFF09\u3002\u4E0B\u5730\u74DC\u7403\u751F\u80DA\uFF0C\u5148\u4E0D\u8981\u652A\u52D5\uFF0C\u7B49\u7D04 2~3 \u5206\u9418\u5730\u74DC\u7403\u5B9A\u578B\u4E26\u300C\u5168\u6578\u6D6E\u5728\u6CB9\u9762\u4E0A\u300D\u3002",
          "en": "Heat oil over low flame to 120\xB0C (250\xB0F). Gently slide sweet potato balls in. Do not stir for first 2-3 mins until all balls naturally puff slightly and float to the surface.",
          "ja": "\u6CB9\u3092\u4F4E\u6E29\uFF08\u7D04120\u2103\uFF09\u306B\u71B1\u3057\u3001\u751F\u5730\u3092\u9759\u304B\u306B\u5165\u308C\u307E\u3059\u3002\u89E6\u3089\u305A\u306B2\u301C3\u5206\u5F85\u3061\u3001\u751F\u5730\u304C\u3059\u3079\u3066\u6CB9\u306E\u4E0A\u306B\u30D7\u30AB\u30D7\u30AB\u6D6E\u3044\u3066\u304F\u308B\u306E\u3092\u5F85\u3061\u307E\u3059\u3002",
          "ko": "\uAE30\uB984\uC744 \uC57D\uBD88\uC5D0\uC11C 120\xB0C\uB85C \uC740\uC740\uD558\uAC8C \uB370\uC6B4 \uD6C4 \uBC18\uC8FD\uC744 \uB123\uC2B5\uB2C8\uB2E4. 2~3\uBD84\uAC04 \uAC74\uB4DC\uB9AC\uC9C0 \uC54A\uACE0 \uBAA8\uB4E0 \uBCFC\uC774 \uAE30\uB984 \uC704\uB85C \uB465\uB465 \uB5A0\uC624\uB97C \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4.",
          "vi": "\u0110un d\u1EA7u l\u1EEDa nh\u1ECF 120\xB0C, th\u1EA3 vi\xEAn khoai v\xE0o. \u0110\u1EC3 y\xEAn 2-3 ph\xFAt cho khoai t\u1EF1 n\u1ED5i l\xEAn m\u1EB7t d\u1EA7u."
        },
        "image": "/images/spb-step3.jpg",
        "durationSeconds": 180
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u9748\u9B42\uFF01\u5927\u6F0F\u52FA\u9023\u7E8C\u6309\u58D3\u6392\u6C23\u81A8\u8139",
          "en": "The Magic Press: Repetitively Squeeze with Mesh Ladle",
          "ja": "\u9B42\u306E\u6280\uFF01\u7A74\u3042\u304D\u304A\u7389\u3067\u30AE\u30E5\u30C3\u30AE\u30E5\u30C3\u3068\u62BC\u3057\u6F70\u3057\u3066\u5DE8\u5927\u5316\uFF01",
          "ko": "\uD575\uC2EC \uBE44\uBC95! \uAD6D\uC790\uB85C \uAFB9\uAFB9 \uB20C\uB7EC \uD48D\uC120\uCC98\uB7FC \uBD80\uD480\uB9AC\uAE30",
          "vi": "B\xED quy\u1EBFt \xE9p x\u1EA3 kh\xED li\xEAn t\u1EE5c gi\xFAp b\xE1nh n\u1EDF ph\u1ED3ng kh\u1ED5ng l\u1ED3"
        },
        "instruction": {
          "zh-TW": "\u770B\u5230\u6D6E\u8D77\u5F8C\uFF0C\u62FF\u5927\u6F0F\u52FA\u7528\u529B\u5C07\u5730\u74DC\u7403\u300C\u5F80\u4E0B\u3001\u5F80\u934B\u58C1\u6309\u58D3\u64E0\u6241\u300D\uFF0C\u9B06\u958B\u5F8C\u5730\u74DC\u7403\u6703\u5438\u5165\u7A7A\u6C23\u7ACB\u523B\u5F48\u56DE\u4E26\u8B8A\u5927\uFF01\u9023\u7E8C\u91CD\u8907\u300C\u6309\u58D3\u2192\u653E\u958B\u2192\u7FFB\u6EFE\u300D\u81F3\u5C11 6~8 \u6B21\uFF0C\u5730\u74DC\u7403\u6703\u81A8\u8139\u6210 3 \u500D\u5927\u7684\u5DE8\u578B\u7A7A\u5FC3\u7403\uFF01",
          "en": 'Once floating, use a large perforated ladle to press the balls firmly against the wok bottom/side, flattening them. Release, and watch them pop back even bigger! Repeat "Press -> Release -> Roll" 6-8 times to balloon them into giant hollow spheres!',
          "ja": "\u6D6E\u3044\u3066\u304D\u305F\u3089\u3001\u7A74\u3042\u304D\u304A\u7389\u306E\u80CC\u3067\u751F\u5730\u3092\u934B\u808C\u306B\u30AE\u30E5\u30FC\u30C3\u3068\u62BC\u3057\u6F70\u3057\u307E\u3059\uFF01\u96E2\u3059\u3068\u7A7A\u6C17\u3092\u5438\u3044\u8FBC\u3093\u3067\u4E00\u56DE\u308A\u5927\u304D\u304F\u81A8\u3089\u307F\u307E\u3059\u3002\u300C\u6F70\u3059\u2192\u96E2\u3059\u300D\u30926\u301C8\u56DE\u7E70\u308A\u8FD4\u3059\u3068\u30013\u500D\u306E\u5927\u304D\u3055\u306B\u81A8\u5F35\u3057\u307E\u3059\uFF01",
          "ko": "\uB5A0\uC624\uB974\uBA74 \uAD6C\uBA4D \uB6AB\uB9B0 \uAD6D\uC790\uB85C \uACE0\uAD6C\uB9C8\uBCFC\uC744 \uB0C4\uBE44 \uBC14\uB2E5\uC5D0 \uAFB9 \uB20C\uB7EC \uB0A9\uC791\uD558\uAC8C \uCC0C\uADF8\uB7EC\uB728\uB9BD\uB2C8\uB2E4. \uC190\uC744 \uB5BC\uBA74 \uACF5\uAE30\uAC00 \uB4E4\uC5B4\uAC00\uBA70 \uB354 \uD06C\uAC8C \uBD80\uD480\uC5B4 \uC624\uB985\uB2C8\uB2E4! \uC774 \uACFC\uC815\uC744 6~8\uD68C \uBC18\uBCF5\uD558\uBA74 3\uBC30 \uD06C\uAE30\uB85C \uAC70\uB300\uD574\uC9D1\uB2C8\uB2E4.",
          "vi": "D\xF9ng mu\xF4i l\u1ED7 \xE9p d\u1EB9p vi\xEAn khoai v\xE0o th\xE0nh ch\u1EA3o, bu\xF4ng ra khoai s\u1EBD h\xFAt kh\xED ph\u1ED3ng to h\u01A1n. L\u1EB7p l\u1EA1i 6-8 l\u1EA7n b\xE1nh s\u1EBD n\u1EDF g\u1EA5p 3 l\u1EA7n r\u1ED7ng ru\u1ED9t gi\xF2n tan!"
        },
        "image": "/images/spb-step4.jpg",
        "durationSeconds": 300,
        "crucialTips": {
          "zh-TW": "\u8D8A\u6562\u7528\u529B\u6309\u58D3\uFF0C\u5730\u74DC\u7403\u5C31\u81A8\u8139\u5F97\u8D8A\u5927\u3001\u88E1\u9762\u5C31\u8D8A\u7A7A\u5FC3\u9165\u8106\uFF01\u4E0D\u8981\u6015\u58D3\u7834\uFF0C\u9EB5\u5718\u6709\u6975\u5F37\u5F48\u6027\u3002",
          "en": "Press boldly! The harder and more frequently you press, the thinner and crunchier the hollow shell becomes.",
          "ja": "\u6050\u308C\u305A\u306B\u3057\u3063\u304B\u308A\u529B\u3092\u5165\u308C\u3066\u62BC\u3057\u6F70\u3059\u306E\u304C\u30B3\u30C4\u3067\u3059\uFF01\u6F70\u3059\u307B\u3069\u4E2D\u304C\u7A7A\u6D1E\u306B\u306A\u308A\u30B5\u30AF\u30B5\u30AF\u306B\u306A\u308A\u307E\u3059\u3002",
          "ko": "\uACFC\uAC10\uD558\uAC8C \uAFB9 \uB20C\uB7EC\uC8FC\uC138\uC694! \uB9CE\uC774 \uB204\uB97C\uC218\uB85D \uAECD\uC9C8\uC740 \uC587\uACE0 \uBC14\uC0AD\uD574\uC9C0\uBA70 \uC18D\uC740 \uC644\uBCBD\uD558\uAC8C \uBE44\uC5B4\uC788\uAC8C \uB429\uB2C8\uB2E4.",
          "vi": "C\xE0ng \xE9p m\u1EA1nh tay th\xEC b\xE1nh c\xE0ng n\u1EDF to r\u1ED7ng ru\u1ED9t gi\xF2n x\u1ED1p."
        }
      },
      {
        "stepNumber": 5,
        "title": {
          "zh-TW": "\u5927\u706B\u903C\u6CB9\u6488\u51FA\uFF0C\u91D1\u9EC3\u9165\u8106\u51FA\u934B\uFF01",
          "en": "High-Heat Oil Expel & Serve Crispy",
          "ja": "\u5F37\u706B\u3067\u6CB9\u5207\u308A\u3057\u3066\u5B8C\u6210\uFF01\u9EC4\u91D1\u306E\u30B5\u30AF\u30B5\u30AF\u30DC\u30FC\u30EB",
          "ko": "\uAC15\uBD88\uB85C \uAE30\uB984 \uBE7C\uACE0 \uB178\uB987\uD558\uAC8C \uAC74\uC838 \uC644\uC131!",
          "vi": "T\u0103ng l\u1EEDa \xE9p d\u1EA7u v\xE0 v\u1EDBt ra v\xE0ng gi\xF2n r\u1EE5m!"
        },
        "instruction": {
          "zh-TW": "\u8D77\u934B\u524D\u8F49\u5927\u706B\u70B8 30 \u79D2\u903C\u51FA\u591A\u9918\u6CB9\u8102\uFF0C\u5916\u6BBC\u5448\u73FE\u91D1\u9EC3\u786C\u8106\u624B\u611F\u3002\u7528\u6F0F\u52FA\u6488\u8D77\u701D\u4E7E\u6CB9\u4EFD\uFF0C\u88DD\u5165\u7D19\u888B\u6416\u6643\uFF0C\u8D81\u71B1\u54AC\u4E0B\u4E00\u53E3\u807D\u898B\u5580\u6ECB\u9165\u8106\u8072\uFF01",
          "en": "Turn heat to high for the final 30 secs to expel oil. Scoop up in a strainer and shake off excess oil. Serve hot in paper bags for maximum crunch!",
          "ja": "\u6700\u5F8C\u306B\u5F37\u706B\u306730\u79D2\u63DA\u3052\u3066\u6CB9\u3092\u30AB\u30E9\u30C3\u3068\u5207\u308A\u307E\u3059\u3002\u30B6\u30EB\u306B\u4E0A\u3052\u3066\u6CB9\u3092\u5207\u308A\u3001\u7D19\u888B\u306B\u5165\u308C\u3066\u71B1\u3005\u306E\u30B5\u30AF\u30B5\u30AF\u611F\u3092\u697D\u3057\u307F\u307E\u3057\u3087\u3046\uFF01",
          "ko": "\uAC74\uC9C0\uAE30 \uC804 30\uCD08\uAC04 \uAC15\uBD88\uB85C \uC62C\uB824 \uAE30\uB984\uC744 \uCAD9 \uBE7C\uC90D\uB2C8\uB2E4. \uCC44\uB9DD\uC73C\uB85C \uAC74\uC838 \uAE30\uB984\uC744 \uD138\uC5B4\uB0B4\uACE0 \uC885\uC774\uBD09\uD22C\uC5D0 \uB2F4\uC544 \uB530\uB73B\uD560 \uB54C \uBC14\uC0AD\uD558\uAC8C \uB4DC\uC138\uC694!",
          "vi": "B\u1EADt l\u1EEDa to 30 gi\xE2y cu\u1ED1i \xE9p s\u1EA1ch d\u1EA7u th\u1EEBa, v\u1EDBt ra x\xF3c r\xE1o d\u1EA7u v\xE0 th\u01B0\u1EDFng th\u1EE9c khi c\xF2n n\xF3ng h\u1ED5i."
        },
        "image": "/images/sweet-potato-balls.jpg",
        "durationSeconds": 60
      }
    ],
    "troubleshooting": [
      {
        "id": "ts-sp-1",
        "problem": {
          "zh-TW": "\u70B8\u51FA\u4F86\u7684\u5730\u74DC\u7403\u6241\u6241\u7684\u3001\u6C92\u6709\u81A8\u8139\u6210\u7A7A\u5FC3\uFF1F",
          "en": "Why did my balls turn out dense and flat instead of puffy hollow?",
          "ja": "\u30DA\u30BF\u30F3\u30B3\u306E\u307E\u307E\u3067\u4E2D\u304C\u7A7A\u6D1E\u306B\u81A8\u3089\u307E\u306A\u3044\uFF1F",
          "ko": "\uBD80\uD480\uC9C0 \uC54A\uACE0 \uC18D\uC774 \uAF49 \uCC2C \uB5A1\uCC98\uB7FC \uB531\uB531\uD55C\uAC00\uC694?",
          "vi": "T\u1EA1i sao b\xE1nh kh\xF4ng n\u1EDF r\u1ED7ng ru\u1ED9t m\xE0 b\u1ECB \u0111\u1EB7c x\u1EB9p?"
        },
        "cause": {
          "zh-TW": "\u6CB9\u6EAB\u592A\u9AD8\uFF08\u5916\u76AE\u592A\u5FEB\u5B9A\u578B\u8B8A\u786C\u7121\u6CD5\u4F38\u5C55\uFF09\uFF0C\u6216\u8005\u70B8\u7684\u6642\u5019\u6C92\u6709\u7528\u529B\u9023\u7E8C\u6309\u58D3\u3002",
          "en": "Oil was too hot initially (crust set too fast to expand) or didn\u2019t press hard enough with ladle.",
          "ja": "\u6700\u521D\u306E\u6CB9\u6E29\u304C\u9AD8\u3059\u304E\u305F\u304B\u3001\u304A\u7389\u3067\u306E\u62BC\u3057\u6F70\u3057\u304C\u8DB3\u308A\u306A\u304B\u3063\u305F\u305F\u3081\u3067\u3059\u3002",
          "ko": "\uCC98\uC74C \uAE30\uB984 \uC628\uB3C4\uAC00 \uB108\uBB34 \uB192\uC544 \uAECD\uC9C8\uC774 \uC77C\uCC0D \uAD73\uC5C8\uAC70\uB098, \uAD6D\uC790\uB85C \uCDA9\uBD84\uD788 \uB204\uB974\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "D\u1EA7u qu\xE1 n\xF3ng l\xE0m v\u1ECF c\u1EE9ng s\u1EDBm kh\xF4ng gi\xE3n n\u1EDF \u0111\u01B0\u1EE3c, ho\u1EB7c ch\u01B0a \xE9p \u0111\u1EE7 l\u1EF1c."
        },
        "solution": {
          "zh-TW": "\u4E00\u5B9A\u8981\u5F9E 120\xB0C \u4F4E\u6EAB\u6162\u70B8\uFF0C\u7B49\u6D6E\u8D77\u5F8C\u300C\u6BEB\u4E0D\u7559\u60C5\u5730\u53CD\u8986\u7528\u529B\u58D3\u6241\u300D\uFF01",
          "en": "Start strictly at 120\xB0C low heat. Once floating, mash and compress them vigorously multiple times!",
          "ja": "\u5FC5\u305A120\u2103\u306E\u4F4E\u6E29\u304B\u3089\u30B9\u30BF\u30FC\u30C8\u3057\u3001\u6D6E\u3044\u3066\u304D\u305F\u3089\u601D\u3044\u5207\u308A\u4F55\u5EA6\u3082\u62BC\u3057\u6F70\u3057\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uBC18\uB4DC\uC2DC 120\xB0C \uC800\uC628\uC5D0\uC11C \uC2DC\uC791\uD558\uACE0, \uB5A0\uC624\uB974\uBA74 \uC0AC\uC815\uC5C6\uC774 \uAD6D\uC790\uB85C \uAFB9\uAFB9 \uB20C\uB7EC\uC8FC\uC138\uC694!",
          "vi": "B\u1EAFt \u0111\u1EA7u \u1EDF nhi\u1EC7t 120\xB0C v\xE0 \xE9p li\xEAn t\u1EE5c sau khi khoai n\u1ED5i."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u82E5\u60F3\u8981\u505A\u51FA\u591C\u5E02\u5E38\u898B\u7684\u300C\u9EC3\u7D2B\u96D9\u8272\u5730\u74DC\u7403\u300D\uFF0C\u53EF\u5206\u5225\u6E96\u5099\u9EC3\u5730\u74DC\u8207\u7D2B\u5730\u74DC\uFF0C\u5169\u7A2E\u9EB5\u5718\u4EA4\u932F\u6216\u55AE\u7368\u6413\u5713\u4E0B\u934B\uFF0C\u8996\u89BA\u8D85\u5438\u775B\uFF01",
        "en": "For two-tone night market style, make batches with both yellow and purple sweet potatoes!",
        "ja": "\u9EC4\u8272\u3068\u7D2B\u8272\u306E\u3055\u3064\u307E\u3044\u3082\u3092\u4E21\u65B9\u4F7F\u3046\u3068\u3001\u591C\u5E02\u3067\u5927\u4EBA\u6C17\u306E\u300C2\u8272\u5730\u74DC\u7403\u300D\u304C\u4F5C\u308C\u307E\u3059\uFF01",
        "ko": "\uD638\uBC15\uACE0\uAD6C\uB9C8\uC640 \uC790\uC0C9\uACE0\uAD6C\uB9C8\uB97C \uD568\uAED8 \uC4F0\uBA74 \uC57C\uC2DC\uC7A5 \uBA85\uBB3C\uC778 \uC54C\uB85D\uB2EC\uB85D 2\uC0C9 \uACE0\uAD6C\uB9C8\uBCFC\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "vi": "D\xF9ng c\u1EA3 khoai lang v\xE0ng v\xE0 t\xEDm \u0111\u1EC3 l\xE0m \u0111\u0129a b\xE1nh 2 m\xE0u tuy\u1EC7t \u0111\u1EB9p chu\u1EA9n ch\u1EE3 \u0111\xEAm."
      }
    ]
  },
  {
    "id": "sausage-in-rice",
    "slug": "sausage-in-rice",
    "title": {
      "zh-TW": "\u70AD\u70E4\u7D93\u5178\u5927\u8178\u5305\u5C0F\u8178",
      "en": "Taiwanese Sausage in Sticky Rice (Rice Hot Dog)",
      "ja": "\u70AD\u706B\u713C\u304D \u53F0\u6E7E\u5F0F\u30E9\u30A4\u30B9\u30DB\u30C3\u30C8\u30C9\u30C3\u30B0\uFF08\u5927\u8178\u5305\u5C0F\u8178\uFF09",
      "ko": "\uB300\uB9CC\uC2DD \uC22F\uBD88 \uB77C\uC774\uC2A4 \uD56B\uB3C4\uADF8 (\uB2E4\uCC3D\uBC14\uC624\uC0E4\uC624\uCC3D)",
      "vi": "X\xF4i b\u1ECDc x\xFAc x\xEDch n\u01B0\u1EDBng than \u0110\xE0i Loan"
    },
    "subtitle": {
      "zh-TW": "\u70AD\u70E4\u7CEF\u7C73\u8178\u593E\u9AD8\u7CB1\u9999\u8178\u30FB\u9178\u83DC\u4E5D\u5C64\u5854\u849C\u7247\u6975\u81F4\u593E\u5FC3",
      "en": "Grilled Sticky Rice Bun, Kaoliang Sausage & Pickled Greens",
      "ja": "\u9999\u3070\u3057\u3044\u3082\u3061\u7C73\u30BD\u30FC\u30BB\u30FC\u30B8\xD7\u9AD8\u7CB1\u9152\u30BD\u30FC\u30BB\u30FC\u30B8\u306E\u7D76\u54C1\u30B5\u30F3\u30C9",
      "ko": "\uC22F\uBD88 \uCC39\uC300 \uC18C\uC2DC\uC9C0\uC5D0 \uB300\uB9CC \uC218\uC81C \uC18C\uC2DC\uC9C0\uC640 \uAC13\uC808\uC784, \uB9C8\uB298\uC758 \uD658\uC0C1 \uAD81\uD569",
      "vi": "X\xF4i n\u01B0\u1EDBng k\u1EB9p x\xFAc x\xEDch t\u01B0\u01A1i c\xF9ng d\u01B0a chua, l\xE1 qu\u1EBF th\u01A1m l\u1EEBng"
    },
    "tagline": {
      "zh-TW": "\u9022\u7532\u591C\u5E02\u6392\u968A\u50B3\u5947\uFF01\u53F0\u7063\u6700\u9738\u6C23\u7684\u53F0\u5F0F\u71B1\u72D7\u5821",
      "en": "The iconic Taiwanese rice dog born in Fengjia Night Market",
      "ja": "\u9022\u7532\u591C\u5E02\u3067\u884C\u5217\u3092\u4F5C\u308B\u4F1D\u8AAC\u306E\u5C4B\u53F0\u30B0\u30EB\u30E1\uFF01\u53F0\u6E7E\u7248\u30DB\u30C3\u30C8\u30C9\u30C3\u30B0",
      "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5\uC758 \uC804\uC124\uC801\uC778 \uC904 \uC11C\uB294 \uB9DB\uC9D1 \uB300\uD45C \uBA54\uB274",
      "vi": "Huy\u1EC1n tho\u1EA1i ch\u1EE3 \u0111\xEAm Fengjia v\u1EDBi phi\xEAn b\u1EA3n hotdog g\u1EA1o \u0110\xE0i Loan \u0111\u1EC9nh cao"
    },
    "heroImage": "/images/sausage-in-rice.jpg",
    "difficulty": "easy",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 12,
    "defaultServings": 2,
    "caloriesPerServing": 520,
    "category": "fried",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional",
      "airFryer"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u4E2D\u9022\u7532 / \u82B1\u84EE",
        "en": "Taichung Fengjia / Hualien",
        "ja": "\u53F0\u4E2D\u30FB\u9022\u7532 / \u82B1\u84EE",
        "ko": "\uD0C0\uC774\uC911 \uD391\uC790 / \uD654\uB844",
        "vi": "\u0110\xE0i Trung Fengjia / Hoa Li\xEAn"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02 (\u5B98\u829D\u9716 / \u767E\u4F73)",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        },
        {
          "zh-TW": "\u82B1\u84EE\u6771\u5927\u9580\u591C\u5E02",
          "en": "Dongdamen Night Market",
          "ja": "\u6771\u5927\u9580\u591C\u5E02",
          "ko": "\uB465\uB2E4\uBA3C \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Dongdamen"
        }
      ],
      "historyStory": {
        "zh-TW": "\u5927\u8178\u5305\u5C0F\u8178\u6E90\u81EA\u53F0\u7063\u5357\u90E8\u8207\u6771\u90E8\u7684\u50B3\u7D71\u8FB2\u6751\u9EDE\u5FC3\uFF0C1990\u5E74\u4EE3\u5728\u53F0\u4E2D\u9022\u7532\u591C\u5E02\u767C\u63DA\u5149\u5927\u3002\u5C07\u9AD4\u7A4D\u8F03\u5927\u7684\u300C\u7CEF\u7C73\u8178\u300D\uFF08\u5927\u8178\uFF09\u5207\u958B\uFF0C\u62B9\u4E0A\u849C\u84C9\u91AC\u6CB9\u818F\uFF0C\u593E\u5165\u9AD4\u7A4D\u8F03\u5C0F\u7684\u300C\u9AD8\u7CB1\u9152\u9ED1\u8C6C\u8089\u9999\u8178\u300D\uFF08\u5C0F\u8178\uFF09\uFF0C\u518D\u585E\u5165\u7092\u9178\u83DC\u3001\u5C0F\u9EC3\u74DC\u3001\u4E5D\u5C64\u5854\u8207\u751F\u849C\u7247\uFF0C\u4E00\u53E3\u54AC\u4E0B\u96D9\u91CD\u8089\u611F\u8207\u7C73\u9999\u7206\u767C\uFF01",
        "en": "Invented as a rural farmer snack, it was popularized in Taichung's Fengjia Night Market in the 1990s. A grilled sticky rice sausage serves as the bun, cradling a sweet grilled Taiwanese pork sausage, loaded with sour pickled greens, raw garlic slices, fresh Thai basil, and sweet garlic soy paste.",
        "ja": "1990\u5E74\u4EE3\u306B\u53F0\u4E2D\u306E\u9022\u7532\u591C\u5E02\u3067\u5927\u30D6\u30EC\u30A4\u30AF\u3057\u305F\u53F0\u6E7E\u98A8\u30DB\u30C3\u30C8\u30C9\u30C3\u30B0\u3002\u3082\u3061\u7C73\u3092\u8A70\u3081\u305F\u592A\u3044\u7C73\u30BD\u30FC\u30BB\u30FC\u30B8\uFF08\u5927\u8178\uFF09\u3092\u30D1\u30F3\u306B\u898B\u7ACB\u3066\u3066\u5207\u308A\u8FBC\u307F\u3092\u5165\u308C\u3001\u7518\u8F9B\u3044\u8C5A\u8089\u30BD\u30FC\u30BB\u30FC\u30B8\uFF08\u5C0F\u8178\uFF09\u3068\u9AD8\u83DC\u3001\u751F\u30CB\u30F3\u30CB\u30AF\u3001\u53F0\u6E7E\u30D0\u30B8\u30EB\u3092\u8D05\u6CA2\u306B\u631F\u307F\u8FBC\u307F\u307E\u3059\u3002",
        "ko": "1990\uB144\uB300 \uD0C0\uC774\uC911 \uD391\uC790 \uC57C\uC2DC\uC7A5\uC5D0\uC11C \uC2DC\uC791\uB418\uC5B4 \uB300\uB9CC \uC804\uC5ED\uC744 \uC0AC\uB85C\uC7A1\uC740 \uAE38\uAC70\uB9AC \uC74C\uC2DD\uC785\uB2C8\uB2E4. \uCC39\uC300\uC744 \uCC44\uC6B4 \uAD75\uC740 \uCC39\uC300 \uC18C\uC2DC\uC9C0\uB97C \uBC18\uC73C\uB85C \uAC08\uB77C \uC22F\uBD88\uC5D0 \uAD6C\uC6B4 \uB2EC\uCF64\uD55C \uB3FC\uC9C0\uACE0\uAE30 \uC18C\uC2DC\uC9C0\uC640 \uBCF6\uC740 \uAC13\uC808\uC784, \uC0DD\uB9C8\uB298 \uD3B8, \uBC14\uC9C8\uC744 \uAC00\uB4DD \uCC44\uC6CC \uBA39\uC2B5\uB2C8\uB2E4.",
        "vi": "Ra \u0111\u1EDDi t\u1EEB nh\u1EEFng n\u0103m 1990 t\u1EA1i ch\u1EE3 \u0111\xEAm Fengjia \u0110\xE0i Trung. D\xF9ng thanh x\xF4i n\u1EBFp l\u1EA1p x\u01B0\u1EDFng n\u01B0\u1EDBng r\u1EA1ch \u0111\xF4i l\xE0m v\u1ECF b\xE1nh, k\u1EB9p x\xFAc x\xEDch th\u1ECBt heo n\u01B0\u1EDBng than c\xF9ng d\u01B0a c\u1EA3i chua, t\u1ECFi s\u1ED1ng th\xE1i l\xE1t v\xE0 s\u1ED1t t\u01B0\u01A1ng t\u1ECFi ng\u1ECDt \u0111\u1EADm \u0111\xE0."
      },
      "taiwaneseHokkien": "Tu\u0101-tn\u0302g pau si\xF3-tn\u0302g (\u3109\u3128\u311A\u02C7 \u3109\u3125\u02CA \u3105\u3120 \u3112\u3127\u311C\u02CB \u3109\u3125\u02CA)",
      "mandarinPinyin": "D\xE0 ch\xE1ng b\u0101o xi\u01CEo ch\xE1ng (\u3109\u311A\u02CB \u3114\u3124\u02CA \u3105\u3120 \u3112\u3127\u3120\u02C7 \u3114\u3124\u02CA)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u4E00\u4EFD\u5927\u8178\u5305\u5C0F\u8178\uFF0C\u849C\u5473\u52A0\u8FA3"
    },
    "ingredients": [
      {
        "id": "sticky-rice-sausage",
        "name": {
          "zh-TW": "\u53F0\u7063\u53E4\u65E9\u5473\u7CEF\u7C73\u8178 (\u5927\u8178)",
          "en": "Taiwanese Sticky Rice Sausages (Large)",
          "ja": "\u53F0\u6E7E\u98A8\u3082\u3061\u7C73\u30BD\u30FC\u30BB\u30FC\u30B8\uFF08\u7CEF\u7C73\u8178\uFF09",
          "ko": "\uB300\uB9CC\uC2DD \uCC39\uC300 \uC18C\uC2DC\uC9C0 (\uB878\uBBF8\uCC3D)",
          "vi": "X\xF4i l\u1EA1p x\u01B0\u1EDFng g\u1EA1o n\u1EBFp \u0110\xE0i Loan"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 links",
        "isKeyFlavor": true,
        "chineseName": "\u7CEF\u7C73\u8178",
        "chinesePinyin": "Nu\xF2 m\u01D0 ch\xE1ng",
        "substitute": {
          "substituteName": {
            "zh-TW": "\u81EA\u88FD\u84B8\u719F\u8ABF\u5473\u7CEF\u7C73\u98EF (\u7528\u4FDD\u9BAE\u819C\u634F\u6210\u9999\u8178\u689D\u72C0)",
            "en": "Steamed seasoned sticky rice pressed into sausage shape using plastic wrap",
            "ja": "\u3082\u3061\u7C73\u3054\u98EF\uFF08\u91A4\u6CB9\u3068\u6CB9\u8471\u9165\u3067\u5473\u4ED8\u3051\uFF09\u3092\u30E9\u30C3\u30D7\u3067\u30BD\u30FC\u30BB\u30FC\u30B8\u72B6\u306B\u6210\u5F62",
            "ko": "\uC591\uB150 \uCC39\uC300\uBC25\uC744 \uB7A9\uC73C\uB85C \uC18C\uC2DC\uC9C0 \uBAA8\uC591\uC73C\uB85C \uBB49\uCCD0 \uC0AC\uC6A9",
            "vi": "X\xF4i n\u1EBFp d\u1EBBo tr\u1ED9n h\xE0nh phi n\u1EAFm th\xE0nh h\xECnh thanh x\xFAc x\xEDch"
          },
          "ratio": "1:1",
          "explanation": {
            "zh-TW": "\u7CEF\u7C73\u8178\u4E3B\u8981\u7531\u5713\u7CEF\u7C73\u3001\u6CB9\u8525\u9165\u8207\u82B1\u751F\u88FD\u6210\u3002\u82E5\u8CB7\u4E0D\u5230\u73FE\u6210\u7CEF\u7C73\u8178\uFF0C\u53EF\u5C07\u84B8\u719F\u7CEF\u7C73\u98EF\u52A0\u91AC\u6CB9\u3001\u7D05\u8525\u9165\u62CC\u52FB\u5F8C\u5851\u5F62\u3002",
            "en": "Sticky rice sausage contains glutinous rice, shallots, and peanuts. You can replicate it by shaping cooked seasoned sticky rice into a bun.",
            "ja": "\u4E2D\u83EF\u30B9\u30FC\u30D1\u30FC\u306E\u51B7\u51CD\u30B3\u30FC\u30CA\u30FC\u306B\u3042\u308A\u307E\u3059\u3002\u306A\u3051\u308C\u3070\u5473\u4ED8\u3051\u3082\u3061\u7C73\u3054\u98EF\u3067\u4EE3\u7528\u53EF\u80FD\u3067\u3059\u3002",
            "ko": "\uC544\uC2DC\uC548 \uB9C8\uD2B8 \uB0C9\uB3D9 \uCF54\uB108\uC5D0\uC11C \uAD6C\uB9E4\uD560 \uC218 \uC788\uC73C\uBA70, \uC5C6\uC744 \uC2DC \uC591\uB150 \uCC39\uC300\uBC25\uC73C\uB85C \uB300\uCCB4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",
            "vi": "C\xF3 th\u1EC3 mua s\u1EB5n \u1EDF khu \u0111\xF4ng l\u1EA1nh si\xEAu th\u1ECB ch\xE2u \xC1 ho\u1EB7c t\u1EF1 \u0111\u1ED3 x\xF4i n\u1EBFp n\u1EAFm l\u1EA1i."
          },
          "whereToBuy": {
            "zh-TW": "\u5927\u83EF\u8D85\u5E02 (99 Ranch)\u3001\u4E9E\u8D85\u51B7\u51CD\u9EB5\u9EDE\u5340\u3001\u751F\u9BAE\u5E02\u5834",
            "en": "99 Ranch Market, H-Mart freezer aisle, Asian grocery markets",
            "ja": "\u4E2D\u83EF\u7269\u7523\u5E97\u3001\u30A2\u30B8\u30A2\u7CFB\u30B9\u30FC\u30D1\u30FC\u51B7\u51CD\u30B3\u30FC\u30CA\u30FC",
            "ko": "\uC911\uAD6D \uC2DD\uC790\uC7AC \uB9C8\uD2B8 \uB0C9\uB3D9 \uCF54\uB108",
            "vi": "Khu \u0111\xF4ng l\u1EA1nh si\xEAu th\u1ECB ch\xE2u \xC1"
          }
        }
      },
      {
        "id": "taiwan-pork-sausage",
        "name": {
          "zh-TW": "\u53F0\u7063\u9AD8\u7CB1\u9ED1\u8C6C\u8089\u9999\u8178 (\u5C0F\u8178)",
          "en": "Taiwanese Sweet Pork Sausages (Kaoliang flavored)",
          "ja": "\u53F0\u6E7E\u9ED2\u8C5A\u30BD\u30FC\u30BB\u30FC\u30B8\uFF08\u53F0\u6E7E\u9999\u8178\uFF09",
          "ko": "\uB300\uB9CC\uC2DD \uB2EC\uCF64\uD55C \uB3FC\uC9C0\uACE0\uAE30 \uC18C\uC2DC\uC9C0 (\uC0F9\uCC3D)",
          "vi": "X\xFAc x\xEDch ng\u1ECDt \u0110\xE0i Loan (L\u1EA1p x\u01B0\u1EDFng t\u01B0\u01A1i)"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 links",
        "isKeyFlavor": true,
        "chineseName": "\u53F0\u7063\u9999\u8178",
        "chinesePinyin": "T\xE1i w\u0101n xi\u0101ng ch\xE1ng"
      },
      {
        "id": "pickled-mustard-greens",
        "name": {
          "zh-TW": "\u5BA2\u5BB6\u9178\u83DC (\u5207\u788E\u7092\u9999)",
          "en": "Taiwanese Pickled Mustard Greens (Finely chopped & saut\xE9ed)",
          "ja": "\u53F0\u6E7E\u9AD8\u83DC\u6F2C\u3051\uFF08\u9178\u83DC\u30FB\u7092\u3081\u305F\u3082\u306E\uFF09",
          "ko": "\uB300\uB9CC\uC2DD \uBCF6\uC740 \uAC13\uC808\uC784 (\uC3F8\uCC28\uC774)",
          "vi": "D\u01B0a c\u1EA3i chua x\xE0o gi\xF2n"
        },
        "amount": 50,
        "unitMetric": "g",
        "unitUS": "0.3 cup",
        "isKeyFlavor": true,
        "chineseName": "\u9178\u83DC",
        "chinesePinyin": "Su\u0101n c\xE0i"
      },
      {
        "id": "raw-garlic-slices",
        "name": {
          "zh-TW": "\u751F\u5927\u849C\u7247 (\u9748\u9B42\u8F9B\u8FA3\u53BB\u81A9)",
          "en": "Raw Garlic Cloves (Thinly Sliced)",
          "ja": "\u751F\u30CB\u30F3\u30CB\u30AF\uFF08\u8584\u5207\u308A\u30B9\u30E9\u30A4\u30B9\uFF09",
          "ko": "\uC0DD\uB9C8\uB298 \uD3B8",
          "vi": "T\u1ECFi s\u1ED1ng th\xE1i l\xE1t m\u1ECFng"
        },
        "amount": 4,
        "unitMetric": "clove",
        "unitUS": "4 cloves",
        "chineseName": "\u849C\u7247",
        "chinesePinyin": "Su\xE0n pi\xE0n"
      },
      {
        "id": "taiwan-sweet-chili",
        "name": {
          "zh-TW": "\u751C\u8FA3\u91AC + \u849C\u84C9\u91AC\u6CB9\u818F",
          "en": "Sweet Chili Sauce & Garlic Soy Paste",
          "ja": "\u53F0\u6E7E\u3068\u308D\u307F\u91A4\u6CB9\uFF08\u91A4\u6CB9\u818F\uFF09\uFF0B\u30B9\u30A4\u30FC\u30C8\u30C1\u30EA\u30BD\u30FC\u30B9",
          "ko": "\uC7A5\uC720\uACE0(\uB9C8\uB298\uAC04\uC7A5\uC18C\uC2A4) + \uC2A4\uC704\uD2B8 \uCE60\uB9AC\uC18C\uC2A4",
          "vi": "S\u1ED1t t\u01B0\u01A1ng t\u1ECFi ng\u1ECDt + T\u01B0\u01A1ng \u1EDBt ng\u1ECDt \u0110\xE0i Loan"
        },
        "amount": 30,
        "unitMetric": "ml",
        "unitUS": "2 tbsp",
        "chineseName": "\u849C\u84C9\u91AC\u6CB9\u818F",
        "chinesePinyin": "Su\xE0n r\xF3ng ji\xE0ng y\xF3u g\u0101o"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u5099\u6599\u8207\u7CEF\u7C73\u8178\u7E31\u5411\u5283\u958B",
          "en": "Prep Ingredients & Slit Sticky Rice Sausage",
          "ja": "\u5177\u6750\u3092\u6E96\u5099\u3057\u3001\u3082\u3061\u7C73\u30BD\u30FC\u30BB\u30FC\u30B8\u306B\u5207\u308A\u8FBC\u307F\u3092\u5165\u308C\u308B",
          "ko": "\uC7AC\uB8CC \uC900\uBE44 \uBC0F \uCC39\uC300 \uC18C\uC2DC\uC9C0 \uAC00\uC6B4\uB370 \uAC00\uB974\uAE30",
          "vi": "Chu\u1EA9n b\u1ECB nguy\xEAn li\u1EC7u v\xE0 r\u1EA1ch \u0111\xF4i x\xF4i l\u1EA1p x\u01B0\u1EDFng"
        },
        "instruction": {
          "zh-TW": "\u5927\u849C\u5207\u8584\u7247\uFF0C\u5BA2\u5BB6\u9178\u83DC\u5207\u788E\u52A0\u5C11\u8A31\u7CD6\u7092\u4E7E\u6C34\u5206\u3002\u5C07\u7CEF\u7C73\u8178\u5728\u6848\u677F\u4E0A\u7528\u5200\u5F9E\u4E0A\u65B9\u4E2D\u592E\u7E31\u5411\u5283\u958B\u4E00\u689D\u6DF1\u7E2B\uFF08\u7D04\u5207\u5165 2/3 \u6DF1\uFF0C\u5E95\u90E8\u4FDD\u6301\u76F8\u9023\uFF09\uFF0C\u5F62\u6210\u5982\u71B1\u72D7\u9EB5\u5305\u822C\u7684\u958B\u53E3\u3002",
          "en": "Thinly slice raw garlic. Finely chop pickled mustard greens and stir-fry with a pinch of sugar. Place sticky rice sausages on board and slice lengthwise down the center (about 2/3 deep, keeping bottom intact like a hot dog bun).",
          "ja": "\u30CB\u30F3\u30CB\u30AF\u3092\u8584\u5207\u308A\u306B\u3057\u3001\u9AD8\u83DC\u6F2C\u3051\u306F\u523B\u3093\u3067\u5C11\u91CF\u306E\u7802\u7CD6\u3068\u4E7E\u714E\u308A\u3057\u307E\u3059\u3002\u3082\u3061\u7C73\u30BD\u30FC\u30BB\u30FC\u30B8\u306E\u4E2D\u592E\u306B\u7E26\u306B2/3\u307B\u3069\u306E\u6DF1\u3055\u306E\u5207\u308A\u8FBC\u307F\u3092\u5165\u308C\u3001\u30DB\u30C3\u30C8\u30C9\u30C3\u30B0\u7528\u306E\u30D1\u30F3\u306E\u3088\u3046\u306B\u958B\u304D\u307E\u3059\u3002",
          "ko": "\uC0DD\uB9C8\uB298\uC744 \uD3B8 \uC370\uACE0, \uAC13\uC808\uC784\uC740 \uC798\uAC8C \uC370\uC5B4 \uC124\uD0D5 \uC57D\uAC04\uACFC \uD568\uAED8 \uB9C8\uB978 \uD32C\uC5D0 \uBCF6\uC544 \uC218\uBD84\uC744 \uB0A0\uB9BD\uB2C8\uB2E4. \uCC39\uC300 \uC18C\uC2DC\uC9C0 \uC911\uC559\uC744 \uCE7C\uB85C 2/3 \uAE4A\uC774\uB85C \uAE38\uAC8C \uAC08\uB77C \uD56B\uB3C4\uADF8 \uBE75 \uBAA8\uC591\uC73C\uB85C \uBC8C\uB824\uC90D\uB2C8\uB2E4.",
          "vi": "T\u1ECFi th\xE1i l\xE1t m\u1ECFng, d\u01B0a c\u1EA3i chua b\u0103m nh\u1ECF x\xE0o kh\xF4 c\xF9ng ch\xFAt \u0111\u01B0\u1EDDng. D\xF9ng dao r\u1EA1ch d\u1ECDc l\u01B0ng thanh x\xF4i n\u1EBFp s\xE2u 2/3 kh\xF4ng l\xE0m \u0111\u1EE9t \u0111\xE1y nh\u01B0 b\xE1nh hotdog."
        },
        "image": "/images/sausage-step1.jpg",
        "durationSeconds": 180
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u70AD\u70E4\u6216\u6C23\u70B8\u9AD8\u7CB1\u9999\u8178\u8207\u7CEF\u7C73\u8178",
          "en": "Grill or Air Fry Sausages to Sizzling Perfection",
          "ja": "\u30BD\u30FC\u30BB\u30FC\u30B8\u3068\u3082\u3061\u7C73\u30BD\u30FC\u30BB\u30FC\u30B8\u3092\u9999\u3070\u3057\u304F\u30B0\u30EA\u30EB\u3059\u308B",
          "ko": "\uC18C\uC2DC\uC9C0\uC640 \uCC39\uC300 \uC18C\uC2DC\uC9C0 \uC22F\uBD88/\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uC5D0 \uB178\uB987\uD558\uAC8C \uAD7D\uAE30",
          "vi": "N\u01B0\u1EDBng x\xFAc x\xEDch v\xE0 x\xF4i l\u1EA1p x\u01B0\u1EDFng th\u01A1m n\u1EE9c gi\xF2n b\xEC"
        },
        "instruction": {
          "zh-TW": "\u3010\u70AD\u70E4/\u5E73\u5E95\u934B\u3011\uFF1A\u70E4\u7DB2\u6216\u5E73\u5E95\u934B\u5237\u8584\u6CB9\uFF0C\u4E2D\u5C0F\u706B\u6162\u70E4\u9999\u8178\u8207\u7CEF\u7C73\u8178\u7D04 8~10 \u5206\u9418\uFF0C\u9999\u8178\u5916\u76AE\u6ECB\u6ECB\u6D41\u6CB9\u3001\u7CEF\u7C73\u8178\u5916\u76AE\u5FAE\u9165\u91D1\u9EC3\u3002\n\u3010\u6C23\u70B8\u934B\u6A21\u5F0F\u3011\uFF1A180\xB0C (355\xB0F) \u6C23\u70B8 10 \u5206\u9418\uFF0C\u4E2D\u9014 5 \u5206\u9418\u7FFB\u9762\u4E00\u6B21\u3002",
          "en": "Charcoal Grill/Skillet: Lightly grease grill or pan. Grill pork sausages and sticky rice sausages over medium-low heat for 8-10 mins until pork sausages are sizzling with slight char and rice casing is golden crispy.\nAir Fryer: 180\xB0C (355\xB0F) for 10 mins, flipping halfway.",
          "ja": "\u3010\u30B0\u30EA\u30EB\u30FB\u30D5\u30E9\u30A4\u30D1\u30F3\u3011\uFF1A\u8584\u304F\u6CB9\u3092\u5F15\u304D\u3001\u4E2D\u5F31\u706B\u30678\u301C10\u5206\u3058\u3063\u304F\u308A\u713C\u304D\u307E\u3059\u3002\u8089\u6C41\u304C\u5F3E\u3051\u3001\u3082\u3061\u7C73\u306E\u76AE\u304C\u30AB\u30EA\u30C3\u3068\u9999\u3070\u3057\u304F\u306A\u308B\u307E\u3067\u3002\n\u3010\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u3011\uFF1A180\u2103\u306710\u5206\u3001\u9014\u4E2D\u3067\u88CF\u8FD4\u3057\u307E\u3059\u3002",
          "ko": "\u3010\uADF8\uB9B4/\uD32C\u3011\uFF1A\uAE30\uB984\uC744 \uC0B4\uC9DD \uB450\uB974\uACE0 \uC911\uC57D\uBD88\uC5D0\uC11C 8~10\uBD84\uAC04 \uAD74\uB824\uAC00\uBA70 \uAD7D\uC2B5\uB2C8\uB2E4. \uC18C\uC2DC\uC9C0 \uC721\uC999\uC774 \uD130\uC838 \uB098\uC624\uACE0 \uCC39\uC300 \uC18C\uC2DC\uC9C0 \uAC89\uBA74\uC774 \uBC14\uC0AD\uD574\uC9C8 \uB54C\uAE4C\uC9C0 \uAD6C\uC6CC\uC90D\uB2C8\uB2E4.\n\u3010\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\u3011\uFF1A180\xB0C\uC5D0\uC11C 10\uBD84\uAC04 \uC870\uB9AC, 5\uBD84 \uB4A4 \uB4A4\uC9D1\uAE30.",
          "vi": "N\u01B0\u1EDBng than/Ch\u1EA3o: Qu\xE9t d\u1EA7u n\u01B0\u1EDBng l\u1EEDa v\u1EEBa 8-10 ph\xFAt cho x\xFAc x\xEDch t\u1EE9a m\u1EE1 x\xE9m v\xE0ng v\xE0 v\u1ECF x\xF4i gi\xF2n r\u1EE5m.\nN\u1ED3i chi\xEAn kh\xF4ng d\u1EA7u: 180\xB0C trong 10 ph\xFAt, l\u1EADt m\u1EB7t l\xFAc 5 ph\xFAt."
        },
        "image": "/images/sausage-step2.jpg",
        "durationSeconds": 600,
        "cookwareVariations": [
          {
            "cookware": "airFryer",
            "tempAndSetting": "Air Fryer: 180\xB0C (355\xB0F) for 10 mins",
            "instructionOverride": {
              "zh-TW": "\u5C07\u9999\u8178\u8868\u9762\u7528\u7259\u7C64\u6233\u5E7E\u500B\u5C0F\u5B54\u9632\u7206\u88C2\uFF0C\u8207\u7CEF\u7C73\u8178\u4E00\u540C\u653E\u5165\u6C23\u70B8\u934B\u3002\u8A2D\u5B9A 180\xB0C \u6C23\u70B8 10 \u5206\u9418\uFF0C\u9999\u8178\u9999\u6C23\u56DB\u6EA2\u3001\u7CEF\u7C73\u8178\u5916\u8106\u5167\u8EDF\u7CEF\uFF01",
              "en": "Prick sausages with toothpick to prevent bursting. Place in air fryer at 180\xB0C for 10 mins until golden and aromatic.",
              "ja": "\u30BD\u30FC\u30BB\u30FC\u30B8\u306B\u722A\u694A\u679D\u3067\u6570\u30AB\u6240\u7A74\u3092\u958B\u3051\u3001180\u2103\u306710\u5206\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u8ABF\u7406\u3002\u5916\u30AB\u30EA\u4E2D\u30E2\u30C1\u306B\u4ED5\u4E0A\u304C\u308A\u307E\u3059\uFF01",
              "ko": "\uC18C\uC2DC\uC9C0 \uAECD\uC9C8\uC5D0 \uC774\uC464\uC2DC\uAC1C\uB85C \uAD6C\uBA4D\uC744 \uBA87 \uAC1C \uB0B8 \uB4A4 180\xB0C\uC5D0\uC11C 10\uBD84\uAC04 \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uC5D0 \uAD7D\uC2B5\uB2C8\uB2E4.",
              "vi": "D\xF9ng t\u0103m x\u0103m v\xE0i l\u1ED7 nh\u1ECF tr\xEAn x\xFAc x\xEDch, cho v\xE0o n\u1ED3i chi\xEAn 180\xB0C trong 10 ph\xFAt."
            }
          }
        ]
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u5237\u4E0A\u9748\u9B42\u849C\u5473\u6CB9\u818F\u8207\u751C\u8FA3\u91AC",
          "en": "Brush Garlic Soy Paste & Sweet Chili Sauce",
          "ja": "\u7279\u88FD\u306B\u3093\u306B\u304F\u91A4\u6CB9\u818F\u3068\u30C1\u30EA\u30BD\u30FC\u30B9\u3092\u305F\u3063\u3077\u308A\u5857\u308B",
          "ko": "\uD2B9\uC81C \uB9C8\uB298 \uAC04\uC7A5\uC18C\uC2A4\uC640 \uCE60\uB9AC\uC18C\uC2A4 \uB4EC\uBFCD \uBC14\uB974\uAE30",
          "vi": "Qu\xE9t \u0111\u1EABm s\u1ED1t t\u01B0\u01A1ng t\u1ECFi v\xE0 t\u01B0\u01A1ng \u1EDBt ng\u1ECDt"
        },
        "instruction": {
          "zh-TW": "\u8D81\u71B1\u62FF\u8D77\u70E4\u597D\u7684\u7CEF\u7C73\u8178\uFF0C\u7528\u91AC\u6599\u5237\u5728\u5207\u958B\u7684\u5167\u90E8\u5169\u5074\u5747\u52FB\u5237\u4E0A\u4E00\u5C64\u539A\u539A\u7684\u300C\u849C\u5473\u91AC\u6CB9\u818F\u300D\u8207\u300C\u751C\u8FA3\u91AC\u300D\uFF0C\u8B93\u6FC3\u9187\u9E79\u751C\u91AC\u6C41\u6EF2\u5165\u71B1\u9A30\u9A30\u7684\u7CEF\u7C73\u7E2B\u9699\u4E2D\u3002",
          "en": "While hot, gently pry open the sticky rice sausage. Use a brush to generously coat the inside with savory garlic soy paste and Taiwanese sweet chili sauce so the sauce sinks into the hot glutinous rice.",
          "ja": "\u713C\u304D\u4E0A\u304C\u3063\u305F\u71B1\u3005\u306E\u3082\u3061\u7C73\u30BD\u30FC\u30BB\u30FC\u30B8\u306E\u5207\u308A\u53E3\u3092\u958B\u304D\u3001\u5237\u6BDB\u3067\u306B\u3093\u306B\u304F\u91A4\u6CB9\u818F\u3068\u30B9\u30A4\u30FC\u30C8\u30C1\u30EA\u30BD\u30FC\u30B9\u3092\u305F\u3063\u3077\u308A\u5857\u308A\u8FBC\u307F\u307E\u3059\u3002",
          "ko": "\uAC13 \uAD6C\uC6CC \uB728\uAC70\uC6B4 \uCC39\uC300 \uC18C\uC2DC\uC9C0\uC758 \uBC8C\uC5B4\uC9C4 \uC548\uCABD\uC5D0 \uBD93\uC73C\uB85C \uB9C8\uB298 \uC7A5\uC720\uACE0 \uC18C\uC2A4\uC640 \uCE60\uB9AC\uC18C\uC2A4\uB97C \uB4EC\uBFCD \uBC1C\uB77C \uBC25\uC54C \uC0AC\uC774\uC0AC\uC774\uB85C \uC2A4\uBA70\uB4E4\uAC8C \uD569\uB2C8\uB2E4.",
          "vi": "M\u1EDF r\u1ED9ng khe x\xF4i n\u1EBFp n\u01B0\u1EDBng l\xFAc c\xF2n n\xF3ng h\u1ED5i, d\xF9ng c\u1ECD qu\xE9t \u0111\u1EABm s\u1ED1t t\u01B0\u01A1ng t\u1ECFi v\xE0 t\u01B0\u01A1ng \u1EDBt ng\u1ECDt v\xE0o th\xE0nh trong."
        },
        "image": "/images/sausage-step3.jpg",
        "durationSeconds": 60
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u585E\u6EFF\u9178\u83DC\u3001\u4E5D\u5C64\u5854\u3001\u6CB9\u8525\u9165\u8207\u751F\u849C\u7247",
          "en": "Stuff Pickled Greens, Basil & Garlic Slices",
          "ja": "\u7092\u3081\u9AD8\u83DC\u30FB\u30D0\u30B8\u30EB\u30FB\u63DA\u3052\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u30FB\u751F\u30CB\u30F3\u30CB\u30AF\u3092\u304E\u3063\u3057\u308A\u8A70\u3081\u308B",
          "ko": "\uBCF6\uC740 \uAC13\uC808\uC784, \uBC14\uC9C8, \uC0EC\uB86F\uD280\uAE40, \uC0DD\uB9C8\uB298 \uD3B8 \uAC00\uB4DD \uCC44\uC6B0\uAE30",
          "vi": "Nh\u1ED3i ng\u1EADp d\u01B0a c\u1EA3i chua, l\xE1 qu\u1EBF, h\xE0nh phi v\xE0 t\u1ECFi s\u1ED1ng"
        },
        "instruction": {
          "zh-TW": "\u7528\u5C0F\u593E\u5B50\u5728\u5207\u53E3\u5E95\u90E8\u92EA\u6EFF\u7092\u9999\u7684\u5BA2\u5BB6\u9178\u83DC\u3001\u9165\u8106\u6CB9\u8525\u9165\u3001\u65B0\u9BAE\u4E5D\u5C64\u5854\u8449\u8207\u751F\u5927\u849C\u8584\u7247\uFF08\u6562\u5403\u8FA3\u8005\u53EF\u52A0\u9183\u8591\u7247\u8207\u8FA3\u6912\u91AC\uFF09\uFF0C\u914D\u6599\u5806\u6EFF\u5982\u5C71\uFF01",
          "en": "Using small tongs, pack the bottom of the rice pocket with stir-fried pickled greens, crispy fried shallots, fresh Thai basil leaves, and raw garlic slices.",
          "ja": "\u30C8\u30F3\u30B0\u3092\u4F7F\u3044\u3001\u5207\u308A\u8FBC\u307F\u306E\u5E95\u306B\u9999\u3070\u3057\u3044\u9AD8\u83DC\u6F2C\u3051\u3001\u6CB9\u8471\u9165\u3001\u751F\u30D0\u30B8\u30EB\u3001\u751F\u30CB\u30F3\u30CB\u30AF\u30B9\u30E9\u30A4\u30B9\u3092\u9699\u9593\u306A\u304F\u304E\u3063\u3057\u308A\u8A70\u3081\u8FBC\u307F\u307E\u3059\uFF01",
          "ko": "\uC791\uC740 \uC9D1\uAC8C\uB85C \uBCF6\uC740 \uAC13\uC808\uC784, \uBC14\uC0AD\uD55C \uC0EC\uB86F \uD280\uAE40, \uC2E0\uC120\uD55C \uBC14\uC9C8 \uC78E, \uC54C\uC2F8\uD55C \uC0DD\uB9C8\uB298 \uD3B8\uC744 \uAC00\uB4DD \uCC44\uC6CC \uB123\uC2B5\uB2C8\uB2E4.",
          "vi": "D\xF9ng k\u1EB9p g\u1EAFp nh\u1ED3i \u0111\u1EABm d\u01B0a c\u1EA3i chua x\xE0o, h\xE0nh phi gi\xF2n, l\xE1 h\xFAng qu\u1EBF t\u01B0\u01A1i v\xE0 t\u1ECFi s\u1ED1ng th\xE1i l\xE1t v\xE0o \u0111\xE1y khe x\xF4i."
        },
        "image": "/images/sausage-step4.jpg",
        "durationSeconds": 90
      },
      {
        "stepNumber": 5,
        "title": {
          "zh-TW": "\u585E\u5165\u591A\u6C41\u9999\u8178\uFF0C\u6372\u7D19\u888B\u65CB\u8F49\u958B\u5403\uFF01",
          "en": "Nestle Grilled Sausage & Spin the Paper Wrapper",
          "ja": "\u71B1\u3005\u306E\u53F0\u6E7E\u30BD\u30FC\u30BB\u30FC\u30B8\u3092\u631F\u307F\u3001\u7D19\u888B\u3067\u304F\u308B\u3063\u3068\u5DFB\u3044\u3066\u5B8C\u6210\uFF01",
          "ko": "\uC721\uC999 \uAC00\uB4DD \uC18C\uC2DC\uC9C0 \uC3D9 \uB123\uACE0 \uC885\uC774\uBD09\uD22C\uB85C \uB3CC\uB824 \uBA39\uAE30!",
          "vi": "K\u1EB9p x\xFAc x\xEDch v\xE0o gi\u1EEFa, cu\u1ED9n t\xFAi gi\u1EA5y xoay \u0103n chu\u1EA9n \u0111i\u1EC7u!"
        },
        "instruction": {
          "zh-TW": "\u5C07\u71B1\u9A30\u9A30\u7684\u70AD\u70E4\u9ED1\u8C6C\u8089\u9999\u8178\u7528\u529B\u58D3\u5165\u7CEF\u7C73\u8178\u4E2D\u9593\uFF0C\u88DD\u5165\u9632\u6CB9\u7D19\u888B\u4E2D\u3002\u50CF\u591C\u5E02\u8001\u9955\u4E00\u6A23\uFF0C\u5C07\u7D19\u888B\u5E95\u90E8\u65CB\u8F49\u5411\u4E0A\u63A8\u64E0\uFF0C\u5927\u53E3\u54AC\u4E0B\u7206\u6C41\u9999\u8178\u3001\u8EDF\u7CEF\u7C73\u9999\u8207\u849C\u8FA3\u9178\u83DC\u7684\u7121\u6575\u4E09\u91CD\u594F\uFF01",
          "en": "Firmly press the sizzling hot Taiwanese pork sausage into the stuffed rice pocket. Slide into a paper sleeve. Twist the bottom of the wrapper like a night market pro to push it up and take a giant, crunchy, juicy bite!",
          "ja": "\u30A2\u30C4\u30A2\u30C4\u306E\u53F0\u6E7E\u30BD\u30FC\u30BB\u30FC\u30B8\u3092\u4E2D\u592E\u306B\u30B0\u30C3\u3068\u631F\u307F\u8FBC\u307F\u3001\u8010\u6CB9\u7D19\u888B\u306B\u5165\u308C\u307E\u3059\u3002\u7D19\u888B\u306E\u5E95\u3092\u304F\u308B\u304F\u308B\u56DE\u3057\u3066\u62BC\u3057\u51FA\u3057\u306A\u304C\u3089\u3001\u8C6A\u5FEB\u306B\u304B\u3076\u308A\u3064\u304D\u307E\u3057\u3087\u3046\uFF01",
          "ko": "\uB728\uAC70\uC6B4 \uC18C\uC2DC\uC9C0\uB97C \uAC00\uC6B4\uB370 \uAF49 \uB20C\uB7EC \uB07C\uC6CC \uB123\uACE0 \uC885\uC774\uBD09\uD22C\uC5D0 \uB2F4\uC2B5\uB2C8\uB2E4. \uC57C\uC2DC\uC7A5 \uD504\uB85C\uCC98\uB7FC \uBD09\uD22C \uBC11\uC744 \uB3CC\uB824\uAC00\uBA70 \uC704\uB85C \uBC00\uC5B4 \uC62C\uB824 \uD55C \uC785 \uAC00\uB4DD \uBCA0\uC5B4 \uBB3C\uC5B4 \uB4DC\uC138\uC694!",
          "vi": "\u1EA4n ch\u1EB7t thanh x\xFAc x\xEDch n\u01B0\u1EDBng n\xF3ng h\u1ED5i v\xE0o ch\xEDnh gi\u1EEFa r\u1ED3i cho v\xE0o t\xFAi gi\u1EA5y ch\u1ED1ng d\u1EA7u. Xoay tr\xF2n \u0111\xE1y t\xFAi \u0111\u1EA9y l\xEAn c\u1EAFn ng\u1EADp mi\u1EC7ng \u0111\u1EA7y th\u1ECFa m\xE3n!"
        },
        "image": "/images/sausage-in-rice.jpg",
        "durationSeconds": 30
      }
    ],
    "troubleshooting": [
      {
        "id": "ts-sr-1",
        "problem": {
          "zh-TW": "\u7CEF\u7C73\u8178\u5207\u958B\u6642\u6563\u6210\u788E\u7C73\u7C92\uFF1F",
          "en": "Why did my sticky rice sausage crumble into loose rice when sliced?",
          "ja": "\u5207\u308B\u6642\u306B\u3082\u3061\u7C73\u30BD\u30FC\u30BB\u30FC\u30B8\u304C\u30D0\u30E9\u30D0\u30E9\u306B\u5D29\u308C\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uCC39\uC300 \uC18C\uC2DC\uC9C0\uB97C \uC790\uB97C \uB54C \uBC25\uC54C\uC774 \uBD80\uC11C\uC838 \uD750\uD2B8\uB7EC\uC9C0\uB098\uC694?",
          "vi": "T\u1EA1i sao thanh x\xF4i b\u1ECB t\u01A1i v\u1EE1 v\u1EE5n khi r\u1EA1ch dao?"
        },
        "cause": {
          "zh-TW": "\u7CEF\u7C73\u8178\u9084\u662F\u5B8C\u5168\u51B0\u51B7\u72C0\u614B\u4E0B\u5200\uFF0C\u6216\u8005\u5200\u5B50\u4E0D\u5920\u92D2\u5229\u3002",
          "en": "Sliced while cold straight out of fridge, or using a dull serrated knife.",
          "ja": "\u51B7\u305F\u3044\u307E\u307E\u5207\u3063\u305F\u304B\u3001\u5305\u4E01\u306E\u5207\u308C\u5473\u304C\u60AA\u3044\u305F\u3081\u3067\u3059\u3002",
          "ko": "\uB0C9\uC7A5 \uC0C1\uD0DC\uC5D0\uC11C \uCC28\uAC00\uC6B8 \uB54C \uC798\uB790\uAC70\uB098 \uCE7C\uC774 \uBB34\uB514\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "C\u1EAFt l\xFAc x\xF4i c\xF2n l\u1EA1nh ng\u1EAFt trong t\u1EE7 l\u1EA1nh ho\u1EB7c dao c\xF9n."
        },
        "solution": {
          "zh-TW": "\u5148\u5FAE\u70E4\u6216\u5FAE\u6CE2\u52A0\u71B1 30 \u79D2\u81F3\u5FAE\u6EAB\u8EDF\u7CEF\uFF0C\u5200\u5203\u62B9\u5FAE\u91CF\u9999\u6CB9\uFF0C\u4E00\u5200\u6ED1\u9806\u5207\u958B\u5373\u53EF\uFF01",
          "en": "Warm sausage in microwave for 30s first. Wipe knife blade with a drop of oil for a clean cut.",
          "ja": "\u30EC\u30F3\u30B8\u306730\u79D2\u307B\u3069\u6E29\u3081\u3066\u67D4\u3089\u304B\u304F\u3057\u3001\u5305\u4E01\u306B\u8584\u304F\u6CB9\u3092\u5857\u3063\u3066\u304B\u3089\u5207\u308B\u3068\u7DBA\u9E97\u306B\u5207\u308C\u307E\u3059\uFF01",
          "ko": "\uC804\uC790\uB808\uC778\uC9C0\uC5D0 30\uCD08 \uB3CC\uB824 \uC0B4\uC9DD \uB530\uB73B\uD558\uAC8C \uB9CC\uB4E0 \uD6C4, \uCE7C\uC5D0 \uAE30\uB984\uC744 \uC0B4\uC9DD \uBC1C\uB77C \uC790\uB974\uBA74 \uBD80\uC11C\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
          "vi": "Quay l\xF2 vi s\xF3ng 30 gi\xE2y cho \u1EA5m m\u1EC1m, thoa ch\xFAt d\u1EA7u l\xEAn dao r\u1ED3i r\u1EA1ch d\u1EE9t kho\xE1t."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u5927\u849C\u4E00\u5B9A\u8981\u300C\u73FE\u5207\u65B0\u9BAE\u751F\u5927\u849C\u7247\u300D\uFF0C\u5927\u849C\u7684\u5929\u7136\u8F9B\u8FA3\u7D20\u80FD\u5B8C\u7F8E\u4E2D\u548C\u4E94\u82B1\u8089\u9999\u8178\u7684\u6CB9\u8102\uFF0C\u662F\u53F0\u7063\u591C\u5E02\u4E0D\u5916\u50B3\u7684\u89E3\u81A9\u795E\u6280\uFF01",
        "en": "Freshly sliced raw garlic is mandatory! The sharp allicin cuts through the rich pork fat like magic.",
        "ja": "\u751F\u306E\u30CB\u30F3\u30CB\u30AF\u30B9\u30E9\u30A4\u30B9\u306F\u7D76\u5BFE\u306B\u6B20\u304B\u305B\u307E\u305B\u3093\uFF01\u30CB\u30F3\u30CB\u30AF\u306E\u8F9B\u5473\u304C\u30BD\u30FC\u30BB\u30FC\u30B8\u306E\u8102\u3063\u3053\u3055\u3092\u723D\u3084\u304B\u306B\u30EA\u30BB\u30C3\u30C8\u3057\u3066\u304F\u308C\u307E\u3059\u3002",
        "ko": "\uAC13 \uC36C \uC0DD\uB9C8\uB298 \uD3B8\uC740 \uD544\uC218\uC785\uB2C8\uB2E4! \uC0DD\uB9C8\uB298\uC758 \uC54C\uC2F8\uD568\uC774 \uAE30\uB984\uC9C4 \uB9DB\uC744 \uC644\uBCBD\uD558\uAC8C \uC7A1\uC544\uC90D\uB2C8\uB2E4.",
        "vi": "T\u1ECFi s\u1ED1ng th\xE1i l\xE1t t\u01B0\u01A1i l\xE0 linh h\u1ED3n b\u1EAFt bu\u1ED9c ph\u1EA3i c\xF3 \u0111\u1EC3 kh\u1EED ng\u1EA5y m\u1EE1 x\xFAc x\xEDch c\u1EF1c \u0111\u1EC9nh."
      }
    ]
  },
  {
    "id": "beef-noodle-soup",
    "slug": "beef-noodle-soup",
    "title": {
      "zh-TW": "\u53F0\u5317\u5DDD\u5473\u7D05\u71D2\u534A\u7B4B\u534A\u8089\u725B\u8089\u9EB5",
      "en": "Taiwanese Braised Beef Shank & Tendon Noodle Soup",
      "ja": "\u53F0\u5317\u540D\u7269 \u7D76\u54C1\u7D05\u713C\u725B\u8089\u9EBA\uFF08\u725B\u30B9\u30CD\u8089\uFF06\u725B\u3059\u3058\uFF09",
      "ko": "\uB300\uB9CC \uC815\uD1B5 \uD64D\uC0E4\uC624 \uB274\uB7EC\uC6B0\uBA58 (\uC6B0\uC721\uBA74)",
      "vi": "M\xEC b\xF2 s\u1ED1t vang g\xE2n b\u1EAFp \u0110\xE0i Loan (Beef Noodle Soup)"
    },
    "subtitle": {
      "zh-TW": "\u725B\u8171\u725B\u7B4B\u6162\u71AC\u6FC3\u90C1\u7D05\u6E6F\u30FB\u5CA1\u5C71\u8C46\u74E3\u91AC\u8207\u9178\u83DC\u9748\u9B42\u7D44\u5408",
      "en": "Rich Red-Braised Broth, Tender Shank & Translucent Tendons",
      "ja": "\u725B\u30B9\u30CD\u8089\u3068\u725B\u3059\u3058\u306E\u6975\u4E0A\u30C0\u30D6\u30EB\u5177\u6750\uFF06\u6FC3\u539A\u30D4\u30EA\u8F9B\u30B9\u30FC\u30D7",
      "ko": "\uC9C4\uD55C \uC6B0\uC0AC\uACE8 \uD64D\uD0D5\uC5D0 \uBD80\uB4DC\uB7EC\uC6B4 \uC544\uB871\uC0AC\uD0DC\uC640 \uCAC0\uB4DD\uD55C \uC2A4\uC9C0",
      "vi": "N\u01B0\u1EDBc d\xF9ng \u0111\u1ECF s\xE1nh \u0111\u1EADm \u0111\xE0 ng\u1EADp tr\xE0n g\xE2n b\xF2 v\xE0 b\u1EAFp hoa b\xF2"
    },
    "tagline": {
      "zh-TW": "\u7C73\u5176\u6797\u5FC5\u6BD4\u767B\u63A8\u85A6\uFF01\u53F0\u7063\u4EAB\u8B7D\u5168\u7403\u7684\u570B\u5BF6\u7D1A\u9EB5\u98DF",
      "en": "The Michelin-celebrated national dish of Taiwan",
      "ja": "\u30DF\u30B7\u30E5\u30E9\u30F3\u30FB\u30D3\u30D6\u30B0\u30EB\u30DE\u30F3\u7D76\u8CDB\uFF01\u4E16\u754C\u304C\u8A8D\u3081\u305F\u53F0\u6E7E\u306E\u56FD\u6C11\u7684\u9EBA\u6599\u7406",
      "ko": "\uBBF8\uC290\uB7AD \uBE55\uAD6C\uB974\uB9DD\uC774 \uC0AC\uB791\uD55C \uB300\uB9CC \uCD5C\uACE0\uC758 \uAD6D\uBCF4\uAE09 \uBA74 \uC694\uB9AC",
      "vi": "M\xF3n m\xEC qu\u1ED1c b\u1EA3o c\u1EE7a \u0110\xE0i Loan n\u1EE9c ti\u1EBFng kh\u1EAFp th\u1EBF gi\u1EDBi"
    },
    "heroImage": "/images/beef-noodle-soup.jpg",
    "difficulty": "hard",
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 90,
    "defaultServings": 4,
    "caloriesPerServing": 640,
    "category": "soups",
    "dietaryTags": [
      "classic",
      "halal"
    ],
    "supportedCookware": [
      "traditional",
      "instantPot"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5317\u6C38\u5EB7\u8857 / \u9AD8\u96C4\u5CA1\u5C71",
        "en": "Taipei Yongkang / Kaohsiung Gangshan",
        "ja": "\u53F0\u5317\u30FB\u6C38\u5EB7\u8857 / \u9AD8\u96C4\u30FB\u5CA1\u5C71",
        "ko": "\uD0C0\uC774\uBCA0\uC774 \uC735\uCE89\uC81C / \uAC00\uC624\uC29D \uAC15\uC0B0",
        "vi": "\u0110\xE0i B\u1EAFc Yongkang / Cao H\xF9ng"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u6C38\u5EB7\u725B\u8089\u9EB5 / \u6797\u6771\u82B3\u725B\u8089\u9EB5",
          "en": "Yongkang Beef Noodles",
          "ja": "\u6C38\u5EB7\u725B\u8089\u9EBA",
          "ko": "\uC735\uCE89 \uB274\uB7EC\uC6B0\uBA58",
          "vi": "M\xEC b\xF2 Yongkang"
        },
        {
          "zh-TW": "\u9952\u6CB3\u8857\u591C\u5E02",
          "en": "Raohe Night Market",
          "ja": "\u9952\u6CB3\u8857\u591C\u5E02",
          "ko": "\uB77C\uC624\uD5C8\uC81C \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Raohe"
        }
      ],
      "historyStory": {
        "zh-TW": "1949\u5E74\u96A8\u570B\u6C11\u653F\u5E9C\u9077\u53F0\u7684\u56DB\u5DDD\u8001\u5175\uFF0C\u5728\u9AD8\u96C4\u5CA1\u5C71\u4EE5\u8C46\u74E3\u91AC\u3001\u82B1\u6912\u7D50\u5408\u53F0\u7063\u672C\u7522\u9EC3\u725B\u8089\u71C9\u88FD\u6210\u7B2C\u4E00\u7897\u300C\u5DDD\u5473\u7D05\u71D2\u725B\u8089\u9EB5\u300D\uFF0C\u96A8\u5F8C\u5728\u53F0\u5317\u6C38\u5EB7\u8857\u8207\u897F\u9580\u753A\u767C\u63DA\u5149\u5927\u3002\u6FC3\u90C1\u5E36\u7518\u751C\u7684\u7D05\u71D2\u6E6F\u982D\u914D\u4E0A\u624B\u5207\u82B1\u7D0B\u725B\u8171\u8207\u8EDF\u7CEF\u725B\u7B4B\uFF0C\u662F\u4E16\u754C\u65C5\u4EBA\u4F86\u53F0\u5FC5\u5403\u7B2C\u4E00\u540D\u3002",
        "en": "Created by Sichuan veteran soldiers in Kaohsiung in the 1950s using fermented chili bean paste and aromatics with beef shanks, this dish evolved into Taiwan's world-famous culinary masterpiece with noodle shops across Taipei.",
        "ja": "1950\u5E74\u4EE3\u306B\u56DB\u5DDD\u51FA\u8EAB\u306E\u8ECD\u4EBA\u304C\u9AD8\u96C4\u3067\u8C46\u677F\u91A4\u3084\u516B\u89D2\u3092\u7528\u3044\u3066\u4F5C\u3063\u305F\u306E\u304C\u30EB\u30FC\u30C4\u3002\u53F0\u5317\u30FB\u6C38\u5EB7\u8857\u306A\u3069\u3067\u9032\u5316\u3092\u9042\u3052\u3001\u4ECA\u3084\u4E16\u754C\u4E2D\u304B\u3089\u89B3\u5149\u5BA2\u304C\u8A2A\u308C\u308B\u53F0\u6E7E\u3092\u4EE3\u8868\u3059\u308B\u540D\u7269\u6599\u7406\u3068\u306A\u308A\u307E\u3057\u305F\u3002",
        "ko": "1950\uB144\uB300 \uC0AC\uCC9C \uCD9C\uC2E0 \uCC38\uC804 \uAD70\uC778\uB4E4\uC774 \uACE0\uD5A5\uC758 \uB450\uBC18\uC7A5\uACFC \uD5A5\uC2E0\uB8CC\uB97C \uB300\uB9CC\uC0B0 \uC18C\uACE0\uAE30\uC640 \uC811\uBAA9\uD574 \uB9CC\uB4E0 \uC74C\uC2DD\uC785\uB2C8\uB2E4. \uD0C0\uC774\uBCA0\uC774 \uC735\uCE89\uC81C\uB97C \uC911\uC2EC\uC73C\uB85C \uBC1C\uC804\uD558\uC5EC \uC624\uB298\uB0A0 \uB300\uB9CC\uC744 \uB300\uD45C\uD558\uB294 \uC138\uACC4\uC801\uC778 \uC694\uB9AC\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
        "vi": "B\u1EAFt ngu\u1ED3n t\u1EEB nh\u1EEFng n\u0103m 1950 do nh\u1EEFng ng\u01B0\u1EDDi l\xEDnh T\u1EE9 Xuy\xEAn k\u1EBFt h\u1EE3p t\u01B0\u01A1ng \u1EDBt \u0111\u1EADu b\u1EA3n v\u1EDBi b\u1EAFp b\xF2 v\xE0 g\xE2n b\xF2 h\u1EA7m nh\u1EEB, t\u1EA1o n\xEAn m\xF3n m\xEC b\xF2 tr\u1EE9 danh c\u1EE7a \u0110\xE0i B\u1EAFc."
      },
      "taiwaneseHokkien": "G\xFB-bah-m\u012B (\u310D\u3128\u02CA \u3105\u311A \u3107\u3127\u02C7)",
      "mandarinPinyin": "Ni\xFAr\xF2umi\xE0n (\u310B\u3127\u3121\u02CA \u3116\u3121\u02CB \u3107\u3127\u3122\u02CB)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u4E00\u7897\u7D05\u71D2\u534A\u7B4B\u534A\u8089\u9EB5\uFF0C\u5BEC\u9EB5\u52A0\u9178\u83DC"
    },
    "ingredients": [
      {
        "id": "beef-shank",
        "name": {
          "zh-TW": "\u725B\u8171\u5FC3 (\u91D1\u9322\u8171 / \u82B1\u8171)",
          "en": "Beef Shank (Shin with Marbled Tendons)",
          "ja": "\u725B\u30B9\u30CD\u8089\uFF08\u3059\u3058\u306E\u5165\u3063\u305F\u4E0A\u8CEA\u90E8\u4F4D\uFF09",
          "ko": "\uC18C \uC544\uB871\uC0AC\uD0DC (\uB9C8\uBE14\uB9C1 \uC88B\uC740 \uBD80\uC704)",
          "vi": "B\u1EAFp hoa b\xF2 (B\u1EAFp b\xF2 nhi\u1EC1u g\xE2n)"
        },
        "amount": 600,
        "unitMetric": "g",
        "unitUS": "1.3 lbs",
        "isKeyFlavor": true,
        "chineseName": "\u725B\u8171\u5FC3",
        "chinesePinyin": "Ni\xFA ji\xE0n x\u012Bn"
      },
      {
        "id": "beef-tendon",
        "name": {
          "zh-TW": "\u719F\u725B\u7B4B (\u6216\u751F\u725B\u8E44\u7B4B)",
          "en": "Beef Tendon (Pre-cooked or raw)",
          "ja": "\u725B\u3059\u3058\uFF08\u30A2\u30AD\u30EC\u30B9\u8171\uFF09",
          "ko": "\uC18C \uC2A4\uC9C0 (\uC18C \uD798\uC904)",
          "vi": "G\xE2n b\xF2"
        },
        "amount": 300,
        "unitMetric": "g",
        "unitUS": "0.7 lbs",
        "isKeyFlavor": true,
        "chineseName": "\u725B\u7B4B",
        "chinesePinyin": "Ni\xFA j\u012Bn"
      },
      {
        "id": "spicy-bean-paste",
        "name": {
          "zh-TW": "\u53F0\u7063\u5CA1\u5C71\u8FA3\u8C46\u74E3\u91AC (\u6216\u90EB\u7E23\u8C46\u74E3)",
          "en": "Taiwanese Spicy Fermented Bean Paste (Doubanjiang)",
          "ja": "\u53F0\u6E7E\u7523 \u8F9B\u53E3\u8C46\u677F\u91A4\uFF08\u5CA1\u5C71\u8C46\u74E3\u91A4\uFF09",
          "ko": "\uB300\uB9CC \uAC15\uC0B0 \uB450\uBC18\uC7A5 (\uB9E4\uCF64\uD55C \uB450\uBC18\uC7A5)",
          "vi": "T\u01B0\u01A1ng h\u1ED9t \u1EDBt cay \u0110\xE0i Loan (\u0110\u1EADu b\u1EA3n t\u01B0\u01A1ng)"
        },
        "amount": 45,
        "unitMetric": "g",
        "unitUS": "2.5 tbsp",
        "isKeyFlavor": true,
        "chineseName": "\u8FA3\u8C46\u74E3\u91AC",
        "chinesePinyin": "L\xE0 d\xF2ub\xE0n ji\xE0ng",
        "substitute": {
          "substituteName": {
            "zh-TW": "\u56DB\u5DDD\u90EB\u7E23\u8C46\u74E3\u91AC + 1\u8336\u5319\u7CD6",
            "en": "Sichuan Pixian Broad Bean Paste + 1 tsp sugar",
            "ja": "\u56DB\u5DDD\u30D4\u30A3\u30B7\u30A7\u30F3\u8C46\u677F\u91A4\uFF0B\u7802\u7CD6\u5C0F\u3055\u30581",
            "ko": "\uD53C\uD604 \uB450\uBC18\uC7A5 + \uC124\uD0D5 1\uC791\uC740\uC220",
            "vi": "T\u01B0\u01A1ng \u1EDBt \u0111\u1EADu b\u1EA3n T\u1EE9 Xuy\xEAn + 1 th\xECa \u0111\u01B0\u1EDDng"
          },
          "ratio": "1:1",
          "explanation": {
            "zh-TW": "\u53F0\u7063\u5CA1\u5C71\u8FA3\u8C46\u74E3\u91AC\u5FAE\u751C\u9187\u539A\uFF0C\u82E5\u7528\u56DB\u5DDD\u8C46\u74E3\u91AC\u504F\u9E79\u8FA3\uFF0C\u88DC\u4E00\u8336\u5319\u7CD6\u5373\u53EF\u5B8C\u7F8E\u9084\u539F\u53F0\u7063\u98A8\u5473\u3002",
            "en": "Taiwanese Doubanjiang is sweeter. If using Sichuan style, add 1 tsp sugar to balance salinity.",
            "ja": "\u53F0\u6E7E\u306E\u8C46\u677F\u91A4\u306F\u7518\u307F\u304C\u3042\u308A\u307E\u3059\u3002\u4E2D\u83EF\u306E\u8C46\u677F\u91A4\u3092\u4F7F\u3046\u5834\u5408\u306F\u7802\u7CD6\u3092\u5C11\u3057\u52A0\u3048\u3066\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "ko": "\uB300\uB9CC \uB450\uBC18\uC7A5\uC740 \uAC10\uCE60\uB9DB\uACFC \uB2E8\uB9DB\uC774 \uB3CC\uC544, \uC77C\uBC18 \uB450\uBC18\uC7A5 \uC0AC\uC6A9 \uC2DC \uC124\uD0D5\uC744 \uC57D\uAC04 \uB354\uD574\uC8FC\uC138\uC694.",
            "vi": "\u0110\u1EADu b\u1EA3n t\u01B0\u01A1ng \u0110\xE0i Loan c\xF3 v\u1ECB ng\u1ECDt d\u1ECBu, n\u1EBFu d\xF9ng t\u01B0\u01A1ng T\u1EE9 Xuy\xEAn h\xE3y th\xEAm 1 th\xECa \u0111\u01B0\u1EDDng."
          },
          "whereToBuy": {
            "zh-TW": "\u5404\u5927\u4E9E\u8D85 (\u5C0B\u627E\u5CA1\u5C71\u660E\u5FB7\u8C46\u74E3\u91AC\u6216\u91D1\u862D)",
            "en": "99 Ranch, H-Mart (Ming Teh or Kimlan brands)",
            "ja": "\u30A2\u30B8\u30A2\u98DF\u6750\u5E97\u3001\u4E2D\u83EF\u30B9\u30FC\u30D1\u30FC",
            "ko": "\uC911\uAD6D \uC2DD\uC790\uC7AC \uBAB0",
            "vi": "Si\xEAu th\u1ECB \u0111\u1ED3 Hoa"
          }
        }
      },
      {
        "id": "beef-spice-satchel",
        "name": {
          "zh-TW": "\u725B\u8089\u9EB5\u6EF7\u5305 (\u516B\u89D2+\u82B1\u6912+\u6842\u76AE+\u8349\u679C+\u7518\u8349)",
          "en": "Beef Spice Sachet (Star Anise, Sichuan Pepper, Cinnamon, Tsaoko, Licorice)",
          "ja": "\u7279\u88FD\u30B9\u30D1\u30A4\u30B9\u30D0\u30C3\u30B0\uFF08\u516B\u89D2\u3001\u82B1\u6912\u3001\u30B7\u30CA\u30E2\u30F3\u3001\u8349\u679C\uFF09",
          "ko": "\uC6B0\uC721\uBA74 \uD55C\uBC29 \uD5A5\uC2E0\uB8CC \uD329 (\uD314\uAC01+\uD654\uC870+\uACC4\uD53C+\uCD08\uACFC)",
          "vi": "G\xF3i th\u1EA3o m\u1ED9c h\u1EA7m b\xF2 (Hoa h\u1ED3i, th\u1EA3o qu\u1EA3, qu\u1EBF, ti\xEAu T\u1EE9 Xuy\xEAn)"
        },
        "amount": 1,
        "unitMetric": "bag",
        "unitUS": "1 pack",
        "isKeyFlavor": true,
        "chineseName": "\u725B\u8089\u6EF7\u5305",
        "chinesePinyin": "Ni\xFA r\xF2u l\u01D4 b\u0101o"
      },
      {
        "id": "tomatoes-beef",
        "name": {
          "zh-TW": "\u65B0\u9BAE\u719F\u756A\u8304 (\u5207\u5927\u584A\u71AC\u6E6F\u81EA\u7136\u679C\u9178)",
          "en": "Ripe Tomatoes (Cut into Wedges for Natural Umami)",
          "ja": "\u5B8C\u719F\u30C8\u30DE\u30C8\uFF08\u65E8\u5473\u3068\u9178\u5473\u7528\uFF09",
          "ko": "\uC644\uC219 \uD1A0\uB9C8\uD1A0 (\uAC10\uCE60\uB9DB\uACFC \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uC0B0\uBBF8)",
          "vi": "C\xE0 chua ch\xEDn m\u1ECDng"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 whole",
        "chineseName": "\u725B\u756A\u8304",
        "chinesePinyin": "Ni\xFA f\u0101n qi\xE9"
      },
      {
        "id": "taiwanese-noodles",
        "name": {
          "zh-TW": "\u53F0\u7063\u967D\u6625\u62C9\u9EB5\u6216\u624B\u5DE5\u5200\u524A\u9EB5",
          "en": "Fresh Taiwanese Wheat Noodles or Knife-Cut Noodles",
          "ja": "\u53F0\u6E7E\u751F\u30E9\u30FC\u30E1\u30F3\u307E\u305F\u306F\u624B\u6253\u3061\u5200\u524A\u9EBA",
          "ko": "\uB300\uB9CC\uC2DD \uAD75\uC740 \uC0DD\uBA74 \uB610\uB294 \uB3C4\uC0AD\uBA74",
          "vi": "M\xEC t\u01B0\u01A1i s\u1EE3i to ho\u1EB7c m\xEC dao g\u1ECDt \u0110\xE0i Loan"
        },
        "amount": 400,
        "unitMetric": "g",
        "unitUS": "14 oz",
        "chineseName": "\u967D\u6625\u62C9\u9EB5",
        "chinesePinyin": "Y\xE1ng ch\u016Bn l\u0101 mi\xE0n"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u725B\u8171\u725B\u7B4B\u6C46\u71D9\u8207\u624B\u5207\u539A\u584A",
          "en": "Blanch Beef Shank & Tendon, Cut Thick Chunks",
          "ja": "\u725B\u30B9\u30CD\u8089\u3068\u725B\u3059\u3058\u306E\u4E0B\u8339\u3067\uFF06\u6975\u539A\u30AB\u30C3\u30C8",
          "ko": "\uC18C\uACE0\uAE30 \uC0AC\uD0DC\uC640 \uC2A4\uC9C0 \uB370\uCE58\uAE30 \uBC0F \uB450\uD23C\uD558\uAC8C \uC370\uAE30",
          "vi": "Ch\u1EA7n b\u1EAFp b\xF2, g\xE2n b\xF2 v\xE0 th\xE1i mi\u1EBFng d\xE0y"
        },
        "instruction": {
          "zh-TW": "\u725B\u8171\u8207\u725B\u7B4B\u51B7\u6C34\u4E0B\u934B\uFF0C\u52A0\u5165\u8591\u7247\u3001\u8525\u6BB5\u3001\u7C73\u9152\uFF0C\u5927\u706B\u716E\u6EFE 8 \u5206\u9418\u53BB\u9664\u8840\u6C34\u8207\u96DC\u8CEA\u3002\u6488\u51FA\u7528\u51B7\u6C34\u6D17\u6DE8\u8868\u9762\uFF0C\u7528\u5200\u5207\u6210\u7D04 2.5 \u516C\u5206\u7684\u539A\u5BE6\u5927\u584A\uFF08\u716E\u5F8C\u6703\u7E2E\u5C0F\uFF0C\u5207\u5927\u584A\u624D\u6709\u5403\u8089\u5FEB\u611F\uFF01\uFF09\u3002",
          "en": "Place whole beef shank and tendon in cold water with ginger, scallions, and rice wine. Boil for 8 mins, skim scum, and rinse in cold water. Slice into thick 2.5cm chunks (beef shrinks while braising, so cut large!).",
          "ja": "\u725B\u30B9\u30CD\u8089\u3068\u725B\u3059\u3058\u3092\u751F\u59DC\u3001\u30CD\u30AE\u3001\u9152\u3068\u6C34\u304B\u3089\u716E\u30668\u5206\u4E0B\u8339\u3067\u3057\u30A2\u30AF\u3092\u629C\u304D\u307E\u3059\u3002\u51B7\u6C34\u3067\u6D17\u3044\u30012.5cm\u306E\u5206\u539A\u3044\u4E00\u53E3\u5927\u306B\u30AB\u30C3\u30C8\u3057\u307E\u3059\uFF08\u716E\u8FBC\u3080\u3068\u7E2E\u3080\u305F\u3081\u5927\u304D\u3081\u306B\u5207\u308B\u306E\u304C\u30B3\u30C4\uFF01\uFF09\u3002",
          "ko": "\uC0AC\uD0DC\uC640 \uC2A4\uC9C0\uB97C \uC0DD\uAC15, \uB300\uD30C, \uB9DB\uC220\uACFC \uD568\uAED8 \uCC2C\uBB3C\uC5D0 \uB123\uACE0 8\uBD84\uAC04 \uB053\uC5EC \uBD88\uC21C\uBB3C\uC744 \uBE8D\uB2C8\uB2E4. \uCC2C\uBB3C\uC5D0 \uD5F9\uAD88 2.5cm \uB450\uAED8\uB85C \uD07C\uC9C1\uD558\uAC8C \uC379\uB2C8\uB2E4 (\uC775\uC73C\uBA74\uC11C \uC904\uC5B4\uB4E4\uBBC0\uB85C \uD07C\uC9C1\uD574\uC57C \uC2DD\uAC10\uC774 \uC88B\uC2B5\uB2C8\uB2E4).",
          "vi": "Cho b\u1EAFp b\xF2 v\xE0 g\xE2n b\xF2 v\xE0o n\u1ED3i n\u01B0\u1EDBc l\u1EA1nh c\xF9ng g\u1EEBng, h\xE0nh l\xE1 v\xE0 r\u01B0\u1EE3u lu\u1ED9c 8 ph\xFAt h\u1EDBt b\u1ECDt. R\u1EEDa s\u1EA1ch th\xE1i mi\u1EBFng d\xE0y 2.5cm."
        },
        "image": "/images/beef-step1.jpg",
        "durationSeconds": 600
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u7206\u9999\u8F9B\u9999\u6599\u8207\u7178\u7092\u7D05\u4EAE\u8C46\u74E3\u91AC",
          "en": "Stir-Fry Aromatics & Caramelize Doubanjiang",
          "ja": "\u9999\u5473\u91CE\u83DC\u3092\u7092\u3081\u3001\u8C46\u677F\u91A4\u306E\u8D64\u3044\u65E8\u5473\u6CB9\u3092\u5F15\u304D\u51FA\u3059",
          "ko": "\uD5A5\uC2E0\uCC44 \uBCF6\uAE30 \uBC0F \uB450\uBC18\uC7A5 \uACE0\uCD94\uAE30\uB984 \uB0B4\uAE30",
          "vi": "Phi th\u01A1m th\u1EA3o m\u1ED9c v\xE0 x\xE0o t\u01B0\u01A1ng \u0111\u1EADu b\u1EA3n l\xEAn m\xE0u \u0111\u1ECF \u0111\u1EB9p"
        },
        "instruction": {
          "zh-TW": "\u6DF1\u934B\u4E2D\u5012\u5165 2 \u5927\u5319\u6CB9\uFF0C\u4E0B\u62CD\u788E\u5927\u849C\u3001\u8001\u8591\u7247\u3001\u6D0B\u8525\u584A\u3001\u516B\u89D2\u3001\u82B1\u6912\u7C92\u8207\u8089\u6842\u68D2\u4E2D\u706B\u7206\u9999 3 \u5206\u9418\u3002\u52A0\u5165 45g \u8FA3\u8C46\u74E3\u91AC\u8207 25g \u51B0\u7CD6\uFF0C\u4EE5\u4E2D\u5C0F\u706B\u6162\u7092 2 \u5206\u9418\uFF0C\u7092\u51FA\u7D05\u4EAE\u8A98\u4EBA\u7684\u7D05\u6CB9\u9999\u6C23\uFF01",
          "en": "Heat 2 tbsp oil in pot over medium flame. Add crushed garlic, sliced ginger, onion, star anise, peppercorns, and cinnamon stick for 3 mins. Add 45g Doubanjiang and 25g rock sugar, stirring for 2 mins until fragrant red oil bubbles.",
          "ja": "\u934B\u306B\u6CB9\u5927\u3055\u30582\u3092\u71B1\u3057\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u751F\u59DC\u3001\u7389\u306D\u304E\u3001\u516B\u89D2\u3001\u82B1\u6912\u3001\u30B7\u30CA\u30E2\u30F3\u30923\u5206\u7092\u3081\u307E\u3059\u3002\u8C46\u677F\u91A445g\u3068\u6C37\u7802\u7CD625g\u3092\u52A0\u3048\u3001\u8D64\u3044\u9999\u5473\u6CB9\u304C\u7ACB\u3064\u307E\u3067\u3058\u3063\u304F\u308A\u7092\u3081\u5408\u308F\u305B\u307E\u3059\uFF01",
          "ko": "\uB0C4\uBE44\uC5D0 \uAE30\uB984 2\uD070\uC220\uC744 \uB450\uB974\uACE0 \uB9C8\uB298, \uC0DD\uAC15, \uC591\uD30C, \uD314\uAC01, \uD654\uC870\uB97C 3\uBD84\uAC04 \uBCF6\uC2B5\uB2C8\uB2E4. \uB450\uBC18\uC7A5 45g\uACFC \uBE59\uD0D5 25g\uC744 \uB123\uACE0 \uC911\uC57D\uBD88\uC5D0\uC11C \uBD89\uC740 \uACE0\uCD94\uAE30\uB984 \uD5A5\uC774 \uD53C\uC5B4\uC624\uB97C \uB54C\uAE4C\uC9C0 \uBCF6\uC544\uC90D\uB2C8\uB2E4.",
          "vi": "\u0110un n\xF3ng 2 th\xECa d\u1EA7u, phi th\u01A1m t\u1ECFi \u0111\u1EADp d\u1EADp, g\u1EEBng, h\xE0nh t\xE2y, hoa h\u1ED3i, qu\u1EBF trong 3 ph\xFAt. Cho t\u01B0\u01A1ng \u1EDBt \u0111\u1EADu b\u1EA3n v\xE0 \u0111\u01B0\u1EDDng ph\xE8n v\xE0o \u0111\u1EA3o 2 ph\xFAt l\xEAn m\xE0u d\u1EA7u \u0111\u1ECF \xF3ng."
        },
        "image": "/images/beef-step2.jpg",
        "durationSeconds": 300
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u52A0\u5165\u725B\u8089\u756A\u8304\u3001\u6162\u706B\u71AC\u71C9\u6FC3\u90C1\u9AD8\u6E6F",
          "en": "Add Beef, Tomatoes & Simmer Rich Broth",
          "ja": "\u725B\u8089\u30FB\u30C8\u30DE\u30C8\u30FB\u716E\u8FBC\u307F\u30D1\u30C3\u30AF\u3092\u52A0\u3048\u3001\u6975\u4E0A\u30B9\u30FC\u30D7\u3092\u716E\u8FBC\u3080",
          "ko": "\uC18C\uACE0\uAE30, \uD1A0\uB9C8\uD1A0, \uD55C\uBC29\uD329 \uB123\uACE0 \uD479 \uB053\uC774\uAE30",
          "vi": "Cho th\u1ECBt b\xF2, c\xE0 chua v\xE0 g\xF3i th\u1EA3o m\u1ED9c ninh n\u01B0\u1EDBc d\xF9ng"
        },
        "instruction": {
          "zh-TW": "\u3010\u50B3\u7D71\u71C9\u934B\u3011\uFF1A\u5012\u5165\u5207\u584A\u725B\u8171\u725B\u7B4B\u7FFB\u7092\u4E0A\u8272\uFF0C\u6CBF\u934B\u908A\u6DCB\u5165\u91AC\u6CB9 80ml \u8207\u7C73\u9152 50ml \u7197\u9999\u3002\u52A0\u5165\u756A\u8304\u584A\u3001\u6EF7\u5305\u8207\u6E05\u6C34 1800ml\u3002\u5927\u706B\u716E\u6EFE\u5F8C\u8F49\u5FAE\u5C0F\u706B\uFF0C\u52A0\u84CB\u6162\u71C9 80~90 \u5206\u9418\u81F3\u725B\u8171\u8EDF\u721B\u5165\u5473\u3001\u725B\u7B4B\u6676\u7469\u8EDFQ\u3002\n\u3010\u96FB\u58D3\u529B\u934B\u3011\uFF1AHigh Pressure \u58D3 35 \u5206\u9418\u81EA\u7136\u6D29\u58D3\u3002",
          "en": "Traditional Pot: Add beef chunks, searing with 80ml soy sauce and 50ml rice wine. Add tomato wedges, spice pouch, and 1800ml water. Bring to boil, cover and simmer on low for 80-90 mins until shank is meltingly tender and tendons are translucent gelatin.\nInstant Pot: High Pressure for 35 mins + Natural Release.",
          "ja": "\u3010\u666E\u901A\u934B\u3011\uFF1A\u725B\u8089\u3092\u52A0\u3048\u3066\u7092\u3081\u3001\u91A4\u6CB980ml\u3068\u915250ml\u3092\u56DE\u3057\u5165\u308C\u307E\u3059\u3002\u30C8\u30DE\u30C8\u3001\u30B9\u30D1\u30A4\u30B9\u30D1\u30C3\u30AF\u3001\u6C341800ml\u3092\u52A0\u3048\u3001\u6CB8\u9A30\u5F8C\u30D5\u30BF\u3092\u3057\u3066\u5F31\u706B\u306780\u301C90\u5206\u30B3\u30C8\u30B3\u30C8\u716E\u8FBC\u307F\u307E\u3059\u3002\n\u3010\u5727\u529B\u934B\u3011\uFF1A\u9AD8\u5727\u306735\u5206\u52A0\u71B1\u3001\u81EA\u7136\u6E1B\u5727\u3002",
          "ko": "\u3010\uC77C\uBC18 \uB0C4\uBE44\u3011\uFF1A\uC18C\uACE0\uAE30\uB97C \uB123\uACE0 \uBCF6\uB2E4\uAC00 \uAC04\uC7A5 80ml\uC640 \uB9DB\uC220 50ml\uB97C \uB458\uB7EC \uD5A5\uC744 \uC785\uD799\uB2C8\uB2E4. \uD1A0\uB9C8\uD1A0, \uD55C\uBC29\uD329, \uBB3C 1800ml\uB97C \uBD93\uACE0 \uB053\uC73C\uBA74 \uC57D\uBD88\uB85C \uC904\uC5EC \uB69C\uAED1 \uB36E\uACE0 80~90\uBD84\uAC04 \uD479 \uC870\uB9BD\uB2C8\uB2E4.\n\u3010\uC778\uC2A4\uD134\uD2B8\uD31F\u3011\uFF1AHigh Pressure 35\uBD84 \uD6C4 \uC790\uC5F0 \uAC10\uC555\u3002",
          "vi": "N\u1ED3i th\u01B0\u1EDDng: Cho b\u1EAFp b\xF2 v\xE0o \u0111\u1EA3o s\u0103n, r\u01B0\u1EDBi n\u01B0\u1EDBc t\u01B0\u01A1ng v\xE0 r\u01B0\u1EE3u. Th\xEAm c\xE0 chua, g\xF3i th\u1EA3o m\u1ED9c v\xE0 1.8L n\u01B0\u1EDBc, ninh nh\u1ECF l\u1EEDa 80-90 ph\xFAt cho b\u1EAFp b\xF2 m\u1EC1m r\u1EE5c g\xE2n trong veo.\nN\u1ED3i \xE1p su\u1EA5t: High Pressure 35 ph\xFAt x\u1EA3 van t\u1EF1 nhi\xEAn."
        },
        "image": "/images/beef-step3.jpg",
        "durationSeconds": 5400,
        "cookwareVariations": [
          {
            "cookware": "instantPot",
            "tempAndSetting": "Manual High Pressure: 35 mins + Natural Release",
            "instructionOverride": {
              "zh-TW": "\u5728 Instant Pot \u5167\u7528 Saut\xE9 \u6A21\u5F0F\u7092\u9999\u8F9B\u6599\u8207\u8C46\u74E3\u91AC\uFF0C\u52A0\u5165\u8089\u584A\u3001\u756A\u8304\u3001\u91AC\u6CB9\u3001\u6C34\u8207\u6EF7\u5305\u3002\u9396\u84CB\u8A2D\u5B9A Meat/Stew \u6A21\u5F0F 35 \u5206\u9418\uFF0C\u81EA\u7136\u6D29\u58D3\u5F8C\u958B\u84CB\uFF0C\u725B\u7B4B\u8EDF\u7CEF\u5982\u540C\u679C\u51CD\uFF01",
              "en": "Use Saut\xE9 mode to brown aromatics and beef. Add liquid, tomatoes, and spice pouch. Lock lid, select High Pressure for 35 mins. Natural Release for melt-in-mouth tendons!",
              "ja": "Instant Pot\u306ESaut\xE9\u30E2\u30FC\u30C9\u3067\u7092\u3081\u305F\u5F8C\u3001\u6C34\u3068\u8ABF\u5473\u6599\u3092\u52A0\u3048\u9AD8\u572735\u5206\u3002\u81EA\u7136\u6E1B\u5727\u3059\u308C\u3070\u725B\u3059\u3058\u304C\u30BC\u30EA\u30FC\u306E\u3088\u3046\u306B\u3068\u308D\u3051\u307E\u3059\uFF01",
              "ko": "\uC778\uC2A4\uD134\uD2B8\uD31F Saut\xE9 \uBAA8\uB4DC\uB85C \uBCF6\uC740 \uD6C4 \uBB3C\uACFC \uC7AC\uB8CC\uB97C \uB123\uACE0 High Pressure 35\uBD84 \uC124\uC815 \uD6C4 \uC790\uC5F0 \uAC10\uC555\uD558\uBA74 \uC2A4\uC9C0\uAC00 \uC824\uB9AC\uCC98\uB7FC \uBD80\uB4DC\uB7EC\uC6CC\uC9D1\uB2C8\uB2E4.",
              "vi": "D\xF9ng ch\u1EBF \u0111\u1ED9 Saut\xE9 x\xE0o th\u01A1m nguy\xEAn li\u1EC7u, th\xEAm n\u01B0\u1EDBc r\u1ED3i ch\u1ECDn High Pressure 35 ph\xFAt x\u1EA3 van t\u1EF1 nhi\xEAn."
            }
          }
        ]
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u6EFE\u6C34\u716E\u62C9\u9EB5\u8207\u6C46\u71D9\u7FE0\u7DA0\u9752\u83DC",
          "en": "Boil Springy Wheat Noodles & Bok Choy",
          "ja": "\u305F\u3063\u3077\u308A\u306E\u304A\u6E6F\u3067\u30E2\u30C1\u30E2\u30C1\u9EBA\u3068\u9752\u83DC\u3092\u8339\u3067\u308B",
          "ko": "\uCAC4\uAE43\uD55C \uC0DD\uBA74 \uC0B6\uAE30 \uBC0F \uCCAD\uACBD\uCC44 \uB370\uCE58\uAE30",
          "vi": "Lu\u1ED9c m\xEC s\u1EE3i dai v\xE0 ch\u1EA7n c\u1EA3i th\xECa xanh m\u01B0\u1EDBt"
        },
        "instruction": {
          "zh-TW": "\u53E6\u8D77\u5927\u934B\u6EFE\u6C34\uFF0C\u4E0B\u53F0\u7063\u967D\u6625\u9EB5\u6216\u5200\u524A\u9EB5\u716E\u7D04 4~5 \u5206\u9418\u81F3\u5F48\u7259\u7B4B\u9053\uFF0C\u8D77\u934B\u524D 30 \u79D2\u4E0B\u5C0F\u767D\u83DC\u6216\u9752\u6C5F\u83DC\u4E00\u540C\u6C46\u71D9\u3002\u6488\u8D77\u701D\u4E7E\u6C34\u5206\uFF0C\u5E73\u5747\u5206\u88DD\u5165\u5927\u9752\u82B1\u74F7\u7897\u4E2D\u3002",
          "en": "In a large pot of boiling water, cook noodles for 4-5 mins until al dente. Drop in bok choy for the final 30 secs. Drain well and divide into large ceramic serving bowls.",
          "ja": "\u5225\u934B\u306B\u6E6F\u3092\u6CB8\u304B\u3057\u3001\u9EBA\u30924\u301C5\u5206\u8339\u3067\u3066\u30A2\u30EB\u30C7\u30F3\u30C6\u306B\u4ED5\u4E0A\u3052\u307E\u3059\u3002\u6700\u5F8C\u306E30\u79D2\u3067\u9752\u83DC\u3092\u52A0\u3048\u3066\u30B5\u30C3\u3068\u8339\u3067\u3001\u6C34\u6C17\u3092\u3057\u3063\u304B\u308A\u5207\u3063\u3066\u5927\u304D\u3081\u306E\u4E3C\u306B\u5165\u308C\u307E\u3059\u3002",
          "ko": "\uB2E4\uB978 \uB0C4\uBE44\uC5D0 \uB053\uB294 \uBB3C\uC744 \uB109\uB109\uD788 \uBD93\uACE0 \uBA74\uC744 4~5\uBD84\uAC04 \uCAC4\uAE43\uD558\uAC8C \uC0B6\uC544\uB0C5\uB2C8\uB2E4. \uAC74\uC9C0\uAE30 30\uCD08 \uC804 \uCCAD\uACBD\uCC44\uB97C \uB123\uC5B4 \uC0B4\uC9DD \uB370\uCE58\uACE0, \uBB3C\uAE30\uB97C \uD138\uC5B4 \uD070 \uB300\uC811\uC5D0 \uB2F4\uC2B5\uB2C8\uB2E4.",
          "vi": "\u0110un s\xF4i n\u01B0\u1EDBc lu\u1ED9c m\xEC 4-5 ph\xFAt cho ch\xEDn t\u1EDBi dai gi\xF2n, 30 gi\xE2y cu\u1ED1i th\u1EA3 c\u1EA3i th\xECa v\xE0o ch\u1EA7n. V\u1EDBt ra \u0111\u1EC3 r\xE1o chia \u0111\u1EC1u v\xE0o t\xF4 l\u1EDBn."
        },
        "image": "/images/beef-step4.jpg",
        "durationSeconds": 300
      },
      {
        "stepNumber": 5,
        "title": {
          "zh-TW": "\u6F86\u4E0A\u6FC3\u9187\u7D05\u6E6F\uFF0C\u92EA\u6EFF\u725B\u8171\u725B\u7B4B\u8207\u7092\u9178\u83DC\uFF01",
          "en": "Ladle Rich Red Broth, Garnish with Pickled Greens",
          "ja": "\u71B1\u3005\u306E\u6FC3\u539A\u30B9\u30FC\u30D7\u3092\u6CE8\u304E\u3001\u8089\u30FB\u725B\u3059\u3058\u30FB\u9178\u83DC\u3092\u76DB\u308A\u4ED8\u3051\u3066\u5B8C\u6210\uFF01",
          "ko": "\uC9C4\uD55C \uC721\uC218\uB97C \uBD93\uACE0 \uC0AC\uD0DC, \uC2A4\uC9C0, \uBCF6\uC740 \uAC13\uC808\uC784 \uACE0\uBA85 \uC5B9\uC5B4 \uC644\uC131!",
          "vi": "Chan ng\u1EADp n\u01B0\u1EDBc d\xF9ng \u0111\u1EADm \u0111\xE0, x\u1EBFp b\u1EAFp b\xF2 g\xE2n b\xF2 v\xE0 d\u01B0a chua th\u01B0\u1EDFng th\u1EE9c!"
        },
        "instruction": {
          "zh-TW": "\u5728\u9EB5\u7897\u4E0A\u6574\u9F4A\u92EA\u4E0A\u5207\u539A\u7247\u7684\u8EDF\u5AE9\u725B\u8171\u5FC3\u8207\u6676\u7469\u725B\u7B4B\uFF0C\u64FA\u4E0A\u7FE0\u7DA0\u9752\u83DC\u3002\u8200\u5165\u6EFE\u71D9\u6FC3\u9187\u7684\u7D05\u71D2\u725B\u8089\u9AD8\u6E6F\uFF0C\u6492\u4E0A\u4E00\u5927\u628A\u65B0\u9BAE\u8525\u82B1\uFF0C\u52A0\u4E00\u6EFF\u52FA\u9748\u9B42\u7092\u9178\u83DC\uFF08\u55DC\u8FA3\u8005\u6DCB\u4E00\u5319\u8FA3\u725B\u6CB9\uFF09\uFF0C\u5927\u53E3\u958B\u52D5\uFF01",
          "en": "Arrange thick beef shank slices and translucent tendons over the noodles. Ladle boiling rich red-braised soup to fill the bowl. Top with fresh chopped scallions and a heap of Taiwanese sour pickled mustard greens (and beef chili tallow). Enjoy!",
          "ja": "\u9EBA\u306E\u4E0A\u306B\u6975\u539A\u725B\u30B9\u30CD\u8089\u3001\u3068\u308D\u3051\u308B\u725B\u3059\u3058\u3001\u9752\u83DC\u3092\u7F8E\u3057\u304F\u4E26\u3079\u307E\u3059\u3002\u71B1\u3005\u306E\u6FC3\u539A\u30B9\u30FC\u30D7\u3092\u305F\u3063\u3077\u308A\u6CE8\u304E\u3001\u523B\u307F\u30CD\u30AE\u3068\u5C71\u76DB\u308A\u306E\u9178\u83DC\uFF08\u304A\u597D\u307F\u3067\u7279\u88FD\u725B\u8102\u30E9\u30FC\u6CB9\u3082\uFF09\u3092\u6DFB\u3048\u3066\u3044\u305F\u3060\u304D\u307E\u3059\uFF01",
          "ko": "\uBA74 \uC704\uC5D0 \uB450\uD23C\uD55C \uC0AC\uD0DC\uC640 \uCAC0\uB4DD\uD55C \uC2A4\uC9C0, \uCCAD\uACBD\uCC44\uB97C \uC5B9\uACE0 \uB728\uAC70\uC6B4 \uC721\uC218\uB97C \uB4EC\uBFCD \uBD93\uC2B5\uB2C8\uB2E4. \uCAD1\uCAD1 \uC36C \uB300\uD30C\uC640 \uBCF6\uC740 \uAC13\uC808\uC784 \uACE0\uBA85\uC744 \uB4EC\uBFCD \uC5B9\uC5B4 \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694!",
          "vi": "X\u1EBFp b\u1EAFp b\xF2 th\xE1i d\xE0y, g\xE2n b\xF2 d\u1EBBo trong v\xE0 c\u1EA3i th\xECa l\xEAn b\xE1t m\xEC. Chan n\u01B0\u1EDBc d\xF9ng s\xF4i s\xF9ng s\u1EE5c, r\u1EAFc h\xE0nh hoa v\xE0 m\xFAc m\u1ED9t th\xECa d\u01B0a chua x\xE0o th\u01B0\u1EDFng th\u1EE9c ngay!"
        },
        "image": "/images/beef-noodle-soup.jpg",
        "durationSeconds": 60
      }
    ],
    "troubleshooting": [
      {
        "id": "ts-bn-1",
        "problem": {
          "zh-TW": "\u725B\u8089\u71C9\u5B8C\u67F4\u67F4\u7684\u54AC\u4E0D\u52D5\uFF1F",
          "en": "Why is my beef tough and dry instead of melt-in-mouth tender?",
          "ja": "\u716E\u8FBC\u3093\u3060\u304A\u8089\u304C\u56FA\u304F\u3066\u30D1\u30B5\u30D1\u30B5\u3057\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uC18C\uACE0\uAE30\uAC00 \uC9C8\uAE30\uACE0 \uD37D\uD37D\uD55C\uAC00\uC694?",
          "vi": "T\u1EA1i sao th\u1ECBt b\xF2 b\u1ECB dai kh\xF4 kh\xF4ng m\u1EC1m tan?"
        },
        "cause": {
          "zh-TW": "\u71C9\u716E\u706B\u5019\u592A\u5927\uFF08\u5927\u706B\u6703\u4F7F\u8089\u8CEA\u86CB\u767D\u8CEA\u7DCA\u7E2E\u8B8A\u786C\uFF09\uFF0C\u6216\u662F\u71C9\u716E\u6642\u9593\u4E0D\u8DB3\u3002",
          "en": "Boiled on high heat (which seizes muscle fibers) or didn't braise long enough.",
          "ja": "\u5F37\u706B\u3067\u30B0\u30E9\u30B0\u30E9\u716E\u3059\u304E\u305F\u304B\u3001\u716E\u8FBC\u307F\u6642\u9593\u304C\u77ED\u3044\u305F\u3081\u3067\u3059\u3002",
          "ko": "\uAC15\uBD88\uB85C \uD314\uD314 \uB053\uC600\uAC70\uB098(\uB2E8\uBC31\uC9C8\uC774 \uC218\uCD95\uD568), \uB053\uC774\uB294 \uC2DC\uAC04\uC774 \uBD80\uC871\uD588\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "\u0110un l\u1EEDa qu\xE1 l\u1EDBn l\xE0m th\u1EDB th\u1ECBt co c\u1EE9ng ho\u1EB7c ninh ch\u01B0a \u0111\u1EE7 th\u1EDDi gian."
        },
        "solution": {
          "zh-TW": "\u6C34\u6EFE\u5F8C\u52D9\u5FC5\u8F49\u300C\u6700\u5C0F\u5FAE\u706B\u300D\u52A0\u84CB\u6162\u71C9\u81F3\u5C11 80 \u5206\u9418\uFF0C\u5FAE\u706B\u6162\u7168\u624D\u80FD\u5C07\u8089\u7B4B\u5316\u4F5C\u81A0\u8CEA\uFF01",
          "en": "Always turn flame to ultra-low simmer after boiling, covered, for at least 80 mins.",
          "ja": "\u6CB8\u9A30\u5F8C\u306F\u5FC5\u305A\u300C\u6975\u5F31\u706B\u300D\u306B\u3057\u3066\u30D5\u30BF\u3092\u3057\u300180\u5206\u4EE5\u4E0A\u3058\u3063\u304F\u308A\u716E\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uB053\uC5B4\uC624\uB978 \uD6C4 \uBC18\uB4DC\uC2DC \uAC00\uC7A5 \uC57D\uD55C \uC57D\uBD88\uB85C \uC904\uC5EC 80\uBD84 \uC774\uC0C1 \uC740\uADFC\uD558\uAC8C \uB053\uC5EC\uC8FC\uC138\uC694.",
          "vi": "B\u1EAFt bu\u1ED9c h\u1EA1 l\u1EEDa th\u1EADt nh\u1ECF \u0111\u1EADy vung ninh t\u1ED1i thi\u1EC3u 80 ph\xFAt cho g\xE2n th\u1ECBt nh\u1EEB m\u1EC1m."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u725B\u8089\u9EB5\u7684\u9748\u9B42\u4F34\u4FB6\u662F\u300C\u7092\u9178\u83DC\u300D\u8207\u300C\u725B\u8FA3\u6CB9\u300D\uFF0C\u9178\u83DC\u4E2D\u7684\u5FAE\u9178\u80FD\u6FC0\u767C\u725B\u8089\u7684\u7518\u751C\u9BAE\u7F8E\uFF0C\u5403\u4E00\u534A\u5F8C\u52A0\u5165\u9178\u83DC\u80FD\u54C1\u5690\u51FA\u7B2C\u4E8C\u7A2E\u5C64\u6B21\uFF01",
        "en": "Adding Taiwanese pickled mustard greens halfway through eating unlocks a second dimension of flavor, cutting the richness and boosting beef umami.",
        "ja": "\u9014\u4E2D\u3067\u300C\u9178\u83DC\uFF08\u9AD8\u83DC\u6F2C\u3051\uFF09\u300D\u3092\u52A0\u3048\u308B\u3068\u3001\u9178\u5473\u3068\u30B3\u30AF\u304C\u30D7\u30E9\u30B9\u3055\u308C\u4E8C\u5EA6\u7F8E\u5473\u3057\u304F\u697D\u3057\u3081\u307E\u3059\uFF01",
        "ko": "\uC808\uBC18\uCBE4 \uB4DC\uC2E0 \uD6C4 \uBCF6\uC740 \uAC13\uC808\uC784(\uC3F8\uCC28\uC774)\uACFC \uB9E4\uCF64\uD55C \uC6B0\uC9C0\uB97C \uB123\uC73C\uBA74 \uAD6D\uBB3C \uB9DB\uC774 \uD55C \uB2E8\uACC4 \uB354 \uAE4A\uC5B4\uC9D1\uB2C8\uB2E4.",
        "vi": "\u0102n n\u1EEDa b\xE1t r\u1ED3i cho th\xEAm d\u01B0a chua x\xE0o v\xE0 \u1EDBt m\u1EE1 b\xF2 s\u1EBD \u0111\xE1nh th\u1EE9c t\u1EA7ng h\u01B0\u01A1ng v\u1ECB th\u1EE9 hai b\xF9ng n\u1ED5."
      }
    ]
  },
  {
    "id": "mango-shaved-ice",
    "slug": "mango-shaved-ice",
    "title": {
      "zh-TW": "\u76DB\u590F\u5DE8\u7121\u9738\u9BAE\u8292\u679C\u96EA\u82B1\u51B0",
      "en": "Taiwanese Fresh Mango Shaved Snow Ice",
      "ja": "\u53F0\u6E7E\u540D\u7269 \u5B8C\u719F\u30DE\u30F3\u30B4\u30FC\u96EA\u82B1\u6C37\uFF08\u3075\u308F\u3075\u308F\u304B\u304D\u6C37\uFF09",
      "ko": "\uB300\uB9CC \uD504\uB9AC\uBBF8\uC5C4 \uC0DD\uB9DD\uACE0 \uB208\uAF43\uBE59\uC218 (\uB9DD\uAD88\uBE59)",
      "vi": "Bingsu xo\xE0i t\u01B0\u01A1i \u0110\xE0i Loan ng\u1EADp tr\xE0n s\u1EEFa \u0111\u1EB7c (Mango Snow Ice)"
    },
    "subtitle": {
      "zh-TW": "\u5C4F\u6771\u611B\u6587\u8292\u679C\u5207\u5927\u584A\u30FB\u7DBF\u5BC6\u725B\u5976\u96EA\u82B1\u51B0\u8207\u7149\u4E73\u5976\u84CB",
      "en": "Sweet Irwin Mango Chunks, Silky Milk Ribbon Ice & Condensed Milk",
      "ja": "\u5B8C\u719F\u30A2\u30C3\u30D7\u30EB\u30DE\u30F3\u30B4\u30FC\u5C71\u76DB\u308A\xD7\u6975\u4E0A\u30DF\u30EB\u30AF\u96EA\u82B1\u6C37\xD7\u7DF4\u4E73",
      "ko": "\uB2EC\uCF64\uD55C \uC560\uD50C\uB9DD\uACE0 \uAC00\uB4DD\u30FB\uBD80\uB4DC\uB7EC\uC6B4 \uC6B0\uC720 \uB208\uAF43 \uC5BC\uC74C\uACFC \uC5F0\uC720\uC758 \uC559\uC0C1\uBE14",
      "vi": "Xo\xE0i ch\xEDn ng\u1ECDt m\u1ECDng x\u1EAFt kh\u1ED1i to & L\u1EDBp tuy\u1EBFt s\u1EEFa b\xE0o m\u1EC1m tan nh\u01B0 l\u1EE5a"
    },
    "tagline": {
      "zh-TW": "CNN \u8A55\u9078\u5168\u7403\u6700\u4F73\u751C\u9EDE\u4E4B\u4E00\uFF01\u76DB\u590F\u53F0\u7063\u6700\u7480\u74A8\u7684\u9EC3\u91D1\u50B3\u5947",
      "en": "Ranked by CNN as one of the world's top desserts",
      "ja": "CNN\u300C\u4E16\u754C\u4E00\u306E\u30C7\u30B6\u30FC\u30C8\u300D\u9078\u51FA\uFF01\u53F0\u6E7E\u306E\u590F\u3092\u8C61\u5FB4\u3059\u308B\u9EC4\u91D1\u306E\u30B9\u30A4\u30FC\u30C4",
      "ko": "CNN \uC120\uC815 \uC138\uACC4 \uCD5C\uACE0\uC758 \uB514\uC800\uD2B8! \uB300\uB9CC\uC758 \uC5EC\uB984\uC744 \uB300\uD45C\uD558\uB294 \uD669\uAE08\uBE5B \uCD95\uC81C",
      "vi": "\u0110\u01B0\u1EE3c CNN b\xECnh ch\u1ECDn l\xE0 m\u1ED9t trong nh\u1EEFng m\xF3n tr\xE1ng mi\u1EC7ng ngon nh\u1EA5t th\u1EBF gi\u1EDBi"
    },
    "heroImage": "/images/mango-shaved-ice.jpg",
    "difficulty": "easy",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 5,
    "defaultServings": 2,
    "caloriesPerServing": 310,
    "category": "desserts",
    "dietaryTags": [
      "vegetarian",
      "halal",
      "glutenFree"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5317\u6C38\u5EB7\u8857 / \u5C4F\u6771\u678B\u5C71 / \u53F0\u5357\u7389\u4E95",
        "en": "Taipei Yongkang / Pingtung / Tainan Yujing",
        "ja": "\u53F0\u5317\u30FB\u6C38\u5EB7\u8857 / \u5C4F\u6771 / \u53F0\u5357\u30FB\u7389\u4E95",
        "ko": "\uD0C0\uC774\uBCA0\uC774 \uC735\uCE89\uC81C / \uD551\uB465 / \uD0C0\uC774\uB09C \uC704\uC9D5",
        "vi": "\u0110\xE0i B\u1EAFc Yongkang / B\xECnh \u0110\xF4ng / \u0110\xE0i Nam"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u6C38\u5EB7\u8857 (\u601D\u6155\u6614 / \u51B0\u9928\u5275\u59CB\u5730)",
          "en": "Yongkang Street (Smoothie House)",
          "ja": "\u6C38\u5EB7\u8857\uFF08\u601D\u6155\u6614\uFF09",
          "ko": "\uC735\uCE89\uC81C \uC2A4\uBB34\uC2DC \uD558\uC6B0\uC2A4",
          "vi": "Ph\u1ED1 Yongkang (Smoothie House)"
        },
        {
          "zh-TW": "\u58EB\u6797\u591C\u5E02 (\u8F9B\u767C\u4EAD\u96EA\u82B1\u51B0)",
          "en": "Shilin Night Market (Xin Fa Ting)",
          "ja": "\u58EB\u6797\u591C\u5E02\uFF08\u8F9B\u767C\u4EAD\uFF09",
          "ko": "\uC2A4\uB9B0 \uC57C\uC2DC\uC7A5 \uC2E0\uD30C\uD305",
          "vi": "Ch\u1EE3 \u0111\xEAm Shilin"
        }
      ],
      "historyStory": {
        "zh-TW": "1997\u5E74\u53F0\u5317\u6C38\u5EB7\u8857\u300C\u51B0\u9928\u300D\u8001\u95C6\u9996\u5275\u5C07\u5C4F\u6771\u678B\u5C71\u8207\u53F0\u5357\u7389\u4E95\u7684\u7279\u7D1A\u300C\u611B\u6587\u8292\u679C\u300D\u5207\u6210\u5DE8\u578B\u679C\u8089\u584A\uFF0C\u92EA\u5728\u7531\u725B\u5976\u88FD\u6210\u7684\u7DBF\u5BC6\u96EA\u82B1\u51B0\u78DA\u4E0A\uFF0C\u6DCB\u4E0A\u7D14\u6FC3\u7149\u4E73\u8207\u81EA\u88FD\u9BAE\u8292\u679C\u6CE5\uFF0C\u5F15\u767C\u5168\u53F0\u7063\u8207\u5168\u4E9E\u6D32\u7684\u8292\u679C\u51B0\u72C2\u6F6E\uFF0C\u66F4\u88AB CNN \u8A55\u70BA\u4E16\u754C\u6700\u4F73\u590F\u65E5\u751C\u54C1\u3002",
        "en": "Invented on Taipei's Yongkang Street in 1997, vendors layered sweet Pingtung Irwin mango chunks over fluffy shaved milk snow ribbons, drizzled with sweet condensed milk and fresh mango pur\xE9e. It sparked a global dessert phenomenon.",
        "ja": "1997\u5E74\u306B\u53F0\u5317\u30FB\u6C38\u5EB7\u8857\u306E\u300C\u51B0\u9928\uFF08\u73FE\u30FB\u601D\u6155\u6614\uFF09\u300D\u304C\u958B\u767A\u3002\u6975\u7518\u306E\u5B8C\u719F\u30DE\u30F3\u30B4\u30FC\u3092\u8D05\u6CA2\u306B\u5C71\u76DB\u308A\u306B\u3057\u3001\u30D5\u30EF\u30D5\u30EF\u306E\u30DF\u30EB\u30AF\u304B\u304D\u6C37\u306B\u7DF4\u4E73\u3068\u30DE\u30F3\u30B4\u30FC\u30BD\u30FC\u30B9\u3092\u5408\u308F\u305B\u305F\u4F1D\u8AAC\u306E\u30B9\u30A4\u30FC\u30C4\u3067\u3059\u3002",
        "ko": "1997\uB144 \uD0C0\uC774\uBCA0\uC774 \uC735\uCE89\uC81C\uC5D0\uC11C \uC2DC\uC791\uB418\uC5B4 \uC804 \uC138\uACC4\uC801\uC778 \uB9DD\uACE0 \uBE59\uC218 \uC5F4\uD48D\uC744 \uC77C\uC73C\uD0A8 \uC6D0\uC870 \uB514\uC800\uD2B8\uC785\uB2C8\uB2E4. \uBD80\uB4DC\uB7EC\uC6B4 \uC6B0\uC720 \uB208\uAF43 \uC5BC\uC74C \uC704\uC5D0 \uC2E0\uC120\uD558\uACE0 \uB2EC\uCF64\uD55C \uB9DD\uACE0\uB97C \uAC00\uB4DD \uC5B9\uACE0 \uC5F0\uC720\uB97C \uB4EC\uBFCD \uBFCC\uB824 \uC990\uAE41\uB2C8\uB2E4.",
        "vi": "Ra \u0111\u1EDDi n\u0103m 1997 t\u1EA1i ph\u1ED1 Yongkang \u0110\xE0i B\u1EAFc, m\xF3n \u0103n k\u1EBFt h\u1EE3p xo\xE0i t\u01B0\u01A1i m\u1ECDng n\u01B0\u1EDBc tr\xEAn l\u1EDBp tuy\u1EBFt s\u1EEFa b\xE0o m\u1ECBn tan ch\u1EA3y c\xF9ng s\u1EEFa \u0111\u1EB7c ng\u1ECDt b\xE9o."
      },
      "taiwaneseHokkien": "Su\u0101n-k\xF3-ping (\u3119\u3128\u311E\u3123\u02C7 \u310D\u311C\u02CB \u3105\u3127\u3125)",
      "mandarinPinyin": "M\xE1nggu\u01D2 b\u012Bng (\u3107\u3124\u02CA \u310D\u3128\u311B\u02C7 \u3105\u3127\u3125)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u5927\u7897\u8292\u679C\u96EA\u82B1\u51B0\uFF0C\u52A0\u4E00\u7403\u8292\u679C\u51B0\u6DC7\u6DCB"
    },
    "ingredients": [
      {
        "id": "fresh-mango",
        "name": {
          "zh-TW": "\u7279\u7D1A\u719F\u6210\u611B\u6587\u8292\u679C (\u6216\u65B0\u9BAE\u91D1\u714C\u8292\u679C)",
          "en": "Ripe Sweet Mangoes (Irwin, Kent or Honey Mango)",
          "ja": "\u5B8C\u719F\u30DE\u30F3\u30B4\u30FC\uFF08\u30A2\u30C3\u30D7\u30EB\u30DE\u30F3\u30B4\u30FC\u307E\u305F\u306F\u30DA\u30EA\u30AB\u30F3\u30DE\u30F3\u30B4\u30FC\uFF09",
          "ko": "\uC644\uC219 \uC0DD\uB9DD\uACE0 (\uC560\uD50C\uB9DD\uACE0 \uB610\uB294 \uACE8\uB4DC\uB9DD\uACE0)",
          "vi": "Xo\xE0i c\xE1t ch\xEDn m\u1ECDng ng\u1ECDt l\u1ECBm"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 large",
        "isKeyFlavor": true,
        "chineseName": "\u611B\u6587\u8292\u679C",
        "chinesePinyin": "\xC0i w\xE9n m\xE1ng gu\u01D2"
      },
      {
        "id": "condensed-milk",
        "name": {
          "zh-TW": "\u53F0\u7063\u96C0\u5DE2\u9DF9\u724C\u7149\u4E73 (\u6216\u512A\u8CEA\u7149\u4E73)",
          "en": "Sweetened Condensed Milk",
          "ja": "\u52A0\u7CD6\u7DF4\u4E73\uFF08\u30B3\u30F3\u30C7\u30F3\u30B9\u30DF\u30EB\u30AF\uFF09",
          "ko": "\uB2EC\uCF64\uD55C \uC5F0\uC720",
          "vi": "S\u1EEFa \u0111\u1EB7c c\xF3 \u0111\u01B0\u1EDDng"
        },
        "amount": 40,
        "unitMetric": "ml",
        "unitUS": "2.5 tbsp",
        "isKeyFlavor": true,
        "chineseName": "\u7149\u4E73",
        "chinesePinyin": "Li\xE0n r\u01D4"
      },
      {
        "id": "whole-milk-ice-block",
        "name": {
          "zh-TW": "\u81EA\u88FD\u6FC3\u9187\u725B\u5976\u96EA\u82B1\u51B0\u78DA (\u5168\u8102\u9BAE\u5976+\u7149\u4E73+\u9BAE\u5976\u6CB9)",
          "en": "Homemade Milk Snow Block (Whole milk + Condensed milk + Heavy cream)",
          "ja": "\u7279\u88FD\u30DF\u30EB\u30AF\u6C37\uFF08\u725B\u4E73\uFF0B\u7DF4\u4E73\uFF0B\u751F\u30AF\u30EA\u30FC\u30E0\u3092\u51CD\u3089\u305B\u305F\u3082\u306E\uFF09",
          "ko": "\uD648\uBA54\uC774\uB4DC \uC6B0\uC720 \uB208\uAF43 \uC5BC\uC74C (\uC6B0\uC720+\uC5F0\uC720+\uC0DD\uD06C\uB9BC \uC5BC\uB9B0 \uAC83)",
          "vi": "\u0110\xE1 tuy\u1EBFt s\u1EEFa \u0111\u1EB7c ch\u1EBF (S\u1EEFa t\u01B0\u01A1i + S\u1EEFa \u0111\u1EB7c + Kem b\xE9o \u0111\xF4ng l\u1EA1nh)"
        },
        "amount": 300,
        "unitMetric": "ml",
        "unitUS": "1.2 cups",
        "isKeyFlavor": true,
        "chineseName": "\u725B\u5976\u96EA\u82B1\u51B0\u78DA",
        "chinesePinyin": "Ni\xFA n\u01CEi xu\u011B hu\u0101 b\u012Bng zhu\u0101n"
      },
      {
        "id": "mango-ice-cream",
        "name": {
          "zh-TW": "\u8292\u679C\u51B0\u6DC7\u6DCB\u6216\u9999\u8349\u51B0\u6DC7\u6DCB",
          "en": "Mango or Vanilla Ice Cream Scoop",
          "ja": "\u30DE\u30F3\u30B4\u30FC\u30A2\u30A4\u30B9 \u307E\u305F\u306F \u30D0\u30CB\u30E9\u30A2\u30A4\u30B9",
          "ko": "\uB9DD\uACE0 \uC544\uC774\uC2A4\uD06C\uB9BC \uB610\uB294 \uBC14\uB2D0\uB77C \uC544\uC774\uC2A4\uD06C\uB9BC",
          "vi": "Vi\xEAn kem xo\xE0i ho\u1EB7c kem vani"
        },
        "amount": 1,
        "unitMetric": "scoop",
        "unitUS": "1 scoop",
        "chineseName": "\u8292\u679C\u51B0\u6DC7\u6DCB",
        "chinesePinyin": "M\xE1ng gu\u01D2 b\u012Bng q\xED l\xEDn"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u8ABF\u88FD\u8207\u51B7\u51CD\u6FC3\u9187\u725B\u5976\u96EA\u82B1\u51B0\u78DA",
          "en": "Mix & Freeze Rich Milk Snow Ice Block",
          "ja": "\u6FC3\u539A\u30DF\u30EB\u30AF\u6DB2\u3092\u4F5C\u308A\u3001\u51B7\u51CD\u5EAB\u3067\u51CD\u3089\u305B\u308B",
          "ko": "\uBD80\uB4DC\uB7EC\uC6B4 \uC6B0\uC720 \uC5BC\uC74C \uBCA0\uC774\uC2A4 \uB9CC\uB4E4\uC5B4 \uC5BC\uB9AC\uAE30",
          "vi": "Pha v\xE0 \u0111\xF4ng l\u1EA1nh kh\u1ED1i tuy\u1EBFt s\u1EEFa b\xE9o ng\u1EADy"
        },
        "instruction": {
          "zh-TW": "\u5C07\u5168\u8102\u9BAE\u5976 250ml\u3001\u7149\u4E73 30ml\u3001\u9BAE\u5976\u6CB9 30ml \u8207\u7D30\u7CD6 15g \u652A\u62CC\u5747\u52FB\u81F3\u5B8C\u5168\u878D\u5316\u3002\u5012\u5165\u5713\u5F62\u4FDD\u9BAE\u76D2\u6216\u5C08\u7528\u88FD\u51B0\u76D2\u4E2D\uFF0C\u653E\u5165\u51B7\u51CD\u5EAB\u51B7\u51CD\u81F3\u5C11 6 \u5C0F\u6642\u6210\u5805\u786C\u7684\u725B\u5976\u51B0\u78DA\u3002",
          "en": "Whisk together 250ml whole milk, 30ml condensed milk, 30ml heavy cream, and 15g sugar until dissolved. Pour into a container and freeze for at least 6 hours into a solid milk block.",
          "ja": "\u725B\u4E73250ml\u3001\u7DF4\u4E7330ml\u3001\u751F\u30AF\u30EA\u30FC\u30E030ml\u3001\u7802\u7CD615g\u3092\u3088\u304F\u6DF7\u305C\u5408\u308F\u305B\u307E\u3059\u3002\u5BB9\u5668\u306B\u6CE8\u304E\u3001\u51B7\u51CD\u5EAB\u30676\u6642\u9593\u4EE5\u4E0A\u3057\u3063\u304B\u308A\u51CD\u3089\u305B\u3066\u7279\u88FD\u30DF\u30EB\u30AF\u6C37\u3092\u4F5C\u308A\u307E\u3059\u3002",
          "ko": "\uC6B0\uC720 250ml, \uC5F0\uC720 30ml, \uC0DD\uD06C\uB9BC 30ml, \uC124\uD0D5 15g\uC744 \uC798 \uC11E\uC5B4 \uB179\uC785\uB2C8\uB2E4. \uC6A9\uAE30\uC5D0 \uB2F4\uC544 \uB0C9\uB3D9\uC2E4\uC5D0\uC11C 6\uC2DC\uAC04 \uC774\uC0C1 \uB2E8\uB2E8\uD558\uAC8C \uC5BC\uB824 \uC6B0\uC720 \uC5BC\uC74C\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "Khu\u1EA5y \u0111\u1EC1u 250ml s\u1EEFa t\u01B0\u01A1i, 30ml s\u1EEFa \u0111\u1EB7c, 30ml kem b\xE9o v\xE0 15g \u0111\u01B0\u1EDDng. \u0110\u1ED5 v\xE0o khu\xF4n tr\u1EEF \u0111\xF4ng t\u1ED1i thi\u1EC3u 6 ti\u1EBFng th\xE0nh kh\u1ED1i \u0111\xE1 s\u1EEFa."
        },
        "image": "/images/mango-step1.jpg",
        "durationSeconds": 300
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u73FE\u5207\u9999\u751C\u611B\u6587\u8292\u679C\u5927\u679C\u8089\u584A",
          "en": "Slice Ripe Irwin Mangoes into Giant Cubes",
          "ja": "\u5B8C\u719F\u30DE\u30F3\u30B4\u30FC\u3092\u8D05\u6CA2\u306A\u5927\u7C92\u30B5\u30A4\u30B3\u30ED\u72B6\u306B\u30AB\u30C3\u30C8\u3059\u308B",
          "ko": "\uC2E0\uC120\uD55C \uC644\uC219 \uC0DD\uB9DD\uACE0 \uD07C\uC9C1\uD55C \uD050\uBE0C\uB85C \uC370\uAE30",
          "vi": "Th\xE1i xo\xE0i ch\xEDn m\u1ECDng th\xE0nh nh\u1EEFng kh\u1ED1i vu\xF4ng to"
        },
        "instruction": {
          "zh-TW": "\u5C07\u719F\u900F\u7684\u611B\u6587\u8292\u679C\u6CBF\u8457\u679C\u6838\u5169\u5074\u5207\u4E0B\u5927\u7247\u679C\u8089\u3002\u7528\u5200\u5C16\u5728\u679C\u8089\u4E0A\u5283\u51FA\u7D04 2 \u516C\u5206\u7684\u4E95\u5B57\u5341\u5B57\u7D0B\uFF08\u5207\u81F3\u679C\u76AE\u4E0D\u5207\u65B7\uFF09\uFF0C\u63A5\u8457\u7528\u96D9\u624B\u5F9E\u679C\u76AE\u5E95\u90E8\u5F80\u4E0A\u9802\u7FFB\u958B\uFF0C\u7528\u5200\u524A\u4E0B\u98FD\u6EFF\u591A\u6C41\u7684\u91D1\u9EC3\u8292\u679C\u5927\u4E01\u3002",
          "en": "Slice off the two thick cheeks of ripe mango along the flat seed. Score a 2cm criss-cross pattern through flesh down to skin. Push the skin inside out to pop the cubes up, then slice cubes off into a bowl.",
          "ja": "\u7A2E\u3092\u907F\u3051\u3066\u30DE\u30F3\u30B4\u30FC\u306E\u4E21\u9762\u3092\u5207\u308A\u843D\u3068\u3057\u307E\u3059\u3002\u679C\u8089\u306B2cm\u89D2\u306E\u683C\u5B50\u72B6\u306E\u5207\u308A\u8FBC\u307F\u3092\u5165\u308C\u3001\u76AE\u3092\u88CF\u8FD4\u3057\u3066\u30DD\u30B3\u30C3\u3068\u6D6E\u304B\u305B\u3001\u30CA\u30A4\u30D5\u3067\u30C0\u30A4\u30B9\u72B6\u306B\u5207\u308A\u53D6\u308A\u307E\u3059\u3002",
          "ko": "\uB9DD\uACE0 \uC528\uB97C \uD53C\uD574 \uC591\uCABD \uACFC\uC721\uC744 \uB3C4\uD1B0\uD558\uAC8C \uC798\uB77C\uB0C5\uB2C8\uB2E4. 2cm \uD06C\uAE30\uB85C \uBC14\uB451\uD310 \uBAA8\uC591 \uCE7C\uC9D1\uC744 \uB0B8 \uB4A4 \uAECD\uC9C8\uC744 \uB4A4\uC9D1\uC5B4 \uC21F\uAC00\uB77D\uC774\uB098 \uCE7C\uB85C \uD07C\uC9C1\uD55C \uB9DD\uACE0 \uC870\uAC01\uC744 \uB5BC\uC5B4\uB0C5\uB2C8\uB2E4.",
          "vi": "C\u1EAFt hai m\xE1 xo\xE0i theo chi\u1EC1u d\u1ECDc h\u1EA1t. Kh\xEDa h\xECnh b\xE0n c\u1EDD 2cm tr\xEAn th\u1ECBt qu\u1EA3 r\u1ED3i l\u1ED9n ng\u01B0\u1EE3c v\u1ECF \u0111\u1EC3 c\u1EAFt l\u1EA5y c\xE1c kh\u1ED1i xo\xE0i v\xE0ng \xF3ng m\u1ECDng n\u01B0\u1EDBc."
        },
        "image": "/images/mango-step2.jpg",
        "durationSeconds": 240
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u71AC\u88FD\u7D14\u5929\u7136\u9BAE\u8292\u679C\u6FC3\u7E2E\u679C\u91AC\u6DCB\u91AC",
          "en": "Simmer Pure Natural Fresh Mango Pur\xE9e Glaze",
          "ja": "\u4F59\u3063\u305F\u30DE\u30F3\u30B4\u30FC\u3067\u7279\u88FD\u6FC3\u539A\u30DE\u30F3\u30B4\u30FC\u30BD\u30FC\u30B9\u3092\u4F5C\u308B",
          "ko": "\uB0A8\uC740 \uB9DD\uACE0\uB85C 100% \uCC9C\uC5F0 \uB9DD\uACE0 \uD4E8\uB808 \uC2DC\uB7FD \uB9CC\uB4E4\uAE30",
          "vi": "N\u1EA5u s\u1ED1t xo\xE0i t\u01B0\u01A1i t\u1EF1 nhi\xEAn th\u01A1m ng\xE1t"
        },
        "instruction": {
          "zh-TW": "\u5C07\u9760\u8FD1\u679C\u6838\u5468\u570D\u7684\u788E\u8292\u679C\u8089\u653E\u5165\u5C0F\u7897\u4E2D\uFF0C\u52A0\u5165 1 \u8336\u5319\u6AB8\u6AAC\u6C41\u8207 1 \u8336\u5319\u7CD6\uFF0C\u7528\u53C9\u5B50\u6216\u6599\u7406\u68D2\u6253\u6210\u7D30\u6ED1\u7684\u6FC3\u7A20\u8292\u679C\u6CE5\uFF0C\u51B7\u85CF\u4F5C\u70BA\u6700\u5F8C\u63D0\u5473\u7684\u7D14\u5929\u7136\u6DCB\u91AC\u3002",
          "en": "Place scrap mango pulp around seed into a small bowl with 1 tsp lemon juice and 1 tsp sugar. Blend or crush into a silky smooth mango puree glaze and chill.",
          "ja": "\u7A2E\u306E\u5468\u308A\u306E\u679C\u8089\u306B\u30EC\u30E2\u30F3\u6C41\u5C0F\u3055\u30581\u3068\u7802\u7CD6\u5C0F\u3055\u30581\u3092\u52A0\u3048\u3001\u30D6\u30EC\u30F3\u30C0\u30FC\u3084\u30D5\u30A9\u30FC\u30AF\u3067\u306A\u3081\u3089\u304B\u306A\u30DE\u30F3\u30B4\u30FC\u30D4\u30E5\u30EC\u306B\u3057\u3066\u51B7\u3084\u3057\u3066\u304A\u304D\u307E\u3059\u3002",
          "ko": "\uC528 \uC8FC\uBCC0\uC758 \uACFC\uC721\uC744 \uBAA8\uC544 \uB808\uBAAC\uC999 1\uC791\uC740\uC220, \uC124\uD0D5 1\uC791\uC740\uC220\uACFC \uD568\uAED8 \uBE14\uB80C\uB354\uB85C \uACF1\uAC8C \uAC08\uC544 \uC2DC\uC6D0\uD558\uACE0 \uB2EC\uCF64\uD55C \uCC9C\uC5F0 \uB9DD\uACE0 \uC2DC\uB7FD\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "L\u1EA5y ph\u1EA7n th\u1ECBt xo\xE0i c\u1EA1nh h\u1EA1t xay nhuy\u1EC5n c\xF9ng 1 th\xECa cafe n\u01B0\u1EDBc c\u1ED1t chanh v\xE0 1 th\xECa \u0111\u01B0\u1EDDng l\xE0m s\u1ED1t xo\xE0i s\xE1nh m\u1ECBn thanh m\xE1t."
        },
        "image": "/images/mango-step3.jpg",
        "durationSeconds": 180
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u5228\u51FA\u5982\u7D72\u7D79\u7FBD\u6BDB\u822C\u7DBF\u5BC6\u725B\u5976\u96EA\u82B1\u51B0",
          "en": "Shave Silky Snowflake Ribbons into High Mound",
          "ja": "\u304B\u304D\u6C37\u6A5F\u3067\u7D79\u306E\u3088\u3046\u306B\u3075\u308F\u3075\u308F\u306E\u96EA\u82B1\u6C37\u3092\u524A\u308B",
          "ko": "\uBE59\uC218\uAE30\uB85C \uB208\uAF43\uCC98\uB7FC \uC0AC\uB974\uB974 \uB179\uB294 \uC2E4\uD0C0\uB798 \uC6B0\uC720 \uC5BC\uC74C \uAC08\uAE30",
          "vi": "B\xE0o \u0111\xE1 tuy\u1EBFt s\u1EEFa m\u1EC1m m\u1ECBn nh\u01B0 l\u1EE5a x\u1EBFp th\xE0nh ng\u1ECDn n\xFAi"
        },
        "instruction": {
          "zh-TW": "\u5C07\u725B\u5976\u51B0\u78DA\u653E\u5165\u96EA\u82B1\u5228\u51B0\u6A5F\u4E2D\uFF08\u6216\u4F7F\u7528\u5BB6\u7528\u5228\u51B0\u6A5F\u8ABF\u81F3\u6700\u7D30\u6A94\u4F4D\uFF09\uFF0C\u4E00\u908A\u65CB\u8F49\u5927\u7897\u4E00\u908A\u5228\u51FA\u5C64\u5C64\u758A\u758A\u3001\u5982\u7D72\u7D79\u7DDE\u5E36\u822C\u8F15\u76C8\u7D30\u81A9\u7684\u725B\u5976\u96EA\u82B1\u51B0\uFF0C\u5728\u7897\u4E2D\u5806\u758A\u6210\u4E00\u5EA7\u5C0F\u96EA\u5C71\uFF01",
          "en": "Place frozen milk block into shaved ice machine set to fine. Rotate bowl while shaving to form tall, delicate, ribbon-like snowflake layers that instantly melt on the tongue.",
          "ja": "\u30DF\u30EB\u30AF\u6C37\u3092\u304B\u304D\u6C37\u6A5F\u306B\u30BB\u30C3\u30C8\u3057\u3001\u6700\u3082\u7D30\u304B\u3044\u8A2D\u5B9A\u3067\u524A\u308A\u307E\u3059\u3002\u5668\u3092\u56DE\u3057\u306A\u304C\u3089\u3001\u30B7\u30EB\u30AF\u306E\u3088\u3046\u306B\u7E4A\u7D30\u3067\u30D5\u30EF\u30D5\u30EF\u306A\u96EA\u82B1\u6C37\u3092\u5C71\u76DB\u308A\u306B\u524A\u308A\u51FA\u3057\u307E\u3059\uFF01",
          "ko": "\uC6B0\uC720 \uC5BC\uC74C\uC744 \uBE59\uC218\uAE30\uC5D0 \uB123\uACE0 \uAC00\uC7A5 \uACE0\uC6B4 \uB208\uAF43 \uC785\uC790\uB85C \uAC08\uC544\uB0C5\uB2C8\uB2E4. \uADF8\uB987\uC744 \uB3CC\uB824\uAC00\uBA70 \uAE43\uD138\uCC98\uB7FC \uAC00\uBCCD\uACE0 \uC0AC\uB974\uB974 \uB179\uB294 \uC6B0\uC720 \uB208\uAF43\uC744 \uC18C\uBCF5\uD558\uAC8C \uC313\uC544 \uC62C\uB9BD\uB2C8\uB2E4.",
          "vi": "Cho kh\u1ED1i \u0111\xE1 s\u1EEFa v\xE0o m\xE1y b\xE0o n\u1EA5c m\u1ECBn nh\u1EA5t, v\u1EEBa quay t\xF4 v\u1EEBa b\xE0o nh\u1EEFng d\u1EA3i tuy\u1EBFt s\u1EEFa m\u1EC1m m\u1ECBn bay b\u1ED5ng x\u1EBFp th\xE0nh n\xFAi tuy\u1EBFt nh\u1ECF."
        },
        "image": "/images/mango-step4.jpg",
        "durationSeconds": 120
      },
      {
        "stepNumber": 5,
        "title": {
          "zh-TW": "\u92EA\u6EFF\u7206\u91CF\u8292\u679C\u4E01\u3001\u6DCB\u4E0A\u7149\u4E73\u3001\u653E\u4E0A\u51B0\u6DC7\u6DCB\uFF01",
          "en": "Cover in Mango Mountains, Condensed Milk & Ice Cream Scoop",
          "ja": "\u30DE\u30F3\u30B4\u30FC\u3092\u9699\u9593\u306A\u304F\u76DB\u308A\u3001\u7DF4\u4E73\u3092\u56DE\u3057\u304B\u3051\u3066\u30A2\u30A4\u30B9\u3092\u30C8\u30C3\u30D4\u30F3\u30B0\uFF01",
          "ko": "\uB9DD\uACE0 \uD3ED\uD0C4 \uD22C\uD558, \uC5F0\uC720 \uB4EC\uBFCD \uB450\uB974\uACE0 \uB9DD\uACE0 \uC544\uC774\uC2A4\uD06C\uB9BC \uD55C \uC2A4\uCFF1 \uC5B9\uC5B4 \uC644\uC131!",
          "vi": "Ph\u1EE7 ng\u1EADp xo\xE0i t\u01B0\u01A1i, r\u01B0\u1EDBi s\u1EEFa \u0111\u1EB7c v\xE0 \u0111\u1EB7t vi\xEAn kem xo\xE0i m\xE1t l\u1EA1nh!"
        },
        "instruction": {
          "zh-TW": "\u5728\u725B\u5976\u96EA\u5C71\u56DB\u5468\u92EA\u6EFF\u539A\u539A\u4E00\u5C64\u91D1\u9EC3\u611B\u6587\u8292\u679C\u5927\u584A\uFF0C\u9802\u90E8\u6316\u4E0A\u4E00\u5927\u7403\u91D1\u9EC3\u8292\u679C\u51B0\u6DC7\u6DCB\u3002\u6DCB\u4E0A\u6EFF\u6EFF\u7279\u88FD\u9BAE\u8292\u679C\u6CE5\u8207\u9999\u6FC3\u7149\u4E73\uFF0C\u63D2\u4E0A\u8584\u8377\u8449\u9EDE\u7DB4\uFF0C\u76DB\u590F\u6700\u9802\u7D1A\u7684\u8996\u89BA\u8207\u5473\u89BA\u9957\u5BB4\uFF01",
          "en": "Surround the milk snow mountain completely with glistening mango cubes. Crown with a large scoop of mango ice cream. Drizzle generously with fresh mango pur\xE9e and condensed milk. Garnish with fresh mint and dive in!",
          "ja": "\u96EA\u82B1\u6C37\u306E\u5468\u308A\u306B\u30DE\u30F3\u30B4\u30FC\u3092\u3053\u307C\u308C\u843D\u3061\u308B\u307B\u3069\u6577\u304D\u8A70\u3081\u3001\u9802\u4E0A\u306B\u30DE\u30F3\u30B4\u30FC\u30A2\u30A4\u30B9\u3092\u8C6A\u5FEB\u306B\u30C8\u30C3\u30D4\u30F3\u30B0\u3002\u7279\u88FD\u30DE\u30F3\u30B4\u30FC\u30D4\u30E5\u30EC\u3068\u7DF4\u4E73\u3092\u305F\u3063\u3077\u308A\u56DE\u3057\u304B\u3051\u3066\u5B8C\u6210\uFF01",
          "ko": "\uC6B0\uC720 \uB208\uAF43 \uC8FC\uBCC0\uC5D0 \uB9DD\uACE0 \uC870\uAC01\uC744 \uD2C8 \uC5C6\uC774 \uBE7D\uBE7D\uD558\uAC8C \uB450\uB974\uACE0, \uAF2D\uB300\uAE30\uC5D0 \uB9DD\uACE0 \uC544\uC774\uC2A4\uD06C\uB9BC \uD55C \uC2A4\uCFF1\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uCC9C\uC5F0 \uB9DD\uACE0 \uC2DC\uB7FD\uACFC \uC5F0\uC720\uB97C \uB4EC\uBFCD \uBFCC\uB824 \uC2DC\uC6D0\uD558\uAC8C \uC990\uAE30\uC138\uC694!",
          "vi": "X\u1EBFp xo\xE0i k\xEDn quanh n\xFAi tuy\u1EBFt, \u0111\u1EB7t m\u1ED9t vi\xEAn kem xo\xE0i l\xEAn \u0111\u1EC9nh r\u1ED3i r\u01B0\u1EDBi \u0111\u1EABm s\u1ED1t xo\xE0i t\u01B0\u01A1i c\xF9ng s\u1EEFa \u0111\u1EB7c th\u01A1m b\xE9o v\xE0 th\u01B0\u1EDFng th\u1EE9c!"
        },
        "image": "/images/mango-shaved-ice.jpg",
        "durationSeconds": 60
      }
    ],
    "troubleshooting": [
      {
        "id": "ts-ms-1",
        "problem": {
          "zh-TW": "\u5228\u51FA\u4F86\u7684\u51B0\u9846\u7C92\u7C97\u5927\u3001\u50CF\u7C97\u632B\u51B0\u800C\u4E0D\u662F\u7DBF\u5BC6\u96EA\u82B1\uFF1F",
          "en": "Why did my shaved ice turn out like crunchy crushed ice instead of fluffy snow ribbons?",
          "ja": "\u30D5\u30EF\u30D5\u30EF\u306B\u306A\u3089\u305A\u3001\u30B8\u30E3\u30EA\u30B8\u30E3\u30EA\u3057\u305F\u7C97\u3044\u304B\u304D\u6C37\u306B\u306A\u3063\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uBD80\uB4DC\uB7EC\uC6B4 \uB208\uAF43\uC774 \uC544\uB2C8\uB77C \uC11C\uAC71\uC11C\uAC71\uD55C \uC5BC\uC74C \uC54C\uAC31\uC774\uAC00 \uAC08\uB9AC\uB098\uC694?",
          "vi": "T\u1EA1i sao \u0111\xE1 b\xE0o b\u1ECB l\u1EA1o x\u1EA1o h\u1EA1t to kh\xF4ng m\u1ECBn nh\u01B0 tuy\u1EBFt?"
        },
        "cause": {
          "zh-TW": "\u51B0\u78DA\u53EA\u7528\u7D14\u6C34\u6216\u6C34\u5206\u592A\u591A\uFF0C\u7F3A\u4E4F\u725B\u5976\u4E73\u8102\u8207\u7CD6\u5206\uFF1B\u6216\u662F\u5228\u51B0\u6A5F\u5200\u7247\u8ABF\u7BC0\u5F97\u592A\u7C97\u3002",
          "en": "Used plain water without milkfat/sugar, or machine blade was set too thick.",
          "ja": "\u6C34\u3060\u3051\u3067\u4F5C\u3063\u305F\u6C37\u304B\u3001\u4E73\u8102\u80AA\u3084\u7CD6\u5206\u304C\u8DB3\u308A\u306A\u3044\u305F\u3081\u6C37\u306E\u7D50\u6676\u304C\u56FA\u304F\u306A\u3063\u3066\u3044\u307E\u3059\u3002",
          "ko": "\uBB3C\uB85C\uB9CC \uC5BC\uB838\uAC70\uB098(\uC720\uC9C0\uBC29\uACFC \uB2F9\uBD84\uC774 \uBD80\uC871\uD568), \uBE59\uC218\uAE30 \uB0A0\uC774 \uB108\uBB34 \uAD75\uAC8C \uC870\uC808\uB418\uC5C8\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "\u0110\xE1 kh\xF4ng c\xF3 s\u1EEFa \u0111\u1EB7c/kem b\xE9o t\u1EA1o \u0111\u1ED9 d\u1EBBo m\u1ECBn ho\u1EB7c l\u01B0\u1EE1i dao ch\u1EC9nh qu\xE1 th\xF4."
        },
        "solution": {
          "zh-TW": "\u4E00\u5B9A\u8981\u6309\u914D\u65B9\u52A0\u5165\u5168\u8102\u9BAE\u5976\u3001\u7149\u4E73\u8207\u5C11\u8A31\u9BAE\u5976\u6CB9\uFF0C\u4E73\u8102\u8207\u7CD6\u80FD\u963B\u6B62\u5927\u51B0\u6676\u751F\u6210\uFF0C\u5228\u51FA\u4F86\u5982\u540C\u771F\u96EA\uFF01",
          "en": "Always include whole milk, condensed milk, and cream. Fat and sugar prevent hard crystallization and yield pure silk snow.",
          "ja": "\u5FC5\u305A\u725B\u4E73\u30FB\u7DF4\u4E73\u30FB\u751F\u30AF\u30EA\u30FC\u30E0\u3092\u52A0\u3048\u3066\u304F\u3060\u3055\u3044\u3002\u4E73\u8102\u80AA\u5206\u304C\u6ED1\u3089\u304B\u306A\u7D79\u306E\u3088\u3046\u306A\u98DF\u611F\u3092\u751F\u307F\u51FA\u3057\u307E\u3059\uFF01",
          "ko": "\uB808\uC2DC\uD53C\uB300\uB85C \uC804\uC9C0\uBD84\uC720\uB098 \uC6B0\uC720, \uC5F0\uC720, \uC0DD\uD06C\uB9BC\uC744 \uAF2D \uC11E\uC5B4 \uC5BC\uB824\uC8FC\uC138\uC694. \uBD80\uB4DC\uB7EC\uC6B4 \uD14D\uC2A4\uCC98\uC758 \uBE44\uACB0\uC785\uB2C8\uB2E4.",
          "vi": "B\u1EAFt bu\u1ED9c d\xF9ng s\u1EEFa t\u01B0\u01A1i v\xE0 kem b\xE9o, ch\u1EA5t b\xE9o s\u1EBD ng\u0103n \u0111\xE1 k\u1EBFt tinh c\u1EE9ng t\u1EA1o ra tuy\u1EBFt m\u1EC1m m\u01B0\u1EE3t."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u6311\u9078\u8292\u679C\u6642\u4E00\u5B9A\u8981\u9078\u64C7\u6563\u767C\u6FC3\u90C1\u679C\u9999\u3001\u8868\u76AE\u5E36\u6709\u5929\u7136\u679C\u81A0\u5149\u6FA4\u7684\u300C\u5728\u6B09\u7D05\u300D\u719F\u8292\u679C\uFF0C\u751C\u5EA6\u8207\u9999\u6C23\u624D\u662F\u53F0\u7063\u591C\u5E02\u51B0\u54C1\u7684\u6700\u9AD8\u5883\u754C\uFF01",
        "en": "Choose naturally tree-ripened Irwin mangoes with an intoxicating tropical aroma and slight tackiness on the skin.",
        "ja": "\u30DE\u30F3\u30B4\u30FC\u306F\u624B\u3067\u89E6\u308C\u3066\u5C11\u3057\u67D4\u3089\u304B\u304F\u3001\u7518\u3044\u82B3\u9187\u306A\u9999\u308A\u304C\u5F37\u304F\u6F02\u3046\u5B8C\u719F\u306E\u3082\u306E\u3092\u4F7F\u3046\u3068\u683C\u6BB5\u306B\u7F8E\u5473\u3057\u304F\u306A\u308A\u307E\u3059\uFF01",
        "ko": "\uC9C4\uD55C \uB2EC\uCF64\uD55C \uD5A5\uC774 \uB098\uACE0 \uAECD\uC9C8\uC774 \uB9E4\uB044\uB7FD\uACE0 \uC724\uAE30 \uB098\uB294 \uC644\uC219 \uC560\uD50C\uB9DD\uACE0\uB97C \uACE8\uB77C\uC57C \uCD5C\uACE0\uC758 \uB9DB\uC744 \uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "vi": "H\xE3y ch\u1ECDn nh\u1EEFng qu\u1EA3 xo\xE0i ch\xEDn c\xE2y th\u01A1m n\u1EE9c m\u0169i v\u1ECF c\u0103ng m\u1ECDng \u0111\u1EC3 c\xF3 m\xF3n bingsu chu\u1EA9n v\u1ECB nh\u1EA5t."
      }
    ]
  },
  {
    "id": "pork-thick-soup",
    "slug": "pork-thick-soup",
    "title": {
      "zh-TW": "\u591C\u5E02\u9BAE\u751C\u9999\u6FC3\u8089\u7FB9\u6E6F",
      "en": "Taiwanese Traditional Pork Thick Soup (Geng)",
      "ja": "\u53F0\u6E7E\u591C\u5E02\u540D\u7269 \u3064\u307F\u308C\u3068\u308D\u307F\u30B9\u30FC\u30D7\uFF08\u8089\u7FB9\u6E6F\uFF09",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5 \uC804\uD1B5 \uACE0\uAE30 \uC644\uC790 \uAC78\uCB49\uD55C \uC218\uD504 (\uB85C\uC6B0\uAC85\uD0D5)",
      "vi": "S\xFAp Th\u1ECBt Vi\xEAn \u0110\u1EADm \u0110\xE0 Ch\u1EE3 \u0110\xEAm \u0110\xE0i Loan"
    },
    "subtitle": {
      "zh-TW": "\u624B\u6253\u8D64\u8089\u7FB9\u30FB\u67F4\u9B5A\u767D\u83DC\u9AD8\u6E6F\u30FB\u70CF\u918B\u9999\u83DC\u9748\u9B42\u63D0\u5473",
      "en": "Handmade Pork Strips, Bonito Cabbage Broth & Black Vinegar",
      "ja": "\u624B\u3054\u306D\u8C5A\u8089\u3064\u307F\u308C\u30FB\u767D\u83DC\u3068\u9C39\u51FA\u6C41\u30FB\u9ED2\u9162\u3068\u30D1\u30AF\u30C1\u30FC\u306E\u6975\u4E0A\u98A8\u5473",
      "ko": "\uC218\uC81C \uB3FC\uC9C0\uACE0\uAE30 \uC644\uC790, \uAC00\uC4F0\uC624\uBD80\uC2DC \uBC30\uCD94 \uC721\uC218, \uD751\uC2DD\uCD08\uC640 \uACE0\uC218\uC758 \uC870\uD654",
      "vi": "Th\u1ECBt n\u1EA1c qu\u1EBFt dai ngon, n\u01B0\u1EDBc d\xF9ng b\u1EAFp c\u1EA3i c\xE1 ng\u1EEB, gi\u1EA5m \u0111en ng\xF2 r\xED"
    },
    "tagline": {
      "zh-TW": "\u6ED1\u9806\u7FB9\u6E6F\u6EAB\u6F64\u5165\u5589\uFF0C\u8D64\u8089\u88F9\u4E0A\u8584\u6F3F\u5F48\u7259\u7206\u6C41\uFF0C\u4E00\u53E3\u56DE\u9B42\u7684\u53E4\u65E9\u5473",
      "en": "Silky thick broth gliding down your throat with bouncy pork bites",
      "ja": "\u3068\u308D\u308A\u3068\u3057\u305F\u30B9\u30FC\u30D7\u304C\u5589\u3092\u6F64\u3057\u3001\u30B8\u30E5\u30FC\u30B7\u30FC\u306A\u8C5A\u3064\u307F\u308C\u306E\u5F3E\u529B\u304C\u305F\u307E\u3089\u306A\u3044\u61D0\u304B\u3057\u3044\u5473",
      "ko": "\uBD80\uB4DC\uB7EC\uC6B4 \uAD6D\uBB3C\uACFC \uCAC4\uAE43\uD55C \uACE0\uAE30 \uC644\uC790\uAC00 \uC785\uC548 \uAC00\uB4DD \uAC10\uCE60\uB9DB\uC744 \uC120\uC0AC\uD558\uB294 \uCD94\uC5B5\uC758 \uB9DB",
      "vi": "N\u01B0\u1EDBc s\xFAp s\xE1nh m\u1ECBn \u1EA5m b\u1EE5ng, th\u1ECBt vi\xEAn dai ng\u1ECDt \u0111\u1EADm \u0111\xE0 h\u01B0\u01A1ng v\u1ECB truy\u1EC1n th\u1ED1ng"
    },
    "heroImage": "/images/taiwan-pork-soup-hero.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "defaultServings": 4,
    "caloriesPerServing": 320,
    "category": "soups",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional",
      "instantPot"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u57FA\u9686 / \u5F70\u5316\u9E7F\u6E2F",
        "en": "Keelung / Lukang",
        "ja": "\u57FA\u9686 / \u5F70\u5316\u9E7F\u6E2F",
        "ko": "\uC9C0\uB8FD / \uC7A5\uD654 \uB8E8\uAC15",
        "vi": "Keelung / Lukang"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u57FA\u9686\u5EDF\u53E3\u591C\u5E02",
          "en": "Keelung Miaokou Night Market",
          "ja": "\u57FA\u9686\u5EDF\u53E3\u591C\u5E02",
          "ko": "\uC9C0\uB8FD \uBA00\uC624\uCEE4\uC6B0 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Keelung Miaokou"
        },
        {
          "zh-TW": "\u9952\u6CB3\u8857\u89C0\u5149\u591C\u5E02",
          "en": "Raohe Night Market",
          "ja": "\u9952\u6CB3\u8857\u591C\u5E02",
          "ko": "\uB77C\uC624\uD5C8\uC81C \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Raohe"
        },
        {
          "zh-TW": "\u7F85\u6771\u591C\u5E02",
          "en": "Luodong Night Market",
          "ja": "\u7F85\u6771\u591C\u5E02",
          "ko": "\uB904\uB465 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Luodong"
        }
      ],
      "historyStory": {
        "zh-TW": "\u300C\u7FB9\u300D\u5728\u53F0\u7063\u98F2\u98DF\u53F2\u4E2D\u627F\u8F09\u8457\u5148\u6C11\u7269\u76E1\u5176\u7528\u3001\u4EE5\u8543\u85AF\u7C89\u52FE\u82A1\u4FDD\u7559\u98DF\u6750\u539F\u6C41\u7684\u667A\u6167\u3002\u57FA\u9686\u5EDF\u53E3\u8207\u9E7F\u6E2F\u66F4\u767C\u5C55\u51FA\u8D64\u8089\u88F9\u9B5A\u6F3F\u7684\u7368\u9580\u624B\u85DD\uFF0C\u914D\u4E0A\u6E05\u751C\u5927\u767D\u83DC\u8207\u6241\u9B5A\u67F4\u9B5A\uFF0C\u662F\u4E00\u4EE3\u4EE3\u53F0\u7063\u4EBA\u7684\u5BB5\u591C\u6170\u85C9\u3002",
        "en": "Thick soup (Geng) represents traditional Taiwanese culinary wisdom using sweet potato starch to lock in richness. Keelung Miaokou perfected the craft of coating tender pork in fish paste.",
        "ja": "\u53F0\u6E7E\u306E\u300C\u7FB9\uFF08\u3068\u308D\u307F\u30B9\u30FC\u30D7\uFF09\u300D\u306F\u30B5\u30C4\u30DE\u30A4\u30E2\u6FB1\u7C89\u3067\u51FA\u6C41\u306E\u65E8\u5473\u3092\u51DD\u7E2E\u3055\u305B\u305F\u90F7\u571F\u6599\u7406\u3002\u57FA\u9686\u5EDF\u53E3\u306E\u8D64\u8089\u7FB9\u306F\u591C\u5E02\u306E\u5B9A\u756A\u3067\u3059\u3002",
        "ko": "\uACE0\uAD6C\uB9C8 \uC804\uBD84\uC73C\uB85C \uC721\uC218\uC758 \uD48D\uBBF8\uB97C \uAC00\uB450\uC5B4 \uBA39\uB358 \uC9C0\uD61C\uC5D0\uC11C \uC720\uB798\uD55C \uC694\uB9AC\uB85C, \uC9C0\uB8FD \uBA00\uC624\uCEE4\uC6B0 \uB4F1 \uB300\uB9CC \uC804\uC5ED\uC5D0\uC11C \uC0AC\uB791\uBC1B\uC2B5\uB2C8\uB2E4.",
        "vi": "M\xF3n canh s\xFAp \u0111\u1EB7c tr\u01B0ng s\u1EED d\u1EE5ng b\u1ED9t khoai lang t\u1EA1o \u0111\u1ED9 s\xE1nh, gi\u1EEF tr\u1ECDn v\u1ECB ng\u1ECDt thanh c\u1EE7a th\u1ECBt n\u1EA1c qu\u1EBFt ch\u1EA3 c\xE1."
      },
      "taiwaneseHokkien": "Bah-kinn-thng (\u3105\u311A\u02CA \u310D\u3127\u3125 \u310A\u3125)",
      "mandarinPinyin": "R\xF2u G\u0113ng T\u0101ng (\u3116\u3121\u02CB \u310D\u3125 \u310A\u3124)",
      "audioPronunciationText": "\u8089\u7FB9\u6E6F\uFF0C\u70CF\u918B\u52A0\u591A\u4E00\u9EDE"
    },
    "ingredients": [
      {
        "id": "pork-strips",
        "name": {
          "zh-TW": "\u8C6C\u5F8C\u817F\u8089 (\u5207\u7C97\u689D)",
          "en": "Pork Loin Strips",
          "ja": "\u8C5A\u3082\u3082\u8089\u7D30\u5207\u308A",
          "ko": "\uB3FC\uC9C0 \uC548\uC2EC \uCC44",
          "vi": "Th\u1ECBt n\u1EA1c m\xF4ng heo th\xE1i s\u1EE3i"
        },
        "amount": 350,
        "unitMetric": "g",
        "unitUS": "12 oz",
        "isKeyFlavor": true,
        "chineseName": "\u8C6C\u5F8C\u817F\u8089\u689D",
        "chinesePinyin": "Zh\u016B h\xF2utu\u01D0 r\xF2u ti\xE1o"
      },
      {
        "id": "fish-paste",
        "name": {
          "zh-TW": "\u8671\u76EE\u9B5A\u6F3F (\u6216\u65D7\u9B5A\u6F3F)",
          "en": "Whitefish Paste",
          "ja": "\u767D\u8EAB\u9B5A\u3059\u308A\u8EAB",
          "ko": "\uC0DD\uC120 \uC5F0\uC721 \uBC18\uC8FD",
          "vi": "Ch\u1EA3 c\xE1 th\xE1c l\xE1c s\u1ED1ng"
        },
        "amount": 150,
        "unitMetric": "g",
        "unitUS": "5 oz",
        "isKeyFlavor": true,
        "chineseName": "\u9B5A\u6F3F",
        "chinesePinyin": "Y\xFA ji\u0101ng"
      },
      {
        "id": "cabbage",
        "name": {
          "zh-TW": "\u5927\u767D\u83DC (\u5207\u5927\u584A)",
          "en": "Napa Cabbage",
          "ja": "\u767D\u83DC",
          "ko": "\uBC30\uCD94",
          "vi": "B\u1EAFp c\u1EA3i th\u1EA3o"
        },
        "amount": 200,
        "unitMetric": "g",
        "unitUS": "7 oz",
        "chineseName": "\u5927\u767D\u83DC",
        "chinesePinyin": "D\xE0 b\xE1i c\xE0i"
      },
      {
        "id": "sweet-potato-starch",
        "name": {
          "zh-TW": "\u53F0\u7063\u5730\u74DC\u7C89 (\u52FE\u82A1\u7528)",
          "en": "Sweet Potato Starch",
          "ja": "\u30B5\u30C4\u30DE\u30A4\u30E2\u6FB1\u7C89",
          "ko": "\uACE0\uAD6C\uB9C8 \uC804\uBD84",
          "vi": "B\u1ED9t khoai lang"
        },
        "amount": 40,
        "unitMetric": "g",
        "unitUS": "3 tbsp",
        "isKeyFlavor": true,
        "chineseName": "\u5730\u74DC\u7C89",
        "chinesePinyin": "D\xECgu\u0101 f\u011Bn"
      },
      {
        "id": "black-vinegar",
        "name": {
          "zh-TW": "\u5DE5\u7814\u70CF\u918B",
          "en": "Taiwanese Black Vinegar",
          "ja": "\u53F0\u6E7E\u9ED2\u9162",
          "ko": "\uB300\uB9CC \uD751\uC2DD\uCD08",
          "vi": "Gi\u1EA5m \u0111en \u0110\xE0i Loan"
        },
        "amount": 25,
        "unitMetric": "ml",
        "unitUS": "1.5 tbsp",
        "chineseName": "\u70CF\u918B",
        "chinesePinyin": "W\u016B c\xF9"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u6293\u9183\u8089\u689D\u8207\u6454\u6253\u9B5A\u6F3F",
          "en": "Marinate Pork & Knead with Fish Paste",
          "ja": "\u8C5A\u8089\u306E\u4E0B\u5473\u3068\u3059\u308A\u8EAB\u306E\u7DF4\u308A\u5408\u308F\u305B",
          "ko": "\uB3FC\uC9C0\uACE0\uAE30 \uBC11\uAC04 \uBC0F \uC5B4\uC721 \uBC18\uC8FD \uCE58\uB300\uAE30",
          "vi": "\u01AF\u1EDBp th\u1ECBt heo v\xE0 qu\u1EBFt v\u1EDBi ch\u1EA3 c\xE1 s\u1ED1ng"
        },
        "instruction": {
          "zh-TW": "\u8C6C\u5F8C\u817F\u8089\u689D\u52A0\u5165\u91AC\u6CB9\u3001\u4E94\u9999\u7C89\u3001\u767D\u80E1\u6912\u3001\u849C\u6CE5\u8207\u7C73\u9152\u6293\u918315\u5206\u9418\uFF0C\u518D\u8207\u9B5A\u6F3F\u7DCA\u5BC6\u63C9\u52FB\u6454\u6253\u51FA\u7B4B\u5EA6\u3002",
          "en": "Marinate pork strips with soy sauce, five-spice, white pepper, garlic & rice wine for 15m, then massage tightly with fish paste.",
          "ja": "\u8C5A\u8089\u306B\u91A4\u6CB9\u3001\u4E94\u9999\u7C89\u3001\u80E1\u6912\u3001\u304A\u308D\u3057\u30CB\u30F3\u30CB\u30AF\u3001\u6599\u7406\u9152\u3092\u63C9\u307F\u8FBC\u307F15\u5206\u7F6E\u304D\u3001\u3059\u308A\u8EAB\u3068\u3088\u304F\u6DF7\u305C\u3066\u7C98\u308A\u3092\u51FA\u3057\u307E\u3059\u3002",
          "ko": "\uB3FC\uC9C0\uACE0\uAE30\uC5D0 \uAC04\uC7A5, \uC624\uD5A5\uAC00\uB8E8, \uD6C4\uCD94, \uB2E4\uC9C4 \uB9C8\uB298, \uCCAD\uC8FC\uB97C \uB123\uACE0 15\uBD84\uAC04 \uC7AC\uC6B4 \uB4A4 \uC0DD\uC120 \uBC18\uC8FD\uACFC \uCE58\uB300\uC5B4 \uCC30\uAE30\uB97C \uB0C5\uB2C8\uB2E4.",
          "vi": "\u01AF\u1EDBp th\u1ECBt heo v\u1EDBi n\u01B0\u1EDBc t\u01B0\u01A1ng, ng\u0169 v\u1ECB h\u01B0\u01A1ng, ti\xEAu, t\u1ECFi b\u0103m v\xE0 r\u01B0\u1EE3u g\u1EA1o 15 ph\xFAt, sau \u0111\xF3 qu\u1EBFt \u0111\u1EC1u v\u1EDBi ch\u1EA3 c\xE1 s\u1ED1ng."
        },
        "durationSeconds": 900,
        "image": "/images/taiwan-pork-soup-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u4F4E\u6EAB\u5FAE\u6EFE\u6C46\u71D9\u8089\u7FB9\u5B9A\u578B",
          "en": "Poach Pork Strips at Gentle Simmer",
          "ja": "\u5FAE\u6CB8\u9A30\u306E\u6E6F\u3067\u8089\u7FB9\u3092\u8339\u3067\u308B",
          "ko": "\uC57D\uBD88\uC5D0\uC11C \uACE0\uAE30 \uC644\uC790 \uB370\uCCD0\uB0B4\uAE30",
          "vi": "Lu\u1ED9c ch\xEDn th\u1ECBt vi\xEAn \u1EDF l\u1EEDa nh\u1ECF"
        },
        "instruction": {
          "zh-TW": "\u716E\u4E00\u934B\u6C34\u81F3\u5FAE\u6EFE\uFF08\u7D0485-90\xB0C\u4FDD\u6301\u5192\u5C0F\u6CE1\uFF09\uFF0C\u7528\u624B\u5C07\u8089\u7FB9\u4E00\u689D\u689D\u634F\u5165\u6C34\u4E2D\uFF0C\u5F85\u8089\u7FB9\u6D6E\u8D77\u8B8A\u767D\u5373\u6488\u51FA\u701D\u4E7E\u5099\u7528\u3002",
          "en": "Bring water to a gentle simmer (85-90\xB0C), drop pork strips one by one. Once they float to surface and turn opaque, scoop out.",
          "ja": "\u6CB8\u9A30\u76F4\u524D\uFF0885-90\u2103\uFF09\u306E\u6E6F\u306B\u8089\u7FB9\u3092\u4E00\u53E3\u5927\u305A\u3064\u843D\u3068\u3057\u3001\u6D6E\u304D\u4E0A\u304C\u3063\u3066\u304D\u305F\u3089\u3059\u304F\u3044\u4E0A\u3052\u3066\u6C34\u6C17\u3092\u5207\u308A\u307E\u3059\u3002",
          "ko": "\uC57D\uD558\uAC8C \uB053\uB294 \uBB3C(85-90\xB0C)\uC5D0 \uACE0\uAE30 \uBC18\uC8FD\uC744 \uD55C \uC785 \uD06C\uAE30\uB85C \uB5BC\uC5B4 \uB123\uACE0, \uC704\uB85C \uB5A0\uC624\uB974\uBA74 \uAC74\uC838\uB0C5\uB2C8\uB2E4.",
          "vi": "N\u1EA5u n\u01B0\u1EDBc s\xF4i l\u0103n t\u0103n, th\u1EA3 t\u1EEBng mi\u1EBFng th\u1ECBt vi\xEAn v\xE0o, khi th\u1ECBt n\u1ED5i l\xEAn m\u1EB7t n\u01B0\u1EDBc th\xEC v\u1EDBt ra \u0111\u1EC3 r\xE1o."
        },
        "durationSeconds": 360,
        "image": "/images/taiwan-pork-soup-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u7206\u9999\u9999\u83C7\u767D\u83DC\u71AC\u9AD8\u6E6F",
          "en": "Simmer Cabbage & Shiitake Broth",
          "ja": "\u690E\u8338\u3068\u767D\u83DC\u306E\u51FA\u6C41\u3092\u716E\u8FBC\u3080",
          "ko": "\uD45C\uACE0\uBC84\uC12F\uACFC \uBC30\uCD94\uB85C \uC721\uC218 \uB053\uC774\uAE30",
          "vi": "N\u1EA5u n\u01B0\u1EDBc d\xF9ng b\u1EAFp c\u1EA3i n\u1EA5m h\u01B0\u01A1ng"
        },
        "instruction": {
          "zh-TW": "\u934B\u4E2D\u71B1\u6CB9\u7206\u9999\u9999\u83C7\u7D72\u3001\u6241\u9B5A\uFF08\u6216\u8766\u7C73\uFF09\uFF0C\u52A0\u5165\u5927\u767D\u83DC\u7D72\u7FFB\u7092\uFF0C\u6CE8\u5165\u5927\u9AA8\u67F4\u9B5A\u9AD8\u6E6F\u5927\u706B\u716E\u6EFE\uFF0C\u8F49\u5C0F\u706B\u71C9\u716E10\u5206\u9418\u81F3\u767D\u83DC\u8EDF\u751C\u3002",
          "en": "Saut\xE9 shiitake & dried flatfish in oil, add cabbage strips, pour in bone broth with bonito. Simmer 10m until cabbage softens.",
          "ja": "\u6CB9\u3067\u690E\u8338\u3068\u5E72\u3057\u9B5A\u3092\u7092\u3081\u3001\u767D\u83DC\u3092\u52A0\u3048\u3066\u7092\u3081\u305F\u3089\u8C5A\u9AA8\u9C39\u51FA\u6C41\u3092\u6CE8\u304E\u3001\u767D\u83DC\u304C\u67D4\u3089\u304B\u304F\u306A\u308B\u307E\u306710\u5206\u716E\u307E\u3059\u3002",
          "ko": "\uD32C\uC5D0 \uBC84\uC12F\uACFC \uAC74\uC0DD\uC120\uC744 \uBCF6\uB2E4\uAC00 \uBC30\uCD94\uB97C \uB123\uACE0 \uBCF6\uC740 \uB4A4 \uC721\uC218\uB97C \uBD93\uACE0 10\uBD84\uAC04 \uBC30\uCD94\uAC00 \uBD80\uB4DC\uB7EC\uC6CC\uC9C8 \uB54C\uAE4C\uC9C0 \uB053\uC785\uB2C8\uB2E4.",
          "vi": "Phi th\u01A1m n\u1EA5m h\u01B0\u01A1ng, cho b\u1EAFp c\u1EA3i v\xE0o x\xE0o s\u01A1 r\u1ED3i \u0111\u1ED5 n\u01B0\u1EDBc h\u1EA7m x\u01B0\u01A1ng v\xE0o \u0111un 10 ph\xFAt cho b\u1EAFp c\u1EA3i m\u1EC1m ng\u1ECDt."
        },
        "durationSeconds": 600,
        "image": "/images/taiwan-pork-soup-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u5730\u74DC\u7C89\u52FE\u82A1\u6253\u86CB\u82B1\u76DB\u88DD",
          "en": "Thicken with Starch Slurry & Finish",
          "ja": "\u3068\u308D\u307F\u3092\u3064\u3051\u3066\u6EB6\u304D\u5375\u3092\u56DE\u3057\u5165\u308C",
          "ko": "\uC804\uBD84\uBB3C\uB85C \uB18D\uB3C4 \uB9DE\uCD94\uACE0 \uB2EC\uAC40\uBB3C \uD480\uAE30",
          "vi": "L\xE0m s\xE1nh n\u01B0\u1EDBc s\xFAp v\xE0 r\u01B0\u1EDBi tr\u1EE9ng \u0111\xE1nh tan"
        },
        "instruction": {
          "zh-TW": "\u653E\u5165\u716E\u597D\u7684\u8089\u7FB9\uFF0C\u5012\u5165\u8ABF\u52FB\u7684\u5730\u74DC\u7C89\u6C34\u5FEB\u901F\u652A\u52FB\u52FE\u82A1\uFF0C\u6DCB\u5165\u86CB\u82B1\u7184\u706B\u3002\u8D77\u934B\u76DB\u7897\uFF0C\u6DCB\u4E0A\u70CF\u918B\u3001\u767D\u80E1\u6912\u7C89\u3001\u9999\u83DC\u8207\u4E5D\u5C64\u5854\u3002",
          "en": "Add cooked pork strips, stir in starch slurry to thicken, drizzle beaten egg. Finish with black vinegar, white pepper & cilantro.",
          "ja": "\u8089\u7FB9\u3092\u623B\u3057\u5165\u308C\u3001\u6C34\u6EB6\u304D\u7247\u6817\u7C89\u3067\u3068\u308D\u307F\u3092\u3064\u3051\u3001\u6EB6\u304D\u5375\u3092\u56DE\u3057\u5165\u308C\u307E\u3059\u3002\u5668\u306B\u76DB\u308A\u3001\u9ED2\u9162\u3001\u80E1\u6912\u3001\u30D1\u30AF\u30C1\u30FC\u3092\u6DFB\u3048\u307E\u3059\u3002",
          "ko": "\uC775\uD78C \uACE0\uAE30 \uC644\uC790\uB97C \uB123\uACE0 \uC804\uBD84\uBB3C\uC744 \uD480\uC5B4 \uAC78\uCB49\uD558\uAC8C \uB9CC\uB4E0 \uB4A4 \uB2EC\uAC40\uBB3C\uC744 \uB450\uB985\uB2C8\uB2E4. \uADF8\uB987\uC5D0 \uB2F4\uACE0 \uD751\uC2DD\uCD08, \uD6C4\uCD94, \uACE0\uC218\uB97C \uC5B9\uC5B4 \uC644\uC131\uD569\uB2C8\uB2E4.",
          "vi": "Cho th\u1ECBt vi\xEAn v\xE0o l\u1EA1i n\u1ED3i, r\u01B0\u1EDBi n\u01B0\u1EDBc b\u1ED9t khoai lang \u0111\u1EC3 t\u1EA1o \u0111\u1ED9 s\xE1nh, th\xEAm tr\u1EE9ng \u0111\xE1nh tan. M\xFAc ra t\xF4 th\xEAm gi\u1EA5m \u0111en, ti\xEAu v\xE0 ng\xF2."
        },
        "durationSeconds": 240,
        "image": "/images/taiwan-pork-soup-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "soup-watery",
        "problem": {
          "zh-TW": "\u7FB9\u6E6F\u52FE\u82A1\u51B7\u537B\u5F8C\u51FA\u6C34\u8B8A\u7A00\uFF1F",
          "en": "Soup turns watery after cooling down?",
          "ja": "\u30B9\u30FC\u30D7\u304C\u51B7\u3081\u308B\u3068\u30B5\u30E9\u30B5\u30E9\u306B\u623B\u3063\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uC218\uD504\uAC00 \uC2DD\uC73C\uBA74\uC11C \uBB3D\uC5B4\uC9C0\uB098\uC694?",
          "vi": "S\xFAp b\u1ECB lo\xE3ng ra sau khi ngu\u1ED9i?"
        },
        "cause": {
          "zh-TW": "\u4F7F\u7528\u4E86\u666E\u901A\u592A\u767D\u7C89\uFF0C\u9047\u5230\u918B\u9178\u5BB9\u6613\u6C34\u89E3\u56DE\u7A00\u3002",
          "en": "Using cornstarch which breaks down rapidly when exposed to vinegar.",
          "ja": "\u9178\u306B\u5F31\u3044\u901A\u5E38\u306E\u7247\u6817\u7C89\u3092\u4F7F\u3063\u305F\u305F\u3081\u3002",
          "ko": "\uC2DD\uCD08\uC758 \uC0B0\uC5D0 \uC57D\uD55C \uC77C\uBC18 \uC804\uBD84\uC744 \uC0AC\uC6A9\uD588\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "D\xF9ng b\u1ED9t b\u1EAFp th\xF4ng th\u01B0\u1EDDng d\u1EC5 b\u1ECB v\u1EEFa khi g\u1EB7p gi\u1EA5m chua."
        },
        "solution": {
          "zh-TW": "\u52D9\u5FC5\u4F7F\u7528\u53F0\u7063\u50B3\u7D71\u300C\u7C97\u7C92\u5730\u74DC\u7C89\u300D\u8ABF\u6C34\u52FE\u82A1\uFF0C\u4FDD\u6C34\u6027\u6975\u5F37\u4E14\u8010\u9178\u8010\u71B1\uFF01",
          "en": "Always use sweet potato starch slurry which stays thick and glossy even with acid.",
          "ja": "\u9178\u306B\u5F37\u304F\u30C4\u30E4\u304C\u4FDD\u305F\u308C\u308B\u53F0\u6E7E\u7523\u30B5\u30C4\u30DE\u30A4\u30E2\u6FB1\u7C89\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
          "ko": "\uACE0\uAD6C\uB9C8 \uC804\uBD84\uC744 \uC0AC\uC6A9\uD574\uC57C \uC2DD\uCD08\uB97C \uB123\uC5B4\uB3C4 \uB18D\uB3C4\uAC00 \uC624\uB798 \uC720\uC9C0\uB429\uB2C8\uB2E4.",
          "vi": "H\xE3y d\xF9ng b\u1ED9t khoai lang nguy\xEAn ch\u1EA5t \u0111\u1EC3 gi\u1EEF \u0111\u1ED9 s\xE1nh m\u01B0\u1EE3t l\xE2u d\xE0i."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u8D77\u934B\u524D\u6CBF\u7897\u7DE3\u6DCB\u4E0A\u4E00\u52FA\u5DE5\u7814\u70CF\u918B\u8207\u5C11\u8A31\u6C99\u8336\u91AC\uFF0C\u662F\u5168\u53F0\u7063\u591C\u5E02\u8001\u9955\u516C\u8A8D\u7684\u9748\u9B42\u5403\u6CD5\uFF01",
        "en": "Drizzling Taiwanese black vinegar and a touch of Shacha sauce around the bowl edge is the authentic night market ritual!",
        "ja": "\u4ED5\u4E0A\u3052\u306B\u53F0\u6E7E\u9ED2\u9162\u3068\u6C99\u8336\u91A4\u3092\u3072\u3068\u56DE\u3057\u3059\u308B\u306E\u304C\u672C\u5834\u306E\u901A\u306E\u98DF\u3079\u65B9\u3067\u3059\uFF01",
        "ko": "\uBA39\uAE30 \uC9C1\uC804 \uB300\uB9CC \uD751\uC2DD\uCD08\uC640 \uC0AC\uCC28\uC7A5\uC744 \uD55C \uBC14\uD034 \uB458\uB7EC\uC8FC\uB294 \uAC83\uC774 \uD604\uC9C0 \uBBF8\uC2DD\uAC00\uB4E4\uC758 \uD301\uC785\uB2C8\uB2E4!",
        "vi": "R\u01B0\u1EDBi m\u1ED9t mu\u1ED7ng gi\u1EA5m \u0111en v\xE0 ch\xFAt s\u1ED1t Sa Tr\xE0 quanh v\xE0nh t\xF4 tr\u01B0\u1EDBc khi th\u01B0\u1EDFng th\u1EE9c \u0111\u1EC3 d\u1EADy m\xF9i th\u01A1m n\u1EE9c."
      }
    ]
  },
  {
    "id": "taiwanese-egg-crepe",
    "slug": "taiwanese-egg-crepe",
    "title": {
      "zh-TW": "\u7737\u6751\u624B\u64C0\u9165\u76AE\u8525\u82B1\u86CB\u9905",
      "en": "Taiwanese Crispy Flaky Egg Crepe (Danbing)",
      "ja": "\u53F0\u6E7E\u671D\u3054\u306F\u3093\u5B9A\u756A \u30B5\u30AF\u30B5\u30AF\u8471\u30D1\u30A4\u305F\u307E\u3054\u713C\u304D\uFF08\u86CB\u9905\uFF09",
      "ko": "\uB300\uB9CC\uC2DD \uBC14\uC0AD\uD558\uACE0 \uCAC4\uAE43\uD55C \uD30C \uACC4\uB780\uB9D0\uC774 \uD06C\uB808\uD398 (\uB534\uBE59)",
      "vi": "B\xE1nh Tr\xE1ng Tr\u1EE9ng Chi\xEAn Gi\xF2n H\xE0nh Hoa \u0110\xE0i Loan"
    },
    "subtitle": {
      "zh-TW": "\u5916\u9165\u5167\u5AE9\u91D1\u9EC3\u8525\u9999\u30FB\u7206\u6F3F\u8D77\u53F8\u30FB\u849C\u84C9\u6CB9\u818F\u7D93\u5178\u65E9\u9910",
      "en": "Flaky Golden Crust, Tender Egg, Scallion Aroma & Garlic Soy Paste",
      "ja": "\u5916\u306F\u30D1\u30EA\u30D1\u30EA\u4E2D\u306F\u3075\u3093\u308F\u308A\u30FB\u30CD\u30AE\u306E\u9999\u308A\u3068\u30CB\u30F3\u30CB\u30AF\u91A4\u6CB9\u304C\u7D76\u54C1",
      "ko": "\uAC89\uBC14\uC18D\uCD09 \uACE0\uC18C\uD55C \uD30C\uD5A5\uACFC \uCE58\uC988 \uD3ED\uD3EC, \uB2EC\uCF64 \uC9ED\uC9E4\uD55C \uB9C8\uB298 \uAC04\uC7A5\uC18C\uC2A4",
      "vi": "V\u1ECF gi\xF2n r\u1EE5m b\xEAn trong m\u1EC1m th\u01A1m, nh\xE2n ph\xF4 mai tr\u1EE9ng b\xE9o ng\u1EADy k\xE8m s\u1ED1t t\u1ECFi"
    },
    "tagline": {
      "zh-TW": "\u5168\u53F0\u7063\u4EBA\u6700\u9A55\u50B2\u7684\u65E9\u9910\u9748\u9B42\uFF0C\u6BCF\u4E00\u53E3\u90FD\u662F\u5361\u6ECB\u5361\u6ECB\u7684\u9165\u8106\u9EA5\u9999",
      "en": "Taiwan\u2019s most iconic morning ritual: golden crispy layers wrapped around fragrant scallion eggs",
      "ja": "\u53F0\u6E7E\u4EBA\u304C\u6BCE\u671D\u611B\u3057\u3066\u3084\u307E\u306A\u3044\u30BD\u30A6\u30EB\u30D5\u30FC\u30C9\u3002\u9999\u3070\u3057\u3044\u5C0F\u9EA6\u306E\u9999\u308A\u3068\u5375\u306E\u30CF\u30FC\u30E2\u30CB\u30FC",
      "ko": "\uB300\uB9CC \uC0AC\uB78C\uB4E4\uC758 \uC544\uCE68\uC744 \uAE68\uC6B0\uB294 \uC601\uD63C\uC758 \uC74C\uC2DD. \uBC14\uC0AD\uBC14\uC0AD\uD55C \uD06C\uB7EC\uC2A4\uD2B8\uC640 \uBD80\uB4DC\uB7EC\uC6B4 \uB2EC\uAC40",
      "vi": "M\xF3n \u0103n s\xE1ng qu\u1ED1c d\xE2n \u0111\u01B0\u1EE3c y\xEAu th\xEDch nh\u1EA5t \u0110\xE0i Loan v\u1EDBi l\u1EDBp v\u1ECF gi\xF2n tan th\u01A1m l\u1EEBng"
    },
    "heroImage": "/images/taiwan-egg-crepe-hero.jpg",
    "difficulty": "easy",
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "defaultServings": 2,
    "caloriesPerServing": 280,
    "category": "breakfast",
    "dietaryTags": [
      "classic",
      "vegetarian"
    ],
    "supportedCookware": [
      "traditional",
      "airFryer"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5317 / \u5168\u53F0\u7737\u6751",
        "en": "Taipei / Military Villages",
        "ja": "\u53F0\u5317 / \u7737\u6751",
        "ko": "\uD0C0\uC774\uBCA0\uC774 / \uAD70\uC778 \uB9C8\uC744",
        "vi": "\u0110\xE0i B\u1EAFc / Khu gia binh"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u53F0\u5317\u83EF\u5C71\u961C\u676D\u8C46\u6F3F",
          "en": "Fuhang Soy Milk",
          "ja": "\u961C\u676D\u8C46\u6F3F",
          "ko": "\uD478\uD56D\uB610\uC6B0\uC7A5",
          "vi": "Fuhang Soy Milk"
        },
        {
          "zh-TW": "\u5BE7\u590F\u591C\u5E02",
          "en": "Ningxia Night Market",
          "ja": "\u5BE7\u590F\u591C\u5E02",
          "ko": "\uB2DD\uC0E4 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Ningxia"
        },
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        }
      ],
      "historyStory": {
        "zh-TW": "\u86CB\u9905\u8D77\u6E90\u65BC\u6230\u5F8C\u7737\u6751\u5317\u65B9\u9EB5\u98DF\u50B3\u627F\uFF0C\u53F0\u7063\u65E9\u9910\u5E97\u5C07\u9EB5\u7C89\u7CCA\u6216\u624B\u64C0\u8584\u9905\u6539\u826F\u6210\u5916\u9165\u5167\u8EDF\u3001\u593E\u5165\u96DE\u86CB\u8207\u8525\u82B1\u7684\u7279\u8272\u65E9\u9EDE\uFF0C\u73FE\u5DF2\u98A8\u9761\u5168\u7403\u3002",
        "en": "Evolved from military villages blending Northern Chinese flatbreads with local Taiwanese morning culture into a global phenomenon.",
        "ja": "\u53F0\u6E7E\u306E\u8ECD\u4EBA\u6751\uFF08\u7737\u6751\uFF09\u3067\u8A95\u751F\u3057\u305F\u5C0F\u9EA6\u7C89\u6599\u7406\u304C\u9032\u5316\u3057\u3001\u4ECA\u3084\u4E16\u754C\u4E2D\u3067\u611B\u3055\u308C\u308B\u53F0\u6E7E\u671D\u3054\u306F\u3093\u306E\u738B\u69D8\u306B\u3002",
        "ko": "\uAD70\uC778 \uB9C8\uC744\uC758 \uBD81\uBC29 \uBC00\uAC00\uB8E8 \uC694\uB9AC\uC5D0\uC11C \uBC1C\uC804\uD558\uC5EC \uB300\uB9CC \uB300\uD45C \uC870\uC2DD \uBA54\uB274\uB85C \uC790\uB9AC\uC7A1\uC558\uC2B5\uB2C8\uB2E4.",
        "vi": "B\u1EAFt ngu\u1ED3n t\u1EEB c\xE1c khu gia binh dung h\xF2a \u1EA9m th\u1EF1c b\u1ED9t m\xEC mi\u1EC1n B\u1EAFc v\u1EDBi v\u0103n h\xF3a \u0103n s\xE1ng \u0110\xE0i Loan."
      },
      "taiwaneseHokkien": "Nn\u0304g-pi\xE1nn (\u310B\u3125\u02CA \u3105\u3127\u3122\u02CB)",
      "mandarinPinyin": "D\xE0n B\u01D0ng (\u3109\u3122\u02CB \u3105\u3127\u3125\u02C7)",
      "audioPronunciationText": "\u86CB\u9905\u4E00\u4EFD\uFF0C\u52A0\u86CB\u52A0\u8D77\u53F8"
    },
    "ingredients": [
      {
        "id": "danbing-sheets",
        "name": {
          "zh-TW": "\u624B\u64C0\u9165\u76AE\u86CB\u9905\u76AE",
          "en": "Flaky Danbing Sheets",
          "ja": "\u624B\u3054\u306D\u86CB\u9905\u306E\u76AE",
          "ko": "\uB534\uBE59 \uC804\uC6A9 \uD53C",
          "vi": "V\u1ECF b\xE1nh \u0111\u1EA3n b\xEDnh"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 sheets",
        "isKeyFlavor": true,
        "chineseName": "\u86CB\u9905\u76AE",
        "chinesePinyin": "D\xE0n b\u01D0ng p\xED"
      },
      {
        "id": "eggs",
        "name": {
          "zh-TW": "\u65B0\u9BAE\u96DE\u86CB",
          "en": "Fresh Eggs",
          "ja": "\u65B0\u9BAE\u306A\u5375",
          "ko": "\uC2E0\uC120\uD55C \uACC4\uB780",
          "vi": "Tr\u1EE9ng g\xE0 t\u01B0\u01A1i"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 pcs",
        "isKeyFlavor": true,
        "chineseName": "\u96DE\u86CB",
        "chinesePinyin": "J\u012B d\xE0n"
      },
      {
        "id": "scallions",
        "name": {
          "zh-TW": "\u7D30\u8525\u82B1",
          "en": "Minced Scallions",
          "ja": "\u523B\u307F\u9752\u30CD\u30AE",
          "ko": "\uC1A1\uC1A1 \uC36C \uCABD\uD30C",
          "vi": "H\xE0nh l\xE1 b\u0103m"
        },
        "amount": 30,
        "unitMetric": "g",
        "unitUS": "1 oz",
        "isKeyFlavor": true,
        "chineseName": "\u8525\u82B1",
        "chinesePinyin": "C\u014Dng hu\u0101"
      },
      {
        "id": "garlic-soy-paste",
        "name": {
          "zh-TW": "\u849C\u84C9\u751C\u6CB9\u818F",
          "en": "Sweet Garlic Soy Paste",
          "ja": "\u849C\u84C9\u6CB9\u818F",
          "ko": "\uB300\uB9CC \uB9C8\uB298 \uAC04\uC7A5 \uC18C\uC2A4",
          "vi": "N\u01B0\u1EDBc t\u01B0\u01A1ng ng\u1ECDt t\u1ECFi \u1EDBt"
        },
        "amount": 20,
        "unitMetric": "ml",
        "unitUS": "1 tbsp",
        "chineseName": "\u849C\u84C9\u6CB9\u818F",
        "chinesePinyin": "Su\xE0nr\xF3ng y\xF3ug\u0101o"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u6253\u6563\u8525\u82B1\u86CB\u6DB2",
          "en": "Whisk Scallions into Eggs",
          "ja": "\u30CD\u30AE\u5165\u308A\u5375\u6DB2\u3092\u6EB6\u304D\u307B\u3050\u3059",
          "ko": "\uD30C\uB97C \uB123\uACE0 \uACC4\uB780\uBB3C \uD480\uAE30",
          "vi": "\u0110\xE1nh tan tr\u1EE9ng v\u1EDBi h\xE0nh l\xE1"
        },
        "instruction": {
          "zh-TW": "\u7897\u4E2D\u6253\u5165\u96DE\u86CB\uFF0C\u52A0\u5165\u5927\u91CF\u65B0\u9BAE\u7FE0\u7DA0\u7D30\u8525\u82B1\u3001\u5C11\u8A31\u9E7D\u8207\u767D\u80E1\u6912\u7C89\uFF0C\u7528\u7B77\u5B50\u5145\u5206\u652A\u6253\u51FA\u7D30\u7DFB\u6CE1\u6CAB\u3002",
          "en": "Beat eggs in a bowl with generous minced scallions, pinch of salt and white pepper until frothy.",
          "ja": "\u30DC\u30A6\u30EB\u306B\u5375\u3092\u5272\u308A\u5165\u308C\u3001\u305F\u3063\u3077\u308A\u306E\u523B\u307F\u30CD\u30AE\u3001\u5869\u3001\u767D\u80E1\u6912\u3092\u52A0\u3048\u3066\u3088\u304F\u6EB6\u304D\u307B\u3050\u3057\u307E\u3059\u3002",
          "ko": "\uBCFC\uC5D0 \uACC4\uB780\uC744 \uD480\uACE0 \uC1A1\uC1A1 \uC36C \uCABD\uD30C, \uC18C\uAE08 \uC57D\uAC04, \uBC31\uD6C4\uCD94\uB97C \uB123\uC5B4 \uAC70\uD488\uC774 \uC77C\uB3C4\uB85D \uC798 \uC11E\uC5B4\uC90D\uB2C8\uB2E4.",
          "vi": "\u0110\u1EADp tr\u1EE9ng v\xE0o t\xF4, th\xEAm nhi\u1EC1u h\xE0nh l\xE1 b\u0103m, ch\xFAt mu\u1ED1i v\xE0 ti\xEAu tr\u1EAFng r\u1ED3i \u0111\xE1nh \u0111\u1EC1u cho s\u1EE7i b\u1ECDt."
        },
        "durationSeconds": 120,
        "image": "/images/taiwan-egg-crepe-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u71B1\u934B\u5012\u5165\u8525\u82B1\u86CB\u6DB2\u6524\u958B",
          "en": "Pour Egg into Heated Pan",
          "ja": "\u30D5\u30E9\u30A4\u30D1\u30F3\u306B\u5375\u6DB2\u3092\u6D41\u3057\u5165\u308C\u308B",
          "ko": "\uC608\uC5F4\uB41C \uD32C\uC5D0 \uD30C \uACC4\uB780\uBB3C \uBD93\uAE30",
          "vi": "\u0110\u1ED5 tr\u1EE9ng h\xE0nh v\xE0o ch\u1EA3o n\xF3ng"
        },
        "instruction": {
          "zh-TW": "\u5E73\u5E95\u934B\u4E2D\u5012\u5165\u4E00\u5C0F\u5319\u6CB9\uFF0C\u4E2D\u706B\u71B1\u934B\u5F8C\u5012\u5165\u8525\u82B1\u86CB\u6DB2\uFF0C\u8FC5\u901F\u6416\u6643\u934B\u8EAB\u4F7F\u86CB\u6DB2\u5747\u52FB\u6524\u958B\u6210\u5713\u5F62\u3002",
          "en": "Heat 1 tsp oil in a non-stick skillet over medium heat, pour in scallion egg mixture and swirl into a round sheet.",
          "ja": "\u30D5\u30E9\u30A4\u30D1\u30F3\u306B\u6CB9\u5C0F\u3055\u30581\u3092\u71B1\u3057\u3001\u30CD\u30AE\u5165\u308A\u5375\u6DB2\u3092\u4E00\u6C17\u306B\u6D41\u3057\u5165\u308C\u3066\u4E38\u304F\u5E83\u3052\u307E\u3059\u3002",
          "ko": "\uD32C\uC5D0 \uAE30\uB984\uC744 \uB450\uB974\uACE0 \uC911\uBD88\uB85C \uC608\uC5F4\uD55C \uB4A4 \uD30C \uACC4\uB780\uBB3C\uC744 \uBD80\uC5B4 \uB465\uAE00\uAC8C \uD3BC\uCCD0\uC90D\uB2C8\uB2E4.",
          "vi": "L\xE0m n\xF3ng ch\u1EA3o v\u1EDBi ch\xFAt d\u1EA7u, \u0111\u1ED5 h\u1ED7n h\u1EE3p tr\u1EE9ng h\xE0nh v\xE0o v\xE0 l\xE1ng \u0111\u1EC1u th\xE0nh h\xECnh tr\xF2n."
        },
        "durationSeconds": 120,
        "image": "/images/taiwan-egg-crepe-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u8986\u84CB\u9905\u76AE\u7FFB\u9762\u6372\u8D77",
          "en": "Cover with Crepe & Roll",
          "ja": "\u76AE\u3092\u91CD\u306D\u3066\u88CF\u8FD4\u3057\u5DFB\u304F",
          "ko": "\uD53C\uB97C \uB36E\uACE0 \uB4A4\uC9D1\uC5B4 \uB3CC\uB3CC \uB9D0\uAE30",
          "vi": "\u0110\u1EB7t v\u1ECF b\xE1nh l\xEAn l\u1EADt m\u1EB7t v\xE0 cu\u1ED9n tr\xF2n"
        },
        "instruction": {
          "zh-TW": "\u5728\u534A\u719F\u86CB\u6DB2\u4E0A\u7ACB\u523B\u8986\u84CB\u4E0A\u86CB\u9905\u76AE\uFF0C\u7528\u934B\u93DF\u8F15\u58D3\u8CBC\u5408\u3002\u5F85\u5E95\u90E8\u86CB\u9999\u51DD\u56FA\u7FFB\u9762\uFF0C\u92EA\u4E0A\u8D77\u53F8\u7247\uFF0C\u7531\u4E00\u7AEF\u7DCA\u5BC6\u6372\u6210\u5713\u67F1\u72C0\u3002",
          "en": "Immediately place Danbing crepe on top of half-cooked egg, press down. Flip over, add cheese, and roll tightly into a cylinder.",
          "ja": "\u5375\u304C\u534A\u719F\u306E\u3046\u3061\u306B\u86CB\u9905\u306E\u76AE\u3092\u91CD\u306D\u3066\u5BC6\u7740\u3055\u305B\u307E\u3059\u3002\u88CF\u8FD4\u3057\u3066\u30C1\u30FC\u30BA\u3092\u306E\u305B\u3001\u7AEF\u304B\u3089\u304F\u308B\u304F\u308B\u3068\u5DFB\u304D\u307E\u3059\u3002",
          "ko": "\uACC4\uB780\uC774 \uBC18\uC219\uC77C \uB54C \uB534\uBE59 \uD53C\uB97C \uB36E\uC5B4 \uBC00\uCC29\uC2DC\uD0B5\uB2C8\uB2E4. \uB4A4\uC9D1\uC5B4\uC11C \uCE58\uC988\uB97C \uC62C\uB9AC\uACE0 \uB3CC\uB3CC \uB9D0\uC544\uC90D\uB2C8\uB2E4.",
          "vi": "\u0110\u1EB7t v\u1ECF b\xE1nh l\xEAn khi tr\u1EE9ng c\xF2n h\u01A1i \u01B0\u1EDBt, \u1EA5n nh\u1EB9. L\u1EADt m\u1EB7t b\xE1nh, th\xEAm ph\xF4 mai r\u1ED3i cu\u1ED9n tr\xF2n ch\u1EB7t tay."
        },
        "durationSeconds": 180,
        "image": "/images/taiwan-egg-crepe-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u5207\u6BB5\u88DD\u76E4\u6DCB\u849C\u84C9\u91AC\u6CB9\u818F",
          "en": "Slice and Drizzle Garlic Sauce",
          "ja": "\u5207\u308A\u5206\u3051\u3066\u30CB\u30F3\u30CB\u30AF\u91A4\u6CB9\u3092\u304B\u3051\u308B",
          "ko": "\uBA39\uAE30 \uC88B\uAC8C \uC370\uC5B4 \uB9C8\uB298 \uC18C\uC2A4 \uBFCC\uB9AC\uAE30",
          "vi": "C\u1EAFt kh\xFAc v\xE0 r\u01B0\u1EDBi s\u1ED1t t\u1ECFi ng\u1ECDt"
        },
        "instruction": {
          "zh-TW": "\u5C07\u96D9\u9762\u714E\u81F3\u91D1\u9EC3\u9165\u8106\u7684\u86CB\u9905\u79FB\u81F3\u7827\u677F\uFF0C\u7528\u83DC\u5200\u5207\u6210\u7D04 3cm \u7B49\u5BEC\u5C0F\u6BB5\u88DD\u76E4\uFF0C\u6DCB\u4E0A\u9748\u9B42\u849C\u84C9\u91AC\u6CB9\u818F\u5373\u53EF\u71B1\u9A30\u9A30\u4EAB\u7528\uFF01",
          "en": "Transfer golden crispy roll to cutting board, slice into 3cm pieces, and drizzle with sweet garlic soy paste.",
          "ja": "\u4E21\u9762\u304C\u30AD\u30C4\u30CD\u8272\u306B\u30AB\u30EA\u30C3\u3068\u713C\u3051\u305F\u3089\u307E\u306A\u677F\u306B\u53D6\u308A\u51FA\u3057\u30013cm\u5E45\u306B\u5207\u3063\u3066\u7279\u88FD\u30CB\u30F3\u30CB\u30AF\u7518\u91A4\u6CB9\u3092\u304B\u3051\u3066\u5B8C\u6210\u3067\u3059\uFF01",
          "ko": "\uB178\uB987\uB178\uB987 \uBC14\uC0AD\uD558\uAC8C \uAD6C\uC6CC\uC9C4 \uB534\uBE59\uC744 3cm \uD06C\uAE30\uB85C \uC370\uC5B4 \uC811\uC2DC\uC5D0 \uB2F4\uACE0 \uD2B9\uC81C \uB9C8\uB298 \uAC04\uC7A5\uC18C\uC2A4\uB97C \uBFCC\uB824 \uC644\uC131\uD569\uB2C8\uB2E4!",
          "vi": "C\u1EAFt cu\u1ED9n b\xE1nh gi\xF2n r\u1EE5m th\xE0nh t\u1EEBng kh\xFAc 3cm, x\u1EBFp ra \u0111\u0129a v\xE0 r\u01B0\u1EDBi s\u1ED1t t\u01B0\u01A1ng ng\u1ECDt t\u1ECFi \u1EDBt th\u01A1m l\u1EEBng."
        },
        "durationSeconds": 120,
        "image": "/images/taiwan-egg-crepe-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "crepe-separate",
        "problem": {
          "zh-TW": "\u9905\u76AE\u8207\u86CB\u6DB2\u5206\u96E2\u6C92\u6709\u8CBC\u5408\uFF1F",
          "en": "Crepe detaches from egg layer?",
          "ja": "\u76AE\u3068\u5375\u304C\u304F\u3063\u3064\u304B\u305A\u306B\u5265\u304C\u308C\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uB534\uBE59 \uD53C\uC640 \uACC4\uB780\uC774 \uB530\uB85C \uB178\uB098\uC694?",
          "vi": "V\u1ECF b\xE1nh kh\xF4ng d\xEDnh ch\u1EB7t v\xE0o l\u1EDBp tr\u1EE9ng?"
        },
        "cause": {
          "zh-TW": "\u86CB\u6DB2\u592A\u719F\u624D\u653E\u9905\u76AE\uFF0C\u5931\u53BB\u9ECF\u8457\u529B\u3002",
          "en": "Adding crepe after egg is already fully cooked.",
          "ja": "\u5375\u304C\u5B8C\u5168\u306B\u56FA\u307E\u3063\u3066\u304B\u3089\u76AE\u3092\u306E\u305B\u305F\u305F\u3081\u3002",
          "ko": "\uACC4\uB780\uC774 \uC774\uBBF8 \uB2E4 \uC775\uC740 \uB4A4\uC5D0 \uD53C\uB97C \uC62C\uB838\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "\u0110\u1EB7t v\u1ECF b\xE1nh l\xEAn khi tr\u1EE9ng \u0111\xE3 ch\xEDn ho\xE0n to\xE0n."
        },
        "solution": {
          "zh-TW": "\u86CB\u6DB2\u5012\u5165\u934B\u4E2D\u8D81\u300C\u8868\u9762\u9084\u5448\u73FE\u534A\u719F\u6FD5\u6F64\u72C0\u300D\u5C31\u8981\u7ACB\u523B\u84CB\u4E0A\u9905\u76AE\uFF0C\u7528\u93DF\u5B50\u5747\u52FB\u6309\u58D3\uFF01",
          "en": "Lay crepe on top while egg surface is still wet and uncooked, pressing firmly.",
          "ja": "\u5375\u304C\u5B8C\u5168\u306B\u56FA\u307E\u308B\u524D\u306E\u534A\u719F\u306E\u77AC\u9593\u306B\u76AE\u3092\u306E\u305B\u3066\u8EFD\u304F\u62BC\u3055\u3048\u3066\u304F\u3060\u3055\u3044\u3002",
          "ko": "\uACC4\uB780 \uC717\uBA74\uC774 \uCD09\uCD09\uD560 \uB54C \uD53C\uB97C \uC5B9\uACE0 \uAC00\uBCCD\uAC8C \uB20C\uB7EC\uC8FC\uC5B4\uC57C \uB2E8\uB2E8\uD788 \uB2EC\uB77C\uBD99\uC2B5\uB2C8\uB2E4.",
          "vi": "H\xE3y \u0111\u1EB7t v\u1ECF b\xE1nh l\xEAn ngay khi m\u1EB7t tr\u1EE9ng c\xF2n \u01B0\u1EDBt v\xE0 d\xF9ng x\u1EBBng \u1EA5n nh\u1EB9."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u6C23\u70B8\u934B\u61F6\u4EBA\u5403\u6CD5\uFF1A\u9905\u76AE\u5237\u6CB9 180\xB0C \u6C23\u70B8 3 \u5206\u9418\u7ACB\u523B\u4EAB\u6709\u5343\u5C64\u9165\u8106\u53E3\u611F\uFF01",
        "en": "Air Fryer Hack: Brush crepe with oil and air fry at 180\xB0C for 3 mins for ultra-flaky layers!",
        "ja": "\u30A8\u30A2\u30D5\u30E9\u30A4\u30E4\u30FC\u306A\u3089180\u2103\u30673\u5206\u52A0\u71B1\u3059\u308B\u3060\u3051\u3067\u9A5A\u304D\u306E\u30B5\u30AF\u30B5\u30AF\u611F\u306B\u306A\u308A\u307E\u3059\uFF01",
        "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 \uAFC0\uD301: \uD53C\uC5D0 \uAE30\uB984\uC744 \uC0B4\uC9DD \uBC1C\uB77C 180\xB0C\uC5D0\uC11C 3\uBD84\uAC04 \uB3CC\uB9AC\uBA74 \uD06C\uB85C\uC640\uC0C1\uCC98\uB7FC \uBC14\uC0AD\uD574\uC9D1\uB2C8\uB2E4!",
        "vi": "M\u1EB9o n\u1ED3i chi\xEAn kh\xF4ng d\u1EA7u: Qu\xE9t d\u1EA7u l\xEAn v\u1ECF b\xE1nh n\u01B0\u1EDBng 180\xB0C trong 3 ph\xFAt \u0111\u1EC3 c\xF3 l\u1EDBp v\u1ECF gi\xF2n r\u1EE5m."
      }
    ]
  },
  {
    "id": "taiwanese-coffin-bread",
    "slug": "taiwanese-coffin-bread",
    "title": {
      "zh-TW": "\u53F0\u5357\u5E9C\u57CE\u7D93\u5178\u9EC3\u91D1\u68FA\u6750\u677F",
      "en": "Tainan Authentic Golden Coffin Bread",
      "ja": "\u53F0\u5357\u540D\u7269 \u9EC4\u91D1\u68FA\u6750\u677F\uFF08\u30B5\u30AF\u30B5\u30AF\u30C8\u30FC\u30B9\u30C8\u30B7\u30C1\u30E5\u30FC\uFF09",
      "ko": "\uD0C0\uC774\uB09C \uBA85\uBB3C \uD669\uAE08 \uAD00\uC7AC\uD310 (\uD06C\uB9AC\uBBF8 \uD574\uC0B0\uBB3C \uD1A0\uC2A4\uD2B8 \uBC15\uC2A4)",
      "vi": "B\xE1nh M\xEC Quan T\xE0i V\xE0ng Gi\xF2n \u0110\xE0i Nam"
    },
    "subtitle": {
      "zh-TW": "\u9165\u70B8\u539A\u7247\u5410\u53F8\u76D2\u5B50\u30FB\u6FC3\u90C1\u6ED1\u9806\u96DE\u8089\u6D77\u9BAE\u767D\u91AC\u30FB\u4E2D\u897F\u5408\u74A7\u50B3\u5947",
      "en": "Deep-Fried Golden Thick Toast Box with Creamy Seafood Chicken Chowder",
      "ja": "\u30AB\u30EA\u30C3\u3068\u63DA\u3052\u305F\u539A\u5207\u308A\u98DF\u30D1\u30F3\u306B\u6FC3\u539A\u30AF\u30EA\u30FC\u30DF\u30FC\u6D77\u9BAE\u30C1\u30AD\u30F3\u30B7\u30C1\u30E5\u30FC",
      "ko": "\uBC14\uC0AD\uD558\uAC8C \uD280\uACA8\uB0B8 \uB450\uD23C\uD55C \uC2DD\uBE75 \uC0C1\uC790 \uC18D \uC9C4\uD558\uACE0 \uACE0\uC18C\uD55C \uD574\uC0B0\uBB3C \uCE58\uD0A8 \uD06C\uB9BC\uC2A4\uD29C",
      "vi": "H\u1ED9p b\xE1nh m\xEC sandwich chi\xEAn gi\xF2n r\u1EE5m ng\u1EADp s\u1ED1t kem h\u1EA3i s\u1EA3n th\u1ECBt g\xE0 b\xE9o ng\u1EADy"
    },
    "tagline": {
      "zh-TW": "\u53F0\u5357\u6C99\u5361\u91CC\u5DF4\u767C\u6E90\u7684\u50B3\u5947\u9EDE\u5FC3\uFF01\u5916\u6BBC\u91D1\u9EC3\u9165\u8106\uFF0C\u6380\u958B\u6EFF\u6EA2\u7D72\u6ED1\u6D77\u9BAE\u6FC3\u9999",
      "en": "The legendary snack born in Tainan Sakariba! Crispy golden shell with velvety rich chowder",
      "ja": "\u53F0\u5357\u30B5\u30AB\u30EA\u30D0\u767A\u7965\u306E\u4F1D\u8AAC\u306E\u30B0\u30EB\u30E1\u3002\u30B5\u30AF\u30B5\u30AF\u306E\u30D1\u30F3\u3092\u958B\u3051\u308B\u3068\u71B1\u3005\u306E\u7279\u88FD\u30B7\u30C1\u30E5\u30FC\u304C\u6EA2\u308C\u51FA\u3057\u307E\u3059",
      "ko": "\uD0C0\uC774\uB09C \uC0AC\uCE74\uB9AC\uBC14\uC5D0\uC11C \uC2DC\uC791\uB41C \uC804\uC124\uC758 \uAE38\uAC70\uB9AC \uC74C\uC2DD! \uBC14\uC0AD\uD55C \uBE75 \uB69C\uAED1\uC744 \uC5F4\uBA74 \uD06C\uB9AC\uBBF8\uD55C \uC2A4\uD29C\uAC00 \uAC00\uB4DD",
      "vi": "M\xF3n \u0103n huy\u1EC1n tho\u1EA1i x\u1EE9 \u0110\xE0i Nam v\u1EDBi v\u1ECF b\xE1nh m\xEC gi\xF2n tan c\xF9ng nh\xE2n s\u1ED1t kem s\xE1nh m\u1ECBn ng\u1EA5t ng\xE2y"
    },
    "heroImage": "/images/taiwan-coffin-bread-hero.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "defaultServings": 2,
    "caloriesPerServing": 450,
    "category": "mains",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional",
      "airFryer"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5357\u6C99\u5361\u91CC\u5DF4",
        "en": "Tainan Sakariba",
        "ja": "\u53F0\u5357\u30B5\u30AB\u30EA\u30D0",
        "ko": "\uD0C0\uC774\uB09C \uC0AC\uCE74\uB9AC\uBC14",
        "vi": "Sakariba \u0110\xE0i Nam"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u82B1\u5712\u591C\u5E02",
          "en": "Tainan Flower Night Market",
          "ja": "\u82B1\u5712\u591C\u5E02",
          "ko": "\uD654\uC704\uC548 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Tainan Flower"
        },
        {
          "zh-TW": "\u6B66\u8056\u591C\u5E02",
          "en": "Wusheng Night Market",
          "ja": "\u6B66\u8056\u591C\u5E02",
          "ko": "\uBB34\uC131 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Wusheng"
        },
        {
          "zh-TW": "\u82B1\u84EE\u6771\u5927\u9580\u591C\u5E02",
          "en": "Hualien Dongdamen Night Market",
          "ja": "\u82B1\u84EE\u6771\u5927\u9580\u591C\u5E02",
          "ko": "\uD654\uB844 \uB465\uB2E4\uBA3C \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Dongdamen"
        }
      ],
      "historyStory": {
        "zh-TW": "1940\u5E74\u4EE3\u7531\u53F0\u5357\u300C\u76DB\u5834\u8001\u724C\u300D\u540D\u5EDA\u8A31\u516D\u4E00\u5148\u751F\u7814\u767C\u3002\u56E0\u5C07\u539A\u7247\u5410\u53F8\u70B8\u9165\u5F8C\u586B\u5165\u897F\u5F0F\u767D\u91AC\u5167\u9921\uFF0C\u5F62\u72C0\u4F3C\u5B98\u6728\u800C\u5F97\u540D\u300C\u68FA\u6750\u677F\u300D\uFF0C\u5BD3\u610F\u300C\u5347\u5B98\u767C\u8CA1\u300D\uFF0C\u8F5F\u52D5\u5168\u53F0\u3002",
        "en": "Invented in the 1940s by Chef Hsu Liu-yi in Tainan Sakariba, named after its box shape with auspicious meaning of wealth & promotion.",
        "ja": "1940\u5E74\u4EE3\u306B\u53F0\u5357\u3067\u8003\u6848\u3055\u308C\u305F\u6599\u7406\u3002\u30D1\u30F3\u3092\u68FA\u306B\u898B\u7ACB\u3066\u305F\u30E6\u30CB\u30FC\u30AF\u306A\u30CD\u30FC\u30DF\u30F3\u30B0\u3068\u51FA\u4E16\u30FB\u84C4\u8CA1\u306E\u7E01\u8D77\u306E\u826F\u3055\u3067\u5927\u30D2\u30C3\u30C8\u3057\u307E\u3057\u305F\u3002",
        "ko": "1940\uB144\uB300 \uD0C0\uC774\uB09C \uC170\uD504\uAC00 \uAC1C\uBC1C\uD55C \uC694\uB9AC\uB85C \uAD00 \uBAA8\uC591\uC744 \uB2EE\uC544 \uAD00\uC7AC\uD310\uC774\uB77C \uBD88\uB9AC\uBA70 \uC2B9\uC9C4\uACFC \uC7AC\uBB3C\uC744 \uBD80\uB978\uB2E4\uB294 \uB73B\uC744 \uB2F4\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
        "vi": "\u0110\u01B0\u1EE3c s\xE1ng t\u1EA1o v\xE0o th\u1EADp ni\xEAn 1940 t\u1EA1i \u0110\xE0i Nam, mang \xFD ngh\u0129a th\u0103ng quan ph\xE1t t\xE0i v\u1EDBi h\xECnh d\xE1ng chi\u1EBFc h\u1ED9p \u0111\u1ED9c \u0111\xE1o."
      },
      "taiwaneseHokkien": "Kuan-tsh\xE2-p\xE1n (\u310D\u3128\u3122 \u3118\u311A \u3105\u3122\u02CB)",
      "mandarinPinyin": "Gu\u0101n Cai B\u01CEn (\u310D\u3128\u3122 \u3118\u311E\u02CA \u3105\u3122\u02C7)",
      "audioPronunciationText": "\u68FA\u6750\u677F\u4E00\u4EFD\uFF0C\u8D81\u71B1\u5403"
    },
    "ingredients": [
      {
        "id": "thick-toast",
        "name": {
          "zh-TW": "\u539A\u7247\u767D\u5410\u53F8 (3.5cm\u539A)",
          "en": "Thick Cut White Toast",
          "ja": "\u539A\u5207\u308A\u98DF\u30D1\u30F3",
          "ko": "\uB450\uD23C\uD55C \uD1B5\uC2DD\uBE75",
          "vi": "B\xE1nh m\xEC sandwich g\u1ED1i c\u1EAFt d\xE0y"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 slices",
        "isKeyFlavor": true,
        "chineseName": "\u539A\u7247\u5410\u53F8",
        "chinesePinyin": "H\xF2upi\xE0n t\u01D4s\u012B"
      },
      {
        "id": "chicken-thigh",
        "name": {
          "zh-TW": "\u53BB\u9AA8\u96DE\u817F\u8089\u4E01",
          "en": "Boneless Chicken Thigh",
          "ja": "\u9D8F\u3082\u3082\u8089\u89D2\u5207\u308A",
          "ko": "\uB2ED\uB2E4\uB9AC\uC0B4 \uAE4D\uB451\uC370\uAE30",
          "vi": "Th\u1ECBt \u0111\xF9i g\xE0 th\xE1i h\u1EA1t l\u1EF1u"
        },
        "amount": 120,
        "unitMetric": "g",
        "unitUS": "4 oz",
        "chineseName": "\u96DE\u8089\u4E01",
        "chinesePinyin": "J\u012B r\xF2u d\u012Bng"
      },
      {
        "id": "shrimp",
        "name": {
          "zh-TW": "\u9BAE\u8766\u4EC1\u8207\u82B1\u679D\u4E01",
          "en": "Shrimp & Squid Chunks",
          "ja": "\u30A8\u30D3\u30FB\u30A4\u30AB\u89D2\u5207\u308A",
          "ko": "\uC0C8\uC6B0 \uBC0F \uC624\uC9D5\uC5B4",
          "vi": "T\xF4m t\u01B0\u01A1i v\xE0 m\u1EF1c h\u1EA1t l\u1EF1u"
        },
        "amount": 80,
        "unitMetric": "g",
        "unitUS": "3 oz",
        "isKeyFlavor": true,
        "chineseName": "\u8766\u4EC1\u82B1\u679D",
        "chinesePinyin": "Xi\u0101r\xE9n hu\u0101zh\u012B"
      },
      {
        "id": "milk",
        "name": {
          "zh-TW": "\u9BAE\u725B\u5976\u8207\u9BAE\u5976\u6CB9",
          "en": "Whole Milk & Heavy Cream",
          "ja": "\u725B\u4E73\u3068\u751F\u30AF\u30EA\u30FC\u30E0",
          "ko": "\uC6B0\uC720 \uBC0F \uC0DD\uD06C\uB9BC",
          "vi": "S\u1EEFa t\u01B0\u01A1i v\xE0 whipping cream"
        },
        "amount": 200,
        "unitMetric": "ml",
        "unitUS": "0.8 cup",
        "chineseName": "\u9BAE\u5976",
        "chinesePinyin": "Xi\u0101n n\u01CEi"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u9165\u70B8\u539A\u7247\u5410\u53F8\u6210\u91D1\u9EC3\u76D2\u5B50",
          "en": "Deep-Fry Toast into Golden Box",
          "ja": "\u539A\u5207\u308A\u98DF\u30D1\u30F3\u3092\u30AD\u30C4\u30CD\u8272\u306B\u63DA\u3052\u308B",
          "ko": "\uB450\uD23C\uD55C \uC2DD\uBE75 \uBC14\uC0AD\uD558\uAC8C \uD280\uACA8\uB0B4\uAE30",
          "vi": "Chi\xEAn v\xE0ng gi\xF2n l\xE1t b\xE1nh m\xEC sandwich d\xE0y"
        },
        "instruction": {
          "zh-TW": "\u6CB9\u934B\u52A0\u71B1\u81F3 175\xB0C\uFF0C\u5C07\u539A\u7247\u5410\u53F8\u6574\u584A\u653E\u5165\u6CB9\u934B\u4E2D\uFF0C\u70B8\u81F3\u516D\u9762\u91D1\u9EC3\u9165\u8106\uFF08\u6216\u7528\u6C23\u70B8\u934B 185\xB0C \u96D9\u9762\u5674\u6CB9\u6C23\u70B8 6 \u5206\u9418\uFF09\uFF0C\u6488\u8D77\u701D\u6CB9\u3002",
          "en": "Deep-fry thick toast in 175\xB0C oil until all 6 sides are golden and crispy (or air-fry with oil spray at 185\xB0C for 6m). Drain.",
          "ja": "175\u2103\u306E\u6CB9\u3067\u539A\u5207\u308A\u98DF\u30D1\u30F3\u3092\u5168\u9762\u304C\u304D\u3064\u306D\u8272\u306B\u30AB\u30EA\u30C3\u3068\u3059\u308B\u307E\u3067\u63DA\u3052\u307E\u3059\uFF08\u30A8\u30A2\u30D5\u30E9\u30A4\u30E4\u30FC185\u2103\u30676\u5206\u3067\u3082OK\uFF09\u3002",
          "ko": "175\xB0C \uAE30\uB984\uC5D0 \uB450\uD23C\uD55C \uC2DD\uBE75\uC744 \uB123\uACE0 \uBAA8\uB4E0 \uBA74\uC774 \uD669\uAE08\uBE5B\uC73C\uB85C \uBC14\uC0AD\uD574\uC9C8 \uB54C\uAE4C\uC9C0 \uD280\uACA8\uB0C5\uB2C8\uB2E4 (\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4 185\xB0C 6\uBD84 \uAC00\uB2A5).",
          "vi": "Chi\xEAn ng\u1EADp d\u1EA7u l\xE1t b\xE1nh m\xEC d\xE0y \u1EDF 175\xB0C \u0111\u1EBFn khi 6 m\u1EB7t v\xE0ng gi\xF2n r\u1EE5m (ho\u1EB7c n\u1ED3i chi\xEAn kh\xF4ng d\u1EA7u 185\xB0C trong 6 ph\xFAt)."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-coffin-bread-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u5C0F\u5200\u958B\u84CB\u6316\u7A7A\u5167\u90E8\u6210\u76D2",
          "en": "Cut Square Lid & Hollow Inside",
          "ja": "\u4E0A\u90E8\u3092\u5207\u308A\u958B\u3044\u3066\u5668\u3092\u4F5C\u308B",
          "ko": "\uB69C\uAED1\uC744 \uC798\uB77C\uB0B4\uACE0 \uC18D \uD30C\uB0B4\uAE30",
          "vi": "C\u1EAFt m\u1EDF n\u1EAFp v\xE0 t\u1EA1o l\xF2ng h\u1ED9p r\u1ED7ng"
        },
        "instruction": {
          "zh-TW": "\u7528\u5C16\u982D\u5C0F\u5200\u6CBF\u70B8\u597D\u7684\u9165\u8106\u5410\u53F8\u9802\u90E8\u908A\u7DE3 0.5cm \u8655\u5207\u51FA\u4E00\u500B\u56DB\u65B9\u5F62\uFF0C\u63ED\u958B\u5410\u53F8\u8584\u84CB\uFF0C\u7528\u6E6F\u5319\u5C07\u5410\u53F8\u5167\u90E8\u7684\u767D\u9EB5\u5305\u8F15\u8F15\u58D3\u5BE6\u6316\u6210\u76D2\u5B50\u72C0\u3002",
          "en": "Use a small knife to cut a square lid along top edges (0.5cm margin), lift lid and press inside to create a hollow bread box.",
          "ja": "\u30D1\u30F3\u306E\u4E0A\u90E8\u3092\u30CA\u30A4\u30D5\u3067\u56DB\u89D2\u304F\u5207\u308A\u8FBC\u307F\u3092\u5165\u308C\u3066\u30D5\u30BF\u3092\u958B\u3051\u3001\u4E2D\u306E\u30D1\u30F3\u3092\u30B9\u30D7\u30FC\u30F3\u3067\u8EFD\u304F\u62BC\u3057\u8FBC\u3093\u3067\u5668\u3092\u4F5C\u308A\u307E\u3059\u3002",
          "ko": "\uD280\uAE34 \uBE75 \uC717\uBA74\uC5D0 \uB124\uBAA8\uB098\uAC8C \uCE7C\uC9D1\uC744 \uB0B4\uC5B4 \uB69C\uAED1\uC744 \uC5F4\uACE0, \uC21F\uAC00\uB77D\uC73C\uB85C \uC18D\uC744 \uAFB9 \uB20C\uB7EC \uC18D\uC774 \uBE48 \uC0C1\uC790 \uBAA8\uC591\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "D\xF9ng dao nh\u1ECF kh\xEDa h\xECnh vu\xF4ng tr\xEAn m\u1EB7t b\xE1nh, m\u1EDF n\u1EAFp v\xE0 d\xF9ng mu\u1ED7ng n\xE9n nh\u1EB9 ph\u1EA7n ru\u1ED9t b\xE1nh t\u1EA1o th\xE0nh chi\u1EBFc h\u1ED9p."
        },
        "durationSeconds": 180,
        "image": "/images/taiwan-coffin-bread-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u7092\u88FD\u9999\u6FC3\u6D77\u9BAE\u96DE\u8089\u767D\u91AC",
          "en": "Cook Creamy Seafood Chowder",
          "ja": "\u6FC3\u539A\u6D77\u9BAE\u30C1\u30AD\u30F3\u30B7\u30C1\u30E5\u30FC\u3092\u4F5C\u308B",
          "ko": "\uD06C\uB9AC\uBBF8\uD55C \uD574\uC0B0\uBB3C \uCE58\uD0A8 \uC2A4\uD29C \uB053\uC774\uAE30",
          "vi": "N\u1EA5u s\u1ED1t kem h\u1EA3i s\u1EA3n th\u1ECBt g\xE0 b\xE9o ng\u1EADy"
        },
        "instruction": {
          "zh-TW": "\u934B\u4E2D\u878D\u5316\u5976\u6CB9\u7092\u9999\u6D0B\u8525\u4E01\uFF0C\u52A0\u5165\u9EB5\u7C89\u7092\u51FA\u5FAE\u9EC3\u9EB5\u7CCA\uFF08Roux\uFF09\uFF0C\u5206\u6B21\u6CE8\u5165\u725B\u5976\u8207\u9AD8\u6E6F\u62CC\u52FB\u81F3\u7D72\u6ED1\u6FC3\u7A20\u3002\u4E0B\u96DE\u8089\u4E01\u3001\u8766\u4EC1\u3001\u4E09\u8272\u8C46\u716E\u719F\uFF0C\u4EE5\u9E7D\u3001\u767D\u80E1\u6912\u8ABF\u5473\u3002",
          "en": "Melt butter to saut\xE9 onions, stir in flour to make roux, whisk in milk & broth until silky. Add chicken, shrimp & peas, season with salt & pepper.",
          "ja": "\u30D0\u30BF\u30FC\u3067\u7389\u306D\u304E\u3092\u7092\u3081\u3001\u5C0F\u9EA6\u7C89\u3092\u52A0\u3048\u3066\u30EB\u30FC\u3092\u4F5C\u308A\u3001\u725B\u4E73\u3068\u51FA\u6C41\u3067\u6ED1\u3089\u304B\u306B\u4F38\u3070\u3057\u307E\u3059\u3002\u5177\u6750\u3092\u52A0\u3048\u3066\u716E\u8FBC\u307F\u5473\u3092\u8ABF\u3048\u307E\u3059\u3002",
          "ko": "\uD32C\uC5D0 \uBC84\uD130\uB97C \uB179\uC5EC \uC591\uD30C\uB97C \uBCF6\uACE0 \uBC00\uAC00\uB8E8\uB97C \uB123\uC5B4 \uB8E8\uB97C \uB9CC\uB4E0 \uB4A4 \uC6B0\uC720\uC640 \uC721\uC218\uB97C \uBD80\uC5B4 \uD06C\uB9BC\uC18C\uC2A4\uB97C \uB9CC\uB4ED\uB2C8\uB2E4. \uB2ED\uACE0\uAE30\uC640 \uD574\uC0B0\uBB3C\uC744 \uB123\uACE0 \uC775\uD799\uB2C8\uB2E4.",
          "vi": "X\xE0o th\u01A1m h\xE0nh t\xE2y v\u1EDBi b\u01A1, r\u1EAFc b\u1ED9t m\xEC l\xE0m s\u1ED1t roux r\u1ED3i r\xF3t s\u1EEFa t\u01B0\u01A1i v\xE0o khu\u1EA5y m\u1ECBn. Th\xEAm th\u1ECBt g\xE0, t\xF4m, rau c\u1EE7 n\u1EA5u ch\xEDn n\xEAm n\u1EBFm v\u1EEBa \u0103n."
        },
        "durationSeconds": 360,
        "image": "/images/taiwan-coffin-bread-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u6EFE\u71D9\u6FC3\u6E6F\u704C\u5165\u5410\u53F8\u76D2\u88DD\u76E4",
          "en": "Fill Toast Box with Hot Chowder",
          "ja": "\u71B1\u3005\u30B7\u30C1\u30E5\u30FC\u3092\u6CE8\u3044\u3067\u5B8C\u6210",
          "ko": "\uD1A0\uC2A4\uD2B8 \uC0C1\uC790\uC5D0 \uC2A4\uD29C \uAC00\uB4DD \uCC44\uC6B0\uAE30",
          "vi": "\u0110\u1ED5 s\u1ED1t kem n\xF3ng h\u1ED5i v\xE0o h\u1ED9p b\xE1nh m\xEC"
        },
        "instruction": {
          "zh-TW": "\u5C07\u6EFE\u71D9\u9999\u6FC3\u7684\u6D77\u9BAE\u767D\u91AC\u8200\u5165\u6316\u7A7A\u7684\u9165\u8106\u5410\u53F8\u76D2\u4E2D\uFF0C\u76F4\u81F3\u4E5D\u5206\u6EFF\uFF0C\u6700\u5F8C\u5C07\u5410\u53F8\u84CB\u534A\u63A9\u84CB\u4E0A\uFF0C\u8D81\u71B1\u5927\u53E3\u54AC\u4E0B\uFF01",
          "en": "Ladle bubbling hot creamy seafood chowder into the crispy bread bowl until 90% full, replace the lid partially, and serve hot!",
          "ja": "\u71B1\u3005\u306E\u6FC3\u539A\u30B7\u30C1\u30E5\u30FC\u3092\u30C8\u30FC\u30B9\u30C8\u306E\u5668\u306B\u305F\u3063\u3077\u308A\u6CE8\u304E\u3001\u30D5\u30BF\u3092\u534A\u5206\u304B\u3076\u305B\u3066\u30A2\u30C4\u30A2\u30C4\u306E\u3046\u3061\u306B\u304A\u53EC\u3057\u4E0A\u304C\u308A\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uBC14\uC0AD\uD55C \uC2DD\uBE75 \uC0C1\uC790\uC5D0 \uAC13 \uB053\uC778 \uB728\uAC70\uC6B4 \uD06C\uB9BC\uC2A4\uD29C\uB97C \uAC00\uB4DD \uCC44\uC6B0\uACE0 \uB69C\uAED1\uC744 \uBE44\uC2A4\uB4EC\uD788 \uB36E\uC5B4 \uB530\uB73B\uD560 \uB54C \uC990\uAE41\uB2C8\uB2E4!",
          "vi": "M\xFAc s\u1ED1t kem h\u1EA3i s\u1EA3n n\xF3ng h\u1ED5i ng\u1EADp 9 ph\u1EA7n h\u1ED9p b\xE1nh, \u0111\u1EADy h\u1EDD n\u1EAFp b\xE1nh m\xEC v\xE0 th\u01B0\u1EDFng th\u1EE9c ngay khi c\xF2n n\xF3ng h\u1ED5i!"
        },
        "durationSeconds": 120,
        "image": "/images/taiwan-coffin-bread-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "toast-soggy",
        "problem": {
          "zh-TW": "\u5410\u53F8\u5F88\u5FEB\u88AB\u767D\u91AC\u6CE1\u8EDF\u8B8A\u584C\uFF1F",
          "en": "Toast box becomes soggy too quickly?",
          "ja": "\u30C8\u30FC\u30B9\u30C8\u304C\u30B7\u30C1\u30E5\u30FC\u3092\u5438\u3063\u3066\u3059\u3050\u30D5\u30CB\u30E3\u30D5\u30CB\u30E3\u306B\u306A\u308B\uFF1F",
          "ko": "\uC2DD\uBE75\uC774 \uC2A4\uD29C\uB97C \uD761\uC218\uD574 \uAE08\uBC29 \uB205\uB205\uD574\uC9C0\uB098\uC694?",
          "vi": "H\u1ED9p b\xE1nh m\xEC nhanh b\u1ECB \u1EC9u do ng\u1EA5m s\u1ED1t?"
        },
        "cause": {
          "zh-TW": "\u6CB9\u70B8\u6EAB\u5EA6\u4E0D\u5920\u6216\u5410\u53F8\u8CEA\u5730\u904E\u65BC\u9B06\u8EDF\u3002",
          "en": "Oil temperature was too low or toast bread was too airy.",
          "ja": "\u63DA\u3052\u6E29\u5EA6\u304C\u4F4E\u304B\u3063\u305F\u304B\u3001\u30D1\u30F3\u306E\u6C17\u6CE1\u304C\u7C97\u3059\u304E\u305F\u305F\u3081\u3002",
          "ko": "\uD280\uAE40 \uC628\uB3C4\uAC00 \uB0AE\uC558\uAC70\uB098 \uBE75 \uC870\uC9C1\uC774 \uB108\uBB34 \uD5D0\uAC70\uC6E0\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "Nhi\u1EC7t \u0111\u1ED9 chi\xEAn ch\u01B0a \u0111\u1EE7 cao ho\u1EB7c ru\u1ED9t b\xE1nh qu\xE1 x\u1ED1p."
        },
        "solution": {
          "zh-TW": "\u9078\u7528\u539A\u7247\u624E\u5BE6\u7684\u767D\u5410\u53F8\uFF0C\u70B8\u81F3\u91D1\u9EC3\u9165\u786C\u7D50\u6BBC\uFF1B\u767D\u91AC\u716E\u81F3\u6FC3\u7A20\u518D\u76DB\u5165\uFF0C\u4E26\u7ACB\u5373\u8D81\u71B1\u4EAB\u7528\uFF01",
          "en": "Use dense white bread fried until hard crispy shell forms, and make sure chowder is sufficiently thick.",
          "ja": "\u5BC6\u5EA6\u306E\u9AD8\u3044\u98DF\u30D1\u30F3\u3092\u30AB\u30EA\u30C3\u3068\u63DA\u3052\u3001\u30B7\u30C1\u30E5\u30FC\u3092\u3057\u3063\u304B\u308A\u716E\u8A70\u3081\u3066\u304B\u3089\u6CE8\u3044\u3067\u304F\u3060\u3055\u3044\u3002",
          "ko": "\uC870\uC9C1\uC774 \uCD18\uCD18\uD55C \uC2DD\uBE75\uC744 \uBC14\uC0AD\uD558\uAC8C \uD280\uAE30\uACE0, \uC2A4\uD29C \uB18D\uB3C4\uB97C \uAC78\uCB49\uD558\uAC8C \uB053\uC5EC \uC989\uC2DC \uB4DC\uC138\uC694.",
          "vi": "Ch\u1ECDn lo\u1EA1i b\xE1nh m\xEC \u0111\u1EB7c ru\u1ED9t, chi\xEAn th\u1EADt gi\xF2n c\u1EE9ng v\xE0 n\u1EA5u s\u1ED1t kem th\u1EADt s\xE1nh \u0111\u1EB7c tr\u01B0\u1EDBc khi cho v\xE0o."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u9078\u7528\u53F0\u5F0F\u50B3\u7D71\u767D\u5410\u53F8\uFF08\u8CEA\u5730\u8F03\u5BC6\u5BE6\uFF09\uFF0C\u70B8\u51FA\u4F86\u7684\u9EB5\u5305\u76D2\u624D\u4E0D\u6613\u88AB\u6FC3\u6E6F\u6CE1\u8EDF\u6EF2\u6F0F\uFF01",
        "en": "Use dense, traditional bakery white sandwich bread so the chowder doesn\u2019t leak through the crust!",
        "ja": "\u5BC6\u5EA6\u306E\u9AD8\u3044\u98DF\u30D1\u30F3\u3092\u4F7F\u3046\u3053\u3068\u3067\u3001\u30B7\u30C1\u30E5\u30FC\u3092\u5165\u308C\u3066\u3082\u67D3\u307F\u51FA\u3055\u305A\u30B5\u30AF\u30B5\u30AF\u304C\u9577\u6301\u3061\u3057\u307E\u3059\uFF01",
        "ko": "\uBC00\uB3C4\uAC00 \uB192\uC740 \uC804\uD1B5 \uC2DD\uBE75\uC744 \uC0AC\uC6A9\uD574\uC57C \uC2A4\uD29C\uB97C \uB123\uC5C8\uC744 \uB54C \uBE75\uC774 \uC27D\uAC8C \uB205\uB205\uD574\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!",
        "vi": "N\xEAn ch\u1ECDn lo\u1EA1i b\xE1nh m\xEC g\u1ED1i ru\u1ED9t \u0111\u1EB7c \u0111\u1EC3 gi\u1EEF s\u1ED1t kem l\xE2u m\xE0 kh\xF4ng b\u1ECB m\u1EC1m nh\u0169n."
      }
    ]
  },
  // ========== 新增 14 道經典台灣特色小吃 ==========
  {
    "id": "fried-milk",
    "slug": "fried-milk",
    "title": {
      "zh-TW": "\u591C\u5E02\u8106\u76AE\u9EC3\u91D1\u70B8\u725B\u5976",
      "en": "Taiwanese Crispy Fried Milk",
      "ja": "\u53F0\u6E7E\u591C\u5E02\u540D\u7269 \u63DA\u3052\u30DF\u30EB\u30AF\uFF08\u70B8\u9BAE\u5976\uFF09",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5 \uBC14\uC0AD\uD55C \uC6B0\uC720\uD280\uAE40 (\uC790\uC174\uB098\uC774)",
      "vi": "S\u1EEFa t\u01B0\u01A1i chi\xEAn gi\xF2n ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan"
    },
    "subtitle": {
      "zh-TW": "\u5916\u76AE\u91D1\u9EC3\u9165\u8106\u30FB\u5167\u9921\u6FC3\u9187\u5976\u9999\u7D72\u6ED1\u7206\u6F3F",
      "en": "Golden Crispy Shell with Velvety Molten Milk Center",
      "ja": "\u30B5\u30AF\u30B5\u30AF\u306E\u8863\u3068\u4E2D\u304B\u3089\u3068\u308D\u3051\u51FA\u3059\u6FC3\u539A\u30DF\u30EB\u30AF\u30AF\u30EA\u30FC\u30E0",
      "ko": "\uBC14\uC0AD\uD55C \uD280\uAE40\uC637 \uC18D \uBD80\uB4DC\uB7FD\uACE0 \uB2EC\uCF64\uD55C \uC6B0\uC720 \uD06C\uB9BC\uC774 \uC8FC\uB974\uB975",
      "vi": "V\u1ECF gi\xF2n r\u1EE5m tan trong mi\u1EC7ng, nh\xE2n s\u1EEFa t\u01B0\u01A1i \u0111\u1EB7c s\xE1nh b\xE9o ng\u1EADy"
    },
    "tagline": {
      "zh-TW": "\u7F85\u6771\u591C\u5E02\u6392\u968A\u50B3\u5947\uFF0C\u4E00\u53E3\u54AC\u4E0B\u5976\u9999\u6FC3\u90C1\u5728\u820C\u5C16\u5316\u958B\u7684\u5922\u5E7B\u751C\u9EDE",
      "en": "The Luodong night market legend with a sweet molten milk surprise",
      "ja": "\u7F85\u6771\u591C\u5E02\u306E\u5927\u4EBA\u6C17\u30B9\u30A4\u30FC\u30C4\u3002\u71B1\u3005\u30B5\u30AF\u30B5\u30AF\u3001\u53E3\u3044\u3063\u3071\u3044\u306B\u5E83\u304C\u308B\u512A\u3057\u3044\u7518\u3055",
      "ko": "\uB904\uB465 \uC57C\uC2DC\uC7A5 \uC904 \uC11C\uC11C \uBA39\uB294 \uC804\uC124\uC758 \uB514\uC800\uD2B8, \uC785\uC548 \uAC00\uB4DD \uD37C\uC9C0\uB294 \uB2EC\uCF64\uD55C \uC6B0\uC720 \uD48D\uBBF8",
      "vi": "M\xF3n tr\xE1ng mi\u1EC7ng huy\u1EC1n tho\u1EA1i ch\u1EE3 \u0111\xEAm Luodong v\u1EDBi nh\xE2n s\u1EEFa t\u01B0\u01A1i b\xE9o th\u01A1m ng\u1EA5t ng\xE2y"
    },
    "heroImage": "/images/taiwan-fried-milk-hero.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 10,
    "defaultServings": 3,
    "caloriesPerServing": 280,
    "category": "desserts",
    "dietaryTags": [
      "classic",
      "vegetarian"
    ],
    "supportedCookware": [
      "traditional",
      "airFryer"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u5B9C\u862D\u7F85\u6771 / \u5F70\u5316",
        "en": "Yilan Luodong / Changhua",
        "ja": "\u5B9C\u862D\u7F85\u6771 / \u5F70\u5316",
        "ko": "\uC774\uB780 \uB904\uB465 / \uC7A5\uD654",
        "vi": "Luodong Yilan / Ch\u01B0\u01A1ng H\xF3a"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u7F85\u6771\u591C\u5E02",
          "en": "Luodong Night Market",
          "ja": "\u7F85\u6771\u591C\u5E02",
          "ko": "\uB904\uB465 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Luodong"
        },
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        }
      ],
      "historyStory": {
        "zh-TW": "\u6E90\u81EA\u50B3\u7D71\u751C\u54C1\uFF0C\u5728\u5B9C\u862D\u7F85\u6771\u591C\u5E02\u767C\u63DA\u5149\u5927\u3002\u4F7F\u7528\u512A\u8CEA\u9BAE\u5976\u8207\u7389\u7C73\u6FB1\u7C89\u6162\u706B\u71AC\u6210\u5976\u7CD5\uFF0C\u51B7\u85CF\u5B9A\u578B\u5F8C\u7A7F\u4E0A\u8106\u76AE\u5916\u8863\u9AD8\u6EAB\u5FEB\u70B8\uFF0C\u6210\u70BA\u591C\u5E02\u4EBA\u624B\u4E00\u4E32\u7684\u7D93\u5178\u9EDE\u5FC3\u3002",
        "en": "Perfected at Luodong Night Market, fresh milk and cornstarch are cooked into a silky pudding, chilled firm, and flash-fried to golden perfection.",
        "ja": "\u65B0\u9BAE\u306A\u30DF\u30EB\u30AF\u3092\u56FA\u3081\u3066\u30AB\u30EA\u30C3\u3068\u63DA\u3052\u305F\u5B9C\u862D\u30FB\u7F85\u6771\u591C\u5E02\u767A\u7965\u306E\u5B9A\u756A\u4E32\u30B9\u30A4\u30FC\u30C4\u3002",
        "ko": "\uC2E0\uC120\uD55C \uC6B0\uC720\uB97C \uAD73\uD600 \uBC14\uC0AD\uD558\uAC8C \uD280\uACA8\uB0B8 \uB300\uB9CC \uC57C\uC2DC\uC7A5\uC758 \uD544\uC218 \uB514\uC800\uD2B8\uC785\uB2C8\uB2E4.",
        "vi": "M\xF3n \u0103n v\u1EB7t t\u1EEB s\u1EEFa t\u01B0\u01A1i n\u1EA5u \u0111\u1EB7c \u0111\xF4ng l\u1EA1nh, l\u0103n b\u1ED9t chi\xEAn gi\xF2n tan xi\xEAn que."
      },
      "taiwaneseHokkien": "Tsiah-leng (\u3117\u311A \u310C\u3127\u3125)",
      "mandarinPinyin": "Zh\xE0 Ni\xFAn\u01CEi (\u3113\u311A\u02CB \u310B\u3127\u3121\u02CA \u310B\u311E\u02C7)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u4F86\u5169\u4E32\u73FE\u70B8\u71B1\u9A30\u9A30\u7684\u70B8\u725B\u5976"
    },
    "ingredients": [
      {
        "id": "whole-milk",
        "name": {
          "zh-TW": "\u5168\u8102\u9BAE\u725B\u5976",
          "en": "Whole Fresh Milk",
          "ja": "\u725B\u4E73",
          "ko": "\uC6B0\uC720",
          "vi": "S\u1EEFa t\u01B0\u01A1i"
        },
        "amount": 500,
        "unitMetric": "ml",
        "unitUS": "2 cups",
        "isKeyFlavor": true,
        "chineseName": "\u5168\u8102\u9BAE\u5976",
        "chinesePinyin": "Qu\xE1nzh\u012B xi\u0101nn\u01CEi"
      },
      {
        "id": "cornstarch",
        "name": {
          "zh-TW": "\u7389\u7C73\u6FB1\u7C89",
          "en": "Cornstarch",
          "ja": "\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1",
          "ko": "\uC625\uC218\uC218 \uC804\uBD84",
          "vi": "B\u1ED9t b\u1EAFp"
        },
        "amount": 60,
        "unitMetric": "g",
        "unitUS": "0.5 cup",
        "isKeyFlavor": true,
        "chineseName": "\u7389\u7C73\u6FB1\u7C89",
        "chinesePinyin": "Y\xF9m\u01D0 di\xE0nf\u011Bn"
      },
      {
        "id": "sugar",
        "name": {
          "zh-TW": "\u7D30\u7802\u7CD6\u8207\u7149\u4E73",
          "en": "Granulated Sugar & Condensed Milk",
          "ja": "\u7802\u7CD6\u3068\u7DF4\u4E73",
          "ko": "\uC124\uD0D5 \uBC0F \uC5F0\uC720",
          "vi": "\u0110\u01B0\u1EDDng v\xE0 s\u1EEFa \u0111\u1EB7c"
        },
        "amount": 40,
        "unitMetric": "g",
        "unitUS": "3 tbsp",
        "chineseName": "\u767D\u7CD6\u7149\u4E73",
        "chinesePinyin": "B\xE1it\xE1ng li\xE0nr\u01D4"
      },
      {
        "id": "crispy-batter",
        "name": {
          "zh-TW": "\u8106\u76AE\u7C89\u6F3F",
          "en": "Crispy Batter Mix",
          "ja": "\u5929\u3077\u3089\u7C89\u30DF\u30C3\u30AF\u30B9",
          "ko": "\uD280\uAE40\uAC00\uB8E8 \uBC18\uC8FD",
          "vi": "B\u1ED9t chi\xEAn gi\xF2n"
        },
        "amount": 100,
        "unitMetric": "g",
        "unitUS": "0.8 cup",
        "chineseName": "\u8106\u76AE\u7C89\u6F3F",
        "chinesePinyin": "Cu\xECp\xED f\u011Bnji\u0101ng"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u5C0F\u706B\u71AC\u716E\u6FC3\u7A20\u7D72\u6ED1\u5976\u7CD5\u7CCA",
          "en": "Cook Milk & Cornstarch into Smooth Paste",
          "ja": "\u5F31\u706B\u3067\u30DF\u30EB\u30AF\u30DA\u30FC\u30B9\u30C8\u3092\u7DF4\u308B",
          "ko": "\uC6B0\uC720\uC640 \uC804\uBD84\uC744 \uC800\uC5B4 \uAC78\uCB49\uD558\uAC8C \uB053\uC774\uAE30",
          "vi": "Khu\u1EA5y s\u1EEFa t\u01B0\u01A1i v\u1EDBi b\u1ED9t b\u1EAFp tr\xEAn l\u1EEDa nh\u1ECF"
        },
        "instruction": {
          "zh-TW": "\u5C07\u9BAE\u5976\u3001\u7389\u7C73\u6FB1\u7C89\u3001\u7CD6\u8207\u7149\u4E73\u5012\u5165\u4E0D\u6CBE\u934B\u4E2D\u5145\u5206\u652A\u52FB\u3002\u958B\u5FAE\u5C0F\u706B\uFF0C\u9806\u6642\u91DD\u652A\u62CC\u7D04 3~5 \u5206\u9418\u81F3\u51DD\u7D50\u6210\u5149\u6ED1\u6FC3\u7A20\u7684\u5976\u7CD5\u7CCA\u3002",
          "en": "Whisk milk, cornstarch, sugar & condensed milk in pan. Stir continuously over low heat for 3-5 mins until smooth & pudding-like.",
          "ja": "\u934B\u306B\u725B\u4E73\u3001\u30B3\u30FC\u30F3\u30B9\u30BF\u30FC\u30C1\u3001\u7802\u7CD6\u3092\u5165\u308C\u3001\u5F31\u706B\u3067\u304B\u304D\u6DF7\u305C\u3066\u30AF\u30EA\u30FC\u30E0\u72B6\u306B\u306A\u308B\u307E\u3067\u7DF4\u308A\u307E\u3059\u3002",
          "ko": "\uD32C\uC5D0 \uC7AC\uB8CC\uB97C \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C \uC800\uC5B4 \uD478\uB529\uCC98\uB7FC \uBD80\uB4DC\uB7FD\uACE0 \uAC78\uCB49\uD574\uC9C8 \uB54C\uAE4C\uC9C0 \uB053\uC785\uB2C8\uB2E4.",
          "vi": "Khu\u1EA5y \u0111\u1EC1u s\u1EEFa, b\u1ED9t b\u1EAFp, \u0111\u01B0\u1EDDng tr\xEAn l\u1EEDa nh\u1ECF cho \u0111\u1EB7c s\xE1nh m\u01B0\u1EE3t m\xE0."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-fried-milk-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u5165\u6A21\u51B7\u85CF\u5B9A\u578B\u4E26\u5207\u6210\u9577\u689D\u584A",
          "en": "Chill to Set and Cut into Bars",
          "ja": "\u51B7\u3084\u3057\u56FA\u3081\u3066\u30B9\u30C6\u30A3\u30C3\u30AF\u72B6\u306B\u5207\u308B",
          "ko": "\uB0C9\uC7A5\uC2E4\uC5D0\uC11C \uAD73\uD78C \uB4A4 \uB9C9\uB300 \uBAA8\uC591\uC73C\uB85C \uC370\uAE30",
          "vi": "\u0110\xF4ng l\u1EA1nh r\u1ED3i c\u1EAFt thanh v\u1EEBa \u0103n"
        },
        "instruction": {
          "zh-TW": "\u4FDD\u9BAE\u76D2\u62B9\u8584\u6CB9\uFF0C\u5012\u5165\u5976\u7CD5\u62B9\u5E73\uFF0C\u8CBC\u9762\u8986\u84CB\u4FDD\u9BAE\u819C\u51B7\u85CF 2 \u5C0F\u6642\u81F3\u5B8C\u5168\u51DD\u56FA\u3002\u5012\u6263\u5207\u6210 2x5cm \u7684\u9577\u689D\u5976\u7CD5\u584A\u3002",
          "en": "Pour into oiled container, cover surface with plastic wrap and chill 2 hours. Unmold and cut into 2x5cm rectangular bars.",
          "ja": "\u5BB9\u5668\u306B\u6D41\u3057\u5165\u308C\u30E9\u30C3\u30D7\u3092\u3057\u3066\u51B7\u8535\u5EAB\u30672\u6642\u9593\u51B7\u3084\u3057\u56FA\u3081\u3001\u30B9\u30C6\u30A3\u30C3\u30AF\u72B6\u306B\u5207\u308A\u307E\u3059\u3002",
          "ko": "\uC6A9\uAE30\uC5D0 \uBD80\uC5B4 \uB7A9\uC744 \uC50C\uC6B0\uACE0 2\uC2DC\uAC04 \uB0C9\uC7A5 \uAD73\uD78C \uB4A4 \uC9C1\uC0AC\uAC01\uD615 \uB9C9\uB300\uB85C \uC790\uB985\uB2C8\uB2E4.",
          "vi": "\u0110\u1ED5 v\xE0o khu\xF4n b\u1ECDc k\xEDn cho t\u1EE7 l\u1EA1nh 2 ti\u1EBFng r\u1ED3i c\u1EAFt mi\u1EBFng d\xE0i \u0111\u1EC1u nhau."
        },
        "durationSeconds": 7200,
        "image": "/images/taiwan-fried-milk-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u8ABF\u88FD\u8584\u8106\u7C89\u6F3F\u8207\u5747\u52FB\u88F9\u7CCA",
          "en": "Mix Crispy Batter & Coat Bars",
          "ja": "\u7279\u88FD\u8863\u3092\u4F5C\u308A\u30DF\u30EB\u30AF\u306B\u307E\u3068\u308F\u305B\u308B",
          "ko": "\uD280\uAE40 \uBC18\uC8FD\uC744 \uACE8\uACE0\uB8E8 \uC785\uD788\uAE30",
          "vi": "Pha b\u1ED9t chi\xEAn gi\xF2n v\xE0 nh\xFAng thanh s\u1EEFa"
        },
        "instruction": {
          "zh-TW": "\u8106\u76AE\u7C89\u52A0\u6C34\u8ABF\u6210\u6D41\u52D5\u7C89\u6F3F\u3002\u5976\u7CD5\u689D\u5148\u62CD\u4E0A\u4E00\u5C64\u4E7E\u7389\u7C73\u7C89\uFF0C\u518D\u5747\u52FB\u6D78\u5165\u8106\u76AE\u7C89\u6F3F\u4E2D\u88F9\u6EFF\u5916\u5C64\u3002",
          "en": "Mix batter with cold water. Lightly dust milk bars with dry cornstarch, then submerge into wet batter.",
          "ja": "\u5929\u3077\u3089\u7C89\u3068\u51B7\u6C34\u3092\u6DF7\u305C\u3001\u30DF\u30EB\u30AF\u306B\u8EFD\u304F\u7C89\u3092\u307E\u3076\u3057\u3066\u304B\u3089\u8863\u3092\u3057\u3063\u304B\u308A\u7D61\u3081\u307E\u3059\u3002",
          "ko": "\uD280\uAE40\uAC00\uB8E8\uB97C \uCC2C\uBB3C\uC5D0 \uAC1C\uC5B4 \uC6B0\uC720 \uC2A4\uD2F1\uC5D0 \uB9C8\uB978 \uC804\uBD84\uC744 \uBB3B\uD78C \uD6C4 \uBC18\uC8FD\uC744 \uB4EC\uBFCD \uC785\uD799\uB2C8\uB2E4.",
          "vi": "L\u0103n thanh s\u1EEFa qua b\u1ED9t kh\xF4 r\u1ED3i nh\xFAng \u0111\u1EC1u v\xE0o \xE2u b\u1ED9t chi\xEAn gi\xF2n \u01B0\u1EDBt."
        },
        "durationSeconds": 180,
        "image": "/images/taiwan-fried-milk-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u9AD8\u6EAB\u5FEB\u70B8\u81F3\u5916\u6BBC\u91D1\u9EC3\u9165\u8106\u51FA\u934B",
          "en": "Flash Fry at High Heat to Golden Crisp",
          "ja": "\u9AD8\u6E29\u306E\u6CB9\u3067\u30AB\u30EA\u30C3\u3068\u77ED\u6642\u9593\u63DA\u3052\u308B",
          "ko": "\uACE0\uC628\uC5D0\uC11C \uBC14\uC0AD\uD558\uAC8C \uD280\uACA8\uB0B4\uAE30",
          "vi": "Chi\xEAn nhanh tay cho v\xE0ng gi\xF2n r\u1EE5m"
        },
        "instruction": {
          "zh-TW": "\u6CB9\u6EAB\u52A0\u71B1\u81F3 180\xB0C\uFF0C\u5C07\u88F9\u597D\u7C89\u6F3F\u7684\u725B\u5976\u689D\u4E0B\u934B\u3002\u5927\u706B\u5FEB\u70B8\u7D04 40~60 \u79D2\u81F3\u5916\u6BBC\u91D1\u9EC3\u9165\u8106\uFF0C\u6488\u8D77\u701D\u6CB9\u63D2\u7AF9\u7C64\u8D81\u71B1\u4EAB\u7528\uFF01",
          "en": "Heat oil to 180\xB0C (350\xB0F). Flash fry for 40-60 secs until golden puffed shell forms. Drain immediately and serve hot!",
          "ja": "180\u2103\u306E\u6CB9\u306740\u301C60\u79D2\u9593\u77ED\u6642\u9593\u3067\u63DA\u3052\u3001\u6CB9\u3092\u5207\u3063\u3066\u7AF9\u4E32\u306B\u523A\u3057\u71B1\u3005\u3092\u3044\u305F\u3060\u304D\u307E\u3059\uFF01",
          "ko": "180\xB0C \uAE30\uB984\uC5D0 \uB123\uACE0 40-60\uCD08\uAC04 \uBE60\uB974\uAC8C \uD280\uACA8 \uD669\uAE08\uBE5B\uC774 \uB418\uBA74 \uBC14\uB85C \uAC74\uC838 \uAF2C\uCE58\uC5D0 \uAF42\uC544 \uC990\uAE41\uB2C8\uB2E4.",
          "vi": "Th\u1EA3 v\xE0o d\u1EA7u n\xF3ng 180\xB0C chi\xEAn nhanh 40-60 gi\xE2y cho v\xE0ng ph\u1ED3ng v\u1ECF ngo\xE0i, v\u1EDBt ra xi\xEAn que th\u01B0\u1EDFng th\u1EE9c."
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-fried-milk-step4.jpg",
        "cookwareVariations": [
          {
            "cookware": "airFryer",
            "tempAndSetting": "Air Fryer 200\xB0C (395\xB0F): 6~8 mins (Spray Oil & Flip at 4 mins)",
            "instructionOverride": {
              "zh-TW": "\u6C23\u70B8\u934B\u9810\u71B1\u81F3 200\xB0C\u3002\u70B8\u7C43\u92EA\u4E0A\u70D8\u7119\u7D19\uFF0C\u5C07\u88F9\u597D\u7C89\u6F3F\u7684\u725B\u5976\u689D\u6392\u5165\uFF08\u8868\u9762\u5747\u52FB\u5674\u4E0A\u4E00\u5C64\u98DF\u7528\u6CB9\uFF09\u3002\u4EE5 200\xB0C \u6C23\u70B8 4 \u5206\u9418\u5F8C\u62C9\u51FA\u7FFB\u9762\u88DC\u5674\u6CB9\uFF0C\u518D\u6C23\u70B8 3~4 \u5206\u9418\u81F3\u8868\u76AE\u91D1\u9EC3\u786C\u8106\u3001\u5167\u9921\u6EFE\u71D9\u7D72\u6ED1\u7206\u6F3F\uFF01",
              "en": "Preheat air fryer to 200\xB0C (395\xB0F). Line basket with parchment, place coated milk bars in and spray generously with oil. Air fry for 4 mins, flip, spray oil again and fry for 3-4 mins until golden crispy with a silky lava center!",
              "ja": "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u3092200\u2103\u306B\u4E88\u71B1\u3002\u30AF\u30C3\u30AD\u30F3\u30B0\u30B7\u30FC\u30C8\u3092\u6577\u304D\u3001\u8863\u3092\u3064\u3051\u305F\u30DF\u30EB\u30AF\u30D0\u30FC\u3092\u4E26\u3079\u3066\u6CB9\u3092\u30B9\u30D7\u30EC\u30FC\u3002200\u2103\u30674\u5206\u52A0\u71B1\u5F8C\u3001\u88CF\u8FD4\u3057\u3066\u6CB9\u3092\u5439\u304D\u3055\u3089\u306B3\u301C4\u5206\u52A0\u71B1\u3002\u5916\u30B5\u30AF\u4E2D\u30C8\u30ED\u306B\uFF01",
              "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uB97C 200\xB0C\uB85C \uC608\uC5F4\uD569\uB2C8\uB2E4. \uBC14\uC2A4\uCF13\uC5D0 \uC885\uC774\uD638\uC77C\uC744 \uAE54\uACE0 \uC6B0\uC720\uC2A4\uD2F1\uC744 \uC62C\uB9B0 \uB4A4 \uC624\uC77C\uC744 \uACE8\uACE0\uB8E8 \uBD84\uC0AC\uD569\uB2C8\uB2E4. 4\uBD84 \uC870\uB9AC \uD6C4 \uB4A4\uC9D1\uC5B4 \uC624\uC77C\uC744 \uBFCC\uB9AC\uACE0 3~4\uBD84 \uB354 \uAD6C\uC6B0\uBA74 \uAC89\uBC14\uC18D\uCD09 \uC644\uC131!",
              "vi": "L\xE0m n\xF3ng n\u1ED3i chi\xEAn kh\xF4ng d\u1EA7u \u1EDF 200\xB0C, l\xF3t gi\u1EA5y n\u1EBFn, x\u1EBFp thanh s\u1EEFa v\xE0o x\u1ECBt d\u1EA7u \u0111\u1EC1u. N\u01B0\u1EDBng 4 ph\xFAt r\u1ED3i l\u1EADt m\u1EB7t x\u1ECBt d\u1EA7u n\u01B0\u1EDBng th\xEAm 3-4 ph\xFAt cho v\u1ECF gi\xF2n tan nh\xE2n s\u1EEFa tan ch\u1EA3y!"
            }
          }
        ]
      }
    ],
    "troubleshooting": [
      {
        "id": "melt-in-oil",
        "problem": {
          "zh-TW": "\u70B8\u7684\u6642\u5019\u725B\u5976\u689D\u878D\u5316\u6D41\u51FA\uFF1F",
          "en": "Milk bar melted and leaked?",
          "ja": "\u63DA\u3052\u3066\u3044\u308B\u9014\u4E2D\u3067\u4E2D\u8EAB\u304C\u6EB6\u3051\u51FA\u3059\uFF1F",
          "ko": "\uD280\uAE38 \uB54C \uC18D\uC774 \uD130\uC838 \uB179\uC544\uB0B4\uB9AC\uB098\uC694?",
          "vi": "Thanh s\u1EEFa b\u1ECB n\u1EE9t ch\u1EA3y nh\xE2n khi chi\xEAn?"
        },
        "cause": {
          "zh-TW": "\u6CB9\u6EAB\u904E\u4F4E\u6216\u70B8\u592A\u4E45\uFF0C\u6216\u662F\u5976\u7CD5\u672A\u5FB9\u5E95\u51B7\u85CF\u51DD\u56FA\u3002",
          "en": "Oil temp was too low or paste not chilled firm.",
          "ja": "\u6CB9\u6E29\u304C\u4F4E\u3044\u304B\u51B7\u3084\u3059\u6642\u9593\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3057\u305F\u3002",
          "ko": "\uAE30\uB984 \uC628\uB3C4\uAC00 \uB0AE\uAC70\uB098 \uAD73\uD788\uB294 \uC2DC\uAC04\uC774 \uBD80\uC871\uD588\uC2B5\uB2C8\uB2E4.",
          "vi": "D\u1EA7u ch\u01B0a \u0111\u1EE7 n\xF3ng ho\u1EB7c ch\u01B0a \u0111\u1EC3 \u0111\xF4ng \u0111\u1EE7 th\u1EDDi gian."
        },
        "solution": {
          "zh-TW": "\u51B7\u85CF\u8DB3 2 \u5C0F\u6642\uFF0C\u6CB9\u6EAB\u4FDD\u6301 180\xB0C \u5FEB\u70B8 50 \u79D2\u51FA\u934B\uFF01",
          "en": "Chill 2+ hours and flash fry at 180\xB0C for only 50s!",
          "ja": "\u3057\u3063\u304B\u308A\u51B7\u3084\u3057\u3001180\u2103\u3067\u77ED\u6642\u9593\u63DA\u3052\u3066\u304F\u3060\u3055\u3044\u3002",
          "ko": "2\uC2DC\uAC04 \uC774\uC0C1 \uAD73\uD788\uACE0 180\xB0C\uC5D0\uC11C 50\uCD08\uB9CC \uD280\uAE30\uC138\uC694.",
          "vi": "\u0110\u1EC3 t\u1EE7 l\u1EA1nh \u0111\u1EE7 2 ti\u1EBFng v\xE0 chi\xEAn nhanh \u1EDF 180\xB0C."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u52A0\u5165 1 \u5927\u5319\u7149\u4E73\uFF0C\u5976\u9999\u66F4\u52A0\u6FC3\u90C1\u9187\u539A\uFF0C\u5B9B\u5982\u71B1\u9A30\u9A30\u7684\u56FA\u614B\u725B\u5976\u51B0\u6DC7\u6DCB\uFF01",
        "en": "Add condensed milk for ultra-luxurious dairy fragrance!",
        "ja": "\u7DF4\u4E73\u3092\u52A0\u3048\u308B\u3068\u683C\u6BB5\u306B\u30DF\u30EB\u30AD\u30FC\u306A\u5473\u308F\u3044\u306B\u306A\u308A\u307E\u3059\uFF01",
        "ko": "\uC5F0\uC720\uB97C \uCD94\uAC00\uD558\uBA74 \uACE0\uC18C\uD55C \uD48D\uBBF8\uAC00 \uADF9\uB300\uD654\uB429\uB2C8\uB2E4!",
        "vi": "Th\xEAm s\u1EEFa \u0111\u1EB7c gi\xFAp nh\xE2n th\u01A1m ng\u1EADy nh\u01B0 kem s\u1EEFa t\u01B0\u01A1i tan ch\u1EA3y!"
      }
    ]
  },
  {
    "id": "night-market-steak",
    "slug": "night-market-steak",
    "title": {
      "zh-TW": "\u53F0\u5F0F\u591C\u5E02\u9435\u677F\u725B\u6392",
      "en": "Taiwanese Night Market Sizzling Steak",
      "ja": "\u53F0\u6E7E\u591C\u5E02\u540D\u7269 \u71B1\u3005\u9244\u677F\u30B9\u30C6\u30FC\u30AD",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5 \uCCA0\uD310 \uC2A4\uD14C\uC774\uD06C (\uC608\uC2A4 \uB274\uD30C\uC774)",
      "vi": "B\xF2 b\xEDt t\u1EBFt ch\u1EA3o gang ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan"
    },
    "subtitle": {
      "zh-TW": "\u6ECB\u6ECB\u4F5C\u97FF\u9435\u677F\u30FB\u534A\u719F\u592A\u967D\u86CB\u30FB\u9EC3\u91D1\u6CB9\u9EB5\u8207\u96D9\u91AC\u4EA4\u7E54",
      "en": "Sizzling Cast Iron, Sunny Egg, Yellow Noodles & Dual Gravy",
      "ja": "\u30B8\u30E5\u30FC\u30B8\u30E5\u30FC\u9CF4\u308B\u9244\u677F\u30FB\u534A\u719F\u76EE\u7389\u713C\u304D\u30FB\u53F0\u6E7E\u9EBA\u3068\u7279\u88FD\u30C0\u30D6\u30EB\u30BD\u30FC\u30B9",
      "ko": "\uC9C0\uAE00\uC9C0\uAE00 \uCCA0\uD310 \uC18C\uB9AC, \uBC18\uC219 \uACC4\uB780, \uCAC4\uAE43\uD55C \uBA74\uACFC \uBE14\uB799\uD398\uD37C/\uBA38\uC26C\uB8F8 \uC18C\uC2A4",
      "vi": "Ch\u1EA3o gang x\xE8o x\xE8o, tr\u1EE9ng \u1ED1p la l\xF2ng \u0111\xE0o, m\xEC s\u1EE3i v\xE0ng ng\u1EADp s\u1ED1t ti\xEAu \u0111en n\u1EA5m"
    },
    "tagline": {
      "zh-TW": "\u5168\u53F0\u591C\u5E02\u6700\u9738\u6C23\u7684\u7159\u706B\u6C23\uFF01\u5927\u584A\u539F\u8089\u6DCB\u4E0A\u6EFE\u71D9\u96D9\u91AC\u7684\u7121\u6575\u6ECB\u5473",
      "en": "The most iconic sizzling performance in Taiwanese night markets",
      "ja": "\u591C\u5E02\u3067\u8AB0\u3082\u304C\u4E00\u5EA6\u306F\u98DF\u3079\u308B\u3001\u8C6A\u5FEB\u3067\u71B1\u3005\u306E\u9244\u677F\u30B9\u30C6\u30FC\u30AD\u4F53\u9A13\uFF01",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5\uC758 \uC5F4\uAE30\uB97C \uADF8\uB300\uB85C \uB290\uB084 \uC218 \uC788\uB294 \uAC00\uC131\uBE44 \uCD5C\uACE0\uC758 \uCCA0\uD310 \uC2A4\uD14C\uC774\uD06C",
      "vi": "M\xF3n \u0103n b\xF9ng n\u1ED5 h\u01B0\u01A1ng v\u1ECB tr\xEAn ch\u1EA3o gang n\xF3ng r\u1EF1c \u0111\u1EB7c tr\u01B0ng ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan"
    },
    "heroImage": "/images/taiwan-night-market-steak-hero.jpg",
    "difficulty": "easy",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "defaultServings": 2,
    "caloriesPerServing": 650,
    "category": "mains",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5317\u5E2B\u5927 / \u5168\u53F0\u7063\u591C\u5E02",
        "en": "Taipei Shida / All Night Markets",
        "ja": "\u53F0\u5317\u5E2B\u5927 / \u5168\u53F0\u6E7E\u591C\u5E02",
        "ko": "\uD0C0\uC774\uBCA0\uC774 \uC2A4\uB2E4 / \uB300\uB9CC \uC804\uC5ED",
        "vi": "Shida \u0110\xE0i B\u1EAFc / To\xE0n \u0110\xE0i Loan"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u5E2B\u5927\u591C\u5E02",
          "en": "Shida Night Market",
          "ja": "\u5E2B\u5927\u591C\u5E02",
          "ko": "\uC2A4\uB2E4 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Shida"
        },
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        }
      ],
      "historyStory": {
        "zh-TW": "1970\u5E74\u4EE3\u53F0\u7063\u591C\u5E02\u958B\u5275\u51FA\u5E73\u6C11\u5316\u897F\u9910\u5F62\u5F0F\u3002\u7528\u9AD8\u6EAB\u9444\u9435\u725B\u6392\u76E4\u76DB\u88DD\u539A\u5207\u9183\u725B\u6392\u3001\u53F0\u5F0F\u6CB9\u9EB5\u8207\u4E00\u9846\u751F\u96DE\u86CB\uFF0C\u4E0A\u684C\u6642\u6DCB\u4E0A\u6EFE\u71D9\u9ED1\u80E1\u6912\u91AC\u8207\u8611\u83C7\u91AC\uFF0C\u7528\u7D19\u5DFE\u64CB\u6CB9\u7159\u7684\u5100\u5F0F\u611F\u98A8\u9761\u5168\u53F0\u6578\u5341\u5E74\u3002",
        "en": "Invented in the 1970s making steak accessible to everyone, served on blazing iron skillets with noodles, egg and sizzling dual gravies.",
        "ja": "1970\u5E74\u4EE3\u306B\u8A95\u751F\u3057\u305F\u53F0\u6E7E\u5F0F\u30B9\u30C6\u30FC\u30AD\u3002\u71B1\u3005\u306E\u9244\u677F\u3067\u8089\u3001\u9EBA\u3001\u5375\u3092\u7279\u88FD\u30BD\u30FC\u30B9\u3067\u8C6A\u5FEB\u306B\u98DF\u3059\u5927\u4EBA\u6C17\u5EB6\u6C11\u6D3E\u30B0\u30EB\u30E1\u3002",
        "ko": "1970\uB144\uB300 \uC11C\uBBFC\uB4E4\uC744 \uC704\uD574 \uD0C4\uC0DD\uD55C \uC694\uB9AC\uB85C, \uB728\uAC70\uC6B4 \uCCA0\uD310 \uC704\uC5D0 \uACE0\uAE30, \uBA74, \uACC4\uB780\uC744 \uC62C\uB9AC\uACE0 \uC18C\uC2A4\uB97C \uBFCC\uB824 \uBA39\uB294 \uB300\uD45C \uC57C\uC2DC\uC7A5 \uBA54\uB274\uC785\uB2C8\uB2E4.",
        "vi": "Xu\u1EA5t hi\u1EC7n t\u1EEB th\u1EADp ni\xEAn 1970, m\xF3n b\xF2 b\xEDt t\u1EBFt ph\u1EE5c v\u1EE5 tr\xEAn ch\u1EA3o gang x\xE8o x\xE8o k\xE8m m\xEC v\xE0ng v\xE0 tr\u1EE9ng \u1ED1p la \u0111\xE3 tr\u1EDF th\xE0nh bi\u1EC3u t\u01B0\u1EE3ng \u1EA9m th\u1EF1c b\xECnh d\xE2n."
      },
      "taiwaneseHokkien": "G\xFB-phai (\u310D\u3128\u02CA \u3106\u311E\u02CB)",
      "mandarinPinyin": "Y\xE8sh\xEC Ni\xFAp\xE1i (\u3127\u311D\u02CB \u3115\u02CB \u310B\u3127\u3121\u02CA \u3106\u311E\u02CA)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u725B\u6392\u4E00\u4EFD\u4E03\u5206\u719F\uFF0C\u91AC\u8981\u7D9C\u5408\u96D9\u91AC"
    },
    "ingredients": [
      {
        "id": "sirloin-steak",
        "name": {
          "zh-TW": "\u6C99\u6717\u725B\u6392\u6216\u677F\u8171\u725B\u6392 (\u539A\u5207)",
          "en": "Thick Cut Sirloin / Flat Iron Steak",
          "ja": "\u30B5\u30FC\u30ED\u30A4\u30F3\u307E\u305F\u306F\u30DF\u30B9\u30B8\u30B9\u30C6\u30FC\u30AD",
          "ko": "\uB450\uD23C\uD55C \uC11C\uB85C\uC778 / \uBD80\uCC44\uC0B4 \uC2A4\uD14C\uC774\uD06C",
          "vi": "Th\u0103n b\xF2 c\u1EAFt d\xE0y"
        },
        "amount": 300,
        "unitMetric": "g",
        "unitUS": "10 oz",
        "isKeyFlavor": true,
        "chineseName": "\u539A\u5207\u725B\u6392",
        "chinesePinyin": "H\xF2upi\xE8 ni\xFAp\xE1i"
      },
      {
        "id": "yellow-noodles",
        "name": {
          "zh-TW": "\u53F0\u5F0F\u6CB9\u9EB5\u6216\u87BA\u65CB\u9EB5",
          "en": "Taiwanese Oil Noodles or Fusilli",
          "ja": "\u53F0\u6E7E\u98A8\u6CB9\u9EBA\u307E\u305F\u306F\u30D1\u30B9\u30BF",
          "ko": "\uB300\uB9CC\uC2DD \uC610\uB85C\uC6B0 \uB204\uB4E4 \uB610\uB294 \uD478\uC2E4\uB9AC",
          "vi": "M\xEC s\u1EE3i v\xE0ng \u0110\xE0i Loan ho\u1EB7c nui xo\u1EAFn"
        },
        "amount": 150,
        "unitMetric": "g",
        "unitUS": "5 oz",
        "chineseName": "\u6CB9\u9EB5\u9435\u677F\u9EB5",
        "chinesePinyin": "Y\xF3umi\xE0n"
      },
      {
        "id": "fresh-egg",
        "name": {
          "zh-TW": "\u65B0\u9BAE\u5168\u86CB",
          "en": "Fresh Eggs",
          "ja": "\u65B0\u9BAE\u306A\u751F\u5375",
          "ko": "\uC2E0\uC120\uD55C \uACC4\uB780",
          "vi": "Tr\u1EE9ng g\xE0 t\u01B0\u01A1i"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 eggs",
        "chineseName": "\u751F\u96DE\u86CB",
        "chinesePinyin": "Sh\u0113ng j\u012Bd\xE0n"
      },
      {
        "id": "steak-sauce",
        "name": {
          "zh-TW": "\u7279\u88FD\u9ED1\u80E1\u6912\u91AC\u8207\u8611\u83C7\u91AC (\u7D9C\u5408\u91AC)",
          "en": "Taiwanese Dual Steak Gravy (Black Pepper & Mushroom)",
          "ja": "\u9ED2\u80E1\u6912\u30BD\u30FC\u30B9\uFF06\u30DE\u30C3\u30B7\u30E5\u30EB\u30FC\u30E0\u30BD\u30FC\u30B9",
          "ko": "\uBE14\uB799\uD398\uD37C \uC18C\uC2A4 \uBC0F \uBA38\uC26C\uB8F8 \uC18C\uC2A4",
          "vi": "S\u1ED1t ti\xEAu \u0111en v\xE0 s\u1ED1t n\u1EA5m"
        },
        "amount": 120,
        "unitMetric": "ml",
        "unitUS": "0.5 cup",
        "isKeyFlavor": true,
        "chineseName": "\u9ED1\u80E1\u6912\u8611\u83C7\u7D9C\u5408\u91AC",
        "chinesePinyin": "H\u0113ih\xFAji\u0101o m\xF3gu ji\xE0ng"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u725B\u6392\u62CD\u9B06\u8207\u7279\u88FD\u9183\u6599\u5165\u5473",
          "en": "Tenderize and Marinate Steak",
          "ja": "\u8089\u3092\u305F\u305F\u3044\u3066\u7279\u88FD\u30BF\u30EC\u3067\u4E0B\u5473\u3092\u3064\u3051\u308B",
          "ko": "\uACE0\uAE30\uB97C \uB450\uB4DC\uB824 \uBD80\uB4DC\uB7FD\uAC8C \uD55C \uB4A4 \uBC11\uAC04\uD558\uAE30",
          "vi": "D\u1EA7n m\u1EC1m th\u1ECBt b\xF2 v\xE0 \u01B0\u1EDBp gia v\u1ECB \u0111\u1EADm \u0111\xE0"
        },
        "instruction": {
          "zh-TW": "\u725B\u6392\u5169\u9762\u7528\u8089\u69CC\u6216\u5200\u80CC\u8F15\u8F15\u62CD\u9B06\u65B7\u7B4B\u3002\u52A0\u5165\u849C\u672B\u3001\u5C11\u8A31\u91AC\u6CB9\u3001\u9ED1\u80E1\u6912\u7C89\u3001\u7C73\u9152\u8207 1/2 \u5C0F\u5319\u5C0F\u8607\u6253\u7C89\u6293\u52FB\u9183\u6F2C 15 \u5206\u9418\uFF0C\u53E3\u611F\u9BAE\u5AE9\u591A\u6C41\u4E0D\u67F4\u3002",
          "en": "Tenderize steak with mallet. Marinate with minced garlic, soy sauce, black pepper, rice wine and pinch of baking soda for 15 mins.",
          "ja": "\u8089\u306E\u7B4B\u3092\u53E9\u3044\u3066\u5207\u308A\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u91A4\u6CB9\u3001\u9ED2\u80E1\u6912\u3001\u9152\u306715\u5206\u6F2C\u3051\u8FBC\u307F\u30B8\u30E5\u30FC\u30B7\u30FC\u306B\u4ED5\u4E0A\u3052\u307E\u3059\u3002",
          "ko": "\uACE0\uAE30\uB9DD\uCE58\uB85C \uAC00\uBCCD\uAC8C \uB450\uB4DC\uB9B0 \uB4A4 \uB9C8\uB298, \uAC04\uC7A5, \uD6C4\uCD94, \uB9DB\uC220\uB85C 15\uBD84\uAC04 \uC7AC\uC6CC \uC721\uC9C8\uC744 \uBD80\uB4DC\uB7FD\uAC8C \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "D\u1EA7n nh\u1EB9 mi\u1EBFng th\u1ECBt, \u01B0\u1EDBp c\xF9ng t\u1ECFi b\u0103m, n\u01B0\u1EDBc t\u01B0\u01A1ng, ti\xEAu \u0111en v\xE0 r\u01B0\u1EE3u trong 15 ph\xFAt cho ng\u1EA5m m\u1EC1m."
        },
        "durationSeconds": 900,
        "image": "/images/taiwan-night-market-steak-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u5927\u706B\u7099\u714E\u725B\u6392\u9396\u4F4F\u9BAE\u751C\u8089\u6C41",
          "en": "Sear Steak on High Flame to Lock Juices",
          "ja": "\u5F37\u706B\u3067\u30B9\u30C6\u30FC\u30AD\u3092\u4E00\u6C17\u306B\u713C\u304D\u8089\u6C41\u3092\u9589\u3058\u8FBC\u3081\u308B",
          "ko": "\uC13C \uBD88\uC5D0\uC11C \uC2A4\uD14C\uC774\uD06C\uB97C \uB178\uB987\uD558\uAC8C \uAD6C\uC6CC \uC721\uC999 \uAC00\uB450\uAE30",
          "vi": "\xC1p ch\u1EA3o l\u1EEDa l\u1EDBn cho x\xE9m v\xE0ng hai m\u1EB7t gi\u1EEF tr\u1ECDn \u0111\u1ED9 m\u1ECDng n\u01B0\u1EDBc"
        },
        "instruction": {
          "zh-TW": "\u5E73\u5E95\u934B\u6216\u9435\u677F\u71D2\u71B1\u81F3\u5192\u5FAE\u7159\uFF0C\u4E0B 1 \u5927\u5319\u725B\u6CB9\u6216\u5976\u6CB9\u3002\u653E\u5165\u725B\u6392\u5927\u706B\u6BCF\u9762\u714E\u7D04 1.5~2 \u5206\u9418\uFF087\u5206\u719F\uFF09\uFF0C\u8868\u9762\u91D1\u9EC3\u5FAE\u7126\u9999\uFF0C\u76DB\u8D77\u975C\u7F6E 2 \u5206\u9418\u3002",
          "en": "Heat pan with butter until sizzling hot. Sear steak on high heat 1.5-2 mins per side (medium doneness), rest for 2 mins.",
          "ja": "\u30D5\u30E9\u30A4\u30D1\u30F3\u306B\u30D0\u30BF\u30FC\u3092\u71B1\u3057\u3001\u5F37\u706B\u3067\u4E21\u9762\u30921.5\u301C2\u5206\u305A\u3064\u9999\u3070\u3057\u304F\u713C\u304D\u4E0A\u3052\u3001\u5C11\u3057\u4F11\u307E\u305B\u307E\u3059\u3002",
          "ko": "\uB2EC\uAD70 \uD32C\uC5D0 \uBC84\uD130\uB97C \uB450\uB974\uACE0 \uC13C \uBD88\uC5D0\uC11C \uC591\uBA74\uC744 1.5-2\uBD84\uC529 \uB178\uB987\uD558\uAC8C \uAD6C\uC6CC\uB0B8 \uB4A4 2\uBD84\uAC04 \uB808\uC2A4\uD305\uD569\uB2C8\uB2E4.",
          "vi": "\u0110un n\xF3ng b\u01A1 tr\xEAn ch\u1EA3o, \xE1p ch\u1EA3o m\u1ED7i m\u1EB7t 1.5-2 ph\xFAt cho v\xE0ng n\xE2u th\u01A1m l\u1EEBng r\u1ED3i \u0111\u1EC3 th\u1ECBt ngh\u1EC9 2 ph\xFAt."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-night-market-steak-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u6EFE\u71D9\u9444\u9435\u76E4\u714E\u8377\u5305\u86CB\u8207\u6CB9\u9EB5",
          "en": "Sizzle Noodles and Sunny Egg on Iron Pan",
          "ja": "\u71B1\u3005\u306E\u9244\u677F\u3067\u9EBA\u3068\u76EE\u7389\u713C\u304D\u3092\u8C6A\u5FEB\u306B\u713C\u304F",
          "ko": "\uB728\uAC70\uC6B4 \uCCA0\uD310\uC5D0 \uBA74\uACFC \uACC4\uB780\uC744 \uC62C\uB824 \uC9C0\uAE00\uC9C0\uAE00 \uAD7D\uAE30",
          "vi": "\u0110\u1EB7t m\xEC v\xE0ng v\xE0 \u0111\u1EADp tr\u1EE9ng \u1ED1p la l\xEAn ch\u1EA3o gang n\xF3ng b\u1ECFng"
        },
        "instruction": {
          "zh-TW": "\u5C07\u9435\u677F\u71D2\u81F3\u9AD8\u6EAB\uFF0C\u5237\u4E0A\u8584\u6CB9\u3002\u653E\u5165\u5DF2\u6C46\u71D9\u7684\u6CB9\u9EB5\uFF0C\u4E26\u5728\u7A7A\u4F4D\u6253\u5165\u4E00\u9846\u65B0\u9BAE\u5168\u86CB\uFF0C\u5229\u7528\u9435\u677F\u9AD8\u6EAB\u5C07\u96DE\u86CB\u5E95\u90E8\u714E\u81F3\u9165\u9999\u7126\u8106\u3001\u86CB\u9EC3\u4FDD\u6301\u6D41\u5FC3\u3002",
          "en": "Heat cast iron plate blazing hot, brush with oil. Add boiled noodles and crack a fresh egg next to it, letting the bottom crisp up while yolk stays runny.",
          "ja": "\u71B1\u3057\u305F\u9244\u677F\u306B\u6CB9\u3092\u3072\u304D\u3001\u8339\u3067\u305F\u9EBA\u3092\u306E\u305B\u3001\u751F\u5375\u3092\u843D\u3068\u3057\u307E\u3059\u3002\u9244\u677F\u306E\u4F59\u71B1\u3067\u5375\u304C\u30B8\u30E5\u30FC\u30B8\u30E5\u30FC\u3068\u713C\u3051\u307E\u3059\u3002",
          "ko": "\uCCA0\uD310\uC744 \uC544\uC8FC \uB728\uAC81\uAC8C \uB2EC\uAD88 \uAE30\uB984\uC744 \uB450\uB974\uACE0 \uC0B6\uC740 \uBA74\uACFC \uC0DD\uACC4\uB780\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uACC4\uB780 \uBC14\uB2E5\uC774 \uBC14\uC0AD\uD558\uAC8C \uC775\uB3C4\uB85D \uB461\uB2C8\uB2E4.",
          "vi": "L\xE0m n\xF3ng ch\u1EA3o gang, qu\xE9t d\u1EA7u r\u1ED3i x\u1EBFp m\xEC v\xE0 \u0111\u1EADp tr\u1EE9ng g\xE0 v\xE0o, l\xF2ng tr\u1EAFng x\xE9m gi\xF2n c\xF2n l\xF2ng \u0111\u1ECF d\u1EBBo m\u1ECBn."
        },
        "durationSeconds": 180,
        "image": "/images/taiwan-night-market-steak-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u64FA\u4E0A\u539A\u5207\u725B\u6392\u3001\u6DCB\u6EFE\u71D9\u7D9C\u5408\u96D9\u91AC\uFF01",
          "en": "Top with Steak & Pour Dual Sizzling Gravies",
          "ja": "\u30B9\u30C6\u30FC\u30AD\u3092\u306E\u305B\u3001\u71B1\u3005\u306E\u7279\u88FD\u30C0\u30D6\u30EB\u30BD\u30FC\u30B9\u3092\u304B\u3051\u308B\uFF01",
          "ko": "\uC2A4\uD14C\uC774\uD06C\uB97C \uC5B9\uACE0 \uD2B9\uC81C \uC18C\uC2A4\uB97C \uBD80\uC5B4 \uC9C0\uAE00\uC9C0\uAE00 \uC644\uC131\uD558\uAE30!",
          "vi": "\u0110\u1EB7t mi\u1EBFng b\xF2 l\xEAn tr\xEAn v\xE0 r\u01B0\u1EDBi ng\u1EADp s\u1ED1t ti\xEAu n\u1EA5m s\xF4i s\xF9ng s\u1EE5c!"
        },
        "instruction": {
          "zh-TW": "\u5C07\u714E\u597D\u7684\u725B\u6392\u92EA\u5728\u9435\u677F\u9EB5\u65C1\uFF0C\u8FC5\u901F\u6DCB\u4E0A\u6EFE\u71D9\u71B1\u6C23\u9A30\u9A30\u7684\u9ED1\u80E1\u6912\u8611\u83C7\u7D9C\u5408\u91AC\uFF0C\u4F34\u96A8\u7206\u88C2\u7684\u6ECB\u6ECB\u8072\u8207\u6FC3\u70C8\u9999\u6C23\uFF0C\u7528\u7D19\u5DFE\u534A\u906E\u64CB\u4F4F\u6CB9\u82B1\uFF0C\u8D81\u71B1\u8C6A\u9081\u958B\u5403\uFF01",
          "en": "Place steak onto iron plate, immediately drench with bubbling black pepper & mushroom gravy. Grab a napkin to shield sizzling splatter and feast!",
          "ja": "\u30B9\u30C6\u30FC\u30AD\u3092\u306E\u305B\u3001\u71B1\u3005\u306E\u30C0\u30D6\u30EB\u30BD\u30FC\u30B9\u3092\u4E00\u6C17\u306B\u56DE\u3057\u304B\u3051\u307E\u3059\uFF01\u30B8\u30E5\u30FC\u30B8\u30E5\u30FC\u3068\u8DF3\u306D\u308B\u30BD\u30FC\u30B9\u3092\u30CA\u30D7\u30AD\u30F3\u3067\u9632\u304E\u306A\u304C\u3089\u71B1\u3005\u3092\u3044\u305F\u3060\u304D\u307E\u3059\uFF01",
          "ko": "\uACE0\uAE30\uB97C \uC62C\uB9AC\uACE0 \uB728\uAC70\uC6B4 \uBE14\uB799\uD398\uD37C/\uBA38\uC26C\uB8F8 \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uBD93\uC2B5\uB2C8\uB2E4. \uB0C5\uD0A8\uC73C\uB85C \uAE30\uB984\uC744 \uC0B4\uC9DD \uAC00\uB9AC\uBA70 \uC9C0\uAE00\uAC70\uB9AC\uB294 \uC18C\uB9AC\uC640 \uD568\uAED8 \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694!",
          "vi": "X\u1EBFp mi\u1EBFng b\xF2 l\xEAn \u0111\u0129a gang, r\u01B0\u1EDBi \u0111\u1EABm h\u1ED7n h\u1EE3p s\u1ED1t n\xF3ng h\u1ED5i x\xE8o x\xE8o b\u1ED1c kh\xF3i nghi ng\xFAt r\u1ED3i th\u01B0\u1EDFng th\u1EE9c ngay l\u1EADp t\u1EE9c!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-night-market-steak-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "steak-tough",
        "problem": {
          "zh-TW": "\u725B\u6392\u714E\u51FA\u4F86\u592A\u786C\u54AC\u4E0D\u52D5\uFF1F",
          "en": "Why is my steak chewy & dry?",
          "ja": "\u304A\u8089\u304C\u56FA\u304F\u306A\u3063\u3066\u3057\u307E\u3063\u305F\uFF1F",
          "ko": "\uACE0\uAE30\uAC00 \uC9C8\uAE30\uACE0 \uD37D\uD37D\uD55C\uAC00\uC694?",
          "vi": "Th\u1ECBt b\xF2 b\u1ECB dai v\xE0 kh\xF4 c\u1EE9ng?"
        },
        "cause": {
          "zh-TW": "\u6C92\u6709\u65B7\u7B4B\u6216\u714E\u592A\u4E45\u904E\u719F\u3002",
          "en": "Fibers weren't tenderized or overcooked.",
          "ja": "\u7B4B\u5207\u308A\u304C\u4E0D\u5341\u5206\u304B\u3001\u713C\u304D\u3059\u304E\u304C\u539F\u56E0\u3067\u3059\u3002",
          "ko": "\uD798\uC904\uC744 \uB04A\uC9C0 \uC54A\uC558\uAC70\uB098 \uB108\uBB34 \uC624\uB798 \uAD6C\uC6E0\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "Ch\u01B0a d\u1EA7n \u0111\u1EE9t g\xE2n ho\u1EB7c n\u1EA5u qu\xE1 l\u1EEDa."
        },
        "solution": {
          "zh-TW": "\u7528\u5200\u80CC\u62CD\u9B06\uFF0C\u5927\u706B\u5FEB\u714E\u9396\u4F4F\u8089\u6C41\uFF0C\u8D77\u934B\u5F8C\u52D9\u5FC5\u975C\u7F6E 2 \u5206\u9418\u518D\u5207\u3002",
          "en": "Pound meat, sear on high heat and rest 2 mins.",
          "ja": "\u3057\u3063\u304B\u308A\u8089\u3092\u53E9\u304D\u3001\u5F37\u706B\u77ED\u6642\u9593\u3067\u713C\u304D\u4F11\u307E\u305B\u3066\u304F\u3060\u3055\u3044\u3002",
          "ko": "\uACE0\uAE30\uB97C \uB450\uB4DC\uB824 \uC13C \uBD88\uC5D0 \uAD7D\uACE0 2\uBD84\uAC04 \uB808\uC2A4\uD305\uD558\uC138\uC694.",
          "vi": "D\u1EA7n m\u1EC1m th\u1ECBt, \xE1p ch\u1EA3o nhanh l\u1EEDa l\u1EDBn v\xE0 \u0111\u1EC3 th\u1ECBt ngh\u1EC9 tr\u01B0\u1EDBc khi \u0103n."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u591C\u5E02\u9748\u9B42\u5728\u65BC\u300C\u7D9C\u5408\u96D9\u91AC\uFF08\u8611\u83C7\u91AC\u7684\u6E05\u751C\uFF0B\u9ED1\u80E1\u6912\u91AC\u7684\u8F9B\u9999\uFF09\u300D\uFF0C\u5169\u8005 1:1 \u8ABF\u548C\u662F\u53F0\u7063\u4EBA\u6700\u611B\u7684\u5B8C\u7F8E\u6BD4\u4F8B\uFF01",
        "en": "The secret is the 50/50 dual blend of sweet tomato-mushroom and spicy black pepper gravies!",
        "ja": "\u7518\u3044\u30DE\u30C3\u30B7\u30E5\u30EB\u30FC\u30E0\u30BD\u30FC\u30B9\u3068\u8F9B\u3044\u9ED2\u80E1\u6912\u30BD\u30FC\u30B9\u306E1:1\u30D6\u30EC\u30F3\u30C9\u304C\u53F0\u6E7E\u591C\u5E02\u306E\u9EC4\u91D1\u6BD4\u3067\u3059\uFF01",
        "ko": "\uB2EC\uCF64\uD55C \uBA38\uC26C\uB8F8 \uC18C\uC2A4\uC640 \uB9E4\uCF64\uD55C \uBE14\uB799\uD398\uD37C \uC18C\uC2A4\uB97C 1:1\uB85C \uC11E\uB294 \uAC83\uC774 \uC57C\uC2DC\uC7A5 \uB2E8\uACE8\uB4E4\uC758 \uBE44\uBC95\uC785\uB2C8\uB2E4!",
        "vi": "B\xED quy\u1EBFt ch\xEDnh l\xE0 t\u1EF7 l\u1EC7 1:1 gi\u1EEFa s\u1ED1t n\u1EA5m ng\u1ECDt d\u1ECBu v\xE0 s\u1ED1t ti\xEAu \u0111en cay n\u1ED3ng chu\u1EA9n v\u1ECB \u0110\xE0i Loan!"
      }
    ]
  },
  {
    "id": "stinky-tofu",
    "slug": "stinky-tofu",
    "title": {
      "zh-TW": "\u7D93\u5178\u591C\u5E02\u9165\u70B8\u9EC3\u91D1\u81ED\u8C46\u8150",
      "en": "Crispy Golden Taiwanese Stinky Tofu",
      "ja": "\u672C\u5834\u53F0\u6E7E\u591C\u5E02 \u63DA\u3052\u81ED\u8C46\u8150\uFF08\u70B8\u81ED\u8C46\u8150\uFF09",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5 \uBC14\uC0AD\uD55C \uD669\uAE08 \uCDE8\uB450\uBD80 \uD280\uAE40 (\uCC98\uC6B0\uB354\uC6B0\uD478)",
      "vi": "\u0110\u1EADu h\u0169 th\u1ED1i chi\xEAn gi\xF2n ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan"
    },
    "subtitle": {
      "zh-TW": "\u5916\u8106\u5167\u7206\u6C41\u30FB\u4E2D\u5FC3\u6233\u6D1E\u585E\u849C\u6CE5\u91AC\u30FB\u723D\u8106\u53F0\u5F0F\u7CD6\u918B\u6CE1\u83DC",
      "en": "Crispy Puffed Shell, Garlic Soy Center & Sweet-Sour Pickled Cabbage",
      "ja": "\u30B5\u30AF\u30B5\u30AF\u98DF\u611F\u30FB\u7279\u88FD\u306B\u3093\u306B\u304F\u91A4\u6CB9\u30C0\u30EC\u30FB\u3055\u3063\u3071\u308A\u53F0\u6E7E\u98A8\u7518\u9162\u30AD\u30E3\u30D9\u30C4\u6F2C\u3051",
      "ko": "\uBC14\uC0AD\uD55C \uAC89\uBA74\uACFC \uCD09\uCD09\uD55C \uC18D, \uB9C8\uB298\uAC04\uC7A5 \uC18C\uC2A4\uC640 \uC0C8\uCF64\uB2EC\uCF64 \uB300\uB9CC\uC2DD \uC591\uBC30\uCD94 \uD53C\uD074",
      "vi": "V\u1ECF gi\xF2n r\u1EE5m b\xEAn trong m\u1ECDng n\u01B0\u1EDBc, chan s\u1ED1t t\u1ECFi \u1EDBt k\xE8m d\u01B0a chua b\u1EAFp c\u1EA3i gi\xF2n s\u1EA7n s\u1EADt"
    },
    "tagline": {
      "zh-TW": "\u805E\u8457\u81ED\u5403\u8457\u9999\u7684\u6975\u81F4\u591C\u5E02\u9748\u9B42\uFF01\u91D1\u9EC3\u9165\u8106\u7684\u81ED\u8C46\u8150\u72C2\u71B1",
      "en": "The iconic paradox of Taiwanese street food: pungent aroma, unforgettable delicious taste",
      "ja": "\u72EC\u7279\u306E\u9999\u308A\u3068\u4E00\u5EA6\u98DF\u3079\u305F\u3089\u75C5\u307F\u3064\u304D\u306B\u306A\u308B\u30AB\u30EA\u3075\u308F\u98DF\u611F\uFF01\u53F0\u6E7E\u5C4B\u53F0\u306E\u771F\u9AC4",
      "ko": "\uB0C4\uC0C8\uB294 \uAC15\uB82C\uD558\uC9C0\uB9CC \uD55C \uC785 \uBCA0\uC5B4 \uBB3C\uBA74 \uC78A\uC744 \uC218 \uC5C6\uB294 \uACE0\uC18C\uD568\uACFC \uAC10\uCE60\uB9DB\uC758 \uD5A5\uC5F0",
      "vi": "M\xF3n \u0103n g\xE2y nghi\u1EC7n b\u1EADc nh\u1EA5t ch\u1EE3 \u0111\xEAm v\u1EDBi h\u01B0\u01A1ng v\u1ECB \u0111\u1ED9c \u0111\xE1o kh\xF4ng th\u1EC3 ch\u1ED1i t\u1EEB"
    },
    "heroImage": "/images/taiwan-stinky-tofu-hero.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "defaultServings": 2,
    "caloriesPerServing": 380,
    "category": "fried",
    "dietaryTags": [
      "classic",
      "vegetarian",
      "vegan"
    ],
    "supportedCookware": [
      "traditional",
      "airFryer"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u65B0\u5317\u6DF1\u5751 / \u5168\u53F0\u7063\u591C\u5E02",
        "en": "New Taipei Shenkeng / All Night Markets",
        "ja": "\u65B0\u5317\u6DF1\u5751 / \u5168\u53F0\u6E7E\u591C\u5E02",
        "ko": "\uC2E0\uBCA0\uC774 \uC120\uCEF9 / \uB300\uB9CC \uC804\uC5ED",
        "vi": "Shenkeng T\xE2n B\u1EAFc / To\xE0n \u0110\xE0i Loan"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u9952\u6CB3\u8857\u89C0\u5149\u591C\u5E02",
          "en": "Raohe Night Market",
          "ja": "\u9952\u6CB3\u8857\u591C\u5E02",
          "ko": "\uB77C\uC624\uD5C8\uC81C \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Raohe"
        },
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        },
        {
          "zh-TW": "\u6DF1\u5751\u8001\u8857",
          "en": "Shenkeng Old Street",
          "ja": "\u6DF1\u5751\u8001\u8857",
          "ko": "\uC120\uCEF9 \uB77C\uC624\uC81C",
          "vi": "Ph\u1ED1 c\u1ED5 Shenkeng"
        }
      ],
      "historyStory": {
        "zh-TW": "\u6E90\u81EA\u50B3\u7D71\u852C\u83DC\u767C\u9175\u6EF7\u6C34\u9183\u6F2C\u8C46\u8150\uFF0C\u53F0\u7063\u591C\u5E02\u7368\u5275\u300C\u4E8C\u6B21\u9AD8\u4F4E\u6EAB\u6CB9\u70B8\u6CD5\u300D\uFF0C\u70B8\u51FA\u5916\u6BBC\u91D1\u9EC3\u9165\u8106\u5982\u8584\u9905\u3001\u5167\u90E8\u591A\u5B54\u5438\u98FD\u849C\u6CE5\u91AC\u6C41\u7684\u7368\u7279\u53E3\u611F\uFF0C\u642D\u914D\u9178\u751C\u723D\u8106\u7684\u53F0\u5F0F\u9AD8\u9E97\u83DC\u6CE1\u83DC\uFF0C\u6210\u70BA\u5168\u53F0\u6700\u5BCC\u76DB\u540D\u7684\u4EE3\u8868\u5C0F\u5403\u3002",
        "en": "Fermented in natural herbal brine, Taiwanese night market vendors perfected the double-fry technique: low heat to cook through, flash high heat for puffing crisp crust. Pierced in the center and filled with garlic soy paste and pickled cabbage.",
        "ja": "\u767A\u9175\u6DB2\u306B\u6F2C\u3051\u8FBC\u3093\u3060\u8C46\u8150\u3092\u4E8C\u5EA6\u63DA\u3052\u3057\u3066\u30AB\u30EA\u30AB\u30EA\u306B\u4ED5\u4E0A\u3052\u3001\u30CB\u30F3\u30CB\u30AF\u91A4\u6CB9\u3068\u7279\u88FD\u30AD\u30E3\u30D9\u30C4\u6F2C\u3051\u3092\u6DFB\u3048\u3066\u98DF\u3079\u308B\u53F0\u6E7E\u3092\u4EE3\u8868\u3059\u308B\u540D\u7269\u3002",
        "ko": "\uC790\uC5F0 \uBC1C\uD6A8\uC561\uC5D0 \uC219\uC131\uD55C \uB450\uBD80\uB97C \uB450 \uBC88 \uD280\uACA8\uB0B4\uC5B4 \uAC89\uC740 \uBC14\uC0AD\uD558\uACE0 \uC18D\uC740 \uBD80\uB4DC\uB7FD\uAC8C \uB9CC\uB4E0 \uB4A4 \uB9C8\uB298 \uC18C\uC2A4\uC640 \uC591\uBC30\uCD94 \uC808\uC784\uC744 \uACC1\uB4E4\uC5EC \uBA39\uB294 \uAD6D\uBBFC \uAC04\uC2DD\uC785\uB2C8\uB2E4.",
        "vi": "\u0110\u1EADu h\u0169 l\xEAn men gia truy\u1EC1n \u0111\u01B0\u1EE3c chi\xEAn hai l\u1EA7n gi\xF2n r\u1EE5m, ch\u1ECDc l\u1ED7 gi\u1EEFa \u0111\u1EC3 chan \u0111\u1EABm s\u1ED1t t\u1ECFi \u1EDBt cay n\u1ED3ng \u0103n c\xF9ng d\u01B0a b\u1EAFp c\u1EA3i chua ng\u1ECDt thanh m\xE1t."
      },
      "taiwaneseHokkien": "Tsh\xE0u-t\u0101u-h\u016B (\u3118\u3120\u02CB \u3109\u3120 \u310F\u3128)",
      "mandarinPinyin": "Ch\xF2u D\xF2ufu (\u3114\u3121\u02CB \u3109\u3121\u02CB \u3108\u3128\u02C7)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u81ED\u8C46\u8150\u4E00\u4EFD\u5927\u8FA3\uFF0C\u6CE1\u83DC\u591A\u4E00\u9EDE"
    },
    "ingredients": [
      {
        "id": "stinky-tofu-blocks",
        "name": {
          "zh-TW": "\u624B\u5DE5\u767C\u9175\u81ED\u8C46\u8150 (\u6B63\u65B9\u5F62\u539A\u584A)",
          "en": "Fermented Stinky Tofu Blocks",
          "ja": "\u767A\u9175\u81ED\u8C46\u8150\uFF08\u89D2\u578B\u539A\u5207\u308A\uFF09",
          "ko": "\uBC1C\uD6A8 \uCDE8\uB450\uBD80 (\uB124\uBAA8\uB09C \uD1B5\uB450\uBD80)",
          "vi": "\u0110\u1EADu h\u0169 th\u1ED1i l\xEAn men (C\u1EAFt vu\xF4ng d\xE0y)"
        },
        "amount": 4,
        "unitMetric": "piece",
        "unitUS": "4 squares",
        "isKeyFlavor": true,
        "chineseName": "\u767C\u9175\u81ED\u8C46\u8150",
        "chinesePinyin": "Ch\xF2u d\xF2ufu"
      },
      {
        "id": "taiwan-pickled-cabbage",
        "name": {
          "zh-TW": "\u53F0\u5F0F\u7CD6\u918B\u9AD8\u9E97\u83DC\u6CE1\u83DC",
          "en": "Taiwanese Sweet & Sour Pickled Cabbage",
          "ja": "\u53F0\u6E7E\u98A8\u7518\u9162\u30AD\u30E3\u30D9\u30C4\u6F2C\u3051\uFF08\u6CE1\u83DC\uFF09",
          "ko": "\uB300\uB9CC\uC2DD \uC0C8\uCF64\uB2EC\uCF64 \uC591\uBC30\uCD94 \uC808\uC784 (\uD30C\uC624\uCC28\uC774)",
          "vi": "D\u01B0a c\u1EA3i b\u1EAFp ng\xE2m chua ng\u1ECDt \u0110\xE0i Loan"
        },
        "amount": 150,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "isKeyFlavor": true,
        "chineseName": "\u53F0\u5F0F\u6CE1\u83DC",
        "chinesePinyin": "T\xE1i sh\xEC p\xE0oc\xE0i"
      },
      {
        "id": "garlic-soy-paste",
        "name": {
          "zh-TW": "\u7279\u8ABF\u849C\u6CE5\u6CB9\u818F (\u849C\u6CE5+\u91AC\u6CB9\u818F+\u9999\u6CB9)",
          "en": "Garlic Thick Soy Paste Sauce",
          "ja": "\u304A\u308D\u3057\u306B\u3093\u306B\u304F\u5165\u308A\u7279\u88FD\u3068\u308D\u307F\u91A4\u6CB9",
          "ko": "\uB2E4\uC9C4 \uB9C8\uB298 \uB370\uB9AC\uC57C\uB07C \uC18C\uC2A4",
          "vi": "S\u1ED1t t\u01B0\u01A1ng t\u1ECFi \u0111\u1EB7c s\xE1nh"
        },
        "amount": 60,
        "unitMetric": "ml",
        "unitUS": "4 tbsp",
        "chineseName": "\u849C\u6CE5\u6CB9\u818F",
        "chinesePinyin": "Su\xE0nn\xED y\xF3ug\u0101o"
      },
      {
        "id": "taiwan-chili-paste",
        "name": {
          "zh-TW": "\u53F0\u7063\u751F\u8FA3\u6912\u91AC\u6216\u8C46\u74E3\u8FA3\u6912",
          "en": "Taiwanese Fresh Red Chili Paste",
          "ja": "\u53F0\u6E7E\u7523 \u7279\u88FD\u751F\u30C1\u30EA\u30DA\u30FC\u30B9\u30C8",
          "ko": "\uB300\uB9CC\uC2DD \uC0DD\uACE0\uCD94\uC7A5",
          "vi": "\u1EDAt t\u01B0\u01A1i xay cay n\u1ED3ng"
        },
        "amount": 20,
        "unitMetric": "g",
        "unitUS": "1 tbsp",
        "chineseName": "\u751F\u8FA3\u6912\u91AC",
        "chinesePinyin": "L\xE0ji\u0101o ji\xE0ng"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u81ED\u8C46\u8150\u5438\u4E7E\u8868\u9762\u6C34\u5206\u5207\u584A",
          "en": "Drain and Cut Tofu Squares",
          "ja": "\u8C46\u8150\u306E\u6C34\u6C17\u3092\u62ED\u304D\u53D6\u308A\u56DB\u89D2\u304F\u5207\u308B",
          "ko": "\uCDE8\uB450\uBD80 \uBB3C\uAE30\uB97C \uC81C\uAC70\uD558\uACE0 \uB124\uBAA8\uB098\uAC8C \uC370\uAE30",
          "vi": "Th\u1EA5m kh\xF4 n\u01B0\u1EDBc tr\xEAn b\u1EC1 m\u1EB7t \u0111\u1EADu h\u0169"
        },
        "instruction": {
          "zh-TW": "\u5C07\u81ED\u8C46\u8150\u7528\u5EDA\u623F\u7D19\u5DFE\u5FB9\u5E95\u5438\u4E7E\u8868\u9762\u6C34\u5206\uFF0C\u9632\u6B62\u6CB9\u70B8\u6642\u5674\u6CB9\u3002\u53EF\u4FDD\u6301\u6574\u584A\u5927\u6B63\u65B9\u5F62\uFF0C\u6216\u5C0D\u89D2\u659C\u5207\u6210\u4E09\u89D2\u5F62\u5C0F\u584A\u3002",
          "en": "Thoroughly pat fermented tofu dry with paper towels to prevent oil splatter. Keep whole or slice diagonally into triangles.",
          "ja": "\u6CB9\u30CF\u30CD\u3092\u9632\u3050\u305F\u3081\u3001\u8C46\u8150\u306E\u8868\u9762\u306E\u6C34\u6C17\u3092\u30AD\u30C3\u30C1\u30F3\u30DA\u30FC\u30D1\u30FC\u3067\u3057\u3063\u304B\u308A\u62ED\u304D\u53D6\u308A\u307E\u3059\u3002",
          "ko": "\uD0A4\uCE5C\uD0C0\uC6D4\uB85C \uB450\uBD80\uC758 \uBB3C\uAE30\uB97C \uAF3C\uAF3C\uD788 \uB2E6\uC544\uB0B4\uACE0 \uD1B5\uC73C\uB85C \uC4F0\uAC70\uB098 \uC0BC\uAC01\uD615\uC73C\uB85C \uC790\uB985\uB2C8\uB2E4.",
          "vi": "D\xF9ng kh\u0103n gi\u1EA5y th\u1EA5m th\u1EADt r\xE1o n\u01B0\u1EDBc mi\u1EBFng \u0111\u1EADu \u0111\u1EC3 tr\xE1nh b\u1ECB b\u1EAFn d\u1EA7u khi chi\xEAn."
        },
        "durationSeconds": 180,
        "image": "/images/taiwan-stinky-tofu-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u4E2D\u6EAB\u6CB9\u70B8\u5B9A\u578B\u719F\u900F",
          "en": "First Fry at Medium Heat to Cook Through",
          "ja": "\u4E2D\u6E29\u306E\u6CB9\u3067\u3058\u3063\u304F\u308A\u4E2D\u307E\u3067\u706B\u3092\u901A\u3059",
          "ko": "\uC911\uC628\uC758 \uAE30\uB984\uC5D0\uC11C \uC18D\uAE4C\uC9C0 \uACE8\uACE0\uB8E8 1\uCC28 \uD280\uAE30\uAE30",
          "vi": "Chi\xEAn l\u1EA7n 1 \u1EDF nhi\u1EC7t \u0111\u1ED9 v\u1EEBa cho ch\xEDn \u0111\u1EC1u b\xEAn trong"
        },
        "instruction": {
          "zh-TW": "\u6CB9\u934B\u52A0\u71B1\u81F3 150\xB0C\uFF0C\u5C07\u81ED\u8C46\u8150\u4E00\u584A\u584A\u8F15\u8F15\u653E\u5165\u3002\u4EE5\u4E2D\u5C0F\u706B\u6162\u70B8\u7D04 4~5 \u5206\u9418\u81F3\u8C46\u8150\u5FAE\u5FAE\u6D6E\u8D77\u3001\u5916\u76AE\u5448\u6DE1\u9EC3\u8272\u7D50\u76AE\uFF0C\u6488\u8D77\u701D\u6CB9 2 \u5206\u9418\u3002",
          "en": "Heat oil to 150\xB0C (300\xB0F). Fry tofu over medium-low heat for 4-5 mins until floating and pale golden. Drain for 2 mins.",
          "ja": "150\u2103\u306E\u6CB9\u306B\u5165\u308C\u3001\u5F31\u4E2D\u706B\u30674\u301C5\u5206\u63DA\u3052\u3066\u8C46\u8150\u304C\u6D6E\u304D\u4E0A\u304C\u308A\u8584\u3044\u304D\u3064\u306D\u8272\u306B\u306A\u3063\u305F\u3089\u4E00\u5EA6\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002",
          "ko": "150\xB0C \uAE30\uB984\uC5D0 \uB123\uACE0 \uC911\uC57D\uBD88\uC5D0\uC11C 4-5\uBD84\uAC04 \uCC9C\uCC9C\uD788 \uD280\uACA8 \uB450\uBD80\uAC00 \uB5A0\uC624\uB974\uBA74 \uAC74\uC838\uB0B4\uC5B4 2\uBD84\uAC04 \uAE30\uB984\uC744 \uBE8D\uB2C8\uB2E4.",
          "vi": "Th\u1EA3 \u0111\u1EADu v\xE0o d\u1EA7u 150\xB0C chi\xEAn nh\u1ECF l\u1EEDa 4-5 ph\xFAt cho n\u1ED5i l\xEAn v\xE0 se m\u1EB7t v\xE0ng nh\u1EA1t, v\u1EDBt ra \u0111\u1EC3 r\xE1o."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-stinky-tofu-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u9AD8\u6EAB\u4E8C\u6B21\u5FA9\u70B8\u6436\u9165\u81A8\u8139",
          "en": "Second Flash Fry at High Heat for Maximum Crispness",
          "ja": "\u9AD8\u6E29\u3067\u4E8C\u5EA6\u63DA\u3052\u3057\u3066\u30AB\u30EA\u30AB\u30EA\u306B\u81A8\u3089\u307E\u305B\u308B",
          "ko": "\uACE0\uC628\uC5D0\uC11C 2\uCC28\uB85C \uBC14\uC0AD\uD558\uAC8C \uD280\uACA8 \uD33D\uCC3D\uC2DC\uD0A4\uAE30",
          "vi": "Chi\xEAn l\u1EA7n 2 l\u1EEDa l\u1EDBn cho v\u1ECF ngo\xE0i ph\u1ED3ng gi\xF2n r\u1EE5m"
        },
        "instruction": {
          "zh-TW": "\u5C07\u6CB9\u6EAB\u62C9\u9AD8\u81F3 190\xB0C\uFF0C\u518D\u6B21\u4E0B\u934B\u5927\u706B\u9AD8\u6EAB\u5FEB\u70B8 1~2 \u5206\u9418\uFF0C\u5916\u76AE\u77AC\u9593\u91D1\u9EC3\u81A8\u8139\u3001\u6572\u64CA\u767C\u51FA\u6E05\u8106\u8072\u97FF\u6642\u8FC5\u901F\u6488\u8D77\u701D\u4E7E\u6CB9\u5206\uFF01",
          "en": "Raise oil heat to 190\xB0C (375\xB0F). Flash fry tofu for 1-2 mins until puffed, deeply golden and shatteringly crisp. Drain well.",
          "ja": "\u6CB9\u6E29\u3092190\u2103\u306B\u4E0A\u3052\u3001\u4E00\u6C17\u306B1\u301C2\u5206\u5F37\u706B\u3067\u4E8C\u5EA6\u63DA\u3052\u3057\u3001\u5916\u5074\u3092\u30AB\u30EA\u30C3\u3068\u30AD\u30C4\u30CD\u8272\u306B\u4ED5\u4E0A\u3052\u307E\u3059\uFF01",
          "ko": "\uAE30\uB984 \uC628\uB3C4\uB97C 190\xB0C\uB85C \uC62C\uB824 1-2\uBD84\uAC04 \uC13C \uBD88\uC5D0 \uBE60\uB974\uAC8C \uD280\uACA8 \uBC14\uC0AD\uD558\uACE0 \uD669\uAE08\uBE5B\uC73C\uB85C \uBD80\uD480\uC5B4 \uC624\uB974\uBA74 \uAC74\uC9D1\uB2C8\uB2E4.",
          "vi": "T\u0103ng nhi\u1EC7t l\xEAn 190\xB0C, th\u1EA3 \u0111\u1EADu v\xE0o chi\xEAn nhanh 1-2 ph\xFAt cho v\u1ECF ngo\xE0i gi\xF2n r\u1EE5m v\xE0ng \u01B0\u01A1m r\u1ED3i v\u1EDBt ra ngay."
        },
        "durationSeconds": 120,
        "image": "/images/taiwan-stinky-tofu-step3.jpg",
        "cookwareVariations": [
          {
            "cookware": "airFryer",
            "tempAndSetting": "Air Fryer 200\xB0C (395\xB0F): 15 mins (Spray Oil & Flip at 8 mins)",
            "instructionOverride": {
              "zh-TW": "\u81ED\u8C46\u8150\u5207\u584A\u7528\u5EDA\u623F\u7D19\u5DFE\u5FB9\u5E95\u5438\u4E7E\u6C34\u5206\uFF0C\u8868\u9762\u5747\u52FB\u5237\u6216\u5674\u4E0A\u4E00\u5C64\u98DF\u7528\u6CB9\u3002\u653E\u5165\u9810\u71B1\u81F3 200\xB0C \u7684\u6C23\u70B8\u934B\u70B8\u7C43\u4E2D\uFF0C\u6C23\u70B8 8 \u5206\u9418\u5F8C\u62C9\u51FA\u7FFB\u9762\u88DC\u5674\u5C11\u8A31\u6CB9\uFF0C\u518D\u6C23\u70B8 7 \u5206\u9418\u81F3\u8868\u76AE\u91D1\u9EC3\u8D77\u6CE1\u81A8\u8139\u3001\u5916\u8106\u5167\u5AE9\uFF01",
              "en": "Thoroughly pat tofu cubes dry with paper towels. Brush or spray all sides generously with cooking oil. Air fry at 200\xB0C (395\xB0F) for 8 mins, flip, light oil spray and air fry 7 mins until golden puffed and super crispy!",
              "ja": "\u8C46\u8150\u306E\u6C34\u6C17\u3092\u30DA\u30FC\u30D1\u30FC\u3067\u5B8C\u5168\u306B\u62ED\u304D\u53D6\u308A\u6CB9\u3092\u5857\u308A\u307E\u3059\u3002200\u2103\u306B\u4E88\u71B1\u3057\u305F\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u30678\u5206\u52A0\u71B1\u5F8C\u3001\u88CF\u8FD4\u3057\u3066\u6CB9\u3092\u5439\u304D\u3055\u3089\u306B7\u5206\u3002\u8868\u9762\u304C\u30AB\u30EA\u30C3\u3068\u81A8\u3089\u3080\u307E\u3067\u52A0\u71B1\u3057\u307E\u3059\uFF01",
              "ko": "\uB450\uBD80 \uBB3C\uAE30\uB97C \uC644\uC804\uD788 \uC81C\uAC70\uD558\uACE0 \uC2DD\uC6A9\uC720\uB97C \uACE8\uACE0\uB8E8 \uBC14\uB985\uB2C8\uB2E4. 200\xB0C\uB85C \uC608\uC5F4\uB41C \uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uC5D0 \uB123\uACE0 8\uBD84 \uC870\uB9AC \uD6C4 \uB4A4\uC9D1\uC5B4 \uC624\uC77C\uC744 \uBFCC\uB9AC\uACE0 7\uBD84 \uB354 \uBC14\uC0AD\uD558\uAC8C \uAD7D\uC2B5\uB2C8\uB2E4.",
              "vi": "Th\u1EA5m kh\xF4 ho\xE0n to\xE0n mi\u1EBFng \u0111\u1EADu, qu\xE9t d\u1EA7u \u0111\u1EC1u c\xE1c m\u1EB7t. Cho v\xE0o n\u1ED3i chi\xEAn kh\xF4ng d\u1EA7u 200\xB0C n\u01B0\u1EDBng 8 ph\xFAt, l\u1EADt m\u1EB7t x\u1ECBt d\u1EA7u n\u01B0\u1EDBng th\xEAm 7 ph\xFAt cho v\xE0ng ph\u1ED3ng gi\xF2n r\u1EE5m."
            }
          }
        ]
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u4E2D\u592E\u6233\u6D1E\u704C\u5165\u849C\u6CE5\u91AC\u3001\u914D\u723D\u8106\u6CE1\u83DC\uFF01",
          "en": "Pierce Center, Fill with Garlic Sauce & Serve with Pickled Cabbage",
          "ja": "\u4E2D\u5FC3\u306B\u7A74\u3092\u958B\u3051\u3066\u7279\u88FD\u30CB\u30F3\u30CB\u30AF\u30BF\u30EC\u3092\u6D41\u3057\u8FBC\u307F\u3001\u6CE1\u83DC\u3092\u6DFB\u3048\u308B\uFF01",
          "ko": "\uAC00\uC6B4\uB370 \uAD6C\uBA4D\uC744 \uB6AB\uC5B4 \uB9C8\uB298\uC18C\uC2A4\uB97C \uBD93\uACE0 \uC591\uBC30\uCD94 \uC808\uC784 \uACC1\uB4E4\uC774\uAE30!",
          "vi": "Ch\u1ECDc th\u1EE7ng gi\u1EEFa r\xF3t s\u1ED1t t\u1ECFi \u1EDBt v\xE0 b\xE0y c\xF9ng d\u01B0a chua b\u1EAFp c\u1EA3i!"
        },
        "instruction": {
          "zh-TW": "\u5C07\u70B8\u597D\u7684\u9165\u8106\u81ED\u8C46\u8150\u6392\u5165\u76E4\u4E2D\uFF0C\u7528\u7B77\u5B50\u5728\u8C46\u8150\u4E2D\u5FC3\u6233\u958B\u4E00\u500B\u5C0F\u6D1E\uFF0C\u704C\u5165\u6EFF\u6EFF\u7279\u8ABF\u849C\u6CE5\u91AC\u6CB9\u818F\u8207\u8FA3\u6912\u91AC\uFF0C\u65C1\u908A\u593E\u4E0A\u4E00\u5927\u5768\u723D\u8106\u591A\u6C41\u7684\u53F0\u5F0F\u7CD6\u918B\u6CE1\u83DC\uFF0C\u4E00\u53E3\u54AC\u4E0B\u7206\u6C41\u904E\u766E\uFF01",
          "en": "Arrange crisp tofu on plate, poke a hole in the center of each block with chopstick, fill generously with garlic soy paste & chili. Serve alongside refreshing pickled cabbage!",
          "ja": "\u7BB8\u3067\u8C46\u8150\u306E\u771F\u3093\u4E2D\u306B\u7A74\u3092\u958B\u3051\u3001\u30CB\u30F3\u30CB\u30AF\u91A4\u6CB9\u3068\u30C1\u30EA\u30BD\u30FC\u30B9\u3092\u305F\u3063\u3077\u308A\u6CE8\u304E\u307E\u3059\u3002\u30B7\u30E3\u30AD\u30B7\u30E3\u30AD\u306E\u7518\u9162\u30AD\u30E3\u30D9\u30C4\u3092\u6DFB\u3048\u3066\u71B1\u3005\u3092\u3044\u305F\u3060\u304D\u307E\u3059\uFF01",
          "ko": "\uD280\uAE34 \uB450\uBD80 \uAC00\uC6B4\uB370\uB97C \uC813\uAC00\uB77D\uC73C\uB85C \uCC14\uB7EC \uAD6C\uBA4D\uC744 \uB0B4\uACE0 \uB9C8\uB298\uAC04\uC7A5 \uC18C\uC2A4\uC640 \uACE0\uCD94\uC7A5\uC744 \uB4EC\uBFCD \uCC44\uC6B4 \uB4A4 \uC0C8\uCF64\uD55C \uC591\uBC30\uCD94 \uC808\uC784\uC744 \uACC1\uB4E4\uC5EC \uBA39\uC2B5\uB2C8\uB2E4.",
          "vi": "D\xF9ng \u0111\u0169a ch\u1ECDc th\u1EE7ng m\u1ED9t l\u1ED7 gi\u1EEFa mi\u1EBFng \u0111\u1EADu, chan \u0111\u1EABm s\u1ED1t t\u1ECFi \u1EDBt v\xE0o l\xF2ng b\xE1nh r\u1ED3i g\u1EAFp k\xE8m d\u01B0a b\u1EAFp c\u1EA3i chua ng\u1ECDt th\u01B0\u1EDFng th\u1EE9c ngay!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-stinky-tofu-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "tofu-soggy",
        "problem": {
          "zh-TW": "\u81ED\u8C46\u8150\u70B8\u51FA\u4F86\u4E0D\u5920\u9165\u8106\u3001\u5F88\u5FEB\u8EDF\u584C\uFF1F",
          "en": "Why isn't my stinky tofu crunchy enough?",
          "ja": "\u63DA\u3052\u305F\u81ED\u8C46\u8150\u304C\u30B5\u30AF\u30B5\u30AF\u306B\u306A\u3089\u305A\u30D9\u30C1\u30E3\u30C3\u3068\u3059\u308B\uFF1F",
          "ko": "\uCDE8\uB450\uBD80\uAC00 \uBC14\uC0AD\uD558\uC9C0 \uC54A\uACE0 \uB205\uB205\uD55C\uAC00\uC694?",
          "vi": "\u0110\u1EADu h\u0169 chi\xEAn xong kh\xF4ng \u0111\u1EE7 \u0111\u1ED9 gi\xF2n x\u1ED1p?"
        },
        "cause": {
          "zh-TW": "\u6C92\u6709\u7D93\u904E\u4E8C\u6B21\u9AD8\u6EAB\u5FA9\u70B8\uFF0C\u6216\u662F\u6CB9\u6EAB\u4E0D\u5920\u903C\u6CB9\u3002",
          "en": "Skipped the second high-heat fry step.",
          "ja": "\u4E8C\u5EA6\u63DA\u3052\u3092\u3057\u3066\u3044\u306A\u3044\u304B\u3001\u6CB9\u306E\u6E29\u5EA6\u304C\u4F4E\u3059\u304E\u307E\u3057\u305F\u3002",
          "ko": "2\uCC28 \uACE0\uC628 \uD280\uAE40\uC744 \uAC74\uB108\uB6F0\uC5C8\uAC70\uB098 \uAE30\uB984 \uC628\uB3C4\uAC00 \uB0AE\uC558\uC2B5\uB2C8\uB2E4.",
          "vi": "B\u1ECF qua b\u01B0\u1EDBc chi\xEAn l\u1EA7n hai l\u1EEDa l\u1EDBn \xE9p d\u1EA7u."
        },
        "solution": {
          "zh-TW": "\u5FC5\u9808\u5206\u5169\u6B21\u70B8\uFF1A\u5148 150\xB0C \u70B8\u719F\uFF0C\u518D\u7528 190\xB0C \u9AD8\u6EAB\u5927\u706B\u6436\u9165 1 \u5206\u9418\uFF01",
          "en": "Must double-fry: first 150\xB0C to cook, then 190\xB0C for 1 min to crisp!",
          "ja": "150\u2103\u3067\u706B\u3092\u901A\u3057\u3001\u6700\u5F8C\u306B190\u2103\u306E\u5F37\u706B\u3067\u30B5\u30C3\u3068\u4E8C\u5EA6\u63DA\u3052\u3057\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "150\xB0C\uC5D0\uC11C \uC775\uD78C \uB4A4 190\xB0C \uACE0\uC628\uC5D0\uC11C 1\uBD84\uAC04 \uC7AC\uBC8C \uD280\uAE40\uC744 \uD558\uC138\uC694!",
          "vi": "B\u1EAFt bu\u1ED9c chi\xEAn 2 l\u1EA7n: l\u1EA7n \u0111\u1EA7u 150\xB0C v\xE0 l\u1EA7n 2 \u1EDF 190\xB0C trong 1 ph\xFAt!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u4E00\u5B9A\u8981\u7528\u7B77\u5B50\u5728\u8C46\u8150\u4E2D\u5FC3\u6233\u51FA\u5C0F\u6D1E\uFF0C\u5C07\u849C\u6CE5\u91AC\u6CB9\u818F\u76F4\u63A5\u704C\u5165\u591A\u5B54\u5167\u90E8\uFF0C\u642D\u914D\u4E00\u53E3\u9178\u751C\u6CE1\u83DC\uFF0C\u624D\u662F\u6B63\u5B97\u8001\u9955\u5403\u6CD5\uFF01",
        "en": "Poke a hole to pour garlic sauce directly into the spongy interior, paired with cold pickled cabbage!",
        "ja": "\u7A74\u3092\u958B\u3051\u3066\u30BF\u30EC\u3092\u4E2D\u306B\u67D3\u307F\u8FBC\u307E\u305B\u3001\u30AD\u30E3\u30D9\u30C4\u6F2C\u3051\u3068\u4E00\u7DD2\u306B\u982C\u5F35\u308B\u306E\u304C\u672C\u5834\u306E\u98DF\u3079\u65B9\u3067\u3059\uFF01",
        "ko": "\uB450\uBD80 \uAC00\uC6B4\uB370 \uAD6C\uBA4D\uC744 \uB0B4 \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uCC44\uC6B4 \uB4A4 \uCC28\uAC00\uC6B4 \uC591\uBC30\uCD94 \uD53C\uD074\uC744 \uC5B9\uC5B4 \uD55C\uC785\uC5D0 \uB4DC\uC138\uC694!",
        "vi": "Ch\u1ECDc l\u1ED7 r\xF3t s\u1ED1t th\u1EB3ng v\xE0o b\xEAn trong v\xE0 \u0103n k\xE8m d\u01B0a chua l\xE0 phong c\xE1ch th\u01B0\u1EDFng th\u1EE9c chu\u1EA9n nh\u1EA5t!"
      }
    ]
  },
  {
    "id": "taiwanese-ba-wan",
    "slug": "taiwanese-ba-wan",
    "title": {
      "zh-TW": "\u5F70\u5316\u50B3\u627F\u8106\u76AE\u8089\u5713",
      "en": "Changhua Crispy Fried Ba-Wan (Taiwanese Meat Disc)",
      "ja": "\u5F70\u5316\u540D\u7269 \u5916\u30AB\u30EA\u4E2D\u30E2\u30C1\u8089\u56E3\u5B50\uFF08\u5F70\u5316\u8089\u5713\uFF09",
      "ko": "\uB300\uB9CC \uC7A5\uD654 \uC804\uD1B5 \uBC14\uC0AD \uCAC4\uAE43 \uBC14\uC644 (\uACE0\uAE30 \uB524\uC12C)",
      "vi": "B\xE1nh Ba-wan th\u1ECBt b\u0103m m\u0103ng n\u1EA5m gi\xF2n d\u1EBBo Ch\u01B0\u01A1ng H\xF3a"
    },
    "subtitle": {
      "zh-TW": "\u6676\u7469Q\u5F48\u5916\u76AE\u30FB\u5927\u584A\u9ED1\u8C6C\u8089\u7B4D\u4E01\u9999\u83C7\u30FB\u9748\u9B42\u7C89\u7D05\u751C\u7C73\u91AC",
      "en": "Translucent Chewy Crust, Pork & Bamboo Shoot Filling & Sweet Pink Sauce",
      "ja": "\u30E2\u30C1\u30E2\u30C1\u534A\u900F\u660E\u306E\u751F\u5730\u30FB\u5927\u7C92\u8C5A\u8089\u3068\u30BF\u30B1\u30CE\u30B3\u690E\u8338\u9921\u30FB\u7279\u88FD\u30D4\u30F3\u30AF\u306E\u7518\u30C0\u30EC",
      "ko": "\uD22C\uBA85\uD558\uACE0 \uCAC4\uAE43\uD55C \uD53C, \uD07C\uC9C1\uD55C \uB3FC\uC9C0\uACE0\uAE30\u30FB\uC8FD\uC21C\u30FB\uD45C\uACE0\uBC84\uC12F \uC18C, \uD551\uD06C\uBE5B \uB2EC\uCF64\uD55C \uC300 \uC18C\uC2A4",
      "vi": "V\u1ECF b\u1ED9t trong d\u1EBBo dai, nh\xE2n th\u1ECBt heo m\u0103ng gi\xF2n n\u1EA5m h\u01B0\u01A1ng c\xF9ng s\u1ED1t h\u1ED3ng ng\u1ECDt ng\xE0o"
    },
    "tagline": {
      "zh-TW": "\u300A\u5343\u8207\u5343\u5C0B\u300B\u539F\u578B\u9748\u611F\u7F8E\u98DF\uFF01\u4F4E\u6EAB\u6CE1\u6CB9\u70B8\u51FA\u6975\u81F4\u5F48\u7259\u7684\u53F0\u7063\u5947\u8E5F",
      "en": "The real-world dish that inspired animated feasts: bouncy skin with savory meat",
      "ja": "\u6620\u753B\u306E\u30E2\u30C7\u30EB\u306B\u3082\u306A\u3063\u305F\u53F0\u6E7E\u5C48\u6307\u306EB\u7D1A\u30B0\u30EB\u30E1\uFF01\u5916\u306F\u30AB\u30EA\u30C3\u3001\u4E2D\u306F\u9A5A\u304D\u306E\u5F3E\u529B",
      "ko": "\uC560\uB2C8\uBA54\uC774\uC158 \uBA39\uBC29\uC758 \uC6D0\uC870! \uC800\uC628 \uAE30\uB984\uC5D0 \uD280\uACA8 \uADF9\uAC15\uC758 \uCAC4\uAE43\uD568\uC744 \uC790\uB791\uD558\uB294 \uC7A5\uD654\uC758 \uC790\uB791",
      "vi": "M\xF3n \u0103n tr\u1EE9 danh v\u1EDBi l\u1EDBp v\u1ECF d\u1EBBo dai bao tr\u1ECDn nh\xE2n th\u1ECBt \u0111\u1EADm \u0111\xE0 quy\u1EBFn r\u0169 kh\xF3 c\u01B0\u1EE1ng"
    },
    "heroImage": "/images/taiwan-ba-wan-hero.jpg",
    "difficulty": "hard",
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 25,
    "defaultServings": 4,
    "caloriesPerServing": 420,
    "category": "mains",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u5F70\u5316\u7E23 / \u5317\u6597",
        "en": "Changhua / Beidou",
        "ja": "\u5F70\u5316\u770C / \u5317\u6597",
        "ko": "\uC7A5\uD654\uD604 / \uBCA0\uC774\uB354\uC6B0",
        "vi": "Ch\u01B0\u01A1ng H\xF3a / B\u1EAFc \u0110\u1EA9u"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u5F70\u5316\u516B\u5366\u5C71\u8089\u5713\u8001\u5E97",
          "en": "Changhua Baguashan Ba-Wan",
          "ja": "\u5F70\u5316\u516B\u5366\u5C71\u8089\u5713",
          "ko": "\uC7A5\uD654 \uBC14\uACFC\uC0B0 \uBC14\uC644",
          "vi": "Ba-wan Baguashan Ch\u01B0\u01A1ng H\xF3a"
        },
        {
          "zh-TW": "\u901A\u5316\u591C\u5E02 (\u81E8\u6C5F\u8857\u591C\u5E02)",
          "en": "Tonghua Night Market",
          "ja": "\u901A\u5316\u591C\u5E02",
          "ko": "\uD241\uD654 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Tonghua"
        }
      ],
      "historyStory": {
        "zh-TW": "\u6E05\u672B\u620A\u620C\u5927\u6C34\u707D\u6642\uFF0C\u5F70\u5316\u5317\u6597\u6587\u4EBA\u8303\u842C\u5C45\u5148\u751F\u5C07\u5730\u74DC\u7C89\u63C9\u6F3F\u5305\u5165\u719F\u8089\u7AF9\u7B4D\u84B8\u719F\u8CD1\u707D\uFF0C\u6F14\u5316\u70BA\u5168\u53F0\u6700\u5177\u4EE3\u8868\u6027\u7684\u300C\u8089\u5713\u300D\u3002\u5F70\u5316\u6D3E\u4EE5\u4F4E\u6EAB\u6EAB\u6CB9\u6CE1\u70B8\u3001\u9AD8\u6EAB\u6436\u9165\u6700\u70BA\u805E\u540D\u3002",
        "en": "Invented during late Qing disaster relief in Changhua using sweet potato starch to wrap seasoned pork and bamboo shoots. Now famous across Taiwan for its unique warm-oil poaching and flash-crisping.",
        "ja": "\u6E05\u671D\u672B\u671F\u306B\u6C34\u5BB3\u306E\u6551\u6E08\u98DF\u3068\u3057\u3066\u8003\u6848\u3055\u308C\u305F\u306E\u304C\u59CB\u307E\u308A\u3002\u30B5\u30C4\u30DE\u30A4\u30E2\u6FB1\u7C89\u306E\u5F3E\u529B\u3042\u308B\u751F\u5730\u306B\u8C5A\u8089\u3084\u7B4D\u3092\u5305\u307F\u3001\u6CB9\u3067\u4F4E\u6E29\u63DA\u3052\u3059\u308B\u5F70\u5316\u30B9\u30BF\u30A4\u30EB\u304C\u5168\u56FD\u3067\u611B\u3055\u308C\u3066\u3044\u307E\u3059\u3002",
        "ko": "\uCCAD\uB098\uB77C \uB9D0\uAE30 \uC218\uD574 \uAD6C\uD638 \uC74C\uC2DD\uC5D0\uC11C \uC720\uB798\uD558\uC5EC \uBC1C\uC804\uD55C \uC74C\uC2DD\uC73C\uB85C, \uCAC4\uAE43\uD55C \uACE0\uAD6C\uB9C8 \uC804\uBD84 \uD53C\uC5D0 \uACE0\uAE30\uC640 \uC8FD\uC21C\uC744 \uCC44\uC6CC \uC628\uAE30\uB984\uC5D0 \uD280\uACA8\uB0B4\uB294 \uC7A5\uD654\uC758 \uB300\uD45C \uBA85\uBB3C\uC785\uB2C8\uB2E4.",
        "vi": "Ra \u0111\u1EDDi t\u1EEB th\u1EDDi nh\xE0 Thanh, m\xF3n b\xE1nh b\u1ED9t khoai lang b\u1ECDc th\u1ECBt heo m\u0103ng t\u01B0\u01A1i h\u1EA5p r\u1ED3i chi\xEAn ng\u1EADp d\u1EA7u \u1EA5m \u0111\xE3 tr\u1EDF th\xE0nh tinh hoa \u1EA9m th\u1EF1c x\u1EE9 Ch\u01B0\u01A1ng H\xF3a."
      },
      "taiwaneseHokkien": "Bah-u\xE2n (\u3105\u311A\u02CA \u3128\u3122\u02CA)",
      "mandarinPinyin": "Zh\u0101nghu\xE0 R\xF2uyu\xE1n (\u3113\u3124 \u310F\u3128\u311A\u02CB \u3116\u3121\u02CB \u3129\u3122\u02CA)",
      "audioPronunciationText": "\u8089\u5713\u5169\u9846\uFF0C\u8981\u52A0\u8FA3\u3001\u76AE\u8981\u70B8\u9165\u4E00\u9EDE"
    },
    "ingredients": [
      {
        "id": "sweet-potato-starch",
        "name": {
          "zh-TW": "\u7D14\u5730\u74DC\u7C89\u8207\u5728\u4F86\u7C73\u7C89 (\u7C89\u76AE\u6F3F)",
          "en": "Sweet Potato Starch & Rice Flour Blend",
          "ja": "\u30B5\u30C4\u30DE\u30A4\u30E2\u6FB1\u7C89\u3068\u7C73\u7C89\u30DF\u30C3\u30AF\u30B9",
          "ko": "\uACE0\uAD6C\uB9C8 \uC804\uBD84 \uBC0F \uBA65\uC300\uAC00\uB8E8",
          "vi": "B\u1ED9t khoai lang v\xE0 b\u1ED9t g\u1EA1o t\u1EBB"
        },
        "amount": 250,
        "unitMetric": "g",
        "unitUS": "2 cups",
        "isKeyFlavor": true,
        "chineseName": "\u5730\u74DC\u7C89\u5728\u4F86\u7C73\u6F3F",
        "chinesePinyin": "D\xECgu\u0101f\u011Bn z\xE0il\xE1im\u01D0 ji\u0101ng"
      },
      {
        "id": "pork-chunks",
        "name": {
          "zh-TW": "\u53F0\u7063\u6EAB\u9AD4\u6885\u82B1\u8C6C\u8089\u584A (\u91AC\u6CB9\u4E94\u9999\u9183\u6F2C)",
          "en": "Marinated Pork Shoulder Chunks",
          "ja": "\u4E0B\u5473\u3092\u3064\u3051\u305F\u8C5A\u80A9\u30ED\u30FC\u30B9\u89D2\u5207\u308A",
          "ko": "\uC591\uB150\uD55C \uB3FC\uC9C0 \uBAA9\uC2EC \uAE4D\uB451\uC370\uAE30",
          "vi": "Th\u1ECBt n\u1EA1c vai heo \u01B0\u1EDBp ng\u0169 v\u1ECB h\u01B0\u01A1ng"
        },
        "amount": 300,
        "unitMetric": "g",
        "unitUS": "10 oz",
        "isKeyFlavor": true,
        "chineseName": "\u4E94\u9999\u8C6C\u8089\u9921",
        "chinesePinyin": "W\u01D4xi\u0101ng zh\u016Br\xF2u xi\xE0n"
      },
      {
        "id": "bamboo-shoots",
        "name": {
          "zh-TW": "\u719F\u9EBB\u7AF9\u7B4D\u4E01\u8207\u4E7E\u9999\u83C7\u4E01",
          "en": "Bamboo Shoot Cubes & Shiitake",
          "ja": "\u7B4D\u306E\u89D2\u5207\u308A\u3068\u5E72\u3057\u690E\u8338",
          "ko": "\uC8FD\uC21C \uB2E4\uC774\uC2A4 \uBC0F \uD45C\uACE0\uBC84\uC12F",
          "vi": "M\u0103ng lu\u1ED9c th\xE1i h\u1EA1t l\u1EF1u v\xE0 n\u1EA5m h\u01B0\u01A1ng"
        },
        "amount": 120,
        "unitMetric": "g",
        "unitUS": "4 oz",
        "chineseName": "\u7B4D\u4E01\u9999\u83C7",
        "chinesePinyin": "S\u01D4nd\u012Bng xi\u0101ngg\u016B"
      },
      {
        "id": "pink-sweet-sauce",
        "name": {
          "zh-TW": "\u53F0\u5F0F\u7C89\u7D05\u751C\u7C73\u91AC\u8207\u849C\u6CE5\u91AC\u6CB9",
          "en": "Taiwanese Pink Sweet Rice Sauce & Garlic Paste",
          "ja": "\u7279\u88FD\u30D4\u30F3\u30AF\u306E\u7518\u7C73\u30C0\u30EC\u3068\u30CB\u30F3\u30CB\u30AF\u91A4\u6CB9",
          "ko": "\uD551\uD06C\uBE5B \uB2EC\uCF64\uD55C \uC300 \uC18C\uC2A4 \uBC0F \uB9C8\uB298\uAC04\uC7A5",
          "vi": "S\u1ED1t h\u1ED3ng ng\u1ECDt ng\xE0o v\xE0 s\u1ED1t t\u01B0\u01A1ng t\u1ECFi"
        },
        "amount": 100,
        "unitMetric": "ml",
        "unitUS": "0.4 cup",
        "isKeyFlavor": true,
        "chineseName": "\u7C89\u7D05\u751C\u7C73\u91AC",
        "chinesePinyin": "F\u011Bnh\xF3ng ti\xE1nm\u01D0ji\xE0ng"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u716E\u5728\u4F86\u7C73\u7CCA\u4E26\u8207\u5730\u74DC\u7C89\u63C9\u52FB\u6210\u6676\u7469\u7C89\u6F3F",
          "en": "Cook Rice Slurry & Mix Sweet Potato Dough",
          "ja": "\u7C73\u7C89\u30DA\u30FC\u30B9\u30C8\u3092\u708A\u304D\u3001\u30B5\u30C4\u30DE\u30A4\u30E2\u6FB1\u7C89\u3068\u6DF7\u305C\u308B",
          "ko": "\uC300\uD480\uC744 \uC464\uC5B4 \uACE0\uAD6C\uB9C8 \uC804\uBD84\uACFC \uC11E\uC5B4 \uBC18\uC8FD \uB9CC\uB4E4\uAE30",
          "vi": "N\u1EA5u h\u1ED3 b\u1ED9t g\u1EA1o r\u1ED3i tr\u1ED9n \u0111\u1EC1u b\u1ED9t khoai lang t\u1EA1o h\u1ED7n h\u1EE3p d\u1EBBo dai"
        },
        "instruction": {
          "zh-TW": "\u5728\u4F86\u7C73\u7C89\u52A0\u6C34\u716E\u6210\u6FC3\u7A20\u7C73\u7CCA\uFF0C\u653E\u6DBC\u5F8C\u8207\u5730\u74DC\u7C89\u3001\u592A\u767D\u7C89\u5FB9\u5E95\u62CC\u52FB\uFF0C\u8ABF\u6210\u6FC3\u7A20\u67D4\u6ED1\u7684\u534A\u900F\u660E\u751F\u7C89\u6F3F\u3002",
          "en": "Cook rice flour with water into paste. Cool and mix thoroughly with sweet potato starch into a thick smooth batter.",
          "ja": "\u7C73\u7C89\u3068\u6C34\u3092\u5F31\u706B\u3067\u7DF4\u308A\u3001\u51B7\u307E\u3057\u3066\u304B\u3089\u30B5\u30C4\u30DE\u30A4\u30E2\u7C89\u3092\u6DF7\u305C\u5408\u308F\u305B\u3066\u6ED1\u3089\u304B\u306A\u751F\u5730\u3092\u4F5C\u308A\u307E\u3059\u3002",
          "ko": "\uBA65\uC300\uAC00\uB8E8\uB85C \uD480\uC744 \uC468 \uB4A4 \uC2DD\uD600 \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC744 \uC11E\uC5B4 \uCC30\uC9C4 \uBC18\uC8FD\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "N\u1EA5u b\u1ED9t g\u1EA1o v\u1EDBi n\u01B0\u1EDBc th\xE0nh h\u1ED3 \u0111\u1EB7c, \u0111\u1EC3 ngu\u1ED9i tr\u1ED9n c\xF9ng b\u1ED9t khoai lang cho d\u1EBBo qu\xE1nh."
        },
        "durationSeconds": 600,
        "image": "/images/taiwan-ba-wan-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u5C0F\u789F\u62B9\u6CB9\u586B\u6F3F\u3001\u5305\u5165\u7B4D\u4E01\u8089\u9921\u5C01\u53E3",
          "en": "Fill Saucers with Batter, Add Meat Filling & Seal",
          "ja": "\u5C0F\u76BF\u306B\u751F\u5730\u3092\u6577\u304D\u3001\u7B4D\u3068\u8089\u9921\u3092\u8A70\u3081\u3066\u5305\u3080",
          "ko": "\uC791\uC740 \uC885\uC9C0\uC5D0 \uBC18\uC8FD\uC744 \uAE54\uACE0 \uACE0\uAE30\uC18C\uB97C \uB123\uC5B4 \uAC10\uC2F8\uAE30",
          "vi": "Qu\xE9t d\u1EA7u v\xE0o ch\xE9n nh\u1ECF, tr\xE1ng b\u1ED9t r\u1ED3i cho nh\xE2n th\u1ECBt m\u0103ng v\xE0o b\u1ECDc k\xEDn"
        },
        "instruction": {
          "zh-TW": "\u6DFA\u789F\u5857\u8584\u6CB9\uFF0C\u62B9\u4E0A\u4E00\u5927\u5319\u7C89\u6F3F\uFF0C\u653E\u4E0A\u5927\u584A\u9183\u8C6C\u8089\u3001\u7B4D\u4E01\u8207\u9999\u83C7\uFF0C\u518D\u8986\u84CB\u4E00\u5C64\u7C89\u6F3F\u5C07\u9921\u6599\u5B8C\u5168\u5305\u8986\u62B9\u5713\u3002",
          "en": "Coat small saucer with oil, spread a layer of batter, place meat & bamboo shoots, then top with another layer of batter to seal.",
          "ja": "\u5C0F\u76BF\u306B\u6CB9\u3092\u5857\u308A\u3001\u751F\u5730\u3092\u6577\u3044\u3066\u8089\u9921\u3068\u7B4D\u3092\u306E\u305B\u3001\u4E0A\u304B\u3089\u3055\u3089\u306B\u751F\u5730\u3092\u304B\u3076\u305B\u3066\u4E38\u304F\u5305\u307F\u8FBC\u307F\u307E\u3059\u3002",
          "ko": "\uC885\uC9C0\uC5D0 \uAE30\uB984\uC744 \uBC14\uB974\uACE0 \uBC18\uC8FD\uC744 \uAE50 \uB4A4 \uACE0\uAE30\uC18C\uB97C \uC5B9\uACE0 \uB2E4\uC2DC \uBC18\uC8FD\uC744 \uB36E\uC5B4 \uB465\uAE00\uAC8C \uBC00\uBD09\uD569\uB2C8\uB2E4.",
          "vi": "Thoa d\u1EA7u v\xE0o ch\xE9n, m\xFAc b\u1ED9t l\xF3t \u0111\xE1y, cho nh\xE2n th\u1ECBt m\u0103ng v\xE0o r\u1ED3i m\xFAc th\xEAm l\u1EDBp b\u1ED9t ph\u1EE7 k\xEDn m\u1EB7t."
        },
        "durationSeconds": 600,
        "image": "/images/taiwan-ba-wan-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u5927\u706B\u84B8 15 \u5206\u9418\u81F3\u6676\u7469\u900F\u4EAE\u5B9A\u578B",
          "en": "Steam on High Heat for 15 Mins until Translucent",
          "ja": "\u5F37\u706B\u306715\u5206\u84B8\u3057\u3066\u534A\u900F\u660E\u306B\u56FA\u3081\u308B",
          "ko": "\uC13C \uBD88\uC5D0\uC11C 15\uBD84\uAC04 \uCA84\uC11C \uD22C\uBA85\uD558\uAC8C \uAD73\uD788\uAE30",
          "vi": "H\u1EA5p l\u1EEDa l\u1EDBn 15 ph\xFAt cho v\u1ECF b\xE1nh chuy\u1EC3n trong su\u1ED1t"
        },
        "instruction": {
          "zh-TW": "\u653E\u5165\u84B8\u7C60\u5927\u706B\u84B8 15 \u5206\u9418\uFF0C\u8089\u5713\u5916\u76AE\u7531\u767D\u8F49\u70BA\u534A\u900F\u660E\u6676\u7469Q\u5F48\u72C0\uFF0C\u51FA\u7210\u7A0D\u5FAE\u653E\u6DBC\u812B\u6A21\u3002",
          "en": "Steam in steamer on high for 15 mins until skin turns glossy translucent and chewy. Cool slightly and unmold.",
          "ja": "\u84B8\u3057\u5668\u3067\u5F37\u706B15\u5206\u84B8\u3057\u3001\u751F\u5730\u304C\u900F\u660E\u3067\u30D7\u30EB\u30D7\u30EB\u306B\u306A\u3063\u305F\u3089\u53D6\u308A\u51FA\u3057\u3066\u51B7\u307E\u3057\u307E\u3059\u3002",
          "ko": "\uCC1C\uAE30\uC5D0 \uB123\uACE0 \uC13C \uBD88\uC5D0\uC11C 15\uBD84\uAC04 \uCA84\uC11C \uD53C\uAC00 \uD22C\uBA85\uD574\uC9C0\uBA74 \uAEBC\uB0B4\uC5B4 \uD55C \uAE40 \uC2DD\uD799\uB2C8\uB2E4.",
          "vi": "\u0110\u1EB7t v\xE0o x\u1EEDng h\u1EA5p l\u1EEDa l\u1EDBn 15 ph\xFAt \u0111\u1EBFn khi v\u1ECF b\xE1nh trong veo d\u1EBBo qu\xE1nh th\xEC l\u1EA5y ra g\u1EE1 kh\u1ECFi ch\xE9n."
        },
        "durationSeconds": 900,
        "image": "/images/taiwan-ba-wan-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u6EAB\u6CB9\u6162\u6D78\u70B8\u9165\u3001\u526A\u958B\u6DCB\u4E0A\u7C89\u7D05\u751C\u91AC\uFF01",
          "en": "Warm Oil Poach, Snip Open & Drizzle Sweet Sauce",
          "ja": "\u4F4E\u6E29\u6CB9\u3067\u3058\u3063\u304F\u308A\u63DA\u3052\u3001\u30CF\u30B5\u30DF\u3067\u5207\u308A\u8FBC\u307F\u3092\u5165\u308C\u3066\u30BF\u30EC\u3092\u304B\u3051\u308B\uFF01",
          "ko": "\uC628\uAE30\uB984\uC5D0 \uD280\uACA8 \uAC00\uC704\uB85C \uC790\uB974\uACE0 \uD2B9\uC81C \uC18C\uC2A4 \uBFCC\uB824 \uC644\uC131\uD558\uAE30!",
          "vi": "Chi\xEAn ng\u1EADp d\u1EA7u \u1EA5m cho gi\xF2n v\u1ECF, c\u1EAFt ch\u1EEF th\u1EADp v\xE0 r\u01B0\u1EDBi s\u1ED1t h\u1ED3ng!"
        },
        "instruction": {
          "zh-TW": "\u5C07\u84B8\u719F\u7684\u8089\u5713\u653E\u5165 100\xB0C \u6EAB\u6CB9\u934B\u4E2D\u6162\u6D78\u6CE1\u70B8 3 \u5206\u9418\uFF0C\u6700\u5F8C\u62C9\u9AD8\u6CB9\u6EAB\u70B8\u51FA\u5FAE\u9165\u5916\u76AE\u3002\u6488\u8D77\u701D\u6CB9\u5165\u7897\uFF0C\u7528\u526A\u5200\u526A\u51FA\u5341\u5B57\u958B\u53E3\uFF0C\u6DCB\u4E0A\u9748\u9B42\u7C89\u7D05\u751C\u7C73\u91AC\u3001\u849C\u6CE5\u8207\u9999\u83DC\uFF01",
          "en": "Poach steamed Ba-Wan in 100\xB0C warm oil for 3 mins, then flash high heat for crispy crust. Snip top in a cross pattern, ladle pink sweet sauce, garlic & cilantro!",
          "ja": "100\u2103\u306E\u306C\u308B\u3081\u306E\u6CB9\u30673\u5206\u3058\u3063\u304F\u308A\u63DA\u3052\u3001\u30CF\u30B5\u30DF\u3067\u5341\u5B57\u306B\u5207\u308A\u8FBC\u307F\u3092\u5165\u308C\u3066\u7518\u30C0\u30EC\u3068\u30CB\u30F3\u30CB\u30AF\u91A4\u6CB9\u3092\u305F\u3063\u3077\u308A\u304B\u3051\u3066\u5B8C\u6210\uFF01",
          "ko": "100\xB0C \uC628\uAE30\uB984\uC5D0 3\uBD84\uAC04 \uBD80\uB4DC\uB7FD\uAC8C \uD280\uAE34 \uB4A4 \uADF8\uB987\uC5D0 \uB2F4\uC544 \uAC00\uC704\uB85C \uC2ED\uC790 \uBAA8\uC591\uC744 \uB0B4\uACE0 \uB2EC\uCF64\uD55C \uD551\uD06C \uC18C\uC2A4\uC640 \uB9C8\uB298\uC744 \uBD80\uC5B4 \uBA39\uC2B5\uB2C8\uB2E4.",
          "vi": "Th\u1EA3 b\xE1nh v\xE0o ch\u1EA3o d\u1EA7u 100\xB0C chi\xEAn nh\u1ECF l\u1EEDa 3 ph\xFAt cho ph\u1ED3ng gi\xF2n v\u1ECF. V\u1EDBt ra b\xE1t d\xF9ng k\xE9o c\u1EAFt ch\u1EEF th\u1EADp r\u1ED3i chan \u0111\u1EABm s\u1ED1t h\u1ED3ng ng\u1ECDt v\xE0 t\u1ECFi b\u0103m ng\xF2 r\xED!"
        },
        "durationSeconds": 240,
        "image": "/images/taiwan-ba-wan-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "skin-hard",
        "problem": {
          "zh-TW": "\u8089\u5713\u76AE\u5403\u8D77\u4F86\u786C\u786C\u7684\u6C92\u6709\u5F48\u6027\uFF1F",
          "en": "Why is the Ba-Wan skin hard and not chewy?",
          "ja": "\u8089\u5713\u306E\u76AE\u304C\u56FA\u304F\u3066\u30E2\u30C1\u30E2\u30C1\u3057\u306A\u3044\uFF1F",
          "ko": "\uBC14\uC644 \uD53C\uAC00 \uB531\uB531\uD558\uACE0 \uCAC4\uAE43\uD558\uC9C0 \uC54A\uB098\uC694?",
          "vi": "V\u1ECF b\xE1nh b\u1ECB c\u1EE9ng kh\xF4ng c\xF3 \u0111\u1ED9 d\u1EBBo dai?"
        },
        "cause": {
          "zh-TW": "\u5730\u74DC\u7C89\u6BD4\u4F8B\u904E\u4F4E\u6216\u6C92\u6709\u7528\u5728\u4F86\u7C73\u7CCA\u71D9\u719F\u719F\u5316\u7C89\u5FC3\u3002",
          "en": "Not enough sweet potato starch or rice paste wasn't pre-cooked.",
          "ja": "\u30B5\u30C4\u30DE\u30A4\u30E2\u6FB1\u7C89\u306E\u6BD4\u7387\u304C\u4F4E\u3044\u304B\u3001\u7C73\u7C89\u306E\u52A0\u71B1\u4E0D\u8DB3\u3067\u3059\u3002",
          "ko": "\uACE0\uAD6C\uB9C8 \uC804\uBD84 \uBE44\uC728\uC774 \uB0AE\uAC70\uB098 \uC300\uD480\uC774 \uB35C \uC775\uC5C8\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "T\u1EF7 l\u1EC7 b\u1ED9t khoai lang qu\xE1 \xEDt ho\u1EB7c h\u1ED3 b\u1ED9t g\u1EA1o ch\u01B0a ch\xEDn k\u1EF9."
        },
        "solution": {
          "zh-TW": "\u56B4\u683C\u9075\u5FAA\u7D14\u5730\u74DC\u7C89\u642D\u914D\u71D9\u5728\u4F86\u7C73\u7CCA\uFF0C\u7C89\u6F3F\u5448\u900F\u660E\u6FC3\u7A20\u72C0\uFF0C\u84B8\u719F\u5F8C\u53E3\u611F\u6975\u81F4\u8EDFQ\uFF01",
          "en": "Use authentic coarse sweet potato starch mixed into hot cooked rice paste!",
          "ja": "\u71B1\u3044\u7C73\u7C89\u30DA\u30FC\u30B9\u30C8\u306B\u30B5\u30C4\u30DE\u30A4\u30E2\u6FB1\u7C89\u3092\u7DF4\u308A\u8FBC\u307F\u3001\u84B8\u3057\u4E0A\u3052\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uB728\uAC70\uC6B4 \uC300\uD480\uC5D0 \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC744 \uC11E\uC5B4 \uCA84\uB0B4\uBA74 \uADF9\uC0C1\uC758 \uCAC4\uAE43\uD568\uC774 \uC644\uC131\uB429\uB2C8\uB2E4!",
          "vi": "D\xF9ng \u0111\xFAng b\u1ED9t khoai lang nguy\xEAn ch\u1EA5t nh\xE0o v\u1EDBi h\u1ED3 b\u1ED9t g\u1EA1o n\xF3ng \u0111\u1EC3 v\u1ECF b\xE1nh d\u1EBBo trong."
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u8001\u9955\u5403\u6CD5\u662F\u7528\u6241\u7AF9\u7C64\u5C07\u8089\u5713\u5341\u5B57\u5283\u958B\uFF0C\u5148\u5403\u5438\u98FD\u7C89\u7D05\u91AC\u6C41\u7684Q\u5F48\u5916\u76AE\uFF0C\u6700\u5F8C\u8089\u9921\u7559\u5728\u7897\u5E95\u52A0\u9AD8\u6E6F\u559D\u5B8C\uFF01",
        "en": "Eat the chewy skin first with the sweet pink sauce, then pour hot broth into leftover filling to drink!",
        "ja": "\u5341\u5B57\u306B\u5207\u3063\u3066\u76AE\u3092\u30BF\u30EC\u3067\u5473\u308F\u3063\u305F\u5F8C\u3001\u6B8B\u3063\u305F\u5177\u306B\u71B1\u3044\u30B9\u30FC\u30D7\u3092\u6CE8\u3044\u3067\u98F2\u3080\u306E\u304C\u901A\u306E\u697D\u3057\u307F\u65B9\uFF01",
        "ko": "\uCAC4\uAE43\uD55C \uAECD\uC9C8\uC744 \uBA3C\uC800 \uC18C\uC2A4\uC640 \uC990\uAE34 \uB4A4 \uB0A8\uC740 \uACE0\uAE30\uC18C\uC5D0 \uB728\uAC70\uC6B4 \uC721\uC218\uB97C \uBD80\uC5B4 \uB9C8\uC2DC\uB294 \uAC83\uC774 \uC804\uD1B5\uC785\uB2C8\uB2E4!",
        "vi": "Th\u01B0\u1EDFng th\u1EE9c l\u1EDBp v\u1ECF d\u1EBBo ng\u1EADp s\u1ED1t tr\u01B0\u1EDBc, sau \u0111\xF3 chan n\u01B0\u1EDBc d\xF9ng n\xF3ng v\xE0o ph\u1EA7n nh\xE2n c\xF2n l\u1EA1i trong b\xE1t \u0111\u1EC3 h\xFAp tr\u1ECDn v\u1EB9n!"
      }
    ]
  },
  {
    "id": "giant-chicken-cutlet",
    "slug": "giant-chicken-cutlet",
    "title": {
      "zh-TW": "\u58EB\u6797\u591C\u5E02\u8C6A\u5927\u5927\u96DE\u6392",
      "en": "Giant Taiwanese Fried Chicken Cutlet",
      "ja": "\u58EB\u6797\u591C\u5E02\u540D\u7269 \u5DE8\u5927\u30D5\u30E9\u30A4\u30C9\u30C1\u30AD\u30F3\uFF08\u5927\u9D8F\u6392\uFF09",
      "ko": "\uC2A4\uB9B0 \uC57C\uC2DC\uC7A5 \uC5BC\uAD74\uBCF4\uB2E4 \uD070 \uC9C0\uD30C\uC774 (\uB300\uC655 \uB2ED\uAC00\uC2B4\uC0B4 \uD280\uAE40)",
      "vi": "G\xE0 r\xE1n kh\u1ED5ng l\u1ED3 ch\u1EE3 \u0111\xEAm Shilin (Ji Pai)"
    },
    "subtitle": {
      "zh-TW": "\u6BD4\u81C9\u9084\u5927\u30FB\u9BAE\u5AE9\u7206\u6C41\u539A\u5207\u30FB\u7C97\u9846\u7C92\u5730\u74DC\u7C89\u9165\u8106\u5916\u8863",
      "en": "Bigger Than Your Face, Juicy Thick Cut & Crunchy Tapioca Crust",
      "ja": "\u9854\u3088\u308A\u5927\u304D\u3044\u7279\u5927\u30B5\u30A4\u30BA\u30FB\u8089\u6C41\u30B8\u30E5\u30EF\u30C3\u30FB\u7C97\u633D\u304D\u5730\u74DC\u7C89\u306E\u30B6\u30AF\u30B6\u30AF\u8863",
      "ko": "\uC5BC\uAD74\uBCF4\uB2E4 \uD070 \uC555\uB3C4\uC801 \uD06C\uAE30, \uCD09\uCD09\uD55C \uC721\uC999\uACFC \uD0C0\uD53C\uC624\uCE74 \uC804\uBD84\uC758 \uBC14\uC0AD\uD55C \uD280\uAE40\uC637",
      "vi": "K\xEDch th\u01B0\u1EDBc kh\u1ED5ng l\u1ED3 si\xEAu to, th\u1ECBt m\u1EC1m m\u1ECDng n\u01B0\u1EDBc c\xF9ng l\u1EDBp v\u1ECF b\u1ED9t khoai lang gi\xF2n tan"
    },
    "tagline": {
      "zh-TW": "\u540D\u63DA\u5168\u7403\u7684\u591C\u5E02\u795E\u8A71\uFF01\u96D9\u624B\u63E1\u4E0D\u4F4F\u7684\u9165\u8106\u72C2\u6F6E\u8207\u4E94\u9999\u6912\u9E7D\u9999",
      "en": "The worldwide night market phenomenon: unbeatable size, crunch, and aroma",
      "ja": "\u53F0\u6E7E\u591C\u5E02\u3068\u3044\u3048\u3070\u30B3\u30EC\uFF01\u4E21\u624B\u3067\u3082\u53CE\u307E\u3089\u306A\u3044\u8FEB\u529B\u6E80\u70B9\u306E\u770B\u677F\u30B0\u30EB\u30E1",
      "ko": "\uC138\uACC4\uC801\uC73C\uB85C \uC720\uBA85\uD55C \uB300\uB9CC \uC57C\uC2DC\uC7A5\uC758 \uC0C1\uC9D5! \uD55C \uC190\uC5D0 \uC950\uAE30 \uD798\uB4E4 \uB9CC\uD07C \uAC70\uB300\uD55C \uBC14\uC0AD\uD568",
      "vi": "C\u01A1n s\u1ED1t \u1EA9m th\u1EF1c \u0111\u01B0\u1EDDng ph\u1ED1 to\xE0n c\u1EA7u v\u1EDBi h\u01B0\u01A1ng th\u01A1m n\u1EE9c m\u0169i c\u1EE7a ti\xEAu ng\u0169 v\u1ECB"
    },
    "heroImage": "/images/taiwan-chicken-cutlet-hero.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 12,
    "defaultServings": 2,
    "caloriesPerServing": 680,
    "category": "fried",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional",
      "airFryer"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5317\u58EB\u6797 / \u53F0\u4E2D\u4E00\u4E2D\u8857",
        "en": "Taipei Shilin / Taichung Yizhong",
        "ja": "\u53F0\u5317\u58EB\u6797 / \u53F0\u4E2D\u4E00\u4E2D\u8857",
        "ko": "\uD0C0\uC774\uBCA0\uC774 \uC2A4\uB9B0 / \uD0C0\uC774\uC911 \uC774\uC911\uC81C",
        "vi": "Shilin \u0110\xE0i B\u1EAFc / Yizhong \u0110\xE0i Trung"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u58EB\u6797\u591C\u5E02",
          "en": "Shilin Night Market",
          "ja": "\u58EB\u6797\u591C\u5E02",
          "ko": "\uC2A4\uB9B0 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Shilin"
        },
        {
          "zh-TW": "\u4E00\u4E2D\u8857\u591C\u5E02",
          "en": "Yizhong Night Market",
          "ja": "\u4E00\u4E2D\u8857\u591C\u5E02",
          "ko": "\uC774\uC911\uC81C \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Yizhong"
        }
      ],
      "historyStory": {
        "zh-TW": "1990\u5E74\u4EE3\u8D77\u5728\u53F0\u5317\u58EB\u6797\u591C\u5E02\u8208\u8D77\uFF0C\u5C07\u6574\u584A\u65B0\u9BAE\u5E36\u9AA8\u5927\u96DE\u80F8\u8089\u9023\u540C\u8774\u8776\u5200\u6A6B\u5256\u5C55\u958B\uFF0C\u5448\u73FE\u9A5A\u4EBA\u7684\u5DE8\u7121\u9738\u9762\u7A4D\u3002\u7D93\u4E94\u9999\u3001\u8089\u6842\u3001\u849C\u7C89\u3001\u7C73\u915224\u5C0F\u6642\u9183\u88FD\u5165\u5473\uFF0C\u88F9\u4E0A\u7C97\u9846\u7C92\u5730\u74DC\u7C89\u9165\u70B8\uFF0C\u6210\u70BA\u53F0\u7063\u591C\u5E02\u6700\u5F15\u4EE5\u70BA\u50B2\u7684\u570B\u6C11\u70B8\u7269\u3002",
        "en": "Originating in Shilin Night Market in the 1990s, butterflying a whole chicken breast into a massive cutlet marinated in five-spice and garlic, coated in coarse tapioca starch and fried golden.",
        "ja": "1990\u5E74\u4EE3\u306B\u58EB\u6797\u591C\u5E02\u3067\u5E83\u307E\u3063\u305F\u3001\u9D8F\u3080\u306D\u8089\u3092\u89B3\u97F3\u958B\u304D\u306B\u3057\u3066\u7279\u5927\u30B5\u30A4\u30BA\u306B\u4ED5\u4E0A\u3052\u308B\u30D5\u30E9\u30A4\u30C9\u30C1\u30AD\u30F3\u3002\u4E94\u9999\u7C89\u3084\u30CB\u30F3\u30CB\u30AF\u3067\u4E0B\u5473\u3092\u3064\u3051\u3001\u5730\u74DC\u7C89\u3067\u30B6\u30AF\u30C3\u3068\u63DA\u3052\u307E\u3059\u3002",
        "ko": "1990\uB144\uB300 \uC2A4\uB9B0 \uC57C\uC2DC\uC7A5\uC5D0\uC11C \uC2DC\uC791\uB418\uC5B4 \uB2ED\uAC00\uC2B4\uC0B4\uC744 \uB113\uAC8C \uD3B4\uC11C \uB9C8\uB298\uACFC \uC624\uD5A5 \uAC00\uB8E8\uC5D0 \uC7AC\uC6B4 \uB4A4 \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC73C\uB85C \uBC14\uC0AD\uD558\uAC8C \uD280\uACA8\uB0B8 \uB300\uB9CC\uC758 \uB300\uD45C \uAC04\uC2DD\uC785\uB2C8\uB2E4.",
        "vi": "B\u1EAFt ngu\u1ED3n t\u1EEB ch\u1EE3 \u0111\xEAm Shilin th\u1EADp ni\xEAn 1990, mi\u1EBFng \u1EE9c g\xE0 \u0111\u01B0\u1EE3c l\u1EA1ng m\u1ECFng to b\u1EA3n \u01B0\u1EDBp \u0111\u1EABm ng\u0169 v\u1ECB t\u1ECFi r\u01B0\u1EE3u r\u1ED3i t\u1EA9m b\u1ED9t chi\xEAn v\xE0ng gi\xF2n r\u1EE5m."
      },
      "taiwaneseHokkien": "Ke-phai (\u310D\u311F \u3106\u311E\u02CB)",
      "mandarinPinyin": "H\xE1o D\xE0 J\u012Bp\xE1i (\u310F\u3120\u02CA \u3109\u311A\u02CB \u3110\u3127 \u3106\u311E\u02CA)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u5927\u96DE\u6392\u4E00\u4EFD\u8981\u8FA3\u3001\u4E0D\u5207\uFF01"
    },
    "ingredients": [
      {
        "id": "chicken-breast",
        "name": {
          "zh-TW": "\u7279\u5927\u5E36\u9AA8\u5927\u96DE\u80F8\u8089 (\u8774\u8776\u5200\u5256\u958B)",
          "en": "Giant Chicken Breast (Butterflied)",
          "ja": "\u7279\u5927\u9D8F\u3080\u306D\u8089\uFF08\u89B3\u97F3\u958B\u304D\uFF09",
          "ko": "\uB300\uD615 \uB2ED\uAC00\uC2B4\uC0B4 (\uB113\uAC8C \uD3B4\uAE30)",
          "vi": "\u1EE8c g\xE0 b\u1EA3n to kh\u1ED5ng l\u1ED3 l\u1EA1ng m\u1ECFng"
        },
        "amount": 400,
        "unitMetric": "g",
        "unitUS": "14 oz",
        "isKeyFlavor": true,
        "chineseName": "\u5927\u96DE\u80F8\u8089",
        "chinesePinyin": "J\u012Bxi\u014Dng r\xF2u"
      },
      {
        "id": "coarse-sweet-potato-starch",
        "name": {
          "zh-TW": "\u7C97\u9846\u7C92\u5730\u74DC\u7C89 (\u6728\u85AF\u6FB1\u7C89)",
          "en": "Coarse Sweet Potato / Tapioca Starch",
          "ja": "\u7C97\u633D\u304D\u30B5\u30C4\u30DE\u30A4\u30E2\u6FB1\u7C89\uFF08\u5730\u74DC\u7C89\uFF09",
          "ko": "\uAD75\uC740 \uACE0\uAD6C\uB9C8/\uD0C0\uD53C\uC624\uCE74 \uC804\uBD84",
          "vi": "B\u1ED9t khoai lang h\u1EA1t th\xF4"
        },
        "amount": 150,
        "unitMetric": "g",
        "unitUS": "1.2 cups",
        "isKeyFlavor": true,
        "chineseName": "\u7C97\u5730\u74DC\u7C89",
        "chinesePinyin": "C\u016B d\xECgu\u0101f\u011Bn"
      },
      {
        "id": "marinade-spice",
        "name": {
          "zh-TW": "\u4E94\u9999\u849C\u9999\u9183\u91AC (\u849C\u6CE5+\u91AC\u6CB9+\u7C73\u9152+\u4E94\u9999\u7C89+\u8089\u6842\u7C89+\u7CD6)",
          "en": "Five-Spice Garlic Marinade Blend",
          "ja": "\u7279\u88FD\u4E94\u9999\u30AC\u30FC\u30EA\u30C3\u30AF\u6F2C\u3051\u30C0\u30EC",
          "ko": "\uC624\uD5A5 \uB9C8\uB298 \uAC04\uC7A5 \uC591\uB150",
          "vi": "N\u01B0\u1EDBc s\u1ED1t \u01B0\u1EDBp t\u1ECFi ng\u0169 v\u1ECB h\u01B0\u01A1ng"
        },
        "amount": 60,
        "unitMetric": "ml",
        "unitUS": "4 tbsp",
        "isKeyFlavor": true,
        "chineseName": "\u4E94\u9999\u9183\u6599",
        "chinesePinyin": "W\u01D4xi\u0101ng y\u0101nli\xE0o"
      },
      {
        "id": "pepper-salt",
        "name": {
          "zh-TW": "\u53F0\u7063\u7279\u88FD\u4E2D\u85E5\u80E1\u6912\u9E7D\u8207\u8FA3\u6912\u7C89",
          "en": "Taiwanese Spiced Pepper Salt & Chili Powder",
          "ja": "\u53F0\u6E7E\u7279\u88FD\u30B9\u30D1\u30A4\u30B9\u80E1\u6912\u5869\u3068\u5510\u8F9B\u5B50\u7C89",
          "ko": "\uB300\uB9CC \uD2B9\uC81C \uD55C\uBC29 \uD6C4\uCD94\uC18C\uAE08 \uBC0F \uACE0\uCDA7\uAC00\uB8E8",
          "vi": "Mu\u1ED1i ti\xEAu th\u1EA3o m\u1ED9c v\xE0 b\u1ED9t \u1EDBt"
        },
        "amount": 15,
        "unitMetric": "g",
        "unitUS": "1 tbsp",
        "chineseName": "\u80E1\u6912\u9E7D\u8FA3\u6912\u7C89",
        "chinesePinyin": "H\xFAji\u0101oy\xE1n"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u8774\u8776\u5200\u6A6B\u5256\u5927\u96DE\u80F8\u8089\u4E26\u62CD\u9B06\u65B7\u7B4B",
          "en": "Butterfly Chicken Breast & Tenderize",
          "ja": "\u9D8F\u3080\u306D\u8089\u3092\u89B3\u97F3\u958B\u304D\u306B\u3057\u3001\u8089\u53E9\u304D\u3067\u5E83\u3052\u308B",
          "ko": "\uB2ED\uAC00\uC2B4\uC0B4\uC744 \uD3EC \uB5A0\uC11C \uB113\uAC8C \uD3BC\uCE58\uACE0 \uB450\uB4DC\uB9AC\uAE30",
          "vi": "L\u1EA1ng m\u1ECFng \u1EE9c g\xE0 h\xECnh c\xE1nh b\u01B0\u1EDBm v\xE0 d\u1EA7n m\u1EC1m"
        },
        "instruction": {
          "zh-TW": "\u5C07\u539A\u5BE6\u5927\u96DE\u80F8\u8089\u5F9E\u5074\u9762\u7528\u5200\u6A6B\u5411\u5207\u958B\u4E0D\u5207\u65B7\uFF0C\u5411\u5169\u5074\u6524\u5E73\u5C55\u958B\u6210\u6BD4\u81C9\u5927\u7684\u5DE8\u578B\u8584\u7247\u3002\u7528\u8089\u69CC\u5747\u52FB\u6572\u6253\u62CD\u9B06\uFF0C\u7834\u58DE\u8089\u8CEA\u7E96\u7DAD\u4F7F\u8089\u8CEA\u8EDF\u5AE9\u591A\u6C41\u3002",
          "en": "Slice chicken breast horizontally from the thick side almost all the way through, open like a book. Gently pound with meat mallet until uniformly thin.",
          "ja": "\u9D8F\u8089\u306E\u539A\u3044\u90E8\u5206\u304B\u3089\u6A2A\u306B\u5305\u4E01\u3092\u5165\u308C\u3066\u89B3\u97F3\u958B\u304D\u306B\u3057\u3001\u8089\u53E9\u304D\u3067\u53E9\u3044\u3066\u5747\u4E00\u306E\u539A\u3055\u306B\u5E83\u3052\u307E\u3059\u3002",
          "ko": "\uB2ED\uAC00\uC2B4\uC0B4 \uCE21\uBA74\uC744 \uD3EC \uB5A0\uC11C \uB113\uAC8C \uD3BC\uCE5C \uD6C4 \uACE0\uAE30\uB9DD\uCE58\uB85C \uACE8\uACE0\uB8E8 \uB450\uB4DC\uB824 \uC587\uACE0 \uBD80\uB4DC\uB7FD\uAC8C \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "D\xF9ng dao l\u1EA1ng ngang th\xE2n mi\u1EBFng \u1EE9c g\xE0 m\u1EDF r\u1ED9ng h\xECnh c\xE1nh b\u01B0\u1EDBm, d\u1EA7n nh\u1EB9 cho m\u1ECFng \u0111\u1EC1u v\xE0 m\u1EC1m th\u1ECBt."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-chicken-cutlet-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u7279\u88FD\u4E94\u9999\u849C\u6CE5\u91AC\u6C41\u6DF1\u5C64\u9183\u6F2C\u5165\u5473",
          "en": "Marinate in Five-Spice Garlic Sauce",
          "ja": "\u7279\u88FD\u4E94\u9999\u30C0\u30EC\u306B\u6F2C\u3051\u8FBC\u3093\u3067\u5473\u3092\u67D3\u307F\u8FBC\u307E\u305B\u308B",
          "ko": "\uC624\uD5A5 \uB9C8\uB298 \uC591\uB150\uC5D0 \uC7AC\uC6CC \uAE4A\uC740 \uD48D\uBBF8 \uC785\uD788\uAE30",
          "vi": "\u01AF\u1EDBp \u0111\u1EABm s\u1ED1t t\u1ECFi ng\u0169 v\u1ECB h\u01B0\u01A1ng cho ng\u1EA5m s\xE2u"
        },
        "instruction": {
          "zh-TW": "\u5C07\u96DE\u6392\u6D78\u5165\u849C\u6CE5\u3001\u91AC\u6CB9\u818F\u3001\u7C73\u9152\u3001\u4E94\u9999\u7C89\u3001\u767D\u80E1\u6912\u7C89\u3001\u8089\u6842\u7C89\u8207\u5C11\u8A31\u7CD6\u8ABF\u88FD\u7684\u9183\u6599\u4E2D\uFF0C\u6293\u634F\u6309\u6469 5 \u5206\u9418\uFF0C\u51B7\u85CF\u9183\u6F2C\u81F3\u5C11 2 \u5C0F\u6642\uFF08\u9694\u591C\u98A8\u5473\u66F4\u4F73\uFF09\u3002",
          "en": "Massage chicken with garlic paste, soy sauce, rice wine, five-spice, white pepper, cinnamon and sugar. Chill in fridge for at least 2 hours or overnight.",
          "ja": "\u30CB\u30F3\u30CB\u30AF\u3001\u91A4\u6CB9\u3001\u9152\u3001\u4E94\u9999\u7C89\u3001\u30B3\u30B7\u30E7\u30A6\u306A\u3069\u306E\u8ABF\u5473\u6599\u3067\u3088\u304F\u63C9\u307F\u8FBC\u307F\u3001\u51B7\u8535\u5EAB\u30672\u6642\u9593\u4EE5\u4E0A\u6F2C\u3051\u8FBC\u307F\u307E\u3059\u3002",
          "ko": "\uB9C8\uB298, \uAC04\uC7A5, \uB9DB\uC220, \uC624\uD5A5\uBD84, \uD6C4\uCD94\uB97C \uB123\uACE0 5\uBD84\uAC04 \uC8FC\uBB34\uB978 \uB4A4 \uB0C9\uC7A5\uC2E4\uC5D0\uC11C 2\uC2DC\uAC04 \uC774\uC0C1 \uC219\uC131\uD569\uB2C8\uB2E4.",
          "vi": "B\xF3p \u0111\u1EC1u th\u1ECBt g\xE0 v\u1EDBi t\u1ECFi, n\u01B0\u1EDBc t\u01B0\u01A1ng, r\u01B0\u1EE3u, ng\u0169 v\u1ECB h\u01B0\u01A1ng, qu\u1EBF v\xE0 ti\xEAu. \u0110\u1EC3 t\u1EE7 l\u1EA1nh \u01B0\u1EDBp \xEDt nh\u1EA5t 2 ti\u1EBFng."
        },
        "durationSeconds": 7200,
        "image": "/images/taiwan-chicken-cutlet-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u58D3\u88F9\u7C97\u9846\u7C92\u5730\u74DC\u7C89\u4E26\u975C\u7F6E\u53CD\u6F6E",
          "en": "Dredge in Coarse Tapioca Starch & Rest to Hydrate",
          "ja": "\u7C97\u633D\u304D\u5730\u74DC\u7C89\u3092\u3057\u3063\u304B\u308A\u307E\u3076\u3057\u3001\u7C89\u3092\u99B4\u67D3\u307E\u305B\u308B",
          "ko": "\uAD75\uC740 \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC744 \uAF3C\uAF3C\uD788 \uBB3B\uD788\uACE0 \uC218\uBD84 \uD761\uC218\uC2DC\uD0A4\uAE30",
          "vi": "T\u1EA9m b\u1ED9t khoai lang h\u1EA1t th\xF4 v\xE0 \u0111\u1EC3 ngh\u1EC9 cho b\u1ED9t b\xE1m ch\u1EB7t"
        },
        "instruction": {
          "zh-TW": "\u5C07\u9183\u597D\u7684\u96DE\u6392\u5E73\u92EA\u5728\u7C97\u9846\u7C92\u5730\u74DC\u7C89\u76E4\u4E2D\uFF0C\u7528\u624B\u638C\u7528\u529B\u6309\u58D3\u4F7F\u8868\u9762\u7DCA\u5BC6\u6CBE\u6EFF\u7C89\u7C92\u3002\u7FFB\u9762\u91CD\u8907\u52D5\u4F5C\uFF0C\u63D0\u8D77\u6E90\u8D77\u591A\u9918\u4E7E\u7C89\uFF0C\u975C\u7F6E 3~5 \u5206\u9418\u7B49\u5F85\u7C89\u7C92\u53CD\u6F6E\u53D7\u6F6E\u9ECF\u7262\u3002",
          "en": "Press marinated chicken firmly into coarse sweet potato starch to coat every crevice. Shake off excess and let rest 3-5 mins until starch moistens naturally to prevent flaking.",
          "ja": "\u7C97\u633D\u304D\u5730\u74DC\u7C89\u3092\u305F\u3063\u3077\u308A\u3068\u62BC\u3057\u4ED8\u3051\u308B\u3088\u3046\u306B\u307E\u3076\u3057\u30013\u301C5\u5206\u7F6E\u3044\u3066\u7C89\u304C\u3057\u3063\u3068\u308A\u99B4\u67D3\u3080\u306E\u3092\u5F85\u3061\u307E\u3059\u3002",
          "ko": "\uACE0\uAD6C\uB9C8 \uC804\uBD84\uC744 \uC190\uBC14\uB2E5\uC73C\uB85C \uAFB9\uAFB9 \uB20C\uB7EC\uAC00\uBA70 \uBE48\uD2C8\uC5C6\uC774 \uC785\uD78C \uB4A4 3-5\uBD84\uAC04 \uB450\uC5B4 \uD280\uAE40\uC637\uC774 \uCC29 \uB2EC\uB77C\uBD99\uAC8C \uD569\uB2C8\uB2E4.",
          "vi": "\u1EA4n m\u1EA1nh mi\u1EBFng g\xE0 v\xE0o \u0111\u0129a b\u1ED9t khoai lang th\xF4 cho b\xE1m k\xEDn, \u0111\u1EC3 ngh\u1EC9 3-5 ph\xFAt cho b\u1ED9t ng\u1EA5m \u1EA9m kh\xF4ng b\u1ECB r\u01A1i khi chi\xEAn."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-chicken-cutlet-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u5927\u706B\u9165\u70B8\u81F3\u91D1\u9EC3\u91D1\u8106\u3001\u6492\u6EFF\u6912\u9E7D\uFF01",
          "en": "Deep Fry to Golden Crisp & Dust with Spiced Pepper Salt",
          "ja": "\u9AD8\u6E29\u306E\u6CB9\u3067\u30AB\u30EA\u30C3\u3068\u63DA\u3052\u3001\u7279\u88FD\u30B9\u30D1\u30A4\u30B9\u5869\u3092\u632F\u308B\uFF01",
          "ko": "\uBC14\uC0AD\uD558\uAC8C \uD280\uACA8\uB0B4\uACE0 \uD2B9\uC81C \uD6C4\uCD94\uC18C\uAE08\uC744 \uB4EC\uBFCD \uBFCC\uB824 \uC644\uC131!",
          "vi": "Chi\xEAn ng\u1EADp d\u1EA7u v\xE0ng gi\xF2n r\u1EE5m v\xE0 r\u1EAFc \u0111\u1EABm mu\u1ED1i ti\xEAu th\u1EA3o m\u1ED9c!"
        },
        "instruction": {
          "zh-TW": "\u6CB9\u934B\u52A0\u71B1\u81F3 175\xB0C\uFF0C\u96D9\u624B\u5C55\u958B\u96DE\u6392\u8F15\u8F15\u6ED1\u5165\u6CB9\u934B\u3002\u70B8\u7D04 4~5 \u5206\u9418\u81F3\u5169\u9762\u91D1\u9EC3\u6D6E\u8D77\uFF0C\u8D77\u934B\u524D 30 \u79D2\u62C9\u9AD8\u6CB9\u6EAB\u81F3 190\xB0C \u903C\u6CB9\u6436\u9165\u3002\u701D\u4E7E\u6CB9\u5F8C\u8C6A\u9081\u6492\u4E0A\u7279\u8ABF\u80E1\u6912\u9E7D\u8207\u8FA3\u6912\u7C89\uFF0C\u6574\u7247\u8D81\u71B1\u5543\u54AC\uFF01",
          "en": "Heat oil to 175\xB0C (345\xB0F). Slide giant cutlet into oil, fry 4-5 mins until buoyant and golden. Raise heat to 190\xB0C for final 30s to shed oil. Drain and dust generously with pepper salt & chili!",
          "ja": "175\u2103\u306E\u6CB9\u30674\u301C5\u5206\u63DA\u3052\u3001\u6700\u5F8C\u306B\u5F37\u706B\u3067\u30AB\u30EA\u30C3\u3068\u6CB9\u3092\u5207\u308A\u307E\u3059\u3002\u71B1\u3044\u3046\u3061\u306B\u7279\u88FD\u30B9\u30D1\u30A4\u30B9\u5869\u3068\u5510\u8F9B\u5B50\u7C89\u3092\u305F\u3063\u3077\u308A\u632F\u3063\u3066\u8C6A\u5FEB\u306B\u304B\u3076\u308A\u3064\u304D\u307E\u3059\uFF01",
          "ko": "175\xB0C \uAE30\uB984\uC5D0 \uB123\uACE0 4-5\uBD84\uAC04 \uD280\uAE34 \uB4A4 \uB9C8\uC9C0\uB9C9\uC5D0 \uC628\uB3C4\uB97C \uC62C\uB824 \uBC14\uC0AD\uD558\uAC8C \uAC74\uC838\uB0C5\uB2C8\uB2E4. \uD6C4\uCD94\uC18C\uAE08\uACFC \uACE0\uCDA7\uAC00\uB8E8\uB97C \uB4EC\uBFCD \uBFCC\uB824 \uC644\uC131\uD569\uB2C8\uB2E4!",
          "vi": "Th\u1EA3 mi\u1EBFng g\xE0 v\xE0o d\u1EA7u 175\xB0C chi\xEAn 4-5 ph\xFAt, t\u0103ng nhi\u1EC7t l\xEAn 190\xB0C trong 30 gi\xE2y cu\u1ED1i \xE9p d\u1EA7u. V\u1EDBt ra r\u1EAFc \u0111\u1EABm mu\u1ED1i ti\xEAu \u1EDBt th\u01B0\u1EDFng th\u1EE9c nguy\xEAn mi\u1EBFng!"
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-chicken-cutlet-step4.jpg",
        "cookwareVariations": [
          {
            "cookware": "airFryer",
            "tempAndSetting": "Air Fryer 190\xB0C (375\xB0F): 14 mins (Spray Oil & Flip at 8 mins)",
            "instructionOverride": {
              "zh-TW": "\u6C23\u70B8\u934B\u9810\u71B1\u81F3 190\xB0C\u3002\u5C07\u88F9\u597D\u7C97\u5730\u74DC\u7C89\u4E26\u53CD\u6F6E\u5B8C\u6210\u7684\u5927\u96DE\u6392\u5E73\u92EA\u65BC\u70B8\u7C43\u4E2D\uFF0C\u96D9\u9762\u5747\u52FB\u5674\u4E0A\u4E00\u5C64\u98DF\u7528\u6CB9\u3002\u4EE5 190\xB0C \u6C23\u70B8 8 \u5206\u9418\u5F8C\u62C9\u51FA\u7FFB\u9762\u88DC\u5674\u6CB9\u518D\u6C23\u70B8 6 \u5206\u9418\uFF0C\u6700\u5F8C\u4EE5 200\xB0C \u6C23\u70B8 2 \u5206\u9418\u903C\u6CB9\uFF0C\u51FA\u934B\u6492\u6EFF\u7279\u88FD\u4E2D\u85E5\u80E1\u6912\u9E7D\u8207\u8FA3\u6912\u7C89\uFF0C\u91D1\u9EC3\u5361\u6ECB\u6975\u81F4\u9999\u8106\uFF01",
              "en": "Preheat air fryer to 190\xB0C (375\xB0F). Place coated cutlet in basket, spray both sides generously with oil. Air fry for 8 mins, flip, spray again and fry 6 mins. Finish at 200\xB0C for 2 mins to crisp up, dust with pepper salt!",
              "ja": "\u30CE\u30F3\u30D5\u30E9\u30A4\u30E4\u30FC\u3092190\u2103\u306B\u4E88\u71B1\u3002\u8863\u3092\u307E\u3068\u308F\u305B\u305F\u30C1\u30AD\u30F3\u306E\u4E21\u9762\u306B\u30AA\u30A4\u30EB\u30B9\u30D7\u30EC\u30FC\u3092\u3057\u3001190\u2103\u30678\u5206\u52A0\u71B1\u5F8C\u306B\u88CF\u8FD4\u3057\u3066\u3055\u3089\u306B6\u5206\u3001\u4ED5\u4E0A\u3052\u306B200\u2103\u30672\u5206\u52A0\u71B1\u3002\u71B1\u3005\u306E\u3046\u3061\u306B\u7279\u88FD\u30B9\u30D1\u30A4\u30B9\u5869\u3092\u632F\u3063\u3066\u5B8C\u6210\uFF01",
              "ko": "\uC5D0\uC5B4\uD504\uB77C\uC774\uC5B4\uB97C 190\xB0C\uB85C \uC608\uC5F4\uD558\uACE0 \uB2ED\uAC00\uC2B4\uC0B4 \uC591\uBA74\uC5D0 \uC624\uC77C\uC744 \uACE8\uACE0\uB8E8 \uBD84\uC0AC\uD569\uB2C8\uB2E4. 190\xB0C\uC5D0\uC11C 8\uBD84 \uC870\uB9AC \uD6C4 \uB4A4\uC9D1\uC5B4 6\uBD84 \uB354 \uAD7D\uACE0, 200\xB0C\uC5D0\uC11C 2\uBD84\uAC04 \uBC14\uC0AD\uD558\uAC8C \uB9C8\uBB34\uB9AC\uD55C \uB4A4 \uD2B9\uC81C \uD6C4\uCD94\uC18C\uAE08\uC744 \uB4EC\uBFCD \uBFCC\uB9BD\uB2C8\uB2E4.",
              "vi": "L\xE0m n\xF3ng n\u1ED3i chi\xEAn kh\xF4ng d\u1EA7u \u1EDF 190\xB0C, x\u1ECBt d\u1EA7u \u0111\u1EC1u 2 m\u1EB7t mi\u1EBFng g\xE0. N\u01B0\u1EDBng 8 ph\xFAt r\u1ED3i l\u1EADt m\u1EB7t n\u01B0\u1EDBng th\xEAm 6 ph\xFAt, ch\u1EC9nh 200\xB0C n\u01B0\u1EDBng 2 ph\xFAt cu\u1ED1i cho gi\xF2n r\u1EE5m r\u1ED3i r\u1EAFc \u0111\u1EABm mu\u1ED1i ti\xEAu th\u1EA3o m\u1ED9c!"
            }
          }
        ]
      }
    ],
    "troubleshooting": [
      {
        "id": "crust-fall-off",
        "problem": {
          "zh-TW": "\u96DE\u6392\u4E0B\u934B\u70B8\u7684\u6642\u5019\u5916\u76AE\u9EB5\u8863\u5168\u90E8\u812B\u843D\uFF1F",
          "en": "Why did the crispy batter fall off in the oil?",
          "ja": "\u63DA\u3052\u3066\u3044\u308B\u3068\u304D\u306B\u8863\u304C\u5265\u304C\u308C\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uD280\uAE38 \uB54C \uD280\uAE40\uC637\uC774 \uB2E4 \uBC97\uACA8\uC9C0\uB098\uC694?",
          "vi": "L\u1EDBp b\u1ED9t chi\xEAn b\u1ECB bong tr\xF3c r\u1EDDi ra khi th\u1EA3 v\xE0o d\u1EA7u?"
        },
        "cause": {
          "zh-TW": "\u6CBE\u7C89\u5F8C\u6C92\u6709\u975C\u7F6E\u300C\u53CD\u6F6E\u300D\uFF0C\u4E7E\u7C89\u9047\u5230\u9AD8\u6EAB\u6CB9\u6D41\u5931\u3002",
          "en": "Skipped the resting step; starch didn't hydrate with the chicken's surface moisture.",
          "ja": "\u7C89\u3092\u3064\u3051\u305F\u5F8C\u3001\u99B4\u67D3\u307E\u305B\u308B\u6642\u9593\uFF08\u53CD\u6F6E\uFF09\u3092\u53D6\u3089\u306A\u304B\u3063\u305F\u305F\u3081\u3067\u3059\u3002",
          "ko": "\uAC00\uB8E8\uB97C \uBB3B\uD78C \uD6C4 \uC804\uBD84\uC774 \uC218\uBD84\uC744 \uBA38\uAE08\uC744 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB9AC\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "Ch\u01B0a \u0111\u1EC3 b\u1ED9t ngh\u1EC9 h\u1ED3i \u1EA9m tr\u01B0\u1EDBc khi chi\xEAn n\xEAn b\u1ED9t kh\xF4 b\u1ECB d\u1EA7u cu\u1ED1n tr\xF4i."
        },
        "solution": {
          "zh-TW": "\u6CBE\u6EFF\u7C97\u5730\u74DC\u7C89\u5F8C\uFF0C\u52D9\u5FC5\u5728\u5E38\u6EAB\u975C\u7F6E 3~5 \u5206\u9418\uFF0C\u770B\u5230\u7C89\u7C92\u8B8A\u6DF1\u8272\u53D7\u6F6E\u5F8C\u518D\u4E0B\u934B\uFF01",
          "en": "Always let dusted chicken sit for 3-5 mins until starch darkens and adheres firmly!",
          "ja": "\u7C89\u3092\u307E\u3076\u3057\u305F\u5F8C\u3001\u5FC5\u305A3\u301C5\u5206\u7F6E\u3044\u3066\u7C89\u304C\u3057\u3063\u3068\u308A\u3057\u3066\u304B\u3089\u63DA\u3052\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uBC18\uB4DC\uC2DC 3-5\uBD84\uAC04 \uB450\uC5B4 \uD280\uAE40\uC637\uC774 \uCD09\uCD09\uD574\uC9C4 \uAC83\uC744 \uD655\uC778\uD55C \uD6C4 \uAE30\uB984\uC5D0 \uB123\uC73C\uC138\uC694!",
          "vi": "B\u1EAFt bu\u1ED9c \u0111\u1EC3 ngh\u1EC9 3-5 ph\xFAt cho b\u1ED9t chuy\u1EC3n m\xE0u s\u1EABm \u1EA9m d\xEDnh ch\u1EB7t v\xE0o da g\xE0 m\u1EDBi \u0111em chi\xEAn!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u53F0\u7063\u8001\u9955\u53E3\u8A23\u300C\u96DE\u6392\u4E0D\u5207\u300D\uFF01\u6574\u7247\u76F4\u63A5\u5543\u54AC\u624D\u80FD\u7262\u7262\u9396\u4F4F\u8C50\u6C9B\u8089\u6C41\uFF0C\u5207\u584A\u6703\u5C0E\u81F4\u9BAE\u751C\u7CBE\u83EF\u6D41\u5931\uFF01",
        "en": "The golden rule is 'Never Cut the Chicken Cutlet'! Biting whole locks in steaming hot juices!",
        "ja": "\u53F0\u6E7E\u30C4\u30A6\u306E\u9244\u5247\u306F\u300E\u5207\u3089\u305A\u306B\u305D\u306E\u307E\u307E\u98DF\u3079\u308B\u300F\uFF01\u304B\u3076\u308A\u3064\u304F\u3053\u3068\u3067\u30B8\u30E5\u30FC\u30B7\u30FC\u306A\u8089\u6C41\u3092\u9589\u3058\u8FBC\u3081\u307E\u3059\uFF01",
        "ko": "\uB300\uB9CC \uB85C\uCEEC\uB4E4\uC758 \uCCA0\uCE59\uC740 '\uC790\uB974\uC9C0 \uC54A\uACE0 \uD1B5\uC9F8\uB85C \uBA39\uAE30'! \uC721\uC999\uC774 \uBE60\uC838\uB098\uAC00\uC9C0 \uC54A\uC544 \uAC00\uC7A5 \uB9DB\uC788\uC2B5\uB2C8\uB2E4!",
        "vi": "B\xED quy\u1EBFt \u0103n ngon l\xE0 \u0111\u1EC3 nguy\xEAn mi\u1EBFng kh\xF4ng c\u1EAFt \u0111\u1EC3 gi\u1EEF tr\u1ECDn v\u1EB9n d\xF2ng n\u01B0\u1EDBc th\u1ECBt ng\u1ECDt l\u1ECBm b\xEAn trong!"
      }
    ]
  },
  {
    "id": "tian-bu-la",
    "slug": "tian-bu-la",
    "title": {
      "zh-TW": "\u7D93\u5178\u53F0\u5F0F\u95DC\u6771\u716E\u751C\u4E0D\u8FA3",
      "en": "Taiwanese Tian Bu La (Fish Paste Tempura Pot)",
      "ja": "\u53F0\u6E7E\u98A8\u304A\u3067\u3093\u30FB\u30C6\u30F3\u30D7\u30E9\uFF08\u751C\u4E0D\u8FA3\uFF09",
      "ko": "\uB300\uB9CC\uC2DD \uC5B4\uBB35 \uD280\uAE40 \uC870\uB9BC \uD150\uBD80\uB77C (\uC624\uB385 \uC694\uB9AC)",
      "vi": "Ch\u1EA3 c\xE1 chi\xEAn s\u1ED1t ng\u1ECDt ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan (Tian Bu La)"
    },
    "subtitle": {
      "zh-TW": "Q\u5F48\u9B5A\u6F3F\u689D\u30FB\u6E05\u751C\u767D\u863F\u8514\u30FB\u9748\u9B42\u751C\u8FA3\u5473\u564C\u91AC\u30FB\u6700\u5F8C\u514D\u8CBB\u52A0\u6E6F",
      "en": "Bouncy Fish Cakes, Simmered Daikon, Sweet Miso Sauce & Broth Refill",
      "ja": "\u30E2\u30C1\u30E2\u30C1\u3059\u308A\u8EAB\u30FB\u51FA\u6C41\u306E\u67D3\u307F\u305F\u5927\u6839\u30FB\u79D8\u4F1D\u306E\u7518\u8F9B\u5473\u564C\u30C0\u30EC\u30FB\u3006\u306E\u7121\u6599\u30B9\u30FC\u30D7",
      "ko": "\uD0F1\uAE00\uD0F1\uAE00\uD55C \uC5B4\uBB35, \uB2EC\uCF64\uD558\uAC8C \uC775\uC740 \uBB34, \uD2B9\uC81C \uB2EC\uCF64 \uB9E4\uCF64 \uC18C\uC2A4\uC640 \uC721\uC218 \uB9AC\uD544\uC758 \uB9DB",
      "vi": "Ch\u1EA3 c\xE1 dai gi\xF2n, c\u1EE7 c\u1EA3i h\u1EA7m ng\u1ECDt n\u01B0\u1EDBc, s\u1ED1t t\u01B0\u01A1ng ng\u1ECDt cay v\xE0 h\xFAp tr\u1ECDn n\u01B0\u1EDBc d\xF9ng"
    },
    "tagline": {
      "zh-TW": "\u5403\u5B8C\u98DF\u6750\u4E00\u5B9A\u8981\u628A\u7897\u7AEF\u53BB\u52A0\u6EFF\u67F4\u9B5A\u9AD8\u6E6F\uFF01\u53F0\u7063\u4EBA\u6700\u6EAB\u6696\u7684\u591C\u5E02\u5100\u5F0F",
      "en": "Eat the fish cakes, then bring your bowl for a rich piping-hot broth refill!",
      "ja": "\u5177\u3092\u98DF\u3079\u7D42\u308F\u3063\u305F\u3089\u6B8B\u3063\u305F\u30BF\u30EC\u306B\u71B1\u3005\u51FA\u6C41\u3092\u6CE8\u3044\u3067\u98F2\u3080\u306E\u304C\u53F0\u6E7E\u6D41\uFF01",
      "ko": "\uAC74\uB354\uAE30\uB97C \uB2E4 \uBA39\uACE0 \uB0A8\uC740 \uC18C\uC2A4\uC5D0 \uB728\uAC70\uC6B4 \uC721\uC218\uB97C \uBD80\uC5B4 \uB9C8\uC2DC\uB294 \uB530\uB73B\uD55C \uD55C \uADF8\uB987",
      "vi": "N\xE9t v\u0103n h\xF3a \u0111\u1ED9c \u0111\xE1o: \u0103n h\u1EBFt ch\u1EA3 c\xE1 r\u1ED3i chan n\u01B0\u1EDBc d\xF9ng ng\u1ECDt thanh v\xE0o b\xE1t h\xFAp s\u1EA1ch!"
    },
    "heroImage": "/images/taiwan-tian-bu-la-hero.jpg",
    "difficulty": "easy",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "defaultServings": 3,
    "caloriesPerServing": 340,
    "category": "soups",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u57FA\u9686\u5EDF\u53E3 / \u53F0\u5317\u842C\u83EF",
        "en": "Keelung Miaokou / Taipei Wanhua",
        "ja": "\u57FA\u9686\u5EDF\u53E3 / \u53F0\u5317\u4E07\u83EF",
        "ko": "\uC9C0\uB8FD \uBA00\uC624\uCEE4\uC6B0 / \uD0C0\uC774\uBCA0\uC774 \uC644\uD654",
        "vi": "Keelung Miaokou / V\u1EA1n Hoa \u0110\xE0i B\u1EAFc"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u57FA\u9686\u5EDF\u53E3\u591C\u5E02",
          "en": "Keelung Miaokou Night Market",
          "ja": "\u57FA\u9686\u5EDF\u53E3\u591C\u5E02",
          "ko": "\uC9C0\uB8FD \uBA00\uC624\uCEE4\uC6B0 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Keelung Miaokou"
        },
        {
          "zh-TW": "\u901A\u5316\u591C\u5E02",
          "en": "Tonghua Night Market",
          "ja": "\u901A\u5316\u591C\u5E02",
          "ko": "\uD241\uD654 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Tonghua"
        }
      ],
      "historyStory": {
        "zh-TW": "\u6E90\u81EA\u65E5\u6CBB\u6642\u671F\u65E5\u5F0F\u9ED1\u8F2A\uFF08Oden\uFF09\u8207\u5929\u5A66\u7F85\uFF08Tempura\uFF09\uFF0C\u878D\u5165\u53F0\u7063\u5728\u5730\u65D7\u9B5A\u6F3F\u3001\u6CB9\u8C46\u8150\u3001\u7C73\u8840\u7CD5\u8207\u8CA2\u4E38\u3002\u7D93\u904E\u67F4\u9B5A\u767D\u863F\u8514\u5927\u9AA8\u6E6F\u4E45\u716E\u5165\u5473\uFF0C\u6DCB\u4E0A\u7368\u9580\u751C\u8FA3\u5473\u564C\u7D05\u91AC\uFF0C\u6700\u7CBE\u9AD3\u7684\u662F\u5403\u5B8C\u5F8C\u7559\u7897\u5E95\u91AC\u6C41\u300E\u514D\u8CBB\u52A0\u9AD8\u6E6F\u300F\u4E00\u98F2\u800C\u76E1\uFF01",
        "en": "Evolved from Japanese oden and tempura into a distinct Taiwanese comfort food with sailfish paste, rice blood cake, and tofu simmering in bonito-daikon broth.",
        "ja": "\u65E5\u672C\u306E\u300E\u304A\u3067\u3093\u300F\u3084\u300E\u5929\u3077\u3089\u300F\u304C\u53F0\u6E7E\u3067\u72EC\u81EA\u9032\u5316\u3057\u305F\u6599\u7406\u3002\u7518\u8F9B\u30C0\u30EC\u3067\u5177\u6750\u3092\u98DF\u3079\u305F\u5F8C\u3001\u6B8B\u3063\u305F\u30BF\u30EC\u306B\u71B1\u3044\u30B9\u30FC\u30D7\u3092\u6CE8\u3044\u3067\u98F2\u307F\u5E72\u3059\u306E\u304C\u5B9A\u756A\u3002",
        "ko": "\uC77C\uC81C\uAC15\uC810\uAE30 \uC624\uB385\uC5D0\uC11C \uC720\uB798\uD558\uC5EC \uB300\uB9CC\uC2DD \uC5B4\uBB35, \uC720\uBD80, \uC300\uD53C\uB5A1 \uB4F1\uC744 \uAC00\uC4F0\uC624\uBD80\uC2DC \uBB34 \uC721\uC218\uC5D0 \uB053\uC5EC \uD2B9\uC81C \uC18C\uC2A4\uC5D0 \uCC0D\uC5B4 \uBA39\uB294 \uB300\uD45C \uBD84\uC2DD\uC785\uB2C8\uB2E4.",
        "vi": "Bi\u1EBFn t\u1EA5u t\u1EEB m\xF3n oden Nh\u1EADt B\u1EA3n, k\u1EBFt h\u1EE3p ch\u1EA3 c\xE1, huy\u1EBFt n\u1EBFp, \u0111\u1EADu h\u0169 h\u1EA7m trong n\u01B0\u1EDBc d\xF9ng c\u1EE7 c\u1EA3i c\xE1 ng\u1EEB thanh ng\u1ECDt v\xE0 s\u1ED1t t\u01B0\u01A1ng \u1EDBt \u0111\u1EB7c tr\u01B0ng."
      },
      "taiwaneseHokkien": "Thian-p\xFA-lah (\u310A\u3127\u3122 \u3105\u3128 \u310C\u311A)",
      "mandarinPinyin": "Ti\xE1nb\xF9l\xE0 (\u310A\u3127\u3122\u02CA \u3105\u3128\u02CB \u310C\u311A\u02CB)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u751C\u4E0D\u8FA3\u4E00\u7897\uFF0C\u8981\u5C0F\u8FA3\uFF0C\u7B49\u4E00\u4E0B\u8981\u52A0\u6E6F"
    },
    "ingredients": [
      {
        "id": "fish-paste-cakes",
        "name": {
          "zh-TW": "\u53F0\u5F0F\u70B8\u65D7\u9B5A\u6F3F\u751C\u4E0D\u8FA3\u689D\u8207\u5713\u7247",
          "en": "Taiwanese Fried Fish Paste Cakes & Bars",
          "ja": "\u53F0\u6E7E\u7523 \u63DA\u3052\u9B5A\u8089\u3059\u308A\u8EAB\u68D2\uFF06\u3055\u3064\u307E\u63DA\u3052",
          "ko": "\uB300\uB9CC\uC2DD \uD280\uAE34 \uC5B4\uBB35 \uBC14 \uBC0F \uB465\uADFC \uC5B4\uBB35",
          "vi": "Ch\u1EA3 c\xE1 chi\xEAn d\u1EA1ng thanh v\xE0 l\xE1t tr\xF2n"
        },
        "amount": 250,
        "unitMetric": "g",
        "unitUS": "9 oz",
        "isKeyFlavor": true,
        "chineseName": "\u751C\u4E0D\u8FA3\u9B5A\u6F3F\u689D",
        "chinesePinyin": "Ti\xE1nb\xF9l\xE0 ti\xE1o"
      },
      {
        "id": "white-daikon",
        "name": {
          "zh-TW": "\u53F0\u7063\u767D\u863F\u8514 (\u53BB\u76AE\u539A\u5207\u6EFE\u5200\u584A)",
          "en": "Taiwanese White Daikon Radish (Chunky Cut)",
          "ja": "\u5927\u6839\uFF08\u4E71\u5207\u308A\uFF09",
          "ko": "\uBB34 (\uD07C\uC9C1\uD558\uAC8C \uC370\uAE30)",
          "vi": "C\u1EE7 c\u1EA3i tr\u1EAFng g\u1ECDt v\u1ECF c\u1EAFt mi\u1EBFng to"
        },
        "amount": 300,
        "unitMetric": "g",
        "unitUS": "10 oz",
        "isKeyFlavor": true,
        "chineseName": "\u767D\u863F\u8514\u584A",
        "chinesePinyin": "B\xE1il\xFAobo"
      },
      {
        "id": "tofu-rice-cake",
        "name": {
          "zh-TW": "\u6CB9\u8C46\u8150\u3001\u8C6C\u8840\u7CD5\u3001\u8CA2\u4E38",
          "en": "Fried Tofu Puffs, Pig Blood Rice Cake, Meatballs",
          "ja": "\u539A\u63DA\u3052\u3001\u7C73\u8840\u7CD5\u3001\u8C5A\u3064\u307F\u308C",
          "ko": "\uC720\uBD80, \uB3FC\uC9C0\uD53C \uCC39\uC300\uB5A1, \uACE0\uAE30\uC644\uC790",
          "vi": "\u0110\u1EADu h\u0169 chi\xEAn, huy\u1EBFt n\u1EBFp, b\xF2 vi\xEAn"
        },
        "amount": 200,
        "unitMetric": "g",
        "unitUS": "7 oz",
        "chineseName": "\u6CB9\u8C46\u8150\u7C73\u8840\u8CA2\u4E38",
        "chinesePinyin": "Y\xF3ud\xF2ufu m\u01D0xi\u011B"
      },
      {
        "id": "tianbula-sauce",
        "name": {
          "zh-TW": "\u9748\u9B42\u751C\u4E0D\u8FA3\u91AC (\u751C\u8FA3\u91AC+\u5473\u564C+\u7CD6+\u756A\u8304\u91AC+\u9AD8\u6E6F)",
          "en": "Signature Sweet Miso Chili Dipping Sauce",
          "ja": "\u7279\u88FD\u7518\u8F9B\u5473\u564C\u30C0\u30EC",
          "ko": "\uD2B9\uC81C \uC2A4\uC704\uD2B8 \uBBF8\uC18C \uCE60\uB9AC \uC18C\uC2A4",
          "vi": "S\u1ED1t t\u01B0\u01A1ng ng\u1ECDt cay v\u1ECB miso gia truy\u1EC1n"
        },
        "amount": 100,
        "unitMetric": "ml",
        "unitUS": "0.4 cup",
        "isKeyFlavor": true,
        "chineseName": "\u751C\u8FA3\u5473\u564C\u91AC",
        "chinesePinyin": "Ti\xE1nl\xE0 ji\xE0ng"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u6162\u706B\u71AC\u716E\u67F4\u9B5A\u5927\u9AA8\u767D\u863F\u8514\u6E05\u751C\u9AD8\u6E6F",
          "en": "Simmer Bonito & Daikon Sweet Broth",
          "ja": "\u5927\u6839\u3068\u9C39\u7BC0\u3092\u5F31\u706B\u3067\u3058\u3063\u304F\u308A\u716E\u8FBC\u307F\u51FA\u6C41\u3092\u3068\u308B",
          "ko": "\uBB34\uC640 \uAC00\uC4F0\uC624\uBD80\uC2DC\uB97C \uC57D\uBD88\uC5D0 \uB053\uC5EC \uC2DC\uC6D0\uD55C \uC721\uC218 \uB0B4\uAE30",
          "vi": "Ninh c\u1EE7 c\u1EA3i tr\u1EAFng v\u1EDBi c\xE1 ng\u1EEB b\xE0o v\xE0 x\u01B0\u01A1ng l\u1EA5y n\u01B0\u1EDBc d\xF9ng thanh ng\u1ECDt"
        },
        "instruction": {
          "zh-TW": "\u6E6F\u934B\u4E2D\u52A0\u5165 1500ml \u5927\u9AA8\u9AD8\u6E6F\u6216\u6E05\u6C34\uFF0C\u653E\u5165\u539A\u5207\u767D\u863F\u8514\u584A\u8207\u4E00\u5927\u628A\u67F4\u9B5A\u7247\u3001\u6606\u5E03\u3002\u4E2D\u5C0F\u706B\u6162\u716E 15~20 \u5206\u9418\u76F4\u81F3\u767D\u863F\u8514\u6676\u7469\u900F\u4EAE\u3001\u8EDF\u721B\u5165\u5473\u3002",
          "en": "Bring 1500ml stock or water to boil with thick-cut daikon, bonito flakes and kombu. Simmer 15-20 mins until daikon is translucent, fork-tender and sweet.",
          "ja": "\u934B\u306B\u6C341.5L\u3001\u5927\u6839\u3001\u9C39\u7BC0\u3001\u6606\u5E03\u3092\u5165\u308C\u3001\u5F31\u706B\u306715\u301C20\u5206\u3058\u3063\u304F\u308A\u716E\u3066\u5927\u6839\u3092\u67D4\u3089\u304B\u304F\u3057\u307E\u3059\u3002",
          "ko": "\uB0C4\uBE44\uC5D0 \uC721\uC218 1.5L\uC640 \uD07C\uC9C1\uD558\uAC8C \uC36C \uBB34, \uAC00\uC4F0\uC624\uBD80\uC2DC, \uB2E4\uC2DC\uB9C8\uB97C \uB123\uACE0 15-20\uBD84\uAC04 \uBB34\uAC00 \uD22C\uBA85\uD574\uC9C8 \uB54C\uAE4C\uC9C0 \uB053\uC785\uB2C8\uB2E4.",
          "vi": "Cho 1.5L n\u01B0\u1EDBc v\xE0o n\u1ED3i c\xF9ng c\u1EE7 c\u1EA3i, c\xE1 ng\u1EEB b\xE0o v\xE0 t\u1EA3o b\u1EB9. Ninh nh\u1ECF l\u1EEDa 15-20 ph\xFAt cho c\u1EE7 c\u1EA3i trong m\u1EC1m ng\u1ECDt n\u01B0\u1EDBc."
        },
        "durationSeconds": 1200,
        "image": "/images/taiwan-tian-bu-la-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u4E0B\u751C\u4E0D\u8FA3\u689D\u3001\u6CB9\u8C46\u8150\u3001\u7C73\u8840\u7CD5\u6162\u6D78\u5165\u5473",
          "en": "Add Fish Cakes, Tofu Puffs & Blood Rice Cakes",
          "ja": "\u30C6\u30F3\u30D7\u30E9\u3001\u539A\u63DA\u3052\u3001\u7C73\u8840\u7CD5\u3092\u52A0\u3048\u3066\u65E8\u5473\u3092\u5438\u308F\u305B\u308B",
          "ko": "\uC5B4\uBB35, \uC720\uBD80, \uCC39\uC300\uB5A1\uC744 \uB123\uACE0 \uC740\uADFC\uD558\uAC8C \uC870\uB9AC\uAE30",
          "vi": "Th\u1EA3 ch\u1EA3 c\xE1, \u0111\u1EADu h\u0169 chi\xEAn, huy\u1EBFt n\u1EBFp v\xE0o h\u1EA7m cho ng\u1EA5m \u0111\u1EABm v\u1ECB ng\u1ECDt"
        },
        "instruction": {
          "zh-TW": "\u5C07\u751C\u4E0D\u8FA3\u689D\u3001\u7247\u3001\u6CB9\u8C46\u8150\u3001\u7C73\u8840\u7CD5\u3001\u8CA2\u4E38\u653E\u5165\u6EFE\u71D9\u6E05\u751C\u9AD8\u6E6F\u4E2D\uFF0C\u8F49\u5FAE\u5C0F\u706B\u6D78\u6CE1\u7168\u716E\u7D04 8~10 \u5206\u9418\uFF0C\u8B93\u98DF\u6750\u5438\u98FD\u67F4\u9B5A\u863F\u8514\u9AD8\u6E6F\u7CBE\u83EF\uFF0C\u81A8\u8139\u8EDFQ\u3002",
          "en": "Add fish cakes, fried tofu puffs, blood rice cake and meatballs into broth. Simmer gently on low for 8-10 mins until swollen, bouncy and soaked with broth flavor.",
          "ja": "\u3059\u308A\u8EAB\u5929\u3077\u3089\u3001\u539A\u63DA\u3052\u3001\u7C73\u8840\u7CD5\u306A\u3069\u3092\u30B9\u30FC\u30D7\u306B\u5165\u308C\u3001\u5F31\u706B\u30678\u301C10\u5206\u716E\u3066\u51FA\u6C41\u3092\u3057\u3063\u304B\u308A\u67D3\u307F\u8FBC\u307E\u305B\u307E\u3059\u3002",
          "ko": "\uC5B4\uBB35\uACFC \uC720\uBD80, \uCC39\uC300\uB5A1\uC744 \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C 8-10\uBD84\uAC04 \uCC9C\uCC9C\uD788 \uC775\uD600 \uC721\uC218\uAC00 \uB4EC\uBFCD \uBC30\uC5B4\uB4E4\uAC8C \uD569\uB2C8\uB2E4.",
          "vi": "Cho ch\u1EA3 c\xE1, \u0111\u1EADu h\u0169, huy\u1EBFt n\u1EBFp v\xE0o n\u1ED3i \u0111un nh\u1ECF l\u1EEDa 8-10 ph\xFAt cho n\u1EDF m\u1EC1m ng\u1EADp tr\xE0n v\u1ECB ng\u1ECDt thanh."
        },
        "durationSeconds": 600,
        "image": "/images/taiwan-tian-bu-la-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u6488\u51FA\u98DF\u6750\u5165\u7897\u3001\u6DCB\u4E0A\u9748\u9B42\u7C89\u7D05\u751C\u8FA3\u5473\u564C\u91AC",
          "en": "Plate Ingredients & Drench in Signature Sweet Sauce",
          "ja": "\u5177\u6750\u3092\u5668\u306B\u76DB\u308A\u3001\u79D8\u4F1D\u306E\u7518\u8F9B\u5473\u564C\u30C0\u30EC\u3092\u304B\u3051\u308B",
          "ko": "\uADF8\uB987\uC5D0 \uB2F4\uACE0 \uD2B9\uC81C \uB2EC\uCF64 \uB9E4\uCF64 \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uBD93\uAE30",
          "vi": "G\u1EAFp th\u1EE9c \u0103n ra b\xE1t v\xE0 r\u01B0\u1EDBi \u0111\u1EABm s\u1ED1t t\u01B0\u01A1ng ng\u1ECDt cay"
        },
        "instruction": {
          "zh-TW": "\u7528\u6F0F\u52FA\u5C07\u716E\u81F3\u8EDFQ\u7684\u767D\u863F\u8514\u3001\u751C\u4E0D\u8FA3\u3001\u6CB9\u8C46\u8150\u6488\u51FA\u76DB\u5165\u6DF1\u7897\u4E2D\u3002\u6F86\u4E0A 2 \u5927\u52FA\u7279\u8ABF\u6EAB\u71B1\u751C\u8FA3\u5473\u564C\u91AC\uFF0C\u6492\u4E0A\u9999\u83DC\u8207\u5C11\u8A31\u8FA3\u6912\u91AC\uFF0C\u8D81\u71B1\u5927\u53E3\u54C1\u5690\uFF01",
          "en": "Use slotted spoon to transfer tender daikon, fish cakes and tofu puffs into a bowl. Generously ladle warm sweet miso chili sauce over top with fresh cilantro!",
          "ja": "\u67D4\u3089\u304B\u304F\u716E\u3048\u305F\u5177\u6750\u3092\u5668\u306B\u76DB\u308A\u4ED8\u3051\u3001\u6E29\u304B\u3044\u7279\u88FD\u7518\u8F9B\u5473\u564C\u30C0\u30EC\u3092\u305F\u3063\u3077\u308A\u56DE\u3057\u304B\u3051\u307E\u3059\uFF01",
          "ko": "\uC775\uC740 \uC7AC\uB8CC\uB4E4\uC744 \uAC74\uC838 \uADF8\uB987\uC5D0 \uB2F4\uACE0 \uB530\uB73B\uD55C \uB2EC\uCF64 \uB9E4\uCF64 \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uBD80\uC5B4 \uACE0\uC218\uC640 \uD568\uAED8 \uC990\uAE41\uB2C8\uB2E4.",
          "vi": "D\xF9ng mu\xF4i th\u1EE7ng v\u1EDBt c\u1EE7 c\u1EA3i, ch\u1EA3 c\xE1 ra b\xE1t s\xE2u l\xF2ng, chan ng\u1EADp s\u1ED1t t\u01B0\u01A1ng ng\u1ECDt cay \u1EA5m n\xF3ng r\u1EAFc ng\xF2 r\xED."
        },
        "durationSeconds": 120,
        "image": "/images/taiwan-tian-bu-la-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u5403\u5B8C\u98DF\u6750\u7897\u5E95\u7559\u91AC\u3001\u885D\u5165\u6EFE\u71D9\u67F4\u9B5A\u9AD8\u6E6F\u4E00\u98F2\u800C\u76E1\uFF01",
          "en": "Pour Piping-Hot Broth into Leftover Sauce Bowl",
          "ja": "\u98DF\u3079\u7D42\u308F\u3063\u305F\u7897\u306B\u6B8B\u3063\u305F\u30BF\u30EC\u306B\u71B1\u3005\u51FA\u6C41\u3092\u6CE8\u3044\u3067\u98F2\u3080\uFF01",
          "ko": "\uB0A8\uC740 \uC18C\uC2A4 \uADF8\uB987\uC5D0 \uB728\uAC70\uC6B4 \uC721\uC218\uB97C \uBD80\uC5B4 \uB9C8\uC2DC\uAE30!",
          "vi": "R\xF3t n\u01B0\u1EDBc d\xF9ng n\xF3ng h\u1ED5i v\xE0o b\xE1t c\xF2n \u0111\u1ECDng s\u1ED1t v\xE0 h\xFAp tr\u1ECDn v\u1EB9n!"
        },
        "instruction": {
          "zh-TW": "\u5403\u5B8C\u6240\u6709\u7684\u751C\u4E0D\u8FA3\u8207\u914D\u6599\u5F8C\uFF0C\u5C07\u7559\u6709\u7D05\u8910\u8272\u6FC3\u90C1\u91AC\u6C41\u7684\u7897\u62FF\u5230\u934B\u908A\uFF0C\u8200\u5165\u6EFF\u6EFF\u4E00\u52FA\u6EFE\u71D9\u7684\u67F4\u9B5A\u767D\u863F\u8514\u9AD8\u6E6F\uFF0C\u62CC\u52FB\u5F8C\u5316\u70BA\u4E00\u7897\u6975\u81F4\u9BAE\u751C\u7684\u7CBE\u83EF\u71B1\u6E6F\uFF0C\u6696\u5FC3\u6696\u80C3\uFF01",
          "en": "After finishing the fish cakes, take the bowl with remaining savory sauce and ladle boiling bonito daikon broth straight in. Stir well and drink the heavenly sweet nectar!",
          "ja": "\u5177\u3092\u98DF\u3079\u7D42\u3048\u305F\u3089\u3001\u6B8B\u3063\u305F\u30BF\u30EC\u306B\u934B\u306E\u71B1\u3005\u51FA\u6C41\u3092\u6CE8\u304E\u307E\u3059\u3002\u30BF\u30EC\u3068\u51FA\u6C41\u304C\u6EB6\u3051\u5408\u3063\u305F\u6700\u9AD8\u306E\u30B9\u30FC\u30D7\u3092\u6700\u5F8C\u306E\u4E00\u6EF4\u307E\u3067\u304A\u697D\u3057\u307F\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uAC74\uB354\uAE30\uB97C \uB2E4 \uBA39\uACE0 \uB0A8\uC740 \uC18C\uC2A4\uC5D0 \uB053\uB294 \uAC00\uC4F0\uC624\uBD80\uC2DC \uBB34 \uC721\uC218\uB97C \uAC00\uB4DD \uBD80\uC5B4 \uC11E\uC5B4 \uB9C8\uC2ED\uB2C8\uB2E4. \uC774\uAC83\uC774 \uB300\uB9CC \uD604\uC9C0\uC758 \uC9C4\uC815\uD55C \uB9DB!",
          "vi": "Sau khi \u0103n h\u1EBFt ch\u1EA3 c\xE1, m\xFAc mu\xF4i n\u01B0\u1EDBc d\xF9ng c\u1EE7 c\u1EA3i s\xF4i s\xF9ng s\u1EE5c v\xE0o b\xE1t s\u1ED1t c\xF2n l\u1EA1i, khu\u1EA5y \u0111\u1EC1u h\xFAp s\u1EA1ch s\u1EA3ng kho\xE1i \u1EA5m b\u1EE5ng!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-tian-bu-la-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "fish-cake-soggy",
        "problem": {
          "zh-TW": "\u751C\u4E0D\u8FA3\u716E\u592A\u4E45\u8EDF\u721B\u721B\u6C92\u6709\u5F48\u6027\uFF1F",
          "en": "Why are my fish cakes overly mushy?",
          "ja": "\u30C6\u30F3\u30D7\u30E9\u304C\u716E\u5D29\u308C\u3066\u98DF\u611F\u304C\u60AA\u304F\u306A\u3063\u3066\u3057\u307E\u3063\u305F\uFF1F",
          "ko": "\uC5B4\uBB35\uC774 \uB108\uBB34 \uD37C\uC838\uC11C \uD750\uBB3C\uAC70\uB9AC\uB098\uC694?",
          "vi": "Ch\u1EA3 c\xE1 b\u1ECB nh\u0169n n\xE1t m\u1EA5t \u0111\u1ED9 dai gi\xF2n?"
        },
        "cause": {
          "zh-TW": "\u5927\u706B\u6EFE\u716E\u904E\u4E45\uFF0C\u9B5A\u6F3F\u5F48\u6027\u6D41\u5931\u3002",
          "en": "Boiled on rolling high heat for too long.",
          "ja": "\u5F37\u706B\u3067\u30B0\u30C4\u30B0\u30C4\u9577\u304F\u716E\u3059\u304E\u305F\u3053\u3068\u304C\u539F\u56E0\u3067\u3059\u3002",
          "ko": "\uC13C \uBD88\uC5D0\uC11C \uB108\uBB34 \uC624\uB798 \uB053\uC600\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "\u0110un s\xF4i l\u1EEDa qu\xE1 to trong th\u1EDDi gian d\xE0i."
        },
        "solution": {
          "zh-TW": "\u863F\u8514\u5148\u716E\u900F\uFF0C\u751C\u4E0D\u8FA3\u53EA\u9700\u4E2D\u5C0F\u706B\u5FAE\u6EFE\u6D78\u6CE1 8 \u5206\u9418\u5373\u53EF\u4FDD\u6301\u7D55\u4F73Q\u5EA6\uFF01",
          "en": "Cook radish first, then simmer fish cakes on low for just 8 mins!",
          "ja": "\u5927\u6839\u3092\u5148\u306B\u716E\u3066\u3001\u3059\u308A\u8EAB\u306F\u5F31\u706B\u30678\u5206\u307B\u3069\u6E29\u3081\u308B\u7A0B\u5EA6\u306B\u3057\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uBB34\uB97C \uBA3C\uC800 \uD479 \uC775\uD78C \uB4A4 \uC5B4\uBB35\uC740 \uC57D\uBD88\uC5D0\uC11C 8\uBD84 \uC815\uB3C4\uB9CC \uB370\uCE58\uB4EF \uC775\uD788\uC138\uC694!",
          "vi": "Ninh nh\u1EEB c\u1EE7 c\u1EA3i tr\u01B0\u1EDBc r\u1ED3i m\u1EDBi cho ch\u1EA3 c\xE1 v\xE0o \u0111un nh\u1ECF l\u1EEDa 8 ph\xFAt l\xE0 chu\u1EA9n nh\u1EA5t!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u751C\u4E0D\u8FA3\u9748\u9B42\u5168\u5728\u91AC\u6C41\uFF01\u7528\u7D05\u5473\u564C\u3001\u53F0\u7063\u751C\u8FA3\u91AC\u3001\u756A\u8304\u91AC\u8207\u5C11\u8A31\u7802\u7CD6\u7528\u9AD8\u6E6F\u5316\u958B\u5C0F\u706B\u71AC\u716E\uFF0C\u6BD4\u4F8B\u6FC3\u90C1\u9187\u539A\u662F\u8001\u5E97\u4E0D\u5916\u50B3\u7684\u914D\u65B9\uFF01",
        "en": "The secret sauce: whisk red miso, sweet chili sauce, ketchup and sugar in broth on low heat!",
        "ja": "\u8D64\u5473\u564C\u3001\u7518\u8F9B\u30C1\u30EA\u30BD\u30FC\u30B9\u3001\u30B1\u30C1\u30E3\u30C3\u30D7\u3001\u7802\u7CD6\u3092\u51FA\u6C41\u3067\u716E\u8A70\u3081\u308B\u306E\u304C\u7D76\u54C1\u30BF\u30EC\u306E\u79D8\u8A23\u3067\u3059\uFF01",
        "ko": "\uBD89\uC740 \uBBF8\uC18C\uB41C\uC7A5, \uC2A4\uC704\uD2B8 \uCE60\uB9AC, \uCF00\uCCA9, \uC124\uD0D5\uC744 \uC721\uC218\uC5D0 \uD480\uC5B4 \uC878\uC5EC\uB0B4\uBA74 \uB178\uD3EC\uC758 \uC18C\uC2A4 \uC644\uC131!",
        "vi": "N\u1EA5u s\u1ED1t b\u1EB1ng t\u01B0\u01A1ng miso \u0111\u1ECF, t\u01B0\u01A1ng \u1EDBt ng\u1ECDt, s\u1ED1t c\xE0 chua v\xE0 \u0111\u01B0\u1EDDng h\xF2a c\xF9ng n\u01B0\u1EDBc d\xF9ng th\u01A1m ng\u1EADy!"
      }
    ]
  },
  {
    "id": "candied-fruit-tanghulu",
    "slug": "candied-fruit-tanghulu",
    "title": {
      "zh-TW": "\u591C\u5E02\u53E4\u65E9\u5473\u756A\u8304\u871C\u991E\u7CD6\u846B\u8606",
      "en": "Candied Tomato & Preserved Plum Tanghulu",
      "ja": "\u53F0\u6E7E\u591C\u5E02\u540D\u7269 \u30C8\u30DE\u30C8\u3068\u30C9\u30E9\u30A4\u30D7\u30E9\u30E0\u306E\u30D5\u30EB\u30FC\u30C4\u98F4\uFF08\u7CD6\u846B\u82A6\uFF09",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5 \uD1A0\uB9C8\uD1A0 & \uB9E4\uC2E4 \uD0D5\uD6C4\uB8E8 (\uD0D5\uD6C4\uB8E8)",
      "vi": "K\u1EB9o h\u1ED3 l\xF4 c\xE0 chua k\u1EB9p x\xED mu\u1ED9i ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan"
    },
    "subtitle": {
      "zh-TW": "\u8584\u8106\u6676\u7469\u7CD6\u8863\u30FB\u591A\u6C41\u8056\u5973\u5C0F\u756A\u8304\u30FB\u593E\u5165\u9E79\u751C\u9ED1\u5316\u61C9\u5B50\u871C\u991E",
      "en": "Glass-Crisp Candy Shell, Juicy Cherry Tomatoes & Salted Plum Preserves",
      "ja": "\u30D1\u30EA\u30C3\u30D1\u30EA\u306E\u8584\u6C37\u7CD6\u8863\u30FB\u30B8\u30E5\u30FC\u30B7\u30FC\u306A\u30D7\u30C1\u30C8\u30DE\u30C8\u30FB\u7518\u9178\u3063\u3071\u3044\u30C9\u30E9\u30A4\u30D7\u30E9\u30E0\uFF08\u5316\u5FDC\u5B50\uFF09",
      "ko": "\uC720\uB9AC\uCC98\uB7FC \uC587\uACE0 \uBC14\uC0AD\uD55C \uC124\uD0D5 \uCF54\uD305, \uACFC\uC999 \uAC00\uB4DD \uBC29\uC6B8\uD1A0\uB9C8\uD1A0, \uC9ED\uC9E4\uB2EC\uCF64\uD55C \uAC74\uB9E4\uC2E4",
      "vi": "L\u1EDBp \u0111\u01B0\u1EDDng gi\xF2n tan m\u1ECFng tang, c\xE0 chua bi m\u1ECDng n\u01B0\u1EDBc k\u1EB9p x\xED mu\u1ED9i m\u1EB7n ng\u1ECDt \u0111\u1ED9c \u0111\xE1o"
    },
    "tagline": {
      "zh-TW": "\u5168\u53F0\u591C\u5E02\u4EBA\u624B\u4E00\u652F\u7684\u7AE5\u5E74\u751C\u871C\u56DE\u61B6\uFF01\u9178\u751C\u591A\u6C41\u53C8\u8106\u53E3\u7684\u5922\u5E7B\u7D05\u5BF6\u77F3",
      "en": "The nostalgic jewel of Taiwanese night markets: shatteringly crisp and tangy-sweet",
      "ja": "\u53F0\u6E7E\u591C\u5E02\u306E\u5B9A\u756A\u30B9\u30A4\u30FC\u30C4\uFF01\u30AB\u30EA\u30C3\u3068\u3057\u305F\u98F4\u3068\u7518\u9178\u3063\u3071\u3044\u30C8\u30DE\u30C8\u871C\u991E\u306E\u7D76\u5999\u306A\u30CF\u30FC\u30E2\u30CB\u30FC",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5\uC758 \uD544\uC218 \uAE38\uAC70\uB9AC \uAC04\uC2DD! \uC544\uC0AD\uD55C \uC124\uD0D5 \uAECD\uC9C8\uACFC \uC0C8\uCF64\uB2EC\uCF64\uD55C \uACFC\uC999\uC758 \uD3ED\uBC1C",
      "vi": "M\xF3n k\u1EB9o que tu\u1ED5i th\u01A1 r\u1EF1c r\u1EE1 ch\u1EE3 \u0111\xEAm v\u1EDBi l\u1EDBp \u0111\u01B0\u1EDDng gi\xF2n r\u1EE5m b\u1ECDc qu\u1EA3 ng\u1ECDt thanh m\xE1t"
    },
    "heroImage": "/images/taiwan-tanghulu-hero.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "defaultServings": 4,
    "caloriesPerServing": 180,
    "category": "desserts",
    "dietaryTags": [
      "classic",
      "vegetarian",
      "vegan",
      "glutenFree"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5317\u9952\u6CB3 / \u53F0\u4E2D\u9022\u7532",
        "en": "Taipei Raohe / Taichung Fengjia",
        "ja": "\u53F0\u5317\u9952\u6CB3 / \u53F0\u4E2D\u9022\u7532",
        "ko": "\uD0C0\uC774\uBCA0\uC774 \uB77C\uC624\uD5C8 / \uD0C0\uC774\uC911 \uD391\uC790",
        "vi": "Raohe \u0110\xE0i B\u1EAFc / Fengjia \u0110\xE0i Trung"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u9952\u6CB3\u8857\u89C0\u5149\u591C\u5E02",
          "en": "Raohe Night Market",
          "ja": "\u9952\u6CB3\u8857\u591C\u5E02",
          "ko": "\uB77C\uC624\uD5C8\uC81C \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Raohe"
        },
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        }
      ],
      "historyStory": {
        "zh-TW": "\u50B3\u7D71\u7CD6\u846B\u8606\u50B3\u5165\u53F0\u7063\u5F8C\uFF0C\u591C\u5E02\u5C0F\u8CA9\u5275\u9020\u6027\u5730\u6539\u7528\u591A\u6C41\u7684\u53F0\u7063\u5728\u5730\u8056\u5973\u5C0F\u756A\u8304\uFF0C\u4E26\u5728\u756A\u8304\u4E2D\u592E\u6A6B\u5207\u4E00\u5200\uFF0C\u593E\u5165\u53E4\u65E9\u5473\u9E79\u751C\u9ED1\u300E\u5316\u61C9\u5B50\u300F\u871C\u991E\uFF0C\u9178\u3001\u751C\u3001\u9E79\u3001\u8106\u56DB\u91CD\u5C64\u6B21\u7D55\u5999\u5E73\u8861\uFF0C\u6210\u70BA\u53F0\u7063\u7368\u6A39\u4E00\u5E5F\u7684\u7D93\u5178\u751C\u54C1\u3002",
        "en": "Taiwanese vendors innovated the traditional candied fruit by stuffing sweet cherry tomatoes with savory salted black plum preserves (Hua Ying Zi), creating the perfect balance of crisp, sweet, tangy and salty.",
        "ja": "\u4F1D\u7D71\u306E\u30D5\u30EB\u30FC\u30C4\u98F4\u3092\u53F0\u6E7E\u98A8\u306B\u30A2\u30EC\u30F3\u30B8\u3002\u7518\u9178\u3063\u3071\u3044\u30D7\u30C1\u30C8\u30DE\u30C8\u306B\u30C9\u30E9\u30A4\u30D7\u30E9\u30E0\uFF08\u5316\u5FDC\u5B50\uFF09\u3092\u631F\u307F\u3001\u8584\u3044\u98F4\u3067\u30B3\u30FC\u30C6\u30A3\u30F3\u30B0\u3057\u305F\u53F0\u6E7E\u30AA\u30EA\u30B8\u30CA\u30EB\u3002",
        "ko": "\uC804\uD1B5 \uD0D5\uD6C4\uB8E8\uC5D0 \uB300\uB9CC\uC758 \uB2EC\uCF64\uD55C \uBC29\uC6B8\uD1A0\uB9C8\uD1A0\uC640 \uC9ED\uC870\uB984\uD55C \uAC74\uB9E4\uC2E4\uC744 \uC0CC\uB4DC\uD558\uC5EC \uC587\uC740 \uC124\uD0D5 \uCF54\uD305\uC744 \uC785\uD78C \uB300\uB9CC\uB9CC\uC758 \uB3C5\uCC3D\uC801\uC778 \uB514\uC800\uD2B8\uC785\uB2C8\uB2E4.",
        "vi": "Bi\u1EBFn t\u1EA5u \u0111\u1ED9c \u0111\xE1o c\u1EE7a \u0110\xE0i Loan khi r\u1EA1ch \u0111\xF4i qu\u1EA3 c\xE0 chua bi nh\xE9t mi\u1EBFng x\xED mu\u1ED9i chua m\u1EB7n r\u1ED3i \xE1o l\u1EDBp \u0111\u01B0\u1EDDng gi\xF2n tan b\xF3ng b\u1EA9y."
      },
      "taiwaneseHokkien": "Thn\u0302g-h\xF3o-l\xF4o (\u310A\u3125\u02CA \u310F\u311B \u310C\u311B)",
      "mandarinPinyin": "T\xE1ngh\xFAlu (\u310A\u3124\u02CA \u310F\u3128\u02CA \u310C\u3128\u02D9)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u756A\u8304\u871C\u991E\u7CD6\u846B\u8606\u4F86\u5169\u652F\uFF0C\u8981\u8106\u76AE\u51B0\u904E\u7684"
    },
    "ingredients": [
      {
        "id": "cherry-tomatoes",
        "name": {
          "zh-TW": "\u65B0\u9BAE\u8056\u5973\u5C0F\u756A\u8304 (\u6D17\u6DE8\u5FB9\u5E95\u64E6\u4E7E)",
          "en": "Fresh Cherry Tomatoes (Washed & Thoroughly Dried)",
          "ja": "\u65B0\u9BAE\u306A\u30D7\u30C1\u30C8\u30DE\u30C8\uFF08\u6C34\u6C17\u3092\u5B8C\u5168\u306B\u62ED\u304D\u53D6\u308B\uFF09",
          "ko": "\uC2E0\uC120\uD55C \uBC29\uC6B8\uD1A0\uB9C8\uD1A0 (\uBB3C\uAE30 \uC644\uC804 \uC81C\uAC70)",
          "vi": "C\xE0 chua bi t\u01B0\u01A1i (R\u1EEDa s\u1EA1ch th\u1EA5m kh\xF4)"
        },
        "amount": 300,
        "unitMetric": "g",
        "unitUS": "10 oz",
        "isKeyFlavor": true,
        "chineseName": "\u8056\u5973\u5C0F\u756A\u8304",
        "chinesePinyin": "Sh\xE8ngn\u01DA f\u0101nqi\xE9"
      },
      {
        "id": "salted-plum-preserves",
        "name": {
          "zh-TW": "\u53F0\u7063\u53E4\u65E9\u5473\u5316\u61C9\u5B50\u871C\u991E (\u5207\u539A\u7247)",
          "en": "Taiwanese Dried Salted Black Plum (Hua Ying Zi)",
          "ja": "\u53F0\u6E7E\u30C9\u30E9\u30A4\u30D7\u30E9\u30E0\uFF08\u5316\u5FDC\u5B50\uFF09",
          "ko": "\uB300\uB9CC \uC804\uD1B5 \uAC74\uB9E4\uC2E4 (\uD654\uC789\uC988)",
          "vi": "X\xED mu\u1ED9i \u0111en m\u1EB7n ng\u1ECDt (H\xF3a \u1EE9ng t\u1EED)"
        },
        "amount": 80,
        "unitMetric": "g",
        "unitUS": "3 oz",
        "isKeyFlavor": true,
        "chineseName": "\u5316\u61C9\u5B50\u871C\u991E",
        "chinesePinyin": "Hu\xE0y\xECngz\u01D0"
      },
      {
        "id": "sugar",
        "name": {
          "zh-TW": "\u767D\u7802\u7CD6\u6216\u4E8C\u7802",
          "en": "Granulated White Sugar",
          "ja": "\u30B0\u30E9\u30CB\u30E5\u30FC\u7CD6",
          "ko": "\uBC31\uC124\uD0D5",
          "vi": "\u0110\u01B0\u1EDDng c\xE1t tr\u1EAFng"
        },
        "amount": 200,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "chineseName": "\u767D\u7802\u7CD6",
        "chinesePinyin": "B\xE1ish\u0101t\xE1ng"
      },
      {
        "id": "water-syrup",
        "name": {
          "zh-TW": "\u6C34\u8207\u9EA5\u82BD\u7CD6 (\u589E\u52A0\u5149\u6FA4\u8207\u9632\u8FD4\u7802)",
          "en": "Water & Maltose Syrup",
          "ja": "\u6C34\u3068\u6C34\u98F4\uFF08\u30C4\u30E4\u51FA\u3057\u7528\uFF09",
          "ko": "\uBB3C \uBC0F \uBB3C\uC5FF",
          "vi": "N\u01B0\u1EDBc v\xE0 m\u1EA1ch nha"
        },
        "amount": 100,
        "unitMetric": "ml",
        "unitUS": "0.4 cup",
        "chineseName": "\u6E05\u6C34\u9EA5\u82BD\u7CD6",
        "chinesePinyin": "M\xE0iy\xE1t\xE1ng"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u756A\u8304\u6A6B\u5207\u5207\u53E3\u4E26\u593E\u5165\u5316\u61C9\u5B50\u871C\u991E",
          "en": "Slit Tomatoes & Stuff with Salted Plum Preserves",
          "ja": "\u30C8\u30DE\u30C8\u306B\u5207\u308A\u76EE\u3092\u5165\u308C\u30C9\u30E9\u30A4\u30D7\u30E9\u30E0\u3092\u631F\u3080",
          "ko": "\uD1A0\uB9C8\uD1A0\uC5D0 \uCE7C\uC9D1\uC744 \uB0B4\uC5B4 \uAC74\uB9E4\uC2E4 \uB07C\uC6B0\uAE30",
          "vi": "R\u1EA1ch ngang th\xE2n c\xE0 chua bi v\xE0 nh\xE9t mi\u1EBFng x\xED mu\u1ED9i v\xE0o gi\u1EEFa"
        },
        "instruction": {
          "zh-TW": "\u5C0F\u756A\u8304\u6D17\u6DE8\u6458\u8482\uFF0C\u7528\u5EDA\u623F\u7D19\u5DFE\u5FB9\u5E95\u64E6\u4E7E\u8868\u9762\u6C34\u5206\uFF08\u6C34\u5206\u6703\u4F7F\u7CD6\u8863\u5316\u6C34\uFF09\u3002\u5728\u756A\u8304\u8170\u90E8\u5207\u4E00\u5200\u4E0D\u5207\u65B7\uFF0C\u585E\u5165\u4E00\u7247\u539A\u5BE6\u7684\u5316\u61C9\u5B50\u871C\u991E\uFF0C\u7528\u7AF9\u7C64\u4E32\u8D77 4~5 \u9846\u3002",
          "en": "Wash and completely dry cherry tomatoes. Slit waist without cutting through, insert a slice of salted plum preserve. Skewer 4-5 tomatoes per bamboo stick.",
          "ja": "\u30C8\u30DE\u30C8\u306E\u6C34\u6C17\u3092\u5B8C\u5168\u306B\u62ED\u304D\u53D6\u308A\u3001\u771F\u3093\u4E2D\u306B\u5207\u308A\u8FBC\u307F\u3092\u5165\u308C\u3066\u30C9\u30E9\u30A4\u30D7\u30E9\u30E0\u3092\u631F\u307F\u3001\u7AF9\u4E32\u306B4\u301C5\u500B\u305A\u3064\u523A\u3057\u307E\u3059\u3002",
          "ko": "\uBB3C\uAE30\uB97C \uC644\uBCBD\uD788 \uB2E6\uC740 \uBC29\uC6B8\uD1A0\uB9C8\uD1A0\uC5D0 \uCE7C\uC9D1\uC744 \uB0B4\uACE0 \uAC74\uB9E4\uC2E4\uC744 \uB07C\uC6B4 \uB4A4 \uAF2C\uCE58\uC5D0 4-5\uAC1C\uC529 \uAF42\uC2B5\uB2C8\uB2E4.",
          "vi": "Lau th\u1EADt kh\xF4 t\u1EEBng qu\u1EA3 c\xE0 chua, r\u1EA1ch m\u1ED9t \u0111\u01B0\u1EDDng ngang nh\xE9t mi\u1EBFng x\xED mu\u1ED9i v\xE0o r\u1ED3i xi\xEAn 4-5 qu\u1EA3 v\xE0o que tre."
        },
        "durationSeconds": 600,
        "image": "/images/taiwan-tanghulu-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u6162\u706B\u71AC\u716E\u9EC3\u91D1\u6676\u7469\u7CD6\u6F3F\u81F3 150\xB0C",
          "en": "Simmer Sugar Syrup to 150\xB0C (Hard Crack Stage)",
          "ja": "\u7802\u7CD6\u3068\u6C34\u3092\u5F31\u706B\u3067\u716E\u8A70\u3081150\u2103\u306E\u3079\u3063\u7532\u98F4\u3092\u4F5C\u308B",
          "ko": "\uC124\uD0D5\uBB3C\uC744 \uC57D\uBD88\uC5D0\uC11C 150\xB0C\uAE4C\uC9C0 \uB053\uC5EC \uC2DC\uB7FD \uB9CC\uB4E4\uAE30",
          "vi": "\u0110un \u0111\u01B0\u1EDDng v\xE0 m\u1EA1ch nha tr\xEAn l\u1EEDa nh\u1ECF \u0111\u1EA1t nhi\u1EC7t \u0111\u1ED9 150\xB0C"
        },
        "instruction": {
          "zh-TW": "\u539A\u5E95\u5C0F\u934B\u52A0\u5165\u7802\u7CD6\u3001\u6C34\u8207\u9EA5\u82BD\u7CD6\uFF08\u6BD4\u4F8B 2:1\uFF09\u3002\u4E2D\u5C0F\u706B\u52A0\u71B1\uFF0C\u5207\u8A18\u71AC\u716E\u904E\u7A0B\u4E2D\u7D55\u5C0D\u4E0D\u8981\u652A\u62CC\uFF08\u652A\u62CC\u6703\u53CD\u7802\u7FFB\u767D\uFF09\u3002\u716E\u7D04 8~10 \u5206\u9418\uFF0C\u7CD6\u6F3F\u5192\u51FA\u5BC6\u96C6\u7D30\u5C0F\u6CE1\u6CAB\u4E14\u5448\u5FAE\u6DE1\u7425\u73C0\u8272\u3001\u6EAB\u5EA6\u9054 150\xB0C\u3002",
          "en": "Combine sugar, water and maltose in saucepan. Simmer over medium-low heat WITHOUT stirring (stirring causes crystallization). Cook 8-10 mins until dense small bubbles form and reaches 150\xB0C (300\xB0F).",
          "ja": "\u934B\u306B\u7802\u7CD6\u3001\u6C34\u3001\u6C34\u98F4\u3092\u5165\u308C\u3001\u6C7A\u3057\u3066\u304B\u304D\u6DF7\u305C\u305A\u306B\u5F31\u706B\u30678\u301C10\u5206\u716E\u8A70\u3081\u307E\u3059\u3002\u8584\u3044\u7425\u73C0\u8272\u306B\u306A\u308A150\u2103\u306B\u9054\u3057\u305F\u3089\u706B\u3092\u6B62\u3081\u307E\u3059\u3002",
          "ko": "\uB0C4\uBE44\uC5D0 \uC124\uD0D5\uACFC \uBB3C, \uBB3C\uC5FF\uC744 \uB123\uACE0 \uC808\uB300 \uC813\uC9C0 \uC54A\uC740 \uCC44 \uC57D\uBD88\uC5D0\uC11C 8-10\uBD84\uAC04 \uB053\uC785\uB2C8\uB2E4. \uC605\uC740 \uD638\uBC15\uC0C9\uC744 \uB760\uACE0 150\xB0C\uAC00 \uB418\uBA74 \uC644\uC131\uC785\uB2C8\uB2E4.",
          "vi": "Cho \u0111\u01B0\u1EDDng, n\u01B0\u1EDBc, m\u1EA1ch nha v\xE0o n\u1ED3i \u0111un nh\u1ECF l\u1EEDa, tuy\u1EC7t \u0111\u1ED1i kh\xF4ng khu\u1EA5y tr\xE1nh l\u1EA1i \u0111\u01B0\u1EDDng. \u0110un 8-10 ph\xFAt \u0111\u1EBFn khi ng\u1EA3 v\xE0ng nh\u1EA1t 150\xB0C."
        },
        "durationSeconds": 600,
        "image": "/images/taiwan-tanghulu-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u51B7\u6C34\u7B77\u5B50\u6E2C\u7CD6\u6CD5\u78BA\u8A8D\u786C\u8106\u5EA6",
          "en": "Cold Water Chopstick Test for Crispness",
          "ja": "\u51B7\u6C34\u30C6\u30B9\u30C8\u3067\u98F4\u306E\u56FA\u3055\u3092\u78BA\u8A8D\u3059\u308B",
          "ko": "\uCC2C\uBB3C \uD14C\uC2A4\uD2B8\uB85C \uBC14\uC0AD\uD55C \uAD73\uAE30 \uD655\uC778\uD558\uAE30",
          "vi": "Th\u1EED \u0111\u01B0\u1EDDng b\u1EB1ng n\u01B0\u1EDBc l\u1EA1nh ki\u1EC3m tra \u0111\u1ED9 gi\xF2n r\u1EE5m"
        },
        "instruction": {
          "zh-TW": "\u7528\u7AF9\u7B77\u6CBE\u53D6\u5C11\u8A31\u71B1\u7CD6\u6F3F\uFF0C\u8FC5\u901F\u6D78\u5165\u51B0\u6C34\u4E2D 3 \u79D2\u3002\u53D6\u51FA\u7528\u7259\u9F52\u54AC\u4E00\u53E3\uFF0C\u5982\u679C\u767C\u51FA\u6E05\u8106\u7684\u300E\u5494\u5693\u300F\u8072\u4E14\u4E0D\u9ECF\u7259\uFF0C\u5373\u4EE3\u8868\u7CD6\u6F3F\u71AC\u88FD\u5B8C\u7F8E\uFF01",
          "en": "Dip chopstick into hot syrup then instantly submerge into ice water for 3 secs. Bite it: if it shatters with a crisp crunch and doesn't stick to teeth, it's ready!",
          "ja": "\u7BB8\u306E\u5148\u306B\u98F4\u3092\u3064\u3051\u6C37\u6C34\u306B3\u79D2\u6D78\u3057\u307E\u3059\u3002\u565B\u3093\u3067\u307F\u3066\u300E\u30AB\u30EA\u30C3\u300F\u3068\u97F3\u304C\u3057\u3066\u6B6F\u306B\u304F\u3063\u3064\u304B\u306A\u3051\u308C\u3070\u5B8C\u74A7\u3067\u3059\uFF01",
          "ko": "\uC813\uAC00\uB77D \uB05D\uC5D0 \uC2DC\uB7FD\uC744 \uBB3B\uD600 \uC5BC\uC74C\uBB3C\uC5D0 3\uCD08\uAC04 \uB2F4\uADFC \uB4A4 \uAE68\uBB3C\uC5C8\uC744 \uB54C '\uB531' \uC18C\uB9AC\uAC00 \uB098\uBA70 \uBC14\uC0AD\uD558\uBA74 \uC900\uBE44 \uC644\uB8CC!",
          "vi": "Ch\u1EA5m \u0111\u1EA7u \u0111\u0169a v\xE0o \u0111\u01B0\u1EDDng r\u1ED3i nh\xFAng ngay v\xE0o b\xE1t n\u01B0\u1EDBc \u0111\xE1 3 gi\xE2y, c\u1EAFn th\u1EED th\u1EA5y gi\xF2n tan kh\xF4ng d\xEDnh r\u0103ng l\xE0 \u0111\u1EA1t chu\u1EA9n!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-tanghulu-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u6975\u901F\u65CB\u8F49\u88F9\u4E0A\u4E00\u5C64\u8D85\u8584\u7CD6\u8863\u51B7\u537B\uFF01",
          "en": "Quick Spin to Coat Thin Glass Shell & Cool",
          "ja": "\u7D20\u65E9\u304F\u56DE\u3057\u3066\u6975\u8584\u306E\u98F4\u3092\u307E\u3068\u308F\u305B\u3001\u51B7\u3084\u3059\uFF01",
          "ko": "\uBE60\uB974\uAC8C \uD68C\uC804\uC2DC\uCF1C \uC587\uC740 \uC124\uD0D5 \uCF54\uD305\uC744 \uC785\uD788\uACE0 \uC2DD\uD788\uAE30!",
          "vi": "L\u0103n nhanh qu\u1EA3 c\xE0 chua qua l\u1EDBp \u0111\u01B0\u1EDDng m\u1ECFng v\xE0 l\xE0m ngu\u1ED9i gi\xF2n tan!"
        },
        "instruction": {
          "zh-TW": "\u5C07\u756A\u8304\u4E32\u50BE\u659C\u8CBC\u8457\u7CD6\u6F3F\u8868\u9762\u8FC5\u901F\u65CB\u8F49\u4E00\u5708\uFF08\u8584\u8584\u4E00\u5C64\u5373\u53EF\uFF0C\u904E\u539A\u6703\u786C\u54AC\u4E0D\u52D5\uFF09\u3002\u7ACB\u5373\u5E73\u653E\u5728\u5857\u62B9\u8584\u6CB9\u7684\u70D8\u7119\u7D19\u6216\u9435\u677F\u4E0A\uFF0C\u5E38\u6EAB\u51B7\u537B 2 \u5206\u9418\u5373\u53EF\u51DD\u56FA\u6210\u73BB\u7483\u822C\u6E05\u8106\u7684\u7CD6\u846B\u8606\uFF01",
          "en": "Tilt skewered tomatoes and spin swiftly across surface for an ultra-thin coat. Transfer immediately to oiled parchment paper. Cool for 2 mins to form a glass-like crunch!",
          "ja": "\u4E32\u3092\u7D20\u65E9\u304F\u56DE\u3057\u3066\u8584\u304F\u98F4\u3092\u7D61\u3081\u3001\u8584\u304F\u6CB9\u3092\u5857\u3063\u305F\u30AF\u30C3\u30AD\u30F3\u30B0\u30B7\u30FC\u30C8\u306B\u7F6E\u304D\u307E\u3059\u30022\u5206\u51B7\u307E\u305B\u3070\u30D1\u30EA\u30D1\u30EA\u306E\u7CD6\u846B\u82A6\u304C\u5B8C\u6210\uFF01",
          "ko": "\uAF2C\uCE58\uB97C \uC2DC\uB7FD \uD45C\uBA74\uC5D0 \uB300\uACE0 \uC7AC\uBE60\uB974\uAC8C \uD55C \uBC14\uD034 \uAD74\uB824 \uC587\uAC8C \uCF54\uD305\uD55C \uB4A4 \uAE30\uB984 \uBC14\uB978 \uC720\uC0B0\uC9C0\uC5D0 \uC62C\uB824 2\uBD84\uAC04 \uC2DD\uD799\uB2C8\uB2E4.",
          "vi": "Nghi\xEAng xi\xEAn que l\u0103n nhanh 1 v\xF2ng qua m\u1EB7t \u0111\u01B0\u1EDDng t\u1EA1o l\u1EDBp v\u1ECF si\xEAu m\u1ECFng, \u0111\u1EB7t l\xEAn gi\u1EA5y n\u01B0\u1EDBng thoa d\u1EA7u \u0111\u1EC3 ngu\u1ED9i 2 ph\xFAt l\xE0 th\u01B0\u1EDFng th\u1EE9c!"
        },
        "durationSeconds": 120,
        "image": "/images/taiwan-tanghulu-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "sugar-sticky",
        "problem": {
          "zh-TW": "\u7CD6\u846B\u8606\u5403\u8D77\u4F86\u9ECF\u7259\u3001\u7CD6\u8863\u5F88\u5FEB\u878D\u5316\u5316\u6C34\uFF1F",
          "en": "Why is the candy shell sticky and melting?",
          "ja": "\u98F4\u304C\u6B6F\u306B\u304F\u3063\u3064\u3044\u305F\u308A\u3001\u6EB6\u3051\u3066\u30D9\u30C1\u30E3\u30D9\u30C1\u30E3\u306B\u306A\u308B\uFF1F",
          "ko": "\uD0D5\uD6C4\uB8E8\uAC00 \uCE58\uC544\uC5D0 \uB2EC\uB77C\uBD99\uACE0 \uC27D\uAC8C \uB179\uC544\uB0B4\uB9AC\uB098\uC694?",
          "vi": "K\u1EB9o h\u1ED3 l\xF4 b\u1ECB d\xEDnh r\u0103ng ho\u1EB7c nhanh ch\u1EA3y n\u01B0\u1EDBc?"
        },
        "cause": {
          "zh-TW": "\u7CD6\u6F3F\u6EAB\u5EA6\u4E0D\u8DB3 150\xB0C\uFF0C\u6216\u756A\u8304\u8868\u9762\u6B98\u7559\u751F\u6C34\u3002",
          "en": "Syrup did not reach 150\xB0C or tomatoes had surface moisture.",
          "ja": "\u98F4\u306E\u52A0\u71B1\u6E29\u5EA6\u304C\u4F4E\u304B\u3063\u305F\u304B\u3001\u30C8\u30DE\u30C8\u306E\u6C34\u6C17\u304C\u6B8B\u3063\u3066\u3044\u307E\u3057\u305F\u3002",
          "ko": "\uC2DC\uB7FD \uC628\uB3C4\uAC00 150\xB0C \uBBF8\uB9CC\uC774\uC5C8\uAC70\uB098 \uD1A0\uB9C8\uD1A0\uC5D0 \uBB3C\uAE30\uAC00 \uB0A8\uC544\uC788\uC5C8\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "\u0110\u01B0\u1EDDng ch\u01B0a \u0111\u1EA1t \u0111\u1EE7 nhi\u1EC7t 150\xB0C ho\u1EB7c c\xE0 chua c\xF2n \u01B0\u1EDBt n\u01B0\u1EDBc."
        },
        "solution": {
          "zh-TW": "\u756A\u8304\u52D9\u5FC5\u7528\u7D19\u5DFE\u64E6\u5230\u5168\u4E7E\uFF1B\u7CD6\u6F3F\u71AC\u5230\u6DE1\u7425\u73C0\u8272\u3001\u51B7\u6C34\u54AC\u4E0B\u6E05\u8106\u5494\u5693\u8072\u518D\u88F9\uFF01",
          "en": "Completely dry fruit; cook syrup to light amber and pass the ice water snap test!",
          "ja": "\u6C34\u6C17\u3092\u5B8C\u5168\u306B\u62ED\u304D\u3001\u6C37\u6C34\u30C6\u30B9\u30C8\u3067\u30AB\u30EA\u30C3\u3068\u5272\u308C\u308B\u307E\u3067\u3057\u3063\u304B\u308A\u716E\u8A70\u3081\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uBB3C\uAE30\uB97C \uC644\uC804\uD788 \uC5C6\uC560\uACE0 \uC2DC\uB7FD\uC774 \uB9D1\uC740 \uD638\uBC15\uC0C9\uC774 \uB420 \uB54C\uAE4C\uC9C0 \uB053\uC774\uC138\uC694!",
          "vi": "Th\u1EA5m th\u1EADt kh\xF4 qu\u1EA3 c\xE0 chua v\xE0 th\u1EED n\u01B0\u1EDBc \u0111\xE1 th\u1EA5y gi\xF2n \u0111anh m\u1EDBi b\u1EAFt \u0111\u1EA7u nh\xFAng!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u7CD6\u8863\u8D8A\u8584\u8D8A\u9AD8\u7D1A\uFF01\u88F9\u7CD6\u6642\u53EA\u8981\u5728\u8868\u9762\u6F02\u6D6E\u65CB\u8F49\u534A\u5708\uFF0C\u7529\u6389\u591A\u9918\u7CD6\u6DB2\uFF0C\u5403\u8D77\u4F86\u624D\u6703\u6709\u8584\u5982\u87EC\u7FFC\u7684\u6E05\u8106\u7206\u6C41\u5FEB\u611F\uFF01",
        "en": "Thinner is better! Spin lightly across surface and shake off excess for that paper-thin glass crunch!",
        "ja": "\u98F4\u306F\u8584\u3044\u307B\u3069\u7F8E\u5473\uFF01\u30B5\u30C3\u3068\u8868\u9762\u3092\u4E00\u56DE\u8EE2\u3055\u305B\u3066\u4F59\u5206\u306A\u98F4\u3092\u843D\u3068\u3059\u306E\u304C\u30D7\u30ED\u306E\u6280\u3067\u3059\uFF01",
        "ko": "\uC124\uD0D5 \uCF54\uD305\uC740 \uC587\uC744\uC218\uB85D \uC608\uC220! \uC0B4\uC9DD\uB9CC \uAD74\uB824 \uC5EC\uBD84\uC758 \uC2DC\uB7FD\uC744 \uD138\uC5B4\uB0B4\uC57C \uC720\uB9AC\uCC98\uB7FC \uBC14\uC0AD\uD569\uB2C8\uB2E4!",
        "vi": "L\u1EDBp \u0111\u01B0\u1EDDng c\xE0ng m\u1ECFng c\xE0ng \u0111\u1EC9nh! Ch\u1EC9 c\u1EA7n l\u01B0\u1EDBt nh\u1EB9 m\u1ED9t v\xF2ng l\u1EAFc nh\u1EB9 cho r\u01A1i b\u1EDBt \u0111\u01B0\u1EDDng th\u1EEBa \u0111\u1EC3 c\u1EAFn gi\xF2n tan b\xF9ng n\u1ED5 v\u1ECB gi\xE1c!"
      }
    ]
  },
  {
    "id": "frog-eggs-drink",
    "slug": "frog-eggs-drink",
    "title": {
      "zh-TW": "\u58EB\u6797\u738B\u8A18\u6AB8\u6AAC\u611B\u7389\u9752\u86D9\u4E0B\u86CB",
      "en": "Shilin Frog Eggs Drink (Aiyu Jelly & Tapioca)",
      "ja": "\u58EB\u6797\u540D\u7269 \u30EC\u30E2\u30F3\u611B\u7389\u30BF\u30D4\u30AA\u30AB\uFF08\u9752\u86D9\u4E0B\u86CB\uFF09",
      "ko": "\uC2A4\uB9B0 \uC57C\uC2DC\uC7A5 \uB808\uBAAC \uC544\uC774\uC704 \uD751\uB2F9 \uBC84\uBE14\uD2F0 (\uAC1C\uAD6C\uB9AC\uC54C \uC74C\uB8CC)",
      "vi": "Th\u1EA1ch \xC1i Ng\u1ECDc tr\xE2n ch\xE2u chanh t\u01B0\u01A1i ch\u1EE3 \u0111\xEAm (Thanh Oa H\u1EA1 \u0110\u1EA3n)"
    },
    "subtitle": {
      "zh-TW": "\u6162\u706B\u9ED1\u7CD6\u5927\u7C89\u5713\u30FB\u91CE\u751F\u624B\u6D17\u611B\u7389\u51CD\u30FB\u9BAE\u69A8\u4E5D\u5982\u6AB8\u6AAC\u788E\u51B0",
      "en": "Slow-Simmered Black Sugar Pearls, Hand-Washed Aiyu Jelly & Fresh Lemon Ice",
      "ja": "\u9ED2\u7CD6\u5927\u7C92\u30BF\u30D4\u30AA\u30AB\u30FB\u5929\u7136\u624B\u63C9\u307F\u611B\u7389\u30BC\u30EA\u30FC\u30FB\u643E\u308A\u305F\u3066\u30EC\u30E2\u30F3\u306E\u30AF\u30E9\u30C3\u30B7\u30E5\u30A2\u30A4\u30B9",
      "ko": "\uD751\uB2F9\uC5D0 \uC878\uC778 \uCAC0\uB4DD\uD55C \uB300\uC655 \uD0C0\uD53C\uC624\uCE74\uD384, \uC218\uC81C \uC544\uC774\uC704 \uC824\uB9AC, \uC0DD\uB808\uBAAC \uC2AC\uB7EC\uC2DC",
      "vi": "Tr\xE2n ch\xE2u \u0111en d\u1EBBo qu\xE1nh, th\u1EA1ch \xE1i ng\u1ECDc thi\xEAn nhi\xEAn c\xF9ng \u0111\xE1 b\xE0o chanh t\u01B0\u01A1i m\xE1t l\u1EA1nh"
    },
    "tagline": {
      "zh-TW": "\u58EB\u6797\u591C\u5E02\u6700\u89E3\u81A9\u7684\u6392\u968A\u8056\u54C1\uFF01\u9ED1\u4EAE\u5982\u86D9\u5375\u7684\u6676\u7469\u73CD\u73E0\u8207\u5929\u7136\u611B\u7389",
      "en": "The ultimate refreshing palate cleanser of Shilin Night Market: tangy, bouncy and icy cold",
      "ja": "\u58EB\u6797\u591C\u5E02\u306E\u770B\u677F\u30C9\u30EA\u30F3\u30AF\uFF01\u30BF\u30D4\u30AA\u30AB\u306E\u5F62\u304C\u30AB\u30A8\u30EB\u306E\u5375\u306B\u4F3C\u3066\u3044\u308B\u3053\u3068\u304B\u3089\u540D\u4ED8\u3051\u3089\u308C\u305F\u723D\u5FEB\u30B9\u30A4\u30FC\u30C4",
      "ko": "\uC2A4\uB9B0 \uC57C\uC2DC\uC7A5\uC758 \uC804\uC124\uC801\uC778 \uAC08\uC99D \uD574\uC18C \uC74C\uB8CC! \uCAC0\uB4DD\uD55C \uD384\uACFC \uC0C8\uCF64\uB2EC\uCF64 \uB808\uBAAC\uC758 \uC870\uD654",
      "vi": "Th\u1EE9c u\u1ED1ng gi\u1EA3i nhi\u1EC7t huy\u1EC1n tho\u1EA1i ch\u1EE3 \u0111\xEAm Shilin xua tan m\u1ECDi c\u1EA3m gi\xE1c ng\u1EA5y m\u1EE1"
    },
    "heroImage": "/images/taiwan-frog-eggs-hero.jpg",
    "difficulty": "easy",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "defaultServings": 2,
    "caloriesPerServing": 220,
    "category": "desserts",
    "dietaryTags": [
      "classic",
      "vegetarian",
      "vegan",
      "glutenFree"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5317\u58EB\u6797\u591C\u5E02",
        "en": "Taipei Shilin Night Market",
        "ja": "\u53F0\u5317\u58EB\u6797\u591C\u5E02",
        "ko": "\uD0C0\uC774\uBCA0\uC774 \uC2A4\uB9B0 \uC57C\uC2DC\uC7A5",
        "vi": "Ch\u1EE3 \u0111\xEAm Shilin \u0110\xE0i B\u1EAFc"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u58EB\u6797\u591C\u5E02\uFF08\u738B\u8A18\u9752\u86D9\u4E0B\u86CB\uFF09",
          "en": "Shilin Night Market (Wang's)",
          "ja": "\u58EB\u6797\u591C\u5E02\uFF08\u738B\u8A18\u9752\u86D9\u4E0B\u86CB\uFF09",
          "ko": "\uC2A4\uB9B0 \uC57C\uC2DC\uC7A5 (\uC655\uC9C0 \uCE6D\uC640\uC0E4\uB2E8)",
          "vi": "Ch\u1EE3 \u0111\xEAm Shilin (V\u01B0\u01A1ng K\xFD)"
        },
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        }
      ],
      "historyStory": {
        "zh-TW": "\u5275\u59CB\u65BC\u53F0\u5317\u58EB\u6797\u591C\u5E02\u967D\u660E\u6232\u9662\u524D\uFF0C\u56E0\u9ED1\u7CD6\u5927\u7C89\u5713\u716E\u597D\u5F8C\u5713\u6F64\u9ED1\u4EAE\u3001\u4E2D\u5FC3\u5FAE\u900F\u767D\u5FC3\u5B9B\u5982\u300E\u9752\u86D9\u5375\u300F\u800C\u5F97\u540D\u3002\u642D\u914D\u53F0\u7063\u7279\u6709\u963F\u91CC\u5C71\u91CE\u751F\u611B\u7389\u5B50\u624B\u6413\u611B\u7389\u51CD\u8207\u5C4F\u6771\u4E5D\u5982\u9BAE\u69A8\u6AB8\u6AAC\u6C41\uFF0C\u9178\u723DQ\u5F48\u3002",
        "en": "Originated in front of Shilin Yangming Cinema, playfully named 'Frog Eggs' because shiny black tapioca pearls resemble frog eggs. Paired with wild Alishan Aiyu jelly and fresh lemon juice.",
        "ja": "\u58EB\u6797\u591C\u5E02\u767A\u7965\u306E\u30E6\u30CB\u30FC\u30AF\u306A\u540D\u524D\u306E\u30C7\u30B6\u30FC\u30C8\u3002\u5927\u7C92\u30BF\u30D4\u30AA\u30AB\u306E\u898B\u305F\u76EE\u304C\u30AB\u30A8\u30EB\u306E\u5375\u306B\u4F3C\u3066\u3044\u308B\u3053\u3068\u304B\u3089\u547D\u540D\u3002\u963F\u91CC\u5C71\u306E\u5929\u7136\u611B\u7389\u30BC\u30EA\u30FC\u3068\u751F\u30EC\u30E2\u30F3\u679C\u6C41\u3067\u723D\u3084\u304B\u306B\u3044\u305F\u3060\u304D\u307E\u3059\u3002",
        "ko": "\uC2A4\uB9B0 \uC57C\uC2DC\uC7A5\uC5D0\uC11C \uD0C4\uC0DD\uD55C \uBA85\uBB3C \uC74C\uB8CC\uB85C, \uD751\uB2F9 \uBC84\uBE14\uC758 \uB465\uAE00\uACE0 \uBC18\uC9DD\uC774\uB294 \uBAA8\uC591\uC774 \uAC1C\uAD6C\uB9AC\uC54C\uC744 \uB2EE\uC544 \uBD99\uC5EC\uC9C4 \uC774\uB984\uC785\uB2C8\uB2E4. \uCC9C\uC5F0 \uC544\uC774\uC704 \uC824\uB9AC\uC640 \uB808\uBAAC\uC999\uC774 \uC5B4\uC6B0\uB7EC\uC838 \uC0C1\uD07C\uD569\uB2C8\uB2E4.",
        "vi": "M\xF3n tr\xE1ng mi\u1EC7ng \u0111\u1ED9c \u0111\xE1o ch\u1EE3 \u0111\xEAm Shilin, t\xEAn g\u1ECDi '\u1EBEch \u0111\u1EBB tr\u1EE9ng' xu\u1EA5t ph\xE1t t\u1EEB h\xECnh d\xE1ng tr\xE2n ch\xE2u \u0111en tr\xF2n b\xF3ng nh\u01B0 tr\u1EE9ng \u1EBFch k\u1EBFt h\u1EE3p th\u1EA1ch \xE1i ng\u1ECDc Alishan v\xE0 chanh t\u01B0\u01A1i."
      },
      "taiwaneseHokkien": "Tshinn-ua-lo\u030Dh-nn\u0304g (\u3111\u3127\u3125 \u3128\u311A \u310C\u311C \u310B\u3125)",
      "mandarinPinyin": "Q\u012Bngw\u0101 Xi\xE0d\xE0n (\u3111\u3127\u3125 \u3128\u311A \u3112\u3127\u311A\u02CB \u3109\u3122\u02CB)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u6AB8\u6AAC\u611B\u7389\u9752\u86D9\u4E0B\u86CB\u4E00\u676F\uFF0C\u534A\u7CD6\u5C11\u51B0"
    },
    "ingredients": [
      {
        "id": "black-tapioca-pearls",
        "name": {
          "zh-TW": "\u5929\u7136\u9ED1\u7CD6\u5927\u7C89\u5713 (\u6CE2\u9738\u73CD\u73E0)",
          "en": "Large Black Sugar Tapioca Pearls",
          "ja": "\u5927\u7C92\u9ED2\u7CD6\u30BF\u30D4\u30AA\u30AB",
          "ko": "\uB300\uC655 \uD751\uB2F9 \uD0C0\uD53C\uC624\uCE74 \uD384",
          "vi": "Tr\xE2n ch\xE2u \u0111en h\u1EA1t to n\u1EA5u \u0111\u01B0\u1EDDng n\xE2u"
        },
        "amount": 150,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "isKeyFlavor": true,
        "chineseName": "\u9ED1\u7CD6\u5927\u7C89\u5713",
        "chinesePinyin": "H\u0113it\xE1ng f\u011Bnyu\xE1n"
      },
      {
        "id": "wild-aiyu-jelly",
        "name": {
          "zh-TW": "\u53F0\u7063\u91CE\u751F\u624B\u6413\u611B\u7389\u51CD (\u5207\u5927\u584A)",
          "en": "Hand-Washed Wild Taiwanese Aiyu Jelly",
          "ja": "\u53F0\u6E7E\u7523 \u624B\u63C9\u307F\u5929\u7136\u611B\u7389\u30BC\u30EA\u30FC",
          "ko": "\uC218\uC81C \uCC9C\uC5F0 \uB300\uB9CC \uC544\uC774\uC704 \uC824\uB9AC",
          "vi": "Th\u1EA1ch \xC1i Ng\u1ECDc thi\xEAn nhi\xEAn \u0110\xE0i Loan"
        },
        "amount": 200,
        "unitMetric": "g",
        "unitUS": "7 oz",
        "isKeyFlavor": true,
        "chineseName": "\u5929\u7136\u611B\u7389\u51CD",
        "chinesePinyin": "\xC0iy\xF9 d\xF2ng"
      },
      {
        "id": "fresh-lemon-juice",
        "name": {
          "zh-TW": "\u5C4F\u6771\u4E5D\u5982\u9BAE\u69A8\u6AB8\u6AAC\u6C41",
          "en": "Freshly Squeezed Taiwan Lemon Juice",
          "ja": "\u643E\u308A\u305F\u3066\u751F\u30EC\u30E2\u30F3\u679C\u6C41",
          "ko": "\uAC13 \uC9E0 \uC0DD\uB808\uBAAC\uC999",
          "vi": "N\u01B0\u1EDBc c\u1ED1t chanh t\u01B0\u01A1i nguy\xEAn ch\u1EA5t"
        },
        "amount": 50,
        "unitMetric": "ml",
        "unitUS": "3 tbsp",
        "isKeyFlavor": true,
        "chineseName": "\u9BAE\u69A8\u6AB8\u6AAC\u6C41",
        "chinesePinyin": "N\xEDngm\xE9ng zh\u012B"
      },
      {
        "id": "crushed-ice-syrup",
        "name": {
          "zh-TW": "\u51AC\u74DC\u9ED1\u7CD6\u871C\u8207\u788E\u51B0",
          "en": "Brown Sugar Winter Melon Syrup & Crushed Ice",
          "ja": "\u51AC\u74DC\u9ED2\u7CD6\u30B7\u30ED\u30C3\u30D7\uFF06\u30AF\u30E9\u30C3\u30B7\u30E5\u30A2\u30A4\u30B9",
          "ko": "\uD751\uB2F9 \uC2DC\uB7FD \uBC0F \uAC08\uC740 \uC5BC\uC74C",
          "vi": "Siro \u0111\u01B0\u1EDDng n\xE2u b\xED \u0111ao v\xE0 \u0111\xE1 b\xE0o"
        },
        "amount": 150,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "chineseName": "\u9ED1\u7CD6\u871C\u788E\u51B0",
        "chinesePinyin": "H\u0113it\xE1ng m\xEC"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u6EFE\u6C34\u716E\u900F\u5927\u7C89\u5713\u4E26\u6162\u706B\u60B6\u51FA\u6975\u81F4Q\u5F48",
          "en": "Boil & Steam Pearls to Chewy Perfection",
          "ja": "\u30BF\u30D4\u30AA\u30AB\u3092\u82AF\u307E\u3067\u8339\u3067\u3066\u84B8\u3089\u3057\u3001\u30E2\u30C1\u30E2\u30C1\u306B\u4ED5\u4E0A\u3052\u308B",
          "ko": "\uD0C0\uD53C\uC624\uCE74\uD384\uC744 \uC0B6\uACE0 \uB738 \uB4E4\uC5EC \uADF9\uAC15\uC758 \uCAC0\uB4DD\uD568 \uB9CC\uB4E4\uAE30",
          "vi": "Lu\u1ED9c ch\xEDn tr\xE2n ch\xE2u h\u1EA1t to v\xE0 \u1EE7 cho d\u1EBBo dai t\u1EEBng h\u1EA1t"
        },
        "instruction": {
          "zh-TW": "\u5927\u934B\u6C34\u71D2\u81F3\u5927\u6EFE\uFF0C\u4EE5\u653E\u5C04\u72C0\u6492\u5165\u9ED1\u7CD6\u5927\u7C89\u5713\u3002\u5927\u706B\u716E 20 \u5206\u9418\uFF08\u671F\u9593\u652A\u62CC\u9632\u6B62\u9ECF\u5E95\uFF09\uFF0C\u95DC\u706B\u84CB\u4E0A\u934B\u84CB\u60B6 20 \u5206\u9418\u4F7F\u7C89\u5FC3\u5FB9\u5E95\u719F\u900F\u8EDFQ\u3002",
          "en": "Bring large pot of water to rolling boil. Sprinkle in tapioca pearls, cook on high for 20 mins stirring occasionally. Turn off heat, cover and let steam for 20 mins until chewy throughout.",
          "ja": "\u6CB8\u9A30\u3057\u305F\u6E6F\u306B\u30BF\u30D4\u30AA\u30AB\u3092\u5165\u308C\u5F37\u706B\u306720\u5206\u8339\u3067\u3001\u706B\u3092\u6B62\u3081\u3066\u30D5\u30BF\u3092\u305720\u5206\u84B8\u3089\u3057\u307E\u3059\u3002",
          "ko": "\uB053\uB294 \uBB3C\uC5D0 \uD384\uC744 \uB123\uACE0 20\uBD84\uAC04 \uC800\uC5B4\uAC00\uBA70 \uC0B6\uC740 \uB4A4 \uBD88\uC744 \uB044\uACE0 \uB69C\uAED1\uC744 \uB36E\uC5B4 20\uBD84\uAC04 \uB738\uC744 \uB4E4\uC785\uB2C8\uB2E4.",
          "vi": "Th\u1EA3 tr\xE2n ch\xE2u v\xE0o n\u01B0\u1EDBc s\xF4i s\xF9ng s\u1EE5c lu\u1ED9c 20 ph\xFAt, t\u1EAFt b\u1EBFp \u0111\u1EADy vung \u1EE7 ti\u1EBFp 20 ph\xFAt cho tr\xE2n ch\xE2u d\u1EBBo qu\xE1nh t\u1EEB trong ra ngo\xE0i."
        },
        "durationSeconds": 2400,
        "image": "/images/taiwan-frog-eggs-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u51B0\u6C34\u51B0\u93AE\u701D\u4E7E\u4E26\u62CC\u5165\u6FC3\u90C1\u9ED1\u7CD6\u871C\u6D78\u6F2C",
          "en": "Ice Shock, Drain & Steep in Brown Sugar Syrup",
          "ja": "\u51B7\u6C34\u3067\u7DE0\u3081\u3066\u304B\u3089\u9ED2\u7CD6\u30B7\u30ED\u30C3\u30D7\u306B\u6F2C\u3051\u8FBC\u3080",
          "ko": "\uC5BC\uC74C\uBB3C\uC5D0 \uD5F9\uAD88 \uD0F1\uAE00\uD0F1\uAE00\uD558\uAC8C \uB9CC\uB4E0 \uB4A4 \uD751\uB2F9\uC5D0 \uC808\uC774\uAE30",
          "vi": "X\u1EA3 n\u01B0\u1EDBc \u0111\xE1 l\u1EA1nh cho s\u0103n ch\u1EAFc r\u1ED3i ng\xE2m \u0111\u1EABm siro \u0111\u01B0\u1EDDng n\xE2u"
        },
        "instruction": {
          "zh-TW": "\u6488\u51FA\u71B1\u7C89\u5713\u5012\u5165\u51B0\u6C34\u4E2D\u8FC5\u901F\u6C96\u6D17\u964D\u6EAB\uFF0C\u701D\u4E7E\u6C34\u5206\u3002\u5012\u5165\u539A\u5E95\u934B\u4E2D\uFF0C\u52A0\u5165 50g \u9ED1\u7CD6\u7C89\u5FAE\u706B\u62CC\u7092 3 \u5206\u9418\u81F3\u9ED1\u7CD6\u878D\u5316\u62C9\u7D72\uFF0C\u8B93\u6BCF\u9846\u73CD\u73E0\u88F9\u4E0A\u6676\u7469\u9999\u6FC3\u7684\u9ED1\u7CD6\u871C\u3002",
          "en": "Rinse cooked pearls in ice water to shock them bouncy. Drain and mix in a pot with 50g brown sugar over low heat for 3 mins until glossy sugar syrup coats each pearl.",
          "ja": "\u6C37\u6C34\u3067\u51B7\u3084\u3057\u3066\u5F15\u304D\u7DE0\u3081\u3001\u6C34\u6C17\u3092\u5207\u3063\u3066\u304B\u3089\u9ED2\u7CD6\u3092\u52A0\u3048\u3066\u5F31\u706B\u30673\u5206\u7D61\u3081\u3001\u30C4\u30E4\u30C4\u30E4\u306E\u9ED2\u7CD6\u6F2C\u3051\u306B\u3057\u307E\u3059\u3002",
          "ko": "\uC5BC\uC74C\uBB3C\uC5D0 \uD5F9\uAD88 \uCAC4\uAE43\uD568\uC744 \uC0B4\uB9B0 \uD6C4 \uD751\uB2F9\uC744 \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C 3\uBD84\uAC04 \uC878\uC5EC \uBC18\uC9DD\uC774\uB294 \uD751\uB2F9 \uD384\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "X\u1EA3 qua n\u01B0\u1EDBc \u0111\xE1 cho s\u0103n h\u1EA1t, \u0111\u1EC3 r\xE1o r\u1ED3i tr\u1ED9n v\u1EDBi \u0111\u01B0\u1EDDng n\xE2u tr\xEAn l\u1EEDa nh\u1ECF 3 ph\xFAt cho tr\xE2n ch\xE2u b\xF3ng b\u1EA9y ng\u1EA5m ng\u1ECDt."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-frog-eggs-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u5207\u5927\u584A\u91CE\u751F\u611B\u7389\u51CD\u92EA\u5165\u676F\u5E95",
          "en": "Cut Wild Aiyu Jelly into Chunks & Add to Cup",
          "ja": "\u624B\u63C9\u307F\u611B\u7389\u30BC\u30EA\u30FC\u3092\u5927\u304D\u3081\u306B\u5207\u3063\u3066\u30B0\u30E9\u30B9\u306B\u5165\u308C\u308B",
          "ko": "\uC218\uC81C \uC544\uC774\uC704 \uC824\uB9AC\uB97C \uD07C\uC9C1\uD558\uAC8C \uC370\uC5B4 \uCEF5\uC5D0 \uB2F4\uAE30",
          "vi": "C\u1EAFt th\u1EA1ch \xE1i ng\u1ECDc th\xE0nh t\u1EEBng mi\u1EBFng to cho v\xE0o \u0111\xE1y ly"
        },
        "instruction": {
          "zh-TW": "\u5C07\u6676\u7469\u5254\u900F\u3001\u8EDF\u6ED1\u5982\u679C\u51CD\u7684\u624B\u6413\u91CE\u751F\u611B\u7389\u5207\u6210 2~3cm \u7684\u5927\u65B9\u584A\uFF0C\u8200\u5165\u900F\u660E\u73BB\u7483\u676F\u6216\u5927\u7897\u5E95\u90E8\u7D04\u534A\u6EFF\u3002",
          "en": "Slice translucent bouncy wild aiyu jelly into generous 2-3cm cubes. Spoon into cups filling about half way.",
          "ja": "\u30D7\u30EB\u30D7\u30EB\u306E\u5929\u7136\u611B\u7389\u30BC\u30EA\u30FC\u3092\u4E00\u53E3\u5927\u306E\u5927\u304D\u3081\u306B\u5207\u308A\u3001\u30B0\u30E9\u30B9\u306E\u5E95\u306B\u305F\u3063\u3077\u308A\u6577\u304D\u8A70\u3081\u307E\u3059\u3002",
          "ko": "\uD0F1\uAE00\uD0F1\uAE00\uD558\uACE0 \uD22C\uBA85\uD55C \uC544\uC774\uC704 \uC824\uB9AC\uB97C \uD07C\uC9C1\uD558\uAC8C \uAE4D\uB451\uC370\uAE30\uD558\uC5EC \uCEF5\uC5D0 \uC808\uBC18 \uC815\uB3C4 \uCC44\uC6C1\uB2C8\uB2E4.",
          "vi": "C\u1EAFt th\u1EA1ch \xE1i ng\u1ECDc trong veo m\u1EC1m m\u01B0\u1EDBt th\xE0nh mi\u1EBFng vu\xF4ng l\u1EDBn r\u1ED3i cho v\xE0o n\u1EEDa c\u1ED1c."
        },
        "durationSeconds": 120,
        "image": "/images/taiwan-frog-eggs-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u92EA\u4E0A\u9ED1\u4EAE\u9752\u86D9\u4E0B\u86CB\u3001\u6F86\u5165\u6AB8\u6AAC\u6C41\u8207\u788E\u51B0\uFF01",
          "en": "Top with 'Frog Eggs' Pearls, Lemon Juice & Crushed Ice",
          "ja": "\u9ED2\u7CD6\u30BF\u30D4\u30AA\u30AB\u3092\u306E\u305B\u3001\u751F\u30EC\u30E2\u30F3\u679C\u6C41\u3068\u30AF\u30E9\u30C3\u30B7\u30E5\u30A2\u30A4\u30B9\u3092\u6CE8\u3050\uFF01",
          "ko": "\uD751\uB2F9 \uD384\uC744 \uC5B9\uACE0 \uC0DD\uB808\uBAAC\uC999\uACFC \uAC08\uC740 \uC5BC\uC74C\uC744 \uBD80\uC5B4 \uC644\uC131!",
          "vi": "M\xFAc tr\xE2n ch\xE2u \u0111en l\xEAn tr\xEAn, r\xF3t n\u01B0\u1EDBc c\u1ED1t chanh v\xE0 \u0111\xE1 b\xE0o m\xE1t l\u1EA1nh!"
        },
        "instruction": {
          "zh-TW": "\u5728\u611B\u7389\u51CD\u4E0A\u5927\u52FA\u92EA\u4E0A\u6EAB\u71B1\u9ED1\u4EAE\u7684\u9ED1\u7CD6\u7C89\u5713\uFF08\u9752\u86D9\u4E0B\u86CB\uFF09\uFF0C\u6DCB\u4E0A\u9BAE\u69A8\u5C4F\u6771\u6AB8\u6AAC\u6C41\u8207\u51AC\u74DC\u7CD6\u871C\uFF0C\u6700\u5F8C\u92EA\u6EFF\u7D30\u788E\u51B0\u584A\uFF0C\u63D2\u4E0A\u7C97\u5438\u7BA1\u652A\u52FB\u5927\u53E3\u555C\u98F2\uFF0C\u9178\u751CQ\u6ED1\u7121\u6BD4\u6E05\u723D\uFF01",
          "en": "Top aiyu with glossy black pearls (Frog Eggs), drizzle fresh lemon juice & winter melon syrup, then fill with crushed ice. Stir with boba straw and enjoy the icy refreshing chew!",
          "ja": "\u611B\u7389\u306E\u4E0A\u306B\u71B1\u3005\u306E\u9ED2\u7CD6\u30BF\u30D4\u30AA\u30AB\u3092\u305F\u3063\u3077\u308A\u76DB\u308A\u3001\u643E\u308A\u305F\u3066\u30EC\u30E2\u30F3\u6C41\u3068\u30AF\u30E9\u30C3\u30B7\u30E5\u30A2\u30A4\u30B9\u3092\u52A0\u3048\u3066\u5B8C\u6210\uFF01\u30B9\u30C8\u30ED\u30FC\u3067\u6DF7\u305C\u306A\u304C\u3089\u723D\u5FEB\u306A\u5589\u8D8A\u3057\u3092\u697D\u3057\u3093\u3067\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uC544\uC774\uC704 \uC704\uC5D0 \uC724\uAE30 \uB098\uB294 \uD751\uB2F9 \uD384\uC744 \uB4EC\uBFCD \uC5B9\uACE0 \uC2E0\uC120\uD55C \uB808\uBAAC\uC999\uACFC \uC5BC\uC74C\uC744 \uCC44\uC6CC \uAD75\uC740 \uBE68\uB300\uB85C \uC2DC\uC6D0\uD558\uAC8C \uB9C8\uC2ED\uB2C8\uB2E4.",
          "vi": "M\xFAc tr\xE2n ch\xE2u \u0111\u01B0\u1EDDng n\xE2u l\xEAn tr\xEAn th\u1EA1ch, r\u01B0\u1EDBi n\u01B0\u1EDBc chanh t\u01B0\u01A1i c\xF9ng siro b\xED \u0111ao r\u1ED3i ph\u1EE7 \u0111\u1EA7y \u0111\xE1 b\xE0o, c\u1EAFm \u1ED1ng h\xFAt to khu\u1EA5y \u0111\u1EC1u th\u01B0\u1EDFng th\u1EE9c!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-frog-eggs-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "boba-hard",
        "problem": {
          "zh-TW": "\u7C89\u5713\u9047\u5230\u51B0\u6C34\u5F8C\u5F88\u5FEB\u8B8A\u786C\u54AC\u4E0D\u52D5\uFF1F",
          "en": "Why do the tapioca pearls get hard in ice?",
          "ja": "\u6C37\u306B\u5165\u308C\u308B\u3068\u30BF\u30D4\u30AA\u30AB\u304C\u56FA\u304F\u306A\u3063\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uC5BC\uC74C\uACFC \uB2FF\uC73C\uBA74 \uD384\uC774 \uB531\uB531\uD558\uAC8C \uAD73\uB098\uC694?",
          "vi": "Tr\xE2n ch\xE2u b\u1ECB c\u1EE9ng \u0111\u01A1 khi g\u1EB7p \u0111\xE1 l\u1EA1nh?"
        },
        "cause": {
          "zh-TW": "\u7C89\u5FC3\u6C92\u6709\u60B6\u900F\uFF0C\u6216\u662F\u76F4\u63A5\u6D78\u6CE1\u5728\u51B0\u6C34\u88E1\u592A\u4E45\u3002",
          "en": "Pearls weren't fully steamed to the core or chilled too long.",
          "ja": "\u84B8\u3089\u3057\u6642\u9593\u304C\u8DB3\u308A\u305A\u82AF\u304C\u6B8B\u3063\u3066\u3044\u305F\u304B\u3001\u6C37\u6C34\u306B\u9577\u304F\u6D78\u3051\u3059\u304E\u307E\u3057\u305F\u3002",
          "ko": "\uB738 \uB4E4\uC774\uB294 \uC2DC\uAC04\uC774 \uBD80\uC871\uD588\uAC70\uB098 \uC5BC\uC74C \uC18D\uC5D0 \uB108\uBB34 \uC624\uB798 \uBC29\uCE58\uB418\uC5C8\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "Ch\u01B0a \u1EE7 ch\xEDn l\xF5i ho\u1EB7c \u0111\u1EC3 ng\xE2m trong \u0111\xE1 qu\xE1 l\xE2u."
        },
        "solution": {
          "zh-TW": "\u716E 20 \u5206\u9418\u5F8C\u52D9\u5FC5\u95DC\u706B\u60B6 20 \u5206\u9418\uFF1B\u7528\u6EAB\u71B1\u9ED1\u7CD6\u871C\u4FDD\u6EAB\uFF0C\u559D\u4E4B\u524D\u518D\u52A0\u788E\u51B0\uFF01",
          "en": "Always steam 20 mins with lid on, keep warm in brown sugar and add ice just before serving!",
          "ja": "\u8339\u3067\u305F\u5F8C\u3057\u3063\u304B\u308A20\u5206\u84B8\u3089\u3057\u3001\u6E29\u304B\u3044\u30B7\u30ED\u30C3\u30D7\u3067\u4FDD\u6E29\u3057\u3066\u304A\u53EC\u3057\u4E0A\u304C\u308A\u76F4\u524D\u306B\u6C37\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uC0B6\uC740 \uD6C4 20\uBD84\uAC04 \uBC18\uB4DC\uC2DC \uB738\uC744 \uB4E4\uC774\uACE0, \uB530\uB73B\uD55C \uC2DC\uB7FD\uC5D0 \uB450\uC5C8\uB2E4\uAC00 \uB9C8\uC2DC\uAE30 \uC9C1\uC804\uC5D0 \uC5BC\uC74C\uC744 \uB123\uC73C\uC138\uC694!",
          "vi": "B\u1EAFt bu\u1ED9c \u0111\u1EADy n\u1EAFp \u1EE7 20 ph\xFAt, gi\u1EEF \u1EA5m trong siro \u0111\u01B0\u1EDDng v\xE0 ch\u1EC9 cho \u0111\xE1 b\xE0o v\xE0o ngay tr\u01B0\u1EDBc khi u\u1ED1ng!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u611B\u7389\u5FC5\u9808\u662F\u300E\u5929\u7136\u91CE\u751F\u611B\u7389\u5B50\u624B\u6413\u300F\u624D\u6703\u6709\u5165\u53E3\u5373\u5316\u7684\u5929\u7136\u679C\u81A0\u6E05\u9999\uFF0C\u642D\u914D\u4E5D\u5982\u6AB8\u6AAC\u7684\u9178\u5EA6\u662F\u89E3\u81A9\u7B2C\u4E00\u540D\uFF01",
        "en": "Hand-washed wild Aiyu has a melt-in-mouth herbal aroma that harmonizes perfectly with acidic lemon!",
        "ja": "\u5929\u7136\u306E\u624B\u63C9\u307F\u611B\u7389\u30BC\u30EA\u30FC\u306E\u53E3\u3069\u3051\u3068\u3001\u30D5\u30EC\u30C3\u30B7\u30E5\u30EC\u30E2\u30F3\u306E\u9178\u5473\u304C\u8102\u3063\u3053\u3044\u591C\u5E02\u6599\u7406\u306E\u5F8C\u306B\u6700\u9AD8\u3067\u3059\uFF01",
        "ko": "\uCC9C\uC5F0 \uC218\uC81C \uC544\uC774\uC704 \uC824\uB9AC\uC758 \uBD80\uB4DC\uB7EC\uC6C0\uACFC \uC2E0\uC120\uD55C \uB808\uBAAC\uC758 \uC0B0\uBBF8\uB294 \uC57C\uC2DC\uC7A5 \uAE30\uB984\uAE30\uB97C \uC2F9 \uC53B\uC5B4\uC90D\uB2C8\uB2E4!",
        "vi": "Th\u1EA1ch \xC1i Ng\u1ECDc v\xF2 tay t\u1EF1 nhi\xEAn m\u1EC1m tan thanh m\xE1t k\u1EBFt h\u1EE3p chanh t\u01B0\u01A1i t\u1EA1o n\xEAn tuy\u1EC7t ph\u1EA9m gi\u1EA3i ng\u1EA5y s\u1ED1 1!"
      }
    ]
  },
  {
    "id": "oyster-vermicelli",
    "slug": "oyster-vermicelli",
    "title": {
      "zh-TW": "\u5EDF\u53E3\u7D93\u5178\u5927\u8178\u86B5\u4ED4\u9EB5\u7DDA",
      "en": "Taiwanese Braised Intestine & Oyster Vermicelli",
      "ja": "\u53F0\u6E7E\u540D\u7269 \u7261\u8823\u3068\u30DB\u30EB\u30E2\u30F3\u5165\u308A\u3068\u308D\u307F\u7D20\u9EBA\uFF08\u86B5\u4ED4\u9EB5\u7DDA\uFF09",
      "ko": "\uB300\uB9CC \uC804\uD1B5 \uACF1\uCC3D \uAD74 \uAD6D\uC218 (\uC544\uC885\uBA74\uC120 \uC2A4\uD0C0\uC77C \uC624\uC544\uBBF8\uC5D4\uC2DC\uC5D4)",
      "vi": "M\xEC tuy\u1EBFn l\xF2ng heo h\xE0u s\u1EEFa ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan"
    },
    "subtitle": {
      "zh-TW": "\u624B\u5DE5\u7D05\u9EB5\u7DDA\u30FB\u8EDF\u5AE9\u5165\u5473\u6EF7\u5927\u8178\u30FB\u80A5\u7F8E\u88F9\u7C89\u9BAE\u86B5\u30FB\u67F4\u9B5A\u8584\u82A1",
      "en": "Handmade Red Vermicelli, Braised Pork Intestines, Plump Oysters & Bonito Thick Broth",
      "ja": "\u624B\u5EF6\u3079\u8D64\u7D20\u9EBA\u30FB\u30C8\u30ED\u30C8\u30ED\u8C5A\u30DB\u30EB\u30E2\u30F3\u30FB\u3077\u308A\u3077\u308A\u7261\u8823\u30FB\u9C39\u51FA\u6C41\u306E\u52B9\u3044\u305F\u71B1\u3005\u3068\u308D\u307F\u30B9\u30FC\u30D7",
      "ko": "\uCAC4\uAE43\uD55C \uBD89\uC740 \uC300\uAD6D\uC218, \uBD80\uB4DC\uB7FD\uAC8C \uC878\uC778 \uB3FC\uC9C0\uACF1\uCC3D, \uD1B5\uD1B5\uD55C \uC0DD\uAD74\uACFC \uAC10\uCE60\uB9DB \uAC00\uB4DD \uAC00\uC4F0\uC624\uBD80\uC2DC \uC721\uC218",
      "vi": "M\xEC tuy\u1EBFn \u0111\u1ECF th\u1EE7 c\xF4ng, l\xF2ng heo h\u1EA7m nh\u1EEB, h\xE0u s\u1EEFa b\xE9o ng\u1EADy c\xF9ng n\u01B0\u1EDBc s\xFAp c\xE1 ng\u1EEB s\xE1nh \u0111\u1EADm"
    },
    "tagline": {
      "zh-TW": "\u5168\u53F0\u5EDF\u53E3\u8207\u897F\u9580\u753A\u7684\u6392\u968A\u795E\u8A71\uFF01\u7AD9\u8457\u5403\u4E5F\u5FC3\u7518\u60C5\u9858\u7684\u67F4\u9B5A\u6FC3\u9999",
      "en": "The iconic street soup of Taiwan: standing on the curb slurping piping-hot vermicelli",
      "ja": "\u897F\u9580\u753A\u3084\u53F0\u6E7E\u5168\u571F\u306E\u5EDF\u53E3\u3067\u5927\u884C\u5217\uFF01\u7ACB\u3061\u98DF\u3044\u3067\u3082\u98DF\u3079\u305F\u3044\u6FC3\u539A\u51FA\u6C41\u306E\u7D76\u54C1\u3068\u308D\u307F\u9EBA",
      "ko": "\uC2DC\uBA3C\uB529 \uACE8\uBAA9\uC5D0\uC11C \uC11C\uC11C \uBA39\uB294 \uC804\uC124\uC758 \uAD6D\uBBFC \uAD6D\uC218! \uB728\uB048\uD558\uACE0 \uAC78\uCB49\uD55C \uAD6D\uBB3C\uC774 \uC77C\uD488",
      "vi": "M\xF3n m\xEC s\xFAp huy\u1EC1n tho\u1EA1i ph\u1ED1 Ximending khi\u1EBFn th\u1EF1c kh\xE1ch s\u1EB5n s\xE0ng \u0111\u1EE9ng \u0103n x\xEC x\u1EE5p tr\xEAn v\u1EC9a h\xE8"
    },
    "heroImage": "/images/taiwan-oyster-vermicelli-hero.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 25,
    "defaultServings": 3,
    "caloriesPerServing": 410,
    "category": "soups",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5317\u842C\u83EF / \u9E7F\u6E2F\u5EDF\u53E3",
        "en": "Taipei Wanhua / Lukang Miaokou",
        "ja": "\u53F0\u5317\u4E07\u83EF / \u9E7F\u6E2F\u5EDF\u53E3",
        "ko": "\uD0C0\uC774\uBCA0\uC774 \uC644\uD654 / \uB8E8\uAC15 \uBA00\uC624\uCEE4\uC6B0",
        "vi": "V\u1EA1n Hoa \u0110\xE0i B\u1EAFc / Lukang Miaokou"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u824B\u823A\u591C\u5E02 / \u5EE3\u5DDE\u8857\u591C\u5E02",
          "en": "Bangka Night Market",
          "ja": "\u824B\u823A\u591C\u5E02",
          "ko": "\uBC29\uCE74 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Bangka"
        },
        {
          "zh-TW": "\u677F\u6A4B\u6E73\u96C5\u591C\u5E02",
          "en": "Banqiao Nanya Night Market",
          "ja": "\u677F\u6A4B\u6E73\u96C5\u591C\u5E02",
          "ko": "\uBC18\uCC28\uC624 \uB09C\uC57C \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Nanya"
        }
      ],
      "historyStory": {
        "zh-TW": "\u6E90\u81EA\u53F0\u7063\u65E9\u671F\u8FB2\u8015\u793E\u6703\u7684\u5BB4\u5BA2\u9EDE\u5FC3\uFF0C\u5C07\u84B8\u66EC\u88FD\u6210\u7684\u624B\u5DE5\u7D05\u9EB5\u7DDA\u5165\u67F4\u9B5A\u9AD8\u6E6F\u6162\u716E\u4E0D\u721B\u3002\u642D\u914D\u5609\u7FA9\u6771\u77F3\u9BAE\u86B5\u88F9\u5730\u74DC\u7C89\u9632\u7E2E\u6C34\uFF0C\u4EE5\u53CA\u4E2D\u85E5\u91AC\u6CB9\u6EF7\u900F\u7684\u8EDF\u5AE9\u8C6C\u5927\u8178\uFF0C\u4F50\u5DE5\u7814\u70CF\u918B\u3001\u849C\u6CE5\u3001\u9999\u83DC\uFF0C\u6210\u5C31\u53F0\u7063\u6700\u5177\u4EE3\u8868\u6027\u7684\u4E00\u7897\u7FB9\u9EB5\u3002",
        "en": "A signature Taiwanese noodle soup made with steamed red vermicelli that remains silky and intact in rich bonito broth, paired with starch-coated fresh oysters and slow-braised pork intestines.",
        "ja": "\u84B8\u3057\u3066\u5929\u65E5\u5E72\u3057\u3057\u305F\u30B3\u30B7\u306E\u3042\u308B\u8D64\u7D20\u9EBA\u3092\u9C39\u51FA\u6C41\u3067\u716E\u8FBC\u307F\u3001\u3077\u308A\u3077\u308A\u306E\u7261\u8823\u3068\u4E0B\u5473\u3092\u3064\u3051\u305F\u8C5A\u30DB\u30EB\u30E2\u30F3\u3092\u30C8\u30C3\u30D4\u30F3\u30B0\u3002\u9ED2\u9162\u3068\u30CB\u30F3\u30CB\u30AF\u3092\u52B9\u304B\u305B\u3066\u98DF\u3059\u56FD\u6C11\u7684\u30B9\u30FC\u30D7\u9EBA\u3002",
        "ko": "\uAC00\uC4F0\uC624\uBD80\uC2DC \uC721\uC218\uC5D0 \uBD89\uC740 \uBA74\uC744 \uB123\uACE0 \uB053\uC5EC \uC804\uBD84\uC73C\uB85C \uAC78\uCB49\uD558\uAC8C \uB9CC\uB4E0 \uB4A4 \uBD80\uB4DC\uB7EC\uC6B4 \uACF1\uCC3D\uACFC \uC2E0\uC120\uD55C \uAD74, \uB9C8\uB298\uC999, \uD751\uC2DD\uCD08\uB97C \uB123\uC5B4 \uBA39\uB294 \uB300\uB9CC\uC758 \uB300\uD45C \uBA74 \uC694\uB9AC\uC785\uB2C8\uB2E4.",
        "vi": "M\xF3n m\xEC truy\u1EC1n th\u1ED1ng n\u1EA5u t\u1EEB s\u1EE3i m\xEC tuy\u1EBFn \u0111\u1ECF d\u1EBBo dai trong n\u01B0\u1EDBc d\xF9ng c\xE1 ng\u1EEB \u0111\u1EADm \u0111\xE0, \u0103n k\xE8m l\xF2ng heo h\u1EA7m ng\u0169 v\u1ECB v\xE0 h\xE0u s\u1EEFa b\xE9o b\xF9i."
      },
      "taiwaneseHokkien": "\xD4-\xE1 m\u012B-su\xE0nn (\u311B\u02CA \u311A\u02CB \u3107\u3127\u02C7 \u3119\u3128\u310A)",
      "mandarinPinyin": "D\xE0ch\xE1ng K\u0113z\u01CEi Mi\xE0nxi\xE0n (\u3109\u311A\u02CB \u3114\u3124\u02CA \u310E\u311C \u3117\u02C7 \u3107\u3127\u3122\u02CB \u3112\u3127\u3122\u02CB)",
      "audioPronunciationText": "\u5927\u8178\u86B5\u4ED4\u9EB5\u7DDA\u4E00\u7897\uFF0C\u5927\u7897\u3001\u591A\u849C\u6CE5\u3001\u591A\u70CF\u918B\u9999\u83DC"
    },
    "ingredients": [
      {
        "id": "red-vermicelli",
        "name": {
          "zh-TW": "\u53F0\u7063\u624B\u5DE5\u7D05\u9EB5\u7DDA (\u526A\u5C0F\u6BB5\u5148\u6CE1\u6C34\u6D17\u9E7D\u5206)",
          "en": "Taiwanese Red Vermicelli (Rinsed)",
          "ja": "\u53F0\u6E7E\u7523 \u624B\u5EF6\u3079\u8D64\u7D20\u9EBA",
          "ko": "\uB300\uB9CC \uC804\uD1B5 \uBD89\uC740 \uC300\uAD6D\uC218 \uBA74",
          "vi": "M\xEC tuy\u1EBFn \u0111\u1ECF \u0110\xE0i Loan (Ng\xE2m x\u1EA3 b\u1EDBt m\u1EB7n)"
        },
        "amount": 180,
        "unitMetric": "g",
        "unitUS": "6 oz",
        "isKeyFlavor": true,
        "chineseName": "\u624B\u5DE5\u7D05\u9EB5\u7DDA",
        "chinesePinyin": "H\xF3ng mi\xE0nxi\xE0n"
      },
      {
        "id": "fresh-oysters",
        "name": {
          "zh-TW": "\u53F0\u7063\u6771\u77F3\u80A5\u7F8E\u9BAE\u86B5 (\u88F9\u5730\u74DC\u7C89\u6C46\u71D9)",
          "en": "Fresh Plump Oysters (Coated in Starch)",
          "ja": "\u65B0\u9BAE\u306A\u751F\u7261\u8823\uFF08\u5730\u74DC\u7C89\u3092\u307E\u3076\u3057\u3066\u6E6F\u901A\u3057\uFF09",
          "ko": "\uC2E0\uC120\uD55C \uD1B5\uD1B5\uD55C \uC0DD\uAD74 (\uC804\uBD84 \uCF54\uD305)",
          "vi": "H\xE0u s\u1EEFa t\u01B0\u01A1i m\u1ECDng (L\u0103n b\u1ED9t khoai lang ch\u1EA7n s\u01A1)"
        },
        "amount": 200,
        "unitMetric": "g",
        "unitUS": "7 oz",
        "isKeyFlavor": true,
        "chineseName": "\u6771\u77F3\u9BAE\u86B5",
        "chinesePinyin": "Xi\u0101n k\u0113"
      },
      {
        "id": "braised-pork-intestines",
        "name": {
          "zh-TW": "\u7279\u88FD\u4E2D\u85E5\u6EF7\u8C6C\u5927\u8178\u6BB5",
          "en": "Braised Savory Pork Intestines (Sliced)",
          "ja": "\u7279\u88FD\u91A4\u6CB9\u30C0\u30EC\u3067\u716E\u8FBC\u3093\u3060\u8C5A\u30DB\u30EB\u30E2\u30F3",
          "ko": "\uC591\uB150\uC5D0 \uD479 \uC870\uB9B0 \uB3FC\uC9C0\uACF1\uCC3D \uC2AC\uB77C\uC774\uC2A4",
          "vi": "L\xF2ng gi\xE0 heo h\u1EA7m ng\u0169 v\u1ECB c\u1EAFt kh\xFAc"
        },
        "amount": 150,
        "unitMetric": "g",
        "unitUS": "5 oz",
        "isKeyFlavor": true,
        "chineseName": "\u6EF7\u5927\u8178",
        "chinesePinyin": "L\u01D4 d\xE0ch\xE1ng"
      },
      {
        "id": "bonito-broth-seasoning",
        "name": {
          "zh-TW": "\u67F4\u9B5A\u7247\u3001\u51B0\u7CD6\u3001\u5DE5\u7814\u70CF\u918B\u3001\u849C\u6CE5\u3001\u9999\u83DC\u3001\u592A\u767D\u7C89\u82A1\u6C34",
          "en": "Bonito Flakes, Black Vinegar, Garlic Paste, Cilantro & Starch Slurry",
          "ja": "\u9C39\u7BC0\u3001\u53F0\u6E7E\u9ED2\u9162\u3001\u304A\u308D\u3057\u30CB\u30F3\u30CB\u30AF\u3001\u30D1\u30AF\u30C1\u30FC\u3001\u6C34\u6EB6\u304D\u7247\u6817\u7C89",
          "ko": "\uAC00\uC4F0\uC624\uBD80\uC2DC, \uB300\uB9CC \uD751\uC2DD\uCD08, \uB2E4\uC9C4 \uB9C8\uB298, \uACE0\uC218, \uC804\uBD84\uBB3C",
          "vi": "C\xE1 ng\u1EEB b\xE0o, gi\u1EA5m \u0111en \u0110\xE0i Loan, t\u1ECFi b\u0103m, rau ng\xF2 r\xED v\xE0 n\u01B0\u1EDBc b\u1ED9t n\u0103ng"
        },
        "amount": 120,
        "unitMetric": "g",
        "unitUS": "4 oz",
        "isKeyFlavor": true,
        "chineseName": "\u67F4\u9B5A\u70CF\u918B\u849C\u6CE5",
        "chinesePinyin": "Ch\xE1iy\xFA w\u016Bc\xF9"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u9BAE\u86B5\u6D17\u6DE8\u88F9\u5730\u74DC\u7C89\u6C46\u71D9\u9396\u4F4F\u9BAE\u5AE9",
          "en": "Coat Fresh Oysters in Starch & Blanch",
          "ja": "\u7261\u8823\u3092\u6D17\u3044\u5730\u74DC\u7C89\u3092\u307E\u3076\u3057\u3066\u30B5\u30C3\u3068\u6E6F\u901A\u3057\u3059\u308B",
          "ko": "\uAD74\uC744 \uC53B\uC5B4 \uC804\uBD84\uC744 \uBB3B\uD78C \uB4A4 \uC0B4\uC9DD \uB370\uCCD0 \uC721\uC999 \uAC00\uB450\uAE30",
          "vi": "R\u1EEDa s\u1EA1ch h\xE0u l\u0103n qua b\u1ED9t khoai lang r\u1ED3i ch\u1EA7n nhanh qua n\u01B0\u1EDBc s\xF4i"
        },
        "instruction": {
          "zh-TW": "\u9BAE\u86B5\u7528\u5C11\u8A31\u9E7D\u8207\u751F\u7C89\u8F15\u8F15\u6293\u6D17\u4E7E\u6DE8\uFF0C\u701D\u4E7E\u6C34\u5206\u3002\u5747\u52FB\u88F9\u4E0A\u4E00\u5C64\u5730\u74DC\u7C89\uFF0C\u6295\u5165\u6EFE\u6C34\u4E2D\u5FAE\u706B\u6C46\u71D9 30 \u79D2\u81F3\u8868\u9762\u5B9A\u578B\uFF0C\u6488\u51FA\u6CE1\u51B0\u6C34\u9632\u7E2E\u6C34\u8B8A\u8001\u3002",
          "en": "Rinse oysters gently with pinch of salt. Coat evenly in sweet potato starch. Drop into simmering water for 30 secs to set coating, transfer to cold water to lock plump juiciness.",
          "ja": "\u7261\u8823\u3092\u512A\u3057\u304F\u6D17\u3063\u3066\u6C34\u6C17\u3092\u5207\u308A\u3001\u5730\u74DC\u7C89\u3092\u5168\u4F53\u306B\u307E\u3076\u3057\u307E\u3059\u3002\u6CB8\u9A30\u3057\u305F\u6E6F\u306730\u79D2\u6E6F\u901A\u3057\u3057\u3001\u51B7\u6C34\u306B\u53D6\u3063\u3066\u8EAB\u3092\u3077\u308A\u3077\u308A\u306B\u4FDD\u3061\u307E\u3059\u3002",
          "ko": "\uAD74\uC744 \uC0B4\uC0B4 \uC53B\uC5B4 \uBB3C\uAE30\uB97C \uBE80 \uB4A4 \uACE0\uAD6C\uB9C8 \uC804\uBD84\uC744 \uACE0\uB8E8 \uBB3B\uD799\uB2C8\uB2E4. \uB053\uB294 \uBB3C\uC5D0 30\uCD08\uAC04 \uB370\uCE5C \uD6C4 \uCC2C\uBB3C\uC5D0 \uB2F4\uAC00 \uD0F1\uD0F1\uD568\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4.",
          "vi": "R\u1EEDa nh\u1EB9 h\xE0u v\u1EDBi ch\xFAt mu\u1ED1i, l\u0103n \u0111\u1EC1u b\u1ED9t khoai lang r\u1ED3i th\u1EA3 v\xE0o n\u01B0\u1EDBc s\xF4i ch\u1EA7n 30 gi\xE2y, v\u1EDBt ra ng\xE2m n\u01B0\u1EDBc l\u1EA1nh gi\u1EEF \u0111\u1ED9 b\xE9o m\u1ECDng."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-oyster-vermicelli-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u67F4\u9B5A\u9AD8\u6E6F\u716E\u7D05\u9EB5\u7DDA\u8207\u8ABF\u5473",
          "en": "Simmer Red Vermicelli in Bonito Broth",
          "ja": "\u9C39\u51FA\u6C41\u3067\u8D64\u7D20\u9EBA\u3092\u716E\u8FBC\u307F\u8ABF\u5473\u3059\u308B",
          "ko": "\uAC00\uC4F0\uC624\uBD80\uC2DC \uC721\uC218\uC5D0 \uBD89\uC740 \uBA74\uC744 \uB123\uACE0 \uB053\uC5EC \uAC04 \uB9DE\uCD94\uAE30",
          "vi": "N\u1EA5u m\xEC tuy\u1EBFn \u0111\u1ECF trong n\u01B0\u1EDBc d\xF9ng c\xE1 ng\u1EEB b\xE0o v\xE0 n\xEAm gia v\u1ECB"
        },
        "instruction": {
          "zh-TW": "\u934B\u4E2D\u52A0\u5165 1800ml \u5927\u9AA8\u9AD8\u6E6F\u8207\u4E00\u5927\u628A\u67F4\u9B5A\u7247\u716E\u6EFE\u51FA\u9999\u6C23\u3002\u7D05\u9EB5\u7DDA\u526A\u6210 5cm \u5C0F\u6BB5\u6D17\u53BB\u8868\u9762\u9E7D\u5206\uFF0C\u653E\u5165\u934B\u4E2D\u716E\u7D04 10 \u5206\u9418\uFF0C\u52A0\u5165\u91AC\u6CB9\u3001\u6CB9\u8525\u9165\u3001\u51B0\u7CD6\u8207\u767D\u80E1\u6912\u7C89\u8ABF\u5473\u3002",
          "en": "Boil 1800ml pork stock with generous bonito flakes. Cut red vermicelli to 5cm, rinse to remove excess salt, and simmer in broth for 10 mins. Season with soy sauce, fried shallots, rock sugar and white pepper.",
          "ja": "\u51FA\u6C41\u306B\u9C39\u7BC0\u3092\u5165\u308C\u3066\u716E\u7ACB\u305F\u305B\u3001\u6C34\u6D17\u3044\u3057\u305F\u8D64\u7D20\u9EBA\u3092\u52A0\u3048\u306610\u5206\u716E\u307E\u3059\u3002\u91A4\u6CB9\u3001\u63DA\u3052\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u3001\u6C37\u7802\u7CD6\u3001\u30B3\u30B7\u30E7\u30A6\u3067\u5473\u3092\u8ABF\u3048\u307E\u3059\u3002",
          "ko": "\uC721\uC218\uC5D0 \uAC00\uC4F0\uC624\uBD80\uC2DC\uB97C \uB123\uACE0 \uB053\uC774\uB2E4\uAC00 \uC53B\uC740 \uBD89\uC740 \uBA74\uC744 \uB123\uC5B4 10\uBD84\uAC04 \uB053\uC785\uB2C8\uB2E4. \uAC04\uC7A5, \uC0EC\uB86F\uD280\uAE40, \uC124\uD0D5, \uD6C4\uCD94\uB85C \uAC04\uC744 \uD569\uB2C8\uB2E4.",
          "vi": "\u0110un s\xF4i 1.8L n\u01B0\u1EDBc d\xF9ng v\u1EDBi c\xE1 ng\u1EEB b\xE0o. C\u1EAFt m\xEC th\xE0nh kh\xFAc 5cm r\u1EEDa s\u1EA1ch mu\u1ED1i r\u1ED3i th\u1EA3 v\xE0o n\u1EA5u 10 ph\xFAt, n\xEAm n\u01B0\u1EDBc t\u01B0\u01A1ng, h\xE0nh phi v\xE0 ti\xEAu."
        },
        "durationSeconds": 600,
        "image": "/images/taiwan-oyster-vermicelli-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u6DCB\u5165\u592A\u767D\u7C89\u6C34\u52FE\u8584\u82A1\u4F7F\u6E6F\u6C41\u6FC3\u6ED1",
          "en": "Stir in Starch Slurry to Thicken Broth",
          "ja": "\u6C34\u6EB6\u304D\u7247\u6817\u7C89\u3092\u56DE\u3057\u5165\u308C\u3001\u3068\u308D\u307F\u3092\u3064\u3051\u308B",
          "ko": "\uC804\uBD84\uBB3C\uC744 \uB458\uB7EC \uAD6D\uBB3C\uC744 \uAC78\uCB49\uD558\uAC8C \uB9CC\uB4E4\uAE30",
          "vi": "R\xF3t t\u1EEB t\u1EEB n\u01B0\u1EDBc b\u1ED9t n\u0103ng khu\u1EA5y \u0111\u1EC1u t\u1EA1o \u0111\u1ED9 s\xE1nh m\u01B0\u1EE3t"
        },
        "instruction": {
          "zh-TW": "\u5C07\u592A\u767D\u7C89\u52A0\u6C34\u8ABF\u52FB\u6210\u82A1\u6C34\u3002\u8F49\u5FAE\u706B\uFF0C\u908A\u9806\u6642\u91DD\u652A\u52D5\u9EB5\u7DDA\u908A\u7DE9\u7DE9\u5012\u5165\u82A1\u6C34\uFF0C\u716E\u81F3\u6E6F\u6C41\u5448\u73FE\u6676\u7469\u6CB9\u4EAE\u3001\u7D72\u6ED1\u6FC3\u7A20\u7684\u5FAE\u7FB9\u72C0\u3002",
          "en": "Whisk starch with water. Lower heat and stir vermicelli clockwise while slowly pouring in slurry. Simmer until broth becomes glossy, velvety and thickened.",
          "ja": "\u5F31\u706B\u306B\u3057\u3066\u6C34\u6EB6\u304D\u7247\u6817\u7C89\u3092\u5C11\u3057\u305A\u3064\u56DE\u3057\u5165\u308C\u3001\u7D76\u3048\u9593\u306A\u304F\u304B\u304D\u6DF7\u305C\u3066\u30C4\u30E4\u306E\u3042\u308B\u306A\u3081\u3089\u304B\u306A\u3068\u308D\u307F\u3092\u3064\u3051\u307E\u3059\u3002",
          "ko": "\uC57D\uBD88\uB85C \uC904\uC774\uACE0 \uAD6D\uC218\uB97C \uC800\uC5B4\uAC00\uBA70 \uC804\uBD84\uBB3C\uC744 \uCC9C\uCC9C\uD788 \uBD80\uC5B4 \uC724\uAE30 \uC788\uACE0 \uAC78\uCB49\uD55C \uB18D\uB3C4\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "H\u1EA1 nh\u1ECF l\u1EEDa, v\u1EEBa khu\u1EA5y \u0111\u1EC1u m\xEC v\u1EEBa r\xF3t t\u1EEB t\u1EEB n\u01B0\u1EDBc b\u1ED9t n\u0103ng v\xE0o \u0111un \u0111\u1EBFn khi n\u01B0\u1EDBc s\xFAp s\xE1nh \xF3ng \u1EA3."
        },
        "durationSeconds": 180,
        "image": "/images/taiwan-oyster-vermicelli-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u76DB\u7897\u92EA\u4E0A\u5927\u8178\u9BAE\u86B5\u3001\u6DCB\u849C\u6CE5\u70CF\u918B\u8FA3\u6CB9\uFF01",
          "en": "Ladle into Bowl, Top with Intestines, Oysters & Seasonings",
          "ja": "\u5668\u306B\u76DB\u308A\u3001\u30DB\u30EB\u30E2\u30F3\u3068\u7261\u8823\u3092\u306E\u305B\u3001\u30CB\u30F3\u30CB\u30AF\u9ED2\u9162\u3068\u8FA3\u6CB9\u3092\u304B\u3051\u308B\uFF01",
          "ko": "\uADF8\uB987\uC5D0 \uB2F4\uACE0 \uACF1\uCC3D\uACFC \uAD74\uC744 \uC62C\uB9B0 \uB4A4 \uB9C8\uB298, \uD751\uC2DD\uCD08, \uACE0\uCD94\uAE30\uB984 \uBFCC\uB9AC\uAE30!",
          "vi": "M\xFAc ra b\xE1t x\u1EBFp l\xF2ng heo h\xE0u s\u1EEFa l\xEAn tr\xEAn, chan gi\u1EA5m \u0111en t\u1ECFi \u1EDBt v\xE0 ng\xF2 r\xED!"
        },
        "instruction": {
          "zh-TW": "\u5C07\u6EFE\u71D9\u6ED1\u9806\u7684\u9EB5\u7DDA\u8200\u5165\u5927\u7897\u4E2D\u3002\u8868\u9762\u92EA\u4E0A\u6EFF\u6EFF\u7684\u8EDF\u5AE9\u6EF7\u5927\u8178\u6BB5\u8207\u98FD\u6EFF\u9BAE\u86B5\uFF0C\u6DCB\u4E0A\u4E00\u5927\u5319\u7279\u8ABF\u849C\u6CE5\u6C41\u3001\u5DE5\u7814\u70CF\u918B\u8207\u81EA\u88FD\u8FA3\u6912\u6CB9\uFF0C\u6492\u4E0A\u4E00\u5927\u64AE\u65B0\u9BAE\u9999\u83DC\uFF0C\u8D81\u71B1\u5927\u53E3\u7A00\u91CC\u547C\u5695\u6ED1\u5165\u5589\u56A8\uFF01",
          "en": "Ladle piping-hot vermicelli into bowl. Crown with generous braised intestines and plump oysters. Spoon over minced garlic water, Taiwanese black vinegar, chili oil and fresh cilantro. Slurp enthusiastically!",
          "ja": "\u71B1\u3005\u306E\u3068\u308D\u307F\u7D20\u9EBA\u3092\u5668\u306B\u76DB\u308A\u3001\u716E\u8FBC\u307F\u30DB\u30EB\u30E2\u30F3\u3068\u7261\u8823\u3092\u305F\u3063\u3077\u308A\u30C8\u30C3\u30D4\u30F3\u30B0\u3002\u30CB\u30F3\u30CB\u30AF\u6C34\u3001\u53F0\u6E7E\u9ED2\u9162\u3001\u30E9\u30FC\u6CB9\u3001\u30D1\u30AF\u30C1\u30FC\u3092\u6DFB\u3048\u3066\u71B1\u3005\u3092\u3059\u3059\u308B\u3088\u3046\u306B\u3044\u305F\u3060\u304D\u307E\u3059\uFF01",
          "ko": "\uB728\uAC70\uC6B4 \uBA74\uC120\uC744 \uB300\uC811\uC5D0 \uB2F4\uACE0 \uBD80\uB4DC\uB7EC\uC6B4 \uACF1\uCC3D\uACFC \uD1B5\uD1B5\uD55C \uAD74\uC744 \uB4EC\uBFCD \uC5B9\uC2B5\uB2C8\uB2E4. \uB9C8\uB298\uC999, \uB300\uB9CC \uD751\uC2DD\uCD08, \uACE0\uCD94\uAE30\uB984, \uACE0\uC218\uB97C \uC5B9\uC5B4 \uD638\uB85C\uB85D \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694!",
          "vi": "M\xFAc m\xEC s\xFAp n\xF3ng h\u1ED5i ra b\xE1t, b\xE0y l\xF2ng heo h\u1EA7m th\u01A1m l\u1EEBng v\xE0 h\xE0u s\u1EEFa m\u1ECDng n\u01B0\u1EDBc l\xEAn tr\xEAn. R\u01B0\u1EDBi s\u1ED1t t\u1ECFi, gi\u1EA5m \u0111en, sa t\u1EBF v\xE0 ng\xF2 r\xED th\u01B0\u1EDFng th\u1EE9c x\xEC x\u1EE5p!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-oyster-vermicelli-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "vermicelli-watery",
        "problem": {
          "zh-TW": "\u9EB5\u7DDA\u5403\u5230\u4E00\u534A\u6E6F\u6C41\u8B8A\u6E05\u3001\u51FA\u6C34\u5316\u6C34\uFF1F",
          "en": "Why does my thick broth turn watery halfway through?",
          "ja": "\u98DF\u3079\u3066\u3044\u308B\u9014\u4E2D\u3067\u3068\u308D\u307F\u304C\u306A\u304F\u306A\u3063\u3066\u30B7\u30E3\u30D0\u30B7\u30E3\u30D0\u306B\u306A\u308B\uFF1F",
          "ko": "\uBA39\uB2E4 \uBCF4\uBA74 \uAD6D\uBB3C\uC774 \uBB3D\uC5B4\uC9C0\uBA70 \uBB3C\uCC98\uB7FC \uBCC0\uD558\uB098\uC694?",
          "vi": "N\u01B0\u1EDBc s\xFAp \u0111ang \u0103n th\xEC b\u1ECB lo\xE3ng ra th\xE0nh n\u01B0\u1EDBc trong?"
        },
        "cause": {
          "zh-TW": "\u53E3\u8154\u553E\u6DB2\u4E2D\u7684\u6FB1\u7C89\u9176\u5206\u89E3\u4E86\u52FE\u82A1\uFF0C\u6216\u662F\u592A\u767D\u7C89\u672A\u5B8C\u5168\u6EFE\u900F\u719F\u5316\u3002",
          "en": "Salivary amylase broke down the starch, or the starch slurry wasn't boiled through to activate properly.",
          "ja": "\u553E\u6DB2\u306E\u9175\u7D20\u3067\u30C7\u30F3\u30D7\u30F3\u304C\u5206\u89E3\u3055\u308C\u305F\u304B\u3001\u7247\u6817\u7C89\u306E\u52A0\u71B1\u4E0D\u8DB3\u3067\u3059\u3002",
          "ko": "\uCE68 \uC18D \uC544\uBC00\uB77C\uC544\uC81C \uD6A8\uC18C\uAC00 \uC804\uBD84\uC744 \uBD84\uD574\uD588\uAC70\uB098 \uC804\uBD84\uC774 \uB35C \uB053\uC5C8\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "Do men amylase trong n\u01B0\u1EDBc b\u1ECDt ph\xE2n gi\u1EA3i tinh b\u1ED9t ho\u1EB7c b\u1ED9t n\u0103ng ch\u01B0a \u0111\u01B0\u1EE3c \u0111un s\xF4i ch\xEDn k\u1EF9."
        },
        "solution": {
          "zh-TW": "\u52FE\u82A1\u5F8C\u52D9\u5FC5\u7DAD\u6301\u5FAE\u6EFE\u716E\u900F 1 \u5206\u9418\uFF1B\u5403\u7684\u6642\u5019\u76E1\u91CF\u7528\u6E6F\u5319\u7531\u908A\u7DE3\u8200\u53D6\uFF0C\u907F\u514D\u652A\u62CC\u6574\u7897\uFF01",
          "en": "Boil 1 full minute after slurring; scoop gently from the edge rather than stirring whole bowl!",
          "ja": "\u3068\u308D\u307F\u3092\u3064\u3051\u305F\u5F8C1\u5206\u3057\u3063\u304B\u308A\u6CB8\u9A30\u3055\u305B\u3001\u98DF\u3079\u308B\u6642\u306F\u304B\u304D\u6DF7\u305C\u305A\u306B\u7AEF\u304B\u3089\u3059\u304F\u3063\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uC804\uBD84\uBB3C\uC744 \uB123\uACE0 1\uBD84\uAC04 \uCDA9\uBD84\uD788 \uB053\uC774\uACE0, \uBA39\uC744 \uB54C\uB294 \uD718\uC813\uC9C0 \uB9D0\uACE0 \uAC00\uC7A5\uC790\uB9AC\uBD80\uD130 \uB5A0\uB4DC\uC138\uC694!",
          "vi": "\u0110un s\xF4i k\u1EF9 1 ph\xFAt sau khi xu\u1ED1ng b\u1ED9t n\u0103ng, khi \u0103n m\xFAc t\u1EEB m\xE9p b\xE1t tr\xE1nh khu\u1EA5y \u0111\u1EA3o li\xEAn t\u1EE5c!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u8001\u9955\u7CBE\u9AD3\u5728\u65BC\u300E\u4E09\u5BF6\u8ABF\u6599\u300F\uFF1A\u849C\u6CE5\u6C34\u3001\u5DE5\u7814\u70CF\u918B\u8207\u751F\u8FA3\u6912\u91AC\uFF0C\u4E09\u8005\u7F3A\u4E00\u4E0D\u53EF\uFF0C\u9178\u3001\u9999\u3001\u8FA3\u4EA4\u7E54\u624D\u662F\u53F0\u7063\u6B63\u5B97\u591C\u5E02\u9B42\uFF01",
        "en": "The Holy Trinity of condiments: Garlic juice, Taiwanese black vinegar & fresh chili paste!",
        "ja": "\u304A\u308D\u3057\u30CB\u30F3\u30CB\u30AF\u6C34\u30FB\u53F0\u6E7E\u9ED2\u9162\u30FB\u751F\u30C1\u30EA\u306E\u4E09\u4F4D\u4E00\u4F53\u304C\u672C\u5834\u591C\u5E02\u306E\u5473\u3092\u6C7A\u5B9A\u3065\u3051\u307E\u3059\uFF01",
        "ko": "\uB9C8\uB298\uC999, \uB300\uB9CC \uD751\uC2DD\uCD08, \uC0DD\uACE0\uCD94\uC7A5 \uC0BC\uCD1D\uC0AC\uB97C \uB4EC\uBFCD \uB123\uC5B4\uC57C \uC9C4\uC815\uD55C \uB300\uB9CC\uC758 \uB9DB\uC774 \uC644\uC131\uB429\uB2C8\uB2E4!",
        "vi": "B\u1ED9 ba th\u1EA7n th\xE1nh: n\u01B0\u1EDBc t\u1ECFi, gi\u1EA5m \u0111en \u0110\xE0i Loan v\xE0 sa t\u1EBF \u1EDBt l\xE0 linh h\u1ED3n kh\xF4ng th\u1EC3 thi\u1EBFu!"
      }
    ]
  },
  {
    "id": "tube-rice-pudding",
    "slug": "tube-rice-pudding",
    "title": {
      "zh-TW": "\u53F0\u4E2D\u6E05\u6C34\u50B3\u627F\u7B52\u4ED4\u7C73\u7CD5",
      "en": "Taichung Qingshui Tube Rice Pudding",
      "ja": "\u53F0\u4E2D\u56FD\u5B9D\u7D1A \u7B52\u5165\u308A\u84B8\u3057\u304A\u3053\u308F\uFF08\u7B52\u4ED4\u7C73\u7CD5\uFF09",
      "ko": "\uB300\uB9CC \uD0C0\uC774\uC911 \uCE6D\uC218\uC774 \uC804\uD1B5 \uC6D0\uD1B5 \uCC39\uC300\uBC25 (\uD1B5\uC790\uC774\uBBF8\uAC00\uC624)",
      "vi": "X\xF4i h\u1EA5p \u1ED1ng kim lo\u1EA1i Ch\u01B0\u01A1ng H\xF3a / Thanh Th\u1EE7y (Th\xF9ng T\u1EED M\u1EC5 Cao)"
    },
    "subtitle": {
      "zh-TW": "\u6CB9\u8525\u7092\u5713\u7CEF\u7C73\u30FB\u5E95\u90E8\u92EA\u80A5\u7626\u6EF7\u8089\u8207\u9999\u83C7\u30FB\u5012\u6263\u6210\u7B52\u30FB\u6DCB\u751C\u8FA3\u91AC",
      "en": "Shallot Stir-Fried Sticky Rice, Braised Pork Belly & Shiitake Inverted with Sweet Chili Sauce",
      "ja": "\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u9999\u308B\u4E38\u3082\u3061\u7C73\u30FB\u5E95\u306B\u6577\u304D\u8A70\u3081\u305F\u8C5A\u89D2\u716E\u3068\u690E\u8338\u30FB\u578B\u629C\u304D\u3057\u3066\u7279\u88FD\u7518\u8F9B\u30C0\u30EC",
      "ko": "\uC0EC\uB86F \uAE30\uB984\uC5D0 \uBCF6\uC740 \uCC39\uC300, \uBC14\uB2E5\uC5D0 \uAE50 \uB3FC\uC9C0\uACE0\uAE30 \uC870\uB9BC\uACFC \uD45C\uACE0\uBC84\uC12F, \uB4A4\uC9D1\uC5B4 \uBE7C\uB0B4\uB294 \uC6D0\uD1B5 \uCC39\uC300\uB5A1\uBC25",
      "vi": "G\u1EA1o n\u1EBFp x\xE0o h\xE0nh phi th\u01A1m l\u1EEBng, th\u1ECBt ba ch\u1EC9 n\u1EA5m h\u01B0\u01A1ng l\xF3t \u0111\xE1y \xFAp ng\u01B0\u1EE3c chan s\u1ED1t ng\u1ECDt cay"
    },
    "tagline": {
      "zh-TW": "\u50B3\u627F\u767E\u5E74\u7684\u6E05\u6C34\u8001\u57CE\u9748\u9B42\uFF01\u5C0F\u9435\u7B52\u84B8\u51FA\u7C92\u7C92\u5206\u660E\u53C8\u6CB9\u6F64\u9ECF\u7CEF\u7684\u7C73\u9999",
      "en": "A century-old culinary treasure of central Taiwan: fragrant sticky rice steamed in metal tubes",
      "ja": "100\u5E74\u306E\u6B74\u53F2\u3092\u8A87\u308B\u540D\u7269\uFF01\u5C0F\u3055\u306A\u7B52\u3067\u84B8\u3057\u4E0A\u3052\u308B\u3001\u4E00\u7C92\u4E00\u7C92\u306B\u65E8\u5473\u304C\u67D3\u307F\u6E21\u3063\u305F\u7D76\u54C1\u304A\u3053\u308F",
      "ko": "100\uB144 \uC804\uD1B5\uC758 \uD0C0\uC774\uC911 \uBA85\uBB3C! \uC791\uC740 \uC1E0\uC6D0\uD1B5\uC5D0\uC11C \uCA84\uB0B4 \uBC25\uC54C \uD558\uB098\uD558\uB098 \uAC10\uCE60\uB9DB\uC774 \uAC00\uB4DD\uD55C \uCC39\uC300\uBC25",
      "vi": "Tinh hoa \u1EA9m th\u1EF1c tr\u0103m n\u0103m v\u1EDBi t\u1EEBng h\u1EA1t n\u1EBFp d\u1EBBo th\u01A1m ng\u1EADm tr\u1ECDn v\u1ECB \u0111\u1EADm \u0111\xE0 c\u1EE7a th\u1ECBt kho"
    },
    "heroImage": "/images/taiwan-tube-rice-hero.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 35,
    "cookTimeMinutes": 45,
    "defaultServings": 4,
    "caloriesPerServing": 460,
    "category": "mains",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional",
      "instantPot"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u4E2D\u6E05\u6C34 / \u53F0\u5317\u5927\u6A4B\u982D\u5EF6\u4E09",
        "en": "Taichung Qingshui / Taipei Yansan",
        "ja": "\u53F0\u4E2D\u6E05\u6C34 / \u53F0\u5317\u5927\u6A4B\u982D\u5EF6\u4E09",
        "ko": "\uD0C0\uC774\uC911 \uCE6D\uC218\uC774 / \uD0C0\uC774\uBCA0\uC774 \uC60C\uC2FC",
        "vi": "Qingshui \u0110\xE0i Trung / Yansan \u0110\xE0i B\u1EAFc"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u5927\u6A4B\u982D\u5EF6\u4E09\u591C\u5E02",
          "en": "Yansan Night Market",
          "ja": "\u5EF6\u4E09\u591C\u5E02",
          "ko": "\uC60C\uC2FC \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Yansan"
        },
        {
          "zh-TW": "\u6E05\u6C34\u738B\u5854 / \u963F\u8CA1\u7C73\u7CD5\u8001\u5E97",
          "en": "Qingshui Wangta / Acai Rice Cake",
          "ja": "\u6E05\u6C34\u738B\u5854\u7C73\u7CD5",
          "ko": "\uCE6D\uC218\uC774 \uC655\uD0C0 \uBBF8\uAC00\uC624",
          "vi": "Qingshui Acai M\u1EC5 Cao"
        }
      ],
      "historyStory": {
        "zh-TW": "\u76F8\u50B3\u6E90\u81EA\u5317\u5B8B\u8607\u6771\u5761\u7684\u300E\u76E4\u6E38\u98EF\u300F\uFF0C\u8FD1\u4EE3\u5728\u53F0\u4E2D\u6E05\u6C34\u767C\u63DA\u5149\u5927\u3002\u65E9\u671F\u7528\u7AF9\u7B52\u76DB\u88DD\uFF0C\u5F8C\u6539\u826F\u70BA\u7279\u88FD\u5C0F\u9435\u7B52\u3002\u5C07\u7092\u904E\u8525\u6CB9\u91AC\u6C41\u7684\u5713\u7CEF\u7C73\u586B\u5165\u92EA\u6709\u6EF7\u8089\u3001\u9999\u83C7\u3001\u8766\u7C73\u7684\u5C0F\u9435\u7B52\u84B8\u900F\uFF0C\u98DF\u7528\u6642\u5012\u6263\u812B\u6A21\uFF0C\u6DCB\u4E0A\u7D05\u8C54\u751C\u8FA3\u91AC\u8207\u9999\u83DC\u3002",
        "en": "Dating back to traditional banquet rice, perfected in Qingshui, Taichung. Glutinous rice stir-fried with shallot oil is packed into small metal cylinders over braised pork and shiitake, steamed tender and unmolded upside down.",
        "ja": "\u6614\u306F\u7AF9\u7B52\u3067\u4F5C\u3089\u308C\u3066\u3044\u305F\u53F0\u4E2D\u30FB\u6E05\u6C34\u306E\u540D\u7269\u6599\u7406\u3002\u7092\u3081\u305F\u3082\u3061\u7C73\u3092\u8C5A\u8089\u3084\u5E72\u3057\u30A8\u30D3\u3068\u4E00\u7DD2\u306B\u91D1\u5C5E\u306E\u5C0F\u7B52\u306B\u8A70\u3081\u3066\u84B8\u3057\u4E0A\u3052\u3001\u76BF\u306B\u3072\u3063\u304F\u308A\u8FD4\u3057\u3066\u7518\u8F9B\u30C0\u30EC\u3092\u304B\u3051\u3066\u98DF\u3057\u307E\u3059\u3002",
        "ko": "\uC61B\uB0A0 \uB300\uB098\uBB34\uD1B5\uC5D0\uC11C \uC720\uB798\uD558\uC5EC \uC1E0\uC6D0\uD1B5\uC5D0 \uBCF6\uC740 \uCC39\uC300\uACFC \uB3FC\uC9C0\uACE0\uAE30, \uBC84\uC12F\uC744 \uB123\uACE0 \uCA84\uB0B4 \uB4A4\uC9D1\uC5B4 \uB2F4\uC544\uB0B4\uB294 \uB300\uB9CC \uC911\uBD80\uC758 \uB300\uD45C \uC804\uD1B5 \uC694\uB9AC\uC785\uB2C8\uB2E4.",
        "vi": "Xu\u1EA5t ph\xE1t t\u1EEB c\xE1ch h\u1EA5p trong \u1ED1ng tre, ng\xE0y nay \u0111\u01B0\u1EE3c g\xF3i trong \u1ED1ng kim lo\u1EA1i nh\u1ECF h\u1EA5p ch\xEDn \xFAp ng\u01B0\u1EE3c ra \u0111\u0129a r\u01B0\u1EDBi s\u1ED1t t\u01B0\u01A1ng \u1EDBt \u0111\u1ECF r\u1EF1c th\u01A1m ngon."
      },
      "taiwaneseHokkien": "T\xE2ng-\xE1 b\xED-ko (\u3109\u3124\u02CA \u311A\u02CB \u3105\u3127\u02CB \u310D\u311C)",
      "mandarinPinyin": "T\u01D2ngz\u01CEi M\u01D0g\u0101o (\u310A\u3128\u3125\u02C7 \u3117\u02C7 \u3107\u3127\u02C7 \u310D\u3120)",
      "audioPronunciationText": "\u7C73\u7CD5\u5169\u7B52\uFF0C\u90FD\u8981\u52A0\u8FA3\u91AC\u52A0\u9999\u83DC\uFF0C\u518D\u914D\u4E00\u7897\u8089\u7FB9\u6E6F"
    },
    "ingredients": [
      {
        "id": "round-glutinous-rice",
        "name": {
          "zh-TW": "\u53F0\u7063\u512A\u8CEA\u5713\u7CEF\u7C73 (\u6CE1\u6C34 2 \u5C0F\u6642\u701D\u4E7E)",
          "en": "Round Glutinous Rice (Soaked 2 Hours)",
          "ja": "\u53F0\u6E7E\u7523 \u4E38\u3082\u3061\u7C73\uFF082\u6642\u9593\u6D78\u6C34\uFF09",
          "ko": "\uB465\uADFC \uCC39\uC300 (2\uC2DC\uAC04 \uBD88\uB9B0 \uAC83)",
          "vi": "G\u1EA1o n\u1EBFp c\xE1i h\u1EA1t tr\xF2n (Ng\xE2m 2 ti\u1EBFng)"
        },
        "amount": 300,
        "unitMetric": "g",
        "unitUS": "1.5 cups",
        "isKeyFlavor": true,
        "chineseName": "\u5713\u7CEF\u7C73",
        "chinesePinyin": "Yu\xE1n nu\xF2m\u01D0"
      },
      {
        "id": "pork-belly-slices",
        "name": {
          "zh-TW": "\u5E36\u76AE\u4E94\u82B1\u8089\u7247\u8207\u8C6C\u5F8C\u817F\u8089\u4E01",
          "en": "Pork Belly Slices & Lean Pork Dices",
          "ja": "\u76AE\u4ED8\u304D\u8C5A\u30D0\u30E9\u8089\u30B9\u30E9\u30A4\u30B9\uFF06\u8C5A\u3082\u3082\u8089\u89D2\u5207\u308A",
          "ko": "\uAECD\uC9C8 \uBD99\uC740 \uC0BC\uACB9\uC0B4 \uC2AC\uB77C\uC774\uC2A4 \uBC0F \uB3FC\uC9C0\uACE0\uAE30 \uAE4D\uB451\uC370\uAE30",
          "vi": "Th\u1ECBt ba ch\u1EC9 heo c\xF3 b\xEC v\xE0 th\u1ECBt n\u1EA1c th\xE1i nh\u1ECF"
        },
        "amount": 200,
        "unitMetric": "g",
        "unitUS": "7 oz",
        "isKeyFlavor": true,
        "chineseName": "\u4E94\u82B1\u8089\u5F8C\u817F\u8089",
        "chinesePinyin": "W\u01D4hu\u0101 r\xF2u"
      },
      {
        "id": "shallots-dried-shrimp",
        "name": {
          "zh-TW": "\u7D05\u8525\u982D\u9165\u3001\u4E7E\u9999\u83C7\u7247\u3001\u91D1\u9264\u8766\u7C73",
          "en": "Crispy Fried Shallots, Dried Shiitake, Dried Shrimp",
          "ja": "\u63DA\u3052\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u3001\u5E72\u3057\u690E\u8338\u3001\u5E72\u3057\u30A8\u30D3",
          "ko": "\uC0EC\uB86F \uD280\uAE40, \uAC74\uD45C\uACE0\uBC84\uC12F, \uAC74\uC0C8\uC6B0",
          "vi": "H\xE0nh t\xEDm phi, n\u1EA5m h\u01B0\u01A1ng kh\xF4, t\xF4m n\xF5n kh\xF4"
        },
        "amount": 80,
        "unitMetric": "g",
        "unitUS": "3 oz",
        "isKeyFlavor": true,
        "chineseName": "\u6CB9\u8525\u9999\u83C7\u8766\u7C73",
        "chinesePinyin": "Y\xF3uc\u014Dng xi\u0101ngg\u016B"
      },
      {
        "id": "rice-pudding-sauce",
        "name": {
          "zh-TW": "\u6E05\u6C34\u79D8\u88FD\u751C\u8FA3\u91AC\u8207\u65B0\u9BAE\u9999\u83DC",
          "en": "Signature Qingshui Sweet Chili Sauce & Cilantro",
          "ja": "\u6E05\u6C34\u7279\u88FD\u7518\u8F9B\u30C0\u30EC\uFF06\u30D5\u30EC\u30C3\u30B7\u30E5\u30D1\u30AF\u30C1\u30FC",
          "ko": "\uCE6D\uC218\uC774 \uD2B9\uC81C \uC2A4\uC704\uD2B8 \uCE60\uB9AC\uC18C\uC2A4 \uBC0F \uACE0\uC218",
          "vi": "S\u1ED1t t\u01B0\u01A1ng \u1EDBt ng\u1ECDt Thanh Th\u1EE7y v\xE0 rau ng\xF2 t\u01B0\u01A1i"
        },
        "amount": 80,
        "unitMetric": "ml",
        "unitUS": "3 tbsp",
        "isKeyFlavor": true,
        "chineseName": "\u751C\u8FA3\u91AC\u9999\u83DC",
        "chinesePinyin": "Ti\xE1nl\xE0 ji\xE0ng"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u7092\u9999\u7D05\u8525\u8089\u71E5\u3001\u9999\u83C7\u8207\u8766\u7C73\u914D\u6599",
          "en": "Saut\xE9 Braised Pork, Shiitake & Dried Shrimp",
          "ja": "\u8C5A\u8089\u3001\u690E\u8338\u3001\u5E72\u3057\u30A8\u30D3\u3001\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u3092\u9999\u3070\u3057\u304F\u7092\u3081\u308B",
          "ko": "\uB3FC\uC9C0\uACE0\uAE30, \uD45C\uACE0\uBC84\uC12F, \uAC74\uC0C8\uC6B0, \uC0EC\uB86F\uC744 \uBCF6\uC544 \uC870\uB9AC\uAE30",
          "vi": "X\xE0o th\u01A1m th\u1ECBt ba ch\u1EC9 v\u1EDBi n\u1EA5m h\u01B0\u01A1ng, t\xF4m kh\xF4 v\xE0 h\xE0nh phi"
        },
        "instruction": {
          "zh-TW": "\u71B1\u934B\u4E0B\u5C11\u8A31\u8C6C\u6CB9\uFF0C\u7092\u9999\u9999\u83C7\u7247\u3001\u91D1\u9264\u8766\u7C73\u8207\u4E94\u82B1\u8089\u7247\u3002\u52A0\u5165\u91AC\u6CB9\u3001\u7C73\u9152\u3001\u4E94\u9999\u7C89\u3001\u767D\u80E1\u6912\u7C89\u8207\u6CB9\u8525\u9165\u6162\u7092\u81F3\u4E0A\u8272\u5165\u5473\uFF0C\u6488\u51FA\u90E8\u5206\u8089\u7247\u8207\u9999\u83C7\u7559\u4F5C\u7B52\u5E95\u914D\u6599\u3002",
          "en": "Heat lard in wok, saut\xE9 shiitake, dried shrimp and pork belly. Season with soy sauce, rice wine, five-spice, white pepper and crispy shallots until fragrant. Set aside slices for tube bottom.",
          "ja": "\u30E9\u30FC\u30C9\u3067\u690E\u8338\u3001\u5E72\u3057\u30A8\u30D3\u3001\u8C5A\u8089\u3092\u7092\u3081\u3001\u91A4\u6CB9\u3001\u9152\u3001\u4E94\u9999\u7C89\u3001\u63DA\u3052\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u3067\u9999\u3070\u3057\u304F\u5473\u4ED8\u3051\u3057\u307E\u3059\u3002\u7B52\u5E95\u7528\u306E\u5177\u3092\u5C11\u3057\u53D6\u308A\u5206\u3051\u3066\u304A\u304D\u307E\u3059\u3002",
          "ko": "\uD32C\uC5D0 \uB77C\uB4DC\uB97C \uB450\uB974\uACE0 \uBC84\uC12F, \uAC74\uC0C8\uC6B0, \uC0BC\uACB9\uC0B4\uC744 \uBCF6\uB2E4\uAC00 \uAC04\uC7A5, \uB9DB\uC220, \uC624\uD5A5\uBD84, \uC0EC\uB86F\uD280\uAE40\uC744 \uB123\uC5B4 \uC870\uB9BD\uB2C8\uB2E4. \uBC14\uB2E5\uC5D0 \uAE54 \uACE0\uAE30 \uC77C\uBD80\uB97C \uB530\uB85C \uB35C\uC5B4\uB461\uB2C8\uB2E4.",
          "vi": "\u0110un n\xF3ng m\u1EE1 heo x\xE0o th\u01A1m n\u1EA5m, t\xF4m kh\xF4 v\xE0 th\u1ECBt ba ch\u1EC9. N\xEAm n\u01B0\u1EDBc t\u01B0\u01A1ng, r\u01B0\u1EE3u, ng\u0169 v\u1ECB h\u01B0\u01A1ng v\xE0 h\xE0nh phi cho v\xE0ng \xF3ng, m\xFAc ri\xEAng m\u1ED9t \xEDt th\u1ECBt \u0111\u1EC3 l\xF3t \u0111\xE1y \u1ED1ng."
        },
        "durationSeconds": 480,
        "image": "/images/taiwan-tube-rice-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u5713\u7CEF\u7C73\u5165\u934B\u62CC\u7092\u5438\u98FD\u7D05\u8525\u91AC\u6C41\u9999\u6C23",
          "en": "Stir-Fry Soaked Glutinous Rice in Shallot Sauce",
          "ja": "\u6D78\u6C34\u3055\u305B\u305F\u4E38\u3082\u3061\u7C73\u3092\u52A0\u3048\u3001\u65E8\u5473\u30BF\u30EC\u3092\u5438\u308F\u305B\u308B\u3088\u3046\u306B\u7092\u3081\u308B",
          "ko": "\uBD88\uB9B0 \uCC39\uC300\uC744 \uB123\uACE0 \uC18C\uC2A4\uAC00 \uBC30\uC5B4\uB4E4\uB3C4\uB85D \uBCF6\uAE30",
          "vi": "Cho g\u1EA1o n\u1EBFp \u0111\xE3 ng\xE2m v\xE0o x\xE0o cho h\u1EA1t n\u1EBFp ng\u1EADm no n\u01B0\u1EDBc s\u1ED1t"
        },
        "instruction": {
          "zh-TW": "\u5C07\u6CE1\u597D\u701D\u4E7E\u7684\u5713\u7CEF\u7C73\u5012\u5165\u7559\u6709\u6FC3\u90C1\u8089\u6C41\u7684\u7092\u934B\u4E2D\uFF0C\u4E2D\u5C0F\u706B\u5FEB\u901F\u7FFB\u7092 3~5 \u5206\u9418\uFF0C\u8B93\u6BCF\u7C92\u7CEF\u7C73\u5747\u52FB\u88F9\u4E0A\u4E00\u5C64\u7425\u73C0\u8272\u6CB9\u8525\u91AC\u9999\uFF0C\u7C73\u7C92\u5448\u534A\u900F\u660E\u5FAE\u719F\u72C0\u3002",
          "en": "Add drained soaked glutinous rice to remaining savory gravy in wok. Stir-fry over medium heat for 3-5 mins until grains turn glossy amber and absorb all flavors.",
          "ja": "\u6C34\u6C17\u3092\u5207\u3063\u305F\u3082\u3061\u7C73\u3092\u30D5\u30E9\u30A4\u30D1\u30F3\u306B\u6B8B\u3063\u305F\u30BF\u30EC\u306B\u52A0\u3048\u3001\u4E2D\u706B\u30673\u301C5\u5206\u7092\u3081\u3066\u7C73\u7C92\u306B\u65E8\u5473\u3092\u5438\u308F\u305B\u307E\u3059\u3002",
          "ko": "\uBB3C\uAE30 \uBE80 \uCC39\uC300\uC744 \uB0A8\uC740 \uC591\uB150\uC5D0 \uB123\uACE0 \uC911\uBD88\uC5D0\uC11C 3-5\uBD84\uAC04 \uBCF6\uC544 \uBC25\uC54C\uC774 \uC591\uB150\uC744 \uB4EC\uBFCD \uBA38\uAE08\uAC8C \uD569\uB2C8\uB2E4.",
          "vi": "\u0110\u1ED5 n\u1EBFp r\xE1o n\u01B0\u1EDBc v\xE0o ch\u1EA3o s\u1ED1t x\xE0o \u0111\u1EC1u tay 3-5 ph\xFAt cho t\u1EEBng h\u1EA1t n\u1EBFp b\xF3ng b\u1EA9y ng\u1EA5m m\xE0u n\xE2u v\xE0ng c\xE1nh gi\xE1n."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-tube-rice-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u9435\u7B52\u5E95\u90E8\u92EA\u8089\u7247\u9999\u83C7\u3001\u586B\u7C73\u58D3\u5BE6\u84B8\u900F",
          "en": "Layer Pork in Tubes, Pack with Rice & Steam",
          "ja": "\u7B52\u306E\u5E95\u306B\u5177\u3092\u6577\u304D\u3001\u7092\u3081\u305F\u3082\u3061\u7C73\u3092\u8A70\u3081\u3066\u84B8\u3057\u4E0A\u3052\u308B",
          "ko": "\uC6D0\uD1B5 \uBC14\uB2E5\uC5D0 \uACE0\uAE30\uB97C \uAE54\uACE0 \uCC39\uC300\uC744 \uCC44\uC6CC \uCC0C\uAE30",
          "vi": "L\xF3t th\u1ECBt n\u1EA5m d\u01B0\u1EDBi \u0111\xE1y \u1ED1ng, x\xFAc n\u1EBFp n\xE9n ch\u1EB7t v\xE0 \u0111em h\u1EA5p"
        },
        "instruction": {
          "zh-TW": "\u5728\u5C0F\u9435\u7B52\uFF08\u6216\u8010\u71B1\u5C0F\u676F\uFF09\u5167\u58C1\u5857\u8584\u6CB9\uFF0C\u5E95\u90E8\u5148\u92EA\u4E0A\u7092\u9999\u7684\u4E94\u82B1\u8089\u7247\u3001\u9999\u83C7\u8207\u9E79\u86CB\u9EC3\u3002\u586B\u5165\u7092\u597D\u7684\u7CEF\u7C73\u81F3\u4E5D\u5206\u6EFF\uFF0C\u7528\u6E6F\u5319\u8F15\u8F15\u58D3\u5BE6\u3002\u653E\u5165\u84B8\u7C60\u5927\u706B\u84B8 40~45 \u5206\u9418\u81F3\u7C73\u7C92\u8EDF\u7CEF\u5F48\u7259\u3002",
          "en": "Brush inside of metal tubes with oil. Place pork slices, shiitake and salted egg yolk at bottom. Pack in seasoned rice to 90% full, press lightly. Steam on high for 40-45 mins until tender and chewy.",
          "ja": "\u5C0F\u7B52\u306E\u5185\u5074\u306B\u6CB9\u3092\u5857\u308A\u3001\u5E95\u306B\u8C5A\u8089\u3068\u690E\u8338\u3092\u6577\u3044\u3066\u304B\u3089\u7092\u3081\u305F\u3082\u3061\u7C73\u3092\u8A70\u3081\u307E\u3059\u3002\u84B8\u3057\u5668\u3067\u5F37\u706B40\u301C45\u5206\u3075\u3063\u304F\u3089\u84B8\u3057\u4E0A\u3052\u307E\u3059\u3002",
          "ko": "\uC791\uC740 \uC6D0\uD1B5 \uC548\uCABD\uC5D0 \uAE30\uB984\uC744 \uBC14\uB974\uACE0 \uBC14\uB2E5\uC5D0 \uACE0\uAE30\uC640 \uBC84\uC12F\uC744 \uAE50 \uB4A4 \uCC39\uC300\uC744 90% \uCC44\uC6CC \uAFB9 \uB204\uB985\uB2C8\uB2E4. \uCC1C\uAE30\uC5D0\uC11C 40-45\uBD84\uAC04 \uD479 \uCA84\uB0C5\uB2C8\uB2E4.",
          "vi": "Qu\xE9t d\u1EA7u l\xF2ng \u1ED1ng kim lo\u1EA1i, x\u1EBFp th\u1ECBt n\u1EA5m tr\u1EE9ng mu\u1ED1i xu\u1ED1ng \u0111\xE1y, m\xFAc n\u1EBFp v\xE0o n\xE9n v\u1EEBa tay. H\u1EA5p l\u1EEDa l\u1EDBn 40-45 ph\xFAt cho x\xF4i ch\xEDn d\u1EBBo m\u1EC1m."
        },
        "durationSeconds": 2700,
        "image": "/images/taiwan-tube-rice-step3.jpg",
        "cookwareVariations": [
          {
            "cookware": "instantPot",
            "tempAndSetting": "Steam Mode High Pressure: 25 mins + Quick Release",
            "instructionOverride": {
              "zh-TW": "\u5728 Instant Pot \u5167\u81BD\u4E2D\u6CE8\u5165 1.5 \u676F\u6E05\u6C34\uFF0C\u653E\u5165\u9AD8\u8173\u84B8\u67B6\u3002\u5C07\u88DD\u597D\u6599\u8207\u7CEF\u7C73\u7684\u9435\u7B52\u5E73\u7A69\u6392\u5728\u84B8\u67B6\u4E0A\uFF0C\u9396\u4E0A\u934B\u84CB\u3002\u8A2D\u5B9A Steam\uFF08\u84B8\u716E\uFF09\u9AD8\u58D3\u6A21\u5F0F 25 \u5206\u9418\uFF0C\u6642\u9593\u5230\u5F8C\u624B\u52D5\u5FEB\u901F\u6D29\u58D3\u3002\u7C73\u7C92\u9846\u9846\u6676\u7469\u5254\u900F\u3001\u8EDF\u7CEFQ\u5F48\uFF01",
              "en": "Pour 1.5 cups water into Instant Pot, insert trivet. Place loaded metal tubes on trivet, lock lid. Set Steam mode on High Pressure for 25 mins, then Quick Release. Perfectly chewy and aromatic!",
              "ja": "\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u30DD\u30C3\u30C8\u306B\u6C341.5\u30AB\u30C3\u30D7\u3092\u5165\u308C\u84B8\u3057\u53F0\u3092\u30BB\u30C3\u30C8\u3002\u7B52\u3092\u4E26\u3079\u3066\u84CB\u3092\u3057\u3001Steam\u9AD8\u5727\u30E2\u30FC\u30C9\u306725\u5206\u52A0\u71B1\u5F8C\u30AF\u30A4\u30C3\u30AF\u6E1B\u5727\u3002\u9A5A\u304F\u307B\u3069\u30E2\u30C1\u30E2\u30C1\u306B\uFF01",
              "ko": "\uC778\uC2A4\uD134\uD2B8\uD31F\uC5D0 \uBB3C 1.5\uCEF5\uC744 \uBD93\uACE0 \uCC1C\uAE30\uB97C \uC62C\uB9B0 \uB4A4 \uC6D0\uD1B5\uC744 \uC5B9\uC2B5\uB2C8\uB2E4. Steam \uBAA8\uB4DC \uACE0\uC555 25\uBD84 \uC124\uC815 \uD6C4 \uCF8C\uC18D \uAC10\uC555\uD569\uB2C8\uB2E4. \uBC25\uC54C\uC774 \uCAC0\uB4DD\uCAC0\uB4DD \uC644\uBCBD\uD558\uAC8C \uC775\uC2B5\uB2C8\uB2E4!",
              "vi": "\u0110\u1ED5 1.5 c\u1ED1c n\u01B0\u1EDBc v\xE0o n\u1ED3i Instant Pot, \u0111\u1EB7t gi\xE1 h\u1EA5p r\u1ED3i x\u1EBFp \u1ED1ng x\xF4i l\xEAn. Ch\u1ECDn ch\u1EBF \u0111\u1ED9 Steam \xE1p su\u1EA5t cao 25 ph\xFAt r\u1ED3i x\u1EA3 van nhanh."
            }
          }
        ]
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u5012\u6263\u812B\u6A21\u51FA\u7B52\u3001\u6DCB\u6EFF\u9748\u9B42\u751C\u8FA3\u91AC\uFF01",
          "en": "Invert Tube onto Plate & Drench in Sweet Chili Sauce",
          "ja": "\u76BF\u306E\u4E0A\u306B\u3072\u3063\u304F\u308A\u8FD4\u3057\u3066\u629C\u304D\u53D6\u308A\u3001\u7279\u88FD\u7518\u8F9B\u30C0\u30EC\u3092\u304B\u3051\u308B\uFF01",
          "ko": "\uC811\uC2DC\uC5D0 \uAC70\uAFB8\uB85C \uB4A4\uC9D1\uC5B4 \uBE7C\uB0B4\uACE0 \uB2EC\uCF64 \uB9E4\uCF64 \uC18C\uC2A4 \uBFCC\uB9AC\uAE30!",
          "vi": "\xDAp ng\u01B0\u1EE3c \u1ED1ng ra \u0111\u0129a g\u1EE1 b\xE1nh v\xE0 chan \u0111\u1EABm s\u1ED1t t\u01B0\u01A1ng ng\u1ECDt cay!"
        },
        "instruction": {
          "zh-TW": "\u84B8\u597D\u5F8C\u53D6\u51FA\u5C0F\u9435\u7B52\uFF0C\u6CBF\u908A\u7DE3\u7528\u6241\u7AF9\u7C64\u5283\u4E00\u5708\uFF0C\u5012\u6263\u5728\u76E4\u4E2D\u592E\u8F15\u6572\u812B\u6A21\u3002\u7ACB\u9AD4\u5713\u67F1\u72C0\u7684\u7C73\u7CD5\u9802\u7AEF\u5448\u73FE\u6CB9\u4EAE\u4E94\u82B1\u8089\u8207\u9999\u83C7\uFF0C\u6DCB\u4E0A\u6FC3\u90C1\u7684\u53F0\u7063\u7D05\u751C\u8FA3\u91AC\u8207\u9BAE\u9999\u83DC\uFF0C\u71B1\u6C23\u9A30\u9A30\u958B\u52D5\uFF01",
          "en": "Run thin spatula around tube edge and invert firmly onto plate. The freestanding cylinder reveals glistening pork and mushrooms on top. Ladle signature sweet chili sauce and fresh cilantro over top!",
          "ja": "\u30D8\u30E9\u3067\u7E01\u3092\u5916\u3057\u3001\u304A\u76BF\u306E\u4E0A\u306B\u30DD\u30F3\u3068\u3072\u3063\u304F\u308A\u8FD4\u3057\u3066\u629C\u304D\u307E\u3059\u3002\u8276\u3084\u304B\u306A\u8C5A\u8089\u304C\u9802\u70B9\u306B\u73FE\u308C\u305F\u3089\u3001\u7279\u88FD\u7518\u8F9B\u30C0\u30EC\u3068\u30D1\u30AF\u30C1\u30FC\u3092\u305F\u3063\u3077\u308A\u304B\u3051\u3066\u71B1\u3005\u3092\u3069\u3046\u305E\uFF01",
          "ko": "\uAC00\uC7A5\uC790\uB9AC\uB97C \uAE01\uC5B4 \uC811\uC2DC\uC5D0 \uB4A4\uC9D1\uC5B4 \uBE7C\uB0B4\uBA74 \uC724\uAE30 \uB098\uB294 \uACE0\uAE30\uAC00 \uC5B9\uC5B4\uC9C4 \uC6D0\uD1B5\uD615 \uCC39\uC300\uBC25\uC774 \uC644\uC131\uB429\uB2C8\uB2E4. \uB2EC\uCF64 \uB9E4\uCF64 \uC18C\uC2A4\uC640 \uACE0\uC218\uB97C \uBFCC\uB824 \uC990\uAE41\uB2C8\uB2E4.",
          "vi": "D\xF9ng que m\u1ECFng l\xE1ch quanh mi\u1EC7ng \u1ED1ng \xFAp ng\u01B0\u1EE3c ra \u0111\u0129a. Kh\u1ED1i x\xF4i h\xECnh tr\u1EE5 l\u1ED9 ra l\u1EDBp th\u1ECBt ba ch\u1EC9 \xF3ng \u1EA3 tr\xEAn \u0111\u1EC9nh, chan \u0111\u1EABm s\u1ED1t t\u01B0\u01A1ng ng\u1ECDt cay r\u1EAFc ng\xF2 r\xED n\xF3ng h\u1ED5i h\u1EA5p d\u1EABn!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-tube-rice-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "rice-hard",
        "problem": {
          "zh-TW": "\u7C73\u7CD5\u84B8\u51FA\u4F86\u7C73\u7C92\u593E\u751F\u6216\u592A\u786C\uFF1F",
          "en": "Why is my steamed rice undercooked or too hard?",
          "ja": "\u304A\u3053\u308F\u304C\u82AF\u6B8B\u308A\u3057\u3066\u56FA\u304F\u306A\u3063\u3066\u3057\u307E\u3063\u305F\uFF1F",
          "ko": "\uCC39\uC300\uBC25\uC5D0 \uC124\uC775\uC740 \uC2EC\uC774 \uB0A8\uACE0 \uB531\uB531\uD55C\uAC00\uC694?",
          "vi": "X\xF4i h\u1EA5p xong b\u1ECB s\u01B0\u1EE3ng c\u1EE9ng ch\u01B0a ch\xEDn th\u1EA5u?"
        },
        "cause": {
          "zh-TW": "\u5713\u7CEF\u7C73\u6D78\u6CE1\u6642\u9593\u4E0D\u8DB3\uFF0C\u6216\u84B8\u934B\u84B8\u6C7D\u4E0D\u5920\u5927\u3002",
          "en": "Rice wasn't soaked long enough or low steam heat.",
          "ja": "\u6D78\u6C34\u6642\u9593\u304C\u77ED\u304B\u3063\u305F\u304B\u3001\u84B8\u6C17\u306E\u706B\u529B\u304C\u5F31\u304B\u3063\u305F\u305F\u3081\u3067\u3059\u3002",
          "ko": "\uCC39\uC300\uC744 \uBD88\uB9AC\uB294 \uC2DC\uAC04\uC774 \uC9E7\uC558\uAC70\uB098 \uCC1C\uAE30 \uD654\uB825\uC774 \uC57D\uD588\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "Ch\u01B0a ng\xE2m n\u1EBFp \u0111\u1EE7 2 ti\u1EBFng ho\u1EB7c l\u1EEDa h\u1EA5p qu\xE1 y\u1EBFu."
        },
        "solution": {
          "zh-TW": "\u5713\u7CEF\u7C73\u5FC5\u9808\u6D78\u6CE1\u8DB3 2 \u5C0F\u6642\uFF1B\u7092\u7C73\u6642\u52A0\u5C11\u8A31\u9AD8\u6E6F\u5438\u6C34\uFF0C\u5168\u7A0B\u5927\u706B\u8DB3\u6C7D\u84B8 45 \u5206\u9418\uFF01",
          "en": "Soak 2 hours minimum; add splash of stock during stir-fry and steam on full blast for 45 mins!",
          "ja": "\u6700\u4F4E2\u6642\u9593\u6D78\u6C34\u3055\u305B\u3001\u7092\u3081\u308B\u969B\u306B\u51FA\u6C41\u3092\u5438\u308F\u305B\u3001\u5F37\u706B\u306745\u5206\u84B8\u3057\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uCD5C\uC18C 2\uC2DC\uAC04 \uBD88\uB9AC\uACE0 \uBCF6\uC744 \uB54C \uC721\uC218\uB97C \uC870\uAE08 \uC8FC\uC5B4 \uC13C \uBD88\uC5D0\uC11C 45\uBD84\uAC04 \uCC0C\uC138\uC694!",
          "vi": "Ph\u1EA3i ng\xE2m \u0111\u1EE7 2 ti\u1EBFng, khi x\xE0o n\u1EBFp ch\xE2m th\xEAm ch\xFAt n\u01B0\u1EDBc d\xF9ng v\xE0 h\u1EA5p l\u1EEDa l\u1EDBn \u0111\u1EE7 45 ph\xFAt!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u7B52\u5E95\u4E00\u5B9A\u8981\u653E\u4E00\u7247\u5E36\u76AE\u539A\u5207\u80A5\u7626\u4E94\u82B1\u8089\uFF0C\u84B8\u900F\u5F8C\u8C6C\u6CB9\u7CBE\u83EF\u81EA\u9802\u5411\u4E0B\u6EF2\u900F\u6574\u7B52\u7CEF\u7C73\uFF0C\u7C92\u7C92\u6CB9\u4EAE\u5674\u9999\uFF01",
        "en": "Place fatty pork belly at the bottom so rendered lard drips down through all rice grains during steaming!",
        "ja": "\u5E95\u306B\u6577\u304F\u8C5A\u30D0\u30E9\u8089\u306E\u8102\u304C\u84B8\u6C17\u3067\u6EB6\u3051\u51FA\u3057\u3001\u4E0B\u306E\u3082\u3061\u7C73\u5168\u4F53\u306B\u67D3\u307F\u6E21\u308B\u306E\u304C\u6700\u9AD8\u306E\u7F8E\u5473\u3057\u3055\u306E\u79D8\u5BC6\uFF01",
        "ko": "\uBC14\uB2E5\uC5D0 \uBE44\uACC4\uAC00 \uC801\uB2F9\uD55C \uC0BC\uACB9\uC0B4\uC744 \uAE54\uC544\uC57C \uCC0C\uB294 \uB3D9\uC548 \uB3FC\uC9C0\uAE30\uB984\uC774 \uBC25 \uC804\uCCB4\uB85C \uC2A4\uBA70\uB4E4\uC5B4 \uC724\uAE30\uAC00 \uD750\uB985\uB2C8\uB2E4!",
        "vi": "L\xF3t mi\u1EBFng ba ch\u1EC9 c\xF3 m\u1EE1 d\u01B0\u1EDBi \u0111\xE1y \u1ED1ng \u0111\u1EC3 khi h\u1EA5p m\u1EE1 heo ch\u1EA3y th\u1EA5m \u0111\u1EC1u xu\u1ED1ng t\u1EEBng h\u1EA1t n\u1EBFp th\u01A1m l\u1EEBng b\xE9o ng\u1EADy!"
      }
    ]
  },
  {
    "id": "mee-tai-bak",
    "slug": "mee-tai-bak",
    "title": {
      "zh-TW": "\u53F0\u6771\u67F4\u9B5A\u8089\u71E5\u4E7E\u62CC\u7C73\u82D4\u76EE",
      "en": "Taitung Dry-Tossed Mee Tai Bak (Rice Noodles with Bonito)",
      "ja": "\u53F0\u6771\u540D\u7269 \u9C39\u7BC0\u3068\u8089\u5473\u564C\u306E\u548C\u3048\u7C73\u82D4\u76EE\uFF08\u30DF\u30FC\u30BF\u30A4\u30D0\u30C3\u30AF\uFF09",
      "ko": "\uB300\uB9CC \uD0C0\uC774\uB465 \uAC00\uC4F0\uC624\uBD80\uC2DC \uB3FC\uC9C0\uACE0\uAE30 \uBE44\uBE54 \uBBF8\uD0C0\uC774\uBAA9 (\uC300\uAD6D\uC218)",
      "vi": "B\xE1nh l\u1ECDt kh\xF4 x\xE0o th\u1ECBt b\u0103m c\xE1 ng\u1EEB b\xE0o \u0110\xE0i \u0110\xF4ng (Mee Tai Bak)"
    },
    "subtitle": {
      "zh-TW": "\u7D14\u5728\u4F86\u7C73\u624B\u5DE5\u6ED1\u6E9C\u7C97\u9EB5\u689D\u30FB\u98DB\u821E\u6975\u8584\u67F4\u9B5A\u7247\u30FB\u9999\u6FC3\u7D05\u8525\u8089\u71E5\u30FB\u723D\u8106\u8C46\u82BD",
      "en": "Silky Pure Rice Noodles, Dancing Bonito Flakes, Fragrant Shallot Pork Gravy & Bean Sprouts",
      "ja": "\u30C4\u30EB\u30C4\u30EB\u7C73\u7C89\u6975\u592A\u9EBA\u30FB\u8E0A\u308B\u6975\u8584\u82B1\u9C39\u30FB\u9999\u308A\u9AD8\u3044\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u8089\u5473\u564C\u30FB\u30B7\u30E3\u30AD\u30B7\u30E3\u30AD\u3082\u3084\u3057",
      "ko": "\uC21C\uC300\uB85C \uB9CC\uB4E0 \uBBF8\uB044\uB7EC\uC6B4 \uAD75\uC740 \uC300\uBA74, \uCDA4\uCD94\uB294 \uC587\uC740 \uAC00\uC4F0\uC624\uBD80\uC2DC, \uACE0\uC18C\uD55C \uC0EC\uB86F \uACE0\uAE30\uBCF6\uC74C, \uC544\uC0AD\uD55C \uC219\uC8FC",
      "vi": "S\u1EE3i b\xE1nh l\u1ECDt g\u1EA1o t\u1EBB tr\u01A1n tu\u1ED9t, c\xE1 ng\u1EEB b\xE0o m\u1ECFng tang nh\u1EA3y m\xFAa, th\u1ECBt kho h\xE0nh phi v\xE0 gi\xE1 \u0111\u1ED7 gi\xF2n"
    },
    "tagline": {
      "zh-TW": "\u53F0\u6771\u8001\u9955\u7121\u4EBA\u4E0D\u66C9\u7684\u50B3\u5947\u4E3B\u98DF\uFF01\u71B1\u6C23\u9A30\u9A30\u4E0A\u684C\u6642\u67F4\u9B5A\u7247\u5728\u7897\u4E2D\u7FE9\u7FE9\u8D77\u821E",
      "en": "The legendary culinary emblem of Taitung: silky rice noodles crowned with dancing bonito flakes",
      "ja": "\u53F0\u6771\u3092\u8A2A\u308C\u305F\u3089\u5FC5\u98DF\u306E\u30BD\u30A6\u30EB\u30D5\u30FC\u30C9\uFF01\u71B1\u3005\u306E\u6E6F\u6C17\u3067\u9C39\u7BC0\u304C\u8E0A\u308B\u3001\u51FA\u6C41\u3068\u8089\u5473\u564C\u306E\u9999\u3070\u3057\u3044\u4E00\u676F",
      "ko": "\uD0C0\uC774\uB465 \uC5EC\uD589\uC758 \uD544\uC218 \uCF54\uC2A4! \uB728\uAC70\uC6B4 \uBA74 \uC704\uC5D0\uC11C \uAC00\uC4F0\uC624\uBD80\uC2DC\uAC00 \uCDA4\uC744 \uCD94\uB294 \uC78A\uC9C0 \uBABB\uD560 \uD48D\uBBF8",
      "vi": "\u0110\u1EB7c s\u1EA3n n\u1EE9c ti\u1EBFng \u0110\xE0i \u0110\xF4ng v\u1EDBi nh\u1EEFng l\xE1t c\xE1 ng\u1EEB b\xE0o nh\u1EA3y m\xFAa sinh \u0111\u1ED9ng tr\xEAn l\xE0n kh\xF3i nghi ng\xFAt"
    },
    "heroImage": "/images/taiwan-mee-tai-bak-hero.jpg",
    "difficulty": "easy",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "defaultServings": 2,
    "caloriesPerServing": 390,
    "category": "mains",
    "dietaryTags": [
      "classic",
      "glutenFree"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u6771\u5E02 / \u53F0\u5317\u5927\u540C\u5EF6\u4E09",
        "en": "Taitung City / Taipei Yansan",
        "ja": "\u53F0\u6771\u5E02 / \u53F0\u5317\u5EF6\u4E09",
        "ko": "\uD0C0\uC774\uB465\uC2DC / \uD0C0\uC774\uBCA0\uC774 \uC60C\uC2FC",
        "vi": "Th\xE0nh ph\u1ED1 \u0110\xE0i \u0110\xF4ng / Yansan \u0110\xE0i B\u1EAFc"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u53F0\u6771\u89C0\u5149\u591C\u5E02",
          "en": "Taitung Night Market",
          "ja": "\u53F0\u6771\u89B3\u5149\u591C\u5E02",
          "ko": "\uD0C0\uC774\uB465 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm \u0110\xE0i \u0110\xF4ng"
        },
        {
          "zh-TW": "\u5927\u6A4B\u982D\u5EF6\u4E09\u591C\u5E02",
          "en": "Yansan Night Market",
          "ja": "\u5EF6\u4E09\u591C\u5E02",
          "ko": "\uC60C\uC2FC \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Yansan"
        }
      ],
      "historyStory": {
        "zh-TW": "\u7C73\u82D4\u76EE\u70BA\u5BA2\u5BB6\u8207\u95A9\u5357\u50B3\u7D71\u7C73\u98DF\uFF0C\u7528\u5728\u4F86\u7C73\u78E8\u6F3F\u6F0F\u7BE9\u5165\u6EFE\u6C34\u4E2D\u71D9\u719F\u3002\u53F0\u6771\u56E0\u9130\u8FD1\u6210\u529F\u6F01\u6E2F\u76DB\u7522\u67F4\u9B5A\uFF0C\u8001\u5E97\u7368\u5275\u5728\u71B1\u9A30\u9A30\u4E7E\u62CC\u7C73\u82D4\u76EE\u4E0A\u6492\u4E0A\u5927\u628A\u6975\u8584\u67F4\u9B5A\u7247\uFF0C\u642D\u914D\u6CB9\u8525\u8089\u71E5\u3001\u70CF\u918B\u8207\u8FA3\u6912\u91AC\uFF0C\u9E79\u9BAE\u7518\u751C\u3002",
        "en": "A traditional Hakka and Taiwanese rice noodle extruded through sieves into boiling water. Taitung locals ingeniously paired it with local artisan bonito flakes from Chenggong Fishing Port.",
        "ja": "\u7C73\u7C89\u3092\u7A74\u306E\u958B\u3044\u305F\u30D8\u30E9\u304B\u3089\u62BC\u3057\u51FA\u3057\u3066\u8339\u3067\u308B\u4F1D\u7D71\u306E\u7C73\u9EBA\u3002\u6210\u529F\u6F01\u6E2F\u306E\u9C39\u7BC0\u3092\u305F\u3063\u3077\u308A\u30C8\u30C3\u30D4\u30F3\u30B0\u3057\u305F\u53F0\u6771\u30B9\u30BF\u30A4\u30EB\u304C\u5168\u56FD\u7684\u306B\u6709\u540D\u3002",
        "ko": "\uBA65\uC300 \uBC18\uC8FD\uC744 \uAD6C\uBA4D \uB6AB\uB9B0 \uD2C0\uC5D0 \uBC00\uC5B4 \uB123\uC5B4 \uC0B6\uC544\uB0B8 \uC804\uD1B5 \uC300\uAD6D\uC218\uB85C, \uAC00\uC4F0\uC624\uBD80\uC2DC \uBA85\uC0B0\uC9C0\uC778 \uD0C0\uC774\uB465\uC5D0\uC11C \uD2B9\uD654\uB41C \uB300\uD45C \uC9C0\uC5ED \uC74C\uC2DD\uC785\uB2C8\uB2E4.",
        "vi": "B\xE1nh l\u1ECDt l\xE0m t\u1EEB b\u1ED9t g\u1EA1o t\u1EBB \xE9p qua khu\xF4n v\xE0o n\u01B0\u1EDBc s\xF4i, k\u1EBFt h\u1EE3p c\xE1 ng\u1EEB b\xE0o Chenggong n\u1EE9c ti\u1EBFng \u0110\xE0i \u0110\xF4ng t\u1EA1o n\xEAn h\u01B0\u01A1ng v\u1ECB m\u1EB7n ng\u1ECDt \u0111\u1EADm \u0111\xE0."
      },
      "taiwaneseHokkien": "B\xED-thai-ba\u030Dk (\u3105\u3127\u02CB \u310A\u311E \u3105\u311A\u02CA)",
      "mandarinPinyin": "M\u01D0t\xE1im\xF9 (\u3107\u3127\u02C7 \u310A\u311E\u02CA \u3107\u3128\u02CB)",
      "audioPronunciationText": "\u7C73\u82D4\u76EE\u4E7E\u7684\u4E00\u7897\uFF0C\u52A0\u4E00\u9846\u6EF7\u86CB\u3001\u67F4\u9B5A\u591A\u4E00\u9EDE"
    },
    "ingredients": [
      {
        "id": "fresh-rice-noodles",
        "name": {
          "zh-TW": "\u7D14\u5728\u4F86\u7C73\u624B\u5DE5\u751F\u7C73\u82D4\u76EE",
          "en": "Fresh Handmade Pure Rice Noodles (Mee Tai Bak)",
          "ja": "\u751F\u7C73\u82D4\u76EE\uFF08\u7C73\u7C89\u306E\u6975\u592A\u9EBA\uFF09",
          "ko": "\uC2E0\uC120\uD55C \uC218\uC81C \uC21C\uC300 \uBBF8\uD0C0\uC774\uBAA9 \uC0DD\uBA74",
          "vi": "S\u1EE3i b\xE1nh l\u1ECDt g\u1EA1o t\u1EBB t\u01B0\u01A1i"
        },
        "amount": 300,
        "unitMetric": "g",
        "unitUS": "10 oz",
        "isKeyFlavor": true,
        "chineseName": "\u751F\u7C73\u82D4\u76EE",
        "chinesePinyin": "Sh\u0113ng m\u01D0t\xE1im\xF9"
      },
      {
        "id": "taitung-bonito-flakes",
        "name": {
          "zh-TW": "\u53F0\u6771\u6210\u529F\u7279\u7522\u9802\u7D1A\u7D30\u8584\u67F4\u9B5A\u7247",
          "en": "Taitung Artisan Thin-Shaved Bonito Flakes",
          "ja": "\u53F0\u6771\u7279\u7523 \u6975\u8584\u524A\u308A\u7BC0\uFF08\u82B1\u9C39\uFF09",
          "ko": "\uD0C0\uC774\uB465 \uD2B9\uC0B0 \uC587\uC740 \uAC00\uC4F0\uC624\uBD80\uC2DC",
          "vi": "C\xE1 ng\u1EEB b\xE0o m\u1ECFng cao c\u1EA5p \u0110\xE0i \u0110\xF4ng"
        },
        "amount": 25,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "isKeyFlavor": true,
        "chineseName": "\u53F0\u6771\u67F4\u9B5A\u7247",
        "chinesePinyin": "Ch\xE1iy\xFA pi\xE0n"
      },
      {
        "id": "shallot-pork-gravy",
        "name": {
          "zh-TW": "\u53E4\u65E9\u5473\u7D05\u8525\u982D\u8089\u71E5 (\u6DCB\u91AC\u7528)",
          "en": "Taiwanese Braised Shallot Minced Pork Gravy",
          "ja": "\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u9999\u308B\u7279\u88FD\u8C5A\u3072\u304D\u8089\u30C0\u30EC",
          "ko": "\uC0EC\uB86F \uAE30\uB984 \uB3FC\uC9C0\uACE0\uAE30 \uC18C\uC2A4 (\uB8E8\uB85C\uC6B0)",
          "vi": "Th\u1ECBt b\u0103m kho h\xE0nh t\xEDm phi th\u01A1m l\u1EEBng"
        },
        "amount": 100,
        "unitMetric": "g",
        "unitUS": "0.5 cup",
        "isKeyFlavor": true,
        "chineseName": "\u7D05\u8525\u8089\u71E5",
        "chinesePinyin": "Y\xF3uc\u014Dng r\xF2uz\xE0o"
      },
      {
        "id": "bean-sprouts-chives",
        "name": {
          "zh-TW": "\u9BAE\u8106\u7DA0\u8C46\u82BD\u8207\u97ED\u83DC\u6BB5\u3001\u5DE5\u7814\u70CF\u918B",
          "en": "Crisp Bean Sprouts, Chinese Chives & Black Vinegar",
          "ja": "\u30B7\u30E3\u30AD\u30B7\u30E3\u30AD\u3082\u3084\u3057\u3001\u30CB\u30E9\u3001\u53F0\u6E7E\u9ED2\u9162",
          "ko": "\uC544\uC0AD\uD55C \uC219\uC8FC, \uBD80\uCD94, \uB300\uB9CC \uD751\uC2DD\uCD08",
          "vi": "Gi\xE1 \u0111\u1ED7 t\u01B0\u01A1i, h\u1EB9 l\xE1 v\xE0 gi\u1EA5m \u0111en"
        },
        "amount": 100,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "chineseName": "\u8C46\u82BD\u97ED\u83DC\u70CF\u918B",
        "chinesePinyin": "D\xF2uy\xE1 ji\u01D4c\xE0i"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u5927\u6EFE\u6C34\u6C46\u71D9\u65B0\u9BAE\u7C73\u82D4\u76EE\u4FDD\u6301\u6ED1\u6E9C\u5F48\u6027",
          "en": "Blanch Fresh Rice Noodles in Boiling Water",
          "ja": "\u71B1\u6E6F\u3067\u7C73\u82D4\u76EE\u3092\u30B5\u30C3\u3068\u8339\u3067\u3066\u30B3\u30B7\u3092\u6B8B\u3059",
          "ko": "\uB053\uB294 \uBB3C\uC5D0 \uC300\uAD6D\uC218 \uBA74\uC744 \uC0B4\uC9DD \uB370\uCCD0 \uCAC4\uAE43\uD568 \uC0B4\uB9AC\uAE30",
          "vi": "Ch\u1EA7n s\u1EE3i b\xE1nh l\u1ECDt trong n\u01B0\u1EDBc s\xF4i gi\u1EEF \u0111\u1ED9 dai tr\u01A1n b\xF3ng"
        },
        "instruction": {
          "zh-TW": "\u5927\u934B\u6C34\u71D2\u81F3\u5927\u6EFE\uFF0C\u6295\u5165\u65B0\u9BAE\u7C73\u82D4\u76EE\u3001\u8C46\u82BD\u83DC\u8207\u97ED\u83DC\u6BB5\u3002\u5927\u706B\u6C46\u71D9\u7D04 40~60 \u79D2\u81F3\u7C73\u82D4\u76EE\u5B8C\u5168\u900F\u4EAE\u6D6E\u8D77\uFF0C\u7ACB\u5373\u7528\u6488\u6753\u6488\u8D77\u3001\u5145\u5206\u701D\u4E7E\u6C34\u5206\u3002",
          "en": "Bring pot of water to rolling boil. Drop in fresh rice noodles, bean sprouts and chives. Blanch for 40-60 secs until translucent and floating, drain thoroughly.",
          "ja": "\u6CB8\u9A30\u3057\u305F\u6E6F\u306B\u751F\u7C73\u82D4\u76EE\u3001\u3082\u3084\u3057\u3001\u30CB\u30E9\u3092\u5165\u308C\u3001\u5F37\u706B\u306740\u301C60\u79D2\u8339\u3067\u3066\u30B6\u30EB\u306B\u4E0A\u3052\u3001\u6C34\u6C17\u3092\u3057\u3063\u304B\u308A\u5207\u308A\u307E\u3059\u3002",
          "ko": "\uB053\uB294 \uBB3C\uC5D0 \uBA74, \uC219\uC8FC, \uBD80\uCD94\uB97C \uB123\uACE0 40-60\uCD08\uAC04 \uC0B4\uC9DD \uB370\uCE5C \uD6C4 \uAC74\uC838 \uBB3C\uAE30\uB97C \uC644\uC804\uD788 \uBE8D\uB2C8\uB2E4.",
          "vi": "Cho s\u1EE3i b\xE1nh l\u1ECDt, gi\xE1 \u0111\u1ED7 v\xE0 h\u1EB9 v\xE0o n\u1ED3i n\u01B0\u1EDBc s\xF4i s\xF9ng s\u1EE5c ch\u1EA7n nhanh 40-60 gi\xE2y cho trong v\u1EDBt ra \u0111\u1EC3 r\xE1o n\u01B0\u1EDBc."
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-mee-tai-bak-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u88DD\u5165\u7897\u4E2D\u4E26\u6F86\u6DCB\u5927\u52FA\u6EFE\u71D9\u53E4\u65E9\u5473\u8089\u71E5",
          "en": "Place in Bowl & Ladle Piping-Hot Minced Pork Gravy",
          "ja": "\u5668\u306B\u76DB\u308A\u3001\u71B1\u3005\u306E\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u8089\u5473\u564C\u3092\u305F\u3063\u3077\u308A\u304B\u3051\u308B",
          "ko": "\uADF8\uB987\uC5D0 \uB2F4\uACE0 \uB728\uAC70\uC6B4 \uB3FC\uC9C0\uACE0\uAE30 \uC18C\uC2A4\uB97C \uB4EC\uBFCD \uBD93\uAE30",
          "vi": "Cho v\xE0o b\xE1t v\xE0 chan ng\u1EADp s\u1ED1t th\u1ECBt b\u0103m kho h\xE0nh phi n\xF3ng h\u1ED5i"
        },
        "instruction": {
          "zh-TW": "\u5C07\u71D9\u597D\u7684\u7C73\u82D4\u76EE\u8207\u9BAE\u8106\u8C46\u82BD\u97ED\u83DC\u76DB\u5165\u5927\u7897\u4E2D\u3002\u8D81\u71B1\u6F86\u4E0A 2 \u5927\u52FA\u71AC\u716E\u5F97\u6FC3\u90C1\u5674\u9999\u3001\u5E36\u6709\u8C6C\u6CB9\u8525\u9999\u7684\u53E4\u65E9\u5473\u8089\u71E5\u6EF7\u6C41\uFF0C\u6DCB\u4E0A\u534A\u5C0F\u5319\u5DE5\u7814\u70CF\u918B\u63D0\u9BAE\u3002",
          "en": "Transfer drained noodles and greens into a large serving bowl. Ladle 2 generous scoops of piping-hot shallot pork gravy over top with 1/2 tsp Taiwanese black vinegar.",
          "ja": "\u5668\u306B\u76DB\u308A\u4ED8\u3051\u3001\u8C5A\u306E\u8102\u3068\u30A8\u30B7\u30E3\u30ED\u30C3\u30C8\u306E\u65E8\u5473\u304C\u51DD\u7E2E\u3055\u308C\u305F\u71B1\u3005\u306E\u8089\u5473\u564C\u30C0\u30EC\u3092\u305F\u3063\u3077\u308A\u304B\u3051\u3001\u9ED2\u9162\u3092\u5C11\u3057\u5782\u3089\u3057\u307E\u3059\u3002",
          "ko": "\uADF8\uB987\uC5D0 \uB2F4\uACE0 \uAE4A\uC740 \uD48D\uBBF8\uC758 \uB728\uAC70\uC6B4 \uC0EC\uB86F \uACE0\uAE30\uC18C\uC2A4\uB97C 2\uD070\uC220 \uB4EC\uBFCD \uB07C\uC5B9\uC740 \uB4A4 \uD751\uC2DD\uCD08\uB97C \uC0B4\uC9DD \uB458\uB7EC\uC90D\uB2C8\uB2E4.",
          "vi": "Cho b\xE1nh l\u1ECDt v\xE0 rau v\xE0o b\xE1t, m\xFAc 2 mu\xF4i th\u1ECBt kho h\xE0nh phi n\xF3ng r\u1EF1c r\u01B0\u1EDBi l\xEAn tr\xEAn th\xEAm ch\xFAt gi\u1EA5m \u0111en th\u01A1m n\u1ED3ng."
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-mee-tai-bak-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u5927\u628A\u6492\u4E0A\u6975\u8584\u67F4\u9B5A\u7247\u3001\u770B\u71B1\u6C23\u4E2D\u7FE9\u7FE9\u8D77\u821E",
          "en": "Top with Handful of Dancing Bonito Flakes",
          "ja": "\u6975\u8584\u306E\u82B1\u9C39\u3092\u5C71\u76DB\u308A\u306B\u306E\u305B\u3001\u71B1\u6C17\u3067\u8E0A\u308B\u306E\u3092\u697D\u3057\u3080",
          "ko": "\uC587\uC740 \uAC00\uC4F0\uC624\uBD80\uC2DC\uB97C \uD55C \uC90C \uB4EC\uBFCD \uC5B9\uC5B4 \uCDA4\uCD94\uB294 \uBAA8\uC2B5 \uBCF4\uAE30",
          "vi": "R\u1EAFc \u0111\u1EA7y c\xE1 ng\u1EEB b\xE0o m\u1ECFng ng\u1EAFm nh\xECn t\u1EEBng l\xE1t c\xE1 nh\u1EA3y m\xFAa tr\xEAn l\xE0n kh\xF3i"
        },
        "instruction": {
          "zh-TW": "\u5728\u71B1\u6C23\u9A30\u9A30\u7684\u8089\u71E5\u4E0A\u65B9\uFF0C\u8C6A\u9081\u5730\u6492\u4E0A\u4E00\u5927\u628A\u6975\u7D30\u8584\u7684\u53F0\u6771\u6210\u529F\u67F4\u9B5A\u7247\u3002\u71B1\u6C23\u84B8\u9A30\u4E0A\u5347\u6642\uFF0C\u53EA\u898B\u7C89\u7D05\u8910\u8272\u7684\u67F4\u9B5A\u7247\u5728\u7897\u4E2D\u751F\u52D5\u5730\u7FFB\u6EFE\u7FE9\u7FE9\u8D77\u821E\uFF0C\u9999\u6C23\u56DB\u6EA2\uFF01",
          "en": "Heap a generous mound of paper-thin Taitung bonito flakes over the hot noodles. Watch the flakes dance and curl mesmerizingly in the rising steam!",
          "ja": "\u71B1\u3005\u306E\u8089\u5473\u564C\u306E\u4E0A\u306B\u3001\u53F0\u6771\u7279\u7523\u306E\u6975\u8584\u524A\u308A\u7BC0\u3092\u5C71\u76DB\u308A\u306B\u306E\u305B\u307E\u3059\u3002\u7ACB\u3061\u4E0A\u308B\u6E6F\u6C17\u3067\u9C39\u7BC0\u304C\u751F\u304D\u3066\u3044\u308B\u3088\u3046\u306B\u8E0A\u308A\u3001\u98DF\u6B32\u3092\u305D\u305D\u308B\u9999\u308A\u304C\u5E83\u304C\u308A\u307E\u3059\uFF01",
          "ko": "\uB728\uAC70\uC6B4 \uACE0\uAE30 \uC704\uC5D0 \uC587\uC740 \uAC00\uC4F0\uC624\uBD80\uC2DC\uB97C \uC218\uBD81\uD558\uAC8C \uC62C\uB9BD\uB2C8\uB2E4. \uBAA8\uB77D\uBAA8\uB77D \uD53C\uC5B4\uC624\uB974\uB294 \uAE40\uC5D0 \uAC00\uC4F0\uC624\uBD80\uC2DC\uAC00 \uCDA4\uC744 \uCD94\uBA70 \uACE0\uC18C\uD55C \uD5A5\uC744 \uD48D\uAE41\uB2C8\uB2E4!",
          "vi": "R\u1EAFc m\u1ED9t n\u1EAFm l\u1EDBn c\xE1 ng\u1EEB b\xE0o m\u1ECFng l\xEAn \u0111\u1EC9nh b\xE1t, h\u01A1i n\xF3ng b\u1ED1c l\xEAn khi\u1EBFn t\u1EEBng l\xE1t c\xE1 u\u1ED1n l\u01B0\u1EE3n nh\u1EA3y m\xFAa t\u1ECFa h\u01B0\u01A1ng th\u01A1m quy\u1EBFn r\u0169!"
        },
        "durationSeconds": 30,
        "image": "/images/taiwan-mee-tai-bak-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u52A0\u5165\u849C\u6CE5\u8FA3\u91AC\u62CC\u52FB\u3001\u5927\u53E3\u5438\u5165\u6975\u81F4\u6ED1\u6E9C\uFF01",
          "en": "Mix with Garlic & Chili, Slurp the Silky Goodness!",
          "ja": "\u304A\u308D\u3057\u30CB\u30F3\u30CB\u30AF\u3068\u7279\u88FD\u30C1\u30EA\u3092\u6DF7\u305C\u5408\u308F\u305B\u3001\u8C6A\u5FEB\u306B\u3059\u3059\u308B\uFF01",
          "ko": "\uB2E4\uC9C4 \uB9C8\uB298\uACFC \uACE0\uCD94\uC7A5\uC744 \uB123\uC5B4 \uBE44\uBCBC \uD638\uB85C\uB85D \uB9DB\uBCF4\uAE30!",
          "vi": "Tr\u1ED9n \u0111\u1EC1u c\xF9ng t\u1ECFi \u1EDBt b\u0103m v\xE0 x\xEC x\u1EE5p th\u01B0\u1EDFng th\u1EE9c s\u1EE3i m\xEC m\u1EC1m m\u01B0\u1EDBt!"
        },
        "instruction": {
          "zh-TW": "\u52A0\u5165\u534A\u8336\u5319\u65B0\u9BAE\u849C\u6CE5\u8207\u7279\u88FD\u8FA3\u6912\u91AC\u3002\u7528\u7B77\u5B50\u7531\u5E95\u5411\u4E0A\u5145\u5206\u652A\u62CC\uFF0C\u8B93\u6BCF\u6839\u7D14\u7C73\u7C73\u82D4\u76EE\u90FD\u88F9\u6EFF\u6CB9\u4EAE\u8089\u71E5\u3001\u9ECF\u9644\u8457\u878D\u5316\u7684\u67F4\u9B5A\u9999\u6C23\uFF0C\u5927\u53E3\u5438\u5165\uFF0C\u6ED1\u6E9C\u904E\u766E\uFF01",
          "en": "Add minced garlic and chili paste. Toss thoroughly from the bottom so every smooth noodle strand is glossy with pork sauce and clings with savory bonito umami!",
          "ja": "\u30CB\u30F3\u30CB\u30AF\u3068\u5510\u8F9B\u5B50\u30DA\u30FC\u30B9\u30C8\u3092\u52A0\u3048\u3001\u5E95\u304B\u3089\u3057\u3063\u304B\u308A\u6DF7\u305C\u5408\u308F\u305B\u307E\u3059\u3002\u7C73\u9EBA\u306E\u30C4\u30EB\u30C3\u3068\u3057\u305F\u5589\u8D8A\u3057\u3068\u9C39\u7BC0\u306E\u6DF1\u3044\u30B3\u30AF\u3092\u4E00\u6C17\u306B\u3059\u3059\u3063\u3066\u582A\u80FD\u3057\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uB9C8\uB298\uACFC \uB9E4\uCF64\uD55C \uC18C\uC2A4\uB97C \uB354\uD574 \uACE8\uACE0\uB8E8 \uBE44\uBCBC\uC90D\uB2C8\uB2E4. \uBC25\uC54C\uCC98\uB7FC \uB9E4\uB044\uB7EC\uC6B4 \uC300\uBA74\uACFC \uC9C4\uD55C \uAC00\uC4F0\uC624\uBD80\uC2DC \uACE0\uAE30 \uC591\uB150\uC774 \uC5B4\uC6B0\uB7EC\uC838 \uC785\uC548 \uAC00\uB4DD \uAC10\uB3D9\uC744 \uC90D\uB2C8\uB2E4!",
          "vi": "Th\xEAm t\u1ECFi \u1EDBt b\u0103m tr\u1ED9n \u0111\u1EC1u t\u1EEB \u0111\xE1y b\xE1t cho t\u1EEBng s\u1EE3i b\xE1nh l\u1ECDt th\u1EA5m \u0111\u1EABm s\u1ED1t th\u1ECBt v\xE0 v\u1EE5n c\xE1 ng\u1EEB th\u01A1m l\u1EEBng h\xFAp tr\u1ECDn t\u1EEBng s\u1EE3i tr\u01A1n tu\u1ED9t tuy\u1EC7t \u0111\u1EC9nh!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-mee-tai-bak-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "noodles-mushy",
        "problem": {
          "zh-TW": "\u7C73\u82D4\u76EE\u6C46\u71D9\u5F8C\u7CCA\u6210\u4E00\u5718\u6216\u65B7\u788E\uFF1F",
          "en": "Why are my rice noodles breaking into mushy bits?",
          "ja": "\u7C73\u82D4\u76EE\u304C\u5207\u308C\u305F\u308A\u30D9\u30C1\u30E3\u30D9\u30C1\u30E3\u306B\u5D29\u308C\u3066\u3057\u307E\u3046\uFF1F",
          "ko": "\uBA74\uC774 \uB69D\uB69D \uB04A\uC5B4\uC9C0\uAC70\uB098 \uC8FD\uCC98\uB7FC \uD37C\uC9C0\uB098\uC694?",
          "vi": "S\u1EE3i b\xE1nh l\u1ECDt b\u1ECB nh\u0169n n\xE1t \u0111\u1EE9t v\u1EE5n?"
        },
        "cause": {
          "zh-TW": "\u6C34\u6EAB\u4E0D\u5920\u6EFE\u5C31\u4E0B\u934B\uFF0C\u6216\u71D9\u716E\u6642\u9593\u904E\u9577\u3002",
          "en": "Water wasn't at a rolling boil, or overcooked.",
          "ja": "\u304A\u6E6F\u306E\u6CB8\u9A30\u304C\u4E0D\u5341\u5206\u3060\u3063\u305F\u304B\u3001\u8339\u3067\u3059\u304E\u304C\u539F\u56E0\u3067\u3059\u3002",
          "ko": "\uBB3C\uC774 \uCDA9\uBD84\uD788 \uB053\uC9C0 \uC54A\uC558\uAC70\uB098 \uB108\uBB34 \uC624\uB798 \uC0B6\uC558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "N\u01B0\u1EDBc ch\u01B0a s\xF4i b\xF9ng \u0111\xE3 th\u1EA3 v\xE0o ho\u1EB7c lu\u1ED9c qu\xE1 l\xE2u."
        },
        "solution": {
          "zh-TW": "\u6C34\u5FC5\u9808\u5927\u6EFE\u624D\u80FD\u4E0B\u934B\uFF0C\u71D9 40~60 \u79D2\u4E00\u6D6E\u8D77\u7ACB\u523B\u6488\u51FA\u701D\u4E7E\uFF01",
          "en": "Must plunge into rolling boil, blanch for only 40-60 secs until floating and drain immediately!",
          "ja": "\u3057\u3063\u304B\u308A\u6CB8\u9A30\u3057\u305F\u6E6F\u306740\u301C60\u79D2\u30B5\u30C3\u3068\u8339\u3067\u3001\u6D6E\u3044\u305F\u3089\u3059\u3050\u6E6F\u5207\u308A\u3057\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uBB3C\uC774 \uD314\uD314 \uB053\uC744 \uB54C \uB123\uACE0 40-60\uCD08\uB9CC \uAC00\uBCCD\uAC8C \uB370\uCCD0 \uBC14\uB85C \uAC74\uC838\uB0B4\uC138\uC694!",
          "vi": "N\u01B0\u1EDBc ph\u1EA3i s\xF4i s\xF9ng s\u1EE5c m\u1EDBi th\u1EA3 v\xE0o, ch\u1EA7n 40-60 gi\xE2y th\u1EA5y n\u1ED5i l\xE0 v\u1EDBt ra r\xE1o n\u01B0\u1EDBc ngay!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u6B63\u5B97\u53F0\u6771\u8001\u9955\u5403\u6CD5\uFF1A\u4E7E\u62CC\u5403\u5B8C\u7559\u4E0B\u4E00\u9EDE\u67F4\u9B5A\u8089\u71E5\u5E95\uFF0C\u518D\u8DDF\u8001\u95C6\u8A0E\u4E00\u7897\u71B1\u9A30\u9A30\u7684\u5927\u9AA8\u5927\u8178\u6E6F\u6C96\u5165\u7897\u4E2D\u559D\u500B\u7CBE\u5149\uFF01",
        "en": "Taitung tradition: finish the dry noodles, then pour hot bone broth into the leftover savory bowl!",
        "ja": "\u98DF\u3079\u7D42\u308F\u3063\u305F\u5F8C\u306E\u4E3C\u306B\u71B1\u3044\u8C5A\u9AA8\u30B9\u30FC\u30D7\u3092\u6CE8\u3044\u3067\u98F2\u307F\u5E72\u3059\u306E\u304C\u672C\u5834\u53F0\u6771\u306E\u30C4\u30A6\u306E\u6D41\u5100\uFF01",
        "ko": "\uBE44\uBE54\uBA74\uC744 \uB2E4 \uBA39\uACE0 \uB0A8\uC740 \uC591\uB150\uC5D0 \uB530\uB73B\uD55C \uC0AC\uACE8 \uC721\uC218\uB97C \uBD80\uC5B4 \uB9C8\uC2DC\uB294 \uAC83\uC774 \uB85C\uCEEC\uB4E4\uC758 \uBE44\uBC95!",
        "vi": "C\xE1ch \u0103n s\xE0nh \u0111i\u1EC7u: \u0103n h\u1EBFt m\xEC kh\xF4 ch\xE2m th\xEAm n\u01B0\u1EDBc d\xF9ng x\u01B0\u01A1ng h\u1EA7m n\xF3ng h\u1ED5i v\xE0o b\xE1t h\xFAp s\u1EA1ch!"
      }
    ]
  },
  {
    "id": "pot-burn-e-noodle",
    "slug": "pot-burn-e-noodle",
    "title": {
      "zh-TW": "\u53F0\u5357\u5E9C\u57CE\u7D93\u5178\u934B\u71D2\u610F\u9EB5",
      "en": "Tainan Pot-Burn E-Noodles (Nabeyaki Seafood Soup)",
      "ja": "\u53F0\u5357\u540D\u7269 \u934B\u713C\u304D\u63DA\u3052\u305F\u307E\u3054\u9EBA\uFF08\u934B\u713C\u610F\u9EBA\uFF09",
      "ko": "\uB300\uB9CC \uD0C0\uC774\uB09C \uC804\uD1B5 \uB69D\uBC30\uAE30 \uD280\uAE40 \uC5D0\uADF8\uB204\uB4E4 (\uAD88\uC0E4\uC624 \uC774\uBBF8\uC5D4)",
      "vi": "M\xEC tr\u1EE9ng chi\xEAn th\u1ED1 nh\xF4m h\u1EA3i s\u1EA3n \u0110\xE0i Nam (Quoa Shao Yi Mien)"
    },
    "subtitle": {
      "zh-TW": "\u91D1\u9EC3\u70B8\u5168\u86CB\u610F\u9EB5\u30FB\u9BAE\u751C\u67F4\u9B5A\u9AD8\u6E6F\u30FB\u70B8\u8766\u5929\u5A66\u7F85\u30FB\u6C34\u6CE2\u534A\u719F\u86CB\u30FB\u5FA9\u53E4\u4E95\u5B57\u6728\u67B6",
      "en": "Deep-Fried Egg Noodles, Sweet Bonito Dashi, Tempura Shrimp, Poached Egg & Wooden Lattice Stand",
      "ja": "\u30B5\u30AF\u30B5\u30AF\u63DA\u3052\u5375\u9EBA\u30FB\u7518\u307F\u306E\u3042\u308B\u9C39\u51FA\u6C41\u30FB\u30A8\u30D3\u5929\u3077\u3089\u30FB\u534A\u719F\u5375\u30FB\u30EC\u30C8\u30ED\u306A\u4E95\u6841\u6728\u53F0\u306E\u5C0F\u934B",
      "ko": "\uBC14\uC0AD\uD558\uAC8C \uD280\uAE34 \uACC4\uB780\uBA74, \uB2EC\uD070\uD55C \uAC00\uC4F0\uC624\uBD80\uC2DC \uC721\uC218, \uC0C8\uC6B0\uD280\uAE40, \uBC18\uC219\uB780, \uBCF5\uACE0\uD48D \uB098\uBB34 \uBC1B\uCE68 \uC54C\uB8E8\uBBF8\uB284 \uB0C4\uBE44",
      "vi": "M\xEC tr\u1EE9ng chi\xEAn gi\xF2n, n\u01B0\u1EDBc d\xF9ng c\xE1 ng\u1EEB ng\u1ECDt thanh, t\xF4m chi\xEAn x\xF9, tr\u1EE9ng l\xF2ng \u0111\xE0o trong n\u1ED3i nh\xF4m \u0111\u1EBF g\u1ED7"
    },
    "tagline": {
      "zh-TW": "\u53F0\u5357\u65E9\u9910\u5230\u5BB5\u591C\u7684\u9748\u9B42\u7F8E\u98DF\uFF01\u5438\u98FD\u9BAE\u7F8E\u67F4\u9B5A\u9AD8\u6E6F\u7684\u6F8E\u9B06\u6CB9\u70B8\u610F\u9EB5",
      "en": "The iconic comfort bowl of Tainan: crispy fried noodles soaking up sweet seafood broth",
      "ja": "\u53F0\u5357\u4EBA\u304C\u671D\u98DF\u304B\u3089\u591C\u98DF\u307E\u3067\u611B\u3057\u3066\u3084\u307E\u306A\u3044\u540D\u7269\uFF01\u30B9\u30FC\u30D7\u3092\u5438\u3063\u305F\u63DA\u3052\u9EBA\u306E\u72EC\u7279\u306A\u98DF\u611F\u304C\u305F\u307E\u3089\u306A\u3044",
      "ko": "\uD0C0\uC774\uB09C \uC0AC\uB78C\uB4E4\uC758 \uC544\uCE68\uBD80\uD130 \uC57C\uC2DD\uAE4C\uC9C0 \uCC45\uC784\uC9C0\uB294 \uC18C\uC6B8\uD478\uB4DC! \uAC10\uCE60\uB9DB \uC721\uC218\uB97C \uB4EC\uBFCD \uBA38\uAE08\uC740 \uD280\uAE40\uBA74",
      "vi": "M\xF3n m\xEC qu\u1ED1c d\xE2n \u0110\xE0i Nam t\u1EEB s\xE1ng s\u1EDBm \u0111\u1EBFn \u0111\xEAm khuya v\u1EDBi s\u1EE3i m\xEC tr\u1EE9ng n\u1EDF ph\u1ED3ng ng\u1EADm tr\u1ECDn tinh t\xFAy bi\u1EC3n c\u1EA3"
    },
    "heroImage": "/images/taiwan-pot-burn-noodle-hero.jpg",
    "difficulty": "easy",
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 12,
    "defaultServings": 2,
    "caloriesPerServing": 520,
    "category": "soups",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5357\u5E02\u4E2D\u897F\u5340 / \u570B\u83EF\u8857",
        "en": "Tainan Guohua Street",
        "ja": "\u53F0\u5357\u5E02\u56FD\u83EF\u8857",
        "ko": "\uD0C0\uC774\uB09C \uAD88\uD654\uC81C",
        "vi": "Ph\u1ED1 Guohua \u0110\xE0i Nam"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u53F0\u5357\u82B1\u5712\u591C\u5E02",
          "en": "Tainan Flower Night Market",
          "ja": "\u82B1\u5712\u591C\u5E02",
          "ko": "\uD0C0\uC774\uB09C \uD654\uC704\uC548 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Hoa Vi\xEAn \u0110\xE0i Nam"
        },
        {
          "zh-TW": "\u570B\u83EF\u8857\u7F8E\u98DF\u8857",
          "en": "Guohua Street Food Court",
          "ja": "\u56FD\u83EF\u8857",
          "ko": "\uAD88\uD654\uC81C \uBA39\uC790\uACE8\uBAA9",
          "vi": "Ph\u1ED1 \u1EA9m th\u1EF1c Guohua"
        }
      ],
      "historyStory": {
        "zh-TW": "\u65E5\u6CBB\u6642\u671F\u53F0\u5357\u5C07\u65E5\u5F0F\u934B\u71D2\u70CF\u9F8D\u9EB5\uFF08Nabeyaki Udon\uFF09\u5728\u5730\u5316\u6539\u826F\uFF0C\u63DB\u4E0A\u798F\u5DDE\u50B3\u5165\u7684\u5168\u86CB\u6CB9\u70B8\u300E\u610F\u9EB5\u300F\u3002\u9EB5\u689D\u7D93\u6CB9\u70B8\u5F8C\u5F62\u6210\u7121\u6578\u5FAE\u5C0F\u5B54\u9699\uFF0C\u653E\u5165\u5FA9\u53E4\u5C0F\u92C1\u934B\u4E2D\u5438\u98FD\u6E05\u751C\u67F4\u9B5A\u5927\u9AA8\u6E6F\uFF0C\u642D\u914D\u70B8\u8766\u3001\u86E4\u870A\u3001\u534A\u719F\u86CB\u8207\u9B5A\u677F\uFF0C\u6210\u70BA\u5168\u53F0\u7063\u6700\u8457\u540D\u7684\u9EB5\u98DF\u4E4B\u4E00\u3002",
        "en": "Adapted during the Japanese era from Nabeyaki Udon into a uniquely Taiwanese dish using deep-fried egg noodles that rapidly drink up sweet bonito broth.",
        "ja": "\u65E5\u672C\u306E\u300E\u934B\u713C\u304D\u3046\u3069\u3093\u300F\u304C\u53F0\u5357\u3067\u6CB9\u63DA\u3052\u305F\u307E\u3054\u9EBA\u3068\u878D\u5408\u3057\u3066\u9032\u5316\u3057\u305F\u6599\u7406\u3002\u30EC\u30C8\u30ED\u306A\u4E95\u6841\u4ED8\u304D\u306E\u30A2\u30EB\u30DF\u5C0F\u934B\u3067\u716E\u8FBC\u3080\u53F0\u5357\u306E\u5B9A\u756A\u30B0\u30EB\u30E1\u3002",
        "ko": "\uC77C\uC81C\uAC15\uC810\uAE30 \uB098\uBCA0\uC57C\uD0A4 \uC6B0\uB3D9\uC774 \uD0C0\uC774\uB09C\uC5D0\uC11C \uD280\uAE34 \uACC4\uB780\uBA74\uACFC \uACB0\uD569\uD558\uC5EC \uBC1C\uC804\uD55C \uC694\uB9AC\uB85C, \uB2EC\uCC29\uC9C0\uADFC\uD55C \uD574\uBB3C \uC721\uC218\uC640 \uD280\uAE40\uC758 \uC870\uD654\uAC00 \uD658\uC0C1\uC801\uC785\uB2C8\uB2E4.",
        "vi": "Bi\u1EBFn t\u1EA5u t\u1EEB m\xF3n m\xEC Nabeyaki Nh\u1EADt B\u1EA3n k\u1EBFt h\u1EE3p m\xEC tr\u1EE9ng chi\xEAn gi\xF2n Ph\xFAc Ki\u1EBFn, n\u1EA5u trong n\u1ED3i nh\xF4m nh\u1ECF \u0111\u1EB7t tr\xEAn \u0111\u1EBF g\u1ED7 ch\u1EEF T\u1EC9nh truy\u1EC1n th\u1ED1ng."
      },
      "taiwaneseHokkien": "Ue-sio-\xEC-m\u012B (\u3128\u311F \u3112\u3127\u311C \u3127\u02C7 \u3107\u3127\u02C7)",
      "mandarinPinyin": "Gu\u014Dsh\u0101o Y\xECmi\xE0n (\u310D\u3128\u311B \u3115\u3120 \u3127\u02CB \u3107\u3127\u3122\u02CB)",
      "audioPronunciationText": "\u934B\u71D2\u610F\u9EB5\u4E00\u7897\uFF0C\u86CB\u8981\u534A\u719F\uFF0C\u52A0\u4E00\u4EFD\u70B8\u8766"
    },
    "ingredients": [
      {
        "id": "fried-egg-noodles",
        "name": {
          "zh-TW": "\u53F0\u5357\u53E4\u6CD5\u624B\u5DE5\u6CB9\u70B8\u5168\u86CB\u610F\u9EB5",
          "en": "Tainan Traditional Deep-Fried Egg Noodles (E-Noodles)",
          "ja": "\u53F0\u5357\u4F1D\u7D71 \u63DA\u3052\u305F\u307E\u3054\u610F\u9EBA",
          "ko": "\uD0C0\uC774\uB09C \uC804\uD1B5 \uD280\uAE40 \uACC4\uB780 \uC774\uBBF8\uC5D4",
          "vi": "M\xEC tr\u1EE9ng chi\xEAn gi\xF2n \u0110\xE0i Nam"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 noodle nests",
        "isKeyFlavor": true,
        "chineseName": "\u6CB9\u70B8\u610F\u9EB5",
        "chinesePinyin": "Y\xF3uzh\xE1 y\xECmi\xE0n"
      },
      {
        "id": "bonito-dashi-broth",
        "name": {
          "zh-TW": "\u53F0\u5357\u6E05\u751C\u67F4\u9B5A\u5927\u9AA8\u6606\u5E03\u9AD8\u6E6F",
          "en": "Tainan Sweet Bonito & Pork Bone Broth",
          "ja": "\u53F0\u5357\u98A8 \u7518\u53E3\u9C39\u6606\u5E03\u8C5A\u9AA8\u51FA\u6C41",
          "ko": "\uB2EC\uD070\uD55C \uAC00\uC4F0\uC624\uBD80\uC2DC \uC0AC\uACE8 \uC721\uC218",
          "vi": "N\u01B0\u1EDBc d\xF9ng c\xE1 ng\u1EEB x\u01B0\u01A1ng h\u1EA7m ng\u1ECDt thanh"
        },
        "amount": 800,
        "unitMetric": "ml",
        "unitUS": "3.5 cups",
        "isKeyFlavor": true,
        "chineseName": "\u67F4\u9B5A\u5927\u9AA8\u9AD8\u6E6F",
        "chinesePinyin": "Ch\xE1iy\xFA g\u0101ot\u0101ng"
      },
      {
        "id": "seafood-toppings",
        "name": {
          "zh-TW": "\u53F0\u5F0F\u88F9\u7C89\u70B8\u8766\u5929\u5A66\u7F85\u3001\u9BAE\u86E4\u870A\u3001\u8C6C\u8089\u7247\u3001\u9B5A\u677F\u7247",
          "en": "Tempura Shrimp, Fresh Clams, Sliced Pork, Fish Cakes",
          "ja": "\u30A8\u30D3\u5929\u3077\u3089\u3001\u751F\u30A2\u30B5\u30EA\u3001\u8C5A\u8089\u30B9\u30E9\u30A4\u30B9\u3001\u304B\u307E\u307C\u3053",
          "ko": "\uC0C8\uC6B0\uD280\uAE40, \uC2E0\uC120\uD55C \uBC14\uC9C0\uB77D, \uB3FC\uC9C0\uACE0\uAE30, \uC5B4\uBB35",
          "vi": "T\xF4m t\u1EA9m b\u1ED9t chi\xEAn, ngh\xEAu t\u01B0\u01A1i, th\u1ECBt heo, ch\u1EA3 c\xE1 xo\u1EAFn"
        },
        "amount": 200,
        "unitMetric": "g",
        "unitUS": "7 oz",
        "isKeyFlavor": true,
        "chineseName": "\u70B8\u8766\u86E4\u870A\u8089\u7247\u9B5A\u677F",
        "chinesePinyin": "Zh\xE0xi\u0101 g\xE9l\xED"
      },
      {
        "id": "egg-greens",
        "name": {
          "zh-TW": "\u65B0\u9BAE\u96DE\u86CB (\u716E\u534A\u719F\u6C34\u6CE2\u86CB)\u3001\u5C0F\u767D\u83DC\u3001\u8525\u82B1\u3001\u6C99\u8336\u91AC",
          "en": "Fresh Eggs (for Poached Egg), Baby Greens, Scallions & Shacha Paste",
          "ja": "\u751F\u5375\uFF08\u534A\u719F\u6C34\u6CE2\u86CB\u7528\uFF09\u3001\u9752\u83DC\u3001\u30CD\u30AE\u3001\u30B5\u30FC\u30C1\u30E3\u30FC\u30B8\u30E3\u30F3",
          "ko": "\uC2E0\uC120\uD55C \uACC4\uB780 (\uBC18\uC219 \uC218\uB780), \uCCAD\uACBD\uCC44, \uD30C, \uC0AC\uCC28\uC7A5",
          "vi": "Tr\u1EE9ng g\xE0 t\u01B0\u01A1i (ch\u1EA7n l\xF2ng \u0111\xE0o), c\u1EA3i ng\u1ECDt, h\xE0nh hoa, s\u1ED1t Sa Tr\xE0"
        },
        "amount": 100,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "chineseName": "\u96DE\u86CB\u9752\u83DC\u6C99\u8336",
        "chinesePinyin": "J\u012Bd\xE0n sh\u0101ch\xE1"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u5C0F\u92C1\u934B\u716E\u6EFE\u6E05\u751C\u67F4\u9B5A\u9AD8\u6E6F\u8207\u6D77\u9BAE\u8089\u7247",
          "en": "Boil Bonito Broth with Seafood & Pork in Small Pot",
          "ja": "\u30A2\u30EB\u30DF\u5C0F\u934B\u3067\u9C39\u51FA\u6C41\u3092\u6CB8\u304B\u3057\u3001\u30A2\u30B5\u30EA\u3068\u8089\u3092\u716E\u308B",
          "ko": "\uC54C\uB8E8\uBBF8\uB284 \uB0C4\uBE44\uC5D0 \uC721\uC218\uB97C \uB053\uC774\uACE0 \uD574\uBB3C\uACFC \uACE0\uAE30 \uC775\uD788\uAE30",
          "vi": "\u0110un s\xF4i n\u01B0\u1EDBc d\xF9ng c\xE1 ng\u1EEB trong n\u1ED3i nh\xF4m c\xF9ng ngh\xEAu v\xE0 th\u1ECBt"
        },
        "instruction": {
          "zh-TW": "\u5C07\u7279\u88FD\u5C0F\u92C1\u934B\u653E\u5728\u7210\u4E0A\uFF0C\u5012\u5165 400ml \u67F4\u9B5A\u5927\u9AA8\u9AD8\u6E6F\u5927\u706B\u716E\u6CB8\u3002\u653E\u5165\u86E4\u870A\u3001\u8C6C\u8089\u7247\u3001\u9B5A\u677F\u8207\u5C0F\u767D\u83DC\uFF0C\u716E\u81F3\u86E4\u870A\u6BBC\u81EA\u7136\u5F35\u958B\u91CB\u653E\u9BAE\u5473\u3002",
          "en": "Place small aluminum pot on stove, pour in 400ml sweet bonito broth and bring to boil. Add clams, pork slices, fish cakes and greens until clams open.",
          "ja": "\u30A2\u30EB\u30DF\u5C0F\u934B\u306B\u9C39\u51FA\u6C41400ml\u3092\u5165\u308C\u3066\u6CB8\u9A30\u3055\u305B\u3001\u30A2\u30B5\u30EA\u3001\u8C5A\u8089\u3001\u304B\u307E\u307C\u3053\u3001\u9752\u83DC\u3092\u5165\u308C\u3066\u30A2\u30B5\u30EA\u306E\u53E3\u304C\u958B\u304F\u307E\u3067\u716E\u307E\u3059\u3002",
          "ko": "\uC54C\uB8E8\uBBF8\uB284 \uB0C4\uBE44\uC5D0 \uC721\uC218 400ml\uB97C \uBD93\uACE0 \uB053\uC73C\uBA74 \uBC14\uC9C0\uB77D, \uB3FC\uC9C0\uACE0\uAE30, \uC5B4\uBB35, \uC57C\uCC44\uB97C \uB123\uC5B4 \uC870\uAC1C\uAC00 \uC785\uC744 \uC5F4 \uB54C\uAE4C\uC9C0 \uB053\uC785\uB2C8\uB2E4.",
          "vi": "\u0110\u1EB7t n\u1ED3i nh\xF4m l\xEAn b\u1EBFp, \u0111\u1ED5 400ml n\u01B0\u1EDBc d\xF9ng \u0111un s\xF4i. Th\u1EA3 ngh\xEAu, th\u1ECBt heo, ch\u1EA3 c\xE1 v\xE0 rau v\xE0o n\u1EA5u cho ngh\xEAu m\u1EDF mi\u1EC7ng ng\u1ECDt n\u01B0\u1EDBc."
        },
        "durationSeconds": 180,
        "image": "/images/taiwan-pot-burn-noodle-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u6253\u5165\u65B0\u9BAE\u5168\u86CB\u5FAE\u706B\u51DD\u7D50\u6210\u6C34\u6CE2\u534A\u719F\u86CB",
          "en": "Crack in Fresh Egg to Form Soft Poached Center",
          "ja": "\u751F\u5375\u3092\u843D\u3068\u3057\u3001\u5F31\u706B\u3067\u3068\u308D\u3068\u308D\u534A\u719F\u306B\u4ED5\u4E0A\u3052\u308B",
          "ko": "\uC0DD\uACC4\uB780\uC744 \uB123\uACE0 \uC57D\uBD88\uC5D0\uC11C \uBC18\uC219 \uC218\uB780\uC73C\uB85C \uC775\uD788\uAE30",
          "vi": "\u0110\u1EADp tr\u1EE9ng g\xE0 v\xE0o n\u1EA5u nh\u1ECF l\u1EEDa t\u1EA1o l\xF2ng \u0111\xE0o b\xE9o ng\u1EADy"
        },
        "instruction": {
          "zh-TW": "\u5728\u6EFE\u6E6F\u7A7A\u9699\u8655\u6253\u5165\u4E00\u9846\u65B0\u9BAE\u5168\u86CB\uFF0C\u8F49\u4E2D\u5C0F\u706B\u4E0D\u8981\u652A\u52D5\uFF0C\u8B93\u86CB\u767D\u6162\u6162\u51DD\u56FA\u5305\u8986\u4F4F\u6D41\u5FC3\u86CB\u9EC3\uFF0C\u716E\u7D04 1.5 \u5206\u9418\u6210\u5B8C\u7F8E\u7684\u6C34\u6CE2\u534A\u719F\u86CB\u3002",
          "en": "Crack an egg gently into bubbling broth. Keep heat on medium-low without stirring, allowing whites to envelop the rich runny yolk for 1.5 mins.",
          "ja": "\u5375\u3092\u305D\u3063\u3068\u5272\u308A\u5165\u308C\u3001\u304B\u304D\u6DF7\u305C\u305A\u306B\u5F31\u706B\u30671.5\u5206\u52A0\u71B1\u3057\u3001\u9EC4\u8EAB\u3092\u3068\u308D\u3068\u308D\u306E\u534A\u719F\u306B\u4ED5\u4E0A\u3052\u307E\u3059\u3002",
          "ko": "\uACC4\uB780\uC744 \uAE68\uB728\uB824 \uB123\uACE0 \uC813\uC9C0 \uC54A\uC740 \uCC44 1.5\uBD84\uAC04 \uC775\uD600 \uB178\uB978\uC790\uAC00 \uC8FC\uB974\uB975 \uD750\uB974\uB294 \uBC18\uC219\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "\u0110\u1EADp qu\u1EA3 tr\u1EE9ng g\xE0 v\xE0o gi\u1EEFa n\u1ED3i, h\u1EA1 nh\u1ECF l\u1EEDa kh\xF4ng khu\u1EA5y \u0111\u1EC3 l\xF2ng tr\u1EAFng \xF4m tr\u1ECDn l\xF2ng \u0111\u1ECF d\u1EBBo qu\xE1nh trong 1.5 ph\xFAt."
        },
        "durationSeconds": 90,
        "image": "/images/taiwan-pot-burn-noodle-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u653E\u5165\u6CB9\u70B8\u5168\u86CB\u610F\u9EB5\u5438\u6536\u7CBE\u83EF\u6E6F\u6C41",
          "en": "Add Deep-Fried E-Noodles to Absorb Flavor",
          "ja": "\u63DA\u3052\u305F\u307E\u3054\u610F\u9EBA\u3092\u5165\u308C\u3001\u30B9\u30FC\u30D7\u3092\u30B5\u30C3\u3068\u5438\u308F\u305B\u308B",
          "ko": "\uD280\uAE40 \uC774\uBBF8\uC5D4\uC744 \uB123\uACE0 \uC721\uC218\uAC00 \uC2A4\uBA70\uB4E4\uB3C4\uB85D \uC775\uD788\uAE30",
          "vi": "Th\u1EA3 m\xEC tr\u1EE9ng chi\xEAn v\xE0o cho h\xFAt \u0111\u1EABm n\u01B0\u1EDBc s\xFAp ng\u1ECDt l\xE0nh"
        },
        "instruction": {
          "zh-TW": "\u5C07\u4E00\u5718\u91D1\u9EC3\u9165\u8106\u7684\u70B8\u610F\u9EB5\u653E\u5165\u934B\u4E2D\uFF0C\u7528\u7B77\u5B50\u8F15\u8F15\u58D3\u5165\u6E6F\u6C41\u4E2D\u3002\u53EA\u9700\u716E 30~45 \u79D2\uFF08\u5207\u52FF\u4E45\u716E\uFF09\uFF0C\u8B93\u9EB5\u689D\u5916\u5C64\u5438\u98FD\u9AD8\u6E6F\u8B8A\u8EDF\u3001\u5167\u82AF\u4ECD\u4FDD\u7559\u5FAE\u5FAE\u9165\u9999\u5F48\u6027\uFF01",
          "en": "Place crispy e-noodle nest into pot, gently press into broth with chopsticks. Cook for ONLY 30-45 secs so outer strands soften while core retains bite!",
          "ja": "\u63DA\u3052\u610F\u9EBA\u3092\u934B\u306B\u5165\u308C\u3001\u7BB8\u3067\u8EFD\u304F\u30B9\u30FC\u30D7\u306B\u6C88\u3081\u307E\u3059\u300230\u301C45\u79D2\u3060\u3051\u30B5\u30C3\u3068\u716E\u3066\u3001\u9EBA\u306E\u82AF\u306E\u30B3\u30B7\u3092\u6B8B\u3057\u307E\u3059\uFF01",
          "ko": "\uD280\uAE34 \uBA74\uC744 \uB123\uACE0 \uC813\uAC00\uB77D\uC73C\uB85C \uC0B4\uC9DD \uB20C\uB7EC 30-45\uCD08\uB9CC \uB053\uC785\uB2C8\uB2E4. \uAC89\uC740 \uBD80\uB4DC\uB7FD\uACE0 \uC18D\uC740 \uAF2C\uB4E4\uAF2C\uB4E4\uD558\uAC8C \uC644\uC131!",
          "vi": "Th\u1EA3 v\u1EAFt m\xEC tr\u1EE9ng chi\xEAn v\xE0o d\xF9ng \u0111\u0169a \u1EA5n nh\u1EB9 ng\u1EADp n\u01B0\u1EDBc s\xFAp, ch\u1EC9 n\u1EA5u 30-45 gi\xE2y cho m\xEC m\u1EC1m m\u01B0\u1EE3t m\xE0 v\u1EABn gi\u1EEF \u0111\u1ED9 dai s\u1EA7n s\u1EADt!"
        },
        "durationSeconds": 45,
        "image": "/images/taiwan-pot-burn-noodle-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u64FA\u4E0A\u70B8\u8766\u3001\u79FB\u5165\u4E95\u5B57\u6728\u67B6\u4E0A\u684C\uFF01",
          "en": "Top with Tempura Shrimp, Place in Wooden Stand & Serve!",
          "ja": "\u30A8\u30D3\u5929\u3077\u3089\u3092\u306E\u305B\u3001\u4E95\u6841\u6728\u53F0\u306B\u30BB\u30C3\u30C8\u3057\u3066\u71B1\u3005\u3092\u4F9B\u3059\u308B\uFF01",
          "ko": "\uC0C8\uC6B0\uD280\uAE40\uC744 \uC5B9\uACE0 \uB098\uBB34 \uBC1B\uCE68\uB300\uC5D0 \uC62C\uB824 \uB728\uAC81\uAC8C \uC11C\uBE59\uD558\uAE30!",
          "vi": "B\xE0y t\xF4m chi\xEAn x\xF9 l\xEAn tr\xEAn, \u0111\u1EB7t n\u1ED3i v\xE0o \u0111\u1EBF g\u1ED7 ch\u1EEF T\u1EC9nh th\u01B0\u1EDFng th\u1EE9c ngay!"
        },
        "instruction": {
          "zh-TW": "\u95DC\u706B\uFF0C\u5728\u9EB5\u689D\u9802\u90E8\u64FA\u4E0A\u4E00\u96BB\u91D1\u9EC3\u9165\u9999\u7684\u53F0\u5F0F\u70B8\u8766\u5929\u5A66\u7F85\uFF0C\u6492\u4E0A\u7FE0\u7DA0\u8525\u82B1\u8207\u4E00\u5C0F\u5319\u725B\u982D\u724C\u6C99\u8336\u91AC\u3002\u5C07\u6EFE\u71D9\u7684\u5C0F\u92C1\u934B\u7AEF\u5165\u5C08\u5C6C\u4E95\u5B57\u6728\u67B6\u4E2D\uFF0C\u8D81\u71B1\u5927\u53E3\u5438\u9EB5\u559D\u6E6F\uFF0C\u534A\u719F\u86CB\u9EC3\u6233\u7834\u62CC\u5165\u9EB5\u4E2D\u66F4\u662F\u795E\u7D1A\u4EAB\u53D7\uFF01",
          "en": "Turn off heat, crown with crispy tempura shrimp, scallions and a dab of Shacha paste. Set hot aluminum pot into wooden '#'-frame stand and serve bubbling hot. Break the runny egg yolk into broth for pure bliss!",
          "ja": "\u706B\u3092\u6B62\u3081\u3001\u30A8\u30D3\u5929\u3077\u3089\u3001\u523B\u307F\u30CD\u30AE\u3001\u6C99\u8336\u91A4\u3092\u30C8\u30C3\u30D4\u30F3\u30B0\u3002\u71B1\u3005\u306E\u5C0F\u934B\u3092\u4E95\u6841\u306E\u6728\u67A0\u306B\u306F\u3081\u8FBC\u3093\u3067\u71B1\u3005\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u534A\u719F\u5375\u3092\u5D29\u3057\u3066\u7D61\u3081\u306A\u304C\u3089\u3069\u3046\u305E\uFF01",
          "ko": "\uBD88\uC744 \uB044\uACE0 \uBC14\uC0AD\uD55C \uC0C8\uC6B0\uD280\uAE40, \uD30C, \uC0AC\uCC28\uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uB728\uAC70\uC6B4 \uC54C\uB8E8\uBBF8\uB284 \uB0C4\uBE44\uB97C \uB098\uBB34 \uD2C0\uC5D0 \uB07C\uC6CC \uC0C1\uC5D0 \uB0C5\uB2C8\uB2E4. \uBC18\uC219 \uB178\uB978\uC790\uB97C \uD1A1 \uD130\uB728\uB824 \uBA74\uACFC \uD568\uAED8 \uB4DC\uC138\uC694!",
          "vi": "T\u1EAFt b\u1EBFp, \u0111\u1EB7t con t\xF4m chi\xEAn x\xF9 v\xE0ng r\u1EE5m l\xEAn tr\xEAn, r\u1EAFc h\xE0nh hoa v\xE0 th\xECa s\u1ED1t Sa Tr\xE0. \u0110\u1EB7t n\u1ED3i v\xE0o \u0111\u1EBF g\u1ED7 ch\u1EEF T\u1EC9nh, ch\u1ECDc v\u1EE1 l\xF2ng \u0111\xE0o tr\u1ED9n \u0111\u1EC1u c\xF9ng s\u1EE3i m\xEC h\xFAp x\xEC x\u1EE5p!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-pot-burn-noodle-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "noodles-overcooked",
        "problem": {
          "zh-TW": "\u610F\u9EB5\u716E\u592A\u4E45\u8EDF\u721B\u6210\u6CE5\u7CCA\u6389\u4E86\uFF1F",
          "en": "Why are my E-noodles completely soggy & mushy?",
          "ja": "\u610F\u9EBA\u304C\u4F38\u3073\u3066\u30C9\u30ED\u30C9\u30ED\u306B\u306A\u3063\u3066\u3057\u307E\u3063\u305F\uFF1F",
          "ko": "\uC774\uBBF8\uC5D4\uC774 \uB108\uBB34 \uBD88\uC5B4\uC11C \uD479 \uD37C\uC84C\uB098\uC694?",
          "vi": "M\xEC tr\u1EE9ng b\u1ECB n\u1EA5u qu\xE1 tay nh\u0169n n\xE1t m\u1EA5t \u0111\u1ED9 ngon?"
        },
        "cause": {
          "zh-TW": "\u70B8\u610F\u9EB5\u6C23\u5B54\u6975\u591A\u5438\u6C34\u6975\u5FEB\uFF0C\u716E\u8D85\u904E 1 \u5206\u9418\u5C31\u6703\u904E\u721B\u3002",
          "en": "Fried noodles are porous and absorb liquid in seconds; overcooked past 1 min.",
          "ja": "\u6CB9\u63DA\u3052\u9EBA\u306F\u5438\u6C34\u6027\u304C\u9AD8\u3044\u305F\u3081\u30011\u5206\u4EE5\u4E0A\u716E\u8FBC\u3080\u3068\u4F38\u3073\u3066\u3057\u307E\u3044\u307E\u3059\u3002",
          "ko": "\uD280\uAE40\uBA74\uC758 \uBBF8\uC138\uD55C \uAD6C\uBA4D\uC774 \uAD6D\uBB3C\uC744 \uBE60\uB974\uAC8C \uD761\uC218\uD558\uBBC0\uB85C 1\uBD84 \uC774\uC0C1 \uB053\uC774\uBA74 \uD37C\uC9D1\uB2C8\uB2E4.",
          "vi": "M\xEC tr\u1EE9ng chi\xEAn x\u1ED1p h\xFAt n\u01B0\u1EDBc c\u1EF1c nhanh, n\u1EA5u qu\xE1 1 ph\xFAt s\u1EBD b\u1ECB n\xE1t."
        },
        "solution": {
          "zh-TW": "\u6240\u6709\u6D77\u9BAE\u6599\u716E\u719F\u5F8C\u518D\u4E0B\u610F\u9EB5\uFF0C\u6D78\u5165\u6E6F\u4E2D\u716E 30 \u79D2\u5373\u53EF\u7184\u706B\u8D77\u934B\uFF01",
          "en": "Add noodles ONLY after toppings are fully cooked, simmer for 30s and turn off heat immediately!",
          "ja": "\u5177\u6750\u304C\u716E\u3048\u3066\u304B\u3089\u6700\u5F8C\u306B\u9EBA\u3092\u5165\u308C\u300130\u79D2\u3067\u706B\u3092\u6B62\u3081\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uBAA8\uB4E0 \uC7AC\uB8CC\uAC00 \uB2E4 \uC775\uC740 \uD6C4 \uB9C8\uC9C0\uB9C9\uC5D0 \uBA74\uC744 \uB123\uACE0 30\uCD08\uB9CC \uB053\uC778 \uB4A4 \uBD88\uC744 \uB044\uC138\uC694!",
          "vi": "Ch\u1EC9 cho m\xEC v\xE0o sau khi m\u1ECDi nguy\xEAn li\u1EC7u \u0111\xE3 ch\xEDn, \u0111un \u0111\xFAng 30 gi\xE2y l\xE0 t\u1EAFt b\u1EBFp ngay!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u5403\u934B\u71D2\u610F\u9EB5\u7684\u9748\u9B42\u5100\u5F0F\uFF1A\u5148\u5403\u4E00\u689D\u5438\u98FD\u67F4\u9B5A\u6E6F\u7684\u5FAE\u8106\u610F\u9EB5\uFF0C\u63A5\u8457\u7528\u7B77\u5B50\u8F15\u8F15\u6233\u7834\u6C34\u6CE2\u86CB\uFF0C\u8B93\u91D1\u9EC3\u86CB\u9EC3\u6D41\u6DCC\u5728\u9EB5\u689D\u8207\u9AD8\u6E6F\u4E2D\u652A\u62CC\uFF0C\u6E6F\u982D\u77AC\u9593\u63D0\u5347\u81F3\u7D72\u6ED1\u6FC3\u9187\u7684\u5883\u754C\uFF01",
        "en": "The sacred ritual: poke the poached yolk to swirl rich golden velvet into the sweet seafood broth!",
        "ja": "\u534A\u719F\u5375\u306E\u9EC4\u8EAB\u3092\u3068\u308D\u308A\u3068\u5D29\u3057\u3001\u51FA\u6C41\u3068\u7D61\u3081\u306A\u304C\u3089\u3059\u3059\u308B\u306E\u304C\u53F0\u5357\u6D41\u306E\u6700\u9AD8\u306E\u98DF\u3079\u65B9\u3067\u3059\uFF01",
        "ko": "\uBC18\uC219 \uB178\uB978\uC790\uB97C \uD1A1 \uD130\uB728\uB824 \uC721\uC218\uC5D0 \uBD80\uB4DC\uB7FD\uAC8C \uD480\uACE0 \uBA74\uC744 \uC801\uC154 \uBA39\uB294 \uAC83\uC774 \uD0C0\uC774\uB09C\uC758 \uC815\uC11D!",
        "vi": "Tuy\u1EC7t k\u1EF9 th\u01B0\u1EDFng th\u1EE9c: ch\u1ECDc v\u1EE1 l\xF2ng \u0111\xE0o cho h\xF2a quy\u1EC7n v\xE0o n\u01B0\u1EDBc d\xF9ng c\xE1 ng\u1EEB t\u1EA1o n\xEAn \u0111\u1ED9 b\xE9o ng\u1EADy ng\u1ECDt l\u1ECBm tan ch\u1EA3y!"
      }
    ]
  },
  {
    "id": "taiwan-braised-dishes",
    "slug": "taiwan-braised-dishes",
    "title": {
      "zh-TW": "\u53F0\u7063\u591C\u5E02\u71B1\u71D9\u52A0\u71B1\u6EF7\u5473",
      "en": "Taiwanese Hot Braised Delicacies (Lu Wei Assortment)",
      "ja": "\u53F0\u6E7E\u591C\u5E02\u540D\u7269 \u71B1\u3005\u52A0\u71B1\u30EB\u30FC\u30A6\u30A7\u30A4\uFF08\u6EF7\u5473\u76DB\u308A\u5408\u308F\u305B\uFF09",
      "ko": "\uB300\uB9CC \uC57C\uC2DC\uC7A5 \uC989\uC11D \uC5F4\uD0D5 \uB8E8\uC6E8\uC774 (\uD55C\uBC29 \uD2B9\uC81C \uC870\uB9BC \uBAA8\uB460)",
      "vi": "Ph\xE1 l\u1EA5u h\u1EA7m n\xF3ng ch\u1EE3 \u0111\xEAm \u0110\xE0i Loan (Lu Wei)"
    },
    "subtitle": {
      "zh-TW": "\u6578\u5341\u7A2E\u98DF\u6750\u81EA\u9078\u30FB\u4E2D\u85E5\u8001\u6EF7\u6EFE\u71D9\u73FE\u716E\u30FB\u723D\u8106\u9178\u83DC\u30FB\u8525\u82B1\u8FA3\u6CB9\u30FB\u9748\u9B42\u738B\u5B50\u9EB5",
      "en": "Custom Picked Delicacies, Boiling Herbal Master Stock, Pickled Mustard Greens & Prince Noodles",
      "ja": "\u9078\u3079\u308B\u5177\u6750\u30FB\u6F22\u65B9\u79D8\u4F1D\u30B9\u30FC\u30D7\u3067\u71B1\u3005\u30DC\u30A4\u30EB\u30FB\u7279\u88FD\u9AD8\u83DC\u30FB\u30CD\u30AE\u30FB\u8FA3\u6CB9\u30FB\u540D\u7269\u738B\u5B50\u9EBA",
      "ko": "\uACE8\uB77C \uB2F4\uB294 \uC7AC\uBBF8, \uD55C\uBC29 \uBE44\uBC95 \uC721\uC218\uC5D0 \uC989\uC11D\uC5D0\uC11C \uB370\uCCD0\uB0B8 \uBAA8\uB460 \uC870\uB9BC, \uAC13\uC808\uC784, \uD30C, \uC655\uC790\uB77C\uBA74",
      "vi": "T\u1EF1 ch\u1ECDn nguy\xEAn li\u1EC7u, tr\u1EE5ng s\xF4i trong n\u01B0\u1EDBc l\u1EA9u th\u1EA3o m\u1ED9c gia truy\u1EC1n, d\u01B0a chua, h\xE0nh hoa v\xE0 m\xEC Ho\xE0ng T\u1EED"
    },
    "tagline": {
      "zh-TW": "\u5E2B\u5927\u591C\u5E02\u8207\u5404\u5927\u5927\u5B78\u5546\u5708\u7684\u5BB5\u591C\u9738\u4E3B\uFF01\u6EFF\u6EFF\u4E00\u6EFF\u5927\u7AF9\u7C0D\u4EFB\u4F60\u6311\u9078\u73FE\u6EF7",
      "en": "The undisputed midnight feast champion: grab a basket, pile high with goodies, boiled fresh!",
      "ja": "\u5E2B\u5927\u591C\u5E02\u3092\u306F\u3058\u3081\u5168\u571F\u3067\u611B\u3055\u308C\u308B\u591C\u98DF\u306E\u738B\u69D8\uFF01\u30AB\u30B4\u3044\u3063\u3071\u3044\u306B\u9078\u3093\u3060\u5177\u6750\u3092\u79D8\u4F1D\u30C0\u30EC\u3067\u71B1\u3005\u306B\u716E\u8FBC\u3080",
      "ko": "\uB300\uB9CC \uB300\uD559\uAC00\uC640 \uC57C\uC2DC\uC7A5\uC758 \uC808\uB300 \uC57C\uC2DD \uAC15\uC790! \uBC14\uAD6C\uB2C8\uC5D0 \uBA39\uACE0 \uC2F6\uC740 \uC7AC\uB8CC\uB97C \uACE8\uB77C \uB2F4\uC544 \uC989\uC11D\uC5D0\uC11C \uB053\uC5EC\uB0B4\uB294 \uB9DB",
      "vi": "Vua \u0103n \u0111\xEAm c\xE1c khu ch\u1EE3 sinh vi\xEAn: t\u1EF1 tay g\u1EAFp \u0111\u1EA7y r\u1ED5 th\u1EE9c \u0103n r\u1ED3i tr\u1EE5ng n\xF3ng h\u1ED5i \u0111\u1EADm \u0111\xE0"
    },
    "heroImage": "/images/taiwan-lu-wei-hero.jpg",
    "difficulty": "medium",
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 30,
    "defaultServings": 3,
    "caloriesPerServing": 480,
    "category": "mains",
    "dietaryTags": [
      "classic"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u53F0\u5317\u5E2B\u5927\u591C\u5E02\uFF08\u71C8\u7C60\u6EF7\u5473\uFF09/ \u5168\u53F0\u7063\u591C\u5E02",
        "en": "Taipei Shida Night Market (Lantern Lu Wei)",
        "ja": "\u53F0\u5317\u5E2B\u5927\u591C\u5E02\uFF08\u71C8\u7C60\u6EF7\u5473\uFF09",
        "ko": "\uD0C0\uC774\uBCA0\uC774 \uC2A4\uB2E4 \uC57C\uC2DC\uC7A5 (\uB4F1\uB871 \uB8E8\uC6E8\uC774)",
        "vi": "Ch\u1EE3 \u0111\xEAm Shida \u0110\xE0i B\u1EAFc (\u0110\xE8n L\u1ED3ng Ph\xE1 L\u1EA5u)"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u5E2B\u5927\u591C\u5E02\uFF08\u71C8\u7C60\u6EF7\u5473 / \u5927\u53F0\u5317\u6EF7\u5473\uFF09",
          "en": "Shida Night Market",
          "ja": "\u5E2B\u5927\u591C\u5E02",
          "ko": "\uC2A4\uB2E4 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Shida"
        },
        {
          "zh-TW": "\u9022\u7532\u591C\u5E02",
          "en": "Fengjia Night Market",
          "ja": "\u9022\u7532\u591C\u5E02",
          "ko": "\uD391\uC790 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Fengjia"
        }
      ],
      "historyStory": {
        "zh-TW": "\u6E90\u81EA\u6F6E\u6C55\u6EF7\u5473\uFF0C\u5728\u53F0\u5317\u5E2B\u5927\u591C\u5E02\u7B49\u5B78\u5340\u6F14\u8B8A\u6210\u7368\u7279\u300E\u52A0\u71B1\u6EF7\u5473\u300F\u5F62\u5F0F\u3002\u5BA2\u4EBA\u62FF\u8457\u7D05\u8272\u5851\u81A0\u7C43\u593E\u53D6\u5FC3\u5100\u98DF\u6750\uFF08\u82B1\u5E72\u3001\u8C46\u5E72\u3001\u751C\u4E0D\u8FA3\u3001\u9D28\u8840\u3001\u5927\u8178\u3001\u9AD8\u9E97\u83DC\u3001\u738B\u5B50\u9EB5\uFF09\uFF0C\u8001\u95C6\u4E1F\u5165\u5927\u934B\u6EFE\u6CB8\u7684\u4E2D\u85E5\u8001\u6EF7\u6C41\u4E2D\u71D9\u716E\uFF0C\u5207\u76E4\u6492\u4E0A\u5927\u91CF\u7279\u88FD\u7092\u9178\u83DC\u8207\u9752\u8525\u8FA3\u6CB9\u3002",
        "en": "A vibrant Taiwanese street food ritual where customers fill baskets with tofu puffs, meats, veggies and Prince instant noodles, flash-cooked in bubbling Chinese herbal master stock.",
        "ja": "\u5BA2\u304C\u30AB\u30B4\u306B\u597D\u307F\u306E\u5177\u6750\uFF08\u6E6F\u8449\u3001\u539A\u63DA\u3052\u3001\u7DF4\u308A\u7269\u3001\u9D28\u8840\u3001\u91CE\u83DC\u3001\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u9EBA\uFF09\u3092\u9078\u3073\u3001\u79D8\u4F1D\u306E\u6F22\u65B9\u91A4\u6CB9\u51FA\u6C41\u3067\u30B0\u30C4\u30B0\u30C4\u716E\u8FBC\u3093\u3067\u9178\u83DC\u3068\u30CD\u30AE\u3092\u6DFB\u3048\u3066\u63D0\u4F9B\u3059\u308B\u30B9\u30BF\u30A4\u30EB\u3002",
        "ko": "\uBC14\uAD6C\uB2C8\uC5D0 \uC720\uBD80, \uB450\uBD80, \uC5B4\uBB35, \uC57C\uCC44, \uB77C\uBA74 \uB4F1\uC744 \uC9C1\uC811 \uACE8\uB77C \uB2F4\uC73C\uBA74 \uD55C\uBC29 \uD2B9\uC81C \uAC04\uC7A5 \uC721\uC218\uC5D0 \uC989\uC11D\uC5D0\uC11C \uB370\uCCD0 \uAC13\uC808\uC784\uACFC \uD30C\uB97C \uC5B9\uC5B4 \uB0B4\uB294 \uB300\uB9CC \uCD5C\uACE0\uC758 \uAE38\uAC70\uB9AC \uC57C\uC2DD\uC785\uB2C8\uB2E4.",
        "vi": "Kh\xE1ch t\u1EF1 ch\u1ECDn c\xE1c lo\u1EA1i \u0111\u1EADu h\u0169, ch\u1EA3 c\xE1, l\xF2ng heo, rau b\u1EAFp c\u1EA3i v\xE0 m\xEC g\xF3i v\xE0o gi\u1ECF, \u0111\u1EA7u b\u1EBFp th\u1EA3 v\xE0o n\u1ED3i n\u01B0\u1EDBc d\xF9ng th\u1EA3o m\u1ED9c s\xF4i s\u1EE5c tr\u1EE5ng ch\xEDn c\u1EAFt \u0111\u0129a r\u1EAFc d\u01B0a chua h\xE0nh hoa."
      },
      "taiwaneseHokkien": "L\xF3o-b\u012B (\u310C\u311B\u02CB \u3105\u3127\u02C7)",
      "mandarinPinyin": "Ji\u0101r\xE8 L\u01D4w\xE8i (\u3110\u3127\u311A \u3116\u311C\u02CB \u310C\u3128\u02C7 \u3128\u311F\u02CB)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u7C43\u5B50\u593E\u597D\u4E86\uFF0C\u8981\u52A0\u4E00\u5305\u738B\u5B50\u9EB5\u3001\u5C0F\u8FA3\u3001\u9178\u83DC\u591A\u4E00\u9EDE"
    },
    "ingredients": [
      {
        "id": "luwei-ingredients-mix",
        "name": {
          "zh-TW": "\u591C\u5E02\u7D93\u5178\u6EF7\u5473\u98DF\u6750 (\u5927\u6EAA\u8C46\u5E72\u3001\u82B1\u5E72\u3001\u751C\u4E0D\u8FA3\u3001\u7C73\u8840\u7CD5\u3001\u8CA2\u4E38\u3001\u9AD8\u9E97\u83DC)",
          "en": "Classic Lu Wei Mix (Tofu Puffs, Dried Bean Curd, Fish Cakes, Blood Cake, Meatballs, Cabbage)",
          "ja": "\u591C\u5E02\u5B9A\u756A\u5177\u6750\uFF08\u539A\u63DA\u3052\u3001\u62BC\u3057\u8C46\u8150\u3001\u3055\u3064\u307E\u63DA\u3052\u3001\u7C73\u8840\u7CD5\u3001\u30AD\u30E3\u30D9\u30C4\u7B49\uFF09",
          "ko": "\uB8E8\uC6E8\uC774 \uBAA8\uB460 \uC7AC\uB8CC (\uC720\uBD80, \uB450\uBD80, \uC5B4\uBB35, \uCC39\uC300\uB5A1, \uACE0\uAE30\uC644\uC790, \uC591\uBC30\uCD94)",
          "vi": "H\u1ED7n h\u1EE3p nguy\xEAn li\u1EC7u (\u0110\u1EADu h\u0169 hoa, \u0111\u1EADu h\u0169 kh\xF4, ch\u1EA3 c\xE1, huy\u1EBFt n\u1EBFp, b\u1EAFp c\u1EA3i)"
        },
        "amount": 400,
        "unitMetric": "g",
        "unitUS": "14 oz",
        "isKeyFlavor": true,
        "chineseName": "\u8C46\u5E72\u82B1\u5E72\u751C\u4E0D\u8FA3\u7C73\u8840",
        "chinesePinyin": "D\xF2ug\u0101n hu\u0101g\u0101n"
      },
      {
        "id": "prince-instant-noodles",
        "name": {
          "zh-TW": "\u53F0\u7063\u7D93\u5178\u6EF7\u5473\u5C08\u7528\u738B\u5B50\u9EB5",
          "en": "Taiwan Prince Instant Noodles (for Lu Wei)",
          "ja": "\u53F0\u6E7E\u540D\u7269 \u738B\u5B50\u9EBA\uFF08\u716E\u8FBC\u307F\u5C02\u7528\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u9EBA\uFF09",
          "ko": "\uB300\uB9CC \uC804\uD1B5 \uB8E8\uC6E8\uC774 \uC804\uC6A9 \uC655\uC790\uB77C\uBA74 (\uD504\uB9B0\uC2A4 \uB204\uB4E4)",
          "vi": "M\xEC \u0103n li\u1EC1n Ho\xE0ng T\u1EED chuy\xEAn d\xF9ng n\u1EA5u ph\xE1 l\u1EA5u"
        },
        "amount": 2,
        "unitMetric": "piece",
        "unitUS": "2 packs",
        "isKeyFlavor": true,
        "chineseName": "\u6EF7\u5473\u738B\u5B50\u9EB5",
        "chinesePinyin": "W\xE1ngz\u01D0 mi\xE0n"
      },
      {
        "id": "chinese-herbal-master-stock",
        "name": {
          "zh-TW": "\u4E2D\u85E5\u8001\u6EF7\u6C41 (\u516B\u89D2+\u82B1\u6912+\u6842\u76AE+\u8349\u679C+\u7518\u8349+\u51B0\u7CD6+\u91AC\u6CB9)",
          "en": "Chinese Herbal Master Braising Stock",
          "ja": "\u79D8\u4F1D\u6F22\u65B9\u716E\u8FBC\u307F\u91A4\u6CB9\u30B9\u30FC\u30D7\uFF08\u516B\u89D2\u30FB\u82B1\u6912\u30FB\u6842\u76AE\u30FB\u7518\u8349\u7B49\uFF09",
          "ko": "\uD55C\uBC29 \uD2B9\uC81C \uAC04\uC7A5 \uC721\uC218 (\uD314\uAC01, \uD654\uC870, \uACC4\uD53C, \uAC10\uCD08, \uC5BC\uC74C\uC124\uD0D5)",
          "vi": "N\u01B0\u1EDBc c\u1ED1t l\u1EA9u th\u1EA3o m\u1ED9c ng\u0169 v\u1ECB (Hoa h\u1ED3i, qu\u1EBF, th\u1EA3o qu\u1EA3, cam th\u1EA3o)"
        },
        "amount": 1200,
        "unitMetric": "ml",
        "unitUS": "5 cups",
        "isKeyFlavor": true,
        "chineseName": "\u4E2D\u85E5\u8001\u6EF7\u6C41",
        "chinesePinyin": "L\u01D4zh\u012B"
      },
      {
        "id": "taiwan-suancai-scallion",
        "name": {
          "zh-TW": "\u7092\u9178\u83DC\u3001\u65B0\u9BAE\u8525\u82B1\u3001\u849C\u6CE5\u3001\u9999\u6CB9\u3001\u751F\u8FA3\u6912\u6CB9",
          "en": "Taiwanese Saut\xE9ed Pickled Greens, Scallions, Garlic Paste & Chili Oil",
          "ja": "\u7092\u3081\u9AD8\u83DC\uFF08\u9178\u83DC\uFF09\u3001\u523B\u307F\u30CD\u30AE\u3001\u304A\u308D\u3057\u30CB\u30F3\u30CB\u30AF\u3001\u3054\u307E\u6CB9\u3001\u7279\u88FD\u8FA3\u6CB9",
          "ko": "\uBCF6\uC740 \uAC13\uC808\uC784 (\uC464\uC548\uCC28\uC774), \uC1A1\uC1A1 \uC36C \uD30C, \uB2E4\uC9C4 \uB9C8\uB298, \uCC38\uAE30\uB984, \uACE0\uCD94\uAE30\uB984",
          "vi": "D\u01B0a c\u1EA3i chua x\xE0o th\u01A1m, h\xE0nh hoa t\u01B0\u01A1i, t\u1ECFi b\u0103m, d\u1EA7u m\xE8 v\xE0 sa t\u1EBF"
        },
        "amount": 100,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "chineseName": "\u7092\u9178\u83DC\u8525\u82B1\u8FA3\u6CB9",
        "chinesePinyin": "Su\u0101nc\xE0i c\u014Dnghu\u0101"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u6162\u706B\u71AC\u88FD\u6FC3\u90C1\u98C4\u9999\u4E2D\u85E5\u8001\u6EF7\u9AD8\u6E6F",
          "en": "Simmer Aromatic Chinese Herbal Master Stock",
          "ja": "\u6F22\u65B9\u30B9\u30D1\u30A4\u30B9\u3068\u91A4\u6CB9\u3067\u79D8\u4F1D\u306E\u9999\u308A\u9AD8\u3044\u6EF7\u6C41\u3092\u716E\u51FA\u3059",
          "ko": "\uD55C\uBC29 \uC57D\uC7AC\uC640 \uAC04\uC7A5\uC73C\uB85C \uAE4A\uACE0 \uC9C4\uD55C \uB8E8\uC6E8\uC774 \uC721\uC218 \uB053\uC774\uAE30",
          "vi": "Ninh n\u01B0\u1EDBc l\u1EA9u th\u1EA3o m\u1ED9c v\u1EDBi hoa h\u1ED3i qu\u1EBF th\u1EA3o qu\u1EA3 \u0111\u1EADm \u0111\xE0 th\u01A1m ng\xE1t"
        },
        "instruction": {
          "zh-TW": "\u5927\u934B\u4E2D\u52A0\u5165\u516B\u89D2\u3001\u8349\u679C\u3001\u6842\u76AE\u3001\u82B1\u6912\u3001\u7518\u8349\u3001\u9752\u8525\u3001\u8591\u7247\u8207\u849C\u982D\u3002\u6CE8\u5165 1500ml \u9AD8\u6E6F\uFF0C\u52A0\u5165\u512A\u8CEA\u91AC\u6CB9\u3001\u51B0\u7CD6\u3001\u7C73\u9152\u6162\u706B\u71AC\u716E 20 \u5206\u9418\u81F3\u9999\u6C23\u56DB\u6EA2\u3002",
          "en": "Boil 1500ml stock with star anise, cinnamon, sichuan pepper, licorice, scallions, ginger and garlic. Add soy sauce, rock sugar and rice wine; simmer for 20 mins into fragrant master stock.",
          "ja": "\u934B\u306B\u516B\u89D2\u3001\u6842\u76AE\u3001\u82B1\u6912\u3001\u7518\u8349\u3001\u30CD\u30AE\u3001\u751F\u59DC\u3001\u30CB\u30F3\u30CB\u30AF\u3001\u91A4\u6CB9\u3001\u6C37\u7802\u7CD6\u3001\u9152\u3092\u5165\u308C\u3001\u5F31\u706B\u306720\u5206\u716E\u51FA\u3057\u3066\u98A8\u5473\u8C4A\u304B\u306A\u6EF7\u6C41\u3092\u4F5C\u308A\u307E\u3059\u3002",
          "ko": "\uB0C4\uBE44\uC5D0 \uD314\uAC01, \uACC4\uD53C, \uAC10\uCD08, \uD30C, \uC0DD\uAC15, \uB9C8\uB298\uACFC \uC721\uC218 1.5L, \uAC04\uC7A5, \uC5BC\uC74C\uC124\uD0D5\uC744 \uB123\uACE0 20\uBD84\uAC04 \uB053\uC5EC \uAE4A\uC740 \uD5A5\uC758 \uBE44\uBC95 \uC721\uC218\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "Cho hoa h\u1ED3i, qu\u1EBF, th\u1EA3o qu\u1EA3, h\xE0nh g\u1EEBng t\u1ECFi v\xE0o n\u1ED3i \u0111un c\xF9ng 1.5L n\u01B0\u1EDBc d\xF9ng, n\u01B0\u1EDBc t\u01B0\u01A1ng, \u0111\u01B0\u1EDDng ph\xE8n 20 ph\xFAt cho d\u1EADy m\xF9i th\u01A1m n\u1EE9c m\u0169i."
        },
        "durationSeconds": 1200,
        "image": "/images/taiwan-lu-wei-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u81EA\u9078\u98DF\u6750\u5165\u6EFE\u6CB8\u6EF7\u6C41\u5927\u706B\u71D9\u716E\u5165\u5473",
          "en": "Boil Custom Ingredients in Bubbling Master Stock",
          "ja": "\u9078\u3093\u3060\u5177\u6750\u3092\u716E\u7ACB\u3064\u6EF7\u6C41\u306B\u5165\u308C\u3001\u3057\u3063\u304B\u308A\u5473\u3092\u67D3\u307F\u8FBC\u307E\u305B\u308B",
          "ko": "\uACE8\uB77C \uB2F4\uC740 \uC7AC\uB8CC\uB4E4\uC744 \uB053\uB294 \uD55C\uBC29 \uC721\uC218\uC5D0 \uB123\uACE0 \uB370\uCE58\uAE30",
          "vi": "Th\u1EA3 c\xE1c lo\u1EA1i nguy\xEAn li\u1EC7u \u0111\xE3 ch\u1ECDn v\xE0o n\u1ED3i n\u01B0\u1EDBc d\xF9ng s\xF4i s\xF9ng s\u1EE5c tr\u1EE5ng ch\xEDn"
        },
        "instruction": {
          "zh-TW": "\u5C07\u5207\u584A\u7684\u8C46\u5E72\u3001\u82B1\u5E72\u3001\u751C\u4E0D\u8FA3\u3001\u7C73\u8840\u7CD5\u3001\u9D28\u8840\u3001\u8CA2\u4E38\u7B49\u8010\u716E\u98DF\u6750\u653E\u5165\u6EFE\u6CB8\u7684\u6EF7\u6C41\u7DB2\u6753\u4E2D\uFF0C\u4E2D\u5927\u706B\u71D9\u716E 3~5 \u5206\u9418\uFF0C\u8B93\u591A\u5B54\u7684\u82B1\u5E72\u8207\u8C46\u5E72\u5438\u98FD\u6FC3\u90C1\u6EF7\u6C41\u3002",
          "en": "Drop tofu puffs, dried bean curd, fish cakes, blood rice cake and meatballs into boiling master stock. Simmer for 3-5 mins so porous tofu puffs drink in flavorful stock.",
          "ja": "\u539A\u63DA\u3052\u3001\u8C46\u8150\u3001\u30C6\u30F3\u30D7\u30E9\u3001\u7C73\u8840\u7CD5\u3001\u3064\u307F\u308C\u7B49\u3092\u6CB8\u9A30\u3057\u305F\u6EF7\u6C41\u306B\u5165\u308C\u3001\u5F37\u706B\u30673\u301C5\u5206\u716E\u3066\u51FA\u6C41\u3092\u3057\u3063\u304B\u308A\u5438\u308F\u305B\u307E\u3059\u3002",
          "ko": "\uB450\uBD80, \uC720\uBD80, \uC5B4\uBB35, \uCC39\uC300\uB5A1, \uC644\uC790 \uB4F1\uC744 \uB053\uB294 \uC721\uC218\uC5D0 \uB123\uACE0 3-5\uBD84\uAC04 \uB053\uC5EC \uC18D\uAE4C\uC9C0 \uC591\uB150\uC774 \uAE4A\uAC8C \uBC30\uC5B4\uB4E4\uAC8C \uD569\uB2C8\uB2E4.",
          "vi": "Th\u1EA3 \u0111\u1EADu h\u0169, ch\u1EA3 c\xE1, huy\u1EBFt n\u1EBFp, vi\xEAn th\u1ECBt v\xE0o v\u1EE3t nh\xFAng trong n\u01B0\u1EDBc l\u1EA9u s\xF4i 3-5 ph\xFAt cho ng\u1EA5m \u0111\u1EABm v\u1ECB \u0111\u1EADm \u0111\xE0."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-lu-wei-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u4E0B\u9AD8\u9E97\u83DC\u8207\u9748\u9B42\u738B\u5B50\u9EB5\u5FEB\u716E\u6488\u8D77",
          "en": "Quick-Boil Crisp Cabbage & Prince Instant Noodles",
          "ja": "\u30AD\u30E3\u30D9\u30C4\u3068\u540D\u7269\u738B\u5B50\u9EBA\u3092\u30B5\u30C3\u3068\u8339\u3067\u3066\u30A2\u30EB\u30C7\u30F3\u30C6\u306B\u4ED5\u4E0A\u3052\u308B",
          "ko": "\uC591\uBC30\uCD94\uC640 \uC655\uC790\uB77C\uBA74\uC744 \uB123\uACE0 \uAF2C\uB4E4\uAF2C\uB4E4\uD558\uAC8C \uBE60\uB974\uAC8C \uB053\uC5EC\uB0B4\uAE30",
          "vi": "Th\u1EA3 b\u1EAFp c\u1EA3i gi\xF2n v\xE0 m\xEC Ho\xE0ng T\u1EED v\xE0o tr\u1EE5ng nhanh v\u1EEBa ch\xEDn t\u1EDBi"
        },
        "instruction": {
          "zh-TW": "\u6700\u5F8C\u653E\u5165\u6495\u5927\u7247\u7684\u9AD8\u9E97\u83DC\u8207\u62C6\u5C01\u7684\u738B\u5B50\u9EB5\u3002\u5927\u706B\u6EFE\u716E 1.5~2 \u5206\u9418\uFF08\u738B\u5B50\u9EB5\u4FDD\u6301\u5FAE\u6372\u5F48\u7259\u52FF\u716E\u904E\u721B\uFF09\uFF0C\u9023\u540C\u6240\u6709\u98DF\u6750\u4E00\u8D77\u7528\u6FFE\u7DB2\u6488\u51FA\u701D\u4E7E\u3002",
          "en": "Add fresh cabbage and Prince instant noodles. Boil on high for 1.5-2 mins (keep noodles al dente). Scoop everything out with strainer basket and drain well.",
          "ja": "\u6700\u5F8C\u306B\u30AD\u30E3\u30D9\u30C4\u3068\u738B\u5B50\u9EBA\u3092\u5165\u308C\u3001\u5F37\u706B\u30671.5\u301C2\u5206\u30B5\u30C3\u3068\u716E\u3066\u9EBA\u306E\u30B3\u30B7\u3092\u6B8B\u3057\u305F\u72B6\u614B\u3067\u7D20\u65E9\u304F\u30B6\u30EB\u306B\u4E0A\u3052\u307E\u3059\u3002",
          "ko": "\uB9C8\uC9C0\uB9C9\uC5D0 \uC591\uBC30\uCD94\uC640 \uC655\uC790\uB77C\uBA74\uC744 \uB123\uACE0 1.5-2\uBD84\uAC04 \uC13C \uBD88\uC5D0 \uB053\uC5EC \uBA74\uC774 \uAF2C\uB4E4\uD560 \uB54C \uBAA8\uB4E0 \uC7AC\uB8CC\uB97C \uAC74\uC838 \uBB3C\uAE30\uB97C \uBE8D\uB2C8\uB2E4.",
          "vi": "Cho b\u1EAFp c\u1EA3i v\xE0 m\xEC Ho\xE0ng T\u1EED v\xE0o \u0111un l\u1EEDa l\u1EDBn 1.5-2 ph\xFAt cho m\xEC v\u1EEBa ch\xEDn t\u1EDBi dai ngon, v\u1EDBt to\xE0n b\u1ED9 ra r\xE1o n\u01B0\u1EDBc."
        },
        "durationSeconds": 120,
        "image": "/images/taiwan-lu-wei-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u5207\u76E4\u6DCB\u6EF7\u6C41\u3001\u6492\u6EFF\u7206\u9999\u7092\u9178\u83DC\u8207\u8525\u82B1\u8FA3\u6CB9\uFF01",
          "en": "Slice onto Platter, Ladle Sauce, Heap Pickled Greens & Scallions",
          "ja": "\u98DF\u3079\u3084\u3059\u304F\u5207\u308A\u76BF\u306B\u76DB\u308A\u3001\u7279\u88FD\u7092\u3081\u9AD8\u83DC\u3068\u30CD\u30AE\u30FB\u8FA3\u6CB9\u3092\u5C71\u76DB\u308A\u306B\uFF01",
          "ko": "\uBA39\uAE30 \uC88B\uAC8C \uC370\uC5B4 \uC811\uC2DC\uC5D0 \uB2F4\uACE0 \uBCF6\uC740 \uAC13\uC808\uC784\uACFC \uD30C, \uACE0\uCD94\uAE30\uB984 \uB4EC\uBFCD \uC5B9\uAE30!",
          "vi": "C\u1EAFt mi\u1EBFng v\u1EEBa \u0103n x\u1EBFp ra \u0111\u0129a, chan ch\xFAt n\u01B0\u1EDBc s\u1ED1t, r\u1EAFc \u0111\u1EABm d\u01B0a chua x\xE0o v\xE0 h\xE0nh hoa sa t\u1EBF!"
        },
        "instruction": {
          "zh-TW": "\u5C07\u98DF\u6750\u5012\u5728\u5927\u7827\u677F\u4E0A\u5FEB\u901F\u5207\u6210\u4E00\u53E3\u5927\u5C0F\uFF0C\u76DB\u5165\u5927\u76E4\u4E2D\uFF0C\u738B\u5B50\u9EB5\u92EA\u5E95\u3002\u6DCB\u4E0A\u4E00\u52FA\u7CBE\u83EF\u71B1\u6EF7\u6C41\u3001\u9999\u6CB9\u8207\u849C\u6CE5\uFF0C\u9802\u90E8\u92EA\u6EFF\u4E00\u5927\u5768\u9748\u9B42\u7092\u9178\u83DC\u3001\u6EFF\u6EFF\u8525\u82B1\u8207\u81EA\u88FD\u751F\u8FA3\u6912\u91AC\uFF0C\u8D81\u71B1\u62CC\u52FB\u5927\u5FEB\u6735\u9824\uFF01",
          "en": "Chop braised delicacies into bite-sized pieces on cutting board. Mound over Prince noodles on a huge platter. Drizzle hot master broth, sesame oil and garlic. Crown with mountain of savory stir-fried pickled greens, scallions and fiery chili!",
          "ja": "\u307E\u306A\u677F\u3067\u4E00\u53E3\u5927\u306B\u5207\u308A\u3001\u738B\u5B50\u9EBA\u306E\u4E0A\u306B\u8C6A\u5FEB\u306B\u76DB\u308A\u4ED8\u3051\u307E\u3059\u3002\u71B1\u3044\u6EF7\u6C41\u3001\u3054\u307E\u6CB9\u3001\u30CB\u30F3\u30CB\u30AF\u3092\u56DE\u3057\u304B\u3051\u3001\u7092\u3081\u9AD8\u83DC\u3068\u30CD\u30AE\u3001\u7279\u88FD\u30E9\u30FC\u6CB9\u3092\u305F\u3063\u3077\u308A\u6DFB\u3048\u3066\u71B1\u3005\u3092\u6DF7\u305C\u3066\u3044\u305F\u3060\u304D\u307E\u3059\uFF01",
          "ko": "\uB3C4\uB9C8\uC5D0\uC11C \uD55C\uC785 \uD06C\uAE30\uB85C \uC370\uC5B4 \uB77C\uBA74 \uC704\uC5D0 \uD478\uC9D0\uD558\uAC8C \uB2F4\uC2B5\uB2C8\uB2E4. \uB728\uAC70\uC6B4 \uC721\uC218\uC640 \uCC38\uAE30\uB984, \uB9C8\uB298\uC744 \uBFCC\uB9AC\uACE0 \uBCF6\uC740 \uAC13\uC808\uC784, \uD30C, \uACE0\uCD94\uAE30\uB984\uC744 \uC0B0\uB354\uBBF8\uCC98\uB7FC \uC5B9\uC5B4 \uBE44\uBCBC \uBA39\uC2B5\uB2C8\uB2E4!",
          "vi": "Ch\u1EB7t nh\u1ECF c\xE1c nguy\xEAn li\u1EC7u v\u1EEBa \u0103n b\xE0y l\xEAn \u0111\u0129a tr\xEAn l\u1EDBp m\xEC. R\u01B0\u1EDBi n\u01B0\u1EDBc s\u1ED1t n\xF3ng, d\u1EA7u m\xE8, t\u1ECFi b\u0103m r\u1ED3i ph\u1EE7 ng\u1EADp d\u01B0a chua x\xE0o gi\xF2n, h\xE0nh hoa v\xE0 sa t\u1EBF th\u01A1m cay n\u1EE9c n\u1EDF!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-lu-wei-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "prince-noodles-soggy",
        "problem": {
          "zh-TW": "\u738B\u5B50\u9EB5\u6CE1\u592A\u8EDF\u721B\u6C92\u6709\u5F48\u6027\uFF1F",
          "en": "Why are my Prince noodles overly soggy?",
          "ja": "\u738B\u5B50\u9EBA\u304C\u4F38\u3073\u3066\u67D4\u3089\u304B\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3063\u305F\uFF1F",
          "ko": "\uC655\uC790\uB77C\uBA74\uC774 \uB108\uBB34 \uBD88\uC5B4\uC11C \uC2DD\uAC10\uC774 \uC5C6\uB098\uC694?",
          "vi": "M\xEC Ho\xE0ng T\u1EED b\u1ECB n\u1EDF nh\u0169n m\u1EA5t \u0111\u1ED9 dai gi\xF2n?"
        },
        "cause": {
          "zh-TW": "\u716E\u8D85\u904E 2 \u5206\u9418\uFF0C\u6216\u8D77\u934B\u5F8C\u6D78\u6CE1\u5728\u71B1\u6E6F\u4E2D\u592A\u4E45\u3002",
          "en": "Boiled past 2 mins or sat in hot liquid.",
          "ja": "2\u5206\u4EE5\u4E0A\u8339\u3067\u3059\u304E\u305F\u304B\u3001\u71B1\u3044\u30B9\u30FC\u30D7\u306B\u6D78\u3057\u305F\u307E\u307E\u653E\u7F6E\u3057\u305F\u305F\u3081\u3067\u3059\u3002",
          "ko": "2\uBD84 \uC774\uC0C1 \uB053\uC600\uAC70\uB098 \uB728\uAC70\uC6B4 \uAD6D\uBB3C\uC5D0 \uC624\uB798 \uBC29\uCE58\uB418\uC5C8\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "N\u1EA5u qu\xE1 2 ph\xFAt ho\u1EB7c \u0111\u1EC3 ng\xE2m trong n\u01B0\u1EDBc n\xF3ng qu\xE1 l\xE2u."
        },
        "solution": {
          "zh-TW": "\u5927\u706B\u6EFE\u716E 1.5 \u5206\u9418\u9EB5\u689D\u5FAE\u6372\u5373\u523B\u6488\u51FA\u701D\u4E7E\uFF0C\u6DCB\u5C11\u8A31\u9999\u6CB9\u62CC\u52FB\u9632\u9ECF\uFF01",
          "en": "Boil 90 seconds only while curly, drain immediately and toss with a drop of sesame oil!",
          "ja": "\u5F37\u706B\u30671\u5206\u534A\u3001\u5C11\u3057\u82AF\u304C\u6B8B\u308B\u7A0B\u5EA6\u3067\u5F15\u304D\u4E0A\u3052\u3066\u3054\u307E\u6CB9\u3092\u7D61\u3081\u3066\u304F\u3060\u3055\u3044\uFF01",
          "ko": "\uC13C \uBD88\uC5D0\uC11C 1\uBD84 30\uCD08\uB9CC \uB053\uC5EC \uAF2C\uB4E4\uD560 \uB54C \uAC74\uC838\uB0B4 \uCC38\uAE30\uB984\uC744 \uC0B4\uC9DD \uB458\uB7EC \uBE44\uBE44\uC138\uC694!",
          "vi": "Ch\u1EC9 lu\u1ED9c 1.5 ph\xFAt cho s\u1EE3i m\xEC xo\u0103n dai v\u1EDBt ra ngay, r\u01B0\u1EDBi ch\xFAt d\u1EA7u m\xE8 ch\u1ED1ng d\xEDnh!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u591C\u5E02\u52A0\u71B1\u6EF7\u5473\u7684\u9748\u9B42\u662F\u300E\u7092\u9178\u83DC\u300F\uFF01\u7528\u849C\u788E\u3001\u8FA3\u6912\u8207\u7802\u7CD6\u5C0F\u706B\u7178\u7092\u9E79\u9178\u83DC\u81F3\u6CB9\u4EAE\u7518\u751C\uFF0C\u6492\u5728\u6EF7\u5473\u4E0A\u89E3\u81A9\u63D0\u9BAE\uFF0C\u7F8E\u5473\u77AC\u9593\u7FFB\u500D\uFF01",
        "en": "The unsung hero is the sweet-savory stir-fried pickled mustard greens, which balances the rich herbal soy flavors!",
        "ja": "\u30CB\u30F3\u30CB\u30AF\u3001\u5510\u8F9B\u5B50\u3001\u7802\u7CD6\u3067\u9999\u3070\u3057\u304F\u7092\u3081\u305F\u7279\u88FD\u9AD8\u83DC\uFF08\u9178\u83DC\uFF09\u304C\u5473\u306E\u6C7A\u3081\u624B\uFF01",
        "ko": "\uB9C8\uB298\uACFC \uACE0\uCD94, \uC124\uD0D5\uC744 \uB123\uACE0 \uB2EC\uCF64 \uC9ED\uC870\uB984\uD558\uAC8C \uBCF6\uC544\uB0B8 \uAC13\uC808\uC784(\uC464\uC548\uCC28\uC774)\uC774 \uB8E8\uC6E8\uC774\uC758 \uD575\uC2EC \uBE44\uBC95\uC785\uB2C8\uB2E4!",
        "vi": "Linh h\u1ED3n m\xF3n ph\xE1 l\u1EA5u ch\xEDnh l\xE0 d\u01B0a chua x\xE0o t\u1ECFi \u1EDBt \u0111\u01B0\u1EDDng v\xE0ng \xF3ng chua ng\u1ECDt c\xE2n b\u1EB1ng v\u1ECB b\xE9o!"
      }
    ]
  },
  {
    "id": "hot-grass-jelly",
    "slug": "hot-grass-jelly",
    "title": {
      "zh-TW": "\u4E5D\u4EFD\u50B3\u7D71\u53E4\u65E9\u5473\u71D2\u4ED9\u8349",
      "en": "Jiufen Traditional Hot Grass Jelly",
      "ja": "\u4E5D\u4EFD\u540D\u7269 \u53F0\u6E7E\u4F1D\u7D71\u306E\u30DB\u30C3\u30C8\u4ED9\u8349\u30BC\u30EA\u30FC\uFF08\u71B1\u3005\u713C\u4ED9\u8349\uFF09",
      "ko": "\uB300\uB9CC \uC9C0\uC6B0\uD380 \uC804\uD1B5 \uB530\uB73B\uD55C \uD5C8\uBE0C \uC824\uB9AC \uD0D5 (\uC0E4\uC624\uC174\uCC28\uC624)",
      "vi": "Th\u1EA1ch s\u01B0\u01A1ng s\xE1o n\xF3ng c\u1ED5 truy\u1EC1n C\u1EEDu Ph\u1EA7n (Thi\xEAu Ti\xEAn Th\u1EA3o)"
    },
    "subtitle": {
      "zh-TW": "\u95DC\u897F\u4ED9\u8349\u4E7E\u6162\u706B\u71AC\u716E\u30FB\u624B\u5DE5Q\u5F48\u4E5D\u4EFD\u828B\u5713\u30FB\u871C\u7D05\u8C46\u30FB\u9999\u8106\u786C\u82B1\u751F",
      "en": "Slow-Simmered Herb Grass Tea, Chewy Taro Balls, Sweet Red Beans & Crunchy Roasted Peanuts",
      "ja": "\u672C\u5834\u95A2\u897F\u7523\u4ED9\u8349\u8336\u30FB\u30E2\u30C1\u30E2\u30C1\u4E5D\u4EFD\u624B\u4F5C\u308A\u828B\u5713\u30FB\u871C\u5C0F\u8C46\u30FB\u9999\u3070\u3057\u3044\u30AB\u30EA\u30AB\u30EA\u30D4\u30FC\u30CA\u30C3\u30C4",
      "ko": "\uC9C4\uD558\uAC8C \uB2EC\uC778 \uCC9C\uC5F0 \uC120\uCD08\uCC28, \uCAC0\uB4DD\uD55C \uC218\uC81C \uC9C0\uC6B0\uD380 \uC704\uC704\uC548(\uD1A0\uB780\uB5A1), \uB2EC\uCF64\uD55C \uD325, \uBC14\uC0AD\uD55C \uBCF6\uC740 \uB545\uCF69",
      "vi": "S\u01B0\u01A1ng s\xE1o t\u1EF1 nhi\xEAn n\u1EA5u c\xF4 \u0111\u1EB7c, vi\xEAn khoai d\u1EBBo C\u1EEDu Ph\u1EA7n, \u0111\u1EADu \u0111\u1ECF ng\u1ECDt b\xF9i v\xE0 \u0111\u1EADu ph\u1ED9ng rang gi\xF2n"
    },
    "tagline": {
      "zh-TW": "\u51AC\u5929\u53F0\u7063\u8857\u982D\u6700\u6EAB\u6696\u7684\u6CBB\u7652\u7CFB\u751C\u54C1\uFF01\u71B1\u6C23\u9A30\u9A30\u6F38\u6F38\u51DD\u56FA\u7684\u6FC3\u90C1\u8349\u672C\u6E05\u9999",
      "en": "Taiwan's ultimate winter warmth: steaming herbal jelly that gently sets as you savor it",
      "ja": "\u53F0\u6E7E\u306E\u51AC\u306E\u98A8\u7269\u8A69\uFF01\u71B1\u3005\u306E\u30B9\u30FC\u30D7\u304C\u51B7\u3081\u308B\u3068\u30D7\u30EB\u30D7\u30EB\u306B\u56FA\u307E\u308B\u3001\u8EAB\u4F53\u306B\u512A\u3057\u3044\u7652\u3057\u306E\u30C7\u30B6\u30FC\u30C8",
      "ko": "\uB300\uB9CC\uC758 \uACA8\uC6B8\uC744 \uB530\uB73B\uD558\uAC8C \uB179\uC5EC\uC8FC\uB294 \uAD6D\uBBFC \uD790\uB9C1 \uB514\uC800\uD2B8! \uC2DD\uC73C\uBA74\uC11C \uC824\uB9AC\uCC98\uB7FC \uAD73\uC5B4\uAC00\uB294 \uB9E4\uB825",
      "vi": "M\xF3n tr\xE1ng mi\u1EC7ng s\u01B0\u1EDFi \u1EA5m m\xF9a \u0111\xF4ng \u0110\xE0i Loan v\u1EDBi h\u01B0\u01A1ng th\u01A1m th\u1EA3o m\u1ED9c t\u1EF1 nhi\xEAn ng\u01B0ng \u0111\u1ECDng d\u1EA7n khi \u0103n"
    },
    "heroImage": "/images/taiwan-hot-grass-jelly-hero.jpg",
    "difficulty": "easy",
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "defaultServings": 3,
    "caloriesPerServing": 260,
    "category": "desserts",
    "dietaryTags": [
      "classic",
      "vegetarian",
      "vegan",
      "glutenFree"
    ],
    "supportedCookware": [
      "traditional"
    ],
    "culture": {
      "originCity": {
        "zh-TW": "\u65B0\u7AF9\u95DC\u897F / \u65B0\u5317\u4E5D\u4EFD\u8001\u8857",
        "en": "Hsinchu Guanxi / New Taipei Jiufen",
        "ja": "\u65B0\u7AF9\u95A2\u897F / \u65B0\u5317\u4E5D\u4EFD",
        "ko": "\uC2E0\uC8FC \uAD00\uC2DC / \uC2E0\uBCA0\uC774 \uC9C0\uC6B0\uD380",
        "vi": "Quan T\xE2y T\xE2n Tr\xFAc / C\u1EEDu Ph\u1EA7n T\xE2n B\u1EAFc"
      },
      "famousNightMarkets": [
        {
          "zh-TW": "\u4E5D\u4EFD\u8001\u8857",
          "en": "Jiufen Old Street",
          "ja": "\u4E5D\u4EFD\u8001\u8857",
          "ko": "\uC9C0\uC6B0\uD380 \uB77C\uC624\uC81C",
          "vi": "Ph\u1ED1 c\u1ED5 C\u1EEDu Ph\u1EA7n"
        },
        {
          "zh-TW": "\u9952\u6CB3\u8857\u89C0\u5149\u591C\u5E02",
          "en": "Raohe Night Market",
          "ja": "\u9952\u6CB3\u8857\u591C\u5E02",
          "ko": "\uB77C\uC624\uD5C8\uC81C \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Raohe"
        },
        {
          "zh-TW": "\u6A02\u83EF\u591C\u5E02",
          "en": "Lehua Night Market",
          "ja": "\u6A02\u83EF\u591C\u5E02",
          "ko": "\uB7EC\uD654 \uC57C\uC2DC\uC7A5",
          "vi": "Ch\u1EE3 \u0111\xEAm Lehua"
        }
      ],
      "historyStory": {
        "zh-TW": "\u6E90\u81EA\u5BA2\u5BB6\u50B3\u7D71\u8349\u672C\u667A\u6167\uFF0C\u5C07\u65B0\u7AF9\u95DC\u897F\u9673\u5E74\u4ED9\u8349\u4E7E\u52A0\u6C34\u6162\u71AC\u6578\u5C0F\u6642\u6210\u6DF1\u9ED1\u4ED9\u8349\u6FC3\u6C41\uFF0C\u52A0\u5165\u5C11\u8A31\u5728\u4F86\u7C73\u7C89\u6F3F\u6216\u6A39\u85AF\u7C89\u52FE\u82A1\u4FDD\u6301\u5FAE\u7A20\u6D41\u52D5\u614B\u3002\u4E0A\u684C\u6642\u5192\u8457\u767D\u7159\uFF0C\u642D\u914D\u4E5D\u4EFD\u624B\u5DE5\u828B\u5713\u3001\u5730\u74DC\u5713\u3001\u7C89\u5713\uFF0C\u6700\u5F8C\u6492\u4E0A\u4E00\u5C0F\u5305\u8106\u786C\u82B1\u751F\u7C73\uFF0C\u8D81\u71B1\u4EAB\u7528\u3002",
        "en": "Crafted from aged dried mesona herbs simmered into a rich dark elixir lightly thickened with starch. Served piping-hot with handmade chewy taro/sweet potato balls and crunchy roasted peanuts.",
        "ja": "\u65B0\u7AF9\u30FB\u95A2\u897F\u7523\u306E\u4E7E\u71E5\u4ED9\u8349\u3092\u716E\u51FA\u3057\u305F\u85AC\u81B3\u30B9\u30FC\u30D7\u3002\u71B1\u3005\u306E\u30B9\u30FC\u30D7\u306B\u4E5D\u4EFD\u540D\u7269\u306E\u828B\u5713\uFF08\u30BF\u30ED\u828B\u56E3\u5B50\uFF09\u3084\u30BF\u30D4\u30AA\u30AB\u3092\u5165\u308C\u3001\u30D4\u30FC\u30CA\u30C3\u30C4\u3092\u6D6E\u304B\u3079\u3066\u6E29\u304B\u3044\u307E\u307E\u98DF\u3057\u307E\u3059\u3002",
        "ko": "\uC2E0\uC8FC \uAD00\uC2DC\uC758 \uB9D0\uB9B0 \uC120\uCD08\uB97C \uD479 \uB2EC\uC5EC \uB9CC\uB4E0 \uB530\uB73B\uD55C \uB514\uC800\uD2B8\uB85C, \uC9C0\uC6B0\uD380\uC758 \uCAC0\uB4DD\uD55C \uD0C0\uB85C\uBCFC\uACFC \uB2EC\uCF64\uD55C \uD325, \uBC14\uC0AD\uD55C \uB545\uCF69\uC744 \uACC1\uB4E4\uC5EC \uBA39\uB294 \uC804\uD1B5 \uBCF4\uC591 \uAC04\uC2DD\uC785\uB2C8\uB2E4.",
        "vi": "N\u1EA5u t\u1EEB c\xE2y s\u01B0\u01A1ng s\xE1o kh\xF4 Guanxi th\u01A1m n\u1EE9c, th\xEAm b\u1ED9t n\u0103ng t\u1EA1o \u0111\u1ED9 s\xE1nh m\u01B0\u1EE3t, \u0103n k\xE8m vi\xEAn khoai d\u1EBBo C\u1EEDu Ph\u1EA7n v\xE0 \u0111\u1EADu ph\u1ED9ng rang gi\xF2n th\u01A1m ph\u1EE9c."
      },
      "taiwaneseHokkien": "Sio-sian-tsh\xE1u (\u3112\u3127\u311C \u3112\u3127\u3122 \u3118\u3120\u02CB)",
      "mandarinPinyin": "Sh\u0101oxi\u0101nc\u01CEo (\u3115\u3120 \u3112\u3127\u3122 \u3118\u3120\u02C7)",
      "audioPronunciationText": "\u8001\u95C6\uFF0C\u71D2\u4ED9\u8349\u71B1\u7684\u4E00\u7897\uFF0C\u8981\u828B\u5713\u3001\u7D05\u8C46\u3001\u73CD\u73E0\uFF0C\u82B1\u751F\u591A\u7D66\u4E00\u5305"
    },
    "ingredients": [
      {
        "id": "pure-grass-jelly-liquid",
        "name": {
          "zh-TW": "\u7D14\u6B63\u95DC\u897F\u6FC3\u7E2E\u4ED9\u8349\u6C41 (\u542B\u5FAE\u91CF\u7D05\u7CD6)",
          "en": "Pure Guanxi Mesona Grass Tea Concentrate",
          "ja": "\u65B0\u7AF9\u95A2\u897F\u7523 \u7121\u6DFB\u52A0\u6FC3\u7E2E\u4ED9\u8349\u8336",
          "ko": "\uC2E0\uC8FC \uAD00\uC2DC \uC21C\uC218 \uB18D\uCD95 \uC120\uCD08\uC561",
          "vi": "N\u01B0\u1EDBc c\u1ED1t s\u01B0\u01A1ng s\xE1o nguy\xEAn ch\u1EA5t Guanxi"
        },
        "amount": 600,
        "unitMetric": "ml",
        "unitUS": "2.5 cups",
        "isKeyFlavor": true,
        "chineseName": "\u6FC3\u7E2E\u4ED9\u8349\u6C41",
        "chinesePinyin": "Xi\u0101nc\u01CEo zh\u012B"
      },
      {
        "id": "tapioca-thickener",
        "name": {
          "zh-TW": "\u6A39\u85AF\u6FB1\u7C89\u6216\u592A\u767D\u7C89\u6C34 (\u5FAE\u52FE\u82A1\u4FDD\u6EAB\u5FAE\u51DD)",
          "en": "Tapioca Starch Slurry (for Silky Thickening)",
          "ja": "\u30BF\u30D4\u30AA\u30AB\u6FB1\u7C89\u6C34\u6EB6\u304D\uFF08\u3068\u308D\u307F\u4ED8\u3051\u7528\uFF09",
          "ko": "\uD0C0\uD53C\uC624\uCE74 \uC804\uBD84\uBB3C (\uB18D\uB3C4 \uC870\uC808\uC6A9)",
          "vi": "N\u01B0\u1EDBc b\u1ED9t n\u0103ng t\u1EA1o \u0111\u1ED9 s\xE1nh"
        },
        "amount": 25,
        "unitMetric": "g",
        "unitUS": "2 tbsp",
        "chineseName": "\u6A39\u85AF\u7C89\u82A1\u6C34",
        "chinesePinyin": "Sh\xF9sh\u01D4f\u011Bn"
      },
      {
        "id": "taro-sweet-potato-balls",
        "name": {
          "zh-TW": "\u4E5D\u4EFD\u624B\u5DE5Q\u5F48\u828B\u5713\u8207\u5730\u74DC\u5713",
          "en": "Jiufen Handmade Chewy Taro & Sweet Potato Balls",
          "ja": "\u4E5D\u4EFD\u624B\u4F5C\u308A \u828B\u5713\uFF06\u5730\u74DC\u5713\uFF08\u30BF\u30ED\u828B\u30FB\u30B5\u30C4\u30DE\u30A4\u30E2\u56E3\u5B50\uFF09",
          "ko": "\uC9C0\uC6B0\uD380 \uC218\uC81C \uD0C0\uB85C\uBCFC \uBC0F \uACE0\uAD6C\uB9C8\uBCFC (\uC704\uC704\uC548)",
          "vi": "Vi\xEAn khoai m\xF4n v\xE0 khoai lang d\u1EBBo C\u1EEDu Ph\u1EA7n"
        },
        "amount": 150,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "isKeyFlavor": true,
        "chineseName": "\u4E5D\u4EFD\u828B\u5713\u5730\u74DC\u5713",
        "chinesePinyin": "Y\xF9yu\xE1n d\xECgu\u0101yu\xE1n"
      },
      {
        "id": "toppings-peanuts",
        "name": {
          "zh-TW": "\u871C\u7D05\u8C46\u3001\u9ED1\u7CD6\u73CD\u73E0\u3001\u9999\u8106\u786C\u82B1\u751F\u7C73",
          "en": "Sweet Red Beans, Boba Pearls & Crispy Roasted Peanuts",
          "ja": "\u871C\u5C0F\u8C46\u3001\u30D6\u30E9\u30C3\u30AF\u30BF\u30D4\u30AA\u30AB\u3001\u9999\u3070\u3057\u3044\u30ED\u30FC\u30B9\u30C8\u30D4\u30FC\u30CA\u30C3\u30C4",
          "ko": "\uB2EC\uCF64\uD55C \uD325, \uD751\uB2F9 \uBC84\uBE14, \uBC14\uC0AD\uD55C \uBCF6\uC740 \uB545\uCF69",
          "vi": "\u0110\u1EADu \u0111\u1ECF rim \u0111\u01B0\u1EDDng, tr\xE2n ch\xE2u \u0111en v\xE0 \u0111\u1EADu ph\u1ED9ng rang gi\xF2n"
        },
        "amount": 100,
        "unitMetric": "g",
        "unitUS": "1 cup",
        "isKeyFlavor": true,
        "chineseName": "\u871C\u7D05\u8C46\u786C\u82B1\u751F",
        "chinesePinyin": "M\xEC h\xF3ngd\xF2u"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": {
          "zh-TW": "\u6EFE\u6C34\u716E\u719F\u4E5D\u4EFD\u828B\u5713\u5730\u74DC\u5713\u81F3\u6F02\u6D6E\u6488\u8D77",
          "en": "Boil Chewy Taro & Sweet Potato Balls until Floating",
          "ja": "\u828B\u5713\u3068\u5730\u74DC\u5713\u3092\u71B1\u6E6F\u3067\u8339\u3067\u3066\u6D6E\u304D\u4E0A\u304C\u3063\u305F\u3089\u3059\u304F\u3046",
          "ko": "\uB053\uB294 \uBB3C\uC5D0 \uD0C0\uB85C\uBCFC\uACFC \uACE0\uAD6C\uB9C8\uBCFC\uC744 \uC0B6\uC544 \uB5A0\uC624\uB974\uBA74 \uAC74\uC9C0\uAE30",
          "vi": "Lu\u1ED9c vi\xEAn khoai d\u1EBBo trong n\u01B0\u1EDBc s\xF4i \u0111\u1EBFn khi n\u1ED5i l\xEAn v\u1EDBt ra"
        },
        "instruction": {
          "zh-TW": "\u5927\u934B\u6C34\u71D2\u6EFE\uFF0C\u4E0B\u5165\u4E5D\u4EFD\u624B\u5DE5\u828B\u5713\u8207\u5730\u74DC\u5713\u3002\u5927\u706B\u716E\u7D04 2.5~3 \u5206\u9418\u81F3\u5168\u90E8\u81A8\u8139\u6D6E\u65BC\u6C34\u9762\uFF0C\u6488\u8D77\u6CE1\u5165\u5C11\u8A31\u7802\u7CD6\u871C\u6C34\u4E2D\u4FDD\u6EAB\u9632\u9ECF\u4E26\u4FDD\u6301\u6975\u81F4Q\u5F48\u3002",
          "en": "Bring pot of water to boil, drop in taro and sweet potato balls. Boil for 2.5-3 mins until fully buoyant. Transfer into light sugar syrup to keep chewy.",
          "ja": "\u6CB8\u9A30\u3057\u305F\u6E6F\u306B\u828B\u5713\u3068\u5730\u74DC\u5713\u3092\u5165\u308C\u3001\u6D6E\u304D\u4E0A\u304C\u3063\u3066\u304B\u30892\u5206\u307B\u3069\u8339\u3067\u307E\u3059\u3002\u7802\u7CD6\u6C34\u306B\u6D78\u3057\u3066\u304F\u3063\u3064\u304D\u3092\u9632\u304E\u30E2\u30C1\u30E2\u30C1\u611F\u3092\u4FDD\u3061\u307E\u3059\u3002",
          "ko": "\uB053\uB294 \uBB3C\uC5D0 \uD0C0\uB85C\uBCFC\uC744 \uB123\uACE0 2.5-3\uBD84\uAC04 \uC0B6\uC544 \uB5A0\uC624\uB974\uBA74 \uAC74\uC838 \uC124\uD0D5\uBB3C\uC5D0 \uB2F4\uAC00 \uCAC4\uAE43\uD568\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4.",
          "vi": "Th\u1EA3 vi\xEAn khoai v\xE0o n\u01B0\u1EDBc s\xF4i lu\u1ED9c 2.5-3 ph\xFAt cho n\u1ED5i b\u1ED3ng b\u1EC1nh, v\u1EDBt ra ng\xE2m n\u01B0\u1EDBc \u0111\u01B0\u1EDDng lo\xE3ng cho d\u1EBBo th\u01A1m kh\xF4ng b\u1ECB d\xEDnh."
        },
        "durationSeconds": 180,
        "image": "/images/taiwan-hot-grass-jelly-step1.jpg"
      },
      {
        "stepNumber": 2,
        "title": {
          "zh-TW": "\u6162\u706B\u716E\u71B1\u4ED9\u8349\u6C41\u4E26\u6DCB\u5165\u6FB1\u7C89\u6C34\u5FAE\u52FE\u82A1",
          "en": "Simmer Grass Tea & Whisk in Starch Slurry",
          "ja": "\u4ED9\u8349\u8336\u3092\u6E29\u3081\u3001\u6C34\u6EB6\u304D\u6FB1\u7C89\u3092\u52A0\u3048\u3066\u306A\u3081\u3089\u304B\u306A\u3068\u308D\u307F\u3092\u3064\u3051\u308B",
          "ko": "\uC120\uCD08\uC561\uC744 \uB370\uC6B0\uACE0 \uC804\uBD84\uBB3C\uC744 \uD480\uC5B4 \uBD80\uB4DC\uB7EC\uC6B4 \uB18D\uB3C4 \uB9DE\uCD94\uAE30",
          "vi": "\u0110un n\xF3ng n\u01B0\u1EDBc s\u01B0\u01A1ng s\xE1o v\xE0 r\xF3t n\u01B0\u1EDBc b\u1ED9t n\u0103ng t\u1EA1o \u0111\u1ED9 s\xE1nh m\u1ECBn"
        },
        "instruction": {
          "zh-TW": "\u539A\u5E95\u934B\u5012\u5165\u6FC3\u7E2E\u4ED9\u8349\u6C41\u8207\u9069\u91CF\u4E8C\u7802\u7CD6\u5FAE\u706B\u716E\u6EFE\u3002\u7DE9\u7DE9\u6DCB\u5165\u6A39\u85AF\u6FB1\u7C89\u6C34\uFF0C\u7528\u6253\u86CB\u5668\u5FEB\u901F\u652A\u52FB\uFF0C\u716E\u81F3\u6E6F\u6C41\u5448\u73FE\u7D72\u6ED1\u900F\u4EAE\u3001\u5FAE\u7A20\u6D41\u52D5\u72C0\uFF0C\u7184\u706B\u4FDD\u6EAB\u3002",
          "en": "Heat grass tea concentrate with sugar until simmering. Slowly drizzle in tapioca starch slurry while whisking continuously until glossy, velvety and lightly thickened.",
          "ja": "\u5C0F\u934B\u306B\u4ED9\u8349\u8336\u3068\u7802\u7CD6\u3092\u5165\u308C\u3066\u6E29\u3081\u3001\u6C34\u6EB6\u304D\u30BF\u30D4\u30AA\u30AB\u7C89\u3092\u5C11\u3057\u305A\u3064\u52A0\u3048\u306A\u304C\u3089\u6DF7\u305C\u3001\u306A\u3081\u3089\u304B\u306A\u3068\u308D\u307F\u3092\u3064\u3051\u307E\u3059\u3002",
          "ko": "\uB0C4\uBE44\uC5D0 \uC120\uCD08\uC561\uACFC \uC124\uD0D5\uC744 \uB123\uACE0 \uB053\uC774\uB2E4\uAC00 \uC804\uBD84\uBB3C\uC744 \uC870\uAE08\uC529 \uBD80\uC5B4\uAC00\uBA70 \uC800\uC5B4 \uBD80\uB4DC\uB7FD\uACE0 \uAC78\uCB49\uD55C \uB18D\uB3C4\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.",
          "vi": "\u0110un s\xF4i n\u01B0\u1EDBc c\u1ED1t s\u01B0\u01A1ng s\xE1o v\u1EDBi \u0111\u01B0\u1EDDng n\xE2u, t\u1EEB t\u1EEB r\xF3t n\u01B0\u1EDBc b\u1ED9t n\u0103ng khu\u1EA5y \u0111\u1EC1u tay cho n\u01B0\u1EDBc s\xE1nh m\u01B0\u1EE3t b\xF3ng b\u1EA9y."
        },
        "durationSeconds": 300,
        "image": "/images/taiwan-hot-grass-jelly-step2.jpg"
      },
      {
        "stepNumber": 3,
        "title": {
          "zh-TW": "\u7897\u5E95\u76DB\u5165\u6EFF\u6EFF\u828B\u5713\u3001\u5730\u74DC\u5713\u3001\u871C\u7D05\u8C46\u8207\u73CD\u73E0",
          "en": "Layer Chewy Toppings, Sweet Red Beans & Boba in Bowl",
          "ja": "\u5668\u306B\u828B\u5713\u3001\u5730\u74DC\u5713\u3001\u871C\u5C0F\u8C46\u3001\u30BF\u30D4\u30AA\u30AB\u3092\u305F\u3063\u3077\u308A\u76DB\u308A\u4ED8\u3051\u308B",
          "ko": "\uB300\uC811\uC5D0 \uD0C0\uB85C\uBCFC, \uACE0\uAD6C\uB9C8\uBCFC, \uD325, \uD0C0\uD53C\uC624\uCE74\uD384\uC744 \uB4EC\uBFCD \uB2F4\uAE30",
          "vi": "X\u1EBFp c\xE1c lo\u1EA1i vi\xEAn khoai d\u1EBBo, \u0111\u1EADu \u0111\u1ECF v\xE0 tr\xE2n ch\xE2u v\xE0o \u0111\xE1y b\xE1t"
        },
        "instruction": {
          "zh-TW": "\u5728\u6EAB\u71B1\u7684\u751C\u54C1\u7897\u5E95\uFF0C\u5927\u52FA\u8200\u5165\u716E\u597D\u7684\u4E5D\u4EFD\u828B\u5713\u3001\u5730\u74DC\u5713\u3001\u8EDF\u721B\u871C\u7D05\u8C46\u8207\u9ED1\u7CD6\u73CD\u73E0\u7C89\u5713\uFF0C\u914D\u6599\u8C50\u5BCC\u6EFF\u6EA2\u3002",
          "en": "Spoon warm taro balls, sweet potato balls, sweet red beans and brown sugar boba pearls into serving bowl.",
          "ja": "\u6E29\u3081\u305F\u5668\u306B\u3001\u8339\u3067\u305F\u3066\u306E\u828B\u5713\u3001\u5730\u74DC\u5713\u3001\u7518\u3044\u5C0F\u8C46\u3001\u9ED2\u7CD6\u30BF\u30D4\u30AA\u30AB\u3092\u5F69\u308A\u3088\u304F\u76DB\u308A\u4ED8\u3051\u307E\u3059\u3002",
          "ko": "\uB530\uB73B\uD55C \uADF8\uB987\uC5D0 \uC0B6\uC544\uB454 \uD0C0\uB85C\uBCFC, \uB2EC\uCF64\uD55C \uD325, \uD751\uB2F9 \uBC84\uBE14\uC744 \uB4EC\uBFCD \uB2F4\uC2B5\uB2C8\uB2E4.",
          "vi": "M\xFAc vi\xEAn khoai m\xF4n, khoai lang, \u0111\u1EADu \u0111\u1ECF rim ng\u1ECDt v\xE0 tr\xE2n ch\xE2u \u0111\u01B0\u1EDDng n\xE2u v\xE0o l\xF2ng b\xE1t s\xE2u."
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-hot-grass-jelly-step3.jpg"
      },
      {
        "stepNumber": 4,
        "title": {
          "zh-TW": "\u6F86\u5165\u6EFE\u71D9\u6FC3\u9187\u71D2\u4ED9\u8349\u3001\u6492\u4E0A\u9999\u8106\u786C\u82B1\u751F\uFF01",
          "en": "Pour Piping-Hot Grass Jelly Soup & Scatter Crisp Peanuts!",
          "ja": "\u71B1\u3005\u306E\u713C\u4ED9\u8349\u30B9\u30FC\u30D7\u3092\u6CE8\u304E\u3001\u9999\u3070\u3057\u3044\u30D4\u30FC\u30CA\u30C3\u30C4\u3092\u6D6E\u304B\u3079\u308B\uFF01",
          "ko": "\uB728\uAC70\uC6B4 \uC120\uCD08\uD0D5\uC744 \uBD93\uACE0 \uBC14\uC0AD\uD55C \uBCF6\uC740 \uB545\uCF69\uC744 \uB744\uC6CC \uC644\uC131!",
          "vi": "Chan n\u01B0\u1EDBc s\u01B0\u01A1ng s\xE1o n\xF3ng h\u1ED5i v\xE0 r\u1EAFc \u0111\u1EADu ph\u1ED9ng rang gi\xF2n r\u1EE5m l\xEAn tr\xEAn!"
        },
        "instruction": {
          "zh-TW": "\u5C07\u6EFE\u71D9\u5192\u7159\u7684\u6FC3\u90C1\u71D2\u4ED9\u8349\u6C41\u7DE9\u7DE9\u6F86\u5165\u7897\u4E2D\u6DF9\u6C92\u6240\u6709\u914D\u6599\u3002\u4E0A\u684C\u524D\u6495\u958B\u4E00\u5305\u9999\u8106\u70D8\u70E4\u786C\u82B1\u751F\u7C73\u6492\u5728\u8868\u9762\uFF0C\u8D81\u71B1\u5927\u53E3\u8200\u53D6\uFF0C\u8EDFQ\u3001\u7518\u751C\u3001\u9999\u8106\u5728\u53E3\u4E2D\u4EA4\u878D\uFF0C\u96A8\u6EAB\u5EA6\u51B7\u537B\u66F4\u6703\u6F38\u6F38\u51DD\u56FA\u5982\u679C\u51CD\uFF01",
          "en": "Pour steaming hot grass jelly soup over all toppings. Scatter a generous handful of crunchy roasted peanuts on top. Savor hot as the soup slowly sets into soft tender jelly as you eat!",
          "ja": "\u71B1\u3005\u306E\u713C\u4ED9\u8349\u30B9\u30FC\u30D7\u3092\u305F\u3063\u3077\u308A\u6CE8\u304E\u3001\u30AB\u30EA\u30AB\u30EA\u306E\u30D4\u30FC\u30CA\u30C3\u30C4\u3092\u30C8\u30C3\u30D4\u30F3\u30B0\u3057\u3066\u71B1\u3005\u3092\u3044\u305F\u3060\u304D\u307E\u3059\uFF01\u51B7\u3081\u308B\u3068\u81EA\u7136\u306B\u30BC\u30EA\u30FC\u72B6\u306B\u56FA\u307E\u3063\u3066\u3044\u304F\u98DF\u611F\u306E\u5909\u5316\u3082\u7D76\u54C1\u3067\u3059\uFF01",
          "ko": "\uAE40\uC774 \uBAA8\uB77D\uBAA8\uB77D \uB098\uB294 \uB728\uAC70\uC6B4 \uC120\uCD08\uC561\uC744 \uAC00\uB4DD \uBD93\uACE0 \uBC14\uC0AD\uD55C \uBCF6\uC740 \uB545\uCF69\uC744 \uBFCC\uB9BD\uB2C8\uB2E4. \uC2DD\uC73C\uBA74\uC11C \uB9D0\uB791\uD55C \uC824\uB9AC\uB85C \uBCC0\uD574\uAC00\uB294 \uC7AC\uBBF8\uB97C \uB290\uB07C\uBA70 \uB4DC\uC138\uC694!",
          "vi": "R\xF3t n\u01B0\u1EDBc s\u01B0\u01A1ng s\xE1o s\xF4i b\u1ED1c kh\xF3i v\xE0o ng\u1EADp b\xE1t, r\u1EAFc g\xF3i \u0111\u1EADu ph\u1ED9ng rang gi\xF2n th\u01A1m ph\u1EE9c l\xEAn tr\xEAn. V\u1EEBa \u0103n v\u1EEBa c\u1EA3m nh\u1EADn th\u1EA1ch \u0111\xF4ng d\u1EBBo d\u1EA7n theo th\u1EDDi gian!"
        },
        "durationSeconds": 60,
        "image": "/images/taiwan-hot-grass-jelly-step4.jpg"
      }
    ],
    "troubleshooting": [
      {
        "id": "not-thickening",
        "problem": {
          "zh-TW": "\u71D2\u4ED9\u8349\u716E\u51FA\u4F86\u50CF\u6C34\u4E00\u6A23\u5B8C\u5168\u4E0D\u6FC3\u7A20\uFF1F",
          "en": "Why is my hot grass jelly as thin as water?",
          "ja": "\u713C\u4ED9\u8349\u306B\u3068\u308D\u307F\u304C\u3064\u304B\u305A\u30B5\u30E9\u30B5\u30E9\u306E\u307E\u307E\uFF1F",
          "ko": "\uC120\uCD08\uD0D5\uC774 \uAC78\uCB49\uD574\uC9C0\uC9C0 \uC54A\uACE0 \uBB3C\uCC98\uB7FC \uBB3D\uC740\uAC00\uC694?",
          "vi": "N\u01B0\u1EDBc s\u01B0\u01A1ng s\xE1o b\u1ECB lo\xE3ng nh\u01B0 n\u01B0\u1EDBc l\u1ECDc kh\xF4ng c\xF3 \u0111\u1ED9 s\xE1nh?"
        },
        "cause": {
          "zh-TW": "\u6A39\u85AF\u6FB1\u7C89\u52FE\u82A1\u91CF\u592A\u5C11\uFF0C\u6216\u6C92\u6709\u716E\u6EFE\u6FC0\u6D3B\u6FB1\u7C89\u7CCA\u5316\u3002",
          "en": "Not enough starch slurry, or didn't boil to activate gelatinization.",
          "ja": "\u6FB1\u7C89\u306E\u91CF\u304C\u5C11\u306A\u304B\u3063\u305F\u304B\u3001\u6CB8\u9A30\u3055\u305B\u3066\u7CCA\u5316\u3055\u305B\u3066\u3044\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
          "ko": "\uC804\uBD84\uBB3C \uC591\uC774 \uC801\uC5C8\uAC70\uB098 \uCDA9\uBD84\uD788 \uB053\uC5EC \uD65C\uC131\uD654\uD558\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",
          "vi": "Cho qu\xE1 \xEDt b\u1ED9t n\u0103ng ho\u1EB7c ch\u01B0a \u0111un s\xF4i \u0111\u1EC3 b\u1ED9t ch\xEDn t\u1EA1o \u0111\u1ED9 s\xE1nh."
        },
        "solution": {
          "zh-TW": "\u6DCB\u5165\u6A39\u85AF\u6FB1\u7C89\u6C34\u5F8C\u52D9\u5FC5\u7DAD\u6301\u5FAE\u6EFE\u652A\u62CC 1 \u5206\u9418\uFF0C\u8D77\u934B\u6642\u7565\u6709\u7A20\u5EA6\uFF0C\u51B7\u537B\u5F8C\u5C31\u6703\u6F38\u6F38\u51DD\u56FA\uFF01",
          "en": "Boil and stir for 1 full minute after adding slurry; it will naturally firm up as it cools!",
          "ja": "\u6C34\u6EB6\u304D\u7C89\u3092\u52A0\u3048\u305F\u3089\u3057\u3063\u304B\u308A1\u5206\u5F31\u706B\u3067\u6CB8\u9A30\u3055\u305B\u3066\u304F\u3060\u3055\u3044\u3002\u51B7\u3081\u308B\u3068\u81EA\u7136\u306B\u3068\u308D\u307F\u304C\u5F37\u307E\u308A\u307E\u3059\uFF01",
          "ko": "\uC804\uBD84\uBB3C\uC744 \uB123\uACE0 1\uBD84\uAC04 \uC800\uC5B4\uAC00\uBA70 \uCDA9\uBD84\uD788 \uB053\uC5EC\uC8FC\uC138\uC694. \uC2DD\uC73C\uBA74\uC11C \uC810\uCC28 \uAD73\uC5B4\uC9D1\uB2C8\uB2E4!",
          "vi": "R\xF3t b\u1ED9t n\u0103ng \u0111un s\xF4i khu\u1EA5y \u0111\u1EC1u 1 ph\xFAt cho h\u1ED3 h\xF3a, khi \u0111\u1EC3 ngu\u1ED9i s\u1EBD s\xE1nh \u0111\u1EB7c l\u1EA1i nh\u01B0 \xFD!"
        }
      }
    ],
    "proTips": [
      {
        "zh-TW": "\u4E00\u5B9A\u8981\u9644\u4E0A\u4E00\u5C0F\u5305\u300E\u786C\u82B1\u751F\u300F\uFF01\u525B\u6492\u4E0A\u53BB\u6642\u786C\u8106\u9999\u6FC3\uFF0C\u5728\u71B1\u4ED9\u8349\u4E2D\u6D78\u6CE1\u5E7E\u79D2\u5F8C\u5916\u9165\u5167\u8106\uFF0C\u662F\u6574\u7897\u71D2\u4ED9\u8349\u7684\u9EDE\u775B\u4E4B\u7B46\uFF01",
        "en": "Crunchy roasted peanuts are non-negotiable! The crispy crunch against velvety warm herbal jelly is perfection!",
        "ja": "\u30ED\u30FC\u30B9\u30C8\u30D4\u30FC\u30CA\u30C3\u30C4\u306F\u5FC5\u9808\uFF01\u6E29\u304B\u3044\u4ED9\u8349\u30BC\u30EA\u30FC\u3068\u9999\u3070\u3057\u3044\u30CA\u30C3\u30C4\u306E\u98DF\u611F\u306E\u5BFE\u6BD4\u304C\u683C\u5225\u3067\u3059\uFF01",
        "ko": "\uBC14\uC0AD\uD55C \uBCF6\uC740 \uB545\uCF69\uC740 \uC808\uB300 \uBE60\uC9C8 \uC218 \uC5C6\uB294 \uD575\uC2EC! \uBD80\uB4DC\uB7EC\uC6B4 \uC824\uB9AC\uC640 \uBC14\uC0AD\uD55C \uB545\uCF69\uC758 \uC870\uD654\uAC00 \uD658\uC0C1\uC801\uC785\uB2C8\uB2E4!",
        "vi": "\u0110\u1EADu ph\u1ED9ng rang gi\xF2n l\xE0 linh h\u1ED3n kh\xF4ng th\u1EC3 thi\u1EBFu! \u0110\u1ED9 b\xF9i gi\xF2n r\u1EE5m \u0111\u1ED1i l\u1EADp v\u1EDBi th\u1EA1ch s\u01B0\u01A1ng s\xE1o m\u1EC1m m\u01B0\u1EDBt t\u1EA1o n\xEAn tr\u1EA3i nghi\u1EC7m tuy\u1EC7t h\u1EA3o!"
      }
    ]
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  recipes
});
