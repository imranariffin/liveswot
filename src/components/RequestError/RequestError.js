import styles from './RequestError.scss';
import React from 'react';

const RequestError = (props) => {
  const {errors, clearError} = props;
  const hidden = errors.length === 0;

  return (
    <div className={styles.root}>
      <div
        className={`${styles.hide} ${hidden ? styles.hidden: ''}`}
        onClick={clearError}
      >
      </div>
      <div
        className={`${styles.container} ${hidden ? styles.hidden: ''}`}
      >
        <p>Error(s):</p>
        {errors.map((error, i) => (
          <p key={i}>{error.toString()}</p>
        ))}
      </div>
    </div>
  );
};

export default RequestError;