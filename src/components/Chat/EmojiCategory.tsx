import React from 'react';
import { formatGroupName } from '../../utils/formatGroupName';
import { EmojiGroupTypes } from '../../types/emojiGroup/types';

const EmojiCategory: React.FC<{
  groupName: string;
  groupEmojis: EmojiGroupTypes[];
}> = ({ groupName, groupEmojis }) => {
  return (
    <div key={groupName} id={groupName}>
      <p className="text-gray-400 capitalize">{formatGroupName(groupName)}</p>
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
  );
};

export default EmojiCategory;
