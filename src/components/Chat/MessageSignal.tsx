import { CheckIcon } from '@heroicons/react/24/outline';
import React from 'react';

const MessageSignal: React.FC = () => {
  return (
    <>
      <CheckIcon className="size-4 text-gray-500" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="size-3 text-blue-700 hidden"
        fill="currentColor"
      >
        <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
      </svg>
    </>
  );
};

export default MessageSignal;