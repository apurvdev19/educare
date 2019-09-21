import React from 'react';
import { shallow } from 'enzyme';
import { WelcomePage } from '../../../src/features/java-script/WelcomePage';

describe('java-script/WelcomePage', () => {
  it('renders node with correct class name', () => {
    const props = {
      javaScript: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <WelcomePage {...props} />
    );

    expect(
      renderedComponent.find('.java-script-welcome-page').length
    ).toBe(1);
  });
});
