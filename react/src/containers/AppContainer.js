import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (state, ownProps) => {
  return {};
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
