/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */

import React from 'react';
import styled from 'styled-components';

import { Input as Component } from '..';
import Form from './Form';

const Input = styled(Component)`
  border-bottom: 2px solid black;
`;

export default {
  title: 'components/Form',
};

export const custom = () => (
  <Form
    css={`
      background: #fff;
      display: block;
      padding: 20px;

      p:first-of-type {
        margin: 20px 0 0;
      }
    `}
  >
    <Input placeholder="This is a Input text." />
    <p>Form is like Box component, a simple styled component customize. Here is custom background and padding.</p>
    <p>Use only as wrapper.</p>
  </Form>
);

custom.story = {
  name: 'custom',
};
