import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import messages from '../../schemas/messageSchema';

interface Message {
  id: number;
  conversaction_id: number;
  sender_id: number;
  message_type: string; // 'text' | 'image' | 'video' | 'audio' | 'file';
  content: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
}

const initialState: Message[] = messages;

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    getAll(state) {
      return state.filter((message) => message.is_deleted !== true);
    },
    createOne(state, actions: PayloadAction<Message>) {
      state.push(actions.payload);
    },
    getOne(state, actions: PayloadAction<number>) {
      return state.filter((message) => message.id === actions.payload);
    },
    updateOne(state, actions: PayloadAction<Message>) {
      const index = state.findIndex(
        (message) => message.id === actions.payload.id
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...actions.payload };
      }
    },
    deleteOne(state, actions: PayloadAction<number>) {
      const message = state.find((message) => message.id === actions.payload);
      if (message) {
        message.is_deleted = true;
      }
    },
  },
});

export const { getAll, createOne, getOne, updateOne, deleteOne } =
  messageSlice.actions;
export default messageSlice.reducer;
