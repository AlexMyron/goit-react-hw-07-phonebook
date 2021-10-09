import { BiSearchAlt } from "react-icons/bi";
import { Label } from "./Filter.styled";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";

// const Filter = ({ filter, contacts, onChange, resetFilter }) => {
const Filter = () => {
  const filter = useSelector(getFilter);
  // const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Find contacts by name</h3>
      <Label>
        <input
          type="text"
          name="filter"
          onChange={(e) => dispatch(actions.addFilter(e.currentTarget.value))}
          value={filter}
          autoComplete="off"
          onBlur={() => dispatch(actions.resetFilter())}
        />
        <BiSearchAlt size="18" />
      </Label>
    </div>
  );
};

// const mapStateToProps = ({ contacts: { _, filter } }) => ({ filter: filter });

// const mapDispatchToProps = dispatch => ({
//   resetFilter: () => dispatch(actions.resetFilter()),
//   onChange: e => dispatch(actions.addFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
