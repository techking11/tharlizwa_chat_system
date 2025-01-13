import React from 'react';
import { formatWithShortUnits } from '../../utils/formatDate';

interface EachSpeech {
  message?: string;
  time: Date;
  name?: string;
  active?: boolean;
}

const ConversationItem: React.FC<EachSpeech> = (speech: EachSpeech) => {
  const _class = speech.active ? 'bg-gray-200' : 'bg-gray-100 dark:bg-gray-800';
  return (
    <div>
      <div
        className={
          'conversation-item p-1 dark:bg-gray-700 dark:hover:bg-gray-700 hover:bg-gray-200 m-1 rounded-md ' +
          _class
        }
      >
        <div className="flex items-center p-2  cursor-pointer">
          <div className="w-7 h-7 m-1">
            <img
              className="rounded-full"
              src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png"
              alt="avatar"
            />
          </div>
          <div className="flex-grow p-2">
            <div className="flex justify-between text-md ">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {speech.name}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-300">
                {formatWithShortUnits(speech.time)}
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 w-40 truncate">
              {speech.message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
