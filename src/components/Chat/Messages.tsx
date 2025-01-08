import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import {
  CheckIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
  InformationCircleIcon,
  PaperAirplaneIcon,
  PhoneArrowUpRightIcon,
  PlusIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

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
      <div className="w-full flex-grow bg-gray-100 dark:bg-gray-900 my-2 p-2 overflow-y-auto">
        <div className="flex items-center w-3/4">
          <img
            className="w-8 h-8 m-3 rounded-full"
            src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png"
            alt="avatar"
          />
          <div className="p-3 bg-purple-300 dark:bg-gray-800 mx-3 my-1 rounded-2xl rounded-bl-none">
            <div className="text-gray-700 dark:text-gray-200 text-base">
              နေကောင်းလား
            </div>
            <div className="text-xs text-gray-400 mt-2 text-right">
              1 day ago
            </div>
          </div>
          <div className="cursor-pointer flex gap-3">
            <FaceSmileIcon className="size-6 text-gray-500" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-5 text-gray-500"
              fill="currentColor"
            >
              <path d="M205 34.8c11.5 5.1 19 16.6 19 29.2l0 64 112 0c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-96 0 0 64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" />
            </svg>
            <EllipsisVerticalIcon className="size-6 text-gray-500" />
          </div>
        </div>

        <div className="flex justify-end items-center">
          <div className="cursor-pointer flex gap-3">
            <EllipsisVerticalIcon className="size-6 text-gray-500" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-5 text-gray-500"
              fill="currentColor"
            >
              <path d="M205 34.8c11.5 5.1 19 16.6 19 29.2l0 64 112 0c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-96 0 0 64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" />
            </svg>
            <FaceSmileIcon className="size-6 text-gray-500" />
          </div>
          <div className="flex items-end w-auto bg-purple-500 dark:bg-gray-800 mx-3 my-1 rounded-2xl rounded-br-none">
            <div className="p-3">
              <div className="text-gray-200">ဟုတ် နေကောင်းပါတယ်</div>
              <div className="text-xs text-gray-400 mt-2 text-right">
                <span>1 day ago</span> &nbsp;
                <CheckIcon className="size-4 text-blue-500 inline-block" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="size-3 text-blue-500 hidden"
                  fill="currentColor"
                >
                  <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popover>
        <PopoverButton className="m-5 block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          <FaceSmileIcon className="size-6" />
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="top"
          className="divide-y divide-white/5 rounded-xl bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <div className="p-4 flex gap-3 cursor-pointer">
            <img
              src="/assets/icons/heart.png"
              alt="Heart"
              className="size-8 scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/haha.png"
              alt="Haha"
              className="size-8 scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/wow.png"
              alt="Wow"
              className="size-8 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/sad.png"
              alt="Sad"
              className="size-8 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/angry.png"
              alt="Angry"
              className="size-8 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/like.png"
              alt="Like"
              className="size-8 hover:scale-125 transition-all duration-150"
            />
            <PlusIcon className="size-10 ml-1 p-2 text-gray-300 bg-gray-700 rounded-full hover:bg-gray-600 active:bg-gray-700" />
          </div>
        </PopoverPanel>
      </Popover>
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
