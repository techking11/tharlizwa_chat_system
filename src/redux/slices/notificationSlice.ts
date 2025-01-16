import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { notification: {} },
  reducers: {
    incrementNotification(state, actions) {
      state.notification = actions.payload;
    },
    resetNotification(state) {
      state.notification = {};
    },
  },
});

export const { incrementNotification, resetNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
