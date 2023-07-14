import ContactsForm from './contactsform/contactsform';
import Contacts from './contactslist/contactslist';
import FilterContacts from './filter/filter';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <div>
        <h2>Contacts</h2>
        <FilterContacts />
        <Contacts />
      </div>
    </div>
  );
};
export default App;
