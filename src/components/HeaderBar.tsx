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
    <header className="sticky top-0 z-40 border-b border-paper-border bg-paper-card/92 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
        <button onClick={onBackHome} className="flex items-center gap-2.5 text-left">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-paper-gold/40 bg-paper-wash font-display text-[15px] font-bold text-paper-gold">
            N
          </span>
          <span className="text-left">
            <span className="block font-display text-[15px] font-bold tracking-tight text-paper-ink">
              Night Market Bites
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-wideish text-paper-muted">
              Asia Street Food Guide
            </span>
          </span>
        </button>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 rounded-lg border border-paper-border bg-paper-soft px-3 py-1.5 text-xs font-bold text-paper-ink"
          >
            <Languages className="h-3.5 w-3.5 text-paper-gold" />
            {UI_LANGUAGES.find((l) => l.code === language)?.flag}
          </button>
          {open && (
            <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-paper-border bg-paper-card shadow-lg">
              {UI_LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLanguage(l.code); setOpen(false); }}
                  className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs ${
                    language === l.code ? 'bg-paper-wash font-bold text-paper-gold' : 'text-paper-muted hover:bg-paper-soft'
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
