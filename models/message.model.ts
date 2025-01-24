import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  room_id: mongoose.Types.ObjectId;
  sender_id: mongoose.Types.ObjectId;
  message_type?: string;
  content: string;
  created_at?: Date;
  updated_at?: Date;
  is_deleted?: boolean;
}

const MessageSchema: Schema = new Schema(
  {
    room_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'Room',
      required: true,
    },
    sender_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    message_type: {
      type: String,
      default: 'text',
    },
    content: {
      type: String,
      required: true,
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

export const Message = mongoose.model<IMessage>('Message', MessageSchema);
