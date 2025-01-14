import React from 'react';
import { formatWithShortUnits } from '../../utils/formatDate';
import {
  EllipsisVerticalIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';
import EmojiPopover from './EmojiPopover';
import ReplyIcon from '../../icons/ReplyIcon';
import { useReply } from '../../hooks/useReply';

const messages = [
  { text: 'ဟိုင်း နေကောင်းလား', date: new Date('1/13/2025') },
  { text: 'အင်း ကောင်းပါတယ်', date: new Date('1/13/2025') },
  { text: 'ကျန်းမာရေးဂရုစိုက်ပါ', date: new Date('1/13/2025') },
];

const SendMessage: React.FC = () => {
  const { toggleReply, toggleVisible } = useReply();
  const fetchReply = (name: string, message: string) => {
    toggleReply({ name, message });
    toggleVisible();
  };
  return (
    <>
      {messages.map((message, index: number) => (
        <div key={index} className="flex items-center w-3/4 group">
          <div className="size-14">
            <img
              className={`size-8 m-3 rounded-full ${index > 0 && 'hidden'}`}
              src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png"
              alt="avatar"
            />
          </div>
          <div className="p-3 bg-gray-200 dark:bg-gray-800 mx-3 my-1 rounded-2xl rounded-bl-none">
            <div className="text-gray-700 dark:text-gray-200 text-base">
              {message.text}
            </div>
            <div className="text-xs text-gray-700 dark:text-gray-400 mt-2 text-right">
              {formatWithShortUnits(message.date)}
            </div>
          </div>
          <div className="cursor-pointer flex gap-3 opacity-0 group-hover:opacity-100">
            <EmojiPopover>
              <FaceSmileIcon className="size-6 text-gray-500" />
            </EmojiPopover>
            <button onClick={() => fetchReply('Nay Myo Aung', message.text)}>
              <ReplyIcon classes="size-5 text-gray-500" />
            </button>
            <EllipsisVerticalIcon className="size-6 text-gray-500" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SendMessage;
