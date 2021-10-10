import { BiSearchAlt } from 'react-icons/bi';
import { Label } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { getFilter, getItems } from '../../redux/phonebook/contacts-selectors';

const Filter = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      {contacts.length > 1 && (
        <>
          <h3>Find contacts by name</h3>
          <Label>
            <input
              type="text"
              name="filter"
              onChange={e => dispatch(actions.addFilter(e.currentTarget.value))}
              value={filter}
              autoComplete="off"
            />
            <BiSearchAlt size="18" />
          </Label>
        </>
      )}
    </div>
  );
};

export default Filter;
