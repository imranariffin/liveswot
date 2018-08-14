import styles from './DropDown.scss';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

const DropDown = ({active, showAddMember}) => {
  const items = [{
    text: 'one',
    icon: 'edit'
  }, {
    text: 'two',
    icon: 'close',
  }, {
    text: 'Add people',
    icon: 'add',
    iconColor: 'blue',
    callBack: () => showAddMember(),
  }, {
    text: 'four',
    icon: 'adjust',
    iconColor: 'red',
  }];

  return (
    <ul className={`${styles["drop-down"]} ${active ? styles.visible: ''}`}>
      {items.map((item, i) => (
        <li
          key={`item-${i}`}
          className={`dropdown-item`}
          onClick={(e) => {
            e.preventDefault();
            item.callBack && item.callBack();
          }}
        >
          <Link to={'/'}>
            <div className={styles.li}>
              <span className={styles["li-span"]}>
                {item.text}
                <i
                  className={`material-icons right ${styles[`drop-down-item-icon-${i}`]}`}
                >
                  {item.icon}
                </i>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

DropDown.propTypes = {
  active: PropTypes.bool.isRequired,
  showAddMember: PropTypes.func.isRequired,
};

export default DropDown;