import mongoose, { Schema, Document } from 'mongoose';

export interface IRoom extends Document {
  name: string;
  created_by?: mongoose.Types.ObjectId;
  is_group?: Boolean;
  created_at?: Date;
  updated_at?: Date;
  is_deleted?: boolean;
}

const RoomSchema: Schema = new Schema<IRoom>(
  {
    name: {
      type: String,
      required: true,
    },
    created_by: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    is_group: {
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

export const Room = mongoose.model<IRoom>('Room', RoomSchema);
