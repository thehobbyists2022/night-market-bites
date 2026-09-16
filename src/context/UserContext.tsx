import React, { createContext, useContext } from 'react';
import type { CountryCode } from '../types/unified';

interface PersistedState {
  favorites: Record<CountryCode, string[]>;
  tasted: Record<CountryCode, string[]>;
}

interface UserContextType extends PersistedState {
  toggleFavorite: (country: CountryCode, id: string) => void;
  markTasted: (country: CountryCode, id: string) => void;
}

const KEY = 'nmb_user_v1';

const empty: PersistedState = { favorites: {} as Record<CountryCode, string[]>, tasted: {} as Record<CountryCode, string[]> };

function load(): PersistedState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw);
    return { ...empty, ...parsed };
  } catch {
    return empty;
  }
}

function save(state: PersistedState) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* private mode */ }
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = React.useState<PersistedState>(load);

  React.useEffect(() => { save(state); }, [state]);

  const toggleFavorite = (country: CountryCode, id: string) => {
    setState((s) => {
      const list = s.favorites[country] || [];
      const next = list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
      return { ...s, favorites: { ...s.favorites, [country]: next } };
    });
  };

  const markTasted = (country: CountryCode, id: string) => {
    setState((s) => {
      const list = s.tasted[country] || [];
      if (list.includes(id)) return s;
      return { ...s, tasted: { ...s.tasted, [country]: [...list, id] } };
    });
  };

  return (
    <UserContext.Provider value={{ ...state, toggleFavorite, markTasted }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserContextType {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
