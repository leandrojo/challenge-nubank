/* eslint-env jest */

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import theme from 'theme';

import FirstDeposit from './FirstDeposit';

describe('Simulate/FirstDeposit', () => {
  it('with initial value', () => {
    const Component = () => {
      const [value, onChange] = useState(1000);

      return (
        <ThemeProvider theme={theme}>
          <FirstDeposit onChange={onChange} value={value} />
        </ThemeProvider>
      );
    };

    const expected = renderer.create(<Component />).toJSON();

    expect(expected).toMatchSnapshot();
  });
});
