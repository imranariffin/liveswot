import React from 'react';
import PropTypes from 'prop-types';
import styles from './VoteButton.scss';

const VoteButton = (props) => {
  const {
    score,
    isUpActive,
    isDownActive,
    swotItemId,
    userId,
    onVoteItem
  } = props;

  const onVoteItemDown = () => onVoteItem(swotItemId, 'down', userId);
  const onVoteItemUp = () => onVoteItem(swotItemId, 'up', userId);

  return (
    <div className={styles.root}>
      <div
        className={`${styles['vote-up']} ${isUpActive ? styles.active : ''}`}
        onClick={onVoteItemUp}
      >
      </div>
      <div className={styles['score-container']}>
        {score}
      </div>
      <div
        className={`${styles['vote-down']} ${isDownActive ? styles.active : ''}`}
        onClick={onVoteItemDown}
      >
      </div>
    </div>
  );
};

VoteButton.propTypes = {
  swotItemId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  isUpActive: PropTypes.bool.isRequired,
  isDownActive: PropTypes.bool.isRequired,
  onVoteItem: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default VoteButton;
