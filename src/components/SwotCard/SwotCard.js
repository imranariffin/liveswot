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
    const cardStyles = {height: '100%', overflowY: 'auto', overflowX: 'hidden'};

    return (
      <div className={styles.root}>
        <form method="POST" onSubmit={ (e) => {
          e.preventDefault();
          onSubmit(swotId, text, cardType);
        } }>
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
          <Card style={cardStyles}>
            <div>
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
          </Card>
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
