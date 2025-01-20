import React from 'react';
import {
  PhoneArrowUpRightIcon,
  VideoCameraIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { Person } from '../../types/personTypes';

const Header: React.FC<{ user: Person; showVisible: () => void }> = ({
  user,
  showVisible,
}) => (
  <div className="w-full h-15 p-1 bg-white dark:bg-gray-800 border-b dark:border-none">
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
          src={user?.profile}
          alt={user?.name}
        />
      </div>
      <div className="flex-grow p-2">
        <div className="text-md text-gray-700 dark:text-gray-100 font-semibold">
          {user?.name}
        </div>
        <div className="flex items-center mt-1">
          <div className="w-2 h-2 bg-green-300 rounded-full"></div>
          <div className="text-xs text-gray-70 dark:text-gray-100 ml-1">
            {user?.status}
          </div>
        </div>
      </div>
      <div className="p-2 text-white cursor-pointer rounded-full flex gap-1">
        <PhoneArrowUpRightIcon className="size-9 p-2 rounded-full dark:text-gray-300 text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600" />
        <VideoCameraIcon className="size-9 p-2 rounded-full dark:text-gray-300 text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600" />
        <button onClick={showVisible}>
          <InformationCircleIcon className="size-9 p-2 rounded-full dark:text-gray-300 text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600" />
        </button>
      </div>
    </div>
  </div>
);

export default Header;
