import React from 'react';
import styles from './AddMember.scss';

const AddMember = ({
                     userName='',
                     updateUserName,
                     hidden = false,
                     hide,
                     addMember,
}) => {
  return (
    <div className={`row ${styles.row} ${hidden ? styles.hidden : ''}`}>
      <div className={`col s12 m12 l12 ${styles["no-padding"]}`}>
        <form method={`POST`} onSubmit={(e) => {
          e.preventDefault();
          addMember(userName);
          hide();
        }}>
          <div className={styles["input-container"]}>
            <input
              value={userName}
              onChange={updateUserName}
              type={`text`}
              placeholder={'Add people to SWOT by username'}
              className={styles.input}
            />
            <div
                id={`some-id`}
                onClick={() => hide()}
                className={styles["close-button"]}>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMember;