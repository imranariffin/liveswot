import React from 'react';
import styles from '../TextInput.scss';
import PropType from 'prop-types';

const UncontrolledTextInput = (props) => {
  const {label, forwardedRef, type, required} = props;
  return (
    <div className={styles.root}>
      <input type={type ? type : 'text'} required={required} className={styles.input} ref={forwardedRef}/>
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.label}>{label + (required ? '*' : '')}</label>
    </div>
  );
};

UncontrolledTextInput.propTypes = {
  label: PropType.string.isRequired,
  forwardedRef: PropType.shape({
    current: PropType.object
  }).isRequired,
  type: PropType.string,
  required: PropType.bool.isRequired,
};

export default UncontrolledTextInput;