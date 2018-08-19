import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestError.scss';

const RequestError = (props) => {
  const {errors, clearError, errorType} = props;
  const hidden = errors.length === 0;

  return (
    <div className={styles.root}>
      <div
        className={`${styles.hide} ${hidden ? styles.hidden: ''}`}
        onClick={clearError(errorType)}
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

RequestError.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  clearError: PropTypes.func.isRequired,
  errorType: PropTypes.string.isRequired
};

export default RequestError;