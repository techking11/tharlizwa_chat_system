import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversactions: [],
  messages: {},
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setConversactions() {},
    setMessages() {},
    addMessage() {},
  },
});

export const { setConversactions, setMessages, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
