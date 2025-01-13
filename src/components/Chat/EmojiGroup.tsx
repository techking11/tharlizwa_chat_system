import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { emojisGroupList } from '../../services/emoji';
import { RootState } from '../../redux/store';
import * as EmojiActions from '../../redux/slices/emojiSlice';
import { useEmojisQuery } from '../../hooks/useEmojisQuery';
import EmojiSearchBar from './EmojiSearchbar';
import EmojiCategory from './EmojiCategory';
import EmojiIconLinks from './EmojiIconLinks';
import EmojisSection from './EmojisSection';

const EmojiGroup: React.FC = () => {
  const dispatch = useDispatch();
  const { emojisByGroup, groupIndex, offset } = useSelector(
    (state: RootState) => state.emoji
  );
  const currentGroup = emojisGroupList[groupIndex];
  const { data } = useEmojisQuery(currentGroup, offset);

  useEffect(() => {
    if (data) {
      if (data.length === 0) {
        if (groupIndex < emojisGroupList.length - 1) {
          dispatch(EmojiActions.incrementGroupIndex());
          dispatch(EmojiActions.setOffset(0));
        } else {
          dispatch(EmojiActions.setHasMore(false));
        }
      } else {
        dispatch(EmojiActions.addEmojis({ group: currentGroup, emojis: data }));
        dispatch(EmojiActions.setOffset(offset + data.length));
      }
    }
  }, [data, dispatch, currentGroup, offset, groupIndex]);

  return (
    <div className="relative text-gray-700">
      <div className="absolute bottom-0 inline-block w-96 py-1 mb-10 -ml-32 text-white bg-gray-700 shadow-md dark:bg-gray-700 rounded-2xl">
        <div className="w-full max-w-md px-3 z-10">
          <EmojiSearchBar />
          <div className="overflow-y-scroll overflow-x-hidden scroll-smooth h-96">
            <EmojisSection />
            <div className="py-1 flex flex-wrap gap-3 cursor-pointer">
              {Object.entries(emojisByGroup).map(([groupName, groupEmojis]) => (
                <EmojiCategory
                  key={groupName}
                  groupName={groupName}
                  groupEmojis={groupEmojis}
                />
              ))}
            </div>
          </div>
        </div>
        <EmojiIconLinks />
        <span className="absolute -bottom-1 left-[50%] right-0 w-5 h-5 -mb-1 transform rotate-45 bg-gray-700 dark:bg-gray-700"></span>
      </div>
    </div>
  );
};

export default EmojiGroup;
