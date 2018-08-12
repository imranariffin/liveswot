import React from 'react';
import styles from './Kebab.scss';

const Kebab = () => {
  return (
    <div className={styles.root}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default Kebab;