import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";
// import * as types from './phonebook-types';

const addContact = createAction("contact/add", ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  };
});
const deleteContact = createAction("contact/delete");
const addFilter = createAction("filter/add");
const resetFilter = createAction("filter/reset", () => {
  return {
    payload: "",
  };
});

// -----------

// const addContact = ({ name, number }) => ({
//   type: types.ADD_CONTACT,
//   payload: { name, number, id: uuidv4() },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE_CONTACT,
//   payload: contactId,
// });

// const addFilter = text => ({
//   type: types.ADD_FILTER,
//   payload: text,
// });

// const resetFilter = () => ({
//   type: types.RESET_FILTER,
//   payload: '',
// });

export { addContact, deleteContact, addFilter, resetFilter };
