import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Util {
  active: number;
}

const initialState: Util = { active: 1 };

const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    activeConversaction(state, actions: PayloadAction<number>) {
      state.active = actions.payload;
    },
  },
});

export const { activeConversaction } = utilSlice.actions;
export default utilSlice.reducer;
