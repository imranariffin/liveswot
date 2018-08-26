import {connect} from 'react-redux';
import {AddMember} from '../../../../store/actions/index';

export const mapStateToProps = (state, props) => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  addMember: (userName) => {
    if (!userName) {
      return;
    }

    const {swotId} = ownProps.match.params;
    dispatch(AddMember(swotId, userName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);