import mongoose, { Schema, Document } from 'mongoose';

export interface IRoom extends Document {
  name: string;
  participants: string[];
}

const RoomSchema = new Schema<IRoom>({
  name: { type: String, required: true, unique: true },
  participants: [{ type: String, required: true }],
});

export const Room = mongoose.model<IRoom>('Room', RoomSchema);
