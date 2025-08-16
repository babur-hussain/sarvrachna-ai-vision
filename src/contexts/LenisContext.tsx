import React, { createContext, useContext, ReactNode } from 'react';
import Lenis from 'lenis';
import { useLenis } from '@/hooks/use-lenis';

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType | undefined>(undefined);

export const useLenisContext = () => {
  const context = useContext(LenisContext);
  if (context === undefined) {
    throw new Error('useLenisContext must be used within a LenisProvider');
  }
  return context;
};

interface LenisProviderProps {
  children: ReactNode;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const lenis = useLenis();

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
};
