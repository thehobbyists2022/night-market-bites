export const COUNTRY_ORDER = ['tw', 'th', 'jp', 'kr', 'my', 'ph', 'vn'] as const;

export type CountryCode = (typeof COUNTRY_ORDER)[number];

export type Language =
  | 'en'
  | 'zh-TW'
  | 'ja'
  | 'ko'
  | 'th'
  | 'vi'
  | 'fil'
  | 'ms';

export type MultilingualText = Partial<Record<Language, string>>;

/**
 * Country recipe: the original shape from each source app is preserved verbatim
 * (so no content is lost) and enriched with:
 *  - country: ISO-style code + display server
 *  - rewritten asset paths (all images live under /images/<country>/...)
 * Anything the source app had that does not collide with the shared core is
 * simply still present on the object; UI reads through typed accessors.
 */
export interface CountryRecipe {
  id: string;
  slug: string;
  country: CountryCode;
  title: MultilingualText;
  subtitle: MultilingualText;
  tagline?: MultilingualText;
  heroImage: string;
  difficulty: string;
  prepTimeMinutes?: number;
  cookTimeMinutes: number;
  defaultServings?: number;
  caloriesPerServing?: number;
  category: string;
  dietaryTags: string[];
  supportedCookware: string[];
  culture: {
    nativeName?: string;
    nativePhonetics?: string;
    audioPronunciationText?: string;
    originRegion?: MultilingualText;
    historyStory?: MultilingualText;
    [key: string]: unknown;
  };
  ingredients: unknown[];
  steps: unknown[];
  [key: string]: unknown;
}
