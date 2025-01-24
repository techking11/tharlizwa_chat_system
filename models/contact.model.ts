import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  user_id: mongoose.Types.ObjectId;
  contact_id: mongoose.Types.ObjectId;
  status?: string;
  created_at?: Date;
  updated_at?: Date;
  is_deleted?: boolean;
}

const ContactSchema: Schema = new Schema<IContact>(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    contact_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      default: 'pending',
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

export const Contact = mongoose.model<IContact>('Contact', ContactSchema);
