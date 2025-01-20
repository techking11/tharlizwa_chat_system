export interface Message {
  id: number;
  conversaction_id: number;
  sender_id: number;
  message_type: string; // 'text' | 'image' | 'video' | 'audio' | 'file';
  content: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
}
