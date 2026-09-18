import { TW_PHRASES } from './tw.ts';
import { TH_PHRASES } from './th.ts';
import { JP_PHRASES } from './jp.ts';
import { KR_PHRASES } from './kr.ts';
import { MY_PHRASES } from './my.ts';
import { PH_PHRASES } from './ph.ts';
import { VN_PHRASES } from './vn.ts';

export interface PhraseEntry {
  meaning: Record<string, string>;
  breakdown?: Record<string, string>;
}

export const COMPLETE_PHRASE_DICTIONARY: Record<string, PhraseEntry> = {
  ...TW_PHRASES,
  ...TH_PHRASES,
  ...JP_PHRASES,
  ...KR_PHRASES,
  ...MY_PHRASES,
  ...PH_PHRASES,
  ...VN_PHRASES
};
