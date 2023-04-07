import { DELETE_USER, CREATE_USER, SEARCH_USER } from './userTypes';

export const deliteReducer = contactName => ({
  type: DELETE_USER,
  payload: contactName,
});
export const createReducer = newContact => ({
  type: CREATE_USER,
  payload: newContact,
});
export const searchReducer = value => ({ type: SEARCH_USER, payload: value });
