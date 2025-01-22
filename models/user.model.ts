import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  phone_no: string;
  email: string;
  password: string;
  profile: string;
  status: 'Offline' | 'Online' | 'Busy' | 'Focus' | 'Away';
  socket_id: string;
  created_at: Date;
  updated_at: Date;
  is_deleted: boolean;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true, min: 5 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

export const User = mongoose.model<IUser>('User', UserSchema);
