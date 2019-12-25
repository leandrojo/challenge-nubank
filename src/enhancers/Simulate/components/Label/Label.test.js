/* eslint-env jest */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import theme from 'theme';

import Label from './Label';

describe('Simulate/Label', () => {
  it('with text', () => {
    const Component = () => (
      <ThemeProvider theme={theme}>
        <Label>First Deposit</Label>
      </ThemeProvider>
    );

    const expected = renderer.create(<Component />).toJSON();

    expect(expected).toMatchSnapshot();
  });
});
