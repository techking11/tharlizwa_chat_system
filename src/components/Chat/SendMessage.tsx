import React from 'react';
import {
  EllipsisVerticalIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';
import EmojiPopover from './EmojiPopover';
import ReplyIcon from '../../icons/ReplyIcon';
import { useReply } from '../../hooks/useReply';
import ThreeDotsPopover from './ThreeDotsPopover';
import { Message } from '../../types/messageTypes';
import { formatTime } from '../../utils/formatTime';

const SendMessage: React.FC<{ message: Message; showAvatar: boolean }> = ({
  message,
  showAvatar,
}) => {
  const { toggleReply, toggleVisible } = useReply();
  const fetchReply = (name: string, message: string) => {
    toggleReply({ name, message });
    toggleVisible();
  };
  return (
    <>
      <div className="flex items-center w-3/4 group">
        <div className="size-14">
          {showAvatar && (
            <img
              className="size-8 m-3 rounded-full"
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="avatar"
            />
          )}
        </div>
        <div className="p-2 bg-gray-200 dark:bg-gray-800 rounded-xl mr-3 mb-1 rounded-bl-none">
          <div className="text-gray-700 dark:text-gray-200 text-sm">
            {message.content}
          </div>
          <div className="text-xs text-gray-700 dark:text-gray-400 mt-1 text-right">
            {formatTime(message.created_at)}
          </div>
        </div>
        <div className="cursor-pointer flex items-center gap-3 opacity-0 group-hover:opacity-100">
          <EmojiPopover>
            <FaceSmileIcon className="size-5 text-gray-500" />
          </EmojiPopover>
          <button onClick={() => fetchReply('Nay Myo Aung', message.content)}>
            <ReplyIcon classes="size-4 text-gray-500" />
          </button>
          <ThreeDotsPopover>
            <EllipsisVerticalIcon className="size-5 text-gray-500" />
          </ThreeDotsPopover>
        </div>
      </div>
    </>
  );
};

export default SendMessage;
