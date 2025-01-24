import { Message, IMessage } from '../models/message.model';

export const createMessage = async (
  room_id: string,
  sender_id: string,
  text: string
): Promise<IMessage> => {
  const message = new Message({ room_id, sender_id, text });
  return await message.save();
};

export const getMessagesByRoomId = async (
  room_id: string
): Promise<IMessage[]> => {
  return await Message.find({ room_id });
};
