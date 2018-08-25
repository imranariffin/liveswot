import React from 'react';
import styles from './SwotHeader.scss';
import PropTypes from 'prop-types';
import AddMember from './components/AddMember';
import Card from '../Card/Card';
import Kebab from '../Kebab/Kebab';
import DropDown from '../DropDown';

class SwotHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMemberHidden: true,
      dropDownHidden: true,
      userName: '',
    };
  }

  hideAddMember = () => this.setState({addMemberHidden: true});

  showAddMember = () => this.setState({addMemberHidden: false});

  updateUserName = (event) => this.setState({userName: event.target.value});

  hideDropDown = (event) => {
    event.preventDefault();
    this.setState({dropDownHidden: true}, () => document.removeEventListener('click', this.hideDropDown));
  };

  showDropDown = () => {
    this.setState({dropDownHidden: false}, () => document.addEventListener('click', this.hideDropDown));
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.hideDropDown);
  }

  render() {
    const {title, description, creator, swotDateCreated} = this.props;
    // const swotImg = 'https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/25507801_10214600576038909_8129308682006032833_n.jpg?oh=f6a69fa4bb09fa9a11b1e87c176dc732&oe=5B382481';
    const swotImg = '';
    const items = [{
      text: 'one',
      icon: 'edit'
    }, {
      text: 'two',
      icon: 'close',
    }, {
      text: 'Add people',
      icon: 'add',
      iconColor: 'blue',
      onClick: this.showAddMember,
    }, {
      text: 'four',
      icon: 'adjust',
      iconColor: 'red',
    }];

    return (
      <div className={styles.root}>
        <Card>
          <div className={styles.layout}>
            <div className={styles.left}></div>
            <div className={styles['card-content']}>
              <div className={styles.title}>{title}</div>
              <div className={styles.description}>{description}</div>
            </div>
          </div>
        </Card>
        <AddMember
          hidden={this.state.addMemberHidden}
          hide={this.hideAddMember}
          userName={this.state.userName}
          updateUserName={this.updateUserName}
        />
        <div className={styles['kebab-container']}>
          <Kebab onClick={this.showDropDown}/>
        </div>
        <DropDown hidden={this.state.dropDownHidden} items={items}/>
      </div>
    );
  }
}

SwotHeader.propTypes = {
  creator: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  swotDateCreated: PropTypes.string.isRequired,
};

export default SwotHeader;