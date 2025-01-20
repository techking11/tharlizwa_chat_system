import React, { ReactNode } from 'react';
import EmojiSearchBar from './EmojiSearchbar';
import EmojiCategory from './EmojiCategory';
import EmojiIconLinks from './EmojiIconLinks';
import EmojisSection from './EmojisSection';
import allEmojis from '../../data/emotions';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const EmojiGroup: React.FC<{ children: ReactNode }> = ({ children }) => {
  const allData = allEmojis;

  return (
    <Popover>
      <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        {children}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="top"
        className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        <div className="w-60 px-3 z-10 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg">
          <EmojiSearchBar />
          <div className="scrollbar-thin dark:scrollbar-thin-dark overflow-y-scroll overflow-x-hidden scroll-smooth h-60">
            <EmojisSection />
            <div className="py-1 flex flex-wrap gap-3 cursor-pointer">
              {Object.entries(allData).map(([groupName, groupEmojis]) => {
                return (
                  <EmojiCategory
                    key={groupName}
                    groupName={groupName}
                    groupEmojis={groupEmojis}
                  />
                );
              })}
            </div>
          </div>
          <EmojiIconLinks />
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default EmojiGroup;
