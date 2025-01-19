import React from 'react';
import Messages from '../Chat/Messages';

function HomeChat(): React.ReactElement {
  return (
    <div className="flex-grow h-screen border-r dark:border-none">
      <Messages conversactionId={1} />
    </div>
  );
}

export default HomeChat;
