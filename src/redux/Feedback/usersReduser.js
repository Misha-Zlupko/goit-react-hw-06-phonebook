// import { DELETE_USER, CREATE_USER, SEARCH_USER } from './userTypes';
// import { userInitialState } from './usersInitialState';
// import { combineReducers } from '@reduxjs/toolkit';

// const usersDeliteReducer = (state = userInitialState.contacts, action) => {
//   switch (action.type) {
//     case CREATE_USER:
//       return [action.payload, ...state];
//     case DELETE_USER:
//       return state.filter(user => user.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export const usersSearchReduser = (state = userInitialState.filter, action) => {
//   switch (action.type) {
//     case SEARCH_USER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const usersReduser = combineReducers({
//   contacts: usersDeliteReducer,
//   filter: usersSearchReduser,
// });
