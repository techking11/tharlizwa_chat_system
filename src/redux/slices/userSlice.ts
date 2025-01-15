import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Person {
  name: string;
  profile: string;
  time: string;
  message: string;
  active: boolean;
}

interface PersonState {
  users: Person[];
}

const initialState: PersonState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUsers(state: PersonState, actions: PayloadAction<Person[]>) {
      state.users = actions.payload;
    },
  },
});

export const { addUsers } = userSlice.actions;
export default userSlice.reducer;
