import React from 'react';

import styles from './styles.scss';

const Body = (Component) => (props) => {
  return (
    <div className={`row ${styles.grid} ${styles.root}`}>
      <div className='col m1'></div>
      <div className={`col m10 ${styles["mid-cell"]}`}>
        <Component {...props} />
      </div>
      <div className='col m1'></div>
    </div>
  );
};

export default Body;
