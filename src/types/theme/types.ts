import { ReactNode } from 'react';

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type Theme = 'light' | 'dark';
