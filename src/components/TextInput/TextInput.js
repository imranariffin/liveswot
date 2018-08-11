import React from 'react';
import styles from './TextInput.scss';

const TextInput = (props) => {
  const {label, forwardedRef} = props;
  return (
    <div className={styles.root}>
      <input type='text' required className={styles.input} ref={forwardedRef}/>
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default TextInput;