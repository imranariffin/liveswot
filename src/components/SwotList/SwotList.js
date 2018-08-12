import React from 'react';
import styles from './SwotList.scss';
import Kebab from '../Kebab/';

const SwotList = (props) => {
  // const swotImg = '';
  const {swotId, title, description, swotDateCreated, creatorUserName} = props;

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <div className={styles.creator}></div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.actions}>
          <Kebab/>
        </div>
      </div>
    </div>
  );
};

export default SwotList;