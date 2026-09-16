import type { CountryCode, Language, MultilingualText } from '../types/unified';

import { recipes as twRecipes } from '../data/recipes-tw';
import { recipes as thRecipes } from '../data/recipes-th';
import { recipes as jpRecipes } from '../data/recipes-jp';
import { recipes as krRecipes } from '../data/recipes-kr';
import { recipes as myRecipes } from '../data/recipes-my';
import { recipes as phRecipes } from '../data/recipes-ph';
import { recipes as vnRecipes } from '../data/recipes-vn';

import type { CountryRecipe } from '../types/unified';

export type { CountryRecipe };

export const ALL_RECIPES: CountryRecipe[] = [
  ...twRecipes,
  ...thRecipes,
  ...jpRecipes,
  ...myRecipes,
  ...phRecipes,
  ...vnRecipes,
  ...krRecipes,
];

export function recipesOf(country: CountryCode): CountryRecipe[] {
  return ALL_RECIPES.filter((r) => r.country === country);
}

export function categoriesOf(country: CountryCode): string[] {
  const set = new Set<string>();
  recipesOf(country).forEach((r) => set.add(r.category));
  return ['all', ...[...set].sort()];
}

export function text(m: MultilingualText | string | undefined, lang: Language): string {
  if (!m) return '';
  if (typeof m === 'string') return m;
  return m[lang] || m.en || Object.values(m).find((v) => typeof v === 'string') || '';
}

export interface IngredientLike {
  name: MultilingualText;
  amount: number;
  unitMetric: string;
  unitUS: string;
  isKeyFlavor?: boolean;
  substitute?: { substituteNam?: unknown };
  [key: string]: unknown;
}

export interface StepLike {
  stepNumber: number;
  title: MultilingualText;
  instruction: MultilingualText;
  durationSeconds?: number;
  image?: string;
  crucialTips?: MultilingualText | string;
  [key: string]: unknown;
}

export function usedCountries(): CountryCode[] {
  const set = new Set<CountryCode>();
  ALL_RECIPES.forEach((r) => set.add(r.country));
  return [...set];
}
