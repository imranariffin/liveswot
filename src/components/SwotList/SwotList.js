import React from 'react';
import styles from './SwotList.scss';
import Kebab from '../Kebab/';
import {Link} from 'react-router-dom';

class SwotList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({active: true});
  }

  onMouseLeave() {
    this.setState({active: false});
  }

  render() {
    // const swotImg = '';
    const {swotId, title, description, swotDateCreated, creatorUserName} = this.props;

    return (
      <Link
        to={`swots/${swotId}`}
        className={styles.root}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className={styles.row}>
          <div className={styles.creator}>
            <div className={styles.container}>
              <div className={styles.img}>
                <span className={styles.hey}>S</span>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
          </div>
          <div className={`${styles.actions} ${this.state.active ? styles.active : ''}`}>
            <Kebab/>
          </div>
        </div>
      </Link>
    );
  }
}

export default SwotList;
