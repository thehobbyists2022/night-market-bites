import type { CountryCode } from '../types/unified';

const SPEECH_LANG: Record<CountryCode, string> = {
  tw: 'zh-TW',
  th: 'th-TH',
  jp: 'ja-JP',
  kr: 'ko-KR',
  my: 'ms-MY',
  ph: 'fil-PH',
  vn: 'vi-VN',
};

export function canSpeak(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/** Speak text in the target country's language. Safe no-op when unsupported. */
export function speak(text: string, country: CountryCode): void {
  if (!canSpeak() || !text.trim()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = SPEECH_LANG[country];
  const tag = u.lang.split('-')[0].toLowerCase();
  const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith(tag));
  if (voice) u.voice = voice;
  u.rate = 0.85;
  synth.speak(u);
}
