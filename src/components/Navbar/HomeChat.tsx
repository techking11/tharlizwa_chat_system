import React from 'react';
import Messages from '../Chat/Messages';

function HomeChat(): React.ReactElement {
  return (
    <div className="flex-grow h-screen border-r">
      <Messages />
    </div>
  );
}

export default HomeChat;
