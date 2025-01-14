import { ReactNode } from 'react';

export interface ThemeProviderProps {
  children: ReactNode;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
