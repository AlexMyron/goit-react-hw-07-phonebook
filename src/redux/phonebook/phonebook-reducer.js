import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./phonebook-actions";
// import * as types from './phonebook-types';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.addFilter]: (_, { payload }) => payload,
  [actions.resetFilter]: (_, { payload }) => payload,
});

// ----------------

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];

//     case types.DELETE_CONTACT:
//       console.log(types.DELETE_CONTACT);
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.ADD_FILTER:
//       return payload;
//     case types.RESET_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
export default combineReducers({
  items,
  filter,
});
