import { createSlice } from "@reduxjs/toolkit";

const phonebookSlice = createSlice({
  name: "phonebook",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, { payload }) => [...state, payload],
    deleteContact: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, deleteContact } = phonebookSlice.actions;
export default phonebookSlice.reducer;
