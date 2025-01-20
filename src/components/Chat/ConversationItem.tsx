import React from 'react';
import { formatWithShortUnits } from '../../utils/formatDate';
import MessageSignal from './MessageSignal';

interface EachSpeech {
  id: number;
  name?: string;
  profile?: string;
  time: string;
  message?: string;
  active?: number;
}

const ConversationItem: React.FC<EachSpeech> = (speech: EachSpeech) => {
  const _class =
    speech.active === speech.id ? 'bg-blue-100' : 'bg-white dark:bg-gray-800';
  return (
    <div>
      <div
        className={
          'dark:bg-gray-700 dark:hover:bg-gray-700 hover:bg-gray-100 mb-1 rounded ' +
          _class
        }
        {...(speech.message && speech?.message?.length > 45
          ? { title: speech?.message }
          : {})}
      >
        <div className="flex items-center px-1 py-1.5 cursor-pointer">
          <div className="size-12 m-1">
            <img
              className="rounded-full"
              src={speech.profile}
              alt={speech.name}
            />
          </div>
          <div className="flex-grow px-2">
            <div className="flex justify-between text-md ">
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {speech.name}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-300 flex pr-2">
                <MessageSignal /> &ensp;
                {formatWithShortUnits(speech.time)}
              </div>
            </div>
            <div className="text-xs text-gray-600 py-1 dark:text-gray-400 mt-1">
              {speech.message && speech?.message?.length > 45
                ? speech?.message?.substring(0, 45) + '...'
                : speech?.message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
