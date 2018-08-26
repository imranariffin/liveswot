import React from 'react';
import PropTypes from 'prop-types';
import styles from './SwotItem.scss';
import VoteButton from '../VoteButton';

const SwotItem = (props) => {
  const profileImg = 'https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/25507801_10214600576038909_8129308682006032833_n.jpg?oh=f6a69fa4bb09fa9a11b1e87c176dc732&oe=5B382481';
  const {swotItem, votes, index, hidden} = props;

  return (
    <div className={`${styles.root} ${index === 0 ? styles.first : ''}`}>
      <div className={styles.left}>
        <div></div>
      </div>
      <div className={styles.mid}>{swotItem.text}</div>
      <div className={styles.right}>
        <div className={styles['vote-container']}>
          <VoteButton
            score={votes}
            swotItemId={swotItem.swotItemId}
          />
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className={`${styles["swot-item"]} ${hidden ? '' : styles.show} ${index === 0 ? styles.first : ''}`}>
  //     <div className={`${styles["swot-item-row"]}`}>
  //       <div className={`${styles.left}`}>
  //         <div className={styles["creator-img-wrapper"]}>
  //           <img
  //             className={`${styles["creator-img"]}`}
  //             src={profileImg}
  //             alt={`item creator: ${swotItem.creatorId}`}
  //           />
  //         </div>
  //       </div>
  //       <div className={`${styles["text-column"]}`}>
  //         <span>{`${swotItem.text}`}</span>
  //       </div>
  //       <div className={`${styles["vote-column"]}`}>
  //         <VoteButton
  //           animate={animate}
  //           score={votes}
  //           swotItemId={swotItem.swotItemId}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
};

SwotItem.propTypes = {
  swotItem: PropTypes.shape({
    swotItemId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    creatorId: PropTypes.number.isRequired,
  }).isRequired,
};

export default SwotItem;