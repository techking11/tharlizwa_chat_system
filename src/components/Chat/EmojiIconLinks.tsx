import React from 'react';
import Tooltip from './Tooltip';
import { FaceSmileIcon } from '@heroicons/react/24/outline';

const EmojiIconLinks: React.FC = () => {
  const icons = [
    {
      tooltipText: 'Smileys emotion',
      href: '#smileys_emotion',
      icon: (
        <FaceSmileIcon className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150" />
      ),
    },
    {
      tooltipText: 'People body',
      href: '#people_body',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
          fill="currentColor"
        >
          <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z" />
        </svg>
      ),
    },
    {
      tooltipText: 'Flags',
      href: '#flags',
      icon: (
        <FaceSmileIcon className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150" />
      ),
    },
    {
      tooltipText: 'Objects',
      href: '#objects',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
          fill="currentColor"
        >
          <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z" />
        </svg>
      ),
    },
    {
      tooltipText: 'Symbols',
      href: '#symbols',
      icon: (
        <FaceSmileIcon className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150" />
      ),
    },
    {
      tooltipText: 'Activities',
      href: '#activities',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
          fill="currentColor"
        >
          <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap gap-1 px-1 cursor-pointer border-t border-gray-300 dark:border-gray-600 py-2 justify-center items-center text-gray-500 dark:text-gray-400">
      {icons.map((icon, index) => (
        <Tooltip key={index} tooltipText={icon.tooltipText}>
          <a href={icon.href}>{icon.icon}</a>
        </Tooltip>
      ))}
    </div>
  );
};

export default EmojiIconLinks;
