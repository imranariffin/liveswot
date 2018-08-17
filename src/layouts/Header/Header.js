import React from 'react';
import { localizedText } from '../../utils/index';
import styles from './Header.scss';

const Header = ({logout, username, email, profileImg, isLoggedIn}) => {
  return (
    <div className={`${styles.root}`}>
      <div className={styles.container}>
        <div className={`${styles.brand}`}>LiveSWOT</div>
        <div className={`${styles["items-container"]}`}>
          <div className={`${styles.item} ${styles["left-end"]}`}>Item 1</div>
          <div className={styles.item}>Item 2</div>
          <div className={styles.item}>Item 3</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
