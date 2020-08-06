import React from 'react';
import { shallow } from 'enzyme';
import MarkdownList from './MarkdownList';
import AppProvider from '../../provider/AppProvider';


describe('MarkdownList component', () => {
  it('renders MarkdownList', () => {
    const wrapper = shallow(<AppProvider><MarkdownList /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
