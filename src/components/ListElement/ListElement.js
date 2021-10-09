import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Button, Contact, TextWrapper } from "./ListElement.styled";
import * as actions from "../../redux/phonebook/phonebook-actions";

const ListElement = () => {
  const contact = useSelector((state) => {
    return state.contacts.items.map(contact);
  });
  const dispatch = useDispatch();

  const deleteItem = (e) => {
    // deleteBtn(elData.id);
    ((id) => dispatch(actions.deleteContact(id)))(contact.id);
  };
  return (
    <Contact>
      <TextWrapper>
        <FaUser />
        {contact.name}: {contact.number}
      </TextWrapper>
      <Button type="button" data-id={contact.id} onClick={deleteItem}>
        <RiDeleteBin5Fill />
      </Button>
    </Contact>
  );
};

ListElement.propTypes = { elData: PropTypes.object, deleteBtn: PropTypes.func };

export default ListElement;
