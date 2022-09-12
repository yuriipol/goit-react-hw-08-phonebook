import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css';
import PropTypes from 'prop-types';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

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
      name,
      number: phone,
    };

    onSubmit(data);

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={hendleSubmit} className={s.form}>
      <label htmlFor={nameInputId} className={s.label}>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={s.input}
          value={name}
          onChange={hendleInputChange}
          id={nameInputId}
        />
      </label>
      <label htmlFor={numberInputId} className={s.label}>
        Number:
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={s.input}
          value={phone}
          onChange={hendleInputChange}
          id={numberInputId}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
};
