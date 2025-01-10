import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Field, Input } from '@headlessui/react';
import {
  FaceSmileIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import { EmojiSingle, emojisGroupList } from '../../services/emoji';
import { EmojiGroupTypes } from '../../types/emojiGroup/types';

const EmojiGroup: React.FC = () => {
  const [emojisByGroup, setEmojisByGroup] = useState<
    Record<string, EmojiGroupTypes[]>
  >({});
  const [groupIndex, setGroupIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchEmojis = async () => {
    if (!hasMore || loading || groupIndex >= emojisGroupList.length) return;
    setLoading(true);
    const currentGroup = emojisGroupList[groupIndex];

    try {
      const response = await EmojiSingle(currentGroup, offset);
      const emojiCharacters = response.map(
        (emoji: EmojiGroupTypes) => emoji.code
      );
      if (emojiCharacters.length === 0) {
        if (groupIndex < emojisGroupList.length - 1) {
          setGroupIndex((prevIndex) => prevIndex + 1);
          setOffset(0);
        } else {
          setHasMore(false);
        }
      } else {
        setEmojisByGroup((prev) => ({
          ...prev,
          [currentGroup]: [...(prev[currentGroup] || []), ...response],
        }));
        setOffset((prevOffset) => prevOffset + 30);
      }
    } catch (error) {
      console.error('Error fetching emojis:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatGroupName = (groupName: string): string =>
    groupName
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .trim();

  useEffect(() => {
    fetchEmojis();
  }, [emojisByGroup, groupIndex]);

  return (
    <div className="relative text-gray-700">
      <div className="absolute bottom-0 inline-block w-80 py-5 mb-10 -ml-32 text-white bg-gray-800 rounded-lg">
        <div className="w-full max-w-md px-8 z-10">
          <Field className="flex justify-center items-center relative mb-4">
            <MagnifyingGlassIcon className="size-5 text-gray-400 absolute top-[45%] pb-1 ml-3 left-0" />
            <Input
              className={clsx(
                'mt-3 block w-full rounded-full border-none bg-white/5 py-2.5 pr-3 pl-10 text-base text-gray-400',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-none'
              )}
              placeholder="Search Emoji"
            />
          </Field>
          <div className="overflow-y-scroll overflow-x-hidden scroll-smooth h-96 pr-3">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Your Reactions</p>
              <p>Customize</p>
            </div>
            <div className="py-3 flex gap-3 cursor-pointer">
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
            <div className="py-3 flex flex-wrap gap-3 cursor-pointer">
              {Object.entries(emojisByGroup).map(([groupName, groupEmojis]) => (
                <div key={groupName}>
                  <p className="text-gray-600 capitalize">
                    {formatGroupName(groupName)}
                  </p>
                  <div className="py-3 flex flex-wrap gap-3 cursor-pointer">
                    {groupEmojis.map((emoji, index) => (
                      <p
                        key={index}
                        className="active:scale-100 hover:scale-150 text-lg transition-all duration-150"
                      >
                        {emoji.character}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 cursor-pointer border-t border-gray-700 py-3">
              <FaceSmileIcon className="size-8 active:scale-100 scale-100 hover:scale-125 transition-all duration-150" />
              <img
                src="/assets/icons/haha.png"
                alt="Haha"
                className="size-8 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/wow.png"
                alt="Wow"
                className="size-8 active:scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/sad.png"
                alt="Sad"
                className="size-8 active:scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/angry.png"
                alt="Angry"
                className="size-8 active:scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/like.png"
                alt="Like"
                className="size-8 active:scale-100 hover:scale-125 transition-all duration-150"
              />
            </div>
          </div>
        </div>
        <span className="absolute -bottom-1 left-[50%] right-0 w-5 h-5 -mb-1 transform rotate-45 bg-gray-800"></span>
      </div>
    </div>
  );
};

export default EmojiGroup;
