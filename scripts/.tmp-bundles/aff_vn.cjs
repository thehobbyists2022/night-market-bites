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

// ../Vietnamese Food Master/src/config/affiliateConfig.ts
var affiliateConfig_exports = {};
__export(affiliateConfig_exports, {
  AFFILIATE_CONFIG: () => AFFILIATE_CONFIG,
  getAmazonSearchUrl: () => getAmazonSearchUrl
});
module.exports = __toCommonJS(affiliateConfig_exports);
var AFFILIATE_CONFIG = {
  amazon: {
    trackingId: "vietfoodmaster-20",
    enabled: true,
    disclosureText: {
      "zh-TW": "\u4F5C\u70BA Amazon \u806F\u5408\u7279\u7D04\u63A8\u5EE3\u5925\u4F34\uFF0C\u672C\u61C9\u7528\u7A0B\u5F0F\u53EF\u80FD\u81EA\u7B26\u5408\u689D\u4EF6\u7684\u63A1\u8CFC\u4E2D\u8CFA\u53D6\u4F63\u91D1\u3002",
      "en": "As an Amazon Associate, I earn from qualifying purchases.",
      "vi": "L\xE0 \u0111\u1ED1i t\xE1c li\xEAn k\u1EBFt c\u1EE7a Amazon, \u1EE9ng d\u1EE5ng c\xF3 th\u1EC3 nh\u1EADn hoa h\u1ED3ng t\u1EEB c\xE1c giao d\u1ECBch mua \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n.",
      "ja": "Amazon\u30A2\u30BD\u30B7\u30A8\u30A4\u30C8\u3068\u3057\u3066\u3001\u9069\u683C\u8CA9\u58F2\u306B\u3088\u308A\u53CE\u5165\u3092\u5F97\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002",
      "ko": "Amazon \uC5B4\uC18C\uC2DC\uC5D0\uC774\uD2B8\uB85C\uC11C \uC801\uACA9 \uAD6C\uB9E4\uB97C \uD1B5\uD574 \uC18C\uC815\uC758 \uC218\uC218\uB8CC\uB97C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    }
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
  getAmazonSearchUrl
});
