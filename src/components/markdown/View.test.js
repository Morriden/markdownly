import React from 'react';
import { shallow } from 'enzyme';
import View from './View';
import AppProvider from '../../provider/AppProvider';

describe('View component', () => {
  it('renders View', () => {
    const wrapper = shallow(<AppProvider><View /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
