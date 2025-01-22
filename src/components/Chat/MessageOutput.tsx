import React, { useState } from 'react';
import {
  FaceSmileIcon,
  PaperAirplaneIcon,
  MicrophoneIcon,
} from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { createOne } from '../../redux/slices/messageSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Message } from '../../types/messageTypes';

const MessageInput: React.FC = () => {
  const [inputData, setInputData] = useState<string>('');
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.message);
  const activeContion = useSelector((state: RootState) => state.util.active);
  const user = localStorage.getItem('currentUser');
  const currentUser = JSON.parse(user);
  const sendMessage: Message = {
    id: messages.length,
    conversaction_id: activeContion,
    sender_id: currentUser === null ? 99 : currentUser.id,
    message_type: 'text',
    content: inputData,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    is_deleted: false,
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputData !== '') {
      dispatch(createOne(sendMessage));
      setInputData('');
    }
  };
  return (
    <div className="h-15 p-1 border-t dark:border-none bg-white dark:bg-gray-800">
      <div className="flex items-center">
        <div className="p-2 text-gray-600 dark:text-gray-200 ">
          <FaceSmileIcon className="size-6" />
        </div>
        <div className="search-chat flex flex-grow p-2">
          <input
            value={inputData}
            className="input text-gray-700 dark:text-gray-200 text-sm p-5 focus:outline-none bg-white dark:bg-gray-800  flex-grow rounded-l-md"
            type="text"
            placeholder="Type your message ..."
            onChange={(e) => setInputData(e.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
          />
          <div className="dark:text-gray-200 flex justify-center items-center pr-3 text-gray-50 rounded-r-md">
            <button onClick={() => dispatch(createOne(sendMessage))}>
              <PaperAirplaneIcon className="size-9 p-2 bg-blue-500 rounded-full cursor-pointer" />
            </button>
            <MicrophoneIcon className="size-9 p-2 bg-blue-500 rounded-full cursor-pointer hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
