import React from 'react';
import PropTypes from 'prop-types';

import SwotItem from '../SwotItem';
import {localizedText} from '../../utils/index';
import styles from './SwotCard.scss';
import Card from "../Card/Card";
import TextInput from "../TextInput/TextInput";

const DURATION_INVISIBLE = 300;

class SwotCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hidden: false};
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {swotId, text, cardType} = this.props;
    this.props.onSubmit(swotId, text, cardType);
  };

render() {
    const {items, text, cardType, onChange} = this.props;
    const cardStyles = {
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: '5px 5px',
    };

    return (
      <div className={styles.root}>
        <form method="POST" onSubmit={this.onSubmit}>
          <div className={`input-field ${styles["input-field"]}`}>
            <div className={styles['text-input-container']}>
              <TextInput
                label={`Add ${localizedText().swot.cardType[cardType]}`}
                text={text}
                onChange={onChange}
                required={true}
              />
            </div>
          </div>
        </form>
        <div className={styles['card-container']}>
          <Card style={cardStyles}>{
            (items.length > 0 &&
              items.map((item, i) => {
                return (
                  <SwotItem
                    hidden={this.state.hidden}
                    swotItem={item}
                    key={i}
                    index={i}
                  />
                );
              }))
            || <h1>{localizedText().swot.cardType[cardType]}</h1>
          }</Card>
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
