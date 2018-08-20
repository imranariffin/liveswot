import React from 'react';
import PropTypes from 'prop-types';
import { localizedText } from '../../utils/index';
import styles from './Header.scss';
import {Link} from 'react-router-dom';

const Header = (props) => {
  const {logout, showLogin, showLogout} = props;
  const {login, logout: logoutTxt, brand} = localizedText();

  return (
    <div className={`${styles.root}`}>
      <div className={styles.container}>
        <Link className={`${styles.brand}`} to={`/`}>{brand}</Link>
        <div className={`${styles["items-container"]}`}>
          <div className={`${styles.item} ${styles["left-end"]}`}>
            {showLogin && <Link to={'login'}>
              <span className={styles.link}>{login}</span>
            </Link>}
          </div>
          <div className={`${styles.item}`} onClick={logout}>
            {showLogout && <Link to={'login'}>
              <span className={styles.link}>{logoutTxt}</span>
            </Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string,
  email: PropTypes.string,
  profileImg: PropTypes.string,
  showLogin: PropTypes.bool.isRequired,
  showLogout: PropTypes.bool.isRequired,
};

export default Header;
