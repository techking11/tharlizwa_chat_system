import React from 'react';
import {
  BellIcon,
  MagnifyingGlassIcon,
  StarIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Dropdown from '../Dropdown/Dropdown';
import { useRightInfo } from '../../hooks/useRightInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const RightInfo: React.FC = () => {
  const activeConversaction = useSelector(
    (state: RootState) => state.util.active
  );
  const conversaction = useSelector((state: RootState) =>
    state.conversaction.find((item) => item.id === activeConversaction)
  );
  const user = useSelector((state: RootState) =>
    state.user.find((user) => user.id === conversaction?.created_by)
  );
  const { isVisible, hideVisible } = useRightInfo();
  if (!isVisible) return null;
  return (
    <div className="w-[17%] h-screen overflow-y-scroll scrollbar-thin dark:scrollbar-thin-dark mr-1 bg-white dark:bg-gray-800">
      <div className="relative">
        <div className="size-full bg-[rgba(0,0,0,0.29)] absolute"></div>
        <img
          className="w-full object-cover"
          src={user?.profile}
          alt={user?.name}
        />
        <button
          onClick={hideVisible}
          className="absolute top-3 right-4 cursor-pointer"
        >
          <XMarkIcon className="size-5 text-gray-300" />
        </button>
        <div className="absolute bottom-0 w-full px-5 py-3 text-gray-50">
          <div className="w-full flex justify-between items-center">
            <span className="">{conversaction?.name}</span>
            <StarIcon className="size-5" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-7 mt-5">
        <div className="cursor-pointer" title="Profile">
          <UserIcon className="size-10 p-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-700 dark:text-gray-300 rounded-full" />
          <span className="text-sm dark:text-gray-100">Profile</span>
        </div>
        <div className="cursor-pointer" title="Mute">
          <BellIcon className="size-10 p-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-700 dark:text-gray-300 rounded-full" />
          <span className="text-sm dark:text-gray-100">Mute</span>
        </div>
        <div className="cursor-pointer" title="Search">
          <MagnifyingGlassIcon className="size-10 p-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-700 dark:text-gray-300 rounded-full" />
          <span className="text-sm dark:text-gray-100">Search</span>
        </div>
      </div>
      <Dropdown />
    </div>
  );
};

export default RightInfo;
