import {
  CheckIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { formatWithShortUnits } from '../../utils/formatDate';
import EmojiPopover from './EmojiPopover';

const messages = [
  { text: 'ဟုတ် နေကောင်းပါတယ်', date: new Date('1/13/2025') },
  { text: 'မင်းရော နေကောင်းတယ်မလား', date: new Date('1/13/2025') },
  { text: 'မင်းလည်း အတူတူဘဲ', date: new Date('1/13/2025') },
];

const ReplyMessage: React.FC = () => {
  return (
    <>
      {messages.map((message, index: number) => (
        <div
          key={index}
          className="flex float-right justify-end items-center w-3/4 group"
        >
          <div className="cursor-pointer flex gap-3 opacity-0 group-hover:opacity-100">
            <EllipsisVerticalIcon className="size-6 text-gray-500" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-5 text-gray-500"
              fill="currentColor"
            >
              <path d="M205 34.8c11.5 5.1 19 16.6 19 29.2l0 64 112 0c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-96 0 0 64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" />
            </svg>
            <EmojiPopover>
              <FaceSmileIcon className="size-6 text-gray-500" />,
            </EmojiPopover>
          </div>
          <div className="flex items-end w-auto bg-purple-300 dark:bg-gray-800 mx-3 my-1 rounded-2xl rounded-br-none">
            <div className="p-3">
              <div className="text-gray-700 dark:text-gray-200">
                {message.text}
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-400 mt-2 text-right">
                <span className="">{formatWithShortUnits(message.date)}</span>
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
      ))}
    </>
  );
};

export default ReplyMessage;
