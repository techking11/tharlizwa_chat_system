import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const accordionData = [
  {
    title: 'Privacy Settings',
    content:
      'Manage your privacy preferences, including blocking, restrictions, and encryption settings.',
  },
  {
    title: 'Notification Settings',
    content:
      'Adjust your notification preferences, such as muting or enabling sound alerts.',
  },
  {
    title: 'Support Options',
    content:
      'Contact support or report any issues you face in the application.',
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
    <div className="">
      {accordionData.map((item, index) => (
        <div key={index} className="">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center py-5 w-full bg-white px-5 font-medium text-gray-700 hover:bg-gray-100"
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
            <div className="bg-white px-4 text-gray-500">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiOpenAccordion;
