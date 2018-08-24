import React from 'react';
import {spy, assert} from 'sinon';
import {shallow} from 'enzyme';
import Kebab from './Kebab';

describe('Kebab', () => {
  it('should call `onClick` when clicked', () => {
    const onClick = spy();
    const wrapper = shallow(<Kebab onClick={onClick}/>);
    wrapper.simulate('click');
    assert.calledOnce(onClick);
  });
});