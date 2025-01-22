import { Room } from '../models/room.model';

export const createRoom = async (roomName: string) => {
  const room = new Room({ name: roomName });
  await room.save();
  return room;
};

export const getAllRooms = async () => {
  return await Room.find();
};

export const addUserToRoom = async (roomId: string, userId: string) => {
  const room = await Room.findById(roomId);
  if (room) {
    room.participants.push(userId);
    await room.save();
  }
};
