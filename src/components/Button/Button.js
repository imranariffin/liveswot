import React from 'react';
import styles from './styles.scss';

const Button = (props) => {
  const {children, disabled, cancel} = props;

  const className = `${styles.root} ${cancel ? styles.cancel : ''}`;

  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;