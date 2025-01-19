import React from 'react';
import ConversationItem from './ConversationItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Conversation: React.FC = () => {
  const users = useSelector((state: RootState) => state.user);
  return (
    <div className="pl-3 pr-1.5 h-[85%] overflow-y-scroll scrollbar-thin mr-1">
      {users.map((item, index: number) => (
        <a type="button" onClick={() => console.log(index + 1)} key={index}>
          <ConversationItem
            profile={item.profile}
            name={item.name}
            message="haha"
            time="2025-01-19T14:05:43.594Z"
            active={true}
          />
        </a>
      ))}
    </div>
  );
};

export default Conversation;
