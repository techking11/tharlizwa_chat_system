import { configureStore } from '@reduxjs/toolkit';
import emojisReducer from './slices/emojiSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    emoji: emojisReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
