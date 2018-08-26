import styles from './DropDown.scss';
import PropTypes from 'prop-types';
import React from 'react';
import DropDownItem from './DropDownItem';

const DropDown = (props) => {
  const {hidden, items} = props;
  return (
    <div className={`${styles.root} ${!hidden ? styles.visible: ''}`}>{
      items.map((item, i) => (
        <DropDownItem
          key={`item-${i}`}
          text={item.text}
          icon={item.icon}
          iconColor={item.iconColor}
          onClick={() => item.onClick && item.onClick()}
        />))
    }</div>
  );
};

DropDown.propTypes = {
  hidden: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    onClick: PropTypes.func,
  }))
};

export default DropDown;