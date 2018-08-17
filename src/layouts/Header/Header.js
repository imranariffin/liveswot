import React from 'react';
import { localizedText } from '../../utils/index';
import styles from './Header.scss';
import {Link} from 'react-router-dom';

const Header = ({logout, username, email, profileImg, isLoggedIn}) => {
  return (
    <div className={`${styles.root}`}>
      <div className={styles.container}>
        <Link className={`${styles.brand}`} to={`/`}>LiveSWOT</Link>
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
