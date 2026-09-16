import React from 'react';
import { LanguageProvider, UI_LANGUAGES, useLanguage } from './context/LanguageContext';

const Demo: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const active = UI_LANGUAGES.find((l) => l.code === language)!;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 px-6 text-center">
      <span className="inline-block rounded-full bg-night-lantern/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-night-lantern">
        Night Market Bites
      </span>
      <h1 className="text-3xl font-black tracking-tight text-night-ink sm:text-4xl">
        Asia Night Markets — Demo
      </h1>
      <p className="max-w-md text-sm text-night-muted">
        {t('appSubtitle') || 'Seven night-market districts will appear here (step 5).'}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {UI_LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => setLanguage(l.code)}
            className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
              language === l.code
                ? 'border-night-lantern bg-night-lantern/20 text-night-lantern'
                : 'border-night-border text-night-muted hover:text-night-ink'
            }`}
          >
            {l.flag} {l.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-night-muted">Current: {active.label} ({language})</p>
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <Demo />
  </LanguageProvider>
);

export default App;
