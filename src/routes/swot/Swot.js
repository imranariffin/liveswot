import React, { Component } from 'react';

import SwotCard from '../../components/SwotCard';
import SwotHeader from '../../components/SwotHeader';
import Loading from '../../components/Loading';
import styles from './Swot.scss';


export default class Swot extends Component {
	render() {

	  const {swot, swots} = this.props;

	  if (swots.isLoading) {
	    return <Loading/>;
    }

    if (!swot) {
      return <div>404</div>;
    }

    if (swots.errors.length > 0) {
      return <div>{`${swots.errors}`}</div>
    }

		return (
			<div>
				<SwotHeader/>
				<div className={`row ${styles["compact-row"]}`}>
					<div className='col m6 s12'>
						<SwotCard cardType='strength'/>
					</div>
					<div className='col m6 s12'>
						<SwotCard cardType='weakness'/>
					</div>
				</div>
        <div className={`row ${styles["compact-row"]}`}>
					<div className='col m6 s12'>
						<SwotCard cardType='opportunity'/>
					</div>
					<div className='col m6 s12'>
						<SwotCard cardType='threat'/>
					</div>
				</div>
			</div>
		);
	}

  componentDidMount() {
	  this.props.onMountFetchItems();
	  this.props.onMountFetchVotes();
	  this.props.onMountFetchSwots();
	  this.props.onMountFetchMembers();
  }
}
