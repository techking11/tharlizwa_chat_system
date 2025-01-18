import { useState } from 'react';
import Chat from '../components/Chat/Chat';
import PageLoading from '../components/Loading/PageLoading';

const ChatRoom: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => setLoading(false), 4000);
  return (
    <div className="h-full">
      <div className="h-5 bg-white"></div>
      {loading ? <PageLoading /> : <Chat />}
    </div>
  );
};

export default ChatRoom;
