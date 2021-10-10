import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./phonebook/phonebook-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default configureStore({
  reducer: rootReducer,
});
