import { Message, IMessage } from '../models/message.model';

export const createMessage = async (
  roomId: string,
  senderId: string,
  username: string,
  text: string
): Promise<IMessage> => {
  const message = new Message({ roomId, senderId, username, text });
  return await message.save();
};

export const getMessagesByRoomId = async (
  roomId: string
): Promise<IMessage[]> => {
  return await Message.find({ roomId });
};
