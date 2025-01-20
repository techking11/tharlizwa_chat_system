import React from 'react';
import {
  CheckIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';
import EmojiPopover from './EmojiPopover';
import { useReply } from '../../hooks/useReply';
import ReplyIcon from '../../icons/ReplyIcon';
import ThreeDotsPopover from './ThreeDotsPopover';
import { Message } from '../../types/messageTypes';
import { formatTime } from '../../utils/formatTime';

const ReplyMessage: React.FC<{ message: Message }> = ({ message }) => {
  const { toggleReply, toggleVisible } = useReply();
  const fetchReply = (name: string, message: string) => {
    toggleReply({ name, message });
    toggleVisible();
  };
  return (
    <div className="flex float-right justify-end items-center w-3/4 group">
      <div className="cursor-pointer flex items-center gap-3 opacity-0 group-hover:opacity-100">
        <ThreeDotsPopover>
          <EllipsisVerticalIcon className="size-5 text-gray-500" />
        </ThreeDotsPopover>
        <button onClick={() => fetchReply('Nay Myo Aung', message.content)}>
          <ReplyIcon classes="size-4 text-gray-500" />
        </button>
        <EmojiPopover>
          <FaceSmileIcon className="size-5 text-gray-500" />
        </EmojiPopover>
      </div>
      <div className="flex items-end w-auto bg-blue-100 dark:bg-gray-800 mb-1 ml-3 rounded-xl rounded-br-none">
        <div className="p-2">
          <div className="text-gray-700 dark:text-gray-200 text-sm">
            {message.content}
          </div>
          <div className="text-xs text-gray-700 dark:text-gray-400 mt-1 text-right">
            <span className="">{formatTime(message.created_at)}</span>
            &ensp;
            <CheckIcon className="size-4 text-blue-700 hidden" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-3 text-blue-700 inline-block"
              fill="currentColor"
            >
              <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyMessage;
