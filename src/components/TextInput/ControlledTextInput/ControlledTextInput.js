import React from 'react';
import PropTypes from 'prop-types';
import styles from '../TextInput.scss';

const ControlledTextInput = (props) => {
  const {onChange, required, text, type, label} = props;
  return (
    <div className={styles.root}>
      <input
        type={type ? type : 'text'}
        required={required}
        className={styles.input}
        value={text}
        onChange={onChange}
      />
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.label}>{label + (required ? '*' : '')}</label>
    </div>
  );
};

ControlledTextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export default ControlledTextInput;