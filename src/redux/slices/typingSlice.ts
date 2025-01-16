import { createSlice } from '@reduxjs/toolkit';

const typingSlice = createSlice({
  name: 'typing',
  initialState: { typing: false },
  reducers: {
    startTyping(state, actions) {
      state.typing = actions.payload;
    },
    stopTyping(state) {
      state.typing = false;
    },
  },
});

export const { startTyping, stopTyping } = typingSlice.actions;
export default typingSlice.reducer;
