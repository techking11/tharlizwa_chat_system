import React from 'react';
import {
  FaceSmileIcon,
  InformationCircleIcon,
  PaperAirplaneIcon,
  PhoneArrowUpRightIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

import SendMessage from './SendMessage';
import ReplyMessage from './ReplyMessage';
import ThemeSwitcher from '../Theme/ThemeSwicher';
import ReplyAlert from './ReplyAlert';
// import EmojiGroup from './EmojiGroup';

const Messages: React.FC = () => {
  return (
    <div className="flex-grow h-full flex flex-col">
      <div className="w-full h-15 p-1 bg-purple-600 dark:bg-gray-800 shadow-md rounded-xl rounded-bl-none rounded-br-none">
        <div className="flex p-2 align-middle items-center">
          <div className="p-2 md:hidden rounded-full mr-1 hover:bg-purple-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          <div className="border rounded-full border-white p-1/2">
            <img
              className="w-14 h-14 rounded-full"
              src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png"
              alt="avatar"
            />
          </div>
          <div className="flex-grow p-2">
            <div className="text-md text-gray-50 font-semibold">
              Rey Jhon A. Baquirin
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <div className="text-xs text-gray-50 ml-1">Online</div>
            </div>
          </div>
          <div className="p-2 text-white cursor-pointer hover:bg-purple-500 rounded-full flex gap-5">
            <PhoneArrowUpRightIcon className="size-5" />
            <VideoCameraIcon className="size-5" />
            <InformationCircleIcon className="size-5" />
          </div>
        </div>
      </div>

      <ThemeSwitcher />

      <div className="w-full flex-grow bg-gray-100 dark:bg-gray-900 my-2 p-2 overflow-y-auto">
        <SendMessage />
        <ReplyMessage />
      </div>
      {/* <EmojiGroup /> */}
      <ReplyAlert />
      <div className="h-15  p-3 rounded-xl rounded-tr-none rounded-tl-none bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center">
          <div className="p-2 text-gray-600 dark:text-gray-200 ">
            <FaceSmileIcon className="size-6" />
          </div>
          <div className="search-chat flex flex-grow p-2">
            <input
              className="input text-gray-700 dark:text-gray-200 text-sm p-5 focus:outline-none bg-gray-100 dark:bg-gray-800  flex-grow rounded-l-md"
              type="text"
              placeholder="Type your message ..."
            />
            <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200  flex justify-center items-center pr-3 text-gray-400 rounded-r-md">
              <PaperAirplaneIcon className="size-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
