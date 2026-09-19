import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { getUI } from './i18n/uiStrings';
import { UserProvider } from './context/UserContext';
import { HeaderBar } from './components/HeaderBar';
import { MarketHall } from './components/MarketHall';
import { DistrictView } from './components/DistrictView';
import { RecipeDetailView } from './components/RecipeDetailView';
import { PassportView } from './components/PassportView';
import { PantryView } from './components/PantryView';
import { DrinkLabView } from './components/DrinkLabView';
import { SurvivalPhrasesModal } from './components/SurvivalPhrasesModal';
import { Footer } from './components/Footer';
import { Compass, Sparkles, ShoppingBasket, Ticket } from 'lucide-react';
import type { CountryCode, CountryRecipe } from './types/unified';
import { soundEffects } from './utils/soundEffects';

type Screen =
  | { view: 'hall' }
  | { view: 'district'; country: CountryCode; tab?: 'dishes' | 'markets' }
  | { view: 'recipe'; recipe: CountryRecipe }
  | { view: 'lab' }
  | { view: 'pantry' }
  | { view: 'passport' };

const Shell: React.FC = () => {
  const { language } = useLanguage();
  const ui = getUI(language);
  const [screen, setScreen] = useState<Screen>({ view: 'hall' });
  const [showSurvivalModal, setShowSurvivalModal] = useState<boolean>(false);

  const navigateTo = (next: Screen) => {
    soundEffects.playClick();
    setScreen(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen text-stone-100 flex flex-col justify-between"
      style={{
        background: 'linear-gradient(180deg, #0A1931 0%, #0F2A4A 35%, #16365C 70%, #0B1C38 100%)',
      }}
    >
      <div>
        <HeaderBar
          onBackHome={() => navigateTo({ view: 'hall' })}
          onOpenSurvivalModal={() => setShowSurvivalModal(true)}
        />

        <main>
          {screen.view === 'hall' && (
            <MarketHall
              onSelectCountry={(country, tab) => navigateTo({ view: 'district', country, tab })}
              onSelectRecipe={(recipe) => navigateTo({ view: 'recipe', recipe })}
              onOpenSurvivalModal={() => setShowSurvivalModal(true)}
            />
          )}
          {screen.view === 'district' && (
            <DistrictView
              country={screen.country}
              initialTab={screen.tab}
              onBack={() => navigateTo({ view: 'hall' })}
              onSelectRecipe={(recipe) => navigateTo({ view: 'recipe', recipe })}
            />
          )}
          {screen.view === 'recipe' && (
            <RecipeDetailView
              recipe={screen.recipe}
              onBack={() => navigateTo({ view: 'district', country: screen.recipe.country })}
            />
          )}
          {screen.view === 'lab' && <DrinkLabView />}
          {screen.view === 'pantry' && (
            <PantryView onBack={() => navigateTo({ view: 'hall' })} />
          )}
          {screen.view === 'passport' && (
            <PassportView
              onBack={() => navigateTo({ view: 'hall' })}
              onSelectRecipe={(recipe) => navigateTo({ view: 'recipe', recipe })}
            />
          )}
        </main>
      </div>

      <Footer />

      {/* Night Market Emergency Survival Modal */}
      {showSurvivalModal && (
        <SurvivalPhrasesModal onClose={() => setShowSurvivalModal(false)} />
      )}

      {/* Bottom Sticky Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/90 backdrop-blur-xl safe-bottom">
        <div className="mx-auto grid max-w-md grid-cols-4 items-center px-2">
          {/* 1. Markets */}
          <button
            onClick={() => navigateTo({ view: 'hall' })}
            className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-extrabold transition-colors ${
              screen.view === 'hall' || screen.view === 'district' || screen.view === 'recipe'
                ? 'text-amber-400 scale-105'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Compass className="h-5 w-5" />
            <span>{ui.nav.markets}</span>
          </button>

          {/* 2. Drink Lab */}
          <button
            onClick={() => navigateTo({ view: 'lab' })}
            className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-extrabold transition-colors ${
              screen.view === 'lab'
                ? 'text-amber-400 scale-105'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Sparkles className="h-5 w-5" />
            <span>{ui.nav.drinkLab}</span>
          </button>

          {/* 3. Pantry & Amazon */}
          <button
            onClick={() => navigateTo({ view: 'pantry' })}
            className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-extrabold transition-colors ${
              screen.view === 'pantry'
                ? 'text-amber-400 scale-105'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <ShoppingBasket className="h-5 w-5" />
            <span>{ui.nav.pantry}</span>
          </button>

          {/* 4. Passport */}
          <button
            onClick={() => navigateTo({ view: 'passport' })}
            className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-extrabold transition-colors ${
              screen.view === 'passport'
                ? 'text-amber-400 scale-105'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Ticket className="h-5 w-5" />
            <span>{ui.nav.passport}</span>
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
