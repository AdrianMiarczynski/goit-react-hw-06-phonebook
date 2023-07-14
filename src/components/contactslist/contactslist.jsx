import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from './contactslist.module.css';
import { delateContact } from 'components/redux/sliceContacts';

const Contacts = () => {
  const dispatch = useDispatch();

  const contats = useSelector(state => state.contacts);
  const FilterContact = useSelector(state => state.filter);

  const deleteContact = id => {
    dispatch(delateContact(id));
  };

  const filter = contats.filter(person =>
    person.name.toLowerCase().includes(FilterContact.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filter.map(({ name, id, number }) => (
        <li key={id} className={css['list__items']}>
          {name}: <span>{number}</span>
          <button
            type="submit"
            className={css['list__items-btn']}
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

Contacts.protoTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};
