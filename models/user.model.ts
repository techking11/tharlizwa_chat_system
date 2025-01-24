import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  phone_no: string;
  email: string;
  password: string;
  profile?: string;
  status?: string;
  socket_id?: string;
  created_at?: Date;
  updated_at?: Date;
  is_deleted?: boolean;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone_no: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default: 'default.png',
    },
    status: {
      type: String,
      default: 'Offline',
    },
    socket_id: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: false,
  }
);

export const User = mongoose.model<IUser>('User', UserSchema);
