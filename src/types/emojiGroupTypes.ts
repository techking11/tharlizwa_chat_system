import { ReactNode } from 'react';

export interface EmojiContextProps {
  isVisible: boolean;
  toggleVisible: () => void;
}

export interface EmojiProviderProps {
  children: ReactNode;
}
