import React, { useState } from 'react';
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  ChatBubbleLeftEllipsisIcon,
  PhotoIcon,
  LockClosedIcon,
  BellSlashIcon,
  ShieldCheckIcon,
  FlagIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const accordionData = [
  {
    title: 'Chat info',
    content: [
      { label: 'View Pinned Messages', icon: ChatBubbleLeftEllipsisIcon },
    ],
  },
  {
    title: 'Customize chat',
    content: [
      { label: 'Change theme', icon: Cog6ToothIcon },
      { label: 'Change emoji', icon: Cog6ToothIcon },
      { label: 'Edit nicknames', icon: Cog6ToothIcon },
    ],
  },
  {
    title: 'Media & files',
    content: [
      { label: 'Media', icon: PhotoIcon },
      { label: 'Files', icon: PhotoIcon },
    ],
  },
  {
    title: 'Privacy & support',
    content: [
      { label: 'Mute notifications', icon: BellSlashIcon },
      { label: 'Disappearing messages', icon: ShieldCheckIcon },
      { label: 'Verify end-to-end encryption', icon: LockClosedIcon },
      { label: 'Restrict', icon: XCircleIcon },
      { label: 'Block', icon: XCircleIcon },
      { label: 'Report', icon: FlagIcon },
    ],
  },
];

const MultiOpenAccordion: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="mt-5 h-[42%]">
      {accordionData.map((item, index) => (
        <div key={index} className="">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center py-5 w-full bg-white dark:bg-gray-800 px-5 font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-100"
          >
            {item.title}
            <span
              className={`transform transition-transform ${
                openIndexes.includes(index) ? 'rotate-180' : ''
              }`}
            >
              <ChevronDownIcon className="size-5" />
            </span>
          </button>

          {openIndexes.includes(index) && (
            <ul className="bg-white dark:bg-gray-800 px-6">
              {item.content.map((contentItem, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-3 py-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <contentItem.icon className="size-5 text-gray-500 dark:text-gray-400" />
                  <span>{contentItem.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiOpenAccordion;
