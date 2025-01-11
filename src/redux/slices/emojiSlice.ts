import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmojiGroupTypes } from '../../types/emojiGroup/types';

interface EmojiState {
  emojis: EmojiGroupTypes[];
}

const initialState: EmojiState = {
  emojis: [],
};

const emojiSlice = createSlice({
  name: 'emojis',
  initialState,
  reducers: {
    setEmojis(state, actions: PayloadAction<EmojiGroupTypes[]>) {
      state.emojis = actions.payload;
    },
  },
});

export const { setEmojis } = emojiSlice.actions;
export default emojiSlice.reducer;
