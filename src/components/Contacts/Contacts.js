import PropTypes from "prop-types";
// import ListElement from '../ListElement';
import { connect, useSelector, useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { List } from "./Contacts.styled";
import {
  Button,
  Contact,
  TextWrapper,
} from "../ListElement/ListElement.styled";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";

import * as actions from "../../redux/phonebook/phonebook-actions";

// const Contacts = ({ contactsList, onDeleteBtn }) => {
const Contacts = () => {
  const contactsList = useSelector(getContacts);

  const dispatch = useDispatch();

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
              <Button
                type="button"
                data-id={id}
                onClick={() => dispatch(actions.deleteContact(id))}
              >
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
    })
  ),
  btnDelete: PropTypes.func,
};

// const getVisibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase().trim();
//   return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
// };

// const mapStateToProps = state => {
//   const { filter, items } = state.contacts;
//   let contactsList = [];
//   if (!filter) contactsList = items;
//   contactsList = getVisibleContacts(items, filter);
//   return {
//     filter,
//     contactsList,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onDeleteBtn: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
export default Contacts;
