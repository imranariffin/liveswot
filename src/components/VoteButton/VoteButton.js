import React from 'react';
import PropTypes from 'prop-types';
import styles from './VoteButton.scss';


const VoteButton = ({score, isUpActive, isDownActive, swotItemId, userId, onVoteItem, animate}) => (
  <div className={styles["vote-container-styles"]}>
    <div className={styles["vote-up-container-styles"]}>
      <div
        className={`${styles["vote-up-styles"]} ${isUpActive ? styles.active : ''}`}
        onClick={() => {
          onVoteItem(swotItemId, 'up', userId);
          animate();
        }}
      >
      </div>
    </div>
    <div className={styles["score-container-styles"]}
    >{
      score
    }</div>
    <div className={styles["vote-down-container-styles"]}>
      <div
        className={`${styles["vote-down-styles"]} ${isDownActive ? styles.active : ''}`}
        onClick={() => {
          onVoteItem(swotItemId, 'down', userId);
          animate();
        }}
      >
      </div>
    </div>
  </div>
);

VoteButton.propTypes = {
  swotItemId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  isUpActive: PropTypes.bool.isRequired,
  isDownActive: PropTypes.bool.isRequired,
  onVoteItem: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default VoteButton;
