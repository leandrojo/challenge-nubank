/* eslint-env jest */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import theme from 'theme';

import NumberControl from './NumberControl';

describe('NumberControl', () => {
  it('default', () => {
    const Component = () => (
      <ThemeProvider theme={theme}>
        <NumberControl />
      </ThemeProvider>
    );

    const expected = renderer.create(<Component />).toJSON();

    expect(expected).toMatchSnapshot();
  });
});
