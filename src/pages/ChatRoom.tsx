import Chat from '../components/Chat/Chat';

const ChatRoom: React.FC = () => {
  return (
    <div className="h-full">
      <div className="h-5 bg-white border-b shadow-md"></div>
      <Chat />
    </div>
  );
};

export default ChatRoom;
