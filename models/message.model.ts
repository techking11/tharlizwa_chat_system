import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  senderId: string;
  text: string;
  createdAt: Date;
}

const MessageSchema: Schema = new Schema({
  roomId: { type: String, required: true },
  senderId: { type: String, required: true },
  username: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Message = mongoose.model<IMessage>('Message', MessageSchema);
