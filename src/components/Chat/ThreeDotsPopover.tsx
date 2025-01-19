import React, { ReactNode } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const ThreeDotsPopover: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Popover>
      <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        {children}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="top"
        className="divide-y shadow-lg border dark:border-none divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        <div className="flex flex-col justify-start px-5 py-3 w-40 bg-white dark:bg-gray-700 dark:text-gray-50  shadow-lg">
          <a href="" className="hover:underline">
            Remove
          </a>
          <a href="" className="hover:underline">
            Forward
          </a>
          <a href="" className="hover:underline">
            Pin
          </a>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default ThreeDotsPopover;
