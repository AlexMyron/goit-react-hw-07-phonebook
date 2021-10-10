import { createAction } from '@reduxjs/toolkit';

export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');
export const fetchContactsRequest = createAction('contacts/fetchContactRequest');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const postContactRequest = createAction('contact/postContactRequest');
export const postContactSuccess = createAction('contacts/postContactSuccess');
export const postContactError = createAction('contacts/postContactError');

export const addFilter = createAction('filter/add');
export const resetFilter = createAction('filter/reset');
