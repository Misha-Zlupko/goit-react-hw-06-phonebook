import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createUsers } from 'redux/Feedback/usersSlice';
import { createUsers } from '../../redux/Feedback/usersSlice';
export const ContactForm = () => {
  // this.props.onSubmmit
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: '', number: '' });
  const contacts = useSelector(state => state.users.contacts);
  const hendlesubmit = ivent => {
    ivent.preventDefault();
    handleSubmit(state);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = newContact => {
    const { name } = newContact;
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${name} контакт вже присутній`);
    } else {
      dispatch(createUsers(newContact));
    }
  };
  return (
    <div>
      <p>Name</p>
      <form onSubmit={hendlesubmit}>
        <input
          value={state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <p>Number</p>
        <input
          value={state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
