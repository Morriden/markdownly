import React from 'react';
import { shallow } from 'enzyme';
import MarkdownList from './MarkdownList';


describe('MarkdownList component', () => {
  it('renders MarkdownList', () => {
    const wrapper = shallow(<MarkdownList />);
    expect(wrapper).toMatchSnapshot();
  });
});
