import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { HeaderBar } from './components/HeaderBar';
import { MarketHall } from './components/MarketHall';
import { DistrictView } from './components/DistrictView';
import { RecipeDetailView } from './components/RecipeDetailView';
import { Compass, Ticket } from 'lucide-react';
import type { CountryCode, CountryRecipe } from './types/unified';

type Screen =
  | { view: 'hall' }
  | { view: 'district'; country: CountryCode }
  | { view: 'recipe'; recipe: CountryRecipe }
  | { view: 'passport' };

const Shell: React.FC = () => {
  const { t } = useLanguage();
  const [screen, setScreen] = React.useState<Screen>({ view: 'hall' });

  return (
    <div className="min-h-screen bg-night-bg text-night-ink">
      <HeaderBar onBackHome={() => setScreen({ view: 'hall' })} />

      <main>
        {screen.view === 'hall' && (
          <MarketHall onSelectCountry={(country) => setScreen({ view: 'district', country })} />
        )}
        {screen.view === 'district' && (
          <DistrictView
            country={screen.country}
            onBack={() => setScreen({ view: 'hall' })}
            onSelectRecipe={(recipe) => setScreen({ view: 'recipe', recipe })}
          />
        )}
        {screen.view === 'recipe' && (
          <RecipeDetailView
            recipe={screen.recipe}
            onBack={() => setScreen({ view: 'hall' })}
          />
        )}
        {screen.view === 'passport' && (
          <div className="mx-auto max-w-3xl px-6 py-20 text-center text-sm text-night-muted">
            <Ticket className="mx-auto mb-3 h-10 w-10 text-night-lantern" />
            {t('passportTitle') || 'Taste Passport — coming with step 6.'}
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-night-border bg-night-panel/95 backdrop-blur-lg">
        <div className="mx-auto grid max-w-md grid-cols-2 items-center px-4">
          <button
            onClick={() => setScreen({ view: 'hall' })}
            className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-bold ${
              screen.view !== 'passport' ? 'text-night-lantern' : 'text-night-muted'
            }`}
          >
            <Compass className="h-5 w-5" />
            Markets
          </button>
          <button
            onClick={() => setScreen({ view: 'passport' })}
            className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-bold ${
              screen.view === 'passport' ? 'text-night-lantern' : 'text-night-muted'
            }`}
          >
            <Ticket className="h-5 w-5" />
            Passport
          </button>
        </div>
      </nav>
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <Shell />
  </LanguageProvider>
);

export default App;
