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

// ../Malaysia Food Master/src/data/pantryKit.ts
var pantryKit_exports = {};
__export(pantryKit_exports, {
  pantryProducts: () => pantryProducts
});
module.exports = __toCommonJS(pantryKit_exports);
var pantryProducts = [
  // 1. Belacan 乾蝦膏
  {
    id: "belacan",
    name: {
      "zh-TW": "\u99AC\u4F86\u897F\u4E9E\u6AB3\u57CE\u7279\u7D1A\u4E7E\u8766\u818F (Belacan)",
      en: "Penang Premium Roasted Dried Shrimp Paste (Belacan)",
      ms: "Belacan Pulau Pinang Asli Bakar",
      ja: "\u30DA\u30CA\u30F3\u7279\u7523\u30FB\u4E7E\u71E5\u30A8\u30D3\u767A\u9175\u30DA\u30FC\u30B9\u30C8\uFF08\u30D6\u30E9\u30C1\u30E3\u30F3\uFF09",
      ko: "\uD398\uB0AD \uD504\uB9AC\uBBF8\uC5C4 \uAC74\uC870 \uBC1C\uD6A8 \uC0C8\uC6B0 \uD398\uC774\uC2A4\uD2B8 (\uBCA8\uB77C\uCC2C)"
    },
    malayName: "Belacan Asli",
    category: "Fermented Umami",
    description: {
      "zh-TW": "\u5927\u99AC\u6599\u7406\u6700\u9707\u64BC\u9748\u9B42\u7684\u5929\u7136\u9BAE\u5473\u70B8\u5F48\uFF01\u4EE5\u6D77\u7522\u5E7C\u8766\uFF08Geragau\uFF09\u52A0\u6D77\u9E7D\u5728\u8277\u967D\u4E0B\u66EC\u4E7E\u767C\u9175\u58D3\u5BE6\u3002\u4E0B\u934B\u524D\u5728\u5E73\u5E95\u934B\u6216\u70E4\u7BB1\u4E7E\u7119\u81F3\u5192\u51FA\u6FC3\u90C1\u7126\u9BAE\u7532\u6BBC\u9999\uFF0C\u662F Sambal \u8207\u7092\u7A7A\u5FC3\u83DC\uFF08\u99AC\u4F86\u98A8\u5149\uFF09\u7684\u547D\u8108\u3002",
      en: "The primordial umami engine of Malaysian cuisine. Fermented krill sun-baked into dense fragrant blocks. Toast dry until nutty, pungent and intensely aromatic before blending into sambal.",
      ms: "Nadi rasa masakan Malaysia. Diperbuat daripada udang geragau segar yang diperap dan dijemur. Bakar sedikit sebelum digunakan untuk aroma semerbak.",
      ja: "\u30DE\u30EC\u30FC\u6599\u7406\u306E\u5FC3\u81D3\u90E8\u3002\u5C0F\u30A8\u30D3\u3092\u5929\u65E5\u5869\u3067\u767A\u9175\u30FB\u4E7E\u71E5\u3055\u305B\u305F\u65E8\u5473\u306E\u584A\u3002\u706B\u3067\u8EFD\u304F\u7099\u3063\u3066\u304B\u3089\u4F7F\u3046\u3068\u3001\u7532\u6BBB\u985E\u306E\u6FC3\u539A\u306A\u9999\u3070\u3057\u3055\u304C\u7206\u767A\u3057\u307E\u3059\u3002",
      ko: "\uB9D0\uB808\uC774\uC2DC\uC544 \uC694\uB9AC\uC758 \uAE4A\uC740 \uAC10\uCE60\uB9DB\uC744 \uB0B4\uB294 \uD544\uC218 \uC2DD\uC7AC\uB8CC! \uC794\uC0C8\uC6B0\uB97C \uBC1C\uD6A8 \uAC74\uC870\uD55C \uAC83\uC73C\uB85C \uD504\uB77C\uC774\uD32C\uC5D0 \uC0B4\uC9DD \uAD6C\uC6CC \uC0AC\uC6A9\uD558\uBA74 \uD658\uC0C1\uC801\uC778 \uD48D\uBBF8\uB97C \uB0C5\uB2C8\uB2E4."
    },
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    importance: "essential",
    priceEstimate: "$3.99 / 250g",
    substituteTip: {
      "zh-TW": "\u570B\u5916\u61C9\u6025\u66FF\u4EE3\uFF1A\u6CF0\u570B\u8766\u818F (Kapi) 1:1\uFF0C\u6216\u4EE5\u9802\u7D1A\u9B5A\u9732 1 \u5927\u5319 + \u6AFB\u82B1\u8766/\u8766\u76AE\u70D8\u70E4\u6417\u788E\u4EE3\u66FF\u3002",
      en: "Emergency sub: Thai shrimp paste (Kapi) 1:1, or 1 tbsp good fish sauce + toasted dried shrimp powder.",
      ms: "Gantian kecemasan: Pes udang Thai (Kapi) 1:1, atau 1 sb sos ikan + serbuk udang kering disangai.",
      ja: "\u4EE3\u7528\u6848\uFF1A\u30BF\u30A4\u306E\u30B7\u30E5\u30EA\u30F3\u30D7\u30DA\u30FC\u30B9\u30C8\uFF08\u30AB\u30D4\uFF091:1\u3001\u307E\u305F\u306F\u30CA\u30F3\u30D7\u30E9\u30FC\u5927\u3055\u30581\uFF0B\u7092\u3063\u305F\u685C\u3048\u3073\u7C89\u672B\u3002",
      ko: "\uB300\uCCB4 \uBC29\uBC95: \uD0DC\uAD6D \uC0C8\uC6B0\uC813(\uCE74\uD53C) 1:1 \uB300\uCCB4, \uB610\uB294 \uC561\uC813 1\uD070\uC220 + \uBCF6\uC740 \uAC74\uC0C8\uC6B0 \uAC00\uB8E8."
    },
    retailerLinks: [
      { name: "Amazon Prime", url: "https://www.amazon.com/s?k=Belacan+Shrimp+Paste" }
    ]
  },
  // 2. Sambal 靈魂參巴醬
  {
    id: "sambal-belacan",
    name: {
      "zh-TW": "\u5357\u6D0B\u9748\u9B42\u53C3\u5DF4\u8FA3\u6912\u91AC (Sambal Belacan)",
      en: "Authentic Sambal Belacan Chili Paste",
      ms: "Sambal Belacan Tumbuk Tradisional",
      ja: "\u672C\u5834\u624B\u4F5C\u308A\u30B5\u30F3\u30D0\u30EB\u30FB\u30D6\u30E9\u30C1\u30E3\u30F3\u5510\u8F9B\u5B50\u30DA\u30FC\u30B9\u30C8",
      ko: "\uC815\uD1B5 \uC218\uC81C \uC0BC\uBC1C \uBCA8\uB77C\uCC2C \uCE60\uB9AC \uD398\uC774\uC2A4\uD2B8"
    },
    malayName: "Sambal Belacan",
    category: "Chili Paste",
    description: {
      "zh-TW": "\u99AC\u4F86\u897F\u4E9E\u9910\u684C\u4E0A\u7684\u7D55\u5C0D\u4FE1\u4EF0\uFF01\u9BAE\u7D05\u8FA3\u6912\u3001\u5C0F\u8FA3\u6912\uFF08Cili Padi\uFF09\u3001\u4E7E\u7119\u8766\u818F\u3001\u9752\u91D1\u6854\u6C41\uFF08Limau Kasturi\uFF09\u8207\u5C11\u8A31\u6930\u7CD6\u5728\u77F3\u81FC\u624B\u5DE5\u8202\u6417\uFF0C\u8F9B\u9999\u9178\u70C8\u3001\u7518\u9187\u56DE\u5473\u3002",
      en: "The fiery heartbeat of every Malaysian meal. Hand-pounded fresh red chilies, bird\u2019s eye chilies, toasted belacan, calamansi juice and palm sugar.",
      ms: "Pelengkap selera wajib rakyat Malaysia. Ditumbuk dalam lesung batu dengan cili merah, cili padi, belacan bakar dan perahan limau kasturi.",
      ja: "\u30DE\u30EC\u30FC\u30B7\u30A2\u306E\u98DF\u5353\u306B\u6B20\u304B\u305B\u306A\u3044\u4E07\u80FD\u30C1\u30EA\u3002\u751F\u5510\u8F9B\u5B50\u3001\u7099\u308A\u30D6\u30E9\u30C1\u30E3\u30F3\u3001\u30E9\u30A4\u30E0\u679C\u6C41\u3092\u77F3\u81FC\u3067\u53E9\u304D\u6F70\u3057\u3066\u4F5C\u308B\u523A\u6FC0\u7684\u3067\u30B3\u30AF\u6DF1\u3044\u8F9B\u307F\u3002",
      ko: "\uB9D0\uB808\uC774\uC2DC\uC544 \uBC25\uC0C1\uC758 \uD544\uC218 \uB9CC\uB2A5 \uC591\uB150\uC7A5. \uC2E0\uC120\uD55C \uBD89\uC740 \uACE0\uCD94, \uBCA8\uB77C\uCC2C, \uCE7C\uB77C\uB9CC\uC2DC \uC999\uC744 \uC808\uAD6C\uC5D0 \uBE7B\uC544 \uB9CC\uB4E0 \uB9E4\uCF64\uC0C8\uCF64\uD55C \uD48D\uBBF8\uAC00 \uC77C\uD488\uC785\uB2C8\uB2E4."
    },
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    importance: "essential",
    priceEstimate: "$4.50 / 300g (jar)",
    substituteTip: {
      "zh-TW": "\u61C9\u6025\u66FF\u4EE3\uFF1A\u4EE5\u5E02\u552E Sambal Oelek \u8FA3\u6912\u91AC\u52A0\u5165 1/2 \u8336\u5319\u9B5A\u9732\u8207\u65B0\u9BAE\u6AB8\u6AAC\u6C41\u5C11\u8A31\u7CD6\u62CC\u52FB\u3002",
      en: "Emergency sub: Store-bought Sambal Oelek + 1/2 tsp fish sauce + fresh lime juice + dash of sugar.",
      ms: "Gantian kecemasan: Sambal Oelek + 1/2 sk sos ikan + perahan jus limau nipis + sedikit gula.",
      ja: "\u4EE3\u7528\u6848\uFF1A\u5E02\u8CA9\u306E\u30B5\u30F3\u30D0\u30EB\u30AA\u30EC\u30C3\u30AF\uFF0B\u30CA\u30F3\u30D7\u30E9\u30FC\u5C0F\u3055\u30581/2\uFF0B\u30E9\u30A4\u30E0\u679C\u6C41\uFF0B\u7802\u7CD6\u5C11\u3005\u3002",
      ko: "\uB300\uCCB4 \uBC29\uBC95: \uC2DC\uD310 \uC0BC\uBC1C \uC62C\uB809\uC5D0 \uD53C\uC2DC\uC18C\uC2A4 1/2\uC791\uC740\uC220, \uB77C\uC784\uC999, \uC124\uD0D5 \uD55C \uAF2C\uC9D1\uC744 \uC11E\uC5B4 \uC0AC\uC6A9."
    },
    retailerLinks: [
      { name: "Amazon Prime", url: "https://www.amazon.com/s?k=Sambal+Belacan" }
    ]
  },
  // 3. Kicap Manis 大馬甜醬油
  {
    id: "kicap-manis",
    name: {
      "zh-TW": "\u99AC\u4F86\u897F\u4E9E Habhal\u2019s / \u5E06\u8239\u724C \u9748\u9B42\u751C\u91AC\u6CB9 (Kicap Manis)",
      en: "Habhal\u2019s Cap Kipas Udang Sweet Soy Sauce (Kicap Manis)",
      ms: "Kicap Manis Cap Kipas Udang Habhal\u2019s",
      ja: "\u30CF\u30D6\u30CF\u30EB\u30BA\u30FB\u30AD\u30C1\u30E3\u30C3\u30D7\u30DE\u30CB\u30B9\uFF08\u30DE\u30EC\u30FC\u7518\u53E3\u91A4\u6CB9\uFF09",
      ko: "\uD558\uBE0C\uD560\uC2A4 \uD0B5\uD30C\uC2A4 \uC6B0\uB2F9 \uD0A4\uCC39 \uB9C8\uB2C8\uC2A4 (\uB9D0\uB808\uC774\uC2DC\uC544 \uB2E8\uAC04\uC7A5)"
    },
    malayName: "Kicap Manis",
    category: "Soy Sauce",
    description: {
      "zh-TW": "\u4E0D\u540C\u65BC\u666E\u901A\u751F\u62BD\uFF0CKicap Manis \u8CEA\u5730\u6FC3\u7A20\u5982\u7CD6\u6F3F\uFF0C\u4EE5\u512A\u8CEA\u9EC3\u8C46\u5929\u7136\u767C\u9175\u4E26\u52A0\u5165\u7518\u8517\u7CD6\u7CD6\u871C\u3002\u7092\u9EB5\uFF08Mee Goreng\uFF09\u3001\u7092\u7CBF\u689D\u3001\u6CBE\u96DE\u8089\u4E32\u8207\u751F\u719F\u86CB\u6642\u6DCB\u4E0A\u4E00\u5319\uFF0C\u751C\u9E79\u7518\u9187\u3001\u4EAE\u6FA4\u9ED1\u4EAE\u3002",
      en: "Thick, syrupy dark sweet soy sauce naturally brewed and enriched with cane caramel. Essential for Mee Goreng Mamak, grilled satay glaze and dipping half-boiled eggs.",
      ms: "Kicap pekat manis warisan terkemuka, likat berkilat dan harum. Wajib untuk mee goreng, perapan sate dan telur separuh masak.",
      ja: "\u30C8\u30ED\u30EA\u3068\u6FC3\u539A\u306A\u30B7\u30ED\u30C3\u30D7\u72B6\u306E\u7518\u53E3\u9ED2\u91A4\u6CB9\u3002\u30B5\u30C8\u30A6\u30AD\u30D3\u306E\u30AB\u30E9\u30E1\u30EB\u304C\u52B9\u3044\u3066\u304A\u308A\u3001\u30DF\u30FC\u30B4\u30EC\u30F3\u306E\u7167\u308A\u713C\u304D\u611F\u3084\u5375\u304B\u3051\u3054\u98EF\u306B\u629C\u7FA4\u3002",
      ko: "\uAC78\uCB49\uD558\uACE0 \uB2EC\uCF64\uD55C \uD2B9\uC720\uC758 \uAC04\uC7A5\uC73C\uB85C \uBBF8\uACE0\uB7AD, \uBCF6\uC74C\uBC25, \uC0AC\uD14C \uAD6C\uC774 \uB4F1\uC5D0 \uBE60\uC9C8 \uC218 \uC5C6\uB294 \uB9D0\uB808\uC774\uC2DC\uC544\uC758 \uAD6D\uBBFC \uAC04\uC7A5\uC785\uB2C8\uB2E4."
    },
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80",
    importance: "essential",
    priceEstimate: "$4.99 / 645ml",
    substituteTip: {
      "zh-TW": "\u61C9\u6025\u66FF\u4EE3\uFF1A\u8001\u62BD\u91AC\u6CB9 2 \u5927\u5319 + \u9ED1\u7CD6\u6216\u7D05\u7CD6 2 \u5927\u5319\uFF0C\u5FAE\u6CE2 15 \u79D2\u652A\u52FB\u878D\u5316\u3002",
      en: "Emergency sub: 2 tbsp Dark Soy Sauce + 2 tbsp Brown Sugar gently warmed until thick and syrupy.",
      ms: "Gantian kecemasan: 2 sb kicap pekat + 2 sb gula perang dipanaskan sehingga likat.",
      ja: "\u4EE3\u7528\u6848\uFF1A\u305F\u307E\u308A\u91A4\u6CB9\u307E\u305F\u306F\u4E2D\u56FD\u8001\u62BD \u5927\u3055\u30582 \uFF0B \u9ED2\u7802\u7CD6 \u5927\u3055\u30582 \u3092\u8EFD\u304F\u6E29\u3081\u3066\u6EB6\u304B\u3059\u3002",
      ko: "\uB300\uCCB4 \uBC29\uBC95: \uC9C4\uAC04\uC7A5 2\uD070\uC220 + \uD751\uC124\uD0D5 2\uD070\uC220\uC744 \uC0B4\uC9DD \uB370\uC6CC \uAC78\uCB49\uD558\uAC8C \uB179\uC5EC \uC0AC\uC6A9."
    },
    retailerLinks: [
      { name: "Amazon Prime", url: "https://www.amazon.com/s?k=Kicap+Manis" }
    ]
  },
  // 4. Kicap Pekat 焦香黑醬油 (晒油)
  {
    id: "kicap-pekat",
    name: {
      "zh-TW": "\u5927\u99AC\u6021\u4FDD / \u5409\u9686\u5761\u8001\u5B57\u865F\u9ED1\u91AC\u6CB9 (\u6652\u6CB9 / Kicap Pekat)",
      en: "Ipoh Traditional Thick Caramel Black Soy Sauce (Kicap Pekat / Sai Yau)",
      ms: "Kicap Pekat Karamel Masakan (Sai Yau)",
      ja: "\u30A4\u30DD\u30FC\u4F1D\u7D71\u30FB\u6FC3\u539A\u30AB\u30E9\u30E1\u30EB\u9ED2\u91A4\u6CB9\uFF08\u30B5\u30A4\u30E8\u30A6 / \u6652\u6CB9\uFF09",
      ko: "\uC774\uD3EC \uC804\uD1B5 \uCE90\uB7EC\uBA5C \uD751\uAC04\uC7A5 (\uC0AC\uC774\uC720 / \uD0A4\uCC39 \uBED0\uCE87)"
    },
    malayName: "Kicap Pekat",
    category: "Soy Sauce",
    description: {
      "zh-TW": "\u5409\u9686\u5761\u70AD\u706B\u798F\u5EFA\u9EB5\u8207\u7092\u7CBF\u689D\u9ED1\u5F97\u767C\u4EAE\u3001\u9999\u6C23\u523A\u9F3B\u7684\u79D8\u5BC6\uFF01\u5C07\u767C\u9175\u91AC\u6CB9\u9577\u6642\u9593\u5728\u70C8\u65E5\u4E0B\u66B4\u6652\u6FC3\u7E2E\uFF0C\u7126\u7CD6\u9999\u6975\u70BA\u6FC3\u70C8\uFF0C\u4E0A\u8272\u6DF1\u9083\u5982\u9ED1\u66DC\u77F3\uFF0C\u5E36\u6709\u9187\u539A\u944A\u6C23\u5E95\u860A\u3002",
      en: "The secret behind the pitch-black glossy luster of KL Hokkien Mee and Penang Char Kway Teow. Sun-aged thick caramel soy sauce that provides deep smoky color without excess saltiness.",
      ms: "Rahsia warna hitam berkilat Mee Hokkien KL dan Char Kway Teow. Memberi warna karamel gelap dan aroma kuali yang hebat.",
      ja: "\u30AF\u30A2\u30E9\u30EB\u30F3\u30D7\u30FC\u30EB\u798F\u5EFA\u7092\u3081\u9EBA\u3084\u30C1\u30E3\u30FC\u30AF\u30A8\u30C6\u30A3\u30AA\u3092\u9ED2\u5149\u308A\u3055\u305B\u308B\u6C7A\u3081\u624B\u3002\u5929\u65E5\u5E72\u3057\u3067\u719F\u6210\u3055\u308C\u305F\u6FC3\u539A\u306A\u30B3\u30AF\u3068\u8272\u4ED8\u304D\u3002",
      ko: "\uCFE0\uC54C\uB77C\uB8F8\uD478\uB974 \uD638\uD0A4\uC5D4 \uBBF8\uC758 \uC9D9\uC740 \uAC80\uC740\uBE5B\uACFC \uBD88\uB9DB\uC758 \uD575\uC2EC \uBE44\uBC95. \uC9E0\uB9DB\uBCF4\uB2E4\uB294 \uAE4A\uC740 \uCE90\uB7EC\uBA5C \uD5A5\uACFC \uC0C9\uC744 \uC785\uD600\uC90D\uB2C8\uB2E4."
    },
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    importance: "essential",
    priceEstimate: "$5.50 / 500ml",
    substituteTip: {
      "zh-TW": "\u61C9\u6025\u66FF\u4EE3\uFF1A\u674E\u9326\u8A18\u8349\u83C7\u8001\u62BD 1.5 \u5927\u5319 + \u7CD6\u871C\u6216\u6DF1\u8272\u7126\u7CD6\u8272\u7D20 1 \u8336\u5319\u3002",
      en: "Emergency sub: Chinese Mushroom Dark Soy Sauce 1.5 tbsp + 1 tsp molasses.",
      ms: "Gantian kecemasan: Kicap pekat cendawan Lee Kum Kee 1.5 sb + 1 sk molases.",
      ja: "\u4EE3\u7528\u6848\uFF1A\u4E2D\u56FD\u306E\u8349\u83C7\u8001\u62BD\uFF08\u30C0\u30FC\u30AF\u30BD\u30A4\u30BD\u30FC\u30B9\uFF09\u5927\u3055\u30581.5 \uFF0B \u30E2\u30E9\u30BB\u30B9\u5C0F\u3055\u30581\u3002",
      ko: "\uB300\uCCB4 \uBC29\uBC95: \uC911\uAD6D \uB178\uCD94(\uB178\uCD94\uAC04\uC7A5) 1.5\uD070\uC220 + \uBB3C\uC5FF/\uD751\uB2F9 1\uC791\uC740\uC220."
    },
    retailerLinks: [
      { name: "Amazon Prime", url: "https://www.amazon.com/s?k=Thick+Caramel+Soy+Sauce" }
    ]
  },
  // 5. Gula Melaka 馬六甲純椰糖
  {
    id: "gula-melaka",
    name: {
      "zh-TW": "\u99AC\u516D\u7532\u53E4\u6CD5\u7D14\u624B\u5DE5\u68D5\u6ADA\u6930\u7CD6 (Gula Melaka)",
      en: "Authentic 100% Pure Gula Melaka (Malacca Palm Sugar)",
      ms: "Gula Melaka Asli Kelapa Tulen",
      ja: "\u30DE\u30E9\u30C3\u30AB\u7279\u7523\u30FB\u6700\u9AD8\u7D1A\u7D14\u30D1\u30FC\u30E0\u30B7\u30E5\u30AC\u30FC\uFF08\u30B0\u30E9\u30FB\u30DE\u30E9\u30C3\u30AB\uFF09",
      ko: "\uB9D0\uB77C\uCE74 \uC815\uD1B5 100% \uC21C\uC218 \uC57C\uC790 \uD751\uB2F9 (\uAD74\uB77C \uB9D0\uB77C\uCE74)"
    },
    malayName: "Gula Melaka",
    category: "Natural Sweetener",
    description: {
      "zh-TW": "\u63A1\u96C6\u6930\u5B50\u82B1\u82DE\u7684\u7518\u751C\u82B1\u871C\uFF0C\u5728\u67F4\u706B\u5927\u9435\u944A\u4E2D\u6162\u71AC\u6578\u5C0F\u6642\u81F3\u6FC3\u7A20\uFF0C\u5012\u5165\u7AF9\u7B52\u51B7\u537B\u6210\u5713\u67F1\u78DA\u3002\u8CEA\u5730\u9B06\u8106\u67D4\u6ED1\uFF0C\u6563\u767C\u5929\u7136\u7159\u71FB\u7126\u7CD6\u3001\u5976\u6CB9\u7CD6\u679C\u8207\u6930\u5976\u6E05\u9999\u3002\u88FD\u4F5C Cendol \u8207\u9999\u862D\u5A18\u60F9\u7CD5\uFF08Kuih\uFF09\u4E0D\u53EF\u6216\u7F3A\uFF01",
      en: "Tapped from the sweet sap of coconut flower blossoms and slow-cooked in open woks over wood fires. Packed into bamboo cylinders. Deep butterscotch, smoky caramel and coconut nectar fragrance.",
      ms: "Dihasilkan daripada nira kelapa segar yang dimasak perlahan atas dapur kayu arang. Harum karamel asap dan kaya lemak manis semulajadi.",
      ja: "\u30B3\u30B3\u30E4\u30B7\u306E\u82B1\u871C\u3092\u85AA\u706B\u3067\u4F55\u6642\u9593\u3082\u716E\u8A70\u3081\u3066\u7AF9\u7B52\u3067\u56FA\u3081\u305F\u4F1D\u7D71\u9ED2\u7CD6\u3002\u6FC3\u539A\u306A\u30AD\u30E3\u30E9\u30E1\u30EB\u3068\u30B9\u30E2\u30FC\u30AD\u30FC\u306A\u30B3\u30AF\u304C\u6D0B\u83D3\u5B50\u306E\u9ED2\u7CD6\u3068\u306F\u4E00\u7DDA\u3092\u753B\u3057\u307E\u3059\u3002",
      ko: "\uC57C\uC790\uB098\uBB34 \uAF43\uC999\uC744 \uBC1B\uC544 \uC7A5\uC791\uBD88\uC5D0 \uC624\uB79C \uC2DC\uAC04 \uC878\uC5EC \uB300\uB098\uBB34 \uD2C0\uC5D0 \uAD73\uD78C \uC804\uD1B5 \uB2F9. \uC2A4\uBAA8\uD0A4\uD55C \uCE90\uB7EC\uBA5C\uACFC \uCF54\uCF54\uB11B\uC758 \uACE0\uAE09\uC2A4\uB7EC\uC6B4 \uB2E8\uB9DB\uC744 \uC790\uB791\uD569\uB2C8\uB2E4."
    },
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
    importance: "essential",
    priceEstimate: "$6.99 / 400g (block)",
    substituteTip: {
      "zh-TW": "\u61C9\u6025\u66FF\u4EE3\uFF1A\u6C96\u7E69\u7D14\u9ED1\u7CD6\u78DA 1:1\uFF0C\u6216\u6DF1\u8272\u9ED1\u7CD6 (Dark Brown Sugar) \u52A0\u4E0A 1 \u6EF4\u9999\u8349\u7CBE\u3002",
      en: "Emergency sub: Okinawa pure brown sugar 1:1, or unrefined muscovado / dark brown sugar.",
      ms: "Gantian kecemasan: Gula kabung, gula merah gelap atau gula perang muscovado.",
      ja: "\u4EE3\u7528\u6848\uFF1A\u6C96\u7E04\u7523\u7D14\u9ED2\u7CD6 1:1\u3001\u307E\u305F\u306F\u672A\u7CBE\u88FD\u306E\u30E2\u30B9\u30B3\u30D0\u30C9\u7CD6\u3084\u6FC3\u3044\u9ED2\u7802\u7CD6\u3002",
      ko: "\uB300\uCCB4 \uBC29\uBC95: \uC624\uD0A4\uB098\uC640 \uD751\uB2F9 \uBE14\uB85D 1:1, \uB610\uB294 \uBE44\uC815\uC81C \uBA38\uC2A4\uCF54\uBC14\uB3C4 \uD751\uC124\uD0D5."
    },
    retailerLinks: [
      { name: "Amazon Prime", url: "https://www.amazon.com/s?k=Gula+Melaka" }
    ]
  },
  // 6. Santan 鮮榨純椰漿
  {
    id: "santan",
    name: {
      "zh-TW": "\u7279\u6FC3\u9BAE\u69A8\u7D14\u6930\u6F3F (Santan Kelapa / Ayam Brand)",
      en: "Ayam Brand / Kara Pure Coconut Cream & Milk (Santan)",
      ms: "Santan Kelapa Pekat Asli",
      ja: "\u30A2\u30E4\u30E0\u30D6\u30E9\u30F3\u30C9 / \u30AB\u30E9 \u9AD8\u6FC3\u5EA6\u30B3\u30B3\u30CA\u30C3\u30C4\u30DF\u30EB\u30AF\uFF08\u30B5\u30F3\u30BF\u30F3\uFF09",
      ko: "\uC544\uC58C \uBE0C\uB79C\uB4DC / \uCE74\uB77C \uC9C4\uD55C \uC21C\uC218 \uCF54\uCF54\uB11B \uBC00\uD06C (\uC0B0\uD0C4)"
    },
    malayName: "Santan Pekat",
    category: "Dairy Alternative",
    description: {
      "zh-TW": "\u5927\u99AC\u7F8E\u98DF\u7684\u6EAB\u67D4\u57FA\u77F3\u3002\u512A\u8CEA\u8001\u6930\u8089\u7D93\u7814\u78E8\u521D\u9053\u58D3\u69A8\u51FA\u7684\u6FC3\u6930\u6F3F\uFF08Santan Pati\uFF09\uFF0C\u6CB9\u8102\u8C50\u5BCC\u9187\u9999\u3002\u5F9E\u6930\u6F3F\u98EF\u3001\u4EC1\u7576\u725B\u8089\u5230\u53FB\u6C99\u8207\u714E\u854A\uFF0C\u5168\u9760\u5176\u7D72\u6ED1\u5976\u9999\u4E2D\u548C\u9999\u6599\u7684\u525B\u731B\u3002",
      en: "The rich culinary spine of Malaysia. First-press coconut extract brimming with natural plant fats. Imparts velvety richness that rounds off fiery curries, laksa, and nasi lemak.",
      ms: "Pati santan perahan pertama yang pekat dan berlemak manis. Mengimbangi kepedasan gulai, rendang dan menambah kelazatan nasi lemak.",
      ja: "\u30DE\u30EC\u30FC\u6599\u7406\u306E\u3059\u3079\u3066\u306E\u30D9\u30FC\u30B9\u3068\u306A\u308B\u30B3\u30B3\u30CA\u30C3\u30C4\u306E\u4E00\u756A\u643E\u308A\u679C\u6C41\u3002\u6FC3\u539A\u306A\u6CB9\u5206\u3068\u7518\u307F\u304C\u3001\u30B9\u30D1\u30A4\u30B7\u30FC\u306A\u30EB\u30F3\u30C0\u30F3\u3084\u30E9\u30AF\u30B5\u306B\u307E\u308D\u3084\u304B\u3055\u3092\u4E0E\u3048\u307E\u3059\u3002",
      ko: "\uC2E0\uC120\uD55C \uCF54\uCF54\uB11B\uC744 \uCC98\uC74C \uCC29\uC999\uD55C \uC9C4\uD55C \uBC00\uD06C. \uB098\uC2DC\uB808\uB9C9 \uBC25\uC758 \uC724\uAE30\uC640 \uB77D\uC0AC, \uB978\uB2F9 \uCEE4\uB9AC\uC758 \uB9E4\uC6B4\uB9DB\uC744 \uBD80\uB4DC\uB7FD\uAC8C \uAC10\uC2F8\uC90D\uB2C8\uB2E4."
    },
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    importance: "essential",
    priceEstimate: "$2.99 / 400ml (tetra pack / can)",
    substituteTip: {
      "zh-TW": "\u66FF\u4EE3\u5EFA\u8B70\uFF1A\u8ACB\u8CFC\u8CB7\u8102\u80AA\u542B\u91CF\u9AD8\u65BC 18% \u7684\u7D14\u6930\u5976 (Coconut Cream)\uFF0C\u907F\u514D\u4F7F\u7528\u7A00\u91CB\u7684\u6930\u5B50\u98F2\u6599\u6216\u8F15\u5361\u6930\u5976\u3002",
      en: "Buy high-fat Coconut Cream (>18% fat). Avoid low-fat coconut beverages which curdle upon boiling.",
      ms: "Pilih santan berlemak tinggi (>18%). Elakkan minuman santan cair yang mudah pecah minyak.",
      ja: "\u8102\u80AA\u520618%\u4EE5\u4E0A\u306E\u30B3\u30B3\u30CA\u30C3\u30C4\u30AF\u30EA\u30FC\u30E0\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002\u8584\u3044\u98F2\u6599\u7528\u30B3\u30B3\u30CA\u30C3\u30C4\u30DF\u30EB\u30AF\u306F\u5206\u96E2\u3059\u308B\u305F\u3081\u4E0D\u53EF\u3002",
      ko: "\uC9C0\uBC29 \uD568\uB7C9 18% \uC774\uC0C1\uC758 \uC21C\uC218 \uCF54\uCF54\uB11B \uD06C\uB9BC/\uBC00\uD06C\uB97C \uC120\uD0DD\uD558\uC138\uC694. \uBB3D\uC740 \uC74C\uB8CC\uC6A9 \uCF54\uCF54\uB11B \uBC00\uD06C\uB294 \uB053\uC774\uBA74 \uBD84\uB9AC\uB429\uB2C8\uB2E4."
    },
    retailerLinks: [
      { name: "Amazon Prime", url: "https://www.amazon.com/s?k=Ayam+Brand+Coconut+Milk" }
    ]
  },
  // 7. Daun Pandan 天然香蘭葉
  {
    id: "daun-pandan",
    name: {
      "zh-TW": "\u5929\u7136\u82B3\u9999\u65B0\u9BAE\u9999\u862D\u8449 (\u73ED\u862D\u8449 / Daun Pandan)",
      en: "Fresh / Frozen Screwpine Pandan Leaves (Daun Pandan)",
      ms: "Daun Pandan Wangi Segar",
      ja: "\u751F\u30FB\u51B7\u51CD\u30D1\u30F3\u30C0\u30F3\u30EA\u30FC\u30D5\uFF08\u30CB\u30AA\u30A4\u30BF\u30B3\u30CE\u30AD\u30FB\u6771\u6D0B\u306E\u30D0\u30CB\u30E9\uFF09",
      ko: "\uC2E0\uC120 / \uB0C9\uB3D9 \uD310\uB2E8\uC78E (\uB3D9\uC591\uC758 \uBC14\uB2D0\uB77C / \uD310\uB2E8 \uB9AC\uD504)"
    },
    malayName: "Daun Pandan",
    category: "Fresh Herb",
    description: {
      "zh-TW": "\u88AB\u8B7D\u70BA\u300C\u6771\u65B9\u9999\u8349\u300D\uFF01\u8449\u7247\u6253\u7D50\u8207\u767D\u7C73\u3001\u6930\u6F3F\u4E00\u540C\u716E\u98EF\uFF08Nasi Lemak\uFF09\uFF0C\u80FD\u6563\u767C\u7121\u8207\u502B\u6BD4\u7684\u9752\u8349\u82B1\u9999\uFF1B\u69A8\u6C41\u66F4\u53EF\u8403\u53D6\u51FA\u5929\u7136\u78A7\u7389\u7FE0\u7DA0\u8272\u6FA4\u8207\u9999\u6C23\uFF0C\u662F\u5357\u6D0B\u751C\u54C1\u5A18\u60F9\u7CD5\u7684\u9748\u9B42\u3002",
      en: 'Known as the "Vanilla of the East". Tied into knots and boiled with rice for Nasi Lemak, or blitzed and strained into natural emerald green pandan juice for kuih and cakes.',
      ms: 'Digelar "Vanila Timur". Disimpul rapi dan dimasak bersama nasi lemak atau dikisar untuk ekstrak pewarna hijau dan aroma kuih-muih.',
      ja: "\u300C\u6771\u6D0B\u306E\u30D0\u30CB\u30E9\u300D\u3068\u79F0\u3055\u308C\u308B\u71B1\u5E2F\u30CF\u30FC\u30D6\u3002\u7D50\u3093\u3067\u7C73\u3084\u30B3\u30B3\u30CA\u30C3\u30C4\u30DF\u30EB\u30AF\u3068\u4E00\u7DD2\u306B\u708A\u304D\u8FBC\u307F\u3001\u83EF\u3084\u304B\u306A\u7518\u3044\u9999\u308A\u3092\u307E\u3068\u308F\u305B\u307E\u3059\u3002\u7D5E\u308A\u6C41\u306F\u7FE1\u7FE0\u8272\u306E\u5929\u7136\u7740\u8272\u6599\u306B\u3002",
      ko: "\uB3D9\uC591\uC758 \uBC14\uB2D0\uB77C\uB85C \uBD88\uB9AC\uB294 \uC2DD\uC7AC\uB8CC! \uC78E\uC744 \uBB36\uC5B4 \uBC25\uC744 \uC9C0\uC73C\uBA74 \uADF8\uC73D\uD558\uACE0 \uD5A5\uAE0B\uD55C \uD5A5\uC774 \uBC30\uC5B4\uB4E4\uBA70 \uC999\uC744 \uB0B4\uC5B4 \uCD08\uB85D\uBE5B \uC804\uD1B5 \uB5A1\uC744 \uB9CC\uB4ED\uB2C8\uB2E4."
    },
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    importance: "essential",
    priceEstimate: "$3.49 / bunch (fresh / frozen)",
    substituteTip: {
      "zh-TW": "\u61C9\u6025\u66FF\u4EE3\uFF1A\u5E02\u552E\u5929\u7136\u6FC3\u7E2E\u9999\u862D\u7CBE (Natural Pandan Paste) 1/2 \u8336\u5319\uFF0C\u6216\u51B7\u51CD\u9999\u862D\u8449\u3002",
      en: "Emergency sub: 1/2 tsp natural pandan extract paste or frozen thawed leaves.",
      ms: "Gantian kecemasan: 1/2 sk pes pandan emulco atau daun pandan sejuk beku.",
      ja: "\u4EE3\u7528\u6848\uFF1A\u5929\u7136\u30D1\u30F3\u30C0\u30F3\u30A8\u30AD\u30B9\uFF08\u30DA\u30FC\u30B9\u30C8\uFF09\u5C0F\u3055\u30581/2\u3001\u307E\u305F\u306F\u51B7\u51CD\u30D1\u30F3\u30C0\u30F3\u30EA\u30FC\u30D5\u3002",
      ko: "\uB300\uCCB4 \uBC29\uBC95: \uCC9C\uC5F0 \uD310\uB2E8 \uCD94\uCD9C \uD398\uC774\uC2A4\uD2B8 1/2\uC791\uC740\uC220 \uB610\uB294 \uB0C9\uB3D9 \uD310\uB2E8\uC78E."
    },
    retailerLinks: [
      { name: "Amazon Prime", url: "https://www.amazon.com/s?k=Pandan+Leaves" }
    ]
  },
  // 8. Asam Jawa 羅望子酸膏
  {
    id: "asam-jawa",
    name: {
      "zh-TW": "\u7279\u7D1A\u5929\u7136\u7D14\u7F85\u671B\u5B50\u9178\u818F (\u9178\u5B50 / Asam Jawa)",
      en: "Pure Wet Tamarind Paste / Pulp (Asam Jawa)",
      ms: "Asam Jawa Asli Tanpa Biji",
      ja: "\u30BF\u30DE\u30EA\u30F3\u30C9\u679C\u8089\u30DA\u30FC\u30B9\u30C8\uFF08\u30A2\u30B5\u30E0\u30FB\u30B8\u30E3\u30EF\uFF09",
      ko: "\uC21C\uC218 \uD0C0\uB9C8\uB9B0\uB4DC \uD384\uD504 \uD398\uC774\uC2A4\uD2B8 (\uC544\uC0BC \uC790\uC640)"
    },
    malayName: "Asam Jawa",
    category: "Sour Agent",
    description: {
      "zh-TW": "\u6AB3\u57CE\u4E9E\u53C3\u53FB\u6C99\uFF08Asam Laksa\uFF09\u9178\u9999\u958B\u80C3\u3001\u751F\u6D25\u89E3\u81A9\u7684\u79D8\u5BC6\uFF01\u5C07\u719F\u900F\u7F85\u671B\u5B50\u679C\u8089\u52A0\u6EAB\u6C34\u6413\u6D17\u904E\u6FFE\u51FA\u6FC3\u6C41\uFF0C\u5E36\u6709\u9187\u548C\u7684\u679C\u9178\u8207\u5929\u7136\u5FAE\u751C\uFF0C\u9060\u52DD\u4EBA\u5DE5\u918B\u7684\u523A\u6FC0\u3002",
      en: "The tangy fruit backbone of Penang Asam Laksa and sour curries. Knead tamarind pulp in warm water and strain to extract rich, fruity, deeply rounded natural acidity.",
      ms: "Penyumbang rasa masam menyegarkan dalam kuah Asam Laksa dan asam pedas. Diramas dengan air suam untuk mengeluarkan pati masam semulajadi.",
      ja: "\u30DA\u30CA\u30F3\u30FB\u30A2\u30C3\u30B5\u30E0\u30E9\u30AF\u30B5\u306E\u723D\u3084\u304B\u306A\u9178\u5473\u306E\u7D20\u3002\u679C\u8089\u3092\u306C\u308B\u307E\u6E6F\u3067\u63C9\u307F\u51FA\u3057\u3066\u4F7F\u3046\u3001\u30D5\u30EB\u30FC\u30C6\u30A3\u30FC\u3067\u307E\u308D\u3084\u304B\u306A\u5929\u7136\u306E\u9178\u5473\u3002",
      ko: "\uD398\uB0AD \uC544\uC0BC \uB77D\uC0AC\uC758 \uC2DC\uC6D0\uD558\uACE0 \uAC1C\uC6B4\uD55C \uC0B0\uBBF8\uB97C \uB2F4\uB2F9\uD558\uB294 \uD575\uC2EC \uACFC\uC77C \uD398\uC774\uC2A4\uD2B8. \uC778\uC704\uC801\uC778 \uC2DD\uCD08\uC640 \uB2EC\uB9AC \uAE4A\uACE0 \uBD80\uB4DC\uB7EC\uC6B4 \uACFC\uC77C \uC0B0\uBBF8\uB97C \uB0C5\uB2C8\uB2E4."
    },
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    importance: "essential",
    priceEstimate: "$3.50 / 400g (block)",
    substituteTip: {
      "zh-TW": "\u61C9\u6025\u66FF\u4EE3\uFF1A\u5E02\u552E\u6CF0\u570B\u6FC3\u7E2E\u7F85\u671B\u5B50\u91AC 1:1\uFF0C\u6216\u65B0\u9BAE\u9752\u6AB8\u6AAC\u6C41\u52A0\u5C11\u8A31\u860B\u679C\u918B\u3002",
      en: "Emergency sub: Thai concentrated tamarind sauce 1:1, or fresh lime juice + splash of apple cider vinegar.",
      ms: "Gantian kecemasan: Pes asam jawa segera Thai 1:1, atau perahan limau nipis + cuka epal.",
      ja: "\u4EE3\u7528\u6848\uFF1A\u5E02\u8CA9\u306E\u30BF\u30A4\u7523\u30BF\u30DE\u30EA\u30F3\u30C9\u30DA\u30FC\u30B9\u30C8 1:1\u3001\u307E\u305F\u306F\u30E9\u30A4\u30E0\u679C\u6C41\uFF0B\u308A\u3093\u3054\u9162\u5C11\u3005\u3002",
      ko: "\uB300\uCCB4 \uBC29\uBC95: \uC2DC\uD310 \uD0DC\uAD6D\uC0B0 \uD0C0\uB9C8\uB9B0\uB4DC \uC18C\uC2A4 1:1 \uB300\uCCB4, \uB610\uB294 \uC0DD\uB77C\uC784\uC999 + \uC0AC\uACFC\uC2DD\uCD08 \uC57D\uAC04."
    },
    retailerLinks: [
      { name: "Amazon Prime", url: "https://www.amazon.com/s?k=Asam+Jawa+Tamarind" }
    ]
  },
  // 9. Daun Kesum 叻沙葉
  {
    id: "daun-kesum",
    name: {
      "zh-TW": "\u5927\u99AC\u53FB\u6C99\u8449 / \u8D8A\u5357\u9999\u83DC (\u6C34\u84FC / Daun Kesum)",
      en: "Vietnamese Coriander / Laksa Leaf (Daun Kesum / Rau Ram)",
      ms: "Daun Kesum Segar Harum",
      ja: "\u30E9\u30AF\u30B5\u30EA\u30FC\u30D5 / \u30D9\u30C8\u30CA\u30E0\u30B3\u30EA\u30A2\u30F3\u30C0\u30FC\uFF08\u30C0\u30A6\u30F3\u30FB\u30AF\u30B9\u30E0\uFF09",
      ko: "\uB77D\uC0AC \uB9AC\uD504 / \uBCA0\uD2B8\uB0A8 \uACE0\uC218 (\uB2E4\uC6B4 \uD06C\uC228)"
    },
    malayName: "Daun Kesum",
    category: "Fresh Herb",
    description: {
      "zh-TW": "\u4E9E\u53C3\u53FB\u6C99\uFF08Asam Laksa\uFF09\u7684\u7368\u5BB6\u9748\u9B42\u8349\u672C\uFF01\u5E36\u6709\u5F37\u70C8\u7684\u6AB8\u6AAC\u8F9B\u9999\u8207\u5FAE\u9EBB\u8584\u8377\u80E1\u6912\u8ABF\uFF0C\u5165\u9B5A\u6E6F\u71AC\u716E\u80FD\u5FB9\u5E95\u53BB\u9664\u8165\u5473\u4E26\u8CE6\u4E88\u6E6F\u982D\u6E05\u723D\u56DE\u7518\u7684\u9AD8\u7D1A\u9999\u6C23\u3002",
      en: "The definitive pungent herb of Penang Asam Laksa. Blends vibrant citrus mint pepper notes that neutralize fishiness and elevate the mackerel broth.",
      ms: "Daun herba wajib untuk kuah Asam Laksa dan Asam Pedas. Mempunyai aroma sitrus berangin yang menghilangkan bau hanyir ikan.",
      ja: "\u30A2\u30C3\u30B5\u30E0\u30E9\u30AF\u30B5\u306B\u7D76\u5BFE\u306B\u6B20\u304B\u305B\u306A\u3044\u30CF\u30FC\u30D6\u3002\u30EC\u30E2\u30F3\u306E\u3088\u3046\u306A\u6E05\u6DBC\u611F\u3068\u30D4\u30EA\u30C3\u3068\u3057\u305F\u80E1\u6912\u306E\u3088\u3046\u306A\u9999\u308A\u3067\u9B5A\u306E\u751F\u81ED\u3055\u3092\u5B8C\u5168\u306B\u6D88\u3057\u53BB\u308A\u307E\u3059\u3002",
      ko: "\uC544\uC0BC \uB77D\uC0AC\uC758 \uB3C5\uBCF4\uC801\uC778 \uC2DC\uADF8\uB2C8\uCC98 \uD5C8\uBE0C. \uC0C1\uD07C\uD55C \uC2DC\uD2B8\uB7EC\uC2A4\uC640 \uBBFC\uD2B8 \uD398\uD37C \uD5A5\uC774 \uC5B4\uC6B0\uB7EC\uC838 \uC0DD\uC120\uC758 \uBE44\uB9B0\uB0B4\uB97C \uC644\uBCBD\uD788 \uC7A1\uC544\uC90D\uB2C8\uB2E4."
    },
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    importance: "recommended",
    priceEstimate: "$2.50 / bunch",
    substituteTip: {
      "zh-TW": "\u61C9\u6025\u66FF\u4EE3\uFF1A\u65B0\u9BAE\u8584\u8377\u8449 (Fresh Mint) + \u65B0\u9BAE\u9999\u83DC (Cilantro) \u5404\u534A\uFF0C\u518D\u52A0\u5C11\u8A31\u6AB8\u6AAC\u76AE\u788E\u3002",
      en: "Emergency sub: 50% Fresh Mint + 50% Fresh Cilantro with a pinch of lime zest.",
      ms: "Gantian kecemasan: Daun pudina segar campur daun ketumbar serta parutan kulit limau nipis.",
      ja: "\u4EE3\u7528\u6848\uFF1A\u751F\u30DF\u30F3\u30C8\u306E\u8449\uFF0B\u751F\u30D1\u30AF\u30C1\u30FC\u3092\u534A\u3005\u3067\u6DF7\u305C\u3001\u30E9\u30A4\u30E0\u306E\u76AE\u306E\u3059\u308A\u304A\u308D\u3057\u3092\u5C11\u3005\u52A0\u3048\u308B\u3002",
      ko: "\uB300\uCCB4 \uBC29\uBC95: \uC2E0\uC120\uD55C \uBBFC\uD2B8\uC78E 50% + \uACE0\uC218 50%\uB97C \uC11E\uACE0 \uB77C\uC784 \uC81C\uC2A4\uD2B8\uB97C \uC0B4\uC9DD \uCCA8\uAC00."
    },
    retailerLinks: [
      { name: "Amazon Prime", url: "https://www.amazon.com/s?k=Laksa+Leaves" }
    ]
  },
  // 10. 巴生正宗肉骨茶藥膳湯包
  {
    id: "bkt-spices",
    name: {
      "zh-TW": "\u99AC\u4F86\u897F\u4E9E\u5DF4\u751F\u6B63\u5B97 A1 / \u5947\u9999\u8089\u9AA8\u8336\u85E5\u81B3\u6EF7\u5305",
      en: "A1 / Kee Hiong Traditional Klang Bak Kut Teh Herbal Spices",
      ms: "Rempah Sup Bak Kut Teh Herba Asli Klang",
      ja: "A1 / \u5947\u9999 \u30AF\u30E9\u30F3\u6B63\u5B97\u30CF\u30FC\u30D6\u30D0\u30AF\u30C6\u30FC\u716E\u8FBC\u307F\u30B9\u30D1\u30A4\u30B9\u30D1\u30C3\u30AF",
      ko: "A1 / \uAE30\uD765 \uC815\uD1B5 \uD074\uB791 \uD55C\uBC29 \uBC14\uCFE0\uD14C \uC57D\uC7AC \uD2F0\uBC31"
    },
    malayName: "Rempah Bak Kut Teh",
    category: "Herbal Spice Pack",
    description: {
      "zh-TW": "\u767E\u5E74\u5DF4\u751F\u78BC\u982D\u914D\u65B9\uFF01\u5167\u542B\u7576\u6B78\u3001\u5DDD\u828E\u3001\u7389\u7AF9\u3001\u7518\u8349\u3001\u767D\u80E1\u6912\u3001\u6842\u76AE\u3001\u516B\u89D2\u8207\u4E01\u9999\u3002\u6574\u5305\u514D\u7E41\u7463\u6293\u85E5\uFF0C\u4E1F\u5165\u6EFE\u6C34\u8207\u6574\u9846\u5E36\u76AE\u5927\u849C\u3001\u512A\u8CEA\u6392\u9AA8\u6162\u71C9 1 \u5C0F\u6642\uFF0C\u7ACB\u523B\u98C4\u6563\u51FA\u6DF1\u9083\u6FC3\u90C1\u7684\u5357\u6D0B\u85E5\u81B3\u7CBE\u83EF\u3002",
      en: "Authentic 100-year Klang recipe. Packed with angelica sinensis (dang gui), Solomon\u2019s seal (yu zhu), licorice root, white peppercorns, cinnamon, star anise and cloves. Simply simmer with whole garlic bulbs and pork ribs.",
      ms: "Resipi warisan pelabuhan Klang. Mengandungi herba tradisional terpilih untuk sup rusuk yang pekat berkhasiat.",
      ja: "\u30DE\u30EC\u30FC\u30B7\u30A2\u30FB\u30AF\u30E9\u30F3\u76F4\u4F1D\u306E\u672C\u683C\u6F22\u65B9\u30D1\u30C3\u30AF\u3002\u5F53\u5E30\u3001\u7518\u8349\u3001\u30B9\u30BF\u30FC\u30A2\u30CB\u30B9\u3001\u9ED2\u80E1\u6912\u306A\u3069\u304C\u7D76\u5999\u306B\u914D\u5408\u3055\u308C\u3066\u304A\u308A\u3001\u8C5A\u8089\u3068\u30CB\u30F3\u30CB\u30AF\u3068\u4E00\u7DD2\u306B\u716E\u8FBC\u3080\u3060\u3051\u3067\u672C\u5834\u306E\u5473\u306B\u3002",
      ko: "\uBC14\uCFE0\uD14C\uC758 \uBCF8\uACE0\uC7A5 \uD074\uB791\uC758 \uBC31\uB144 \uBE44\uBC95! \uB2F9\uADC0, \uAC10\uCD08, \uD1B5\uB9C8\uB298\uACFC \uD568\uAED8 \uB053\uC5EC\uB0B4\uBA74 \uAE4A\uACE0 \uB530\uB73B\uD55C \uBCF4\uC591\uC2DD \uAD6D\uBB3C\uC774 \uC644\uC131\uB429\uB2C8\uB2E4."
    },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    importance: "essential",
    priceEstimate: "$4.99 / box (2 pouches)",
    substituteTip: {
      "zh-TW": "\u81EA\u8ABF\u4E2D\u85E5\u9999\u6599\u5305\uFF1A\u7576\u6B78\u7247 8g\u3001\u5DDD\u828E 4g\u3001\u7389\u7AF9 12g\u3001\u7518\u8349 4g\u3001\u516B\u89D2 2 \u9846\u3001\u6842\u76AE 1 \u652F\u3001\u767D\u80E1\u6912\u7C92 1 \u5927\u5319\uFF08\u62CD\u788E\uFF09\u3002",
      en: "DIY herb blend: 8g dang gui, 4g chuan xiong, 12g solomon\u2019s seal, 4g licorice, 2 star anise, 1 cinnamon stick, 1 tbsp crushed white peppercorns.",
      ms: "Campuran herba sendiri: Dang gui 8g, chuan xiong 4g, bunga lawang 2 kuntum, kulit kayu manis 1 batang, lada putih hancur 1 sb.",
      ja: "\u81EA\u5BB6\u88FD\u30CF\u30FC\u30D6\u8ABF\u5408\uFF1A\u5F53\u5E308g\u3001\u5DDD\u828E4g\u3001\u7389\u7AF912g\u3001\u7518\u83494g\u3001\u30B9\u30BF\u30FC\u30A2\u30CB\u30B92\u500B\u3001\u30B7\u30CA\u30E2\u30F3\u30B9\u30C6\u30A3\u30C3\u30AF1\u672C\u3001\u7815\u3044\u305F\u767D\u80E1\u6912\u5927\u3055\u30581\u3002",
      ko: "\uC9C1\uC811 \uC870\uD569 \uC2DC: \uB2F9\uADC0 8g, \uCC9C\uAD81 4g, \uC625\uC8FD 12g, \uAC10\uCD08 4g, \uD314\uAC01 2\uAC1C, \uACC4\uD53C 1\uAC1C, \uC73C\uAE6C \uBC31\uD6C4\uCD94 1\uD070\uC220."
    },
    retailerLinks: [
      { name: "Amazon Prime", url: "https://www.amazon.com/s?k=A1+Bak+Kut+Teh" }
    ]
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  pantryProducts
});
