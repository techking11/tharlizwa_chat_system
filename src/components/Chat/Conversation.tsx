import React, { useEffect } from 'react';
import ConversationItem from './ConversationItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import userList from '../../data/users';
import { addUsers } from '../../redux/slices/userSlice';

const Conversation: React.FC = () => {
  const { users } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  console.log(new Date().toISOString());

  useEffect(() => {
    dispatch(addUsers(userList));
  }, []);
  return (
    <div className="pl-3 pr-1.5 h-[85%] overflow-y-scroll scrollbar-thin mr-1">
      {users.map((item, index: number) => (
        <ConversationItem
          key={index}
          profile={item.profile}
          name={item.name}
          message={item.message}
          time={item.time}
          active={item.active}
        />
      ))}
    </div>
  );
};

export default Conversation;
