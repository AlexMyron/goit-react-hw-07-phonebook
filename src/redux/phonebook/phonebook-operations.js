import * as fetchAPI from '../../server-API/API-requests';
import * as actions from './phonebook-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const contacts = await fetchAPI.fetchContacts();
    dispatch(actions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await fetchAPI.deleteContact(id);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};

export const postContact = data => async dispatch => {
  dispatch(actions.postContactRequest());

  try {
    const postedContact = await fetchAPI.postContact(data);
    dispatch(actions.postContactSuccess(postedContact));
  } catch (error) {
    dispatch(actions.postContactError(error));
  }
};
