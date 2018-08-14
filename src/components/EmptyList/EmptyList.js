import React from 'react';
import styles from './EmptyList.scss';

const EmptyList = ({isLoading}) => {
  let text = 'No SWOT to display';

  if (isLoading) {
    text = 'Loading ...';
  }

  return (
    <div>
      <div className={`row ${styles.root}`}>
        <div className={`col m12 s12 l12`}>
          <div className={`card ${styles.card}`}>
            <div className={`card-content ${styles["card-content"]}`}>
              <div className={`row ${styles["compact-row"]} ${styles.layout}`}>
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