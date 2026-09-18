// Pure Web Audio API Sound Effects Engine
// Zero external audio files, works offline, instant low latency across all iOS/Android devices

export type TimerSoundStyle = 'classic' | 'gong' | 'musicbox' | 'arcade';

class SoundEffectsEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.8;
  private currentAlarmInterval: number | null = null;
  private soundStyle: TimerSoundStyle = 'classic';

  constructor() {
    try {
      const savedMute = localStorage.getItem('nmb_sound_muted');
      if (savedMute !== null) {
        this.isMuted = savedMute === 'true';
      }
      const savedStyle = localStorage.getItem('nmb_sound_style') as TimerSoundStyle;
      if (savedStyle && ['classic', 'gong', 'musicbox', 'arcade'].includes(savedStyle)) {
        this.soundStyle = savedStyle;
      }
    } catch {
      // Ignore storage errors
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx || this.ctx.state === 'suspended') {
      try {
        const AudioCtxClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!this.ctx) {
          this.ctx = new AudioCtxClass();
        }
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
      } catch {
        return null;
      }
    }
    return this.ctx;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public setIsMuted(muted: boolean) {
    this.isMuted = muted;
    try {
      localStorage.setItem('nmb_sound_muted', String(muted));
    } catch {}
    if (muted) {
      this.stopAlarm();
    }
  }

  public getSoundStyle(): TimerSoundStyle {
    return this.soundStyle;
  }

  public setSoundStyle(style: TimerSoundStyle) {
    this.soundStyle = style;
    try {
      localStorage.setItem('nmb_sound_style', style);
    } catch {}
  }

  public toggleMute(): boolean {
    const next = !this.isMuted;
    this.setIsMuted(next);
    return next;
  }

  private playTone(
    freq: number,
    duration: number,
    type: OscillatorType = 'sine',
    delay: number = 0,
    gainLevel: number = 0.5,
    detune: number = 0
  ) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const startTime = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    if (detune !== 0) {
      osc.detune.setValueAtTime(detune, startTime);
    }

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(gainLevel * this.volume, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  public playCountdownTick(secondNumber: number) {
    if (this.isMuted) return;
    const pitch = 880 + (4 - secondNumber) * 120;
    this.playTone(pitch, 0.08, 'sine', 0, 0.35);
  }

  public playClick() {
    if (this.isMuted) return;
    this.playTone(600, 0.04, 'triangle', 0, 0.2);
  }

  public playSuccess() {
    if (this.isMuted) return;
    this.playTone(523.25, 0.12, 'sine', 0, 0.4);
    this.playTone(659.25, 0.12, 'sine', 0.1, 0.45);
    this.playTone(783.99, 0.25, 'sine', 0.2, 0.5);
    this.playTone(1046.5, 0.4, 'sine', 0.32, 0.6);
  }

  public playTimerAlarmOnce(style: TimerSoundStyle = this.soundStyle) {
    if (this.isMuted) return;

    switch (style) {
      case 'classic':
        this.playTone(880, 0.15, 'sine', 0, 0.5);
        this.playTone(880, 0.15, 'sine', 0.18, 0.5);
        this.playTone(1174.66, 0.35, 'sine', 0.38, 0.6);
        break;

      case 'gong':
        this.playTone(220, 1.2, 'sine', 0, 0.7);
        this.playTone(440, 0.9, 'triangle', 0, 0.4, 8);
        this.playTone(330, 1.0, 'sine', 0.02, 0.3, -5);
        break;

      case 'musicbox':
        this.playTone(1046.5, 0.25, 'sine', 0, 0.5);
        this.playTone(1318.51, 0.25, 'sine', 0.15, 0.5);
        this.playTone(1567.98, 0.35, 'sine', 0.3, 0.6);
        break;

      case 'arcade':
        this.playTone(440, 0.08, 'square', 0, 0.3);
        this.playTone(587.33, 0.08, 'square', 0.08, 0.3);
        this.playTone(880, 0.2, 'square', 0.16, 0.35);
        break;
    }
  }

  public startAlarmLoop(style: TimerSoundStyle = this.soundStyle, onStop?: () => void) {
    this.stopAlarm();
    this.playTimerAlarmOnce(style);

    const interval = style === 'gong' ? 1800 : 1200;
    this.currentAlarmInterval = window.setInterval(() => {
      this.playTimerAlarmOnce(style);
    }, interval);

    // Auto stop after 30 seconds to save battery
    window.setTimeout(() => {
      if (this.currentAlarmInterval !== null) {
        this.stopAlarm();
        if (onStop) onStop();
      }
    }, 30000);
  }

  public stopAlarm() {
    if (this.currentAlarmInterval !== null) {
      clearInterval(this.currentAlarmInterval);
      this.currentAlarmInterval = null;
    }
  }
}

export const soundEffects = new SoundEffectsEngine();
