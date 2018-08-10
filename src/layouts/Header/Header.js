import React from 'react';
import {Link} from 'react-router-dom';
import { localizedText } from '../../utils/index';
import styles from './styles.scss';

const Header = ({logout, username, email, profileImg, isLoggedIn}) => {
  return (
    <nav className={`${styles.root}`}>
      <div className={`${styles["nav-wrapper"]}`}>
        <div className={`${styles["row-no-margin"]}`}>
          <div></div>
          <div className={`${styles["nav-main"]}`}>
            <Link to='/'>{localizedText().title}</Link>
            <ul id='nav-mobile'>
              {!isLoggedIn && <li><Link to='/login'>Login</Link></li>}
              {isLoggedIn && <li><Link to='' onClick={() => logout()}>Logout</Link></li>}
              {isLoggedIn &&
              <li className={`${styles["nav-bar-list"]}`}>
                <Link to='/profile'>
                  <div className={`${styles["profile-img-wrapper"]}`}>
                    <img
                      alt={username}
                      className={`${styles["profile-img"]}`}
                      src={profileImg}
                    />
                  </div>
                </Link></li>}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;