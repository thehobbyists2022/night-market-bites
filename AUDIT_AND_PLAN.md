# Night Market Bites — Audit & Migration Plan (Step 1)

> Goal: ONE iOS flagship app combining 7 completed country apps (each already on Google Play).
> The 7 source projects are READ-ONLY inputs. Nothing in them changes.
> Route: Vite + React + Capacitor → GitHub Actions (macos-latest) → App Store Connect.
> Bundle ID: `com.clarityclinicalsolutions.nightmarketbites`（暂定）

## 1. Source inventory (audited 2026-09-16)

| Project | appId | recipe data ts | i18n langs (UI) | recipes |
|---|---|---|---|---|
| Taiwan | com.clarityclinicalsolutions.taiwanbites | 1 (aggregated) | en, zh-TW, ja, ko, vi | ~?（单档案，含全部） |
| ThaiFood Master | com.clarityclinicalsolutions.thaifoodmaster | 20 | en, zh-TW, ja, ko, th | 20 |
| Japan Food Master | com.clarityclinicalsolutions.japanfoodmaster | 21 | en, zh-TW, ja, ko, th | 21 |
| Korean Food Master | com.thehobbyists.koreanfoodmaster | 20 | en, zh-TW, ja, ko, th | 20 |
| Malaysia Food Master | com.clarityclinicalsolutions.malaysiafoodmaster | 19 | en, zh-TW, ja, ko | 19 |
| Filipino Food Master | com.pinoyfoodmaster.app | 17 | en, zh-TW, ja, ko | 17 |
| Vietnamese Food Master | com.clarityclinicalsolutions.vietnamesefoodmaster | 17 | en, zh-TW, ja, ko, vi | 17 |

合计 ≈ 135 recipes。7 国皆同一模板家族（Vite/React/Capacitor，`src/{components,context,data,i18n,types,utils/styles}`）。

## 2. Key findings

1. **Recipe 型別「大体同构、细节异构」。** 核心字段统一：`id、slug、title/subtitle (MultilingualText)、heroImage、difficulty、cookTimeMinutes、category、dietaryTags、ingredients (含 unitMetric/unitUS)、steps、supportedCookware`。
   但每国差异之处：
   - `Category` 字串各自定义（korean: bunsik/fried/…；japan: yakimono/agemono/…）
   - `CookwareType` 各自不同（korean: instantPot/microwave；japan: takoyakiPlate/oven）
   - 文化字段各异：`koreanScript/koreanPhonetics` vs `japaneseKanji/Kana/Romaji`
   - 市场类型各异：`StreetMarketItem` vs `YataiMarketItem`（region 常量不同）
2. **UI i18n：没有任何 App 有 tl（Tagalog）**；vi 只有 Taiwan/Vietnam 两家有 UI 语言。
   → 7 语文案中 **vi、tl 的 UI keys 需新写**（食谱内容 vi 已存在于 Vietnam 资料；tl 需全新）。
3. `MultilingualText` 是所有资料的翻译载体，**食谱内容可直接整合**，文化名称字段抽到统一 `culture` 对象（nativeName/phonetics/romaji）。

## 3. Target architecture decisions

- **统一 Recipe schema（新）**：core recipe + `country` 字段 + 可选的 per-country extras（`culture.nativeName/nativePhonetics/nativeScript`、`marketItem` 通用化）。
- `CookwareType` 采用 **union**：traditional + 各国特有（airFryer/instantPot/microwave/takoyakiPlate/oven/bananaLeaf…），UI 按需渲染。
- `Category` 改为 **per-country tag**，不再两岸共用常量；FilterBar 按「当前国家」显示该国的分类。
- Market Hub 通用化：`NightMarketItem { country, region: string, name, openingHours, etiquette, orderPhrase, meaning }`。
- **Country-first IA**：Night Market 大厅（7 街区）→ 街区页（该国必点 Top3 / 摊位清单 / 攤车故事）→ 摊位=食谱详情 → Focus Cooking → 口袋清单（跨国收藏）。
- **味蕾护照**：每国解锁进度、盖章概念（本地 localStorage）。

## 4. Naming / brand
- App name（≤30）：**Night Market Bites**
- Subtitle（暂）：“7-Country Street Food Guide”
- **刻意避开 “Food Master” 字样**于全系 metadata/截图。
- 视觉：夜市霓虹（深靛 + 霓虹黄/红），全新 icon，不复用旧 burgundy/rose 体系。

## 5. Migration step list（后续 step 每次一个）
2. 建置 scaffold（Vite+React+Tailwind+Capacitor iOS、新绿洲色彩、git first commit）
3. 写 `scripts/merge_recipes.mjs`：从 7 专案 `src/data` 读取 → 转统一 schema → 产出 `src/data/<country>/` TS 资料 + 图片复制清单
4. i18n 组装：抽取 7 专案各语 UI keys → 统一 `translations.ts`；**新写 vi/tl UI 集合**
5. UI：大厅 + 街区页 + 复用吃谱 detail / Focus mode / Pantry clerk card 通用化改造
6. 味蕾护照 + 口袋清单（localStorage）
7. Icon（1024 无 alpha）+ 截图（headless Edge，真实画面）三尺寸
8. docs/ 支援+隐私页（复用模板）、appstore_metadata.md
9. GitHub Actions build_ios.yml（复用），Secrets 复用；ASC 建 App record 后上传
10. 手动检查表 + 送审（强调 unique proposition）

## 6. Risks / notes
- iOS 4.3(a) 记录仍在：flagship 是否过审取决于其真实差异化（品牌名、IA、功能、视觉都换）；绝不可带旧名称/旧 icon 提交。
- tl/vi 译文若我不确定，段落会标注 `SOURCE: draft-LLM` 需要你校对。
- 7 个源专案永不 push 改动。
