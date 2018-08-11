import React from 'react';
import styles from './TextInput.scss';

const TextInput = () => {
  return (
    <div className={styles.root}>
      <input type='text' required className={styles.input}/>
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.label}>Name</label>
    </div>
  );
};

export default TextInput;