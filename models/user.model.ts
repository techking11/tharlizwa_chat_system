import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  socketId: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  socketId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model<IUser>('User', UserSchema);
