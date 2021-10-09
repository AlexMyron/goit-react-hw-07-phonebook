const getFilter = (state) => state.contacts.filter;
const getItems = (state) => state.contacts.items;

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const getContacts = (state) => {
  const { filter, items } = state.contacts;
  let contactsList = [];
  if (!filter) contactsList = items;
  contactsList = getVisibleContacts(items, filter);
  return contactsList;
};

export { getContacts, getFilter, getItems };
