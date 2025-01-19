import React from 'react';
import { Field, Input } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const EmojiSearchBar: React.FC = () => {
  return (
    <Field className="flex justify-center items-center relative mb-2">
      <MagnifyingGlassIcon className="size-5 text-gray-500 dark:text-gray-400 absolute top-[45%] pb-1 ml-3 left-0" />
      <Input
        className={clsx(
          'mt-3 block w-full rounded-full border-none bg-gray-200 dark:bg-white/5 py-1 pr-3 pl-10 text-xs text-gray-500 dark:text-gray-400',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-none'
        )}
        placeholder="Search Emoji"
      />
    </Field>
  );
};

export default EmojiSearchBar;
