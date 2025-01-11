import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Field, Input } from '@headlessui/react';
import {
  FaceSmileIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import { EmojiSingle, emojisGroupList } from '../../services/emoji';
import { EmojiGroupTypes } from '../../types/emojiGroup/types';
import Tooltip from './Tooltip';

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
      <div className="absolute bottom-0 inline-block w-96 py-1 mb-10 -ml-32 text-white bg-gray-800 rounded-lg">
        <div className="w-full max-w-md px-3 z-10">
          <Field className="flex justify-center items-center relative mb-2">
            <MagnifyingGlassIcon className="size-5 text-gray-400 absolute top-[45%] pb-1 ml-3 left-0" />
            <Input
              className={clsx(
                'mt-3 block w-full rounded-full border-none bg-white/5 py-2.5 pr-3 pl-10 text-base text-gray-400',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-none'
              )}
              placeholder="Search Emoji"
            />
          </Field>
          <div className="overflow-y-scroll overflow-x-hidden scroll-smooth h-96">
            <div className="flex justify-between items-center text-base text-gray-500 mt-3">
              <p>Your Reactions</p>
              <p className="text-gray-400 text-base rounded-md px-2 cursor-pointer hover:bg-gray-600 active:bg-gray-700">
                Customize
              </p>
            </div>
            <div className="py-3 flex flex-wrap justify-center items-center gap-4 cursor-pointer">
              <img
                src="/assets/icons/heart.png"
                alt="Heart"
                className="size-10 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/haha.png"
                alt="Haha"
                className="size-10 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/wow.png"
                alt="Wow"
                className="size-10 active:scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/sad.png"
                alt="Sad"
                className="size-10 active:scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/angry.png"
                alt="Angry"
                className="size-10 active:scale-100 hover:scale-125 transition-all duration-150"
              />
              <img
                src="/assets/icons/like.png"
                alt="Like"
                className="size-10 active:scale-100 hover:scale-125 transition-all duration-150"
              />
            </div>
            <div className="py-1 flex flex-wrap gap-3 cursor-pointer">
              {Object.entries(emojisByGroup).map(([groupName, groupEmojis]) => (
                <div key={groupName} id={groupName}>
                  <p className="text-gray-400 capitalize">
                    {formatGroupName(groupName)}
                  </p>
                  <div className="py-3 flex flex-wrap justify-center items-center gap-3 px-1 cursor-pointer">
                    {groupEmojis.map((emoji, index) => (
                      <p
                        key={index}
                        className="active:scale-100 text-3xl size-9 hover:scale-125 transition-all duration-150 outline-none border-none"
                      >
                        {emoji.character}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 px-3 cursor-pointer border-t border-gray-700 py-4 justify-center items-center text-gray-400">
          <Tooltip tooltipText="Smileys emotion">
            <a href="#smileys_emotion">
              <FaceSmileIcon className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150" />
            </a>
          </Tooltip>
          <Tooltip tooltipText="People body">
            <a href="#people_body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
                fill="currentColor"
              >
                <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z" />
              </svg>
            </a>
          </Tooltip>
          <Tooltip tooltipText="Component">
            <a href="#component">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
                fill="currentColor"
              >
                <path d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7l-205.2 0c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192 298.1 99.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52z" />
              </svg>
            </a>
          </Tooltip>
          <Tooltip tooltipText="Animal nature">
            <a href="#animals_nature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
                fill="currentColor"
              >
                <path d="M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2l32 0c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-16-64 0 0 16c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-17.6c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2l0 10.8c0 17.7 14.3 32 32 32l32 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-76c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12l0 76c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-118.9L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1 7.2 0L256 64l32 0c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
              </svg>
            </a>
          </Tooltip>
          <Tooltip tooltipText="Food drink">
            <a href="#food_drink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
                fill="currentColor"
              >
                <path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32L8.6 224C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256l457.1 0c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28l-231.5 0c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" />
              </svg>
            </a>
          </Tooltip>
          <Tooltip tooltipText="Travel places">
            <a href="#travel_places">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
                fill="currentColor"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </a>
          </Tooltip>
          <Tooltip tooltipText="Activities">
            <a href="#activities">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
                fill="currentColor"
              >
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
              </svg>
            </a>
          </Tooltip>
          <Tooltip tooltipText="Objects">
            <a href="#objects">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
                fill="currentColor"
              >
                <path d="M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l209.1 0C339.6 12.9 360.3 0 384 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 113.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-209.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-113.1zM119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 113.1c9.7 5.6 17.8 13.7 23.4 23.4l209.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-113.1c-9.7-5.6-17.8-13.7-23.4-23.4L119.4 96zm192 384c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-40.6 64 0 0 40.6c9.7 5.6 17.8 13.7 23.4 23.4l209.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-113.1c-9.7-5.6-17.8-13.7-23.4-23.4l-46 0c-5.4-15.4-14.6-28.9-26.5-39.6l0-24.4 72.6 0c11.1-19.1 31.7-32 55.4-32c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 113.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-209.1 0z" />
              </svg>
            </a>
          </Tooltip>
          <Tooltip tooltipText="Symbols">
            <a href="#symbols">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
                fill="currentColor"
              >
                <path d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5 .2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9 .1 76.2-33.9 76.2-76.2z" />
              </svg>
            </a>
          </Tooltip>
          <Tooltip tooltipText="Flags">
            <a href="#flags">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="size-5 active:scale-100 scale-100 hover:scale-125 transition-all duration-150"
                fill="currentColor"
              >
                <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z" />
              </svg>
            </a>
          </Tooltip>
        </div>
        <span className="absolute -bottom-1 left-[50%] right-0 w-5 h-5 -mb-1 transform rotate-45 bg-gray-800"></span>
      </div>
    </div>
  );
};

export default EmojiGroup;
