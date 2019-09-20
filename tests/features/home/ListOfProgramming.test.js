import React from 'react';
import { shallow } from 'enzyme';
import { ListOfProgramming } from '../../../src/features/home/ListOfProgramming';

describe('home/ListOfProgramming', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ListOfProgramming {...props} />
    );

    expect(
      renderedComponent.find('.home-list-of-programming').length
    ).toBe(1);
  });
});
