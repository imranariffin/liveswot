import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import RequestError from './RequestError';

describe('(Component) RequestError', () => {
  it('should display Error as string', () => {
    const err1 = {message: 'message', stack: 'stack', toString: spy()};
    const err2 = {message: 'message', stack: 'stack', toString: spy()};
    const clearError = (errorType) => spy();
    const errorType = 'SOME_ERR_TYPE';
    const errors = [err1, err2];
    const props = {errors, clearError, errorType};

    shallow(<RequestError {...props}/>);

    errors.forEach(err => expect(err.toString.calledOnce).to.equal(true));
  });
});