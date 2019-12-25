/* eslint-disable import/no-extraneous-dependencies */

import { action } from '@storybook/addon-actions';

import React from 'react';
import styled from 'styled-components';

import { Box } from '..';
import NumberControl from './NumberControl';

export default {
  title: 'components/NumberControl',
};

export const actions = () => (
  <NumberControl
    onClickIncrement={action('increment')}
    onClickDecrement={action('decrement')}
  />
);

actions.story = {
  name: 'actions',
};

const Variable = styled(Box)`
  align-items: center;
  width: 240px;

  p {
    font-style: italic;
    margin-left: 20px;
  }
`;

export const disabled = () => (
  <Box css={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <Variable>
      <NumberControl disabled={[true, false]} />
      <p>Disable minus</p>
    </Variable>
    <Variable>
      <NumberControl disabled={[true, true]} />
      <p>Disable all</p>
    </Variable>
    <Variable>
      <NumberControl disabled={[false, true]} />
      <p>Disable plus</p>
    </Variable>
  </Box>
);

disabled.story = {
  name: 'disabled',
};
