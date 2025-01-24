import mongoose, { Document, Schema } from 'mongoose';

export interface INotification extends Document {
  user_id: mongoose.Types.ObjectId;
  message_id: mongoose.Types.ObjectId;
  is_read?: boolean;
  created_at?: Date;
  updated_at?: Date;
  is_deleted?: boolean;
}

const NotificationSchema: Schema = new Schema<INotification>(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    message_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'Message',
      required: true,
    },
    is_read: {
      type: Boolean,
      default: false,
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

export const Notification = mongoose.model<INotification>(
  'Notification',
  NotificationSchema
);
