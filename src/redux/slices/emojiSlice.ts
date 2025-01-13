import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmojiGroupTypes, EmojisState } from '../../types/emojiGroup/types';

const initialState: EmojisState = {
  emojisByGroup: {},
  groupIndex: 0,
  offset: 0,
  hasMore: true,
};

const emojiSlice = createSlice({
  name: 'emoji',
  initialState,
  reducers: {
    addEmojis(
      state,
      actions: PayloadAction<{ group: string; emojis: EmojiGroupTypes[] }>
    ) {
      const { group, emojis } = actions.payload;
      state.emojisByGroup[group] = [
        ...(state.emojisByGroup[group] || []),
        ...emojis,
      ];
    },
    incrementGroupIndex(state) {
      state.groupIndex += 1;
    },
    setOffset(state, actions: PayloadAction<number>) {
      state.offset = actions.payload;
    },
    setHasMore(state, actions: PayloadAction<boolean>) {
      state.hasMore = actions.payload;
    },
  },
});

export const { addEmojis, incrementGroupIndex, setOffset, setHasMore } =
  emojiSlice.actions;

export default emojiSlice.reducer;
