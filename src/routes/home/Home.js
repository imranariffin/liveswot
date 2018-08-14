import React from 'react';
import PropTypes from 'prop-types';
import EmptyList from '../../components/EmptyList';
import SwotList from '../../components/SwotList';
import styles from './Home.scss';
import CreateSwot from '../../components/CreateSwot';

class Home extends React.Component {

  componentDidMount() {
    this.props.onMountFetchSwots();
  }

  render() {
    const {swots, isLoading, userSwots} = this.props;

    return (
      <div>
        <CreateSwot/>
        <div>
          <h5>Your swots</h5>
          {(
            userSwots.length > 0 &&
            userSwots.map((swot, i) => (
              <div className={styles["list-container"]} key={`userSwot-${i}`}>
                <SwotList swot={swot}/>
              </div>))
          ) || <EmptyList isLoading={isLoading} />}
        </div>
        <div>
          <h5>Swots you are contributing to</h5>
          {(
            swots.length > 0 &&
            swots.map((swot, i) => (
              <div style={{marginBottom: '1px'}} key={`swot-${i}`}>
                <SwotList swot={swot}/>
              </div>))
          )
          || (<EmptyList isLoading={isLoading} />)}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  swots: PropTypes.arrayOf(PropTypes.shape({
    swotId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    creatorId: PropTypes.number.isRequired,
  })).isRequired,
  userSwots: PropTypes.arrayOf(PropTypes.shape({
    swotId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    creatorId: PropTypes.number.isRequired,
  })).isRequired,
};

export default Home;