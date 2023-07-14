// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './filter.module.css';
import { setStatutFilter } from 'components/redux/sliceFilter';

const FilterContacts = () => {
  const dispatch = useDispatch();

  const filterEvcontacts = ev => [
    dispatch(setStatutFilter(ev.target.value)),
    console.log(setStatutFilter(ev.target.value)),
  ];

  return (
    <label htmlFor="filter" className={css.filter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={css['filter__input']}
        id="filter"
        // value={filter}
        onChange={filterEvcontacts}
      />
    </label>
  );
};
export default FilterContacts;

// FilterContacts.propTypes = {
//   filterEvcontacts: PropTypes.func.isRequired,
// };
