import { createSlice } from '@reduxjs/toolkit';
import { userInitialState } from './usersInitialState';

const usersSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {
    deliteReducer: (state, { payload }) => {
      state.contacts = state.contacts.filter(user => user.name !== payload);
    },
    searchReducer: (state, { payload }) => {
      state.filter = payload;
    },
    createUsers: (state, { payload }) => {
      console.log(payload);
      state.contacts.push(payload);
    },
  },
});

export const usersReducer = usersSlice.reducer;

export const { createReducer, deliteReducer, searchReducer, createUsers } =
  usersSlice.actions;
