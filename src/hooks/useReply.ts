import { useContext } from 'react';
import { ReplyContextProps } from '../types/replyTypes';
import { ReplyContext } from '../contexts/ReplyContext';

export const useReply = (): ReplyContextProps => {
  const context = useContext(ReplyContext);
  if (!context) {
    throw new Error('useRely must be used within a ReplyProvider');
  }
  return context;
};
