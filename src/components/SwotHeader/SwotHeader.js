import React from 'react';
import styles from './SwotHeader.scss';
import PropTypes from 'prop-types';
import AddMember from './components/AddMember';
import DropDown from './components/DropDown';

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

    return (
      <div>
        <div className={`row ${styles.root}`}>
          <div className={`col m12 s12 l12`}>
            <div className={`card ${styles.card}`}>
              <div className={`card-content ${styles["card-content"]}`}>
                <div className={`row ${styles["compact-row"]} ${styles.layout}`}>
                  <div className={styles.left}>
                    <div className={styles["swot-img-wrapper"]}>
                    <span>
                      {(
                        swotImg &&
                        <img
                          alt={title}
                          className={`responsive-img ${styles["swot-img"]}`}
                          src={swotImg}
                        />
                      ) || (
                        <div className={styles["swot-img-fallback-wrapper"]}>
                          <div className={styles["swot-img-fallback"]}>
                            ST
                          </div>
                        </div>
                      )}
                    </span>
                    </div>
                  </div>
                  <div className={styles.mid}>
                    <div className={`row ${styles["compact-row"]}`}>
                      <div className={`row ${styles["swot-header"]} ${styles["compact-row"]}`}>
                        <div className={`col s10 m12 l12 ${styles["nav-col"]}`}>
                        <span className={`card-title activator ${styles["card-title"]}`}>
                          {title}
                        </span>
                        </div>
                      </div>
                      <div className={`row ${styles["compact-row"]}`}>
                        <div className={`col s12 m12 l12 ${styles["nav-col"]}`}>
                          <span>{description}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles["swot-header-right"]} ${styles.right}`}>
                  <span className={`card-title activator ${styles["card-title"]}`}>
                    <span className={styles["swot-meta"]}>
                      created by {creator.userName} at {swotDateCreated}
                    </span>
                    <i
                      id={`kebab`}
                      className={`material-icons right`}
                      onClick={() => this.toggleDropDown()}
                    >
                      more_vert
                    </i>
                  </span>
                  </div>
                </div>
                <DropDown active={this.state.active} showAddMember={this.showAddMember}/>
              </div>
            </div>
          </div>
        </div>
        <AddMember
          hidden={this.state.addMemberHidden}
          hide={this.hideAddMember}
          userName={this.state.userName}
          updateUserName={this.updateUserName}
        />
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