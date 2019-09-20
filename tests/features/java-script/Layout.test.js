import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/java-script';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.java-script-layout').length).toBe(1);
});
