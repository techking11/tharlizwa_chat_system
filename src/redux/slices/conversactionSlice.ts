import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import conversactions from '../../schemas/conversactionSchema';
import { ConversactionItem } from '../../types/conversactionTypes';

const initialState: ConversactionItem[] = conversactions;

const conversactionSlice = createSlice({
  name: 'conversaction',
  initialState,
  reducers: {
    getAll(state) {
      return state.filter((item) => item.is_deleted !== true) || null;
    },
    createOne(state, actions: PayloadAction<ConversactionItem>) {
      state.push(actions.payload);
    },
    getOne(state, actions: PayloadAction<number>) {
      return state.filter((item) => item.id === actions.payload) || null;
    },
    updateOne(state, actions: PayloadAction<ConversactionItem>) {
      const index = state.findIndex((item) => item.id === actions.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...actions.payload };
      }
    },
    deleteOne(state, actions: PayloadAction<number>) {
      const item = state.find((item) => item.id === actions.payload);
      if (item) {
        item.is_deleted = true;
      }
    },
  },
});

export const { getAll, createOne, getOne, updateOne, deleteOne } =
  conversactionSlice.actions;
export default conversactionSlice.reducer;
