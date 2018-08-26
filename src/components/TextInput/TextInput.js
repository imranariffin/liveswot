import React from 'react';
import PropTypes from 'prop-types';
import UncontrolledTextInput from './UncontrolledTextInput';
import ControlledTextInput from './ControlledTextInput/ControlledTextInput';

const TextInput = (props) => {
  const {uncontrolled, required, label} = props;

  if (uncontrolled) {
    const {forwardedRef} = props;
    return (
      <UncontrolledTextInput
        label={label}
        forwardedRef={forwardedRef}
        required={required}
      />
    );
  }
  const {text, onChange} = props;

  return (
    <ControlledTextInput
      required={required}
      label={label}
      onChange={onChange}
      text={text}
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  uncontrolled: PropTypes.bool,
  forwardedRef: PropTypes.shape({
    current: PropTypes.object
  }),
  type: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;