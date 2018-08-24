import React from 'react';
import styles from './SwotHeader.scss';
import PropTypes from 'prop-types';
import AddMember from './components/AddMember';
import DropDown from '../DropDown';
import Card from "../Card/Card";
import Kebab from "../Kebab/Kebab";

class SwotHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      addMemberHidden: true,
      userName: '',
    };

    this.hideAddMember = this.hideAddMember.bind(this);
    this.showAddMember = this.showAddMember.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }

  hideAddMember() {this.setState({addMemberHidden: true});}

  showAddMember() {this.setState({addMemberHidden: false});}

  updateUserName(e) {this.setState({userName: e.target.value});}

  hideDropDown = (event) => {
    if (event.target.id !== 'kebab') {
      this.setState({active: false});
    }
  };

  toggleDropDown = () => {
    this.setState({active: !this.state.active});
  };

  componentDidMount() {
    document.addEventListener('click', this.hideDropDown)
  }

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
          <Kebab/>
        </div>
        <DropDown hidden={true} items={items}/>
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