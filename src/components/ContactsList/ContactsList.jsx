import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilteredContacts } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';

export const ContactsList = () => {
  const { filter } = useSelector(getFilteredContacts);
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();
  const cont = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };
  const filteredResult = cont();

  return (
    <>
      <ul>
        {filteredResult.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(removeContact(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
