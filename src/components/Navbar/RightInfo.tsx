import React from 'react';
import { StarIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Dropdown from '../Dropdown/Dropdown';
import { useRightInfo } from '../../hooks/useRightInfo';

const RightInfo: React.FC = () => {
  const { isVisible, hideVisible } = useRightInfo();
  if (!isVisible) return null;
  return (
    <div className="max-w-sm overflow-x-hidden min-h-screen bg-white dark:bg-gray-800">
      <div className="relative">
        <div className="size-full bg-[rgba(0,0,0,0.25)] absolute"></div>
        <img
          className="w-full object-cover"
          src="https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_640.jpg"
          alt="Sunset in the mountains"
        />
        <button
          onClick={hideVisible}
          className="absolute top-3 right-4 cursor-pointer"
        >
          <XMarkIcon className="size-5 text-gray-300" />
        </button>
        <div className="absolute bottom-0 w-full px-5 py-3 text-gray-50">
          <div className="w-full flex justify-between items-center">
            <span className="">Nay Myo Aung</span>
            <StarIcon className="size-5" />
          </div>
        </div>
      </div>
      <Dropdown />
    </div>
  );
};

export default RightInfo;
