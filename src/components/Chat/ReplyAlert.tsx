import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ReplyAlert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div
      id="alert-5"
      className="flex items-center py-2 px-5 bg-purple-100 dark:bg-gray-800"
      role="alert"
    >
      <div className="ms-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        <p className="">Nay Myo Aung</p>
        <p className="mt-1">နေကောင်းလား</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        type="button"
        className="ms-auto size-5 -mx-1.5 -my-1.5 bg-transparent text-gray-500 inline-flex items-center justify-center"
        data-dismiss-target="#alert-5"
        aria-label="Close"
      >
        <XMarkIcon className="size-20" />
      </button>
    </div>
  );
};

export default ReplyAlert;
