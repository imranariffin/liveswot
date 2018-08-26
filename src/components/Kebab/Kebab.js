import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kebab.scss';

const Kebab = (props) => {
  const {onClick} = props;
  return (
    <div className={styles.root} onClick={onClick}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

Kebab.propTypes = {
  onClick: PropTypes.func
};

export default Kebab;
