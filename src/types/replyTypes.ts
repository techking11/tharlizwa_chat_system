import { ReactNode } from 'react';

export interface ReplyProps {
  name: string;
  message: string;
}

export interface ReplyContextProps {
  reply: ReplyProps;
  isVisible: boolean;
  toggleReply: (data: ReplyProps) => void;
  toggleVisible: () => void;
}

export interface ReplyProviderProps {
  children: ReactNode;
}
