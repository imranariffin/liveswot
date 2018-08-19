import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';
import {CANCEL, REQUEST} from './constants';

export const BUTTON_STYLES = {
  [CANCEL]: styles.cancel,
  [REQUEST]: styles.request,
};



const Button = (props) => {
  const {children, disabled, type, onClick} = props;

  const btnStyle = (type in BUTTON_STYLES) ? BUTTON_STYLES[type] : '';
  const className = `${styles.root} ${btnStyle}`;

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