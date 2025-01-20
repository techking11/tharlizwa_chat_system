import { configureStore } from '@reduxjs/toolkit';
import emojisReducer from './slices/emojiSlice';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';
import chatReducer from './slices/chatSlice';
import messageReducer from './slices/messageSlice';
import typingReducer from './slices/typingSlice';
import notificationReducer from './slices/notificationSlice';
import userStatusReducer from './slices/userStatusSlice';
import conversactionReducer from './slices/conversactionSlice';
import utilReducer from './slices/utilSlice';

const store = configureStore({
  reducer: {
    emoji: emojisReducer,
    user: userReducer,
    auth: authReducer,
    chat: chatReducer,
    message: messageReducer,
    typing: typingReducer,
    notification: notificationReducer,
    userStatus: userStatusReducer,
    conversaction: conversactionReducer,
    util: utilReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
