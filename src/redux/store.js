import { applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from "./phonebook/phonebook-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: applyMiddleware(logger),
  // devtools: process.env.NODE_ENV === 'development',
});

let persistor = persistStore(store);

// const store = createStore(rootReducer, composeWithDevTools());

export { store, persistor };
// export default store;
