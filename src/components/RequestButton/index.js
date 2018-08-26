import React from 'react';
import styles from './RequestButton.scss';

const RequestButton = ({text, onClick, requestedItem}) => {

  const {isLoading} = requestedItem;
  const {button, loading} = styles;

  return (
      <div className={`${styles.wrapper} ${styles.loading}`}>
        <input
            type={`submit`}
            className={`${button} ${isLoading ? loading : ''}`}
            onClick={onClick}
            value={text}
        />
      </div>
  );
};

export default RequestButton;