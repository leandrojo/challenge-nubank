/* eslint-env jest */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import theme from 'theme';

import Pane from './Pane';

describe('Pane', () => {
  it('with text', () => {
    const Component = () => (
      <ThemeProvider theme={theme}>
        <Pane>Test Message</Pane>
      </ThemeProvider>
    );

    const expected = renderer.create(<Component />).toJSON();

    expect(expected).toMatchSnapshot();
  });
});
