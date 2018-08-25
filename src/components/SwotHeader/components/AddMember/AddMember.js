import React from 'react';
import styles from './AddMember.scss';

const AddMember = (props) => {
  const {
    userName='',
    updateUserName,
    hidden = false,
    hide,
    addMember,
  } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    addMember(userName);
    hide();
  };

  const onClickClose = () => hide();

  return (
    <div className={`${styles.root} ${hidden ? styles.hidden : ''}`}>
      <form className={styles.form} method={`POST`} onSubmit={onSubmit}>
        <input
          className={styles.input}
          value={userName}
          onChange={updateUserName}
          type={`text`}
          placeholder={'Add people to SWOT by username'}
        />
        <div
            onClick={onClickClose}
            className={styles["close-button"]}>
        </div>
      </form>
    </div>
  );
};

export default AddMember;