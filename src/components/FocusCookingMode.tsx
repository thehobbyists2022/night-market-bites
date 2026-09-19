import React, { useState, useEffect, useRef } from 'react';
import type { CountryRecipe } from '../types/unified';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { soundEffects, TimerSoundStyle } from '../utils/soundEffects';
import { speak, stopSpeaking } from '../utils/speech';
import { requestWakeLock, releaseWakeLock } from '../utils/wakeLock';
import { text } from '../lib/selectRecipe';
import { getUI } from '../i18n/uiStrings';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Award,
  Flame,
  Clock,
  Bell,
  Radio,
  AlertTriangle,
} from 'lucide-react';

interface FocusCookingModeProps {
  recipe: CountryRecipe;
  cookware: string;
  servings: number;
  onExit: () => void;
}

export const FocusCookingMode: React.FC<FocusCookingModeProps> = ({
  recipe,
  cookware,
  servings,
  onExit,
}) => {
  const { language } = useLanguage();
  const ui = getUI(language);
  const { markTasted } = useUser();

  const steps = (recipe.steps as any[]) || [];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Sound effects state
  const [isMuted, setIsMuted] = useState(soundEffects.getIsMuted());
  const [soundStyle] = useState<TimerSoundStyle>(soundEffects.getSoundStyle());
  const [isAlarmRinging, setIsAlarmRinging] = useState(false);

  const step = steps[currentStepIndex];
  const totalSteps = steps.length;

  // Timer states
  const initialDuration = step?.durationSeconds || 0;
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Request Wake Lock on mount to prevent screen dimming
  useEffect(() => {
    requestWakeLock();
    return () => {
      releaseWakeLock();
      stopSpeaking();
      soundEffects.stopAlarm();
    };
  }, []);

  // Stop alarm
  const handleStopAlarm = () => {
    soundEffects.stopAlarm();
    setIsAlarmRinging(false);
  };

  // Toggle Mute
  const handleToggleMute = () => {
    const next = soundEffects.toggleMute();
    setIsMuted(next);
    if (next) {
      handleStopAlarm();
    }
  };

  // Sync timer when changing steps
  useEffect(() => {
    handleStopAlarm();
    stopSpeaking();
    setIsSpeaking(false);

    if (step?.durationSeconds) {
      setTimeLeft(step.durationSeconds);
      setTimerRunning(false);
    } else {
      setTimeLeft(0);
      setTimerRunning(false);
    }
  }, [currentStepIndex, step]);

  // Timer interval handling
  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev: number) => {
          if (prev <= 4 && prev > 1) {
            soundEffects.playCountdownTick(prev - 1);
          }

          if (prev <= 1) {
            setTimerRunning(false);
            if (timerRef.current) clearInterval(timerRef.current);
            setIsAlarmRinging(true);
            soundEffects.startAlarmLoop(soundStyle, () => {
              setIsAlarmRinging(false);
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerRunning, timeLeft, soundStyle]);

  // Step instruction resolution (checking cookware override)
  const cookwareVariation = step?.cookwareVariations?.find((v: any) => v.cookware === cookware);
  const rawInstruction = cookwareVariation
    ? text(cookwareVariation.instructionOverride, language)
    : text(step?.instruction, language);
  const stepTitle = text(step?.title, language);

  // Text to Speech
  const handleToggleSpeak = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      const textToRead = `Step ${step?.stepNumber || currentStepIndex + 1}: ${stepTitle}. ${rawInstruction}`;
      setIsSpeaking(true);
      speak(textToRead, language === 'en' ? 'en-US' : recipe.country, {
        rate: 0.9,
        onEnd: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false),
      });
    }
  };

  // Format time mm:ss
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainderSecs.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      soundEffects.playClick();
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Finished all steps
      soundEffects.playSuccess();
      markTasted(recipe.country, recipe.id);
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      soundEffects.playClick();
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-stone-950 text-white select-none">
      {/* Top Bar */}
      <header className="flex items-center justify-between border-b border-stone-800/80 bg-stone-900/90 px-4 py-3 backdrop-blur-md safe-top">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-800 text-stone-300 hover:bg-stone-700"
            aria-label="Exit"
          >
            <X className="h-5 w-5" />
          </button>
          <div>
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5" />
              {ui.focusMode.title}
            </h2>
            <p className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-xs">
              {text(recipe.title, language)}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Audio Mute toggle */}
          <button
            onClick={handleToggleMute}
            className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
              isMuted ? 'bg-red-500/20 text-red-400' : 'bg-stone-800 text-stone-300'
            }`}
            title={isMuted ? ui.focusMode.unmute : ui.focusMode.mute}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>

          {/* Speech Synthesis toggle */}
          <button
            onClick={handleToggleSpeak}
            className={`flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
              isSpeaking
                ? 'bg-amber-500 text-stone-950 shadow-glow animate-pulse'
                : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
            }`}
            title={ui.focusMode.voice}
          >
            <Radio className="h-3.5 w-3.5" />
            <span>{isSpeaking ? ui.focusMode.reading : ui.focusMode.voice}</span>
          </button>
        </div>
      </header>

      {/* Progress Line */}
      <div className="h-1 w-full bg-stone-800">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
          style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto max-w-xl">
          {isFinished ? (
            /* Celebration Screen */
            <div className="rounded-3xl border border-amber-500/40 bg-gradient-to-b from-stone-900 to-amber-950/40 p-8 text-center shadow-2xl">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 border border-amber-400/30 shadow-glow">
                <Award className="h-10 w-10 animate-bounce" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">{ui.focusMode.masteredTitle}</h3>
              <p className="mt-2 text-sm text-stone-300 leading-relaxed">
                {ui.focusMode.masteredDesc}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={onExit}
                  className="rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 py-3.5 text-sm font-bold text-stone-950 shadow-glow"
                >
                  {ui.focusMode.returnRecipe}
                </button>
              </div>
            </div>
          ) : (
            /* Current Step Card */
            <div className="space-y-5">
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-amber-400 uppercase tracking-wider">
                  {ui.recipeDetail.stepPrefix} {currentStepIndex + 1} / {totalSteps}
                </span>
                <span className="rounded-full bg-stone-800/80 px-2.5 py-1 text-stone-300">
                  🍽️ {servings} {ui.recipeDetail.servings} ({cookware})
                </span>
              </div>

              {/* Step Title & Instruction */}
              <div className="rounded-3xl border border-stone-800 bg-stone-900/90 p-6 shadow-xl">
                <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                  {stepTitle}
                </h3>

                {cookwareVariation && cookware !== 'traditional' && (
                  <div className="mt-3 flex items-center gap-2 rounded-xl bg-amber-500/20 border border-amber-400/40 px-3.5 py-2 text-xs sm:text-sm font-bold text-amber-300">
                    <Sparkles className="h-4 w-4 text-amber-400 shrink-0 animate-pulse" />
                    <span>{cookwareVariation.tempAndSetting || `${cookware} Mode Active`}</span>
                  </div>
                )}

                <p className="mt-4 text-base leading-relaxed text-stone-200 sm:text-lg">
                  {rawInstruction}
                </p>

                {/* Step Image */}
                {step?.image && (
                  <img
                    src={step.image}
                    alt=""
                    className="mt-4 h-52 w-full rounded-2xl object-cover border border-stone-800"
                  />
                )}

                {/* Crucial Tips */}
                {step?.crucialTips && (
                  <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-amber-500/30 bg-amber-950/20 p-3.5 text-xs text-amber-200">
                    <Sparkles className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                    <span>{text(step.crucialTips as any, language)}</span>
                  </div>
                )}

                {/* Danger Warnings */}
                {step?.dangerWarnings && (
                  <div className="mt-3 flex items-start gap-2.5 rounded-2xl border border-red-500/30 bg-red-950/20 p-3.5 text-xs text-red-200">
                    <AlertTriangle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
                    <span>{text(step.dangerWarnings as any, language)}</span>
                  </div>
                )}
              </div>

              {/* Step Timer (if duration exists) */}
              {initialDuration > 0 && (
                <div className="rounded-3xl border border-amber-500/30 bg-stone-900/95 p-5 text-center shadow-lg">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                    <Clock className="h-3.5 w-3.5 text-amber-400" />
                    {ui.focusMode.stepTimer}
                  </div>

                  <div className="font-mono text-5xl font-black tracking-tight text-white my-2">
                    {formatTime(timeLeft)}
                  </div>

                  {/* Alarm Ringing Banner */}
                  {isAlarmRinging && (
                    <div className="my-2 inline-flex items-center gap-2 rounded-full bg-red-500/30 border border-red-500 px-4 py-1 text-xs font-bold text-red-200 animate-bounce">
                      <Bell className="h-3.5 w-3.5 text-red-400" />
                      {ui.focusMode.timerComplete}
                      <button
                        onClick={handleStopAlarm}
                        className="ml-2 rounded-md bg-red-600 px-2 py-0.5 text-[11px] text-white"
                      >
                        {ui.focusMode.stopAlarm}
                      </button>
                    </div>
                  )}

                  {/* Timer Controls */}
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setTimerRunning(!timerRunning)}
                      className={`flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold transition-all ${
                        timerRunning
                          ? 'bg-amber-500 text-stone-950 shadow-glow'
                          : 'bg-stone-800 text-stone-100 hover:bg-stone-700'
                      }`}
                    >
                      {timerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      <span>{timerRunning ? ui.focusMode.pauseTimer : ui.focusMode.startTimer}</span>
                    </button>

                    <button
                      onClick={() => {
                        setTimerRunning(false);
                        setTimeLeft(initialDuration);
                        handleStopAlarm();
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-800 text-stone-400 hover:bg-stone-700"
                      title={ui.focusMode.resetTimer}
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Bottom Sticky Navigation */}
      {!isFinished && (
        <footer className="flex items-center justify-between border-t border-stone-800/80 bg-stone-900/95 px-4 py-3 safe-bottom">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`flex items-center gap-1.5 rounded-2xl px-4 py-2.5 text-xs font-bold transition-colors ${
              currentStepIndex === 0
                ? 'opacity-30 text-stone-500'
                : 'bg-stone-800 text-stone-200 hover:bg-stone-700 active:scale-95'
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
            {ui.focusMode.prevStep}
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-xs font-bold text-stone-950 shadow-glow transition-all active:scale-95"
          >
            <span>{currentStepIndex === totalSteps - 1 ? ui.focusMode.finishMaster : ui.focusMode.nextStep}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </footer>
      )}
    </div>
  );
};
