import React from 'react';
import SendMessage from './SendMessage';
import ReplyMessage from './ReplyMessage';
import { Message } from '../../types/messageTypes';
import { Person } from '../../types/personTypes';

const MessageList: React.FC<{ messages: Message[]; user: Person }> = ({
  messages,
  user,
}) => (
  <div className="w-full px-[10%] flex-grow bg-white dark:bg-gray-900 my-2 overflow-y-scroll scrollbar-thin dark:scrollbar-thin-dark">
    {messages.map((message, i: number) => {
      const previousMessage = messages[i - 1];
      const showAvatar =
        !previousMessage || previousMessage.sender_id !== message.sender_id;

      return (
        <div key={i}>
          {message.sender_id === user?.id && (
            <SendMessage message={message} showAvatar={showAvatar} />
          )}
          {message.sender_id === 99 && <ReplyMessage message={message} />}
        </div>
      );
    })}
  </div>
);

export default MessageList;
