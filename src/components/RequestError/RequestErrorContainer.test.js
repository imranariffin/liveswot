import {spy, assert} from 'sinon';
import {expect} from 'chai';
import {mapDispatchToProps} from './RequestErrorContainer';
import {ClearError} from "../../store/actions";

describe('(RequestErrorContainer) mapDispatchToProps', () => {
  describe('clearError', () => {
    it('should contain a `clearError` function', () => {
      const dispatch = spy();
      const ownProps = {};
      const props = mapDispatchToProps(dispatch, ownProps);

      expect(props.clearError).to.be.a('function');
    });

    it('should dispatch `CLEAR_ERROR` action when called', () => {
      const dispatch = spy();
      const ownProps = {};
      const errorType = 'user';
      const props = mapDispatchToProps(dispatch, ownProps);

      props.clearError(errorType)();

      assert.calledOnce(dispatch);
      assert.calledWith(dispatch, ClearError(errorType));
    });
  });
});