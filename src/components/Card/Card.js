import React from 'react';
import styles from './Card.scss';

const Card = (props) => {
  const {children, style = {}} = props;
  return (
    <div className={styles.root} style={style}>
      {children || null}
    </div>
  );
};

export default Card;
