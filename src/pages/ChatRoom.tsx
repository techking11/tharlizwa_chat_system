import Message from '../components/Chat/Message';
import Button from '../components/Shared/Button';

const ChatRoom = () => {
  return (
    <div className="flex flex-col min-w-[550px] min-h-[750px]">
      <header className="p-4 bg-gray-800 text-white">Chat Room</header>
      <div className="flex-1 p-4 bg-gray-100">
        <Message content="message" isSender={true} />
      </div>
      <footer className="p-4 bg-white flex">
        <input
          type="text"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Type a message..."
        />
        <Button text="Send" onClick={() => console.log('r')} />
      </footer>
    </div>
  );
};

export default ChatRoom;
