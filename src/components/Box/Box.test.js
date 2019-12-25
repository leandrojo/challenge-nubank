/* eslint-env jest */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import theme from 'theme';

import Box from './Box';

describe('Box', () => {
  it('with text', () => {
    const Component = () => {
      const content = 'Test Message';

      return (
        <ThemeProvider theme={theme}>
          <Box>{content}</Box>
        </ThemeProvider>
      );
    };

    const expected = renderer.create(<Component />).toJSON();

    expect(expected).toMatchSnapshot();
  });
});
