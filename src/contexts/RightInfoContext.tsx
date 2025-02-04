import { createContext, useState } from 'react';
import {
  RightInfoContextProps,
  RightInfoProviderProps,
} from '../types/RightInfoTypes';

export const RightInfoContext = createContext<
  RightInfoContextProps | undefined
>(undefined);

function RightInfoProvider({ children }: RightInfoProviderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const showVisible = () => setIsVisible(!isVisible);
  const hideVisible = () => setIsVisible(false);

  return (
    <RightInfoContext.Provider value={{ isVisible, showVisible, hideVisible }}>
      {children}
    </RightInfoContext.Provider>
  );
}

export default RightInfoProvider;
