import React from 'react';
import {spy, assert} from 'sinon';
import {shallow} from 'enzyme';
import DropDownItem from './DropDownItem';

describe('Kebab', () => {
  it('should call `onClick` when clicked', () => {
    const onClick = spy();
    const text = 'some text';
    const wrapper = shallow(<DropDownItem onClick={onClick} text={text}/>);
    wrapper.simulate('click');
    assert.calledOnce(onClick);
  });
});