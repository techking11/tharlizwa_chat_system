import React, { createContext, useState } from 'react';
import {
  EmojiContextProps,
  EmojiProviderProps,
} from '../types/emojiGroupTypes';

export const EmojiContext = createContext<EmojiContextProps | undefined>(
  undefined
);

function EmojiProvider({ children }: EmojiProviderProps): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => setIsVisible(!isVisible);
  return (
    <EmojiContext.Provider value={{ isVisible, toggleVisible }}>
      {children}
    </EmojiContext.Provider>
  );
}

export default EmojiProvider;
