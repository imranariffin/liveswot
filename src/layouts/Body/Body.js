import React from 'react';

import styles from './styles.scss';

const Body = (Component) => (props) => {
  return (
    <div className={`${styles.grid} ${styles.root}`}>
      <div className={styles.container}>
        <div className={`${styles["mid-cell"]}`}>
          <Component {...props} />
        </div>
      </div>
    </div>
  );
};

export default Body;
