import React from 'react';

import styles from '../styles/Header.module.css';

const Header = ({ onDataSubmit }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [part, setPart] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const objInfo = {
      firstName,
      lastName,
      part,
    };
    onDataSubmit(objInfo);
    setFirstName('');
    setLastName('');
    setPart('');
  };
  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Participation"
          value={part}
          onChange={({ target }) => setPart(target.value)}
        />
        <button className={styles.button}>Send</button>
      </form>
    </header>
  );
};

export default Header;
