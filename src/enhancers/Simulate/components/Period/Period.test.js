/* eslint-env jest */

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import theme from 'theme';

import Period from './Period';

describe('Simulate/Period', () => {
  it('with initial value', () => {
    const Component = () => {
      const [value, onChange] = useState(10);
      return (
        <ThemeProvider theme={theme}>
          <Period max={20} min={1} onChange={onChange} value={value} />
        </ThemeProvider>
      );
    };

    const expected = renderer.create(<Component />).toJSON();

    expect(expected).toMatchSnapshot();
  });
});
