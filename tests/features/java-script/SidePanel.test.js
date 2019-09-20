import React from 'react';
import { shallow } from 'enzyme';
import { SidePanel } from '../../../src/features/java-script/SidePanel';

describe('java-script/SidePanel', () => {
  it('renders node with correct class name', () => {
    const props = {
      javaScript: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SidePanel {...props} />
    );

    expect(
      renderedComponent.find('.java-script-side-panel').length
    ).toBe(1);
  });
});
