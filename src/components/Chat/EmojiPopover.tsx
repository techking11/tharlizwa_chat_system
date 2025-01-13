import React, { ReactNode } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/outline';

const emojiIcons = [
  { src: '/assets/icons/heart.png', alt: 'Heart' },
  { src: '/assets/icons/haha.png', alt: 'Haha' },
  { src: '/assets/icons/wow.png', alt: 'Wow' },
  { src: '/assets/icons/sad.png', alt: 'Sad' },
  { src: '/assets/icons/angry.png', alt: 'Angry' },
  { src: '/assets/icons/like.png', alt: 'Like' },
];

interface EmojiPopoverProps {
  children: ReactNode;
}

const EmojiPopover: React.FC<EmojiPopoverProps> = ({ children }) => {
  return (
    <Popover>
      <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        {children}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="top"
        className="divide-y divide-white/5 rounded-full shadow-md bg-gray-50 dark:bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        <div className="p-3 flex gap-3 cursor-pointer">
          {emojiIcons.map((icon, index: number) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="size-7 scale-100 hover:scale-125 transition-all duration-150"
            />
          ))}
          <PlusIcon className="size-8 ml-1 p-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 active:bg-gray-200 dark:active:bg-gray-700" />
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default EmojiPopover;