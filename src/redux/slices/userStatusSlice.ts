import { createSlice } from '@reduxjs/toolkit';

const userStatusSlice = createSlice({
  name: 'userStatus',
  initialState: { status: true },
  reducers: {
    setOnline(state, actions) {
      state.status = actions.payload;
    },
    setOffline(state, actions) {
      state.status = actions.payload;
    },
    setStatus(state, actions) {
      state.status = actions.payload;
    },
  },
});

export const { setOnline, setOffline, setStatus } = userStatusSlice.actions;
export default userStatusSlice.reducer;
