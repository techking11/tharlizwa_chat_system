import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useReply } from '../../hooks/useReply';

const ReplyAlert: React.FC = () => {
  const { isVisible, toggleVisible, reply } = useReply();
  if (!isVisible) return null;

  return (
    <div
      id="alert-5"
      className="flex items-center py-2 px-5 bg-gray-100 dark:bg-gray-700"
      role="alert"
    >
      <div className="ms-3 text-sm text-gray-700 dark:text-gray-300">
        <p className="font-medium">{reply.name}</p>
        <p className="mt-1">{reply.message}</p>
      </div>
      <button
        onClick={toggleVisible}
        type="button"
        className="ms-auto size-5 -mx-1.5 -my-1.5 bg-transparent text-gray-500 dark:text-gray-300 inline-flex items-center justify-center"
        data-dismiss-target="#alert-5"
        aria-label="Close"
      >
        <XMarkIcon className="size-20" />
      </button>
    </div>
  );
};

export default ReplyAlert;
