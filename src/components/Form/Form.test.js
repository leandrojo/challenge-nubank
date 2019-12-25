/* eslint-env jest */

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import theme from 'theme';

import { Input } from '..';
import Form from './Form';

describe('Form', () => {
  it('with initial value', () => {
    const Component = () => {
      const [value, onChange] = useState(1000);

      return (
        <ThemeProvider theme={theme}>
          <Form>
            <Input name="firstDeposit" onChange={onChange} value={value} />
          </Form>
        </ThemeProvider>
      );
    };

    const expected = renderer.create(<Component />).toJSON();

    expect(expected).toMatchSnapshot();
  });
});
