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

// ../Malaysia Food Master/src/config/affiliateConfig.ts
var affiliateConfig_exports = {};
__export(affiliateConfig_exports, {
  AFFILIATE_CONFIG: () => AFFILIATE_CONFIG,
  AFFILIATE_PARTNERS: () => AFFILIATE_PARTNERS,
  getAmazonSearchUrl: () => getAmazonSearchUrl
});
module.exports = __toCommonJS(affiliateConfig_exports);
var AFFILIATE_PARTNERS = [
  {
    name: "Amazon Prime Grocery",
    badge: "\u5168\u7403\u5FEB\u901F\u914D\u9001",
    url: "https://www.amazon.com",
    description: "\u65B9\u4FBF\u5FEB\u6377\u63A1\u8CFC\u5927\u99AC\u8001\u5B57\u865F\u751C\u91AC\u6CB9\u3001\u4EC1\u7576\u5496\u54E9\u91AC\u3001\u8089\u9AA8\u8336\u6599\u5305\u8207\u99AC\u516D\u7532\u7D14\u6930\u7CD6\u3002"
  }
];
var AFFILIATE_CONFIG = {
  amazon: {
    trackingId: "myfoodmaster-20",
    enabled: true,
    disclosureText: {
      "zh-TW": "\u4F5C\u70BA Amazon \u7279\u7D04\u63A8\u5EE3\u5925\u4F34\uFF0C\u672C\u61C9\u7528\u7A0B\u5F0F\u53EF\u80FD\u81EA\u7B26\u5408\u689D\u4EF6\u7684\u63A1\u8CFC\u4E2D\u8CFA\u53D6\u4F63\u91D1\u3002",
      en: "As an Amazon Associate, I earn from qualifying purchases.",
      ms: "Sebagai Rakan Kongsi Amazon, aplikasi ini mungkin menerima komisen daripada pembelian yang layak.",
      ja: "Amazon\u30A2\u30BD\u30B7\u30A8\u30A4\u30C8\u3068\u3057\u3066\u3001\u9069\u683C\u8CA9\u58F2\u306B\u3088\u308A\u53CE\u5165\u3092\u5F97\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002",
      ko: "Amazon \uC5B4\uC18C\uC2DC\uC5D0\uC774\uD2B8\uB85C\uC11C \uC801\uACA9 \uAD6C\uB9E4\uB97C \uD1B5\uD574 \uC18C\uC815\uC758 \uC218\uC218\uB8CC\uB97C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    }
  },
  disclosure: {
    "zh-TW": "\u4F5C\u70BA Amazon \u7279\u7D04\u63A8\u5EE3\u5925\u4F34\uFF0C\u672C\u61C9\u7528\u7A0B\u5F0F\u53EF\u80FD\u81EA\u7B26\u5408\u689D\u4EF6\u7684\u63A1\u8CFC\u4E2D\u8CFA\u53D6\u5FAE\u8584\u4F63\u91D1\uFF0C\u6240\u5F97\u5C07\u5168\u6578\u7528\u65BC\u652F\u6301\u98DF\u8B5C\u7814\u767C\u8207\u4F3A\u670D\u5668\u7DAD\u8B77\u3002",
    en: "As an Amazon Associate, we may earn commissions from qualifying purchases to support authentic recipe development.",
    ms: "Sebagai Rakan Kongsi Amazon, aplikasi ini mungkin menerima komisen daripada pembelian yang layak.",
    ja: "Amazon\u30A2\u30BD\u30B7\u30A8\u30A4\u30C8\u3068\u3057\u3066\u3001\u9069\u683C\u8CA9\u58F2\u306B\u3088\u308A\u624B\u6570\u6599\u3092\u5F97\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002\u53CE\u76CA\u306F\u3059\u3079\u3066\u672C\u30A2\u30D7\u30EA\u306E\u904B\u55B6\u3068\u30EC\u30B7\u30D4\u958B\u767A\u306B\u5F79\u7ACB\u3066\u3089\u308C\u307E\u3059\u3002",
    ko: "Amazon \uC5B4\uC18C\uC2DC\uC5D0\uC774\uD2B8\uB85C\uC11C \uC801\uACA9 \uAD6C\uB9E4\uB97C \uD1B5\uD574 \uC18C\uC815\uC758 \uC218\uC218\uB8CC\uB97C \uC81C\uACF5\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
  }
};
function getAmazonSearchUrl(keyword) {
  const encoded = encodeURIComponent(keyword.trim());
  if (!AFFILIATE_CONFIG.amazon.enabled || !AFFILIATE_CONFIG.amazon.trackingId) {
    return `https://www.amazon.com/s?k=${encoded}`;
  }
  return `https://www.amazon.com/s?k=${encoded}&tag=${AFFILIATE_CONFIG.amazon.trackingId}`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AFFILIATE_CONFIG,
  AFFILIATE_PARTNERS,
  getAmazonSearchUrl
});
