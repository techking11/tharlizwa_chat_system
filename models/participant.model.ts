import mongoose, { Document, Schema } from 'mongoose';

export interface IParticipant extends Document {
  room_id: mongoose.Types.ObjectId;
  user_id: mongoose.Types.ObjectId;
  role?: string;
  created_at?: Date;
  updated_at?: Date;
  is_deleted?: boolean;
}

const ParticipantSchema: Schema = new Schema<IParticipant>(
  {
    room_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'Room',
      required: true,
    },
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    role: {
      type: String,
      default: 'member',
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

export const Participant = mongoose.model<IParticipant>(
  'Participant',
  ParticipantSchema
);
