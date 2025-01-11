import { configureStore } from '@reduxjs/toolkit';
import emojisReducer from './slices/emojiSlice';

const store = configureStore({
  reducer: {
    emojis: emojisReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
