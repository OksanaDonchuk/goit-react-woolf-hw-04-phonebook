import React, { useEffect, useState } from 'react';
import css from './ContactForm.module.css';
import { useRef } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  const refObj = useRef();

  useEffect(() => {
    refObj.current?.focus();
  }, []);

  return (
    <form className={css.form_container} onSubmit={handleSubmit}>
      <input
        className={css.input}
        ref={refObj}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-ЯІіЄєЇї]+(([' \-][a-zA-Zа-яА-ЯІіЄєЇї ])?[a-zA-Zа-яА-ЯІіЄєЇї]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        placeholder="Enter name"
        required
      />
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
        placeholder="Enter phone number"
        required
      />
      <button className={css.btn_submit} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
