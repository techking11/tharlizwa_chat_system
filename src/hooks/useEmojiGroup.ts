import { useContext } from 'react';
import { EmojiContext } from '../contexts/EmojiContext';
import { EmojiContextProps } from '../types/emojiGroupTypes';

export const useEmojiGroup = (): EmojiContextProps => {
  const context = useContext(EmojiContext);
  if (!context) {
    throw new Error('useEmojiGroup must be used within EmojiProvider');
  }
  return context;
};
