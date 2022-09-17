import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { changeContactsItems } from 'redux/items/phone-book-items-operations';

import s from './FormChangeContact.module.css';

const FormChangeContact = ({ findContact, onClose }) => {
  const [name, setName] = useState(findContact.name);
  const [phone, setPhone] = useState(findContact.number);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();

  const hendleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const data = {
      id: findContact.id,
      name,
      number: phone,
    };
    dispatch(changeContactsItems(data));
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={hendleSubmit} className={s.form}>
      <label htmlFor={nameInputId} className={s.label}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Input name"
          className={s.input}
          value={name}
          onChange={hendleInputChange}
          id={nameInputId}
        />
      </label>
      <label htmlFor={numberInputId} className={s.label}>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Input number"
          className={s.input}
          value={phone}
          onChange={hendleInputChange}
          id={numberInputId}
        />
      </label>
      <button type="submit" className={s.changeContact} onSubmit={hendleSubmit}>
        Change contact
      </button>
    </form>
  );
};

export default FormChangeContact;
