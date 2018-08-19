import { connect } from 'react-redux';
import { Signup } from '../../store/actions/index';

const mapStateToProps = (state) => {
  const {user} = state;
  return {
    user,
    isLoading: user.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signup: (email, username, password) => {
    dispatch(Signup(email, username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
