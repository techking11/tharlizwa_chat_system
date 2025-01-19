import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import users from '../../schemas/userSchema';

interface Person {
  id: number;
  name?: string;
  phone_no?: string;
  email?: string;
  password?: string;
  profile?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  is_deleted?: boolean;
}

const initialState: Person[] = users;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAll(state) {
      return state.filter((user) => user.is_deleted !== true) || null;
    },
    createOne(state, actions: PayloadAction<Person>) {
      state.push(actions.payload);
    },
    getOne(state, actions: PayloadAction<number>) {
      return state.filter((user) => user.id === actions.payload);
    },
    updateOne(state, actions: PayloadAction<Person>) {
      const index = state.findIndex((user) => user.id === actions.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...actions.payload };
      }
    },
    deleteOne(state, actions: PayloadAction<number>) {
      const user = state.find((user) => user.id === actions.payload);
      if (user) {
        user.is_deleted = true;
      }
    },
  },
});

export const { getAll, createOne, getOne, updateOne, deleteOne } =
  userSlice.actions;
export default userSlice.reducer;
