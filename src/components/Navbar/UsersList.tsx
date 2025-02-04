import React from 'react';
import Conversation from '../Chat/Conversation';

export default function UsersList() {
  return (
    <div className="w-[23%] h-screen dark:bg-gray-800 bg-white hidden md:block py-3 border-x dark:border-none">
      <div className="h-full">
        <div className="text-xl font-extrabold text-gray-600 dark:text-gray-200 px-3">
          Tharlizwa
        </div>
        <div className="search-chat flex p-3">
          <input
            className="input text-gray-500 dark:text-gray-200 text-sm p-3 focus:outline-none bg-gray-100 dark:bg-gray-700 w-full rounded"
            type="text"
            placeholder="Search Messages"
          />
          <div className="bg-gray-100 dark:bg-gray-700 flex justify-center items-center pr-3 text-gray-400 rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="text-lg font-semibol text-gray-600 dark:text-gray-200 p-3">
          Recent
        </div>
        <Conversation />
      </div>
    </div>
  );
}
