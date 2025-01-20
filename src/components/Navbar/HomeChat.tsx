import React from 'react';
import Messages from '../Chat/Messages';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function HomeChat(): React.ReactElement {
  const activeContion = useSelector((state: RootState) => state.util.active);
  return (
    <div className="flex-grow h-screen border-r dark:border-none">
      <Messages conversactionId={activeContion} />
    </div>
  );
}

export default HomeChat;
