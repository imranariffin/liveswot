import React from 'react';
import styles from './EmptyList.scss';

const EmptyList = ({isLoading}) => {
  let text = 'No SWOT to display';

  if (isLoading) {
    text = 'Loading ...';
  }

  return (
    <div>
      <div className={`${styles.root}`}>
        <div className={``}>
          <div className={`${styles.card}`}>
            <div className={`${styles["card-content"]}`}>
              <div className={`${styles["compact-row"]} ${styles.layout}`}>
                <h6>{text}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyList;