import React from 'react';
import { formatWithShortUnits } from '../../utils/formatDate';
import {
  EllipsisVerticalIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';
import EmojiPopover from './EmojiPopover';
import ReplyIcon from '../../icons/ReplyIcon';
import { useReply } from '../../hooks/useReply';

interface MessageProps {
  id: number;
  conversaction_id: number;
  sender_id: number;
  message_type: string; //'text' | 'image' | 'video' | 'audio' | 'file';
  content: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
}

const SendMessage: React.FC<{ message: MessageProps; showAvatar: boolean }> = ({
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
        <div className="p-3 bg-gray-200 dark:bg-gray-800 mx-3 my-1 rounded-2xl rounded-bl-none">
          <div className="text-gray-700 dark:text-gray-200 text-base">
            {message.content}
          </div>
          <div className="text-xs text-gray-700 dark:text-gray-400 mt-2 text-right">
            {formatWithShortUnits(message.created_at)}
          </div>
        </div>
        <div className="cursor-pointer flex gap-3 opacity-0 group-hover:opacity-100">
          <EmojiPopover>
            <FaceSmileIcon className="size-6 text-gray-500" />
          </EmojiPopover>
          <button onClick={() => fetchReply('Nay Myo Aung', message.content)}>
            <ReplyIcon classes="size-5 text-gray-500" />
          </button>
          <EllipsisVerticalIcon className="size-6 text-gray-500" />
        </div>
      </div>
    </>
  );
};

export default SendMessage;
