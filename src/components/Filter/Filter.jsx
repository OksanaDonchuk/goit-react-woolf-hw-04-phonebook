import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <div className={css.search_container}>
    <input
      className={css.search_input}
      type="text"
      value={value}
      onChange={onChangeFilter}
      placeholder="Search contacts"
    />
  </div>
);

export default Filter;
