import mongoose from 'mongoose';
import { Room } from '../models/room.model';

export const createRoom = async (name: string) => {
  const room = new Room({ name });
  await room.save();
  return room;
};

export const getAllRooms = async () => {
  return await Room.find();
};

export const addUserToRoom = async (
  room_id: string,
  user_id: mongoose.Types.ObjectId
) => {
  const room = await Room.findById(room_id);
  if (room) {
    room.created_by = user_id;
    await room.save();
  }
};
