import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: number;
  conversaction_id: number;
  sender_id: number;
  message_type: string; //'text' | 'image' | 'video' | 'audio' | 'file';
  content: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
}

interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages: [],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage(state, actions: PayloadAction<Message[]>) {
      state.messages = actions.payload;
    },
    removeMessage() {
      // state.messages = {};
    },
  },
});

export const { addMessage, removeMessage } = messageSlice.actions;
export default messageSlice.reducer;
