import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  [actions.postContactSuccess]: (state, { payload }) => [...state, payload],
});

const isLoading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
  [actions.postContactRequest]: () => true,
  [actions.postContactSuccess]: () => false,
  [actions.postContactError]: () => false,
});

const filter = createReducer('', {
  [actions.addFilter]: (_, { payload }) => payload,
  [actions.resetFilter]: () => '',
});

export default combineReducers({
  items,
  filter,
  isLoading,
});
