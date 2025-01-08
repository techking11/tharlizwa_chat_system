import React, { useEffect, useState } from 'react';
import { Field, Input } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { EmojiResult, EmojiSingle } from '../../services/emoji';

const EmojiGroup: React.FC = () => {
  const [data, setData] = useState<EmojiResult[]>([]);
  useEffect(() => {
    (async function () {
      const result = await EmojiSingle('flags');
      setData(result);
    })();
  }, []);
  return (
    <div className="relative">
      <div className="absolute bottom-0 inline-block w-64 px-4 py-3 mb-10 -ml-32 text-white bg-gray-800 rounded-lg">
        <div className="w-full max-w-md px-4">
          <Field className="flex justify-center items-center relative">
            <MagnifyingGlassIcon className="size-4 text-gray-400 absolute top-1/2 pb-1 ml-3 left-0" />
            <Input
              className={clsx(
                'mt-3 block w-full rounded-full border-none bg-white/5 py-1.5 pr-3 pl-9 text-sm text-gray-500',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-none'
              )}
              placeholder="Search Emoji"
            />
          </Field>
          <div className="flex justify-between items-center text-sm text-gray-500 my-3">
            <p>Your Reactions</p>
            <p>Customize</p>
          </div>
          <div className="p-4 flex gap-3 cursor-pointer">
            <img
              src="/assets/icons/heart.png"
              alt="Heart"
              className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/haha.png"
              alt="Haha"
              className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/wow.png"
              alt="Wow"
              className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/sad.png"
              alt="Sad"
              className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/angry.png"
              alt="Angry"
              className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/like.png"
              alt="Like"
              className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
            />
          </div>
          <div className="">
            <p className="text-gray-600">Smileys & People</p>
            <div className="p-4 flex gap-3 cursor-pointer">
              <img
                src="/assets/icons/heart.png"
                alt="Heart"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/haha.png"
                alt="Haha"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/wow.png"
                alt="Wow"
                className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/sad.png"
                alt="Sad"
                className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/angry.png"
                alt="Angry"
                className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/like.png"
                alt="Like"
                className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
              />
            </div>
          </div>
          <div className="p-4 flex gap-3 cursor-pointer border-t border-gray-700">
            <img
              src="/assets/icons/heart.png"
              alt="Heart"
              className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/haha.png"
              alt="Haha"
              className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/wow.png"
              alt="Wow"
              className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/sad.png"
              alt="Sad"
              className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/angry.png"
              alt="Angry"
              className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
            />
            <img
              src="/assets/icons/like.png"
              alt="Like"
              className="size-5 active:scale-100 hover:scale-125 transition-all duration-150"
            />
          </div>
          <div className="flex flex-wrap w-56 justify-center items-center">
            {data.map((item, i: number) => (
              <p key={i} className="size-10">
                {item.character}
              </p>
            ))}
          </div>
        </div>
        <span className="absolute bottom-0 left-[50%] right-0 w-5 h-5 -mb-1 transform rotate-45 bg-gray-800 z-20"></span>
      </div>
    </div>
  );
};

export default EmojiGroup;
