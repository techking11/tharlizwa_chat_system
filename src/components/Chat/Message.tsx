import React from 'react';

interface MessageProps {
  content: string;
  isSender: boolean;
}

const Message: React.FC<MessageProps> = ({ content, isSender }) => {
  return (
    <div
      className={`p-3 rounded-lg ${
        isSender
          ? 'bg-blue-500 text-white self-end'
          : 'bg-gray-200 text-black self-start'
      }`}
    >
      {content}
    </div>
  );
};

export default Message;
