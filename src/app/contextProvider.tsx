'use client';

import AppContext, { AppContextProps } from '@/contexts/appContext';
import React from 'react';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = (props: AppProviderProps) => {
  const { children } = props;

  const [activeNav, setActiveNav] = React.useState<string>('');
  const [isSubContactOpen, setIsSubContactOpen] = React.useState<boolean>(false);

  const contextValue: AppContextProps = {
    activeNav,
    updateActiveNav: (value: string) => setActiveNav(value),
    isSubContactOpen,
    updateIsSubContactOpen: (value: boolean) => setIsSubContactOpen(value),
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
