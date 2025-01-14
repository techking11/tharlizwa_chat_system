import { useContext } from 'react';
import { RightInfoContext } from '../contexts/RightInfoContext';
import { RightInfoContextProps } from '../types/RightInfoTypes';

export const useRightInfo = (): RightInfoContextProps => {
  const context = useContext(RightInfoContext);
  if (!context) {
    throw new Error('useRightInfo must be used within RightInfoProvider');
  }
  return context;
};
