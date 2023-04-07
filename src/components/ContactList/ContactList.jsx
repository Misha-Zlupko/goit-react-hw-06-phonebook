import { useDispatch, useSelector } from 'react-redux';
import { deliteReducer } from 'redux/Feedback/usersSlice';
import { useMemo } from 'react';

export const ContactList = () => {
  const contacts = useSelector(state => state.users.contacts);
  console.log(contacts);
  const search = useSelector(state => state.users.filter);
  const dispatch = useDispatch();
  const getFilteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [contacts, search]);
  const deliteContacts = contactId => {
    dispatch(deliteReducer(contactId));
  };
  return (
    <div>
      <ul>
        {getFilteredContacts.map(({ name, number }) => (
          <li key={name}>
            <p>
              {name}: {number}
            </p>
            <button
              onClick={() => {
                dispatch(deliteContacts(name));
              }}
            >
              Delite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
