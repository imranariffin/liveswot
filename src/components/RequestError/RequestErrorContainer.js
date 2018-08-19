import {connect} from 'react-redux';
import {ClearError} from '../../store/actions';

export const mapStateToProps = (state, ownProps) => {
  return {...ownProps};
};

export const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(ClearError('user'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);