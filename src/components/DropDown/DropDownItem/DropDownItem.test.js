import React from 'react';
import {spy, assert} from 'sinon';
import {shallow} from 'enzyme';
import DropDownItem from './DropDownItem';

describe('Kebab', () => {
  it('should call `onClick` when clicked', () => {
    const onClick = spy();
    const wrapper = shallow(<DropDownItem onClick={onClick}/>);
    wrapper.simulate('click');
    assert.calledOnce(onClick);
  });
});