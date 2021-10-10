import { createSelector } from 'reselect';

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

const getContacts = createSelector([getFilter, getItems], (filter, items) => {
  let contactsList = [];
  if (!filter) return items;
  contactsList = getVisibleContacts(items, filter);
  return contactsList;
});

const getLoader = state => state.contacts.isLoading;

export { getContacts, getFilter, getItems, getLoader };
