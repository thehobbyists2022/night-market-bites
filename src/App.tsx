import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { UserProvider } from './context/UserContext';
import { HeaderBar } from './components/HeaderBar';
import { MarketHall } from './components/MarketHall';
import { DistrictView } from './components/DistrictView';
import { RecipeDetailView } from './components/RecipeDetailView';
import { PassportView } from './components/PassportView';
import { PantryView } from './components/PantryView';
import { Compass, ShoppingBasket, Ticket } from 'lucide-react';
import type { CountryCode, CountryRecipe } from './types/unified';

type Screen =
  | { view: 'hall' }
  | { view: 'district'; country: CountryCode }
  | { view: 'recipe'; recipe: CountryRecipe }
  | { view: 'pantry' }
  | { view: 'passport' };

const Shell: React.FC = () => {
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
        {screen.view === 'pantry' && <PantryView onBack={() => setScreen({ view: 'hall' })} />}
        {screen.view === 'passport' && (
          <PassportView
            onBack={() => setScreen({ view: 'hall' })}
            onSelectRecipe={(recipe) => setScreen({ view: 'recipe', recipe })}
          />
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-night-border bg-night-panel/95 backdrop-blur-lg">
        <div className="mx-auto grid max-w-md grid-cols-3 items-center px-4">
          <button
            onClick={() => setScreen({ view: 'hall' })}
            className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-bold ${
              screen.view === 'hall' || screen.view === 'district' || screen.view === 'recipe'
                ? 'text-night-lantern'
                : 'text-night-muted'
            }`}
          >
            <Compass className="h-5 w-5" />
            Markets
          </button>
          <button
            onClick={() => setScreen({ view: 'pantry' })}
            className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-bold ${
              screen.view === 'pantry' ? 'text-night-lantern' : 'text-night-muted'
            }`}
          >
            <ShoppingBasket className="h-5 w-5" />
            Pantry
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
    <UserProvider>
      <Shell />
    </UserProvider>
  </LanguageProvider>
);

export default App;
