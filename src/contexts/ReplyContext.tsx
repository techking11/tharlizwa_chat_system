import React, { createContext, useState } from 'react';
import {
  ReplyContextProps,
  ReplyProps,
  ReplyProviderProps,
} from '../types/replyTypes';

export const ReplyContext = createContext<ReplyContextProps | undefined>(
  undefined
);

const ReplyProvider: React.FC<ReplyProviderProps> = ({ children }) => {
  const [reply, setReply] = useState<ReplyProps>({
    name: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false);

  const toggleReply = (data: ReplyProps) => setReply(data);
  const toggleVisible = () => setIsVisible(!isVisible);

  return (
    <ReplyContext.Provider
      value={{ reply, toggleReply, isVisible, toggleVisible }}
    >
      {children}
    </ReplyContext.Provider>
  );
};

export default ReplyProvider;
