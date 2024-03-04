import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contact_list}>
    {contacts.map(contact => (
      <li key={contact.id} className={css.contact_item}>
        {contact.name}: {contact.number}
        <button
          type="button"
          className={css.btn_delete}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
