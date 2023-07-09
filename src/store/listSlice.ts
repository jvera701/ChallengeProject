import { createSlice } from '@reduxjs/toolkit';
import { initialList } from './initialState';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: initialList,
  },
  reducers: {},
});

//export const { increment } = listSlice.actions;
export default listSlice.reducer;
