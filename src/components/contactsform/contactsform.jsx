// import PropTypes from 'prop-types';
import { addContact } from 'components/redux/sliceContacts';
import css from './contactsform.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handlerSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
      id: nanoid(),
    };
    const contactsFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(newContact.name.toLowerCase())
    );
    if (contactsFilter.length !== 0) {
      return alert(`${newContact.name} is already in contacts`);
    }
    dispatch(addContact(newContact));
    form.reset();
  };
  return (
    <form onSubmit={handlerSubmit} className={css.form}>
      <label htmlFor="name" className={css['form__label']}>
        Name
        <input
          // onChange={handlerChange}
          // value={name}
          type="text"
          className={css['form__input']}
          name="name"
          id="name"
          pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number" className={css['form__label']}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="number"
          // value={number}
          className={css['form__input']}
          // onChange={handlerChangeNumber}
        />
      </label>
      <button type="submit" className={css['form__btn']}>
        Add contact
      </button>
    </form>
  );
};
export default ContactsForm;

// ContactsForm.propTypes = {
//   addContacts: PropTypes.func.isRequired,
//   filterContacts: PropTypes.func.isRequired,
// };
