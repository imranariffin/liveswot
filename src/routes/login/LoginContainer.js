import { connect } from 'react-redux';

import { Login } from '../../store/actions/index';


const mapStateToProps = (state) => {
  const {user} = state;
  return {
    user: user,
    isLoading: user.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(Login(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
