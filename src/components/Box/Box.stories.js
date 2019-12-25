/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import Box from './Box';

export default {
  title: 'components/Box',
};

export const custom = () => (
  <Box
    css={`
      background: #fff;
      border: 1px dotted blue;
      display: block;
      padding: 20px;
    `}
  >
    <p>Box is open styled component custom. Here is custom background, border and padding.</p>
    <p>Use only as wrapper.</p>
  </Box>
);

custom.story = {
  name: 'custom',
};
