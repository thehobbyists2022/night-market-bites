import React from 'react';
import { UI_LANGUAGES, useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

interface HeaderBarProps {
  onBackHome: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ onBackHome }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-night-panel/95 border-b border-night-border backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4">
        <button onClick={onBackHome} className="flex items-center gap-2.5 text-left">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-tr from-night-lantern via-night-neonred to-night-mint text-xl shadow-lg shadow-night-neonred/20">
            🏮
          </span>
          <span>
            <span className="block text-sm font-black tracking-tight text-night-ink">Night Market Bites</span>
            <span className="block text-[10px] text-night-muted">Asia Street Food Guide</span>
          </span>
        </button>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 rounded-xl border border-night-border bg-night-card px-3 py-2 text-xs font-bold text-night-ink"
          >
            <Languages className="h-3.5 w-3.5 text-night-lantern" />
            {UI_LANGUAGES.find((l) => l.code === language)?.flag}
          </button>
          {open && (
            <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-night-border bg-night-panel shadow-xl">
              {UI_LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLanguage(l.code); setOpen(false); }}
                  className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs ${
                    language === l.code ? 'bg-night-lantern/15 font-bold text-night-lantern' : 'text-night-muted'
                  }`}
                >
                  <span>{l.flag}</span>
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
