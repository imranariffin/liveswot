import { connect } from 'react-redux';
import { Login } from '../../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
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
