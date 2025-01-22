import React from 'react';
import { useSelector } from 'react-redux';
import { useRightInfo } from '../../hooks/useRightInfo';
import { getMessagesByConversactionId } from '../../redux/selectors/messageSelector';
import { RootState } from '../../redux/store';
import Header from './Header';
import MessageList from './MessageList';
import MessageInput from './MessageOutput';
import ThemeSwitcher from '../Theme/ThemeSwicher';
import ReplyAlert from './ReplyAlert';

const Messages: React.FC<{ conversactionId: number }> = ({
  conversactionId,
}) => {
  const { showVisible } = useRightInfo();
  const messages = useSelector(getMessagesByConversactionId(conversactionId));
  const user = useSelector(
    (state: RootState) =>
      state.user.find((user) => user.id === conversactionId) || null
  );
  return (
    <div className="h-full flex flex-col flex-grow pr-1">
      <Header user={user} showVisible={showVisible} />
      <ThemeSwitcher />
      <MessageList messages={messages} user={user} />
      <ReplyAlert />
      <MessageInput />
    </div>
  );
};

export default Messages;
