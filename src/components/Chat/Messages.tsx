import React, { useEffect } from 'react';
import {
  FaceSmileIcon,
  InformationCircleIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  PhoneArrowUpRightIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

import SendMessage from './SendMessage';
import ReplyMessage from './ReplyMessage';
// import ThemeSwitcher from '../Theme/ThemeSwicher';
import ReplyAlert from './ReplyAlert';
// import EmojiGroup from './EmojiGroup';
import { useRightInfo } from '../../hooks/useRightInfo';
import msgData from '../../schemas/messageSchema';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/slices/messageSlice';

const Messages: React.FC = () => {
  const { showVisible } = useRightInfo();
  const messages = useSelector((state: RootState) =>
    state.message.messages.filter((msg) => msg.conversaction_id === 1)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addMessage(msgData));
  }, []);

  return (
    <div className="h-full flex flex-col flex-grow pr-1">
      <div className="w-full h-15 p-1 bg-white dark:bg-gray-800 border-b">
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
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="avatar"
            />
          </div>
          <div className="flex-grow p-2">
            <div className="text-md text-gray-700 font-semibold">
              Rey Jhon A. Baquirin
            </div>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <div className="text-xs text-gray-70 ml-1">Online</div>
            </div>
          </div>
          <div className="p-2 text-white cursor-pointer rounded-full flex gap-1">
            <PhoneArrowUpRightIcon className="size-9 p-2 rounded-full text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600" />
            <VideoCameraIcon className="size-9 p-2 rounded-full text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600" />
            <button onClick={showVisible}>
              <InformationCircleIcon className="size-9 p-2 rounded-full text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* <ThemeSwitcher /> */}

      <div className="w-full px-[10%] flex-grow bg-white dark:bg-gray-900 my-2 overflow-y-scroll scrollbar-thin">
        {messages.map((msg, i) => {
          const previousMessage = messages[i - 1];
          const showAvatar =
            !previousMessage || previousMessage.sender_id !== msg.sender_id;

          return (
            <div key={i}>
              {msg.sender_id === 1 && (
                <SendMessage message={msg} showAvatar={showAvatar} />
              )}
              {msg.sender_id === 2 && <ReplyMessage message={msg} />}
            </div>
          );
        })}
      </div>
      {/* <EmojiGroup /> */}
      <ReplyAlert />
      <div className="h-15 p-1 border-t bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <div className="p-2 text-gray-600 dark:text-gray-200 ">
            <FaceSmileIcon className="size-6" />
          </div>
          <div className="search-chat flex flex-grow p-2">
            <input
              className="input text-gray-700 dark:text-gray-200 text-sm p-5 focus:outline-none bg-white dark:bg-gray-800  flex-grow rounded-l-md"
              type="text"
              placeholder="Type your message ..."
            />
            <div className="dark:text-gray-200 flex justify-center items-center pr-3 text-gray-50 rounded-r-md">
              <PaperAirplaneIcon className="size-9 p-2 bg-blue-500 rounded-full cursor-pointer" />
              <MicrophoneIcon className="size-9 p-2 bg-blue-500 rounded-full cursor-pointer hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
