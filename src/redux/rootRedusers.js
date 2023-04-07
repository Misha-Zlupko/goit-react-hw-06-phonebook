import { usersReduser } from './Feedback/usersReduser';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  feedBack: usersReduser,
});
