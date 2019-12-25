/* eslint-env jest */

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import theme from 'theme';

import Range from './Range';

describe('Range', () => {
  it('with initial value', () => {
    const Component = () => {
      const [value, onChange] = useState(500);

      return (
        <ThemeProvider theme={theme}>
          <Range max={1000} min={1} name="period" onChange={onChange} value={value} />
        </ThemeProvider>
      );
    };

    const expected = renderer.create(<Component />).toJSON();

    expect(expected).toMatchSnapshot();
  });
});
