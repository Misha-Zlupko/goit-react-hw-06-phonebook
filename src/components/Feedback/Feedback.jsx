import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useState, useEffect } from 'react';

const USERS_LOCALE_STORAGE_KEY = 'users';

export const Feedbacks = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  useEffect(() => {
    localStorage.setItem(USERS_LOCALE_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const handleSubmit = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(newContact);
    } else {
      setContacts(prev => [...prev, newContact]);
    }
  };

  const handleDelete = contactName => {
    setContacts(prev => prev.filter(contact => contact.name !== contactName));
  };

  useEffect(() => {
    const localData = JSON.parse(
      localStorage.getItem(USERS_LOCALE_STORAGE_KEY)
    );
    if (localData) {
      setContacts(localData);
    }
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter
        user={contacts}
        onChangeSearch={handleFilterChange}
        search={filter}
      />
      <ContactList
        contacts={getFilteredContacts()}
        onDeliteTodo={handleDelete}
      />
    </div>
  );
};
