import React, { useState, useCallback } from 'react';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import { v4 as uuidv4 } from 'uuid';
import style from '../Style.module.css';
import { useDispatch } from 'react-redux';

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleNameChange = useCallback(event => {
    setName(event.target.value);
  }, []);

  const handleNumberChange = useCallback(event => {
    setNumber(event.target.value);
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(contactsOperations.AddContact({ name, number }));
      setName('');
      setNumber('');
    },
    [dispatch, name, number],
  );

  return (
    <form onSubmit={handleFormSubmit} className={style.form}>
      <h1>Phonebook</h1>
      <label htmlFor={nameInputId}>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleNameChange}
          id={nameInputId}
          className={style.input}
        />
      </label>
      <label htmlFor={numberInputId}>
        Phone:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleNumberChange}
          id={numberInputId}
          className={style.input}
        />
      </label>
      <button type="submit" className={style.btn}>
        Add contact
      </button>
      <h2>Contacts</h2>
    </form>
  );
}
