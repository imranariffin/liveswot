import React from 'react';
import PropTypes from 'prop-types';
import styles from './DropDownItem.scss';

const DropDownItem = (props) => {
  const {onClick, text, icon, iconColor} = props;

  if (!text) {
    return null;
  }

  return (
    <div
      className={styles.root}
      onClick={onClick}
    >
      <div className={styles.text}>{text}</div>
      <div className={styles.icon}>
        <i className='material-icons' style={{color: iconColor}}>{icon}</i>
      </div>
    </div>
  );
};

DropDownItem.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default DropDownItem;