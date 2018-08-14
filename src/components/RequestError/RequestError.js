import styles from './RequestError.scss';
import React from 'react';

class RequestError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {closed: false};

    this.close = this.close.bind(this);
  }

  close() {this.setState({closed: true});}

  render() {
    const {errors} = this.props;
    const {closed} = this.state;
    const hidden = closed || errors.length === 0;

    return (
      <div className={styles.wrapper}>
        <div
          className={`${styles.hide} ${hidden ? styles.hidden: ''}`}
          onClick={() => this.close()}
        >
        </div>
        <div
          className={`${styles.container} ${hidden ? styles.hidden: ''}`}
          onClick={() => this.close()}
        >
          <p>Error(s):</p>
          {errors.map((error, i) => (
            <p key={i}>{error.toString()}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default RequestError;