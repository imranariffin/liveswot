import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = (props) => {
  const {children, disabled, cancel, onClick} = props;

  const className = `${styles.root} ${cancel ? styles.cancel : ''}`;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  cancel: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;