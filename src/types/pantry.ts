import type { CountryCode, MultilingualText } from './unified';

export interface PantryItem {
  id: string;
  country: CountryCode;
  name: MultilingualText;
  nativeName?: string;
  nativePhonetics?: string;
  category: string;
  image?: string;
  tagline?: MultilingualText;
  description?: MultilingualText;
  amazonKeyword: string;
  amazonUrl: string;
  substituteTip?: string | MultilingualText;
  retailerLinks?: unknown;
  [key: string]: unknown;
}
