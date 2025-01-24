import mongoose, { Document, Schema } from 'mongoose';

export interface IAttachment extends Document {
  message_id: mongoose.Types.ObjectId;
  file_url: string;
  file_type: string;
  created_at?: Date;
  updated_at?: Date;
  is_deleted?: boolean;
}

const AttachmentSchema: Schema = new Schema<IAttachment>(
  {
    message_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'Message',
      required: true,
    },
    file_url: {
      type: String,
      required: true,
    },
    file_type: {
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

export const Attachment = mongoose.model<IAttachment>(
  'Attachment',
  AttachmentSchema
);
