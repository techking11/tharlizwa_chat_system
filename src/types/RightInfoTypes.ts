import { ReactNode } from 'react';

export interface RightInfoProviderProps {
  children: ReactNode;
}

export interface RightInfoContextProps {
  isVisible: boolean;
  showVisible: () => void;
  hideVisible: () => void;
}
