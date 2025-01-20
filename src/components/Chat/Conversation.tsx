import React from 'react';
import ConversationItem from './ConversationItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { activeConversaction } from '../../redux/slices/utilSlice';

const Conversation: React.FC = () => {
  const conversactions = useSelector((state: RootState) => state.conversaction);
  const users = useSelector((state: RootState) => state.user);
  const messages = useSelector((state: RootState) => state.message);
  const dispatch = useDispatch();
  const activeContion = useSelector((state: RootState) => state.util.active);
  return (
    <div className="pl-3 pr-1.5 h-[85%] overflow-y-scroll scrollbar-thin dark:scrollbar-thin-dark mr-1">
      {conversactions.map((item) => {
        const user = users.find((user) => user.id === item.created_by);
        const latestMessage = messages
          .filter((message) => message.conversaction_id === item.id)
          .slice(-1)[0];
        return (
          <a
            type="button"
            onClick={() => dispatch(activeConversaction(item.id))}
            key={item.id}
          >
            <ConversationItem
              id={item.id}
              profile={user?.profile}
              name={item.name}
              message={latestMessage?.content}
              time={latestMessage.created_at}
              active={activeContion}
            />
          </a>
        );
      })}
    </div>
  );
};

export default Conversation;
