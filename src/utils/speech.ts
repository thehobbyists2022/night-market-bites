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

export function stopSpeaking(): void {
  if (canSpeak()) {
    window.speechSynthesis.cancel();
  }
}

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
}

/** Speak text in the target country's or language code. Safe no-op when unsupported. */
export function speak(
  text: string,
  target: CountryCode | string,
  options?: SpeakOptions
): void {
  if (!canSpeak() || !text?.trim()) return;

  const synth = window.speechSynthesis;
  synth.cancel();

  const langCode = (SPEECH_LANG[target as CountryCode] || target || 'en-US');
  const u = new SpeechSynthesisUtterance(text.trim());
  u.lang = langCode;
  u.rate = options?.rate ?? 0.88;
  if (options?.pitch) u.pitch = options.pitch;

  if (options?.onStart) u.onstart = options.onStart;
  if (options?.onEnd) u.onend = options.onEnd;
  if (options?.onError) u.onerror = options.onError;

  // Best-effort voice matching
  const voices = synth.getVoices();
  const prefix = langCode.split('-')[0].toLowerCase();
  const matchedVoice = voices.find((v) => v.lang.toLowerCase() === langCode.toLowerCase()) ||
    voices.find((v) => v.lang.toLowerCase().startsWith(prefix));
  if (matchedVoice) {
    u.voice = matchedVoice;
  }

  synth.speak(u);
}

