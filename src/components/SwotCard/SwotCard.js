import React from 'react';
import PropTypes from 'prop-types';

import SwotItem from '../SwotItem';
import {localizedText} from '../../utils/index';
import styles from './SwotCard.scss';

const DURATION_INVISIBLE = 300;

class SwotCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hidden: false};
    this.animate = this.animate.bind(this);
  }

  animate() {
    this.setState({hidden: true});
    setTimeout(() => {
      this.setState({hidden: false});
    }, DURATION_INVISIBLE);
  }

  render() {
    const {swotId, items, text, cardType, onChange, onSubmit} = this.props;

    return (
      <div>
        <form method="POST" onSubmit={ (e) => {
          e.preventDefault();
          onSubmit(swotId, text, cardType);
        } }>
          <div className={`input-field ${styles["input-field"]}`}>
            <input
              id={`input-${cardType}`}
              className={`${styles.validate} ${styles.input}`}
              value={text}
              type='text'
              onChange={onChange}
            />
            <label
              className={text ? styles.active : ''}
              htmlFor={`input-${cardType}`}
            >
              {`Add ${localizedText().swot.cardType[cardType]}`}
            </label>
          </div>
        </form>
        <div className={`${styles["card-panel-wrapper"]}`}>
          <div className={`card-panel ${styles["card-panel"]}`}>
            {
              (items.length > 0 &&
                (<ul className={styles["swot-list"]}>{
                  items.map((item, i) => {
                    return (
                      <SwotItem
                        hidden={this.state.hidden}
                        animate={this.animate}
                        swotItem={item}
                        key={i}
                        index={i}
                      />
                    );
                  })
                }</ul>)
              )
              || <h1>{localizedText().swot.cardType[cardType]}</h1>
            }
          </div>
        </div>
      </div>
    );
  }
}

SwotCard.propTypes = {
  swotId: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    swotId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  cardType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SwotCard;
