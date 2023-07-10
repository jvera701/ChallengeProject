import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialList } from './initialState';

export type actionType = {
  index: number;
  quantity: number;
};

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: initialList,
  },
  reducers: {
    changeAmount: (state, action: PayloadAction<actionType>) => {
      const { index, quantity } = action.payload;
      state.list[index].quantity = quantity;
    },
  },
});

export const { changeAmount } = listSlice.actions;
export const listReducer = listSlice.reducer;
