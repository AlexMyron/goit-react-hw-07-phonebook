import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { List } from './Contacts.styled';
import { getContacts } from '../../redux/phonebook/contacts-selectors';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import { Button, Contact, TextWrapper } from '../ListElement/ListElement.styled';
import * as actions from '../../redux/phonebook/phonebook-actions';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const contactsList = useSelector(getContacts);

  const handleClick = id => {
    dispatch(actions.resetFilter());
    return dispatch(phonebookOperations.deleteContact(id));
  };

  const isListEmpty = contactsList.length === 0;
  return (
    <div>
      {isListEmpty && <p>Your contacts List is still empty.</p>}
      <List>
        {contactsList &&
          contactsList.map(({ name, number, id }) => (
            <Contact key={id}>
              <TextWrapper>
                <FaUser />
                {name}: {number}
              </TextWrapper>
              <Button type="button" data-id={id} onClick={() => handleClick(id)}>
                <RiDeleteBin5Fill />
              </Button>
            </Contact>
          ))}
      </List>
    </div>
  );
};

Contacts.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  btnDelete: PropTypes.func,
};

export default Contacts;
