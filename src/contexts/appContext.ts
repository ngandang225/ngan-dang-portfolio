'use client';
import { createContext } from 'react';

export type AppContextProps = {
  activeNav: string;
  updateActiveNav: (value: string) => void;
  isSubContactOpen: boolean;
  updateIsSubContactOpen: (value: boolean) => void;
};

const AppContext = createContext<AppContextProps>({
  activeNav: '',
  updateActiveNav: () => {},
  isSubContactOpen: false,
  updateIsSubContactOpen: () => {},
});

export default AppContext;
